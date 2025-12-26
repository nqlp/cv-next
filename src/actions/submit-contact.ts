"use server";

import { z } from "zod";

const contactSchema = z.object({
    firstName: z.string().min(2, "Le prénom est requis"),
    lastName: z.string().min(2, "Le nom est requis"),
    email: z.email("Email invalide"),
    message: z.string().min(1, "Le message est requis"),
});

export type ContactState = {
    success: boolean;
    errors: {
        firstName?: string[];
        lastName?: string[];
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
                email: fieldErrors.email,
                message: fieldErrors.message,
            },
            message: "Veuillez corriger les erreurs ci-dessous.",
        };
    }

    try {
        console.log("Contact form submitted:", result.data);

        return {
            success: true,
            errors: {},
            message: "Message envoyé avec succès!",
        };
    } catch (error) {
        return {
            success: false,
            errors: {},
            message: "Une erreur est survenue. Veuillez réessayer.",
        };
    }
}