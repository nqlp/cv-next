/**
 * Category labels come from `messages/*.json` (`Skills.categories.<key>`), not from
 * here: `key` is the single source of truth for the text that gets rendered.
 */
export const skillCategories = [
    {
        key: "languages",
        icon: "</>",
        iconColor: "text-cyan-600",
        skills: ["TypeScript", "JavaScript", "Java", "Python", "C", "SQL"],
    },
    {
        key: "web",
        icon: "⚛️",
        iconColor: "text-blue-600",
        skills: ["React", "Next.js", "TailwindCSS", "HTML/CSS"],
    },
    {
        key: "backend",
        icon: "🔌",
        iconColor: "text-purple-600",
        skills: ["Node.js", "Express"],
    },
    {
        key: "data",
        icon: "💾",
        iconColor: "text-cyan-600",
        skills: ["MongoDB", "PostgreSQL", "Oracle SQL", "Pandas", "Matplotlib"],
    },
    {
        key: "devops",
        icon: "🚀",
        iconColor: "text-rose-600",
        skills: ["Docker", "Kubernetes", "Git", "GitHub Actions", "Vercel"],
    },
    {
        key: "tools",
        icon: "🔧",
        iconColor: "text-green-600",
        skills: ["Jira", "Figma", "Git", "VS Code", "Google Docs", "Google Sheets", "Google Slides"],
    },
];
