"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Badge, Card } from "@/components/ui"
import { Button } from "@/components/ui"
import { SectionContainer } from "@/components/ui"
import { ArrowRight, Smartphone, TrendingUp, Clock, DollarSign, Users, Award } from "lucide-react"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

interface Metric {
  icon: React.ReactNode
  label: string
  value: string
  color: string
  finalNumber: number
}

const metrics: Metric[] = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    label: "Mobile Conversion Rate",
    value: "+45%",
    color: "text-emerald-600",
    finalNumber: 45
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "Cart Abandonment",
    value: "-68%", 
    color: "text-blue-600",
    finalNumber: 68
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    label: "Additional Annual Revenue",
    value: "$2.8M",
    color: "text-purple-600",
    finalNumber: 2.8
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: "Load Time Improvement",
    value: "3.2s",
    color: "text-amber-600",
    finalNumber: 3.2
  }
]

const AnimatedMetric = ({ metric, delay }: { metric: Metric; delay: number }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30%" })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0
        const increment = metric.finalNumber / 60
        const interval = setInterval(() => {
          current += increment
          if (current >= metric.finalNumber) {
            setDisplayValue(metric.finalNumber)
            clearInterval(interval)
          } else {
            setDisplayValue(current)
          }
        }, 25)
        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, metric.finalNumber, delay])

  const formatValue = (value: number) => {
    if (metric.value.includes("M")) {
      return `$${value.toFixed(1)}M`
    } else if (metric.value.includes("%")) {
      return `${metric.value.includes("-") ? "-" : "+"}${Math.floor(value)}%`
    } else if (metric.value.includes("s")) {
      return `${value.toFixed(1)}s`
    }
    return value.toString()
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: EASE_CURVE, delay }}
      className="text-center"
    >
      <div className={`${metric.color} mb-3 flex justify-center`}>
        {metric.icon}
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0B] mb-2">
        {formatValue(displayValue)}
      </div>
      <div className="text-xs sm:text-sm text-[#64748B] font-medium text-center">
        {metric.label}
      </div>
    </motion.div>
  )
}

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div className="relative bg-[#F8FAFC] rounded-xl p-4 sm:p-6 border border-[#E2E8F0]">
      <div className="text-center mb-4 sm:mb-6">
        <h4 className="text-base sm:text-lg font-semibold text-[#0A0A0B] mb-2">Mobile Checkout Flow</h4>
        <p className="text-xs sm:text-sm text-[#64748B]">7 steps → 3 steps transformation</p>
      </div>

      <div className="relative overflow-hidden rounded-lg">
        {/* Before/After Content */}
        <div className="flex">
          <div 
            className="bg-red-50 p-4 sm:p-6 lg:p-8 transition-all duration-300"
            style={{ width: `${sliderValue}%` }}
          >
            <div className="text-center">
              <div className="text-red-600 font-semibold mb-3 text-xs sm:text-sm">BEFORE: 7 Steps</div>
              <div className="space-y-1 sm:space-y-2">
                {[1,2,3,4,5,6,7].map(step => (
                  <div key={step} className="h-2 sm:h-3 bg-red-200 rounded mx-auto w-12 sm:w-16"></div>
                ))}
              </div>
              <div className="mt-3 text-xs sm:text-sm text-red-700">68% abandonment</div>
            </div>
          </div>
          <div 
            className="bg-green-50 p-4 sm:p-6 lg:p-8 transition-all duration-300"
            style={{ width: `${100 - sliderValue}%` }}
          >
            <div className="text-center">
              <div className="text-green-600 font-semibold mb-3 text-xs sm:text-sm">AFTER: 3 Steps</div>
              <div className="space-y-1 sm:space-y-2">
                {[1,2,3].map(step => (
                  <div key={step} className="h-2 sm:h-3 bg-green-400 rounded mx-auto w-12 sm:w-16"></div>
                ))}
              </div>
              <div className="mt-3 text-xs sm:text-sm text-green-700">23% abandonment</div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-2 border-[#FFC300] rounded-full shadow-lg pointer-events-none"
            style={{ left: `calc(${sliderValue}% - 12px)` }}
          >
            <div className="absolute inset-1 bg-[#FFC300] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-xs text-[#64748B] mt-4">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  )
}

export const FeaturedCaseStudy = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <SectionContainer padding="large" className="bg-white">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Content Side */}
          <motion.div variants={fadeUpVariants} className="space-y-8">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-[#FFC300]/10 text-[#0A0A0B] border-[#FFC300]">
                <Award className="w-4 h-4 mr-2" />
                Featured Success Story
              </Badge>

              <div>
                <div className="text-[#64748B] font-medium mb-2">Client</div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A0A0B]">GlobalRetail Corp</h2>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0A0A0B] mb-3">
                  Mobile Checkout Abandonment Crisis
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  GlobalRetail was losing $2M annually due to 68% mobile cart abandonment. 
                  Their checkout process had 7 steps, confusing navigation, and slow load times 
                  that frustrated customers and decimated mobile conversions.
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-[#0A0A0B] mb-3">Our Solution</h4>
                <p className="text-[#64748B] leading-relaxed">
                  We rebuilt their entire mobile checkout experience with a streamlined 
                  3-step process, smart form validation, progress indicators, and optimized 
                  performance that reduced load times by 75%.
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                <div>
                  <div className="text-sm font-medium text-[#0A0A0B]">Timeline</div>
                  <div className="text-[#64748B]">8 weeks</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0A0A0B]">Team Size</div>
                  <div className="text-[#64748B]">4 specialists</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0A0A0B]">Technologies</div>
                  <div className="text-[#64748B]">React, Next.js, Stripe</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0A0A0B]">Services</div>
                  <div className="text-[#64748B]">E-commerce, UX/UI</div>
                </div>
              </div>

              {/* Client Quote */}
              <Card className="p-6 bg-gradient-to-r from-[#1B365D]/5 to-[#FFC300]/5 border-[#FFC300]/20">
                <div className="flex items-start gap-4">
                  <div className="text-6xl text-[#FFC300] leading-none">&ldquo;</div>
                  <div>
                    <p className="text-[#0A0A0B] italic leading-relaxed mb-4">
                      The results exceeded our expectations. WebCloudor did not just build us 
                      a better checkout—they transformed our entire mobile revenue stream.
                    </p>
                    <div className="text-sm">
                      <div className="font-semibold text-[#0A0A0B]">Sarah Chen</div>
                      <div className="text-[#64748B]">Head of Digital, GlobalRetail Corp</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#FFC300] to-[#FF8C00] text-[#0A0A0B] hover:shadow-lg hover:shadow-[#FFC300]/25 min-h-[44px] w-full sm:w-auto">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white min-h-[44px] w-full sm:w-auto">
                  Start Similar Project
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div variants={fadeUpVariants} className="space-y-8">
            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {metrics.map((metric, index) => (
                <AnimatedMetric
                  key={metric.label}
                  metric={metric}
                  delay={index * 0.2}
                />
              ))}
            </div>

            {/* Before/After Comparison */}
            <BeforeAfterSlider />

            {/* Additional Visual Elements */}
            <div className="bg-gradient-to-r from-[#1B365D] to-[#2D4B73] rounded-xl p-4 sm:p-6 text-white">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold mb-2">75%</div>
                <div className="text-xs sm:text-sm opacity-90">Load Time Improvement</div>
                <div className="mt-3 sm:mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "75%" } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 1, ease: EASE_CURVE }}
                    className="h-full bg-gradient-to-r from-[#FFC300] to-[#FF8C00]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}