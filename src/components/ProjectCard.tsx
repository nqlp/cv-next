interface ProjectProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
    link?: string;
}

const tagColors: Record<string, string> = {
    Python: "bg-yellow-100 text-yellow-800",
    Pandas: "bg-green-100 text-green-800",
    Matplotlib: "bg-blue-100 text-blue-800",
    Nextjs: "bg-gray-100 text-gray-800",
    React: "bg-cyan-100 text-cyan-800",
    SQL: "bg-orange-100 text-orange-800",
    TypeScript: "bg-blue-100 text-blue-800",
    TailwindCSS: "bg-teal-100 text-teal-800",

}
export default function ProjectCard({ title, description, date, tags, link }: ProjectProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-cyan-600 hover:shadow-md transition">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-cyan-800">{title}</h3>
                <span className="text-sm font-semibold bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">{date}</span>
            </div>
            <p className="font-medium mt-1">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag, index) => {
                    const colorClasses = tagColors[tag] || "bg-gray-100 text-gray-800";
                    return (
                        <span key={index} className={`text-sm px-2 py-1 rounded-full ${colorClasses}`}>
                            #{tag}
                        </span>
                    );
                })}
            </div>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-cyan-600 font-semibold hover:underline">
                    Voir le projet
                </a>
            )}
        </div>
    )
}