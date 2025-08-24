'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const delwerCertifications = [
  {
    title: "AWS Solutions Architect Professional",
    validity: "Valid 2024-2027",
    level: "Professional",
    color: "from-[#FF9900] to-[#FF6600]",
  },
  {
    title: "Google Cloud Platform Professional Developer",
    validity: "Valid 2024-2026",
    level: "Professional",
    color: "from-[#4285F4] to-[#34A853]",
  },
  {
    title: "MongoDB Certified Developer Associate",
    validity: "Valid 2024-2025",
    level: "Associate",
    color: "from-[#4DB33D] to-[#3F9C35]",
  },
  {
    title: "Next.js Professional Certification",
    validity: "2024",
    level: "Professional",
    color: "from-[#000000] to-[#404040]",
  },
]

const habibCertifications = [
  {
    title: "Google Analytics 4 Certified",
    validity: "Valid 2024-2025",
    level: "Certified",
    color: "from-[#E37400] to-[#F9AB00]",
  },
  {
    title: "HubSpot Growth Marketing Certification",
    validity: "2024",
    level: "Certified",
    color: "from-[#FF7A59] to-[#FF5C35]",
  },
  {
    title: "Google Ads Search Certification",
    validity: "Valid 2024-2025",
    level: "Certified",
    color: "from-[#4285F4] to-[#1A73E8]",
  },
  {
    title: "Conversion Rate Optimization Institute Graduate",
    validity: "2023",
    level: "Graduate",
    color: "from-[#8B5CF6] to-[#7C3AED]",
  },
]

const industryRecognitions = [
  {
    title: "Best New Agency 2024",
    organization: "Local Business Awards",
    description: "Recognized for innovative approach and client results",
    icon: "🏆",
  },
  {
    title: "Client Choice Award",
    organization: "B2B Review Platform",
    description: "Top-rated agency based on client satisfaction",
    icon: "⭐",
  },
  {
    title: "Speaker Recognition",
    organization: "Tech Conference Circuit",
    description: "Regular speakers at industry conferences",
    icon: "🎤",
  },
  {
    title: "Community Contribution",
    organization: "Open Source Projects",
    description: "Active contributors to developer community",
    icon: "💻",
  },
]

const mediaRecognition = [
  {
    type: "Podcast Appearances",
    count: "3",
    description: "Industry podcasts on web development",
    icon: "🎧",
  },
  {
    type: "Article Publications",
    count: "8",
    description: "Technical articles in industry magazines",
    icon: "📝",
  },
  {
    type: "Conference Speaking",
    count: "5",
    description: "Presentations at tech conferences",
    icon: "🎤",
  },
  {
    type: "Interview Features",
    count: "2",
    description: "Interviews in startup publications",
    icon: "📺",
  },
]

interface CertificationGridProps {
  title: string
  certifications: typeof delwerCertifications
  delay?: number
}

const CertificationGrid = ({ title, certifications, delay = 0 }: CertificationGridProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <div ref={ref} className="space-y-6">
      <motion.h3 
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
        className="text-xl md:text-2xl font-bold text-[#0A0A0B] text-center"
      >
        {title}
      </motion.h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: delay + 0.2 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
          >
            <Card className="p-4 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`}></div>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-[#0A0A0B] text-sm leading-tight flex-1">{cert.title}</h4>
                  <Badge variant="secondary" className="text-xs shrink-0">{cert.level}</Badge>
                </div>
                <p className="text-xs text-[#64748B]">{cert.validity}</p>
                <div className="flex items-center justify-between">
                  <div className={`w-6 h-6 rounded bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-xs text-[#00A8E8] hover:underline cursor-pointer">Verify</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export const IndustryRecognition = () => {
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
            Recognition & Certifications
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Validated expertise you can trust
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <CertificationGrid 
            title="Delwer's Certifications" 
            certifications={delwerCertifications} 
            delay={0.2}
          />
          <CertificationGrid 
            title="Habib's Certifications" 
            certifications={habibCertifications} 
            delay={0.4}
          />
        </div>

        {/* Industry Recognition */}
        <div className="space-y-8">
          <motion.h3 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center"
          >
            Industry Recognition
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryRecognitions.map((recognition, index) => (
              <motion.div
                key={recognition.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-all duration-300">
                  <div className="space-y-3">
                    <div className="text-3xl">{recognition.icon}</div>
                    <h4 className="font-bold text-[#0A0A0B]">{recognition.title}</h4>
                    <p className="text-sm font-medium text-[#00A8E8]">{recognition.organization}</p>
                    <p className="text-xs text-[#64748B] leading-relaxed">{recognition.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media & Press */}
        <div className="space-y-8">
          <motion.h3 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center"
          >
            Media & Press
          </motion.h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaRecognition.map((media, index) => (
              <motion.div
                key={media.type}
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="space-y-3">
                    <div className="text-2xl">{media.icon}</div>
                    <div className="text-3xl font-bold text-[#00A8E8]">{media.count}</div>
                    <h4 className="font-semibold text-[#0A0A0B] text-sm">{media.type}</h4>
                    <p className="text-xs text-[#64748B]">{media.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.4, 0, 0.2, 1] }}
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
                Credentials That Matter
              </h3>
              
              <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
                Our certifications and recognition represent more than achievements—they're proof 
                of our commitment to excellence and staying at the forefront of our industries.
              </p>
              
              <div className="flex justify-center items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">100%</div>
                  <div className="text-xs text-[#64748B]">Verified</div>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0]"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">Current</div>
                  <div className="text-xs text-[#64748B]">All Certs</div>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0]"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">Active</div>
                  <div className="text-xs text-[#64748B]">Learning</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  )
}