import type { Metadata } from "next"
import { Inter } from "next/font/google"
// Enhanced layout with improved performance
import { Navigation, Footer } from "@/components/layout"
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import { Hotjar } from "@/components/analytics/Hotjar"
import { WebVitals } from "@/components/analytics/WebVitals"
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity"
import { Toaster } from 'sonner'
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "WebCloudor | AI-First Web Development Agency",
    template: '%s | WebCloudor'
  },
  description: "Ship faster. Convert more. Scale with confidence. Modern web solutions that move your business forward. 50+ projects delivered, 99% on-time, tier-1/2 clients served.",
  keywords: ["web development", "AI-first", "Next.js", "React", "conversion optimization", "web agency"],
  authors: [{ name: "WebCloudor" }],
  creator: "WebCloudor",
  publisher: "WebCloudor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://webcloudor.com"),
  alternates: {
    canonical: "/",
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <Hotjar />
        <MicrosoftClarity />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#1B365D" />
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
        style={{ fontFeatureSettings: '"rlig" 1, "calt" 1' }}
      >
        <GoogleTagManager />
        <WebVitals />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="bottom-right" 
          expand={false}
          richColors
          closeButton
          theme="system"
        />
      </body>
    </html>
  )
}
