import { Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="py-10">
            <div className="flex justify-between items-center px-10 text-slate-400 text-sm">

                <span>© {new Date().getFullYear()} - Paul Nguyen</span>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/nqlp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-black hover:bg-slate-50 p-2 rounded-full transition-all"
                        title="Mon GitHub"
                    >
                        <FaGithub size={24} />
                    </a>

                    <a
                        href="mailto:quang-long-paul.nguyen.1@ens.etsmtl.ca"
                        className="text-slate-600 hover:text-cyan-600 hover:bg-slate-50 p-2 rounded-full transition-all"
                        title="M'envoyer un courriel"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}