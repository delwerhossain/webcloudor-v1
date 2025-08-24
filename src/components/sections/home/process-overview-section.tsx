'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Palette, Code2, Rocket, TrendingUp } from "lucide-react"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

const processSteps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    duration: "1 week",
    description: "Goals, users, success metrics",
    details: ["Competitive analysis", "Technical requirements"],
    color: "#FFC300",
  },
  {
    icon: Palette,
    number: "02", 
    title: "Design",
    duration: "1-3 weeks",
    description: "Wireframes and user flows",
    details: ["Visual design system", "Interactive prototypes"],
    color: "#1B365D",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    duration: "2-6 weeks", 
    description: "Agile development sprints",
    details: ["Weekly demo reviews", "Quality assurance"],
    color: "#FFC300",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    duration: "1 week",
    description: "Performance optimization",
    details: ["Analytics setup", "Team training"],
    color: "#1B365D",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Grow",
    duration: "Ongoing",
    description: "Conversion optimization",
    details: ["Feature iterations", "Success monitoring"],
    color: "#FFC300",
  },
]

const TimelineStep = ({ 
  step, 
  index, 
  progress 
}: { 
  step: typeof processSteps[0]
  index: number
  progress: number
}) => {
  const isActive = progress > index / processSteps.length
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: EASE_CURVE }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Timeline Line */}
      {index < processSteps.length - 1 && (
        <div className="absolute top-16 left-1/2 w-px h-24 md:h-0 md:w-32 md:top-1/2 md:left-full bg-[#E2E8F0] -z-10">
          <motion.div
            className="w-full h-0 md:h-px bg-[#1B365D] origin-left md:origin-left"
            style={{
              scaleX: isActive ? 1 : 0,
              scaleY: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.8, ease: EASE_CURVE, delay: index * 0.2 }}
          />
        </div>
      )}

      {/* Step Icon */}
      <motion.div
        className="relative z-10 w-16 h-16 rounded-full border-2 border-[#E2E8F0] bg-white flex items-center justify-center mb-4 group-hover:border-[#1B365D] transition-colors duration-300"
        style={{
          backgroundColor: isActive ? step.color : "white",
          borderColor: isActive ? step.color : "#E2E8F0",
        }}
        whileHover={{ scale: 1.1 }}
      >
        <step.icon 
          className="w-6 h-6" 
          style={{ 
            color: isActive ? "white" : step.color 
          }} 
        />
        
        {/* Step Number */}
        <div 
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
          style={{ 
            backgroundColor: step.color,
            color: step.color === "#FFC300" ? "#0A0A0B" : "white"
          }}
        >
          {step.number}
        </div>
      </motion.div>

      {/* Step Content */}
      <div className="space-y-2 max-w-xs">
        <h3 className="text-lg font-semibold text-[#0A0A0B] group-hover:text-[#1B365D] transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-xs font-medium text-[#FFC300] bg-[#FFC300]/10 rounded-full px-2 py-1 inline-block">
          {step.duration}
        </p>
        <p className="text-sm text-[#64748B] leading-relaxed">
          {step.description}
        </p>
        <ul className="text-xs text-[#64748B] space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {step.details.map((detail, idx) => (
            <li key={idx}>• {detail}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export const ProcessOverviewSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <SectionContainer background="white" padding="large" className="overflow-hidden">
      <motion.div
        ref={containerRef}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-4">
            How We Work
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto">
            Simple, transparent, results-focused
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center relative">
            {processSteps.map((step, index) => (
              <TimelineStep
                key={step.title}
                step={step}
                index={index}
                progress={progress.get()}
              />
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-12">
            {processSteps.map((step, index) => (
              <TimelineStep
                key={step.title}
                step={step}
                index={index}
                progress={progress.get()}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]">
            <h3 className="text-xl font-semibold text-[#0A0A0B] mb-2">
              Ready to start your project?
            </h3>
            <p className="text-[#64748B] mb-4">
              Get a clear roadmap and timeline for your specific needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#1B365D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1B365D]/90 transition-colors"
            >
              Schedule a Discovery Call
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}