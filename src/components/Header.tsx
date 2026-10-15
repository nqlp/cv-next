"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/#projects", key: "projects" },
  { href: "/#experiences", key: "experiences" },
  { href: "/#formation", key: "formation" },
  { href: "/contact", key: "contact" },
] as const;

const LINK_CLASS =
  "nav-link";

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
    <header className="site-header">
      <nav className="shell header-inner">
        <Link
          href="/"
          className="wordmark"
        >
          <span className="brand-mark">pn<span>↗</span></span><span>Paul Nguyen</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-7">
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
          className="md:hidden min-h-11 min-w-11 flex items-center justify-center p-2 text-slate-600 dark:text-slate-300 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
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
          className="mobile-menu md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`flex min-h-11 items-center ${LINK_CLASS}`}
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
