import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { z } from "zod";
import { contactSchema, type ContactFieldErrors } from "@/lib/validation/contact";

const VALID = {
    firstName: "Paul",
    lastName: "Nguyen",
    subject: "Bonjour",
    email: "paul@example.com",
    message: "This message is long enough to pass validation.",
};

type Field = keyof typeof VALID;

const parse = (overrides: Record<string, unknown>) =>
    contactSchema.safeParse({ ...VALID, ...overrides });

/** First error key reported for a field, or undefined if the field validated. */
const errorKeyFor = (result: ReturnType<typeof parse>, field: Field) =>
    result.success ? undefined : result.error.issues.find((i) => i.path[0] === field)?.message;

const SOH = String.fromCharCode(1);
const CR = String.fromCharCode(13);
const LF = String.fromCharCode(10);
const TAB = String.fromCharCode(9);

/**
 * Every rejection the schema can produce, as [field, input, expected i18n key].
 * This table is the single source of truth: the i18n-linkage test at the bottom
 * derives its key list from it, so a new rule cannot be added without also being
 * checked against the message catalogues.
 */
const REJECTIONS: ReadonlyArray<readonly [Field, unknown, string]> = [
    ["firstName", "", "errors.firstName_short"],
    ["firstName", "P", "errors.firstName_short"],
    ["firstName", "   ", "errors.firstName_short"],
    ["firstName", " a ", "errors.firstName_short"],
    ["firstName", "x".repeat(61), "errors.firstName_long"],
    ["lastName", "N", "errors.lastName_short"],
    ["lastName", "x".repeat(61), "errors.lastName_long"],
    ["subject", "", "errors.subject_required"],
    ["subject", "   ", "errors.subject_required"],
    ["subject", SOH, "errors.subject_required"],
    ["subject", CR + LF, "errors.subject_required"],
    ["subject", "s".repeat(151), "errors.subject_long"],
    ["email", "nope", "errors.email_invalid"],
    ["email", "a@b", "errors.email_invalid"],
    ["email", "@example.com", "errors.email_invalid"],
    ["email", " paul@example.com ", "errors.email_invalid"],
    ["email", `${"a".repeat(243)}@example.com`, "errors.email_long"],
    ["message", "x".repeat(9), "errors.message_short"],
    ["message", "x".repeat(4001), "errors.message_long"],
];

