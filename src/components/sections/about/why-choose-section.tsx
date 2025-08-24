'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"

const differentiators = [
  {
    title: "Small Team, Senior Expertise",
    us: "2 founders with 15+ combined years, personally involved in every project",
    others: "Large teams with junior developers, founders not involved",
    benefit: "Direct access to decision-makers and consistent quality",
    icon: "team"
  },
  {
    title: "Results-Focused Process",
    us: "Success metrics defined upfront, tracked throughout, reported transparently",
    others: "Activity-based billing, vague outcomes, surprise invoices",
    benefit: "Clear ROI and predictable investment",
    icon: "results"
  },
  {
    title: "Modern Technology Standards",
    us: "Latest frameworks, performance-optimized, security-first architecture",
    others: "Legacy systems, outdated approaches, security afterthought",
    benefit: "Future-proof solutions that scale",
    icon: "technology"
  },
  {
    title: "Transparent Communication",
    us: "Weekly demos, shared documents, honest timelines, proactive updates",
    others: "Monthly status calls, black box development, missed deadlines",
    benefit: "Always informed, never surprised",
    icon: "communication"
  },
  {
    title: "Long-term Partnership",
    us: "99% retention rate, ongoing optimization, strategic growth support",
    others: "Project-based relationships, handoff and goodbye, no follow-up",
    benefit: "Continuous improvement and sustained growth",
    icon: "partnership"
  }
]

const IconComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "team":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    case "results":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case "technology":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case "communication":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    case "partnership":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    default:
      return null
  }
}

export const WhyChooseSection = () => {
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
            Why WebCloudor
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            What sets us apart from other agencies
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="space-y-8">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1), 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Title with Icon */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A8E8] to-[#0077C7] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <IconComponent type={diff.icon} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0B]">
                  {diff.title}
                </h3>
              </div>

              {/* Comparison Grid */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* WebCloudor */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#10B981]">WebCloudor</h4>
                  </div>
                  <p className="text-[#0A0A0B] leading-relaxed">{diff.us}</p>
                </div>

                {/* Others */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-[#EF4444] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#EF4444]">Others</h4>
                  </div>
                  <p className="text-[#64748B] leading-relaxed">{diff.others}</p>
                </div>

                {/* Your Benefit */}
                <div className="space-y-3 lg:border-l lg:border-[#E2E8F0] lg:pl-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-6 h-6 bg-[#FFD700] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#0A0A0B]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-[#FFD700]">Your Benefit</h4>
                  </div>
                  <p className="text-[#0A0A0B] font-medium leading-relaxed bg-gradient-to-r from-[#FFD700]/10 to-[#00A8E8]/10 p-4 rounded-lg">
                    {diff.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="bg-gradient-to-r from-[#00A8E8]/5 to-[#FFD700]/5 rounded-2xl p-8 md:p-12 text-center border border-[#00A8E8]/20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] mb-6">
            The Choice is Clear
          </h3>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            While others focus on delivering projects, we focus on delivering results. 
            Our 99% client retention rate and track record of measurable business outcomes 
            speak louder than any marketing claim.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}