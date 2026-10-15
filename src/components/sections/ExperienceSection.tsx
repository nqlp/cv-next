"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";

type Experience = {
  title: string;
  role: string;
  date: string;
  tasks: string[];
  link?: { href: string; label: string };
};

export default function ExperienceSection() {
  const d = useTranslations("Design");
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
    },
    {
      title: t("cedille_title"),
      role: t("cedille_role"),
      date: t("cedille_date"),
      tasks: [t("cedille_task_1"), t("cedille_task_2"), t("cedille_task_3")],
      link: { href: t("cedille_link"), label: t("cedille_link_label") },
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
    },
  ];

  return (
    <section id="experiences" className="content-section experience-section">
      <div className="shell">
        <SectionHeading number="02" caption={d("experience_caption")}>{t("title")}</SectionHeading>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article key={experience.title} className="experience-row">
              <div className="experience-label"><span className="eyebrow">0{index + 1}</span><span className="experience-date">{experience.date}</span></div>
              <div className="experience-content">
                <h3>{experience.title}</h3><p className="experience-role">{experience.role}</p>
                <p className="experience-summary">{experience.tasks[0]}</p>
                {index === 0 && <p className="experience-impact">{experience.tasks[2]}</p>}
                <details className="experience-details">
                  <summary>{d("experience_details")}<span aria-hidden="true">+</span></summary>
                  <ul>{experience.tasks.filter((_, taskIndex) => taskIndex > 0 && !(index === 0 && taskIndex === 2)).map(task => <li key={task}>{task}</li>)}</ul>
                  {experience.link && <a href={experience.link.href} target="_blank" rel="noopener noreferrer" className="experience-external">{experience.link.label} ↗</a>}
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
