'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Mail, Clock } from "lucide-react"
import { useRef } from "react"
import { Button, SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils"

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
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Main Headline */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: EASE_CURVE }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
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

        {/* Subtext */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Get a free consultation and custom project plan. 
            <br className="hidden sm:block" />
            No obligation, just clear next steps.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="group min-w-[240px] text-lg font-semibold shadow-2xl"
            >
              Book Free Consultation
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] text-lg font-semibold backdrop-blur-sm"
            >
              View Pricing
            </Button>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
          >
            <Mail className="w-5 h-5 text-[#FFC300]" />
            <span className="text-white font-medium">hello@webcloudor.com</span>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-white/70"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm">Response within 24 hours</span>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 pt-12 border-t border-white/20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full" />
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full" />
              <span>No Long-term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full" />
              <span>30-day Money-back Guarantee</span>
            </div>
          </div>
        </motion.div>

        {/* Pulsing CTA Reminder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: EASE_CURVE }}
            className="inline-block bg-[#FFC300]/20 rounded-full px-6 py-2 text-[#FFC300] text-sm font-medium"
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