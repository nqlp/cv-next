import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Nguyen | Étudiant en Génie Logiciel @ ÉTS Montréal",
  description: "Portfolio de Paul Nguyen, étudiant à l'ÉTS et développeur passionné par React, Python et le DevOps. Découvrez mes projets et mes expériences en TI.",
  keywords: ["Paul Nguyen", "ÉTS Montréal", "Génie Logiciel", "Club Cédille"],
  authors: [{ name: "Paul Nguyen" }],
  openGraph: {
    title: "Paul Nguyen - Portfolio",
    description: "Futur ingénieur logiciel passionné par le développement web et l'analyse de données.",
    // url: "https://ton-site.com",
    siteName: "Paul Nguyen Portfolio",
    locale: "fr_CA",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
