import { FaGithub } from "react-icons/fa";
import TechBadge from "./ui/TechBadge";
import { ProjectType } from "@/data/projects";

export { ProjectType };

interface ProjectProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
    link?: string;
    context: ProjectType;
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
                {tags.map((tag, index) => (
                    <TechBadge key={index} name={tag} />
                ))}
            </div>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-800 transition-colors mt-auto self-end group"
                    title="Voir le projet sur GitHub"
                >
                    <FaGithub size={24} className="transition-transform group-hover:scale-110" />
                </a>
            )}
        </div>
    )
}