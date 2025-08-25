/**
 * Structured Data Schema Generator for WebCloudor
 * Implements JSON-LD structured data for better SEO
 */

import { Organization, WebSite, Service, Article, Person } from 'schema-dts'

// Base organization schema
export const organizationSchema: Organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WebCloudor',
  alternateName: 'WebCloudor Agency',
  description: 'Premium web development agency specializing in Next.js, React, and cloud architecture solutions for tier-1/tier-2 clients.',
  url: 'https://webcloudor.com',
  logo: 'https://webcloudor.com/logo.png',
  foundingDate: '2024',
  founder: [
    {
      '@type': 'Person',
      name: 'Delwer Hossain',
      jobTitle: 'Founder & CEO',
      url: 'https://webcloudor.com/team#delwer-hossain'
    },
    {
      '@type': 'Person', 
      name: 'Ahsan Habib Akik',
      jobTitle: 'Co-Founder & CTO',
      url: 'https://webcloudor.com/team#ahsan-habib-akik'
    }
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-555-WEBCLOUD',
      contactType: 'Customer Service',
      availableLanguage: 'English'
    }
  ],
  sameAs: [
    'https://twitter.com/webcloudor',
    'https://linkedin.com/company/webcloudor',
    'https://github.com/webcloudor'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Remote',
    addressCountry: 'Global'
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Web Development',
    'Next.js',
    'React',
    'Cloud Architecture',
    'DevOps',
    'E-commerce Development',
    'AI Integration',
    'Mobile Development'
  ]
}

// Website schema
export const websiteSchema: WebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'WebCloudor',
  alternateName: 'WebCloudor - Ship Faster, Scale Better',
  url: 'https://webcloudor.com',
  description: 'Premium web development agency delivering high-performance web applications and cloud solutions.',
  publisher: organizationSchema,
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://webcloudor.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
}

// Service schemas
export const webDevelopmentService: Service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development Services',
  description: 'Custom web development using Next.js, React, and modern JavaScript frameworks.',
  provider: organizationSchema,
  areaServed: 'Worldwide',
  serviceType: 'Web Development',
  category: 'Technology',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceRange: '$5,000 - $50,000+'
  }
}

export const cloudServicesService: Service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cloud Architecture Services',
  description: 'Scalable cloud infrastructure setup using AWS, Azure, and modern DevOps practices.',
  provider: organizationSchema,
  areaServed: 'Worldwide',
  serviceType: 'Cloud Computing',
  category: 'Technology',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceRange: '$3,000 - $25,000+'
  }
}

export const mobileDevService: Service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Development Services',
  description: 'Cross-platform mobile applications using React Native and modern mobile technologies.',
  provider: organizationSchema,
  areaServed: 'Worldwide',
  serviceType: 'Mobile Development',
  category: 'Technology',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceRange: '$8,000 - $40,000+'
  }
}

// Person schemas for team
export const delwerHossainSchema: Person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Delwer Hossain',
  jobTitle: 'Founder & CEO',
  worksFor: organizationSchema,
  url: 'https://webcloudor.com/team#delwer-hossain',
  description: 'Founder and CEO of WebCloudor with expertise in web development and business strategy.',
  knowsAbout: [
    'Web Development',
    'Business Strategy',
    'Team Leadership',
    'Client Relations'
  ]
}

export const ahsanHabibSchema: Person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ahsan Habib Akik',
  jobTitle: 'Co-Founder & CTO',
  worksFor: organizationSchema,
  url: 'https://webcloudor.com/team#ahsan-habib-akik',
  description: 'Co-Founder and CTO of WebCloudor specializing in technical architecture and development.',
  knowsAbout: [
    'Software Architecture',
    'Cloud Computing',
    'DevOps',
    'Technical Leadership'
  ]
}

// Blog article schema generator
export const generateArticleSchema = (
  title: string,
  description: string,
  author: string,
  publishedDate: string,
  modifiedDate: string,
  slug: string
): Article => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  author: {
    '@type': 'Person',
    name: author,
    worksFor: organizationSchema
  },
  publisher: organizationSchema,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  url: `https://webcloudor.com/blog/${slug}`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://webcloudor.com/blog/${slug}`
  },
  image: `https://webcloudor.com/images/blog/${slug}-og.jpg`,
  articleSection: 'Technology',
  inLanguage: 'en'
})

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
})

// FAQ schema generator
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
})

// LocalBusiness schema (if needed for specific location services)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  ...organizationSchema,
  '@id': 'https://webcloudor.com/#localbusiness',
  priceRange: '$$$',
  paymentAccepted: 'Credit Card, Bank Transfer, Cryptocurrency',
  currenciesAccepted: 'USD, EUR, BTC'
}

// Export all schemas
export const schemas = {
  organization: organizationSchema,
  website: websiteSchema,
  webDevelopment: webDevelopmentService,
  cloudServices: cloudServicesService,
  mobileDev: mobileDevService,
  delwerHossain: delwerHossainSchema,
  ahsanHabib: ahsanHabibSchema,
  localBusiness: localBusinessSchema
}