'use client'

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, scaleVariants, EASE_CURVE } from "@/lib/utils/animations"

const testimonial = {
  quote: "WebCloudor delivered a high-quality website that exceeded our expectations. The team was professional, responsive, and delivered on time. We're very satisfied with the results.",
  author: {
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Growing Business",
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

        {/* Enhanced Quote Text */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: EASE_CURVE, delay: 0.3 }}
          className="mb-16 relative"
        >
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-relaxed">
              <TypewriterText text={testimonial.quote} delay={0.5} />
            </blockquote>
            
            {/* Quote decoration */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-60"></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 via-transparent to-yellow-50/50 pointer-events-none"></div>
          </div>
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
                  "0 0 20px rgba(59, 130, 246, 0.4)",
                  "0 0 30px rgba(59, 130, 246, 0.6)",
                  "0 0 20px rgba(59, 130, 246, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl"
            >
              {/* Enhanced avatar with better gradient */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Ring decoration */}
              <div className="absolute -inset-2 rounded-full border-2 border-blue-200/30 animate-pulse"></div>
            </motion.div>
          </motion.div>

          {/* Enhanced Author Info */}
          <motion.div
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: EASE_CURVE, delay: 1 }}
            className="space-y-3"
          >
            <h4 className="text-2xl font-bold text-gray-900">
              {testimonial.author.name}
            </h4>
            <p className="text-slate-600 text-lg font-medium">
              {testimonial.author.title}
            </p>
            {/* Rating stars */}
            <div className="flex justify-center items-center gap-1 pt-2">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + (i * 0.1), duration: 0.3 }}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
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
            className="absolute -top-16 -right-6 w-3 h-3 bg-[#1B365D] rounded-full"
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