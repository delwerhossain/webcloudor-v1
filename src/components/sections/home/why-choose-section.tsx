'use client'

import { motion } from "framer-motion"
import { Zap, Bot, Shield, Globe } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { fadeUpVariants, staggerContainer, cardHoverVariants, EASE_CURVE } from "@/lib/utils/animations"

const differentiators = [
  {
    icon: Zap,
    title: "MVP in 1-3 Days",
    description: "Test ideas quickly with focused prototypes",
    gradient: "from-[#FFC300]/20 to-[#FFC300]/5",
    iconBg: "bg-[#FFC300]/10",
    iconColor: "text-[#FFC300]",
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description: "Reduce manual work with intelligent workflows",
    gradient: "from-[#1B365D]/20 to-[#1B365D]/5",
    iconBg: "bg-[#1B365D]/10",
    iconColor: "text-[#1B365D]",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level protection for your data",
    gradient: "from-[#FFC300]/20 to-[#FFC300]/5",
    iconBg: "bg-[#FFC300]/10",
    iconColor: "text-[#FFC300]",
  },
  {
    icon: Globe,
    title: "International Ready",
    description: "WCAG compliant, multi-language support",
    gradient: "from-[#1B365D]/20 to-[#1B365D]/5",
    iconBg: "bg-[#1B365D]/10",
    iconColor: "text-[#1B365D]",
  },
]

const DifferentiatorCard = ({ 
  item, 
  index 
}: { 
  item: typeof differentiators[0]
  index: number 
}) => {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className="group relative h-full"
    >
      <motion.div
        variants={fadeUpVariants}
        transition={{
          duration: 0.6,
          ease: EASE_CURVE,
          delay: index * 0.1
        }}
        className="relative bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm group-hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden"
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        {/* Icon - Mobile Optimized */}
        <motion.div
          className={`relative z-10 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 ${item.iconBg} rounded-xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: 5 }}
        >
          <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.iconColor}`} />
        </motion.div>

        {/* Content - Mobile Optimized */}
        <div className="relative z-10 space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-[#0A0A0B] group-hover:text-[#1B365D] transition-colors duration-300 leading-tight">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed group-hover:text-[#64748B]/80 transition-colors duration-300">
            {item.description}
          </p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#FFC300]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ 
            rotate: [0, 360],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
        
        <motion.div
          className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-[#1B365D]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ 
            rotate: [360, 0],
            transition: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export const WhyChooseSection = () => {
  return (
    <SectionContainer background="white" padding="large">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header - Mobile Optimized */}
        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.6, ease: EASE_CURVE }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-4">
            Why Choose WebCloudor
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto">
            Built for businesses that move fast
          </p>
        </motion.div>

        {/* Cards Grid - Mobile Optimized */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {differentiators.map((item, index) => (
            <DifferentiatorCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Statistics - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-[#E2E8F0]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center px-4">
            <div className="p-3 sm:p-0">
              <div className="text-3xl sm:text-2xl md:text-3xl font-bold text-[#1B365D] mb-1 sm:mb-2">
                99%
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium">
                Client Satisfaction
              </div>
            </div>
            <div className="p-3 sm:p-0">
              <div className="text-3xl sm:text-2xl md:text-3xl font-bold text-[#1B365D] mb-1 sm:mb-2">
                50+
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium">
                Projects Delivered
              </div>
            </div>
            <div className="p-3 sm:p-0">
              <div className="text-3xl sm:text-2xl md:text-3xl font-bold text-[#1B365D] mb-1 sm:mb-2">
                24h
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium">
                Response Time
              </div>
            </div>
            <div className="p-3 sm:p-0">
              <div className="text-3xl sm:text-2xl md:text-3xl font-bold text-[#1B365D] mb-1 sm:mb-2">
                0
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium">
                Missed Deadlines
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <div className="bg-gradient-to-br from-[#1B365D] to-[#0F1B2F] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#FFC300] rounded-full -translate-x-12 sm:-translate-x-16 -translate-y-12 sm:-translate-y-16" />
              <div className="absolute bottom-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-[#FFC300] rounded-full translate-x-10 sm:translate-x-12 translate-y-10 sm:translate-y-12" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5">
                Ready to experience the difference?
              </h3>
              <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Join forward-thinking companies that trust WebCloudor to accelerate their digital transformation.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-[#FFC300] text-[#0A0A0B] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#E6B000] transition-colors min-h-[52px] touch-manipulation w-full sm:w-auto"
              >
                Start Your Project Today
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}