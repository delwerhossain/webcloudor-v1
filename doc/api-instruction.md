# WebCloudor API Specifications

## Overview
Complete RESTful API for WebCloudor agency website using Next.js App Router with modular architecture adapted from Express.js patterns.

---

## API Architecture

### Modular Structure
```
app/api/
├── auth/
│   ├── login/route.ts
│   ├── register/route.ts
│   ├── logout/route.ts
│   └── refresh/route.ts
├── consultations/
│   ├── route.ts
│   └── [id]/route.ts
├── projects/
│   ├── route.ts
│   ├── [slug]/route.ts
│   └── featured/route.ts
├── blog/
│   ├── route.ts
│   └── [slug]/route.ts
├── contact/
│   └── route.ts
├── newsletter/
│   └── subscribe/route.ts
└── analytics/
    └── track/route.ts

lib/api/
├── errors/
│   ├── ApiError.ts
│   └── errorHandlers.ts
├── middleware/
│   ├── auth.ts
│   ├── validate.ts
│   └── rateLimit.ts
├── utils/
│   ├── asyncHandler.ts
│   ├── apiResponse.ts
│   └── db.ts
└── modules/
    ├── consultations/
    ├── projects/
    ├── blog/
    └── users/
```

---

## Core Utilities

### Error Handling
```typescript
// lib/api/errors/ApiError.ts
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message)
    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

export const ApiErrors = {
  badRequest: (msg: string) => new ApiError(400, msg),
  unauthorized: (msg: string) => new ApiError(401, msg),
  forbidden: (msg: string) => new ApiError(403, msg),
  notFound: (msg: string) => new ApiError(404, msg),
  conflict: (msg: string) => new ApiError(409, msg),
  tooMany: (msg: string) => new ApiError(429, msg),
  internal: (msg: string) => new ApiError(500, msg)
}
```

### Async Handler
```typescript
// lib/api/utils/asyncHandler.ts
import { NextRequest, NextResponse } from 'next/server'
import { ApiError } from '@/lib/api/errors/ApiError'
import { ZodError } from 'zod'

type Handler = (req: NextRequest, context?: any) => Promise<NextResponse>

export const asyncHandler = (handler: Handler) => {
  return async (req: NextRequest, context?: any) => {
    try {
      return await handler(req, context)
    } catch (error) {
      return handleError(error)
    }
  }
}

const handleError = (error: unknown): NextResponse => {
  if (error instanceof ApiError) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: error.statusCode }
    )
  }
  
  if (error instanceof ZodError) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Validation failed',
        errors: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      },
      { status: 400 }
    )
  }
  
  console.error('Unexpected error:', error)
  return NextResponse.json(
    { success: false, message: 'Internal server error' },
    { status: 500 }
  )
}
```

### API Response Helper
```typescript
// lib/api/utils/apiResponse.ts
import { NextResponse } from 'next/server'

interface Meta {
  page?: number
  limit?: number
  total?: number
  totalPages?: number
}

export class ApiResponse {
  static success<T>(data: T, message = 'Success', status = 200, meta?: Meta) {
    return NextResponse.json(
      { success: true, message, data, ...(meta && { meta }) },
      { status }
    )
  }

  static created<T>(data: T, message = 'Created successfully') {
    return this.success(data, message, 201)
  }

  static error(message: string, status = 400) {
    return NextResponse.json(
      { success: false, message },
      { status }
    )
  }
}
```

---

## Authentication Endpoints

### POST /api/auth/login
```typescript
// app/api/auth/login/route.ts
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'
import { ApiErrors } from '@/lib/api/errors/ApiError'
import { User } from '@/lib/api/modules/users/model'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export const POST = asyncHandler(async (req: NextRequest) => {
  const body = await req.json()
  const { email, password } = loginSchema.parse(body)
  
  const user = await User.findOne({ email }).select('+password')
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw ApiErrors.unauthorized('Invalid credentials')
  }
  
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )
  
  return ApiResponse.success({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  }, 'Login successful')
})
```

