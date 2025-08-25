"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { 
  ArrowRight, 
  Calendar, 
  FileText, 
  DollarSign, 
  MessageCircle, 
  Phone, 
  Mail,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  Users,
  Zap,
  Heart
} from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { Button } from "@/components/ui"
import { Card } from "@/components/ui"
import { Badge } from "@/components/ui"
import { fadeUpVariants, staggerContainer, buttonHoverVariants, EASE_CURVE } from "@/lib/utils/animations"

const valuePropositions = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Free 30-minute strategy consultation",
    description: "No sales pitch, just actionable insights"
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Custom project proposal within 48 hours", 
    description: "Detailed timeline, technology stack, and deliverables"
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "Transparent pricing and timeline",
    description: "Fixed-price quotes with no hidden surprises"
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Risk-free discussion of your goals",
    description: "Confidential consultation with industry experts"
  }
]

const trustIndicators = [
  {
    icon: <Shield className="w-4 h-4" />,
    text: "No spam, ever"
  },
  {
    icon: <Heart className="w-4 h-4" />,
    text: "Your information stays confidential"
  },
  {
    icon: <Clock className="w-4 h-4" />,
    text: "Cancel anytime, no commitment"
  }
]

const socialProofMetrics = [
  {
    icon: <Star className="w-5 h-5" />,
    value: "50+",
    label: "Successful Clients"
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    value: "99%",
    label: "On-time Delivery"
  },
  {
    icon: <Users className="w-5 h-5" />,
    value: "24hrs",
    label: "Response Time"
  }
]

const FloatingElement = ({ 
  children, 
  delay, 
  direction = 1 
}: { 
  children: React.ReactNode
  delay: number
  direction?: number
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -10 * direction, 0],
        rotate: [0, 2 * direction, 0],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay
      }}
      className="absolute opacity-10 sm:opacity-20 hidden sm:block"
    >
      {children}
    </motion.div>
  )
}

export const StartProjectCTA = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 1000], [0, -50])

  return (
    <SectionContainer padding="large" className="relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] via-[#2D4B73] to-[#1B365D]" />
        <motion.div
          style={{ y: yParallax }}
          className="absolute inset-0 bg-gradient-to-tr from-[#FFC300]/20 via-transparent to-[#FF8C00]/10"
        />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" className="text-[#FFC300]">
                  <animate attributeName="r" values="1;2;1" dur="4s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cta-grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingElement delay={0} direction={1}>
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFC300] rounded-full flex items-center justify-center top-10 sm:top-20 left-4 sm:left-10">
          <Zap className="w-5 h-5 sm:w-8 sm:h-8 text-[#1B365D]" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2} direction={-1}>
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#FF8C00] rounded-full flex items-center justify-center top-16 sm:top-32 right-4 sm:right-20">
          <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
        </div>
      </FloatingElement>

      <FloatingElement delay={1} direction={1}>
        <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center bottom-16 sm:bottom-32 left-4 sm:left-20">
          <Users className="w-6 h-6 sm:w-10 sm:h-10 text-[#FFC300]" />
        </div>
      </FloatingElement>

      <FloatingElement delay={3} direction={-1}>
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FFC300] rounded-full bottom-10 sm:bottom-20 right-6 sm:right-32" />
      </FloatingElement>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Main Headline */}
        <motion.div variants={fadeUpVariants} className="mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to join our{" "}
            <span className="bg-gradient-to-r from-[#FFC300] to-[#FF8C00] bg-clip-text text-transparent">
              success stories?
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Get a free consultation and see how we can deliver similar results for your business. 
            No obligation, just clear next steps and transparent project planning.
          </p>
        </motion.div>

        {/* Value Propositions */}
        <motion.div variants={fadeUpVariants} className="mb-8 sm:mb-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {valuePropositions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  ease: EASE_CURVE,
                  delay: 0.3 + index * 0.1 
                }}
              >
                <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-left">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFC300] rounded-xl flex items-center justify-center text-[#1B365D] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={fadeUpVariants} className="mb-8 sm:mb-12 px-4">
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center">
            {/* Primary CTA */}
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FFC300] to-[#FF8C00] text-[#0A0A0B] hover:shadow-2xl hover:shadow-[#FFC300]/25 font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg rounded-full w-full sm:w-auto min-h-[44px]"
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Book Free Consultation
                </Button>
              </Link>
              <div className="text-xs text-white/70 mt-2 text-center hidden sm:block">
                Available this week
              </div>
            </motion.div>

            {/* Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.div
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1B365D] font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-full w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Get Project Quote
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={buttonHoverVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#1B365D] font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 rounded-full w-full sm:w-auto min-h-[44px] text-sm sm:text-base"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Download Case Studies
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={fadeUpVariants} className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">
              Prefer to talk directly?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center justify-center gap-3 text-white">
                <Mail className="w-5 h-5 text-[#FFC300]" />
                <a href="mailto:hello@webcloudor.com" className="hover:text-[#FFC300] transition-colors">
                  hello@webcloudor.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <Phone className="w-5 h-5 text-[#FFC300]" />
                <a href="tel:+15551234567" className="hover:text-[#FFC300] transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="text-center mt-4">
              <Badge variant="outline" className="border-[#FFC300] text-[#FFC300] bg-[#FFC300]/10">
                <Clock className="w-4 h-4 mr-2" />
                Guaranteed response within 24 hours
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Social Proof Metrics */}
        <motion.div variants={fadeUpVariants} className="mb-8">
          <div className="flex justify-center items-center gap-2 mb-6 text-white/90">
            <Star className="w-5 h-5 fill-[#FFC300] text-[#FFC300]" />
            <span className="text-lg">
              Join 50+ successful clients who&apos;ve transformed their digital presence
            </span>
          </div>

          <div className="flex justify-center items-center gap-8">
            {socialProofMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  ease: EASE_CURVE,
                  delay: 0.8 + index * 0.1 
                }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-[#FFC300]">
                    {metric.icon}
                  </div>
                  <div className="text-xl font-bold text-white">
                    {metric.value}
                  </div>
                </div>
                <div className="text-sm text-white/70">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={fadeUpVariants}>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.4, 
                  ease: EASE_CURVE,
                  delay: 1 + index * 0.1 
                }}
                className="flex items-center gap-2"
              >
                <div className="text-[#FFC300]">
                  {indicator.icon}
                </div>
                {indicator.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}