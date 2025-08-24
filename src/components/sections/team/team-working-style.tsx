'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"

const workingProcess = [
  {
    phase: "Project Kickoff",
    habibRole: "Leads stakeholder interviews and requirements gathering",
    delwerRole: "Provides technical feasibility and architecture planning",
    together: "Create unified project roadmap and success metrics",
    icon: "🎯",
  },
  {
    phase: "Development Phase",
    delwerRole: "Handles development, code reviews, technical implementation",
    habibRole: "Manages client communication, testing coordination, feedback integration",
    together: "Weekly demos and milestone reviews",
    icon: "⚡",
  },
  {
    phase: "Launch & Optimization",
    delwerRole: "Deployment, performance monitoring, technical support",
    habibRole: "Success measurement, optimization planning, growth strategy",
    together: "Post-launch reviews and continuous improvement",
    icon: "🚀",
  },
]

const collaborationHighlights = [
  {
    title: "Unified Vision",
    description: "Every technical decision supports clear business objectives",
    icon: "👁️",
  },
  {
    title: "Complementary Skills",
    description: "Technical excellence meets strategic insight",
    icon: "🤝",
  },
  {
    title: "Direct Communication",
    description: "Always speak directly with the people building your project",
    icon: "💬",
  },
  {
    title: "Shared Accountability",
    description: "Both founders committed to your project success",
    icon: "✅",
  },
]

export const TeamWorkingStyle = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionContainer background="white" padding="large">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            How We Work Together
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Complementary skills, unified vision
          </p>
        </motion.div>

        {/* Collaboration Philosophy */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-[#F8FAFC] border-none">
            <div className="space-y-4">
              <p className="text-lg text-[#64748B] leading-relaxed text-center">
                Our partnership combines technical excellence with strategic insight. 
                While Delwer focuses on building robust, scalable solutions, Habib ensures 
                every technical decision supports clear business objectives.
              </p>
              <p className="text-lg text-[#64748B] leading-relaxed text-center font-medium">
                This dual approach means you get both cutting-edge technology and measurable 
                business results—not just one or the other.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Collaboration Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collaborationHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-3 text-center">
                  <div className="text-3xl">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold text-[#0A0A0B]">{highlight.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{highlight.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Working Process */}
        <div className="space-y-8">
          <motion.h3 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center"
          >
            Our Collaborative Process
          </motion.h3>
          
          <div className="space-y-8">
            {workingProcess.map((process, index) => (
              <motion.div
                key={process.phase}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.2), ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    {/* Phase Header */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00A8E8]/10 text-2xl mb-4 mx-auto lg:mx-0">
                        {process.icon}
                      </div>
                      <h4 className="text-xl font-bold text-[#0A0A0B] mb-2">{process.phase}</h4>
                    </div>
                    
                    {/* Roles */}
                    <div className="lg:col-span-3 space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#00A8E8]"></div>
                            <span className="font-medium text-[#0A0A0B] text-sm">Delwer</span>
                          </div>
                          <p className="text-[#64748B] text-sm leading-relaxed ml-5">{process.delwerRole}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                            <span className="font-medium text-[#0A0A0B] text-sm">Habib</span>
                          </div>
                          <p className="text-[#64748B] text-sm leading-relaxed ml-5">{process.habibRole}</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-[#E2E8F0]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00A8E8] to-[#FFD700]"></div>
                          <span className="font-medium text-[#0A0A0B] text-sm">Together</span>
                        </div>
                        <p className="text-[#64748B] text-sm leading-relaxed ml-5">{process.together}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Visual Connection */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-[#00A8E8]/5 to-[#FFD700]/5 border-none">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A8E8] flex items-center justify-center text-white font-bold text-lg mb-2">
                  D
                </div>
                <p className="text-sm font-medium text-[#0A0A0B]">Technical Excellence</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#00A8E8] to-[#FFD700]"></div>
                <div className="text-2xl">🤝</div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#00A8E8]"></div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center text-[#0A0A0B] font-bold text-lg mb-2">
                  H
                </div>
                <p className="text-sm font-medium text-[#0A0A0B]">Strategic Insight</p>
              </div>
            </div>
            
            <p className="text-center text-[#64748B] mt-6 max-w-md mx-auto">
              Two complementary skill sets working in perfect harmony for your project success
            </p>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  )
}