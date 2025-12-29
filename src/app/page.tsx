"use client";

import ProjectCard from "../components/ProjectCard";
import TechBadge from "../components/ui/TechBadge";
import { skillCategories } from "../data/skills";
import { projects } from "../data/projects";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Download, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import Formation from "../components/Formation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-cyan-100 selection:text-cyan-900">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
              Salut, je suis <br />
              <span className="bg-linear-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Paul Nguyen
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Étudiant en <span className="font-semibold text-slate-900">Génie Logiciel à l'ÉTS</span>.
            Passionné par l'architecture robuste et l'expérience utilisateur fluide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              href="/Paul_Nguyen_CV.pdf"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
            >
              <Download size={20} />
              Télécharger CV
            </Link>
            <Link href="/contact" className="w-full sm:w-auto group flex items-center justify-center gap-2 text-slate-700 font-bold px-8 py-4 rounded-full border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-all bg-white cursor-pointer">
              Me contacter
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* AVATAR HERO */}
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
                alt="Portrait de Paul Nguyen"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-2 pr-6 rounded-full shadow-lg border border-slate-100/50 backdrop-blur-sm">
            <a
              href="https://github.com/nqlp"
              target="_blank" className="p-3 text-slate-500 hover:text-white hover:bg-slate-900 rounded-full transition-all"
              title="GitHub">
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nqlpaul/"
              className="p-3 text-slate-500 hover:text-white hover:bg-[#0077b5] rounded-full transition-all"
              title="LinkedIn">
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:quang-long-paul.nguyen.1@etsmtl.ca"
              className="p-3 text-slate-500 hover:text-white hover:bg-cyan-600 rounded-full transition-all"
              title="Envoyer un courriel">
              <Mail size={22} />
            </a>

            <a
              href="tel:+15149127740"
              className="p-3 text-slate-500 hover:text-white hover:bg-cyan-600 rounded-full transition-all"
              title="Appeler">
              <FaPhone size={22} />
            </a>

            <div className="w-px h-8 bg-slate-200 mx-2"></div>
            <div className="flex flex-col text-xs font-medium text-slate-500">
              <span className="flex items-center"><MapPin size={12} className="text-cyan-500" /> Montréal, Québec</span>
            </div>
          </div>
        </motion.div>
      </section>

      <Formation />

      {/* 3. EXPERIENCES SECTION */}
      <section id="experiences" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-extrabold mb-12 text-slate-900 flex items-center gap-3"
          >
            <span className="bg-blue-600 w-2 h-8 rounded-full"></span>
            Expériences
          </motion.h2>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Club Cédille */}
            <motion.div
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-sm border
              border-slate-100 border-l-4
              border-l-blue-600 hover:shadow-xl transition-all
              hover:border-l-blue-500">
              <div
                className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3
                    className="text-xl font-bold
                  text-slate-900
                  group-hover:text-blue-700 transition-colors">Club Cédille — ÉTS</h3>
                  <p className="font-medium text-slate-500">Membre (Apprentissage DevOps)</p>
                </div>
                <span className="text-sm font-bold
                bg-blue-50 
                text-blue-700 px-4 py-2 rounded-full self-start">Automne 2025</span>
              </div>

              <ul className="space-y-3">
                {["Approfondir mes connaissances en DevOps et CI/CD.",
                  "Collaborer sur des projets open-source.",
                  "Participer aux ateliers techniques."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                      {item}
                    </li>
                  ))}
              </ul>
            </motion.div>

            {/* Stage SPC */}
            <motion.div
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-sm border
              border-slate-100 border-l-4
              border-l-slate-400 hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Services partagés Canada (SPC)</h3>
                  <p className="font-medium text-slate-500">Stagiaire Analyste TI</p>
                </div>
                <span className="text-sm font-bold
                bg-slate-100
                text-slate-600 px-4 py-2 rounded-full self-start">Hiver 2024</span>
              </div>

              <ul className="space-y-3">
                {["Traduire des documents techniques.",
                  "Gestion et priorisation des demandes courriel.",
                  "Création de tableaux de bord Excel."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></span>
                      {item}
                    </li>
                  ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPÉTENCES */}
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
            Boite à outils
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

      {/* PROJETS PERSO */}
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
            Mes Projets
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
                  description={project.description}
                  date={project.date}
                  tags={project.tags}
                  link={project.link}
                  context={project.context}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}