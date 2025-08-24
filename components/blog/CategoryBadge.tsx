import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Category } from '@/sanity/lib/types'

interface CategoryBadgeProps {
  category: Category
  size?: 'sm' | 'default'
  clickable?: boolean
}

const colorClasses = {
  blue: {
    light: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300',
    dark: 'dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800 dark:hover:bg-blue-900/50'
  },
  green: {
    light: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300',
    dark: 'dark:bg-green-950/50 dark:text-green-300 dark:border-green-800 dark:hover:bg-green-900/50'
  },
  purple: {
    light: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 hover:border-purple-300',
    dark: 'dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800 dark:hover:bg-purple-900/50'
  },
  red: {
    light: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:border-red-300',
    dark: 'dark:bg-red-950/50 dark:text-red-300 dark:border-red-800 dark:hover:bg-red-900/50'
  },
  orange: {
    light: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-300',
    dark: 'dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800 dark:hover:bg-orange-900/50'
  },
  pink: {
    light: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 hover:border-pink-300',
    dark: 'dark:bg-pink-950/50 dark:text-pink-300 dark:border-pink-800 dark:hover:bg-pink-900/50'
  },
  teal: {
    light: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100 hover:border-teal-300',
    dark: 'dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800 dark:hover:bg-teal-900/50'
  },
  indigo: {
    light: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300',
    dark: 'dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800 dark:hover:bg-indigo-900/50'
  },
}

export const CategoryBadge = ({ 
  category, 
  size = 'default', 
  clickable = true 
}: CategoryBadgeProps) => {
  const colors = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.blue
  const colorClass = `${colors.light} ${colors.dark}`
  
  const badge = (
    <Badge 
      variant="outline" 
      className={`
        transition-all duration-200 font-medium border
        ${colorClass}
        ${clickable ? 'hover:scale-105 cursor-pointer hover:shadow-sm active:scale-95' : ''}
        ${size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-2.5 py-1'}
      `}
    >
      {category.title}
    </Badge>
  )

  if (clickable) {
    return (
      <Link 
        href={`/blog/category/${category.slug.current}`}
        className="inline-block focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-1 rounded-full"
      >
        {badge}
      </Link>
    )
  }

  return badge
}