import { Badge } from '@/components/ui/badge'
import { Category } from '@/sanity/lib/types'
import { Hash } from 'lucide-react'

interface CategoryHeaderProps {
  category: Category
  postCount: number
}

const colorClasses = {
  blue: 'from-blue-500/20 to-blue-600/10 border-blue-200 dark:border-blue-800',
  green: 'from-green-500/20 to-green-600/10 border-green-200 dark:border-green-800',
  purple: 'from-purple-500/20 to-purple-600/10 border-purple-200 dark:border-purple-800',
  red: 'from-red-500/20 to-red-600/10 border-red-200 dark:border-red-800',
  orange: 'from-orange-500/20 to-orange-600/10 border-orange-200 dark:border-orange-800',
  pink: 'from-pink-500/20 to-pink-600/10 border-pink-200 dark:border-pink-800',
  teal: 'from-teal-500/20 to-teal-600/10 border-teal-200 dark:border-teal-800',
  indigo: 'from-indigo-500/20 to-indigo-600/10 border-indigo-200 dark:border-indigo-800',
}

export const CategoryHeader = ({ category, postCount }: CategoryHeaderProps) => {
  const gradientClass = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <div className={`relative rounded-2xl p-8 bg-gradient-to-br ${gradientClass} border`}>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          {category.icon && (
            <div className="p-2 rounded-lg bg-background/50">
              <Hash className="w-6 h-6" />
            </div>
          )}
          <Badge variant="secondary" className="text-sm">
            {postCount} article{postCount !== 1 ? 's' : ''}
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {category.title}
        </h1>
        
        {category.description && (
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {category.description}
          </p>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-10">
        <Hash className="w-24 h-24" />
      </div>
    </div>
  )
}