"use client";

import { useActionState } from "react";
import { submitContact, ContactState } from "@/actions/submit-contact";
import { useTranslations } from "next-intl";
const initialState: ContactState = {
    success: false,
    errors: {},
    message: "",
};

export default function ContactForm() {

    const t = useTranslations("Contact");

    // state est la reponse du serveur
    const [state, formAction, isPending] = useActionState(submitContact, initialState);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="grow py-12 px-4">
                {state.success ? (
                    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-800">{t("thank_you")}</h2>
                        <p className="text-slate-700">{t("success_message")}</p>
                    </div>
                ) : (
                    <form action={formAction} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                        <h2 className="flex justify-center  text-2xl font-bold mb-6 text-cyan-800">{t("title")}</h2>

                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                {t("firstName")} <span className="text-red-500"> * </span></label>
                            <input type="text" name="firstName" placeholder={t("firstName_placeholder")} id="firstName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                            {state.errors?.firstName && <p className="mt-1 text-red-600 text-sm">{state.errors.firstName[0]}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                {t("lastName")} <span className="text-red-500"> * </span></label>
                            <input type="text" name="lastName" placeholder={t("lastName_placeholder")} id="lastName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                {t("email")} <span className="text-red-500"> * </span></label>
                            <input type="email" name="email" placeholder={t("email_placeholder")} id="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                {t("subject")} <span className="text-red-500"> * </span></label>
                            <input type="text" name="subject" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                {t("message")}
                                <span className="text-red-500"> * </span></label>
                            <textarea name="message" id="message" rows={5} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-900"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="bg-cyan-600 text-white px-6 py-3 rounded-full font-bold flex justify-center items-center
                        hover:bg-cyan-700 transition mx-auto md:w-auto">
                            {isPending ? t("sending") : t("send")}
                        </button>

                        {state.message && !state.success && (
                            <p className="mt-4 text-red-600 font-medium">{t("error_message")}</p>
                        )}
                    </form>
                )}
            </div>
        </div>
    )
}