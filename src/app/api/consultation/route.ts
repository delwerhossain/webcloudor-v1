import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendConsultationBookingEmail } from '@/lib/resend'
import { connectDB } from '@/lib/api/utils/db'
import { ApiError } from '@/lib/api/errors/ApiError'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'

const consultationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().max(100, 'Company name too long').optional(),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().min(20, 'Description must be at least 20 characters').max(2000, 'Description too long'),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB()
  
  const body = await req.json()
  const data = consultationSchema.parse(body)

  try {
    // Send consultation booking emails
    await sendConsultationBookingEmail(data)

    // Optional: Save consultation request to database
    // You can create a Consultation model if needed
    
    return ApiResponse.success(
      { 
        message: 'Consultation booked successfully! We\'ll contact you within 4 hours to confirm the time.',
        consultation: {
          projectType: data.projectType,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime
        }
      },
      201
    )
  } catch (error) {
    console.error('Consultation booking email error:', error)
    throw new ApiError(500, 'Failed to book consultation. Please try again.')
  }
})