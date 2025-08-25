'use client'

import { useEffect } from 'react'

export const Hotjar = () => {
  const hjid = process.env.NEXT_PUBLIC_HOTJAR_ID

  useEffect(() => {
    if (!hjid || typeof window === 'undefined') return

    // Check if Hotjar is already loaded
    if ((window as any).hj) return

    // Load Hotjar script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=6`
    
    // Initialize Hotjar
    const initScript = document.createElement('script')
    initScript.innerHTML = `
      (function(h,o,t,j,a,r){
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