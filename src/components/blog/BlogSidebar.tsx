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
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="w-5 h-5" />
            Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {allCategories.map((category) => (
              <div key={category._id} className="flex items-center justify-between">
                <Link 
                  href={`/blog/category/${category.slug.current}`}
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full bg-${category.color}-500`} />
                  <span>{category.title}</span>
                </Link>
                <Badge variant="outline">
                  {/* @ts-ignore - postCount is added in query */}
                  {category.postCount || 0}
                </Badge>
              </div>
            ))}
            
            <Link 
              href="/blog/categories"
              className="inline-flex items-center justify-center w-full mt-4 px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
            >
              View All Categories
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      {popularTags && popularTags.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Popular Tags
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                  <Badge 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
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
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest articles and insights delivered to your inbox.
          </p>
          <Link 
            href="/newsletter"
            className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </CardContent>
      </Card>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <Link 
              href="/blog?featured=true" 
              className="block hover:text-primary transition-colors"
            >
              Featured Articles
            </Link>
            <Link 
              href="/blog?sort=popular" 
              className="block hover:text-primary transition-colors"
            >
              Most Popular
            </Link>
            <Link 
              href="/blog?sort=recent" 
              className="block hover:text-primary transition-colors"
            >
              Recently Published
            </Link>
            <Link 
              href="/blog/authors" 
              className="block hover:text-primary transition-colors"
            >
              Our Authors
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}