import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | WebCloudor",
    default: "WebCloudor - Ship Faster, Scale Better",
  },
  description: "Modern web solutions for ambitious businesses. Ship faster with expert development, convert more with optimized experiences, scale with confidence.",
  keywords: ["web development", "Next.js", "React", "cloud architecture", "e-commerce"],
  authors: [
    {
      name: "WebCloudor Team",
      url: "https://webcloudor.com",
    },
  ],
  creator: "WebCloudor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webcloudor.com",
    siteName: "WebCloudor",
    title: "WebCloudor - Ship Faster, Scale Better",
    description: "Modern web solutions for ambitious businesses",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCloudor - Ship Faster, Scale Better",
    description: "Modern web solutions for ambitious businesses",
    creator: "@webcloudor",
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
