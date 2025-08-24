# WebCloudor API Specifications

## Overview
RESTful API design for WebCloudor agency website built with Next.js App Router. Follows modular pattern adapted from Express.js with optimized error handling and type safety.

---

## API Architecture

### Next.js Modular Structure
```
app/api/
├── auth/
│   ├── login/route.ts
│   ├── register/route.ts
│   ├── forgot-password/route.ts
│   └── verify-email/route.ts
├── consultations/
│   ├── route.ts
│   └── [id]/route.ts
├── projects/
│   ├── route.ts
│   ├── [slug]/route.ts
│   └── featured/route.ts
├── blog/
│   ├── route.ts
│   ├── [slug]/route.ts
│   └── categories/route.ts
├── contact/
│   └── route.ts
├── newsletter/
│   ├── route.ts
│   ├── subscribe/route.ts
│   └── unsubscribe/route.ts
└── admin/
    ├── consultations/route.ts
    ├── projects/route.ts
    └── analytics/route.ts

lib/
├── api/
│   ├── services/
│   │   ├── consultationService.ts
│   │   ├── projectService.ts
│   │   ├── blogService.ts
│   │   └── emailService.ts
│   ├── controllers/
│   │   ├── consultationController.ts
│   │   ├── projectController.ts
│   │   └── blogController.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   ├── validation.ts
│   │   ├── rateLimit.ts
│   │   └── errorHandler.ts
│   └── utils/
│       ├── apiResponse.ts
│       ├── asyncHandler.ts
│       └── apiError.ts
```

### Error Handling System
```typescript
// lib/api/utils/apiError.ts
export class ApiError extends Error {
  public statusCode: number
  public isOperational: boolean

  constructor(
    statusCode: number, 
    message: string, 
    isOperational = true, 
    stack = ''
  ) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

// Predefined errors
export const ApiErrors = {
  badRequest: (message: string) => new ApiError(400, message),
  unauthorized: (message: string) => new ApiError(401, message),
  forbidden: (message: string) => new ApiError(403, message),
  notFound: (message: string) => new ApiError(404, message),
  conflict: (message: string) => new ApiError(409, message),
  validationError: (message: string) => new ApiError(422, message),
  internal: (message: string) => new ApiError(500, message)
}
```

### Async Handler Wrapper
```typescript
// lib/api/utils/asyncHandler.ts
import { NextRequest, NextResponse } from 'next/server'
import { ApiError } from './apiError'
import { ZodError } from 'zod'
import mongoose from 'mongoose'

type ApiHandler = (req: NextRequest) => Promise<NextResponse>

export const asyncHandler = (handler: ApiHandler) => {
  return async (req: NextRequest): Promise<NextResponse> => {
    try {
      return await handler(req)
    } catch (error) {
      return handleError(error)
    }
  }
}

const handleError = (error: unknown): NextResponse => {
  let statusCode = 500
  let message = 'Internal Server Error'
  let details: any = null

  if (error instanceof ApiError) {
    statusCode = error.statusCode
    message = error.message
  } else if (error instanceof ZodError) {
    statusCode = 400
    message = 'Validation Error'
    details = error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message
    }))
  } else if (error instanceof mongoose.Error.ValidationError) {
    statusCode = 400
    message = 'Database Validation Error'
    details = Object.values(error.errors).map(err => ({
      field: err.path,
      message: err.message
    }))
  } else if (error instanceof mongoose.Error.CastError) {
    statusCode = 400
    message = 'Invalid ID format'
    details = { field: error.path, value: error.value }
  } else if (error instanceof Error) {
    message = error.message
  }

  const response = {
    success: false,
    message,
    ...(details && { details }),
    ...(process.env.NODE_ENV === 'development' && error instanceof Error && { stack: error.stack })
  }

  return NextResponse.json(response, { status: statusCode })
}
```

