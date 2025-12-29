import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LanguageSwitch() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const newLocale = locale === "fr" ? "en" : "fr";
        router.replace(pathname, { locale: newLocale });
    };
    return (
        <button
            onClick={toggleLocale}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 hover:border-blue-500 transition-all text-sm font-medium"
        >
            <span className={locale === "fr" ? "font-bold text-blue-400" : "text-slate-500"}>Français</span>
            <span className="text-slate-600">|</span>
            <span className={locale === "en" ? "font-bold text-blue-400" : "text-slate-500"}>English</span>
        </button>
    )
};