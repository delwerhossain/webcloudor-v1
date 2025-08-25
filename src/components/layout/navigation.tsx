'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const navigationItems = [
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'E-commerce Solutions', href: '/services/ecommerce' },
      { name: 'Cloud Architecture', href: '/services/cloud' },
      { name: 'AI Integration', href: '/services/ai' },
    ]
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    dropdown: [
      { name: 'Case Studies', href: '/portfolio/case-studies' },
      { name: 'Web Applications', href: '/portfolio/web-apps' },
      { name: 'E-commerce Projects', href: '/portfolio/ecommerce' },
    ]
  },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Careers', href: '/about/careers' },
    ]
  },
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

const MobileNavItem = ({ 
  item, 
  onClose,
  pathname 
}: { 
  item: typeof navigationItems[0]
  onClose: () => void
  pathname: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Helper function to check if a menu item is active
  const isActiveItem = (itemHref: string) => {
    if (pathname === itemHref) return true
    if (itemHref !== '/' && pathname.startsWith(itemHref)) return true
    return false
  }

  return (
    <div className="mb-1">
      {item.dropdown ? (
        <>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "flex items-center justify-between w-full min-h-[48px] px-4 py-3 text-left rounded-xl transition-all duration-200 group touch-manipulation",
              isActiveItem(item.href)
                ? "text-[#00A8E8] bg-[#00A8E8]/15 border-l-4 border-[#00A8E8] font-semibold"
                : "text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-[#00A8E8]/8 hover:scale-105"
            )}
          >
            <span className="font-medium">{item.name}</span>
            <ChevronDown 
              className={cn(
                "w-4 h-4 transition-transform duration-300 text-[#0A0A0B]/60 group-hover:text-[#00A8E8]",
                isOpen && "rotate-180"
              )}
            />
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden ml-4 mt-2 space-y-1"
              >
                {item.dropdown.map((subItem, index) => (
                  <motion.div
                    key={subItem.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={subItem.href}
                      onClick={onClose}
                      className="flex items-center px-4 py-2.5 text-[#0A0A0B]/60 hover:text-[#00A8E8] hover:bg-gradient-to-r hover:from-[#00A8E8]/5 hover:to-[#0077C7]/3 rounded-lg transition-all duration-200 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00A8E8] to-[#0077C7] rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-sm">{subItem.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className={cn(
            "flex items-center min-h-[48px] px-4 py-3 rounded-xl transition-all duration-200 group touch-manipulation",
            isActiveItem(item.href)
              ? "text-[#00A8E8] bg-[#00A8E8]/15 border-l-4 border-[#00A8E8] font-semibold"
              : "text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-[#00A8E8]/8 hover:scale-105"
          )}
        >
          <span className="font-medium">{item.name}</span>
          <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-200 text-[#00A8E8]" />
        </Link>
      )}
    </div>
  )
}


const MobileDropdownBar = ({ 
  isOpen, 
  onClose, 
  pathname 
}: { 
  isOpen: boolean
  onClose: () => void
  pathname: string
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Helper function to check if a menu item is active
  const isActiveItem = (itemHref: string) => {
    if (pathname === itemHref) return true
    if (itemHref !== '/' && pathname.startsWith(itemHref)) return true
    return false
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  bg-black/20 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Dropdown Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 z-50 lg:hidden overflow-hidden"
          >
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                          className={cn(
                            "flex  w-full px-4 py-3 text-left rounded-lg transition-all duration-200 group",
                            isActiveItem(item.href)
                              ? "text-[#00A8E8] bg-[#00A8E8]/8 font-medium"
                              : "text-gray-700 hover:text-[#00A8E8] hover:bg-gray-50"
                          )}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                        
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden ml-4 mt-2"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={onClose}
                                  className="block px-4 py-2 text-gray-600 hover:text-[#00A8E8] hover:bg-gray-50 rounded-md transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group",
                          isActiveItem(item.href)
                            ? "text-[#00A8E8] bg-[#00A8E8]/8 font-medium"
                            : "text-gray-700 hover:text-[#00A8E8] hover:bg-gray-50"
                        )}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full px-4 py-3 text-[#00A8E8] border border-[#00A8E8] rounded-lg font-medium transition-colors hover:bg-[#00A8E8]/5"
                >
                  Get Quote
                </Link>
                <Link
                  href="https://calendly.com/ahsanhabibakik/webcloudor"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] rounded-lg font-semibold transition-transform hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isHomePageLoaded, setIsHomePageLoaded] = useState(false)
  const pathname = usePathname()

  // Helper function to check if a menu item is active
  const isActiveItem = (itemHref: string, itemName: string) => {
    if (pathname === itemHref) return true
    
    // Check if current path starts with the item path (for sub-pages)
    if (itemHref !== '/' && pathname.startsWith(itemHref)) return true
    
    // Special case for home page
    if (itemHref === '/' && pathname === '/') return true
    
    return false
  }

  // Debounce ref for scroll handling
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize mobile detection and home page load state
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Initial setup
    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    
    // Set home page loaded state with delay to ensure DOM is ready
    if (pathname === '/') {
      const timer = setTimeout(() => {
        setIsHomePageLoaded(true)
      }, 100)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('resize', handleResize)
      }
    } else {
      setIsHomePageLoaded(false)
    }
    
    return () => window.removeEventListener('resize', handleResize)
  }, [pathname])

  // Enhanced scroll detection with intersection observer for home page
  useEffect(() => {
    if (typeof window === 'undefined') return

    const isHomePage = pathname === '/'
    let intersectionObserver: IntersectionObserver | null = null
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Different thresholds based on page and device
      let scrollThreshold
      
      if (isHomePage && isHomePageLoaded) {
        // More sensitive for home page after it's loaded
        scrollThreshold = isMobile ? 8 : 15
      } else if (isHomePage) {
        // Very sensitive during home page loading
        scrollThreshold = isMobile ? 3 : 8
      } else {
        // Normal threshold for other pages
        scrollThreshold = isMobile ? 10 : 20
      }
      
      const shouldBeScrolled = scrollY > scrollThreshold
      
      // Only update if state actually changes
      setScrolled(prev => {
        if (prev !== shouldBeScrolled) {
          return shouldBeScrolled
        }
        return prev
      })
      
      // Close dropdowns when scrolling
      if (activeDropdown && scrollY > 5) {
        setActiveDropdown(null)
      }
    }

    // Use intersection observer for home page hero section detection
    if (isHomePage && isHomePageLoaded) {
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        intersectionObserver = new IntersectionObserver(
          (entries) => {
            const heroEntry = entries[0]
            if (heroEntry) {
              // When hero section is less than 80% visible, consider scrolled
              setScrolled(!heroEntry.isIntersecting || heroEntry.intersectionRatio < 0.8)
            }
          },
          { 
            threshold: [0, 0.8, 1],
            rootMargin: '-60px 0px 0px 0px' // Account for nav height
          }
        )
        
        intersectionObserver.observe(heroSection)
      }
    }

    // Debounced scroll handler
    const debouncedScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        handleScroll()
      }, 10)
    }
    
    // Also use scroll for fallback
    const handleScrollThrottled = () => {
      requestAnimationFrame(debouncedScroll)
    }

    // Initial call
    handleScroll()
    
    window.addEventListener('scroll', handleScrollThrottled, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScrollThrottled)
      if (intersectionObserver) {
        intersectionObserver.disconnect()
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [pathname, isMobile, isHomePageLoaded, activeDropdown])

  // Close mobile menu on escape and handle outside clicks
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (activeDropdown && !target.closest('[data-dropdown-container]')) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [activeDropdown])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Enhanced Navigation Header with Theme Colors */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Navigation Container with WebCloudor Theme */}
        <motion.nav
          animate={{
            marginLeft: scrolled ? (!isMobile ? 24 : 8) : 0,
            marginRight: scrolled ? (!isMobile ? 24 : 8) : 0,
            marginTop: scrolled ? (!isMobile ? 12 : 8) : 0,
            borderRadius: scrolled ? (!isMobile ? 16 : 12) : 0,
          }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
          style={{
            willChange: scrolled ? 'margin, border-radius' : 'auto'
          }}
          className={cn(
            "transition-all duration-400 ease-out relative",
            scrolled
              ? "bg-white/95 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-[#00A8E8]/10"
              : "bg-transparent backdrop-blur-sm"
          )}
        >
          {/* Gradient Background Overlay */}
          <div 
            className={cn(
              "absolute inset-0 rounded-2xl transition-opacity duration-400",
              scrolled ? "opacity-100" : "opacity-0"
            )}
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(0, 168, 232, 0.08) 0%, 
                  rgba(0, 119, 199, 0.06) 50%, 
                  rgba(27, 54, 93, 0.04) 100%
                )
              `
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-14 sm:h-14" : "h-16 sm:h-16"
            )}>
              
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center space-x-2 sm:space-x-3 group relative z-10 flex-shrink-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative rounded-xl overflow-hidden bg-gradient-to-br from-[#89deff] to-[#9ad7ff] shadow-lg transition-all duration-300",
                    scrolled ? "w-8 h-8 p-1" : "w-9 h-9 p-1.5"
                  )}
                >
                  <OptimizedImage
                    src="/logo.png"
                    alt="WebCloudor Logo"
                    width={scrolled ? 24 : 24}
                    height={scrolled ? 24 : 28}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <span className={cn(
                    "font-bold transition-all duration-300 group-hover:text-[#00A8E8]",
                    scrolled 
                      ? "text-base text-[#0A0A0B]" 
                      : "text-lg text-[#0A0A0B] drop-shadow-sm"
                  )}>
                    WebCloudor
                  </span>
                </div>
              </Link>

              {/* Mobile Quick Menu Items - Improved Layout */}
              <div className="flex items-center space-x-2 lg:hidden">
                {/* Only show on tablet+ sizes to avoid crowding */}
                <Link
                  href="/services"
                  className={cn(
                    "hidden md:flex items-center justify-center min-w-[60px] min-h-[44px] px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 relative touch-manipulation",
                    isActiveItem("/services", "Services")
                      ? scrolled
                        ? "text-[#00A8E8] bg-[#00A8E8]/15 ring-1 ring-[#00A8E8]/30"
                        : "text-[#00A8E8] bg-white/25 ring-1 ring-[#00A8E8]/40"
                      : scrolled 
                        ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/40 hover:scale-105"
                        : "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/15 hover:scale-105"
                  )}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className={cn(
                    "hidden md:flex items-center justify-center min-w-[64px] min-h-[44px] px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 relative touch-manipulation",
                    isActiveItem("/portfolio", "Portfolio")
                      ? scrolled
                        ? "text-[#00A8E8] bg-[#00A8E8]/15 ring-1 ring-[#00A8E8]/30"
                        : "text-[#00A8E8] bg-white/25 ring-1 ring-[#00A8E8]/40"
                      : scrolled 
                        ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/40 hover:scale-105"
                        : "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/15 hover:scale-105"
                  )}
                >
                  Portfolio
                </Link>
              </div>

              {/* Enhanced Desktop Navigation */}
              <div className={cn(
                "hidden lg:flex items-center transition-all duration-300",
                scrolled ? "space-x-1" : "space-x-2"
              )}>
                {navigationItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="relative group"
                    data-dropdown-container
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-2 rounded-full font-medium transition-all duration-300 hover:scale-105 relative",
                        isActiveItem(item.href, item.name)
                          ? scrolled
                            ? "px-3 py-2 text-[#00A8E8] bg-[#00A8E8]/10 backdrop-blur-sm text-sm border border-[#00A8E8]/20"
                            : "px-4 py-2.5 text-[#00A8E8] bg-white/20 backdrop-blur-sm text-sm border border-[#00A8E8]/30"
                          : scrolled 
                            ? "px-3 py-2 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/30 backdrop-blur-sm text-sm"
                            : "px-4 py-2.5 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/10 backdrop-blur-sm text-sm"
                      )}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown 
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-300",
                            activeDropdown === item.name && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Modern Mega Dropdown inspired by example */}
                    {item.dropdown && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ 
                              type: "spring",
                              damping: 30,
                              stiffness: 500,
                              duration: 0.2 
                            }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 z-50"
                          >
                            {/* Modern Dropdown Container */}
                            <div className="bg-white rounded-2xl border border-gray-200/50 shadow-2xl shadow-black/5 overflow-hidden min-w-[380px]">
                              {/* Dropdown Content Grid */}
                              <div className="p-6">
                                <div className="grid grid-cols-1 gap-1">
                                  {item.dropdown.map((subItem, subIndex) => (
                                    <motion.div
                                      key={subItem.href}
                                      initial={{ opacity: 0, y: 4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: subIndex * 0.05 }}
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="group flex items-center justify-between px-4 py-3 text-gray-700 hover:text-[#00A8E8] hover:bg-gray-50/80 rounded-lg transition-all duration-200"
                                      >
                                        <span className="font-medium text-sm">{subItem.name}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-60 group-hover:translate-x-1 transition-all duration-200 text-gray-400" />
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>

                                {/* Featured Section */}
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                  <div className="bg-gradient-to-r from-[#00A8E8]/5 to-[#0077C7]/5 rounded-xl p-4">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <h4 className="font-semibold text-sm text-gray-800 mb-1">
                                          {item.name === 'Services' ? 'Featured Service' : 
                                           item.name === 'Portfolio' ? 'Latest Project' : 
                                           'Latest Update'}
                                        </h4>
                                        <p className="text-xs text-gray-600">
                                          {item.name === 'Services' ? 'Full-stack development solutions' :
                                           item.name === 'Portfolio' ? 'E-commerce platform redesign' :
                                           'Learn more about our story'}
                                        </p>
                                      </div>
                                      <div className="bg-[#00A8E8] text-white px-3 py-1 rounded-full text-xs font-medium">
                                        View
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Desktop CTAs */}
              <div className={cn(
                "hidden lg:flex items-center transition-all duration-300",
                scrolled ? "space-x-2" : "space-x-3"
              )}>
                    <Link
                  href="/contact"
                  className={cn(
                    "rounded-full font-medium transition-all duration-300 hover:scale-105",
                    scrolled
                      ? "px-3 py-2 text-xs text-[#0A0A0B]/70 hover:text-[#00A8E8] border border-[#00A8E8]/20 hover:border-[#00A8E8] hover:bg-white/50"
                      : "px-4 py-2.5 text-sm text-black/80 hover:text-black border border-white/30 hover:border-white hover:bg-white/10"
                  )}
                >
                  Get Quote
                </Link>
                <Link
                  href="https://calendly.com/ahsanhabibakik/webcloudor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/25",
                    scrolled ? "px-4 py-2 text-xs" : "px-6 py-2.5 text-sm"
                  )}
                >
                  Free Consultation
                </Link>
              </div>

              {/* Enhanced Mobile Menu Button Area */}
              <div className="flex items-center lg:hidden">
                <div className="flex items-center space-x-3">
                  {/* Mobile CTA Button - Better Touch Target */}
                  <Link
                    href="https://calendly.com/ahsanhabibakik/webcloudor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "hidden sm:flex items-center justify-center min-h-[44px] px-4 py-2.5 text-xs font-semibold rounded-full transition-all duration-200 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] hover:scale-105 hover:shadow-lg hover:shadow-[#FFD700]/30 touch-manipulation",
                      scrolled ? "shadow-md min-w-[72px]" : "shadow-lg min-w-[80px]"
                    )}
                  >
                    <span className="whitespace-nowrap">Consult</span>
                  </Link>

                  {/* Improved Menu Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={cn(
                      "flex items-center justify-center min-h-[44px] min-w-[44px] p-3 rounded-xl transition-all duration-300 relative touch-manipulation",
                      scrolled 
                        ? "text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/40 hover:scale-110" 
                        : "text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/15 hover:scale-110",
                      isMobileMenuOpen && "bg-[#00A8E8]/10 text-[#00A8E8]"
                    )}
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  >
                    <AnimatePresence mode="wait">
                      {isMobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -45, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 45, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <X className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 45, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -45, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <Menu className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* Enhanced Mobile Menu Overlay */}
   {/* Mobile Dropdown Bar */}
      <MobileDropdownBar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  )
}