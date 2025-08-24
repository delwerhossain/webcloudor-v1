# WebCloudor Database Schema Specification

## Overview
MongoDB database schema designed for WebCloudor agency website with focus on lead generation, portfolio management, and content delivery. Optimized for performance and scalability.

---

## Database Architecture

### Connection Configuration
```typescript
// lib/database/connection.ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

declare global {
  var mongoose: MongooseCache
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const connectDB = async (): Promise<typeof mongoose> => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts)
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}
```

---

## Core Collections

### 1. Users Collection
**Purpose**: Client accounts and admin users

```typescript
// lib/models/User.ts
import mongoose, { Schema, Document } from 'mongoose'
import bcryptjs from 'bcryptjs'

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  password?: string
  company?: string
  role: 'client' | 'admin' | 'super_admin'
  phone?: string
  avatar?: string
  isVerified: boolean
  projects: mongoose.Types.ObjectId[]
  consultations: mongoose.Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
  lastLogin?: Date
  preferences: {
    newsletter: boolean
    marketing: boolean
    notifications: boolean
  }
  comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
  },
  password: {
    type: String,
    minlength: [6, 'Password must be at least 6 characters'],
    select: false
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  role: {
    type: String,
    enum: ['client', 'admin', 'super_admin'],
    default: 'client'
  },
  phone: {
    type: String,
    match: [/^\+?[\d\s-()]+$/, 'Invalid phone format']
  },
  avatar: String,
  isVerified: {
    type: Boolean,
    default: false
  },
  projects: [{
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }],
  consultations: [{
    type: Schema.Types.ObjectId,
    ref: 'Consultation'
  }],
  lastLogin: Date,
  preferences: {
    newsletter: { type: Boolean, default: false },
    marketing: { type: Boolean, default: false },
    notifications: { type: Boolean, default: true }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

// Indexes
userSchema.index({ email: 1 }, { unique: true })
userSchema.index({ role: 1 })
userSchema.index({ createdAt: -1 })

// Middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password') || !this.password) return next()
  this.password = await bcryptjs.hash(this.password, 12)
  next()
})

// Methods
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  if (!this.password) return false
  return bcryptjs.compare(candidatePassword, this.password)
}

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema)
```

### 2. Consultations Collection
**Purpose**: Lead generation and consultation bookings

```typescript
// lib/models/Consultation.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IConsultation extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  company?: string
  phone?: string
  serviceInterest: string[]
  projectDescription: string
  budgetRange: string
  timeline: string
  preferredContact: 'email' | 'phone' | 'either'
  source: 'website' | 'referral' | 'social' | 'other'
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  priority: 'low' | 'medium' | 'high'
  scheduledAt?: Date
  completedAt?: Date
  notes: string
  followUpDate?: Date
  assignedTo?: mongoose.Types.ObjectId
  proposalSent: boolean
  proposalValue?: number
  conversionStatus: 'lead' | 'qualified' | 'proposal_sent' | 'won' | 'lost'
  createdAt: Date
  updatedAt: Date
}

const consultationSchema = new Schema<IConsultation>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  phone: String,
  serviceInterest: [{
    type: String,
    enum: [
      'web-development',
      'cloud-architecture',
      'ecommerce-solutions',
      'ai-automation',
      'startup-consulting',
      'mvp-development'
    ]
  }],
  projectDescription: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  budgetRange: {
    type: String,
    required: [true, 'Budget range is required'],
    enum: ['5k-15k', '15k-35k', '35k-50k', '50k-100k', '100k+', 'need-consultation']
  },
  timeline: {
    type: String,
    required: [true, 'Timeline is required'],
    enum: ['asap', '1-2-months', '3-6-months', '6-12-months', 'flexible']
  },
  preferredContact: {
    type: String,
    enum: ['email', 'phone', 'either'],
    default: 'email'
  },
  source: {
    type: String,
    enum: ['website', 'referral', 'social', 'other'],
    default: 'website'
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  scheduledAt: Date,
  completedAt: Date,
  notes: {
    type: String,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  },
  followUpDate: Date,
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  proposalSent: {
    type: Boolean,
    default: false
  },
  proposalValue: Number,
  conversionStatus: {
    type: String,
    enum: ['lead', 'qualified', 'proposal_sent', 'won', 'lost'],
    default: 'lead'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

// Indexes
consultationSchema.index({ email: 1 })
consultationSchema.index({ status: 1 })
consultationSchema.index({ createdAt: -1 })
consultationSchema.index({ scheduledAt: 1 })
consultationSchema.index({ conversionStatus: 1 })
consultationSchema.index({ assignedTo: 1 })

export const Consultation = mongoose.models.Consultation || mongoose.model<IConsultation>('Consultation', consultationSchema)
```