### POST /api/auth/register
```typescript
// app/api/auth/register/route.ts
const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  company: z.string().optional()
})

export const POST = asyncHandler(async (req: NextRequest) => {
  const body = await req.json()
  const data = registerSchema.parse(body)
  
  const exists = await User.findOne({ email: data.email })
  if (exists) {
    throw ApiErrors.conflict('Email already registered')
  }
  
  const hashedPassword = await bcrypt.hash(data.password, 12)
  const user = await User.create({
    ...data,
    password: hashedPassword
  })
  
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )
  
  return ApiResponse.created({
    token,
    user: { id: user._id, name: user.name, email: user.email }
  })
})
```

---

## Consultation Endpoints

### GET /api/consultations
```typescript
// app/api/consultations/route.ts
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { consultationService } from '@/lib/api/modules/consultations/service'
import { authMiddleware } from '@/lib/api/middleware/auth'

export const GET = asyncHandler(async (req: NextRequest) => {
  await authMiddleware(req) // Admin only
  
  const { searchParams } = new URL(req.url)
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '10')
  const status = searchParams.get('status')
  
  const result = await consultationService.getAll({ page, limit, status })
  return ApiResponse.success(result.data, 'Success', 200, result.meta)
})
```

### POST /api/consultations
```typescript
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
  ])).min(1),
  projectDescription: z.string().min(10).max(2000),
  budgetRange: z.enum(['5k-15k', '15k-35k', '35k-50k', '50k-100k', '100k+']),
  timeline: z.enum(['asap', '1-2-months', '3-6-months', '6-12-months'])
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await rateLimit(req, { max: 5, windowMs: 60000 })
  
  const body = await req.json()
  const data = consultationSchema.parse(body)
  
  const consultation = await consultationService.create(data)
  
  // Send email notifications
  await emailService.sendConsultationEmails(consultation)
  
  return ApiResponse.created(consultation)
})
```

### GET /api/consultations/[id]
```typescript
// app/api/consultations/[id]/route.ts
interface Params {
  params: { id: string }
}

export const GET = asyncHandler(async (req: NextRequest, { params }: Params) => {
  await authMiddleware(req)
  
  const consultation = await consultationService.getById(params.id)
  return ApiResponse.success(consultation)
})

export const PATCH = asyncHandler(async (req: NextRequest, { params }: Params) => {
  await authMiddleware(req)
  
  const body = await req.json()
  const updated = await consultationService.update(params.id, body)
  return ApiResponse.success(updated, 'Updated successfully')
})

export const DELETE = asyncHandler(async (req: NextRequest, { params }: Params) => {
  await authMiddleware(req)
  
  await consultationService.delete(params.id)
  return ApiResponse.success(null, 'Deleted successfully')
})
```

---

## Project Endpoints

### GET /api/projects
```typescript
// app/api/projects/route.ts
export const GET = asyncHandler(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  
  const filters = {
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || '10'),
    industry: searchParams.get('industry'),
    services: searchParams.get('services'),
    featured: searchParams.get('featured') === 'true',
    search: searchParams.get('search')
  }
  
  const result = await projectService.getPublished(filters)
  return ApiResponse.success(result.data, 'Success', 200, result.meta)
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await authMiddleware(req)
  
  const body = await req.json()
  const project = await projectService.create(body)
  
  return ApiResponse.created(project)
})
```

### GET /api/projects/featured
```typescript
// app/api/projects/featured/route.ts
export const GET = asyncHandler(async (req: NextRequest) => {
  const projects = await projectService.getFeatured(6)
  return ApiResponse.success(projects)
})
```

### GET /api/projects/[slug]
```typescript
// app/api/projects/[slug]/route.ts
export const GET = asyncHandler(async (req: NextRequest, { params }: Params) => {
  const project = await projectService.getBySlug(params.slug)
  
  // Increment view count
  await projectService.incrementViews(params.slug)
  
  return ApiResponse.success(project)
})
```

---

## Blog Endpoints

### GET /api/blog
```typescript
// app/api/blog/route.ts
export const GET = asyncHandler(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)
  
  const filters = {
    page: parseInt(searchParams.get('page') || '1'),
    limit: parseInt(searchParams.get('limit') || '10'),
    category: searchParams.get('category'),
    featured: searchParams.get('featured') === 'true',
    search: searchParams.get('search')
  }
  
  const result = await blogService.getPublished(filters)
  return ApiResponse.success(result.data, 'Success', 200, result.meta)
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await authMiddleware(req)
  
  const body = await req.json()
  const post = await blogService.create(body)
  
  return ApiResponse.created(post)
})
```

