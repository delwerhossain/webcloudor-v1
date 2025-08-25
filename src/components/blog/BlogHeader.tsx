import Link from 'next/link'
import { Search, Filter, TrendingUp, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { SearchForm } from './SearchForm'

export const BlogHeader = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/[0.02] to-signal-yellow/[0.03] border-b border-border/40">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      
      <div className="container relative mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 text-sm font-medium mb-4 hover:bg-primary/15 transition-colors">
            <BookOpen className="w-3.5 h-3.5 mr-2" />
            <span>WebCloudor Blog</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-900 via-gray-900 to-primary dark:from-gray-100 dark:via-gray-100 dark:to-primary bg-clip-text text-transparent">
              Insights & Innovation
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base text-foreground/70 mb-6 leading-relaxed max-w-2xl mx-auto">
            Expert perspectives on web development, cloud computing, and digital transformation.
          </p>
          
          {/* Search and Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4">
            <div className="w-full sm:w-auto max-w-sm">
              <SearchForm />
            </div>
            
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Link 
                href="/blog?featured=true"
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border bg-background/80 hover:bg-background border-border/60 hover:border-border shadow-sm transition-colors text-sm"
              >
                <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
                <span className="hidden xs:inline">Featured</span>
                <span className="xs:hidden">New</span>
              </Link>
              
              <Link 
                href="/blog/categories"
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border bg-background/80 hover:bg-background border-border/60 hover:border-border shadow-sm transition-colors text-sm"
              >
                <Filter className="w-3.5 h-3.5 mr-1.5" />
                <span className="hidden xs:inline">Categories</span>
                <span className="xs:hidden">Cat</span>
              </Link>
              
              <ThemeToggle />
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-foreground/60">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="whitespace-nowrap">Updated Weekly</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="whitespace-nowrap">50+ Articles</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
              <span className="whitespace-nowrap">Expert Authors</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-12 left-8 w-20 h-20 bg-gradient-to-r from-primary/8 to-signal-yellow/8 rounded-full blur-2xl opacity-60" />
        <div className="absolute top-8 right-12 w-24 h-24 bg-gradient-to-r from-primary-blue/6 to-primary/6 rounded-full blur-2xl opacity-50" />
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}