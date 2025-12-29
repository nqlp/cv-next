"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TechBadge from "../ui/TechBadge";
import { skillCategories } from "../../data/skills";
import { containerVariants, itemVariants, titleVariants } from "../../lib/motion";

export default function SkillsSection() {
  const tSkills = useTranslations("Skills");

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-extrabold mb-12 text-slate-900 flex items-center gap-3"
        >
          <span className="bg-cyan-600 w-2 h-8 rounded-full"></span>
          {tSkills("title")}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="space-y-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <span className={category.iconColor}>{category.icon}</span> {category.title}
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
