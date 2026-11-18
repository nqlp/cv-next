"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useLayoutEffect } from "react";

function RestoreThemeBeforePaint() {
    const { resolvedTheme } = useTheme();

    useLayoutEffect(() => {
        if (resolvedTheme !== "dark" && resolvedTheme !== "light") return;

        const root = document.documentElement;
        if (root.classList.contains("dark") || root.classList.contains("light")) return;

        // React can clear <html> attributes when the locale layout remounts.
        root.classList.add(resolvedTheme);
        root.style.colorScheme = resolvedTheme;
    }, [resolvedTheme]);

    return null;
}

/**
 * Wraps next-themes' provider so a server layout can render it.
 * next-themes initializes the theme before hydration and shares it across toggles.
 */
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <RestoreThemeBeforePaint />
            {children}
        </NextThemesProvider>
    );
}
