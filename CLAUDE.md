# CLAUDE.md - WebCloudor Development Guide

## Project Context
Premium web agency site for tier-1/2 clients. Next.js 15 + TypeScript + MongoDB. Target: 3-5% consultation conversion, Core Web Vitals >90.

## Tech Stack
```typescript
Next.js 15 (App Router) | TypeScript (strict) | Tailwind CSS v4
MongoDB + Mongoose | shadcn/ui + Radix UI | Framer Motion
Zustand + TanStack Query | React Hook Form + Zod | Nodemailer
Biome (not ESLint) | Vercel hosting
```

## Project Structure
```
app/              → Pages & API routes
├── (marketing)/  → Public pages
├── (dashboard)/  → Protected pages
└── api/         → API endpoints

components/       → UI components
├── ui/          → shadcn/ui
└── sections/    → Page sections

lib/api/         → Backend architecture
├── errors/      → Error handling
├── middleware/  → Auth, validation, rate limit
├── utils/       → asyncHandler, apiResponse, db
└── modules/     → Business logic by feature
    └── [feature]/
        ├── model.ts      → Mongoose schema
        ├── service.ts    → Business logic
        ├── validation.ts → Zod schemas
        └── types.ts      → TypeScript types
```

## Code Patterns

### Build Error Prevention
**CRITICAL**: Never use single quotes (') in JSX/TSX files as they cause build errors. Always use double quotes (") or template literals (`).

```typescript
// ❌ BAD: Causes build errors
const text = 'Don't use single quotes'
const message = 'Can't build with this'

// ✅ GOOD: Use double quotes or alternatives
const text = "Do not use single quotes"
const message = "Cannot build with this"
const template = `Won't cause issues in template literals`
```

### Components (Arrow Functions Only)
```typescript
// ✅ Page Component
const ServicesPage = async () => {
  const services = await getServices()
  return <ServicesView services={services} />
}
export default ServicesPage

// ✅ Client Component (minimal)
'use client'
export const Button = ({ onClick }) => (
  <button onClick={onClick}>Click</button>
)
```

### API Routes
```typescript
// app/api/[resource]/route.ts
export const POST = asyncHandler(async (req: NextRequest) => {
  const body = await req.json()
  const data = schema.parse(body)
  const result = await service.create(data)
  return ApiResponse.success(result)
})
```

### Service Layer
```typescript
// lib/api/modules/[feature]/service.ts
export const service = {
  create: async (data) => {
    // Check duplicates, validate, create
    if (await Model.findOne({ email: data.email })) {
      throw new ApiError(409, 'Exists')
    }
    return Model.create(data)
  }
}
```

### Error Handling
```typescript
// lib/api/utils/asyncHandler.ts
export const asyncHandler = (handler) => async (req, ctx) => {
  try {
    return await handler(req, ctx)
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json({ error: error.message }, { status: error.statusCode })
    }
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
```

### Database
```typescript
// Mongoose Schema
const schema = new Schema<IType>({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true }
}, { timestamps: true })

schema.index({ email: 1 })

export const Model = mongoose.models.Model || mongoose.model('Model', schema)

// Connection Singleton
let cached = global.mongoose
if (!cached) cached = global.mongoose = { conn: null, promise: null }
```

### Validation
```typescript
// Zod Schema
export const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  serviceInterest: z.array(z.enum(['web', 'cloud', 'ai']))
})

export type DTO = z.infer<typeof schema>
```

## Frontend Optimization

### Minimize Client Components
```typescript
// ❌ BAD: Entire section client
'use client'
export const Hero = () => { /* everything */ }

// ✅ GOOD: Only interactive parts
export const Hero = () => (
  <section>
    <h1>Static Content</h1>
    <InteractiveButton /> {/* Only this is 'use client' */}
  </section>
)
```

### Animation Pattern
```typescript
// GPU-optimized
const animation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
}

// Respect reduced motion
const shouldReduce = useReducedMotion()
```

### Dynamic Imports
```typescript
const Heavy = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
  ssr: false
})
```

## Common Tasks

### Add Service
1. Update `lib/constants.ts`
2. Create component in `components/sections/`
3. Add to `app/services/page.tsx`
4. Update navigation

### Create API
1. Define Zod schema
2. Create service in `lib/api/modules/`
3. Add route in `app/api/`
4. Add middleware if needed

### Add Form
1. Zod schema → `lib/validations.ts`
2. React Hook Form component
3. API route for processing
4. Email notification
5. Success/error states

## Performance Checklist
- [ ] Dynamic imports for >50KB components
- [ ] Images: next/image with priority/blur
- [ ] Minimize 'use client' usage
- [ ] MongoDB connection pooling
- [ ] Suspense boundaries for async
- [ ] loading.tsx & error.tsx files

## Testing
```typescript
// API Test
const res = await fetch('/api/endpoint', {
  method: 'POST',
  body: JSON.stringify(data)
})
expect(res.status).toBe(201)

// Component Test
render(<Component />)
expect(screen.getByRole('heading')).toBeInTheDocument()
```

## Environment Variables
```env
# Required
MONGODB_URI=mongodb+srv://...
NEXT_PUBLIC_SITE_URL=https://webcloudor.com
JWT_SECRET=secret

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=email@gmail.com
SMTP_PASSWORD=app-password
FROM_EMAIL=hello@webcloudor.com
```

## AI Commands

### Component
"Create [Component] with: arrow functions, Framer Motion, Tailwind + cn(), TypeScript, mobile-first"

### API
"Create /api/[route] with: asyncHandler, Zod validation, service layer, ApiError, rate limiting"

### Page
"Create [Page] from doc/[page].md with: server components, minimal client, shadcn/ui, SEO metadata"

## Critical Docs (Always Reference)
```
doc/
├── prd.md                        → Product requirements
├── api-instruction.md            → API patterns
├── content-instruction.md        → Content guidelines
├── database-instruction.md       → DB schema
├── deployment-instruction.md     → Deployment guides
├── design_system-instruction.md  → Colors, typography
├── frontend-instruction.md       → Frontend optimization
├── security-instruction.md       → Security protocols
├── seo-config-instruction.md     → SEO strategy
├── tech-stack-instruction.md     → Technology stack
├── testing-instruction.md        → Testing guidelines
└── pages-details/               → Page specifications
    ├── homepage.md
    ├── services_page.md
    ├── portfolio_page.md
    ├── about_page.md
    ├── team_page.md
    ├── blog_pages.md
    ├── cookie_policy.md
    ├── privacy_policy.md
    └── terms_conditions.md
```

## Rules

### PREVENT DUPLICATION
Before creating anything, search codebase for existing similar code. Build upon existing patterns instead of creating new variations. Avoid doc/old/ folder. Create new documentation in doc/others/. Testing scripts go in scripts/test/. always use pnpm.

## MCP (Model Context Protocol) Usage
Available MCP tools - use as needed:
1.context7 - Context management
2.filesystem - File operations
3.github - Repository management
4.memory - State persistence
5.shadcn - UI component integration
6.mongodb - Database operations
7.(Avoid playwright MCP only base on command u can use)


### Success Criteria
1. Design compliance with `/doc/` specs
2. Core Web Vitals >90
3. WCAG 2.2 AA compliance
4. TypeScript strict, no `any`
5. Mobile-first responsive
6. Performant animations
7. Proper SEO/meta tags
8. Arrow function pattern

### Workflow
1. Read `/doc/` specifications
2. Check for existing code
3. Plan server vs client split
4. Implement with service layer
5. Add animations (performance-first)
6. Test & optimize
7. Deploy to Vercel

**Remember:** Business-critical site. Every detail converts prospects to consultations.