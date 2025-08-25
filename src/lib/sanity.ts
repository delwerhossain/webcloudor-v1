import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export const getBlogPosts = async () => {
  const query = groq`*[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
    ...,
    "author": author->{name, slug, avatar},
    "categories": categories[]->{title, slug}
  }`
  return await client.fetch(query)
}

export const getFeaturedBlogPosts = async () => {
  const query = groq`*[_type == "blogPost" && status == "published" && featured == true] | order(publishedAt desc) {
    ...,
    "author": author->{name, slug, avatar},
    "categories": categories[]->{title, slug}
  }`
  return await client.fetch(query)
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
  const query = groq`*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    "postCount": count(*[_type == "blogPost" && references(^._id)])
  }`
  return await client.fetch(query)
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