describe("contactSchema", () => {
    it("accepts a well-formed submission", () => {
        expect(parse({}).success).toBe(true);
    });

    describe("rejections", () => {
        it.each(REJECTIONS)("%s rejects %j with %s", (field, input, expectedKey) => {
            const result = parse({ [field]: input });
            expect(result.success).toBe(false);
            expect(errorKeyFor(result, field)).toBe(expectedKey);
        });

        it("never emits Zod's own English prose", () => {
            // Every message must be a dotted i18n key, because ContactForm feeds it to t().
            for (const [field, input] of REJECTIONS) {
                const key = errorKeyFor(parse({ [field]: input }), field);
                expect(key, `${field} / ${JSON.stringify(input)}`).toMatch(/^errors\.[a-zA-Z_]+$/);
            }
        });

        it("emits a key, not prose, for a field missing entirely", () => {
            // formData.get() returns null for an unsubmitted field. submit-contact.ts
            // coerces that to "" precisely so this stays a translatable key.
            const asNull = contactSchema.safeParse({ ...VALID, firstName: null });
            expect(asNull.success).toBe(false);
            if (!asNull.success) {
                // Raw null still produces prose — which is why the action must coerce.
                expect(asNull.error.issues[0].message).not.toMatch(/^errors\./);
            }

            expect(errorKeyFor(parse({ firstName: "" }), "firstName")).toBe(
                "errors.firstName_short"
            );
        });
    });

    describe("boundaries", () => {
        it.each([
            ["firstName", "x".repeat(60)],
            ["lastName", "x".repeat(60)],
            ["subject", "s".repeat(150)],
            ["email", `${"a".repeat(242)}@example.com`],
            ["message", "x".repeat(10)],
            ["message", "x".repeat(4000)],
        ])("accepts %s at its exact limit", (field, input) => {
            expect(parse({ [field]: input }).success).toBe(true);
        });
    });

    describe("trimming", () => {
        it("strips surrounding whitespace from accepted values", () => {
            const result = parse({ firstName: "  Paul  ", message: `  ${VALID.message}  ` });
            expect(result.success).toBe(true);
            if (result.success) {
                expect(result.data.firstName).toBe("Paul");
                expect(result.data.message).toBe(VALID.message);
            }
        });

        it("trims before checking the upper bound", () => {
            expect(parse({ firstName: `  ${"x".repeat(60)}  ` }).success).toBe(true);
        });

        it("does NOT trim the email — deliberate asymmetry with the other four fields", () => {
            expect(parse({ email: " paul@example.com " }).success).toBe(false);
        });

        it("does not normalise the email's case", () => {
            const result = parse({ email: "Paul@Example.CO" });
            expect(result.success).toBe(true);
            if (result.success) expect(result.data.email).toBe("Paul@Example.CO");
        });
    });

    describe("subject: email-header safety", () => {
        it("replaces CR/LF so they cannot reach the header", () => {
            const result = parse({ subject: `Hello${CR}${LF}Bcc: victim@example.com` });
            expect(result.success).toBe(true);
            if (result.success) {
                expect(result.data.subject).not.toMatch(/[\r\n]/);
                expect(result.data.subject).toBe("Hello  Bcc: victim@example.com");
            }
        });

        it("replaces tabs", () => {
            const result = parse({ subject: `a${TAB}b` });
            expect(result.success).toBe(true);
            if (result.success) expect(result.data.subject).toBe("a b");
        });

        it("rejects a subject made only of control characters", () => {
            // Regression guard: the transform runs before the length check. With the
            // opposite order, U+0001 cleared min(1) and then collapsed to "", so an empty
            // subject reached the email header despite errors.subject_required.
            const result = parse({ subject: SOH });
            expect(result.success).toBe(false);
            expect(errorKeyFor(result, "subject")).toBe("errors.subject_required");
        });
    });

    describe("shape", () => {
        it("strips the honeypot field from parsed data", () => {
            const result = contactSchema.safeParse({ ...VALID, company: "spam-bot" });
            expect(result.success).toBe(true);
            if (result.success) expect(result.data).not.toHaveProperty("company");
        });

        it("reports one error per invalid field", () => {
            const result = contactSchema.safeParse({
                firstName: "",
                lastName: "",
                subject: "",
                email: "nope",
                message: "",
            });
            expect(result.success).toBe(false);
            if (!result.success) {
                const fields = new Set(result.error.issues.map((i) => i.path[0]));
                expect(fields).toEqual(
                    new Set(["firstName", "lastName", "subject", "email", "message"])
                );
            }
        });

        it("flattens into the ContactFieldErrors shape the action returns", () => {
            const result = parse({ email: "nope" });
            expect(result.success).toBe(false);
            if (!result.success) {
                const fieldErrors: ContactFieldErrors = z.flattenError(result.error).fieldErrors;
                // ContactForm renders errors[field]?.[0], so index 0 must be the key.
                expect(fieldErrors.email?.[0]).toBe("errors.email_invalid");
            }
        });
    });
});

/**
 * The seam that breaks silently today: the schema emits keys, ContactForm resolves them
 * with t(), and nothing at build or lint time connects the two. Rename a key here and
 * forget one locale file and the visitor sees a raw key at runtime.
 */
describe("error keys resolve in every message catalogue", () => {
    const messagesDir = fileURLToPath(new URL("../messages", import.meta.url));
    const localeFiles = readdirSync(messagesDir).filter((f) => f.endsWith(".json"));

    const schemaKeys = [...new Set(REJECTIONS.map(([, , key]) => key))];
    // The ContactState["messageKey"] union, which ContactForm also resolves via t().
    const formLevelKeys = ["success_message", "error_message", "validation_message"];

    it("finds at least two locale files", () => {
        expect(localeFiles.length).toBeGreaterThanOrEqual(2);
    });

    it.each(localeFiles)("%s defines every key the schema can emit", (file) => {
        const messages = JSON.parse(readFileSync(`${messagesDir}/${file}`, "utf8"));
        const contact = messages.Contact;
        expect(contact, `${file} has no Contact namespace`).toBeDefined();

        for (const key of schemaKeys) {
            const suffix = key.replace(/^errors\./, "");
            expect(typeof contact.errors?.[suffix], `${file} → Contact.${key}`).toBe("string");
        }

        for (const key of formLevelKeys) {
            expect(typeof contact[key], `${file} → Contact.${key}`).toBe("string");
        }
    });
});
