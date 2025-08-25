import { Suspense } from 'react'
import { Metadata } from 'next'
import { getBlogPosts, getFeaturedBlogPosts, getCategories } from '@/lib/sanity'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { FeaturedPosts } from '@/components/blog/FeaturedPosts'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogSidebar } from '@/components/blog/BlogSidebar'
import { BlogPagination } from '@/components/blog/BlogPagination'
import { BlogLoading, FeaturedPostsLoading, SidebarLoading } from '@/components/blog/BlogLoading'

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
  searchParams: Promise<{
    page?: string
    category?: string
    tag?: string
    search?: string
    featured?: string
  }>
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const resolvedSearchParams = await searchParams
  const currentPage = Number(resolvedSearchParams.page) || 1
  const postsPerPage = 12
  
  const [blogPosts, featuredPosts, categories] = await Promise.all([
    getBlogPosts(),
    getFeaturedBlogPosts(),
    getCategories(),
  ])

  const filteredPosts = blogPosts.filter((post: any) => {
    if (resolvedSearchParams.featured === 'true' && !post.featured) {
      return false
    }
    if (resolvedSearchParams.category && !post.categories?.some((cat: any) => cat.slug.current === resolvedSearchParams.category)) {
      return false
    }
    if (resolvedSearchParams.tag && !post.tags?.includes(resolvedSearchParams.tag)) {
      return false
    }
    if (resolvedSearchParams.search) {
      const searchTerm = resolvedSearchParams.search.toLowerCase()
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags?.some((tag: any) => tag.toLowerCase().includes(searchTerm)) ||
        post.author?.name.toLowerCase().includes(searchTerm)
      )
    }
    return true
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const getPageTitle = () => {
    if (resolvedSearchParams.featured === 'true') return 'Featured Articles'
    if (resolvedSearchParams.category) return `Category: ${resolvedSearchParams.category}`
    if (resolvedSearchParams.tag) return `Tag: ${resolvedSearchParams.tag}`
    if (resolvedSearchParams.search) return `Search: "${resolvedSearchParams.search}"`
    return 'Latest Articles'
  }

  const showFeaturedSection = currentPage === 1 && !resolvedSearchParams.category && !resolvedSearchParams.tag && !resolvedSearchParams.search && !resolvedSearchParams.featured

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Featured Posts Section */}
        {showFeaturedSection && featuredPosts.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                ✨ Featured Content
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Featured Articles
              </h2>
              <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg leading-relaxed">
                Our most popular and insightful articles on web development, cloud solutions, and digital innovation.
              </p>
            </div>
            <Suspense fallback={<FeaturedPostsLoading />}>
              <FeaturedPosts posts={featuredPosts} />
            </Suspense>
          </section>
        )}

        {/* Main Blog Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12">
          {/* Articles Content */}
          <div className="xl:col-span-3">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-balance">
                  {getPageTitle()}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <p>
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                  </p>
                  {resolvedSearchParams.search && (
                    <button 
                      onClick={() => window.history.back()}
                      className="text-sm text-primary hover:text-primary/80 underline"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              </div>
              
              {/* Sort Options - Mobile Hidden, Desktop Visible */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="text-sm bg-background border border-border rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            {/* Articles Grid */}
            {paginatedPosts.length > 0 ? (
              <>
                <Suspense fallback={<BlogLoading count={postsPerPage} />}>
                  <BlogGrid posts={paginatedPosts} />
                </Suspense>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-16 flex justify-center">
                    <BlogPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      searchParams={resolvedSearchParams}
                    />
                  </div>
                )}
              </>
            ) : (
              /* No Results */
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-6">
                    {resolvedSearchParams.search 
                      ? `No articles match "${resolvedSearchParams.search}". Try different keywords.`
                      : 'No articles found matching your filters. Try adjusting your criteria.'
                    }
                  </p>
                  <button 
                    onClick={() => window.location.href = '/blog'}
                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View All Articles
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="xl:col-span-1">
            <div className="sticky top-8">
              <Suspense fallback={<SidebarLoading />}>
                <BlogSidebar categories={categories} />
              </Suspense>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default BlogPage