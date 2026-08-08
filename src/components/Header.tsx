"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/#formation", key: "formation" },
  { href: "/#experiences", key: "experiences" },
  { href: "/#projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

const LINK_CLASS =
  "text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600";

export default function Header() {
  const t = useTranslations("Nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Escape closes the menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 dark:text-slate-100 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
        >
          Paul N.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.key} href={link.href} className={LINK_CLASS}>
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitch />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={toggleRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-600 dark:text-slate-300 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? t("close_menu") : t("open_menu")}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 px-6 py-4 space-y-4 shadow-lg max-h-[70vh] overflow-y-auto"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`block ${LINK_CLASS}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
