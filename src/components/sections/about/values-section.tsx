'use client'

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { SectionContainer } from "@/components/ui/section-container"

const values = [
  {
    icon: "target",
    title: "Outcomes Over Activity",
    subtitle: "Results First",
    description: "We measure success by client results, not hours worked. Every project targets specific, measurable business outcomes.",
    example: "45% conversion increases, not just better design",
    color: "from-[#00A8E8] to-[#0077C7]"
  },
  {
    icon: "eye",
    title: "Clear Communication",
    subtitle: "Transparent Process",
    description: "Weekly updates, shared documents, honest timelines. You always know project status and next steps.",
    example: "Weekly demo calls, not monthly surprises",
    color: "from-[#FFD700] to-[#FF8C00]"
  },
  {
    icon: "handshake",
    title: "Built to Last",
    subtitle: "Long-term Partnership",
    description: "We build solutions that grow with your business and relationships that extend beyond single projects.",
    example: "99% client retention, not one-time transactions",
    color: "from-[#10B981] to-[#059669]"
  },
  {
    icon: "shield",
    title: "Enterprise Standards",
    subtitle: "Technical Excellence",
    description: "Modern architecture, security-first development, and performance optimization are non-negotiable.",
    example: "99.9% uptime, not cutting corners",
    color: "from-[#8B5CF6] to-[#7C3AED]"
  }
]

const IconComponent = ({ type }: { type: string }) => {
  switch (type) {
    case "target":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <circle cx="12" cy="12" r="6" strokeWidth={2} />
          <circle cx="12" cy="12" r="2" strokeWidth={2} />
        </svg>
      )
    case "eye":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    case "handshake":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      )
    case "shield":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    default:
      return null
  }
}

export const ValuesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
            How We Work
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            The principles that guide every project
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.15), 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg border border-[#E2E8F0] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + (index * 0.15), 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent type={value.icon} />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A0A0B] mb-2">
                      {value.title}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                      {value.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-[#64748B] leading-relaxed">
                    {value.description}
                  </p>

                  {/* Example - shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      hoveredCard === index 
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${value.color} bg-opacity-5 border-l-4 border-gradient-to-b ${value.color}`}>
                      <p className="text-sm text-[#0A0A0B] font-medium">
                        Example: {value.example}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Hover gradient background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            These values are not just words on a page—they are the foundation of every 
            client relationship and the reason our retention rate is 99%.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  )
}