"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { fadeUpDelayedVariants, EASE_CURVE } from "@/lib/utils/animations"

const techCategories = [
  {
    title: "Frontend Excellence",
    technologies: [
      { name: "React & Next.js", description: "for performance" },
      { name: "TypeScript", description: "for reliability" },
      { name: "Tailwind CSS", description: "for consistent design" },
      { name: "Progressive Web App", description: "capabilities" }
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#00A8E8]">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Backend Power",
    technologies: [
      { name: "Node.js", description: "and serverless functions" },
      { name: "Database optimization", description: "(PostgreSQL, MongoDB)" },
      { name: "API-first", description: "architecture" },
      { name: "Real-time", description: "capabilities" }
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#10B981]">
        <rect x="2" y="2" width="20" height="20" rx="2.18" stroke="currentColor" strokeWidth="2"/>
        <line x1="7" y1="2" x2="7" y2="22" stroke="currentColor" strokeWidth="2"/>
        <line x1="17" y1="2" x2="17" y2="22" stroke="currentColor" strokeWidth="2"/>
        <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
        <line x1="2" y1="7" x2="7" y2="7" stroke="currentColor" strokeWidth="2"/>
        <line x1="2" y1="17" x2="7" y2="17" stroke="currentColor" strokeWidth="2"/>
        <line x1="17" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="2"/>
        <line x1="17" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Cloud Infrastructure",
    technologies: [
      { name: "Auto-scaling", description: "deployment" },
      { name: "CDN", description: "optimization" },
      { name: "SSL security", description: "standard" },
      { name: "Global edge", description: "computing" }
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#8B5CF6]">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Development Tools",
    technologies: [
      { name: "Git", description: "version control" },
      { name: "Automated testing", description: "suites" },
      { name: "Continuous", description: "integration/deployment" },
      { name: "Performance", description: "monitoring" }
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#FFD700]">
        <path d="M14.7 6.3L19 10.6V5h-5.6L7.7 10.6 5 7.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m9.3 17.7-4.3-4.3V19h5.6l5.7-5.6L19 16.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  }
]

const popularTechs = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Node.js", color: "#339933" },
  { name: "MongoDB", color: "#47A248" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" }
]

export const TechnologyStack = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      
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
            Modern Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
            className="text-lg md:text-xl text-[#64748B] leading-relaxed"
          >
            Built with tools that scale
          </motion.p>
        </div>

        {/* Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              variants={fadeUpDelayedVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="h-full"
            >
              <Card className="p-6 h-full bg-white border border-[#E2E8F0] rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full flex flex-col space-y-6"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:from-[#00A8E8]/5 group-hover:to-[#FFD700]/5 transition-all duration-300">
                    {category.icon}
                  </div>

                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-[#0A0A0B]">
                    {category.title}
                  </h3>

                  {/* Technologies List */}
                  <div className="flex-1 space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.5 + index * 0.1 + techIndex * 0.1, 
                          ease: EASE_CURVE 
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] flex-shrink-0 mt-2" />
                        <div className="text-sm text-[#64748B] leading-relaxed">
                          <span className="font-semibold text-[#0A0A0B]">{tech.name}</span>
                          <span className="ml-1">{tech.description}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Popular Technologies Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE_CURVE }}
          className="bg-[#F8FAFC] rounded-3xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-[#0A0A0B] mb-8">
            Technologies We Love Working With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {popularTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1 + index * 0.1, 
                  ease: EASE_CURVE 
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
                <span className="font-medium text-[#0A0A0B] group-hover:text-[#00A8E8] transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 1, ease: EASE_CURVE }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A8E8] to-[#0077C7] rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#0A0A0B]">Lightning Fast</h4>
            <p className="text-[#64748B]">
              Optimized performance with modern frameworks and best practices
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#0A0A0B]">Rock Solid</h4>
            <p className="text-[#64748B]">
              Enterprise-grade security and reliability built into every project
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="2"/>
                <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#0A0A0B]">Future Ready</h4>
            <p className="text-[#64748B]">
              Scalable architecture that grows with your business needs
            </p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}