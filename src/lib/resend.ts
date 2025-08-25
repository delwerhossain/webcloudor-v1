import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({
  to,
  subject,
  html,
  text,
  from = process.env.FROM_EMAIL || 'hello@webcloudor.com'
}: {
  to: string | string[]
  subject: string
  html?: string
  text?: string
  from?: string
}) => {
  try {
    const emailPayload: any = {
      from,
      to,
      subject,
    }
    
    if (html) emailPayload.html = html
    if (text) emailPayload.text = text
    
    const result = await resend.emails.send(emailPayload)

    return result
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}

// Email Templates
const emailTemplates = {
  base: (content: string, preheader?: string) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>WebCloudor</title>
      ${preheader ? `<div style="display: none; max-height: 0; overflow: hidden;">${preheader}</div>` : ''}
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1B365D 0%, #2D5A87 100%); padding: 40px 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">WebCloudor</h1>
          <p style="color: #E8F4FD; margin: 10px 0 0 0; font-size: 16px;">AI-First Web Development Agency</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
          ${content}
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #eee;">
          <p style="color: #666; margin: 0; font-size: 14px;">
            © ${new Date().getFullYear()} WebCloudor. All rights reserved.
          </p>
          <p style="color: #666; margin: 10px 0 0 0; font-size: 12px;">
            <a href="https://webcloudor.com/unsubscribe" style="color: #666; text-decoration: none;">Unsubscribe</a> |
            <a href="https://webcloudor.com/privacy" style="color: #666; text-decoration: none;">Privacy Policy</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Newsletter Subscription
export const sendWelcomeNewsletter = async (email: string, name?: string) => {
  const content = `
    <h2 style="color: #1B365D; margin: 0 0 20px 0;">Welcome to WebCloudor Insider! 🚀</h2>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      ${name ? `Hi ${name},` : 'Hello there!'}
    </p>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      Thank you for subscribing to WebCloudor Insider! You're now part of an exclusive community that gets:
    </p>
    
    <div style="background: #f8f9fa; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <ul style="margin: 0; padding-left: 20px; color: #333;">
        <li style="margin-bottom: 12px;">🎯 <strong>Weekly Web Dev Insights</strong> - Latest trends and best practices</li>
        <li style="margin-bottom: 12px;">🛠️ <strong>AI-First Development Tips</strong> - Cutting-edge tools and techniques</li>
        <li style="margin-bottom: 12px;">📈 <strong>Conversion Optimization Secrets</strong> - Boost your site performance</li>
        <li style="margin-bottom: 12px;">🚀 <strong>Case Studies</strong> - Real client success stories</li>
        <li>🎁 <strong>Exclusive Offers</strong> - Early access to our services and resources</li>
      </ul>
    </div>
    
    <p style="line-height: 1.6; margin: 20px 0; color: #333;">
      Stay tuned for our first newsletter coming your way soon!
    </p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://webcloudor.com" style="display: inline-block; background: linear-gradient(135deg, #1B365D 0%, #2D5A87 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600;">
        Explore Our Services
      </a>
    </div>
  `

  return sendEmail({
    to: email,
    subject: 'Welcome to WebCloudor Insider! 🚀',
    html: emailTemplates.base(content, 'Your exclusive web development insights start here'),
  })
}

// Newsletter Content
export const sendNewsletter = async (
  subscribers: string[],
  subject: string,
  content: string,
  preheader?: string
) => {
  const emailContent = `
    <div style="margin-bottom: 30px;">
      ${content}
    </div>
    
    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
    
    <p style="color: #666; font-size: 14px; line-height: 1.5; margin: 0;">
      You're receiving this because you subscribed to WebCloudor Insider. 
      <a href="https://webcloudor.com/unsubscribe" style="color: #1B365D;">Unsubscribe</a> anytime.
    </p>
  `

  const promises = subscribers.map(email => 
    sendEmail({
      to: email,
      subject,
      html: emailTemplates.base(emailContent, preheader),
    })
  )

  return Promise.allSettled(promises)
}

// Contact Form
export const sendContactFormEmail = async ({
  name,
  email,
  message,
  phone,
  company,
  serviceInterest
}: {
  name: string
  email: string
  message: string
  phone?: string
  company?: string
  serviceInterest?: string[]
}) => {
  const content = `
    <h2 style="color: #1B365D; margin: 0 0 24px 0;">New Contact Form Submission</h2>
    
    <div style="background: #f8f9fa; padding: 24px; border-radius: 8px; margin: 24px 0;">
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1B365D;">${email}</a></p>
      ${phone ? `<p style="margin: 0 0 12px 0; color: #333;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1B365D;">${phone}</a></p>` : ''}
      ${company ? `<p style="margin: 0 0 12px 0; color: #333;"><strong>Company:</strong> ${company}</p>` : ''}
      ${serviceInterest?.length ? `<p style="margin: 0; color: #333;"><strong>Services of Interest:</strong> ${serviceInterest.join(', ')}</p>` : ''}
    </div>
    
    <div style="margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Message:</h3>
      <div style="background: #fff; border-left: 4px solid #1B365D; padding: 20px; border-radius: 0 8px 8px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <p style="line-height: 1.6; margin: 0; color: #333; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  `

  // Send to admin
  const adminEmail = sendEmail({
    to: process.env.FROM_EMAIL || 'hello@webcloudor.com',
    subject: `New Contact: ${name} from ${company || 'Individual'}`,
    html: emailTemplates.base(content),
  })

  // Send confirmation to user
  const userContent = `
    <h2 style="color: #1B365D; margin: 0 0 24px 0;">Thank you for contacting WebCloudor! ✨</h2>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      Hi ${name},
    </p>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      We've received your message and will get back to you within 24 hours. Our team is excited to learn more about your project!
    </p>
    
    <div style="background: #f8f9fa; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">What happens next?</h3>
      <ol style="margin: 0; padding-left: 20px; color: #333;">
        <li style="margin-bottom: 8px;">We'll review your requirements carefully</li>
        <li style="margin-bottom: 8px;">Our team will prepare a tailored response</li>
        <li style="margin-bottom: 8px;">We'll schedule a consultation call</li>
        <li>You'll receive a detailed project proposal</li>
      </ol>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://webcloudor.com/services" style="display: inline-block; background: linear-gradient(135deg, #1B365D 0%, #2D5A87 100%); color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600;">
        View Our Services
      </a>
    </div>
  `

  const userEmail = sendEmail({
    to: email,
    subject: 'We received your message - WebCloudor',
    html: emailTemplates.base(userContent, 'Thanks for reaching out! We\'ll be in touch soon.'),
  })

  return Promise.allSettled([adminEmail, userEmail])
}

// Consultation Booking
export const sendConsultationBookingEmail = async ({
  name,
  email,
  phone,
  company,
  projectType,
  budget,
  timeline,
  description,
  preferredDate,
  preferredTime
}: {
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  budget?: string
  timeline?: string
  description: string
  preferredDate?: string
  preferredTime?: string
}) => {
  const content = `
    <h2 style="color: #1B365D; margin: 0 0 24px 0;">New Consultation Booking 📅</h2>
    
    <div style="background: #f8f9fa; padding: 24px; border-radius: 8px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Contact Information</h3>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1B365D;">${email}</a></p>
      ${phone ? `<p style="margin: 0 0 12px 0; color: #333;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1B365D;">${phone}</a></p>` : ''}
      ${company ? `<p style="margin: 0; color: #333;"><strong>Company:</strong> ${company}</p>` : ''}
    </div>
    
    <div style="background: #fff; border: 2px solid #1B365D; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Project Details</h3>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Project Type:</strong> ${projectType}</p>
      ${budget ? `<p style="margin: 0 0 12px 0; color: #333;"><strong>Budget:</strong> ${budget}</p>` : ''}
      ${timeline ? `<p style="margin: 0 0 16px 0; color: #333;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
      <div style="margin-top: 16px;">
        <strong style="color: #1B365D;">Description:</strong>
        <p style="line-height: 1.6; margin: 8px 0 0 0; color: #333; white-space: pre-wrap;">${description}</p>
      </div>
    </div>
    
    ${preferredDate || preferredTime ? `
    <div style="background: #E8F4FD; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Preferred Consultation Time</h3>
      ${preferredDate ? `<p style="margin: 0 0 12px 0; color: #333;"><strong>Date:</strong> ${preferredDate}</p>` : ''}
      ${preferredTime ? `<p style="margin: 0; color: #333;"><strong>Time:</strong> ${preferredTime}</p>` : ''}
    </div>
    ` : ''}
  `

  // Send to admin
  const adminEmail = sendEmail({
    to: process.env.FROM_EMAIL || 'hello@webcloudor.com',
    subject: `Consultation Request: ${projectType} - ${name}`,
    html: emailTemplates.base(content),
  })

  // Send confirmation to user
  const userContent = `
    <h2 style="color: #1B365D; margin: 0 0 24px 0;">Consultation Booked Successfully! 🎉</h2>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      Hi ${name},
    </p>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      Thank you for booking a consultation with WebCloudor! We're thrilled to discuss your ${projectType.toLowerCase()} project.
    </p>
    
    <div style="background: #E8F4FD; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Next Steps</h3>
      <ol style="margin: 0; padding-left: 20px; color: #333;">
        <li style="margin-bottom: 8px;">Our team will review your project details</li>
        <li style="margin-bottom: 8px;">We'll confirm your preferred consultation time</li>
        <li style="margin-bottom: 8px;">You'll receive a calendar invite with meeting details</li>
        <li>We'll prepare tailored questions for your consultation</li>
      </ol>
    </div>
    
    <p style="line-height: 1.6; margin: 20px 0; color: #333;">
      Expect to hear from us within 4 hours to confirm your consultation time.
    </p>
  `

  const userEmail = sendEmail({
    to: email,
    subject: 'Consultation Booked - WebCloudor',
    html: emailTemplates.base(userContent, 'Your consultation is confirmed! We\'ll be in touch soon.'),
  })

  return Promise.allSettled([adminEmail, userEmail])
}

// Project Inquiry
export const sendProjectInquiryEmail = async ({
  name,
  email,
  phone,
  company,
  projectType,
  budget,
  timeline,
  features,
  description,
  references
}: {
  name: string
  email: string
  phone?: string
  company?: string
  projectType: string
  budget: string
  timeline: string
  features?: string[]
  description: string
  references?: string
}) => {
  const content = `
    <h2 style="color: #1B365D; margin: 0 0 24px 0;">New Project Inquiry 💼</h2>
    
    <div style="background: #f8f9fa; padding: 24px; border-radius: 8px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Client Information</h3>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Name:</strong> ${name}</p>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1B365D;">${email}</a></p>
      ${phone ? `<p style="margin: 0 0 12px 0; color: #333;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #1B365D;">${phone}</a></p>` : ''}
      ${company ? `<p style="margin: 0; color: #333;"><strong>Company:</strong> ${company}</p>` : ''}
    </div>
    
    <div style="background: #fff; border: 2px solid #1B365D; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Project Scope</h3>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Project Type:</strong> ${projectType}</p>
      <p style="margin: 0 0 12px 0; color: #333;"><strong>Budget:</strong> ${budget}</p>
      <p style="margin: 0 0 16px 0; color: #333;"><strong>Timeline:</strong> ${timeline}</p>
      
      ${features?.length ? `
      <div style="margin: 16px 0;">
        <strong style="color: #1B365D;">Required Features:</strong>
        <ul style="margin: 8px 0 0 20px; color: #333;">
          ${features.map(feature => `<li style="margin-bottom: 4px;">${feature}</li>`).join('')}
        </ul>
      </div>
      ` : ''}
      
      <div style="margin-top: 16px;">
        <strong style="color: #1B365D;">Project Description:</strong>
        <p style="line-height: 1.6; margin: 8px 0 0 0; color: #333; white-space: pre-wrap;">${description}</p>
      </div>
      
      ${references ? `
      <div style="margin-top: 16px;">
        <strong style="color: #1B365D;">References/Inspiration:</strong>
        <p style="line-height: 1.6; margin: 8px 0 0 0; color: #333;">${references}</p>
      </div>
      ` : ''}
    </div>
  `

  // Send detailed inquiry to admin
  const adminEmail = sendEmail({
    to: process.env.FROM_EMAIL || 'hello@webcloudor.com',
    subject: `Project Inquiry: ${projectType} - ${budget} Budget`,
    html: emailTemplates.base(content),
  })

  // Send confirmation to user
  const userContent = `
    <h2 style="color: #1B365D; margin: 0 0 24px 0;">Project Inquiry Received! 🚀</h2>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      Hi ${name},
    </p>
    
    <p style="line-height: 1.6; margin: 0 0 20px 0; color: #333;">
      Thank you for your detailed project inquiry. We're excited about the opportunity to work on your ${projectType.toLowerCase()} project!
    </p>
    
    <div style="background: #f8f9fa; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">Your Project Summary</h3>
      <p style="margin: 0 0 8px 0; color: #333;"><strong>Type:</strong> ${projectType}</p>
      <p style="margin: 0 0 8px 0; color: #333;"><strong>Budget:</strong> ${budget}</p>
      <p style="margin: 0; color: #333;"><strong>Timeline:</strong> ${timeline}</p>
    </div>
    
    <div style="background: #E8F4FD; border-radius: 8px; padding: 24px; margin: 24px 0;">
      <h3 style="color: #1B365D; margin: 0 0 16px 0;">What's Next?</h3>
      <ol style="margin: 0; padding-left: 20px; color: #333;">
        <li style="margin-bottom: 8px;"><strong>Analysis</strong> - Our team will analyze your requirements</li>
        <li style="margin-bottom: 8px;"><strong>Strategy Session</strong> - We'll schedule a detailed discussion</li>
        <li style="margin-bottom: 8px;"><strong>Proposal</strong> - You'll receive a comprehensive project proposal</li>
        <li><strong>Timeline</strong> - We'll provide detailed project milestones</li>
      </ol>
    </div>
    
    <p style="line-height: 1.6; margin: 20px 0; color: #333;">
      Expect our detailed response within 24-48 hours. For urgent inquiries, feel free to call us directly.
    </p>
  `

  const userEmail = sendEmail({
    to: email,
    subject: 'Project Inquiry Received - WebCloudor',
    html: emailTemplates.base(userContent, 'We\'re analyzing your project requirements and will respond soon.'),
  })

  return Promise.allSettled([adminEmail, userEmail])
}