# Sami Fares Portfolio — 2026

## ⚠️ CRITICAL: Git Workflow

- **NEVER commit without explicit user approval**
- **NEVER push without explicit user approval**
- **NEVER force-push to main** — this branch triggers production deployment
- Pushing to `main` deploys to Netlify production immediately
- Always create descriptive commit messages following conventional commit format
- Co-author commits with: `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`

## ⚠️ CRITICAL: Development Server

- **DO NOT start or restart the dev server** — the user always has it running locally
- Default port: 3000
- The user reviews all changes in real-time in their browser
- Only verify page loads with `curl` if explicitly requested

## ⚠️ CRITICAL: Deployment Tracking

Before pushing to main, update `docs/deployment_summary.md`:

### Required Sections:
- **Latest deploy summary**: Client-facing bullet points describing what changed
- **Notes for internal team**: Technical details, known issues, next steps (not sent to client)
- **Changed URLs**: Full URLs of pages that were modified or added

The pre-push hook sends this to the PVS API and resets the file.

### Environment Variables (in .env.local):
```
PVS_WEBSITE_ID=d875f076-3023-4098-a2ce-fc40e0aea93d
PVS_API_URL=https://pvs-server-62hx7.ondigitalocean.app
PVS_BASE_URL=https://samifares.com
```

## Project Overview

Personal portfolio for Sami Fares, a UX/UI designer showcasing case studies and design work. The site demonstrates Sami's design process, problem-solving approach, and project outcomes through detailed case studies with rich interactions and animations.

## 🧱 Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 14.2.23 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 3.4.17 |
| UI Components | Radix UI + shadcn/ui | Latest |
| Theming | next-themes | 0.4.6 |
| Icons | react-icons (Font Awesome 6) | 5.5.0 |
| Animations | tailwindcss-animate + custom | 1.0.7 |
| Deployment | Netlify | — |
| Analytics | Site Behavior (custom) | — |

## Design System

### Theme Architecture
Dual-theme system (dark/light) using CSS variables with `next-themes`:
- Dark mode is default (`:root` selector)
- Light mode via `[data-theme='light']` selector
- Theme toggle in navbar
- CSS variables defined in `src/app/globals.css`
- Tailwind configured to read from CSS variables via `tailwind.config.ts`

### Core Semantic Tokens

CSS variables for semantic UI elements with light/dark mode support:

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| `--bg-main` | #262626 | #fafaf7 | Page background |
| `--bg-section` | #1f1f1f | #f1f7f3 | Section backgrounds |
| `--bg-subtle` | #2a2a2a | #e3e6e3 | Subtle backgrounds |
| `--text-heading` | #f2f2f2 | #1e1e1e | Headings |
| `--text-body` | #cccccc | #444444 | Body text |
| `--green` (primary) | #6be28c | #3ba66b | CTAs, accents, links |
| `--warning` | #fbbf24 | #f59e0b | Warning states, caution colors |
| `--warning-text` | #fef3c7 | #92400e | Warning text color |
| `--border-subtle` | #374151 | #e5e7eb | Borders, dividers |
| `--toggle-bg` | #475569 | #64748b | Toggle control background |
| `--toggle-bg-hover` | #64748b | #475569 | Toggle control hover state |

**Tailwind Utilities:** Core tokens exposed via `background.*`, `text.*`, `primary.*` in config.

### Sub-Theme Pattern (Domani Case Study)

Sub-themes extend the core theme without overriding it, using namespace convention:

**CSS Variable Namespace:** `--domani-*`
**Tailwind Utility Namespace:** `domani.*`

#### Domani Color Categories

| Category | Variables | Tailwind Utilities | Usage |
|----------|-----------|-------------------|-------|
| **Sage** | `--domani-sage-primary`, `dark`, `light` | `bg-domani-sage-primary` | Brand colors |
| **Text** | `--domani-text-primary`, `secondary`, `accent` | `text-domani-text-primary` | Typography |
| **Backgrounds** | `--domani-bg-cream`, `cream-light`, `sage-tint`, `card` | `bg-domani-bg-cream` | Section/card backgrounds |
| **Priority** | `--domani-priority-high`, `high-dark`, `medium`, `medium-dark` | `text-domani-priority-high` | Status indicators |
| **Border** | `--domani-border-light` | `border-domani-border-light` | Borders, dividers |

