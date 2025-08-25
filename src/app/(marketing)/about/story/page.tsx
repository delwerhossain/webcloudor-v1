import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Lightbulb, Target, Users, Award, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Our Story | WebCloudor - From Vision to Reality',
  description: 'Learn about WebCloudor journey from startup to premium web development agency. Discover our mission, values, and commitment to helping businesses thrive digitally.',
  keywords: ['WebCloudor story', 'company history', 'web development agency', 'mission', 'values'],
  openGraph: {
    title: 'Our Story | WebCloudor',
    description: 'The journey of building a premium web development agency',
    type: 'website',
  },
}

const OurStoryPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-signal-yellow/5" />
        <div className="absolute top-20 left-8 w-32 h-32 bg-gradient-to-r from-primary/10 to-signal-yellow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-r from-primary-blue/8 to-primary/8 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              From vision to{' '}
              <span className="bg-gradient-to-r from-primary to-primary-blue bg-clip-text text-transparent">
                reality
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              The journey of building WebCloudor - a story of passion, dedication, and the unwavering 
              belief that every business deserves exceptional digital experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2019</div>
                <div>Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div>Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                How It All Started
              </h2>
              <p className="text-lg text-foreground/70">
                Every great journey begins with a simple idea
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">The Problem We Saw</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  In 2019, we witnessed countless businesses struggling with outdated websites, 
                  slow-loading platforms, and digital experiences that failed to convert visitors 
                  into customers. Many agencies promised the world but delivered generic solutions 
                  that did not align with business goals.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We knew there had to be a better way - a way to combine cutting-edge technology 
                  with deep business understanding to create digital experiences that truly drive results.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-signal-yellow/10 rounded-lg p-8">
                <div className="text-4xl font-bold text-primary mb-4">The Vision</div>
                <blockquote className="text-lg italic text-foreground/80">
                  "To bridge the gap between beautiful design and business results, creating 
                  digital experiences that do not just look good, but actually work."
                </blockquote>
                <div className="text-foreground/60 mt-4">- Ahsan Habib Akik, Founder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our Journey
            </h2>
            <p className="text-lg text-foreground/70">
              Key milestones in building WebCloudor
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2019",
                  title: "The Beginning",
                  description: "Started with a vision to create better web experiences. First client project delivered in 2 weeks.",
                  metric: "1 Client"
                },
                {
                  year: "2020",
                  title: "Building Foundation",
                  description: "Assembled core team and established development processes. Focused on quality over quantity.",
                  metric: "5 Team Members"
                },
                {
                  year: "2021",
                  title: "Growth & Recognition",
                  description: "Expanded services to include e-commerce and cloud solutions. First major enterprise client.",
                  metric: "15 Projects"
                },
                {
                  year: "2022",
                  title: "Scaling Excellence",
                  description: "Introduced AI automation services. Achieved 99% client retention rate and expanded internationally.",
                  metric: "30+ Projects"
                },
                {
                  year: "2023",
                  title: "Premium Positioning",
                  description: "Focused exclusively on tier-1/2 clients. Launched fast MVP service for startups.",
                  metric: "50+ Projects"
                },
                {
                  year: "2024",
                  title: "Future Ready",
                  description: "Integrated cutting-edge AI tools and expanded cloud architecture expertise for enterprise clients.",
                  metric: "$25M+ Generated"
                }
              ].map((milestone, index) => (
                <Card key={index} className="bg-background border-border/60 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-foreground/70 mb-2">{milestone.description}</p>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {milestone.metric}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Our Values & Mission
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Results-Driven",
                description: "Every project must deliver measurable business results. Beautiful designs that do not convert are meaningless to us."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Client Partnership",
                description: "We are not just vendors - we are partners invested in our clients' long-term success and growth."
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Innovation First",
                description: "We stay ahead of technology trends to give our clients competitive advantages in their markets."
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Quality Excellence",
                description: "We never compromise on quality. Every line of code, every design element is crafted with precision."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Perspective",
                description: "We build for international markets with accessibility, performance, and scalability in mind."
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Human-Centered",
                description: "Technology should serve people. We create digital experiences that feel natural and intuitive."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-muted/20 border-border/60 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Statement */}
          <Card className="bg-gradient-to-br from-primary via-primary-blue to-dark-blue text-white max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl leading-relaxed opacity-90 mb-6">
                To empower businesses with exceptional digital experiences that drive growth, 
                enhance customer satisfaction, and create lasting competitive advantages in an 
                increasingly digital world.
              </p>
              <div className="text-signal-yellow font-medium">
                Building the future, one project at a time.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Looking Forward
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              As we continue to grow, our commitment remains unchanged: delivering exceptional 
              digital experiences that drive real business results. We are excited about the future 
              of web technology and the opportunities it creates for our clients to innovate and succeed.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Whether you are a startup with a bold vision or an enterprise looking to transform 
              your digital presence, we are here to turn your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg">
                  Start Your Journey With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about/team">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Ready to be part of our story?
          </h2>
          <p className="text-xl mb-8 text-foreground/70 max-w-2xl mx-auto">
            Let us help you write the next chapter of your digital success
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                View Our Work
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-foreground/60">
            <p>hello@webcloudor.com • Response guaranteed within 24 hours</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default OurStoryPage