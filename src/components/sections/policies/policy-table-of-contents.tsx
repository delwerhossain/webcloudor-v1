"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { fadeUpVariants } from "@/lib/utils/animations"
import { SectionContainer } from "@/components/ui/section-container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "lucide-react"
import { cn } from "@/lib/utils"

interface TOCItem {
  id: string
  title: string
  level: number
}

interface PolicyTableOfContentsProps {
  sections: Array<{
    id: string
    title: string
    level?: number
  }>
  className?: string
}

export const PolicyTableOfContents = ({
  sections,
  className,
}: PolicyTableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("")

  const tocItems: TOCItem[] = sections.map((section) => ({
    id: section.id,
    title: section.title,
    level: section.level || 1,
  }))

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = tocItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean)

      let activeElement = headingElements[0]

      for (const element of headingElements) {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120) {
            activeElement = element
          } else {
            break
          }
        }
      }

      if (activeElement) {
        setActiveId(activeElement.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Set initial active item

    return () => window.removeEventListener("scroll", handleScroll)
  }, [tocItems])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 80 // Account for fixed navigation
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <SectionContainer background="gray" padding="default" className={className}>
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
                  onClick={() => handleClick(item.id)}
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
    </SectionContainer>
  )
}