#### Domani Gradients

| Gradient | CSS Variable | Tailwind Utility | Usage |
|----------|--------------|------------------|-------|
| **Hero** | `--domani-gradient-hero` | `bg-domani-hero` | Hero sections |
| **Sage** | `--domani-gradient-sage` | `bg-domani-sage` | Brand accent areas |
| **Dark** | `--domani-gradient-dark` | `bg-domani-dark` | High contrast sections |
| **Card Placeholder** | `--domani-gradient-card-placeholder` | `bg-domani-card-placeholder` | Card backgrounds |

All gradients use 135deg angle and automatically switch with theme mode.

### Integration Pattern: Helper Classes

**Pattern:** Explicit Component Classes (Option B)

Components import centralized helper constants for consistent styling:

```typescript
// Import helper constants
import { domaniClasses, domaniGradients } from '@/lib/caseStudies/caseDomani'

// Apply in components
<section className={domaniGradients.hero}>
  <div className={domaniClasses.decisionCard.container}>
    <div className={domaniClasses.decisionCard.numberBadge}>1</div>
    <span className={domaniClasses.decisionCard.decisionTag}>Decision</span>
  </div>
</section>
```

**Benefits:**
- Centralized styling updates (change once, apply everywhere)
- Reduced className verbosity
- Full component control (can combine or override)
- IDE autocomplete support
- Type-safe imports

**When to Use:**
- **Core theme** (`bg-background`, `text-primary`) - Global UI elements
- **Sub-theme** (`bg-domani-bg-cream`, `domaniClasses.section`) - Case study specific components

### Adding New Sub-Themes

Step-by-step guide for future case studies:

#### 1. Define CSS Variables
Add to `src/app/globals.css`:

```css
:root {
  /* [CaseStudy] Sub-Theme - Dark Mode */
  --casestudy-brand-primary: #...;
  --casestudy-brand-dark: #...;
  --casestudy-text-primary: #...;
  --casestudy-bg-main: #...;
}

[data-theme='light'] {
  /* [CaseStudy] Sub-Theme - Light Mode */
  --casestudy-brand-primary: #...;
  /* ... */
}
```

**Naming Convention:** `--{namespace}-{category}-{variant}`

#### 2. Extend Tailwind Config
Add to `tailwind.config.ts`:

```typescript
colors: {
  casestudy: {
    brand: {
      primary: 'var(--casestudy-brand-primary)',
      dark: 'var(--casestudy-brand-dark)'
    },
    text: {
      primary: 'var(--casestudy-text-primary)'
    },
    bg: {
      main: 'var(--casestudy-bg-main)'
    }
  }
},
backgroundImage: {
  'casestudy-hero': 'var(--casestudy-gradient-hero)'
}
```

#### 3. Create Helper Constants
Add `src/lib/caseStudies/case[Name].ts`:

```typescript
export const caseStudyClasses = {
  section: 'bg-casestudy-bg-main text-casestudy-text-primary',
  card: 'bg-casestudy-bg-card border border-casestudy-border rounded-xl',
  heading: 'text-casestudy-text-primary',
  // ...
}

export const caseStudyGradients = {
  hero: 'bg-casestudy-hero'
}
```

### Accessibility

**WCAG AA Compliance Required:**
- All color combinations must meet WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Test both light and dark modes
- Verify sub-theme colors meet contrast requirements

**Contrast Testing:**
- Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Test background/text combinations
- Document passing ratios in sub-theme comments

**Focus States:**
- All interactive elements must have visible focus indicators
- Use Tailwind `ring-*` utilities for consistency
- Test keyboard navigation

### Typography

- **Headings**: Poppins (loaded via Google Fonts)
- **Body**: Inter (loaded via Google Fonts)
- Font loading strategy: `swap` display for performance
- Responsive scaling using `clamp()` for fluid typography

### Spacing Conventions

- **Section vertical spacing**: `py-[clamp(2rem,5vw,4rem)]` or `halfPage` class
- **Component gaps**: `gap-6`, `gap-8`, or `gap-12` depending on density
- **Container**: `section` class with max-width constraints
- **Custom spacing**: `x-gap: 1.5rem`, `y-gap: 2.5rem` in Tailwind config

