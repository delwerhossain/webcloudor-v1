'use client'

import { useTheme } from 'next-themes'
import Giscus from '@giscus/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageSquare } from 'lucide-react'

interface CommentSectionProps {
  postSlug: string
  postTitle: string
}

export const CommentSection = ({ postSlug, postTitle }: CommentSectionProps) => {
  const { theme } = useTheme()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Comments & Discussion
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Giscus
          repo="your-username/webcloudor-comments" // Update with your repo
          repoId="your-repo-id" // Update with your repo ID
          category="General"
          categoryId="your-category-id" // Update with your category ID
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme === 'dark' ? 'dark' : 'light'}
          lang="en"
          loading="lazy"
        />
      </CardContent>
    </Card>
  )
}