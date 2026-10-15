"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const BUTTON_CLASS =
    "theme-toggle min-h-11 min-w-11";

/**
 * Two buttons, one visible at a time, with the switch driven entirely by CSS (`dark:`).
 *
 * Deliberately stateless: the real theme is unknown during server rendering, so any
 * `useState` would produce either a hydration mismatch or an icon and `aria-label`
 * frozen at the SSR value. Here each button carries its own correct label, and
 * `display:none` removes the hidden one from the accessibility tree — screen readers
 * announce exactly one button, always the right one.
 */
export default function ThemeToggle() {
    const t = useTranslations("Nav");
    const { setTheme } = useTheme();

    return (
        <>
            <button
                type="button"
                onClick={() => setTheme("dark")}
                aria-label={t("theme_to_dark")}
                className={`${BUTTON_CLASS} dark:hidden`}
            >
                <Moon size={18} aria-hidden="true" />
            </button>
            <button
                type="button"
                onClick={() => setTheme("light")}
                aria-label={t("theme_to_light")}
                className={`${BUTTON_CLASS} hidden dark:inline-block`}
            >
                <Sun size={18} aria-hidden="true" />
            </button>
        </>
    );
}
