import {
    SiPython,
    SiReact,
    SiDocker,
    SiTypescript,
    SiTailwindcss,
} from "react-icons/si";

export default function SkillsSection() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-bold text-slate-800 mb-3">Stack Technique</h3>
                <div className="flex flex-wrap gap-3">
                    {/* Badge Python */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-[#3776AB] hover:text-white transition-colors duration-300">
                        <SiPython />
                        <span className="font-medium text-sm">Python</span>
                    </div>

                    {/* Badge React */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-[#61DAFB] hover:text-black transition-colors duration-300">
                        <SiReact />
                        <span className="font-medium text-sm">React</span>
                    </div>

                    {/* Badge Docker */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-[#2496ED] hover:text-white transition-colors duration-300">
                        <SiDocker />
                        <span className="font-medium text-sm">Docker</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-[#4169E1] hover:text-white transition-colors duration-300">
                        <SiTypescript />
                        <span className="font-medium text-sm">TypeScript</span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg text-slate-700 hover:bg-[#3178C6] hover:text-white transition-colors duration-300">
                        <SiTailwindcss />
                        <span className="font-medium text-sm">TailwindCSS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}