# WebCloudor Security Best Practices

## Overview
Comprehensive security guidelines for the WebCloudor website ensuring protection of client data, prevention of common vulnerabilities, and compliance with international privacy regulations.

---

## Security Architecture

### Defense-in-Depth Strategy
```
User Request
    ↓
Cloudflare WAF (DDoS, Bot Protection)
    ↓
Vercel Edge Security (Rate Limiting, Geo-blocking)
    ↓
Next.js Security Headers (CSP, HSTS, etc.)
    ↓
API Security Layer (Auth, Validation, Sanitization)
    ↓
Database Security (Encryption, Access Control)
    ↓
Application Security (Input Validation, Output Encoding)
```

### Security Principles
1. **Zero Trust Architecture** - Verify every request
2. **Principle of Least Privilege** - Minimum necessary access
3. **Defense in Depth** - Multiple security layers
4. **Security by Design** - Built-in from development start
5. **Continuous Monitoring** - Real-time threat detection

---

## Input Validation & Sanitization

### Zod Schema Validation
```typescript
// lib/validations/security.ts
import { z } from 'zod'

// Secure input validation schemas
export const secureStringSchema = z
  .string()
  .min(1)
  .max(1000)
  .refine(
    (value) => !/<script|javascript:|data:/i.test(value),
    { message: 'Potentially malicious content detected' }
  )
  .transform((value) => value.trim())

export const emailSchema = z
  .string()
  .email()
  .max(255)
  .toLowerCase()
  .refine(
    (email) => !email.includes('<') && !email.includes('>'),
    { message: 'Invalid email format' }
  )

export const consultationSchema = z.object({
  name: secureStringSchema
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters'),
    
  email: emailSchema,
  
  company: secureStringSchema
    .max(100, 'Company name cannot exceed 100 characters')
    .optional(),
    
  phone: z
    .string()
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Invalid phone format')
    .max(20)
    .optional(),
    
  serviceInterest: z
    .array(z.enum([
      'web-development',
      'cloud-architecture', 
      'ecommerce-solutions',
      'ai-automation',
      'startup-consulting',
      'mvp-development'
    ]))
    .min(1, 'Please select at least one service')
    .max(6, 'Too many services selected'),
    
  projectDescription: secureStringSchema
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description cannot exceed 2000 characters'),
    
  budgetRange: z.enum([
    '5k-15k', '15k-35k', '35k-50k', 
    '50k-100k', '100k+', 'need-consultation'
  ]),
  
  timeline: z.enum([
    'asap', '1-2-months', '3-6-months', 
    '6-12-months', 'flexible'
  ])
})

export type SecureConsultationData = z.infer<typeof consultationSchema>
```

### Advanced Input Sanitization
```typescript
// lib/security/sanitization.ts
import DOMPurify from 'isomorphic-dompurify'
import validator from 'validator'

export class InputSanitizer {
  // HTML sanitization for rich content
  static sanitizeHTML(input: string): string {
    return DOMPurify.sanitize(input, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
      ALLOWED_ATTR: [],
      KEEP_CONTENT: true
    })
  }

  // SQL injection prevention
  static sanitizeForDB(input: string): string {
    return validator.escape(input.trim())
  }

  // Remove potential XSS vectors
  static sanitizeText(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/data:text\/html/gi, '')
      .trim()
  }

  // File name sanitization
  static sanitizeFileName(fileName: string): string {
    return fileName
      .replace(/[^a-zA-Z0-9.-]/g, '_')
      .replace(/\.+/g, '.')
      .substring(0, 255)
  }

  // URL validation and sanitization
  static sanitizeURL(url: string): string {
    if (!validator.isURL(url, { 
      protocols: ['http', 'https'],
      require_protocol: true 
    })) {
      throw new Error('Invalid URL format')
    }
    
    const allowedDomains = [
      'webcloudor.com',
      'github.com',
      'linkedin.com',
      'vercel.com'
    ]
    
    const domain = new URL(url).hostname
    if (!allowedDomains.some(allowed => domain.endsWith(allowed))) {
      throw new Error('Domain not allowed')
    }
    
    return url
  }
}
```

---

## Authentication & Authorization

