'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"

const valueProposition = [
  "Direct access to both founders, not account managers",
  "Personal involvement in your project success",
  "Combined technical and strategic expertise",
  "Proven track record with 50+ successful projects"
]

const consultationOptions = [
  {
    title: "Technical Consultation with Delwer",
    focus: "Architecture, performance, technical challenges",
    duration: "30 minutes",
    outcome: "Technical roadmap and feasibility assessment",
    founder: "delwer",
    color: "from-[#00A8E8] to-[#0077C7]",
    icon: "💻",
  },
  {
    title: "Strategy Consultation with Habib",
    focus: "Business goals, user experience, growth planning",
    duration: "30 minutes",
    outcome: "Strategic recommendations and success metrics",
    founder: "habib",
    color: "from-[#FFD700] to-[#F59E0B]",
    icon: "🎯",
  },
  {
    title: "Full Team Consultation",
    focus: "Complete project scoping and planning",
    duration: "45 minutes",
    outcome: "Unified technical and strategic proposal",
    founder: "both",
    color: "from-[#10B981] to-[#059669]",
    icon: "🤝",
    featured: true,
  },
]

const trustIndicators = [
  {
    text: "No sales pressure",
    icon: "✓",
  },
  {
    text: "Free consultation",
    icon: "✓",
  },
  {
    text: "Direct founder access",
    icon: "✓",
  },
]

export const WorkWithTeam = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionContainer 
      background="blue" 
      padding="large"
      className="relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0F1B2F]" />
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#FFD700]/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#00A8E8]/10 blur-2xl" />
      </div>
      
      <div ref={ref} className="relative z-10 space-y-16">
        {/* Header */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-6 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to work with a team that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF8C00]">
              gets it?
            </span>
          </h2>
          
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            When you work with WebCloudor, you get:
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {valueProposition.map((point, index) => (
              <motion.div
                key={point}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-6 h-6 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A0A0B] text-sm font-bold">•</span>
                </div>
                <span className="text-white/90">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consultation Options */}
        <div className="space-y-8">
          <motion.h3 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-white text-center"
          >
            Choose Your Consultation Style
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {consultationOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className={`relative ${option.featured ? "lg:scale-105" : ""}`}
              >
                <Card className={`p-6 md:p-8 h-full bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  option.featured ? "ring-2 ring-[#FFD700] shadow-2xl" : ""
                }`}>
                  {option.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#FFD700] text-[#0A0A0B] px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6 text-center">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${option.color} text-white text-2xl`}>
                      {option.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold text-white">{option.title}</h4>
                    
                    {/* Details */}
                    <div className="space-y-3 text-white/80 text-sm">
                      <div>
                        <span className="font-medium text-white">Focus: </span>
                        {option.focus}
                      </div>
                      <div>
                        <span className="font-medium text-white">Duration: </span>
                        {option.duration}
                      </div>
                      <div>
                        <span className="font-medium text-white">Outcome: </span>
                        {option.outcome}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      size="lg"
                      className={`w-full bg-gradient-to-r ${option.color} text-white hover:shadow-xl transition-all duration-300 border-0`}
                    >
                      {option.founder === "both" ? "Book Team Call" : `Call with ${option.founder === "delwer" ? "Delwer" : "Habib"}`}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Photos & Contact */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Founder Photos */}
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="flex items-center gap-4">
              {/* Delwer Photo */}
              <motion.div 
                animate={shouldReduceMotion ? {} : { 
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                  <Image
                    src="/images/team/delwer-hossain.jpg"
                    alt="Delwer Hossain - Co-Founder & Technical Lead"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Habib Photo */}
              <motion.div 
                animate={shouldReduceMotion ? {} : { 
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20">
                  <Image
                    src="/images/team/syed-mir-habib.jpg"
                    alt="Syed Mir Habib - Co-Founder & Strategy Lead"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-center space-y-4"
          >
            <Button 
              size="lg"
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-bold shadow-2xl hover:shadow-[#FFD700]/20 transition-all duration-300 text-lg px-8 py-4"
            >
              Book Team Consultation
            </Button>
            
            <div className="text-white/60 text-sm">
              hello@webcloudor.com • Response within 4 hours
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 1.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-3"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.text}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 1.8 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center gap-2 text-white/80 justify-center lg:justify-end"
              >
                <div className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{indicator.icon}</span>
                </div>
                <span className="text-sm">{indicator.text}</span>
              </motion.div>
            ))}
            
            <motion.p 
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={shouldReduceMotion ? {} : isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 2.1, ease: [0.4, 0, 0.2, 1] }}
              className="text-[#FFD700] text-sm font-medium text-center lg:text-right"
            >
              Direct access to the founders, always
            </p>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}