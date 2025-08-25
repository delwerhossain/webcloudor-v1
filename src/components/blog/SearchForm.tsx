'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, TrendingUp } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const popularSearches = [
  'React', 'Next.js', 'TypeScript', 'Cloud Computing', 'AI Integration', 'DevOps'
]

export const SearchForm = () => {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query.trim())}`)
      setIsFocused(false)
      inputRef.current?.blur()
    }
  }

  const handlePopularSearch = (term: string) => {
    setQuery(term)
    router.push(`/blog?search=${encodeURIComponent(term)}`)
    setIsFocused(false)
  }

  const clearSearch = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  return (
    <div className="relative w-full max-w-sm sm:max-w-lg">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative group">
          <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/60 group-focus-within:text-primary transition-colors" />
          
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="pl-10 sm:pl-12 pr-16 sm:pr-20 h-10 sm:h-12 text-sm sm:text-base bg-background/80 border-border/60 hover:border-border focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-sm transition-all duration-200"
          />
          
          <div className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-0.5 sm:gap-1">
            {query && (
              <Button
                type="button"
                size="sm"
                variant="ghost"
                onClick={clearSearch}
                className="w-6 h-6 sm:w-8 sm:h-8 p-0 hover:bg-muted/50"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
            
            <Button
              type="submit"
              size="sm"
              className="w-6 h-6 sm:w-8 sm:h-8 p-0 bg-primary hover:bg-primary/90 shadow-sm"
              disabled={!query.trim()}
            >
              <Search className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </form>

      {/* Popular Searches Dropdown */}
      {isFocused && !query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-50 p-3 sm:p-4 animate-in fade-in-0 slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Popular searches</span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => handlePopularSearch(term)}
                className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-primary/50"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}