### JWT Implementation
```typescript
// lib/auth/jwt.ts
import jwt from 'jsonwebtoken'
import { User } from '@/lib/api/modules/users/model'

const JWT_SECRET = process.env.JWT_SECRET!
const JWT_EXPIRES_IN = '7d'
const JWT_REFRESH_EXPIRES_IN = '30d'

export interface JWTPayload {
  id: string
  email: string
  role: 'client' | 'admin' | 'super_admin'
  iat: number
  exp: number
}

export class AuthService {
  // Generate secure tokens
  static generateTokens(user: any) {
    const payload = {
      id: user._id.toString(),
      email: user.email,
      role: user.role
    }

    const accessToken = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
      issuer: 'webcloudor.com',
      audience: 'webcloudor-api'
    })

    const refreshToken = jwt.sign(
      { id: user._id.toString() },
      JWT_SECRET,
      { expiresIn: JWT_REFRESH_EXPIRES_IN }
    )

    return { accessToken, refreshToken }
  }

  // Verify and decode tokens
  static verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, JWT_SECRET, {
        issuer: 'webcloudor.com',
        audience: 'webcloudor-api'
      }) as JWTPayload
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('Token expired')
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw new Error('Invalid token')
      }
      throw new Error('Token verification failed')
    }
  }

  // Refresh token validation
  static async refreshAccessToken(refreshToken: string) {
    try {
      const decoded = jwt.verify(refreshToken, JWT_SECRET) as { id: string }
      const user = await User.findById(decoded.id)
      
      if (!user) {
        throw new Error('User not found')
      }

      return this.generateTokens(user)
    } catch (error) {
      throw new Error('Invalid refresh token')
    }
  }
}
```

### Role-Based Access Control
```typescript
// lib/auth/rbac.ts
export enum Permission {
  READ_CONSULTATIONS = 'read:consultations',
  WRITE_CONSULTATIONS = 'write:consultations',
  DELETE_CONSULTATIONS = 'delete:consultations',
  READ_PROJECTS = 'read:projects',
  WRITE_PROJECTS = 'write:projects',
  READ_USERS = 'read:users',
  WRITE_USERS = 'write:users',
  ADMIN_ACCESS = 'admin:access'
}

export const rolePermissions: Record<string, Permission[]> = {
  client: [
    Permission.READ_PROJECTS
  ],
  
  admin: [
    Permission.READ_CONSULTATIONS,
    Permission.WRITE_CONSULTATIONS,
    Permission.READ_PROJECTS,
    Permission.WRITE_PROJECTS,
    Permission.READ_USERS
  ],
  
  super_admin: [
    ...rolePermissions.admin,
    Permission.DELETE_CONSULTATIONS,
    Permission.WRITE_USERS,
    Permission.ADMIN_ACCESS
  ]
}

export class RBACService {
  static hasPermission(userRole: string, requiredPermission: Permission): boolean {
    const permissions = rolePermissions[userRole] || []
    return permissions.includes(requiredPermission)
  }

  static requirePermission(userRole: string, requiredPermission: Permission) {
    if (!this.hasPermission(userRole, requiredPermission)) {
      throw new Error(`Insufficient permissions: ${requiredPermission}`)
    }
  }
}
```

### Secure Authentication Middleware
```typescript
// lib/api/middleware/auth.ts
import { NextRequest } from 'next/server'
import { AuthService } from '@/lib/auth/jwt'
import { RBACService, Permission } from '@/lib/auth/rbac'
import { ApiError } from '@/lib/api/errors/ApiError'

export interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string
    email: string
    role: string
  }
}

export const authMiddleware = (requiredPermission?: Permission) => {
  return async (req: NextRequest): Promise<AuthenticatedRequest> => {
    // Extract token from Authorization header
    const authHeader = req.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new ApiError(401, 'Authorization token required')
    }

    const token = authHeader.substring(7)
    
    try {
      // Verify JWT token
      const payload = AuthService.verifyToken(token)
      
      // Check if user still exists and is active
      const user = await User.findById(payload.id).select('role isActive')
      if (!user || !user.isActive) {
        throw new ApiError(401, 'Invalid or inactive user')
      }

      // Check role-based permissions
      if (requiredPermission) {
        RBACService.requirePermission(user.role, requiredPermission)
      }

      // Attach user to request
      const authenticatedReq = req as AuthenticatedRequest
      authenticatedReq.user = {
        id: payload.id,
        email: payload.email,
        role: user.role
      }

      return authenticatedReq
    } catch (error) {
      if (error instanceof ApiError) {
        throw error
      }
      throw new ApiError(401, 'Authentication failed')
    }
  }
}
```

---

## API Security

