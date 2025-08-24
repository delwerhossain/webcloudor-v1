'use client'

import { type VariantProps, cva } from "class-variance-authority"
import { motion } from "framer-motion"
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { buttonHoverVariants } from "@/lib/utils/animations"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] shadow-lg hover:shadow-xl hover:from-[#FFD700]/90 hover:to-[#FF8C00]/90 focus-visible:ring-[#FFD700]",
        secondary: "bg-gradient-to-r from-[#00A8E8] to-[#0077C7] text-white shadow-lg hover:shadow-xl hover:from-[#00A8E8]/90 hover:to-[#0077C7]/90 focus-visible:ring-[#00A8E8]",
        outline: "bg-transparent border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white focus-visible:ring-[#00A8E8]",
        ghost: "hover:bg-[#00A8E8]/10 hover:text-[#00A8E8] focus-visible:ring-[#00A8E8]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-lg",
        sm: "h-10 px-4 py-2 rounded-lg",
        lg: "h-14 px-8 py-4 rounded-xl text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ComponentPropsWithoutRef<typeof motion.button>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<ElementRef<typeof motion.button>, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        variants={buttonHoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        {...props}
      />
    )
  }
)
Button.displayName = "Button"