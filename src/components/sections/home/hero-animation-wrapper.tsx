'use client'

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

const floatingCardVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: EASE_CURVE,
    },
  },
}

const pulseVariants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: EASE_CURVE,
    },
  },
}

interface HeroAnimationWrapperProps {
  children: React.ReactNode
  className?: string
}

export const HeroAnimationWrapper = ({ children, className }: HeroAnimationWrapperProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className={cn("space-y-8", className)}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedContentProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const AnimatedContent = ({ children, delay = 0, className }: AnimatedContentProps) => (
  <motion.div
    variants={fadeUpVariants}
    transition={{ duration: 0.6, ease: EASE_CURVE, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

interface PulseButtonProps {
  children: React.ReactNode
  className?: string
}

export const PulseButton = ({ children, className }: PulseButtonProps) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      variants={shouldReduceMotion ? {} : pulseVariants}
      animate={shouldReduceMotion ? {} : "animate"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface FloatingVisualProps {
  className?: string
  children: React.ReactNode
}

export const FloatingVisual = ({ children, className }: FloatingVisualProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE_CURVE, delay: 0.3 }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  )
}

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const FloatingCard = ({ children, className, delay = 0 }: FloatingCardProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : floatingCardVariants}
      animate={shouldReduceMotion ? {} : "animate"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.6 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
    >
      <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
    </motion.div>
  </motion.div>
)