import { type Metadata } from "next"
import { ServicesHero } from "@/components/sections/services/services-hero"
import { ServiceOverviewGrid } from "@/components/sections/services/service-overview-grid"
import { WebDevelopmentDetail } from "@/components/sections/services/web-development-detail"
import { CloudArchitectureDetail } from "@/components/sections/services/cloud-architecture-detail"
import { EcommerceDetail } from "@/components/sections/services/ecommerce-detail"
import { AIAutomationDetail } from "@/components/sections/services/ai-automation-detail"
import { StartupConsultingDetail } from "@/components/sections/services/startup-consulting-detail"
import { FastMVPDetail } from "@/components/sections/services/fast-mvp-detail"
import { ProcessDeepDive } from "@/components/sections/services/process-deep-dive"
import { PricingPackages } from "@/components/sections/services/pricing-packages"
import { ClientSuccessStories } from "@/components/sections/services/client-success-stories"
import { TechnologyStack } from "@/components/sections/services/technology-stack"
import { ServicesFAQ } from "@/components/sections/services/services-faq"
import { GetStartedCTA } from "@/components/sections/services/get-started-cta"
import { ConsultationCTA } from "@/components/conversion/ConsultationCTA"

export const metadata: Metadata = {
  title: "Services - WebCloudor | Web Development, Cloud Architecture & AI Solutions",
  description: "Professional web development, cloud architecture, e-commerce, and AI automation services. From rapid MVP development to enterprise architecture. Starting at $1,500. 99% on-time delivery.",
  keywords: "web development services, cloud architecture, e-commerce development, AI automation, startup consulting, MVP development, Next.js development, React development",
  openGraph: {
    title: "WebCloudor Services - Professional Web & Cloud Solutions",
    description: "Comprehensive web development and cloud services for growing businesses. From rapid prototypes to enterprise architecture. Trusted by 50+ companies worldwide.",
    url: "https://webcloudor.com/services",
    siteName: "WebCloudor",
    images: [
      {
        url: "/images/services/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "WebCloudor Services - Web Development, Cloud Architecture, AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCloudor Services - Web Development & Cloud Solutions",
    description: "Professional web development, cloud architecture, and AI automation services. From rapid MVP to enterprise solutions.",
    images: ["/images/services/services-twitter.jpg"],
  },
  alternates: {
    canonical: "https://webcloudor.com/services",
  },
}

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <ServiceOverviewGrid />
      <WebDevelopmentDetail />
      <CloudArchitectureDetail />
      <EcommerceDetail />
      <AIAutomationDetail />
      <StartupConsultingDetail />
      <FastMVPDetail />
      <ProcessDeepDive />
      <PricingPackages />
      
      {/* Strategic consultation CTA after pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ConsultationCTA 
            variant="primary"
            context="services"
            showBenefits={true}
            showUrgency={true}
          />
        </div>
      </section>
      
      <ClientSuccessStories />
      <TechnologyStack />
      <ServicesFAQ />
      <GetStartedCTA />
    </>
  )
}

export default ServicesPage