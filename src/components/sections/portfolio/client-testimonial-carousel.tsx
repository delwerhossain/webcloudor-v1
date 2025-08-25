"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { Button } from "@/components/ui"
import { Card } from "@/components/ui"
import { cn } from "@/lib/utils"
import { fadeUpVariants, EASE_CURVE } from "@/lib/utils/animations"

interface Testimonial {
  id: string
  quote: string
  client: {
    name: string
    title: string
    company: string
    photo: string
    logo: string
  }
  result: string
  metrics: string[]
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "WebCloudor transformed our digital presence completely. The new platform increased our online sales by 127% and simplified our operations. They&apos;re not just developers—they&apos;re strategic partners.",
    client: {
      name: "Dr. Michael Thompson",
      title: "CEO",
      company: "MedSupply Co",
      photo: "/testimonials/michael-thompson.jpg",
      logo: "/logos/medsupply-logo.png"
    },
    result: "+127% online sales growth",
    metrics: ["127% sales increase", "40% faster checkout", "89% mobile orders"]
  },
  {
    id: "2", 
    quote: "The MVP they built in 3 days was instrumental in securing our Series A. Investors could interact with our vision immediately, which made all the difference in our funding round.",
    client: {
      name: "Jennifer Rodriguez",
      title: "Founder",
      company: "TechStartup Inc",
      photo: "/testimonials/jennifer-rodriguez.jpg",
      logo: "/logos/techstartup-logo.png"
    },
    result: "$5M Series A funding secured",
    metrics: ["$5M funding", "3-day delivery", "1000+ early users"]
  },
  {
    id: "3",
    quote: "Their cloud architecture scaled seamlessly as we grew 10x. Zero downtime, enterprise-grade security, and a team that truly understands scalable systems.",
    client: {
      name: "David Kim",
      title: "CTO", 
      company: "ScaleUp Corp",
      photo: "/testimonials/david-kim.jpg",
      logo: "/logos/scaleup-logo.png"
    },
    result: "10x traffic growth, 99.9% uptime",
    metrics: ["10x scaling", "99.9% uptime", "SOC 2 compliant"]
  },
  {
    id: "4",
    quote: "The learning management system they built increased student engagement by 156%. Teachers love it, students love it, and our metrics prove it works.",
    client: {
      name: "Lisa Johnson",
      title: "Director of Technology",
      company: "EduTech Solutions", 
      photo: "/testimonials/lisa-johnson.jpg",
      logo: "/logos/edutech-logo.png"
    },
    result: "+156% student engagement",
    metrics: ["156% engagement", "50% faster grading", "99.9% uptime"]
  }
]

const TestimonialSlide = ({ testimonial, isActive }: { testimonial: Testimonial; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 100 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: EASE_CURVE }}
      className={cn(
        "absolute inset-0 flex items-center",
        !isActive && "pointer-events-none"
      )}
    >
      <div className="w-full max-w-4xl mx-auto px-6">
        <Card className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Quote Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Large Quote Mark */}
              <div className="text-6xl text-[#FFC300] leading-none">
                <Quote className="w-16 h-16" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-xl lg:text-2xl text-[#0A0A0B] leading-relaxed font-medium">
                {testimonial.quote}
              </blockquote>

              {/* Result Highlight */}
              <div className="inline-block bg-gradient-to-r from-[#FFC300] to-[#FF8C00] text-white px-4 py-2 rounded-full text-sm font-semibold">
                {testimonial.result}
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-3">
                {testimonial.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <Star className="w-4 h-4 fill-[#FFC300] text-[#FFC300]" />
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            {/* Client Section */}
            <div className="text-center lg:text-right space-y-6">
              {/* Client Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E0] to-[#94A3B8] flex items-center justify-center">
                    {/* Placeholder for client photo */}
                    <div className="text-[#64748B] text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-[#64748B]/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold">
                          {testimonial.client.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div className="text-xs">Photo</div>
                    </div>
                  </div>
                  
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-[#FFC300]/30 animate-pulse" />
                </div>
              </div>

              {/* Client Info */}
              <div className="space-y-2">
                <div className="text-lg font-semibold text-[#0A0A0B]">
                  {testimonial.client.name}
                </div>
                <div className="text-[#64748B]">
                  {testimonial.client.title}
                </div>
                <div className="text-sm font-medium text-[#1B365D]">
                  {testimonial.client.company}
                </div>
              </div>

              {/* Company Logo */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-24 h-12 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] flex items-center justify-center">
                  {/* Placeholder for company logo */}
                  <div className="text-xs text-[#64748B] text-center">
                    <div className="font-semibold">{testimonial.client.company}</div>
                    <div>Logo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}

export const ClientTestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000) // 8 seconds as specified

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 15 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <SectionContainer padding="large" className="bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: EASE_CURVE }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Trusted by businesses that demand excellence. Here&apos;s what our clients 
            say about working with WebCloudor.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Slides */}
          <div className="relative h-96 lg:h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                <TestimonialSlide
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={index === currentIndex}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              className="ml-4 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg border border-white/20 text-[#0A0A0B] hover:text-[#FFC300]"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              className="mr-4 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg border border-white/20 text-[#0A0A0B] hover:text-[#FFC300]"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-[#FFC300] scale-125"
                    : "bg-[#E2E8F0] hover:bg-[#CBD5E0]"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full max-w-md mx-auto">
            <div className="h-1 bg-[#E2E8F0] rounded-full overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: isAutoPlaying ? 8 : 0,
                  ease: "linear"
                }}
                className="h-full bg-gradient-to-r from-[#FFC300] to-[#FF8C00]"
              />
            </div>
            <div className="flex justify-between text-xs text-[#64748B] mt-2">
              <span>Auto-advancing testimonials</span>
              <span>{currentIndex + 1} of {testimonials.length}</span>
            </div>
          </div>
        </div>

        {/* Social Proof Footer */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE_CURVE, delay: 0.4 }}
          className="text-center mt-12 pt-12 border-t border-[#E2E8F0]"
        >
          <div className="text-sm text-[#64748B] mb-4">
            Join the growing list of satisfied clients
          </div>
          <div className="flex items-center justify-center gap-2 text-[#FFC300]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-[#0A0A0B] font-semibold ml-2">
              4.9/5 average rating
            </span>
            <span className="text-[#64748B] ml-1">
              from 50+ clients
            </span>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}