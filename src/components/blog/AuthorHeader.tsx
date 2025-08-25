import Image from 'next/image'
import Link from 'next/link'
import { Twitter, Linkedin, Github, Globe, Mail, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { urlFor } from '@/sanity/lib/utils'
import { Author, TeamMember } from '@/sanity/lib/types'

interface AuthorHeaderProps {
  author: Author | TeamMember
  postCount: number
}

export const AuthorHeader = ({ author, postCount }: AuthorHeaderProps) => {
  const isAuthor = (author: Author | TeamMember): author is Author => {
    return 'expertise' in author
  }

  const avatarUrl = isAuthor(author) && author.avatar 
    ? urlFor(author.avatar).width(150).height(150).url() 
    : !isAuthor(author) && author.profileImage
    ? urlFor(author.profileImage).width(150).height(150).url()
    : '/default-avatar.png'

  const bio = isAuthor(author) ? author.shortBio : author.shortBio
  const expertise = isAuthor(author) ? author.expertise : author.skills
  const socialLinks = author.socialLinks

  return (
    <div className="relative bg-gradient-to-br from-muted/50 via-background to-primary/5 rounded-2xl p-8 border">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-4 ring-background shadow-2xl">
            <Image
              src={avatarUrl}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <User className="w-5 h-5 text-primary" />
              <Badge variant="secondary">
                {postCount} article{postCount !== 1 ? 's' : ''}
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
              {author.name}
            </h1>
            
            {bio && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {bio}
              </p>
            )}
          </div>
          
          {expertise && expertise.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.slice(0, 6).map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {socialLinks && (
            <div className="flex gap-2">
              {((isAuthor(author) && (socialLinks as any).website) || (!isAuthor(author) && (socialLinks as any).portfolio)) && (
                <a 
                  href={isAuthor(author) ? (socialLinks as any).website : (socialLinks as any).portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors gap-2 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Website
                </a>
              )}
              
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors gap-2 text-sm"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              )}
              
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors gap-2 text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
              
              {socialLinks.github && (
                <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors gap-2 text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 opacity-5">
        <User className="w-32 h-32" />
      </div>
    </div>
  )
}