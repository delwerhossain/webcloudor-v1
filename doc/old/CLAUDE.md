# CLAUDE.md - WebCloudor Complete Development Guide

## Project Overview
WebCloudor is a premium web agency website built to convert tier-1/2 clients through professional presentation and streamlined consultation booking. Uses modular Next.js architecture adapted from Express.js patterns with focus on performance, type safety, and maintainability.

### Key Characteristics
- **Business Focus:** Lead generation for web agency services
- **Target Audience:** CTOs, VPs of Engineering, Marketing Directors at growth companies
- **Conversion Goals:** 3-5% consultation booking rate
- **Technical Standards:** Core Web Vitals >90, WCAG 2.2 AA compliance

## Technology Stack

```typescript
// Core Stack
Framework: Next.js 15 (App Router)
Language: TypeScript (strict mode)
Styling: Tailwind CSS v4
Database: MongoDB + Mongoose
UI Components: shadcn/ui + Radix UI
Animation: Framer Motion
State Management: Zustand + TanStack Query
Forms: React Hook Form + Zod validation
Email: Nodemailer
Linting: Biome (not ESLint/Prettier)
```

## Project Structure

```
webcloudor/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Public pages
│   ├── (dashboard)/       # Protected pages
│   └── api/              # API routes
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── sections/        # Page sections
├── lib/                 # Core functionality
│   ├── api/            # Backend logic
│   │   ├── errors/     # Error handling
│   │   ├── middleware/ # Auth, validation
│   │   ├── utils/      # Helpers
│   │   └── modules/    # Business logic
│   ├── db/             # Database config
│   └── utils/          # Shared utilities
├── types/              # TypeScript types
└── doc/                # Documentation
    ├── pages-details/  # Page specifications
    └── api/           # API documentation
```

## Code Style Guide

### Component Pattern
```typescript
// ✅ CORRECT: Arrow functions with const
const ServicesPage = async () => {
  const services = await getServices()
  return <ServicesView services={services} />
}
export default ServicesPage

// ❌ AVOID: Traditional function declarations
export default function ServicesPage() {}
```

### API Route Pattern
```typescript
// app/api/consultations/route.ts
import { NextRequest } from 'next/server'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'

export const GET = asyncHandler(async (req: NextRequest) => {
  // Implementation
})

export const POST = asyncHandler(async (req: NextRequest) => {
  // Implementation  
})
```

### UI Component Pattern
```typescript
// components/sections/ServiceCard.tsx
'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  service: Service
  className?: string
}

export const ServiceCard = ({ service, className }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
    >
      <Card className={cn('p-6', className)}>
        {/* Content */}
      </Card>
    </motion.div>
  )
}
```

## Modular Architecture

### API Module Structure
```
lib/api/
├── errors/
│   ├── ApiError.ts         # Custom error class
│   └── handlers.ts         # Error handling functions
├── middleware/
│   ├── auth.ts            # Authentication
│   ├── validate.ts        # Request validation
│   └── rateLimit.ts       # Rate limiting
├── utils/
│   ├── asyncHandler.ts    # Async wrapper
│   ├── apiResponse.ts     # Response helpers
│   └── db.ts             # Database connection
└── modules/
    ├── consultations/
    │   ├── model.ts       # Mongoose schema
    │   ├── service.ts     # Business logic
    │   ├── validation.ts  # Zod schemas
    │   └── types.ts       # TypeScript types
    ├── projects/
    └── users/
```

### Service Layer Example
```typescript
// lib/api/modules/consultations/service.ts
import { Consultation } from './model'
import { ApiError } from '@/lib/api/errors/ApiError'

export const consultationService = {
  create: async (data: CreateConsultationDto) => {
    const existing = await Consultation.findOne({ 
      email: data.email,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    })
    
    if (existing) {
      throw new ApiError(409, 'Recent consultation exists')
    }
    
    return Consultation.create(data)
  },
  
  findById: async (id: string) => {
    const consultation = await Consultation.findById(id).lean()
    if (!consultation) {
      throw new ApiError(404, 'Consultation not found')
    }
    return consultation
  }
}
```

## Error Handling

