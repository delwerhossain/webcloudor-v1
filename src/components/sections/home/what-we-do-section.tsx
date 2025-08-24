'use client'

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Code, ShoppingCart, Cloud } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, cardHoverVariants, EASE_CURVE, createCounterVariant } from "@/lib/utils/animations"

const services = [
  {
    icon: Code,
    title: "Web & App Development",
    description: "Modern websites and applications with smart automations built in. Launch faster, maintain easier.",
    metric: "2-4×",
    metricLabel: "faster development",
    delay: 0,
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "High-converting storefronts with secure payments and growth analytics. Built to scale.",
    metric: "+20-60%",
    metricLabel: "conversion",
    delay: 0.15,
  },
  {
    icon: Cloud,
    title: "Scalable Architecture",
    description: "Future-ready infrastructure that grows with your business. Reliable, secure, optimized.",
    metric: "99.9%",
    metricLabel: "uptime",
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
        className="bg-white rounded-xl p-8 border border-[#E2E8F0] shadow-sm group-hover:shadow-xl transition-shadow duration-300 h-full"
      >
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-12 h-12 bg-[#1B365D]/10 rounded-lg mb-6 group-hover:bg-[#1B365D]/20 transition-colors duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <service.icon className="w-6 h-6 text-[#1B365D]" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#0A0A0B] group-hover:text-[#1B365D] transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-[#64748B] leading-relaxed">
            {service.description}
          </p>
          
          {/* Metric */}
          <div className="pt-4 border-t border-[#E2E8F0] group-hover:border-[#1B365D]/20 transition-colors duration-300">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay + 0.3, duration: 0.4 }}
              className="flex items-baseline gap-2"
            >
              <span className="text-2xl font-bold text-[#FFC300]">
                {service.metric}
              </span>
              <span className="text-sm text-[#64748B] font-medium">
                {service.metricLabel}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1B365D]/5 via-transparent to-[#FFC300]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
        {/* Section Header */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-4">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto">
            Ship faster with modern web solutions designed for growth
          </p>
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
          <p className="text-[#64748B]">
            Ready to accelerate your project?{' '}
            <span className="text-[#1B365D] font-medium cursor-pointer hover:underline">
              Let's talk
            </span>
          </p>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}