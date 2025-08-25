import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Zap, MessageSquare, BarChart3, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'AI Integration Services | Smart Automation Solutions',
  description: 'AI-powered automation that reduces manual work and increases efficiency. Custom chatbots, lead qualification, process optimization, and intelligent workflows.',
  keywords: ['AI integration', 'automation', 'chatbots', 'machine learning', 'process optimization', 'AI development'],
  openGraph: {
    title: 'AI Integration Services | WebCloudor',
    description: 'Smart automation that works while you sleep',
    type: 'website',
  },
}

const AIIntegrationPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 md:pt-28 lg:pt-32 sm:pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-signal-yellow/5" />
        <div className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-r from-primary/10 to-signal-yellow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-r from-purple-500/8 to-primary/8 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Bot className="w-4 h-4 mr-2" />
              AI Integration Services
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Smart systems{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                that work while you sleep
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              AI-powered automation that handles routine tasks, qualifies leads, and provides instant customer 
              support. Free your team to focus on strategic work while AI handles the repetitive processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg">
                  Automate Your Processes
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio/case-studies">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  View AI Projects
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>24/7 Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Lead Qualification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Process Optimization</span>
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
              Comprehensive AI solutions designed to streamline your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Custom AI Chatbot Development",
                description: "Intelligent chatbots that handle customer inquiries and provide 24/7 support"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Lead Qualification Automation",
                description: "Automatically score and route leads based on behavior and engagement patterns"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Email Marketing Automation",
                description: "Smart email sequences that nurture leads and convert prospects into customers"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Process Workflow Optimization",
                description: "Identify bottlenecks and automate repetitive tasks to increase team efficiency"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Customer Service Integration",
                description: "Seamless integration with existing support systems and escalation workflows"
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Performance Analytics",
                description: "Detailed reporting on automation performance and ROI measurement"
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

      {/* Success Story Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
              Success Story
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              60% Reduction in Support Tickets
            </h2>
            
            <p className="text-lg text-foreground/70 mb-8">
              "The AI automation system WebCloudor built reduced our support tickets by 60% while 
              improving order accuracy by 34%. Our customers love the 24/7 availability."
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">-60%</div>
                <div className="text-foreground/60">Support Tickets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">+34%</div>
                <div className="text-foreground/60">Order Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-foreground/60">Availability</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-semibold text-foreground">Mike Johnson, Operations Manager</p>
              <p className="text-foreground/60">ChainEats Restaurant Group</p>
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
                AI automation solutions for businesses ready to scale efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "High Inquiry Volume Businesses",
                  description: "Service businesses handling numerous customer inquiries and support requests"
                },
                {
                  title: "Customer Support Scaling",
                  description: "Companies wanting to provide 24/7 support without increasing headcount"
                },
                {
                  title: "Lead Qualification Needs",
                  description: "Sales teams needing to identify and prioritize high-quality prospects"
                },
                {
                  title: "Operational Efficiency Goals",
                  description: "Organizations looking to eliminate manual processes and reduce human error"
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

      {/* Use Cases Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Common AI Use Cases
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real-world applications that deliver immediate business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Customer Support Chatbots",
                description: "Handle common questions, troubleshoot issues, and escalate complex problems to human agents",
                results: "60-80% reduction in support tickets"
              },
              {
                title: "Lead Scoring & Routing",
                description: "Automatically qualify inbound leads and route them to the most appropriate sales team member",
                results: "40% increase in conversion rates"
              },
              {
                title: "Content Generation",
                description: "Generate product descriptions, blog posts, and marketing copy at scale with brand consistency",
                results: "70% faster content creation"
              },
              {
                title: "Appointment Scheduling",
                description: "Let AI handle booking, rescheduling, and reminder communications automatically",
                results: "90% fewer scheduling conflicts"
              },
              {
                title: "Data Analysis & Reporting",
                description: "Automatically analyze business metrics and generate actionable insights and reports",
                results: "5-10 hours saved per week"
              },
              {
                title: "Email Campaign Optimization",
                description: "Personalize email content and send timing based on individual user behavior patterns",
                results: "25-50% higher open rates"
              }
            ].map((useCase, index) => (
              <Card key={index} className="bg-background border-border/60 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{useCase.title}</h3>
                  <p className="text-foreground/70 mb-4">{useCase.description}</p>
                  <div className="text-sm font-medium text-primary">{useCase.results}</div>
                </CardContent>
              </Card>
            ))}
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
              AI automation solutions with rapid implementation and quick ROI
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-background via-primary/[0.02] to-signal-yellow/[0.05] border-primary/20 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">From $5,000</div>
                  <div className="text-foreground/60">Starting price for AI automation projects</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-semibold text-foreground mb-2">2-6 weeks</div>
                  <div className="text-foreground/60">Typical implementation timeline</div>
                </div>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Custom AI workflow design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Integration with existing systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Performance monitoring & analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-foreground/80">Team training & documentation</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg">
                    Start AI Automation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-purple-600 to-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to automate your business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free AI consultation and discover how automation can transform your operations
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
                View AI Projects
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

export default AIIntegrationPage