/**
 * Web Vitals Analytics API Endpoint
 * Collects and stores Core Web Vitals data for performance monitoring
 */

import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

interface VitalsData {
  name: string
  value: number
  id: string
  delta: number
  rating: 'good' | 'needs-improvement' | 'poor'
  url: string
  userAgent: string
  connection: string
  timestamp: number
}

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || 'unknown'
    const origin = headersList.get('origin')
    
    // Validate origin for security
    const allowedOrigins = [
      'https://webcloudor.com',
      'https://www.webcloudor.com',
      'http://localhost:3000'
    ]
    
    if (process.env.NODE_ENV === 'production' && (!origin || !allowedOrigins.includes(origin))) {
      return NextResponse.json({ error: 'Unauthorized origin' }, { status: 403 })
    }

    const vitalsData: VitalsData = await request.json()
    
    // Validate required fields
    if (!vitalsData.name || typeof vitalsData.value !== 'number') {
      return NextResponse.json({ error: 'Invalid vitals data' }, { status: 400 })
    }

    // Store vitals data - In production, you'd want to use a proper database
    // For now, we'll use structured logging that can be picked up by monitoring tools
    
    const logData = {
      timestamp: new Date().toISOString(),
      type: 'web-vitals',
      metric: vitalsData.name,
      value: vitalsData.value,
      rating: vitalsData.rating,
      url: vitalsData.url,
      userAgent: userAgent,
      connection: vitalsData.connection,
      sessionId: vitalsData.id,
      environment: process.env.NODE_ENV
    }

    // Log to console (can be picked up by logging services like Vercel, DataDog, etc.)
    console.log('WEB_VITALS_METRIC:', JSON.stringify(logData))

    // Send to external monitoring service (if configured)
    if (process.env.ANALYTICS_WEBHOOK_URL) {
      try {
        await fetch(process.env.ANALYTICS_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ANALYTICS_WEBHOOK_TOKEN}`
          },
          body: JSON.stringify(logData)
        })
      } catch (webhookError) {
        console.error('Failed to send to webhook:', webhookError)
      }
    }

    // Store in database (implement based on your database choice)
    if (process.env.MONGODB_URI) {
      try {
        // Import your database connection here
        // await storeVitalsInDB(logData)
      } catch (dbError) {
        console.error('Failed to store in database:', dbError)
      }
    }

    // Aggregate metrics for real-time monitoring
    const aggregateMetrics = await calculateAggregates(vitalsData.name, vitalsData.value)
    
    return NextResponse.json({ 
      success: true, 
      timestamp: logData.timestamp,
      aggregates: aggregateMetrics 
    })

  } catch (error) {
    console.error('Vitals API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Calculate running aggregates for dashboard
async function calculateAggregates(metricName: string, value: number) {
  // In a real implementation, you'd calculate these from stored data
  // This is a simplified version for demonstration
  
  const aggregates = {
    [metricName]: {
      current: value,
      average: value, // Would be calculated from historical data
      p75: value,     // 75th percentile
      p90: value,     // 90th percentile
      count: 1,       // Total measurements
      trend: 'stable' as 'improving' | 'stable' | 'declining'
    }
  }

  // Performance thresholds for alerts
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    FID: { good: 100, poor: 300 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 }
  }

  const threshold = thresholds[metricName as keyof typeof thresholds]
  if (threshold) {
    aggregates[metricName].status = value <= threshold.good ? 'good' : 
                                   value <= threshold.poor ? 'needs-improvement' : 'poor'
  }

  return aggregates
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'web-vitals-analytics' 
  })
}