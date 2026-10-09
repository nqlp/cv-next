"use client";

import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function Formation() {
    const t = useTranslations("Formation");

    const educationData = [
        {
            school: t("ets_school"),
            degree: t("ets_degree"),
            period: t("ets_period"),
            description: t("ets_description"),
            icon: <GraduationCap size={32} className="text-cyan-600" />,
            color: "border-cyan-600",
        },
        {
            school: t("cegep_school"),
            degree: t("cegep_degree"),
            period: t("cegep_period"),
            description: t("cegep_description"),
            icon: <BookOpen size={32} className="text-pink-600" />,
            color: "border-purple-600",
        },
    ];

    return (
        <section id="formation" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-950 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading>{t("title")}</SectionHeading>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {educationData.map((item) => (
                        <motion.div
                            key={item.school}
                            variants={itemVariants}
                            className={`bg-white dark:bg-slate-900 p-5 md:p-6 rounded-2xl shadow-sm border-t-4 ${item.color} hover:shadow-md transition-shadow`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="shrink-0 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 leading-tight">{item.school}</h3>
                                    <p className="text-cyan-600 font-medium text-sm">{item.degree}</p>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
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
