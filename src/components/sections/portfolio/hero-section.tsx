"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Zap, ShoppingCart, Cloud, Bot, Send, Layers, TrendingUp, Users, Award } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { Button } from "@/components/ui"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

interface ProjectPreview {
  id: string
  title: string
  metric: string
  color: string
  icon: React.ReactNode
  position: { x: string; y: string }
}

const projectPreviews: ProjectPreview[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    metric: "+127% Sales",
    color: "from-emerald-400 to-emerald-600",
    icon: <ShoppingCart className="w-5 h-5" />,
    position: { x: "10%", y: "20%" }
  },
  {
    id: "2", 
    title: "SaaS MVP",
    metric: "$5M Series A",
    color: "from-blue-400 to-blue-600",
    icon: <Send className="w-5 h-5" />,
    position: { x: "80%", y: "15%" }
  },
  {
    id: "3",
    title: "Cloud Architecture", 
    metric: "10x Scaling",
    color: "from-purple-400 to-purple-600",
    icon: <Cloud className="w-5 h-5" />,
    position: { x: "75%", y: "60%" }
  },
  {
    id: "4",
    title: "AI Automation",
    metric: "-60% Tickets", 
    color: "from-amber-400 to-amber-600",
    icon: <Bot className="w-5 h-5" />,
    position: { x: "15%", y: "70%" }
  }
]

const filterCategories = [
  "All Projects",
  "Web & Apps", 
  "E-commerce",
  "Cloud Architecture",
  "AI Automation",
  "Startup MVPs"
]

const FloatingProjectCard = ({ project, index }: { project: ProjectPreview; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: EASE_CURVE,
        delay: index * 0.15
      }}
      className="absolute z-10 pointer-events-none"
      style={{ left: project.position.x, top: project.position.y }}
    >
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 1, -1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: index * 0.5
        }}
        className={`bg-gradient-to-r ${project.color} rounded-2xl p-4 shadow-lg backdrop-blur-sm border border-white/20 min-w-[180px]`}
      >
        <div className="flex items-center gap-3 text-white">
          {project.icon}
          <div>
            <div className="text-sm font-medium">{project.title}</div>
            <div className="text-lg font-bold">{project.metric}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const CounterMetric = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0)
  const targetNumber = parseInt(value.replace(/[^\d]/g, ""))

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0
      const increment = targetNumber / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= targetNumber) {
          setCount(targetNumber)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 20)
      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(timer)
  }, [targetNumber, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_CURVE, delay }}
      className="text-center"
    >
      <div className="text-2xl md:text-3xl font-bold text-[#1B365D]">
        {value.includes("+") ? "+" : ""}{count}{value.includes("M") ? "M+" : "+"}
      </div>
      <div className="text-sm text-slate-600">{label}</div>
    </motion.div>
  )
}

export const PortfolioHero = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects")
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 800], [0, -100])

  return (
    <SectionContainer className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] via-transparent to-[#FFC300]" />
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" className="text-[#1B365D]" />
          </svg>
        </motion.div>
      </div>

      {/* Floating Project Cards */}
      {projectPreviews.map((project, index) => (
        <FloatingProjectCard key={project.id} project={project} index={index} />
      ))}

      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.div variants={fadeUpVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A0A0B] leading-tight">
              Results that speak{" "}
              <span className="bg-gradient-to-r from-[#FFC300] to-[#FF8C00] bg-clip-text text-transparent">
                louder than words
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Real projects, real outcomes, real growth. See how we&apos;ve helped 50+ clients achieve breakthrough results.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <motion.div 
            variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-3 py-4"
          >
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#FFC300] text-[#0A0A0B] shadow-lg shadow-[#FFC300]/25"
                    : "bg-white/80 text-slate-700 hover:bg-[#FFC300]/20 hover:text-[#0A0A0B] border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Trust Metrics Bar */}
          <motion.div 
            variants={fadeUpVariants}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <CounterMetric value="50+" label="Projects Delivered" delay={0.3} />
              <CounterMetric value="25M+" label="Client Revenue Generated" delay={0.5} />
              <CounterMetric value="99%" label="Client Retention" delay={0.7} />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUpVariants}>
            <Link href="/consultation">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#FFC300] to-[#FF8C00] text-[#0A0A0B] hover:shadow-xl hover:shadow-[#FFC300]/25 hover:scale-105 transition-all duration-300 font-semibold px-8 py-4"
              >
                Discuss Your Project
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}