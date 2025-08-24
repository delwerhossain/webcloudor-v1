# CLAUDE.md - WebCloudor Development Guide

## Project Context
WebCloudor agency website with modular Next.js architecture adapted from Express.js patterns. Focus on clean code, type safety, and maintainable structure.

## Code Style Guide

### Component Pattern
```typescript
// ✅ Use arrow functions with const
const ServicesPage = async () => {
  const services = await getServices()
  return <ServicesView services={services} />
}
export default ServicesPage

// ❌ Avoid traditional function declarations
export default function ServicesPage() {}
```

### API Route Pattern
```typescript
// app/api/[resource]/route.ts
import { NextRequest } from 'next/server'
import { asyncHandler } from '@/lib/api/utils'

export const GET = asyncHandler(async (req: NextRequest) => {
  // Implementation
})

export const POST = asyncHandler(async (req: NextRequest) => {
  // Implementation  
})
```

## Modular Architecture

### Directory Structure
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
│   ├── response.ts        # Response helpers
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

### Error Handling
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

## Component Development

### Page Components
```typescript
// app/(marketing)/services/page.tsx
import { Metadata } from 'next'
import { ServiceHero, ServiceGrid } from '@/components/sections'
import { getServices } from '@/lib/api/modules/services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Web development and cloud architecture services'
}

const ServicesPage = async () => {
  const services = await getServices()
  
  return (
    <main>
      <ServiceHero />
      <ServiceGrid services={services} />
    </main>
  )
}

export default ServicesPage
```

### UI Components
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
  status: { type: String, enum: ['pending', 'confirmed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
})

// Indexes
consultationSchema.index({ email: 1, createdAt: -1 })

export const Consultation = mongoose.models.Consultation || 
  mongoose.model<IConsultation>('Consultation', consultationSchema)
```

## Validation

### Zod Schemas
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

## Quick Commands

### Component Generation
```bash
# Create new section component
Create a ServiceHero component using:
- Arrow function pattern
- Framer Motion animations
- Tailwind CSS with cn() utility
- TypeScript interfaces

# Create API route
Create /api/consultations route with:
- POST method using asyncHandler
- Zod validation
- Service layer pattern
- Proper error handling
```

### Common Patterns
```typescript
// Fetch pattern with error handling
const fetchWithError = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

// MongoDB connection singleton
let cached = global.mongoose
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}
```

## Environment Variables
```env
# .env.local
MONGODB_URI=
NEXT_PUBLIC_SITE_URL=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=
JWT_SECRET=
```

## Performance Checklist
- [ ] Use dynamic imports for heavy components
- [ ] Implement proper error boundaries
- [ ] Add loading.tsx and error.tsx files
- [ ] Use Suspense for async components
- [ ] Optimize images with next/image
- [ ] Implement proper caching strategies
- [ ] Use connection pooling for MongoDB

## Testing Approach
```typescript
// Simple API testing
const testConsultationCreate = async () => {
  const res = await fetch('/api/consultations', {
    method: 'POST',
    body: JSON.stringify({ /* data */ })
  })
  
  expect(res.status).toBe(201)
  const data = await res.json()
  expect(data.success).toBe(true)
}
```

## Deployment Notes
- Use Vercel for hosting
- MongoDB Atlas for database
- Environment variables in Vercel dashboard
- Enable Turbopack in production
- Monitor with Vercel Analytics