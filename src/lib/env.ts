import "server-only";
import { z } from "zod";

/**
 * Environment variables, validated at module load.
 *
 * Without this, a deployment missing `RESEND_API_KEY` or `CONTACT_EMAIL` builds and
 * serves normally, then silently swallows every contact email: the visitor is told
 * "message sent successfully" and nobody is ever notified.
 * Here a missing variable breaks the build — a loud failure instead of a silent one.
 */
const envSchema = z.object({
    DATABASE_URL: z.url(),
    RESEND_API_KEY: z.string().min(1),
    CONTACT_EMAIL: z.email(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    const missing = Object.keys(z.flattenError(parsed.error).fieldErrors).join(", ");
    throw new Error(
        `Invalid or missing environment variables: ${missing}. ` +
        `See the README for the expected list.`
    );
}

export const env = parsed.data;
