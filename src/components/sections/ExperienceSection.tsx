import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";

type Experience = {
  id: string;
  title: string;
  role: string;
  date: string;
  summary: string;
  impact?: string;
  details: string[];
  link?: { href: string; label: string };
};

export default async function ExperienceSection() {
  const [d, t] = await Promise.all([
    getTranslations("Design"),
    getTranslations("Experience"),
  ]);

  const experiences: Experience[] = [
    {
      id: "ezoko",
      title: t("ezoko_title"),
      role: t("ezoko_role"),
      date: t("ezoko_date"),
      summary: t("ezoko_task_1"),
      impact: t("ezoko_task_3"),
      details: [
        t("ezoko_task_2"),
        t("ezoko_task_4"),
        t("ezoko_task_5"),
        t("ezoko_task_6"),
      ],
    },
    {
      id: "cedille",
      title: t("cedille_title"),
      role: t("cedille_role"),
      date: t("cedille_date"),
      summary: t("cedille_task_1"),
      details: [t("cedille_task_2"), t("cedille_task_3")],
      link: { href: t("cedille_link"), label: t("cedille_link_label") },
    },
    {
      id: "spc",
      title: t("spc_title"),
      role: t("spc_role"),
      date: t("spc_date"),
      summary: t("spc_task_1"),
      details: [
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
            <article key={experience.id} className="experience-row" data-featured={experience.impact ? "true" : undefined}>
              <div className="experience-label"><span className="eyebrow">0{index + 1}</span><span className="experience-date">{experience.date}</span></div>
              <div className="experience-content">
                <h3>{experience.title}</h3><p className="experience-role">{experience.role}</p>
                <p className="experience-summary">{experience.summary}</p>
                {experience.impact && <p className="experience-impact">{experience.impact}</p>}
                <details className="experience-details">
                  <summary>{d("experience_details")}<span aria-hidden="true">+</span></summary>
                  <ul>
                    {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
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
