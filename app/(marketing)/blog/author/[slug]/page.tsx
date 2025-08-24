import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getBlogPostsByAuthor } from '@/lib/sanity'
import { urlFor } from '@/sanity/lib/utils'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { AuthorHeader } from '@/components/blog/AuthorHeader'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { BlogPagination } from '@/components/blog/BlogPagination'
import { BlogLoading } from '@/components/blog/BlogLoading'

interface AuthorPageProps {
  params: {
    slug: string
  }
  searchParams: {
    page?: string
  }
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const author = await getAuthorBySlug(params.slug)
  
  if (!author) {
    return {
      title: 'Author Not Found | WebCloudor Blog',
      description: 'The requested author could not be found.',
    }
  }

  const ogImage = author.avatar ? urlFor(author.avatar).width(1200).height(630).url() : undefined

  return {
    title: `${author.name} | WebCloudor Blog Authors`,
    description: author.shortBio || `Articles by ${author.name} - expert insights from WebCloudor.`,
    openGraph: {
      title: `${author.name} | WebCloudor Blog`,
      description: author.shortBio || `Expert articles by ${author.name}`,
      type: 'profile',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
    },
  }
}

const AuthorPage = async ({ params, searchParams }: AuthorPageProps) => {
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 12
  
  const author = await getAuthorBySlug(params.slug)
  
  if (!author) {
    notFound()
  }

  const posts = await getBlogPostsByAuthor(author._id)
  
  const totalPages = Math.ceil(posts.length / postsPerPage)
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  return (
    <main className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container mx-auto px-4 py-8">
        <AuthorHeader author={author} postCount={posts.length} />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-8">
            Articles by {author.name} ({posts.length})
          </h2>
          
          <Suspense fallback={<BlogLoading />}>
            <BlogGrid posts={paginatedPosts} />
          </Suspense>
          
          {totalPages > 1 && (
            <div className="mt-12">
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                searchParams={searchParams}
                basePath={`/blog/author/${params.slug}`}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default AuthorPage