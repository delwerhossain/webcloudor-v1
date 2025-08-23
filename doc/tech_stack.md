# WebCloudor Technology Stack

## Frontend Core

### Framework & Language
- **Next.js 15.5.0** (App Router) - Full-stack React framework with excellent performance
- **React 19.1.0** - Latest stable React with concurrent features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Utility-first CSS with performance improvements

### UI Components & Design
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Accessible, unstyled UI primitives (comes with shadcn/ui)
- **Lucide React** - Beautiful, customizable SVG icons
- **class-variance-authority (CVA)** - Type-safe component variants
- **tailwind-merge** - Intelligent Tailwind class merging

### State Management
- **Zustand** - Lightweight state management (500% lighter than Redux)
- **TanStack Query (React Query)** - Server state management and caching
- **React Hook Form** - Performant forms with minimal re-renders
- **Zod** - TypeScript-first schema validation

### Animation & Interactions
- **Framer Motion** - Production-ready React animation library
- **react-intersection-observer** - Scroll-triggered animations
- **AOS (Animate On Scroll)** - Simple scroll animations as fallback

## Backend & Database

### API & Server
- **Next.js API Routes** - Full-stack serverless functions
- **MongoDB** - Document database for flexible schema
- **Mongoose** - MongoDB ODM with TypeScript support
- **Next.js Middleware** - Route protection and request handling

### Authentication & Security
- **NextAuth.js v5** - Complete authentication solution
- **bcryptjs** - Password hashing
- **jose** - JWT handling for Next.js

### Email & Communication
- **Nodemailer** - Reliable email sending
- **React Email** - Modern email templates (optional upgrade)

## Development & Tooling

### Code Quality
- **Biome** - Ultra-fast linter and formatter (replaces ESLint + Prettier)
- **TypeScript Strict Mode** - Maximum type safety
- **Husky** - Git hooks for pre-commit checks

### Image & Asset Optimization
- **Sharp** - High-performance image processing
- **next/image** - Automatic image optimization
- **@next/bundle-analyzer** - Bundle size analysis

### HTTP & Data Fetching
- **Native Fetch API** - Built-in, modern HTTP client
- **Custom fetch wrapper** - Centralized error handling and retries
- **SWR** - Alternative to React Query for simpler use cases

## Deployment & Performance

### Hosting & CDN
- **Vercel** - Optimized Next.js deployment
- **MongoDB Atlas** - Managed MongoDB hosting
- **Cloudflare** - CDN and DDoS protection

### Monitoring & Analytics
- **Vercel Analytics** - Web vitals and performance metrics
- **Sentry** - Error tracking and performance monitoring
- **Google Analytics 4** - User behavior analytics

## Recommended Package.json

```json
{
  "name": "webcloudor",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "biome check",
    "format": "biome format --write",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.5.0",
    "typescript": "^5",
    
    // UI & Design
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.1",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.1",
    "lucide-react": "^0.460.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.4",
    
    // State & Forms
    "zustand": "^5.0.1",
    "@tanstack/react-query": "^5.59.20",
    "react-hook-form": "^7.53.2",
    "@hookform/resolvers": "^3.9.1",
    "zod": "^3.23.8",
    
    // Animation
    "framer-motion": "^12.0.3",
    "react-intersection-observer": "^9.13.1",
    "aos": "^2.3.4",
    
    // Database & Auth
    "mongoose": "^8.8.3",
    "next-auth": "^5.0.0-beta.25",
    "bcryptjs": "^3.0.2",
    "@auth/mongodb-adapter": "^3.7.2",
    
    // Email & Communication
    "nodemailer": "^6.9.16",
    "@types/nodemailer": "^6.4.19",
    
    // Utils
    "sharp": "^0.33.5",
    "date-fns": "^4.1.0",
    "react-countup": "^6.5.3"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/bcryptjs": "^3.0.2",
    "@types/aos": "^3.0.7",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "@biomejs/biome": "2.2.0",
    "@next/bundle-analyzer": "^15.5.0"
  }
}
```

## Architecture Decisions

### Why These Choices?

**shadcn/ui over Material-UI/Chakra:**
- Built on Radix UI (accessibility-first)
- Copy-paste components (no external dependencies)
- Fully customizable with Tailwind
- Excellent TypeScript support

**Zustand over Redux:**
- 10x smaller bundle size (2.9kb vs 30kb+)
- No boilerplate code
- TypeScript-first design
- Perfect for agency website needs

**Framer Motion over GSAP:**
- React-native API design
- Better performance with React 18+ concurrent features
- Smaller learning curve
- Excellent documentation

**TanStack Query over SWR:**
- More powerful caching strategies
- Better DevTools
- Optimistic updates
- Infinite queries support

**Native Fetch over Axios:**
- Built into browsers and Node.js
- Smaller bundle size
- Modern Promise-based API
- Works perfectly with Next.js

**Biome over ESLint + Prettier:**
- 100x faster than ESLint
- Single tool for linting and formatting
- Better error messages
- Native TypeScript support

## Project Structure

```
webcloudor/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth group routes
│   ├── (dashboard)/       # Dashboard group routes
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
│
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── forms/            # Form components
│   ├── layout/           # Layout components
│   └── animations/       # Animation components
│
├── lib/                  # Utilities
│   ├── db.ts            # MongoDB connection
│   ├── auth.ts          # NextAuth config
│   ├── utils.ts         # General utilities
│   ├── validations.ts   # Zod schemas
│   └── constants.ts     # App constants
│
├── hooks/               # Custom React hooks
├── types/              # TypeScript type definitions
├── store/              # Zustand stores
├── styles/             # Additional CSS
└── public/             # Static assets
```

## Performance Optimizations

### Bundle Size Management
- Tree-shaking enabled by default
- Dynamic imports for heavy components
- Code splitting by routes
- Lazy loading for images and components

### Runtime Performance
- React 19 concurrent features
- Next.js automatic static optimization
- Image optimization with Sharp
- Font optimization with next/font

### Database Performance
- Mongoose connection pooling
- Indexed queries for common searches
- Aggregation pipelines for complex queries
- Lean queries for better performance

## Claude Code Integration

### AI-Friendly Structure
- Clear component separation
- Consistent naming conventions
- TypeScript for better code understanding
- Well-documented utility functions

### Recommended Prompts Structure
```typescript
// Example: Component generation
"Create a React component using shadcn/ui and Framer Motion for WebCloudor's hero section"

// Example: API endpoint
"Create a Next.js API route using Mongoose for handling contact form submissions"

// Example: Animation
"Create a Framer Motion animation for project cards that fade in with stagger effect"
```

## Development Workflow

1. **Setup:** `npm install` → `npm run dev`
2. **Development:** Use TypeScript strict mode
3. **Components:** Copy from shadcn/ui, customize with Tailwind
4. **State:** Create Zustand stores for complex state
5. **Animation:** Use Framer Motion for interactions
6. **API:** Create type-safe API routes
7. **Database:** Use Mongoose models with TypeScript
8. **Deployment:** Push to Vercel with automatic deployments

This stack provides the perfect balance of performance, developer experience, and scalability for WebCloudor while being optimized for Claude Code integration.