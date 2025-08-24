import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendWelcomeNewsletter } from '@/lib/resend'
import { connectDB } from '@/lib/api/utils/db'
import { Newsletter } from '@/lib/api/modules/newsletter/model'
import { ApiError } from '@/lib/api/errors/ApiError'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(1, 'Name is required').max(100, 'Name too long').optional(),
  interests: z.array(z.string()).optional(),
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB()
  
  const body = await req.json()
  const { email, name, interests } = subscribeSchema.parse(body)

  // Check if already subscribed
  const existing = await Newsletter.findOne({ email: email.toLowerCase() })
  if (existing) {
    if (existing.isActive) {
      throw new ApiError(409, 'Email already subscribed')
    } else {
      // Reactivate subscription
      existing.isActive = true
      existing.subscribedAt = new Date()
      existing.name = name || existing.name
      existing.interests = interests || existing.interests
      await existing.save()

      await sendWelcomeNewsletter(email, name)

      return ApiResponse.success(
        { message: 'Subscription reactivated successfully' },
        201
      )
    }
  }

  // Create new subscription
  const subscriber = await Newsletter.create({
    email: email.toLowerCase(),
    name,
    interests,
    isActive: true,
    subscribedAt: new Date(),
  })

  // Send welcome email
  try {
    await sendWelcomeNewsletter(email, name)
  } catch (error) {
    console.error('Failed to send welcome email:', error)
    // Don't fail the subscription if email fails
  }

  return ApiResponse.success(
    { 
      message: 'Successfully subscribed to newsletter',
      subscriber: {
        email: subscriber.email,
        name: subscriber.name,
        subscribedAt: subscriber.subscribedAt
      }
    },
    201
  )
})