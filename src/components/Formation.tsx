"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
    {
        school: "École de technologie supérieure (ÉTS)",
        degree: "Baccalauréat en Génie Logiciel",
        period: "2022 — Présent",
        description: "Spécialisation en architecture logicielle et tests.",
        icon: <GraduationCap className="text-cyan-600" size={24} />,
        color: "border-cyan-500",
        bgHover: "group-hover:bg-cyan-50",
    },
    {
        school: "Cégep de Rosemont",
        degree: "Science de la nature",
        period: "2017-2020",
        description: "Formation axée sur les sciences pures et appliquées, avec une solide base en mathématiques, physique et chimie.",
        icon: <GraduationCap className="text-rose-600" size={24} />,
        color: "border-rose-500",
        bgHover: "group-hover:bg-rose-50",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Formation() {
    return (
        <section id="formation" className="py-24 bg-slate-50 px-6">

            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-extrabold mb-12 text-slate-900 flex items-center gap-3"
                >
                    <span className="bg-cyan-600 w-2 h-8 rounded-full"></span>
                    Formation
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`bg-white p-6 rounded-2xl shadow-sm border-t-4 ${item.color} hover:shadow-md transition-shadow`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-slate-50 rounded-xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 leading-tight">{item.school}</h3>
                                    <p className="text-cyan-600 font-medium text-sm">{item.degree}</p>
                                </div>
                            </div>

                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                <BookOpen size={14} />
                                {item.period}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}