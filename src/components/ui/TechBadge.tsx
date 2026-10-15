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
    "Pandas": { icon: SiPandas, color: "text-[#150458] dark:text-indigo-300" },
    "Matplotlib": { icon: SiPython, color: "text-[#11557C] dark:text-sky-300" },
    "React": { icon: SiReact, color: "text-[#087EA4] dark:text-[#61DAFB]" },
    "Next.js": { icon: SiNextdotjs, color: "text-slate-900 dark:text-slate-100" },
    "TypeScript": { icon: SiTypescript, color: "text-[#3178C6]" },
    "JavaScript": { icon: SiJavascript, color: "text-amber-700 dark:text-[#F7DF1E]" },
    "TailwindCSS": { icon: SiTailwindcss, color: "text-[#06B6D4]" },
    "SQL": { icon: SiPostgresql, color: "text-[#4169E1]" },
    "PostgreSQL": { icon: SiPostgresql, color: "text-[#336791]" },
    "MongoDB": { icon: SiMongodb, color: "text-[#47A248]" },
    "Oracle SQL": { icon: SiOracle, color: "text-[#F80000]" },
    "Docker": { icon: SiDocker, color: "text-[#2496ED]" },
    "Kubernetes": { icon: SiKubernetes, color: "text-[#326CE5]" },
    "Vite": { icon: SiVite, color: "text-[#646CFF]" },
    "Node.js": { icon: SiNodedotjs, color: "text-[#339933]" },
    "Express": { icon: SiExpress, color: "text-slate-900 dark:text-slate-100" },
    "Git": { icon: SiGit, color: "text-[#F05032]" },
    "GitHub Actions": { icon: SiGithubactions, color: "text-[#2088FF]" },
    "Jira": { icon: SiJira, color: "text-[#0052CC] dark:text-blue-300" },
    "Figma": { icon: SiFigma, color: "text-[#F24E1E]" },
    "Java": { icon: FaJava, color: "text-[#007396] dark:text-sky-300" },
    "C": { icon: SiC, color: "text-[#A8B9CC]" },
    "HTML/CSS": { icon: SiHtml5, color: "text-[#E34C26]" },
    "Microsoft Excel": { icon: FaFileExcel, color: "text-[#217346]" },
    "Microsoft Word": { icon: FaFileWord, color: "text-[#2B579A]" },
    "Microsoft PowerPoint": { icon: FaFilePowerpoint, color: "text-[#D24726]" },
    "Vercel": { icon: SiVercel, color: "text-slate-900 dark:text-slate-100" },
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
            <div className={`tech-badge ${className}`}>
                <Icon className={`text-lg ${config.color}`} />
                <span className="tech-label">{name}</span>
            </div>
        );
    }
    return (
        <span className={`tech-badge ${className}`}>
            #{name}
        </span>
    );
}
