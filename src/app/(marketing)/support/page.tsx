import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone, Mail, Clock, CheckCircle, Zap, Users, HeadphonesIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Support | WebCloudor',
  description: 'Get expert support for your WebCloudor projects. 24/7 technical assistance, documentation, and community resources.',
  keywords: ['support', 'help', 'technical assistance', 'customer service', 'documentation'],
  openGraph: {
    title: 'Support | WebCloudor',
    description: 'Expert support and assistance for all your needs',
    type: 'website',
  }
}

const supportOptions = [
  {
    title: "Live Chat Support",
    description: "Get instant help from our technical team via live chat during business hours",
    icon: <MessageCircle className="w-6 h-6" />,
    availability: "9 AM - 6 PM PST",
    responseTime: "< 2 minutes",
    color: "bg-blue-100 text-blue-600",
    badge: "Fastest"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our experts for complex technical issues and urgent matters",
    icon: <Phone className="w-6 h-6" />,
    availability: "24/7 Available",
    responseTime: "Immediate",
    color: "bg-green-100 text-green-600",
    badge: "Premium"
  },
  {
    title: "Email Support",
    description: "Send detailed questions and receive comprehensive responses from our team",
    icon: <Mail className="w-6 h-6" />,
    availability: "24/7 Available",
    responseTime: "< 4 hours",
    color: "bg-purple-100 text-purple-600",
    badge: "Detailed"
  },
  {
    title: "Priority Support",
    description: "Enterprise customers get dedicated support with guaranteed response times",
    icon: <Zap className="w-6 h-6" />,
    availability: "24/7 Available",
    responseTime: "< 30 minutes",
    color: "bg-orange-100 text-orange-600",
    badge: "Enterprise"
  }
]

const faqItems = [
  {
    question: "How do I get started with WebCloudor services?",
    answer: "Schedule a free consultation to discuss your project requirements, and we'll create a customized development plan."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while custom applications may take 6-12 weeks."
  },
  {
    question: "Do you provide ongoing maintenance and updates?",
    answer: "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, and feature enhancements."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Absolutely! We can audit, optimize, or add features to existing applications regardless of the original technology stack."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in Next.js, React, TypeScript, Node.js, Python, cloud platforms (AWS, GCP), and AI/ML integration."
  },
  {
    question: "How do you handle project communication?",
    answer: "We provide regular updates, dedicated project managers, and use collaborative tools to keep you informed throughout the process."
  }
]

const supportStats = [
  {
    metric: "< 2 min",
    label: "Average Response Time",
    description: "Quick response to your queries"
  },
  {
    metric: "99.9%",
    label: "Customer Satisfaction",
    description: "Based on client feedback"
  },
  {
    metric: "24/7",
    label: "Availability",
    description: "Support when you need it"
  }
]

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Support Center</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We're Here to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Help You Succeed
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Expert technical support, comprehensive documentation, and a vibrant community 
              to help you build amazing applications with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Get Support Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <HeadphonesIcon className="w-4 h-4 mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {supportStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.metric}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Support Channel</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to get help, tailored to your needs and urgency level
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {supportOptions.map((option, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 relative">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{option.badge}</Badge>
                  </div>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${option.color}`}>
                      {option.icon}
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span><strong>Available:</strong> {option.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-gray-400" />
                        <span><strong>Response:</strong> {option.responseTime}</span>
                      </div>
                    </div>
                    <Button className="w-full group-hover:bg-green-600 transition-colors">
                      Contact Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-green-600 transition-colors">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Cannot find what you are looking for?</p>
              <Link href="/faq">
                <Button variant="outline">
                  View All FAQs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Self-Help Resources</h2>
              <p className="text-xl text-gray-600">Comprehensive resources to help you succeed</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Documentation</h3>
                  <p className="text-gray-600 mb-4">Comprehensive guides and API references</p>
                  <Link href="/docs">
                    <Button variant="outline" className="w-full">
                      Browse Docs
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Community</h3>
                  <p className="text-gray-600 mb-4">Connect with other developers and experts</p>
                  <Button variant="outline" className="w-full">
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Best Practices</h3>
                  <p className="text-gray-600 mb-4">Industry standards and guidelines</p>
                  <Link href="/best-practices">
                    <Button variant="outline" className="w-full">
                      View Guidelines
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our expert team is ready to assist you with any questions or challenges you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Live Chat
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}