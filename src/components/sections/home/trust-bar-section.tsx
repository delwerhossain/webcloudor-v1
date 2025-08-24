'use client'

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils"

const clientLogos = [
  { name: "TechCorp", width: 120, height: 40 },
  { name: "InnovateLab", width: 140, height: 40 },
  { name: "DataFlow", width: 100, height: 40 },
  { name: "CloudVenture", width: 130, height: 40 },
  { name: "FinTech Solutions", width: 150, height: 40 },
  { name: "RetailCorp", width: 110, height: 40 },
]

const logoHoverVariants = {
  rest: { opacity: 0.6 },
  hover: { 
    opacity: 1,
    transition: { duration: 0.2 }
  }
}

export const TrustBarSection = () => {
  return (
    <SectionContainer background="white" padding="default">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        {/* Section Label */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="mb-12"
        >
          <p className="text-sm font-medium text-[#64748B] tracking-wide uppercase">
            Trusted by forward-thinking companies
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center"
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              variants={fadeUpVariants}
              transition={{ 
                duration: 0.6, 
                ease: EASE_CURVE,
                delay: index * 0.1 
              }}
              className="group"
            >
              <motion.div
                variants={logoHoverVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-center justify-center h-16 px-4 py-2 transition-all duration-200"
              >
                {/* Placeholder logo - replace with actual logos */}
                <div 
                  className="bg-[#64748B] flex items-center justify-center text-white text-xs font-medium rounded"
                  style={{ 
                    width: `${logo.width}px`, 
                    height: `${logo.height}px`,
                    minWidth: `${logo.width}px`
                  }}
                >
                  {logo.name}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 md:hidden"
        >
          <p className="text-xs text-[#64748B]/60">
            Swipe to see more
          </p>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}