"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900">
          Paul N.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#formation" className="text-slate-600 hover:text-blue-600 transition-colors">
            {locale === "fr" ? "Formation" : "Education"}
          </Link>
          <Link href="/#experiences" className="text-slate-600 hover:text-blue-600 transition-colors">
            {locale === "fr" ? "Expériences" : "Experience"}
          </Link>
          <Link href="/#projects" className="text-slate-600 hover:text-blue-600 transition-colors">
            {locale === "fr" ? "Projets" : "Projects"}
          </Link>
          <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
          <LanguageSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-600"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 px-6 py-4 space-y-4 shadow-lg max-h-[70vh] overflow-y-auto"
        >
          <Link href="/#formation" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>
            {locale === "fr" ? "Formation" : "Education"}
          </Link>
          <Link href="/#experiences" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>
            {locale === "fr" ? "Expériences" : "Experience"}
          </Link>
          <Link href="/#projects" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>
            {locale === "fr" ? "Projets" : "Projects"}
          </Link>
          <Link href="/contact" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          <LanguageSwitch />
        </div>
      )}
    </header>
  );
}