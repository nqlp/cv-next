import { FaGithub } from "react-icons/fa";
import TechBadge from "./TechBadge";

interface ProjectProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
    link?: string;
    context: string;
    linkLabel: string;
}

export default function ProjectCard({ title, description, date, tags, link, context, linkLabel }: ProjectProps) {
    return (
        <div className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-xl shadow-sm border-l-4 border-cyan-600 hover:shadow-md transition flex flex-col h-full">
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start gap-2 md:gap-3 mb-2">
                <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                        {context}
                    </span>
                </div>
                <h3 className="min-w-0 wrap-anywhere text-xl font-bold text-cyan-800 dark:text-cyan-300">{title}</h3>
                <span className="text-sm font-semibold bg-cyan-50 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full border border-cyan-100 dark:border-cyan-900/60">
                    {date}
                </span>
            </div>

            <p className="font-medium text-slate-600 dark:text-slate-300 mt-1 mb-4 grow">
                {description}
            </p>

            {/* Tags / Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                ))}
            </div>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 text-cyan-600 font-bold hover:text-cyan-800 transition-colors mt-auto self-end group rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    aria-label={`${linkLabel} — ${title}`}
                >
                    <FaGithub size={24} className="transition-transform group-hover:scale-110" />
                </a>
            )}
        </div>
    );
}
