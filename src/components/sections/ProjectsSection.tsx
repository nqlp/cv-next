"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function ProjectsSection() {
  const d = useTranslations("Design");
  const tProjects = useTranslations("Projects");

  return (
    <section id="projects" className="content-section projects-section">
      <div className="shell">
        <SectionHeading number="01" caption={d("projects_caption")}>{tProjects("title")}</SectionHeading>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={itemVariants} className="h-full">
              <ProjectCard
                index={index}
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
