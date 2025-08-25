import { BlogCard } from './BlogCard'
import { BlogPost } from '@/sanity/lib/types'

interface FeaturedPostsProps {
  posts: BlogPost[]
}

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  if (posts.length === 0) {
    return null
  }

  const [mainPost, ...otherPosts] = posts

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Main featured post */}
      <div className="lg:row-span-2">
        <BlogCard 
          post={mainPost} 
          variant="featured"
          showAuthor={true}
          showStats={true}
        />
      </div>
      
      {/* Secondary featured posts */}
      <div className="space-y-4 lg:space-y-6">
        {otherPosts.slice(0, 2).map((post) => (
          <BlogCard
            key={post._id}
            post={post}
            variant="compact"
            showAuthor={true}
            showStats={false}
          />
        ))}
      </div>
    </div>
  )
}