import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Guards the Phase 0 blocker: src/proxy.ts once shipped an allow-list matcher
 * (`['/', '/(fr|en)/:path*']`), so unprefixed paths never reached the middleware.
 * `/contact` and `/anything` then matched `[locale]` and rendered the French home page
 * under `<html lang="contact">`.
 *
 * WHY READ THE FILE AS TEXT instead of importing it:
 *
 *   1. It cannot be imported. `next-intl/middleware` resolves `next/server`, and
 *      node_modules/next/package.json has no `exports` field, so Node's ESM resolver
 *      does not append `.js` and the import throws.
 *   2. More importantly, text IS the contract. Next never evaluates this file — it
 *      parses the source with SWC (`extractExportedConstValue`), which is exactly why
 *      `matcher` must stay a statically analysable literal. If someone wrote
 *      `matcher: SHARED_CONSTANT`, an import-based test would read the right value and
 *      pass while the build silently lost the matcher. This test fails loudly instead.
 *
 * FIDELITY CAVEAT: the RegExp below is an approximation. Next wraps the matcher with an
 * optional `/_next/data/…` prefix, an optional `.json` suffix and a trailing `[/#?]`.
 * Verified against .next/server/functions-config-manifest.json on Next 16.1.1, where the
 * compiled form is:
 *   ^(?:\/(_next\/data\/[^/]{1,}))?(?:\/((?!api|_next|_vercel|.*\..*).*))(\.json)?[\/#\?]?$
 * Behaviour is identical on every path below; the only divergence found is
 * `/_next/data/*` (Pages Router only, unused here). Re-verify against that manifest
 * after a major Next upgrade.
 *
 * RESIDUAL GAP: this proves the pattern is correct, not that Next is loading this file.
 * Renaming or moving src/proxy.ts would leave this test green.
 */

const PROXY_PATH = fileURLToPath(new URL("../src/proxy.ts", import.meta.url));

function extractMatcher(): string {
    const source = readFileSync(PROXY_PATH, "utf8");
    const literals = [...source.matchAll(/matcher:\s*(["'])(.*?)\1/g)];

    if (literals.length !== 1) {
        throw new Error(
            `Expected exactly one string matcher literal in src/proxy.ts, found ${literals.length}. ` +
            `If the matcher became an array, this test must be updated rather than silently ` +
            `testing only the first entry.`
        );
    }

    // The on-disk source escapes the dot as `\\.`; JSON.parse turns that back into a
    // single backslash, giving the value Next actually compiles.
    return JSON.parse(`"${literals[0][2]}"`);
}

const matcher = extractMatcher();
const matches = (path: string) => new RegExp(`^${matcher}$`).test(path);

/** Middleware must run: these get the locale redirect. */
const SHOULD_MATCH = [
    "/",
    "/fr",
    "/en",
    "/contact",
    "/fr/contact",
    "/en/contact",
    "/anything",
    "/fr/anything",
    "/a/b/c",
    "/contact/",
];

/** Middleware must be bypassed: internals and real static assets. */
const SHOULD_NOT_MATCH = [
    "/api",
    "/api/health",
    "/_next/static/chunks/main.js",
    "/_next/image",
    "/_vercel/insights/script.js",
    "/Paul_Nguyen_CV.pdf",
    "/caricature.jpg",
    "/favicon.ico",
    "/robots.txt",
    "/sitemap.xml",
];

describe("proxy matcher", () => {
    it("exposes exactly one statically analysable string literal", () => {
        expect(() => extractMatcher()).not.toThrow();
        expect(matcher.startsWith("/")).toBe(true);
    });

    it.each(SHOULD_MATCH)("runs the middleware for %s", (path) => {
        expect(matches(path)).toBe(true);
    });

    it.each(SHOULD_NOT_MATCH)("bypasses the middleware for %s", (path) => {
        expect(matches(path)).toBe(false);
    });

    it("covers the two paths from the original bug", () => {
        // With the old allow-list matcher both of these were skipped, so no redirect
        // happened and `[locale]` swallowed them as a locale segment.
        expect(matches("/contact")).toBe(true);
        expect(matches("/anything")).toBe(true);
    });

    it("serves the CV and the portrait without redirecting them", () => {
        // The `.*\..*` clause exists for these two: they are linked from the Hero, and
        // redirecting them to /fr/... would 404 the CV download.
        expect(matches("/Paul_Nguyen_CV.pdf")).toBe(false);
        expect(matches("/caricature.jpg")).toBe(false);
    });

    it("excludes by prefix, not by path segment — a known trap", () => {
        // The negative lookahead matches "api" at the start of "apitest", so a future
        // page at /apis or /apiary would silently bypass i18n. Documented here so the
        // next person trips over it deliberately rather than in production.
        expect(matches("/apitest")).toBe(false);
        expect(matches("/_nextfoo")).toBe(false);
    });
});
