import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Server, GitBranch, Shield, Gauge, Workflow, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'DevOps & Deployment Services | CI/CD & Cloud Infrastructure',
  description: 'Professional DevOps services including CI/CD pipelines, cloud deployment, monitoring, and infrastructure automation for scalable applications.',
  keywords: ['DevOps services', 'CI/CD', 'cloud deployment', 'Docker', 'Kubernetes', 'infrastructure automation'],
  openGraph: {
    title: 'DevOps & Deployment Services | WebCloudor',
    description: 'Streamline your development workflow with expert DevOps solutions',
    type: 'website',
  }
}

const devopsServices = [
  {
    title: "CI/CD Pipeline Setup",
    description: "Automated build, test, and deployment pipelines that ensure fast, reliable releases.",
    icon: <GitBranch className="w-6 h-6" />,
    features: ["GitHub Actions", "Jenkins", "GitLab CI", "Automated Testing", "Code Quality Gates"]
  },
  {
    title: "Cloud Infrastructure", 
    description: "Scalable cloud infrastructure on AWS, Google Cloud, and Azure with infrastructure as code.",
    icon: <Cloud className="w-6 h-6" />,
    features: ["Terraform", "CloudFormation", "Multi-cloud", "Auto-scaling", "Load Balancing"]
  },
  {
    title: "Container Orchestration",
    description: "Docker containerization and Kubernetes orchestration for scalable microservices architecture.",
    icon: <Server className="w-6 h-6" />,
    features: ["Docker", "Kubernetes", "Container Registry", "Helm Charts", "Service Mesh"]
  },
  {
    title: "Monitoring & Observability",
    description: "Comprehensive monitoring, logging, and alerting systems for proactive issue resolution.",
    icon: <Gauge className="w-6 h-6" />,
    features: ["Prometheus", "Grafana", "ELK Stack", "APM", "Custom Dashboards"]
  },
  {
    title: "Security & Compliance",
    description: "DevSecOps practices with automated security scanning and compliance monitoring.",
    icon: <Shield className="w-6 h-6" />,
    features: ["Security Scanning", "Vulnerability Assessment", "Compliance Automation", "Secret Management"]
  },
  {
    title: "Workflow Automation",
    description: "Custom automation workflows that streamline development and operations processes.",
    icon: <Workflow className="w-6 h-6" />,
    features: ["Custom Scripts", "API Integration", "Workflow Orchestration", "Process Automation"]
  }
]

const benefits = [
  {
    title: "Faster Deployments",
    description: "Reduce deployment time from hours to minutes with automated pipelines",
    metric: "90%",
    label: "faster releases"
  },
  {
    title: "Improved Reliability",
    description: "Minimize downtime and errors with comprehensive testing and monitoring",
    metric: "99.9%",
    label: "uptime achieved"
  },
  {
    title: "Cost Optimization",
    description: "Optimize cloud costs through automation and resource management",
    metric: "40%",
    label: "cost reduction"
  }
]

export default function DevOpsServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 md:pt-28 lg:pt-24 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">DevOps & Deployment</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Streamline Your 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Development Workflow
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Professional DevOps services that accelerate development, improve reliability, 
              and scale your infrastructure with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get DevOps Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">View Case Studies</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end DevOps solutions for modern development teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Impact</h2>
              <p className="text-xl text-gray-600">Measurable improvements for your development process</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{benefit.metric}</div>
                  <div className="text-sm text-gray-500 mb-4">{benefit.label}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our DevOps Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Assessment", desc: "Audit current infrastructure and processes" },
                { step: "2", title: "Strategy", desc: "Design optimized DevOps workflows" },
                { step: "3", title: "Implementation", desc: "Deploy automation and monitoring" },
                { step: "4", title: "Optimization", desc: "Continuous improvement and scaling" }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-6 left-[calc(100%-1.5rem)] w-6 h-0.5 bg-purple-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Accelerate Your Development?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free DevOps assessment and discover how we can optimize your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Free Assessment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}