import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface BlogLoadingProps {
  variant?: 'default' | 'featured' | 'compact'
  count?: number
}

export const BlogLoading = ({ variant = 'default', count = 6 }: BlogLoadingProps) => {
  const gridClasses = {
    default: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6',
    featured: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    compact: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  }

  const aspectRatios = {
    default: 'aspect-[3/2]',
    featured: 'aspect-[16/10]',
    compact: 'aspect-[4/3]'
  }

  return (
    <div className={gridClasses[variant]}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="h-full overflow-hidden border border-border/50">
          {/* Image Skeleton */}
          <div className={`relative ${aspectRatios[variant]} bg-gradient-to-r from-muted via-muted/80 to-muted animate-pulse`}>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" 
                 style={{
                   background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                 }}
            />
          </div>

          <CardContent className="p-6 pb-4 space-y-4">
            {/* Categories Skeleton */}
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-muted rounded-full animate-pulse" />
              {Math.random() > 0.5 && (
                <div className="h-5 w-20 bg-muted rounded-full animate-pulse" />
              )}
            </div>

            {/* Title Skeleton */}
            <div className="space-y-2">
              <div className={`h-6 bg-muted rounded animate-pulse ${
                variant === 'featured' ? 'w-full' : 'w-full'
              }`} />
              <div className={`h-6 bg-muted rounded animate-pulse ${
                Math.random() > 0.3 ? 'w-3/4' : 'w-5/6'
              }`} />
            </div>

            {/* Excerpt Skeleton */}
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded animate-pulse w-full" />
              <div className="h-4 bg-muted rounded animate-pulse w-full" />
              <div className="h-4 bg-muted rounded animate-pulse w-2/3" />
            </div>

            {/* Meta Information Skeleton */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-20 bg-muted rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-24 bg-muted rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 w-16 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-2">
            {/* Button Skeleton */}
            <div className="h-9 bg-muted rounded animate-pulse w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

// Featured Posts Loading
export const FeaturedPostsLoading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Main featured post */}
      <div className="lg:row-span-2">
        <BlogLoading variant="featured" count={1} />
      </div>
      
      {/* Secondary featured posts */}
      <div className="space-y-6">
        <BlogLoading variant="compact" count={2} />
      </div>
    </div>
  )
}

// Sidebar Loading
export const SidebarLoading = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="h-5 bg-muted rounded animate-pulse w-32" />
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex items-center justify-between">
                    <div className="h-4 bg-muted rounded animate-pulse w-24" />
                    <div className="h-4 bg-muted rounded animate-pulse w-6" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}