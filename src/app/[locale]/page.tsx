import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/sections/HeroSection";
import Formation from "@/components/sections/Formation";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="portfolio-page">
      <HeroSection />

      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <Formation />
      <ContactSection />
    </div>
  );
}
