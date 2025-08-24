import { type Metadata } from "next"
import { TeamHero } from "@/components/sections/team/team-hero"
import { FounderProfiles } from "@/components/sections/team/founder-profiles"
import { TeamWorkingStyle } from "@/components/sections/team/team-working-style"
import { TeamValues } from "@/components/sections/team/team-values"
import { ProfessionalBackground } from "@/components/sections/team/professional-background"
import { IndustryRecognition } from "@/components/sections/team/industry-recognition"
import { TeamOutsideWork } from "@/components/sections/team/team-outside-work"
import { WorkWithTeam } from "@/components/sections/team/work-with-team"
import { TeamFAQ } from "@/components/sections/team/team-faq"

export const metadata: Metadata = {
  title: "Meet Our Team - WebCloudor | Expert Founders Delwer & Habib",
  description: "Meet WebCloudor's founding team: Delwer Hossain (Technical Lead) and Syed Mir Habib (Strategy Lead). 15+ years combined experience, 50+ projects delivered, and direct founder involvement in every project.",
  keywords: "WebCloudor team, Delwer Hossain, Syed Mir Habib, founders, technical lead, strategy lead, web development experts, business strategy, startup founders",
  openGraph: {
    title: "Meet Our Team - WebCloudor Founders",
    description: "Personal involvement from day one. Meet Delwer Hossain and Syed Mir Habib, the founders behind WebCloudor's success with 50+ projects and 99% client retention.",
    url: "https://webcloudor.com/team",
    siteName: "WebCloudor",
    images: [
      {
        url: "/images/team/team-og.jpg",
        width: 1200,
        height: 630,
        alt: "WebCloudor Team - Founders Delwer Hossain and Syed Mir Habib",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Team - WebCloudor Founders",
    description: "Personal involvement from day one. Meet the founders behind WebCloudor's 50+ successful projects.",
    images: ["/images/team/team-twitter.jpg"],
  },
  alternates: {
    canonical: "https://webcloudor.com/team",
  },
}

const TeamPage = () => {
  return (
    <>
      <TeamHero />
      <FounderProfiles />
      <TeamWorkingStyle />
      <TeamValues />
      <ProfessionalBackground />
      <IndustryRecognition />
      <TeamOutsideWork />
      <WorkWithTeam />
      <TeamFAQ />
    </>
  )
}

export default TeamPage