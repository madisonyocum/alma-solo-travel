"use client";

import { motion, type Variants } from "framer-motion";
import { fadeRise } from "@/lib/motion";

/**
 * Soft fade-and-rise on scroll into view. Framer Motion automatically
 * disables transforms when the user prefers reduced motion, and we also
 * fall back to a plain opacity variant there.
 */
export function Reveal({
  children,
  className,
  variants = fadeRise,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
