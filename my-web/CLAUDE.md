# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website deployed to GitHub Pages at boezzz.com. The site showcases creative projects and professional experience using React 18.2 with hash-based routing.

## Essential Commands

```bash
# Development
npm start                    # Start development server on localhost:3000

# Build & Deploy
npm run build               # Create production build (includes CNAME file for custom domain)
npm run deploy             # Build and deploy to GitHub Pages
npm run deploy -- -m "Deploy message"  # Deploy with custom commit message

# Testing
npm run test               # Run tests with Jest/React Testing Library
```

## Architecture Overview

### Routing Structure
The app uses `createHashRouter` for GitHub Pages compatibility. All routes are defined in `src/App.js`:

- `/` - Home page with animations and visitor map
- `/blog` - Blog/projects listing page
- `/resume` - Resume page
- `/hidden` - Hidden easter egg page
- Project pages: `/beatbounce`, `/forward-to-past`, `/xr-cooking-capstone`, etc.

### Component Organization
- **Reusable components** in `src/components/` (Navbar, Footer, Button, Cards)
- **Page components** in `src/pages/` with corresponding CSS files
- **Blog/project pages** in `src/pages/blog_pages/` sharing `Blogpage.css`

### Key Features
- Mobile-responsive navigation with hamburger menu
- Intersection Observer for scroll animations
- Spline 3D integration via `@splinetool/react-spline`
- FontAwesome icons throughout
- Custom domain deployment with automatic CNAME generation

### Deployment Process
1. Changes are built with `npm run build` which:
   - Creates optimized production bundle in `/build`
   - Automatically adds CNAME file with "boezzz.com"
2. `npm run deploy` pushes to gh-pages branch
3. GitHub Pages serves from gh-pages branch to boezzz.com

### Current Development State
- Active development with recent commits
- Modified files include navigation, footer, cards, and page components
- New images added but not yet committed
- Resume PDF recently updated (resume_maq_442024.pdf)