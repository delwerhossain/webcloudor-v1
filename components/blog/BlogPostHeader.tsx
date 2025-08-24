import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Eye, User, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { urlFor, formatDate } from '@/sanity/lib/utils'
import { BlogPost } from '@/sanity/lib/types'
import { CategoryBadge } from './CategoryBadge'

interface BlogPostHeaderProps {
  post: BlogPost
}

export const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  const imageUrl = post.featuredImage 
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : '/placeholder-blog.jpg'

  return (
    <header className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-primary transition-colors">
          Blog
        </Link>
        <span>/</span>
        {post.categories?.[0] && (
          <>
            <Link 
              href={`/blog/category/${post.categories[0].slug.current}`}
              className="hover:text-primary transition-colors"
            >
              {post.categories[0].title}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="truncate">{post.title}</span>
      </div>

      {/* Back Button */}
      <Button variant="ghost" size="sm" asChild>
        <Link href="/blog" className="gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </Button>

      {/* Categories */}
      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <CategoryBadge key={category._id} category={category} />
          ))}
        </div>
      )}

      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {post.title}
        </h1>
        
        {post.excerpt && (
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        )}
      </div>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
        {post.author && (
          <Link 
            href={`/blog/author/${post.author.slug.current}`}
            className="flex items-center gap-3 hover:text-primary transition-colors"
          >
            {post.author.avatar && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={urlFor(post.author.avatar).width(40).height(40).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-medium text-foreground">{post.author.name}</div>
              {post.author.shortBio && (
                <div className="text-sm">{post.author.shortBio}</div>
              )}
            </div>
          </Link>
        )}
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              Published {formatDate(post.publishedAt)}
            </time>
          </div>

          {post.updatedAt && post.updatedAt !== post.publishedAt && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.updatedAt}>
                Updated {formatDate(post.updatedAt)}
              </time>
            </div>
          )}

          {post.readingTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
          )}

          {post.viewCount > 0 && (
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.viewCount.toLocaleString()} views</span>
            </div>
          )}
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={post.featuredImage?.alt || post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
        />
        
        {/* Pinned Badge */}
        {post.pinned && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary/90 text-primary-foreground">
              Pinned Post
            </Badge>
          </div>
        )}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
              <Badge 
                variant="outline" 
                className="hover:bg-muted transition-colors cursor-pointer"
              >
                #{tag}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}