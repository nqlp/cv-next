"use server";

import { z } from "zod";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { env } from "@/lib/env";
import {
    contactSchema,
    type ContactState,
} from "@/lib/validation/contact";

export async function submitContact(
    prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    // Honeypot: a bot fills every field, a human never sees this one.
    // Fake a success, without writing to the database or sending anything.
    const honeypot = formData.get("company");
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
        return { success: true, errors: {}, messageKey: "success_message" };
    }

    const result = contactSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        subject: formData.get("subject"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!result.success) {
        return {
            success: false,
            errors: z.flattenError(result.error).fieldErrors,
            messageKey: "validation_message",
        };
    }

    const data = result.data;

    try {
        await prisma.contactMessage.create({ data });

        try {
            const resend = new Resend(env.RESEND_API_KEY);
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: env.CONTACT_EMAIL,
                replyTo: data.email,
                subject: `Contact: ${data.subject}`,
                // Plain text on purpose: no user input is interpolated into HTML,
                // so there is no injection surface in the recipient's inbox.
                text: [
                    `De: ${data.firstName} ${data.lastName}`,
                    `Email: ${data.email}`,
                    `Sujet: ${data.subject}`,
                    "",
                    data.message,
                ].join("\n"),
            });
        } catch (error) {
            // The message is already persisted, so a failed email must not fail the request.
            console.error("ERREUR EMAIL:", error);
        }

        return { success: true, errors: {}, messageKey: "success_message" };
    } catch (error) {
        console.error("ERREUR DB CRITIQUE:", error);

        return { success: false, errors: {}, messageKey: "error_message" };
    }
}