### GET /api/blog/[slug]
```typescript
// app/api/blog/[slug]/route.ts
export const GET = asyncHandler(async (req: NextRequest, { params }: Params) => {
  const post = await blogService.getBySlug(params.slug)
  
  // Increment view count
  await blogService.incrementViews(params.slug)
  
  return ApiResponse.success(post)
})
```

---

## Contact & Newsletter

### POST /api/contact
```typescript
// app/api/contact/route.ts
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(10).max(2000)
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await rateLimit(req, { max: 10, windowMs: 60000 })
  
  const body = await req.json()
  const data = contactSchema.parse(body)
  
  const contact = await Contact.create(data)
  await emailService.sendContactNotification(contact)
  
  return ApiResponse.created(contact, 'Message sent successfully')
})
```

### POST /api/newsletter/subscribe
```typescript
// app/api/newsletter/subscribe/route.ts
const subscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().optional()
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await rateLimit(req, { max: 3, windowMs: 60000 })
  
  const body = await req.json()
  const { email, name } = subscribeSchema.parse(body)
  
  const exists = await Newsletter.findOne({ email })
  if (exists) {
    throw ApiErrors.conflict('Already subscribed')
  }
  
  const subscriber = await Newsletter.create({ email, name })
  await emailService.sendWelcomeEmail(subscriber)
  
  return ApiResponse.created(subscriber, 'Subscribed successfully')
})
```

---

## Analytics

### POST /api/analytics/track
```typescript
// app/api/analytics/track/route.ts
const trackingSchema = z.object({
  event: z.string(),
  properties: z.record(z.any()).optional(),
  page: z.string().optional()
})

export const POST = asyncHandler(async (req: NextRequest) => {
  const body = await req.json()
  const data = trackingSchema.parse(body)
  
  // Store analytics event
  await Analytics.create({
    ...data,
    ip: req.ip,
    userAgent: req.headers.get('user-agent'),
    timestamp: new Date()
  })
  
  return ApiResponse.success(null, 'Event tracked')
})
```

---

## Service Layer

### Consultation Service
```typescript
// lib/api/modules/consultations/service.ts
import { Consultation } from './model'
import { ApiErrors } from '@/lib/api/errors/ApiError'

export const consultationService = {
  async create(data: any) {
    // Check for duplicate within 24h
    const existing = await Consultation.findOne({
      email: data.email,
      createdAt: { $gte: new Date(Date.now() - 86400000) }
    })
    
    if (existing) {
      throw ApiErrors.conflict('Recent request exists')
    }
    
    return Consultation.create({
      ...data,
      priority: this.calculatePriority(data.budgetRange, data.timeline)
    })
  },

  async getAll({ page = 1, limit = 10, status }: any) {
    const skip = (page - 1) * limit
    const filter = status ? { status } : {}
    
    const [data, total] = await Promise.all([
      Consultation.find(filter)
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

  async getById(id: string) {
    const consultation = await Consultation.findById(id)
    if (!consultation) {
      throw ApiErrors.notFound('Consultation not found')
    }
    return consultation
  },

  async update(id: string, data: any) {
    const updated = await Consultation.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    )
    
    if (!updated) {
      throw ApiErrors.notFound('Consultation not found')
    }
    
    return updated
  },

  async delete(id: string) {
    const deleted = await Consultation.findByIdAndDelete(id)
    if (!deleted) {
      throw ApiErrors.notFound('Consultation not found')
    }
    return deleted
  },

  calculatePriority(budget: string, timeline: string) {
    if (['100k+', '50k-100k'].includes(budget) || timeline === 'asap') {
      return 'high'
    }
    if (budget === '35k-50k' || timeline === '1-2-months') {
      return 'medium'
    }
    return 'low'
  }
}
```

---

## Middleware

