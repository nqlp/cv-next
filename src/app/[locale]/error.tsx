"use client";

import { useTranslations } from "next-intl";

export default function LocaleError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const t = useTranslations("Error");

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t("title")}</h1>
            <p className="max-w-md text-slate-600 dark:text-slate-300">{t("description")}</p>
            <button
                type="button"
                onClick={reset}
                className="rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
                {t("retry")}
            </button>
        </div>
    );
}
