import HeroSection from "../../components/sections/HeroSection";
import Formation from "../../components/Formation";
import ExperienceSection from "../../components/sections/ExperienceSection";
import SkillsSection from "../../components/sections/SkillsSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import ContactSection from "../../components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans overflow-x-hidden selection:bg-cyan-100 selection:text-cyan-900 dark:selection:bg-cyan-900/40 dark:selection:text-cyan-100">
      <HeroSection />

      <Formation />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
