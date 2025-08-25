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
    pinned: false,
    tags: ["Next.js", "Web Development", "React", "Frontend"],
    author: { 
      _id: "author-1",
      name: "Ahsan Habib Akik", 
      slug: { current: "ahsan-habib-akik" },
      isActive: true,
      featured: true
    },
    categories: [{ 
      _id: "cat-1",
      title: "Web Development", 
      slug: { current: "web-development" },
      color: "blue",
      featured: true,
      isActive: true
    }],
    featuredImage: null as any,
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "Next.js 15 introduces revolutionary changes that are reshaping how we think about modern web development. From enhanced server components to improved performance optimizations, this latest version sets new standards for React-based applications." }
        ],
        markDefs: [],
        style: "normal"
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Key Features in Next.js 15" }
        ],
        markDefs: [],
        style: "h2"
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "The new App Router brings unprecedented flexibility and performance improvements. Server components now offer better data fetching patterns, while the enhanced middleware system provides more granular control over request handling." }
        ],
        markDefs: [],
        style: "normal"
      }
    ],
    status: "published",
    viewCount: 0
  },
  {
    _id: "mock-2", 
    title: "Cloud Architecture Best Practices for Modern Applications",
    slug: { current: "cloud-architecture-best-practices" },
    excerpt: "Learn essential cloud architecture patterns and best practices for building scalable, reliable applications.",
    publishedAt: "2024-12-10",
    featured: true,
    pinned: false,
    tags: ["Cloud", "Architecture", "AWS", "Scalability"],
    author: { 
      _id: "author-2",
      name: "Ahsan Habib Akik", 
      slug: { current: "ahsan-habib-akik" },
      isActive: true,
      featured: true
    },
    categories: [{ 
      _id: "cat-2",
      title: "Cloud Computing", 
      slug: { current: "cloud-computing" },
      color: "purple",
      featured: true,
      isActive: true
    }],
    featuredImage: null as any,
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "Building scalable cloud applications requires careful consideration of architecture patterns and best practices. This comprehensive guide explores proven strategies for designing robust, maintainable cloud solutions." }
        ],
        markDefs: [],
        style: "normal"
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Essential Cloud Architecture Principles" }
        ],
        markDefs: [],
        style: "h2"
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Microservices architecture, containerization, and serverless computing form the foundation of modern cloud applications. Understanding when and how to implement these patterns is crucial for success." }
        ],
        markDefs: [],
        style: "normal"
      }
    ],
    status: "published",
    viewCount: 0
  },
  {
    _id: "mock-3",
    title: "AI Integration in Web Applications: A Practical Guide",
    slug: { current: "ai-integration-web-applications" },
    excerpt: "Discover how to effectively integrate AI capabilities into your web applications with practical examples.",
    publishedAt: "2024-12-05",
    featured: false,
    pinned: false,
    tags: ["AI", "Machine Learning", "Integration", "APIs"],
    author: { 
      _id: "author-1",
      name: "Ahsan Habib Akik", 
      slug: { current: "ahsan-habib-akik" },
      isActive: true,
      featured: true
    },
    categories: [{ 
      _id: "cat-3",
      title: "AI & Technology", 
      slug: { current: "ai-technology" },
      color: "green",
      featured: true,
      isActive: true
    }],
    featuredImage: null as any,
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "Artificial Intelligence is transforming web applications across industries. From chatbots to personalized recommendations, AI integration has become essential for creating engaging user experiences." }
        ],
        markDefs: [],
        style: "normal"
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Getting Started with AI APIs" }
        ],
        markDefs: [],
        style: "h2"
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Modern AI services provide powerful APIs that can be easily integrated into web applications. This guide covers practical implementation strategies and common patterns." }
        ],
        markDefs: [],
        style: "normal"
      }
    ],
    status: "published",
    viewCount: 0
  }
]

