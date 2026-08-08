"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const BUTTON_CLASS =
    "p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600";

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
                🌙
            </button>
            <button
                type="button"
                onClick={() => setTheme("light")}
                aria-label={t("theme_to_light")}
                className={`${BUTTON_CLASS} hidden dark:inline-block`}
            >
                🌞
            </button>
        </>
    );
}
