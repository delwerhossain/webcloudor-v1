'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"

const timelineItems = [
  { year: "2019", milestone: "WebCloudor Founded", description: "Two experts unite with a shared vision" },
  { year: "2021", milestone: "First Major Success", description: "Helped 5 startups secure Series A funding" },
  { year: "2023", milestone: "50+ Projects Milestone", description: "Reached 50 successful project completions" },
  { year: "2024", milestone: "Industry Recognition", description: "Top Web Development Agency award" },
]

export const CompanyStory = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer background="gray" padding="large">
      <div ref={ref} className="max-w-4xl mx-auto text-center space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            How WebCloudor Started
          </h2>
        </motion.div>

        {/* Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8 text-lg md:text-xl text-[#64748B] leading-relaxed text-left"
        >
          <p>
            WebCloudor began when two experts—one technical, one strategic—realized 
            that most businesses struggle with the same problem: translating ambitious 
            visions into digital reality.
          </p>
          
          <p>
            Too many companies get stuck with slow development, confusing processes, 
            or solutions that do not scale. We founded WebCloudor to change that.
          </p>
          
          <p>
            Our approach is different. We combine deep technical expertise with 
            business strategy, delivering solutions that work immediately and 
            grow sustainably. Every project teaches us something new, and every 
            client success story validates our mission.
          </p>
          
          <p>
            Today, we have helped 50+ companies achieve breakthrough results—from 
            startups securing Series A funding to established businesses doubling 
            their online revenue. We are proud of what we have built, but we are just 
            getting started.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="relative p-8 md:p-12 bg-gradient-to-br from-[#00A8E8]/5 to-[#FFD700]/5 rounded-2xl border border-[#00A8E8]/20"
        >
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-white p-2 rounded-full border-2 border-[#00A8E8]">
              <svg className="w-6 h-6 text-[#00A8E8]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-[#0A0A0B] italic text-center">
            "To help ambitious businesses ship faster and grow sustainably 
            with modern web solutions that actually move the needle."
          </blockquote>
          <p className="text-center text-[#64748B] mt-4 font-medium">Our Mission</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#00A8E8] to-[#FFD700]" />
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.2), ease: [0.4, 0, 0.2, 1] }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-[#E2E8F0] relative">
                      <div className="text-[#00A8E8] font-bold text-lg mb-2">{item.year}</div>
                      <div className="text-[#0A0A0B] font-semibold text-xl mb-2">{item.milestone}</div>
                      <div className="text-[#64748B]">{item.description}</div>
                      
                      {/* Arrow pointing to timeline */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 ${
                        index % 2 === 0 
                          ? '-right-2 border-l-white border-l-8 border-y-transparent border-y-8 border-r-0' 
                          : '-left-2 border-r-white border-r-8 border-y-transparent border-y-8 border-l-0'
                      }`} />
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00A8E8] rounded-full border-4 border-white shadow-lg" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}