import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { AUTHOR_NAME, SOCIAL_LINKS } from "@/lib/site";
import LanguageSwitch from "./LanguageSwitch";

const ICON_LINK_CLASS =
    "p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

export default async function Footer() {
    // Server component: `getTranslations` replaces `useTranslations`, which keeps
    // react-icons and lucide out of the client bundle.
    const t = await getTranslations("Footer");

    return (
        <footer className="bg-slate-900 text-white py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <Link
                            href="/"
                            className="text-xl font-bold rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                        >
                            {AUTHOR_NAME}
                        </Link>
                        <p className="text-slate-400 text-sm mt-2">
                            © {new Date().getFullYear()} {t("rights")}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("github_aria")}
                            className={ICON_LINK_CLASS}
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("linkedin_aria")}
                            className={ICON_LINK_CLASS}
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            aria-label={t("email_aria")}
                            className={ICON_LINK_CLASS}
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                    <LanguageSwitch />
                </div>
            </div>
        </footer>
    );
}
