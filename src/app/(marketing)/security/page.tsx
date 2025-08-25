import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Lock, Eye, CheckCircle, AlertTriangle, Key, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Security | WebCloudor',
  description: 'Enterprise-grade security measures and protocols. Learn about our comprehensive approach to protecting your data and applications.',
  keywords: ['security', 'data protection', 'encryption', 'compliance', 'cybersecurity', 'secure development'],
  openGraph: {
    title: 'Security | WebCloudor',
    description: 'Enterprise-grade security and data protection',
    type: 'website',
  }
}

const securityMeasures = [
  {
    title: "End-to-End Encryption",
    description: "All data is encrypted both in transit and at rest using industry-standard AES-256 encryption",
    icon: <Lock className="w-6 h-6" />,
    features: [
      "AES-256 encryption at rest",
      "TLS 1.3 for data in transit",
      "Zero-knowledge architecture",
      "Encrypted database backups"
    ]
  },
  {
    title: "Access Control & Authentication",
    description: "Multi-layered authentication and authorization systems protect against unauthorized access",
    icon: <Key className="w-6 h-6" />,
    features: [
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "Single sign-on (SSO) integration",
      "Session management & timeout"
    ]
  },
  {
    title: "Infrastructure Security",
    description: "Secure cloud infrastructure with regular monitoring and automated threat detection",
    icon: <Server className="w-6 h-6" />,
    features: [
      "AWS/GCP security groups",
      "Network segmentation",
      "Intrusion detection systems",
      "DDoS protection & mitigation"
    ]
  },
  {
    title: "Code Security & Auditing",
    description: "Comprehensive security testing and code review processes throughout development",
    icon: <Eye className="w-6 h-6" />,
    features: [
      "Static code analysis (SAST)",
      "Dynamic security testing (DAST)",
      "Dependency vulnerability scanning",
      "Regular penetration testing"
    ]
  }
]

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Independently audited security, availability, and confidentiality controls",
    status: "Certified",
    color: "text-green-600"
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems",
    status: "Compliant",
    color: "text-blue-600"
  },
  {
    name: "GDPR Compliance",
    description: "Full compliance with European data protection regulations",
    status: "Certified",
    color: "text-green-600"
  },
  {
    name: "HIPAA Ready",
    description: "Healthcare-grade security controls for protected health information",
    status: "Available",
    color: "text-purple-600"
  }
]

const securityStats = [
  {
    metric: "99.99%",
    label: "Uptime SLA",
    description: "Guaranteed availability"
  },
  {
    metric: "< 24h",
    label: "Vulnerability Response",
    description: "Critical issue resolution"
  },
  {
    metric: "256-bit",
    label: "AES Encryption",
    description: "Military-grade security"
  }
]

const securityPolicies = [
  {
    title: "Data Privacy Policy",
    description: "How we collect, use, and protect your personal information",
    lastUpdated: "December 2024"
  },
  {
    title: "Incident Response Plan",
    description: "Our procedures for handling security incidents and breaches",
    lastUpdated: "November 2024"
  },
  {
    title: "Access Control Policy",
    description: "Guidelines for user access, authentication, and authorization",
    lastUpdated: "December 2024"
  },
  {
    title: "Data Retention Policy",
    description: "How long we keep different types of data and when we delete it",
    lastUpdated: "October 2024"
  }
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-red-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Security Center</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Security
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your data and applications are protected by comprehensive security measures, 
              industry certifications, and continuous monitoring systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Security Audit Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Shield className="w-4 h-4 mr-2" />
                View Certifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {securityStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.metric}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Security Measures</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multi-layered security approach protecting every aspect of your data and applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                      {measure.icon}
                    </div>
                    <CardTitle className="text-xl">{measure.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{measure.description}</p>
                    <div className="space-y-2">
                      {measure.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Certifications & Compliance</h2>
              <p className="text-xl text-gray-600">Independently verified security standards and certifications</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-gray-600" />
                      </div>
                      <Badge variant="outline" className={cert.color}>
                        {cert.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Policies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Policies & Procedures</h2>
              <p className="text-xl text-gray-600">Transparent policies governing our security practices</p>
            </div>

            <div className="space-y-4">
              {securityPolicies.map((policy, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{policy.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{policy.description}</p>
                        <p className="text-xs text-gray-500">Last updated: {policy.lastUpdated}</p>
                      </div>
                      <Button variant="outline">
                        View Policy
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertTriangle className="w-6 h-6" />
                  Security Incident Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800 mb-6">
                  We maintain a comprehensive incident response plan to quickly identify, contain, 
                  and resolve any security issues that may arise.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">Response Timeline</h4>
                    <div className="space-y-2">
                      {[
                        "Detection: Within 15 minutes",
                        "Assessment: Within 1 hour", 
                        "Containment: Within 4 hours",
                        "Resolution: Within 24 hours"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-3">Communication</h4>
                    <div className="space-y-2">
                      {[
                        "Immediate stakeholder notification",
                        "Regular status updates",
                        "Post-incident analysis report",
                        "Preventive measures implementation"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/80 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Security Hotline:</strong> If you discover a security vulnerability, 
                    please report it immediately to{' '}
                    <a href="mailto:security@webcloudor.com" className="underline font-medium">
                      security@webcloudor.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Security CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Our Security?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our security team is available to discuss our measures, certifications, and 
              how we can meet your specific security requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Contact Security Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-700">
                  Schedule Security Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}