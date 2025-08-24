import { NextResponse } from 'next/server'
import { getBlogPosts, getCategories, getAuthors } from '@/lib/sanity'

export async function GET() {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webcloudor.com'
    
    const [posts, categories, authors] = await Promise.all([
      getBlogPosts(),
      getCategories(),
      getAuthors(),
    ])

    const staticPages = [
      {
        url: siteUrl,
        lastModified: new Date(),
        changeFreq: 'daily',
        priority: 1.0,
      },
      {
        url: `${siteUrl}/blog`,
        lastModified: new Date(),
        changeFreq: 'daily',
        priority: 0.9,
      },
      {
        url: `${siteUrl}/services`,
        lastModified: new Date(),
        changeFreq: 'weekly',
        priority: 0.8,
      },
      {
        url: `${siteUrl}/portfolio`,
        lastModified: new Date(),
        changeFreq: 'weekly',
        priority: 0.8,
      },
      {
        url: `${siteUrl}/about`,
        lastModified: new Date(),
        changeFreq: 'monthly',
        priority: 0.7,
      },
      {
        url: `${siteUrl}/contact`,
        lastModified: new Date(),
        changeFreq: 'monthly',
        priority: 0.6,
      },
    ]

    const blogPosts = posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFreq: 'weekly',
      priority: 0.7,
    }))

    const categoryPages = categories.map((category) => ({
      url: `${siteUrl}/blog/category/${category.slug.current}`,
      lastModified: new Date(),
      changeFreq: 'weekly',
      priority: 0.6,
    }))

    const authorPages = authors.map((author) => ({
      url: `${siteUrl}/blog/author/${author.slug.current}`,
      lastModified: new Date(),
      changeFreq: 'monthly',
      priority: 0.5,
    }))

    const allPages = [...staticPages, ...blogPosts, ...categoryPages, ...authorPages]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}