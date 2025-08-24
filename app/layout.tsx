import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'WebCloudor - Premium Web Development & Cloud Solutions',
    template: '%s | WebCloudor'
  },
  description: 'Transform your business with cutting-edge web development, cloud computing, and AI integration. Expert solutions for modern enterprises.',
  keywords: ['web development', 'cloud computing', 'AI integration', 'digital transformation', 'next.js', 'react'],
  authors: [{ name: 'WebCloudor Team' }],
  creator: 'WebCloudor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webcloudor.com',
    title: 'WebCloudor - Premium Web Development & Cloud Solutions',
    description: 'Transform your business with cutting-edge web development, cloud computing, and AI integration.',
    siteName: 'WebCloudor',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebCloudor - Premium Web Development & Cloud Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebCloudor - Premium Web Development & Cloud Solutions',
    description: 'Transform your business with cutting-edge web development, cloud computing, and AI integration.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <div className="flex-1">{children}</div>
          </div>
          <Toaster 
            position="bottom-right" 
            expand={false}
            richColors
            closeButton
            theme="system"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}