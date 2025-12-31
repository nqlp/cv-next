import {
    SiPython,
    SiPandas,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPostgresql,
    SiDocker,
    SiVite,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiJira,
    SiKubernetes,
    SiFigma,
    SiGithubactions,
    SiJavascript,
    SiC,
    SiOracle,
    SiHtml5,
    SiVercel,
    SiGoogledocs,
    SiGooglesheets,
    SiGoogleslides,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";
import { FaJava, FaFileWord, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";

export const techConfig: Record<string, { icon: IconType; color: string }> = {
    "Python": { icon: SiPython, color: "text-[#3776AB]" },
    "Pandas": { icon: SiPandas, color: "text-[#150458]" },
    "Matplotlib": { icon: SiPython, color: "text-[#11557C]" },
    "React": { icon: SiReact, color: "text-[#61DAFB]" },
    "Next.js": { icon: SiNextdotjs, color: "text-black" },
    "TypeScript": { icon: SiTypescript, color: "text-[#3178C6]" },
    "JavaScript": { icon: SiJavascript, color: "text-[#F7DF1E]" },
    "TailwindCSS": { icon: SiTailwindcss, color: "text-[#06B6D4]" },
    "SQL": { icon: SiPostgresql, color: "text-[#4169E1]" },
    "PostgreSQL": { icon: SiPostgresql, color: "text-[#336791]" },
    "MongoDB": { icon: SiMongodb, color: "text-[#47A248]" },
    "Oracle SQL": { icon: SiOracle, color: "text-[#F80000]" },
    "Docker": { icon: SiDocker, color: "text-[#2496ED]" },
    "Kubernetes": { icon: SiKubernetes, color: "text-[#326CE5]" },
    "Vite": { icon: SiVite, color: "text-[#646CFF]" },
    "Node.js": { icon: SiNodedotjs, color: "text-[#339933]" },
    "Express": { icon: SiExpress, color: "text-black" },
    "Git": { icon: SiGit, color: "text-[#F05032]" },
    "GitHub Actions": { icon: SiGithubactions, color: "text-[#2088FF]" },
    "Jira": { icon: SiJira, color: "text-[#0052CC]" },
    "Figma": { icon: SiFigma, color: "text-[#F24E1E]" },
    "Java": { icon: FaJava, color: "text-[#007396]" },
    "C": { icon: SiC, color: "text-[#A8B9CC]" },
    "HTML/CSS": { icon: SiHtml5, color: "text-[#E34C26]" },
    "Microsoft Excel": { icon: FaFileExcel, color: "text-[#217346]" },
    "Microsoft Word": { icon: FaFileWord, color: "text-[#2B579A]" },
    "Microsoft PowerPoint": { icon: FaFilePowerpoint, color: "text-[#D24726]" },
    "Vercel": { icon: SiVercel, color: "text-black" },
    "Google Docs": { icon: SiGoogledocs, color: "text-[#4285F4]" },
    "Google Sheets": { icon: SiGooglesheets, color: "text-[#0F9D58]" },
    "Google Slides": { icon: SiGoogleslides, color: "text-[#F4B400]" },
    "VS Code": { icon: VscVscode, color: "text-[#007ACC]" },
};

interface TechBadgeProps {
    name: string;
    className?: string;
}

export default function TechBadge({ name, className = "" }: TechBadgeProps) {
    const config = techConfig[name];
    if (config) {
        const Icon = config.icon;
        return (
            <div className={`flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md transition-transform hover:-translate-y-0.5 ${className}`}>
                <Icon className={`text-lg ${config.color}`} />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200">{name}</span>
            </div>
        );
    }
    return (
        <span className={`text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 border border-gray-200 dark:border-slate-700 font-medium ${className}`}>
            #{name}
        </span>
    );
}
