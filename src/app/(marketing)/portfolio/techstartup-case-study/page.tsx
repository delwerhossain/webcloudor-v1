import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'

export const metadata: Metadata = {
  title: 'Portfolio Coming Soon | WebCloudor',
  description: 'We\'re preparing detailed case studies of our recent projects. Check back soon to see our work.',
}

export default function ComingSoonPage() {
  return (
    <main>
      {/* Coming Soon Section */}
      <SectionContainer background="gradient" padding="large">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Portfolio Coming Soon
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We're preparing detailed case studies showcasing our recent projects. 
              Check back soon to see examples of our work.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="text-sm text-gray-500">
              Interested in working with us?
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </SectionContainer>

      {/* What We Do */}
      <SectionContainer background="white" padding="large">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What We Build
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Applications</h3>
              <p className="text-gray-600 text-sm">Modern web apps built with React, Next.js, and TypeScript</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-commerce Stores</h3>
              <p className="text-gray-600 text-sm">Complete online stores with payments and inventory management</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Websites</h3>
              <p className="text-gray-600 text-sm">Professional websites that represent your brand effectively</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </main>
  )
}