import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
                <div className="mb-6">
                    <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                        Paul<span className="text-cyan-600">.dev</span>
                    </span>
                    <p className="text-slate-500 mt-2 text-sm max-w-md mx-auto">
                        Étudiant en Génie Logiciel à l'ÉTS. Toujours à la recherche de nouveaux défis techniques et de projets innovants.
                    </p>
                </div>

                <nav className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-medium text-slate-600">
                    <Link href="/" className="hover:text-cyan-600 transition-colors">Accueil</Link>
                    <Link href="/#experiences" className="hover:text-cyan-600 transition-colors">Expériences</Link>
                    <Link href="/#projects" className="hover:text-cyan-600 transition-colors">Projets</Link>
                    <Link href="/contact" className="hover:text-cyan-600 transition-colors">Contact</Link>
                </nav>

                <div className="flex gap-4 mb-8">
                    <a
                        href="https://github.com/nqlp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-50 p-3 rounded-full text-slate-600 hover:text-white hover:bg-slate-900 transition-all hover:-translate-y-1 shadow-sm"
                        title="GitHub"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nqlpaul/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-50 p-3 rounded-full text-slate-600 hover:text-white hover:bg-[#0077b5] transition-all hover:-translate-y-1 shadow-sm"
                        title="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="mailto:quang-long-paul.nguyen.1@etsmtl.ca"
                        className="bg-slate-50 p-3 rounded-full text-slate-600 hover:text-white hover:bg-cyan-600 transition-all hover:-translate-y-1 shadow-sm"
                        title="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                <div className="border-t border-slate-100 w-full pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <span>
                        &copy; {currentYear} Paul Nguyen. Tous droits réservés.
                    </span>

                    <span className="flex items-center gap-1">
                        Conçu et codé avec <span className="text-rose-500 animate-pulse text-lg">♥</span> à Montréal.
                    </span>
                </div>
            </div>
        </footer>
    )
}