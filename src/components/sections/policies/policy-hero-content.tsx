"use client"

import { motion } from "framer-motion"
import { fadeUpVariants, staggerContainer } from "@/lib/utils/animations"
import { Button } from "@/components/ui/button"

interface PolicyHeroContentProps {
  title: string
  subtitle: string
  lastUpdated: string
  keyPoints: string[]
  showControls?: boolean
}

export const PolicyHeroContent = ({
  title,
  subtitle,
  lastUpdated,
  keyPoints,
  showControls = false,
}: PolicyHeroContentProps) => {
  const handleManagePreferences = () => {
    // Implementation for cookie preference center
    console.log("Manage preferences clicked")
  }

  const handleAcceptAll = () => {
    // Implementation for accepting all cookies
    console.log("Accept all clicked")
  }

  const handleAcceptEssential = () => {
    // Implementation for accepting only essential cookies
    console.log("Accept essential clicked")
  }
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="w-full max-w-4xl mx-auto text-center"
    >
      {/* Title Section */}
      <motion.h1
        variants={fadeUpVariants}
        className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6"
      >
        {title}
      </motion.h1>

      <motion.p
        variants={fadeUpVariants}
        className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>

      {/* Cookie Controls */}
      {showControls && (
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button
            onClick={handleManagePreferences}
            variant="outline"
            className="text-sm"
          >
            🍪 Manage Cookie Preferences
          </Button>
          <Button onClick={handleAcceptAll} className="text-sm">
            ✅ Accept All Cookies
          </Button>
          <Button
            onClick={handleAcceptEssential}
            variant="outline"
            className="text-sm"
          >
            ❌ Accept Only Essential
          </Button>
        </motion.div>
      )}

      {/* Key Points */}
      <motion.div
        variants={fadeUpVariants}
        className="bg-slate-50 rounded-xl p-6 mb-8"
      >
        <ul className="space-y-3 text-left max-w-2xl mx-auto">
          {keyPoints.map((point, index) => (
            <motion.li
              key={index}
              variants={fadeUpVariants}
              className="flex items-start gap-3 text-slate-700"
            >
              <div className="w-2 h-2 rounded-full bg-[#1B365D] mt-2 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Last Updated */}
      <motion.p variants={fadeUpVariants} className="text-sm text-slate-500">
        {lastUpdated}
      </motion.p>
    </motion.div>
  )
}