### API Response Utility
```typescript
// lib/api/utils/apiResponse.ts
import { NextResponse } from 'next/server'

interface ApiResponseOptions<T> {
  success?: boolean
  message?: string
  data?: T
  meta?: {
    page?: number
    limit?: number
    total?: number
    totalPages?: number
  }
}

export class ApiResponse {
  static success<T>(
    data?: T,
    message = 'Success',
    statusCode = 200,
    meta?: ApiResponseOptions<T>['meta']
  ) {
    const response: ApiResponseOptions<T> = {
      success: true,
      message,
      data,
      ...(meta && { meta })
    }

    return NextResponse.json(response, { status: statusCode })
  }

  static created<T>(data?: T, message = 'Created successfully') {
    return this.success(data, message, 201)
  }

  static error(message: string, statusCode = 400, details?: any) {
    const response = {
      success: false,
      message,
      ...(details && { details })
    }

    return NextResponse.json(response, { status: statusCode })
  }
}
```

---

## API Endpoints

### Authentication Endpoints

#### POST /api/auth/login
```typescript
// app/api/auth/login/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { authService } from '@/lib/api/services/authService'

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

export const POST = asyncHandler(async (req: NextRequest) => {
  const body = await req.json()
  const validatedData = loginSchema.parse(body)
  
  const result = await authService.login(validatedData)
  
  return ApiResponse.success(result, 'Login successful')
})
```

#### POST /api/auth/register
```typescript
// app/api/auth/register/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { authService } from '@/lib/api/services/authService'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  company: z.string().optional()
})

export const POST = asyncHandler(async (req: NextRequest) => {
  const body = await req.json()
  const validatedData = registerSchema.parse(body)
  
  const result = await authService.register(validatedData)
  
  return ApiResponse.created(result, 'Account created successfully')
})
```

### Consultation Endpoints

#### POST /api/consultations
```typescript
// app/api/consultations/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { consultationService } from '@/lib/api/services/consultationService'
import { rateLimit } from '@/lib/api/middleware/rateLimit'

const consultationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  serviceInterest: z.array(z.enum([
    'web-development',
    'cloud-architecture',
    'ecommerce-solutions',
    'ai-automation',
    'startup-consulting',
    'mvp-development'
  ])).min(1, 'Select at least one service'),
  projectDescription: z.string().min(10).max(2000),
  budgetRange: z.enum(['5k-15k', '15k-35k', '35k-50k', '50k-100k', '100k+', 'need-consultation']),
  timeline: z.enum(['asap', '1-2-months', '3-6-months', '6-12-months', 'flexible']),
  preferredContact: z.enum(['email', 'phone', 'either']).default('email'),
  source: z.enum(['website', 'referral', 'social', 'other']).default('website')
})

export const POST = asyncHandler(async (req: NextRequest) => {
  // Apply rate limiting
  await rateLimit(req, { max: 5, windowMs: 60 * 1000 }) // 5 requests per minute
  
  const body = await req.json()
  const validatedData = consultationSchema.parse(body)
  
  const consultation = await consultationService.create(validatedData)
  
  return ApiResponse.created(
    consultation,
    'Consultation request submitted successfully'
  )
})

export const GET = asyncHandler(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const status = searchParams.get('status')
  
  const result = await consultationService.getAll({
    page,
    limit,
    ...(status && { status })
  })
  
  return ApiResponse.success(result.data, 'Consultations retrieved', 200, result.meta)
})
```

#### GET /api/consultations/[id]
```typescript
// app/api/consultations/[id]/route.ts
import { NextRequest } from 'next/server'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { consultationService } from '@/lib/api/services/consultationService'
import { authMiddleware } from '@/lib/api/middleware/auth'

interface RouteParams {
  params: { id: string }
}

export const GET = asyncHandler(async (req: NextRequest, { params }: RouteParams) => {
  await authMiddleware(req) // Require authentication
  
  const consultation = await consultationService.getById(params.id)
  
  return ApiResponse.success(consultation, 'Consultation retrieved')
})

export const PATCH = asyncHandler(async (req: NextRequest, { params }: RouteParams) => {
  await authMiddleware(req)
  
  const body = await req.json()
  const updatedConsultation = await consultationService.update(params.id, body)
  
  return ApiResponse.success(updatedConsultation, 'Consultation updated')
})
```

### Project Endpoints

