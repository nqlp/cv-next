export enum ProjectType {
    Personnel = "Personnel",
    Academique = "Académique",
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
        description: "Refonte complète de mon CV en utilisant les dernières technologies web.",
        date: "Décembre 2025",
        sortDate: new Date("2025-12-01"),
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        link: "https://github.com/nqlp/cv-next",
        context: ProjectType.Personnel,
    },
    {
        title: "Steam Data Analysis",
        description: "Analyse de données extraites de Steam avec Python et Pandas pour identifier les tendances de jeux.",
        date: "Automne 2025",
        sortDate: new Date("2025-09-01"),
        tags: ["Python", "Pandas", "SQL"],
        link: "https://github.com/nqlp/steam-data-analysis",
        context: ProjectType.Personnel,
    },
    {
        title: "VéloFacile",
        description: "Application web pour faciliter la location de vélos entre particuliers à Montréal.",
        date: "Été 2025",
        sortDate: new Date("2025-06-01"),
        tags: ["React", "TypeScript", "TailwindCSS", "Vite"],
        context: ProjectType.Academique,
    },
    {
        title: "Nomàuclature",
        description: "Portfolio collaboratif pour artistes.",
        date: "Hiver 2025",
        sortDate: new Date("2025-01-01"),
        tags: ["React", "Vite", "TypeScript"],
        link: "https://github.com/Orchydae/nomauclature",
        context: ProjectType.Personnel,
    },
].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());
