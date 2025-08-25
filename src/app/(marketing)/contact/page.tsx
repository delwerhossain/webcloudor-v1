import type { Metadata } from "next"
import { ContactForm } from "@/components/forms/ContactForm"
import { SectionContainer } from "@/components/ui/section-container"

export const metadata: Metadata = {
  title: "Contact WebCloudor | Let's Build Something Amazing Together",
  description: "Ready to start your next web project? Get in touch with WebCloudor's expert team. Free consultation, fast response, and transparent communication guaranteed.",
  keywords: ["contact webcloudor", "web development consultation", "project inquiry", "get quote", "hire developers", "startup development", "enterprise solutions"],
  openGraph: {
    title: "Contact WebCloudor | Let's Build Something Amazing Together",
    description: "Ready to start your next web project? Get in touch with WebCloudor's expert team.",
    url: "https://webcloudor.com/contact",
    siteName: "WebCloudor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact WebCloudor",
    description: "Ready to start your next web project? Get in touch with our expert team.",
  },
  alternates: {
    canonical: "/contact",
  },
}

const ContactPage = () => {
  return (
    <>
      {/* Hero Section */}
      <SectionContainer background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B365D] mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your vision into reality? Whether you're a startup with a bold idea 
            or an enterprise looking to innovate, we're here to help you ship faster, convert more, 
            and scale with confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1B365D] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Fast Response</h3>
              <p className="text-slate-600">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1B365D] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Free Consultation</h3>
              <p className="text-slate-600">No-cost discovery call to understand your needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1B365D] rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-2">Proven Results</h3>
              <p className="text-slate-600">50+ successful projects, 99% on-time delivery</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contact Form Section */}
      <SectionContainer background="gray" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1B365D] mb-4">
                  Start Your Project Today
                </h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours 
                  with a personalized plan for your project.
                </p>
              </div>
              
              <ContactForm source="contact-page" />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[#1B365D] mb-6">
                  Why Choose WebCloudor?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1B365D] mb-1">AI-First Development</h4>
                      <p className="text-sm text-slate-600">Leverage cutting-edge AI tools to ship 3x faster</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1B365D] mb-1">Conversion-Focused</h4>
                      <p className="text-sm text-slate-600">Every design decision optimized for business results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1B365D] mb-1">Enterprise-Grade Security</h4>
                      <p className="text-sm text-slate-600">Bank-level security and compliance standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 text-green-600 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1B365D] mb-1">Dedicated Support</h4>
                      <p className="text-sm text-slate-600">Direct access to your project team via Slack</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1B365D] mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-[#1B365D]">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1B365D]">Email</p>
                      <a href="mailto:hello@webcloudor.com" className="text-slate-600 hover:text-[#1B365D]">
                        hello@webcloudor.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-[#1B365D]">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1B365D]">Live Chat</p>
                      <p className="text-slate-600">Available 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-[#1B365D]">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1B365D]">Schedule a Call</p>
                      <a href="#" className="text-slate-600 hover:text-[#1B365D]">
                        Book 30-min consultation
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="text-center p-6 bg-[#1B365D] text-white rounded-xl">
                <h3 className="text-lg font-semibold mb-2">⚡ Lightning Fast Response</h3>
                <p className="text-blue-100">
                  We typically respond within 2-4 hours during business hours.
                  For urgent projects, we offer same-day consultation calls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer background="white" padding="large">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B365D] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions about working with WebCloudor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-3">
                How quickly can you start my project?
              </h3>
              <p className="text-slate-600 mb-6">
                Most projects begin within 1-2 weeks of contract signing. For urgent projects, 
                we can often start within 48 hours with our rapid-start program.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-3">
                What's your typical project timeline?
              </h3>
              <p className="text-slate-600 mb-6">
                Simple sites: 2-4 weeks. Complex applications: 6-12 weeks. 
                We provide detailed timelines during our discovery call.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-3">
                Do you work with startups?
              </h3>
              <p className="text-slate-600 mb-6">
                Absolutely! We love working with startups and offer special MVP packages 
                to help you validate your idea and attract investors quickly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#1B365D] mb-3">
                What if I'm not technical?
              </h3>
              <p className="text-slate-600 mb-6">
                Perfect! We specialize in translating business requirements into technical solutions. 
                We'll guide you through every step in plain English.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}

export default ContactPage