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
            className="language-switch"
        >
            <span className={locale === "fr" ? "locale-active" : "locale-inactive"}>FR</span>
            <span className="text-slate-600">|</span>
            <span className={locale === "en" ? "locale-active" : "locale-inactive"}>EN</span>
        </button>
    );
}
