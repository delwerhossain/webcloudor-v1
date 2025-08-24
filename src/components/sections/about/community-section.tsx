'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"

const communityActivities = [
  {
    category: "Open Source Projects",
    items: [
      "React component library for e-commerce",
      "Performance monitoring tools", 
      "Accessibility testing utilities",
      "API documentation generators"
    ],
    icon: "code",
    color: "from-[#00A8E8] to-[#0077C7]"
  },
  {
    category: "Speaking & Education",
    items: [
      "Guest lectures at local universities",
      "Workshop facilitation at tech meetups",
      "Conference presentations on web performance", 
      "Mentoring sessions for new developers"
    ],
    icon: "education",
    color: "from-[#FFD700] to-[#FF8C00]"
  },
  {
    category: "Startup Support",
    items: [
      "Pro bono work for promising startups",
      "Technical advisory roles",
      "Investor pitch deck technical reviews",
      "Growth strategy consulting"
    ],
    icon: "startup",
    color: "from-[#10B981] to-[#059669]"
  },
  {
    category: "Community Building",
    items: [
      "Co-organizing local developer meetups",
      "Hosting technical workshops",
      "Supporting diversity in tech initiatives", 
      "Sponsoring student programming competitions"
    ],
    icon: "community",
    color: "from-[#8B5CF6] to-[#7C3AED]"
  }
]

const IconComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "code":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    case "education":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    case "startup":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case "community":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    default:
      return null
  }
}

export const CommunitySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer background="gray" padding="large">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            Beyond Client Work
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Contributing to the community
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {communityActivities.map((activity, index) => (
            <motion.div
              key={activity.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.2), 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent type={activity.icon} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0B]">
                  {activity.category}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-3">
                {activity.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.4 + (index * 0.2) + (itemIndex * 0.1), 
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#64748B] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          className="bg-gradient-to-r from-[#1B365D] to-[#0F1B2F] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Community Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">25+</div>
              <div className="text-[#E2E8F0]">Open Source Contributions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">50+</div>
              <div className="text-[#E2E8F0]">Developers Mentored</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">12</div>
              <div className="text-[#E2E8F0]">Conference Talks</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">8</div>
              <div className="text-[#E2E8F0]">Startups Advised</div>
            </div>
          </div>
        </motion.div>

        {/* Community Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl text-[#0A0A0B] font-medium italic mb-4">
            "Success is not just about building great products—it is about lifting 
            the entire community and creating opportunities for others to succeed."
          </blockquote>
          <p className="text-[#64748B]">— The WebCloudor Team Philosophy</p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}