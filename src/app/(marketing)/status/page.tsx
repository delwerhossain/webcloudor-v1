import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, AlertTriangle, XCircle, Clock, Activity, Server, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'System Status | WebCloudor',
  description: 'Real-time system status and uptime monitoring. Check the current operational status of all WebCloudor services and infrastructure.',
  keywords: ['system status', 'uptime', 'monitoring', 'service health', 'infrastructure'],
  openGraph: {
    title: 'System Status | WebCloudor',
    description: 'Real-time system status and service monitoring',
    type: 'website',
  }
}

const systemServices = [
  {
    name: "API Services",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "None",
    responseTime: "45ms",
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "Web Application",
    status: "operational", 
    uptime: "99.98%",
    lastIncident: "12 days ago",
    responseTime: "128ms",
    icon: <Globe className="w-5 h-5" />
  },
  {
    name: "Database Cluster",
    status: "operational",
    uptime: "100%",
    lastIncident: "45 days ago",
    responseTime: "12ms",
    icon: <Server className="w-5 h-5" />
  },
  {
    name: "CDN & Static Assets",
    status: "operational",
    uptime: "99.97%",
    lastIncident: "3 days ago",
    responseTime: "89ms",
    icon: <Activity className="w-5 h-5" />
  },
  {
    name: "Authentication Service",
    status: "operational",
    uptime: "99.99%",
    lastIncident: "None",
    responseTime: "67ms",
    icon: <CheckCircle className="w-5 h-5" />
  },
  {
    name: "Email Service",
    status: "degraded",
    uptime: "98.45%",
    lastIncident: "Currently",
    responseTime: "2.3s",
    icon: <AlertTriangle className="w-5 h-5" />
  }
]

const recentIncidents = [
  {
    title: "Email Service Delays",
    status: "investigating",
    severity: "minor",
    startTime: "2024-12-20 14:30 UTC",
    description: "Some users may experience delays in email notifications. We are investigating the issue.",
    updates: [
      {
        time: "14:45 UTC",
        message: "We have identified the issue and are working on a fix."
      },
      {
        time: "14:30 UTC", 
        message: "We are investigating reports of email delivery delays."
      }
    ]
  },
  {
    title: "CDN Performance Degradation",
    status: "resolved",
    severity: "minor",
    startTime: "2024-12-17 09:15 UTC",
    endTime: "2024-12-17 10:30 UTC",
    description: "Brief performance degradation affecting static asset delivery in the EU region.",
    updates: [
      {
        time: "10:30 UTC",
        message: "Issue resolved. All services operating normally."
      },
      {
        time: "09:45 UTC",
        message: "Implementing fix for CDN performance issues."
      },
      {
        time: "09:15 UTC",
        message: "Investigating reports of slow asset loading in EU region."
      }
    ]
  }
]

const uptimeStats = [
  {
    period: "Last 24 Hours",
    uptime: "99.98%",
    color: "text-green-600"
  },
  {
    period: "Last 7 Days", 
    uptime: "99.95%",
    color: "text-green-600"
  },
  {
    period: "Last 30 Days",
    uptime: "99.91%",
    color: "text-green-600"
  },
  {
    period: "Last 90 Days",
    uptime: "99.87%",
    color: "text-green-600"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'operational':
      return <CheckCircle className="w-4 h-4 text-green-500" />
    case 'degraded':
      return <AlertTriangle className="w-4 h-4 text-yellow-500" />
    case 'outage':
      return <XCircle className="w-4 h-4 text-red-500" />
    default:
      return <Clock className="w-4 h-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'operational':
      return 'text-green-600 bg-green-50 border-green-200'
    case 'degraded':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200'  
    case 'outage':
      return 'text-red-600 bg-red-50 border-red-200'
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200'
  }
}

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-700'
    case 'major':
      return 'bg-orange-100 text-orange-700'
    case 'minor':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">System Status</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              All Systems
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Operational
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Real-time monitoring of all WebCloudor services and infrastructure. 
              Get updates on system performance and any ongoing incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Subscribe to Updates
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Activity className="w-4 h-4 mr-2" />
                View Historical Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">All Systems Operational</span>
              </div>
              <p className="text-gray-600">Last updated: {new Date().toLocaleString()}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {uptimeStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.uptime}</div>
                  <div className="text-sm text-gray-600">{stat.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Services Status */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Status</h2>
              <p className="text-xl text-gray-600">Current operational status of all services</p>
            </div>

            <div className="space-y-4">
              {systemServices.map((service, index) => (
                <Card key={index} className={`border-l-4 ${getStatusColor(service.status)}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {service.icon}
                          <span className="font-semibold text-lg">{service.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(service.status)}
                          <Badge 
                            variant={service.status === 'operational' ? 'default' : service.status === 'degraded' ? 'secondary' : 'destructive'}
                          >
                            {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Uptime:</span> {service.uptime}
                        </div>
                        <div>
                          <span className="font-medium">Response:</span> {service.responseTime}
                        </div>
                        <div>
                          <span className="font-medium">Last Incident:</span> {service.lastIncident}
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

      {/* Recent Incidents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Incidents</h2>
              <p className="text-xl text-gray-600">Latest updates on system incidents and resolutions</p>
            </div>

            <div className="space-y-6">
              {recentIncidents.map((incident, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg mb-2">{incident.title}</CardTitle>
                        <p className="text-gray-600 text-sm">{incident.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge 
                          variant={incident.status === 'resolved' ? 'default' : incident.status === 'investigating' ? 'secondary' : 'destructive'}
                        >
                          {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                        </Badge>
                        <Badge variant="outline" className={getSeverityColor(incident.severity)}>
                          {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span>Started: {incident.startTime}</span>
                      {incident.endTime && <span> • Resolved: {incident.endTime}</span>}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm">Updates:</h4>
                      {incident.updates.map((update, i) => (
                        <div key={i} className="flex gap-3 text-sm">
                          <div className="flex-shrink-0 w-16 text-gray-500 font-mono">
                            {update.time}
                          </div>
                          <div className="text-gray-700">{update.message}</div>
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

      {/* Subscribe Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-blue-700 mb-4">
                  <Activity className="w-6 h-6" />
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-800 mb-6">
                  Subscribe to status updates and get notified about incidents, maintenance windows, 
                  and service improvements via email or SMS.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Real-time notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Maintenance schedules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Incident resolution</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Subscribe to Email Updates
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-blue-200 hover:bg-blue-50">
                    SMS Notifications
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl mb-8 opacity-90">
              If you are experiencing issues not reflected on this page, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Contact Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/support">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Support Center
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}