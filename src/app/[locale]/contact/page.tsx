import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SOCIAL_LINKS } from "@/lib/site";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Contact" });
    const tMeta = await getTranslations({ locale, namespace: "Meta" });

    return {
        title: t("meta_title"),
        description: t("meta_description"),
        alternates: {
            canonical: `/${locale}/contact`,
            languages: {
                fr: "/fr/contact",
                en: "/en/contact",
                "x-default": `/${routing.defaultLocale}/contact`,
            },
        },
        openGraph: {
            title: t("meta_title"),
            description: t("meta_description"),
            url: `/${locale}/contact`,
            locale: tMeta("og_locale"),
            type: "website",
        },
    };
}

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: "Contact" });

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 pt-28 pb-16">
            <h1 className="mb-8 text-center text-3xl font-extrabold text-slate-900 dark:text-slate-100">
                {t("title")}
            </h1>
            <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <p className="mb-6 text-slate-600 dark:text-slate-300">{t("description")}</p>
                <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="font-semibold text-cyan-700 underline underline-offset-4 break-all dark:text-cyan-300"
                >
                    {SOCIAL_LINKS.email}
                </a>
            </div>
        </div>
    );
}
