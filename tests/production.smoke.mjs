import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { on } from "node:events";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = new URL("../", import.meta.url);
const locales = ["fr", "en"];

async function waitForOrigin(stdout) {
  let output = "";
  const chunks = on(stdout.setEncoding("utf8"), "data", {
    close: ["end"],
    signal: AbortSignal.timeout(30_000),
  });

  for await (const [chunk] of chunks) {
    output += chunk;
    const origin = output.match(/http:\/\/127\.0\.0\.1:\d+(?=\s)/)?.[0];
    if (origin) return origin;
  }

  throw new Error(`Next.js exited before reporting its local URL.\n${output}`);
}

test("production routing", async (t) => {
  const manifest = JSON.parse(
    await readFile(new URL(".next/prerender-manifest.json", projectRoot), "utf8"),
  );
  const next = fileURLToPath(import.meta.resolve("next/dist/bin/next"));
  const server = spawn(process.execPath, [next, "start", "--hostname", "127.0.0.1", "--port", "0"], {
    cwd: projectRoot,
    stdio: ["ignore", "pipe", "pipe"],
  });
  const closed = new Promise((resolve) => server.once("close", resolve));
  let serverErrors = "";
  server.on("error", (error) => { serverErrors += `${error.message}\n`; });
  server.stderr.setEncoding("utf8").on("data", (chunk) => { serverErrors += chunk; });

  t.after(async () => {
    server.kill();
    const forceStop = setTimeout(() => server.kill("SIGKILL"), 3_000).unref();
    try {
      await closed;
    } finally {
      clearTimeout(forceStop);
    }
  });

  let origin;
  try {
    origin = await waitForOrigin(server.stdout);
  } catch (error) {
    throw new Error(`Could not start the Next.js production server.\n${serverErrors}`, { cause: error });
  }

  const request = (path, headers) => fetch(new URL(path, origin), {
    headers,
    redirect: "manual",
    signal: AbortSignal.timeout(10_000),
  });

  for (const locale of locales) {
    await t.test(`/contact redirects to /${locale}/contact`, async () => {
      const response = await request("/contact", { "Accept-Language": locale });
      await response.arrayBuffer();
      assert.ok([301, 302, 303, 307, 308].includes(response.status), `Unexpected status ${response.status}`);
      const location = response.headers.get("location");
      assert.ok(location, "Missing redirect location");
      assert.equal(new URL(location, origin).href, `${origin}/${locale}/contact`);
    });
  }

  await t.test("serves the CV as a PDF without redirecting", async () => {
    const response = await request("/Paul_Nguyen_CV.pdf");
    const body = Buffer.from(await response.arrayBuffer());
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^application\/pdf(?:;|$)/i);
    assert.equal(body.subarray(0, 5).toString("ascii"), "%PDF-");
  });

  for (const locale of locales) {
    for (const suffix of ["", "/contact"]) {
      const path = `/${locale}${suffix}`;
      await t.test(`${path} serves prerendered HTML in ${locale}`, async () => {
        assert.equal(manifest.routes[path]?.initialRevalidateSeconds, false, `${path} should be statically prerendered`);
        const response = await request(path);
        const html = await response.text();
        assert.equal(response.status, 200);
        assert.match(html, new RegExp(`<html\\b[^>]*\\blang="${locale}"`));
      });
    }
  }
});
