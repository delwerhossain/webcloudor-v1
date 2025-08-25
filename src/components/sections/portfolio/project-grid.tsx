"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Badge, Card } from "@/components/ui"
import { Button } from "@/components/ui"
import { SectionContainer } from "@/components/ui"
import { 
  Zap, 
  ShoppingCart, 
  Code, 
  Cloud, 
  Bot, 
  ArrowRight,
  Clock,
  Building,
  TrendingUp,
  Users,
  Shield,
  Smartphone
} from "lucide-react"
import { fadeUpVariants, staggerContainer, cardHoverVariants, EASE_CURVE } from "@/lib/utils/animations"

interface Project {
  id: string
  title: string
  client: string
  coverImage: string
  badge: {
    text: string
    icon: React.ReactNode
    color: string
  }
  keyMetric: string
  secondaryMetrics: string[]
  industry: string
  timeline: string
  description: string
  link: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "SaaS Analytics Platform MVP",
    client: "TechStartup Inc",
    coverImage: "/portfolio/saas-dashboard.jpg",
    badge: {
      text: "Fast MVP",
      icon: <Zap className="w-4 h-4" />,
      color: "from-yellow-400 to-orange-500"
    },
    keyMetric: "$5M Series A Raised",
    secondaryMetrics: ["3-day delivery", "1000+ users"],
    industry: "SaaS & Technology",
    timeline: "3 days",
    description: "Rapid prototype that secured Series A funding",
    link: "/portfolio/techstartup-mvp"
  },
  {
    id: "2",
    title: "Medical Supply E-commerce Platform",
    client: "MedSupply Co",
    coverImage: "/portfolio/medical-ecommerce.jpg",
    badge: {
      text: "E-commerce",
      icon: <ShoppingCart className="w-4 h-4" />,
      color: "from-blue-400 to-blue-600"
    },
    keyMetric: "+127% Online Sales",
    secondaryMetrics: ["+89% mobile orders", "40% faster checkout"],
    industry: "Healthcare & Medical",
    timeline: "10 weeks", 
    description: "Complete e-commerce rebuild with B2B features",
    link: "/portfolio/medsupply-ecommerce"
  },
  {
    id: "3",
    title: "Interactive Learning Management System",
    client: "EduTech Solutions",
    coverImage: "/portfolio/learning-platform.jpg",
    badge: {
      text: "Web Development",
      icon: <Code className="w-4 h-4" />,
      color: "from-green-400 to-green-600"
    },
    keyMetric: "+156% Student Engagement",
    secondaryMetrics: ["50% faster grading", "99.9% uptime"],
    industry: "Education & Learning",
    timeline: "12 weeks",
    description: "Modern LMS with real-time collaboration",
    link: "/portfolio/edutech-lms"
  },
  {
    id: "4",
    title: "Scalable Fintech Infrastructure", 
    client: "Confidential Financial Client",
    coverImage: "/portfolio/fintech-dashboard.jpg",
    badge: {
      text: "Cloud Architecture",
      icon: <Cloud className="w-4 h-4" />,
      color: "from-purple-400 to-purple-600"
    },
    keyMetric: "10x Traffic Scaling",
    secondaryMetrics: ["99.9% uptime", "SOC 2 compliant"],
    industry: "Financial Services",
    timeline: "16 weeks",
    description: "Enterprise-grade architecture for financial data",
    link: "/portfolio/fintech-infrastructure"
  },
  {
    id: "5",
    title: "Restaurant Order Automation System",
    client: "ChainEats Restaurant Group", 
    coverImage: "/portfolio/restaurant-ai.jpg",
    badge: {
      text: "AI Automation",
      icon: <Bot className="w-4 h-4" />,
      color: "from-red-400 to-red-600"
    },
    keyMetric: "-60% Support Tickets",
    secondaryMetrics: ["+34% order accuracy", "24/7 availability"],
    industry: "Food & Hospitality",
    timeline: "4 weeks",
    description: "AI-powered ordering and customer service",
    link: "/portfolio/restaurant-automation"
  },
  {
    id: "6",
    title: "Donation Platform with Impact Tracking",
    client: "Global Impact Foundation",
    coverImage: "/portfolio/nonprofit-platform.jpg",
    badge: {
      text: "Web Development", 
      icon: <Code className="w-4 h-4" />,
      color: "from-emerald-400 to-emerald-600"
    },
    keyMetric: "+89% Donation Conversion",
    secondaryMetrics: ["+234% mobile donations", "WCAG AA compliant"],
    industry: "Non-profit",
    timeline: "8 weeks",
    description: "Accessible platform showcasing impact stories",
    link: "/portfolio/nonprofit-platform"
  }
]

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        ease: EASE_CURVE,
        delay: index * 0.1
      }}
    >
      <motion.div
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        className="group h-full"
      >
        <Card className="overflow-hidden bg-white border border-[#E2E8F0] hover:border-[#FFC300] hover:shadow-xl hover:shadow-[#FFC300]/10 transition-all duration-300 h-full flex flex-col">
          {/* Cover Image */}
          <div className="relative aspect-[4/3] sm:aspect-video overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#F8FAFC] via-[#E2E8F0] to-[#CBD5E0] flex items-center justify-center">
              {/* Placeholder for project screenshot */}
              <div className="text-[#64748B] text-center px-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br ${project.badge.color} rounded-xl flex items-center justify-center text-white`}>
                  {project.badge.icon}
                </div>
                <div className="text-xs sm:text-sm font-medium line-clamp-2">{project.title}</div>
                <div className="text-xs opacity-70 mt-1">Project Screenshot</div>
              </div>
            </div>
            
            {/* Service Badge */}
            <div className="absolute top-4 left-4">
              <Badge className={`bg-gradient-to-r ${project.badge.color} text-white border-none font-medium`}>
                {project.badge.icon}
                <span className="ml-2">{project.badge.text}</span>
              </Badge>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button 
                size="sm" 
                className="bg-white text-[#0A0A0B] hover:bg-[#FFC300] hover:text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 min-h-[44px]"
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4 sm:p-6 space-y-4 flex-1 flex flex-col">
            {/* Header */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-[#0A0A0B] group-hover:text-[#1B365D] transition-colors duration-200 line-clamp-2 mb-2 leading-tight">
                {project.title}
              </h3>
              <div className="text-sm text-[#64748B] font-medium">
                {project.client}
              </div>
            </div>

            {/* Key Metric */}
            <div className="text-center py-3">
              <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${project.badge.color} bg-clip-text text-transparent`}>
                {project.keyMetric}
              </div>
            </div>

            {/* Secondary Metrics */}
            <div className="space-y-2">
              {project.secondaryMetrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#64748B]">
                  <div className="w-1.5 h-1.5 bg-[#FFC300] rounded-full" />
                  {metric}
                </div>
              ))}
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-[#E2E8F0]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-1">
                  <Building className="w-3 h-3" />
                  Industry
                </div>
                <div className="text-sm font-medium text-[#0A0A0B] line-clamp-1">
                  {project.industry}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs text-[#64748B] mb-1">
                  <Clock className="w-3 h-3" />
                  Timeline
                </div>
                <div className="text-sm font-medium text-[#0A0A0B]">
                  {project.timeline}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#64748B] line-clamp-2">
              {project.description}
            </p>

            {/* CTA */}
            <div className="pt-2 mt-auto">
              <Link href={project.link}>
                <Button 
                  variant="outline" 
                  className="w-full border-[#FFC300]/50 text-[#0A0A0B] hover:bg-[#FFC300] hover:border-[#FFC300] hover:text-white group/btn min-h-[44px] text-sm sm:text-base"
                >
                  View Project Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export const ProjectGrid = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-5%" })

  return (
    <SectionContainer padding="large" background="gray">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={fadeUpVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0B] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Real results from real clients. Each project showcases our commitment to 
            delivering measurable outcomes that drive business growth.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Load More CTA */}
        <motion.div 
          variants={fadeUpVariants}
          className="text-center mt-12"
        >
          <p className="text-[#64748B] mb-6">
            Showing 6 of 50+ successful projects
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white px-8"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}