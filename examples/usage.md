# WebCloudor Git Commit Manager - Usage Examples

This guide provides practical examples of how to use the WebCloudor Git Commit Manager for different development scenarios.

## Scenario 1: Daily Development Workflow

### Morning Setup
```bash
# Check repository status and get recommendations
node scripts/commit-analyzer.js recommendations

# Output example:
# 📁 You have 12 files with changes
# 🎯 High number of changed files detected:
# • Consider using chunked commits for better organization
# • Run: node scripts/auto-commit-manager.js chunked
```

### During Development
```bash
# Quick commits for work-in-progress
node scripts/auto-commit-manager.js auto 5

# Result: Creates up to 5 individual commits like:
# ✅ Committed: HeroSection.tsx
# 💬 Message: feat: enhance HeroSection component with improved functionality
#
# ✅ Committed: globals.css
# 💬 Message: style: improve visual consistency in globals.css
```

### End of Day
```bash
# Commit all remaining changes organized by category
node scripts/auto-commit-manager.js chunked

# Result: Creates organized commits by file type:
# Components: 4 commits
# Styles: 2 commits  
# API endpoints: 1 commit
# Documentation: 1 commit
```

## Scenario 2: Feature Development

### New Feature Branch
```bash
# Create feature branch
git checkout -b feature/user-dashboard

# Analyze current state
node scripts/commit-analyzer.js

# Start development with frequent commits
node scripts/auto-commit-manager.js auto 3
```

### Feature Implementation Progress
```bash
# Multiple component updates
# Files changed:
# - src/components/Dashboard.tsx (new)
# - src/components/UserProfile.tsx (new)
# - src/components/ui/Button.tsx (modified)
# - src/app/dashboard/page.tsx (new)
# - src/app/dashboard/layout.tsx (new)

node scripts/auto-commit-manager.js chunked

# Results in organized commits:
# feat: add Dashboard component with enhanced user experience
# feat: create UserProfile component with improved functionality  
# refactor: enhance Button component architecture
# feat: create optimized dashboard page with enhanced SEO
# feat: add dashboard layout with better structure
```

### Feature Completion
```bash
# Final cleanup and documentation
node scripts/auto-commit-manager.js auto 10

# Check final state
git log --oneline -10
node scripts/commit-analyzer.js frequency
```

## Scenario 3: Bug Fix Session

### Critical Bug Fix
```bash
# Quick analysis of changes needed
git status
node scripts/commit-analyzer.js recommendations

# Files to fix:
# - src/components/AuthForm.tsx (validation bug)
# - src/lib/auth.ts (session handling)
# - tests/auth.test.ts (test updates)

# Use auto-commit for immediate fixes
node scripts/auto-commit-manager.js auto 3

# Generated commits:
# fix: resolve validation issue in AuthForm component
# fix: improve session handling reliability in auth.ts
# test: enhance test coverage for authentication flow
```

## Scenario 4: Large Refactoring

### Before Refactoring
```bash
# Analyze current state
node scripts/commit-analyzer.js

# 📊 Most changed file types:
#   .tsx: 45 changes
#   .ts: 32 changes  
#   .css: 18 changes

# 📂 Most active directories:
#   src: 89 changes
#   components: 45 changes
#   app: 23 changes
```

### During Refactoring
```bash
# Many files changed during refactoring:
# - 15 component files
# - 8 utility files
# - 5 API files
# - 3 style files
# - 2 config files

# Use chunked approach for organization
node scripts/auto-commit-manager.js chunked

# Results in logical groupings:
# - 15 separate component commits
# - 1 utilities refactor commit
# - 5 API improvement commits
# - 1 styling update commit
# - 1 configuration update commit
```

### Post-Refactoring Analysis
```bash
# Check the impact
node scripts/commit-analyzer.js

# 📈 Total commits in last 30 days: 156
# 📅 Active days: 22
# ⚡ Average commits per day: 5.2

# 🏆 Most active days:
#   2024-01-15: 23 commits (refactoring day)
#   2024-01-12: 15 commits
#   2024-01-10: 12 commits
```

## Scenario 5: Team Collaboration