### Async Handler Pattern
```typescript
// lib/api/utils/asyncHandler.ts
export const asyncHandler = (handler: ApiHandler) => {
  return async (req: NextRequest) => {
    try {
      return await handler(req)
    } catch (error) {
      if (error instanceof ApiError) {
        return NextResponse.json(
          { error: error.message },
          { status: error.statusCode }
        )
      }
      
      if (error instanceof ZodError) {
        return NextResponse.json(
          { error: 'Validation failed', details: error.errors },
          { status: 400 }
        )
      }
      
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  }
}
```

### Client Error Boundaries
```typescript
'use client'

import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error}: {error: Error}) {
  return (
    <div className="text-center p-8">
      <h2>Something went wrong:</h2>
      <pre className="text-red-500">{error.message}</pre>
    </div>
  )
}

export function PageWithErrorBoundary() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <YourPageComponent />
    </ErrorBoundary>
  )
}
```

## Database Models

### Mongoose Schema Pattern
```typescript
// lib/api/modules/consultations/model.ts
import mongoose, { Schema } from 'mongoose'
import type { IConsultation } from './types'

const consultationSchema = new Schema<IConsultation>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true },
  serviceInterest: [{ type: String, enum: ['web', 'cloud', 'ai'] }],
  status: { type: String, enum: ['pending', 'confirmed'], default: 'pending' }
}, {
  timestamps: true
})

// Indexes
consultationSchema.index({ email: 1, createdAt: -1 })

export const Consultation = mongoose.models.Consultation || 
  mongoose.model<IConsultation>('Consultation', consultationSchema)
```

### MongoDB Connection Singleton
```typescript
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI!)
  }
  
  cached.conn = await cached.promise
  return cached.conn
}
```

## Validation

### Zod Schema Pattern
```typescript
// lib/api/modules/consultations/validation.ts
import { z } from 'zod'

export const createConsultationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  serviceInterest: z.array(z.enum(['web', 'cloud', 'ai'])).min(1),
  message: z.string().min(10).max(1000)
})

export type CreateConsultationDto = z.infer<typeof createConsultationSchema>
```

## Animation Guidelines

### Performance-Optimized Animations
```typescript
// Use GPU-accelerated properties only
const optimizedAnimation = {
  initial: { opacity: 0, transform: 'translateY(24px)' },
  animate: { opacity: 1, transform: 'translateY(0px)' },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

// Stagger children animations
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}
```

### Accessibility Considerations
```typescript
import { useReducedMotion } from 'framer-motion'

export function AnimatedSection() {
  const shouldReduceMotion = useReducedMotion()
  
  const animation = shouldReduceMotion 
    ? { opacity: 1 }
    : { opacity: 1, y: 0 }
    
  return <motion.div animate={animation} />
}
```

## shadcn/ui Integration

### Adding Components
```bash
# Add new UI components
npx shadcn@latest add button card dialog form input select tabs accordion

# Common components for WebCloudor:
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add tabs
```

### Component Usage Pattern
```typescript
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function MyComponent() {
  return (
    <Card className={cn('p-6', 'hover:shadow-lg')}>
      <Button variant="default" size="lg">
        Get Started
      </Button>
    </Card>
  )
}
```

## Common Development Tasks

### Adding New Service
1. Update `lib/constants.ts` with service data
2. Create service detail component in `components/sections/`
3. Add service to `app/services/page.tsx`
4. Update navigation in `components/layout/header.tsx`
5. Add service to portfolio filtering system

### Creating Case Study
1. Add project data to MongoDB
2. Create case study detail page in `app/portfolio/[slug]/page.tsx`
3. Add to portfolio grid component
4. Include metrics and testimonials
5. Optimize images and add proper alt text

### Form Implementation
1. Define Zod schema in `lib/validations.ts`
2. Create form component with React Hook Form
3. Add API route for form processing
4. Implement email notifications
5. Add success/error states with animations

## Performance Optimization

