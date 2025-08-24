import { createClient } from '@sanity/client'
import { type SanityClient } from '@sanity/client'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published' as const,
}

if (!config.projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

if (!config.dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable')
}

export const client: SanityClient = createClient(config)

export const previewClient: SanityClient = createClient({
  ...config,
  useCdn: false,
  perspective: 'previewDrafts',
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (preview = false): SanityClient => {
  return preview ? previewClient : client
}