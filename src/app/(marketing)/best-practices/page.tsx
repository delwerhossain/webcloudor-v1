import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Code, Shield, Zap, Users, BookOpen, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Best Practices | WebCloudor',
  description: 'Industry-leading best practices for web development, security, performance, and code quality. Professional standards and guidelines.',
  keywords: ['best practices', 'coding standards', 'web development', 'security', 'performance', 'code quality'],
  openGraph: {
    title: 'Best Practices | WebCloudor',
    description: 'Professional development standards and best practices',
    type: 'website',
  }
}

const practiceAreas = [
  {
    title: "Code Quality & Standards",
    description: "Writing maintainable, readable, and scalable code that stands the test of time.",
    icon: <Code className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600",
    practices: [
      "Clean Code Principles",
      "SOLID Design Patterns",
      "Code Review Guidelines",
      "Documentation Standards",
      "Testing Best Practices"
    ]
  },
  {
    title: "Security & Privacy",
    description: "Protecting applications and user data with enterprise-grade security measures.",
    icon: <Shield className="w-6 h-6" />,
    color: "bg-green-100 text-green-600",
    practices: [
      "Authentication & Authorization",
      "Data Encryption",
      "Input Validation",
      "OWASP Compliance",
      "Privacy by Design"
    ]
  },
  {
    title: "Performance Optimization",
    description: "Building fast, efficient applications that deliver exceptional user experiences.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-100 text-yellow-600",
    practices: [
      "Core Web Vitals",
      "Bundle Optimization",
      "Caching Strategies",
      "Database Optimization",
      "CDN Implementation"
    ]
  },
  {
    title: "Team Collaboration",
    description: "Fostering effective teamwork and communication in development projects.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600",
    practices: [
      "Git Workflow",
      "Code Reviews",
      "Agile Methodologies",
      "Documentation",
      "Knowledge Sharing"
    ]
  }
]

const codeStandards = [
  {
    title: "TypeScript Standards",
    description: "Strict typing and modern TypeScript patterns for scalable applications",
    badge: "Frontend"
  },
  {
    title: "API Design",
    description: "RESTful API design principles and GraphQL best practices",
    badge: "Backend"
  },
  {
    title: "Database Design",
    description: "Schema design, indexing strategies, and query optimization",
    badge: "Database"
  },
  {
    title: "Testing Strategies",
    description: "Unit, integration, and E2E testing methodologies",
    badge: "QA"
  },
  {
    title: "Deployment Practices",
    description: "CI/CD pipelines, containerization, and cloud deployment",
    badge: "DevOps"
  },
  {
    title: "Monitoring & Logging",
    description: "Application monitoring, error tracking, and performance analysis",
    badge: "Operations"
  }
]

const performanceTips = [
  {
    metric: "< 2s",
    label: "Page Load Time",
    description: "Optimize for sub-2 second initial page loads"
  },
  {
    metric: "90+",
    label: "Lighthouse Score",
    description: "Maintain high performance across all metrics"
  },
  {
    metric: "< 100ms",
    label: "Server Response",
    description: "API responses under 100ms for optimal UX"
  }
]

export default function BestPracticesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-orange-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Best Practices</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industry-Leading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Standards
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Professional development practices, security guidelines, and performance standards 
              that power enterprise-grade applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                Download Guidelines
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Award className="w-4 h-4 mr-2" />
                View Certifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Practice Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive standards across all aspects of modern web development
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {practiceAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${area.color}`}>
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="space-y-2">
                      {area.practices.map((practice, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{practice}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Standards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Standards</h2>
              <p className="text-xl text-gray-600">Detailed guidelines for every layer of your application</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codeStandards.map((standard, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline">{standard.badge}</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{standard.description}</p>
                    <div className="flex items-center text-orange-600 group-hover:text-orange-700 transition-colors">
                      <span className="text-sm font-medium">Read guidelines</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Standards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Standards</h2>
              <p className="text-xl text-gray-600">Measurable targets for optimal user experience</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {performanceTips.map((tip, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{tip.metric}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{tip.label}</div>
                  <div className="text-sm text-gray-600">{tip.description}</div>
                </Card>
              ))}
            </div>

            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Performance Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Image optimization and WebP format",
                    "Code splitting and lazy loading",
                    "Critical CSS inlining",
                    "Service worker implementation",
                    "Database query optimization",
                    "CDN and caching strategy",
                    "Minification and compression",
                    "Third-party script optimization"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Practices Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Shield className="w-6 h-6" />
                  Security Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Authentication & Access</h4>
                    <div className="space-y-2">
                      {[
                        "Multi-factor authentication",
                        "JWT token management",
                        "Role-based access control",
                        "Session security"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">Data Protection</h4>
                    <div className="space-y-2">
                      {[
                        "End-to-end encryption",
                        "Input validation & sanitization",
                        "SQL injection prevention",
                        "HTTPS enforcement"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Expert Guidance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Work with our team to implement these best practices in your projects and ensure 
            enterprise-grade quality from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Code Review
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-700">
                Consult Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}