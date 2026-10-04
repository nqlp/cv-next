"use client";

import Image from "next/image";
import { Mail, MapPin, Download, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { SOCIAL_LINKS } from "@/lib/site";

const SOCIAL_LINK_CLASS =
  "p-3 text-slate-500 dark:text-slate-300 hover:text-white hover:bg-cyan-600 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600";

export default function HeroSection() {
  const tHero = useTranslations("Hero");
  const tLocation = useTranslations("Location");

  const socials = [
    { href: SOCIAL_LINKS.github, label: tHero("github_aria"), icon: <FaGithub size={22} />, external: true },
    { href: SOCIAL_LINKS.linkedin, label: tHero("linkedin_aria"), icon: <FaLinkedin size={22} />, external: true },
    { href: `mailto:${SOCIAL_LINKS.email}`, label: tHero("email_aria"), icon: <Mail size={22} />, external: false },
    { href: `tel:${SOCIAL_LINKS.phone}`, label: tHero("phone_aria"), icon: <FaPhone size={22} />, external: false },
  ];

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
            {tHero("greeting")} <br />
            <span className="bg-linear-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Paul Nguyen
            </span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
          {tHero("role_prefix")} <span className="font-semibold text-slate-900 dark:text-slate-100">{tHero("role_highlight")}</span>.
          {" " + tHero("description")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
          <a
            href="/Paul_Nguyen_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyan-500 text-white px-8 py-3 rounded-full transition hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            <Download size={20} aria-hidden="true" />
            {tHero("download_cv")}
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 text-slate-700 dark:text-slate-200 font-bold px-8 py-4 rounded-full border border-slate-200 dark:border-slate-700 hover:border-cyan-500 hover:text-cyan-600 transition-all bg-white dark:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
          >
            {tHero("contact_me")}
            <ChevronRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-8 shrink-0 relative"
      >
        <div className="relative z-10 group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
            <Image
              src="/caricature.jpg"
              alt={tHero("avatar_alt")}
              fill
              // Without `sizes`, `fill` assumes 100vw and serves the largest srcset
              // candidate for an image that renders at 256/320 px.
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-2 pr-6 rounded-full shadow-lg border border-slate-100/50 dark:border-slate-800 backdrop-blur-sm">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              aria-label={social.label}
              className={SOCIAL_LINK_CLASS}
              {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {social.icon}
            </a>
          ))}
          <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-2"></div>
          <div className="flex flex-col text-xs font-medium text-slate-500 dark:text-slate-300">
            <span className="flex items-center">
              <MapPin size={12} aria-hidden="true" className="text-cyan-500" /> {tLocation("title")}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