### Rate Limiting
```typescript
// lib/api/middleware/rateLimit.ts
import { NextRequest } from 'next/server'
import { ApiError } from '@/lib/api/errors/ApiError'

interface RateLimitConfig {
  windowMs: number    // Time window in milliseconds
  max: number        // Maximum requests per window
  message?: string   // Custom error message
  skipSuccessful?: boolean // Don't count successful requests
  keyGenerator?: (req: NextRequest) => string
}

class RateLimitStore {
  private store = new Map<string, { count: number; resetTime: number }>()
  
  // Cleanup expired entries every 5 minutes
  constructor() {
    setInterval(() => this.cleanup(), 5 * 60 * 1000)
  }
  
  increment(key: string, windowMs: number): { count: number; resetTime: number } {
    const now = Date.now()
    const resetTime = now + windowMs
    const existing = this.store.get(key)
    
    if (!existing || now > existing.resetTime) {
      const entry = { count: 1, resetTime }
      this.store.set(key, entry)
      return entry
    }
    
    existing.count++
    return existing
  }
  
  private cleanup() {
    const now = Date.now()
    for (const [key, value] of this.store.entries()) {
      if (now > value.resetTime) {
        this.store.delete(key)
      }
    }
  }
}

const rateLimitStore = new RateLimitStore()

export const rateLimit = (config: RateLimitConfig) => {
  return async (req: NextRequest): Promise<void> => {
    // Generate rate limit key
    const key = config.keyGenerator 
      ? config.keyGenerator(req)
      : getClientKey(req)
    
    // Check rate limit
    const { count, resetTime } = rateLimitStore.increment(key, config.windowMs)
    
    if (count > config.max) {
      const retryAfter = Math.ceil((resetTime - Date.now()) / 1000)
      
      throw new ApiError(
        429,
        config.message || 'Too many requests',
        { retryAfter }
      )
    }
  }
}

// Generate client identifier for rate limiting
function getClientKey(req: NextRequest): string {
  // Prefer CF-Connecting-IP (Cloudflare) or X-Forwarded-For
  const ip = req.headers.get('cf-connecting-ip') ||
             req.headers.get('x-forwarded-for')?.split(',')[0] ||
             req.headers.get('x-real-ip') ||
             'unknown'
  
  // Include user agent for more granular limiting
  const userAgent = req.headers.get('user-agent') || 'unknown'
  const userAgentHash = createHash(userAgent).substring(0, 8)
  
  return `${ip}:${userAgentHash}`
}

function createHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash.toString(36)
}

// Predefined rate limit configs
export const rateLimits = {
  // Strict limits for auth endpoints
  auth: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: 'Too many authentication attempts'
  }),

  // Moderate limits for form submissions
  forms: rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10,
    message: 'Too many form submissions'
  }),

  // General API limits
  api: rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    message: 'API rate limit exceeded'
  }),

  // Strict limits for consultation requests
  consultation: rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3,
    message: 'Too many consultation requests'
  })
}
```

### CORS Configuration
```typescript
// lib/api/middleware/cors.ts
import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = [
  'https://webcloudor.com',
  'https://www.webcloudor.com',
  'https://staging.webcloudor.com',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
]

export const corsMiddleware = (req: NextRequest): NextResponse | null => {
  const origin = req.headers.get('origin')
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 200 })
    
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin)
      response.headers.set('Access-Control-Allow-Credentials', 'true')
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      response.headers.set('Access-Control-Max-Age', '86400')
    }
    
    return response
  }
  
  return null // Continue to next middleware/handler
}

// Apply CORS headers to response
export const applyCorsHeaders = (response: NextResponse, origin?: string): NextResponse => {
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
  }
  
  return response
}
```

### API Security Headers
```typescript
// lib/api/middleware/security.ts
import { NextRequest, NextResponse } from 'next/server'

export const securityHeaders = {
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://api.webcloudor.com https://www.google-analytics.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '),

  // Security headers
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  
  // HSTS (HTTPS only)
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
}

export const applySecurityHeaders = (response: NextResponse): NextResponse => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  return response
}
```

---

## Database Security

