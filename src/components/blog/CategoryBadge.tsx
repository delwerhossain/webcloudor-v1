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
    light: 'bg-primary/10 text-primary-blue border-primary/30 hover:bg-primary/20 hover:border-primary/40',
    dark: 'dark:bg-primary/20 dark:text-primary dark:border-primary/40 dark:hover:bg-primary/30'
  },
  green: {
    light: 'bg-green-50 text-green-700 border-green-300 hover:bg-green-100 hover:border-green-400',
    dark: 'dark:bg-green-900/30 dark:text-green-400 dark:border-green-600 dark:hover:bg-green-900/40'
  },
  purple: {
    light: 'bg-purple-50 text-purple-700 border-purple-300 hover:bg-purple-100 hover:border-purple-400',
    dark: 'dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-600 dark:hover:bg-purple-900/40'
  },
  red: {
    light: 'bg-red-50 text-red-700 border-red-300 hover:bg-red-100 hover:border-red-400',
    dark: 'dark:bg-red-900/30 dark:text-red-400 dark:border-red-600 dark:hover:bg-red-900/40'
  },
  orange: {
    light: 'bg-warm-orange/10 text-warm-orange border-warm-orange/30 hover:bg-warm-orange/20 hover:border-warm-orange/40',
    dark: 'dark:bg-warm-orange/20 dark:text-warm-orange dark:border-warm-orange/40 dark:hover:bg-warm-orange/30'
  },
  pink: {
    light: 'bg-pink-50 text-pink-700 border-pink-300 hover:bg-pink-100 hover:border-pink-400',
    dark: 'dark:bg-pink-900/30 dark:text-pink-400 dark:border-pink-600 dark:hover:bg-pink-900/40'
  },
  teal: {
    light: 'bg-teal-50 text-teal-700 border-teal-300 hover:bg-teal-100 hover:border-teal-400',
    dark: 'dark:bg-teal-900/30 dark:text-teal-400 dark:border-teal-600 dark:hover:bg-teal-900/40'
  },
  indigo: {
    light: 'bg-indigo-50 text-indigo-700 border-indigo-300 hover:bg-indigo-100 hover:border-indigo-400',
    dark: 'dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-600 dark:hover:bg-indigo-900/40'
  },
  yellow: {
    light: 'bg-signal-yellow/10 text-signal-yellow border-signal-yellow/30 hover:bg-signal-yellow/20 hover:border-signal-yellow/40',
    dark: 'dark:bg-signal-yellow/20 dark:text-signal-yellow dark:border-signal-yellow/40 dark:hover:bg-signal-yellow/30'
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
        transition-all duration-200 font-medium border backdrop-blur-sm
        ${colorClass}
        ${clickable ? 'hover:scale-105 cursor-pointer hover:shadow-sm active:scale-95' : ''}
        ${size === 'sm' ? 'text-xs px-2.5 py-1 rounded-full' : 'text-sm px-3 py-1.5 rounded-full'}
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