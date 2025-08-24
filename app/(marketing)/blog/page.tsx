import { Suspense } from 'react'
import { Metadata } from 'next'
import { getBlogPosts, getFeaturedBlogPosts, getCategories } from '@/lib/sanity'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { FeaturedPosts } from '@/components/blog/FeaturedPosts'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogSidebar } from '@/components/blog/BlogSidebar'
import { BlogPagination } from '@/components/blog/BlogPagination'
import { BlogLoading } from '@/components/blog/BlogLoading'

export const metadata: Metadata = {
  title: 'Blog | WebCloudor - Web Development & Cloud Solutions Insights',
  description: 'Stay updated with the latest in web development, cloud computing, AI integration, and digital transformation. Expert insights from the WebCloudor team.',
  openGraph: {
    title: 'WebCloudor Blog - Tech Insights & Best Practices',
    description: 'Expert articles on web development, cloud solutions, and digital transformation.',
    type: 'website',
  },
}

interface BlogPageProps {
  searchParams: {
    page?: string
    category?: string
    tag?: string
    search?: string
  }
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 12
  
  const [blogPosts, featuredPosts, categories] = await Promise.all([
    getBlogPosts(),
    getFeaturedBlogPosts(),
    getCategories(),
  ])

  const filteredPosts = blogPosts.filter(post => {
    if (searchParams.category && !post.categories?.some(cat => cat.slug.current === searchParams.category)) {
      return false
    }
    if (searchParams.tag && !post.tags?.includes(searchParams.tag)) {
      return false
    }
    if (searchParams.search) {
      const searchTerm = searchParams.search.toLowerCase()
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      )
    }
    return true
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container mx-auto px-4 py-8">
        {currentPage === 1 && !searchParams.category && !searchParams.tag && !searchParams.search && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our most popular and insightful articles on web development, cloud solutions, and digital innovation.
              </p>
            </div>
            <Suspense fallback={<BlogLoading />}>
              <FeaturedPosts posts={featuredPosts} />
            </Suspense>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  {searchParams.category ? `Category: ${searchParams.category}` :
                   searchParams.tag ? `Tag: ${searchParams.tag}` :
                   searchParams.search ? `Search: ${searchParams.search}` :
                   'Latest Articles'}
                </h1>
                <p className="text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>

            <Suspense fallback={<BlogLoading />}>
              <BlogGrid posts={paginatedPosts} />
            </Suspense>

            {totalPages > 1 && (
              <div className="mt-12">
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  searchParams={searchParams}
                />
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <Suspense fallback={<div className="animate-pulse bg-muted h-96 rounded-lg" />}>
              <BlogSidebar categories={categories} />
            </Suspense>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default BlogPage