### 3. Projects Collection
**Purpose**: Portfolio showcase and client work tracking

```typescript
// lib/models/Project.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
  _id: mongoose.Types.ObjectId
  title: string
  slug: string
  client: string
  clientLogo?: string
  industry: string
  services: string[]
  description: string
  challenge: string
  solution: string
  technologies: string[]
  timeline: {
    start: Date
    end: Date
    duration: string
  }
  team: string[]
  metrics: {
    label: string
    value: string
    description?: string
    type: 'percentage' | 'multiplier' | 'absolute' | 'currency'
  }[]
  images: {
    url: string
    alt: string
    caption?: string
    type: 'hero' | 'before' | 'after' | 'process' | 'result'
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
    photo?: string
  }
  status: 'draft' | 'review' | 'published' | 'archived'
  featured: boolean
  publishedAt?: Date
  seoTitle?: string
  seoDescription?: string
  tags: string[]
  viewCount: number
  createdAt: Date
  updatedAt: Date
}

const projectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^[a-z0-9-]+$/, 'Invalid slug format']
  },
  client: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  clientLogo: String,
  industry: {
    type: String,
    required: [true, 'Industry is required'],
    enum: [
      'technology',
      'e-commerce',
      'healthcare',
      'finance',
      'education',
      'non-profit',
      'manufacturing',
      'other'
    ]
  },
  services: [{
    type: String,
    enum: [
      'web-development',
      'cloud-architecture',
      'ecommerce-solutions',
      'ai-automation',
      'startup-consulting',
      'mvp-development',
      'ui-ux-design'
    ]
  }],
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  challenge: {
    type: String,
    required: [true, 'Project challenge is required'],
    maxlength: [1000, 'Challenge cannot exceed 1000 characters']
  },
  solution: {
    type: String,
    required: [true, 'Project solution is required'],
    maxlength: [1000, 'Solution cannot exceed 1000 characters']
  },
  technologies: [String],
  timeline: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    duration: { type: String, required: true }
  },
  team: [String],
  metrics: [{
    label: { type: String, required: true },
    value: { type: String, required: true },
    description: String,
    type: {
      type: String,
      enum: ['percentage', 'multiplier', 'absolute', 'currency'],
      required: true
    }
  }],
  images: [{
    url: { type: String, required: true },
    alt: { type: String, required: true },
    caption: String,
    type: {
      type: String,
      enum: ['hero', 'before', 'after', 'process', 'result'],
      required: true
    }
  }],
  testimonial: {
    quote: String,
    author: String,
    role: String,
    company: String,
    photo: String
  },
  status: {
    type: String,
    enum: ['draft', 'review', 'published', 'archived'],
    default: 'draft'
  },
  featured: {
    type: Boolean,
    default: false
  },
  publishedAt: Date,
  seoTitle: String,
  seoDescription: String,
  tags: [String],
  viewCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

// Indexes
projectSchema.index({ slug: 1 }, { unique: true })
projectSchema.index({ status: 1 })
projectSchema.index({ featured: 1 })
projectSchema.index({ industry: 1 })
projectSchema.index({ services: 1 })
projectSchema.index({ publishedAt: -1 })
projectSchema.index({ viewCount: -1 })

// Virtuals
projectSchema.virtual('url').get(function() {
  return `/portfolio/${this.slug}`
})

export const Project = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema)
```

### 4. Blog Posts Collection
**Purpose**: SEO content and thought leadership

