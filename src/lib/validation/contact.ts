import { z } from "zod";

/**
 * Data contract for the contact form — shared between the server
 * (`src/actions/submit-contact.ts`) and the client (`ContactForm`).
 *
 * Messages are **i18n keys** relative to the `Contact` namespace, not text: the schema
 * stays language-neutral and the client resolves the keys with `t()`.
 */
export const contactSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "errors.firstName_short")
        .max(60, "errors.firstName_long"),
    lastName: z
        .string()
        .trim()
        .min(2, "errors.lastName_short")
        .max(60, "errors.lastName_long"),
    subject: z
        .string()
        .trim()
        .min(1, "errors.subject_required")
        .max(150, "errors.subject_long")
        // The subject feeds an email header, so control characters are neutralised
        // (\p{Cc} covers CR, LF, TAB…) rather than rejecting the submission outright.
        .transform((value) => value.replace(/\p{Cc}/gu, " ").trim()),
    email: z
        .email("errors.email_invalid")
        .max(254, "errors.email_long"),
    message: z
        .string()
        .trim()
        .min(10, "errors.message_short")
        .max(4000, "errors.message_long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<Record<keyof ContactInput, string[]>>;

export type ContactState = {
    success: boolean;
    /** Per-field i18n keys, resolved on the client. */
    errors: ContactFieldErrors;
    /** i18n key for the form-level message, or an empty string. */
    messageKey: "" | "success_message" | "error_message" | "validation_message";
};

export const initialContactState: ContactState = {
    success: false,
    errors: {},
    messageKey: "",
};
