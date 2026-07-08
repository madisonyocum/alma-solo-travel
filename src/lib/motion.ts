import type { Variants } from "framer-motion";

// ---------------------------------------------------------------------------
// Restrained, shared motion. All of these are gentle fades and rises; the
// <Reveal> component and Framer Motion's reduced-motion handling ensure they
// collapse to no movement when the user prefers reduced motion.
// ---------------------------------------------------------------------------

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