#### GET /api/projects
```typescript
// app/api/projects/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { projectService } from '@/lib/api/services/projectService'

const querySchema = z.object({
  page: z.string().optional().transform(val => val ? parseInt(val) : 1),
  limit: z.string().optional().transform(val => val ? parseInt(val) : 10),
  industry: z.string().optional(),
  services: z.string().optional(),
  featured: z.string().optional().transform(val => val === 'true'),
  search: z.string().optional()
})

export const GET = asyncHandler(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const query = Object.fromEntries(searchParams)
  const validatedQuery = querySchema.parse(query)
  
  const result = await projectService.getPublished(validatedQuery)
  
  return ApiResponse.success(result.data, 'Projects retrieved', 200, result.meta)
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await authMiddleware(req)
  
  const body = await req.json()
  const project = await projectService.create(body)
  
  return ApiResponse.created(project, 'Project created successfully')
})
```

#### GET /api/projects/[slug]
```typescript
// app/api/projects/[slug]/route.ts
import { NextRequest } from 'next/server'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { projectService } from '@/lib/api/services/projectService'

interface RouteParams {
  params: { slug: string }
}

export const GET = asyncHandler(async (req: NextRequest, { params }: RouteParams) => {
  const project = await projectService.getBySlug(params.slug)
  
  // Increment view count
  await projectService.incrementViewCount(params.slug)
  
  return ApiResponse.success(project, 'Project retrieved')
})
```

### Blog Endpoints

#### GET /api/blog
```typescript
// app/api/blog/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { blogService } from '@/lib/api/services/blogService'

const querySchema = z.object({
  page: z.string().optional().transform(val => val ? parseInt(val) : 1),
  limit: z.string().optional().transform(val => val ? parseInt(val) : 10),
  category: z.string().optional(),
  tags: z.string().optional(),
  featured: z.string().optional().transform(val => val === 'true'),
  search: z.string().optional()
})

export const GET = asyncHandler(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  const query = Object.fromEntries(searchParams)
  const validatedQuery = querySchema.parse(query)
  
  const result = await blogService.getPublished(validatedQuery)
  
  return ApiResponse.success(result.data, 'Blog posts retrieved', 200, result.meta)
})
```

### Contact Endpoints

#### POST /api/contact
```typescript
// app/api/contact/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { contactService } from '@/lib/api/services/contactService'
import { rateLimit } from '@/lib/api/middleware/rateLimit'

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.enum([
    'general-inquiry',
    'project-discussion',
    'partnership',
    'technical-question',
    'pricing',
    'other'
  ]),
  message: z.string().min(10).max(2000),
  source: z.enum(['contact-form', 'quick-form', 'footer', 'about-page']).default('contact-form')
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await rateLimit(req, { max: 10, windowMs: 60 * 1000 }) // 10 requests per minute
  
  const body = await req.json()
  const validatedData = contactSchema.parse(body)
  
  const contact = await contactService.create(validatedData)
  
  return ApiResponse.created(contact, 'Message sent successfully')
})
```

### Newsletter Endpoints

#### POST /api/newsletter/subscribe
```typescript
// app/api/newsletter/subscribe/route.ts
import { NextRequest } from 'next/server'
import { z } from 'zod'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { newsletterService } from '@/lib/api/services/newsletterService'
import { rateLimit } from '@/lib/api/middleware/rateLimit'

const subscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  company: z.string().optional(),
  interests: z.array(z.string()).default([]),
  source: z.enum(['website', 'blog', 'consultation', 'referral', 'manual']).default('website')
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await rateLimit(req, { max: 5, windowMs: 60 * 1000 })
  
  const body = await req.json()
  const validatedData = subscribeSchema.parse(body)
  
  const subscription = await newsletterService.subscribe(validatedData)
  
  return ApiResponse.success(
    subscription,
    'Successfully subscribed to newsletter'
  )
})
```

---

## Service Layer

