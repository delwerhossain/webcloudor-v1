'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { AnimatedCounter } from "./animated-counter"

const scrollToTeam = () => {
  const teamSection = document.getElementById("team-section")
  if (teamSection) {
    teamSection.scrollIntoView({ behavior: "smooth" })
  }
}

export const AboutHero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      background="white" 
      padding="large" 
      className="min-h-[70vh] flex items-center"
    >
      <div ref={ref} className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Content - Left Side */}
        <div className="lg:col-span-3 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0B] leading-tight">
              Built by experts who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#0077C7]">
                understand
              </span>{" "}
              what moves business forward
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-2xl"
            >
              We are WebCloudor—a specialized team that delivers modern web solutions 
              for ambitious businesses. Founded on the belief that great technology 
              should accelerate growth, not complicate it.
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-[#E2E8F0]"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#00A8E8] mb-1">
                <AnimatedCounter end={2} duration={2} />
              </div>
              <div className="text-sm text-[#64748B]">Founders</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#00A8E8] mb-1">
                <AnimatedCounter end={50} duration={2.5} suffix="+" />
              </div>
              <div className="text-sm text-[#64748B]">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#00A8E8] mb-1">
                <AnimatedCounter end={99} duration={3} suffix="%" />
              </div>
              <div className="text-sm text-[#64748B]">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#00A8E8] mb-1">
                $<AnimatedCounter end={25} duration={3.5} suffix="M+" />
              </div>
              <div className="text-sm text-[#64748B]">Revenue Generated</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button 
              onClick={scrollToTeam}
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Meet the Team
            </Button>
          </motion.div>
        </div>

        {/* Team Photo - Right Side */}
        <div className="lg:col-span-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about/team-hero.jpg"
                alt="WebCloudor founders Delwer Hossain and Ahsan Habib Akik working together"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            
            {/* Floating Achievement Badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 1, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -right-4 top-8 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
            >
              <div className="text-center">
                <div className="text-[#00A8E8] text-2xl font-bold">AWS</div>
                <div className="text-xs text-[#64748B]">Certified</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -left-4 bottom-8 bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0]"
            >
              <div className="text-center">
                <div className="text-[#FFD700] text-2xl font-bold">★★★★★</div>
                <div className="text-xs text-[#64748B]">Client Rating</div>
              </div>
            </motion.div>

            {/* Subtle background pattern */}
            <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#00A8E8]/5 to-[#FFD700]/5" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD700]/10 to-[#00A8E8]/5" />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}