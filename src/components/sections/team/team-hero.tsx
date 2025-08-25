'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"

const scrollToFounders = () => {
  const foundersSection = document.getElementById("founder-profiles")
  if (foundersSection) {
    foundersSection.scrollIntoView({ behavior: "smooth" })
  }
}

const teamStats = [
  { value: "15+", label: "Years Combined Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "2", label: "Core Specializations" },
]

const achievementCards = [
  { title: "AWS", subtitle: "Certified", delay: 1 },
  { title: "★★★★★", subtitle: "Client Rating", delay: 1.2 },
]

export const TeamHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const textAnimations = {
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 24 },
    animate: shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  }

  const imageAnimations = {
    initial: shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 },
    animate: shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 },
  }

  return (
    <SectionContainer 
      background="white" 
      padding="large" 
      className="min-h-[60vh] flex items-center"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content - Left Side */}
        <div className="space-y-8">
          <motion.div
            initial={textAnimations.initial}
            animate={textAnimations.animate}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0B] leading-tight">
              Meet the Team Behind the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#0077C7]">
                Results
              </span>
            </h1>
            
            <motion.p 
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg text-[#64748B] leading-relaxed max-w-2xl"
            >
              Two founders with complementary expertise, personally involved in every project. 
              Technical excellence meets strategic thinking.
            </motion.p>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap items-center gap-6 md:gap-8 py-6 text-sm text-[#64748B]"
          >
            {teamStats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="font-bold text-[#00A8E8] text-lg">{stat.value}</span>
                <span>{stat.label}</span>
                {index < teamStats.length - 1 && (
                  <span className="ml-6 text-[#E2E8F0]">•</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button 
              onClick={scrollToFounders}
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Work With Our Team
            </Button>
          </motion.div>
        </div>

        {/* Team Photo & Achievement Cards - Right Side */}
        <div className="relative">
          <motion.div
            initial={imageAnimations.initial}
            animate={imageAnimations.animate}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/team-hero.jpg"
                alt="WebCloudor founders Delwer Hossain and Ahsan Habib Akik in modern office setting"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              {/* Professional overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
            
            {/* Floating Achievement Cards */}
            {achievementCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: index === 0 ? 20 : -20 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? 20 : -20 }}
                transition={{ duration: 0.6, delay: card.delay, ease: [0.4, 0, 0.2, 1] }}
                className={`absolute bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0] ${
                  index === 0 
                    ? "-right-4 top-8" 
                    : "-left-4 bottom-8"
                }`}
              >
                <div className="text-center">
                  <div className={`text-2xl font-bold ${
                    index === 0 ? "text-[#00A8E8]" : "text-[#FFD700]"
                  }`}>
                    {card.title}
                  </div>
                  <div className="text-xs text-[#64748B]">{card.subtitle}</div>
                </div>
              </motion.div>
            ))}

            {/* Subtle background elements */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#00A8E8]/5 to-[#FFD700]/5" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD700]/10 to-[#00A8E8]/5" />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}