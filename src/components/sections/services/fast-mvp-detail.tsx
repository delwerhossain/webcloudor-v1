"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { fadeUpVariants, slideInVariants, EASE_CURVE } from "@/lib/utils/animations"

const scrollToConsultation = () => {
  const element = document.getElementById("get-started-cta")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const FastMVPDetail = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      id="fast-mvp"
      background="gray" 
      padding="large"
    >
      <div ref={ref} className="grid lg:grid-cols-5 gap-16 items-center">
        {/* Visual Left - 40% */}
        <div className="lg:col-span-2 relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_CURVE }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#FF8C00]/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Lightning Speed Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Lightning Bolt */}
                <div className="relative">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-[#FFD700]">
                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" fill="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Speed Lines */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { 
                      opacity: [0, 1, 0],
                      x: [-30, 30, 60]
                    } : { opacity: 0, x: -30 }}
                    transition={{ 
                      duration: 1,
                      delay: 0.8 + i * 0.1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                      ease: EASE_CURVE
                    }}
                    className={`absolute w-8 h-0.5 bg-[#FFD700] rounded`}
                    style={{ 
                      top: `${45 + i * 4}%`,
                      left: `${15 - i * 2}%`
                    }}
                  />
                ))}

                {/* MVP Prototype Mockup */}
                <div className="absolute bottom-8 right-8 w-20 h-14 bg-white rounded-lg shadow-lg border border-[#E2E8F0] p-2">
                  <div className="h-2 bg-[#FFD700] rounded mb-1" />
                  <div className="space-y-1">
                    <div className="h-1 bg-[#E2E8F0] rounded w-full" />
                    <div className="h-1 bg-[#E2E8F0] rounded w-3/4" />
                    <div className="h-1 bg-[#E2E8F0] rounded w-1/2" />
                  </div>
                  <div className="mt-1 h-2 bg-[#00A8E8] rounded text-xs text-white flex items-center justify-center">
                    MVP
                  </div>
                </div>
              </div>

              {/* Time Counter */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 1, ease: EASE_CURVE }}
                className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF8C00]">72h</div>
                  <div className="text-xs text-[#64748B]">Launch Time</div>
                </div>
              </motion.div>

              {/* Investor Ready Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.2, ease: EASE_CURVE }}
                className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#64748B]">Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Content Right - 60% */}
        <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
          <motion.div
            variants={slideInVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] leading-tight">
                Fast MVP Development
              </h2>
              <p className="text-xl text-[#00A8E8] font-medium">
                Test your idea in 1-3 days
              </p>
            </div>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Rapid prototype development that lets you test your concept with real users 
              and investors quickly. Perfect for validating ideas before major investment 
              or securing funding with a working demonstration.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#0A0A0B]">What&apos;s Included:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Core feature implementation",
                "Basic user interface design",
                "User feedback collection system",
                "Analytics and tracking setup",
                "Presentation materials",
                "Iteration roadmap"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: EASE_CURVE }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0" />
                  <span className="text-[#64748B]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#0A0A0B]">Perfect For:</h3>
            <div className="space-y-2">
              {[
                "Entrepreneurs testing new concepts",
                "Companies needing quick market validation",
                "Startups preparing investor presentations",
                "Teams wanting rapid user feedback"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: EASE_CURVE }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00A8E8] flex-shrink-0" />
                  <span className="text-[#64748B]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#FFD700]/5 to-[#FF8C00]/5 rounded-2xl p-8 text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A0A0B]">
                Need to validate fast?
              </h3>
              <p className="text-[#64748B]">
                Get your MVP in front of users within 72 hours
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToConsultation}
                size="lg"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold"
              >
                Start My MVP
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
              >
                View MVP Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}