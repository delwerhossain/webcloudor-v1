import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { connectDB } from '@/lib/api/utils/db'
import { Newsletter } from '@/lib/api/modules/newsletter/model'
import { ApiError } from '@/lib/api/errors/ApiError'
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { ApiResponse } from '@/lib/api/utils/apiResponse'

const unsubscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export const POST = asyncHandler(async (req: NextRequest) => {
  await connectDB()
  
  const body = await req.json()
  const { email } = unsubscribeSchema.parse(body)

  const subscriber = await Newsletter.findOne({ email: email.toLowerCase() })
  if (!subscriber) {
    throw new ApiError(404, 'Email not found in our newsletter list')
  }

  if (!subscriber.isActive) {
    return ApiResponse.success({ message: 'Email already unsubscribed' })
  }

  subscriber.isActive = false
  subscriber.unsubscribedAt = new Date()
  await subscriber.save()

  return ApiResponse.success({ message: 'Successfully unsubscribed from newsletter' })
})

// Handle GET requests with email as query parameter
export const GET = asyncHandler(async (req: NextRequest) => {
  await connectDB()
  
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  
  if (!email) {
    throw new ApiError(400, 'Email parameter is required')
  }

  const parsedEmail = z.string().email().parse(email)

  const subscriber = await Newsletter.findOne({ email: parsedEmail.toLowerCase() })
  if (!subscriber) {
    throw new ApiError(404, 'Email not found in our newsletter list')
  }

  if (!subscriber.isActive) {
    return ApiResponse.success({ message: 'Email already unsubscribed' })
  }

  subscriber.isActive = false
  subscriber.unsubscribedAt = new Date()
  await subscriber.save()

  // Return HTML page for direct link clicks
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Unsubscribed - WebCloudor</title>
      <style>
        body { font-family: system-ui, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 40px auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1B365D 0%, #2D5A87 100%); color: white; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 8px; }
        .success { color: #28a745; font-weight: 600; }
        .button { display: inline-block; background: #1B365D; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>WebCloudor</h1>
        <p>AI-First Web Development Agency</p>
      </div>
      <div class="content">
        <h2 class="success">✅ Successfully Unsubscribed</h2>
        <p>You have been successfully unsubscribed from WebCloudor Insider newsletter.</p>
        <p>We're sorry to see you go! If you change your mind, you can always resubscribe from our website.</p>
        <a href="https://webcloudor.com" class="button">Visit WebCloudor</a>
      </div>
    </body>
    </html>
  `

  return new NextResponse(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html' }
  })
})