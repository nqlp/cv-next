import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import MotionProvider from "@/components/providers/MotionProvider";
import { routing } from "@/i18n/routing";
import { AUTHOR_NAME, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";
import "../globals.css";

/**
 * This layout IS the application's root layout: there is deliberately no
 * `src/app/layout.tsx`. A root layout above it would have to resolve the locale via
 * `getLocale()` in order to render `<html lang>`, and that forces *every* route to
 * render dynamically (measured: `●` SSG → `ƒ` across the board). Full static rendering
 * wins over having the 404 page inherit the site chrome.
 */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Meta" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s | ${AUTHOR_NAME}`,
    },
    description,
    keywords: ["Paul Nguyen", "ÉTS Montréal", "Génie Logiciel", "Club Cédille", "nqlp"],
    authors: [{ name: AUTHOR_NAME }],
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": `/${routing.defaultLocale}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: SITE_NAME,
      locale: t("og_locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Without this guard, `[locale]` accepts any segment ("/anything") and renders the
  // home page under an arbitrary `lang` attribute.
  if (!hasLocale(routing.locales, locale)) notFound();

  // Required in every layout and page for static rendering to be possible.
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Nav" });

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: `${SITE_URL}/${locale}`,
    jobTitle: "Software Engineering Student",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "École de technologie supérieure (ÉTS)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montréal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
  };

  return (
    // `suppressHydrationWarning`: next-themes writes `class` onto <html> from its
    // pre-hydration script, before React takes over.
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <NextIntlClientProvider>
            <MotionProvider>
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-cyan-600 focus:px-5 focus:py-3 focus:text-white focus:font-semibold"
              >
                {t("skip_to_content")}
              </a>
              <Header />
              <main id="main-content">{children}</main>
              <Footer />
            </MotionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
