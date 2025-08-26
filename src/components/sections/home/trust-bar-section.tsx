'use client'

import { motion } from "framer-motion"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

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
    <SectionContainer background="white" padding="small">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        {/* Compact mobile-first design */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="mb-6 sm:mb-8"
        >
          <p className="text-xs sm:text-sm font-medium text-[#64748B] tracking-wide">
            Trusted by 50+ companies
          </p>
        </motion.div>

        {/* Mobile: Horizontal scroll, Desktop: Grid */}
        <motion.div
          variants={staggerContainer}
          className="block sm:hidden"
        >
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            {clientLogos.slice(0, 4).map((logo, index) => (
              <motion.div
                key={logo.name}
                variants={fadeUpVariants}
                transition={{ 
                  duration: 0.6, 
                  ease: EASE_CURVE,
                  delay: index * 0.1 
                }}
                className="group flex-shrink-0"
              >
                <motion.div
                  variants={logoHoverVariants}
                  initial="rest"
                  className="flex items-center justify-center h-10 px-3 py-1 bg-gray-100 rounded-lg"
                >
                  <div 
                    className="bg-[#64748B] flex items-center justify-center text-white text-[10px] font-medium rounded"
                    style={{ 
                      width: `${Math.min(logo.width * 0.7, 80)}px`, 
                      height: `24px`,
                      minWidth: `60px`
                    }}
                  >
                    {logo.name}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={staggerContainer}
          className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center"
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
                className="flex items-center justify-center h-12 px-3 py-2 transition-all duration-200"
              >
                <div 
                  className="bg-[#64748B] flex items-center justify-center text-white text-xs font-medium rounded"
                  style={{ 
                    width: `${logo.width * 0.8}px`, 
                    height: `${logo.height * 0.8}px`,
                    minWidth: `${logo.width * 0.8}px`
                  }}
                >
                  {logo.name}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}