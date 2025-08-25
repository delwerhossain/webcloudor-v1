'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { BlogPost } from '@/sanity/lib/types'

interface NavigationData {
  previous?: BlogPost
  next?: BlogPost
}

interface PostNavigationClientProps {
  navigation: NavigationData
}

export const PostNavigationClient = ({ navigation }: PostNavigationClientProps) => {
  const { previous, next } = navigation

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Previous Post */}
      <div className="flex">
        {previous ? (
          <Card className="group w-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardContent className="p-4">
              <Link 
                href={`/blog/${previous.slug.current}`}
                className="block h-full"
              >
                <div className="flex items-center gap-3 h-full">
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                      <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Previous</p>
                    <h3 className="font-semibold text-sm leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {previous.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="w-full" /> // Placeholder for grid alignment
        )}
      </div>

      {/* Next Post */}
      <div className="flex">
        {next ? (
          <Card className="group w-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <CardContent className="p-4">
              <Link 
                href={`/blog/${next.slug.current}`}
                className="block h-full"
              >
                <div className="flex items-center gap-3 h-full">
                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Next</p>
                    <h3 className="font-semibold text-sm leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {next.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="w-full" /> // Placeholder for grid alignment
        )}
      </div>
    </motion.div>
  )
}