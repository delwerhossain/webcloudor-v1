'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Mail, Clock } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"
import { Button, SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

export const StartProjectSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])

  return (
    <SectionContainer 
      background="gradient" 
      padding="large" 
      className="relative overflow-hidden text-white"
    >
      {/* Animated Background */}
      <motion.div
        ref={containerRef}
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255, 195, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(255, 195, 0, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(255, 195, 0, 0.3) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: EASE_CURVE }}
          className="absolute inset-0"
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: EASE_CURVE }}
          className="absolute top-20 left-20 w-4 h-4 bg-[#FFC300] rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: EASE_CURVE, delay: 2 }}
          className="absolute bottom-32 right-32 w-6 h-6 bg-[#FFC300]/60 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: EASE_CURVE, delay: 4 }}
          className="absolute top-1/2 right-20 w-3 h-3 bg-white/40 rounded-full"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        {/* Main Headline - Mobile Optimized */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: EASE_CURVE }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 sm:mb-6 leading-tight px-2">
            Ready to accelerate{' '}
            <motion.span
              animate={{ color: ["#FFC300", "#FFFFFF", "#FFC300"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              your growth?
            </motion.span>
          </h2>
        </motion.div>

        {/* Subtext - Mobile Optimized */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto px-2">
            Get a free consultation and custom project plan.
            <br className="hidden sm:block" />
            No obligation, just clear next steps.
          </p>
        </motion.div>

        {/* CTA Buttons - Mobile Optimized */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="https://calendly.com/ahsanhabibakik/webcloudor"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="group w-full sm:min-w-[260px] text-base sm:text-lg font-bold shadow-2xl min-h-[56px] touch-manipulation"
              >
                Book Free Consultation
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:min-w-[200px] text-base sm:text-lg font-bold backdrop-blur-sm min-h-[56px] touch-manipulation border-2"
            >
              View Pricing
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Information - Mobile Optimized */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.6 }}
          className="space-y-5 sm:space-y-6"
        >
          {/* Email - Mobile Optimized */}
          <motion.a
            href="mailto:webcloudor@gmail.com"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer min-h-[52px] touch-manipulation"
          >
            <Mail className="w-5 h-5 flex-shrink-0 text-[#FFC300]" />
            <span className="text-white font-semibold text-sm sm:text-base break-all">webcloudor@gmail.com</span>
          </motion.a>

          {/* Response Time - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-white/80"
          >
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium">Response within 24 hours</span>
          </motion.div>
        </motion.div>

        {/* Trust Indicators - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-white/20"
        >
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-white/70 px-2">
            <div className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full flex-shrink-0" />
              <span className="font-medium">Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full flex-shrink-0" />
              <span className="font-medium">No Long-term Contracts</span>
            </div>
            <div className="flex items-center gap-2 min-h-[44px] sm:min-h-0">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full flex-shrink-0" />
              <span className="font-medium">30-day Money-back Guarantee</span>
            </div>
          </div>
        </motion.div>

        {/* Pulsing CTA Reminder - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10 sm:mt-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: EASE_CURVE }}
            className="inline-block bg-[#FFC300]/20 rounded-full px-5 sm:px-6 py-2.5 sm:py-2 text-[#FFC300] text-sm sm:text-base font-semibold"
          >
            Ready to start? Click above to book your consultation
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1B2F] to-transparent" />
    </SectionContainer>
  )
}