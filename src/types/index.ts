// WebCloudor Type Definitions

export interface BaseEntity {
  _id: string
  createdAt: Date
  updatedAt: Date
}

// Service Types
export type ServiceType = 
  | 'web-development'
  | 'cloud-architecture'
  | 'ecommerce-solutions'
  | 'ai-automation'
  | 'startup-consulting'
  | 'mvp-development'

export type BudgetRange = 
  | '5k-15k'
  | '15k-35k'
  | '35k-50k'
  | '50k-100k'
  | '100k+'
  | 'need-consultation'

export type Timeline = 
  | 'asap'
  | '1-2-months'
  | '3-6-months'
  | '6-12-months'
  | 'flexible'

// Consultation
export interface Consultation extends BaseEntity {
  name: string
  email: string
  company?: string
  phone?: string
  serviceInterest: ServiceType[]
  projectDescription: string
  budgetRange: BudgetRange
  timeline: Timeline
  status: 'pending' | 'contacted' | 'converted' | 'closed'
  priority: 'low' | 'medium' | 'high'
}

// Project
export interface Project extends BaseEntity {
  title: string
  slug: string
  client: string
  industry: string
  services: ServiceType[]
  description: string
  challenge: string
  solution: string
  results: string
  images: string[]
  featured: boolean
  status: 'draft' | 'published' | 'archived'
  metrics: ProjectMetric[]
  testimonial?: {
    content: string
    author: string
    role: string
    company: string
    photo?: string
  }
}

export interface ProjectMetric {
  label: string
  value: string
  type: 'percentage' | 'currency' | 'number' | 'time'
  improvement?: boolean
}

// User (for admin)
export interface User extends BaseEntity {
  name: string
  email: string
  role: 'client' | 'admin' | 'super_admin'
  isActive: boolean
  isVerified: boolean
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Component Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export interface SectionProps {
  className?: string
  children?: React.ReactNode
}