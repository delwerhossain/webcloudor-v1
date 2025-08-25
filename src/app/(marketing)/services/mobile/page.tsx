import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Smartphone, Download, Users, Zap, Shield, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Mobile App Development | iOS & Android Apps',
  description: 'Expert mobile app development services for iOS and Android. Custom mobile solutions that engage users and drive business growth.',
  keywords: ['mobile app development', 'iOS apps', 'Android apps', 'React Native', 'Flutter', 'mobile development'],
  openGraph: {
    title: 'Mobile App Development | WebCloudor',
    description: 'Custom mobile apps that delight users and drive business results',
    type: 'website',
  }
}

const mobileServices = [
  {
    title: "Native iOS Development",
    description: "Swift-based iOS apps optimized for iPhone and iPad with native performance and iOS-specific features.",
    icon: <Smartphone className="w-6 h-6" />,
    features: ["Swift/SwiftUI", "App Store Optimization", "iOS Design Guidelines", "Core Data Integration"]
  },
  {
    title: "Native Android Development", 
    description: "Kotlin-based Android apps that leverage Android's unique capabilities and Google Play services.",
    icon: <Globe className="w-6 h-6" />,
    features: ["Kotlin/Jetpack Compose", "Material Design", "Google Services", "Play Store Publishing"]
  },
  {
    title: "Cross-Platform Apps",
    description: "React Native and Flutter apps that work seamlessly across iOS and Android platforms.",
    icon: <Zap className="w-6 h-6" />,
    features: ["React Native", "Flutter", "Shared Codebase", "Platform-Specific UI"]
  },
  {
    title: "App Maintenance & Updates",
    description: "Ongoing support, security updates, and feature enhancements for existing mobile applications.",
    icon: <Shield className="w-6 h-6" />,
    features: ["Security Updates", "Performance Optimization", "Bug Fixes", "Feature Updates"]
  }
]

const benefits = [
  {
    title: "Native Performance",
    description: "Optimized for each platform's specific requirements and capabilities",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "User-Centric Design",
    description: "Intuitive interfaces that follow platform design guidelines",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "App Store Success",
    description: "Optimized for App Store and Google Play approval and ranking",
    icon: <Download className="w-5 h-5" />
  }
]

export default function MobileServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 md:pt-28 lg:pt-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Mobile Development</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mobile Apps That 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Users Love
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Custom iOS and Android apps that engage users and drive business growth. 
              From concept to App Store success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Start Your App Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">View Mobile Portfolio</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Development Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive mobile app development solutions for every business need
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mobileServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Mobile Development</h2>
              <p className="text-xl text-gray-600">Built for performance, designed for users</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss your mobile app vision and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}