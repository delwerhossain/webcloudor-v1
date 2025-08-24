import { NextResponse } from 'next/server'
import { Feed } from 'feed'
import { getBlogPosts } from '@/lib/sanity'
import { urlFor } from '@/sanity/lib/utils'

export async function GET() {
  try {
    const posts = await getBlogPosts()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webcloudor.com'

    const feed = new Feed({
      title: 'WebCloudor Blog',
      description: 'Expert insights on web development, cloud computing, AI integration, and digital transformation.',
      id: siteUrl,
      link: siteUrl,
      language: 'en',
      image: `${siteUrl}/logo.png`,
      favicon: `${siteUrl}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}, WebCloudor`,
      updated: new Date(),
      generator: 'WebCloudor Blog RSS Generator',
      feedLinks: {
        rss2: `${siteUrl}/feed.xml`,
        json: `${siteUrl}/feed.json`,
        atom: `${siteUrl}/atom.xml`,
      },
      author: {
        name: 'WebCloudor Team',
        email: 'hello@webcloudor.com',
        link: siteUrl,
      },
    })

    posts.slice(0, 20).forEach((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug.current}`
      const imageUrl = post.featuredImage 
        ? urlFor(post.featuredImage).width(1200).height(630).url()
        : undefined

      feed.addItem({
        title: post.title,
        id: postUrl,
        link: postUrl,
        description: post.excerpt,
        content: post.excerpt,
        author: [
          {
            name: post.author?.name || 'WebCloudor Team',
            email: 'hello@webcloudor.com',
            link: post.author ? `${siteUrl}/blog/author/${post.author.slug.current}` : siteUrl,
          },
        ],
        contributor: [],
        date: new Date(post.publishedAt),
        image: imageUrl,
        category: post.categories?.map(cat => ({ 
          name: cat.title,
          term: cat.slug.current 
        })) || [],
      })
    })

    return new NextResponse(feed.rss2(), {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new NextResponse('Error generating RSS feed', { status: 500 })
  }
}