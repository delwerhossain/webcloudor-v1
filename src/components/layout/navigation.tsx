'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
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
    <div className="border-b border-[#E2E8F0] last:border-b-0">
      {item.dropdown ? (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full px-6 py-4 text-left text-lg font-medium text-[#0A0A0B] hover:text-[#00A8E8] transition-colors"
          >
            {item.name}
            <ChevronDown 
              className={cn(
                "w-5 h-5 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden bg-[#F8FAFC]"
              >
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    onClick={onClose}
                    className="block px-8 py-3 text-[#64748B] hover:text-[#00A8E8] transition-colors"
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
          className="block px-6 py-4 text-lg font-medium text-[#0A0A0B] hover:text-[#00A8E8] transition-colors"
        >
          {item.name}
        </Link>
      )}
    </div>
  )
}

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      {/* Main Navigation Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#E2E8F0]"
            : "bg-white border-b border-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-[#00A8E8] to-[#0077C7] p-1"
              >
                <Image
                  src="/logo.png"
                  alt="WebCloudor Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-[#0A0A0B] group-hover:text-[#00A8E8] transition-colors">
                  WebCloudor
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 px-3 py-2 text-[#64748B] hover:text-[#00A8E8] font-medium transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
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
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-[#E2E8F0] overflow-hidden z-50"
                        >
                          <div className="p-2">
                            {item.dropdown.map((subItem, index) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-3 text-[#64748B] hover:text-[#00A8E8] hover:bg-[#F8FAFC] rounded-lg transition-colors duration-150"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                className="hover:scale-105 transition-transform"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button 
                variant="primary"
                size="sm" 
                className="hover:scale-105 transition-transform"
              >
                <Link href="/consultation">Free Consultation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6 text-[#64748B]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6 text-[#64748B]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#E2E8F0]">
                <Link 
                  href="/" 
                  className="flex items-center space-x-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-gradient-to-br from-[#00A8E8] to-[#0077C7] p-1">
                    <Image
                      src="/logo.png"
                      alt="WebCloudor"
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold text-[#0A0A0B]">WebCloudor</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#64748B]" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="py-4">
                {navigationItems.map((item) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="p-6 border-t border-[#E2E8F0] space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact" className="w-full">Get Quote</Link>
                </Button>
                <Button 
                  variant="primary"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/consultation" className="w-full">Free Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}