### Border Radius
- Configurable via `--radius` CSS variable
- Default: 0.5rem
- Tailwind utilities: `rounded-lg`, `rounded-xl`

## Project Organization

```
/src
  /app                      # Next.js App Router
    /works                  # Case study routes
      /jones-pressure-washing/
      /moodtunes/
      /360-degree-care/
      /newstudy/           # Template for new case studies
    layout.tsx             # Root layout with theme provider
    page.tsx               # Homepage
    globals.css            # Global styles + CSS variables

  /components
    /caseStudy/            # Reusable case study sections
      WorkHero.tsx         # Hero section (0.0)
      ProblemFraming.tsx   # Problem statement
      ProjectOverview.tsx  # Metadata grid (0.1)
      Goals&Challenges.tsx # Goals/constraints (0.2)
      Research&Discovery.tsx # Research findings (0.3)
      Strategy&Design.tsx  # Strategy + mockups (0.4)
      FinalReflections.tsx # Wrap-up (0.5)
      AvailableCases.tsx   # Cross-linking component
    /home/                 # Homepage sections
      HomeHero.tsx
      FeaturedWorks.tsx
      AboutMe.tsx
    /ui/                   # shadcn/ui components
      button.tsx
      navigation-menu.tsx
      sheet.tsx
      switch.tsx
    animations.tsx         # 10+ scroll animation utilities
    mockups.tsx           # Image display component
    navbar.tsx            # Smart navigation with scroll spy
    themeToggle.tsx       # Dark/light mode toggle
    footer.tsx

  /lib
    /caseStudies/         # Case study data modules
      allCases.ts         # Case listing for homepage
      caseJpw.ts
      caseMood.tsx
      case360.ts
    /hooks/               # Custom React hooks
    types.ts              # TypeScript type definitions
    constants.ts          # Navigation maps, config
    utils.ts              # Utility functions (cn, etc.)

/public
  /assets/                # Images organized by project
    /JPW case/
    /MoodTunes/
    /360 case/
    Home_About.png
    NewAvatar.png

/docs                     # Documentation
  deployment_summary.md   # Deployment tracking file
```

## Case Study Architecture

### Section Numbering System (0.0-0.5)
Each case study follows a consistent structure with 6 main sections:

| Position | Component | Purpose |
|----------|-----------|---------|
| 0.0 | ProblemFraming | Textual problem statement |
| 0.1 | ProjectOverview | Client, tools, timeline, roles |
| 0.2 | GoalsAndChallenges | Goals and constraints |
| 0.3 | ResearchAndDiscovery | Findings, quotes, takeaways |
| 0.4 | StrategyAndDesign | Strategy highlights + mockups |
| 0.5 | FinalReflections | Achievements, lessons, testimonial |

### Data-Driven Pattern
- Content lives in `/lib/caseStudies/*.ts` modules
- Components are presentational (receive props)
- Each case study exports structured data object
- Icons stored as strings, resolved at runtime from `react-icons/fa6`

### Navigation
- Smart scroll spy detects current section
- Active link highlighting in navbar
- Section IDs map to `CasesMap` in `constants.ts`
- Smooth scroll with custom hook

## Animation System

10 animation variants in `src/components/animations.tsx`:

1. **FadeUpSection** - Opacity + translate-y
2. **SlideInSection** - Directional slide (left/right/default) with configurable delay
3. **ScaleFadeSection** - Scale + opacity
4. **StaggeredSection** - Children animate with staggered delays
5. **BlurFocusSection** - Blur + fade + translate
6. **RotateFadeSection** - Rotation + scale
7. **ElasticSection** - Bounce easing
8. **SlideUpSection** - Vertical slide from bottom
9. **TypewriterSection** - Character-by-character reveal
10. **FlipSection** - 3D card flip effect

### Animation Hook Pattern
- Uses `useInView` with Intersection Observer
- Threshold: 0.1-0.2 for triggering
- All animations trigger on scroll into viewport
- Returns `ref` and boolean visibility state

## Implementation Standards

