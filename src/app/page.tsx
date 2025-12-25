import ProjectCard from "@/src/components/ProjectCard";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* SECTION HERO */}
      <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Salut, je m'appelle <br />
            <span className="text-cyan-600">Paul Nguyen</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto md:mx-0">
            Étudiant en Génie Logiciel à l'ÉTS. Je conçois des applications web robustes et j'adore analyser de la donnée.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
            <button className="bg-cyan-600 text-white px-8 py-3 rounded-full font-bold hover:bg-cyan-700 transition shadow-lg hover:shadow-cyan-500/25">
              Voir mon CV
            </button>
            <Link href="/contact" className="text-cyan-600 font-bold hover:underline underline-offset-4 px-4">
              Me contacter
            </Link>
          </div>
        </div>

        {/* AVATAR (À droite) */}
        <div className="relative shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-cyan-50 relative z-10">
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
      </section>

      {/* SECTION EXPÉRIENCES & CLUBS */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-4 border-blue-600 w-fit">Expériences</h2>
          <div className="space-y-8">
            {/* Club Cédille */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-blue-800">Club Cédille — ÉTS</h3>
                <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Automne 2025</span>
              </div>
              <p className="font-medium mt-1">Membre (Apprentissage DevOps)</p>
              <li>Approfondir mes connaissances en DevOps et appliquer les bonnes pratiques dans un environnement collaboratif.</li>
              <li>Participer aux réunions hebdomadaires.</li>
              <li>Participer aux ateliers de programmation.</li>
              <Link
                href="https://github.com/ClubCedille"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 inline-flex items-center gap-1 transition-colors"
              >
                GitHub du Club Cédille
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Stage SPC */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">Services partagés Canada (SPC)</h3>
                <span className="text-sm font-semibold bg-slate-100 px-3 py-1 rounded-full">Hiver 2024</span>
              </div>
              <p className="font-medium mt-1">Stagiaire Analyste TI</p>
              <ul className="mt-3 list-disc list-inside text-slate-600 space-y-1">
                <li>Traduire bidirectionnellement des documents techniques et administratifs entre l'anglais et le français.</li>
                <li>Gérer la boite de courriel partagée, incluant le tri et la priorisation des demandes.</li>
                <li>Effecter la mise à jour des fichiers Excel.</li>
                <li>Exécuter des processus d'assurance qualité pour valider la conformité des documents avant diffusion.</li>
                <li>Créer des gabarits standardisés pour questionnaires permettant une collecte de données uniforme.</li>
                <li>Produire des graphiques et visualisations de données avec Excel pour tableaux de bords.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROJETS PERSO */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-blue-600 w-fit">Mes Projets</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Steam Data Analysis"
            description="Analyse de données extraites de Steam avec Python et Pandas pour identifier les tendances de jeux."
            date="Automne 2024"
            tags={["Python", "Pandas", "Matplotlib"]}
            link="https://github.com/nqlp/steam-data-analysis"
          />

          <ProjectCard
            title="Portfolio Next.js"
            description="Refonte complète de mon CV en utilisant les dernières technologies web."
            date="Décembre 2025"
            tags={["Next.js", "TypeScript", "TailwindCSS", "React"]}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}