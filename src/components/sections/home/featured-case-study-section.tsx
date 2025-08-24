'use client'

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, Smartphone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button, SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils"

const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 1.2,
  delay = 0 
}: {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return

    const timer = setTimeout(() => {
      animate(0, value, {
        duration,
        ease: EASE_CURVE,
        onUpdate: (v) => setDisplayValue(Math.round(v)),
        onComplete: () => setHasAnimated(true)
      })
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [value, duration, delay, hasAnimated])

  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

const FloatingBadge = ({ 
  children, 
  delay = 0, 
  color = "yellow" 
}: { 
  children: React.ReactNode
  delay?: number
  color?: "yellow" | "blue"
}) => {
  const colorClasses = {
    yellow: "bg-[#FFC300] text-[#0A0A0B]",
    blue: "bg-[#1B365D] text-white"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: EASE_CURVE }}
      animate={{ 
        y: [0, -8, 0],
        transition: { duration: 3, repeat: Infinity, ease: EASE_CURVE }
      }}
      className={`absolute rounded-xl px-3 py-2 text-sm font-semibold shadow-lg ${colorClasses[color]} z-10`}
    >
      {children}
    </motion.div>
  )
}

export const FeaturedCaseStudySection = () => {
  const mockupRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (mockupRef.current) {
      observer.observe(mockupRef.current)
    }

    return () => observer.disconnect()
  }, [inView])

  return (
    <SectionContainer background="blue" padding="large" className="text-white overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: EASE_CURVE }}
            >
              <span className="inline-block bg-[#FFC300] text-[#0A0A0B] px-4 py-2 rounded-full text-sm font-semibold">
                Featured Success Story
              </span>
            </motion.div>

            {/* Client Name */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.1 }}
            >
              <h3 className="text-lg font-medium text-white/80">
                Leading E-commerce Brand
              </h3>
            </motion.div>

            {/* Challenge */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-[#FFC300]">
                The Challenge
              </h4>
              <p className="text-white/90 leading-relaxed">
                Slow mobile checkout causing 40% cart abandonment. 
                Complex user flows frustrating customers.
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-[#FFC300]">
                Our Solution
              </h4>
              <p className="text-white/90 leading-relaxed">
                Streamlined checkout process, optimized mobile experience, 
                implemented smart form validation and progress indicators.
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.4 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-[#FFC300]">
                The Results
              </h4>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFC300] mb-1">
                    {inView ? (
                      <AnimatedCounter value={45} prefix="+" suffix="%" duration={1.5} />
                    ) : "+45%"}
                  </div>
                  <div className="text-sm text-white/70">
                    Checkout Completion
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFC300] mb-1">
                    {inView ? (
                      <AnimatedCounter value={40} prefix="-" suffix="%" duration={1.5} delay={0.3} />
                    ) : "-40%"}
                  </div>
                  <div className="text-sm text-white/70">
                    Cart Abandonment
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFC300] mb-1">
                    {inView ? (
                      <AnimatedCounter value={3} suffix="×" duration={1.5} delay={0.6} />
                    ) : "3×"}
                  </div>
                  <div className="text-sm text-white/70">
                    Faster Page Load
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.6 }}
            >
              <Button variant="outline" className="group">
                View Full Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            ref={mockupRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE_CURVE, delay: 0.3 }}
            className="relative"
          >
            {/* Mobile Mockups */}
            <div className="relative flex justify-center items-center">
              {/* Before Mockup */}
              <motion.div
                className="relative z-10 bg-white rounded-3xl p-2 shadow-2xl transform -rotate-6"
                whileHover={{ rotate: -3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gray-100 rounded-2xl w-48 h-96 relative overflow-hidden">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-400 rounded-full" />
                  <div className="p-6 space-y-4 mt-8">
                    <div className="h-4 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-1/2" />
                    <div className="space-y-2 mt-8">
                      <div className="h-8 bg-gray-300 rounded" />
                      <div className="h-8 bg-gray-300 rounded" />
                      <div className="h-8 bg-gray-300 rounded" />
                    </div>
                    <div className="h-10 bg-red-200 rounded mt-8" />
                  </div>
                  <div className="absolute bottom-6 left-6 text-xs text-gray-600 font-medium">
                    BEFORE
                  </div>
                </div>
              </motion.div>

              {/* After Mockup */}
              <motion.div
                className="relative z-20 bg-white rounded-3xl p-2 shadow-2xl transform rotate-6 -ml-8"
                whileHover={{ rotate: 3, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl w-48 h-96 relative overflow-hidden">
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-400 rounded-full" />
                  <div className="p-6 space-y-4 mt-8">
                    <div className="h-4 bg-[#1B365D] rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                    <div className="space-y-3 mt-8">
                      <div className="h-6 bg-white rounded shadow-sm" />
                      <div className="h-6 bg-white rounded shadow-sm" />
                    </div>
                    <div className="h-10 bg-[#FFC300] rounded mt-8 flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-[#0A0A0B]" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-xs text-[#1B365D] font-medium">
                    AFTER
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Metrics */}
            <FloatingBadge delay={0.8} color="yellow">
              <span className="absolute -top-8 -left-12">
                +45% Conversion
              </span>
            </FloatingBadge>

            <FloatingBadge delay={1.2} color="blue">
              <span className="absolute -bottom-8 -right-12">
                3× Faster Loading
              </span>
            </FloatingBadge>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFC300]/20 via-transparent to-[#FFC300]/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}