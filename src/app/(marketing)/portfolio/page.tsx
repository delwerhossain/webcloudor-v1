import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { PortfolioHero } from "@/components/sections/portfolio/hero-section"
import { FilterSearchInterface } from "@/components/sections/portfolio/filter-search-interface"
import { FeaturedCaseStudy } from "@/components/sections/portfolio/featured-case-study"
import { ProjectGrid } from "@/components/sections/portfolio/project-grid"
import { ClientTestimonialCarousel } from "@/components/sections/portfolio/client-testimonial-carousel"
import { ResultsMetricsDashboard } from "@/components/sections/portfolio/results-metrics-dashboard"
import { ProcessShowcase } from "@/components/sections/portfolio/process-showcase"
import { TechnologyApproach } from "@/components/sections/portfolio/technology-approach"
import { ClientLogoWall } from "@/components/sections/portfolio/client-logo-wall"
import { StartProjectCTA } from "@/components/sections/portfolio/start-project-cta"

export const metadata: Metadata = {
  title: "Portfolio | WebCloudor",
  description: "Real projects, real outcomes, real growth. See how we have helped 50+ clients achieve breakthrough results with web development, e-commerce, cloud architecture, and AI automation solutions.",
  keywords: [
    "portfolio",
    "case studies", 
    "web development portfolio",
    "e-commerce projects",
    "cloud architecture",
    "AI automation",
    "client results",
    "project showcase",
    "conversion optimization",
    "performance improvement"
  ],
  openGraph: {
    title: "Portfolio - Results that speak louder than words | WebCloudor",
    description: "See how we have helped 50+ clients achieve breakthrough results. Real projects, real outcomes, real growth.",
    type: "website",
    images: [
      {
        url: "/portfolio-og.jpg",
        width: 1200,
        height: 630,
        alt: "WebCloudor Portfolio - Real Results from Real Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Results that speak louder than words | WebCloudor",
    description: "See how we have helped 50+ clients achieve breakthrough results. Real projects, real outcomes, real growth.",
    images: ["/portfolio-og.jpg"],
  },
  alternates: {
    canonical: "/portfolio",
  },
}

const PortfolioPage = async () => {
  return (
    <>
      <PortfolioHero />
      <FilterSearchInterface />
      <FeaturedCaseStudy />
      <ProjectGrid />
      <ClientTestimonialCarousel />
      <ResultsMetricsDashboard />
      <ProcessShowcase />
      <TechnologyApproach />
      <ClientLogoWall />
      <StartProjectCTA />
    </>
  )
}

export default PortfolioPage