"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { fadeUpDelayedVariants, EASE_CURVE } from "@/lib/utils/animations"

const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "Most projects can begin within 1-2 weeks of signing. For urgent MVP development, we can often start within 48 hours."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. We work with clients across multiple time zones and have experience with international compliance requirements."
  },
  {
    question: "What happens if I need changes during development?",
    answer: "We expect changes and plan for them. Each project includes a revision process, and we discuss additional changes transparently."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. All projects include free support periods, and we offer ongoing maintenance and growth optimization services."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Definitely. We integrate seamlessly with in-house teams and provide knowledge transfer to ensure smooth collaboration."
  },
  {
    question: "How do you ensure project security?",
    answer: "We follow enterprise-grade security practices, including secure coding standards, regular audits, and compliance with industry regulations."
  }
]

export const ServicesFAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <SectionContainer 
      id="services-faq"
      background="gray" 
      padding="large"
    >
      <div ref={ref} className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
            className="text-lg md:text-xl text-[#64748B] leading-relaxed"
          >
            Everything you need to know
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUpDelayedVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="h-fit"
              >
                <Card className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:ring-inset"
                    whileHover={{ backgroundColor: "rgba(0, 168, 232, 0.02)" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#00A8E8]/10 rounded-full flex items-center justify-center text-[#00A8E8] font-bold text-sm mt-1">
                          {(index + 1).toString().padStart(2, "0")}
                        </div>
                        <h3 className="text-lg font-semibold text-[#0A0A0B] pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: EASE_CURVE }}
                        className="flex-shrink-0 w-8 h-8 bg-[#00A8E8]/10 rounded-full flex items-center justify-center"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-[#00A8E8]"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  </motion.button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_CURVE }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.3, delay: 0.1, ease: EASE_CURVE }}
                          className="px-6 pb-6 border-t border-[#E2E8F0]/50"
                        >
                          <div className="pt-4 pl-12">
                            <p className="text-[#64748B] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE_CURVE }}
          className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg border border-[#E2E8F0] max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00A8E8] to-[#0077C7] rounded-2xl flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B]">
                Still have questions?
              </h3>
              <p className="text-[#64748B] text-lg">
                We&apos;re here to help. Get in touch and we&apos;ll answer any questions you have.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const element = document.getElementById("get-started-cta")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0B] font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
              </motion.button>
              
              <motion.a
                href="mailto:hello@webcloudor.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Email Us
              </motion.a>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] text-center">
              <p className="text-sm text-[#64748B]">
                <span className="font-medium text-[#0A0A0B]">Response guaranteed within 24 hours</span>
                <br />
                hello@webcloudor.com • +1 (555) 123-4567
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}