import { SectionContainer } from "@/components/ui/section-container"
import { PolicyHeroContent } from "./policy-hero-content"

interface PolicyHeroProps {
  title: string
  subtitle: string
  lastUpdated: string
  keyPoints: string[]
  showControls?: boolean
}

export const PolicyHero = ({
  title,
  subtitle,
  lastUpdated,
  keyPoints,
  showControls = false,
}: PolicyHeroProps) => {
  return (
    <SectionContainer
      background="white"
      padding="large"
      className="min-h-[40vh] flex items-center"
    >
      <PolicyHeroContent
        title={title}
        subtitle={subtitle}
        lastUpdated={lastUpdated}
        keyPoints={keyPoints}
        showControls={showControls}
      />
    </SectionContainer>
  )
}