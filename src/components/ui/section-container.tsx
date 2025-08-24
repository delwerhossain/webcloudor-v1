import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'blue' | 'gradient'
  padding?: 'default' | 'large' | 'small'
  maxWidth?: 'default' | 'narrow' | 'wide'
}

const backgroundVariants = {
  white: 'bg-white',
  gray: 'bg-[#F8FAFC]',
  blue: 'bg-[#1B365D]',
  gradient: 'bg-gradient-to-br from-[#1B365D] to-[#0F1B2F]',
}

const paddingVariants = {
  small: 'py-16 md:py-20',
  default: 'py-20 md:py-24',
  large: 'py-24 md:py-32',
}

const maxWidthVariants = {
  narrow: 'max-w-4xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
}

export const SectionContainer = ({
  children,
  className,
  background = 'white',
  padding = 'default',
  maxWidth = 'default',
}: SectionContainerProps) => {
  return (
    <section className={cn(
      backgroundVariants[background],
      paddingVariants[padding],
      className
    )}>
      <div className={cn(
        'mx-auto px-6 sm:px-8 lg:px-12',
        maxWidthVariants[maxWidth]
      )}>
        {children}
      </div>
    </section>
  )
}