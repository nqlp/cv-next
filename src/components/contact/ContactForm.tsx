"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { submitContact } from "@/actions/submit-contact";
import { initialContactState, type ContactFieldErrors } from "@/lib/validation/contact";

const FIELD_CLASS =
    "w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 aria-[invalid=true]:border-red-500";

const LABEL_CLASS = "mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300";

export default function ContactForm() {
    const t = useTranslations("Contact");
    const [state, formAction, isPending] = useActionState(submitContact, initialContactState);

    // The server returns i18n keys ("errors.email_invalid"), never text, so errors
    // render in the language of the page.
    const errorFor = (field: keyof ContactFieldErrors) => {
        const key = state.errors?.[field]?.[0];
        return key ? t(key) : null;
    };

    if (state.success) {
        return (
            <div
                role="status"
                aria-live="polite"
                className="mx-auto max-w-lg rounded-lg bg-white dark:bg-slate-900 p-8 text-center shadow-md border border-slate-200 dark:border-slate-800"
            >
                <h2 className="mb-4 text-2xl font-bold text-cyan-800 dark:text-cyan-300">
                    {t("thank_you")}
                </h2>
                <p className="text-slate-700 dark:text-slate-300">{t("success_message")}</p>
            </div>
        );
    }

    const fields = [
        { name: "firstName", type: "text", placeholder: t("firstName_placeholder") },
        { name: "lastName", type: "text", placeholder: t("lastName_placeholder") },
        { name: "email", type: "email", placeholder: t("email_placeholder") },
        { name: "subject", type: "text", placeholder: undefined },
    ] as const;

    return (
        <form
            action={formAction}
            className="mx-auto max-w-lg rounded-lg bg-white dark:bg-slate-900 p-8 shadow-md border border-slate-200 dark:border-slate-800"
        >
            {/* Honeypot: invisible to humans, filled in by bots. */}
            <div className="sr-only" aria-hidden="true">
                <label htmlFor="company">Entreprise</label>
                <input type="text" name="company" id="company" tabIndex={-1} autoComplete="off" />
            </div>

            {fields.map((field) => {
                const error = errorFor(field.name);
                return (
                    <div key={field.name} className="mb-4">
                        <label htmlFor={field.name} className={LABEL_CLASS}>
                            {t(field.name)} <span className="text-red-500"> * </span>
                        </label>
                        <input
                            type={field.type}
                            name={field.name}
                            id={field.name}
                            placeholder={field.placeholder}
                            required
                            aria-invalid={error ? true : undefined}
                            aria-describedby={error ? `${field.name}-error` : undefined}
                            className={FIELD_CLASS}
                        />
                        {error && (
                            <p id={`${field.name}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400">
                                {error}
                            </p>
                        )}
                    </div>
                );
            })}

            <div className="mb-4">
                <label htmlFor="message" className={LABEL_CLASS}>
                    {t("message")} <span className="text-red-500"> * </span>
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    aria-invalid={errorFor("message") ? true : undefined}
                    aria-describedby={errorFor("message") ? "message-error" : undefined}
                    className={FIELD_CLASS}
                />
                {errorFor("message") && (
                    <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errorFor("message")}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="mx-auto flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 font-bold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
                {isPending ? t("sending") : t("send")}
            </button>

            {state.messageKey && !state.success && (
                <p role="alert" className="mt-4 font-medium text-red-600 dark:text-red-400">
                    {t(state.messageKey)}
                </p>
            )}
        </form>
    );
}