### MongoDB Security Configuration
```typescript
// lib/database/security.ts
import mongoose from 'mongoose'

export const secureConnectionOptions = {
  // Connection security
  ssl: true,
  sslValidate: true,
  
  // Connection pooling
  maxPoolSize: 10,
  minPoolSize: 2,
  
  // Timeouts
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  
  // Buffering
  bufferCommands: false,
  bufferMaxEntries: 0,
  
  // Authentication
  authSource: 'admin',
  
  // Read preferences for security
  readPreference: 'secondaryPreferred',
  
  // Write concern for data integrity
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 10000
  }
}

// Secure database operations wrapper
export class SecureDBOperations {
  // Prevent NoSQL injection
  static sanitizeQuery(query: any): any {
    if (typeof query !== 'object' || query === null) {
      return query
    }
    
    const sanitized = { ...query }
    
    // Remove dangerous operators
    const dangerousOperators = ['$where', '$mapReduce', '$accumulator']
    dangerousOperators.forEach(op => delete sanitized[op])
    
    // Recursively sanitize nested objects
    Object.keys(sanitized).forEach(key => {
      if (typeof sanitized[key] === 'object') {
        sanitized[key] = this.sanitizeQuery(sanitized[key])
      }
    })
    
    return sanitized
  }
  
  // Secure find operations
  static async secureFind(model: any, query: any, options: any = {}) {
    const sanitizedQuery = this.sanitizeQuery(query)
    
    return model.find(sanitizedQuery, null, {
      ...options,
      maxTimeMS: 30000, // 30 second timeout
      lean: true // Return plain objects for better performance
    })
  }
  
  // Audit trail for sensitive operations
  static async auditedOperation(
    operation: string,
    user: string,
    details: any,
    callback: () => Promise<any>
  ) {
    const startTime = Date.now()
    
    try {
      const result = await callback()
      
      // Log successful operation
      await AuditLog.create({
        operation,
        user,
        details,
        success: true,
        duration: Date.now() - startTime,
        timestamp: new Date()
      })
      
      return result
    } catch (error) {
      // Log failed operation
      await AuditLog.create({
        operation,
        user,
        details,
        success: false,
        error: error.message,
        duration: Date.now() - startTime,
        timestamp: new Date()
      })
      
      throw error
    }
  }
}
```

### Data Encryption
```typescript
// lib/security/encryption.ts
import crypto from 'crypto'

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY! // 32 bytes key
const ALGORITHM = 'aes-256-gcm'

export class DataEncryption {
  // Encrypt sensitive data before storing
  static encrypt(text: string): string {
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipher(ALGORITHM, ENCRYPTION_KEY)
    cipher.setAAD(Buffer.from('webcloudor-data'))
    
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    
    const authTag = cipher.getAuthTag()
    
    return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`
  }
  
  // Decrypt sensitive data when retrieving
  static decrypt(encryptedText: string): string {
    const [ivHex, authTagHex, encrypted] = encryptedText.split(':')
    
    const iv = Buffer.from(ivHex, 'hex')
    const authTag = Buffer.from(authTagHex, 'hex')
    
    const decipher = crypto.createDecipher(ALGORITHM, ENCRYPTION_KEY)
    decipher.setAuthTag(authTag)
    decipher.setAAD(Buffer.from('webcloudor-data'))
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    return decrypted
  }
  
  // Hash passwords securely
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 12
    return bcrypt.hash(password, saltRounds)
  }
  
  // Generate secure tokens
  static generateSecureToken(length: number = 32): string {
    return crypto.randomBytes(length).toString('hex')
  }
}

// Mongoose plugin for automatic field encryption
export const encryptionPlugin = function(schema: any, options: any) {
  const fieldsToEncrypt = options.fields || []
  
  // Encrypt before saving
  schema.pre('save', function() {
    fieldsToEncrypt.forEach((field: string) => {
      if (this[field] && this.isModified(field)) {
        this[field] = DataEncryption.encrypt(this[field])
      }
    })
  })
  
  // Decrypt after finding
  schema.post(['find', 'findOne'], function(docs: any) {
    const decrypt = (doc: any) => {
      fieldsToEncrypt.forEach((field: string) => {
        if (doc[field]) {
          try {
            doc[field] = DataEncryption.decrypt(doc[field])
          } catch (error) {
            console.error(`Failed to decrypt field ${field}:`, error)
          }
        }
      })
    }
    
    if (Array.isArray(docs)) {
      docs.forEach(decrypt)
    } else if (docs) {
      decrypt(docs)
    }
  })
}
```

---

## Client-Side Security

### XSS Prevention
```typescript
// lib/security/client.ts
export class ClientSecurity {
  // Sanitize user input on client side
  static sanitizeInput(input: string): string {
    const tempDiv = document.createElement('div')
    tempDiv.textContent = input
    return tempDiv.innerHTML
  }
  
  // Validate URLs before navigation
  static validateURL(url: string): boolean {
    try {
      const parsedUrl = new URL(url)
      const allowedHosts = [
        'webcloudor.com',
        'www.webcloudor.com',
        'github.com',
        'linkedin.com'
      ]
      
      return allowedHosts.some(host => 
        parsedUrl.hostname === host || 
        parsedUrl.hostname.endsWith('.' + host)
      )
    } catch {
      return false
    }
  }
  
