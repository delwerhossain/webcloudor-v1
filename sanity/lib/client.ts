import { createClient } from '@sanity/client'
import { type SanityClient } from '@sanity/client'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-25',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published' as const,
}

if (!config.projectId) {
  console.warn('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable - Sanity CMS will not be available')
}

if (!config.dataset) {
  console.warn('Missing NEXT_PUBLIC_SANITY_DATASET environment variable - Sanity CMS will not be available')
}

// Create a fallback client configuration
const fallbackConfig = {
  projectId: 'fallback',
  dataset: 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-25',
  useCdn: false,
  perspective: 'published' as const,
}

export const client: SanityClient = createClient(config.projectId && config.dataset ? config : fallbackConfig)

export const previewClient: SanityClient = createClient({
  ...(config.projectId && config.dataset ? config : fallbackConfig),
  useCdn: false,
  perspective: 'previewDrafts',
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (preview = false): SanityClient => {
  return preview ? previewClient : client
}