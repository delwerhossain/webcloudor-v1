'use client'

import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"

const faqItems = [
  {
    question: "Do both founders work on every project?",
    answer: "Yes, both founders are personally involved in every project from start to finish. Delwer handles the technical development while Habib manages strategy and client relationships. You get the full benefit of our combined expertise.",
    icon: "🤝",
  },
  {
    question: "How do you divide responsibilities during a project?",
    answer: "Delwer focuses on architecture, development, and technical delivery. Habib handles project management, client communication, and strategic guidance. We coordinate closely to ensure unified direction and consistent communication.",
    icon: "💼",
  },
  {
    question: "What's your communication style?",
    answer: "We believe in transparent, frequent communication. You'll receive weekly demo calls, progress updates, and have direct access to both founders via email and Slack. No account managers or middlemen.",
    icon: "💬",
  },
  {
    question: "How do you handle disagreements or different opinions?",
    answer: "Our complementary expertise usually leads to unified recommendations. When we have different perspectives, we present both viewpoints and collaborate with you to make the best decision for your business goals.",
    icon: "⚖️",
  },
  {
    question: "Can we work with just one founder if needed?",
    answer: "While both founders contribute to every project, we can arrange calls with individual founders for specialized discussions. Technical deep-dives with Delwer, strategy sessions with Habib, or full team meetings as needed.",
    icon: "🎯",
  },
  {
    question: "What makes your partnership effective?",
    answer: "We've worked together for 4+ years and have complementary skills that cover the full spectrum of web development needs. Technical excellence meets business strategy, ensuring both robust code and measurable results.",
    icon: "⚡",
  },
  {
    question: "How involved are you in day-to-day project work?",
    answer: "Very involved. This isn't a typical agency where founders are removed from actual work. We write the code, make the strategic decisions, and personally ensure every deliverable meets our standards.",
    icon: "🚀",
  },
  {
    question: "What if we need expertise outside your core skills?",
    answer: "We have a network of trusted specialists for areas like advanced AI/ML, specialized design, or niche technical requirements. We coordinate these resources while maintaining project leadership and quality control.",
    icon: "🌐",
  },
]

interface FAQItemProps {
  item: typeof faqItems[0]
  index: number
  isOpen: boolean
  onToggle: () => void
  isInView: boolean
  shouldReduceMotion: boolean
}

const FAQItem = ({ item, index, isOpen, onToggle, isInView, shouldReduceMotion }: FAQItemProps) => {
  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
    >
      <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isOpen ? "shadow-lg border-[#00A8E8]/20" : "border-[#E2E8F0]"
      }`}>
        <motion.button
          onClick={onToggle}
          className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors duration-200"
          whileTap={shouldReduceMotion ? {} : { scale: 0.995 }}
        >
          <div className="flex items-center gap-4 flex-1">
            <div className={`text-2xl transition-transform duration-300 ${
              isOpen ? "scale-110" : "scale-100"
            }`}>
              {item.icon}
            </div>
            <h3 className={`font-semibold text-[#0A0A0B] transition-colors duration-300 ${
              isOpen ? "text-[#00A8E8]" : ""
            }`}>
              {item.question}
            </h3>
          </div>
          
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isOpen 
                ? "bg-[#00A8E8] text-white" 
                : "bg-[#F8FAFC] text-[#64748B]"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
              animate={shouldReduceMotion ? {} : { height: "auto", opacity: 1 }}
              exit={shouldReduceMotion ? {} : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <motion.div 
                initial={shouldReduceMotion ? {} : { y: -10 }}
                animate={shouldReduceMotion ? {} : { y: 0 }}
                exit={shouldReduceMotion ? {} : { y: -10 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="px-6 pb-6 ml-12"
              >
                <div className="w-full h-px bg-gradient-to-r from-[#00A8E8]/20 to-transparent mb-4" />
                <p className="text-[#64748B] leading-relaxed">{item.answer}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

export const TeamFAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion() ?? false
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <SectionContainer background="gray" padding="large">
      <div ref={ref} className="space-y-12">
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            Working With Our Team
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Common questions about collaboration
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
              isInView={isInView}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-white border-none shadow-xl text-center">
            <div className="space-y-6">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00A8E8]"></div>
                <div className="text-3xl">💬</div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#00A8E8] to-transparent"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] leading-tight">
                Still have questions?
              </h3>
              
              <p className="text-lg text-[#64748B] leading-relaxed">
                We're here to help. Every question gets a personal response from 
                one of the founders within 4 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <motion.a
                  href="mailto:hello@webcloudor.com"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-[#00A8E8] hover:bg-[#00A8E8]/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <span>📬</span>
                  Email Us Directly
                </motion.a>
                
                <Link
                  href="https://calendly.com/ahsanhabibakik/webcloudor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    className="inline-flex items-center gap-2 border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <span>📞</span>
                    Schedule a Call
                  </motion.button>
                </Link>
              </div>
              
              <div className="flex justify-center items-center gap-6 pt-6 text-sm text-[#64748B]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                  <span>Personal response guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                  <span>No automated replies</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  )
}