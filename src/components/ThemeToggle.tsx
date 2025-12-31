"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const getInitialTheme = () => {
        if (typeof window === "undefined") return false;
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return storedTheme ? storedTheme === "dark" : prefersDark;
    };

    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        document.body.classList.toggle("dark", isDarkMode);
        document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <button
            type="button"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
            aria-pressed={isDarkMode}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
            suppressHydrationWarning
        >
            {isDarkMode ? "🌞" : "🌙"}
        </button>
    );
}
