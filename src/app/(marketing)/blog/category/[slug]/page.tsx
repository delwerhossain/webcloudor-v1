import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getBlogPostsByCategory } from '@/lib/sanity'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { CategoryHeader } from '@/components/blog/CategoryHeader'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogPagination } from '@/components/blog/BlogPagination'
import { BlogLoading } from '@/components/blog/BlogLoading'

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{
    page?: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  
  if (!category) {
    return {
      title: 'Category Not Found | WebCloudor Blog',
      description: 'The requested category could not be found.',
    }
  }

  return {
    title: `${category.title} | WebCloudor Blog`,
    description: category.description || `Articles about ${category.title} - expert insights and best practices from WebCloudor.`,
    openGraph: {
      title: `${category.title} Articles | WebCloudor Blog`,
      description: category.description || `Expert articles about ${category.title}`,
      type: 'website',
    },
  }
}

const CategoryPage = async ({ params, searchParams }: CategoryPageProps) => {
  const { slug } = await params
  const resolvedSearchParams = await searchParams
  const currentPage = Number(resolvedSearchParams.page) || 1
  const postsPerPage = 12
  
  const category = await getCategoryBySlug(slug)
  
  if (!category) {
    notFound()
  }

  const posts = await getBlogPostsByCategory(category._id)
  
  const totalPages = Math.ceil(posts.length / postsPerPage)
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container mx-auto px-4 py-8">
        <CategoryHeader category={category} postCount={posts.length} />
        
        <div className="mt-12">
          <Suspense fallback={<BlogLoading />}>
            <BlogGrid posts={paginatedPosts} />
          </Suspense>
          
          {totalPages > 1 && (
            <div className="mt-12">
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                searchParams={resolvedSearchParams}
                basePath={`/blog/category/${slug}`}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default CategoryPage