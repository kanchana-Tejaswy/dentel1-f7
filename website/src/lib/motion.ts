import { Transition, Variants, Easing } from "framer-motion";

/**
 * Lumina Motion Configuration
 * Based on "The Breathing Interface" principles.
 */

export const LUMINA_EASING = [0.16, 1, 0.3, 1] as const;

export const EASING = {
  premium: [0.16, 1, 0.3, 1],
  smooth: [0.4, 0, 0.2, 1],
  luxury: [0.19, 1, 0.22, 1],
} as const;

export const durations = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
  luxury: 1.2,
} as const;

export const transitions: Record<string, Transition> = {
  spring: { type: "spring", stiffness: 260, damping: 30 },
  entrance: { duration: durations.slow, ease: EASING.premium as Easing },
  micro: { duration: durations.fast, ease: "easeOut" },
  standard: { duration: durations.medium, ease: EASING.premium as Easing },
  luxury: { duration: durations.luxury, ease: EASING.luxury as Easing },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...transitions.entrance,
      delay: custom,
    },
  }),
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    transition: {
      duration: durations.slow,
      ease: "easeOut",
      delay: custom,
    },
  }),
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...transitions.entrance,
      delay: custom,
    },
  }),
};