### Consultation Service
```typescript
// lib/api/services/consultationService.ts
import { Consultation, IConsultation } from '@/lib/models/Consultation'
import { emailService } from './emailService'
import { ApiErrors } from '@/lib/api/utils/apiError'

interface CreateConsultationData {
  name: string
  email: string
  company?: string
  serviceInterest: string[]
  projectDescription: string
  budgetRange: string
  timeline: string
  preferredContact?: string
  source?: string
}

interface GetAllOptions {
  page: number
  limit: number
  status?: string
  conversionStatus?: string
}

export const consultationService = {
  async create(data: CreateConsultationData): Promise<IConsultation> {
    // Check for existing consultation from same email in last 24 hours
    const existingConsultation = await Consultation.findOne({
      email: data.email,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    })

    if (existingConsultation) {
      throw ApiErrors.conflict('You have already submitted a consultation request recently')
    }

    // Create consultation
    const consultation = await Consultation.create({
      ...data,
      priority: this.calculatePriority(data.budgetRange, data.timeline)
    })

    // Send notifications
    await Promise.all([
      emailService.sendConsultationConfirmation(consultation),
      emailService.sendConsultationNotification(consultation)
    ])

    return consultation
  },

  async getAll(options: GetAllOptions) {
    const { page, limit, status, conversionStatus } = options
    const skip = (page - 1) * limit

    const filter: any = {}
    if (status) filter.status = status
    if (conversionStatus) filter.conversionStatus = conversionStatus

    const [data, total] = await Promise.all([
      Consultation.find(filter)
        .populate('assignedTo', 'name email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Consultation.countDocuments(filter)
    ])

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  },

  async getById(id: string): Promise<IConsultation> {
    const consultation = await Consultation.findById(id)
      .populate('assignedTo', 'name email')

    if (!consultation) {
      throw ApiErrors.notFound('Consultation not found')
    }

    return consultation
  },

  async update(id: string, updateData: Partial<IConsultation>): Promise<IConsultation> {
    const consultation = await Consultation.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    )

    if (!consultation) {
      throw ApiErrors.notFound('Consultation not found')
    }

    return consultation
  },

  calculatePriority(budgetRange: string, timeline: string): 'low' | 'medium' | 'high' {
    const highBudgetRanges = ['50k-100k', '100k+']
    const urgentTimelines = ['asap', '1-2-months']

    if (highBudgetRanges.includes(budgetRange) || urgentTimelines.includes(timeline)) {
      return 'high'
    }
    
    if (budgetRange === '35k-50k' || timeline === '3-6-months') {
      return 'medium'
    }

    return 'low'
  }
}
```

### Project Service
```typescript
// lib/api/services/projectService.ts
import { Project, IProject } from '@/lib/models/Project'
import { ApiErrors } from '@/lib/api/utils/apiError'

interface GetProjectsOptions {
  page: number
  limit: number
  industry?: string
  services?: string
  featured?: boolean
  search?: string
}

export const projectService = {
  async getPublished(options: GetProjectsOptions) {
    const { page, limit, industry, services, featured, search } = options
    const skip = (page - 1) * limit

    const filter: any = { status: 'published' }
    
    if (industry) filter.industry = industry
    if (services) filter.services = { $in: services.split(',') }
    if (featured !== undefined) filter.featured = featured
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { client: { $regex: search, $options: 'i' } }
      ]
    }

    const [data, total] = await Promise.all([
      Project.find(filter)
        .select('title slug client industry services metrics images featured viewCount publishedAt')
        .sort({ featured: -1, publishedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Project.countDocuments(filter)
    ])

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }
  },

  async getBySlug(slug: string): Promise<IProject> {
    const project = await Project.findOne({ 
      slug, 
      status: 'published' 
    }).lean()

    if (!project) {
      throw ApiErrors.notFound('Project not found')
    }

    return project
  },

  async incrementViewCount(slug: string): Promise<void> {
    await Project.findOneAndUpdate(
      { slug, status: 'published' },
      { $inc: { viewCount: 1 } }
    )
  },

  async create(data: Partial<IProject>): Promise<IProject> {
    // Generate slug if not provided
    if (!data.slug && data.title) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    }

    const project = await Project.create(data)
    return project
  },

  async getFeatured(limit = 6) {
    return Project.find({ 
      status: 'published', 
      featured: true 
    })
      .select('title slug client metrics images')
      .sort({ publishedAt: -1 })
      .limit(limit)
      .lean()
  }
}
```

---

## Middleware

