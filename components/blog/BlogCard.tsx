import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Eye, User, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { urlFor, formatDate } from '@/sanity/lib/utils'
import { BlogPost } from '@/sanity/lib/types'
import { CategoryBadge } from './CategoryBadge'

interface BlogCardProps {
  post: BlogPost
  variant?: 'default' | 'featured' | 'compact'
  showAuthor?: boolean
  showStats?: boolean
}

export const BlogCard = ({ 
  post, 
  variant = 'default', 
  showAuthor = true,
  showStats = true 
}: BlogCardProps) => {
  const imageUrl = post.featuredImage 
    ? urlFor(post.featuredImage).width(600).height(400).url() 
    : '/placeholder-blog.jpg'

  const cardClasses = {
    default: 'h-full',
    featured: 'h-full bg-gradient-to-br from-card to-card/50 border-2',
    compact: 'h-full'
  }

  const imageClasses = {
    default: 'aspect-[3/2]',
    featured: 'aspect-[16/9]',
    compact: 'aspect-[4/3]'
  }

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${cardClasses[variant]}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <Link href={`/blog/${post.slug.current}`}>
          <div className={`relative ${imageClasses[variant]} overflow-hidden bg-muted`}>
            <Image
              src={imageUrl}
              alt={post.featuredImage?.alt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {post.pinned && (
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                  Pinned
                </Badge>
              </div>
            )}
            {post.featured && (
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-orange-500/90 text-white">
                  Featured
                </Badge>
              </div>
            )}
          </div>
        </Link>
      </div>

      <CardContent className="p-6">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <CategoryBadge key={category._id} category={category} />
            ))}
          </div>
        )}

        <Link href={`/blog/${post.slug.current}`}>
          <h3 className={`font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors
            ${variant === 'featured' ? 'text-2xl' : 'text-xl'}
          `}>
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {showAuthor && post.author && (
            <Link 
              href={`/blog/author/${post.author.slug.current}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </Link>
          )}
          
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>

          {post.readingTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
          )}

          {showStats && post.viewCount > 0 && (
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.viewCount.toLocaleString()}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button variant="ghost" className="w-full group/btn" asChild>
          <Link href={`/blog/${post.slug.current}`}>
            Read Article
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}