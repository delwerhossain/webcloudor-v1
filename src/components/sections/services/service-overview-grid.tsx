"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { fadeUpDelayedVariants, cardHoverVariants, EASE_CURVE } from "@/lib/utils/animations"

const services = [
  {
    id: "web-development",
    title: "Web & App Development",
    tagline: "Modern foundations that grow",
    description: "Responsive websites and web applications built with cutting-edge frameworks. Fast, secure, maintainable.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
        <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    benefits: [
      "React/Next.js architecture",
      "Mobile-first responsive design", 
      "Progressive Web App capabilities",
      "SEO optimization built-in"
    ],
    startingPrice: "From $8,000",
    timeline: "4-8 weeks",
    ctaText: "Explore Web Development"
  },
  {
    id: "cloud-architecture",
    title: "Scalable Tech & Cloud Architecture",
    tagline: "Infrastructure that scales",
    description: "Enterprise-grade architecture designed for growth. Reliable, secure, and performance-optimized.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    benefits: [
      "Auto-scaling infrastructure",
      "99.9% uptime guarantee",
      "Advanced security protocols",
      "Real-time monitoring"
    ],
    startingPrice: "From $12,000",
    timeline: "6-10 weeks",
    ctaText: "Explore Architecture"
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    tagline: "Storefronts that convert",
    description: "High-converting e-commerce platforms with secure payments and growth analytics.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
        <path d="M6 2L3 6V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="3,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 10C16 11.1046 15.1046 12 14 12C12.8954 12 12 11.1046 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    benefits: [
      "Headless commerce architecture",
      "Payment gateway integration",
      "Inventory management", 
      "Conversion optimization"
    ],
    startingPrice: "From $15,000",
    timeline: "8-12 weeks",
    ctaText: "Explore E-commerce"
  },
  {
    id: "ai-automation",
    title: "Digital Growth (AI Automation)",
    tagline: "Smart automation that works",
    description: "AI-powered workflows that reduce manual work and increase efficiency.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
        <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    benefits: [
      "Customer service automation",
      "Lead qualification systems",
      "Content generation tools",
      "Process optimization"
    ],
    startingPrice: "From $5,000",
    timeline: "2-6 weeks",
    ctaText: "Explore Automation"
  },
  {
    id: "startup-consulting",
    title: "Startup Consulting",
    tagline: "From idea to launch",
    description: "Complete startup guidance from concept validation to market launch.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
        <path d="M4.5 16.5C4.5 17.61 5.39 18.5 6.5 18.5H17.5C18.61 18.5 19.5 17.61 19.5 16.5V7.5C19.5 6.39 18.61 5.5 17.5 5.5H13L11 3.5H6.5C5.39 3.5 4.5 4.39 4.5 5.5V16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    benefits: [
      "Market validation strategy",
      "Technical roadmap planning",
      "MVP development guidance",
      "Launch strategy execution"
    ],
    startingPrice: "From $3,000",
    timeline: "2-4 weeks",
    ctaText: "Explore Consulting"
  },
  {
    id: "fast-mvp",
    title: "Fast MVP (1-3 Days)",
    tagline: "Test ideas instantly",
    description: "Rapid prototype development to validate concepts and secure funding.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    benefits: [
      "Core functionality focus",
      "Investor-ready presentation",
      "User feedback integration",
      "Quick iteration cycles"
    ],
    startingPrice: "From $1,500",
    timeline: "1-3 days",
    ctaText: "Explore MVP"
  }
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const ServiceOverviewGrid = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      
      background="gray" 
      padding="large"
    >
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-6"
          >
            Choose what you need today,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#0077C7]">
              scale tomorrow
            </span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={fadeUpDelayedVariants}
              initial="initial" 
              animate={isInView ? "animate" : "initial"}
              className="h-full"
            >
              <Card className="p-8 h-full flex flex-col bg-white border border-[#E2E8F0] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-[#00A8E8]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00A8E8]/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A0A0B] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[#00A8E8] font-medium text-sm mb-3">
                        {service.tagline}
                      </p>
                      <p className="text-[#64748B] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0" />
                          <span className="text-sm text-[#64748B]">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="pt-4 border-t border-[#E2E8F0]">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-[#0A0A0B]">
                            {service.startingPrice}
                          </div>
                          <div className="text-sm text-[#64748B]">
                            {service.timeline}
                          </div>
                        </div>
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse"
                          }}
                          className="w-3 h-3 rounded-full bg-[#FFD700]"
                        />
                      </div>

                      <Button
                        onClick={() => scrollToSection(service.id)}
                        variant="outline"
                        size="sm"
                        className="w-full border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white"
                      >
                        {service.ctaText}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}