  // Secure local storage usage
  static secureStorage = {
    setItem(key: string, value: string, encrypt: boolean = false): void {
      try {
        const dataToStore = encrypt 
          ? btoa(value) // Basic encoding (use proper encryption in production)
          : value
          
        localStorage.setItem(`webcloudor_${key}`, dataToStore)
      } catch (error) {
        console.error('Failed to store data:', error)
      }
    },
    
    getItem(key: string, encrypted: boolean = false): string | null {
      try {
        const data = localStorage.getItem(`webcloudor_${key}`)
        if (!data) return null
        
        return encrypted ? atob(data) : data
      } catch (error) {
        console.error('Failed to retrieve data:', error)
        return null
      }
    },
    
    removeItem(key: string): void {
      localStorage.removeItem(`webcloudor_${key}`)
    }
  }
}

// Content Security Policy helpers
export const CSPNonce = {
  // Generate nonce for inline scripts
  generate(): string {
    return crypto.randomUUID()
  },
  
  // Apply nonce to script tags
  applyToScript(nonce: string): { nonce: string } {
    return { nonce }
  }
}
```

### Form Security
```typescript
// components/forms/SecureForm.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { consultationSchema } from '@/lib/validations/security'

export const SecureConsultationForm = () => {
  const [csrfToken, setCsrfToken] = useState<string>('')
  const [honeypot, setHoneypot] = useState<string>('')
  
  const form = useForm({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      serviceInterest: [],
      projectDescription: '',
      budgetRange: '15k-35k',
      timeline: '3-6-months'
    }
  })
  
  // Get CSRF token on mount
  useEffect(() => {
    fetch('/api/csrf')
      .then(res => res.json())
      .then(data => setCsrfToken(data.token))
      .catch(console.error)
  }, [])
  
  const onSubmit = async (data: any) => {
    // Honeypot validation (bot detection)
    if (honeypot) {
      console.warn('Bot submission detected')
      return
    }
    
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify({
          ...data,
          timestamp: Date.now(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        })
      })
      
      if (!response.ok) {
        throw new Error('Submission failed')
      }
      
      // Handle success
    } catch (error) {
      // Handle error
    }
  }
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        style={{ display: 'none' }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
      />
      
      {/* CSRF Token */}
      <input type="hidden" name="csrf_token" value={csrfToken} />
      
      {/* Form fields with validation... */}
      
      <button 
        type="submit" 
        disabled={!csrfToken}
        className="secure-submit-button"
      >
        Submit Consultation Request
      </button>
    </form>
  )
}
```

---

## Data Privacy & Compliance

### GDPR Compliance
```typescript
// lib/compliance/gdpr.ts
export interface DataProcessingConsent {
  analytics: boolean
  marketing: boolean
  essential: boolean
  timestamp: Date
  version: string
}

export class GDPRCompliance {
  // Handle data subject requests
  static async handleDataRequest(
    type: 'access' | 'delete' | 'rectify',
    email: string,
    userId?: string
  ) {
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('User not found')
    }
    
    switch (type) {
      case 'access':
        return this.exportUserData(user._id)
      case 'delete':
        return this.deleteUserData(user._id)
      case 'rectify':
        // Allow user to update their data
        return this.getUserEditableData(user._id)
      default:
        throw new Error('Invalid request type')
    }
  }
  
  // Export all user data
  static async exportUserData(userId: string) {
    const [user, consultations, projects] = await Promise.all([
      User.findById(userId).lean(),
      Consultation.find({ email: user?.email }).lean(),
      Project.find({ client: user?.company }).lean()
    ])
    
    return {
      personalData: {
        name: user?.name,
        email: user?.email,
        company: user?.company,
        phone: user?.phone,
        createdAt: user?.createdAt
      },
      consultations: consultations.map(c => ({
        projectDescription: c.projectDescription,
        serviceInterest: c.serviceInterest,
        createdAt: c.createdAt
      })),
      projects: projects.map(p => ({
        title: p.title,
        description: p.description,
        createdAt: p.createdAt
      })),
      exportedAt: new Date(),
      retention: '30 days'
    }
  }
  
  // Securely delete user data
  static async deleteUserData(userId: string) {
    // Soft delete approach for audit trail
    await User.findByIdAndUpdate(userId, {
      name: '[DELETED]',
      email: '[DELETED]',
      phone: '[DELETED]',
      isDeleted: true,
      deletedAt: new Date()
    })
    
    // Anonymize related data
    await Consultation.updateMany(
      { userId },
      {
        name: '[DELETED]',
        email: '[DELETED]',
        phone: '[DELETED]',
        company: '[DELETED]'
      }
    )
    
    return { success: true, deletedAt: new Date() }
  }
  
  // Cookie consent management
  static manageCookieConsent(consent: DataProcessingConsent) {
    const consentData = {
      ...consent,
      timestamp: new Date(),
      version: '1.0',
      userAgent: navigator.userAgent
    }
    
    // Store consent
    localStorage.setItem('webcloudor_consent', JSON.stringify(consentData))
    
    // Apply consent settings
    if (consent.analytics) {
      this.enableAnalytics()
    }
    
    if (consent.marketing) {
      this.enableMarketing()
    }
    
    return consentData
  }
  
  private static enableAnalytics() {
    // Initialize Google Analytics only after consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }
  
  private static enableMarketing() {
    // Initialize marketing tools only after consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      })
    }
  }
}
```

### Cookie Management
```typescript
// lib/compliance/cookies.ts
export interface CookieConfig {
  name: string
  value: string
  domain?: string
  path?: string
  expires?: Date
  maxAge?: number
  httpOnly?: boolean
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
}

