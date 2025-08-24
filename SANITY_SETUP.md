# Sanity CMS Setup for WebCloudor

## Overview

This project is configured with Sanity CMS for content management. Sanity provides a headless CMS that allows content editors to manage all website content through a user-friendly interface.

## Quick Setup

### 1. Create Sanity Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Note down your Project ID and Dataset name (usually 'production')

### 2. Configure Environment Variables

Update your `.env.local` file with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-api-token
```

### 3. Deploy Sanity Studio

Deploy your Sanity Studio to make it accessible online:

```bash
pnpm sanity:deploy
```

This will deploy your studio to `https://your-project-name.sanity.studio`

## Content Types

### Services (`service`)
- Title, slug, description
- Features list
- Technologies used
- Pricing information
- Display order

### Projects (`project`)
- Title, slug, description
- Image gallery
- Technologies used
- Category (web, cloud, ai, ecommerce, mobile)
- Client information
- Project and GitHub URLs
- Featured flag

### Blog Posts (`blogPost`)
- Title, slug, excerpt
- Rich text content with images
- Featured image
- Categories and tags
- Author (reference to team member)
- SEO metadata
- Featured flag

### Team Members (`teamMember`)
- Name, position, bio
- Profile image
- Skills and specialties
- Social links
- Experience years
- Featured flag

### Testimonials (`testimonial`)
- Client information
- Testimonial text
- Rating (1-5 stars)
- Client photo
- Related project
- Featured flag

### Pages (`page`)
- Dynamic page content
- Hero sections
- SEO metadata
- Page types (homepage, about, services, etc.)

## Usage

### Accessing Sanity Studio

You can access your Sanity Studio in two ways:

1. **Local Development**: Visit `http://localhost:3000/studio` when running your Next.js dev server
2. **Production**: Visit your deployed studio URL after running `pnpm sanity:deploy`

### Fetching Data in Components

```typescript
import { getServices, getFeaturedProjects } from '@/lib/sanity'

// In a server component
const ServicesPage = async () => {
  const services = await getServices()
  
  return (
    <div>
      {services.map(service => (
        <div key={service._id}>
          <h2>{service.title}</h2>
          <p>{service.shortDescription}</p>
        </div>
      ))}
    </div>
  )
}
```

### Image Optimization

Use the `urlFor` helper for optimized images:

```typescript
import { urlFor } from '@/sanity/lib/utils'

const ProjectCard = ({ project }) => (
  <div>
    {project.images?.[0] && (
      <img 
        src={urlFor(project.images[0]).width(400).height(300).url()} 
        alt={project.images[0].alt}
      />
    )}
  </div>
)
```

## Content Management Best Practices

### 1. SEO Fields
- Always fill in SEO title and description for pages and blog posts
- Keep SEO titles under 60 characters
- Keep SEO descriptions under 160 characters

### 2. Images
- Always provide alt text for accessibility
- Use appropriate image sizes (Sanity will optimize them)
- Add captions where helpful

### 3. Slugs
- Slugs are auto-generated from titles but can be customized
- Keep slugs short and descriptive
- Use hyphens instead of spaces

### 4. Content Organization
- Use the 'Featured' flag to highlight important content
- Set display orders for consistent sorting
- Use the 'Is Active' flag to draft content without publishing

## Development Commands

```bash
# Start Sanity Studio locally (alternative to /studio route)
pnpm sanity:start

# Deploy Sanity Studio
pnpm sanity:deploy

# Run Sanity CLI commands
pnpm sanity [command]
```

## Content Strategy

### Homepage
- Create a page with type "homepage"
- Configure hero section with compelling headline
- Feature your best projects and testimonials

### Services
- Create individual service documents
- Use clear, benefit-focused descriptions
- Include relevant technologies and pricing

### Projects
- Showcase your best work with high-quality images
- Include detailed technology stacks
- Link to live projects when possible

### Blog
- Regular posting schedule (aim for weekly)
- Mix technical tutorials with business insights
- Always include featured images and proper categorization

### Team
- Professional headshots and compelling bios
- Highlight unique skills and experience
- Keep social links up to date

## Troubleshooting

### Studio Not Loading
- Check environment variables are set correctly
- Ensure PROJECT_ID and DATASET match your Sanity project
- Verify API token has correct permissions

### Images Not Displaying
- Confirm images are uploaded to Sanity
- Check if `urlFor` helper is used correctly
- Verify image fields have alt text

### Content Not Appearing
- Check if content is marked as "active"
- Verify queries are fetching the right fields
- Ensure content is published (not draft)

## Support

For Sanity-specific questions, refer to:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)