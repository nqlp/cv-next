export enum ProjectType {
    Personnel = "personnel",
    Academique = "academic",
}

export interface Project {
    title: string;
    description: string;
    date: string;
    sortDate: Date;
    tags: string[];
    link?: string;
    context: ProjectType;
}

export const projects: Project[] = [
    {
        title: "Portfolio Next.js",
        sortDate: new Date("2025-12-01"),
        date: "portfolio.date",
        description: "portfolio.description",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "https://github.com/nqlp/cv-next",
        context: ProjectType.Personnel,
    },
    {
        title: "Steam Data Analysis",
        date: "steam.date",
        sortDate: new Date("2025-09-01"),
        description: "steam.description",
        tags: ["Python", "Pandas", "SQL"],
        link: "https://github.com/nqlp/steam-data-analysis",
        context: ProjectType.Personnel,
    },
    {
        title: "VéloFacile",
        date: "velofacile.date",
        sortDate: new Date("2025-06-01"),
        description: "velofacile.description",
        tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
        context: ProjectType.Academique,
    },
    {
        title: "Nomàuclature",
        date: "nomauclature.date",
        sortDate: new Date("2025-01-01"),
        description: "nomauclature.description",
        tags: ["React", "Vite", "TypeScript"],
        link: "https://github.com/Orchydae/nomauclature",
        context: ProjectType.Personnel,
    },
].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
