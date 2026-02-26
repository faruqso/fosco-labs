import type { Variants } from 'framer-motion';

/** Default transition for most animations */
export const defaultTransition = { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } as const;

/** Snappier for micro-interactions */
export const quickTransition = { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } as const;

/** Section: fade up when scrolling into view (respects reduced motion) */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (reduceMotion?: boolean) => ({
    opacity: 1,
    y: 0,
    transition: reduceMotion
      ? { duration: 0 }
      : { ...defaultTransition, staggerChildren: 0.06, delayChildren: 0.1 },
  }),
};

/** Stagger children (e.g. cards, list items) */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (reduceMotion?: boolean) => ({
    opacity: 1,
    transition: reduceMotion
      ? { duration: 0 }
      : { staggerChildren: 0.08, delayChildren: 0.15 },
  }),
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (reduceMotion?: boolean) => ({
    opacity: 1,
    y: 0,
    transition: reduceMotion ? { duration: 0 } : defaultTransition,
  }),
};

/** Nav: subtle slide down on mount */
export const navVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/** Hero: headline and copy stagger in */
export const heroContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (reduceMotion?: boolean) => ({
    opacity: 1,
    transition: reduceMotion
      ? { duration: 0 }
      : { staggerChildren: 0.12, delayChildren: 0.1 },
  }),
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (reduceMotion?: boolean) => ({
    opacity: 1,
    y: 0,
    transition: reduceMotion ? { duration: 0 } : defaultTransition,
  }),
};

/** Button / link hover and tap */
export const tapScale = { scale: 0.98 };
export const hoverScale = { scale: 1.02 };
export const hoverLift = { y: -2 };
export const cardHover = { y: -4, transition: quickTransition };
