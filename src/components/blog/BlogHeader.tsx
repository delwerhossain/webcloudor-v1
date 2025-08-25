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
      
      <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary border border-primary/20 text-sm font-medium mb-8 hover:bg-primary/15 transition-colors">
            <BookOpen className="w-4 h-4 mr-2.5" />
            <span>WebCloudor Blog</span>
            <Sparkles className="w-3.5 h-3.5 ml-2.5 opacity-70" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-gray-900 via-gray-900 to-primary dark:from-gray-100 dark:via-gray-100 dark:to-primary bg-clip-text text-transparent">
              Insights &
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-primary dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-light px-2">
            Expert perspectives on web development, cloud computing, AI integration, 
            and the future of digital transformation. Stay ahead of the curve with 
            actionable insights from industry leaders.
          </p>
          
          {/* Search and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8">
            <div className="w-full sm:w-auto max-w-md">
              <SearchForm />
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <Link 
                href="/blog?featured=true"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-md border bg-background/80 hover:bg-background border-border/60 hover:border-border shadow-sm transition-colors text-sm sm:text-base"
              >
                <TrendingUp className="w-4 h-4 mr-1.5 sm:mr-2.5" />
                <span className="hidden xs:inline">Featured</span>
                <span className="xs:hidden">New</span>
              </Link>
              
              <Link 
                href="/blog/categories"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-md border bg-background/80 hover:bg-background border-border/60 hover:border-border shadow-sm transition-colors text-sm sm:text-base"
              >
                <Filter className="w-4 h-4 mr-1.5 sm:mr-2.5" />
                <span className="hidden xs:inline">Categories</span>
                <span className="xs:hidden">Cat</span>
              </Link>
              
              <ThemeToggle />
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-foreground/60">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="whitespace-nowrap">Updated Weekly</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="whitespace-nowrap">50+ Articles</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="whitespace-nowrap">Expert Authors</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-24 left-8 w-32 h-32 bg-gradient-to-r from-primary/10 to-signal-yellow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-48 right-16 w-40 h-40 bg-gradient-to-r from-primary-blue/8 to-primary/8 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-24 left-1/3 w-36 h-36 bg-gradient-to-r from-signal-yellow/8 to-warm-orange/8 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}