# Macancela Tech — Creative Web Consulting

Consulting site for Macancela Tech — web design services for clothing/fashion brands. React + Vite + Tailwind CSS v4 + TypeScript.

## Quick Reference

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Dead code: `npm run lint:dead`
- Duplicates: `npm run lint:dupes`
- Quality: `npm run lint:quality`
- Preview: `npm run preview`

## Directory Structure

```
src/
├── components/
│   ├── layout/    # Layout, Navbar, Footer, ScrollToTop, ScrollProgress
│   └── ui/        # Button, Badge, AnimatedSection, SectionHeading
├── context/       # ThemeContext (dark/light mode provider)
├── pages/         # HomePage, AboutPage, ServicesPage, BlogPage, ContactPage, NotFoundPage
├── sections/      # Hero, ServicesPreview (homepage sections)
├── data/          # siteConfig, socialLinks, services, experience, blogPosts
├── hooks/         # useTheme
├── types/         # TypeScript interfaces
└── assets/        # Static assets
```

## Routes

- `/` — Home (hero + services preview + CTA)
- `/about` — Bio + capabilities + experience timeline
- `/services` — Full service list + case studies
- `/blog` — Blog post listing
- `/contact` — Contact form (mailto)

## Tech Stack

- Framework: React 19 + Vite 7
- Styling: Tailwind CSS v4 with custom theme variables in index.css
- Routing: React Router v7 (BrowserRouter)
- Animations: Motion (Framer Motion)
- Language: TypeScript (strict mode)
- Deployment: Vercel

## Design System

Earthy/watery palette with dark mode support. Colors defined as CSS custom properties in `src/index.css`, overridden under `.dark` class for dark mode.

- Primary: `--color-deep-water`, `--color-tidal`
- Warm: `--color-clay`, `--color-sand`, `--color-parchment`
- Nature: `--color-moss`
- Text: `--color-ink`, `--color-ink-muted`
- Background: `--color-warm-white`

Dark mode: CSS variable swap under `.dark` class on `<html>`. ThemeContext in `src/context/` manages toggle + localStorage persistence. Use `@custom-variant dark` in index.css for Tailwind `dark:` prefix support.

Fonts: DM Serif Display (headings), DM Sans (body), IBM Plex Mono (mono)

## Conventions

- Components in `components/` are reusable UI primitives — no business logic
- Pages in `pages/` are route-level components
- Sections in `sections/` are reusable page sections (currently used on homepage)
- All site content lives in `src/data/` as typed TypeScript objects
- File names: PascalCase for components, camelCase for data/hooks/utils
- Tailwind utility classes only — no custom CSS except theme variables
- Use Motion for all animations; respect `prefers-reduced-motion`
- Button component supports `to` (internal route), `href` (external link), or `onClick`

## What NOT to Do

- NEVER edit .env or environment files
- NEVER run destructive git ops unless explicitly instructed
- NEVER add eslint-disable comments — fix the actual issue
- NEVER create abstractions that weren't asked for
- NEVER silence linter errors
- NEVER use custom color/spacing values — use design tokens only
- NEVER add inline styles — use Tailwind utilities

## Commit Rules

Run `/commit` after completing tasks.

## Context Tips

- One chat = one task
- Reference docs/*.md for subsystem docs
- Check `src/data/` for all site content
