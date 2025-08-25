import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, CheckCircle, FileText, Users, Globe, Award, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Compliance | WebCloudor',
  description: 'Comprehensive compliance standards including SOC 2, GDPR, HIPAA, and industry regulations. Enterprise-grade compliance framework.',
  keywords: ['compliance', 'SOC 2', 'GDPR', 'HIPAA', 'regulations', 'audit', 'data governance'],
  openGraph: {
    title: 'Compliance | WebCloudor',
    description: 'Enterprise compliance and regulatory standards',
    type: 'website',
  }
}

const complianceStandards = [
  {
    title: "SOC 2 Type II",
    description: "Comprehensive controls for security, availability, processing integrity, confidentiality, and privacy",
    icon: <Shield className="w-6 h-6" />,
    status: "Certified",
    validUntil: "December 2025",
    color: "bg-green-100 text-green-600",
    features: [
      "Annual third-party audits",
      "Security controls validation",
      "Availability monitoring",
      "Processing integrity checks",
      "Data confidentiality measures"
    ]
  },
  {
    title: "GDPR Compliance",
    description: "Full compliance with European General Data Protection Regulation for data privacy and protection",
    icon: <Globe className="w-6 h-6" />,
    status: "Compliant",
    validUntil: "Ongoing",
    color: "bg-blue-100 text-blue-600",
    features: [
      "Data subject rights",
      "Privacy by design",
      "Data breach notification",
      "Data portability",
      "Right to be forgotten"
    ]
  },
  {
    title: "HIPAA Ready",
    description: "Healthcare compliance framework for protected health information (PHI) handling",
    icon: <FileText className="w-6 h-6" />,
    status: "Available",
    validUntil: "On Request",
    color: "bg-purple-100 text-purple-600",
    features: [
      "PHI encryption at rest & transit",
      "Access controls & audit logs",
      "Business associate agreements",
      "Risk assessments",
      "Incident response procedures"
    ]
  },
  {
    title: "ISO 27001",
    description: "International standard for information security management systems (ISMS)",
    icon: <Award className="w-6 h-6" />,
    status: "In Progress",
    validUntil: "Q2 2025",
    color: "bg-orange-100 text-orange-600",
    features: [
      "Risk management framework",
      "Security policy documentation",
      "Continuous improvement process",
      "Management system controls",
      "Regular internal audits"
    ]
  }
]

const auditProcess = [
  {
    step: "1",
    title: "Planning & Scoping",
    description: "Define audit scope, objectives, and timeline with certified auditors",
    duration: "1-2 weeks"
  },
  {
    step: "2", 
    title: "Evidence Gathering",
    description: "Collect documentation, interview personnel, and review systems",
    duration: "3-4 weeks"
  },
  {
    step: "3",
    title: "Testing & Validation",
    description: "Test security controls and validate compliance measures",
    duration: "2-3 weeks"
  },
  {
    step: "4",
    title: "Reporting & Certification",
    description: "Issue audit report and compliance certifications",
    duration: "1-2 weeks"
  }
]

const dataGovernance = [
  {
    principle: "Data Minimization",
    description: "Collect and process only necessary data for specified purposes",
    implementation: "Automated data collection limits and regular data audits"
  },
  {
    principle: "Purpose Limitation",
    description: "Use data only for the purposes it was originally collected",
    implementation: "Clear data usage policies and system-level controls"
  },
  {
    principle: "Storage Limitation",
    description: "Retain data only as long as necessary for the intended purpose",
    implementation: "Automated data retention policies and deletion schedules"
  },
  {
    principle: "Accuracy & Quality",
    description: "Maintain accurate, up-to-date, and high-quality data",
    implementation: "Data validation rules and regular quality assessments"
  }
]

const complianceStats = [
  {
    metric: "100%",
    label: "Audit Pass Rate",
    description: "Perfect compliance track record"
  },
  {
    metric: "24h",
    label: "Breach Notification",
    description: "Maximum response time"
  },
  {
    metric: "50+",
    label: "Compliance Controls",
    description: "Documented and tested"
  }
]

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Compliance Center</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Comprehensive compliance framework meeting the highest industry standards 
              for security, privacy, and regulatory requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Download Compliance Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <FileText className="w-4 h-4 mr-2" />
                Request Audit Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {complianceStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Standards</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Certified and audited compliance with major industry standards and regulations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceStandards.map((standard, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${standard.color}`}>
                        {standard.icon}
                      </div>
                      <div className="text-right">
                        <Badge variant={standard.status === 'Certified' ? 'default' : 'outline'}>
                          {standard.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">Valid until {standard.validUntil}</p>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{standard.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{standard.description}</p>
                    <div className="space-y-2">
                      {standard.features.map((feature, i) => (
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

      {/* Audit Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Audit Process</h2>
              <p className="text-xl text-gray-600">Rigorous third-party auditing ensures continuous compliance</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {auditProcess.map((phase, index) => (
                <div key={index} className="relative">
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {phase.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{phase.description}</p>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {phase.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                  
                  {index < auditProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Governance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Governance Framework</h2>
              <p className="text-xl text-gray-600">Comprehensive data management principles and practices</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dataGovernance.map((principle, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{principle.principle}</h3>
                        <p className="text-gray-600 mb-3 text-sm">{principle.description}</p>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-blue-800 text-sm font-medium">Implementation:</p>
                          <p className="text-blue-700 text-sm">{principle.implementation}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Monitoring Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Users className="w-6 h-6" />
                  Continuous Compliance Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-6">
                  Our compliance program includes continuous monitoring and regular assessments 
                  to ensure ongoing adherence to all applicable standards and regulations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Automated Monitoring</h4>
                    <div className="space-y-2">
                      {[
                        "Real-time compliance dashboard",
                        "Automated control testing",
                        "Continuous risk assessment",
                        "Alert notifications"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-3">Regular Reviews</h4>
                    <div className="space-y-2">
                      {[
                        "Quarterly compliance reviews",
                        "Annual third-party audits",
                        "Management attestations",
                        "Remediation tracking"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Compliance Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you meet your compliance requirements with our proven framework 
              and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Compliance Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
                  Contact Compliance Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}