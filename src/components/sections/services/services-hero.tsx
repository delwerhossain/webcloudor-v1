"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

const servicePills = [
  { id: "web-development", label: "Web & App Development" },
  { id: "cloud-architecture", label: "Cloud Architecture" },
  { id: "ecommerce", label: "E-commerce Solutions" },
  { id: "ai-automation", label: "AI Automation" },
  { id: "startup-consulting", label: "Startup Consulting" },
  { id: "fast-mvp", label: "Fast MVP (1-3 Days)" },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToConsultation = () => {
  const element = document.getElementById("get-started-cta")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const ServicesHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activePill, setActivePill] = useState<string | null>(null)

  return (
    <SectionContainer 
      background="white" 
      padding="large" 
      className="min-h-[60vh] flex items-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E8]/5 via-transparent to-[#FFD700]/5" />
      
      <div ref={ref} className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-12"
        >
          {/* Main Headlines */}
          <div className="space-y-6">
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: EASE_CURVE }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0B] leading-tight"
            >
              Services that scale with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#0077C7]">
                your ambition
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
              className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed"
            >
              From rapid MVP development to enterprise architecture.{" "}
              <br className="hidden md:block" />
              Modern web solutions designed for growth.
            </motion.p>
          </div>

          {/* Service Navigation Pills */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_CURVE }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            {servicePills.map((pill, index) => (
              <motion.button
                key={pill.id}
                onClick={() => scrollToSection(pill.id)}
                onHoverStart={() => setActivePill(pill.id)}
                onHoverEnd={() => setActivePill(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium
                  transition-all duration-300 border-2
                  ${activePill === pill.id || index === 0
                    ? "bg-[#00A8E8] text-white border-[#00A8E8] shadow-lg"
                    : "bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#00A8E8] hover:text-[#00A8E8]"
                  }
                `}
              >
                {pill.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Trust Line */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE_CURVE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-[#64748B] text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00A8E8]" />
              <span className="font-medium">50+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <span className="font-medium">99% On-Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="font-medium">Enterprise-Grade Security</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, delay: 0.8, ease: EASE_CURVE }}
          >
            <Button 
              onClick={scrollToConsultation}
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold shadow-lg hover:shadow-xl"
            >
              Book Free Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Service Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Web Development Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1, ease: EASE_CURVE }}
            className="absolute top-20 left-10 text-[#00A8E8]/20"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 3L4 7L8 11M16 3L20 7L16 11M12 21L12 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Cloud Icon */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 1.2, ease: EASE_CURVE }}
            className="absolute top-32 right-16 text-[#FFD700]/20"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* E-commerce Icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 1, delay: 1.4, ease: EASE_CURVE }}
            className="absolute bottom-32 left-20 text-[#10B981]/20"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 2L3 6V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="3,6 21,6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 10C16 11.1046 15.1046 12 14 12C12.8954 12 12 11.1046 12 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* AI Icon */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 1, delay: 1.6, ease: EASE_CURVE }}
            className="absolute bottom-40 right-12 text-[#8B5CF6]/20"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M12 7V11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M7 15H17" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}