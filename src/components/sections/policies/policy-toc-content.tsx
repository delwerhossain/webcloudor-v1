"use client"

import { motion } from "framer-motion"
import { fadeUpVariants } from "@/lib/utils/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "lucide-react"
import { cn } from "@/lib/utils"

interface TOCItem {
  id: string
  title: string
  level: number
}

interface PolicyTOCContentProps {
  tocItems: TOCItem[]
  activeId: string
  onItemClick: (id: string) => void
}

export const PolicyTOCContent = ({
  tocItems,
  activeId,
  onItemClick,
}: PolicyTOCContentProps) => {
  if (tocItems.length === 0) {
    return null
  }

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <Card className="sticky top-20 sm:top-24">
        <CardHeader className="pb-3 sm:pb-4">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <List className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B365D]" />
            <span className="text-sm sm:text-base">Table of Contents</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tocItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={cn(
                  "block w-full text-left text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-200 min-h-[44px] touch-manipulation",
                  "border border-transparent hover:border-[#1B365D]/20 hover:bg-[#1B365D]/5",
                  activeId === item.id
                    ? "bg-[#1B365D]/10 text-[#1B365D] border-[#1B365D]/20 font-medium"
                    : "text-slate-600 hover:text-[#1B365D]"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-[#1B365D]/60 font-medium mr-1 sm:mr-2 text-xs sm:text-sm">
                  {index + 1}.
                </span>
                <span className="leading-tight">{item.title}</span>
              </motion.button>
            ))}
          </nav>
        </CardContent>
      </Card>
    </motion.div>
  )
}