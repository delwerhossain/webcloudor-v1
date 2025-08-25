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
      className="max-w-4xl mx-auto"
    >
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <List className="w-5 h-5 text-[#1B365D]" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tocItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={cn(
                  "block w-full text-left text-sm py-3 px-4 rounded-lg transition-all duration-200",
                  "border border-transparent hover:border-[#1B365D]/20 hover:bg-[#1B365D]/5",
                  activeId === item.id
                    ? "bg-[#1B365D]/10 text-[#1B365D] border-[#1B365D]/20 font-medium"
                    : "text-slate-600 hover:text-[#1B365D]"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-[#1B365D]/60 font-medium mr-2">
                  {index + 1}.
                </span>
                {item.title}
              </motion.button>
            ))}
          </nav>
        </CardContent>
      </Card>
    </motion.div>
  )
}