"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const contactSchema = z.object({
    firstName: z.string().min(2, "Le prénom est requis"),
    lastName: z.string().min(2, "Le nom est requis"),
    subject: z.string().min(1, "Le sujet est requis"),
    email: z.email("Email invalide"),
    message: z.string().min(1, "Le message est requis"),
});

export type ContactState = {
    success: boolean;
    errors: {
        firstName?: string[];
        lastName?: string[];
        subject?: string[];
        email?: string[];
        message?: string[];
    };
    message: string;
};

export async function submitContact(
    prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const rawData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        subject: formData.get("subject"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        return {
            success: false,
            errors: {
                firstName: fieldErrors.firstName,
                lastName: fieldErrors.lastName,
                subject: fieldErrors.subject,
                email: fieldErrors.email,
                message: fieldErrors.message,
            },
            message: "Veuillez corriger les erreurs ci-dessous.",
        };
    }

    try {
        await prisma.contactMessage.create({
            data: {
                firstName: result.data.firstName,
                lastName: result.data.lastName,
                subject: result.data.subject,
                email: result.data.email,
                message: result.data.message,
            },
        });

        console.log("Succès DB: Message sauvegardé");

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.CONTACT_EMAIL!,
            replyTo: result.data.email,
            subject: `Contact: ${result.data.subject}`,
            html: `
                <h2>Nouveau message de contact</h2>
                <p><strong>De:</strong> ${result.data.firstName} ${result.data.lastName}</p>
                <p><strong>Email:</strong> ${result.data.email}</p>
                <p><strong>Sujet:</strong> ${result.data.subject}</p>
                <hr>
                <p>${result.data.message}</p>
            `,
        });

        return {
            success: true,
            errors: {},
            message: "Message envoyé avec succès!",
        };
    } catch (error) {
        console.error("ERREUR DB CRITIQUE:", error);

        return {
            success: false,
            errors: {},
            message: "Une erreur est survenue. Veuillez réessayer.",
        };
    }
}