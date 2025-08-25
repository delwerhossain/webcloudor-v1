/**
 * Image placeholder generation for optimized loading
 * Provides base64 blur placeholders for better UX
 */

// Simple base64 blur placeholder generator
export const generatePlaceholder = (width: number = 10, height: number = 10): string => {
  // Create a simple gray gradient as base64
  const canvas = `data:image/svg+xml;base64,${btoa(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>`
  )}`
  
  return canvas
}

// Default placeholder for common aspect ratios
export const defaultPlaceholders = {
  square: generatePlaceholder(400, 400),
  portrait: generatePlaceholder(400, 600),
  landscape: generatePlaceholder(600, 400),
  wide: generatePlaceholder(800, 400),
  avatar: generatePlaceholder(200, 200)
}

// Get placeholder by aspect ratio
export const getPlaceholderByRatio = (aspectRatio: number): string => {
  if (aspectRatio === 1) return defaultPlaceholders.square
  if (aspectRatio < 1) return defaultPlaceholders.portrait
  if (aspectRatio > 1.5) return defaultPlaceholders.wide
  return defaultPlaceholders.landscape
}

// Create shimmer effect placeholder
export const createShimmerPlaceholder = (width: number, height: number): string => {
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#f1f3f4;stop-opacity:1">
            <animate attributeName="stop-color" 
                     values="#f1f3f4;#e8eaed;#f1f3f4" 
                     dur="2s" 
                     repeatCount="indefinite"/>
          </stop>
          <stop offset="50%" style="stop-color:#e8eaed;stop-opacity:1">
            <animate attributeName="stop-color" 
                     values="#e8eaed;#f1f3f4;#e8eaed" 
                     dur="2s" 
                     repeatCount="indefinite"/>
          </stop>
          <stop offset="100%" style="stop-color:#f1f3f4;stop-opacity:1">
            <animate attributeName="stop-color" 
                     values="#f1f3f4;#e8eaed;#f1f3f4" 
                     dur="2s" 
                     repeatCount="indefinite"/>
          </stop>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shimmer)" />
    </svg>`
  )}`
}

export default {
  generatePlaceholder,
  defaultPlaceholders,
  getPlaceholderByRatio,
  createShimmerPlaceholder
}