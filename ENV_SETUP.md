# Environment Variables Setup - WebCloudor

## 📁 Environment Files Structure

```
.env.example         # Template with placeholder values (committed to git)
.env.local          # Development environment (NOT committed)
.env.production     # Production environment (NOT committed)
```

## 🔒 Security Notice

**NEVER COMMIT** the following files to GitHub:
- `.env.local`
- `.env.production`
- Any file containing real API keys, secrets, or passwords

✅ **Safe to commit:**
- `.env.example` (only contains placeholders)

## 🚀 Production vs Development Differences

| Variable | Development | Production |
|----------|-------------|------------|
| `NODE_ENV` | `development` | `production` |
| `NEXT_PUBLIC_NODE_ENV` | `development` | `production` |
| `NEXT_PUBLIC_VERCEL_ENV` | `development` | `production` |
| `NEXTAUTH_URL` | `http://localhost:3000` | `https://webcloudor.com` |

## 📋 Environment Variables Explained

### **NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION**

This is used to verify your website ownership with Google Search Console.

**How to get it:**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" 
3. Enter your domain: `webcloudor.com`
4. Choose "HTML tag" verification method
5. Copy the content value from the meta tag:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
6. Add the code to your environment:
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=YOUR_VERIFICATION_CODE
   ```

**What it does:**
- Verifies domain ownership for Google Search Console
- Enables access to search analytics and indexing data
- Required for submitting sitemaps and monitoring search performance

### **NextAuth Secret**

This is a secret key used by NextAuth.js for encryption and session management.

**Current Setup:**
```env
NEXTAUTH_SECRET=c515ce88ae7f3d0a51fa99d722c8a357204fe5ef543640eb2ceebde4804c0812942327afed932fd501c2f7b7b1b8f2409af3ce205bac17b1081477a94319636c
```

**How it's used:**
- Encrypts JWT tokens
- Signs cookies for session management
- Secures authentication flow

## 🛠️ Setup Instructions

### Development Setup
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your development values in `.env.local`

### Production Setup
1. Use `.env.production` file (already configured)
2. Deploy environment variables to your hosting platform:

   **Vercel:**
   ```bash
   # Add via Vercel CLI or Dashboard
   vercel env add MONGODB_URI
   vercel env add RESEND_API_KEY
   # ... add all variables
   ```

   **Netlify:**
   ```bash
   # Add via Netlify CLI or Dashboard
   netlify env:set MONGODB_URI "your-value"
   ```

## 🔧 Required Variables for Full Functionality

### **Essential (Must Have):**
- `MONGODB_URI` - Database connection
- `NEXTAUTH_SECRET` - Authentication security
- `RESEND_API_KEY` - Email functionality
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - CMS content

### **Recommended (Highly Advised):**
- `NEXT_PUBLIC_GA_ID` - Analytics tracking
- `NEXT_PUBLIC_GTM_ID` - Tag management
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Search console

### **Optional (Nice to Have):**
- `GOOGLE_CLIENT_ID/SECRET` - OAuth login
- `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` - Facebook tracking
- `SENTRY_DSN` - Error monitoring

## 🚨 Security Best Practices

1. **Never log environment variables:**
   ```javascript
   // ❌ DON'T DO THIS
   console.log(process.env.RESEND_API_KEY)
   
   // ✅ DO THIS INSTEAD
   console.log('Email service configured:', !!process.env.RESEND_API_KEY)
   ```

2. **Use different keys for different environments**
3. **Rotate secrets regularly**
4. **Use strong, unique values for each secret**

## 🔄 Environment Variable Validation

Add this to your `next.config.js` for runtime validation:

```javascript
const requiredEnvs = [
  'MONGODB_URI',
  'NEXTAUTH_SECRET', 
  'RESEND_API_KEY'
]

requiredEnvs.forEach(env => {
  if (!process.env[env]) {
    throw new Error(`Missing required environment variable: ${env}`)
  }
})
```

## 📝 Deployment Checklist

Before deploying to production:

- [ ] All required environment variables are set
- [ ] Google Site Verification is configured
- [ ] MongoDB connection string is correct
- [ ] Email service (Resend) is working
- [ ] Analytics tracking IDs are correct
- [ ] CORS origins are properly configured
- [ ] NODE_ENV is set to 'production'