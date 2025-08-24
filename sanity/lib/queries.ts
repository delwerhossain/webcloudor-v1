import { groq } from 'next-sanity'

// Services queries
export const servicesQuery = groq`
  *[_type == "service" && isActive == true] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    description,
    icon,
    features,
    technologies,
    pricing,
    order
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    shortDescription,
    description,
    icon,
    features,
    technologies,
    pricing
  }
`

// Projects queries
export const projectsQuery = groq`
  *[_type == "project" && isActive == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    images,
    technologies,
    category,
    client,
    projectUrl,
    completedAt,
    featured,
    order
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true && isActive == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    images,
    technologies,
    category,
    client,
    projectUrl,
    completedAt
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    shortDescription,
    description,
    images,
    technologies,
    category,
    client,
    projectUrl,
    githubUrl,
    completedAt
  }
`

// Blog queries
export const blogPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(pinned desc, publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    categories[]->{
      title,
      slug,
      color,
      icon
    },
    tags,
    author->{
      name,
      slug,
      avatar,
      shortBio
    },
    publishedAt,
    updatedAt,
    readingTime,
    featured,
    pinned,
    viewCount
  }
`

export const featuredBlogPostsQuery = groq`
  *[_type == "blogPost" && featured == true && status == "published"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    categories[]->{
      title,
      slug,
      color,
      icon
    },
    author->{
      name,
      slug,
      avatar
    },
    publishedAt,
    readingTime,
    viewCount
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    categories[]->{
      title,
      slug,
      description,
      color,
      icon
    },
    tags,
    author->{
      name,
      slug,
      shortBio,
      bio,
      avatar,
      socialLinks,
      expertise
    },
    publishedAt,
    updatedAt,
    readingTime,
    tableOfContents,
    seoTitle,
    seoDescription,
    seoKeywords,
    ogImage,
    viewCount
  }
`

export const blogPostsByAuthorQuery = groq`
  *[_type == "blogPost" && author._ref == $authorId && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    categories[]->{
      title,
      slug,
      color
    },
    publishedAt,
    readingTime,
    viewCount
  }
`

export const blogPostsByCategoryQuery = groq`
  *[_type == "blogPost" && $categoryId in categories[]._ref && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    categories[]->{
      title,
      slug,
      color
    },
    author->{
      name,
      slug,
      avatar
    },
    publishedAt,
    readingTime,
    viewCount
  }
`

export const blogPostsByTagQuery = groq`
  *[_type == "blogPost" && $tag in tags && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    categories[]->{
      title,
      slug,
      color
    },
    author->{
      name,
      slug,
      avatar
    },
    publishedAt,
    readingTime,
    viewCount
  }
`

export const relatedBlogPostsQuery = groq`
  *[_type == "blogPost" && status == "published" && _id != $currentId && (
    count((categories[]._ref)[@ in $categoryIds]) > 0 ||
    count(tags[@ in $tags]) > 0
  )] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    categories[]->{
      title,
      slug,
      color
    },
    author->{
      name,
      slug,
      avatar
    },
    publishedAt,
    readingTime
  }
`

export const popularBlogPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(viewCount desc) [0...5] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author->{
      name,
      slug,
      avatar
    },
    publishedAt,
    viewCount
  }
`

// Author queries
export const authorsQuery = groq`
  *[_type == "author" && isActive == true] | order(featured desc, name asc) {
    _id,
    name,
    slug,
    shortBio,
    avatar,
    socialLinks,
    expertise,
    featured
  }
`

export const authorBySlugQuery = groq`
  *[_type == "author" && slug.current == $slug && isActive == true][0] {
    _id,
    name,
    slug,
    bio,
    shortBio,
    avatar,
    socialLinks,
    expertise,
    email
  }
`

// Category queries
export const categoriesQuery = groq`
  *[_type == "category" && isActive == true] | order(order asc, title asc) {
    _id,
    title,
    slug,
    description,
    color,
    icon,
    featured,
    "postCount": count(*[_type == "blogPost" && status == "published" && ^._id in categories[]._ref])
  }
`

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    description,
    color,
    icon,
    "postCount": count(*[_type == "blogPost" && status == "published" && ^._id in categories[]._ref])
  }
`

export const featuredCategoriesQuery = groq`
  *[_type == "category" && featured == true && isActive == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    color,
    icon,
    "postCount": count(*[_type == "blogPost" && status == "published" && ^._id in categories[]._ref])
  }
`

// Team queries
export const teamMembersQuery = groq`
  *[_type == "teamMember" && isActive == true] | order(order asc, _createdAt asc) {
    _id,
    name,
    slug,
    position,
    shortBio,
    profileImage,
    skills,
    specialties,
    experience,
    socialLinks,
    featured,
    order
  }
`

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug && isActive == true][0] {
    _id,
    name,
    slug,
    position,
    bio,
    shortBio,
    profileImage,
    skills,
    specialties,
    experience,
    socialLinks,
    joinedAt
  }
`

// Testimonials queries
export const testimonialsQuery = groq`
  *[_type == "testimonial" && isActive == true] | order(order asc, createdAt desc) {
    _id,
    clientName,
    clientPosition,
    clientCompany,
    testimonial,
    rating,
    clientImage,
    projectType,
    relatedProject->{
      title,
      slug
    },
    featured,
    createdAt
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true && isActive == true] | order(order asc, createdAt desc) {
    _id,
    clientName,
    clientPosition,
    clientCompany,
    testimonial,
    rating,
    clientImage,
    projectType
  }
`

// Pages queries
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    pageType,
    content,
    heroSection,
    seoTitle,
    seoDescription,
    seoKeywords,
    ogImage
  }
`

export const homepageQuery = groq`
  *[_type == "page" && pageType == "homepage" && isActive == true][0] {
    _id,
    title,
    heroSection,
    content,
    seoTitle,
    seoDescription,
    ogImage
  }
`