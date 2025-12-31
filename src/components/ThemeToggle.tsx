"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const applyTheme = (enabled: boolean) => {
        setIsDarkMode(enabled);
        document.documentElement.classList.toggle("dark", enabled);
        document.body.classList.toggle("dark", enabled);
        document.documentElement.style.colorScheme = enabled ? "dark" : "light";
        localStorage.setItem("theme", enabled ? "dark" : "light");
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const enabled = storedTheme ? storedTheme === "dark" : prefersDark;
        applyTheme(enabled);
    }, []);

    const toggleTheme = () => {
        applyTheme(!isDarkMode);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
            aria-pressed={isDarkMode}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
        >
            {isDarkMode ? "🌞" : "🌙"}
        </button>
    );
}
