import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Users, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Careers | Join the WebCloudor Team',
  description: 'Join our team of passionate developers, designers, and digital strategists. Explore career opportunities at WebCloudor and help us build the future of web development.',
  keywords: ['careers', 'jobs', 'web development careers', 'remote work', 'developer jobs'],
  openGraph: {
    title: 'Careers | Join the WebCloudor Team',
    description: 'Build the future of web development with us',
    type: 'website',
  },
}

const CareersPage = () => {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      type: "Full-time",
      location: "Remote / Hybrid",
      salary: "$80,000 - $120,000",
      description: "Lead complex web application projects using React, Next.js, and Node.js",
      requirements: ["5+ years experience", "React/Next.js expertise", "Node.js backend skills", "Team leadership experience"],
      featured: true
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Remote",
      salary: "$60,000 - $90,000",
      description: "Create exceptional user experiences for web applications and e-commerce platforms",
      requirements: ["3+ years experience", "Figma proficiency", "Design system experience", "User research skills"]
    },
    {
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      salary: "$70,000 - $100,000",
      description: "Manage cloud infrastructure and deployment pipelines for client projects",
      requirements: ["AWS/Azure experience", "Docker/Kubernetes", "CI/CD pipelines", "Infrastructure as Code"]
    }
  ]

  const benefits = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and async communication"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness stipend"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "$2,000 annual learning budget and conference attendance"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-signal-yellow/5" />
        
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Build the future{' '}
              <span className="bg-gradient-to-r from-primary to-primary-blue bg-clip-text text-transparent">
                with us
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Join our team of passionate developers, designers, and digital strategists. 
              Help us create exceptional digital experiences for clients worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="#positions" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg w-full sm:w-auto min-h-[44px]">
                  View Open Positions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto min-h-[44px]">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Why Work With Us?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We believe great work comes from great people in a great environment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-muted/20 border-border/60 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-3 sm:mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-tight">{benefit.title}</h3>
                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 sm:py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Open Positions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Find your next career opportunity with WebCloudor
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className={`bg-background border-border/60 hover:border-primary/30 transition-colors ${position.featured ? 'border-primary/40 shadow-lg' : ''}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">{position.title}</h3>
                        {position.featured && (
                          <Badge className="bg-signal-yellow text-ink-black self-start sm:self-auto">Featured</Badge>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-foreground/70">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{position.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate">{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="truncate text-xs sm:text-sm">{position.salary}</span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-foreground/80 mb-4 leading-relaxed">{position.description}</p>

                      <div className="mb-4">
                        <div className="text-xs sm:text-sm font-medium text-foreground mb-2">Requirements:</div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <Badge key={reqIndex} variant="secondary" className="bg-primary/10 text-primary text-xs leading-tight">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Button className="bg-primary hover:bg-primary/90 w-full min-h-[44px]">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm sm:text-base text-foreground/70 mb-6">
              Do not see a position that fits? We are always looking for talented individuals.
            </p>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 min-h-[44px]">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Application Process
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our streamlined hiring process designed to find the best fit
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "1",
                title: "Application",
                description: "Submit your resume and cover letter through our application form"
              },
              {
                step: "2",
                title: "Initial Screen",
                description: "Brief phone/video call to discuss your background and interest"
              },
              {
                step: "3",
                title: "Technical Interview",
                description: "Technical discussion and coding challenge relevant to the role"
              },
              {
                step: "4",
                title: "Final Interview",
                description: "Meet the team and discuss culture fit and long-term goals"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mx-auto mb-3 sm:mb-4">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 leading-tight">{step.title}</h3>
                <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-primary-blue to-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to join our team?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the next step in your career and help us build exceptional digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg" className="bg-signal-yellow text-ink-black hover:bg-signal-yellow/90 w-full sm:w-auto min-h-[44px]">
              Apply Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto min-h-[44px]">
              Learn More About Us
            </Button>
          </div>

          <div className="mt-6 sm:mt-8 text-sm sm:text-base text-white/80">
            <p className="px-4 text-center">careers@webcloudor.com • We respond to all applications</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CareersPage