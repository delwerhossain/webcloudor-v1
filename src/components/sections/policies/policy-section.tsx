import { type ReactNode } from "react"
import { SectionContainer } from "@/components/ui/section-container"
import { PolicyContent } from "./policy-content"
import { cn } from "@/lib/utils"

interface PolicySectionProps {
  id: string
  title: string
  children: ReactNode
  background?: "white" | "gray"
  className?: string
}

export const PolicySection = ({
  id,
  title,
  children,
  background = "white",
  className,
}: PolicySectionProps) => {
  return (
    <SectionContainer
      background={background}
      padding="large"
      className={cn("scroll-mt-24", className)}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id={id}
          className="text-3xl font-bold text-[#1B365D] mb-8 scroll-mt-24"
        >
          {title}
        </h2>
        
        <PolicyContent>
          {children}
        </PolicyContent>
      </div>
    </SectionContainer>
  )
}