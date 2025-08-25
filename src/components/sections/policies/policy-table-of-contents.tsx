"use client"

import { useEffect, useState } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { PolicyTOCContent } from "./policy-toc-content"

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

  return (
    <SectionContainer background="gray" padding="default" className={className}>
      <PolicyTOCContent
        tocItems={tocItems}
        activeId={activeId}
        onItemClick={handleClick}
      />
    </SectionContainer>
  )
}