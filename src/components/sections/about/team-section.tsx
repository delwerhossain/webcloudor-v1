'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { SectionContainer } from "@/components/ui/section-container"

const teamMembers = [
  {
    name: "Delwer Hossain",
    role: "Founder & Technical Lead",
    image: "/images/about/delwer-hossain.jpg",
    bio: "Delwer architects and builds modern web applications that scale. With expertise in React, Next.js, and cloud infrastructure, he ensures every project is built for performance, security, and growth. His approach combines cutting-edge technology with practical business needs, delivering solutions that work reliably in the real world.",
    expertise: [
      "Modern JavaScript frameworks",
      "Scalable cloud architecture",
      "E-commerce platform development", 
      "Performance optimization",
      "AI integration and automation"
    ],
    background: [
      "8+ years full-stack development",
      "Led technical teams at growth companies",
      "Open source contributor",
      "Cloud architecture specialist"
    ],
    quote: "I love solving complex technical challenges, but what drives me is seeing clients achieve results they did not think were possible.",
    links: {
      linkedin: "https://linkedin.com/in/delwer-hossain",
      github: "https://github.com/delwerhossain"
    }
  },
  {
    name: "Syed Mir Habib",
    role: "Founder & Strategy Lead",
    image: "/images/about/syed-mir-habib.jpg",
    bio: "Habib shapes client strategy, messaging, and user experience. He bridges the gap between business objectives and technical execution, ensuring every project delivers measurable outcomes. His background in growth strategy and user psychology helps clients not just build better products, but understand their markets deeply.",
    expertise: [
      "Digital strategy and positioning",
      "User experience and conversion optimization",
      "Market research and validation",
      "Growth marketing and analytics",
      "Client success and relationship management"
    ],
    background: [
      "7+ years strategy and growth roles",
      "Helped startups raise $50M+ in funding",
      "User research and conversion specialist",
      "International market expansion experience"
    ],
    quote: "Great technology means nothing without clear strategy. I ensure every solution we build moves our clients closer to their biggest goals.",
    links: {
      linkedin: "https://linkedin.com/in/syed-mir-habib",
      email: "habib@webcloudor.com"
    }
  }
]

export const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer background="white" padding="large">
      <div id="team-section" ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            The Team Behind the Results
          </h2>
          <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
            Small, senior, accountable
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="space-y-24">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.3), ease: [0.4, 0, 0.2, 1] }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Photo */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00A8E8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-[#00A8E8]/10 to-[#FFD700]/10" />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-[#00A8E8] font-semibold mb-6">
                    {member.role}
                  </p>
                  <p className="text-[#64748B] leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="font-semibold text-[#0A0A0B] mb-4">Expertise Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.4 + (index * 0.3) + (skillIndex * 0.1), 
                          ease: [0.4, 0, 0.2, 1] 
                        }}
                        className="px-3 py-1 bg-[#00A8E8]/10 text-[#00A8E8] rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Background Highlights */}
                <div>
                  <h4 className="font-semibold text-[#0A0A0B] mb-4">Background Highlights:</h4>
                  <ul className="space-y-2">
                    {member.background.map((highlight, bgIndex) => (
                      <motion.li
                        key={bgIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.6 + (index * 0.3) + (bgIndex * 0.1), 
                          ease: [0.4, 0, 0.2, 1] 
                        }}
                        className="flex items-center space-x-3 text-[#64748B]"
                      >
                        <div className="w-2 h-2 bg-[#FFD700] rounded-full flex-shrink-0" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.3), ease: [0.4, 0, 0.2, 1] }}
                  className="p-6 bg-gradient-to-r from-[#F8FAFC] to-white rounded-xl border-l-4 border-[#00A8E8]"
                >
                  <blockquote className="text-[#0A0A0B] italic font-medium">
                    "{member.quote}"
                  </blockquote>
                </motion.div>

                {/* Contact Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.3), ease: [0.4, 0, 0.2, 1] }}
                  className="flex space-x-4"
                >
                  {member.links.linkedin && (
                    <Link
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#0077B5]/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </Link>
                  )}
                  {member.links.github && (
                    <Link
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-[#333] text-white rounded-lg hover:bg-[#333]/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHub</span>
                    </Link>
                  )}
                  {member.links.email && (
                    <Link
                      href={`mailto:${member.links.email}`}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#00A8E8] text-white rounded-lg hover:bg-[#00A8E8]/90 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>Email</span>
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}