'use client'

import { useEffect } from 'react'

export const Hotjar = () => {
  // Coerce to number to avoid injecting invalid JS (e.g., "your-id" -> ReferenceError)
  const rawHjid = process.env.NEXT_PUBLIC_HOTJAR_ID
  const hjid = rawHjid ? Number(rawHjid) : undefined

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Ensure a valid numeric Hotjar ID
    if (!hjid || Number.isNaN(hjid)) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Hotjar disabled: NEXT_PUBLIC_HOTJAR_ID is missing or not a number')
      }
      return
    }

    // Check if Hotjar is already loaded
    if ((window as any).hj) return

    // Load Hotjar script
  const script = document.createElement('script')
    script.async = true
  script.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=6`
    
    // Initialize Hotjar
    const initScript = document.createElement('script')
    initScript.innerHTML = `
      (function(h,o){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hjid},hjsv:6};
      })(window,document);
    `

    document.head.appendChild(initScript)
    document.head.appendChild(script)

    return () => {
      // Cleanup function
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (document.head.contains(initScript)) {
        document.head.removeChild(initScript)
      }
    }
  }, [hjid])

  return null
}