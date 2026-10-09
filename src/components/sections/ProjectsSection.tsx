"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function ProjectsSection() {
  const tProjects = useTranslations("Projects");

  return (
    <section id="projects" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-950 px-4 md:px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>{tProjects("title")}</SectionHeading>

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
                linkLabel={tProjects("view_on_github")}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
