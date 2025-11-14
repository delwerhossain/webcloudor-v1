# CLAUDE.md - WebCloudor Development Guide

## Project Context
Premium web agency site for tier-1/2 clients. Next.js 15 + TypeScript + MongoDB. Target: 3-5% consultation conversion, Core Web Vitals >90.

## Tech Stack
```typescript
Next.js 15.5 (App Router) | React 19.1 | TypeScript (strict)
Tailwind CSS v4 | MongoDB + Mongoose | Sanity CMS
shadcn/ui + Radix UI | Framer Motion | next-themes
Zustand + TanStack Query | React Hook Form + Zod
Resend + Nodemailer | NextAuth v5 | Biome (not ESLint)
Vercel hosting | pnpm package manager
```

## Project Structure
```
src/
├── app/                    → Next.js App Router (Pages & API routes)
│   ├── (marketing)/        → Public marketing pages
│   │   ├── about/          → About pages (company, careers, story)
│   │   ├── blog/           → Blog system with categories & authors
│   │   ├── contact/        → Contact page
│   │   ├── portfolio/      → Portfolio showcase & case studies
│   │   ├── services/       → Service pages (web, cloud, AI, etc.)
│   │   ├── team/           → Team page
│   │   └── ...policy pages → Privacy, terms, cookies
│   ├── api/               → API endpoints
│   │   ├── contact/       → Contact form handler
│   │   ├── consultation/  → Consultation booking
│   │   ├── newsletter/    → Newsletter subscription
│   │   ├── project-inquiry/ → Project inquiry forms
│   │   └── analytics/     → Web vitals tracking
│   ├── studio/            → Sanity CMS Studio interface
│   ├── layout.tsx         → Root layout
│   ├── page.tsx           → Homepage
│   ├── globals.css        → Global styles
│   ├── loading.tsx        → Loading UI
│   ├── error.tsx          → Error boundary
│   └── not-found.tsx      → 404 page
│
├── components/            → React components
│   ├── ui/               → shadcn/ui base components
│   ├── sections/         → Page sections by area
│   │   ├── home/         → Homepage sections
│   │   ├── about/        → About page sections
│   │   ├── services/     → Services sections
│   │   ├── portfolio/    → Portfolio sections
│   │   ├── team/         → Team sections
│   │   └── policies/     → Policy page components
│   ├── blog/             → Blog-specific components
│   ├── forms/            → Form components
│   ├── layout/           → Navigation, Footer
│   ├── conversion/       → CTA components
│   ├── analytics/        → Analytics integrations
│   ├── providers/        → Context providers
│   └── seo/              → SEO components
│
├── lib/                  → Utilities & backend
│   ├── api/             → Backend architecture
│   │   ├── errors/      → ApiError class
│   │   ├── utils/       → asyncHandler, apiResponse, db connection
│   │   └── modules/     → Business logic by feature
│   │       └── [feature]/
│   │           ├── model.ts      → Mongoose schema
│   │           ├── service.ts    → Business logic
│   │           ├── validation.ts → Zod schemas
│   │           └── types.ts      → TypeScript types
│   ├── seo/             → SEO utilities & schema.org
│   ├── utils/           → General utilities (cn, animations)
│   ├── sanity.ts        → Sanity client & queries
│   ├── resend.ts        → Email service (Resend API)
│   └── utils.ts         → Helper functions
│
sanity/                  → Sanity CMS configuration
├── schemas/             → Content schemas
│   ├── blogPost.ts      → Blog post schema
│   ├── author.ts        → Author schema
│   ├── category.ts      → Category schema
│   ├── project.ts       → Portfolio project schema
│   ├── service.ts       → Service schema
│   ├── teamMember.ts    → Team member schema
│   └── testimonial.ts   → Testimonial schema
└── lib/                 → Sanity utilities

scripts/                 → Automation scripts
├── auto-commit-manager.js  → Auto-commit system
├── populate-sanity.js      → Sanity data population
└── pre-commit.js           → Pre-commit validation

doc/                     → Documentation
├── api-instruction.md   → API patterns
├── frontend-instruction.md → Frontend optimization
├── database-instruction.md → Database schema
├── security-instruction.md → Security protocols
├── pages-details/       → Page specifications
└── ...                  → Design system, SEO, testing docs
```

## Path Aliases
```typescript
// Configured in tsconfig.json
"@/*"           → "./src/*"
"@/lib/*"       → "./src/lib/*"
"@/components/*" → "./src/components/*"
"@/app/*"       → "./src/app/*"
"@/sanity/*"    → "./sanity/*"
```

