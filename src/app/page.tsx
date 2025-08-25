import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { 
  HeroSection,
  TrustBarSection,
  WhatWeDoSection,
  FeaturedCaseStudySection,
  WhyChooseSection,
  ClientTestimonialSection,
  StartProjectSection
} from "@/components/sections/home"
import StructuredData from '@/components/seo/StructuredData'
import { schemas } from '@/lib/seo/schema'

export const metadata: Metadata = {
  title: "WebCloudor | AI-First Web Development Agency",
  description: "Ship faster. Convert more. Scale with confidence. Modern web solutions that move your business forward. 50+ projects delivered, 99% on-time, tier-1/2 clients served.",
  keywords: ["web development", "AI-first", "Next.js", "React", "conversion optimization", "web agency", "startup", "enterprise", "MVP development"],
  openGraph: {
    title: "WebCloudor | AI-First Web Development Agency",
    description: "Ship faster. Convert more. Scale with confidence. Modern web solutions that move your business forward.",
    url: "https://webcloudor.com",
    siteName: "WebCloudor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebCloudor - AI-First Web Development Agency',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCloudor | AI-First Web Development Agency",
    description: "Ship faster. Convert more. Scale with confidence. Modern web solutions that move your business forward.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: "/",
  },
}

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
    <>
      <StructuredData data={[
        schemas.organization,
        schemas.website,
        schemas.webDevelopment,
        schemas.cloudServices,
        schemas.mobileDev
      ]} />
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
    </>
  )
}
