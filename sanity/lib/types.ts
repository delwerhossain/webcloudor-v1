import { type SanityImageAsset, type SanityReference } from '@sanity/image-url/lib/types/types'

export interface SanityImage {
  _type: 'image'
  asset: SanityReference<SanityImageAsset>
  alt?: string
  caption?: string
}

export interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  shortDescription: string
  description?: any[]
  icon?: string
  features?: {
    title: string
    description?: string
  }[]
  technologies?: string[]
  pricing?: {
    startingPrice?: number
    currency?: string
    priceNote?: string
  }
  isActive: boolean
  order?: number
}

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  shortDescription: string
  description?: any[]
  images?: SanityImage[]
  technologies: string[]
  category: 'web' | 'cloud' | 'ai' | 'ecommerce' | 'mobile'
  client?: string
  projectUrl?: string
  githubUrl?: string
  completedAt?: string
  featured: boolean
  isActive: boolean
  order?: number
}

export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  bio?: any[]
  shortBio?: string
  avatar?: SanityImage
  socialLinks?: {
    website?: string
    twitter?: string
    linkedin?: string
    github?: string
  }
  expertise?: string[]
  email?: string
  isActive: boolean
  featured: boolean
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color: string
  icon?: string
  featured: boolean
  isActive: boolean
  order?: number
}

export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content?: any[]
  featuredImage: SanityImage
  categories?: Category[]
  tags?: string[]
  author?: Author | TeamMember
  publishedAt: string
  updatedAt?: string
  readingTime?: number
  tableOfContents?: boolean
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  ogImage?: SanityImage
  featured: boolean
  pinned: boolean
  status: 'draft' | 'published' | 'archived'
  viewCount: number
}

export interface TeamMember {
  _id: string
  name: string
  slug: {
    current: string
  }
  position: string
  bio?: any[]
  shortBio?: string
  profileImage?: SanityImage
  skills?: string[]
  specialties?: string[]
  experience?: number
  socialLinks?: {
    linkedin?: string
    twitter?: string
    github?: string
    portfolio?: string
  }
  email?: string
  joinedAt?: string
  isActive: boolean
  featured: boolean
  order?: number
}

export interface Testimonial {
  _id: string
  clientName: string
  clientPosition: string
  clientCompany: string
  testimonial: string
  rating: 1 | 2 | 3 | 4 | 5
  clientImage?: SanityImage
  projectType?: 'web' | 'cloud' | 'ai' | 'ecommerce' | 'mobile' | 'consultation'
  relatedProject?: {
    title: string
    slug: {
      current: string
    }
  }
  featured: boolean
  isActive: boolean
  order?: number
  createdAt: string
}

export interface Page {
  _id: string
  title: string
  slug: {
    current: string
  }
  pageType: 'homepage' | 'about' | 'services' | 'portfolio' | 'team' | 'contact' | 'legal' | 'custom'
  content?: any[]
  heroSection?: {
    headline?: string
    subheadline?: string
    heroImage?: SanityImage
    ctaButton?: {
      text?: string
      url?: string
    }
  }
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string[]
  ogImage?: SanityImage
  isActive: boolean
  lastModified?: string
}

export type SanityDocument = Service | Project | BlogPost | Author | Category | TeamMember | Testimonial | Page