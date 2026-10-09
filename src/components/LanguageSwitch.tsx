"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitch() {
    const t = useTranslations("Nav");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const newLocale = locale === "fr" ? "en" : "fr";
        router.replace(pathname, { locale: newLocale, scroll: false });
    };

    return (
        <button
            type="button"
            onClick={toggleLocale}
            aria-label={t("switch_language")}
            className="flex min-h-11 min-w-11 items-center gap-2 px-4 py-2 rounded-full border border-slate-700 hover:border-blue-500 transition-all text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
        >
            <span className={locale === "fr" ? "font-bold text-blue-400" : "text-slate-500"}>Français</span>
            <span className="text-slate-600">|</span>
            <span className={locale === "en" ? "font-bold text-blue-400" : "text-slate-500"}>English</span>
        </button>
    );
}
