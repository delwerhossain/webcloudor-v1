'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page Error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-red-50 rounded-full flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-red-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] mb-4">
          Something went wrong
        </h1>
        
        <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
          We encountered an unexpected error while loading this page. 
          Our team has been notified and is working to fix this issue.
        </p>

        <div className="space-y-4">
          <Button
            onClick={reset}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Try Again
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-[#64748B]">
              Need help? Contact us at{' '}
              <a 
                href="mailto:hello@webcloudor.com"
                className="text-[#1B365D] hover:underline font-medium"
              >
                hello@webcloudor.com
              </a>
            </p>
          </div>
        </div>

        {/* Debug info for development */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-[#64748B] hover:text-[#1B365D]">
              Error Details (Development)
            </summary>
            <pre className="mt-2 p-4 bg-[#F8FAFC] rounded-lg text-xs text-[#64748B] overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}