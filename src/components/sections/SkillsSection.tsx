"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import TechBadge from "@/components/ui/TechBadge";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function SkillsSection() {
  const tSkills = useTranslations("Skills");

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>{tSkills("title")}</SectionHeading>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.key} variants={itemVariants} className="space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className={category.iconColor} aria-hidden="true">{category.icon}</span>{" "}
                {tSkills(`categories.${category.key}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <TechBadge key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
