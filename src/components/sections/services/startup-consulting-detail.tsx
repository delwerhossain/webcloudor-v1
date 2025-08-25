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

export const StartupConsultingDetail = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      background="white" 
      padding="large"
    >
      <div id="startup-consulting" ref={ref} className="grid lg:grid-cols-5 gap-16 items-center">
        {/* Content Left - 60% */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div
            variants={slideInVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] leading-tight">
                Startup Consulting
              </h2>
              <p className="text-xl text-[#00A8E8] font-medium">
                From idea to successful launch
              </p>
            </div>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Complete startup guidance from an experienced team that understands 
              both technology and business. We help validate your idea, plan your 
              technical roadmap, and execute a successful market launch.
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
                "Market validation research",
                "Technical feasibility analysis",
                "MVP roadmap planning",
                "Go-to-market strategy",
                "Investor pitch deck creation",
                "Launch execution support"
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
                "First-time entrepreneurs",
                "Technical founders needing business guidance",
                "Companies pivoting to new markets",
                "Startups preparing for funding"
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
            className="bg-gradient-to-r from-[#00A8E8]/5 to-[#FFD700]/5 rounded-2xl p-8 text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A0A0B]">
                Ready to turn your idea into reality?
              </h3>
              <p className="text-[#64748B]">
                Let&apos;s validate your concept and plan your launch
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToConsultation}
                size="lg"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
              >
                View Startup Success Stories
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Visual Right - 40% */}
        <div className="lg:col-span-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_CURVE }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-[#10B981]/10 via-transparent to-[#FFD700]/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Startup Journey Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Rocket */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-white rounded-lg shadow-xl border border-[#E2E8F0] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
                      <path d="M4.5 16.5C4.5 17.61 5.39 18.5 6.5 18.5H17.5C18.61 18.5 19.5 17.61 19.5 16.5V7.5C19.5 6.39 18.61 5.5 17.5 5.5H13L11 3.5H6.5C5.39 3.5 4.5 4.39 4.5 5.5V16.5Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>

                  {/* Growth Chart */}
                  <div className="absolute bottom-8 right-8 w-16 h-12 bg-white rounded-lg shadow-lg border border-[#E2E8F0] p-2">
                    <div className="flex items-end justify-between h-full">
                      <div className="w-1 h-2 bg-[#E2E8F0] rounded" />
                      <div className="w-1 h-4 bg-[#FFD700] rounded" />
                      <div className="w-1 h-6 bg-[#10B981] rounded" />
                      <div className="w-1 h-8 bg-[#00A8E8] rounded" />
                    </div>
                  </div>

                  {/* Connection Path */}
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                      d="M 120 80 Q 160 120 180 160"
                      stroke="#00A8E8"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1.5, delay: 0.8, ease: EASE_CURVE }}
                    />
                  </svg>
                </div>
              </div>

              {/* Funding Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1, ease: EASE_CURVE }}
                className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFD700]">$5M</div>
                  <div className="text-xs text-[#64748B]">Funded</div>
                </div>
              </motion.div>

              {/* Validation Check */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 1.2, ease: EASE_CURVE }}
                className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#64748B]">Validated</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}