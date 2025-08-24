'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { List } from 'lucide-react'

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TableOfContentsProps {
  content: any[]
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from Sanity content
    const headings: TOCItem[] = []
    
    content?.forEach((block) => {
      if (block._type === 'block' && block.style && 
          ['h2', 'h3', 'h4'].includes(block.style)) {
        const text = block.children
          ?.map((child: any) => child.text || '')
          .join('') || ''
        
        if (text.trim()) {
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
          
          headings.push({
            id,
            title: text.trim(),
            level: parseInt(block.style.replace('h', ''))
          })
        }
      }
    })
    
    setTocItems(headings)
  }, [content])

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = tocItems.map(item => 
        document.getElementById(item.id)
      ).filter(Boolean)

      let activeElement = headingElements[0]
      
      for (const element of headingElements) {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            activeElement = element
          } else {
            break
          }
        }
      }
      
      if (activeElement) {
        setActiveId(activeElement.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Set initial active item
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <List className="w-4 h-4" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`
                block w-full text-left text-sm py-1 px-2 rounded transition-colors
                ${item.level === 2 ? 'font-medium' : ''}
                ${item.level === 3 ? 'ml-4 text-muted-foreground' : ''}
                ${item.level === 4 ? 'ml-8 text-muted-foreground' : ''}
                ${activeId === item.id 
                  ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                  : 'hover:bg-muted'
                }
              `}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}