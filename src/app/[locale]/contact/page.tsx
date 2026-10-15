import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SOCIAL_LINKS } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";

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
        <div className="contact-page shell">
            <Link href="/" className="contact-back" aria-label={locale === "fr" ? "Retour à l’accueil" : "Back to home"}><ArrowLeft size={18} />Paul Nguyen</Link>
            <h1>
                {t("title")}
            </h1>
            <div className="contact-page-card">
                <p>{t("description")}</p>
                <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="contact-page-email"
                >
                    {SOCIAL_LINKS.email}
                    <ArrowUpRight size={24} aria-hidden="true" />
                </a>
            </div>
        </div>
    );
}
