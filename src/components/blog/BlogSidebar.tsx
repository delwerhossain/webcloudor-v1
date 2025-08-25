import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Category } from '@/sanity/lib/types'
import { CategoryBadge } from './CategoryBadge'
import { Hash, TrendingUp, Mail } from 'lucide-react'

interface BlogSidebarProps {
  categories: Category[]
  popularTags?: string[]
}

export const BlogSidebar = ({ categories, popularTags }: BlogSidebarProps) => {
  const featuredCategories = categories.filter(cat => cat.featured).slice(0, 8)
  const allCategories = categories.slice(0, 12)

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Categories */}
      <Card className="bg-gradient-to-br from-background to-muted/30 border-border/60">
        <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Hash className="w-4 h-4 sm:w-5 sm:h-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="space-y-2 sm:space-y-3">
            {allCategories.map((category) => (
              <div key={category._id} className="flex items-center justify-between py-1">
                <Link 
                  href={`/blog/category/${category.slug.current}`}
                  className="flex items-center gap-2 text-xs sm:text-sm hover:text-primary transition-colors font-medium text-foreground/80 hover:text-primary"
                >
                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${category.color === 'blue' ? 'bg-primary' : category.color === 'orange' ? 'bg-warm-orange' : category.color === 'yellow' ? 'bg-signal-yellow' : `bg-${category.color}-500`}`} />
                  <span>{category.title}</span>
                </Link>
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-xs px-1.5 py-0.5">
                  {/* @ts-ignore - postCount is added in query */}
                  {category.postCount || 0}
                </Badge>
              </div>
            ))}
            
            <Link 
              href="/blog/categories"
              className="inline-flex items-center justify-center w-full mt-3 sm:mt-4 px-3 py-1.5 rounded-md border border-primary/20 hover:bg-primary/10 transition-colors text-xs sm:text-sm text-foreground/80 hover:text-primary font-medium"
            >
              View All Categories
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      {popularTags && popularTags.length > 0 && (
        <Card className="bg-gradient-to-br from-muted/20 to-muted/40 border-border/60">
          <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              Popular Tags
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  <Badge 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer bg-primary/10 text-primary border-primary/20"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-primary/5 via-primary/5 to-signal-yellow/10 border-primary/20">
        <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <p className="text-xs sm:text-sm text-foreground/70 mb-4">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <Link 
            href="/newsletter"
            className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
          >
            Subscribe to Newsletter
          </Link>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card className="bg-gradient-to-br from-background to-muted/20 border-border/60">
        <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
          <CardTitle className="text-base sm:text-lg">Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <Link 
              href="/blog?featured=true" 
              className="block hover:text-primary transition-colors text-foreground/80 hover:text-primary font-medium"
            >
              Featured Articles
            </Link>
            <Link 
              href="/blog?sort=popular" 
              className="block hover:text-primary transition-colors text-foreground/80 hover:text-primary font-medium"
            >
              Most Popular
            </Link>
            <Link 
              href="/blog?sort=recent" 
              className="block hover:text-primary transition-colors text-foreground/80 hover:text-primary font-medium"
            >
              Recently Published
            </Link>
            <Link 
              href="/blog/authors" 
              className="block hover:text-primary transition-colors text-foreground/80 hover:text-primary font-medium"
            >
              Our Authors
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}