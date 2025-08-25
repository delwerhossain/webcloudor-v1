'use client'

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, scaleVariants, EASE_CURVE } from "@/lib/utils/animations"

const testimonial = {
  quote: "WebCloudor delivered exactly what they promised, on time and on budget. Our new platform increased conversions by 45% in the first month.",
  author: {
    name: "Sarah Chen",
    title: "Head of Digital",
    company: "RetailCorp",
    image: "/testimonial-avatar.jpg", // Placeholder - would be replaced with actual image
  }
}

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        delay,
        staggerChildren: 0.03,
      }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + (index * 0.02),
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export const ClientTestimonialSection = () => {
  return (
    <SectionContainer background="gray" padding="large">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Enhanced Quote Marks */}
        <motion.div
          variants={scaleVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="mb-12"
        >
          <motion.div
            animate={{ 
              rotate: [0, 3, -3, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: EASE_CURVE 
            }}
            className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 rounded-full shadow-xl"
          >
            <Quote className="w-10 h-10 text-gray-900" fill="currentColor" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-30 blur-lg scale-150 animate-pulse"></div>
          </motion.div>
        </motion.div>

        {/* Quote Text */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: EASE_CURVE, delay: 0.3 }}
          className="mb-12"
        >
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0A0A0B] leading-tight">
            <TypewriterText text={testimonial.quote} delay={0.5} />
          </blockquote>
        </motion.div>

        {/* Author Section */}
        <motion.div
          variants={staggerContainer}
          className="flex flex-col items-center space-y-6"
        >
          {/* Author Photo */}
          <motion.div
            variants={scaleVariants}
            transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(255, 195, 0, 0.3)",
                  "0 0 30px rgba(255, 195, 0, 0.5)",
                  "0 0 20px rgba(255, 195, 0, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              {/* Placeholder avatar - replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-[#1B365D] to-[#0F1B2F] flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: EASE_CURVE, delay: 1 }}
            className="space-y-2"
          >
            <h4 className="text-xl font-semibold text-[#0A0A0B]">
              {testimonial.author.name}
            </h4>
            <p className="text-[#64748B] text-lg">
              {testimonial.author.title}
            </p>
          </motion.div>

          {/* Company Logo */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: EASE_CURVE, delay: 1.2 }}
            className="pt-4"
          >
            {/* Placeholder company logo */}
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-sm border border-[#E2E8F0]">
              <span className="text-[#64748B] font-medium text-sm tracking-wide">
                {testimonial.author.company.toUpperCase()}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="relative">
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: EASE_CURVE }}
            className="absolute -top-32 -left-8 w-4 h-4 bg-[#FFC300] rounded-full"
          />
          
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: EASE_CURVE, delay: 1 }}
            className="absolute -top-16 -right-12 w-3 h-3 bg-[#1B365D] rounded-full"
          />
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: EASE_CURVE, delay: 2 }}
            className="absolute -bottom-16 left-16 w-2 h-2 bg-[#FFC300] rounded-full"
          />
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-[#E2E8F0]"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#64748B]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full" />
              <span>Verified Review</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1B365D] rounded-full" />
              <span>Real Client Results</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FFC300] rounded-full" />
              <span>Measurable Impact</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}