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
import { ReadingProgressIndicator } from '@/components/blog/ReadingProgressIndicator'
import { PostNavigation } from '@/components/blog/PostNavigation'
import { BlogSidebarContent } from '@/components/blog/BlogSidebarContent'

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
      
      <ReadingProgressIndicator />
      
      <main className="min-h-screen bg-background">
        <BlogHeader />
        
        <div className="container mx-auto px-4 py-6 sm:py-8">
          {/* Blog Post Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <BlogPostHeader post={post} />
          </div>
          
          {/* Three Column Layout */}
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              
              {/* Left Sidebar - Floating TOC (Hidden on mobile/tablet) */}
              <aside className="hidden xl:block xl:col-span-2">
                <div className="sticky top-24 space-y-6">
                  <Suspense fallback={<div className="animate-pulse bg-muted h-64 rounded-lg" />}>
                    <TableOfContents content={post.content} />
                  </Suspense>
                </div>
              </aside>
              
              {/* Main Content */}
              <article className="xl:col-span-7">
                <div className="max-w-none">
                  <BlogPostContent content={post.content} />
                  
                  {/* Mobile TOC */}
                  <div className="xl:hidden mt-8 p-4 bg-muted/30 rounded-lg">
                    <Suspense fallback={<div className="animate-pulse bg-muted h-32 rounded" />}>
                      <TableOfContents content={post.content} />
                    </Suspense>
                  </div>
                  
                  {/* Share Buttons */}
                  <div className="mt-12 pt-8 border-t">
                    <ShareButtons 
                      title={post.title}
                      url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`}
                    />
                  </div>
                  
                  {/* Author Card */}
                  <div className="mt-8">
                    <AuthorCard author={post.author} />
                  </div>
                  
                  {/* Post Navigation */}
                  <div className="mt-12">
                    <Suspense fallback={<div className="animate-pulse bg-muted h-20 rounded-lg" />}>
                      <PostNavigation currentSlug={slug} categoryIds={categoryIds} />
                    </Suspense>
                  </div>
                  
                  {/* Comments */}
                  <div className="mt-16">
                    <CommentSection postSlug={slug} postTitle={post.title} />
                  </div>
                </div>
              </article>
              
              {/* Right Sidebar */}
              <aside className="xl:col-span-3">
                <div className="sticky top-24 space-y-6">
                  <Suspense fallback={<BlogLoading />}>
                    <BlogSidebarContent 
                      post={post}
                      relatedPosts={relatedPosts}
                      author={post.author}
                      postUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`}
                      postTitle={post.title}
                    />
                  </Suspense>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default BlogPostPage