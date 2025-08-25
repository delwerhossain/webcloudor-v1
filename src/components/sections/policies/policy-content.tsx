"use client"

import { motion } from "framer-motion"
import { fadeUpVariants, staggerContainer } from "@/lib/utils/animations"

interface PolicyContentProps {
  children: React.ReactNode
}

export const PolicyContent = ({ children }: PolicyContentProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <motion.div
        variants={fadeUpVariants}
        className="prose prose-slate max-w-none prose-headings:text-[#1B365D] prose-headings:font-semibold prose-h3:text-xl prose-h4:text-lg prose-p:leading-relaxed prose-p:mb-4 prose-ul:mb-6 prose-li:mb-2 prose-strong:text-[#1B365D] prose-strong:font-semibold"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}