export class SecureCookieManager {
  // Set secure cookies
  static set(config: CookieConfig): void {
    const {
      name,
      value,
      domain = '.webcloudor.com',
      path = '/',
      expires,
      maxAge,
      httpOnly = true,
      secure = process.env.NODE_ENV === 'production',
      sameSite = 'lax'
    } = config
    
    let cookieString = `${name}=${encodeURIComponent(value)}`
    
    if (domain) cookieString += `; Domain=${domain}`
    if (path) cookieString += `; Path=${path}`
    if (expires) cookieString += `; Expires=${expires.toUTCString()}`
    if (maxAge) cookieString += `; Max-Age=${maxAge}`
    if (httpOnly) cookieString += '; HttpOnly'
    if (secure) cookieString += '; Secure'
    cookieString += `; SameSite=${sameSite}`
    
    document.cookie = cookieString
  }
  
  // Get cookie value safely
  static get(name: string): string | null {
    if (typeof document === 'undefined') return null
    
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop()?.split(';').shift() || '')
    }
    
    return null
  }
  
  // Delete cookie securely
  static delete(name: string, domain?: string, path?: string): void {
    this.set({
      name,
      value: '',
      domain,
      path,
      expires: new Date(0)
    })
  }
  
  // Essential cookies only
  static setEssential(name: string, value: string, maxAge: number = 86400): void {
    this.set({
      name: `essential_${name}`,
      value,
      maxAge,
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    })
  }
}
```

---

## Security Monitoring & Incident Response

### Security Event Logging
```typescript
// lib/security/monitoring.ts
export enum SecurityEventType {
  LOGIN_SUCCESS = 'login_success',
  LOGIN_FAILURE = 'login_failure',
  RATE_LIMIT_EXCEEDED = 'rate_limit_exceeded',
  SUSPICIOUS_REQUEST = 'suspicious_request',
  DATA_ACCESS = 'data_access',
  PERMISSION_DENIED = 'permission_denied',
  XSS_ATTEMPT = 'xss_attempt',
  SQL_INJECTION_ATTEMPT = 'sql_injection_attempt'
}

export interface SecurityEvent {
  type: SecurityEventType
  severity: 'low' | 'medium' | 'high' | 'critical'
  description: string
  userId?: string
  ip: string
  userAgent: string
  url: string
  payload?: any
  timestamp: Date
}

export class SecurityMonitor {
  // Log security events
  static async logEvent(event: SecurityEvent): Promise<void> {
    // Store in database
    await SecurityLog.create(event)
    
    // Real-time alerts for high/critical events
    if (event.severity === 'high' || event.severity === 'critical') {
      await this.sendAlert(event)
    }
    
    // Rate limiting pattern detection
    if (event.type === SecurityEventType.RATE_LIMIT_EXCEEDED) {
      await this.checkForPatterns(event.ip)
    }
  }
  
  // Send security alerts
  private static async sendAlert(event: SecurityEvent): Promise<void> {
    const alertData = {
      subject: `Security Alert: ${event.type}`,
      body: `
        Security Event Detected:
        Type: ${event.type}
        Severity: ${event.severity}
        Description: ${event.description}
        IP: ${event.ip}
        URL: ${event.url}
        Time: ${event.timestamp.toISOString()}
        
        User: ${event.userId || 'Anonymous'}
        User Agent: ${event.userAgent}
      `,
      recipients: ['security@webcloudor.com', 'delwer@webcloudor.com']
    }
    
    // Send email alert
    await emailService.sendSecurityAlert(alertData)
    
    // Send to security monitoring service (e.g., Sentry)
    if (typeof window !== 'undefined' && window.Sentry) {
      window.Sentry.captureMessage(event.description, {
        level: event.severity,
        tags: {
          security_event: event.type,
          ip: event.ip
        },
        extra: event
      })
    }
  }
  
