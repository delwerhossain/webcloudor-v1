import { BlogCard } from './BlogCard'
import { BlogPost } from '@/sanity/lib/types'

interface BlogGridProps {
  posts: BlogPost[]
  variant?: 'default' | 'compact'
  showAuthor?: boolean
  showStats?: boolean
}

export const BlogGrid = ({ 
  posts, 
  variant = 'default', 
  showAuthor = true,
  showStats = true 
}: BlogGridProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search criteria or browse all articles.
          </p>
        </div>
      </div>
    )
  }

  const gridClasses = {
    default: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6',
    compact: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  }

  return (
    <div className={gridClasses[variant]}>
      {posts.map((post) => (
        <BlogCard
          key={post._id}
          post={post}
          variant={variant === 'compact' ? 'compact' : 'default'}
          showAuthor={showAuthor}
          showStats={showStats}
        />
      ))}
    </div>
  )
}