## Code Patterns

### Build Error Prevention
**CRITICAL**: Never use single quotes (') in JSX/TSX files as they cause build errors. Always use double quotes (") or template literals (`).

```typescript
// ❌ BAD: Causes build errors
const text = 'Don't use single quotes'
const message = 'Can't build with this'

// ✅ GOOD: Use double quotes or alternatives
const text = "Do not use single quotes"
const message = "Cannot build with this"
const template = `Won't cause issues in template literals`
```

### Components (Arrow Functions Only)
```typescript
// ✅ Page Component
const ServicesPage = async () => {
  const services = await getServices()
  return <ServicesView services={services} />
}
export default ServicesPage

// ✅ Client Component (minimal)
'use client'
export const Button = ({ onClick }) => (
  <button onClick={onClick}>Click</button>
)
```

### API Routes
```typescript
// src/app/api/[resource]/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { ApiError } from '@/lib/api/errors/ApiError'
import { connectDB } from '@/lib/api/utils/db'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email()
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB()

  const body = await req.json()
  const data = schema.parse(body)
  const result = await service.create(data)

  return ApiResponse.success(result, 201)
})
```

### Service Layer
```typescript
// src/lib/api/modules/[feature]/service.ts
import { Model } from './model'
import { ApiError } from '@/lib/api/errors/ApiError'
import type { CreateDTO } from './types'

export const service = {
  create: async (data: CreateDTO) => {
    // Check duplicates
    const existing = await Model.findOne({ email: data.email })
    if (existing) {
      throw new ApiError(409, 'Resource already exists')
    }

    // Create resource
    const resource = await Model.create(data)
    return resource
  },

  findById: async (id: string) => {
    const resource = await Model.findById(id)
    if (!resource) {
      throw new ApiError(404, 'Resource not found')
    }
    return resource
  },

  update: async (id: string, data: Partial<CreateDTO>) => {
    const resource = await Model.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    )
    if (!resource) {
      throw new ApiError(404, 'Resource not found')
    }
    return resource
  },

  delete: async (id: string) => {
    const resource = await Model.findByIdAndDelete(id)
    if (!resource) {
      throw new ApiError(404, 'Resource not found')
    }
    return { message: 'Resource deleted successfully' }
  }
}
```

### Email Service (Resend)
```typescript
// src/lib/resend.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactFormEmail = async (data: {
  name: string
  email: string
  message: string
  phone?: string
  company?: string
}) => {
  // Send to admin
  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: 'hello@webcloudor.com',
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  })

  // Send confirmation to user
  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: data.email,
    subject: 'Thank you for contacting WebCloudor',
    html: `
      <h2>Thank you for reaching out!</h2>
      <p>We have received your message and will get back to you soon.</p>
    `
  })
}
```

### Error Handling
```typescript
// lib/api/utils/asyncHandler.ts
export const asyncHandler = (handler) => async (req, ctx) => {
  try {
    return await handler(req, ctx)
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json({ error: error.message }, { status: error.statusCode })
    }
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
```

### Database
```typescript
// src/lib/api/modules/[feature]/model.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IModel extends Document {
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema<IModel>({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

// Indexes for performance
schema.index({ email: 1 })
schema.index({ createdAt: -1 })

// Prevent model overwrite in hot reload
export const Model = mongoose.models.Model || mongoose.model<IModel>('Model', schema)
```

### Database Connection
```typescript
// src/lib/api/utils/db.ts
import mongoose from 'mongoose'

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI!, {
      bufferCommands: false,
      maxPoolSize: 10,
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}
```

### Validation
```typescript
// Zod Schema
export const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  serviceInterest: z.array(z.enum(['web', 'cloud', 'ai']))
})

export type DTO = z.infer<typeof schema>
```

## Frontend Optimization

### Minimize Client Components
```typescript
// ❌ BAD: Entire section client
'use client'
export const Hero = () => { /* everything */ }

// ✅ GOOD: Only interactive parts
export const Hero = () => (
  <section>
    <h1>Static Content</h1>
    <InteractiveButton /> {/* Only this is 'use client' */}
  </section>
)
```

### Animation Pattern
```typescript
// GPU-optimized
const animation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

// Respect reduced motion
const shouldReduce = useReducedMotion()
```

### Dynamic Imports
```typescript
import dynamic from 'next/dynamic'

const Heavy = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
  ssr: false
})
```

## Sanity CMS Integration

### Query Blog Posts
```typescript
// src/lib/sanity.ts
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export const getBlogPosts = async () => {
  return await client.fetch(groq`
    *[_type == "blogPost" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      featured,
      "author": author->{name, slug, image},
      "categories": categories[]->{title, slug, color},
      featuredImage
    }
  `)
}
```

### Sanity Schemas
```typescript
// sanity/schemas/blogPost.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    }),
    // ... more fields
  ]
})
```

### Accessing Sanity Studio
- **Local:** `http://localhost:3000/studio`
- **Production:** `https://yourdomain.com/studio`
- **Populate data:** `pnpm sanity:populate`

