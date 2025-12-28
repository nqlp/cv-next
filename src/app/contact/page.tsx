"use client";

import { useActionState } from "react";
import { submitContact, ContactState } from "@/actions/submit-contact";

const initialState: ContactState = {
    success: false,
    errors: {},
    message: "",
};

export default function ContactForm() {

    // state est la reponse du serveur
    const [state, formAction, isPending] = useActionState(submitContact, initialState);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="grow py-12 px-4">
                {state.success ? (
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-800">Merci!</h2>
                        <p className="text-slate-700">Votre message a été envoyé avec succès. Je vous répondrai dès que possible.</p>
                    </div>
                ) : (
                    <form action={formAction} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h2 className="flex justify-center  text-2xl font-bold mb-6 text-cyan-800">Viens discuter!</h2>

                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                Prénom <span className="text-red-500">*</span></label>
                            <input type="text" name="firstName" id="firstName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                            {state.errors?.firstName && <p className="mt-1 text-red-600 text-sm">{state.errors.firstName[0]}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Nom <span className="text-red-500">*</span></label>
                            <input type="text" name="lastName" id="lastName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span></label>
                            <input type="email" name="email" id="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                                <span className="text-red-500">*</span></label>
                            <textarea name="message" id="message" rows={5} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="bg-cyan-600 text-white px-6 py-3 rounded-full font-bold flex justify-center items-center
                        hover:bg-cyan-700 transition mx-auto md:w-auto">
                            {isPending ? "Envoi..." : "Envoyer le message"}
                        </button>

                        {state.message && !state.success && (
                            <p className="mt-4 text-red-600 font-medium">{state.message}</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    )
}