```typescript
// lib/models/BlogPost.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IBlogPost extends Document {
  _id: mongoose.Types.ObjectId
  title: string
  slug: string
  excerpt: string
  content: string
  author: mongoose.Types.ObjectId
  category: string
  tags: string[]
  featured: boolean
  publishedAt?: Date
  readTime: number
  viewCount: number
  shareCount: number
  seo: {
    title: string
    description: string
    keywords: string[]
    canonicalUrl?: string
  }
  featuredImage: {
    url: string
    alt: string
    caption?: string
  }
  status: 'draft' | 'review' | 'published' | 'archived'
  createdAt: Date
  updatedAt: Date
}

const blogPostSchema = new Schema<IBlogPost>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    maxlength: [300, 'Excerpt cannot exceed 300 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'technical-guides',
      'case-studies',
      'industry-insights',
      'best-practices',
      'performance-tips',
      'tutorials'
    ]
  },
  tags: [String],
  featured: {
    type: Boolean,
    default: false
  },
  publishedAt: Date,
  readTime: {
    type: Number,
    required: true
  },
  viewCount: {
    type: Number,
    default: 0
  },
  shareCount: {
    type: Number,
    default: 0
  },
  seo: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    keywords: [String],
    canonicalUrl: String
  },
  featuredImage: {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    caption: String
  },
  status: {
    type: String,
    enum: ['draft', 'review', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

// Indexes
blogPostSchema.index({ slug: 1 }, { unique: true })
blogPostSchema.index({ status: 1 })
blogPostSchema.index({ publishedAt: -1 })
blogPostSchema.index({ category: 1 })
blogPostSchema.index({ tags: 1 })
blogPostSchema.index({ featured: 1 })
blogPostSchema.index({ viewCount: -1 })

export const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', blogPostSchema)
```

### 5. Newsletter Subscriptions Collection
**Purpose**: Email marketing and lead nurturing

```typescript
// lib/models/Newsletter.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface INewsletter extends Document {
  _id: mongoose.Types.ObjectId
  email: string
  name?: string
  company?: string
  interests: string[]
  source: string
  status: 'active' | 'unsubscribed' | 'bounced'
  subscribedAt: Date
  unsubscribedAt?: Date
  lastEmailSent?: Date
  emailsSent: number
  emailsOpened: number
  linksClicked: number
  preferences: {
    frequency: 'weekly' | 'monthly'
    topics: string[]
  }
}

const newsletterSchema = new Schema<INewsletter>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true
  },
  name: String,
  company: String,
  interests: [String],
  source: {
    type: String,
    required: true,
    enum: ['website', 'blog', 'consultation', 'referral', 'manual']
  },
  status: {
    type: String,
    enum: ['active', 'unsubscribed', 'bounced'],
    default: 'active'
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  unsubscribedAt: Date,
  lastEmailSent: Date,
  emailsSent: { type: Number, default: 0 },
  emailsOpened: { type: Number, default: 0 },
  linksClicked: { type: Number, default: 0 },
  preferences: {
    frequency: {
      type: String,
      enum: ['weekly', 'monthly'],
      default: 'weekly'
    },
    topics: [String]
  }
}, {
  timestamps: true
})

// Indexes
newsletterSchema.index({ email: 1 }, { unique: true })
newsletterSchema.index({ status: 1 })
newsletterSchema.index({ subscribedAt: -1 })

export const Newsletter = mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', newsletterSchema)
```

### 6. Contact Messages Collection
**Purpose**: General inquiries and contact form submissions

```typescript
// lib/models/Contact.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IContact extends Document {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  source: 'contact-form' | 'quick-form' | 'footer' | 'about-page'
  status: 'unread' | 'read' | 'replied' | 'archived'
  priority: 'low' | 'medium' | 'high'
  assignedTo?: mongoose.Types.ObjectId
  repliedAt?: Date
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const contactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true
  },
  company: String,
  phone: String,
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    enum: [
      'general-inquiry',
      'project-discussion',
      'partnership',
      'technical-question',
      'pricing',
      'other'
    ]
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  source: {
    type: String,
    enum: ['contact-form', 'quick-form', 'footer', 'about-page'],
    default: 'contact-form'
  },
  status: {
    type: String,
    enum: ['unread', 'read', 'replied', 'archived'],
    default: 'unread'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  repliedAt: Date,
  notes: String
}, {
  timestamps: true
})

// Indexes
contactSchema.index({ status: 1 })
contactSchema.index({ createdAt: -1 })
contactSchema.index({ assignedTo: 1 })

export const Contact = mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema)
```

---

## Data Relationships

### Relationship Mapping
```
Users (1) ←→ (N) Consultations
Users (1) ←→ (N) BlogPosts (author)
Users (1) ←→ (N) Contacts (assignedTo)
```

### Reference Patterns
- Use ObjectId references for related documents
- Populate references only when necessary
- Index foreign key fields for performance

