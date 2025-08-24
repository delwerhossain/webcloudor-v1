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

export const AIAutomationDetail = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      id="ai-automation"
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
            <div className="aspect-square bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#00A8E8]/10 rounded-3xl p-8 relative overflow-hidden">
              {/* AI Chatbot Interface */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-32 bg-white rounded-lg shadow-xl border border-[#E2E8F0] relative z-10">
                  <div className="h-6 bg-[#F8FAFC] rounded-t-lg flex items-center gap-2 px-3">
                    <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="text-xs text-[#64748B]">AI Assistant</span>
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex">
                      <div className="bg-[#00A8E8] text-white text-xs p-2 rounded-lg rounded-bl-none max-w-[80%]">
                        How can I help you today?
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-[#F8FAFC] text-[#64748B] text-xs p-2 rounded-lg rounded-br-none max-w-[80%]">
                        Show me pricing
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-[#64748B] animate-bounce" />
                      <div className="w-1 h-1 rounded-full bg-[#64748B] animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-1 h-1 rounded-full bg-[#64748B] animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Automation Workflow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1, ease: EASE_CURVE }}
                className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#8B5CF6] rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#64748B]">Automated</span>
                </div>
              </motion.div>

              {/* Performance Metrics */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 1.2, ease: EASE_CURVE }}
                className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#8B5CF6]">85%</div>
                  <div className="text-xs text-[#64748B]">Time Saved</div>
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
                Digital Growth (AI Automation)
              </h2>
              <p className="text-xl text-[#00A8E8] font-medium">
                Smart systems that work while you sleep
              </p>
            </div>
            <p className="text-lg text-[#64748B] leading-relaxed">
              AI-powered automation that handles routine tasks, qualifies leads, 
              and provides instant customer support. Free your team to focus on 
              strategic work while AI handles the repetitive processes.
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
                "Custom AI chatbot development",
                "Lead qualification automation",
                "Email marketing automation",
                "Process workflow optimization",
                "Customer service integration",
                "Performance analytics"
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
                "Service businesses with high inquiry volume",
                "Companies wanting to scale customer support",
                "Organizations needing lead qualification",
                "Businesses seeking operational efficiency"
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
            className="bg-gradient-to-r from-[#8B5CF6]/5 to-[#00A8E8]/5 rounded-2xl p-8 text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A0A0B]">
                Ready to automate your workflows?
              </h3>
              <p className="text-[#64748B]">
                Let&apos;s identify processes perfect for AI automation
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
                View Automation Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}