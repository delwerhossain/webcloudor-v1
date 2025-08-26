'use client'

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code, ShoppingCart, Cloud } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, cardHoverVariants, EASE_CURVE, createCounterVariant } from "@/lib/utils/animations"

const services = [
  {
    icon: Code,
    title: "Modern Web Development",
    description: "High-performance websites and applications built with the latest technologies. Optimized for speed, accessibility, and user experience.",
    metric: "Next.js 15",
    metricLabel: "latest framework",
    result: "Production-ready architecture",
    delay: 0,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payments, inventory management, and analytics. Built to scale with your business growth.",
    metric: "Shopify+",
    metricLabel: "platform integration",
    result: "Full-featured online stores",
    delay: 0.15,
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable architecture using AWS, Vercel, and modern DevOps practices. Reliable hosting with automated deployments.",
    metric: "AWS",
    metricLabel: "cloud platform",
    result: "Enterprise-grade reliability",
    delay: 0.3,
  },
]

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]))
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]))

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      className="group relative"
    >
      <motion.div
        variants={fadeUpVariants}
        transition={{ 
          duration: 0.6, 
          ease: EASE_CURVE,
          delay: service.delay
        }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 h-full group-hover:border-blue-200 group-hover:-translate-y-2 group-hover:bg-white/90"
      >
        {/* Enhanced Icon */}
        <motion.div
          className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-sm group-hover:shadow-md"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <service.icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
            {service.title}
          </h3>
          
          <p className="text-slate-600 leading-relaxed text-base font-medium mb-3">
            {service.description}
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-green-700 font-semibold text-sm">{service.result}</span>
          </div>
          
          {/* Enhanced Metric */}
          <div className="pt-6 border-t border-slate-200/70 group-hover:border-blue-200/50 transition-colors duration-300">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay + 0.3, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  {service.metric}
                </span>
                <span className="text-sm text-slate-500 font-semibold">
                  {service.metricLabel}
                </span>
              </div>
              <div className="flex-1 flex justify-end">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-lg flex items-center justify-center group-hover:from-yellow-400/30 group-hover:to-orange-400/30 transition-colors duration-300">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {/* Subtle border highlight on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200/20 via-blue-300/20 to-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.05) 50%, rgba(251, 191, 36, 0.1) 100%)'
        }} />
      </motion.div>
    </motion.div>
  )
}

export const WhatWeDoSection = () => {
  return (
    <SectionContainer background="gray" padding="large">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Enhanced Section Header */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="block">What We</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600">
              Build
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Modern web solutions designed for performance and growth.
            <span className="block mt-2 text-lg text-slate-500">
              Built with the latest technologies and best practices.
            </span>
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-300"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-300"></div>
          </div>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="space-y-3">
            <p className="text-slate-700 font-semibold text-lg">
              Ready to start your project?
            </p>
            <a 
              href="/contact?source=services-cta" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Free Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}