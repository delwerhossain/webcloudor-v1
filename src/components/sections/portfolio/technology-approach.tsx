"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Code2, 
  Server, 
  Cloud, 
  Brain, 
  Smartphone, 
  Database, 
  Shield, 
  Zap,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  Target
} from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { Card } from "@/components/ui"
import { Button } from "@/components/ui"
import { Badge } from "@/components/ui"
import { cn } from "@/lib/utils"
import { fadeUpVariants, staggerContainer, cardHoverVariants, EASE_CURVE } from "@/lib/utils/animations"

interface TechnologyStack {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  technologies: string[]
  exampleProject: {
    name: string
    result: string
    metrics: string[]
  }
  description: string
  advantages: string[]
}

const technologyStacks: TechnologyStack[] = [
  {
    id: "frontend",
    title: "Frontend Excellence",
    icon: <Code2 className="w-8 h-8" />,
    color: "from-blue-400 to-blue-600",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    exampleProject: {
      name: "EduTech LMS Platform",
      result: "+156% Student Engagement",
      metrics: ["156% engagement", "50% faster grading", "99.9% uptime"]
    },
    description: "Modern, performant user interfaces built with cutting-edge frameworks",
    advantages: [
      "Server-side rendering for optimal SEO",
      "Component-based architecture",
      "Type-safe development",
      "Responsive design systems"
    ]
  },
  {
    id: "backend",
    title: "Backend Architecture", 
    icon: <Server className="w-8 h-8" />,
    color: "from-green-400 to-green-600",
    technologies: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Prisma"],
    exampleProject: {
      name: "FinTech API Platform",
      result: "10x Scaling Success",
      metrics: ["10x traffic", "99.9% uptime", "SOC 2 compliant"]
    },
    description: "Robust, scalable server architectures that handle enterprise-level traffic",
    advantages: [
      "Microservices architecture",
      "High-performance APIs",
      "Database optimization",
      "Real-time capabilities"
    ]
  },
  {
    id: "cloud", 
    title: "Cloud Infrastructure",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-purple-400 to-purple-600",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    exampleProject: {
      name: "E-commerce Platform",
      result: "99.9% Uptime Achieved",
      metrics: ["99.9% uptime", "Auto-scaling", "Global CDN"]
    },
    description: "Enterprise-grade cloud solutions that scale with your business growth",
    advantages: [
      "Auto-scaling infrastructure",
      "Global content delivery",
      "Disaster recovery",
      "Cost optimization"
    ]
  },
  {
    id: "ai",
    title: "AI & Automation",
    icon: <Brain className="w-8 h-8" />,
    color: "from-amber-400 to-orange-500",
    technologies: ["OpenAI GPT", "Machine Learning", "Python", "TensorFlow", "LangChain"],
    exampleProject: {
      name: "Restaurant Automation",
      result: "-60% Support Tickets",
      metrics: ["60% fewer tickets", "34% order accuracy", "24/7 availability"]
    },
    description: "Intelligent automation that transforms business operations and user experiences",
    advantages: [
      "Natural language processing",
      "Predictive analytics", 
      "Workflow automation",
      "Customer service bots"
    ]
  }
]

