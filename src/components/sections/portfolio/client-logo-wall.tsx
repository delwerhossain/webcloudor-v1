"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building, Laptop, ShoppingCart, GraduationCap, DollarSign, Heart } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { Card } from "@/components/ui"
import { cn } from "@/lib/utils"
import { fadeUpVariants, staggerContainer, EASE_CURVE } from "@/lib/utils/animations"

interface LogoGroup {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  companies: string[]
}

const logoGroups: LogoGroup[] = [
  {
    id: "technology",
    title: "Technology & SaaS",
    icon: <Laptop className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600",
    companies: [
      "TechStartup Inc",
      "ScaleUp Corp", 
      "DataAnalytics Pro",
      "CloudSoft Solutions",
      "DevTools Co",
      "SaaS Analytics",
      "TechPlatform Inc",
      "InnovateLab"
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    icon: <ShoppingCart className="w-5 h-5" />,
    color: "from-green-400 to-green-600",
    companies: [
      "GlobalRetail Corp",
      "MedSupply Co",
      "FashionForward",
      "SportGear Pro",
      "HomeGoods Inc", 
      "LuxuryBrands Co",
      "QuickCommerce",
      "RetailTech Solutions"
    ]
  },
  {
    id: "education",
    title: "Education & Healthcare",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "from-purple-400 to-purple-600", 
    companies: [
      "EduTech Solutions",
      "University Partners",
      "HealthSystems Corp",
      "MedDevice Co",
      "Learning Platform",
      "Research Institute",
      "WellnessTech",
      "TherapyConnect"
    ]
  },
  {
    id: "finance",
    title: "Financial & Professional Services",
    icon: <DollarSign className="w-5 h-5" />,
    color: "from-amber-400 to-orange-500",
    companies: [
      "FinTech Innovations", 
      "Investment Partners",
      "Legal Solutions",
      "Consulting Group",
      "Accounting Pro",
      "Business Services",
      "Professional Network",
      "Advisory Group"
    ]
  },
  {
    id: "startups",
    title: "Startups & Growth Companies",
    icon: <Building className="w-5 h-5" />,
    color: "from-pink-400 to-rose-600",
    companies: [
      "Funded Startup A",
      "Growth Co B",
      "Emerging Tech C", 
      "Innovation Lab D",
      "Startup Success E",
      "Venture Partners F",
      "Scale Company G",
      "Breakthrough Inc"
    ]
  }
]

const LogoCard = ({ company, delay }: { company: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        ease: EASE_CURVE,
        delay 
      }}
      className="group cursor-pointer"
    >
      <Card className="p-6 h-24 flex items-center justify-center bg-white border border-[#E2E8F0] hover:border-[#FFC300] hover:shadow-lg transition-all duration-300 group-hover:scale-105">
        <div className="text-center">
          {/* Placeholder logo design */}
          <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-lg flex items-center justify-center group-hover:from-[#FFC300]/20 group-hover:to-[#FF8C00]/10 transition-all duration-300">
            <div className="text-[#64748B] group-hover:text-[#0A0A0B] font-bold text-sm transition-colors duration-300">
              {company.split(" ").map(word => word[0]).join("").slice(0, 2)}
            </div>
          </div>
          <div className="text-xs font-medium text-[#64748B] group-hover:text-[#0A0A0B] transition-colors duration-300 leading-tight">
            {company}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

const LogoSection = ({ group, groupIndex }: { group: LogoGroup; groupIndex: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        ease: EASE_CURVE,
        delay: groupIndex * 0.2 
      }}
      className="space-y-6"
    >
      {/* Section Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm",
            `bg-gradient-to-br ${group.color}`
          )}>
            {group.icon}
          </div>
          <h3 className="text-lg font-semibold text-[#0A0A0B]">
            {group.title}
          </h3>
        </div>
        <div className="text-sm text-[#64748B]">
          {group.companies.length} trusted partners
        </div>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {group.companies.map((company, index) => (
          <LogoCard
            key={company}
            company={company}
            delay={groupIndex * 0.2 + index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  )
}

export const ClientLogoWall = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-5%" })

  const totalCompanies = logoGroups.reduce((sum, group) => sum + group.companies.length, 0)

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
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto mb-8">
            {totalCompanies}+ companies across multiple sectors trust WebCloudor to deliver 
            exceptional results that drive their business forward.
          </p>
          
          {/* Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#FFC300] mb-1">{totalCompanies}+</div>
              <div className="text-sm text-[#64748B]">Clients Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#FFC300] mb-1">99%</div>
              <div className="text-sm text-[#64748B]">Client Retention</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#FFC300] mb-1">87%</div>
              <div className="text-sm text-[#64748B]">Refer New Clients</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Logo Sections */}
        <div className="space-y-16">
          {logoGroups.map((group, groupIndex) => (
            <LogoSection
              key={group.id}
              group={group}
              groupIndex={groupIndex}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          variants={fadeUpVariants}
          className="text-center mt-16 pt-12 border-t border-[#E2E8F0]"
        >
          <div className="bg-gradient-to-r from-[#1B365D] to-[#2D4B73] rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-[#FFC300]" />
                <span className="text-lg font-semibold">
                  Join Our Growing Family
                </span>
              </div>
              
              <h3 className="text-2xl font-bold">
                Ready to become our next success story?
              </h3>
              
              <p className="text-white/90 leading-relaxed">
                Whether you&apos;re a startup looking to make your mark or an established 
                company ready to scale, we&apos;d love to add your logo to this wall of success.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/consultation"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC300] to-[#FF8C00] text-[#0A0A0B] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#FFC300]/25 transition-all duration-300"
                  >
                    Start Your Project
                    <Building className="w-5 h-5" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#1B365D] transition-all duration-300"
                  >
                    Get in Touch
                    <Heart className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Permission Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#64748B]">
              All company names and logos are used with permission. Client relationships 
              span 3+ years with ongoing partnerships and referrals.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  )
}