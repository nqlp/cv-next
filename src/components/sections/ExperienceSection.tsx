"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import { containerVariants, itemVariants } from "@/lib/motion";

type Experience = {
  title: string;
  role: string;
  date: string;
  tasks: string[];
  link?: { href: string; label: string };
  accent: { border: string; badge: string; bullet: string };
};

export default function ExperienceSection() {
  const t = useTranslations("Experience");

  const experiences: Experience[] = [
    {
      title: t("ezoko_title"),
      role: t("ezoko_role"),
      date: t("ezoko_date"),
      tasks: [
        t("ezoko_task_1"),
        t("ezoko_task_2"),
        t("ezoko_task_3"),
        t("ezoko_task_4"),
        t("ezoko_task_5"),
        t("ezoko_task_6"),
      ],
      accent: {
        border: "border-l-cyan-600 hover:border-l-cyan-500",
        badge: "bg-cyan-50 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-200",
        bullet: "bg-cyan-500",
      },
    },
    {
      title: t("cedille_title"),
      role: t("cedille_role"),
      date: t("cedille_date"),
      tasks: [t("cedille_task_1"), t("cedille_task_2"), t("cedille_task_3")],
      link: { href: t("cedille_link"), label: t("cedille_link_label") },
      accent: {
        border: "border-l-blue-600 hover:border-l-blue-500",
        badge: "bg-blue-50 text-blue-700",
        bullet: "bg-blue-400",
      },
    },
    {
      title: t("spc_title"),
      role: t("spc_role"),
      date: t("spc_date"),
      tasks: [
        t("spc_task_1"),
        t("spc_task_2"),
        t("spc_task_3"),
        t("spc_task_4"),
        t("spc_task_5"),
      ],
      accent: {
        border: "border-l-slate-400",
        badge: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
        bullet: "bg-slate-300",
      },
    },
  ];

  return (
    <section id="experiences" className="py-12 md:py-24 bg-white dark:bg-slate-950 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading accentClass="bg-blue-600">{t("title")}</SectionHeading>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((experience) => (
            <motion.article
              key={experience.title}
              variants={itemVariants}
              className={`group bg-white dark:bg-slate-900 p-5 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 border-l-4 hover:shadow-xl transition-all ${experience.accent.border}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
                    {experience.title}
                  </h3>
                  <p className="font-medium text-slate-500 dark:text-slate-300">{experience.role}</p>
                </div>
                <span className={`text-sm font-bold px-4 py-2 rounded-full self-start ${experience.accent.badge}`}>
                  {experience.date}
                </span>
              </div>

              <ul className="space-y-3">
                {experience.tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${experience.accent.bullet}`} />
                    {task}
                  </li>
                ))}
                {experience.link && (
                  <li className="flex items-start gap-3">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${experience.accent.bullet}`} />
                    <a
                      href={experience.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 dark:text-cyan-400 font-medium hover:underline rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                    >
                      {experience.link.label}
                    </a>
                  </li>
                )}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
