import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { getBlogPostBySlug, getRelatedBlogPosts } from '@/lib/sanity'
import { urlFor } from '@/sanity/lib/utils'
import { BlogHeader } from '@/components/blog/BlogHeader'
import { BlogPostHeader } from '@/components/blog/BlogPostHeader'
import { BlogPostContent } from '@/components/blog/BlogPostContent'
import { AuthorCard } from '@/components/blog/AuthorCard'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { CommentSection } from '@/components/blog/CommentSection'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { BlogLoading } from '@/components/blog/BlogLoading'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | WebCloudor Blog',
      description: 'The requested blog post could not be found.',
    }
  }

  const title = post.seoTitle || post.title
  const description = post.seoDescription || post.excerpt
  const ogImage = post.ogImage ? urlFor(post.ogImage).width(1200).height(630).url() : 
                  post.featuredImage ? urlFor(post.featuredImage).width(1200).height(630).url() : 
                  undefined

  return {
    title: `${title} | WebCloudor Blog`,
    description,
    keywords: post.seoKeywords,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author?.name || 'WebCloudor Team'],
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const categoryIds = post.categories?.map((cat: any) => cat._id) || []
  const relatedPosts = await getRelatedBlogPosts(post._id, categoryIds)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage ? urlFor(post.featuredImage).url() : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'WebCloudor Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WebCloudor',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-background">
        <BlogHeader />
        
        <article className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <BlogPostHeader post={post} />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
              {post.tableOfContents && (
                <aside className="lg:col-span-1 order-2 lg:order-1">
                  <div className="sticky top-8">
                    <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
                      <TableOfContents content={post.content} />
                    </Suspense>
                  </div>
                </aside>
              )}
              
              <div className={`${post.tableOfContents ? 'lg:col-span-3' : 'lg:col-span-4'} order-1 lg:order-2`}>
                <BlogPostContent content={post.content} />
                
                <div className="mt-12 pt-8 border-t">
                  <ShareButtons 
                    title={post.title}
                    url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`}
                  />
                </div>
                
                <div className="mt-8">
                  <AuthorCard author={post.author} />
                </div>
                
                {relatedPosts.length > 0 && (
                  <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                    <Suspense fallback={<BlogLoading />}>
                      <RelatedPosts posts={relatedPosts} />
                    </Suspense>
                  </div>
                )}
                
                <div className="mt-16">
                  <CommentSection postSlug={slug} postTitle={post.title} />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default BlogPostPage