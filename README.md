# WebCloudor Agency Website

Premium web agency website built with Next.js 15, TypeScript, and MongoDB. Designed to convert tier-1/2 clients through professional presentation and streamlined consultation booking.

## Quick Start

```bash
# Clone and setup
git clone <repository-url>
cd webcloudor
npm install

# Environment setup
cp .env.example .env.local
# Configure your environment variables

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
webcloudor/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Public marketing pages
│   │   ├── page.tsx        # Homepage
│   │   ├── services/       # Services pages
│   │   ├── portfolio/      # Portfolio showcase
│   │   ├── about/          # About page
│   │   └── contact/        # Contact page
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form handler
│   │   ├── consultation/  # Booking system
│   │   └── projects/      # Portfolio data
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
│
├── components/            # React components
│   ├── ui/               # shadcn/ui base components
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   ├── forms/            # Form components
│   ├── layout/           # Layout components (Header, Footer)
│   └── animations/       # Framer Motion animations
│
├── lib/                  # Utilities
│   ├── db.ts            # MongoDB connection
│   ├── utils.ts         # General utilities
│   ├── validations.ts   # Zod schemas
│   └── constants.ts     # App constants
│
├── types/               # TypeScript definitions
├── store/               # Zustand stores
├── hooks/               # Custom React hooks
├── styles/              # Additional CSS
├── public/              # Static assets
└── doc/                 # Design documentation
    ├── design_system.md
    ├── homepage.md
    ├── services_page.md
    ├── portfolio_page.md
    └── about_page.md
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui + Radix UI
- **Database:** MongoDB + Mongoose
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **State:** Zustand + TanStack Query
- **Email:** Nodemailer
- **Linting:** Biome

## Environment Variables

Create `.env.local` with the following variables:

```bash
# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/webcloudor

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=hello@webcloudor.com

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="WebCloudor"

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Calendar Integration (Optional)
CALENDLY_ACCESS_TOKEN=your-calendly-token
```

## Available Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run Biome linter
npm run format          # Format code with Biome
npm run type-check      # TypeScript type checking

# Database
npm run db:seed         # Seed database with sample data
npm run db:migrate      # Run database migrations

# Deployment
npm run deploy          # Deploy to Vercel
npm run analyze         # Analyze bundle size
```

## Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feat/consultation-booking

# Develop with hot reload
npm run dev

# Check code quality
npm run lint
npm run type-check

# Commit changes
git add .
git commit -m "feat: add consultation booking system"
```

### 2. Component Development
```bash
# Add new shadcn/ui component
npx shadcn@latest add button

# Create custom component
touch components/sections/hero.tsx

# Add component styles
# Use Tailwind classes with CVA for variants
```

### 3. Database Operations
```bash
# Add new model
touch lib/models/consultation.ts

# Update validation schemas
# Edit lib/validations.ts with Zod schemas

# Test API endpoints
# Use Postman or curl to test API routes
```

## Key Features

### Homepage
- Conversion-focused hero section
- Services overview with outcomes
- Featured case studies with metrics
- Trust indicators and social proof
- Clear consultation booking CTA

### Services Page
- Six core service offerings
- Transparent pricing tiers
- Process explanation
- Client success stories

### Portfolio
- Results-focused case studies
- Interactive filtering system
- Before/after comparisons
- Detailed project metrics

### About Page
- Team credibility and expertise
- Company story and values
- Professional certifications
- Client success philosophy

### Contact System
- Multiple contact pathways
- Calendar integration for bookings
- Detailed project brief forms
- Automated email responses

## Performance Standards

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5 seconds
- **FID (First Input Delay):** < 100 milliseconds
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Features
- Next.js automatic image optimization
- Dynamic imports for heavy components
- Lazy loading for below-fold content
- Font optimization with next/font
- Bundle analysis with @next/bundle-analyzer

## SEO Configuration

### Built-in SEO Features
- Automatic sitemap generation
- Structured data for services and organization
- Open Graph and Twitter meta tags
- Canonical URLs and meta descriptions
- Mobile-first responsive design

### Content Strategy
- Service-focused landing pages
- Case study SEO optimization
- Blog content for organic traffic (future)
- Local SEO for geographic targeting

## Deployment

### Vercel Deployment (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Environment variables
vercel env add MONGODB_URI production
vercel env add SMTP_USER production
# Add all required environment variables
```

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm run start

# Or deploy static export (if applicable)
npm run build && npm run export
```

## Monitoring & Analytics

### Performance Monitoring
- Vercel Analytics for Core Web Vitals
- Google Analytics 4 for user behavior
- Custom performance tracking for key interactions

### Error Tracking
- Next.js built-in error boundaries
- Custom error logging for API routes
- Client-side error reporting

### Business Metrics
- Consultation booking conversion rates
- Form completion rates
- Portfolio engagement metrics
- Service page performance

## Contributing

### Code Standards
- Use TypeScript strict mode
- Follow Biome formatting rules
- Write meaningful commit messages
- Include JSDoc comments for complex functions

### Component Guidelines
- Use shadcn/ui components when possible
- Create compound components for complex UI
- Include proper TypeScript props interfaces
- Add Framer Motion animations for interactions

### API Development
- Validate input with Zod schemas
- Use proper HTTP status codes
- Include error handling and logging
- Document API endpoints

## Troubleshooting

### Common Issues

**Development server won't start:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Database connection issues:**
```bash
# Check MongoDB URI format
# Ensure IP whitelist includes your IP
# Verify credentials
```

**Build failures:**
```bash
# Check TypeScript errors
npm run type-check

# Verify environment variables
cat .env.local
```

**Performance issues:**
```bash
# Analyze bundle size
npm run analyze

# Check Core Web Vitals
# Use Lighthouse in Chrome DevTools
```

### Getting Help

1. Check the documentation in `/doc` folder
2. Review the design specifications for requirements
3. Use Claude Code with the CLAUDE.md instructions
4. Check GitHub issues for common problems

## License

This project is proprietary to WebCloudor. All rights reserved.

---

**Project Status:** In Development
**Last Updated:** December 2024
**Next Milestone:** Launch Week (Week 3)