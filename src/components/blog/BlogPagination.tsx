'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  searchParams: Record<string, string | undefined>
  basePath?: string
}

export const BlogPagination = ({ 
  currentPage, 
  totalPages, 
  searchParams,
  basePath = '/blog'
}: BlogPaginationProps) => {
  const router = useRouter()

  const createUrl = (page: number) => {
    const params = new URLSearchParams()
    
    // Add existing search params
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && key !== 'page') {
        params.set(key, value)
      }
    })
    
    // Add page param
    if (page > 1) {
      params.set('page', page.toString())
    }
    
    const queryString = params.toString()
    return `${basePath}${queryString ? `?${queryString}` : ''}`
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) {
    return null
  }

  const visiblePages = getVisiblePages()

  return (
    <nav className="flex items-center justify-center gap-1" aria-label="Pagination">
      {/* Previous Button */}
      {currentPage > 1 ? (
        <Link 
          href={createUrl(currentPage - 1)}
          className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors gap-2 text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Link>
      ) : (
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 bg-gray-50 text-gray-400 gap-2 text-sm">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </div>
      )}

      {/* Page Numbers */}
      <div className="hidden sm:flex items-center gap-1">
        {visiblePages.map((page, index) => {
          if (page === '...') {
            return (
              <Button
                key={`dots-${index}`}
                variant="ghost"
                size="sm"
                disabled
                className="w-10 h-10 p-0"
              >
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            )
          }

          const pageNumber = page as number
          const isCurrentPage = pageNumber === currentPage

          return isCurrentPage ? (
            <div
              key={pageNumber}
              className="inline-flex items-center justify-center w-10 h-10 p-0 rounded-md bg-primary text-primary-foreground text-sm font-medium"
              aria-current="page"
            >
              {pageNumber}
            </div>
          ) : (
            <Link
              key={pageNumber}
              href={createUrl(pageNumber)}
              className="inline-flex items-center justify-center w-10 h-10 p-0 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
            >
              {pageNumber}
            </Link>
          )
        })}
      </div>

      {/* Mobile Page Info */}
      <div className="flex sm:hidden items-center px-3">
        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Next Button */}
      {currentPage < totalPages ? (
        <Link 
          href={createUrl(currentPage + 1)}
          className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors gap-2 text-sm"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 bg-gray-50 text-gray-400 gap-2 text-sm">
          Next
          <ChevronRight className="w-4 h-4" />
        </div>
      )}
    </nav>
  )
}