'use client'

import { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { List } from 'lucide-react'
import { cn } from '@/lib/utils'

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

  const handleScroll = useCallback(() => {
    const headingElements = tocItems.map(item => 
      document.getElementById(item.id)
    ).filter(Boolean)

    if (headingElements.length === 0) return

    // Get the current scroll position with offset for header
    const scrollTop = window.scrollY
    const offset = 120 // Account for sticky header

    let activeElement = headingElements[0]
    
    // Find the heading that's currently in view
    for (let i = headingElements.length - 1; i >= 0; i--) {
      const element = headingElements[i]
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrollTop
        
        if (scrollTop + offset >= elementTop - 50) {
          activeElement = element
          break
        }
      }
    }
    
    if (activeElement && activeElement.id !== activeId) {
      setActiveId(activeElement.id)
    }
  }, [tocItems, activeId])

  useEffect(() => {
    // Throttle scroll events for better performance
    let timeoutId: NodeJS.Timeout
    const throttledHandleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(handleScroll, 100)
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Set initial active item
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [handleScroll])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 120 // Account for sticky header
      const elementPosition = element.offsetTop - headerOffset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      
      // Update active state immediately for better UX
      setActiveId(id)
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <Card className="bg-background/95 backdrop-blur-sm border-border/50 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold">
          <List className="w-4 h-4" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <nav className="space-y-1 max-h-[70vh] overflow-y-auto">
          {tocItems.map((item, index) => {
            const isActive = activeId === item.id
            const levelIndent = item.level === 3 ? 'ml-4' : item.level === 4 ? 'ml-8' : ''
            
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "group block w-full text-left text-sm py-2 px-3 rounded-md transition-all duration-200 relative",
                  levelIndent,
                  item.level === 2 && "font-medium",
                  item.level > 2 && "text-muted-foreground font-normal",
                  isActive 
                    ? "bg-primary/10 text-primary font-medium border-l-2 border-primary pl-2 ml-0" 
                    : "hover:bg-muted hover:text-foreground",
                  isActive && item.level === 3 && "ml-2",
                  isActive && item.level === 4 && "ml-4"
                )}
              >
                <span className="block truncate leading-relaxed">
                  {item.title}
                </span>
                {/* Progress indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-primary rounded-r" />
                )}
              </button>
            )
          })}
        </nav>
        
        {tocItems.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <List className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No headings found</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}