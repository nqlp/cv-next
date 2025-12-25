import {
    SiPython,
    SiPandas,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiDocker,
    SiVite
} from "react-icons/si";
import { IconType } from "react-icons";

const techConfig: Record<string, { icon: IconType; color: string }> = {
    "Python": { icon: SiPython, color: "text-[#3776AB]" }, // Bleu Python
    "Pandas": { icon: SiPandas, color: "text-[#150458]" }, // Bleu foncé Pandas
    "React": { icon: SiReact, color: "text-[#61DAFB]" }, // Cyan React
    "Next.js": { icon: SiNextdotjs, color: "text-black" }, // Noir Next.js
    "TypeScript": { icon: SiTypescript, color: "text-[#3178C6]" }, // Bleu TS
    "TailwindCSS": { icon: SiTailwindcss, color: "text-[#06B6D4]" }, // Cyan Tailwind
    "SQL": { icon: SiPostgresql, color: "text-[#4169E1]" }, // Bleu SQL/Postgres
    "Docker": { icon: SiDocker, color: "text-[#2496ED]" }, // Bleu Docker
    "Vite": { icon: SiVite, color: "text-[#646CFF]" }, // Bleu Vite
};

interface ProjectProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
    link?: string;
    context: "Personnel" | "Académique";
}

export default function ProjectCard({ title, description, date, tags, link, context }: ProjectProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-600 hover:shadow-md transition flex flex-col h-full">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
                        {context}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-cyan-800">{title}</h3>
                <span className="text-sm font-semibold bg-cyan-50 text-cyan-800 px-3 py-1 rounded-full border border-cyan-100">
                    {date}
                </span>
            </div>

            <p className="font-medium text-slate-600 mt-1 mb-4 grow">
                {description}
            </p>

            {/* Tags / Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => {
                    const config = techConfig[tag];
                    if (config) {
                        const Icon = config.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md transition-transform hover:-translate-y-0.5"
                            >
                                <Icon className={`text-lg ${config.color}`} />
                                <span className="text-xs font-bold text-slate-700">{tag}</span>
                            </div>
                        );
                    }

                    return (
                        <span key={index} className="text-xs px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 border border-gray-200 font-medium">
                            #{tag}
                        </span>
                    );
                })}
            </div>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-800 transition-colors mt-auto group"
                >
                    Voir le projet
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            )}
        </div>
    )
}