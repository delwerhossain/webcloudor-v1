"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fadeUpDelayedVariants, cardHoverVariants, EASE_CURVE } from "@/lib/utils/animations"

const packages = [
  {
    name: "Starter Package",
    priceRange: "$5,000 - $15,000",
    timeline: "2-6 weeks",
    bestFor: "Small businesses and startups",
    popular: false,
    includes: [
      "Basic web presence or MVP",
      "Mobile-responsive design",
      "Content management system",
      "Basic SEO optimization",
      "1 month free support"
    ],
    popularServices: ["Web development", "MVP", "Consulting"],
    ctaText: "Start Your Project",
    features: [
      { name: "Custom Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "CMS Integration", included: true },
      { name: "SEO Optimization", included: true },
      { name: "Analytics Setup", included: false },
      { name: "E-commerce Features", included: false },
      { name: "Advanced Integrations", included: false },
      { name: "Priority Support", included: false }
    ]
  },
  {
    name: "Growth Package",
    priceRange: "$15,000 - $35,000",
    timeline: "6-10 weeks",
    bestFor: "Growing businesses",
    popular: true,
    includes: [
      "Custom web application or e-commerce",
      "Advanced functionality",
      "Third-party integrations",
      "Performance optimization",
      "3 months free support"
    ],
    popularServices: ["E-commerce", "Web apps", "Cloud architecture"],
    ctaText: "Choose Growth",
    features: [
      { name: "Custom Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "CMS Integration", included: true },
      { name: "SEO Optimization", included: true },
      { name: "Analytics Setup", included: true },
      { name: "E-commerce Features", included: true },
      { name: "Advanced Integrations", included: true },
      { name: "Priority Support", included: false }
    ]
  },
  {
    name: "Enterprise Package",
    priceRange: "$35,000+",
    timeline: "10+ weeks",
    bestFor: "Large organizations",
    popular: false,
    includes: [
      "Complex system architecture",
      "Multiple integrations",
      "Advanced security features",
      "Dedicated project team",
      "6 months free support"
    ],
    popularServices: ["Enterprise architecture", "Custom platforms"],
    ctaText: "Discuss Enterprise",
    features: [
      { name: "Custom Design", included: true },
      { name: "Mobile Responsive", included: true },
      { name: "CMS Integration", included: true },
      { name: "SEO Optimization", included: true },
      { name: "Analytics Setup", included: true },
      { name: "E-commerce Features", included: true },
      { name: "Advanced Integrations", included: true },
      { name: "Priority Support", included: true }
    ]
  }
]

const scrollToConsultation = () => {
  const element = document.getElementById("get-started-cta")
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const PricingPackages = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      id="pricing-packages"
      background="white" 
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
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
            className="text-lg md:text-xl text-[#64748B] leading-relaxed"
          >
            Choose the investment level that fits your goals
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              custom={index}
              variants={fadeUpDelayedVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="h-full relative"
            >
              <Card className={`p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 group ${
                pkg.popular 
                  ? "border-2 border-[#FFD700] bg-gradient-to-b from-[#FFD700]/5 to-white shadow-xl" 
                  : "border border-[#E2E8F0] bg-white hover:shadow-xl"
              }`}>
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="h-full flex flex-col relative z-10"
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse"
                      }}
                      className="absolute -top-4 -right-4 z-20"
                    >
                      <Badge className="bg-[#FFD700] text-[#0A0A0B] border-[#FFD700] font-bold px-4 py-2 shadow-lg">
                        ⭐ Most Popular
                      </Badge>
                    </motion.div>
                  )}

                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#0A0A0B] mb-2">
                      {pkg.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="text-3xl md:text-4xl font-bold text-[#00A8E8]">
                        {pkg.priceRange}
                      </div>
                      <div className="text-sm text-[#64748B] font-medium">
                        {pkg.timeline}
                      </div>
                    </div>
                    <div className="mt-4">
                      <span className="text-sm text-[#64748B]">Best For: </span>
                      <span className="text-sm font-semibold text-[#0A0A0B]">{pkg.bestFor}</span>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-[#0A0A0B]">What&apos;s Included:</h4>
                      {pkg.includes.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.5 + index * 0.2 + itemIndex * 0.1, 
                            ease: EASE_CURVE 
                          }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#10B981] flex-shrink-0" />
                          <span className="text-sm text-[#64748B]">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Popular Services */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-[#0A0A0B]">Popular Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.popularServices.map((service, serviceIndex) => (
                          <Badge 
                            key={serviceIndex}
                            className="bg-[#00A8E8]/10 text-[#00A8E8] border-[#00A8E8]/20 text-xs"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
                    <Button
                      onClick={scrollToConsultation}
                      className={`w-full font-semibold ${
                        pkg.popular
                          ? "bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B]"
                          : "bg-[#00A8E8] hover:bg-[#00A8E8]/90 text-white"
                      }`}
                    >
                      {pkg.ctaText}
                    </Button>
                  </div>
                </motion.div>

                {/* Background Decoration */}
                {pkg.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FF8C00]/5 pointer-events-none" />
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE_CURVE }}
          className="bg-[#F8FAFC] rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-[#0A0A0B] text-center mb-8">
            Feature Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E2E8F0]">
                  <th className="text-left py-4 px-4 font-semibold text-[#0A0A0B]">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.name} className="text-center py-4 px-4 font-semibold text-[#0A0A0B] relative">
                      {pkg.name}
                      {pkg.popular && (
                        <div className="absolute -top-2 -right-2">
                          <div className="w-4 h-4 bg-[#FFD700] rounded-full flex items-center justify-center">
                            <span className="text-[#0A0A0B] text-xs font-bold">★</span>
                          </div>
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packages[0].features.map((feature, featureIndex) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1 + featureIndex * 0.1, 
                      ease: EASE_CURVE 
                    }}
                    className="border-b border-[#E2E8F0]/50"
                  >
                    <td className="py-3 px-4 text-[#64748B]">{feature.name}</td>
                    {packages.map((pkg) => {
                      const pkgFeature = pkg.features[featureIndex]
                      return (
                        <td key={pkg.name} className="text-center py-3 px-4">
                          {pkgFeature.included ? (
                            <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center mx-auto">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                <polyline points="20,6 9,17 4,12"/>
                              </svg>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-[#E2E8F0] rounded-full flex items-center justify-center mx-auto">
                              <span className="text-[#64748B] text-lg">−</span>
                            </div>
                          )}
                        </td>
                      )
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2, ease: EASE_CURVE }}
          className="text-center bg-white border border-[#E2E8F0] rounded-2xl p-6"
        >
          <p className="text-[#64748B] mb-4">
            All packages include project management, regular updates, and post-launch support.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#64748B]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00A8E8]" />
              <span>Flexible payment terms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}