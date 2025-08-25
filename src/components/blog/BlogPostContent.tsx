import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/utils'

interface BlogPostContentProps {
  content: any[]
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => (
      <figure className="my-8">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
          <Image
            src={urlFor(value).width(800).height(450).url()}
            alt={value.alt || 'Blog post image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    code: ({ value }: { value: any }) => (
      <div className="my-6">
        <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
          <code className="text-sm">{value.code}</code>
        </pre>
      </div>
    ),
  },
  block: {
    normal: ({ children }: { children?: any }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    h2: ({ children }: { children?: any }) => (
      <h2 className="text-3xl font-bold mt-12 mb-6 scroll-mt-20" id={generateId(children)}>
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: any }) => (
      <h3 className="text-2xl font-semibold mt-10 mb-4 scroll-mt-20" id={generateId(children)}>
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: any }) => (
      <h4 className="text-xl font-semibold mt-8 mb-3 scroll-mt-20" id={generateId(children)}>
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: any }) => (
      <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: any }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: any }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: any }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: { value?: any; children?: any }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : '_self'}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : ''}
        className="text-primary hover:underline font-medium"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: any }) => (
      <ul className="list-disc list-outside ml-6 mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: { children?: any }) => (
      <ol className="list-decimal list-outside ml-6 mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: any }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: any }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
}

// Helper function to generate heading IDs for table of contents
function generateId(children: any): string {
  const text = children
    .map((child: any) => (typeof child === 'string' ? child : child.text || ''))
    .join('')
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  )
}