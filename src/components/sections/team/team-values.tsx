'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"

const coreValues = [
  {
    title: "Client Success First",
    icon: "🎯",
    description: "We measure our success by client outcomes, not project completion. Every technical decision serves business objectives.",
    example: "Chose simpler architecture that launched 2 weeks faster, resulting in $200K additional revenue",
    color: "from-[#00A8E8] to-[#0077C7]",
  },
  {
    title: "Technical Excellence",
    icon: "💻",
    description: "We build with modern standards, security-first practices, and performance optimization as non-negotiables.",
    example: "Maintained 99.9% uptime across 50+ projects through careful architecture and monitoring",
    color: "from-[#FFD700] to-[#F59E0B]",
  },
  {
    title: "Transparent Communication",
    icon: "💬",
    description: "Weekly demos, honest timelines, and proactive updates. You always know project status and next steps.",
    example: "Clients rate our communication 4.9/5 because we share everything, including challenges",
    color: "from-[#10B981] to-[#059669]",
  },
  {
    title: "Continuous Learning",
    icon: "📈",
    description: "We invest in staying current with technology trends and business strategy evolution.",
    example: "Completed 40+ hours of AI development training to integrate cutting-edge features for clients",
    color: "from-[#8B5CF6] to-[#7C3AED]",
  },
]

export const TeamValues = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionContainer background="gray" padding="large">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            What Drives Us
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            The principles behind every project
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coreValues.map((value, index) => {
            // Hover state handled by Framer Motion
            
            return (
              <motion.div
                key={value.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group"
              >
                <Card className="p-8 h-full bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 space-y-6">
                    {/* Icon and Title */}
                    <div className="space-y-4">
                      <motion.div 
                        initial={shouldReduceMotion ? {} : { scale: 0.8, rotate: -10 }}
                        animate={shouldReduceMotion ? {} : isInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }}
                        transition={{ duration: 0.5, delay: 0.4 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                        className="text-4xl"
                      >
                        {value.icon}
                      </motion.div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0B] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00A8E8] group-hover:to-[#0077C7] transition-all duration-300">
                        {value.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#64748B] leading-relaxed">
                      {value.description}
                    </p>

                    {/* Real Example */}
                    <div className="pt-4 border-t border-[#E2E8F0] group-hover:border-[#00A8E8]/20 transition-colors duration-300">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color}`}></div>
                          <span className="text-xs font-medium text-[#0A0A0B] uppercase tracking-wide">Real Example</span>
                        </div>
                        <p className="text-sm text-[#64748B] leading-relaxed italic">
                          "{value.example}"
                        </p>
                      </div>
                    </div>

                    {/* Hover effect indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${value.color}`}></div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Culture Statement */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-white border-none shadow-xl">
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00A8E8]"></div>
                <div className="text-3xl">🎆</div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#00A8E8] to-transparent"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] leading-tight">
                Built on Trust, Delivered with Excellence
              </h3>
              
              <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
                These aren't just words on a website—they're the principles we live by every day. 
                Every project decision, every client interaction, and every line of code reflects 
                these values in action.
              </p>
              
              <div className="flex justify-center items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">4.9/5</div>
                  <div className="text-xs text-[#64748B]">Client Rating</div>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0]"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">99%</div>
                  <div className="text-xs text-[#64748B]">Retention</div>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0]"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">50+</div>
                  <div className="text-xs text-[#64748B]">Projects</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  )
}