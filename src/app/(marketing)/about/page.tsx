import { type Metadata } from "next"
import { AboutHero } from "@/components/sections/about/hero-section"
import { CompanyStory } from "@/components/sections/about/company-story-section"
import { TeamSection } from "@/components/sections/about/team-section"
import { ValuesSection } from "@/components/sections/about/values-section"
import { ClientPhilosophy } from "@/components/sections/about/client-philosophy-section"
import { Certifications } from "@/components/sections/about/certifications-section"
import { OfficeCulture } from "@/components/sections/about/office-culture-section"
import { CommunitySection } from "@/components/sections/about/community-section"
import { WhyChooseSection } from "@/components/sections/about/why-choose-section"
import { StartTogether } from "@/components/sections/about/start-together-section"

export const metadata: Metadata = {
  title: "About Us - WebCloudor | Built by Experts Who Understand Business",
  description: "Meet the WebCloudor team: Delwer Hossain and Ahsan Habib Akik. 50+ projects, 99% client retention, and $25M+ revenue generated. Learn how we help ambitious businesses ship faster and grow sustainably.",
  keywords: "WebCloudor team, web development experts, Delwer Hossain, Ahsan Habib Akik, professional web agency, client success, business growth",
  openGraph: {
    title: "About WebCloudor - Built by Experts Who Understand Business",
    description: "Meet the team behind WebCloudor. 50+ projects delivered, 99% client retention rate, and a proven track record of helping businesses achieve breakthrough results.",
    url: "https://webcloudor.com/about",
    siteName: "WebCloudor",
    images: [
      {
        url: "/images/about/team-og.jpg",
        width: 1200,
        height: 630,
        alt: "WebCloudor Team - Delwer Hossain and Ahsan Habib Akik",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WebCloudor - Built by Experts Who Understand Business",
    description: "Meet the team behind WebCloudor. 50+ projects delivered, 99% client retention rate, and proven expertise in modern web development.",
    images: ["/images/about/team-twitter.jpg"],
  },
  alternates: {
    canonical: "https://webcloudor.com/about",
  },
}

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <TeamSection />
      <ValuesSection />
      <ClientPhilosophy />
      <Certifications />
      <OfficeCulture />
      <CommunitySection />
      <WhyChooseSection />
      <StartTogether />
    </>
  )
}

export default AboutPage