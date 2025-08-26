'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { Computer, Server, Lock } from "lucide-react"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

const techCategories = [
  {
    icon: Computer,
    title: "Frontend Excellence",
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    benefits: [
      "React, Next.js for performance",
      "Responsive design across all devices", 
      "Progressive web app capabilities"
    ]
  },
  {
    icon: Server,
    title: "Backend Reliability",
    technologies: [
      { name: "Node.js", color: "#339933" },
      { name: "MongoDB", color: "#47A248" },
      { name: "AWS", color: "#FF9900" },
      { name: "Docker", color: "#2496ED" },
    ],
    benefits: [
      "Scalable cloud infrastructure",
      "API-first architecture",
      "Real-time data synchronization"
    ]
  },
  {
    icon: Lock,
    title: "Security & Performance",
    technologies: [
      { name: "SSL", color: "#1B365D" },
      { name: "CDN", color: "#FFC300" },
      { name: "OAuth", color: "#1B365D" },
      { name: "Monitoring", color: "#FFC300" },
    ],
    benefits: [
      "SSL encryption standard",
      "CDN optimization", 
      "Regular security audits"
    ]
  }
]

const TechLogo = ({ 
  tech, 
  delay = 0 
}: { 
  tech: { name: string, color: string }
  delay: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.6, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        opacity: 1, 
        scale: 1.1,
        y: -2,
      }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.3, 
        delay,
        ease: EASE_CURVE 
      }}
      className="group flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg hover:bg-white/50 transition-colors duration-200"
    >
      <div 
        className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-sm"
        style={{ backgroundColor: tech.color }}
      >
        {tech.name.split(' ').map(word => word[0]).join('').toUpperCase()}
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-[#64748B] group-hover:text-[#1B365D] transition-colors duration-200 text-center">
        {tech.name}
      </span>
    </motion.div>
  )
}

const CategoryCard = ({ 
  category, 
  index 
}: { 
  category: typeof techCategories[0]
  index: number 
}) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={{ 
        duration: 0.6, 
        ease: EASE_CURVE,
        delay: index * 0.15
      }}
      className="bg-white rounded-2xl p-4 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full"
    >
      {/* Icon & Title */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="w-12 h-12 bg-[#1B365D]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1B365D]/20 transition-colors duration-300"
        >
          <category.icon className="w-6 h-6 text-[#1B365D]" />
        </motion.div>
        <h3 className="text-lg sm:text-xl font-semibold text-[#0A0A0B] group-hover:text-[#1B365D] transition-colors duration-300">
          {category.title}
        </h3>
      </div>

      {/* Technology Logos */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {category.technologies.map((tech, techIndex) => (
          <TechLogo 
            key={tech.name} 
            tech={tech}
            delay={index * 0.15 + techIndex * 0.1}
          />
        ))}
      </div>

      {/* Benefits List */}
      <div className="space-y-3">
        {category.benefits.map((benefit, benefitIndex) => (
          <motion.div
            key={benefit}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.15 + benefitIndex * 0.1, 
              duration: 0.4,
              ease: EASE_CURVE
            }}
            className="flex items-center gap-3 text-sm text-[#64748B]"
          >
            <div className="w-1.5 h-1.5 bg-[#FFC300] rounded-full flex-shrink-0" />
            <span>{benefit}</span>
          </motion.div>
        ))}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1B365D]/5 via-transparent to-[#FFC300]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

export const TechnologiesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <SectionContainer background="white" padding="large" className="relative overflow-hidden">
      {/* Background Parallax Elements */}
      <motion.div
        ref={containerRef}
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#1B365D]/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#FFC300]/10 to-transparent rounded-full blur-xl" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-4">
            Modern Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto">
            Built with the tools that scale
          </p>
        </motion.div>

        {/* Technology Categories - Mobile: Horizontal Scroll, Desktop: Grid */}
        
        {/* Mobile Horizontal Scroll */}
        <div className="block lg:hidden mb-16 -mx-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4">
            {techCategories.map((category, index) => (
              <div key={category.title} className="flex-shrink-0 w-80">
                <CategoryCard 
                  category={category}
                  index={index}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-[#64748B]/60">Swipe to explore tech stack →</p>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <CategoryCard 
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E2E8F0]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-1">
                99.9%
              </div>
              <div className="text-sm text-[#64748B]">
                Uptime Guarantee
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-1">
                &lt;2s
              </div>
              <div className="text-sm text-[#64748B]">
                Load Time Target
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-1">
                24/7
              </div>
              <div className="text-sm text-[#64748B]">
                Monitoring
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#1B365D] mb-1">
                Auto
              </div>
              <div className="text-sm text-[#64748B]">
                Scaling
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[#64748B] mb-6">
            Want to see how these technologies can power your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#1B365D] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B365D]/90 transition-colors"
          >
            Discuss Your Tech Stack
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}