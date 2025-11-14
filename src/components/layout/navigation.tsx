"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    name: "Work",
    href: "/portfolio",
    description: "Case studies & results"
  },
  {
    name: "Services", 
    href: "/services",
    description: "How we drive growth"
  },
  {
    name: "Team",
    href: "/about/team",
    description: "Meet the founders"
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Insights & strategies"
  },
  {
    name: "Contact",
    href: "/contact",
    description: "Start your project"
  },
];

const _MobileNavItem = ({
  item,
  onClose,
  pathname,
}: {
  item: (typeof navigationItems)[0];
  onClose: () => void;
  pathname: string;
}) => {
  // Helper function to check if a menu item is active
  const isActiveItem = (itemHref: string) => {
    if (pathname === itemHref) return true;
    if (itemHref !== "/" && pathname.startsWith(itemHref)) return true;
    return false;
  };

  return (
    <div className="mb-1">
      <motion.div
        whileTap={{ scale: 0.98 }}
        className={cn(
          "rounded-xl transition-all duration-200 touch-manipulation",
          isActiveItem(item.href)
            ? "bg-[#00A8E8]/15 border-l-4 border-[#00A8E8]"
            : "hover:bg-[#00A8E8]/8 hover:scale-105",
        )}
      >
        <Link
          href={item.href}
          onClick={onClose}
          className={cn(
            "flex flex-col justify-center w-full min-h-[56px] px-4 py-3 rounded-xl transition-colors duration-200",
            isActiveItem(item.href)
              ? "text-[#00A8E8] font-semibold"
              : "text-[#0A0A0B]/80 hover:text-[#00A8E8]",
          )}
        >
          <span className="font-medium text-base">{item.name}</span>
          <span className="text-sm text-[#64748B] mt-0.5">{item.description}</span>
        </Link>
      </motion.div>
    </div>
  );
};

