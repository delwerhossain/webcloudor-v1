import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, TrendingUp, Users, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Case Studies | Real Results from WebCloudor Projects",
  description: "Detailed case studies showing real business outcomes from our web development, e-commerce, and cloud architecture projects. See measurable results and client success stories.",
  keywords: ["case studies", "project results", "client success", "web development results", "ROI"],
  openGraph: {
    title: "Case Studies | WebCloudor",
    description: "Real projects, real outcomes, real growth. See how we have helped 50+ clients achieve breakthrough results.",
    type: "website",
  },
}

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "GlobalRetail Corp",
      industry: "E-commerce & Retail",
      service: "E-commerce Solutions",
      timeline: "10 weeks",
      mainMetric: "+127% Online Sales",
      metrics: [
        { label: "Conversion Rate", value: "+45%", color: "text-green-600" },
        { label: "Mobile Orders", value: "+89%", color: "text-blue-600" },
        { label: "Checkout Speed", value: "40% faster", color: "text-purple-600" }
      ],
      description: "Complete e-commerce rebuild with mobile-first design and optimized checkout flow",
      challenge: "68% mobile cart abandonment rate and slow checkout process causing $2M annual revenue loss",
      solution: "Streamlined 3-step checkout, mobile optimization, and performance improvements",
      image: "/portfolio/ecommerce-case-study.jpg"
    },
    {
      id: 2,
      title: "Scalable Cloud Infrastructure",
      client: "ScaleUp Corp",
      industry: "Technology & SaaS",
      service: "Cloud Architecture",
      timeline: "12 weeks",
      mainMetric: "10x Traffic Growth",
      metrics: [
        { label: "Uptime", value: "99.9%", color: "text-green-600" },
        { label: "Load Time", value: "-75%", color: "text-blue-600" },
        { label: "Server Costs", value: "-40%", color: "text-purple-600" }
      ],
      description: "Enterprise-grade cloud architecture that scaled seamlessly with business growth",
      challenge: "Frequent downtime and performance issues as traffic grew from startup to enterprise scale",
      solution: "Auto-scaling infrastructure, load balancing, and comprehensive monitoring system",
      image: "/portfolio/cloud-case-study.jpg"
    },
    {
      id: 3,
      title: "AI-Powered Customer Support",
      client: "ServicePro Inc",
      industry: "Professional Services",
      service: "AI Integration",
      timeline: "4 weeks",
      mainMetric: "-60% Support Tickets",
      metrics: [
        { label: "Response Time", value: "Instant", color: "text-green-600" },
        { label: "Customer Satisfaction", value: "+34%", color: "text-blue-600" },
        { label: "Support Costs", value: "-50%", color: "text-purple-600" }
      ],
      description: "Intelligent chatbot system that handles customer inquiries and automates support workflows",
      challenge: "Overwhelming support ticket volume and slow response times affecting customer satisfaction",
      solution: "Custom AI chatbot with natural language processing and seamless human handoff",
      image: "/portfolio/ai-case-study.jpg"
    },
    {
      id: 4,
      title: "Learning Management Platform",
      client: "EduTech Solutions",
      industry: "Education & Learning",
      service: "Web Development",
      timeline: "12 weeks",
      mainMetric: "+156% Student Engagement",
      metrics: [
        { label: "Course Completion", value: "+67%", color: "text-green-600" },
        { label: "Teacher Efficiency", value: "50% faster", color: "text-blue-600" },
        { label: "System Uptime", value: "99.9%", color: "text-purple-600" }
      ],
      description: "Modern LMS with real-time collaboration and interactive learning features",
      challenge: "Outdated learning platform with poor user experience and limited collaboration features",
      solution: "React-based interactive platform with real-time features and mobile optimization",
      image: "/portfolio/lms-case-study.jpg"
    },
    {
      id: 5,
      title: "FinTech Security Platform",
      client: "Confidential Financial Client",
      industry: "Financial Services",
      service: "Cloud Architecture",
      timeline: "16 weeks",
      mainMetric: "SOC 2 Compliance",
      metrics: [
        { label: "Security Score", value: "100%", color: "text-green-600" },
        { label: "Data Processing", value: "10x faster", color: "text-blue-600" },
        { label: "Compliance", value: "Full SOC 2", color: "text-purple-600" }
      ],
      description: "High-security financial platform with advanced encryption and compliance features",
      challenge: "Need for bank-level security while maintaining high performance for financial transactions",
      solution: "Multi-layered security architecture with end-to-end encryption and audit trails",
      image: "/portfolio/fintech-case-study.jpg"
    },
    {
      id: 6,
      title: "Startup MVP to Series A",
      client: "TechStartup Inc",
      industry: "Technology & SaaS",
      service: "Fast MVP",
      timeline: "3 days",
      mainMetric: "$5M Series A Raised",
      metrics: [
        { label: "Delivery Time", value: "3 days", color: "text-green-600" },
        { label: "User Signups", value: "1000+", color: "text-blue-600" },
        { label: "Investor Interest", value: "15 meetings", color: "text-purple-600" }
      ],
      description: "Rapid MVP development that helped secure Series A funding with interactive prototype",
      challenge: "Need to demonstrate product concept to investors with limited time and budget",
      solution: "Core feature MVP with clean UI and working demo within 72 hours",
      image: "/portfolio/mvp-case-study.jpg"
    }
  ]

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
              <BarChart3 className="w-4 h-4 mr-2" />
              Detailed Case Studies
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Results that{" "}
              <span className="bg-gradient-to-r from-primary to-primary-blue bg-clip-text text-transparent">
                speak louder than words
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Real projects, real outcomes, real growth. See how we have helped 50+ clients 
              achieve breakthrough results with measurable business impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg w-full sm:w-auto min-h-[44px]">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto min-h-[44px]">
                  View All Projects
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div>Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$25M+</div>
                <div>Client Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div>Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                Featured Success Story
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Mobile Checkout Abandonment Crisis Solved
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                How we transformed a $2M revenue loss into a 45% conversion rate increase
              </p>
            </div>

            <Card className="bg-background border-border/60 shadow-lg">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center">
                  <div>
                    <div className="mb-6">
                      <Badge className="mb-2">E-commerce Solutions</Badge>
                      <h3 className="text-2xl font-bold text-foreground mb-2">GlobalRetail Corp</h3>
                      <p className="text-foreground/70">Leading e-commerce retailer with $50M+ annual revenue</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">The Challenge</h4>
                      <p className="text-foreground/70">
                        GlobalRetail was losing $2M annually due to 68% mobile cart abandonment. Their checkout 
                        process had 7 steps, confusing navigation, and slow load times that frustrated customers.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Our Solution</h4>
                      <p className="text-foreground/70">
                        We rebuilt their entire mobile checkout experience with a streamlined 3-step process, 
                        smart form validation, and optimized performance.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">+45%</div>
                        <div className="text-xs sm:text-sm text-foreground/60">Conversion Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">+89%</div>
                        <div className="text-xs sm:text-sm text-foreground/60">Mobile Orders</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-purple-600">40%</div>
                        <div className="text-xs sm:text-sm text-foreground/60">Faster Checkout</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-signal-yellow/10 rounded-lg p-4 sm:p-6 lg:p-8 text-center">
                    <div className="mb-4 sm:mb-6">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">+127%</div>
                      <div className="text-sm sm:text-base text-foreground/70">Overall Sales Growth</div>
                    </div>
                    <blockquote className="text-sm sm:text-base lg:text-lg italic text-foreground/80 mb-4">
                      "The results exceeded our expectations. WebCloudor did not just build us a better checkout—they 
                      transformed our entire mobile revenue stream."
                    </blockquote>
                    <div className="text-sm sm:text-base text-foreground/70">
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-xs sm:text-sm">Head of Digital, GlobalRetail Corp</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              More Success Stories
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore detailed case studies showing real business outcomes across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(1).map((caseStudy) => (
              <Card key={caseStudy.id} className="bg-gradient-to-br from-background to-muted/20 border-border/60 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {caseStudy.service}
                    </Badge>
                    <div className="text-xs text-foreground/60">{caseStudy.timeline}</div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{caseStudy.title}</CardTitle>
                  <div className="text-sm text-foreground/70">{caseStudy.industry}</div>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="mb-4">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1">{caseStudy.mainMetric}</div>
                    <p className="text-sm text-foreground/70 line-clamp-2">{caseStudy.description}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-foreground/70">{metric.label}</span>
                        <span className={`text-sm font-medium ${metric.color}`}>{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm text-foreground/60 mb-4">
                    <span className="font-medium">Challenge:</span> {caseStudy.challenge}
                  </div>

                  <div className="mt-auto">
                    <Button variant="ghost" size="sm" className="w-full hover:bg-primary/10 hover:text-primary min-h-[44px]">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-primary-blue to-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Aggregate Results Across All Projects
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Combined outcomes from 50+ successful client engagements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Revenue Generated", value: "$25M+", icon: <TrendingUp className="w-6 h-6" /> },
              { label: "Average ROI", value: "340%", icon: <BarChart3 className="w-6 h-6" /> },
              { label: "Client Retention Rate", value: "99%", icon: <Users className="w-6 h-6" /> },
              { label: "Average Performance Gain", value: "+156%", icon: <Zap className="w-6 h-6" /> }
            ].map((metric, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-signal-yellow/20 rounded-lg flex items-center justify-center text-signal-yellow">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{metric.value}</div>
                  <div className="text-sm opacity-80">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Ready to join our success stories?
          </h2>
          <p className="text-xl mb-8 text-foreground/70 max-w-2xl mx-auto">
            Get a free consultation and see how we can deliver similar results for your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg w-full sm:w-auto min-h-[44px]">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto min-h-[44px]">
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-foreground/60">
            <p>webcloudor@gmail.com • Response guaranteed within 24 hours</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudiesPage