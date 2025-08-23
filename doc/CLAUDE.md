# Claude Code Integration Guide
**WebCloudor Agency Website Development**

## Project Overview for AI Context

WebCloudor is a premium web agency website built to convert tier-1/2 clients through professional presentation and streamlined consultation booking. The project uses modern web technologies with a focus on performance, accessibility, and conversion optimization.

### Key Project Characteristics
- **Business Focus:** Lead generation for web agency services
- **Target Audience:** CTOs, VPs of Engineering, Marketing Directors at growth companies
- **Conversion Goals:** 3-5% consultation booking rate from website visitors
- **Technical Standards:** Core Web Vitals >90, WCAG 2.2 AA compliance

## Technology Stack Context

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

## Project Structure Understanding

```
webcloudor/
├── src/
│   └── app/                # Next.js App Router (main application)
├── components/             # React components (UI building blocks)
├── lib/                    # Utilities and configurations
├── types/                  # TypeScript type definitions
├── doc/                    # Design specifications (IMPORTANT for context)
│   ├── pages-details/      # Detailed page specifications
│   └── reports/            # Project reports and documentation
└── public/                 # Static assets
```

### Critical Design Documents
Located in `/doc/` folder - **READ THESE FIRST**:
- `design_system.md` - Brand colors, typography, spacing rules
- `prd.md` - Product Requirements Document
- `tech_stack.md` - Technology stack specifications
- `CLAUDE.md` - AI development guidelines (this file)

### Page-Specific Documentation
Located in `/doc/pages-details/` folder:
- `homepage.md` - Homepage sections and animations
- `services_page.md` - Services structure and content
- `portfolio_page.md` - Portfolio layout and case studies
- `about_page.md` - Team information and company story
- `team_page.md` - Team member profiles and structure
- `blog_pages.md` - Blog layout and content strategy
- `cookie_policy.md` - Cookie policy page content
- `privacy_policy.md` - Privacy policy page content
- `terms_conditions.md` - Terms and conditions page content

## Component Development Guidelines

### shadcn/ui Integration
```bash
# Adding new UI components
npx shadcn@latest add [component-name]

# Available components we commonly use:
npx shadcn@latest add button card dialog form input select tabs accordion
```

### Component Architecture Pattern
```typescript
// Example: Hero Section Component
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Content based on homepage.md specifications */}
      </motion.div>
    </section>
  )
}
```

## Effective Prompts for WebCloudor Development

### Page Development
```
Create the WebCloudor homepage hero section based on the design specifications in doc/homepage.md. Use:
- Next.js 15 App Router
- shadcn/ui components
- Framer Motion animations (fade up with 300ms stagger)
- Tailwind CSS with the color scheme from doc/design_system.md
- TypeScript with proper interfaces
- Responsive design (mobile-first)

The hero should include: headline, subheadline, CTA buttons, trust indicators, and floating metric cards with subtle parallax.
```

### Component Creation
```
Build a contact form component for WebCloudor using:
- React Hook Form + Zod validation
- shadcn/ui form components
- Multi-step form structure from doc/contact_page.md
- Proper TypeScript types
- Error handling and success states
- Framer Motion transitions between steps
- Mobile-responsive design
```

### API Route Development
```
Create a Next.js API route for handling consultation bookings with:
- Input validation using Zod schemas
- MongoDB integration with Mongoose
- Email notifications using Nodemailer
- Proper error handling and HTTP status codes
- TypeScript interfaces for request/response
- Rate limiting for security
```

### Animation Implementation
```
Add scroll-triggered animations to the WebCloudor services section using:
- Framer Motion with intersection observer
- Staggered card reveals (150ms delay between cards)
- Performance-optimized transforms (translateY, opacity)
- Respect for prefers-reduced-motion
- Animation specs from doc/services_page.md
```

## File Creation Patterns

### New Page Structure
```typescript
// app/services/page.tsx
import { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/service-hero'
import { ServiceGrid } from '@/components/sections/service-grid'
// Import other sections based on services_page.md

export const metadata: Metadata = {
  title: 'Services | WebCloudor',
  description: 'Web development, cloud architecture, and AI automation services'
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <ServiceGrid />
      {/* Other sections per design spec */}
    </main>
  )
}
```

### Component File Structure
```typescript
// components/sections/hero.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { HeroMetricCard } from '@/components/ui/hero-metric-card'

// Define animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export function Hero() {
  // Component logic based on homepage.md
}
```

### API Route Pattern
```typescript
// app/api/consultation/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { connectDB } from '@/lib/db'
import { sendNotificationEmail } from '@/lib/email'

const consultationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10)
})

export async function POST(request: NextRequest) {
  // Implementation with proper error handling
}
```

## Database Schema Context

### Key Collections
```typescript
// User consultation bookings
interface Consultation {
  _id: ObjectId
  name: string
  email: string
  company?: string
  serviceInterest: string[]
  projectDescription: string
  budgetRange: string
  timeline: string
  status: 'pending' | 'confirmed' | 'completed'
  scheduledAt?: Date
  createdAt: Date
}

// Portfolio projects
interface Project {
  _id: ObjectId
  title: string
  client: string
  industry: string
  services: string[]
  metrics: {
    outcome: string
    percentage: number
    description: string
  }[]
  images: string[]
  featured: boolean
  status: 'draft' | 'published'
}
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

## Debugging and Optimization

### Performance Debugging
```bash
# Bundle analysis
npm run analyze

# Core Web Vitals testing
npm run dev
# Open localhost:3000 in Chrome
# DevTools > Lighthouse > Performance audit
```

### Common Fixes
```typescript
// Image optimization
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

// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./heavy-component'), {
  loading: () => <div>Loading...</div>
})
```

## Error Handling Patterns

### API Error Handling
```typescript
export async function POST(request: NextRequest) {
  try {
    // Operation
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
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

## Testing Context

### Component Testing Approach
```typescript
// Use React Testing Library for component tests
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/hero'

test('renders hero headline correctly', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
})
```

## Deployment Considerations

### Environment Variables
```bash
# Required for production
MONGODB_URI=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=
FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
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

## Success Criteria for AI Development

When working on WebCloudor, ensure:
1. **Design Compliance:** All components match specifications in `/doc/` folder
2. **Performance:** Core Web Vitals scores >90
3. **Accessibility:** WCAG 2.2 AA compliance with proper ARIA labels
4. **TypeScript:** Strict mode with no `any` types
5. **Responsive:** Mobile-first design approach
6. **Animations:** Smooth, performant, respect reduced motion
7. **SEO:** Proper meta tags, structured data, semantic HTML

Remember: This is a business-critical website for client acquisition. Every detail matters for converting high-value prospects into consultations.