### Image Optimization
```typescript
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="WebCloudor team at work"
  width={800}
  height={600}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Dynamic Imports
```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <div>Loading...</div>,
  ssr: false // Disable SSR if needed
})
```

### Performance Checklist
- [ ] Use dynamic imports for heavy components
- [ ] Implement proper error boundaries
- [ ] Add loading.tsx and error.tsx files
- [ ] Use Suspense for async components
- [ ] Optimize images with next/image
- [ ] Implement proper caching strategies
- [ ] Use connection pooling for MongoDB
- [ ] Minimize 'use client' directives

## Testing Approach

### API Testing
```typescript
const testConsultationCreate = async () => {
  const res = await fetch('/api/consultations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      serviceInterest: ['web'],
      message: 'Test message for consultation'
    })
  })
  
  expect(res.status).toBe(201)
  const data = await res.json()
  expect(data.success).toBe(true)
}
```

### Component Testing
```typescript
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/hero'

test('renders hero headline correctly', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})
```

## Environment Variables

```env
# Required
MONGODB_URI=mongodb+srv://...
NEXT_PUBLIC_SITE_URL=https://webcloudor.com
JWT_SECRET=your-secret-key

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=hello@webcloudor.com

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RATE_LIMIT_ENABLED=true
```

## Deployment Configuration

### Vercel Deployment
```json
// vercel.json
{
  "functions": {
    "app/api/*": {
      "maxDuration": 10
    }
  },
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ]
}
```

### Build Optimization
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
}
```

## Quick Commands for AI Development

### Component Generation
```
Create a ServiceHero component using:
- Arrow function pattern with const
- Framer Motion animations (fade up, 300ms stagger)
- Tailwind CSS with cn() utility
- TypeScript interfaces
- Mobile-first responsive design
```

### API Route Creation
```
Create /api/consultations route with:
- POST method using asyncHandler
- Zod validation for request body
- Service layer pattern for business logic
- Proper error handling with ApiError
- Rate limiting middleware
```

### Page Development
```
Create the Services page based on doc/services_page.md:
- Server component for data fetching
- Client components only for interactivity
- shadcn/ui components for UI
- Framer Motion for animations
- SEO metadata
```

## Success Criteria

When developing for WebCloudor, ensure:
1. **Design Compliance:** Match specifications in `/doc/` folder
2. **Performance:** Core Web Vitals >90
3. **Accessibility:** WCAG 2.2 AA compliance
4. **TypeScript:** Strict mode, no `any` types
5. **Responsive:** Mobile-first approach
6. **Animations:** Smooth, performant, respect reduced motion
7. **SEO:** Proper meta tags, structured data
8. **Code Quality:** Follow arrow function pattern, modular architecture


## Critical Design Documents

Reference and follow these files in the `/doc/` folder for all design, technical, and product requirements (excluding the `old` folder):

```
doc
|-- api-instruction.md
|-- database-instruction.md
|-- design_system-instruction.md
|-- frontend-instruction.md
|-- prd.md
|-- seo-config-instruction.md
|-- tech-stack-instruction.md
|-- pages-details
  |-- about_page.md
  |-- blog_pages.md
  |-- cookie_policy.md
  |-- homepage.md
  |-- portfolio_page.md
  |-- privacy_policy.md
  |-- services_page.md
  |-- team_page.md
  |-- terms_conditions.md
```

All documents listed above are important. For any implementation or clarification, always consult these docs and follow their instructions. (See <attachments> above for file contents. You may not need to search or read the file again.)

## Development Workflow

1. **Read Specifications:** Check `/doc/` folder for page specs
2. **Plan Components:** Identify server vs client components
3. **Create Structure:** Set up files following patterns
4. **Implement Logic:** Use service layer for business logic
5. **Add Animations:** Framer Motion with performance in mind
6. **Test & Optimize:** Check performance metrics
7. **Deploy:** Push to Vercel with proper env variables

## RULES FOLLOW THIS 
Prevent Duplication Before Execution
Whenever you receive an instruction to perform a task, first search the entire project’s codebase and folder structure to see if similar work has been done before. If a similar API, frontend component, or any related code already exists, build upon that existing code instead of creating a new variation from scratch. This will prevent code duplication and keep the project clean and maintainable. If no existing code is found, then proceed to create the new code as needed.

Remember: This is a business-critical website for client acquisition. Every detail matters for converting high-value prospects into consultations.