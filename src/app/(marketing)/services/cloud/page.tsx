import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Cloud, Server, Shield, Zap, BarChart3, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Cloud Architecture Services | Scalable Infrastructure Solutions",
  description: "Enterprise-grade cloud architecture designed for growth. Auto-scaling infrastructure, 99.9% uptime guarantee, advanced security, and real-time monitoring.",
  keywords: ["cloud architecture", "scalable infrastructure", "auto-scaling", "cloud computing", "enterprise architecture"],
  openGraph: {
    title: "Cloud Architecture Services | WebCloudor",
    description: "Infrastructure that scales seamlessly with your business growth",
    type: "website",
  },
}

const CloudArchitecturePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 md:pt-28 lg:pt-32 sm:pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-signal-yellow/5" />
        <div className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-r from-primary/10 to-primary-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-r from-primary-blue/8 to-primary/8 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Architecture Services
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Infrastructure{' '}
              <span className="bg-gradient-to-r from-primary to-primary-blue bg-clip-text text-transparent">
                that scales with you
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              Enterprise-grade architecture designed for businesses that cannot afford downtime. 
              We build scalable, secure, and monitored systems that handle growth seamlessly 
              while maintaining peak performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg w-full sm:w-auto min-h-[44px]">
                  Scale Your Infrastructure
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio/case-studies" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto min-h-[44px]">
                  View Architecture Projects
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-foreground/60 px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Auto-Scaling</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What&apos;s Included
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
              Comprehensive cloud solutions designed for enterprise reliability
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Auto-Scaling Cloud Infrastructure",
                description: "Automatically adjust resources based on demand to handle traffic spikes efficiently"
              },
              {
                icon: <Server className="w-6 h-6" />,
                title: "Load Balancing & CDN Setup",
                description: "Global content delivery and intelligent traffic distribution for optimal performance"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Database Optimization",
                description: "High-performance database architecture with automated backups and replication"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Security Hardening",
                description: "Enterprise-grade security measures including encryption, firewalls, and compliance"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Monitoring & Alerting",
                description: "Real-time system monitoring with intelligent alerts and performance dashboards"
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Disaster Recovery Planning",
                description: "Comprehensive backup and recovery strategies to ensure business continuity"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-muted/20 border-border/60 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              Success Story
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              10x Traffic Growth, Zero Downtime
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8">
              "Their cloud architecture scaled seamlessly as we grew 10x. Zero downtime issues, 
              enterprise-grade security, and a team that truly understands scalable systems."
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10x</div>
                <div className="text-foreground/60">Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-foreground/60">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-foreground/60">Security Incidents</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-semibold text-foreground">Jennifer Liu, CTO</p>
              <p className="text-foreground/60">ScaleUp Corp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Perfect For
              </h2>
              <p className="text-lg text-foreground/70">
                Cloud architecture solutions for growing and enterprise businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "High-Traffic Applications",
                  description: "Applications experiencing significant traffic growth or seasonal spikes"
                },
                {
                  title: "Businesses Expecting Rapid Growth",
                  description: "Companies planning for scale and need infrastructure that grows with them"
                },
                {
                  title: "Compliance Requirements",
                  description: "Organizations needing SOC 2, HIPAA, or other regulatory compliance"
                },
                {
                  title: "24/7 Reliability Needs",
                  description: "Mission-critical applications that require maximum uptime and performance"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-background border-border/60 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Investment & Timeline
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Enterprise cloud architecture with transparent, value-based pricing
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-background via-primary/[0.02] to-signal-yellow/[0.05] border-primary/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">From $12,000</div>
                  <div className="text-foreground/60">Starting price for cloud architecture</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-semibold text-foreground mb-2">6-10 weeks</div>
                  <div className="text-foreground/60">Typical implementation timeline</div>
                </div>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Auto-scaling infrastructure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Enterprise security protocols</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Real-time monitoring included</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg">
                    Scale Your Infrastructure
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-primary-blue to-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to build bulletproof infrastructure?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free architecture consultation and learn how we can future-proof your systems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-signal-yellow text-ink-black hover:bg-signal-yellow/90">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio/case-studies">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Architecture Projects
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

export default CloudArchitecturePage