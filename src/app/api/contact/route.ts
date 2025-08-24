import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendContactFormEmail } from '@/lib/resend'
import { connectDB } from '@/lib/api/utils/db'
import { ApiError } from '@/lib/api/errors/ApiError'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
  phone: z.string().optional(),
  company: z.string().max(100, 'Company name too long').optional(),
  serviceInterest: z.array(z.string()).optional(),
  source: z.string().optional() // Where they came from (contact page, footer, etc.)
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB()
  
  const body = await req.json()
  const data = contactSchema.parse(body)

  try {
    // Send emails (both admin notification and user confirmation)
    await sendContactFormEmail(data)

    // Optional: Save to database for tracking
    // You can create a Contact model if you want to store submissions
    
    return ApiResponse.success(
      { message: 'Message sent successfully. We\'ll get back to you soon!' },
      200
    )
  } catch (error) {
    console.error('Contact form email error:', error)
    throw new ApiError(500, 'Failed to send message. Please try again.')
  }
})