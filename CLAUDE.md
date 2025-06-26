# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MATEGO landing page - A Next.js 15 website for a natural energy drink brand based on yerba maté, manufactured in Mulhouse, Alsace, France.

## Common Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Architecture & Structure

### Tech Stack
- **Next.js 15.3.4** with App Router
- **React 19.0.0**
- **TypeScript 5** (strict mode)
- **Tailwind CSS** with custom MATEGO colors (green, orange, red)
- **Motion** for animations
- **Lottie** for JSON animations
- **shadcn/ui** components with Radix UI

### Key Directories
- `src/app/` - Next.js App Router pages (contact, notre-histoire, produit)
- `src/components/` - Feature-based components organization
  - `accueil/` - Homepage components
  - `contact/` - Contact page components
  - `notreHistoire/` - Story page components
  - `produit/` - Product page components
  - `ui/` - Reusable UI components (shadcn/ui)
- `src/context/` - React Context providers (NavbarContext, NavigationContext)
- `public/images/` - WebP optimized images
- `public/animations/` - Lottie animation files

### Important Patterns

1. **Client Components**: Homepage and interactive features use "use client" directive
2. **Page Transitions**: Custom transition system with loader components
3. **SEO Implementation**: Comprehensive metadata in layout.tsx, structured data, sitemap
4. **Image Optimization**: All images converted to WebP format
5. **Context Usage**: Navigation state and navbar theme managed via React Context

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Use absolute imports with @ prefix

### Styling Guidelines
- Tailwind CSS utilities preferred
- Custom colors: `matego_green`, `matego_orange`, `matego_red`
- Font: Exo (Google Font)
- Mobile-first responsive design

### ESLint Rules
- Next.js core-web-vitals
- Next.js TypeScript rules
- Run `npm run lint` before committing

### Component Structure
Components are organized by feature/page rather than by type. Each page directory contains its specific components. Shared UI components use shadcn/ui patterns in the `ui/` directory.

### State Management
- React Context for global state (navigation, theme)
- Local state with hooks for component-specific logic
- No external state management library

### SEO Considerations
- All pages include comprehensive metadata
- Homepage has hidden SEO content for crawlers
- Structured data for FoodEstablishment
- French language optimization