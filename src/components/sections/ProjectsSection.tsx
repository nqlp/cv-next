"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";
import { containerVariants, itemVariants, titleVariants } from "../../lib/motion";

export default function ProjectsSection() {
  const tProjects = useTranslations("Projects");

  return (
    <section id="projects" className="py-24 bg-slate-50 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-extrabold mb-12 text-slate-900 flex items-center gap-3"
        >
          <span className="bg-cyan-600 w-2 h-8 rounded-full"></span>
          {tProjects("title")}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants} className="h-full">
              <ProjectCard
                title={project.title}
                description={tProjects(project.description)}
                date={tProjects(project.date)}
                tags={project.tags}
                link={project.link}
                context={tProjects(`context.${project.context}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
