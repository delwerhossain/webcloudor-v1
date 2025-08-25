"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { fadeUpVariants, EASE_CURVE } from "@/lib/utils/animations"

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

export const GetStartedCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      background="gradient" 
      padding="large"
      className="text-white relative overflow-hidden"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-transparent"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-[#00A8E8]/15 to-transparent"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/4 w-16 h-16 rounded-lg bg-gradient-to-br from-[#10B981]/10 to-transparent transform -translate-y-1/2"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/80 via-[#1B365D]/60 to-[#0F1B2F]/80" />
      </div>

      <div id="get-started-cta" ref={ref} className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="space-y-12"
        >
          {/* Main Headlines */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: EASE_CURVE }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Ready to start your project?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
              className="text-lg md:text-xl text-[#E2E8F0] leading-relaxed max-w-2xl mx-auto"
            >
              Get a free consultation and detailed project proposal.{" "}
              <br className="hidden md:block" />
              No obligation, just clear next steps and transparent pricing.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_CURVE }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold px-8 py-6 text-lg shadow-2xl hover:shadow-[0_20px_40px_rgba(255,215,0,0.3)] transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v4m-6 9l4 4 4-4M2 12h10m8 0h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Book Free Consultation
              </Button>
              <p className="text-sm text-[#E2E8F0] mt-2">30-minute strategy call</p>
            </motion.div>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1B365D] px-6 py-6 font-semibold transition-all duration-300"
                >
                  Get Project Quote
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToTop}
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1B365D] px-6 py-6 font-semibold transition-all duration-300"
                >
                  View Our Portfolio
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE_CURVE }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {/* Email */}
              <motion.a
                href="mailto:hello@webcloudor.com"
                whileHover={{ y: -2 }}
                className="group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FFD700]/90 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#1B365D]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                  hello@webcloudor.com
                </div>
                <div className="text-sm text-[#E2E8F0] mt-1">Drop us a line</div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+15551234567"
                whileHover={{ y: -2 }}
                className="group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#00A8E8] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00A8E8]/90 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="font-semibold text-white group-hover:text-[#00A8E8] transition-colors duration-300">
                  +1 (555) 123-4567
                </div>
                <div className="text-sm text-[#E2E8F0] mt-1">Call us directly</div>
              </motion.a>

              {/* Response Time */}
              <motion.div
                whileHover={{ y: -2 }}
                className="group"
              >
                <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#10B981]/90 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="font-semibold text-white group-hover:text-[#10B981] transition-colors duration-300">
                  24 Hours
                </div>
                <div className="text-sm text-[#E2E8F0] mt-1">Response guaranteed</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8, ease: EASE_CURVE }}
            className="flex flex-wrap justify-center gap-8 text-sm text-[#E2E8F0]"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <span>Your information stays private</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00A8E8]" />
              <span>Cancel anytime, no commitment</span>
            </div>
          </motion.div>

          {/* Final Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1, ease: EASE_CURVE }}
            className="border-t border-white/20 pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#FFD700] mb-1">50+</div>
                <div className="text-sm text-[#E2E8F0]">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#00A8E8] mb-1">99%</div>
                <div className="text-sm text-[#E2E8F0]">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#10B981] mb-1">24h</div>
                <div className="text-sm text-[#E2E8F0]">Response Time</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#8B5CF6] mb-1">100%</div>
                <div className="text-sm text-[#E2E8F0]">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}