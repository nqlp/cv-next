# 🚀 Portfolio de Paul Nguyen
[*English will follow*](#english-version)

Ce projet est une application web haute performance servant de portfolio personnel. Développé avec **Next.js 15**, il démontre des compétences en architecture logicielle, en internationalisation (i18n) et en automatisation de déploiement (CI/CD).

**Lien:** https://paulnguyen.vercel.app

## 🛠️ Stack Technique

* **Framework :** [Next.js 15](https://nextjs.org/) (App Router)
* **Langage :** [TypeScript](https://www.typescriptlang.org/)
* **Style & Animations :** [Tailwind CSS](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/)
* **Base de données :** [PostgreSQL](https://www.postgresql.org/) avec [Prisma ORM](https://www.prisma.io/)
* **Internationalisation :** [next-intl](https://next-intl-docs.vercel.app/) (Support complet Français / Anglais)
* **Emailing :** [Resend](https://resend.com/) (via Server Actions)
* **Qualité & CI/CD :** GitHub Actions (Linting, Type-checking), ESLint

## ✨ Fonctionnalités Clés

* **Bilingue (FR/EN) :** Détection automatique de la langue et routing localisé (ex: `/fr`, `/en`).
* **Formulaire de Contact Sécurisé :**
    * Validation des données avec **Zod**.
    * Protection **Honeypot** contre les robots.
* Persistance des messages dans PostgreSQL et notification par email.

* **Thème Sombre/Clair :** Support complet du mode nuit via `next-themes`.
* **Performance :** Optimisation des images (`next/image`) et polices locales.
* **Architecture Propre :** Séparation claire entre les données statiques (`/data`), les composants UI et la logique serveur (`/actions`).

## 🏗️ Structure du Projet

```text
src/
├── actions/     # Logique serveur (Server Actions) pour le formulaire
├── app/         # Routes, layouts et pages (Next.js App Router)
├── components/  # Composants React (Sections, UI réutilisable)
├── data/        # Contenu des projets et des compétences (Source of truth)
├── i18n/        # Configuration du routing et des requêtes de traduction
├── lib/         # Instances de bibliothèques (Prisma client, Motion)
└── messages/    # Dictionnaires de traduction JSON (fr.json, en.json)
```

## 🚀 Installation Locale

1. **Cloner le dépôt :**
```bash
git clone https://github.com/nqlp/cv-next.git
cd cv-next
```

2. **Installer les dépendances :**
```bash
npm install
```

3. **Configurer les variables d'environnement :**
Créez un fichier `.env` à la racine :

```env
DATABASE_URL="votre_url_postgres"
RESEND_API_KEY="votre_cle_resend"
```

4. **Initialiser la base de données :**
```bash
npx prisma generate
npx prisma migrate dev
```

5. **Lancer le mode développement :**
```bash
npm run dev
```

## 📈 Pipeline CI/CD

Le projet utilise **GitHub Actions** pour garantir la stabilité du code à chaque modification :

* **Linting :** Vérification du style de code avec ESLint.
* **Type-check :** Validation stricte des types TypeScript.
* **Build :** Test de compilation pour prévenir les erreurs en production.

---

*Fait avec ❤️ par Paul Nguyen — Étudiant en Génie Logiciel à l'ÉTS.*

---

<a id="english-version"></a>
# 🚀 Paul Nguyen's Portfolio

This project is a high-performance web application serving as my personal portfolio. Built with **Next.js 15**, it demonstrates expertise in software architecture, internationalization (i18n) and deployment automation (CI/CD).

**Link**: https://paulnguyen.vercel.app 

## 🛠️ Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling & Animations:** [Tailwind CSS](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/)
* **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
* **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) (Full English / French support)
* **Emailing:** [Resend](https://resend.com/) (via Server Actions)
* **Quality & CI/CD:** GitHub Actions (Linting, Type-checking), ESLint

## ✨ Key Features

* **Bilingual (EN/FR):** Automatic language detection and localized routing (e.g., `/en`, `/fr`).
* **Secure Contact Form:**
* Data validation using **Zod**.
    * **Honeypot** protection to block spam bots.
    * Message persistence in PostgreSQL and instant email notifications.


* **Dark/Light Mode:** Full dark mode support via `next-themes`.
* **Performance:** Optimized images (`next/image`) and local font hosting.
* **Clean Architecture:** Clear separation between static data (`/data`), UI components, and server logic (`/actions`).

## 🏗️ Project Structure

```text
src/
├── actions/     # Server-side logic (Server Actions) for the form
├── app/         # Routes, layouts, and pages (Next.js App Router)
├── components/  # React components (Sections, reusable UI)
├── data/        # Project and skill data (Source of truth)
├── i18n/        # Routing and translation request configuration
├── lib/         # Library instances (Prisma client, Motion)
└── messages/    # JSON translation dictionaries (en.json, fr.json)
```

## 🚀 Local Installation

1. **Clone the repository:**
```bash
git clone https://github.com/nqlp/cv-next.git
cd cv-next
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure environment variables:**
Create a `.env` file in the root directory:
```env
DATABASE_URL="your_postgres_url"
RESEND_API_KEY="your_resend_api_key"
```

4. **Initialize the database:**
```bash
npx prisma generate
npx prisma migrate dev
```


5. **Run in development mode:**
```bash
npm run dev
```

## 📈 CI/CD Pipeline

This project uses **GitHub Actions** to ensure code stability with every push:

* **Linting:** Code style verification with ESLint.
* **Type-check:** Strict TypeScript type validation.
* **Build:** Compilation test to prevent production errors.

---

*Built with ❤️ by Paul Nguyen — Software Engineering Student at ÉTS.*