'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { SectionContainer } from "@/components/ui/section-container"

const workspaceFeatures = [
  { name: "Modern development setup with dual 4K monitors", icon: "monitor" },
  { name: "Collaborative whiteboards for strategy sessions", icon: "whiteboard" },
  { name: "Quiet zones for focused development work", icon: "focus" },
  { name: "Client meeting areas for demos and presentations", icon: "meeting" },
  { name: "High-speed internet and redundant connectivity", icon: "network" }
]

const cultureValues = [
  { value: "Continuous learning and skill development", icon: "learning" },
  { value: "Work-life balance and sustainable pace", icon: "balance" },
  { value: "Open communication and feedback culture", icon: "communication" },
  { value: "Celebrating client successes together", icon: "celebration" },
  { value: "Supporting each other's professional growth", icon: "growth" }
]

const developmentBenefits = [
  "Conference attendance and learning budgets",
  "Technical training and certification support", 
  "Industry networking and community involvement",
  "Knowledge sharing sessions and internal presentations"
]

const IconComponent = ({ type }: { type: string }) => {
  const iconProps = "w-6 h-6"
  
  switch (type) {
    case "monitor":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth={2} />
          <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2} />
          <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2} />
        </svg>
      )
    case "whiteboard":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="1" strokeWidth={2} />
          <path d="M7 8h10M7 12h6" strokeWidth={2} strokeLinecap="round" />
        </svg>
      )
    case "focus":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" strokeWidth={2} />
          <path d="M21 21l-4.35-4.35" strokeWidth={2} strokeLinecap="round" />
          <circle cx="11" cy="11" r="3" strokeWidth={2} />
        </svg>
      )
    case "meeting":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case "network":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    case "learning":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    case "balance":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    case "communication":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    case "celebration":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    case "growth":
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    default:
      return null
  }
}

export const OfficeCulture = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer background="white" padding="large">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            Our Workspace & Culture
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Where great work happens
          </p>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
            We believe environment shapes output. Our workspace is designed for 
            deep work, collaborative sessions, and creative problem-solving.
          </p>
        </motion.div>

        {/* Workspace and Culture Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Workspace Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B]">
              Workspace Features
            </h3>
            
            <div className="space-y-6">
              {workspaceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-start space-x-4 p-4 bg-[#F8FAFC] rounded-xl hover:bg-[#F1F5F9] transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00A8E8] to-[#0077C7] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <IconComponent type={feature.icon} />
                  </div>
                  <p className="text-[#64748B] leading-relaxed pt-3">{feature.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Office Photos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/images/about/office-workspace.jpg"
                  alt="Modern development workspace"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src="/images/about/office-collaboration.jpg"
                  alt="Team collaboration area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
            
            <div className="aspect-[2/1] relative rounded-xl overflow-hidden shadow-lg">
              <OptimizedImage
                src="/images/about/office-overview.jpg"
                alt="WebCloudor office overview"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </motion.div>
        </div>

        {/* Remote Work Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="bg-gradient-to-r from-[#00A8E8]/5 to-[#FFD700]/5 rounded-2xl p-8 md:p-12 border border-[#00A8E8]/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center mb-6">
            Remote Work Approach
          </h3>
          <p className="text-lg text-[#64748B] leading-relaxed text-center max-w-3xl mx-auto">
            We support flexible work arrangements while maintaining strong 
            collaboration standards. Whether in-office or remote, every team 
            member has the tools and environment needed for excellent work.
          </p>
        </motion.div>

        {/* Team Culture Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center">
            Team Culture Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureValues.map((culture, index) => (
              <motion.div
                key={culture.value}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FF8C00] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <IconComponent type={culture.icon} />
                </div>
                <p className="text-[#0A0A0B] font-medium">{culture.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#E2E8F0]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center mb-8">
            Professional Development
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {developmentBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.4, delay: 1.6 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center space-x-3"
              >
                <div className="w-3 h-3 bg-[#00A8E8] rounded-full flex-shrink-0" />
                <p className="text-[#64748B]">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}