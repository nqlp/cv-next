"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import LanguageSwitch from "./LanguageSwitch";

export default function Footer() {
    const locale = useLocale();

    return (
        <footer className="bg-slate-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-xl font-bold">
                            Paul Nguyen
                        </Link>
                        <p className="text-slate-400 text-sm mt-2">
                            © {new Date().getFullYear()} {locale === "fr" ? "Tous droits réservés" : "All rights reserved"}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/nqlp"
                            target="_blank"
                            className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nqlpaul/"
                            target="_blank"
                            className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:quang-long-paul.nguyen.1@etsmtl.ca"
                            className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                    <LanguageSwitch />
                </div>
            </div>
        </footer>
    )
}