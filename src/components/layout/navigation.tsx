'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
  onClose 
}: { 
  item: typeof navigationItems[0]
  onClose: () => void 
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-2">
      {item.dropdown ? (
        <>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full px-4 py-3 text-left text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-[#00A8E8]/5 rounded-xl transition-all duration-200 group"
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
          className="flex items-center px-4 py-3 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-[#00A8E8]/5 rounded-xl transition-all duration-200 group"
        >
          <span className="font-medium">{item.name}</span>
          <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-70 group-hover:translate-x-1 transition-all duration-200 text-[#00A8E8]" />
        </Link>
      )}
    </div>
  )
}

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect with better mobile detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const isMobile = window.innerWidth < 1024
      // More sensitive scroll detection for mobile
      setScrolled(scrollY > (isMobile ? 10 : 20))
    }

    let ticking = false
    const handleScrollThrottled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScrollThrottled, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScrollThrottled)
  }, [])

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

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
            marginLeft: scrolled ? (window.innerWidth >= 1024 ? 24 : 8) : 0,
            marginRight: scrolled ? (window.innerWidth >= 1024 ? 24 : 8) : 0,
            marginTop: scrolled ? (window.innerWidth >= 1024 ? 12 : 8) : 0,
            borderRadius: scrolled ? (window.innerWidth >= 1024 ? 16 : 12) : 0,
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            "transition-all duration-300 ease-out relative",
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

          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-12 sm:h-14" : "h-14 sm:h-16"
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
                  <Image
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

              {/* Mobile Quick Menu Items */}
              <div className="flex items-center space-x-1 lg:hidden">
                <Link
                  href="/services"
                  className={cn(
                    "px-2 py-1.5 text-xs font-medium rounded-md transition-all duration-200 hidden sm:block",
                    scrolled 
                      ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/30"
                      : "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/10"
                  )}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className={cn(
                    "px-2 py-1.5 text-xs font-medium rounded-md transition-all duration-200 hidden sm:block",
                    scrolled 
                      ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/30"
                      : "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/10"
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
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-2 rounded-full font-medium transition-all duration-300 hover:scale-105",
                        scrolled 
                          ? "px-3 py-2 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/30 backdrop-blur-sm text-sm"
                          : "px-4 py-2.5 [#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/10 backdrop-blur-sm text-sm"
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

              {/* Enhanced Mobile Menu Button */}
              <div className="flex items-center space-x-2 lg:hidden">
                {/* Mobile CTA Button */}
                <Link
                  href="/contact"
                  className={cn(
                    "hidden md:block px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 border",
                    scrolled
                      ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] border-[#00A8E8]/20 hover:border-[#00A8E8] hover:bg-white/50"
                      : "text-[#0A0A0B]/70 hover:text-[#00A8E8] border-white/30 hover:border-white hover:bg-white/10"
                  )}
                >
                  Quote
                </Link>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={cn(
                    "p-2 rounded-lg transition-all duration-300 relative",
                    scrolled 
                      ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/30" 
                      : "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/10"
                  )}
                  aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className={cn("transition-all duration-300", scrolled ? "w-4 h-4" : "w-5 h-5")} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className={cn("transition-all duration-300", scrolled ? "w-4 h-4" : "w-5 h-5")} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Enhanced Backdrop with WebCloudor Theme */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0A0A0B]/60 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Enhanced Mobile Menu with Theme Colors */}
            <motion.div
              initial={{ x: '100%', opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: '100%', opacity: 0, scale: 0.95 }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 250,
                duration: 0.4 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] sm:max-w-[75vw] bg-white/98 backdrop-blur-2xl border-l border-[#00A8E8]/20 shadow-2xl shadow-[#00A8E8]/10 z-50 lg:hidden overflow-y-auto"
            >
              {/* Gradient Background Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(0, 168, 232, 0.03) 0%, 
                      rgba(0, 119, 199, 0.02) 50%, 
                      rgba(255, 255, 255, 0.95) 100%
                    )
                  `
                }}
              />

              {/* Enhanced Mobile Menu Header */}
              <div className="relative z-10 flex items-center justify-between p-6 border-b border-[#00A8E8]/10">
                <Link 
                  href="/" 
                  className="flex items-center space-x-3 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#00A8E8] to-[#0077C7] p-2 shadow-lg">
                    <Image
                      src="/logo.png"
                      alt="WebCloudor"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold text-[#0A0A0B] group-hover:text-[#00A8E8] transition-colors">
                    WebCloudor
                  </span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 hover:bg-[#00A8E8]/10 rounded-xl transition-colors text-[#0A0A0B]/70 hover:text-[#00A8E8]"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Enhanced Mobile Menu Items */}
              <div className="relative z-10 py-6 px-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MobileNavItem
                      item={item}
                      onClose={() => setIsMobileMenuOpen(false)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Mobile CTAs */}
              <div className="relative z-10 p-6 border-t border-[#00A8E8]/10 space-y-4 mt-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 text-center text-[#0A0A0B]/70 hover:text-[#00A8E8] border border-[#00A8E8]/20 hover:border-[#00A8E8] hover:bg-[#00A8E8]/5 rounded-full font-medium transition-all duration-200"
                  >
                    Get Quote
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="https://calendly.com/ahsanhabibakik/webcloudor"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-6 py-3 text-center bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-[#FFD700]/25"
                  >
                    Free Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}