  // Pattern detection for suspicious activity
  private static async checkForPatterns(ip: string): Promise<void> {
    const recentEvents = await SecurityLog.find({
      ip,
      timestamp: { $gte: new Date(Date.now() - 3600000) } // Last hour
    })
    
    // Check for brute force patterns
    const loginFailures = recentEvents.filter(
      e => e.type === SecurityEventType.LOGIN_FAILURE
    ).length
    
    if (loginFailures > 10) {
      await this.logEvent({
        type: SecurityEventType.SUSPICIOUS_REQUEST,
        severity: 'critical',
        description: `Potential brute force attack from IP: ${ip}`,
        ip,
        userAgent: 'System',
        url: '/security/monitor',
        timestamp: new Date()
      })
      
      // Consider IP blocking here
      await this.blockIP(ip, 'Brute force attempt')
    }
  }
  
  // IP blocking mechanism
  private static async blockIP(ip: string, reason: string): Promise<void> {
    await BlockedIP.create({
      ip,
      reason,
      blockedAt: new Date(),
      expiresAt: new Date(Date.now() + 3600000) // Block for 1 hour
    })
    
    // Log blocking action
    await this.logEvent({
      type: SecurityEventType.SUSPICIOUS_REQUEST,
      severity: 'high',
      description: `IP ${ip} blocked: ${reason}`,
      ip: 'system',
      userAgent: 'System',
      url: '/security/block',
      timestamp: new Date()
    })
  }
}
```

### Intrusion Detection
```typescript
// lib/security/intrusion.ts
export class IntrusionDetection {
  // Detect suspicious request patterns
  static analyzeRequest(req: NextRequest): SecurityEvent[] {
    const events: SecurityEvent[] = []
    const url = req.url
    const userAgent = req.headers.get('user-agent') || ''
    const ip = this.getClientIP(req)
    
    // Check for XSS attempts
    if (this.containsXSS(req)) {
      events.push({
        type: SecurityEventType.XSS_ATTEMPT,
        severity: 'high',
        description: 'Potential XSS attack detected',
        ip,
        userAgent,
        url,
        timestamp: new Date()
      })
    }
    
    // Check for SQL injection attempts
    if (this.containsSQLInjection(req)) {
      events.push({
        type: SecurityEventType.SQL_INJECTION_ATTEMPT,
        severity: 'high',
        description: 'Potential SQL injection detected',
        ip,
        userAgent,
        url,
        timestamp: new Date()
      })
    }
    
    // Check for suspicious user agents
    if (this.isSuspiciousUserAgent(userAgent)) {
      events.push({
        type: SecurityEventType.SUSPICIOUS_REQUEST,
        severity: 'medium',
        description: 'Suspicious user agent detected',
        ip,
        userAgent,
        url,
        timestamp: new Date()
      })
    }
    
    return events
  }
  
  private static containsXSS(req: NextRequest): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>/gi,
      /data:text\/html/gi
    ]
    
    const searchParams = new URL(req.url).searchParams.toString()
    
    return xssPatterns.some(pattern => pattern.test(searchParams))
  }
  
  private static containsSQLInjection(req: NextRequest): boolean {
    const sqlPatterns = [
      /('|(\\')|('')|(%27)|(%2527)/i,
      /(union|select|insert|delete|update|drop|create|alter|exec|execute)/i,
      /(and|or)\s+\d+\s*=\s*\d+/i,
      /1\s*=\s*1/i,
      /1\s*or\s*1\s*=\s*1/i
    ]
    
    const searchParams = new URL(req.url).searchParams.toString()
    
    return sqlPatterns.some(pattern => pattern.test(searchParams))
  }
  
  private static isSuspiciousUserAgent(userAgent: string): boolean {
    const suspiciousPatterns = [
      /sqlmap/i,
      /nmap/i,
      /nikto/i,
      /dirbuster/i,
      /burpsuite/i,
      /python-requests/i,
      /wget/i,
      /curl/i
    ]
    
    return suspiciousPatterns.some(pattern => pattern.test(userAgent))
  }
  
  private static getClientIP(req: NextRequest): string {
    return req.headers.get('cf-connecting-ip') ||
           req.headers.get('x-forwarded-for')?.split(',')[0] ||
           req.headers.get('x-real-ip') ||
           'unknown'
  }
}
```

---

## Security Testing & Auditing

### Security Test Suite
```typescript
// __tests__/security/security.test.ts
import { NextRequest } from 'next/server'
import { IntrusionDetection } from '@/lib/security/intrusion'
import { InputSanitizer } from '@/lib/security/sanitization'
import { AuthService } from '@/lib/auth/jwt'

