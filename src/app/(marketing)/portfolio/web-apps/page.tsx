import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Zap, Globe, CheckCircle, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Web Applications Portfolio | Modern React & Next.js Projects',
  description: 'Explore our web application portfolio featuring React, Next.js, and modern web technologies. See custom web apps, dashboards, and interactive platforms we have built.',
  keywords: ['web applications', 'React projects', 'Next.js portfolio', 'custom web apps', 'web development'],
  openGraph: {
    title: 'Web Applications Portfolio | WebCloudor',
    description: 'Modern web applications built with cutting-edge technologies',
    type: 'website',
  },
}

const WebAppsPortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Interactive Learning Management System",
      client: "EduTech Solutions",
      industry: "Education & Learning",
      technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
      timeline: "12 weeks",
      teamSize: "5 specialists",
      mainResult: "+156% Student Engagement",
      results: [
        "67% higher course completion rates",
        "50% faster grading for teachers",
        "99.9% system uptime",
        "Real-time collaboration features"
      ],
      description: "Modern learning management system with real-time video calls, interactive whiteboards, and collaborative study rooms.",
      features: [
        "Real-time video conferencing",
        "Interactive whiteboards",
        "Automated grading system",
        "Progress tracking dashboards",
        "Mobile-responsive design",
        "Offline content access"
      ],
      challenge: "Replace outdated LMS with poor user experience and limited collaboration capabilities",
      solution: "Built modern React-based platform with WebRTC integration for real-time features",
      image: "/portfolio/lms-dashboard.jpg",
      demoUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      client: "DataInsights Pro",
      industry: "Technology & SaaS",
      technologies: ["React", "Next.js", "D3.js", "Node.js", "MongoDB"],
      timeline: "8 weeks",
      teamSize: "4 specialists",
      mainResult: "300% Faster Data Analysis",
      results: [
        "Real-time data visualization",
        "Custom reporting capabilities",
        "85% reduction in report generation time",
        "Multi-tenant architecture"
      ],
      description: "Comprehensive analytics platform with real-time data visualization and custom reporting capabilities.",
      features: [
        "Interactive data visualizations",
        "Custom dashboard builder",
        "Real-time data streaming",
        "Advanced filtering options",
        "Export functionality",
        "White-label solutions"
      ],
      challenge: "Manual reporting process taking 10+ hours weekly with static visualizations",
      solution: "Automated dashboard with D3.js visualizations and real-time data processing",
      image: "/portfolio/analytics-dashboard.jpg",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "Project Management Platform",
      client: "TeamSync Solutions",
      industry: "Professional Services",
      technologies: ["React", "Next.js", "TypeScript", "Prisma", "WebSocket"],
      timeline: "10 weeks",
      teamSize: "6 specialists",
      mainResult: "+89% Team Productivity",
      results: [
        "Streamlined project workflows",
        "40% faster task completion",
        "Real-time team collaboration",
        "Integrated time tracking"
      ],
      description: "Comprehensive project management platform with task tracking, team collaboration, and time management features.",
      features: [
        "Kanban and Gantt views",
        "Real-time collaboration",
        "Time tracking integration",
        "Custom workflow automation",
        "Team performance analytics",
        "Third-party integrations"
      ],
      challenge: "Teams using multiple disconnected tools leading to communication gaps",
      solution: "Unified platform with real-time features and workflow automation",
      image: "/portfolio/project-management.jpg",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      client: "MediCare Systems",
      industry: "Healthcare & Medical",
      technologies: ["React", "Next.js", "FHIR", "PostgreSQL", "Stripe"],
      timeline: "14 weeks",
      teamSize: "7 specialists",
      mainResult: "+234% Patient Engagement",
      results: [
        "HIPAA compliant architecture",
        "78% reduction in phone calls",
        "Integrated appointment booking",
        "Secure document sharing"
      ],
      description: "HIPAA-compliant patient portal with appointment booking, medical records access, and secure messaging.",
      features: [
        "HIPAA compliant security",
        "Online appointment booking",
        "Medical records access",
        "Secure provider messaging",
        "Prescription management",
        "Insurance integration"
      ],
      challenge: "Patients struggling with appointment booking and accessing medical information",
      solution: "Comprehensive portal with FHIR integration and enhanced security measures",
      image: "/portfolio/patient-portal.jpg",
      demoUrl: "#"
    },
    {
      id: 5,
      title: "Financial Trading Dashboard",
      client: "Confidential Client",
      industry: "Financial Services",
      technologies: ["React", "TypeScript", "WebSocket", "D3.js", "Redis"],
      timeline: "16 weeks",
      teamSize: "8 specialists",
      mainResult: "Real-time Trading Platform",
      results: [
        "Sub-second data updates",
        "Advanced charting capabilities",
        "Risk management tools",
        "SOC 2 Type II compliant"
      ],
      description: "High-frequency trading dashboard with real-time market data and advanced risk management features.",
      features: [
        "Real-time market data",
        "Advanced charting tools",
        "Risk assessment algorithms",
        "Portfolio management",
        "Automated trading rules",
        "Compliance reporting"
      ],
      challenge: "Need for real-time trading platform with bank-level security",
      solution: "High-performance dashboard with WebSocket connections and advanced security",
      image: "/portfolio/trading-dashboard.jpg",
      demoUrl: "#"
    },
    {
      id: 6,
      title: "Restaurant Management System",
      client: "ChefTech Inc",
      industry: "Food & Hospitality",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe"],
      timeline: "9 weeks",
      teamSize: "5 specialists",
      mainResult: "+67% Operational Efficiency",
      results: [
        "Integrated POS system",
        "Inventory management automation",
        "Staff scheduling optimization",
        "Customer feedback integration"
      ],
      description: "Complete restaurant management solution with POS integration, inventory tracking, and staff management.",
      features: [
        "Point of sale integration",
        "Inventory management",
        "Staff scheduling",
        "Customer management",
        "Financial reporting",
        "Multi-location support"
      ],
      challenge: "Manual processes causing inefficiencies and inventory waste",
      solution: "Automated management system with real-time tracking and reporting",
      image: "/portfolio/restaurant-system.jpg",
      demoUrl: "#"
    }
  ]

  const featuredProject = projects.find(p => p.featured) || projects[0]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 md:pt-28 lg:pt-32 sm:pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-signal-yellow/5" />
        <div className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-r from-primary/10 to-signal-yellow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-r from-primary-blue/8 to-primary/8 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Code className="w-4 h-4 mr-2" />
              Web Applications Portfolio
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Modern web apps{' '}
              <span className="bg-gradient-to-r from-primary to-primary-blue bg-clip-text text-transparent">
                built for success
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of custom web applications built with React, Next.js, and cutting-edge 
              technologies. Each project delivers exceptional user experience and measurable business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services/web-development">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  Web Development Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div>Web Applications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div>Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div>Average Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                Featured Project
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                {featuredProject.title}
              </h2>
              <p className="text-lg text-foreground/70">
                {featuredProject.description}
              </p>
            </div>

            <Card className="bg-background border-border/60 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline">{featuredProject.industry}</Badge>
                        <div className="text-sm text-foreground/60">{featuredProject.timeline}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{featuredProject.client}</h3>
                      <div className="text-3xl font-bold text-primary mb-4">{featuredProject.mainResult}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Results</h4>
                      <div className="space-y-2">
                        {featuredProject.results.map((result, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-foreground/80">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-primary hover:bg-primary/90">
                        View Live Demo
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline">
                        Case Study Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-signal-yellow/10 rounded-lg p-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                    <div className="space-y-3">
                      {featuredProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/40">
                      <div className="text-sm text-foreground/60">
                        <div className="mb-2"><span className="font-medium">Timeline:</span> {featuredProject.timeline}</div>
                        <div><span className="font-medium">Team Size:</span> {featuredProject.teamSize}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              More Web Applications
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore our diverse portfolio of custom web applications across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <Card key={project.id} className="bg-gradient-to-br from-background to-muted/20 border-border/60 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {project.industry}
                    </Badge>
                    <div className="text-xs text-foreground/60">{project.timeline}</div>
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">{project.title}</CardTitle>
                  <div className="text-sm text-foreground/70">{project.client}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <div className="text-xl font-bold text-primary mb-2">{project.mainResult}</div>
                    <p className="text-sm text-foreground/70 line-clamp-2">{project.description}</p>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Technology Stack</div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-foreground/60 mb-2">Key Results:</div>
                    <div className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-foreground/70">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10 hover:text-primary group-hover:bg-primary/10">
                      View Details
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                    <Button variant="ghost" size="sm" className="px-3">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Technologies We Use
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Modern web technologies that ensure performance, scalability, and maintainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Frontend",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                icon: <Code className="w-6 h-6" />
              },
              {
                category: "Backend",
                technologies: ["Node.js", "Express", "GraphQL", "REST APIs"],
                icon: <Globe className="w-6 h-6" />
              },
              {
                category: "Database",
                technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
                icon: <Zap className="w-6 h-6" />
              },
              {
                category: "Mobile",
                technologies: ["Progressive Web Apps", "Responsive Design", "Touch Optimization"],
                icon: <Smartphone className="w-6 h-6" />
              }
            ].map((stack, index) => (
              <Card key={index} className="bg-background border-border/60 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {stack.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{stack.category}</h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-foreground/70">{tech}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-primary-blue to-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to build your web application?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation and see how we can bring your web application vision to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-signal-yellow text-ink-black hover:bg-signal-yellow/90">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/web-development">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Web Development Services
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-white/80">
            <p>hello@webcloudor.com • Response guaranteed within 24 hours</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WebAppsPortfolioPage