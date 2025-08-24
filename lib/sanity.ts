import { client } from '../sanity/lib/client'
import {
  servicesQuery,
  serviceBySlugQuery,
  projectsQuery,
  featuredProjectsQuery,
  projectBySlugQuery,
  blogPostsQuery,
  featuredBlogPostsQuery,
  blogPostBySlugQuery,
  blogPostsByAuthorQuery,
  blogPostsByCategoryQuery,
  blogPostsByTagQuery,
  relatedBlogPostsQuery,
  popularBlogPostsQuery,
  authorsQuery,
  authorBySlugQuery,
  categoriesQuery,
  categoryBySlugQuery,
  featuredCategoriesQuery,
  teamMembersQuery,
  teamMemberBySlugQuery,
  testimonialsQuery,
  featuredTestimonialsQuery,
  pageBySlugQuery,
  homepageQuery
} from '../sanity/lib/queries'
import {
  type Service,
  type Project,
  type BlogPost,
  type Author,
  type Category,
  type TeamMember,
  type Testimonial,
  type Page
} from '../sanity/lib/types'

// Services
export const getServices = async (): Promise<Service[]> => {
  return await client.fetch(servicesQuery)
}

export const getServiceBySlug = async (slug: string): Promise<Service | null> => {
  return await client.fetch(serviceBySlugQuery, { slug })
}

// Projects
export const getProjects = async (): Promise<Project[]> => {
  return await client.fetch(projectsQuery)
}

export const getFeaturedProjects = async (): Promise<Project[]> => {
  return await client.fetch(featuredProjectsQuery)
}

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  return await client.fetch(projectBySlugQuery, { slug })
}

// Blog posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  return await client.fetch(blogPostsQuery)
}

export const getFeaturedBlogPosts = async (): Promise<BlogPost[]> => {
  return await client.fetch(featuredBlogPostsQuery)
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  return await client.fetch(blogPostBySlugQuery, { slug })
}

export const getBlogPostsByAuthor = async (authorId: string): Promise<BlogPost[]> => {
  return await client.fetch(blogPostsByAuthorQuery, { authorId })
}

export const getBlogPostsByCategory = async (categoryId: string): Promise<BlogPost[]> => {
  return await client.fetch(blogPostsByCategoryQuery, { categoryId })
}

export const getBlogPostsByTag = async (tag: string): Promise<BlogPost[]> => {
  return await client.fetch(blogPostsByTagQuery, { tag })
}

export const getRelatedBlogPosts = async (currentId: string, categoryIds: string[], tags: string[]): Promise<BlogPost[]> => {
  return await client.fetch(relatedBlogPostsQuery, { currentId, categoryIds, tags })
}

export const getPopularBlogPosts = async (): Promise<BlogPost[]> => {
  return await client.fetch(popularBlogPostsQuery)
}

// Authors
export const getAuthors = async (): Promise<Author[]> => {
  return await client.fetch(authorsQuery)
}

export const getAuthorBySlug = async (slug: string): Promise<Author | null> => {
  return await client.fetch(authorBySlugQuery, { slug })
}

// Categories
export const getCategories = async (): Promise<Category[]> => {
  return await client.fetch(categoriesQuery)
}

export const getCategoryBySlug = async (slug: string): Promise<Category | null> => {
  return await client.fetch(categoryBySlugQuery, { slug })
}

export const getFeaturedCategories = async (): Promise<Category[]> => {
  return await client.fetch(featuredCategoriesQuery)
}

// Team members
export const getTeamMembers = async (): Promise<TeamMember[]> => {
  return await client.fetch(teamMembersQuery)
}

export const getTeamMemberBySlug = async (slug: string): Promise<TeamMember | null> => {
  return await client.fetch(teamMemberBySlugQuery, { slug })
}

// Testimonials
export const getTestimonials = async (): Promise<Testimonial[]> => {
  return await client.fetch(testimonialsQuery)
}

export const getFeaturedTestimonials = async (): Promise<Testimonial[]> => {
  return await client.fetch(featuredTestimonialsQuery)
}

// Pages
export const getPageBySlug = async (slug: string): Promise<Page | null> => {
  return await client.fetch(pageBySlugQuery, { slug })
}

export const getHomepage = async (): Promise<Page | null> => {
  return await client.fetch(homepageQuery)
}