## Common Tasks

### Add Service
1. Create Sanity schema in `sanity/schemas/service.ts`
2. Create component in `src/components/sections/services/`
3. Add page in `src/app/(marketing)/services/[slug]/page.tsx`
4. Update navigation in `src/components/layout/navigation.tsx`
5. Add to service overview grid

### Create API Endpoint
1. Define Zod validation schema in route file
2. Create model in `src/lib/api/modules/[feature]/model.ts`
3. Create service in `src/lib/api/modules/[feature]/service.ts`
4. Add route in `src/app/api/[resource]/route.ts`
5. Use asyncHandler and ApiResponse
6. Add error handling with ApiError

### Add Form
1. Create Zod schema for validation
2. Create form component with React Hook Form
3. Add API route for processing
4. Implement email notification (Resend)
5. Add success/error states with toast notifications
6. Add loading states

### Add Blog Post (via Sanity)
1. Access Sanity Studio at `/studio`
2. Create new blog post
3. Add author, categories, featured image
4. Preview and publish
5. Auto-generates at `/blog/[slug]`

### Setup Analytics Integration
1. Add tracking component to `src/components/analytics/`
2. Import in root layout
3. Add environment variables
4. Configure tracking IDs
5. Test with Web Vitals API

## Performance Checklist
- [ ] Dynamic imports for >50KB components
- [ ] Images: next/image with priority/blur
- [ ] Minimize 'use client' usage
- [ ] MongoDB connection pooling
- [ ] Suspense boundaries for async
- [ ] loading.tsx & error.tsx files

## Testing
```typescript
// API Test
const res = await fetch('/api/endpoint', {
  method: 'POST',
  body: JSON.stringify(data)
})
expect(res.status).toBe(201)

// Component Test
render(<Component />)
expect(screen.getByRole('heading')).toBeInTheDocument()
```

## Environment Variables
```env
# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://webcloudor.com

# Authentication & Security
JWT_SECRET=your-jwt-secret-key-here
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3000

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxx
FROM_EMAIL=hello@webcloudor.com

# Email Service (Nodemailer - optional backup)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=email@gmail.com
SMTP_PASSWORD=app-password

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
SANITY_API_READ_TOKEN=your-read-token

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
NEXT_PUBLIC_CLARITY_ID=your-clarity-id

# Other
NODE_ENV=development|production
```

### Setup Instructions
1. Copy `.env.example` to `.env.local`
2. Fill in all required variables
3. Never commit `.env.local` to git
4. Use Vercel environment variables in production
5. Validate with `pnpm build` before deploying

## AI Commands

### Component
"Create [Component] in src/components/sections/[area]/ with: arrow functions, Framer Motion, Tailwind + cn(), TypeScript, mobile-first, proper imports using @/ aliases"

### API Endpoint
"Create /api/[route] with: asyncHandler, Zod validation, connectDB, service layer, ApiError handling, ApiResponse format, proper TypeScript types"

### Page
"Create [Page] from doc/pages-details/[page].md with: server components, minimal client components, shadcn/ui, SEO metadata, proper layout, loading and error states"

### Blog Integration
"Query blog posts from Sanity with: author details, categories, featured image, proper typing, error handling, optional mock data fallback"

### Form Component
"Create [Form] with: React Hook Form, Zod validation, toast notifications (sonner), loading states, error handling, proper accessibility"