### Auth Middleware
```typescript
// lib/api/middleware/auth.ts
import jwt from 'jsonwebtoken'
import { ApiErrors } from '@/lib/api/errors/ApiError'

export const authMiddleware = async (req: NextRequest) => {
  const token = req.headers.get('authorization')?.replace('Bearer ', '')
  
  if (!token) {
    throw ApiErrors.unauthorized('Token required')
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    return decoded
  } catch {
    throw ApiErrors.unauthorized('Invalid token')
  }
}
```

### Rate Limiting
```typescript
// lib/api/middleware/rateLimit.ts
const store = new Map()

export const rateLimit = async (
  req: NextRequest,
  options: { max: number; windowMs: number }
) => {
  const ip = req.ip || 'unknown'
  const now = Date.now()
  const { max, windowMs } = options
  
  const record = store.get(ip)
  const resetTime = now + windowMs
  
  if (!record || now > record.resetTime) {
    store.set(ip, { count: 1, resetTime })
    return
  }
  
  if (record.count >= max) {
    throw ApiErrors.tooMany('Too many requests')
  }
  
  record.count++
}

// Cleanup expired entries
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of store.entries()) {
    if (now > value.resetTime) {
      store.delete(key)
    }
  }
}, 60000)
```

### Validation Middleware
```typescript
// lib/api/middleware/validate.ts
import { ZodSchema } from 'zod'

export const validateRequest = async (
  req: NextRequest,
  schema: ZodSchema
) => {
  const body = await req.json()
  return schema.parse(body)
}
```

---

## Database Models

### Consultation Model
```typescript
// lib/api/modules/consultations/model.ts
import mongoose from 'mongoose'

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  company: String,
  phone: String,
  serviceInterest: [String],
  projectDescription: { type: String, required: true },
  budgetRange: String,
  timeline: String,
  status: {
    type: String,
    enum: ['pending', 'contacted', 'qualified', 'converted'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  notes: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

consultationSchema.index({ email: 1, createdAt: -1 })

export const Consultation = mongoose.models.Consultation || 
  mongoose.model('Consultation', consultationSchema)
```

---

## API Documentation

### Response Format
```typescript
// Success Response
{
  "success": true,
  "message": "Success message",
  "data": { /* response data */ },
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}

// Error Response
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `429` - Too Many Requests
- `500` - Internal Server Error

### Rate Limits
- Auth endpoints: 5 requests/minute
- Consultation: 5 requests/minute
- Contact: 10 requests/minute
- Newsletter: 3 requests/minute
- General API: 60 requests/minute

---

## Testing

### Unit Test Example
```typescript
// __tests__/api/consultations.test.ts
import { POST } from '@/app/api/consultations/route'

describe('Consultation API', () => {
  it('creates consultation', async () => {
    const mockReq = new NextRequest('http://localhost/api/consultations', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        serviceInterest: ['web-development'],
        projectDescription: 'Test project description',
        budgetRange: '15k-35k',
        timeline: '3-6-months'
      })
    })
    
    const response = await POST(mockReq)
    const data = await response.json()
    
    expect(response.status).toBe(201)
    expect(data.success).toBe(true)
  })
})
```

### Integration Test
```typescript
describe('API Integration', () => {
  it('full consultation flow', async () => {
    // 1. Submit consultation
    const consultation = await fetch('/api/consultations', {
      method: 'POST',
      body: JSON.stringify(consultationData)
    })
    
    // 2. Admin login
    const auth = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(adminCredentials)
    })
    
    // 3. Get consultation
    const result = await fetch(`/api/consultations/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    
    expect(result.status).toBe(200)
  })
})
```

---

## Deployment Considerations

### Environment Variables
```env
# Required
MONGODB_URI=
JWT_SECRET=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=
FROM_EMAIL=

# Optional
RATE_LIMIT_ENABLED=true
ANALYTICS_ENABLED=true
```

### Security Headers
```typescript
// middleware.ts
export const middleware = (request: NextRequest) => {
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  return response
}
```

### Performance Monitoring
```typescript
// Track API performance
export const performanceMiddleware = async (handler: Handler) => {
  const start = Date.now()
  const result = await handler()
  const duration = Date.now() - start
  
  console.log(`API call took ${duration}ms`)
  
  return result
}
```