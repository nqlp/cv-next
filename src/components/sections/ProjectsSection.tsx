import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { containerVariants, itemVariants } from "@/lib/motion";

export default async function ProjectsSection() {
  const [d, tProjects] = await Promise.all([
    getTranslations("Design"),
    getTranslations("Projects"),
  ]);

  return (
    <section id="projects" className="content-section projects-section">
      <div className="shell">
        <SectionHeading number="01" caption={d("projects_caption")}>{tProjects("title")}</SectionHeading>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          whileInView="entered"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <ProjectCard
                id={project.id}
                position={index + 1}
                title={project.title}
                description={tProjects(`${project.id}.description`)}
                date={tProjects(`${project.id}.date`)}
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
