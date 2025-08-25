"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, X, ChevronDown, RotateCcw } from "lucide-react"
import { SectionContainer } from "@/components/ui"
import { cn } from "@/lib/utils"
import { fadeUpVariants, EASE_CURVE } from "@/lib/utils/animations"

interface FilterState {
  service: string[]
  industry: string[]
  size: string[]
  result: string[]
}

const filterOptions = {
  service: [
    "All Services",
    "Web & App Development", 
    "E-commerce Solutions",
    "Cloud Architecture",
    "AI Automation",
    "Startup Consulting",
    "Fast MVP"
  ],
  industry: [
    "All Industries",
    "Retail & E-commerce",
    "SaaS & Technology", 
    "Healthcare & Medical",
    "Education & Learning",
    "Financial Services",
    "Non-profit"
  ],
  size: [
    "All Sizes",
    "Starter ($5K-$15K)",
    "Growth ($15K-$35K)", 
    "Enterprise ($35K+)"
  ],
  result: [
    "All Results",
    "Conversion Increase",
    "Revenue Growth",
    "Performance Improvement",
    "User Growth", 
    "Cost Reduction"
  ]
}

const sortOptions = [
  { value: "recent", label: "Most Recent" },
  { value: "roi", label: "Highest ROI" },
  { value: "impact", label: "Biggest Impact" },
  { value: "favorite", label: "Client Favorite" }
]

