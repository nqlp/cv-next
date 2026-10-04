# 🚀 Portfolio de Paul Nguyen
[*English will follow*](#english-version)

Ce projet est une application web haute performance servant de portfolio personnel. Développé avec **Next.js 16**, il démontre des compétences en architecture logicielle, en internationalisation (i18n) et en automatisation de déploiement (CI/CD).

**Lien:** https://paulnguyen.vercel.app

## 🛠️ Stack Technique

* **Framework :** [Next.js 16](https://nextjs.org/) (App Router)
* **Langage :** [TypeScript](https://www.typescriptlang.org/)
* **Style & Animations :** [Tailwind CSS](https://tailwindcss.com/) & [Motion](https://motion.dev/)
* **Internationalisation :** [next-intl](https://next-intl-docs.vercel.app/) (Support complet Français / Anglais)
* **Qualité & CI/CD :** GitHub Actions (lint, typecheck, tests, build), ESLint, [Vitest](https://vitest.dev/)

## ✨ Fonctionnalités Clés

* **Bilingue (FR/EN) :** Détection automatique de la langue et routing localisé (ex: `/fr`, `/en`), avec `hreflang`, canonical et sitemap par locale.
* **Rendu statique :** les quatre pages (`/fr`, `/en`, `/fr/contact`, `/en/contact`) sont pré-rendues au build.
* **Contact direct :** liens courriel et adresse copiable sur les pages de contact FR/EN.
* **Thème Sombre/Clair :** Support complet du mode nuit via `next-themes`, sans flash au chargement.
* **Performance :** Optimisation des images (`next/image`, AVIF/WebP) et polices Google servies par `next/font`.
* **Architecture Propre :** Séparation claire entre les données statiques (`/data`), les composants UI et les traductions.

## 🏗️ Structure du Projet

```text
messages/         # Dictionnaires de traduction JSON (fr.json, en.json)
tests/            # Tests Vitest (parité i18n, matcher de routing)
src/
├── app/          # Routes, layouts et pages (Next.js App Router)
├── components/   # Composants React (sections, UI réutilisable, providers)
├── data/         # Structure des projets et compétences (le texte vient de messages/)
├── i18n/         # Configuration du routing et des requêtes de traduction
├── lib/          # Modules transverses (identité du site, variants Motion)
└── proxy.ts      # Middleware Next : redirection de locale
```

## 🚀 Installation Locale

1. **Cloner le dépôt :**
```bash
git clone https://github.com/nqlp/cv-next.git
```

2. **Installer les dépendances :**
```bash
npm install
```

Aucune variable d’environnement ni base de données n’est requise. L’adresse publique se configure dans `src/lib/site.ts`.

3. **Lancer le mode développement :**
```bash
npm run dev
```

## 🧪 Tests et vérifications

```bash
npm run lint && npm run typecheck && npm test
```

Les tests couvrent la parité des clés entre `fr.json` et `en.json`, et le matcher du middleware — la règle de routing dont une régression rendrait la page d'accueil sur toutes les URL.

## 📈 Pipeline CI/CD

Le projet utilise **GitHub Actions** pour garantir la stabilité du code à chaque modification :

* **Linting :** Vérification du style de code avec ESLint.
* **Type-check :** Validation stricte des types TypeScript (`tsc --noEmit`).
* **Tests :** Suite Vitest.
* **Build :** Test de compilation pour prévenir les erreurs en production.

---

*Fait avec ❤️ par Paul Nguyen — Étudiant en Génie Logiciel à l'ÉTS.*

---

<a id="english-version"></a>
# 🚀 Paul Nguyen's Portfolio

This project is a high-performance web application serving as my personal portfolio. Built with **Next.js 16**, it demonstrates expertise in software architecture, internationalization (i18n) and deployment automation (CI/CD).

**Link**: https://paulnguyen.vercel.app

## 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling & Animations:** [Tailwind CSS](https://tailwindcss.com/) & [Motion](https://motion.dev/)
* **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) (Full English / French support)
* **Quality & CI/CD:** GitHub Actions (lint, typecheck, tests, build), ESLint, [Vitest](https://vitest.dev/)

## ✨ Key Features

* **Bilingual (EN/FR):** Automatic language detection and localized routing (e.g., `/en`, `/fr`), with `hreflang`, canonical URLs and a per-locale sitemap.
* **Static rendering:** all four pages (`/fr`, `/en`, `/fr/contact`, `/en/contact`) are prerendered at build time.
* **Direct contact:** email links and a copyable address on the FR/EN contact pages.
* **Dark/Light Mode:** Full dark mode support via `next-themes`, with no flash on load.
* **Performance:** Optimized images (`next/image`, AVIF/WebP) and Google fonts served through `next/font`.
* **Clean Architecture:** Clear separation between static data (`/data`), UI components, and translations.

## 🏗️ Project Structure

```text
messages/         # JSON translation dictionaries (en.json, fr.json)
tests/            # Vitest tests (i18n parity, routing matcher)
src/
├── app/          # Routes, layouts, and pages (Next.js App Router)
├── components/   # React components (sections, reusable UI, providers)
├── data/         # Project and skill structure (text lives in messages/)
├── i18n/         # Routing and translation request configuration
├── lib/          # Cross-cutting modules (site identity, Motion variants)
└── proxy.ts      # Next middleware: locale redirection
```

## 🚀 Local Installation

1. **Clone the repository:**
```bash
git clone https://github.com/nqlp/cv-next.git
```

2. **Install dependencies:**
```bash
npm install
```

No environment variables or database are required. Configure the public email address in `src/lib/site.ts`.

3. **Run in development mode:**
```bash
npm run dev
```

## 🧪 Tests and checks

```bash
npm run lint && npm run typecheck && npm test
```

The tests cover key parity between `fr.json` and `en.json`, and the middleware matcher — the routing rule whose regression would serve the home page on every URL.

## 📈 CI/CD Pipeline

This project uses **GitHub Actions** to ensure code stability with every push:

* **Linting:** Code style verification with ESLint.
* **Type-check:** Strict TypeScript type validation (`tsc --noEmit`).
* **Tests:** Vitest suite.
* **Build:** Compilation test to prevent production errors.

---

*Built with ❤️ by Paul Nguyen — Software Engineering Student at ÉTS.*
