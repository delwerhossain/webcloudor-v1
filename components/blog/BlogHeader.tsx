import Link from 'next/link'
import { Search, Filter, TrendingUp, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SearchForm } from './SearchForm'

export const BlogHeader = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border-b">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            WebCloudor Blog
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
            Insights & Innovation
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Expert perspectives on web development, cloud computing, AI integration, 
            and the future of digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SearchForm />
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog?featured=true">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Featured
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog/categories">
                  <Filter className="w-4 h-4 mr-2" />
                  Categories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500/5 rounded-full blur-xl" />
      </div>
    </section>
  )
}