"use client";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SOCIAL_LINKS } from "@/lib/site";

export default function HeroSection() {
  const t = useTranslations("Hero");
  const location = useTranslations("Location");
  const d = useTranslations("Design");
  return (
    <section className="hero shell">
      <div className="hero-eyebrow eyebrow"><span className="status-dot" /> {d("discipline")} <span className="hero-location"><MapPin size={13} />{location("title")}</span></div>
      <div className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="hero-copy">
          <h1>Paul<span>Nguyen<span className="name-period">.</span></span></h1>
          <p className="hero-statement">{d("headline")}<br /><span>{d("headline_accent")}</span></p>
          <p className="hero-description">{t("role_prefix")} <strong>{t("role_highlight")}</strong>. {t("description")}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">{d("explore")}<ArrowDown size={17} /></a>
            <a href="/Paul_Nguyen_CV.pdf" target="_blank" rel="noopener noreferrer" className="button button-outline"><Download size={16} />{t("download_cv")}</a>
          </div>
          <div className="hero-socials">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label={t("github_aria")}><FaGithub size={18} />GitHub<ArrowUpRight size={13} /></a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label={t("linkedin_aria")}><FaLinkedin size={18} />LinkedIn<ArrowUpRight size={13} /></a>
            <span className="hero-social-note">{d("built_with_care")}</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="hero-feature">
          <div className="portrait-top"><span className="eyebrow">{d("portrait_label")}</span><span className="portrait-spark" aria-hidden="true">✳</span></div>
          <div className="portrait-frame"><Image src="/caricature.jpg" alt={t("avatar_alt")} fill sizes="(max-width: 767px) 90vw, 450px" className="portrait-image" priority /></div>
          <div className="portrait-caption"><span>Paul Nguyen<span>{location("title")}</span></span><span className="portrait-code" aria-hidden="true">&lt;/&gt;</span></div>
          <div className="portrait-note"><span className="status-dot" />{d("portrait_note")}</div>
        </motion.div>
      </div>
      <div className="hero-bottom"><span className="eyebrow">{d("focus")}</span><span>Next.js <i>/</i> TypeScript <i>/</i> PostgreSQL <i>/</i> Docker</span><a href="#projects" aria-label={d("explore")}><ArrowDown size={20} /></a></div>
    </section>
  );
}