import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

/**
 * Translated 404: valid locale, missing page (e.g. `/fr/blog`).
 *
 * Note that Next renders not-found boundaries in a synthetic error document, *outside*
 * `[locale]/layout.tsx` — so there is no header, footer or stylesheet here. Giving it
 * that chrome would require a root `app/layout.tsx`, which forces every route to render
 * dynamically; see the comment in `[locale]/layout.tsx`. Hence the self-contained link
 * back home: it is the visitor's only way out of this page.
 */
export default function LocaleNotFound() {
    const t = useTranslations("NotFound");

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="text-6xl font-extrabold text-cyan-600">404</p>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t("title")}</h1>
            <p className="max-w-md text-slate-600 dark:text-slate-300">{t("description")}</p>
            <Link
                href="/"
                className="rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-700"
            >
                {t("back_home")}
            </Link>
        </div>
    );
}
