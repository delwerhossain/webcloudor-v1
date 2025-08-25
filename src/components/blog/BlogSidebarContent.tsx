'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AuthorCard } from './AuthorCard'
import { ShareButtons } from './ShareButtons'
import { BlogPost, Author } from '@/sanity/lib/types'
import { 
  Clock, 
  User, 
  Share2, 
  Bookmark,
  Mail,
  Rss,
  TrendingUp,
  Calendar
} from 'lucide-react'

interface BlogSidebarContentProps {
  post: BlogPost
  author?: Author
  relatedPosts: BlogPost[]
  postTitle: string
  postUrl: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
}

export const BlogSidebarContent = ({
  post,
  author,
  relatedPosts,
  postTitle,
  postUrl
}: BlogSidebarContentProps) => {
  return (
    <motion.div
      className="space-y-6 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Share Article */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-background to-muted/20 border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Share2 className="w-4 h-4" />
              Share Article
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ShareButtons title={postTitle} url={postUrl} />
            <div className="border-t my-4" />
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 bg-background hover:bg-primary/10"
              >
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 bg-background hover:bg-primary/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Author Information */}
      {author && (
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-background to-muted/30 border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <User className="w-4 h-4" />
                About the Author
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <AuthorCard author={author} />
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-background to-muted/20 border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="w-4 h-4" />
                Related Articles
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {relatedPosts.slice(0, 3).map((relatedPost, index) => (
                  <div key={relatedPost._id} className="group">
                    <Link 
                      href={`/blog/${relatedPost.slug.current}`}
                      className="block hover:text-primary transition-colors"
                    >
                      <h4 className="font-semibold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-primary">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readingTime || 5} min</span>
                        </div>
                      </div>
                    </Link>
                    {index < relatedPosts.slice(0, 3).length - 1 && (
                      <div className="border-t mt-4" />
                    )}
                  </div>
                ))}
              </div>
              
              {relatedPosts.length > 3 && (
                <div className="mt-4 pt-4 border-t">
                  <Link 
                    href="/blog"
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                  >
                    View more articles
                    <TrendingUp className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Newsletter Signup */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-yellow-100/30 border-primary/30">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="p-3 rounded-full bg-primary/20 w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2">Stay in the Loop</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get our latest articles and insights delivered to your inbox.
              </p>
              <Button className="w-full" size="sm">
                <Rss className="w-4 h-4 mr-2" />
                Subscribe to Newsletter
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Popular Categories */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-muted/20 to-muted/40 border-border/60">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Popular Topics</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {[
                'Web Development',
                'Cloud Solutions', 
                'AI & Machine Learning',
                'DevOps',
                'React',
                'Next.js'
              ].map((topic) => (
                <Link key={topic} href={`/blog?tag=${encodeURIComponent(topic)}`}>
                  <Badge 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer bg-primary/10 text-primary border-primary/20 text-xs"
                  >
                    {topic}
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-br from-background to-muted/20 border-border/50">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">250+</div>
                <div className="text-xs text-muted-foreground">Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">50k+</div>
                <div className="text-xs text-muted-foreground">Readers</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}