describe('Security Tests', () => {
  describe('XSS Prevention', () => {
    it('should detect XSS attempts', () => {
      const maliciousInputs = [
        '<script>alert("xss")</script>',
        'javascript:alert(1)',
        '<img src=x onerror=alert(1)>',
        '<iframe src="javascript:alert(1)"></iframe>'
      ]
      
      maliciousInputs.forEach(input => {
        const sanitized = InputSanitizer.sanitizeText(input)
        expect(sanitized).not.toContain('<script')
        expect(sanitized).not.toContain('javascript:')
        expect(sanitized).not.toContain('onerror=')
      })
    })
  })
  
  describe('SQL Injection Prevention', () => {
    it('should sanitize database queries', () => {
      const maliciousQueries = [
        "'; DROP TABLE users; --",
        "1' OR '1'='1",
        "admin'--",
        "1' UNION SELECT * FROM users--"
      ]
      
      maliciousQueries.forEach(query => {
        const sanitized = InputSanitizer.sanitizeForDB(query)
        expect(sanitized).not.toContain("'")
        expect(sanitized).not.toContain("--")
        expect(sanitized).not.toContain("DROP")
        expect(sanitized).not.toContain("UNION")
      })
    })
  })
  
  describe('JWT Security', () => {
    it('should generate secure tokens', () => {
      const mockUser = {
        _id: 'user123',
        email: 'test@example.com',
        role: 'admin'
      }
      
      const tokens = AuthService.generateTokens(mockUser)
      
      expect(tokens.accessToken).toBeDefined()
      expect(tokens.refreshToken).toBeDefined()
      
      // Verify token structure
      const payload = AuthService.verifyToken(tokens.accessToken)
      expect(payload.id).toBe(mockUser._id)
      expect(payload.email).toBe(mockUser.email)
      expect(payload.role).toBe(mockUser.role)
    })
    
    it('should reject invalid tokens', () => {
      const invalidTokens = [
        'invalid.token.here',
        '',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.invalid',
        'Bearer token-without-proper-format'
      ]
      
      invalidTokens.forEach(token => {
        expect(() => AuthService.verifyToken(token)).toThrow()
      })
    })
  })
  
  describe('Rate Limiting', () => {
    it('should enforce rate limits', async () => {
      // Test rate limiting logic
      // This would involve testing the rate limit middleware
    })
  })
  
  describe('Input Validation', () => {
    it('should validate consultation form data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        serviceInterest: ['web-development'],
        projectDescription: 'Need a website',
        budgetRange: '15k-35k',
        timeline: '3-6-months'
      }
      
      const result = consultationSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })
    
    it('should reject invalid form data', () => {
      const invalidData = {
        name: '<script>alert("xss")</script>',
        email: 'not-an-email',
        serviceInterest: [],
        projectDescription: 'x'.repeat(3000), // Too long
        budgetRange: 'invalid-range',
        timeline: 'invalid-timeline'
      }
      
      const result = consultationSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})
```

### Security Audit Checklist
```markdown
# Monthly Security Audit Checklist

## Authentication & Authorization
- [ ] Review user access levels and permissions
- [ ] Check for unused or orphaned accounts
- [ ] Verify JWT token expiration policies
- [ ] Test multi-factor authentication flows
- [ ] Review password policies and enforcement

## Input Validation & Sanitization
- [ ] Test all form inputs with malicious payloads
- [ ] Verify XSS protection on all user inputs
- [ ] Check SQL injection protection
- [ ] Test file upload restrictions
- [ ] Verify URL parameter sanitization

## API Security
- [ ] Check rate limiting effectiveness
- [ ] Verify CORS configuration
- [ ] Test authentication bypasses
- [ ] Review API error messages for information leakage
- [ ] Check for deprecated or unused endpoints

## Data Protection
- [ ] Verify encryption of sensitive data at rest
- [ ] Check secure transmission (HTTPS everywhere)
- [ ] Review data retention policies
- [ ] Test backup and recovery procedures
- [ ] Verify GDPR compliance measures

## Infrastructure Security
- [ ] Review server security patches
- [ ] Check SSL/TLS certificate validity
- [ ] Verify security headers implementation
- [ ] Test for open ports or services
- [ ] Review monitoring and alerting systems

## Incident Response
- [ ] Test incident response procedures
- [ ] Review security logs and alerts
- [ ] Update incident response team contacts
- [ ] Verify backup communication channels
- [ ] Check forensic capabilities

## Compliance
- [ ] Review GDPR compliance measures
- [ ] Check cookie consent implementation
- [ ] Verify data processing documentation
- [ ] Review privacy policy accuracy
- [ ] Check terms of service updates
```

This comprehensive security guide ensures the WebCloudor website maintains the highest security standards while protecting client data and maintaining compliance with international privacy regulations.