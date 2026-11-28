import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import TechBadge from "@/components/ui/TechBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { containerVariants, itemVariants } from "@/lib/motion";
import { Code2, PanelsTopLeft, Plug, Database, Cloud, Wrench } from "lucide-react";

const categoryIcons = {
  languages: Code2, web: PanelsTopLeft, backend: Plug,
  data: Database, devops: Cloud, tools: Wrench,
};

export default async function SkillsSection() {
  const [d, tSkills] = await Promise.all([
    getTranslations("Design"),
    getTranslations("Skills"),
  ]);

  return (
    <section id="skills" className="content-section skills-section">
      <div className="shell">
        <SectionHeading number="03" caption={d("skills_caption")}>{tSkills("title")}</SectionHeading>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          whileInView="entered"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.key as keyof typeof categoryIcons];
            return (
              <motion.div key={category.key} variants={itemVariants} className="skill-category">
                <h3 className="skill-title">
                  <Icon size={18} className="skill-icon" aria-hidden="true" />
                  {tSkills(`categories.${category.key}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
