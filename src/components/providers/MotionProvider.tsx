"use client";

import { MotionConfig } from "motion/react";

/**
 * `reducedMotion="user"` disables JS-driven animation when the user has asked for less
 * motion at the OS level. A CSS media query alone does not stop Motion's transforms.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
