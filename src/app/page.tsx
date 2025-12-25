"use client";

import ProjectCard, { ProjectType } from "@/src/components/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import Formation from "../components/Formation";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const } },
};

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Salut, je m'appelle <br />
            <span className="text-cyan-600">Paul Nguyen</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
            Étudiant en Génie Logiciel à l'ÉTS. Je conçois des applications web robustes.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <Link href="/Paul_Nguyen_CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-cyan-600 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-700 transition shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 duration-200 cursor-pointer">
                Voir mon CV
              </button>
            </Link>
            <Link href="/contact" className="text-cyan-600 font-bold hover:underline underline-offset-4 px-4">
              Me contacter
            </Link>
          </div>
        </motion.div>

        {/* AVATAR HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 shrink-0 relative"
        >
          {/* AVATAR */}
          <div className="relative z-10">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-cyan-50 relative">
              <Image
                src="/caricature.jpg"
                alt="Portrait de Paul Nguyen"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-blob"></div>
          </div>

          <div className="flex items-center gap-4 bg-white p-3 rounded-full shadow-sm border border-slate-100">
            {/* GitHub */}
            <a href="https://github.com/nqlp" target="_blank" className="p-2 text-slate-600 hover:text-black hover:bg-slate-50 rounded-full transition-all hover:-translate-y-1" title="GitHub">
              <FaGithub size={24} />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/nqlpaul/" className="p-2 text-slate-600 hover:text-[#0077b5] hover:bg-slate-50 rounded-full transition-all hover:-translate-y-1" title="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            {/* Email */}
            <a href="mailto:quang-long-paul.nguyen.1@etsmtl.ca" className="p-2 text-slate-600 hover:text-cyan-600 hover:bg-slate-50 rounded-full transition-all hover:-translate-y-1" title="Courriel">
              <Mail size={24} />
            </a>
            {/* Phone */}
            <a href="tel:+5149127740" className="p-2 text-slate-600 hover:text-green-600 hover:bg-slate-50 rounded-full transition-all hover:-translate-y-1" title="Cellulaire">
              <FaPhone size={20} />
            </a>
            {/* Separateur */}
            <div className="w-px h-6 bg-slate-200 mx-1"></div>
            <div className="flex items-center gap-2 px-2 text-slate-500 text-sm font-medium">
              <MapPin size={16} />
              <span>Montreal, QC</span>
            </div>
          </div>
        </motion.div>
      </section>

      <Formation />

      <section id="experiences" className="py-16 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 border-b-4 border-blue-600 w-fit"
          >
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
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-blue-800">Club Cédille — ÉTS</h3>
                <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Automne 2025</span>
              </div>
              <p className="font-medium mt-1">Membre (Apprentissage DevOps)</p>

              <ul className="mt-3 list-disc list-inside text-slate-600 space-y-1">
                <li>Approfondir mes connaissances en DevOps et appliquer les bonnes pratiques dans un environnement collaboratif.</li>
                <li>Participer aux réunions hebdomadaires.</li>
                <li>Participer aux ateliers de programmation.</li>
                <div className="flex justify-end mt-2">
                  <a href="https://github.com/ClubCedille" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline underline-offset-2 flex items-center gap-2">
                    <FaGithub size={25} />
                  </a>
                </div>
              </ul>
            </motion.div>

            {/* Stage SPC */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">Services partagés Canada (SPC)</h3>
                <span className="text-sm font-semibold bg-slate-100 px-3 py-1 rounded-full">Hiver 2024</span>
              </div>
              <p className="font-medium mt-1">Stagiaire Analyste TI</p>
              <ul className="mt-3 list-disc list-inside text-slate-600 space-y-1">
                <li>Traduire bidirectionnellement des documents techniques et administratifs entre l'anglais et le français.</li>
                <li>Gérer la boite de courriel partagée, incluant le tri et la priorisation des demandes.</li>
                <li>Effectuer la mise à jour des fichiers Excel.</li>
                <li>Exécuter des processus d'assurance qualité pour valider la conformité des documents avant diffusion.</li>
                <li>Créer des gabarits standardisés pour questionnaires permettant une collecte de données uniforme.</li>
                <li>Produire des graphiques et visualisations de données avec Excel pour tableaux de bords.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION PROJETS PERSO */}
      <section id="projects" className="py-16 max-w-5xl mx-auto px-6">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 border-b-4 border-blue-600 w-fit"
        >
          Mes Projets
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="h-full">
            <ProjectCard
              title="Steam Data Analysis"
              description="Analyse de données extraites de Steam avec Python et Pandas pour identifier les tendances de jeux."
              date="Automne 2025"
              tags={["Python", "Pandas", "SQL"]}
              link="https://github.com/nqlp/steam-data-analysis"
              context={ProjectType.Personnel}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <ProjectCard
              title="Portfolio Next.js"
              description="Refonte complète de mon CV en utilisant les dernières technologies web."
              date="Décembre 2025"
              tags={["Next.js", "TypeScript", "TailwindCSS", "React"]}
              context={ProjectType.Personnel}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <ProjectCard
              title="VéloFacile"
              description="Application web pour faciliter la location de vélos entre particuliers à Montréal."
              date="Été 2025"
              tags={["React", "TypeScript", "TailwindCSS", "Vite"]}
              context={ProjectType.Academique}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="h-full">
            <ProjectCard
              title="Nomàuclature"
              description="Portfolio collaboratif."
              date="Hiver 2025"
              tags={["React", "Vite", "TypeScript"]}
              link="https://github.com/Orchydae/nomauclature"
              context={ProjectType.Personnel}
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}