const FilterDropdown = ({ 
  title, 
  options, 
  selected, 
  onSelect,
  filterKey 
}: {
  title: string
  options: string[]
  selected: string[]
  onSelect: (key: string, values: string[]) => void
  filterKey: string
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(`[data-dropdown="${filterKey}"]`)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, filterKey])

  const toggleOption = (option: string) => {
    if (option.startsWith("All")) {
      onSelect(filterKey, [option])
      setIsOpen(false)
      return
    }

    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected.filter(item => !item.startsWith("All")), option]

    const finalSelection = newSelected.length === 0 ? [options[0]] : newSelected
    onSelect(filterKey, finalSelection)
    
    // Auto-close for single selections, keep open for multi-select
    if (finalSelection.length === 1 || option.startsWith("All")) {
      setIsOpen(false)
    }
  }

  const displayText = selected[0]?.startsWith("All") 
    ? selected[0] 
    : selected.length === 1 
      ? selected[0]
      : `${selected.length} selected`

  return (
    <div className="relative" data-dropdown={filterKey}>
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 bg-white border border-[#E2E8F0] rounded-md text-sm font-medium transition-all duration-200 min-h-[44px]",
          "hover:border-[#FFC300] hover:shadow-sm",
          isOpen && "border-[#FFC300] shadow-sm"
        )}
      >
        <span className="text-[#64748B] truncate max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]">{displayText}</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 text-[#64748B] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: EASE_CURVE }}
            className="absolute top-full left-0 mt-1 w-48 sm:w-56 bg-white border border-[#E2E8F0] rounded-md shadow-lg z-50"
          >
            <div className="p-2 max-h-64 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150 min-h-[44px] flex items-center",
                    selected.includes(option)
                      ? "bg-[#FFC300]/10 text-[#0A0A0B] font-medium"
                      : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0A0A0B]"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FilterSearchInterface = ({ 
  onFiltersChange, 
  onSearchChange, 
  onSortChange 
}: {
  onFiltersChange?: (filters: FilterState) => void
  onSearchChange?: (search: string) => void
  onSortChange?: (sort: string) => void
}) => {
  const [filters, setFilters] = useState<FilterState>({
    service: ["All Services"],
    industry: ["All Industries"], 
    size: ["All Sizes"],
    result: ["All Results"]
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("recent")
  const [isSticky, setIsSticky] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Assuming hero section is roughly 70vh, start sticky behavior after that
      setIsSticky(window.scrollY > window.innerHeight * 0.6)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Notify parent components of changes
  useEffect(() => {
    onFiltersChange?.(filters)
  }, [filters, onFiltersChange])

  useEffect(() => {
    onSearchChange?.(searchTerm)
  }, [searchTerm, onSearchChange])

  useEffect(() => {
    onSortChange?.(sortBy)
  }, [sortBy, onSortChange])

  const handleFilterChange = (key: string, values: string[]) => {
    setFilters(prev => ({ ...prev, [key]: values }))
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  const clearAllFilters = () => {
    const resetFilters = {
      service: ["All Services"],
      industry: ["All Industries"],
      size: ["All Sizes"], 
      result: ["All Results"]
    }
    setFilters(resetFilters)
    setSearchTerm("")
  }

  const hasActiveFilters = Object.values(filters).some(values => 
    values.length > 0 && !values[0]?.startsWith("All")
  ) || searchTerm.length > 0

  const resultsCount = 24 // This would come from actual filtering logic

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "transition-all duration-300 z-40 bg-[#F8FAFC]",
        isSticky ? "sticky top-16 shadow-lg" : ""
      )}
    >
      <SectionContainer padding="small" className="bg-[#F8FAFC] !py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Filters */}
          <div className="hidden md:block">
            <motion.div
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              className="space-y-3"
            >
              {/* Filter Categories Row */}
              <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                <div className="text-sm font-medium text-[#0A0A0B] mr-1">Filter:</div>
                
                <FilterDropdown
                  title="Service Type"
                  options={filterOptions.service}
                  selected={filters.service}
                  onSelect={handleFilterChange}
                  filterKey="service"
                />

                <FilterDropdown
                  title="Industry"
                  options={filterOptions.industry}
                  selected={filters.industry}
                  onSelect={handleFilterChange}
                  filterKey="industry"
                />

                <FilterDropdown
                  title="Project Size"
                  options={filterOptions.size}
                  selected={filters.size}
                  onSelect={handleFilterChange}
                  filterKey="size"
                />

                <FilterDropdown
                  title="Results"
                  options={filterOptions.result}
                  selected={filters.result}
                  onSelect={handleFilterChange}
                  filterKey="result"
                />

                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={clearAllFilters}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 text-[#64748B] hover:text-[#FFC300] text-sm font-medium transition-colors duration-200"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Clear
                  </motion.button>
                )}
              </div>

              {/* Search and Sort Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                {/* Search Bar */}
                <div className="flex-1 max-w-lg relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search projects by technology, outcome..."
                    className="w-full pl-10 pr-4 py-2 border border-[#E2E8F0] rounded-md text-sm placeholder:text-[#64748B] focus:border-[#FFC300] focus:ring-0 focus:outline-none transition-colors duration-200 min-h-[44px]"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => handleSearchChange("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0A0A0B]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Sort and Results */}
                <div className="flex items-center justify-between md:justify-start gap-3 md:gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#64748B] whitespace-nowrap">Sort:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="border border-[#E2E8F0] rounded-md px-2.5 py-1.5 text-[#0A0A0B] focus:border-[#FFC300] focus:outline-none text-sm bg-white min-h-[44px]"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-sm text-[#64748B] font-medium whitespace-nowrap">
                    {resultsCount} of 50+
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet Filter Toggle */}
          <div className="md:hidden">
            <div className="space-y-3">
              {/* Search and Filter Toggle Row */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full pl-10 pr-4 py-2 border border-[#E2E8F0] rounded-md text-sm placeholder:text-[#64748B] focus:border-[#FFC300] focus:ring-0 focus:outline-none min-h-[44px]"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => handleSearchChange("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0A0A0B]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="flex items-center gap-1.5 px-3 py-2 border border-[#E2E8F0] rounded-md bg-white text-[#64748B] hover:border-[#FFC300] transition-colors duration-200 whitespace-nowrap flex-shrink-0 min-h-[44px]"
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden xs:inline">Filter</span>
                  {hasActiveFilters && (
                    <div className="w-1.5 h-1.5 bg-[#FFC300] rounded-full" />
                  )}
                </button>
              </div>

              {/* Sort and Results on Mobile */}
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#64748B]">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="border border-[#E2E8F0] rounded-md px-2.5 py-1.5 text-[#0A0A0B] focus:border-[#FFC300] focus:outline-none text-sm bg-white min-h-[44px]"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-[#64748B] font-medium">
                  {resultsCount} of 50+
                </div>
              </div>
            </div>

            {/* Mobile Filter Panel */}
            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE_CURVE }}
                  className="overflow-hidden mt-3 bg-white rounded-md border border-[#E2E8F0] shadow-lg"
                >
                  <div className="p-3 sm:p-4 space-y-3">
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(filterOptions).map(([key, options]) => (
                        <FilterDropdown
                          key={key}
                          title={key.charAt(0).toUpperCase() + key.slice(1)}
                          options={options}
                          selected={filters[key as keyof FilterState]}
                          onSelect={handleFilterChange}
                          filterKey={key}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#E2E8F0]">
                      <button
                        onClick={clearAllFilters}
                        className="text-[#64748B] hover:text-[#FFC300] text-sm font-medium min-h-[44px] flex items-center"
                      >
                        Clear All
                      </button>
                      <div className="text-sm text-[#64748B]">
                        {resultsCount} found
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </SectionContainer>
    </motion.div>
  )
}