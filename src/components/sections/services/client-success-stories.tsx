"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fadeUpVariants, EASE_CURVE } from "@/lib/utils/animations"

const testimonials = [
  {
    id: 1,
    quote: "WebCloudor rebuilt our e-commerce platform and increased our conversion rate by 45% in just two months. Their attention to user experience details made all the difference.",
    client: "Sarah Chen",
    position: "Head of Digital",
    company: "RetailCorp",
    results: "+45% conversion, +$2M annual revenue",
    service: "E-commerce Solutions",
    avatar: "/images/testimonials/sarah-chen.jpg",
    companyLogo: "/images/companies/retailcorp.svg"
  },
  {
    id: 2,
    quote: "The MVP they built in 3 days helped us secure our Series A funding. Investors could see and interact with our vision immediately.",
    client: "Marcus Rodriguez",
    position: "CEO",
    company: "TechStartup Inc",
    results: "$5M Series A raised",
    service: "Fast MVP Development",
    avatar: "/images/testimonials/marcus-rodriguez.jpg",
    companyLogo: "/images/companies/techstartup.svg"
  },
  {
    id: 3,
    quote: "Their cloud architecture scales seamlessly. We've grown 10x with zero downtime issues. Best technical decision we've made.",
    client: "Jennifer Liu",
    position: "CTO",
    company: "ScaleUp Corp",
    results: "99.9% uptime, 10x traffic growth",
    service: "Cloud Architecture",
    avatar: "/images/testimonials/jennifer-liu.jpg",
    companyLogo: "/images/companies/scaleup.svg"
  }
]

export const ClientSuccessStories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <SectionContainer 
      background="gray" 
      padding="large"
    >
      <div id="client-success-stories" ref={ref} className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, ease: EASE_CURVE }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B] mb-6"
          >
            Client Success Stories
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_CURVE }}
            className="text-lg md:text-xl text-[#64748B] leading-relaxed"
          >
            Real results from real projects
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_CURVE }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: EASE_CURVE }}
              >
                <Card className="bg-white border border-[#E2E8F0] rounded-3xl p-8 md:p-12 shadow-xl">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Quote Section - 2/3 width */}
                    <div className="md:col-span-2 space-y-6">
                      {/* Service Badge */}
                      <Badge className="bg-[#00A8E8]/10 text-[#00A8E8] border-[#00A8E8]/20 font-medium px-4 py-2">
                        {currentTestimonial.service}
                      </Badge>

                      {/* Quote */}
                      <div className="relative">
                        <div className="absolute -top-4 -left-4 text-6xl text-[#00A8E8]/20 font-serif leading-none">
                          "
                        </div>
                        <motion.blockquote
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="text-lg md:text-xl text-[#0A0A0B] leading-relaxed font-medium relative z-10"
                        >
                          {currentTestimonial.quote}
                        </motion.blockquote>
                      </div>

                      {/* Results Metrics */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="bg-gradient-to-r from-[#00A8E8]/5 to-[#10B981]/5 rounded-2xl p-6"
                      >
                        <div className="text-sm text-[#64748B] mb-2">Results Achieved:</div>
                        <div className="text-2xl font-bold text-[#0A0A0B]">
                          {currentTestimonial.results}
                        </div>
                      </motion.div>
                    </div>

                    {/* Client Section - 1/3 width */}
                    <div className="text-center md:text-left space-y-6">
                      {/* Client Avatar */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative mx-auto md:mx-0 w-24 h-24"
                      >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00A8E8] to-[#0077C7] flex items-center justify-center text-white text-2xl font-bold">
                          {currentTestimonial.client.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#10B981] rounded-full flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <polyline points="20,6 9,17 4,12"/>
                          </svg>
                        </div>
                      </motion.div>

                      {/* Client Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-2"
                      >
                        <div className="font-bold text-[#0A0A0B] text-lg">
                          {currentTestimonial.client}
                        </div>
                        <div className="text-[#64748B]">
                          {currentTestimonial.position}
                        </div>
                        <div className="text-[#00A8E8] font-semibold">
                          {currentTestimonial.company}
                        </div>
                      </motion.div>

                      {/* Company Logo Placeholder */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-4"
                      >
                        <div className="w-20 h-8 bg-[#E2E8F0] rounded-lg flex items-center justify-center text-xs text-[#64748B] mx-auto md:mx-0">
                          Logo
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-[#00A8E8] scale-125" 
                      : "bg-[#E2E8F0] hover:bg-[#64748B]"
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-full bg-[#E2E8F0] rounded-full h-1">
              <motion.div
                key={currentIndex}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-1 bg-[#00A8E8] rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* All Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8, ease: EASE_CURVE }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ y: -4 }}
              className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-[#00A8E8] bg-[#00A8E8]/5"
                  : "border-[#E2E8F0] bg-white hover:border-[#00A8E8]/50"
              }`}
            >
              <div className="space-y-3">
                <Badge className="bg-[#64748B]/10 text-[#64748B] text-xs">
                  {testimonial.service}
                </Badge>
                <p className="text-sm text-[#64748B] line-clamp-3">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A8E8] to-[#0077C7] flex items-center justify-center text-white text-xs font-bold">
                    {testimonial.client.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0A0A0B]">
                      {testimonial.client}
                    </div>
                    <div className="text-xs text-[#64748B]">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}