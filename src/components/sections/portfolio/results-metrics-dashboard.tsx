"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Smartphone, 
  Zap, 
  Shield, 
  Clock, 
  Heart,
  Award,
  Target,
  BookOpen,
  Handshake
} from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { Card } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

interface MetricData {
  icon: React.ReactNode
  title: string
  value: string
  description: string
  finalNumber: number
  suffix: string
  color: string
}

const metricsData: MetricData[] = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Total Client Revenue Generated",
    value: "$25M+",
    description: "Aggregate revenue impact",
    finalNumber: 25,
    suffix: "M+",
    color: "from-green-400 to-emerald-600"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Average ROI",
    value: "340%",
    description: "Return on investment",
    finalNumber: 340,
    suffix: "%",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Average Load Time Reduction",
    value: "68%",
    description: "Performance improvement",
    finalNumber: 68,
    suffix: "%",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Average Conversion Increase",
    value: "34%",
    description: "Conversion optimization",
    finalNumber: 34,
    suffix: "%",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Average User Engagement",
    value: "+89%",
    description: "User experience gains",
    finalNumber: 89,
    suffix: "%",
    color: "from-pink-400 to-rose-600"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mobile Experience Improvement",
    value: "+156%",
    description: "Mobile optimization",
    finalNumber: 156,
    suffix: "%",
    color: "from-indigo-400 to-indigo-600"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Clients That Raised Funding",
    value: "12",
    description: "Companies funded",
    finalNumber: 12,
    suffix: "",
    color: "from-amber-400 to-yellow-600"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Average Traffic Growth",
    value: "245%",
    description: "Organic growth",
    finalNumber: 245,
    suffix: "%",
    color: "from-cyan-400 to-teal-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Average Uptime",
    value: "99.8%",
    description: "Technical excellence",
    finalNumber: 99.8,
    suffix: "%",
    color: "from-red-400 to-red-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Security Incidents",
    value: "0",
    description: "Zero breaches",
    finalNumber: 0,
    suffix: "",
    color: "from-emerald-400 to-green-600"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Client Retention Rate",
    value: "99%",
    description: "Client satisfaction",
    finalNumber: 99,
    suffix: "%",
    color: "from-rose-400 to-pink-600"
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Referral Rate",
    value: "87%",
    description: "Word-of-mouth growth",
    finalNumber: 87,
    suffix: "%",
    color: "from-violet-400 to-purple-600"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "On-Time Delivery",
    value: "99%",
    description: "Project delivery",
    finalNumber: 99,
    suffix: "%",
    color: "from-orange-400 to-amber-600"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Budget Adherence",
    value: "96%",
    description: "Cost predictability",
    finalNumber: 96,
    suffix: "%",
    color: "from-lime-400 to-green-600"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Team Members Trained",
    value: "150+",
    description: "Capacity building",
    finalNumber: 150,
    suffix: "+",
    color: "from-sky-400 to-blue-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Knowledge Transfer Sessions",
    value: "200+",
    description: "Team development",
    finalNumber: 200,
    suffix: "+",
    color: "from-teal-400 to-cyan-600"
  }
]

const AnimatedMetric = ({ metric, delay }: { metric: MetricData; delay: number }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-30%" })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0
        const increment = metric.finalNumber / 80
        const interval = setInterval(() => {
          current += increment
          if (current >= metric.finalNumber) {
            setDisplayValue(metric.finalNumber)
            clearInterval(interval)
          } else {
            setDisplayValue(current)
          }
        }, 20)
        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, metric.finalNumber, delay])

  const formatValue = (value: number): string => {
    if (metric.suffix === "%" && metric.title.includes("Uptime")) {
      return value.toFixed(1)
    }
    if (metric.suffix === "%" || metric.suffix === "") {
      return Math.floor(value).toString()
    }
    if (metric.suffix === "M+") {
      return value.toFixed(0)
    }
    return Math.floor(value).toString()
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE_CURVE, delay }}
      className="group"
    >
      <Card className="relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <div className="relative z-10 text-center space-y-4">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} text-white shadow-lg`}>
            {metric.icon}
          </div>

          {/* Value */}
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-[#FFC300]">
              {metric.value.includes("+") && !metric.value.includes("M") ? "+" : ""}
              {metric.suffix === "$" ? "$" : ""}
              {formatValue(displayValue)}
              {metric.suffix}
            </div>
            <div className="text-lg font-semibold text-white">
              {metric.title}
            </div>
          </div>

          {/* Description */}
          <div className="text-sm text-white/80">
            {metric.description}
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FFC300]/30 rounded-lg transition-colors duration-300" />
      </Card>
    </motion.div>
  )
}

export const ResultsMetricsDashboard = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-5%" })

  return (
    <SectionContainer padding="large" background="blue">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFC300] via-transparent to-[#FF8C00]" />
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="metrics-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#metrics-grid)" className="text-white/20" />
          </svg>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="relative z-10 max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Results That Matter
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Aggregate outcomes across 50+ successful projects. These aren&apos;t just numbers—they represent 
              real business transformations and measurable growth for our clients.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {metricsData.map((metric, index) => (
              <AnimatedMetric
                key={metric.title}
                metric={metric}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div 
            variants={fadeUpVariants}
            className="text-center mt-16 pt-12 border-t border-white/20"
          >
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Ready to become our next success story?
              </h3>
              <p className="text-white/90">
                Join 50+ companies that have transformed their digital presence 
                and achieved measurable growth with WebCloudor.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://calendly.com/ahsanhabibakik/webcloudor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC300] to-[#FF8C00] text-[#0A0A0B] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#FFC300]/25 transition-all duration-300"
                  >
                    Book Free Consultation
                    <TrendingUp className="w-5 h-5" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1B365D] transition-all duration-300"
                  >
                    View All Case Studies
                    <Award className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}