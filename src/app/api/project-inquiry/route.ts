import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendProjectInquiryEmail } from '@/lib/resend'
import { connectDB } from '@/lib/api/utils/db'
import { ApiError } from '@/lib/api/errors/ApiError'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'

const projectInquirySchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().max(100, 'Company name too long').optional(),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().min(1, 'Budget is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  features: z.array(z.string()).optional(),
  description: z.string().min(50, 'Description must be at least 50 characters').max(3000, 'Description too long'),
  references: z.string().optional(),
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB()
  
  const body = await req.json()
  const data = projectInquirySchema.parse(body)

  try {
    // Send project inquiry emails
    await sendProjectInquiryEmail(data)

    // Optional: Save project inquiry to database
    // You can create a ProjectInquiry model if needed
    
    return ApiResponse.success(
      { 
        message: 'Project inquiry submitted successfully! We\'ll analyze your requirements and respond within 24-48 hours.',
        inquiry: {
          projectType: data.projectType,
          budget: data.budget,
          timeline: data.timeline,
          submittedAt: new Date().toISOString()
        }
      },
      201
    )
  } catch (error) {
    console.error('Project inquiry email error:', error)
    throw new ApiError(500, 'Failed to submit project inquiry. Please try again.')
  }
})