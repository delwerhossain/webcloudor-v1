import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Zap, Shield, BarChart3, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Web Development Services | Modern, Scalable Web Solutions',
  description: 'Professional web development services using React, Next.js, and modern frameworks. Build responsive, fast, and scalable web applications that grow with your business.',
  keywords: ['web development', 'React', 'Next.js', 'responsive design', 'web applications'],
  openGraph: {
    title: 'Web Development Services | WebCloudor',
    description: 'Modern web development solutions that scale with your business',
    type: 'website',
  },
}

const WebDevelopmentPage = () => {
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
              Web Development Services
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Modern foundations{' '}
              <span className="bg-gradient-to-r from-primary to-primary-blue bg-clip-text text-transparent">
                built for growth
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              We build responsive websites and web applications using cutting-edge frameworks that ensure 
              your digital presence stays ahead of the competition. Every project is crafted with performance, 
              security, and scalability in mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio/web-apps">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  View Web Projects
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>React & Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Mobile-First Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>SEO Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              What's Included
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive web development services designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Custom Responsive Design",
                description: "Tailored design system that looks perfect on all devices and screen sizes"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "React/Next.js Development",
                description: "Modern framework architecture for performance and maintainability"
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Progressive Web App Features",
                description: "App-like experience with offline capabilities and push notifications"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "SEO Optimization & Analytics",
                description: "Built-in SEO best practices and comprehensive analytics setup"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Content Management System",
                description: "Easy-to-use CMS for updating content without technical knowledge"
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "3 Months Free Maintenance",
                description: "Post-launch support, updates, and optimization included"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-muted/20 border-border/60 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Perfect For
              </h2>
              <p className="text-lg text-foreground/70">
                Web development solutions for businesses at every stage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Growing Businesses",
                  description: "Companies needing a professional digital presence that converts visitors into customers"
                },
                {
                  title: "Custom Functionality",
                  description: "Organizations requiring unique features and integrations not available in templates"
                },
                {
                  title: "Digital Expansion",
                  description: "Companies planning to scale their online operations and reach new markets"
                },
                {
                  title: "Competitive Advantage",
                  description: "Brands wanting to stand out with superior user experience and performance"
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
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Investment & Timeline
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Transparent pricing for professional web development services
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-background via-primary/[0.02] to-signal-yellow/[0.05] border-primary/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">From $8,000</div>
                  <div className="text-foreground/60">Starting price for web development projects</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-semibold text-foreground mb-2">4-8 weeks</div>
                  <div className="text-foreground/60">Typical project timeline</div>
                </div>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Custom responsive design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Modern framework development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">SEO optimization included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">3 months free maintenance</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg">
                    Get Started Today
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
            Ready to build something extraordinary?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book a free consultation to discuss your project goals and get a detailed proposal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-signal-yellow text-ink-black hover:bg-signal-yellow/90">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio/web-apps">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Web Projects
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

export default WebDevelopmentPage