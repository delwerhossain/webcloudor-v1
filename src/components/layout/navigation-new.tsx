'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
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
      { name: 'Mobile Apps', href: '/services/mobile' },
      { name: 'DevOps & Deployment', href: '/services/devops' },
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

// Mobile Dropdown Bar Component (replacing sidebar)
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
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Dropdown Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 z-50 lg:hidden overflow-hidden"
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
                            "flex items-center justify-between w-full px-4 py-3 text-left rounded-lg transition-all duration-200 group",
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
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  // Helper function to check if a menu item is active
  const isActiveItem = (itemHref: string) => {
    if (pathname === itemHref) return true
    if (itemHref !== '/' && pathname.startsWith(itemHref)) return true
    return false
  }

  // Initialize mobile detection
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener('resize', handleResize, { passive: true })
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Enhanced scroll detection
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const shouldBeScrolled = scrollY > 20
      
      if (scrolled !== shouldBeScrolled) {
        setScrolled(shouldBeScrolled)
      }
      
      // Close dropdowns when scrolling on desktop
      if (activeDropdown && scrollY > 10) {
        setActiveDropdown(null)
      }
    }

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll)
    }

    handleScroll()
    window.addEventListener('scroll', throttledScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [scrolled, activeDropdown])

  // Handle outside clicks and escape key
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

  return (
    <>
      {/* Main Navigation Header */}
      <motion.header
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.nav
          animate={{
            marginLeft: scrolled ? (!isMobile ? 16 : 8) : 0,
            marginRight: scrolled ? (!isMobile ? 16 : 8) : 0,
            marginTop: scrolled ? (!isMobile ? 8 : 4) : 0,
            borderRadius: scrolled ? (!isMobile ? 12 : 8) : 0,
          }}
          transition={{ 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1]
          }}
          className={cn(
            "transition-all duration-300 relative",
            scrolled
              ? "bg-white/95 backdrop-blur-lg border border-white/20 shadow-lg"
              : "bg-transparent backdrop-blur-sm"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-14" : "h-16"
            )}>
              
              {/* Logo */}
              <Link 
                href="/" 
                className="flex items-center space-x-3 group relative z-10 flex-shrink-0"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative rounded-lg overflow-hidden bg-gradient-to-br from-[#89deff] to-[#9ad7ff] shadow-md transition-all duration-300",
                    scrolled ? "w-8 h-8 p-1" : "w-9 h-9 p-1.5"
                  )}
                >
                  <OptimizedImage
                    src="/logo.png"
                    alt="WebCloudor Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <span className={cn(
                    "font-bold transition-all duration-300 group-hover:text-[#00A8E8]",
                    scrolled 
                      ? "text-base text-[#0A0A0B]" 
                      : "text-lg text-[#0A0A0B]"
                  )}>
                    WebCloudor
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className={cn(
                "hidden lg:flex items-center transition-all duration-300",
                scrolled ? "space-x-1" : "space-x-2"
              )}>
                {navigationItems.map((item) => (
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
                        "flex items-center space-x-1 font-medium transition-all duration-300 hover:scale-105 relative",
                        isActiveItem(item.href)
                          ? scrolled
                            ? "px-3 py-1.5 text-[#00A8E8] bg-[#00A8E8]/8 text-sm rounded-md"
                            : "px-3 py-2 text-[#00A8E8] bg-white/15 text-sm rounded-lg"
                          : scrolled 
                            ? "px-3 py-1.5 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/20 text-sm rounded-md"
                            : "px-3 py-2 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/10 text-sm rounded-lg"
                      )}
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown 
                          className={cn(
                            "w-3 h-3 transition-transform duration-300",
                            activeDropdown === item.name && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
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
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-[100]"
                          >
                            <div className="bg-white rounded-xl border border-gray-200/60 shadow-xl overflow-hidden min-w-[280px]">
                              <div className="p-3">
                                <div className="space-y-1">
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      className="group flex items-center justify-between px-3 py-2 text-gray-700 hover:text-[#00A8E8] hover:bg-gray-50 rounded-lg transition-all duration-200"
                                    >
                                      <span className="font-medium text-sm">{subItem.name}</span>
                                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-all duration-200" />
                                    </Link>
                                  ))}
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

              {/* Desktop CTAs */}
              <div className={cn(
                "hidden lg:flex items-center transition-all duration-300",
                scrolled ? "space-x-2" : "space-x-3"
              )}>
                <Link
                  href="/contact"
                  className={cn(
                    "font-medium transition-all duration-300 hover:scale-105",
                    scrolled
                      ? "px-3 py-1.5 text-xs text-[#0A0A0B]/70 hover:text-[#00A8E8] border border-[#00A8E8]/20 hover:border-[#00A8E8] hover:bg-white/40 rounded-md"
                      : "px-4 py-2 text-sm text-black/80 hover:text-black border border-white/30 hover:border-white hover:bg-white/10 rounded-lg"
                  )}
                >
                  Get Quote
                </Link>
                <Link
                  href="https://calendly.com/ahsanhabibakik/webcloudor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    scrolled ? "px-3 py-1.5 text-xs rounded-md" : "px-4 py-2 text-sm rounded-lg"
                  )}
                >
                  Consult
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center lg:hidden">
                <div className="flex items-center space-x-2">
                  {/* Mobile CTA */}
                  <Link
                    href="https://calendly.com/ahsanhabibakik/webcloudor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "hidden sm:flex items-center justify-center font-semibold transition-all duration-200 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] hover:scale-105",
                      scrolled ? "px-3 py-1.5 text-xs rounded-md min-w-[60px]" : "px-4 py-2 text-sm rounded-lg min-w-[70px]"
                    )}
                  >
                    <span>Consult</span>
                  </Link>

                  {/* Menu Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={cn(
                      "flex items-center justify-center p-2 transition-all duration-300 relative",
                      scrolled ? "w-9 h-9" : "w-10 h-10",
                      scrolled 
                        ? "text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/30 rounded-md" 
                        : "text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/15 rounded-lg",
                      isMobileMenuOpen && "bg-[#00A8E8]/10 text-[#00A8E8]"
                    )}
                  >
                    <AnimatePresence mode="wait">
                      {isMobileMenuOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -45, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 45, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 45, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -45, opacity: 0 }}
                          transition={{ duration: 0.2 }}
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

      {/* Mobile Dropdown Bar */}
      <MobileDropdownBar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  )
}