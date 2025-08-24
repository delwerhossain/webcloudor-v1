import { BlogCard } from './BlogCard'
import { BlogPost } from '@/sanity/lib/types'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.slice(0, 4).map((post) => (
        <BlogCard
          key={post._id}
          post={post}
          variant="compact"
          showAuthor={false}
          showStats={false}
        />
      ))}
    </div>
  )
}