---

## Performance Optimizations

### Database Indexes
```typescript
// Critical indexes for performance
{
  // User lookups
  'users.email': 1,
  'users.role': 1,
  
  // Consultation management
  'consultations.status': 1,
  'consultations.createdAt': -1,
  'consultations.conversionStatus': 1,
  
  // Portfolio filtering
  'projects.status': 1,
  'projects.featured': 1,
  'projects.industry': 1,
  'projects.publishedAt': -1,
  
  // Blog performance
  'blogposts.slug': 1,
  'blogposts.publishedAt': -1,
  'blogposts.category': 1,
  
  // Newsletter management
  'newsletters.status': 1,
  'newsletters.email': 1
}
```

### Query Optimization
```typescript
// Use lean() for read-only operations
const projects = await Project.find({ status: 'published' })
  .lean()
  .select('title slug metrics images')
  .limit(10)

// Use aggregation for complex queries
const consultationStats = await Consultation.aggregate([
  { $match: { createdAt: { $gte: startDate } } },
  { $group: {
    _id: '$conversionStatus',
    count: { $sum: 1 },
    avgValue: { $avg: '$proposalValue' }
  }}
])
```

---

## Data Validation

### Mongoose Validation
```typescript
// Custom validators
const emailValidator = {
  validator: (email: string) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
  },
  message: 'Invalid email format'
}

// Enum validation
const serviceTypes = [
  'web-development',
  'cloud-architecture', 
  'ecommerce-solutions',
  'ai-automation',
  'startup-consulting',
  'mvp-development'
] as const
```

### Zod Schema Integration
```typescript
// lib/validations/consultation.ts
import { z } from 'zod'

export const consultationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  serviceInterest: z.array(z.enum([
    'web-development',
    'cloud-architecture',
    'ecommerce-solutions',
    'ai-automation',
    'startup-consulting',
    'mvp-development'
  ])).min(1),
  projectDescription: z.string().min(10).max(2000),
  budgetRange: z.enum(['5k-15k', '15k-35k', '35k-50k', '50k-100k', '100k+', 'need-consultation']),
  timeline: z.enum(['asap', '1-2-months', '3-6-months', '6-12-months', 'flexible'])
})
```

---

## Data Seeding

### Initial Data Setup
```typescript
// scripts/seed.ts
import { User, Project, BlogPost } from '@/lib/models'

export const seedDatabase = async () => {
  // Create admin users
  const admin = await User.create({
    name: 'WebCloudor Admin',
    email: 'admin@webcloudor.com',
    role: 'super_admin',
    isVerified: true
  })

  // Create sample projects
  const sampleProjects = [
    {
      title: 'E-commerce Platform Rebuild',
      slug: 'ecommerce-platform-rebuild',
      client: 'RetailCorp',
      industry: 'e-commerce',
      services: ['web-development', 'ecommerce-solutions'],
      // ... other fields
    }
  ]

  await Project.insertMany(sampleProjects)
}
```

---

## Backup and Migration

### Backup Strategy
```typescript
// Automated backup configuration
const backupConfig = {
  daily: {
    collections: ['users', 'consultations', 'projects'],
    retention: 30 // days
  },
  weekly: {
    collections: '*', // all collections
    retention: 12 // weeks
  },
  monthly: {
    collections: '*',
    retention: 12 // months
  }
}
```

### Migration Scripts
```typescript
// lib/database/migrations/001_add_seo_fields.ts
export const up = async () => {
  await Project.updateMany(
    { seoTitle: { $exists: false } },
    { $set: { seoTitle: '', seoDescription: '' } }
  )
}

export const down = async () => {
  await Project.updateMany(
    {},
    { $unset: { seoTitle: 1, seoDescription: 1 } }
  )
}
```

---

## Security Considerations

### Data Protection
- Sensitive fields use `select: false`
- Password hashing with bcryptjs (salt rounds: 12)
- Input sanitization and validation
- Rate limiting on API endpoints
- No sensitive data in logs

### Access Control
```typescript
// Role-based field access
const getUserFields = (role: string) => {
  const baseFields = 'name email company'
  
  if (role === 'admin' || role === 'super_admin') {
    return baseFields + ' phone preferences lastLogin'
  }
  
  return baseFields
}
```

This database schema provides a robust foundation for the WebCloudor website with proper relationships, indexing, and validation while maintaining performance and security standards.