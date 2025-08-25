import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code2, Shield, Zap, Key, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'API Reference | WebCloudor Documentation',
  description: 'Complete WebCloudor API reference with authentication, endpoints, examples, and error codes. RESTful API documentation for developers.',
  keywords: ['API reference', 'REST API', 'WebCloudor API', 'endpoints', 'authentication', 'API documentation'],
  openGraph: {
    title: 'API Reference | WebCloudor',
    description: 'Complete API reference and documentation',
    type: 'website',
  }
}

const endpoints = [
  {
    method: 'GET',
    path: '/api/v1/projects',
    description: 'List all projects',
    auth: 'Required'
  },
  {
    method: 'POST',
    path: '/api/v1/projects',
    description: 'Create a new project',
    auth: 'Required'
  },
  {
    method: 'GET',
    path: '/api/v1/projects/{id}',
    description: 'Get project details',
    auth: 'Required'
  },
  {
    method: 'PUT',
    path: '/api/v1/projects/{id}',
    description: 'Update project',
    auth: 'Required'
  },
  {
    method: 'DELETE',
    path: '/api/v1/projects/{id}',
    description: 'Delete project',
    auth: 'Required'
  },
  {
    method: 'GET',
    path: '/api/v1/analytics',
    description: 'Get analytics data',
    auth: 'Required'
  }
]

const errorCodes = [
  { code: '200', message: 'OK', description: 'Request successful' },
  { code: '201', message: 'Created', description: 'Resource created successfully' },
  { code: '400', message: 'Bad Request', description: 'Invalid request parameters' },
  { code: '401', message: 'Unauthorized', description: 'Authentication required' },
  { code: '403', message: 'Forbidden', description: 'Insufficient permissions' },
  { code: '404', message: 'Not Found', description: 'Resource not found' },
  { code: '429', message: 'Too Many Requests', description: 'Rate limit exceeded' },
  { code: '500', message: 'Internal Server Error', description: 'Server error occurred' }
]

export default function APIReferencePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-green-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">API Reference</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              RESTful API 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Reference
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Complete API documentation with examples, authentication, and error handling. 
              Built for developers, designed for scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Try Interactive API
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Code2 className="w-4 h-4 mr-2" />
                Download Postman Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Authentication</h2>
              <p className="text-xl text-gray-600">Secure API access using API keys</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5" />
                  API Key Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Include your API key in the Authorization header for all requests:
                </p>
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.webcloudor.com/v1/projects`}</pre>
                </div>
                <div className="flex items-start gap-2 mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">Security Note</p>
                    <p className="text-sm text-blue-700">
                      Keep your API keys secure and never expose them in client-side code.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Endpoints Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">API Endpoints</h2>
              <p className="text-xl text-gray-600">Complete list of available endpoints</p>
            </div>

            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Badge 
                          variant={endpoint.method === 'GET' ? 'secondary' : 
                                  endpoint.method === 'POST' ? 'default' :
                                  endpoint.method === 'PUT' ? 'outline' : 'destructive'}
                        >
                          {endpoint.method}
                        </Badge>
                        <code className="text-lg font-mono text-slate-800">{endpoint.path}</code>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {endpoint.auth}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{endpoint.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rate Limiting Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Rate Limiting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">1,000</div>
                    <p className="text-sm text-gray-600">Requests per hour</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">100</div>
                    <p className="text-sm text-gray-600">Concurrent requests</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-2">10MB</div>
                    <p className="text-sm text-gray-600">Max request size</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Rate limiting is enforced per API key. Headers include current usage information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Error Codes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Error Codes</h2>
              <p className="text-xl text-gray-600">Standard HTTP status codes and meanings</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {errorCodes.map((error, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        {error.code.startsWith('2') ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        )}
                        <code className="font-bold text-lg">{error.code}</code>
                      </div>
                      <div>
                        <div className="font-semibold">{error.message}</div>
                        <div className="text-sm text-gray-600">{error.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get your API key and start integrating WebCloudor into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get API Key
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/support">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}