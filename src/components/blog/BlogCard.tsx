import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Eye, User, ArrowRight, Bookmark, Heart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { urlFor, formatDate } from '@/sanity/lib/utils'
import { BlogPost, Author, TeamMember } from '@/sanity/lib/types'
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
  const isAuthor = (author: Author | TeamMember): author is Author => {
    return 'expertise' in author
  }
  const imageUrl = post.featuredImage 
    ? urlFor(post.featuredImage).width(600).height(400).url() 
    : null

  const cardClasses = {
    default: 'h-full group/card bg-gradient-to-br from-background via-background to-muted/30',
    featured: 'h-full group/card border-2 border-primary/20 bg-gradient-to-br from-background via-primary/[0.02] to-signal-yellow/[0.05] shadow-lg',
    compact: 'h-full group/card bg-gradient-to-br from-background to-muted/20'
  }

  const imageClasses = {
    default: 'aspect-[4/3] sm:aspect-[3/2]',
    featured: 'aspect-[4/3] sm:aspect-[16/10]',
    compact: 'aspect-[1/1] xs:aspect-[4/3]'
  }

  return (
    <Card className={`${cardClasses[variant]} border border-border/60 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.08] overflow-hidden hover:scale-[1.02]`}>
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Link 
          href={`/blog/${post.slug.current}`}
          className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-t-lg"
          aria-label={`Read article: ${post.title}`}
        >
          <div className={`relative ${imageClasses[variant]} overflow-hidden`}>
            {imageUrl ? (
              <>
                <Image
                  src={imageUrl}
                  alt={post.featuredImage?.alt || post.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover/card:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={variant === 'featured'}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              </>
            ) : (
              // Colorful gradient placeholder
              <div className="w-full h-full bg-gradient-to-br from-primary via-primary/80 to-primary-blue relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-tr from-signal-yellow/20 via-transparent to-warm-orange/20" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/90">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium opacity-90">Article Image</div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              </div>
            )}
            
            {/* Status Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              {post.pinned && (
                <Badge 
                  variant="secondary" 
                  className="bg-primary text-primary-foreground shadow-sm animate-in fade-in-0 slide-in-from-top-2"
                >
                  Pinned
                </Badge>
              )}
              {post.featured && (
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-sm animate-in fade-in-0 slide-in-from-top-2 delay-100"
                >
                  Featured
                </Badge>
              )}
            </div>

            {/* Reading Time Badge */}
            {post.readingTime && variant !== 'compact' && (
              <div className="absolute bottom-4 right-4 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-200">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-sm rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readingTime} min</span>
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>

      <CardContent className="p-4 sm:p-6 pb-3 sm:pb-4 space-y-3 sm:space-y-4">
        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, variant === 'featured' ? 3 : 2).map((category) => (
              <CategoryBadge key={category._id} category={category} size="sm" />
            ))}
          </div>
        )}

        {/* Title */}
        <Link 
          href={`/blog/${post.slug.current}`}
          className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
        >
          <h3 className={`font-bold leading-tight line-clamp-2 group-hover/card:text-primary transition-colors duration-300 ${
            variant === 'featured' 
              ? 'text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3' 
              : variant === 'compact' 
                ? 'text-base sm:text-lg mb-2'
                : 'text-lg sm:text-xl mb-2 sm:mb-3'
          }`}>
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className={`text-muted-foreground leading-relaxed ${
          variant === 'featured' 
            ? 'line-clamp-2 sm:line-clamp-3 text-sm sm:text-base' 
            : 'line-clamp-2 text-xs sm:text-sm'
        }`}>
          {post.excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
          {showAuthor && post.author && (
            <Link 
              href={`/blog/author/${post.author.slug.current}`}
              className="flex items-center gap-1.5 sm:gap-2 hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 rounded-sm"
            >
              {((isAuthor(post.author) && post.author.avatar) || (!isAuthor(post.author) && post.author.profileImage)) && (
                <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={isAuthor(post.author) && post.author.avatar 
                      ? urlFor(post.author.avatar).width(20).height(20).url()
                      : !isAuthor(post.author) && post.author.profileImage
                      ? urlFor(post.author.profileImage).width(20).height(20).url()
                      : '/default-avatar.png'}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <User className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium hidden xs:inline">{post.author.name}</span>
              <span className="font-medium xs:hidden">{post.author.name.split(' ')[0]}</span>
            </Link>
          )}
          
          <div className="flex items-center gap-1 sm:gap-1.5 text-slate-gray">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70" />
            <time dateTime={post.publishedAt} className="font-medium text-foreground/80 text-xs sm:text-sm">
              {formatDate(post.publishedAt)}
            </time>
          </div>

          {showStats && post.viewCount > 0 && (
            <div className="flex items-center gap-1 sm:gap-1.5 text-slate-gray">
              <Eye className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70" />
              <span className="font-medium text-foreground/80 text-xs sm:text-sm">{post.viewCount.toLocaleString()}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-2">
        <div className="flex items-center justify-between w-full">
          <Link 
            href={`/blog/${post.slug.current}`}
            className="flex-1 justify-start group/btn hover:bg-primary/5 transition-all duration-300 inline-flex items-center justify-center px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <span className="font-medium">Read Article</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/card:translate-x-2" />
          </Link>

          {/* Action Buttons - Only show on hover for featured */}
          {variant === 'featured' && (
            <div className="flex items-center gap-1 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-200">
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Bookmark article"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                aria-label="Like article"
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}