import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Book, Code, Search, FileText, Zap, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Documentation | WebCloudor',
  description: 'Complete documentation for WebCloudor APIs, SDKs, and integration guides. Get started with our comprehensive developer resources.',
  keywords: ['documentation', 'API docs', 'developer guide', 'WebCloudor API', 'integration'],
  openGraph: {
    title: 'Documentation | WebCloudor',
    description: 'Complete developer documentation and API references',
    type: 'website',
  }
}

const quickStartItems = [
  {
    title: "Getting Started",
    description: "Quick setup guide to get you up and running",
    icon: <Zap className="w-5 h-5" />,
    href: "/docs/getting-started",
    time: "5 min read"
  },
  {
    title: "API Reference",
    description: "Complete API documentation with examples",
    icon: <Code className="w-5 h-5" />,
    href: "/docs/api",
    time: "Reference"
  },
  {
    title: "Guides & Tutorials",
    description: "Step-by-step guides for common use cases",
    icon: <Book className="w-5 h-5" />,
    href: "/guides",
    time: "Various"
  },
  {
    title: "Best Practices",
    description: "Recommended patterns and practices",
    icon: <FileText className="w-5 h-5" />,
    href: "/best-practices",
    time: "10 min read"
  }
]

const popularGuides = [
  {
    title: "Authentication Setup",
    description: "Implement secure authentication in your applications",
    category: "Security",
    difficulty: "Beginner"
  },
  {
    title: "Database Integration",
    description: "Connect and optimize database performance",
    category: "Backend",
    difficulty: "Intermediate"
  },
  {
    title: "Deployment Guide",
    description: "Deploy your applications to production",
    category: "DevOps",
    difficulty: "Advanced"
  },
  {
    title: "Performance Optimization",
    description: "Best practices for optimizing application performance",
    category: "Performance",
    difficulty: "Intermediate"
  }
]

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Documentation</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Developer 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Everything you need to integrate WebCloudor into your applications. 
              APIs, guides, and best practices all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Search className="w-4 h-4 mr-2" />
                Search Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Start</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running with WebCloudor in minutes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStartItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Card className="group hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <Badge variant="outline" className="text-xs w-fit">
                        {item.time}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Guides</h2>
              <p className="text-xl text-gray-600">Most accessed documentation and tutorials</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {popularGuides.map((guide, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{guide.category}</Badge>
                        <Badge variant="outline">{guide.difficulty}</Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Read guide</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              Cannot find what you are looking for? Our technical team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/guides">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Browse Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}