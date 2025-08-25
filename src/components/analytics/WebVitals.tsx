/**
 * Web Vitals Performance Monitor for WebCloudor
 * Tracks Core Web Vitals and sends data to analytics
 */

'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

// Type declarations for global objects
declare global {
  interface Navigator {
    connection?: {
      effectiveType?: string
    }
  }
  
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface VitalsMetric {
  name: string
  value: number
  id: string
  delta: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

// Send vitals to analytics service
const sendToAnalytics = (metric: VitalsMetric) => {
  const { name, value, id, delta, rating } = metric
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, {
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
      metric_rating: rating,
      custom_parameter_1: window.location.pathname,
      custom_parameter_2: navigator.connection?.effectiveType || 'unknown'
    })
  }

  // Send to custom analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        value,
        id,
        delta,
        rating,
        url: window.location.href,
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown',
        timestamp: Date.now()
      })
    }).catch(console.error)
  }

  // Console logging for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`%c${name}: ${value} (${rating})`, `
      color: ${rating === 'good' ? '#22c55e' : rating === 'needs-improvement' ? '#f59e0b' : '#ef4444'};
      font-weight: bold;
      font-size: 12px;
    `)
  }
}

// Performance thresholds based on Google's recommendations
const getVitalsRating = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  switch (name) {
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor'
    case 'INP':
      return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor'
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor'
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor'
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor'
    default:
      return 'good'
  }
}

// Enhanced metric tracking
const trackMetric = (metric: any) => {
  const enhancedMetric: VitalsMetric = {
    name: metric.name,
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
    rating: getVitalsRating(metric.name, metric.value)
  }
  
  sendToAnalytics(enhancedMetric)
}

export const WebVitals = () => {
  useEffect(() => {
    // Track Core Web Vitals
    onCLS(trackMetric)
    onINP(trackMetric) 
    onFCP(trackMetric)
    onLCP(trackMetric)
    onTTFB(trackMetric)

    // Track additional performance metrics
    if (typeof window !== 'undefined' && window.performance) {
      // Navigation timing
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigationTiming) {
        const metrics = {
          'DNS': navigationTiming.domainLookupEnd - navigationTiming.domainLookupStart,
          'Connection': navigationTiming.connectEnd - navigationTiming.connectStart,
          'Request': navigationTiming.responseStart - navigationTiming.requestStart,
          'Response': navigationTiming.responseEnd - navigationTiming.responseStart,
          'DOM Processing': navigationTiming.domContentLoadedEventStart - navigationTiming.responseEnd,
          'Load Complete': navigationTiming.loadEventEnd - navigationTiming.loadEventStart
        }

        Object.entries(metrics).forEach(([name, value]) => {
          if (value > 0) {
            sendToAnalytics({
              name: `Navigation-${name}`,
              value,
              id: `nav-${name.toLowerCase()}`,
              delta: value,
              rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor'
            })
          }
        })
      }

      // Resource timing for images
      const resourceEntries = performance.getEntriesByType('resource')
      const imageResources = resourceEntries.filter(entry => 
        entry.name.match(/\.(jpg|jpeg|png|webp|avif|svg)$/i)
      )

      if (imageResources.length > 0) {
        const avgImageLoad = imageResources.reduce((sum, entry) => 
          sum + entry.duration, 0
        ) / imageResources.length

        sendToAnalytics({
          name: 'Average-Image-Load',
          value: avgImageLoad,
          id: 'avg-img-load',
          delta: avgImageLoad,
          rating: avgImageLoad < 200 ? 'good' : avgImageLoad < 500 ? 'needs-improvement' : 'poor'
        })
      }
    }

    // Device-specific tracking
    const trackDeviceMetrics = () => {
      const connection = (navigator as any).connection
      if (connection) {
        sendToAnalytics({
          name: 'Connection-Type',
          value: 0,
          id: 'connection-type',
          delta: 0,
          rating: 'good'
        })
      }

      // Memory usage (Chrome only)
      if ('memory' in performance) {
        const memory = (performance as any).memory
        sendToAnalytics({
          name: 'Memory-Used',
          value: memory.usedJSHeapSize,
          id: 'memory-used',
          delta: memory.usedJSHeapSize,
          rating: memory.usedJSHeapSize < 50000000 ? 'good' : 'needs-improvement'
        })
      }
    }

    // Track after initial load
    setTimeout(trackDeviceMetrics, 5000)

    // Performance observer for additional metrics
    if ('PerformanceObserver' in window) {
      try {
        // Long tasks observer
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) {
              sendToAnalytics({
                name: 'Long-Task',
                value: entry.duration,
                id: `long-task-${Date.now()}`,
                delta: entry.duration,
                rating: entry.duration < 50 ? 'good' : entry.duration < 100 ? 'needs-improvement' : 'poor'
              })
            }
          })
        })
        
        longTaskObserver.observe({ entryTypes: ['longtask'] })

        // Layout shift observer for detailed CLS tracking
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          list.getEntries().forEach((entry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
            }
          })
          
          if (clsValue > 0) {
            sendToAnalytics({
              name: 'Detailed-CLS',
              value: clsValue,
              id: `cls-detail-${Date.now()}`,
              delta: clsValue,
              rating: getVitalsRating('CLS', clsValue)
            })
          }
        })
        
        clsObserver.observe({ entryTypes: ['layout-shift'] })

      } catch (e) {
        console.warn('Performance observer not supported:', e)
      }
    }

  }, [])

  // Component doesn't render anything
  return null
}

// Utility function to manually track custom metrics
export const trackCustomMetric = (name: string, value: number, context?: string) => {
  sendToAnalytics({
    name: `Custom-${name}`,
    value,
    id: `custom-${name.toLowerCase()}-${Date.now()}`,
    delta: value,
    rating: 'good' // Custom metrics default to good
  })
}

// Performance debugging in development
export const PerformanceDebug = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const debugStyle = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 8px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 11px;
        z-index: 9999;
        pointer-events: none;
      `
      
      const debugElement = document.createElement('div')
      debugElement.style.cssText = debugStyle
      debugElement.innerHTML = 'Performance Debug Active'
      document.body.appendChild(debugElement)
      
      // Show FPS
      let fps = 0
      let lastTime = performance.now()
      
      const countFPS = () => {
        const now = performance.now()
        fps = Math.round(1000 / (now - lastTime))
        lastTime = now
        debugElement.innerHTML = `FPS: ${fps} | Performance Debug Active`
        requestAnimationFrame(countFPS)
      }
      
      countFPS()
      
      return () => {
        document.body.removeChild(debugElement)
      }
    }
  }, [])

  return null
}

export default WebVitals