const mockCategories = [
  { 
    _id: "cat-1", 
    title: "Web Development", 
    slug: { current: "web-development" }, 
    color: "blue",
    featured: true,
    isActive: true,
    postCount: 1 
  },
  { 
    _id: "cat-2", 
    title: "Cloud Computing", 
    slug: { current: "cloud-computing" }, 
    color: "purple",
    featured: true,
    isActive: true,
    postCount: 1 
  },
  { 
    _id: "cat-3", 
    title: "AI & Technology", 
    slug: { current: "ai-technology" }, 
    color: "green",
    featured: true,
    isActive: true,
    postCount: 1 
  }
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
    const posts = await client.fetch(query)
    
    // If Sanity returns empty data, use mock data
    if (!posts || posts.length === 0) {
      console.warn('Sanity CMS returned empty data, using mock data for blog posts')
      return mockBlogPosts
    }
    
    return posts
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
    const posts = await client.fetch(query)
    
    // If Sanity returns empty data, use mock data
    if (!posts || posts.length === 0) {
      console.warn('Sanity CMS returned empty featured posts, using mock data')
      return mockBlogPosts.filter(post => post.featured)
    }
    
    return posts
  } catch (error) {
    console.error('Error fetching featured blog posts from Sanity:', error)
    return mockBlogPosts.filter(post => post.featured)
  }
}

export const getBlogPostBySlug = async (slug: string) => {
  if (!isSanityConfigured()) {
    const mockPost = mockBlogPosts.find(post => post.slug.current === slug)
    return mockPost || null
  }
  
  try {
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
    const post = await client.fetch(query, { slug })
    
    // If Sanity returns empty data, use mock data
    if (!post) {
      console.warn(`Sanity CMS returned no post for slug: ${slug}, checking mock data`)
      const mockPost = mockBlogPosts.find(post => post.slug.current === slug)
      return mockPost || null
    }
    
    return post
  } catch (error) {
    console.error(`Error fetching blog post by slug ${slug} from Sanity:`, error)
    const mockPost = mockBlogPosts.find(post => post.slug.current === slug)
    return mockPost || null
  }
}

export const getRelatedBlogPosts = async (currentPostSlug: string, categories: string[]) => {
  if (!isSanityConfigured()) {
    const categoryIds = categories.map(cat => typeof cat === 'string' ? cat : cat._id || cat)
    const relatedPosts = mockBlogPosts
      .filter(post => 
        post.slug.current !== currentPostSlug && 
        post.categories?.some(postCat => categoryIds.includes(postCat._id))
      )
      .slice(0, 3)
    return relatedPosts
  }
  
  try {
    const query = groq`*[_type == "blogPost" && status == "published" && slug.current != $currentPostSlug && references($categories)] | order(publishedAt desc) [0...3] {
      ...,
      "author": author->{name, slug, avatar},
      "categories": categories[]->{title, slug}
    }`
    const posts = await client.fetch(query, { 
      currentPostSlug, 
      categories 
    })
    
    // If Sanity returns empty data, use mock data
    if (!posts || posts.length === 0) {
      console.warn(`Sanity CMS returned no related posts for ${currentPostSlug}, using mock data`)
      const categoryIds = categories.map(cat => typeof cat === 'string' ? cat : cat._id || cat)
      const relatedPosts = mockBlogPosts
        .filter(post => 
          post.slug.current !== currentPostSlug && 
          post.categories?.some(postCat => categoryIds.includes(postCat._id))
        )
        .slice(0, 3)
      return relatedPosts
    }
    
    return posts
  } catch (error) {
    console.error(`Error fetching related posts for ${currentPostSlug} from Sanity:`, error)
    const categoryIds = categories.map(cat => typeof cat === 'string' ? cat : cat._id || cat)
    const relatedPosts = mockBlogPosts
      .filter(post => 
        post.slug.current !== currentPostSlug && 
        post.categories?.some(postCat => categoryIds.includes(postCat._id))
      )
      .slice(0, 3)
    return relatedPosts
  }
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
    const categories = await client.fetch(query)
    
    // If Sanity returns empty data, use mock data
    if (!categories || categories.length === 0) {
      console.warn('Sanity CMS returned empty categories, using mock data')
      return mockCategories
    }
    
    return categories
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