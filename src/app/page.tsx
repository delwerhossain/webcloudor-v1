import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { 
  HeroSection,
  TrustBarSection,
  WhatWeDoSection,
  FeaturedCaseStudySection,
  WhyChooseSection,
  ClientTestimonialSection,
  StartProjectSection
} from "@/components/sections/home"

// Loading component for dynamic imports
const SectionSkeleton = () => (
  <div className="w-full min-h-[400px] animate-pulse bg-muted rounded-md" />
)

// Dynamic imports for performance-critical sections
const DynamicProcessOverview = dynamic(
  () => import("@/components/sections/home").then(mod => ({ default: mod.ProcessOverviewSection })),
  { 
    ssr: true,
    loading: () => <SectionSkeleton />
  }
)

const DynamicTechnologies = dynamic(
  () => import("@/components/sections/home").then(mod => ({ default: mod.TechnologiesSection })),
  { 
    ssr: true,
    loading: () => <SectionSkeleton />
  }
)

const DynamicClientTestimonial = dynamic(
  () => import("@/components/sections/home").then(mod => ({ default: mod.ClientTestimonialSection })),
  { 
    ssr: true,
    loading: () => <SectionSkeleton />
  }
)

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Above the fold, highest priority */}
      <HeroSection />
      
      {/* Trust Bar - Immediate credibility */}
      <TrustBarSection />
      
      {/* What We Do - Core services */}
      <WhatWeDoSection />
      
      {/* Process Overview - How we work */}
      <Suspense fallback={<SectionSkeleton />}>
        <DynamicProcessOverview />
      </Suspense>
      
      {/* Featured Case Study - Social proof with results */}
      <FeaturedCaseStudySection />
      
      {/* Why Choose WebCloudor - Differentiators */}
      <WhyChooseSection />
      
      {/* Client Testimonial - Additional social proof */}
      <Suspense fallback={<SectionSkeleton />}>
        <DynamicClientTestimonial />
      </Suspense>
      
      {/* Technologies & Approach - Technical credibility */}
      <Suspense fallback={<SectionSkeleton />}>
        <DynamicTechnologies />
      </Suspense>
      
      {/* Start Your Project - Final conversion CTA */}
      <StartProjectSection />
    </main>
  )
}
