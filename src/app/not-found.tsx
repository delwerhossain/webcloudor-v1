import Link from 'next/link'
import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold text-[#1B365D] opacity-20 mb-4">
            404
          </div>
          <div className="w-24 h-24 mx-auto bg-[#FFC300] rounded-full flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-[#0A0A0B]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 8h6m-3-5.5a.5.5 0 01-.5-.5V9.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V14a.5.5 0 01-.5.5H12z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] mb-4">
          Page Not Found
        </h1>
        
        <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
          The page you're looking for doesn't exist. It might have been moved, 
          deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <Link href="/">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Back to Homepage
            </Button>
          </Link>
          
          <div className="text-center">
            <p className="text-sm text-[#64748B]">
              Need help finding something?{' '}
              <a 
                href="mailto:hello@webcloudor.com"
                className="text-[#1B365D] hover:underline font-medium"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>

        {/* Popular pages */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#64748B] mb-4">
            Popular Pages
          </h3>
          <div className="space-y-2">
            <Link 
              href="/services"
              className="block text-sm text-[#1B365D] hover:underline"
            >
              Our Services
            </Link>
            <Link 
              href="/portfolio"
              className="block text-sm text-[#1B365D] hover:underline"
            >
              Portfolio
            </Link>
            <Link 
              href="/about"
              className="block text-sm text-[#1B365D] hover:underline"
            >
              About Us
            </Link>
            <Link 
              href="/contact"
              className="block text-sm text-[#1B365D] hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}