import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { fadeUpVariants, staggerContainer } from "@/lib/utils/animations"
import { SectionContainer } from "@/components/ui/section-container"
import { cn } from "@/lib/utils"

interface PolicySectionProps {
  id: string
  title: string
  children: ReactNode
  background?: "white" | "gray"
  className?: string
}

export const PolicySection = ({
  id,
  title,
  children,
  background = "white",
  className,
}: PolicySectionProps) => {
  return (
    <SectionContainer
      background={background}
      padding="large"
      className={cn("scroll-mt-24", className)}
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          id={id}
          variants={fadeUpVariants}
          className="text-3xl font-bold text-[#1B365D] mb-8 scroll-mt-24"
        >
          {title}
        </motion.h2>
        
        <motion.div
          variants={fadeUpVariants}
          className="prose prose-slate max-w-none prose-headings:text-[#1B365D] prose-headings:font-semibold prose-h3:text-xl prose-h4:text-lg prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-6 prose-li:mb-2 prose-strong:text-[#1B365D] prose-strong:font-semibold"
        >
          {children}
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}