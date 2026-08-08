# 🚀 Portfolio de Paul Nguyen
[*English will follow*](#english-version)

Ce projet est une application web haute performance servant de portfolio personnel. Développé avec **Next.js 16**, il démontre des compétences en architecture logicielle, en internationalisation (i18n) et en automatisation de déploiement (CI/CD).

**Lien:** https://paulnguyen.vercel.app

## 🛠️ Stack Technique

* **Framework :** [Next.js 16](https://nextjs.org/) (App Router)
* **Langage :** [TypeScript](https://www.typescriptlang.org/)
* **Style & Animations :** [Tailwind CSS](https://tailwindcss.com/) & [Motion](https://motion.dev/)
* **Base de données :** [PostgreSQL](https://www.postgresql.org/) avec [Prisma ORM](https://www.prisma.io/)
* **Internationalisation :** [next-intl](https://next-intl-docs.vercel.app/) (Support complet Français / Anglais)
* **Emailing :** [Resend](https://resend.com/) (via Server Actions)
* **Qualité & CI/CD :** GitHub Actions (lint, typecheck, tests, build), ESLint, [Vitest](https://vitest.dev/)

## ✨ Fonctionnalités Clés

* **Bilingue (FR/EN) :** Détection automatique de la langue et routing localisé (ex: `/fr`, `/en`), avec `hreflang`, canonical et sitemap par locale.
* **Rendu statique :** les quatre pages (`/fr`, `/en`, `/fr/contact`, `/en/contact`) sont pré-rendues au build.
* **Formulaire de Contact Sécurisé :**
    * Validation des données avec **Zod**, dans un schéma partagé client/serveur.
    * Messages d'erreur traduits (le schéma émet des clés i18n, jamais du texte).
    * Protection **Honeypot** contre les robots.
    * Persistance des messages dans PostgreSQL et notification par email en texte brut.
* **Thème Sombre/Clair :** Support complet du mode nuit via `next-themes`, sans flash au chargement.
* **Performance :** Optimisation des images (`next/image`, AVIF/WebP) et polices Google servies par `next/font`.
* **Architecture Propre :** Séparation claire entre les données statiques (`/data`), les composants UI et la logique serveur (`/actions`).

## 🏗️ Structure du Projet

```text
messages/         # Dictionnaires de traduction JSON (fr.json, en.json)
prisma/           # Schéma et migrations
tests/            # Tests Vitest (schéma, parité i18n, matcher de routing)
src/
├── actions/      # Logique serveur (Server Actions) pour le formulaire
├── app/          # Routes, layouts et pages (Next.js App Router)
├── components/   # Composants React (sections, UI réutilisable, providers)
├── data/         # Structure des projets et compétences (le texte vient de messages/)
├── i18n/         # Configuration du routing et des requêtes de traduction
├── lib/          # Modules transverses (Prisma, env, validation, variants Motion)
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

3. **Configurer les variables d'environnement :**
Créez un fichier `.env` à la racine. Les trois variables sont obligatoires : `src/lib/env.ts` les valide au chargement, donc le build échoue si l'une manque.

```env
DATABASE_URL="votre_url_postgres"
RESEND_API_KEY="votre_cle_resend"
CONTACT_EMAIL="adresse_de_reception_des_messages"
```

4. **Initialiser la base de données :**
```bash
npx prisma generate && npx prisma migrate dev
```

5. **Lancer le mode développement :**
```bash
npm run dev
```

## 🧪 Tests et vérifications

```bash
npm run lint && npm run typecheck && npm test
```

Les tests couvrent le schéma de validation du formulaire, la parité des clés entre `fr.json` et `en.json`, et le matcher du middleware — la règle de routing dont une régression rendrait la page d'accueil sur toutes les URL.

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
* **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
* **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) (Full English / French support)
* **Emailing:** [Resend](https://resend.com/) (via Server Actions)
* **Quality & CI/CD:** GitHub Actions (lint, typecheck, tests, build), ESLint, [Vitest](https://vitest.dev/)

## ✨ Key Features

* **Bilingual (EN/FR):** Automatic language detection and localized routing (e.g., `/en`, `/fr`), with `hreflang`, canonical URLs and a per-locale sitemap.
* **Static rendering:** all four pages (`/fr`, `/en`, `/fr/contact`, `/en/contact`) are prerendered at build time.
* **Secure Contact Form:**
    * Data validation using **Zod**, in a schema shared between client and server.
    * Translated error messages (the schema emits i18n keys, never text).
    * **Honeypot** protection to block spam bots.
    * Message persistence in PostgreSQL and plain-text email notifications.
* **Dark/Light Mode:** Full dark mode support via `next-themes`, with no flash on load.
* **Performance:** Optimized images (`next/image`, AVIF/WebP) and Google fonts served through `next/font`.
* **Clean Architecture:** Clear separation between static data (`/data`), UI components, and server logic (`/actions`).

## 🏗️ Project Structure

```text
messages/         # JSON translation dictionaries (en.json, fr.json)
prisma/           # Schema and migrations
tests/            # Vitest tests (schema, i18n parity, routing matcher)
src/
├── actions/      # Server-side logic (Server Actions) for the form
├── app/          # Routes, layouts, and pages (Next.js App Router)
├── components/   # React components (sections, reusable UI, providers)
├── data/         # Project and skill structure (text lives in messages/)
├── i18n/         # Routing and translation request configuration
├── lib/          # Cross-cutting modules (Prisma, env, validation, Motion variants)
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

3. **Configure environment variables:**
Create a `.env` file in the root directory. All three are required: `src/lib/env.ts` validates them at load time, so the build fails if any is missing.

```env
DATABASE_URL="your_postgres_url"
RESEND_API_KEY="your_resend_api_key"
CONTACT_EMAIL="address_that_receives_messages"
```

4. **Initialize the database:**
```bash
npx prisma generate && npx prisma migrate dev
```

5. **Run in development mode:**
```bash
npm run dev
```

## 🧪 Tests and checks

```bash
npm run lint && npm run typecheck && npm test
```

The tests cover the contact form's validation schema, key parity between `fr.json` and `en.json`, and the middleware matcher — the routing rule whose regression would serve the home page on every URL.

## 📈 CI/CD Pipeline

This project uses **GitHub Actions** to ensure code stability with every push:

* **Linting:** Code style verification with ESLint.
* **Type-check:** Strict TypeScript type validation (`tsc --noEmit`).
* **Tests:** Vitest suite.
* **Build:** Compilation test to prevent production errors.

---

*Built with ❤️ by Paul Nguyen — Software Engineering Student at ÉTS.*
