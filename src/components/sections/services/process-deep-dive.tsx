"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { fadeUpVariants, EASE_CURVE } from "@/lib/utils/animations"

const phases = [
  {
    phase: 1,
    title: "Discovery & Strategy",
    duration: "Week 1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2"/>
        <path d="m21 12-6 0M9 12l-6 0" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tasks: [
      "Stakeholder interviews",
      "Technical requirements gathering",
      "Competitive analysis",
      "Success metrics definition",
      "Project roadmap creation"
    ]
  },
  {
    phase: 2,
    title: "Design & Architecture",
    duration: "Weeks 2-3",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tasks: [
      "User experience design",
      "Visual design system",
      "Technical architecture planning",
      "Prototype development",
      "Stakeholder review cycles"
    ]
  },
  {
    phase: 3,
    title: "Development & Testing",
    duration: "Weeks 4-7",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2"/>
        <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tasks: [
      "Agile development sprints",
      "Quality assurance testing",
      "Performance optimization",
      "Security audit",
      "Staging environment setup"
    ]
  },
  {
    phase: 4,
    title: "Launch & Optimization",
    duration: "Week 8",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tasks: [
      "Production deployment",
      "Analytics configuration",
      "Team training sessions",
      "Performance monitoring",
      "Post-launch optimization"
    ]
  },
  {
    phase: 5,
    title: "Growth & Maintenance",
    duration: "Ongoing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" strokeWidth="2"/>
        <line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" strokeWidth="2"/>
        <line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tasks: [
      "Performance monitoring",
      "Feature enhancement",
      "Security updates",
      "Growth optimization",
      "Strategic consulting"
    ]
  }
]

export const ProcessDeepDive = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-200px" })

  return (
    <SectionContainer 
      
      background="blue" 
      padding="large"
      className="text-white"
    >
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Our Proven Process
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
            className="text-lg md:text-xl text-[#E2E8F0] leading-relaxed"
          >
            Transparent, collaborative, results-focused
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 2, delay: 0.5, ease: EASE_CURVE }}
              className="absolute top-16 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#00A8E8] opacity-60"
            />
          </div>

          {/* Phase Cards */}
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.2, 
                  ease: EASE_CURVE 
                }}
                className="relative"
              >
                {/* Phase Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1 + index * 0.2, 
                    ease: EASE_CURVE 
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-6 relative z-20"
                >
                  {phase.icon}
                </motion.div>

                {/* Phase Number */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#1B365D] border-2 border-[#FFD700] rounded-full flex items-center justify-center text-sm font-bold text-[#FFD700] z-30">
                  {phase.phase}
                </div>

                {/* Phase Content */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">
                      {phase.title}
                    </h3>
                    <p className="text-[#FFD700] font-medium text-sm">
                      {phase.duration}
                    </p>
                  </div>

                  <div className="space-y-2 text-left">
                    {phase.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={taskIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 1.2 + index * 0.2 + taskIndex * 0.1, 
                          ease: EASE_CURVE 
                        }}
                        className="flex items-start gap-2 text-sm text-[#E2E8F0]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] flex-shrink-0 mt-2" />
                        <span>{task}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Cards - Floating */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { 
                    opacity: [0, 1, 1, 0.8],
                    y: [-20, -30, -25, -30]
                  } : { opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 3,
                    delay: 2 + index * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: EASE_CURVE
                  }}
                  className="absolute -top-8 right-0 bg-[#00A8E8] text-white text-xs px-2 py-1 rounded shadow-lg transform rotate-3"
                >
                  {index === 0 && "Requirements Doc"}
                  {index === 1 && "Design System"}
                  {index === 2 && "Working MVP"}
                  {index === 3 && "Live Site"}
                  {index === 4 && "Growth Plan"}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 2.5, ease: EASE_CURVE }}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#1B365D]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">Transparent Progress</h4>
              <p className="text-[#E2E8F0] text-sm">
                Track every milestone with clear deliverables and regular updates
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#00A8E8] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">Collaborative Approach</h4>
              <p className="text-[#E2E8F0] text-sm">
                Your team stays involved throughout with regular feedback sessions
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white">Results-Focused</h4>
              <p className="text-[#E2E8F0] text-sm">
                Every phase optimizes for your business goals and success metrics
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}