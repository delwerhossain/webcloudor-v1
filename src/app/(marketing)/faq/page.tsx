import { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | WebCloudor',
  description: 'Get answers to common questions about our web development, cloud, and AI services. Learn about our process, pricing, and how we can help your business grow.',
  keywords: ['FAQ', 'web development questions', 'WebCloudor support', 'development process', 'pricing'],
  openGraph: {
    title: 'FAQ | WebCloudor',
    description: 'Common questions about our development services and process',
    type: 'website',
  }
}

const faqCategories = [
  {
    category: 'General Services',
    questions: [
      {
        question: 'What services does WebCloudor offer?',
        answer: 'We offer comprehensive web development services including custom web applications, e-commerce solutions, cloud architecture, AI integration, mobile app development, and DevOps services. Our team specializes in modern technologies like Next.js, React, Node.js, and cloud platforms.'
      },
      {
        question: 'What technologies do you work with?',
        answer: 'We work with cutting-edge technologies including Next.js, React, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Google Cloud, Docker, Kubernetes, and various AI/ML frameworks. We stay updated with the latest industry trends to deliver modern solutions.'
      },
      {
        question: 'Do you work with startups and enterprises?',
        answer: 'Yes, we work with clients ranging from early-stage startups to established enterprises. Our scalable approach allows us to adapt our services to meet the specific needs and budgets of businesses at any stage of growth.'
      }
    ]
  },
  {
    category: 'Project Process',
    questions: [
      {
        question: 'What is your development process?',
        answer: 'Our process involves: 1) Discovery & Planning - understanding your requirements, 2) Design & Architecture - creating wireframes and technical specifications, 3) Development - agile development with regular updates, 4) Testing & QA - comprehensive testing, 5) Deployment & Launch - going live with ongoing support.'
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on complexity. Simple websites typically take 2-4 weeks, custom web applications 6-12 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.'
      },
      {
        question: 'How do you handle project communication?',
        answer: 'We maintain transparent communication through regular updates, scheduled check-ins, and dedicated project management tools. You&apos;ll have direct access to your development team and receive progress reports throughout the project lifecycle.'
      },
      {
        question: 'Can you work with our existing team?',
        answer: 'Absolutely! We often collaborate with in-house teams, existing agencies, or other contractors. We can integrate seamlessly into your workflow and provide support where needed, whether it&apos;s additional development capacity or specialized expertise.'
      }
    ]
  },
  {
    category: 'Pricing & Timeline',
    questions: [
      {
        question: 'How do you price your services?',
        answer: 'We offer both fixed-price projects and ongoing retainer arrangements. Pricing depends on project complexity, timeline, and specific requirements. We provide detailed proposals with transparent pricing after understanding your needs during a free consultation.'
      },
      {
        question: 'Do you offer ongoing support and maintenance?',
        answer: 'Yes, we provide comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We offer various maintenance packages to fit different needs and budgets.'
      },
      {
        question: 'What payment terms do you offer?',
        answer: 'We typically work with milestone-based payments for fixed-price projects and monthly billing for retainer arrangements. We require a deposit to start work, with remaining payments tied to project milestones and deliverables.'
      }
    ]
  },
  {
    category: 'Technical Questions',
    questions: [
      {
        question: 'Do you provide hosting and domain services?',
        answer: 'While we don&apos;t directly provide hosting, we help you choose the best hosting solution for your needs and can manage the setup and deployment. We work with leading cloud providers like AWS, Google Cloud, and Vercel to ensure optimal performance.'
      },
      {
        question: 'How do you ensure website security?',
        answer: 'We implement security best practices including HTTPS encryption, secure coding practices, regular security updates, input validation, authentication systems, and vulnerability assessments. We also provide ongoing security monitoring and updates.'
      },
      {
        question: 'Do you optimize for SEO and performance?',
        answer: 'Yes, all our websites are built with SEO and performance in mind. We implement technical SEO, optimize loading speeds, ensure mobile responsiveness, follow accessibility guidelines, and use modern performance optimization techniques.'
      },
      {
        question: 'Can you help migrate our existing website?',
        answer: 'Absolutely! We have extensive experience with website migrations, including content migration, database transfers, SEO preservation, and minimizing downtime. We ensure a smooth transition while improving performance and functionality.'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Got Questions?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                We&apos;ve Got Answers
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="border border-gray-200 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 text-lg mb-8">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help you with any questions about your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Contact Our Team
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="https://calendly.com/ahsanhabibakik/webcloudor" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    Schedule Free Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold mb-2">Quick Response</h3>
                    <p className="text-sm text-gray-600">We typically respond to inquiries within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Free Consultation</h3>
                    <p className="text-sm text-gray-600">Get expert advice on your project requirements at no cost.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}