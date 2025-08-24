import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Category } from '@/sanity/lib/types'

interface CategoryBadgeProps {
  category: Category
  size?: 'sm' | 'default'
  clickable?: boolean
}

const colorClasses = {
  blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-300',
  purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300',
  red: 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300',
  orange: 'bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-300',
  pink: 'bg-pink-100 text-pink-800 hover:bg-pink-200 dark:bg-pink-900/30 dark:text-pink-300',
  teal: 'bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900/30 dark:text-teal-300',
  indigo: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300',
}

export const CategoryBadge = ({ 
  category, 
  size = 'default', 
  clickable = true 
}: CategoryBadgeProps) => {
  const colorClass = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.blue
  
  const badge = (
    <Badge 
      variant="secondary" 
      className={`transition-colors ${colorClass} ${clickable ? 'hover:scale-105 cursor-pointer' : ''}`}
      size={size}
    >
      {category.title}
    </Badge>
  )

  if (clickable) {
    return (
      <Link href={`/blog/category/${category.slug.current}`}>
        {badge}
      </Link>
    )
  }

  return badge
}