import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

/**
 * Key drift between locale files is the most likely regression in this app: adding a
 * string to fr.json and forgetting en.json produces no build error, no lint error, and
 * no type error — only a missing translation in production.
 *
 * Driven by readdirSync rather than a hardcoded ["fr", "en"], so a new locale file joins
 * the check automatically. `routing.locales` would be the obvious source, but
 * src/i18n/routing.ts pulls next-intl/navigation, which cannot load outside Next.
 */

const messagesDir = fileURLToPath(new URL("../messages", import.meta.url));
const localeFiles = readdirSync(messagesDir).filter((f) => f.endsWith(".json"));

type Json = Record<string, unknown>;

const load = (file: string): Json =>
    JSON.parse(readFileSync(`${messagesDir}/${file}`, "utf8"));

/** Flattens nested namespaces into dotted leaf paths: { a: { b: "x" } } → ["a.b"]. */
const flatten = (obj: Json, prefix = ""): string[] =>
    Object.entries(obj).flatMap(([key, value]) =>
        value !== null && typeof value === "object"
            ? flatten(value as Json, `${prefix}${key}.`)
            : [`${prefix}${key}`]
    );

const leafAt = (obj: Json, path: string): unknown =>
    path.split(".").reduce<unknown>((node, part) => (node as Json)?.[part], obj);

const placeholders = (value: string) =>
    new Set([...value.matchAll(/\{([^}]+)\}/g)].map((m) => m[1].trim()));

describe("message catalogues", () => {
    it("finds at least two locale files", () => {
        expect(localeFiles.length).toBeGreaterThanOrEqual(2);
    });

    it.each(localeFiles)("%s parses as a top-level object", (file) => {
        const parsed = load(file);
        expect(typeof parsed).toBe("object");
        expect(Array.isArray(parsed)).toBe(false);
    });

    it("all locales expose exactly the same keys", () => {
        const byFile = localeFiles.map((file) => ({
            file,
            keys: new Set(flatten(load(file))),
        }));

        const [reference, ...rest] = byFile;

        for (const other of rest) {
            const missingHere = [...reference.keys].filter((k) => !other.keys.has(k));
            const extraHere = [...other.keys].filter((k) => !reference.keys.has(k));

            expect(
                { missing: missingHere, extra: extraHere },
                `${other.file} vs ${reference.file}: ` +
                `missing ${missingHere.length}, extra ${extraHere.length}`
            ).toEqual({ missing: [], extra: [] });
        }
    });

    it.each(localeFiles)("%s has a non-empty string at every leaf", (file) => {
        const parsed = load(file);
        for (const path of flatten(parsed)) {
            const value = leafAt(parsed, path);
            expect(typeof value, `${file} → ${path}`).toBe("string");
            expect((value as string).trim().length, `${file} → ${path} is empty`).toBeGreaterThan(0);
        }
    });

    it("uses the same ICU placeholders for a given key across locales", () => {
        const [referenceFile, ...otherFiles] = localeFiles;
        const reference = load(referenceFile);

        for (const file of otherFiles) {
            const other = load(file);
            for (const path of flatten(reference)) {
                const a = leafAt(reference, path);
                const b = leafAt(other, path);
                if (typeof a !== "string" || typeof b !== "string") continue;
                expect(placeholders(b), `${file} → ${path}`).toEqual(placeholders(a));
            }
        }
    });
});
