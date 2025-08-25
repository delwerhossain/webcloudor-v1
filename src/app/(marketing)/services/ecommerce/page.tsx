import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShoppingCart, CreditCard, BarChart3, Shield, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "E-commerce Solutions | High-Converting Online Stores",
  description: "Professional e-commerce development services. Build secure, fast, and conversion-optimized online stores with modern payment processing and inventory management.",
  keywords: ["e-commerce development", "online store", "payment integration", "inventory management", "conversion optimization"],
  openGraph: {
    title: "E-commerce Solutions | WebCloudor",
    description: "High-converting e-commerce platforms designed to turn browsers into buyers",
    type: "website",
  },
}

const EcommercePage = () => {
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
              <ShoppingCart className="w-4 h-4 mr-2" />
              E-commerce Solutions
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Storefronts{' '}
              <span className="bg-gradient-to-r from-primary to-primary-blue bg-clip-text text-transparent">
                designed to convert
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              High-converting e-commerce platforms that turn browsers into buyers. We build fast, secure, 
              and user-friendly online stores with advanced analytics to help you understand and optimize 
              your customer journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg w-full sm:w-auto min-h-[44px]">
                  Start Your Store
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/portfolio/ecommerce" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 w-full sm:w-auto min-h-[44px]">
                  View E-commerce Projects
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-foreground/60 px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Inventory Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Analytics & Reporting</span>
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
              Complete e-commerce solution with everything you need to sell online
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ShoppingCart className="w-6 h-6" />,
                title: "Custom Storefront Design",
                description: "Beautiful, conversion-optimized store design tailored to your brand"
              },
              {
                icon: <CreditCard className="w-6 h-6" />,
                title: "Secure Payment Processing",
                description: "Multiple payment gateways with fraud protection and PCI compliance"
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Inventory Management System",
                description: "Real-time stock tracking, automated reorder alerts, and supplier integration"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Order Fulfillment Integration",
                description: "Seamless integration with shipping providers and fulfillment services"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Advanced Analytics Dashboard",
                description: "Comprehensive sales analytics, customer insights, and performance tracking"
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Marketing Automation Tools",
                description: "Email marketing, abandoned cart recovery, and customer retention features"
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
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground">
              +127% Online Sales Growth
            </h2>
            
            <p className="text-base sm:text-lg text-foreground/70 mb-8 px-4">
              "WebCloudor rebuilt our e-commerce platform and increased our conversion rate by 45% 
              in just two months. Their attention to user experience details made all the difference."
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">+127%</div>
                <div className="text-sm sm:text-base text-foreground/60">Online Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">+45%</div>
                <div className="text-sm sm:text-base text-foreground/60">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">40%</div>
                <div className="text-sm sm:text-base text-foreground/60">Faster Checkout</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-semibold text-foreground">Sarah Chen, Head of Digital</p>
              <p className="text-foreground/60">MedSupply Co</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Perfect For
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 px-4">
                E-commerce solutions for businesses ready to grow online
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: "Retailers Expanding Online",
                  description: "Brick-and-mortar stores looking to establish a strong online presence"
                },
                {
                  title: "Businesses Launching New Products",
                  description: "Companies introducing new product lines or entering new markets"
                },
                {
                  title: "B2B Commerce Needs",
                  description: "Businesses requiring wholesale pricing, bulk orders, and account management"
                },
                {
                  title: "Custom Checkout Flows",
                  description: "Brands needing specialized checkout processes or unique payment options"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-background border-border/60 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{item.description}</p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Investment & Timeline
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
              Comprehensive e-commerce development with transparent pricing
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-background via-primary/[0.02] to-signal-yellow/[0.05] border-primary/20 shadow-lg">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">From $15,000</div>
                  <div className="text-sm sm:text-base text-foreground/60">Starting price for e-commerce platforms</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-xl sm:text-2xl font-semibold text-foreground mb-2">8-12 weeks</div>
                  <div className="text-sm sm:text-base text-foreground/60">Typical project timeline</div>
                </div>

                <div className="space-y-3 text-left mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm sm:text-base text-foreground/80">Custom storefront design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm sm:text-base text-foreground/80">Secure payment processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm sm:text-base text-foreground/80">Inventory management system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm sm:text-base text-foreground/80">Advanced analytics & reporting</span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary-blue hover:shadow-lg">
                    Start Your E-commerce Store
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to start selling online?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Get a free consultation and see how we can build your high-converting online store
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-signal-yellow text-ink-black hover:bg-signal-yellow/90 w-full sm:w-auto min-h-[44px]">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio/ecommerce" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto min-h-[44px]">
                View E-commerce Projects
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-white/80 px-4">
            <p className="text-sm sm:text-base">hello@webcloudor.com • Response guaranteed within 24 hours</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EcommercePage