import HeroSection from "../../components/sections/HeroSection";
import Formation from "../../components/Formation";
import ExperienceSection from "../../components/sections/ExperienceSection";
import SkillsSection from "../../components/sections/SkillsSection";
import ProjectsSection from "../../components/sections/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-cyan-100 selection:text-cyan-900">
      <HeroSection />

      <Formation />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