### Layout
- **Container**: `section` class with responsive max-width
- **Section spacing**: `halfPage` class for consistent vertical rhythm
- **Grid patterns**: `grid grid-cols-1 md:grid-cols-2` for responsive layouts
- **Component gaps**: `gap-6` (medium), `gap-8` (large), `gap-12` (extra-large)

### Component Patterns
- Use `'use client'` directive for interactive components
- Wrap sections with animation components (SlideInSection, FadeUpSection)
- Flex-based responsive layouts (1 col mobile, 2+ col desktop)
- Semantic HTML: `<section>`, `<article>`, `<nav>`

### Performance
- Target Lighthouse score: **80+ on all metrics**
- Images:
  - Use `<img>` tags with `loading="eager"` for above-fold
  - Use `loading="lazy"` for below-fold images
  - Store in `/public/assets/` organized by project
- Scroll event throttling: Use `requestAnimationFrame`
- CSS variables for theme switching (no layout shift)

### Accessibility
- **WCAG 2.1 AA compliance**
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- Alt text on all images
- Keyboard accessibility for all interactive elements
- Focus styles via Tailwind ring utilities
- ARIA labels on buttons and controls

### Code Style (Prettier + ESLint)
- Indentation: 2 spaces
- Quotes: Single quotes
- Semicolons: Off
- Trailing commas: None
- JSX: Bracket same line
- Arrow params: No parens if single param

## Core Principles

1. **UX Excellence** — Every interaction should feel intentional and smooth. Animations enhance, never distract.

2. **Visual Polish** — Design quality reflects Sami's skills. Attention to typography, spacing, and color hierarchy.

3. **Performance** — Fast load times and smooth animations. 80+ Lighthouse score on all metrics.

4. **Accessibility** — WCAG 2.1 AA compliance. Usable by everyone, keyboard navigation, proper semantics.

5. **Clear Storytelling** — Case studies tell compelling stories. Focus on process, decisions, and outcomes, not just deliverables.

## Documentation

### Location
All documentation lives in `/docs`

### Deployment Summaries
Before each push to main, update `docs/deployment_summary.md` with:
- **Latest deploy summary**: Bullet points for what changed (client-facing)
- **Notes for internal team**: Technical details, known issues, next steps
- **Changed URLs**: Full URLs of modified or added pages

The pre-push hook will read this file, send to PVS API, and reset it.

## Linear Ticket Creation

When creating Linear tickets for this project:

| Field    | Value                   |
| -------- | ----------------------- |
| Team     | PixelVerse Studios      |
| Assignee | `me`                    |
| Project  | Sami Fares Portfolio    |
| Priority | Medium (3)              |

**Labels:** Always apply one from each sub-label group:

- **Environment:** `Front End`, `Fullstack`, `Server`
- **Scope:** `Ticket`, `Epic`
- **Task:** `Feature`, `Bug`, `Improvement`, `Refactor`, `Maintenance`, `Research`

## Team

| Name | Role | Ownership |
|------|------|-----------|
| Phil | Lead Developer | Architecture, implementation, deployment |
| Sami | Designer / Client | Content, design direction, UX strategy |

## Current Case Studies

1. **Jones Pressure Washing** - Commercial UX for local service business
2. **MoodTunes** - Conceptual music discovery app
3. **360 Degree Care** - Emotional UX for home health care provider

## Adding New Case Studies

1. **Create data file**: `/src/lib/caseStudies/caseNewProject.ts`
   - Follow existing case study data structure
   - Export default object with all sections (0.0-0.5)

2. **Create route**: `/src/app/works/new-project/page.tsx`
   - Use `/app/works/newstudy/page.tsx` as template
   - Import case study data and components

3. **Add to listing**: Update `/src/lib/caseStudies/allCases.ts`
   - Add new case study object with img, label, description, destination

4. **Add assets**: Place images in `/public/assets/NewProject/`

5. **Update navigation**: Add to `CasesMap` in `/src/lib/constants.ts` if needed

## Notes

- **Theme persistence**: Uses `next-themes` with localStorage
- **Analytics**: Custom tracking via Site Behavior (loaded from DigitalOcean Spaces CDN)
- **Contact info**: Stored in `ContactMap` in constants (email, LinkedIn)
- **No CMS**: All content is static TypeScript/TSX modules
- **No database**: Static site generation, no backend
