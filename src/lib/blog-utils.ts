import readingTime from 'reading-time'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export const calculateReadingTime = (content: any[]): number => {
  if (!content) return 0
  
  // Extract text from Sanity blocks
  const text = content
    .filter(block => block._type === 'block')
    .map(block => 
      block.children
        ?.map((child: any) => child.text || '')
        .join(' ') || ''
    )
    .join(' ')
  
  return Math.ceil(readingTime(text).minutes)
}

export const extractTags = (content: any[]): string[] => {
  const tags = new Set<string>()
  
  // Extract common tech terms and keywords
  const techTerms = [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
    'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
    'API', 'REST', 'GraphQL', 'microservices', 'serverless', 'cloud',
    'AI', 'machine learning', 'DevOps', 'CI/CD', 'security', 'performance',
    'responsive design', 'SEO', 'accessibility', 'testing', 'deployment'
  ]
  
  const text = content
    ?.filter(block => block._type === 'block')
    .map(block => 
      block.children
        ?.map((child: any) => child.text || '')
        .join(' ') || ''
    )
    .join(' ')
    .toLowerCase()
  
  techTerms.forEach(term => {
    if (text.includes(term.toLowerCase())) {
      tags.add(term)
    }
  })
  
  return Array.from(tags).slice(0, 8)
}

export const generateExcerpt = (content: any[], maxLength = 300): string => {
  if (!content) return ''
  
  const text = content
    .filter(block => block._type === 'block')
    .map(block => 
      block.children
        ?.map((child: any) => child.text || '')
        .join(' ') || ''
    )
    .join(' ')
    .trim()
  
  if (text.length <= maxLength) return text
  
  return text.slice(0, maxLength).trim() + '...'
}

export const formatViewCount = (count: number): string => {
  if (count < 1000) return count.toString()
  if (count < 1000000) return `${(count / 1000).toFixed(1)}K`
  return `${(count / 1000000).toFixed(1)}M`
}

export const getReadingProgress = (elementId: string): number => {
  if (typeof window === 'undefined') return 0
  
  const element = document.getElementById(elementId)
  if (!element) return 0
  
  const rect = element.getBoundingClientRect()
  const elementHeight = element.scrollHeight
  const viewportHeight = window.innerHeight
  const scrolled = Math.max(0, -rect.top)
  const totalScrollable = elementHeight - viewportHeight
  
  return Math.min(100, Math.max(0, (scrolled / totalScrollable) * 100))
}

export const estimateReadingTimeFromBlocks = (blocks: any[]): number => {
  const wordsPerMinute = 200
  let wordCount = 0
  
  blocks?.forEach(block => {
    if (block._type === 'block') {
      const text = block.children
        ?.map((child: any) => child.text || '')
        .join(' ') || ''
      wordCount += text.split(/\s+/).filter((word: string) => word.length > 0).length
    }
  })
  
  return Math.max(1, Math.round(wordCount / wordsPerMinute))
}