const MobileDropdownBar = ({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Helper function to check if a menu item is active
  const isActiveItem = (itemHref: string) => {
    if (pathname === itemHref) return true;
    if (itemHref !== "/" && pathname.startsWith(itemHref)) return true;
    return false;
  };

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

          {/* Dropdown Bar - Enhanced Mobile Design */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-[72px] sm:top-[88px] left-3 right-3 sm:left-4 sm:right-4 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/20 border border-gray-200/60 z-[9998] lg:hidden overflow-hidden"
          >
            <div className="p-3 sm:p-4 max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain">
              <nav className="space-y-1.5">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 sm:py-3 rounded-xl transition-all duration-200 group hover:scale-[1.01] active:scale-[0.99] min-h-[52px] touch-manipulation",
                        isActiveItem(item.href)
                          ? "text-[#00A8E8] bg-[#00A8E8]/15 font-semibold border-l-4 border-[#00A8E8] shadow-sm"
                          : "text-gray-700 hover:text-[#00A8E8] hover:bg-gray-50/80",
                      )}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">{item.name}</span>
                        <span className="text-xs text-gray-500 mt-0.5">{item.description}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </div>
                ))}
              </nav>

              {/* CTA Buttons - Enhanced Touch Targets */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100 space-y-3">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center w-full px-5 py-3.5 text-[#00A8E8] border-2 border-[#00A8E8] rounded-xl font-semibold text-base transition-all duration-200 hover:bg-[#00A8E8]/5 active:scale-[0.98] min-h-[52px] touch-manipulation"
                >
                  Get Quote
                </Link>
                <Link
                  href="https://calendly.com/ahsanhabibakik/webcloudor"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-center w-full px-5 py-3.5 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] rounded-xl font-bold text-base transition-all duration-200 hover:shadow-lg active:scale-[0.98] min-h-[52px] touch-manipulation shadow-md"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHomePageLoaded, setIsHomePageLoaded] = useState(false);
  const pathname = usePathname();

  // Helper function to check if a menu item is active
  const isActiveItem = (itemHref: string, _itemName: string) => {
    if (pathname === itemHref) return true;

    // Check if current path starts with the item path (for sub-pages)
    if (itemHref !== "/" && pathname.startsWith(itemHref)) return true;

    // Special case for home page
    if (itemHref === "/" && pathname === "/") return true;

    return false;
  };

  // Refs for performance optimization
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Initialize mobile detection and home page load state
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // Set home page loaded state with delay to ensure DOM is ready
    if (pathname === "/") {
      const timer = setTimeout(() => {
        setIsHomePageLoaded(true);
      }, 100);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
      };
    } else {
      setIsHomePageLoaded(false);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  // Enhanced scroll detection with intersection observer for home page
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isHomePage = pathname === "/";
    let intersectionObserver: IntersectionObserver | null = null;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Different thresholds based on page and device
      let scrollThreshold: number;

      if (isHomePage && isHomePageLoaded) {
        // More sensitive for home page after it's loaded
        scrollThreshold = isMobile ? 8 : 15;
      } else if (isHomePage) {
        // Very sensitive during home page loading
        scrollThreshold = isMobile ? 3 : 8;
      } else {
        // Normal threshold for other pages
        scrollThreshold = isMobile ? 10 : 20;
      }

      const shouldBeScrolled = scrollY > scrollThreshold;

      // Only update if state actually changes
      setScrolled((prev) => {
        if (prev !== shouldBeScrolled) {
          return shouldBeScrolled;
        }
        return prev;
      });

      // Close dropdowns when scrolling
      if (activeDropdown && scrollY > 5) {
        setActiveDropdown(null);
      }
    };

    // Use intersection observer for home page hero section detection (optimized)
    if (isHomePage && isHomePageLoaded) {
      // Use a slight delay to ensure DOM is ready
      const timeoutId = setTimeout(() => {
        const heroSection = document.querySelector(".hero-section");
        if (heroSection) {
          intersectionObserver = new IntersectionObserver(
            (entries) => {
              const heroEntry = entries[0];
              if (heroEntry) {
                // When hero section is less than 80% visible, consider scrolled
                setScrolled(
                  !heroEntry.isIntersecting ||
                    heroEntry.intersectionRatio < 0.8,
                );
              }
            },
            {
              threshold: [0, 0.8, 1],
              rootMargin: "-60px 0px 0px 0px", // Account for nav height
            },
          );

          intersectionObserver.observe(heroSection);
        }
      }, 50);

      return () => {
        clearTimeout(timeoutId);
        if (intersectionObserver) {
          intersectionObserver.disconnect();
        }
      };
    }

    // Optimized scroll handler with throttling
    const handleScrollOptimized = () => {
      lastScrollY.current = window.scrollY;

      if (!ticking.current) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener("scroll", handleScrollOptimized, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollOptimized);
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname, isMobile, isHomePageLoaded, activeDropdown]);

  // Close mobile menu on escape and handle outside clicks
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (activeDropdown && !target.closest("[data-dropdown-container]")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Prevent body scroll when mobile menu is open with proper cleanup
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

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
            type: "tween",
          }}
          style={{
            willChange: scrolled ? "margin, border-radius" : "auto",
          }}
          className={cn(
            "transition-all duration-400 ease-out relative",
            scrolled
              ? "bg-white/95 backdrop-blur-2xl border border-white/30 shadow-2xl shadow-[#00A8E8]/10"
              : "bg-transparent backdrop-blur-sm",
          )}
        >
          {/* Gradient Background Overlay */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl transition-opacity duration-400",
              scrolled ? "opacity-100" : "opacity-0",
            )}
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(0, 168, 232, 0.08) 0%, 
                  rgba(0, 119, 199, 0.06) 50%, 
                  rgba(27, 54, 93, 0.04) 100%
                )
              `,
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
            <div
              className={cn(
                "flex items-center justify-between transition-all duration-300",
                scrolled ? "h-16 sm:h-14" : "h-20 sm:h-16",
              )}
            >
              {/* Logo - Enhanced Mobile Touch Target */}
              <Link
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 group relative z-10 flex-shrink-0 min-h-[48px] touch-manipulation"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative rounded-xl overflow-hidden bg-gradient-to-br from-[#89deff] to-[#9ad7ff] shadow-lg transition-all duration-300",
                    scrolled ? "w-8 h-8 p-1" : "w-9 h-9 p-1.5",
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
                <div className="block">
                  <span
                    className={cn(
                      "font-bold transition-all duration-300 group-hover:text-[#00A8E8]",
                      scrolled
                        ? "text-base text-[#0A0A0B]"
                        : "text-lg text-[#0A0A0B] drop-shadow-sm",
                    )}
                  >
                    WebCloudor
                  </span>
                </div>
              </Link>

              {/* Mobile Quick Menu Items - Hidden on small screens for cleaner mobile UI */}
              <div className="hidden md:flex lg:hidden items-center space-x-2">
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center justify-center min-w-[68px] min-h-[44px] px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative touch-manipulation",
                    isActiveItem("/services", "Services")
                      ? scrolled
                        ? "text-[#00A8E8] bg-[#00A8E8]/15 ring-1 ring-[#00A8E8]/30"
                        : "text-[#00A8E8] bg-white/25 ring-1 ring-[#00A8E8]/40"
                      : scrolled
                        ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/40 hover:scale-105"
                        : "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/15 hover:scale-105",
                  )}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className={cn(
                    "flex items-center justify-center min-w-[72px] min-h-[44px] px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative touch-manipulation",
                    isActiveItem("/portfolio", "Portfolio")
                      ? scrolled
                        ? "text-[#00A8E8] bg-[#00A8E8]/15 ring-1 ring-[#00A8E8]/30"
                        : "text-[#00A8E8] bg-white/25 ring-1 ring-[#00A8E8]/40"
                      : scrolled
                        ? "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/40 hover:scale-105"
                        : "text-[#0A0A0B]/70 hover:text-[#00A8E8] hover:bg-white/15 hover:scale-105",
                  )}
                >
                  Portfolio
                </Link>
              </div>

              {/* Enhanced Desktop Navigation */}
              <div
                className={cn(
                  "hidden lg:flex items-center transition-all duration-300",
                  scrolled ? "space-x-1" : "space-x-2",
                )}
              >
                {navigationItems.map((item, _index) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-xl font-medium transition-all duration-300 hover:scale-105 relative min-h-[44px] touch-manipulation",
                        isActiveItem(item.href, item.name)
                          ? scrolled
                            ? "px-4 py-2 text-[#00A8E8] bg-[#00A8E8]/10 backdrop-blur-sm border border-[#00A8E8]/20"
                            : "px-4 py-2 text-[#00A8E8] bg-white/20 backdrop-blur-sm border border-[#00A8E8]/30"
                          : scrolled
                            ? "px-4 py-2 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/30 backdrop-blur-sm"
                            : "px-4 py-2 text-[#0A0A0B]/80 hover:text-[#00A8E8] hover:bg-white/10 backdrop-blur-sm",
                      )}
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs opacity-70">{item.description}</span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Enhanced Desktop CTAs */}
              <div
                className={cn(
                  "hidden lg:flex items-center transition-all duration-300",
                  scrolled ? "space-x-2" : "space-x-3",
                )}
              >
                <Link
                  href="/contact"
                  className={cn(
                    "rounded-full font-medium transition-all duration-300 hover:scale-105",
                    scrolled
                      ? "px-3 py-2 text-xs text-[#0A0A0B]/70 hover:text-[#00A8E8] border border-[#00A8E8]/20 hover:border-[#00A8E8] hover:bg-white/50"
                      : "px-4 py-2.5 text-sm text-black/80 hover:text-black border border-white/30 hover:border-white hover:bg-white/10",
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
                    scrolled ? "px-4 py-2 text-xs" : "px-6 py-2.5 text-sm",
                  )}
                >
                  Free Consultation
                </Link>
              </div>

              {/* Enhanced Mobile Menu Button Area */}
              <div className="flex items-center lg:hidden">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Mobile CTA Button - Enhanced Touch Target */}
                  <Link
                    href="https://calendly.com/ahsanhabibakik/webcloudor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "hidden sm:flex items-center justify-center min-h-[48px] px-4 py-3 text-sm font-bold rounded-full transition-all duration-200 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#0A0A0B] hover:scale-[1.03] active:scale-[0.98] hover:shadow-lg hover:shadow-[#FFD700]/30 touch-manipulation whitespace-nowrap",
                      scrolled
                        ? "shadow-md min-w-[80px]"
                        : "shadow-lg min-w-[88px]",
                    )}
                  >
                    Consult
                  </Link>

                  {/* Improved Menu Button with better visibility and touch target */}
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={cn(
                      "flex items-center justify-center min-h-[48px] min-w-[48px] p-3 rounded-xl transition-all duration-300 relative touch-manipulation z-10 active:scale-95",
                      scrolled
                        ? "text-[#0A0A0B] bg-white/95 border border-gray-200/60 hover:text-[#00A8E8] hover:bg-white hover:scale-[1.02] shadow-lg"
                        : "text-[#0A0A0B] bg-white/25 backdrop-blur-sm border border-white/40 hover:text-[#00A8E8] hover:bg-white/50 hover:scale-[1.02]",
                      isMobileMenuOpen &&
                        "bg-[#00A8E8] text-white border-[#00A8E8] shadow-xl",
                    )}
                    aria-label={
                      isMobileMenuOpen
                        ? "Close navigation menu"
                        : "Open navigation menu"
                    }
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
                          <X className="w-6 h-6" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 45, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -45, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu className="w-6 h-6" />
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
  );
};
