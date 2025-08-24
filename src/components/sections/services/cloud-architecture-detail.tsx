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

export const CloudArchitectureDetail = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      id="cloud-architecture"
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
            {/* Main Visual Container */}
            <div className="aspect-square bg-gradient-to-br from-[#00A8E8]/10 via-transparent to-[#10B981]/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Architecture Diagram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Cloud Infrastructure Nodes */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-white rounded-lg shadow-lg border border-[#E2E8F0] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Server Nodes */}
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-white rounded-lg shadow-lg border border-[#E2E8F0] flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#10B981] rounded" />
                  </div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-lg shadow-lg border border-[#E2E8F0] flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#10B981] rounded" />
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <motion.path
                      d="M 120 80 Q 120 120 80 160"
                      stroke="#00A8E8"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: 0.8, ease: EASE_CURVE }}
                    />
                    <motion.path
                      d="M 120 80 Q 120 120 160 160"
                      stroke="#00A8E8"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 1, delay: 1, ease: EASE_CURVE }}
                    />
                  </svg>
                </div>
              </div>

              {/* Uptime Graph Overlay */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 1.2, ease: EASE_CURVE }}
                className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#10B981]">99.9%</div>
                  <div className="text-xs text-[#64748B]">Uptime</div>
                </div>
              </motion.div>

              {/* Security Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.4, ease: EASE_CURVE }}
                className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#00A8E8] rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#64748B]">Secure</span>
                </div>
              </motion.div>

              {/* Floating Background Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#00A8E8]/20 to-transparent" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#10B981]/20 to-transparent" />
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
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] leading-tight">
                Scalable Tech & Cloud Architecture
              </h2>
              <p className="text-xl text-[#00A8E8] font-medium">
                Infrastructure that grows with you
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-[#64748B] leading-relaxed">
              Enterprise-grade architecture designed for businesses that can&apos;t afford downtime. 
              We build scalable, secure, and monitored systems that handle growth seamlessly 
              while maintaining peak performance.
            </p>
          </motion.div>

          {/* What's Included */}
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
                "Auto-scaling cloud infrastructure",
                "Load balancing and CDN setup",
                "Database optimization",
                "Security hardening",
                "Monitoring and alerting",
                "Disaster recovery planning"
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

          {/* Perfect For */}
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
                "High-traffic applications",
                "Businesses expecting rapid growth",
                "Companies with compliance requirements", 
                "Organizations needing 24/7 reliability"
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

          {/* CTA Band */}
          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#00A8E8]/5 to-[#10B981]/5 rounded-2xl p-8 text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A0A0B]">
                Ready for enterprise-grade infrastructure?
              </h3>
              <p className="text-[#64748B]">
                Let&apos;s discuss your scaling requirements
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
                View Architecture Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}