"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { Badge } from "@/components/ui/badge"
import { fadeUpVariants, slideInVariants, EASE_CURVE } from "@/lib/utils/animations"

const scrollToConsultation = () => {
  const element = document.getElementById("get-started-cta")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const WebDevelopmentDetail = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      id="web-development"
      background="white" 
      padding="large"
    >
      <div ref={ref} className="grid lg:grid-cols-5 gap-16 items-center">
        {/* Content Left - 60% */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div
            variants={slideInVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            {/* Badge */}
            <Badge className="bg-[#FFD700]/20 text-[#FF8C00] border-[#FFD700]/30 font-medium px-4 py-2">
              Most Popular Service
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] leading-tight">
                Web & App Development
              </h2>
              <p className="text-xl text-[#00A8E8] font-medium">
                Modern foundations built for growth
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-[#64748B] leading-relaxed">
              We build responsive websites and web applications using cutting-edge 
              frameworks that ensure your digital presence stays ahead of the competition. 
              Every project is crafted with performance, security, and scalability in mind.
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
            <h3 className="text-xl font-bold text-[#0A0A0B]">What's Included:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Custom responsive design system",
                "React/Next.js development",
                "Progressive Web App features",
                "SEO optimization and analytics",
                "Content management system",
                "3 months free maintenance"
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
                "Growing businesses needing professional presence",
                "Companies requiring custom functionality",
                "Organizations planning digital expansion",
                "Brands wanting competitive advantage"
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

          {/* Recent Results */}
          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.6 }}
            className="bg-[#F8FAFC] rounded-2xl p-6 space-y-4"
          >
            <h3 className="text-xl font-bold text-[#0A0A0B]">Recent Results:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#FFD700] flex-shrink-0 mt-2" />
                <div>
                  <span className="font-semibold text-[#0A0A0B]">TechCorp:</span>
                  <span className="text-[#64748B] ml-1">45% increase in lead generation</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#10B981] flex-shrink-0 mt-2" />
                <div>
                  <span className="font-semibold text-[#0A0A0B]">RetailBrand:</span>
                  <span className="text-[#64748B] ml-1">3x faster page load times</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#00A8E8] flex-shrink-0 mt-2" />
                <div>
                  <span className="font-semibold text-[#0A0A0B]">ServicePro:</span>
                  <span className="text-[#64748B] ml-1">60% improvement in mobile conversions</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Band */}
          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-[#00A8E8]/5 to-[#FFD700]/5 rounded-2xl p-8 text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A0A0B]">
                Ready to build something extraordinary?
              </h3>
              <p className="text-[#64748B]">
                Book a free consultation to discuss your project
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
                View Web Projects
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
            {/* Main Visual Container */}
            <div className="aspect-square bg-gradient-to-br from-[#00A8E8]/10 via-transparent to-[#FFD700]/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Device Mockups */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Desktop Mockup */}
                <div className="w-48 h-32 bg-white rounded-lg shadow-xl border border-[#E2E8F0] relative z-10">
                  <div className="h-6 bg-[#F8FAFC] rounded-t-lg flex items-center gap-1 px-3">
                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2 h-2 rounded-full bg-[#27CA3F]" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 bg-[#00A8E8] rounded w-3/4" />
                    <div className="h-2 bg-[#E2E8F0] rounded w-1/2" />
                    <div className="h-2 bg-[#E2E8F0] rounded w-2/3" />
                  </div>
                </div>

                {/* Mobile Mockup */}
                <div className="w-16 h-28 bg-white rounded-lg shadow-lg border border-[#E2E8F0] absolute -right-4 top-8 z-20">
                  <div className="h-4 bg-[#F8FAFC] rounded-t-lg flex items-center justify-center">
                    <div className="w-6 h-1 bg-[#E2E8F0] rounded-full" />
                  </div>
                  <div className="p-2 space-y-1">
                    <div className="h-1 bg-[#00A8E8] rounded w-full" />
                    <div className="h-1 bg-[#E2E8F0] rounded w-3/4" />
                    <div className="h-1 bg-[#E2E8F0] rounded w-1/2" />
                  </div>
                </div>
              </div>

              {/* Floating Code Snippet */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                animate={isInView ? { opacity: 0.8, y: 0, rotate: -5 } : { opacity: 0, y: 20, rotate: -5 }}
                transition={{ duration: 0.8, delay: 1, ease: EASE_CURVE }}
                className="absolute bottom-4 left-4 bg-[#0A0A0B] text-[#10B981] text-xs font-mono p-3 rounded-lg shadow-lg max-w-32"
              >
                <div className="text-[#00A8E8]">{"<Component"}</div>
                <div className="text-[#FFD700] ml-2">{"responsive"}</div>
                <div className="text-[#00A8E8]">{"/>"}</div>
              </motion.div>

              {/* Performance Metrics Overlay */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 1.2, ease: EASE_CURVE }}
                className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#10B981]">98</div>
                  <div className="text-xs text-[#64748B]">Performance</div>
                </div>
              </motion.div>

              {/* Floating Background Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#00A8E8]/20 to-transparent" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}