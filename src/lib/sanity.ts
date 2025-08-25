import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

// Mock blog data for when Sanity is not configured
const mockBlogPosts = [
  {
    _id: "mock-1",
    title: "The Future of Web Development: Next.js 15 and Beyond",
    slug: { current: "future-web-development-nextjs-15" },
    excerpt: "Explore the latest features in Next.js 15 and how they're shaping the future of modern web development.",
    publishedAt: "2024-12-15",
    featured: true,
    tags: ["Next.js", "Web Development", "React", "Frontend"],
    author: { name: "Delwer Hossain", slug: { current: "delwer-hossain" } },
    categories: [{ title: "Web Development", slug: { current: "web-development" } }],
    status: "published"
  },
  {
    _id: "mock-2", 
    title: "Cloud Architecture Best Practices for Modern Applications",
    slug: { current: "cloud-architecture-best-practices" },
    excerpt: "Learn essential cloud architecture patterns and best practices for building scalable, reliable applications.",
    publishedAt: "2024-12-10",
    featured: true,
    tags: ["Cloud", "Architecture", "AWS", "Scalability"],
    author: { name: "Syed Mir Habib", slug: { current: "syed-mir-habib" } },
    categories: [{ title: "Cloud Computing", slug: { current: "cloud-computing" } }],
    status: "published"
  },
  {
    _id: "mock-3",
    title: "AI Integration in Web Applications: A Practical Guide",
    slug: { current: "ai-integration-web-applications" },
    excerpt: "Discover how to effectively integrate AI capabilities into your web applications with practical examples.",
    publishedAt: "2024-12-05",
    featured: false,
    tags: ["AI", "Machine Learning", "Integration", "APIs"],
    author: { name: "Delwer Hossain", slug: { current: "delwer-hossain" } },
    categories: [{ title: "AI & Technology", slug: { current: "ai-technology" } }],
    status: "published"
  }
]

const mockCategories = [
  { _id: "cat-1", title: "Web Development", slug: { current: "web-development" }, postCount: 1 },
  { _id: "cat-2", title: "Cloud Computing", slug: { current: "cloud-computing" }, postCount: 1 },
  { _id: "cat-3", title: "AI & Technology", slug: { current: "ai-technology" }, postCount: 1 }
]

// Check if Sanity is properly configured
const isSanityConfigured = () => {
  return !!(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET)
}

export const getBlogPosts = async () => {
  if (!isSanityConfigured()) {
    console.warn('Sanity CMS not configured, using mock data for blog posts')
    return mockBlogPosts
  }
  
  try {
    const query = groq`*[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
      ...,
      "author": author->{name, slug, avatar},
      "categories": categories[]->{title, slug}
    }`
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error)
    return mockBlogPosts
  }
}

export const getFeaturedBlogPosts = async () => {
  if (!isSanityConfigured()) {
    return mockBlogPosts.filter(post => post.featured)
  }
  
  try {
    const query = groq`*[_type == "blogPost" && status == "published" && featured == true] | order(publishedAt desc) {
      ...,
      "author": author->{name, slug, avatar},
      "categories": categories[]->{title, slug}
    }`
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching featured blog posts from Sanity:', error)
    return mockBlogPosts.filter(post => post.featured)
  }
}

export const getBlogPostBySlug = async (slug: string) => {
  const query = groq`*[_type == "blogPost" && slug.current == $slug][0]{
    ...,
    "author": author->{name, slug, avatar, bio},
    "categories": categories[]->{title, slug},
    "content": content[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }`
  return await client.fetch(query, { slug })
}

export const getRelatedBlogPosts = async (currentPostSlug: string, categories: string[]) => {
  const query = groq`*[_type == "blogPost" && status == "published" && slug.current != $currentPostSlug && references($categories)] | order(publishedAt desc) [0...3] {
    ...,
    "author": author->{name, slug, avatar},
    "categories": categories[]->{title, slug}
  }`
  return await client.fetch(query, { 
    currentPostSlug, 
    categories 
  })
}

export const getCategories = async () => {
  if (!isSanityConfigured()) {
    return mockCategories
  }
  
  try {
    const query = groq`*[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      "postCount": count(*[_type == "blogPost" && references(^._id)])
    }`
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching categories from Sanity:', error)
    return mockCategories
  }
}

export const getCategoryBySlug = async (slug: string) => {
  const query = groq`*[_type == "category" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description
  }`
  return await client.fetch(query, { slug })
}

export const getBlogPostsByCategory = async (categorySlug: string) => {
  const query = groq`*[_type == "blogPost" && status == "published" && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    ...,
    "author": author->{name, slug, avatar},
    "categories": categories[]->{title, slug}
  }`
  return await client.fetch(query, { categorySlug })
}

export const getAuthorBySlug = async (slug: string) => {
  const query = groq`*[_type == "teamMember" && slug.current == $slug][0]{
    name,
    slug,
    avatar,
    bio,
    position,
    socials
  }`
  return await client.fetch(query, { slug })
}

export const getBlogPostsByAuthor = async (authorSlug: string) => {
  const query = groq`*[_type == "blogPost" && status == "published" && author->slug.current == $authorSlug] | order(publishedAt desc) {
    ...,
    "author": author->{name, slug, avatar},
    "categories": categories[]->{title, slug}
  }`
  return await client.fetch(query, { authorSlug })
}