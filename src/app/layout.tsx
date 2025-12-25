import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
