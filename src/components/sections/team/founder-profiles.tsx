'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"

const delwerData = {
  name: "Delwer Hossain",
  role: "Co-Founder & Technical Lead",
  bio: "Delwer architects and builds scalable web applications that handle real-world growth. With 8+ years of full-stack development experience, he specializes in performance optimization, modern JavaScript frameworks, and cloud architecture that scales. His technical approach combines cutting-edge tools with battle-tested practices, ensuring every project is built for both immediate impact and long-term success.",
  expertise: [
    { category: "Frontend Excellence", skills: "React, Next.js, TypeScript, Modern CSS" },
    { category: "Backend Architecture", skills: "Node.js, Database Design, API Development" },
    { category: "Cloud & DevOps", skills: "AWS, Docker, CI/CD Pipelines, Performance Monitoring" },
    { category: "Specialized Skills", skills: "E-commerce Platforms, AI Integration, Performance Optimization" },
  ],
  background: [
    { title: "Current", detail: "Co-Founder & Technical Lead at WebCloudor" },
    { title: "Previous", detail: "Senior Full-Stack Developer at Growth Company" },
    { title: "Experience", detail: "8+ years building web applications" },
    { title: "Projects", detail: "30+ successful launches" },
  ],
  education: [
    "Bachelor's in Computer Science",
    "AWS Solutions Architect Certification",
    "Google Cloud Professional Certification",
    "Continuous Learning: Latest Next.js, React patterns, AI development",
  ],
  quote: "I love solving complex technical challenges, but what drives me most is seeing clients achieve results they didn't think were possible. Every line of code should serve a business purpose.",
  achievements: [
    "Led development team that scaled platform to 1M+ users",
    "Speaker at local tech meetups and conferences",
    "Open source contributor (GitHub: delwerhossain)",
    "Mentored 15+ junior developers",
  ],
  contact: {
    email: "delwer@webcloudor.com",
    linkedin: "Professional profile link",
    github: "Code portfolio and contributions",
    cta: "Book a technical consultation",
  },
}

const habibData = {
  name: "Ahsan Habib Akik",
  role: "Co-Founder & Strategy Lead",
  bio: "Habib bridges the gap between business objectives and technical execution. With 7+ years in digital strategy and growth, he ensures every project delivers measurable business outcomes, not just beautiful interfaces. His approach combines user psychology, market research, and conversion optimization to create web experiences that actually move business metrics.",
  expertise: [
    { category: "Strategy & Planning", skills: "Digital transformation, user experience strategy" },
    { category: "Growth & Conversion", skills: "CRO, analytics, user journey optimization" },
    { category: "Market Research", skills: "Competitive analysis, user interviews, validation" },
    { category: "Project Leadership", skills: "Client relationships, team coordination, delivery" },
  ],
  background: [
    { title: "Current", detail: "Co-Founder & Strategy Lead at WebCloudor" },
    { title: "Previous", detail: "Digital Strategy Manager at Marketing Agency" },
    { title: "Experience", detail: "7+ years in digital strategy and growth" },
    { title: "Impact", detail: "$50M+ in client revenue influenced" },
  ],
  education: [
    "Bachelor's in Business Administration",
    "Google Analytics Certification",
    "HubSpot Growth Marketing Certification",
    "Specializations: User Experience, Conversion Rate Optimization",
  ],
  quote: "Great technology means nothing without clear strategy. I ensure every solution we build moves our clients closer to their most important business goals.",
  achievements: [
    "Helped 12 startups raise total of $50M+ in funding",
    "Increased client conversion rates by average of 34%",
    "Featured speaker on growth strategy and digital transformation",
    "Mentored 20+ entrepreneurs and growth marketers",
  ],
  contact: {
    email: "habib@webcloudor.com",
    linkedin: "Professional profile link",
    github: "Strategy portfolio and contributions",
    cta: "Book a strategy consultation",
  },
}

interface FounderProfileProps {
  data: typeof delwerData
  imagePosition: "left" | "right"
  delay?: number
}

