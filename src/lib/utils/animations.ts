import type { Variants } from "framer-motion"

// Standard easing curve for WebCloudor
export const EASE_CURVE = [0.4, 0, 0.2, 1] as const

// Common animation variants
export const fadeUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

export const fadeUpDelayedVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_CURVE,
      delay: delay * 0.15, // 150ms stagger
    },
  }),
}

export const scaleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_CURVE,
    },
  },
}

export const slideInVariants: Variants = {
  initial: {
    opacity: 0,
    x: -32,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: EASE_CURVE,
    },
  },
}

// Container variants for stagger animations
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Counter animation utility
export const createCounterVariant = (
  finalValue: number,
  duration: number = 1.2
): any => ({
  initial: { value: 0 },
  animate: {
    value: finalValue,
    transition: {
      duration,
      ease: EASE_CURVE,
    },
  },
})

// Hover animations
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: EASE_CURVE,
    },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: EASE_CURVE,
    },
  },
}

export const buttonHoverVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: EASE_CURVE,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: EASE_CURVE,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: EASE_CURVE,
    },
  },
}

// Parallax utility
export const createParallaxOffset = (scrollY: number, speed: number = 0.2) => {
  return scrollY * speed
}

// Intersection observer options
export const defaultIntersectionOptions = {
  threshold: 0.1,
  triggerOnce: true,
}