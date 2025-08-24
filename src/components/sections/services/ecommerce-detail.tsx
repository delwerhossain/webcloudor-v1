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

export const EcommerceDetail = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      id="ecommerce"
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
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] leading-tight">
                E-commerce Solutions
              </h2>
              <p className="text-xl text-[#00A8E8] font-medium">
                Storefronts designed to convert
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-[#64748B] leading-relaxed">
              High-converting e-commerce platforms that turn browsers into buyers. 
              We build fast, secure, and user-friendly online stores with advanced 
              analytics to help you understand and optimize your customer journey.
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
                "Custom storefront design",
                "Secure payment processing",
                "Inventory management system",
                "Order fulfillment integration",
                "Advanced analytics dashboard",
                "Marketing automation tools"
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
                "Retailers expanding online",
                "Businesses launching new products",
                "Companies needing B2B commerce",
                "Brands requiring custom checkout flows"
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
            className="bg-gradient-to-r from-[#00A8E8]/5 to-[#FFD700]/5 rounded-2xl p-8 text-center space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#0A0A0B]">
                Ready to launch your online store?
              </h3>
              <p className="text-[#64748B]">
                Let&apos;s build an e-commerce platform that converts
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
                View E-commerce Projects
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
            <div className="aspect-square bg-gradient-to-br from-[#FFD700]/10 via-transparent to-[#00A8E8]/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Store Mockups */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Main Store Interface */}
                <div className="w-48 h-32 bg-white rounded-lg shadow-xl border border-[#E2E8F0] relative z-10">
                  <div className="h-6 bg-[#F8FAFC] rounded-t-lg flex items-center gap-2 px-3">
                    <div className="w-16 h-3 bg-[#E2E8F0] rounded" />
                    <div className="w-8 h-3 bg-[#FFD700] rounded" />
                  </div>
                  <div className="p-3 grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="aspect-square bg-[#F8FAFC] rounded border border-[#E2E8F0]">
                        <div className="p-1">
                          <div className="w-full h-2/3 bg-[#E2E8F0] rounded mb-1" />
                          <div className="h-1 bg-[#00A8E8] rounded w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shopping Cart */}
                <div className="w-16 h-20 bg-white rounded-lg shadow-lg border border-[#E2E8F0] absolute -right-4 top-8 z-20">
                  <div className="p-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="w-6 h-2 bg-[#E2E8F0] rounded" />
                      <div className="w-2 h-2 bg-[#FF5F56] rounded-full" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-1 bg-[#E2E8F0] rounded" />
                      <div className="h-1 bg-[#E2E8F0] rounded w-3/4" />
                    </div>
                    <div className="h-3 bg-[#10B981] rounded text-white flex items-center justify-center text-xs">
                      $
                    </div>
                  </div>
                </div>
              </div>

              {/* Conversion Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1, ease: EASE_CURVE }}
                className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#10B981]">+45%</div>
                  <div className="text-xs text-[#64748B]">Conversion</div>
                </div>
              </motion.div>

              {/* Payment Security Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 1.2, ease: EASE_CURVE }}
                className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#10B981] rounded flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-[#64748B]">Secure</span>
                </div>
              </motion.div>

              {/* Floating Background Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-transparent" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#00A8E8]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}