"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Palette, 
  Code, 
  Send, 
  FileText, 
  BarChart3, 
  Users, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Clock,
  Target
} from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { Card } from "@/components/ui"
import { Button } from "@/components/ui"
import { Badge } from "@/components/ui"
import { cn } from "@/lib/utils"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

interface TimelinePhase {
  id: string
  week: string
  title: string
  icon: React.ReactNode
  color: string
  deliverables: string[]
  keyFinding: string
  visual: string
  completed: boolean
}

const timelinePhases: TimelinePhase[] = [
  {
    id: "1",
    week: "Week 1",
    title: "Discovery", 
    icon: <Search className="w-6 h-6" />,
    color: "from-blue-400 to-blue-600",
    deliverables: [
      "Stakeholder interviews",
      "Analytics audit", 
      "Competitive analysis"
    ],
    keyFinding: "Mobile checkout had 7 unnecessary steps",
    visual: "Research documentation screenshots",
    completed: true
  },
  {
    id: "2",
    week: "Weeks 2-3",
    title: "Design",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-400 to-purple-600", 
    deliverables: [
      "User flow optimization",
      "Wireframes",
      "Visual designs"
    ],
    keyFinding: "Reduced checkout to 3 essential steps",
    visual: "Before/after flow diagrams",
    completed: true
  },
  {
    id: "3",
    week: "Weeks 4-7", 
    title: "Development",
    icon: <Code className="w-6 h-6" />,
    color: "from-green-400 to-green-600",
    deliverables: [
      "Frontend build",
      "Payment integration",
      "Testing"
    ],
    keyFinding: "75% load time improvement",
    visual: "Performance testing results",
    completed: true
  },
  {
    id: "4",
    week: "Week 8",
    title: "Launch & Optimization",
    icon: <Send className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500",
    deliverables: [
      "Production deployment", 
      "Analytics setup",
      "Team training"
    ],
    keyFinding: "45% conversion rate increase within 30 days",
    visual: "Analytics dashboard showing results",
    completed: true
  }
]

const PhaseCard = ({ 
  phase, 
  isActive, 
  isCompleted,
  onClick 
}: { 
  phase: TimelinePhase
  isActive: boolean
  isCompleted: boolean
  onClick: () => void 
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "cursor-pointer transition-all duration-300 relative",
        isActive && "z-10"
      )}
    >
      <Card className={cn(
        "p-6 border-2 transition-all duration-300 relative overflow-hidden",
        isActive 
          ? "border-[#FFC300] bg-gradient-to-br from-[#FFC300]/10 to-[#FF8C00]/5 shadow-xl shadow-[#FFC300]/20" 
          : "border-[#E2E8F0] bg-white hover:border-[#FFC300]/50 hover:shadow-lg",
        isCompleted && "border-green-200 bg-green-50/50"
      )}>
        {/* Completion Badge */}
        {isCompleted && (
          <div className="absolute top-4 right-4">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          </div>
        )}

        {/* Phase Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
            `bg-gradient-to-br ${phase.color}`
          )}>
            {phase.icon}
          </div>
          <div>
            <div className="text-sm font-medium text-[#64748B]">{phase.week}</div>
            <div className="text-lg font-semibold text-[#0A0A0B]">{phase.title}</div>
          </div>
        </div>

        {/* Key Finding */}
        <div className={cn(
          "p-3 rounded-lg mb-4 border-l-4",
          isActive 
            ? "bg-[#FFC300]/10 border-[#FFC300] text-[#0A0A0B]"
            : "bg-[#F8FAFC] border-[#E2E8F0] text-[#64748B]"
        )}>
          <div className="text-sm font-medium">Key Finding:</div>
          <div className="text-sm">&ldquo;{phase.keyFinding}&rdquo;</div>
        </div>

        {/* Deliverables */}
        <div className="space-y-2">
          <div className="text-sm font-medium text-[#0A0A0B]">Deliverables:</div>
          {phase.deliverables.map((deliverable, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-[#64748B]">
              <div className="w-1.5 h-1.5 bg-[#FFC300] rounded-full" />
              {deliverable}
            </div>
          ))}
        </div>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute inset-0 border-2 border-[#FFC300] rounded-lg pointer-events-none"
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          />
        )}
      </Card>
    </motion.div>
  )
}