### Code Review Preparation
```bash
# Before creating PR, organize commits
node scripts/auto-commit-manager.js chunked

# Check commit quality
node scripts/commit-analyzer.js types

# 📊 Commit types distribution:
#   feat: 12 (35.3%)
#   refactor: 8 (23.5%)
#   style: 6 (17.6%)
#   docs: 4 (11.8%)
#   fix: 4 (11.8%)
```

### Integration Work
```bash
# After merging main branch
git merge main
git status

# Resolve conflicts and commit integration
node scripts/auto-commit-manager.js auto 5

# Generated integration commits:
# fix: resolve merge conflicts in component interfaces
# refactor: align styling with updated design system  
# feat: integrate new authentication flow
```

## Scenario 6: Interactive Mode for Precision

### Selective Committing
```bash
# When you need precise control
./scripts/chunk-commit.sh --interactive

# Interactive session:
# 📁 Files available for commit:
# 1. src/components/Header.tsx
# 2. src/components/Footer.tsx  
# 3. src/styles/globals.css
# 4. README.md

# 📝 Process file: src/components/Header.tsx?
# Commit this file? (y/n/s=skip): y

# 📝 Default commit message:
# feat: enhance Header component with improved functionality
# 
# - Implemented with modern best practices and clean architecture
# - Enhanced user experience and maintainability
# - Added proper error handling and TypeScript support

# Use this message? (y/n): n
# Enter custom commit message: feat: add responsive navigation to Header component

# ✅ Committed: Header.tsx
# 💬 Message: feat: add responsive navigation to Header component
```

## Scenario 7: Automated Workflow Integration

### NPM Scripts Setup
```json
{
  "scripts": {
    "commit": "node scripts/auto-commit-manager.js auto 5",
    "commit-all": "node scripts/auto-commit-manager.js chunked", 
    "commit-check": "node scripts/commit-analyzer.js recommendations",
    "commit-interactive": "./scripts/chunk-commit.sh --interactive"
  }
}
```

### Development Workflow
```bash
# Quick development cycle
npm run dev        # Start development server
# ... make changes ...
npm run commit     # Auto-commit recent changes
npm run commit-check  # Analyze and get recommendations

# End of session
npm run commit-all    # Commit all remaining changes organized
```

### CI/CD Integration
```yaml
# .github/workflows/commit-analysis.yml
name: Commit Quality Check
on: [push, pull_request]

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Analyze Commits
        run: |
          node scripts/commit-analyzer.js
          echo "## Commit Analysis" >> $GITHUB_STEP_SUMMARY
          node scripts/commit-analyzer.js >> $GITHUB_STEP_SUMMARY
```

## Pro Tips

### 1. Optimal Commit Frequency
```bash
# Check your current frequency
node scripts/commit-analyzer.js frequency

# Target: 3-8 commits per day
# If below 3: Use auto-commit more frequently
# If above 15: Consider grouping smaller changes
```

### 2. Quality Commit Messages
```bash
# Good: Generated by the system
feat: enhance UserCard component with improved functionality

# Better: Customized for context  
feat: add real-time status updates to UserCard component

# Best: Specific and actionable
feat: implement WebSocket connection for live user status in UserCard
```

### 3. Repository Health Monitoring
```bash
# Weekly health check
node scripts/commit-analyzer.js > weekly-report.md

# Monthly deep analysis
node scripts/commit-analyzer.js files
node scripts/commit-analyzer.js types
node scripts/commit-analyzer.js recommendations
```

### 4. Emergency Workflows
```bash
# Hot fix scenario
git checkout -b hotfix/critical-auth-bug

# Quick fix with immediate commit
node scripts/auto-commit-manager.js single src/lib/auth.ts

# Generated: "fix: resolve critical authentication vulnerability in auth.ts"

# Deploy and merge quickly
git push origin hotfix/critical-auth-bug
```

## Common Patterns

### Morning Routine
```bash
git pull origin main
node scripts/commit-analyzer.js recommendations
npm run dev
```

### Development Session
```bash
# Every hour or after completing a logical unit
node scripts/auto-commit-manager.js auto 3
```

### End of Day
```bash
node scripts/auto-commit-manager.js chunked
git push origin feature-branch
```

### Code Review Prep
```bash
git rebase -i HEAD~10  # Clean up if needed
node scripts/commit-analyzer.js types
git push origin feature-branch
```

---

These examples show how the WebCloudor Git Commit Manager adapts to different development workflows while maintaining high commit quality and frequency.