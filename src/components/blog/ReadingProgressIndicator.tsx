'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const ReadingProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    // Throttled scroll handler for better performance
    let timeoutId: NodeJS.Timeout
    const throttledUpdateScrollProgress = () => {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(updateScrollProgress, 16) // ~60fps
    }

    window.addEventListener('scroll', throttledUpdateScrollProgress, { passive: true })
    updateScrollProgress() // Set initial progress
    
    return () => {
      window.removeEventListener('scroll', throttledUpdateScrollProgress)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-signal-yellow to-warm-orange"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1, ease: "linear" }}
        style={{ transformOrigin: "0%" }}
      />
    </div>
  )
}