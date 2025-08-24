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

  const toggleOption = (option: string) => {
    if (option.startsWith("All")) {
      onSelect(filterKey, [option])
      setIsOpen(false)
      return
    }

    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected.filter(item => !item.startsWith("All")), option]

    onSelect(filterKey, newSelected.length === 0 ? [options[0]] : newSelected)
  }

  const displayText = selected[0]?.startsWith("All") 
    ? selected[0] 
    : selected.length === 1 
      ? selected[0]
      : `${selected.length} selected`

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-sm font-medium transition-all duration-200",
          "hover:border-[#FFC300] hover:shadow-sm",
          isOpen && "border-[#FFC300] shadow-sm"
        )}
      >
        <span className="text-[#64748B] truncate max-w-[120px]">{displayText}</span>
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
            className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#E2E8F0] rounded-lg shadow-lg z-50"
          >
            <div className="p-2 max-h-64 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-150",
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

export const FilterSearchInterface = () => {
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

  const handleFilterChange = (key: string, values: string[]) => {
    setFilters(prev => ({ ...prev, [key]: values }))
  }

  const clearAllFilters = () => {
    setFilters({
      service: ["All Services"],
      industry: ["All Industries"],
      size: ["All Sizes"], 
      result: ["All Results"]
    })
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
      <SectionContainer padding="small" className="bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <motion.div
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              {/* Filter Categories Row */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-sm font-semibold text-[#0A0A0B] mr-2">Filter by:</div>
                
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
                    className="flex items-center gap-2 px-3 py-2 text-[#64748B] hover:text-[#FFC300] text-sm font-medium transition-colors duration-200"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Clear All
                  </motion.button>
                )}
              </div>

              {/* Search and Sort Row */}
              <div className="flex items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="flex-1 max-w-md relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search projects by technology, outcome, or challenge..."
                    className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm placeholder:text-[#64748B] focus:border-[#FFC300] focus:ring-0 focus:outline-none transition-colors duration-200"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] hover:text-[#0A0A0B]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Sort and Results */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#64748B]">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-[#E2E8F0] rounded-lg px-3 py-2 text-[#0A0A0B] focus:border-[#FFC300] focus:outline-none text-sm bg-white"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="text-sm text-[#64748B] font-medium">
                    Showing {resultsCount} of 50+ projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] rounded-lg text-sm placeholder:text-[#64748B] focus:border-[#FFC300] focus:ring-0 focus:outline-none"
                />
              </div>

              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex items-center gap-2 px-4 py-2.5 border border-[#E2E8F0] rounded-lg bg-white text-[#64748B] hover:border-[#FFC300] transition-colors duration-200"
              >
                <Filter className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <div className="w-2 h-2 bg-[#FFC300] rounded-full" />
                )}
              </button>
            </div>

            {/* Mobile Filter Panel */}
            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE_CURVE }}
                  className="overflow-hidden mt-4 bg-white rounded-lg border border-[#E2E8F0] shadow-lg"
                >
                  <div className="p-4 space-y-4">
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

                    <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                      <button
                        onClick={clearAllFilters}
                        className="text-[#64748B] hover:text-[#FFC300] text-sm font-medium"
                      >
                        Clear All
                      </button>
                      <div className="text-sm text-[#64748B]">
                        {resultsCount} projects found
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