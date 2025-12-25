"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Menu, X, FileText } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/#projects" },
    { name: "Formation", href: "/#formation" },
    { name: "Expériences", href: "/#experiences" }, 
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        <Link 
            href="/" 
            className="text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-cyan-600"
            onClick={() => setIsMobileMenuOpen(false)}
        >
          Paul<span className="text-cyan-600">.dev</span>
        </Link>

        {/* 2. NAVIGATION DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
                  isActive ? "text-cyan-600" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/Paul_Nguyen_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            <FileText size={16} />
            CV
          </Link>
        </nav>

        {/* 3. BOUTON MENU MOBILE */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Ouvrir le menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. MENU MOBILE DÉROULANT */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-700 hover:text-cyan-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/Paul_Nguyen_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600 py-3 font-bold text-white active:bg-cyan-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FileText size={18} />
            Télécharger mon CV
          </Link>
        </div>
      )}
    </header>
  );
}