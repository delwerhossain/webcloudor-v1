'use client'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/ui/section-container"

const consultationBenefits = [
  "Free 30-minute strategy session",
  "Honest assessment of your project scope", 
  "Clear next steps and timeline",
  "Transparent pricing discussion"
]

const processSteps = [
  { step: 1, title: "Book a consultation call", description: "Schedule your free strategy session" },
  { step: 2, title: "Discuss your goals and challenges", description: "Deep dive into your vision" },
  { step: 3, title: "Receive a custom project proposal", description: "Tailored solution for your needs" },
  { step: 4, title: "Begin work within 1-2 weeks", description: "Fast track to results" }
]

export const StartTogether = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <SectionContainer 
      background="gradient" 
      padding="large"
      className="bg-gradient-to-br from-[#1B365D] to-[#0F1B2F] text-white"
    >
      <div ref={ref} className="text-center space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to work with a team that gets it?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Let us discuss your project goals and see if we are the right fit. 
            No sales pressure, just honest conversation about what is possible.
          </p>
        </motion.div>

        {/* Consultation Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {consultationBenefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + (index * 0.1), 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
            >
              <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center text-[#0A0A0B] font-bold text-sm mx-auto mb-3">
                ✓
              </div>
              <p className="text-white/90 text-sm font-medium">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/contact?type=consultation"
            className="inline-flex items-center justify-center bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 h-14 rounded-xl"
          >
            Book Free Consultation
          </Link>
          
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1B365D] font-semibold px-8 py-4 text-lg transition-all duration-300 h-14 rounded-xl"
          >
            Email Us Directly
          </Link>
          
          <Link 
            href="/portfolio"
            className="inline-flex items-center justify-center text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg transition-all duration-300 h-14 rounded-xl"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
            <Link 
              href="mailto:hello@webcloudor.com"
              className="hover:text-[#FFD700] transition-colors duration-300"
            >
              hello@webcloudor.com
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link 
              href="tel:+15551234567"
              className="hover:text-[#FFD700] transition-colors duration-300"
            >
              +1 (555) 123-4567
            </Link>
          </div>
          <p className="text-[#FFD700] font-semibold">
            Response guaranteed within 4 hours
          </p>
        </motion.div>

        {/* Team Availability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center space-x-4"
        >
          <div className="flex -space-x-2">
            <div className="w-12 h-12 relative rounded-full border-2 border-white overflow-hidden">
              <Image
                src="/images/about/delwer-hossain-sm.jpg"
                alt="Delwer Hossain"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="w-12 h-12 relative rounded-full border-2 border-white overflow-hidden">
              <Image
                src="/images/about/syed-mir-habib-sm.jpg"
                alt="Syed Mir Habib"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
          </div>
          <p className="text-white/90">
            Delwer & Habib personally handle all initial consultations
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8">Next Steps Process</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.4 + (index * 0.1), 
                  ease: [0.4, 0, 0.2, 1] 
                }}
                className="text-center space-y-4"
              >
                <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-[#0A0A0B] font-bold text-xl mx-auto">
                  {step.step}
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">{step.title}</h4>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
                
                {/* Arrow connecting steps (not on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full transform -translate-y-1/2 w-8">
                    <svg className="w-full h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00A8E8]/5 rounded-full blur-3xl" />
        </div>
      </div>
    </SectionContainer>
  )
}