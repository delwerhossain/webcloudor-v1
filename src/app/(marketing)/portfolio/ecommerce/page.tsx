import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, TrendingUp, CreditCard, BarChart3, Users, CheckCircle, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'E-commerce Portfolio | High-Converting Online Stores',
  description: 'Explore our e-commerce portfolio featuring high-converting online stores, payment integrations, and inventory management systems that drive sales growth.',
  keywords: ['e-commerce portfolio', 'online stores', 'shopping platforms', 'e-commerce development', 'conversion optimization'],
  openGraph: {
    title: 'E-commerce Portfolio | WebCloudor',
    description: 'High-converting e-commerce platforms that turn browsers into buyers',
    type: 'website',
  },
}

const EcommercePortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Medical Supply E-commerce Platform",
      client: "MedSupply Co",
      industry: "Healthcare & Medical",
      timeline: "10 weeks",
      mainResult: "+127% Online Sales",
      results: [
        "+45% conversion rate increase",
        "+89% mobile order growth",
        "40% faster checkout process",
        "B2B bulk ordering system"
      ],
      description: "Complete e-commerce rebuild with mobile-first design, B2B features, and optimized checkout flow for medical supply ordering.",
      features: [
        "B2B bulk ordering",
        "Medical product catalog",
        "Prescription verification",
        "Insurance integration",
        "Automated reordering",
        "Mobile-optimized checkout"
      ],
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL", "Redis"],
      image: "/portfolio/medsupply-ecommerce.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Fashion E-commerce Marketplace",
      client: "StyleHub Fashion",
      industry: "Fashion & Retail",
      timeline: "12 weeks",
      mainResult: "+89% Revenue Growth",
      results: [
        "Multi-vendor marketplace",
        "Advanced filtering system",
        "Wishlist and recommendations",
        "Social shopping features"
      ],
      description: "Multi-vendor fashion marketplace with advanced product filtering, social features, and seamless vendor onboarding.",
      features: [
        "Multi-vendor support",
        "Advanced product filters",
        "Size recommendation engine",
        "Social sharing integration",
        "Vendor dashboard",
        "Customer reviews system"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe Connect", "AWS"],
      image: "/portfolio/fashion-marketplace.jpg"
    },
    {
      id: 3,
      title: "Gourmet Food Delivery Platform",
      client: "TasteCraft Foods",
      industry: "Food & Beverage",
      timeline: "8 weeks",
      mainResult: "+156% Order Volume",
      results: [
        "Real-time order tracking",
        "Delivery optimization",
        "Subscription meal plans",
        "Restaurant partner portal"
      ],
      description: "Food delivery platform with real-time tracking, subscription management, and integrated restaurant partner system.",
      features: [
        "Real-time order tracking",
        "Subscription management",
        "Restaurant portal",
        "Delivery route optimization",
        "Menu customization",
        "Loyalty program integration"
      ],
      technologies: ["React Native", "Next.js", "Express", "MongoDB", "Socket.io"],
      image: "/portfolio/food-delivery.jpg"
    },
    {
      id: 4,
      title: "Electronics B2B Platform",
      client: "TechDistributor Pro",
      industry: "Technology & Electronics",
      timeline: "14 weeks",
      mainResult: "+234% B2B Sales",
      results: [
        "Wholesale pricing tiers",
        "Bulk order management",
        "Credit terms integration",
        "Automated invoicing"
      ],
      description: "B2B electronics distribution platform with complex pricing structures, credit management, and automated processes.",
      features: [
        "Tiered pricing system",
        "Credit management",
        "Bulk order processing",
        "Automated invoicing",
        "Product specifications database",
        "Inventory sync integration"
      ],
      technologies: ["React", "Next.js", "PostgreSQL", "Stripe", "QuickBooks API"],
      image: "/portfolio/b2b-electronics.jpg"
    },
    {
      id: 5,
      title: "Handcrafted Goods Marketplace",
      client: "ArtisanCraft Collective",
      industry: "Arts & Crafts",
      timeline: "9 weeks",
      mainResult: "+78% Artisan Revenue",
      results: [
        "Artisan onboarding system",
        "Custom product builder",
        "Commission management",
        "Story-driven product pages"
      ],
      description: "Marketplace for handcrafted goods with artisan storytelling, custom product options, and fair commission structure.",
      features: [
        "Artisan profiles and stories",
        "Custom product options",
        "Commission tracking",
        "Product customization tools",
        "Quality verification system",
        "Community features"
      ],
      technologies: ["React", "Next.js", "Stripe", "PostgreSQL", "Cloudinary"],
      image: "/portfolio/artisan-marketplace.jpg"
    },
    {
      id: 6,
      title: "Sports Equipment E-store",
      client: "ProGear Athletics",
      industry: "Sports & Fitness",
      timeline: "11 weeks",
      mainResult: "+67% Mobile Sales",
      results: [
        "Equipment finder tool",
        "Team bulk ordering",
        "Seasonal campaign management",
        "Loyalty rewards program"
      ],
      description: "Sports equipment e-commerce with product finder tools, team ordering capabilities, and integrated loyalty program.",
      features: [
        "Equipment recommendation engine",
        "Team bulk ordering portal",
        "Size and fit guides",
        "Seasonal promotions",
        "Loyalty points system",
        "Product comparison tools"
      ],
      technologies: ["React", "Next.js", "Shopify Plus", "Klaviyo", "Gorgias"],
      image: "/portfolio/sports-equipment.jpg"
    }
  ]

  const featuredProject = projects.find(p => p.featured) || projects[0]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 md:pt-28 lg:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-signal-yellow/5" />
        
        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <ShoppingCart className="w-4 h-4 mr-2" />
              E-commerce Portfolio
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Stores that{' '}
              <span className="bg-gradient-to-r from-primary to-warm-orange bg-clip-text text-transparent">
                convert and scale
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of high-converting e-commerce platforms that turn browsers into buyers. 
              Each store is optimized for performance, user experience, and business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-warm-orange hover:shadow-lg">
                  Start Your Store
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services/ecommerce">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  E-commerce Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div>E-commerce Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$12M+</div>
                <div>Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">89%</div>
                <div>Avg. Conversion Increase</div>
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
                Featured Success Story
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
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline">
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-signal-yellow/10 rounded-lg p-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">E-commerce Features</h4>
                    <div className="space-y-3">
                      {featuredProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <ShoppingCart className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/40">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">127%</div>
                        <div className="text-sm text-foreground/60">Sales Growth Achieved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-commerce Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              More E-commerce Success Stories
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover how we have helped businesses across industries build thriving online stores
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
                    <div className="text-sm text-foreground/60 mb-2">Key Achievements:</div>
                    <div className="space-y-1">
                      {project.results.slice(0, 2).map((result, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span className="text-foreground/70">{result}</span>
                        </div>
                      ))}
                    </div>
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

                  <Button variant="ghost" size="sm" className="w-full hover:bg-primary/10 hover:text-primary group-hover:bg-primary/10">
                    View Project Details
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Metrics */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-warm-orange to-signal-yellow text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              E-commerce Results That Matter
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Combined results across all our e-commerce projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Total Online Revenue", value: "$12M+", icon: <DollarSign className="w-6 h-6" /> },
              { label: "Average Conversion Increase", value: "89%", icon: <TrendingUp className="w-6 h-6" /> },
              { label: "Mobile Sales Growth", value: "156%", icon: <Users className="w-6 h-6" /> },
              { label: "Checkout Optimization", value: "45%", icon: <CreditCard className="w-6 h-6" /> }
            ].map((metric, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
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
            Ready to build your e-commerce success story?
          </h2>
          <p className="text-xl mb-8 text-foreground/70 max-w-2xl mx-auto">
            Get a free consultation and see how we can create a high-converting online store for your business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-warm-orange hover:shadow-lg">
                Start Your E-commerce Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/services/ecommerce">
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                E-commerce Services
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

export default EcommercePortfolioPage