### Authentication Middleware
```typescript
// lib/api/middleware/auth.ts
import { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'
import { User } from '@/lib/models/User'
import { ApiErrors } from '@/lib/api/utils/apiError'

interface AuthenticatedRequest extends NextRequest {
  user?: any
}

export const authMiddleware = async (req: NextRequest): Promise<any> => {
  const authHeader = req.headers.get('authorization')
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw ApiErrors.unauthorized('Access token required')
  }

  const token = authHeader.substring(7)

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    
    const user = await User.findById(decoded.id)
      .select('-password')
      .lean()
    
    if (!user) {
      throw ApiErrors.unauthorized('User not found')
    }

    return user
  } catch (error) {
    throw ApiErrors.unauthorized('Invalid or expired token')
  }
}

export const requireRole = (roles: string[]) => {
  return async (req: NextRequest): Promise<any> => {
    const user = await authMiddleware(req)
    
    if (!roles.includes(user.role)) {
      throw ApiErrors.forbidden('Insufficient permissions')
    }
    
    return user
  }
}
```

### Rate Limiting Middleware
```typescript
// lib/api/middleware/rateLimit.ts
import { NextRequest } from 'next/server'
import { ApiErrors } from '@/lib/api/utils/apiError'

interface RateLimitOptions {
  max: number
  windowMs: number
  message?: string
}

const store = new Map<string, { count: number; resetTime: number }>()

export const rateLimit = async (
  req: NextRequest, 
  options: RateLimitOptions
): Promise<void> => {
  const { max, windowMs, message = 'Too many requests' } = options
  
  const clientId = getClientId(req)
  const now = Date.now()
  const resetTime = now + windowMs

  const record = store.get(clientId)

  if (!record || now > record.resetTime) {
    store.set(clientId, { count: 1, resetTime })
    return
  }

  if (record.count >= max) {
    throw ApiErrors.badRequest(message)
  }

  record.count++
}

const getClientId = (req: NextRequest): string => {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : req.ip || 'unknown'
  return ip
}

// Cleanup expired entries periodically
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of store.entries()) {
    if (now > value.resetTime) {
      store.delete(key)
    }
  }
}, 60000) // Cleanup every minute
```

---

## API Testing

### Test Utilities
```typescript
// __tests__/utils/apiTesting.ts
import { NextRequest } from 'next/server'

export const createMockRequest = (
  method: string,
  url: string,
  body?: any,
  headers?: Record<string, string>
): NextRequest => {
  const request = new NextRequest(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    ...(body && { body: JSON.stringify(body) })
  })

  return request
}

export const createAuthenticatedRequest = (
  method: string,
  url: string,
  token: string,
  body?: any
): NextRequest => {
  return createMockRequest(method, url, body, {
    Authorization: `Bearer ${token}`
  })
}
```

### Example Test Cases
```typescript
// __tests__/api/consultations.test.ts
import { POST } from '@/app/api/consultations/route'
import { createMockRequest } from '../utils/apiTesting'

describe('/api/consultations', () => {
  it('should create a consultation', async () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      serviceInterest: ['web-development'],
      projectDescription: 'Need a new website',
      budgetRange: '15k-35k',
      timeline: '3-6-months'
    }

    const request = createMockRequest('POST', '/api/consultations', validData)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(201)
    expect(data.success).toBe(true)
    expect(data.data.name).toBe(validData.name)
  })

  it('should validate required fields', async () => {
    const invalidData = {
      name: 'John'
      // Missing required fields
    }

    const request = createMockRequest('POST', '/api/consultations', invalidData)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
  })
})
```

---

## API Documentation

### OpenAPI Schema
```yaml
# api-docs.yaml
openapi: 3.0.0
info:
  title: WebCloudor API
  version: 1.0.0
  description: API for WebCloudor agency website

servers:
  - url: http://localhost:3000/api
    description: Development server
  - url: https://webcloudor.com/api
    description: Production server

paths:
  /consultations:
    post:
      summary: Submit consultation request
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ConsultationRequest'
      responses:
        201:
          description: Consultation created successfully
        400:
          description: Validation error
        429:
          description: Rate limit exceeded

components:
  schemas:
    ConsultationRequest:
      type: object
      required:
        - name
        - email
        - serviceInterest
        - projectDescription
        - budgetRange
        - timeline
      properties:
        name:
          type: string
          minLength: 2
          maxLength: 100
        email:
          type: string
          format: email
        serviceInterest:
          type: array
          items:
            type: string
            enum: [web-development, cloud-architecture, ecommerce-solutions]
```

This API specification provides a robust, type-safe foundation for the WebCloudor website with proper error handling, validation, and modular architecture adapted for Next.js App Router.