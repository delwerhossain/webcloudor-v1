'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionContainer } from "@/components/ui/section-container"

const certifications = [
  {
    category: "Technical Certifications",
    items: [
      { name: "AWS Solutions Architect Professional", logo: "aws", verified: true },
      { name: "Google Cloud Platform Professional", logo: "gcp", verified: true },
      { name: "Microsoft Azure Certified Developer", logo: "azure", verified: true },
      { name: "Stripe Partner Certification", logo: "stripe", verified: true },
      { name: "Shopify Plus Partner Status", logo: "shopify", verified: true }
    ]
  },
  {
    category: "Industry Recognition", 
    items: [
      { name: "Top Web Development Agency 2024", logo: "award", verified: true },
      { name: "Client Choice Award (B2B Reviews 2024)", logo: "choice", verified: true },
      { name: "Rising Star Agency (Tech Excellence 2023)", logo: "star", verified: true },
      { name: "Best Customer Service (Agency Awards 2023)", logo: "service", verified: true }
    ]
  }
]

const achievements = [
  { number: "12", label: "Clients secured funding", detail: "$50M+ total raised" },
  { number: "25+", label: "Clients achieved 6-figure growth", detail: "Revenue increases" },
  { number: "8", label: "Successful product launches", detail: "In 2024 alone" },
  { number: "15", label: "International market expansions", detail: "Global reach" }
]

const CertificationBadge = ({ cert, index }: { cert: any, index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="group relative bg-white rounded-xl p-4 shadow-lg border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-16 h-16 bg-gradient-to-br from-[#00A8E8] to-[#0077C7] rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {cert.logo === "aws" && "AWS"}
          {cert.logo === "gcp" && "GCP"} 
          {cert.logo === "azure" && "Az"}
          {cert.logo === "stripe" && "S"}
          {cert.logo === "shopify" && "S+"}
          {cert.logo === "award" && "🏆"}
          {cert.logo === "choice" && "⭐"}
          {cert.logo === "star" && "🌟"}
          {cert.logo === "service" && "👑"}
        </div>
        
        <div>
          <h4 className="font-semibold text-[#0A0A0B] text-sm mb-1">{cert.name}</h4>
          {cert.verified && (
            <div className="flex items-center justify-center space-x-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-green-600">Verified</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover tooltip */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#00A8E8]/5 to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

export const Certifications = () => {
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
            Certifications & Recognition
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Validated expertise you can trust
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="space-y-12">
          {certifications.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + (categoryIndex * 0.2), ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-[#0A0A0B] text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.items.map((cert, certIndex) => (
                  <CertificationBadge 
                    key={cert.name} 
                    cert={cert} 
                    index={categoryIndex * 5 + certIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#E2E8F0]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center mb-8">
            Client Achievements We Have Enabled
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#00A8E8] mb-2">
                  {achievement.number}
                </div>
                <div className="text-[#0A0A0B] font-semibold mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-[#64748B]">
                  {achievement.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Contributions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-[#0A0A0B] mb-6">
            Community Contributions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-semibold text-[#00A8E8]">Open Source</div>
              <div className="text-[#64748B]">Project contributions</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[#00A8E8]">Speaking</div>
              <div className="text-[#64748B]">Industry conferences</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[#00A8E8]">Mentoring</div>
              <div className="text-[#64748B]">Startup founders</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-[#00A8E8]">Writing</div>
              <div className="text-[#64748B]">Technical articles</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}