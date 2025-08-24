'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"

const timelineData = [
  {
    period: "2016-2019",
    title: "Foundation Years",
    delwerRole: "Junior to Senior Developer at tech companies",
    habibRole: "Digital marketing and strategy roles",
    learning: "Foundational skills in web development and business strategy",
    icon: "🌱",
  },
  {
    period: "2019-2022",
    title: "Specialization Phase",
    delwerRole: "Lead developer on high-traffic applications",
    habibRole: "Growth strategy consultant for startups",
    achievement: "Helped first clients achieve 6-figure revenue growth",
    icon: "🎯",
  },
  {
    period: "2022-2024",
    title: "Partnership Formation",
    together: "Collaborated on freelance projects",
    success: "98% client satisfaction, 100% on-time delivery",
    growth: "Built reputation in development community",
    icon: "🤝",
  },
  {
    period: "2024-Present",
    title: "WebCloudor Launch",
    vision: "Professional web agency for growth companies",
    results: "50+ projects, $25M+ client revenue influenced",
    recognition: "Featured in industry publications, speaking opportunities",
    icon: "🚀",
  },
]

const keyMilestones = [
  {
    metric: "15+",
    label: "Years Combined Experience",
    description: "Deep expertise in technology and strategy",
  },
  {
    metric: "50+",
    label: "Successful Projects",
    description: "From startups to enterprise clients",
  },
  {
    metric: "$25M+",
    label: "Client Revenue Impact",
    description: "Measurable business results delivered",
  },
  {
    metric: "99%",
    label: "Client Satisfaction",
    description: "Consistent excellence across all engagements",
  },
]

export const ProfessionalBackground = () => {
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
            Our Professional Journey
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Building expertise through real-world experience
          </p>
        </motion.div>

        {/* Key Milestones */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.label}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-[#00A8E8]">{milestone.metric}</div>
                  <div className="font-medium text-[#0A0A0B] text-sm">{milestone.label}</div>
                  <div className="text-xs text-[#64748B] leading-relaxed">{milestone.description}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h3 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center mb-12"
          >
            Timeline of Growth
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              initial={shouldReduceMotion ? {} : { scaleY: 0 }}
              animate={shouldReduceMotion ? {} : isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A8E8] via-[#0077C7] to-[#FFD700] origin-top"
            />
            
            <div className="space-y-12">
              {timelineData.map((period, index) => (
                <motion.div
                  key={period.period}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -50 }}
                  animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.2), ease: [0.4, 0, 0.2, 1] }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline marker */}
                  <div className="relative z-10">
                    <motion.div 
                      initial={shouldReduceMotion ? {} : { scale: 0, rotate: -180 }}
                      animate={shouldReduceMotion ? {} : isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.5, delay: 1.2 + (index * 0.2), ease: [0.4, 0, 0.2, 1] }}
                      className="w-16 h-16 rounded-full bg-white border-4 border-[#00A8E8] flex items-center justify-center text-2xl shadow-lg"
                    >
                      {period.icon}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="space-y-4">
                        {/* Period header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <h4 className="text-xl md:text-2xl font-bold text-[#0A0A0B]">{period.title}</h4>
                          <span className="text-sm font-medium text-[#00A8E8] bg-[#00A8E8]/10 px-3 py-1 rounded-full w-fit">
                            {period.period}
                          </span>
                        </div>
                        
                        {/* Details */}
                        <div className="space-y-3">
                          {period.delwerRole && (
                            <div className="flex items-start gap-3">
                              <div className="w-3 h-3 rounded-full bg-[#00A8E8] mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-[#0A0A0B] text-sm">Delwer: </span>
                                <span className="text-[#64748B]">{period.delwerRole}</span>
                              </div>
                            </div>
                          )}
                          
                          {period.habibRole && (
                            <div className="flex items-start gap-3">
                              <div className="w-3 h-3 rounded-full bg-[#FFD700] mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-[#0A0A0B] text-sm">Habib: </span>
                                <span className="text-[#64748B]">{period.habibRole}</span>
                              </div>
                            </div>
                          )}
                          
                          {period.together && (
                            <div className="flex items-start gap-3">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00A8E8] to-[#FFD700] mt-2 flex-shrink-0"></div>
                              <div>
                                <span className="font-medium text-[#0A0A0B] text-sm">Together: </span>
                                <span className="text-[#64748B]">{period.together}</span>
                              </div>
                            </div>
                          )}
                          
                          {(period.learning || period.achievement || period.success || period.results) && (
                            <div className="pt-3 border-t border-[#E2E8F0]">
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2.5 flex-shrink-0"></div>
                                <span className="text-[#64748B] font-medium">
                                  {period.learning || period.achievement || period.success || period.results}
                                </span>
                              </div>
                              
                              {period.growth && (
                                <div className="flex items-start gap-3 mt-2">
                                  <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2.5 flex-shrink-0"></div>
                                  <span className="text-[#64748B] font-medium">{period.growth}</span>
                                </div>
                              )}
                              
                              {period.recognition && (
                                <div className="flex items-start gap-3 mt-2">
                                  <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2.5 flex-shrink-0"></div>
                                  <span className="text-[#64748B] font-medium">{period.recognition}</span>
                                </div>
                              )}
                              
                              {period.vision && (
                                <div className="flex items-start gap-3 mt-2">
                                  <div className="w-2 h-2 rounded-full bg-[#10B981] mt-2.5 flex-shrink-0"></div>
                                  <span className="text-[#64748B] font-medium">{period.vision}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Current State */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-[#00A8E8]/5 to-[#FFD700]/5 border-none">
            <div className="text-center space-y-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B]">
                Ready for Your Next Challenge
              </h3>
              <p className="text-lg text-[#64748B] leading-relaxed">
                Eight years of individual growth, four years of partnership, and countless lessons learned. 
                We're ready to bring this experience to your most ambitious projects.
              </p>
              <div className="flex justify-center items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-[#00A8E8]">Today</div>
                  <div className="text-sm text-[#64748B]">Still Learning</div>
                </div>
                <div className="text-2xl text-[#FFD700]">→</div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#00A8E8]">Tomorrow</div>
                  <div className="text-sm text-[#64748B]">Your Success</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  )
}