## Critical Docs (Always Reference)
```
doc/
├── prd.md                        → Product requirements
├── api-instruction.md            → API patterns
├── content-instruction.md        → Content guidelines
├── database-instruction.md       → DB schema
├── deployment-instruction.md     → Deployment guides
├── design_system-instruction.md  → Colors, typography
├── frontend-instruction.md       → Frontend optimization
├── security-instruction.md       → Security protocols
├── seo-config-instruction.md     → SEO strategy
├── tech-stack-instruction.md     → Technology stack
├── testing-instruction.md        → Testing guidelines
└── pages-details/               → Page specifications
    ├── homepage.md
    ├── services_page.md
    ├── portfolio_page.md
    ├── about_page.md
    ├── team_page.md
    ├── blog_pages.md
    ├── cookie_policy.md
    ├── privacy_policy.md
    └── terms_conditions.md
```

## Scripts & Development Tools

### Package Manager
- **Always use pnpm** (not npm or yarn)
- Install: `pnpm install` or `pnpm i`
- Add package: `pnpm add [package]`
- Dev dependency: `pnpm add -D [package]`

### Available Scripts
```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run Biome linter
pnpm format           # Format code with Biome

# Sanity CMS
pnpm sanity:start     # Start Sanity Studio standalone
pnpm sanity:deploy    # Deploy Sanity Studio
pnpm sanity:populate  # Populate with sample data

# Git & Commits
pnpm commit           # Auto-commit (max 5 files)
pnpm commit-all       # Commit all changes in chunks
pnpm commit-check     # Analyze commit recommendations
pnpm commit-interactive # Interactive commit mode

# Quick start
pnpm x                # Install deps + start dev server
```

### Pre-commit Hooks
- Located in `hooks/pre-commit.js`
- Runs Biome checks before commits
- Validates TypeScript compilation
- Prevents commits with errors
- Auto-fixes formatting issues

### Code Quality Tools
- **Biome**: Linting and formatting (replaces ESLint + Prettier)
- **TypeScript**: Strict mode enabled
- **Git hooks**: Pre-commit validation
- **Auto-commit**: Intelligent chunked commits

## Rules

### PREVENT DUPLICATION
Before creating anything, search codebase for existing similar code. Build upon existing patterns instead of creating new variations. Avoid doc/old/ folder. Create new documentation in doc/others/. Testing scripts go in scripts/test/. **Always use pnpm** as the package manager.

## MCP (Model Context Protocol) Usage
Available MCP tools - use as needed:
1.context7 - Context management
2.filesystem - File operations
3.github - Repository management
4.memory - State persistence
5.shadcn - UI component integration
6.mongodb - Database operations
7.(Avoid playwright MCP only base on command u can use)


### Success Criteria
1. Design compliance with `/doc/` specs
2. Core Web Vitals >90
3. WCAG 2.2 AA compliance
4. TypeScript strict, no `any`
5. Mobile-first responsive
6. Performant animations
7. Proper SEO/meta tags
8. Arrow function pattern

### Component Library (shadcn/ui)
Available components in `src/components/ui/`:
- **accordion**: Collapsible content sections
- **badge**: Status/category badges
- **button**: Primary/secondary/outline variants
- **card**: Content containers with header/footer
- **checkbox**: Form checkboxes
- **dialog**: Modal dialogs
- **input**: Form inputs
- **label**: Form labels
- **optimized-image**: Next Image wrapper with placeholders
- **section-container**: Consistent section spacing
- **theme-toggle**: Dark/light mode switcher

Import pattern: `import { Button, Card } from "@/components/ui"`

### Workflow
1. **Read specifications**: Check `/doc/pages-details/` for page requirements
2. **Search existing code**: Use Grep/Glob to find similar patterns
3. **Check dependencies**: Verify required Sanity schemas exist
4. **Plan architecture**: Decide server vs client component split
5. **Implement with patterns**: Use established patterns (asyncHandler, ApiResponse, etc.)
6. **Add animations**: Performance-first, GPU-optimized, respect reduced motion
7. **Test thoroughly**: Check responsiveness, accessibility, Core Web Vitals
8. **Validate build**: Run `pnpm build` to catch errors
9. **Commit properly**: Use conventional commits, proper chunking
10. **Deploy to Vercel**: Push to main branch

### Development Workflow
```bash
# Start new feature
git checkout -b feature/feature-name
pnpm i                          # Install dependencies
pnpm dev                        # Start dev server

# During development
pnpm lint                       # Check for issues
pnpm format                     # Format code
pnpm build                      # Validate build

# Commit changes
pnpm commit                     # Auto-commit with validation
# or
git add .
git commit -m "feat: add feature"
git push origin feature/feature-name
```

**Remember:** Business-critical site. Every detail converts prospects to consultations. Prioritize performance, accessibility, and conversion optimization.