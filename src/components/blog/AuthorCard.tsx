import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Twitter, Linkedin, Github, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { urlFor } from '@/sanity/lib/utils'
import { Author, TeamMember } from '@/sanity/lib/types'

interface AuthorCardProps {
  author?: Author | TeamMember
}

export const AuthorCard = ({ author }: AuthorCardProps) => {
  if (!author) return null

  const isAuthor = (author: Author | TeamMember): author is Author => {
    return 'expertise' in author
  }

  const avatarUrl = isAuthor(author) && author.avatar 
    ? urlFor(author.avatar).width(80).height(80).url() 
    : !isAuthor(author) && author.profileImage
    ? urlFor(author.profileImage).width(80).height(80).url()
    : '/default-avatar.png'

  const bio = isAuthor(author) ? author.shortBio : author.shortBio || author.bio
  const socialLinks = author.socialLinks

  return (
    <Card className="bg-muted/30">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={avatarUrl}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">
              <Link 
                href={`/blog/author/${author.slug.current}`}
                className="hover:text-primary transition-colors"
              >
                {author.name}
              </Link>
            </h3>
            
            {isAuthor(author) && author.expertise && (
              <p className="text-sm text-primary mb-2">
                {author.expertise.slice(0, 3).join(', ')}
              </p>
            )}
            
            {bio && (
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {typeof bio === 'string' ? bio : 'Expert writer and contributor'}
              </p>
            )}
            
            {socialLinks && (
              <div className="flex gap-2">
                {((isAuthor(author) && (socialLinks as any).website) || (!isAuthor(author) && (socialLinks as any).portfolio)) && (
                  <a 
                    href={isAuthor(author) ? (socialLinks as any).website : (socialLinks as any).portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                
                {socialLinks.twitter && (
                  <a 
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                
                {socialLinks.linkedin && (
                  <a 
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                
                {socialLinks.github && (
                  <a 
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}