const FounderProfile = ({ data, imagePosition, delay = 0 }: FounderProfileProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start ${imagePosition === "right" ? "lg:grid-flow-col-dense" : ""}`}>
      {/* Professional Photo */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
        animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
        className={`relative order-first lg:order-none ${imagePosition === "right" ? "lg:col-start-2" : ""}`}
      >
        <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <OptimizedImage
            src={`/images/team/${data.name.toLowerCase().replace(" ", "-")}.jpg`}
            alt={`${data.name} - ${data.role} at WebCloudor`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1200px) 50vw, 400px"
            quality={90}
            priority={imagePosition === "left"}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
        animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: delay + 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={`space-y-6 sm:space-y-8 px-4 sm:px-0 ${imagePosition === "right" ? "lg:col-start-1 lg:row-start-1" : ""}`}
      >
        {/* Header */}
        <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
          <Badge variant="secondary" className="text-[#00A8E8] text-xs sm:text-sm">{data.role}</Badge>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A0A0B]">{data.name}</h3>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">{data.bio}</p>
        </div>

        {/* Quote */}
        <Card className="p-4 sm:p-6 bg-[#F8FAFC] border-l-4 border-[#00A8E8]">
          <blockquote className="text-sm sm:text-base text-[#64748B] italic leading-relaxed">
            "{data.quote}"
          </blockquote>
        </Card>

        {/* Core Expertise */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-[#0A0A0B]">Core Expertise</h4>
          <div className="space-y-3">
            {data.expertise.map((item, index) => (
              <motion.div
                key={item.category}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: delay + 0.4 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col gap-1 sm:gap-2"
              >
                <span className="font-medium text-[#0A0A0B] text-sm sm:text-base">{item.category}:</span>
                <span className="text-[#64748B] text-sm sm:text-base leading-relaxed">{item.skills}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Background */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-[#0A0A0B]">Professional Background</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {data.background.map((item, index) => (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: delay + 0.6 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="flex flex-col p-3 bg-gray-50 rounded-lg"
              >
                <span className="font-medium text-[#00A8E8] text-xs sm:text-sm">{item.title}</span>
                <span className="text-[#64748B] text-xs sm:text-sm leading-tight">{item.detail}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="space-y-3 sm:space-y-4">
          <h4 className="text-lg sm:text-xl font-semibold text-[#0A0A0B]">Key Achievements</h4>
          <ul className="space-y-2 sm:space-y-3">
            {data.achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -10 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: delay + 0.8 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                className="flex items-start gap-3 text-[#64748B]"
              >
                <span className="text-[#00A8E8] mt-1 text-xs flex-shrink-0">•</span>
                <span className="text-sm sm:text-base leading-relaxed">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: delay + 1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3"
        >
          <Button 
            size="sm" 
            className="bg-[#00A8E8] hover:bg-[#00A8E8]/90 text-white min-h-[44px] touch-manipulation"
          >
            <span className="text-sm">{data.contact.cta}</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="text-[#64748B] border-[#E2E8F0] hover:border-[#00A8E8] min-h-[44px] touch-manipulation"
          >
            <span className="text-sm">LinkedIn</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="text-[#64748B] border-[#E2E8F0] hover:border-[#00A8E8] min-h-[44px] touch-manipulation"
          >
            <span className="text-sm">{data.contact.github ? "GitHub" : "Email"}</span>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export const FounderProfiles = () => {
  return (
    <SectionContainer 
      background="gray" 
      padding="large"
    >
      <div id="founder-profiles" className="space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto px-4 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] leading-tight">
            The Founders Behind Your Success
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Direct access to both founders, not account managers. Personal involvement 
            in your project success from day one.
          </p>
        </motion.div>

        {/* Delwer Profile */}
        <FounderProfile data={delwerData} imagePosition="left" delay={0.2} />
        
        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent my-8 sm:my-12 lg:my-16" />
        
        {/* Habib Profile */}
        <FounderProfile data={habibData} imagePosition="right" delay={0.4} />
      </div>
    </SectionContainer>
  )
}