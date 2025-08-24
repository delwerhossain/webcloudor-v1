'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"

const philosophySteps = [
  {
    phase: "Before Every Project",
    items: [
      "Clear success metrics definition",
      "Honest timeline and budget assessment",
      "Risk identification and mitigation planning", 
      "Stakeholder alignment on objectives"
    ],
    icon: "planning"
  },
  {
    phase: "During Development",
    items: [
      "Weekly progress demos and updates",
      "Immediate communication of any issues",
      "Collaborative problem-solving approach",
      "Regular milestone reviews and adjustments"
    ],
    icon: "development"
  },
  {
    phase: "After Launch",
    items: [
      "Performance monitoring and reporting",
      "Optimization recommendations",
      "Ongoing technical support",
      "Strategic growth planning"
    ],
    icon: "launch"
  },
  {
    phase: "Long-term Partnership", 
    items: [
      "Quarterly business reviews",
      "Technology roadmap planning",
      "Market opportunity identification",
      "Continuous improvement initiatives"
    ],
    icon: "partnership"
  }
]

const IconComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "planning":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    case "development":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    case "launch":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case "partnership":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    default:
      return null
  }
}

export const ClientPhilosophy = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer background="white" padding="large">
      <div ref={ref} className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            Why Clients Choose to Stay
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Our approach to partnership
          </p>
        </motion.div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
            We believe the best client relationships are built on mutual success. 
            When our clients grow, we grow. This is not just philosophy—it is how 
            we structure every engagement.
          </p>
          
          <div className="p-6 md:p-8 bg-gradient-to-r from-[#00A8E8]/5 to-[#FFD700]/5 rounded-2xl border border-[#00A8E8]/20">
            <p className="text-lg md:text-xl text-[#0A0A0B] font-medium">
              Our 99% client retention rate comes from a simple approach: deliver 
              exceptional results, communicate clearly, and always prioritize the 
              client's long-term success over short-term project completion.
            </p>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center"
          >
            Client Success Principles
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophySteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.2), 
                  ease: [0.4, 0, 0.2, 1] 
                }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon and Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00A8E8] to-[#0077C7] rounded-xl flex items-center justify-center text-white">
                    <IconComponent type={step.icon} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0A0A0B]">
                    {step.phase}
                  </h4>
                </div>

                {/* Items List */}
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + (index * 0.2) + (itemIndex * 0.1), 
                        ease: [0.4, 0, 0.2, 1] 
                      }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-[#64748B] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="bg-gradient-to-r from-[#1B365D] to-[#0F1B2F] rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-6">
            The Results Speak for Themselves
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">99%</div>
              <div className="text-[#E2E8F0]">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">4.9/5</div>
              <div className="text-[#E2E8F0]">Average Project Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">100%</div>
              <div className="text-[#E2E8F0]">On-Time Delivery</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}