const TechnologyCard = ({ 
  stack, 
  isActive, 
  onClick 
}: { 
  stack: TechnologyStack
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover" 
      onClick={onClick}
      className="cursor-pointer group"
    >
      <Card className={cn(
        "p-6 h-full border-2 transition-all duration-300 relative overflow-hidden",
        isActive
          ? "border-[#FFC300] bg-gradient-to-br from-[#FFC300]/10 to-[#FF8C00]/5 shadow-xl shadow-[#FFC300]/20"
          : "border-[#E2E8F0] bg-white hover:border-[#FFC300]/50 hover:shadow-lg"
      )}>
        {/* Background Gradient */}
        <div className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300",
          `bg-gradient-to-br ${stack.color}`
        )} />

        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg",
              `bg-gradient-to-br ${stack.color}`
            )}>
              {stack.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A0A0B] group-hover:text-[#1B365D] transition-colors">
                {stack.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#64748B] text-sm leading-relaxed mb-4 flex-grow">
            {stack.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="text-sm font-semibold text-[#0A0A0B] mb-3">Technologies:</div>
            <div className="flex flex-wrap gap-2">
              {stack.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs bg-[#F8FAFC] hover:bg-[#FFC300]/10 hover:border-[#FFC300] transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <Button 
              variant="outline"
              size="sm"
              className={cn(
                "w-full border-[#E2E8F0] text-[#64748B] hover:border-[#FFC300] hover:bg-[#FFC300] hover:text-white transition-all duration-200 group/btn",
                isActive && "border-[#FFC300] bg-[#FFC300] text-white"
              )}
            >
              View Example Project
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

const ProjectExample = ({ stack }: { stack: TechnologyStack }) => {
  return (
    <motion.div
      key={stack.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: EASE_CURVE }}
    >
      <Card className="p-8 bg-gradient-to-br from-white to-[#F8FAFC] border border-[#E2E8F0] shadow-xl">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Project Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
                `bg-gradient-to-br ${stack.color}`
              )}>
                {stack.icon}
              </div>
              <div>
                <div className="text-sm text-[#64748B] font-medium">{stack.title} Example</div>
                <h3 className="text-xl font-bold text-[#0A0A0B]">
                  {stack.exampleProject.name}
                </h3>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFC300]/10 to-[#FF8C00]/5 p-6 rounded-xl border border-[#FFC300]/20">
              <div className={cn(
                "text-2xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent",
                `${stack.color}`
              )}>
                {stack.exampleProject.result}
              </div>
              <div className="text-[#0A0A0B] font-medium">Key Achievement</div>
            </div>

            <div>
              <h4 className="font-semibold text-[#0A0A0B] mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#FFC300]" />
                Project Metrics
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {stack.exampleProject.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#E2E8F0]">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-[#0A0A0B] font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[#0A0A0B] mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#FFC300]" />
                Technology Advantages
              </h4>
              <div className="space-y-2">
                {stack.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-[#64748B]">
                    <div className="w-1.5 h-1.5 bg-[#FFC300] rounded-full flex-shrink-0" />
                    {advantage}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-xl p-8 border border-[#E2E8F0] text-center">
            <div className={cn(
              "w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white shadow-lg",
              `bg-gradient-to-br ${stack.color}`
            )}>
              {stack.icon}
            </div>
            <div className="text-sm font-medium text-[#0A0A0B] mb-2">
              {stack.exampleProject.name}
            </div>
            <div className="text-xs text-[#64748B] mb-4">
              Project interface screenshot
            </div>
            <div className="flex flex-wrap gap-1 justify-center">
              {stack.technologies.slice(0, 3).map((tech, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export const TechnologyApproach = () => {
  const [activeStack, setActiveStack] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <SectionContainer padding="large" className="bg-white">
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
            Technology Meets Strategy
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just use the latest technologies—we strategically select the right tools 
            for each project to deliver measurable results and long-term success.
          </p>
        </motion.div>

        {/* Technology Stack Grid */}
        <motion.div variants={fadeUpVariants} className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyStacks.map((stack, index) => (
              <TechnologyCard
                key={stack.id}
                stack={stack}
                isActive={activeStack === index}
                onClick={() => setActiveStack(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Active Stack Details */}
        <motion.div variants={fadeUpVariants}>
          <ProjectExample stack={technologyStacks[activeStack]} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          variants={fadeUpVariants}
          className="text-center mt-16 pt-12 border-t border-[#E2E8F0]"
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-[#0A0A0B]">
              Ready to leverage cutting-edge technology?
            </h3>
            <p className="text-[#64748B]">
              Let&apos;s discuss which technology stack would be perfect for your project. 
              Get expert recommendations and a custom architecture plan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#FFC300] to-[#FF8C00] text-[#0A0A0B] hover:shadow-xl hover:shadow-[#FFC300]/25 hover:scale-105 transition-all duration-300"
              >
                Get Technology Consultation
                <Brain className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white"
              >
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Technology Icons */}
          <div className="mt-12 flex justify-center items-center gap-8 opacity-40">
            <div className="text-[#64748B]">
              <Database className="w-6 h-6" />
            </div>
            <div className="text-[#64748B]">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-[#64748B]">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="text-[#64748B]">
              <Cloud className="w-6 h-6" />
            </div>
            <div className="text-[#64748B]">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}