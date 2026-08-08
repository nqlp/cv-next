"use client";

import { motion } from "motion/react";
import { titleVariants } from "@/lib/motion";

/**
 * Section heading — was duplicated verbatim across all four sections
 * (same classes, same variants; only the accent bar's colour differed).
 */
export default function SectionHeading({
    children,
    accentClass = "bg-cyan-600",
}: {
    children: React.ReactNode;
    accentClass?: string;
}) {
    return (
        <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-extrabold mb-12 text-slate-900 dark:text-slate-100 flex items-center gap-3"
        >
            <span className={`${accentClass} w-2 h-8 rounded-full`} />
            {children}
        </motion.h2>
    );
}
