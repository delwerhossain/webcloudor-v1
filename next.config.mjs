// Environment variables validation
const requiredEnvVars = [
  'MONGODB_URI',
  'JWT_SECRET', 
  'NEXTAUTH_SECRET',
  'RESEND_API_KEY',
  'FROM_EMAIL',
  'NEXT_PUBLIC_SITE_URL',
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  'NEXT_PUBLIC_SANITY_DATASET',
  'SANITY_API_TOKEN'
]

// Validate environment variables
function validateEnvVars() {
  const missing = requiredEnvVars.filter(envVar => !process.env[envVar])
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:')
    missing.forEach(envVar => console.error(`   - ${envVar}`))
    console.error('\n   Please check your .env.local file and ensure all required variables are set.')
    
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
    } else {
      console.warn('⚠️  Some features may not work properly without these variables.\n')
    }
  } else {
    console.log('✅ All required environment variables are present')
  }
}

// Run validation
validateEnvVars()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      }
    ]
  },

  // Enhanced image optimization for Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https', 
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
    unoptimized: false,
    loader: 'default',
    path: '/_next/image/',
  },

  // Compression
  compress: true,

  // Experimental features for performance  
  experimental: {
    scrollRestoration: true,
  },

  // Build-time environment variable validation
  env: {
    CUSTOM_KEY: process.env.NODE_ENV,
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Add any necessary redirects here
    ]
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Bundle analyzer (enable with ANALYZE=true npm run build)
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      )
    }

    // Sanity Studio webpack fixes
    config.resolve.alias = {
      ...config.resolve.alias,
      '@sanity/block-content-to-react': false,
      '@sanity/schema': false,
    }

    // Handle date-fns and other Sanity dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    }

    return config
  }
}

export default nextConfig