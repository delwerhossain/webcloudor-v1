import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendNewsletter } from '@/lib/resend'
import { connectDB } from '@/lib/api/utils/db'
import { Newsletter } from '@/lib/api/modules/newsletter/model'
import { ApiError } from '@/lib/api/errors/ApiError'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'

const sendNewsletterSchema = z.object({
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject too long'),
  content: z.string().min(1, 'Content is required'),
  preheader: z.string().max(150, 'Preheader too long').optional(),
  targetInterests: z.array(z.string()).optional(), // Optional filter by interests
  testEmail: z.string().email().optional(), // Send to specific email for testing
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB()
  
  const body = await req.json()
  const { subject, content, preheader, targetInterests, testEmail } = sendNewsletterSchema.parse(body)

  let subscribers: string[] = []

  if (testEmail) {
    // Test mode: send only to specified email
    subscribers = [testEmail]
  } else {
    // Get active subscribers
    const query: any = { isActive: true }
    
    // Filter by interests if specified
    if (targetInterests && targetInterests.length > 0) {
      query.interests = { $in: targetInterests }
    }

    const activeSubscribers = await Newsletter.find(query, 'email').lean()
    subscribers = activeSubscribers.map(sub => sub.email)
  }

  if (subscribers.length === 0) {
    throw new ApiError(400, 'No active subscribers found')
  }

  // Send newsletter to all subscribers
  const results = await sendNewsletter(subscribers, subject, content, preheader)

  // Count successful/failed sends
  const successful = results.filter(result => result.status === 'fulfilled').length
  const failed = results.filter(result => result.status === 'rejected').length

  // Log failed sends for debugging
  if (failed > 0) {
    const failures = results
      .map((result, index) => ({ index, result }))
      .filter(({ result }) => result.status === 'rejected')
      .map(({ index, result }) => ({
        email: subscribers[index],
        error: result.status === 'rejected' ? result.reason : null
      }))
    
    console.error('Newsletter send failures:', failures)
  }

  return ApiResponse.success({
    message: `Newsletter sent successfully`,
    stats: {
      totalRecipients: subscribers.length,
      successful,
      failed,
      subject,
      sentAt: new Date().toISOString()
    }
  })
})

// GET endpoint to retrieve newsletter statistics
export const GET = asyncHandler(async (req: NextRequest) => {
  await connectDB()

  const totalSubscribers = await Newsletter.countDocuments({ isActive: true })
  const totalUnsubscribed = await Newsletter.countDocuments({ isActive: false })
  const recentSubscribers = await Newsletter.countDocuments({
    isActive: true,
    subscribedAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } // Last 30 days
  })

  // Get interest distribution
  const interestStats = await Newsletter.aggregate([
    { $match: { isActive: true } },
    { $unwind: { path: '$interests', preserveNullAndEmptyArrays: true } },
    { $group: { _id: '$interests', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ])

  return ApiResponse.success({
    totalSubscribers,
    totalUnsubscribed,
    recentSubscribers,
    interestDistribution: interestStats
  })
})