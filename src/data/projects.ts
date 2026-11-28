export enum ProjectType {
    Personnel = "personnel",
    Academique = "academic",
}

export interface Project {
    id: string;
    title: string;
    sortDate: Date;
    tags: string[];
    link?: string;
    context: ProjectType;
}

export const projects: Project[] = [
    {
        id: "portfolio",
        title: "Portfolio Next.js",
        sortDate: new Date("2025-12-01"),
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "https://github.com/nqlp/cv-next",
        context: ProjectType.Personnel,
    },
    {
        id: "steam",
        title: "Steam Data Analysis",
        sortDate: new Date("2025-09-01"),
        tags: ["Python", "Pandas", "SQL"],
        link: "https://github.com/nqlp/steam-data-analysis",
        context: ProjectType.Personnel,
    },
    {
        id: "velofacile",
        title: "VéloFacile",
        sortDate: new Date("2025-06-01"),
        tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
        context: ProjectType.Academique,
    },
    {
        id: "nomauclature",
        title: "Nomàuclature",
        sortDate: new Date("2025-01-01"),
        tags: ["React", "Vite", "TypeScript"],
        link: "https://github.com/Orchydae/nomauclature",
        context: ProjectType.Personnel,
    },
].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