const ProcessTimeline = ({ activePhase }: { activePhase: number }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />
      
      {/* Progress Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ 
          height: `${(activePhase / (timelinePhases.length - 1)) * 100}%` 
        }}
        transition={{ duration: 0.8, ease: EASE_CURVE }}
        className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-[#FFC300] to-[#FF8C00]"
      />

      {/* Timeline Items */}
      <div className="space-y-8">
        {timelinePhases.map((phase, index) => (
          <div key={phase.id} className="relative flex items-center gap-6">
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
              className={cn(
                "relative z-10 w-3 h-3 rounded-full border-4 border-white shadow-lg",
                index <= activePhase
                  ? "bg-[#FFC300]"
                  : "bg-[#E2E8F0]"
              )}
            />

            {/* Timeline Content */}
            <div className="flex-1 pb-8">
              <div className="text-sm font-medium text-[#64748B] mb-1">
                {phase.week}
              </div>
              <div className="text-lg font-semibold text-[#0A0A0B] mb-2">
                {phase.title}
              </div>
              <div className="text-sm text-[#64748B]">
                {phase.keyFinding}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const ProcessShowcase = () => {
  const [activePhase, setActivePhase] = useState(0)
  const [isTimelineView, setIsTimelineView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  const currentPhase = timelinePhases[activePhase]

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
            Our Process in Action
          </h2>
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto mb-8">
            See exactly how we delivered a 45% conversion increase for GlobalRetail. 
            Every phase, every deliverable, every breakthrough moment.
          </p>

          {/* View Toggle */}
          <div className="flex items-center justify-center gap-2 bg-white rounded-full p-1 w-fit mx-auto border border-[#E2E8F0]">
            <button
              onClick={() => setIsTimelineView(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                !isTimelineView 
                  ? "bg-[#FFC300] text-[#0A0A0B] shadow-sm" 
                  : "text-[#64748B] hover:text-[#0A0A0B]"
              )}
            >
              Interactive Cards
            </button>
            <button
              onClick={() => setIsTimelineView(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                isTimelineView 
                  ? "bg-[#FFC300] text-[#0A0A0B] shadow-sm" 
                  : "text-[#64748B] hover:text-[#0A0A0B]"
              )}
            >
              Timeline View
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isTimelineView ? (
            // Interactive Cards View
            <motion.div
              key="cards"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Phase Selection Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {timelinePhases.map((phase, index) => (
                  <PhaseCard
                    key={phase.id}
                    phase={phase}
                    isActive={activePhase === index}
                    isCompleted={index <= activePhase}
                    onClick={() => setActivePhase(index)}
                  />
                ))}
              </div>

              {/* Active Phase Details */}
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_CURVE }}
              >
                <Card className="p-8 bg-gradient-to-br from-white to-[#F8FAFC] border border-[#E2E8F0] shadow-xl">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Phase Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg",
                          `bg-gradient-to-br ${currentPhase.color}`
                        )}>
                          {currentPhase.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {currentPhase.week}
                          </Badge>
                          <h3 className="text-2xl font-bold text-[#0A0A0B]">
                            {currentPhase.title}
                          </h3>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-[#FFC300]/10 to-[#FF8C00]/5 p-6 rounded-xl border border-[#FFC300]/20">
                        <h4 className="font-semibold text-[#0A0A0B] mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-[#FFC300]" />
                          Key Achievement
                        </h4>
                        <p className="text-[#0A0A0B] text-lg font-medium">
                          &ldquo;{currentPhase.keyFinding}&rdquo;
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#0A0A0B] mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-[#64748B]" />
                          Deliverables
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {currentPhase.deliverables.map((deliverable, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#E2E8F0] hover:border-[#FFC300]/30 transition-colors duration-200"
                            >
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-[#0A0A0B] font-medium">{deliverable}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual Placeholder */}
                    <div className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-xl p-8 border border-[#E2E8F0] text-center">
                      <div className={cn(
                        "w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white shadow-lg",
                        `bg-gradient-to-br ${currentPhase.color}`
                      )}>
                        <BarChart3 className="w-8 h-8" />
                      </div>
                      <div className="text-sm font-medium text-[#0A0A0B] mb-2">
                        Visual Documentation
                      </div>
                      <div className="text-xs text-[#64748B]">
                        {currentPhase.visual}
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#E2E8F0]">
                    <Button
                      variant="outline"
                      onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                      disabled={activePhase === 0}
                      className="flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                      Previous Phase
                    </Button>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#64748B]" />
                      <span className="text-sm text-[#64748B]">
                        Phase {activePhase + 1} of {timelinePhases.length}
                      </span>
                    </div>

                    <Button
                      onClick={() => setActivePhase(Math.min(timelinePhases.length - 1, activePhase + 1))}
                      disabled={activePhase === timelinePhases.length - 1}
                      className="flex items-center gap-2 bg-[#FFC300] text-[#0A0A0B] hover:bg-[#FF8C00]"
                    >
                      Next Phase
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ) : (
            // Timeline View
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="p-8 bg-white shadow-xl">
                <ProcessTimeline activePhase={3} />
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Summary */}
        <motion.div 
          variants={fadeUpVariants}
          className="text-center mt-16 pt-12 border-t border-[#E2E8F0]"
        >
          <div className="bg-gradient-to-r from-[#1B365D] to-[#2D4B73] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Final Results</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#FFC300] mb-2">8 weeks</div>
                <div className="text-sm opacity-90">Project timeline</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FFC300] mb-2">+45%</div>
                <div className="text-sm opacity-90">Conversion increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FFC300] mb-2">$2.8M</div>
                <div className="text-sm opacity-90">Additional revenue</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}