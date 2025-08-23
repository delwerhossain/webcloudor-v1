# WebCloudor Technology Stack (Updated)

## Core Stack

### Frontend
```typescript
// Modern patterns - arrow functions, const exports
const HomePage = async () => {
  const data = await fetchData()
  return <HomeView data={data} />
}
export default HomePage
```

**Framework**: Next.js 15.5 (App Router)
**Language**: TypeScript (strict mode)
**Styling**: Tailwind CSS v4
**State**: Zustand + TanStack Query
**UI**: shadcn/ui + Radix UI
**Animation**: Framer Motion
**Forms**: React Hook Form + Zod

### Backend (Next.js API Routes)
```typescript
// Modular pattern adapted from Express
lib/
├── api/
│   ├── errors/
│   │   ├── ApiError.ts
│   │   └── handlers.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── validate.ts
│   ├── utils/
│   │   ├── asyncHandler.ts
│   │   └── response.ts
│   └── modules/
│       ├── consultations/
│       ├── projects/
│       └── users/
```

**Database**: MongoDB + Mongoose
**Auth**: NextAuth.js v5
**Email**: Nodemailer
**Validation**: Zod
**Security**: bcryptjs, jose (JWT)

## Modular Architecture for Next.js

### API Route Pattern
```typescript
// app/api/consultations/route.ts
import { asyncHandler } from '@/lib/api/utils/asyncHandler'
import { consultationService } from '@/lib/api/modules/consultations/service'
import { validateRequest } from '@/lib/api/middleware/validate'
import { consultationSchema } from '@/lib/api/modules/consultations/validation'

export const POST = asyncHandler(async (req: NextRequest) => {
  const body = await validateRequest(req, consultationSchema)
  const result = await consultationService.create(body)
  return ApiResponse.success(result, 'Created', 201)
})
```

### Service Layer Pattern
```typescript
// lib/api/modules/consultations/service.ts
export const consultationService = {
  create: async (data: CreateConsultationDto) => {
    await connectDB()
    return Consultation.create(data)
  },
  
  findAll: async (filters: QueryFilters) => {
    const { page = 1, limit = 10 } = filters
    return Consultation.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
  }
}
```

### Error Handling
```typescript
// lib/api/errors/ApiError.ts
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message)
  }
}

// lib/api/utils/asyncHandler.ts
export const asyncHandler = (handler: ApiHandler) => {
  return async (req: NextRequest) => {
    try {
      return await handler(req)
    } catch (error) {
      return handleError(error)
    }
  }
}
```

## Updated Package.json
```json
{
  "name": "webcloudor",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "biome check",
    "format": "biome format --write"
  },
  "dependencies": {
    "next": "15.5.0",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "@radix-ui/react-dialog": "^1.1.2",
    "class-variance-authority": "^0.7.1",
    "framer-motion": "^12.0.3",
    "mongoose": "^8.8.3",
    "next-auth": "^5.0.0-beta.25",
    "bcryptjs": "^3.0.2",
    "zod": "^3.23.8",
    "zustand": "^5.0.1",
    "@tanstack/react-query": "^5.59.20",
    "react-hook-form": "^7.53.2",
    "@hookform/resolvers": "^3.9.1",
    "nodemailer": "^6.9.16",
    "lucide-react": "^0.460.0",
    "tailwind-merge": "^2.5.4"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@biomejs/biome": "2.2.0",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  }
}
```

## Project Structure
```
webcloudor/
├── app/
│   ├── (marketing)/        # Public pages
│   ├── (dashboard)/        # Protected pages
│   └── api/               # API routes
├── components/
│   ├── ui/                # shadcn components
│   └── sections/          # Page sections
├── lib/
│   ├── api/              # Backend logic
│   ├── db/               # Database config
│   └── utils/            # Shared utilities
└── types/                # TypeScript types
```

## Component Patterns
```typescript
// Modern arrow function components
export const Hero = async ({ data }: HeroProps) => {
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Content */}
      </motion.div>
    </section>
  )
}
```

## Performance Optimizations
- Dynamic imports for heavy components
- Image optimization with next/image
- Font optimization with next/font
- MongoDB connection pooling
- React Query for caching
- Suspense boundaries for streaming