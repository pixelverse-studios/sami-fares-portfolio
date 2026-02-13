# Domani Case Study - Content Changes & Custom Implementation Scope

**Date:** 2026-02-13
**Epic:** PVS-300 - [EPIC] Domani Case Study Implementation
**Status:** Planning Phase

---

## Executive Summary

The Domani case study requires a **completely custom implementation** with custom components, breaking from the standard 0.0-0.5 reusable component pattern used in other case studies. This reflects Domani's unique positioning as a live product (not conceptual) with a custom visual layout and narrative structure.

### Key Differences from Standard Case Studies

| Aspect | Standard Pattern (JPW, MoodTunes, 360) | Domani Custom Pattern |
|--------|----------------------------------------|----------------------|
| **Components** | Reusable (ProjectOverview, Goals&Challenges, etc.) | Custom Domani-specific components |
| **Structure** | 6-7 sections (0.0-0.5) | 7 custom sections |
| **Layout** | Consistent vertical flow | Custom layouts with side-by-side mockups, dark sections, grids |
| **Theme** | Global theme only | Domani sub-theme throughout |
| **Content** | Structured lists (goals, challenges, takeaways) | Narrative paragraphs and custom callouts |

---

## Change Statistics

| Category | Count | Details |
|----------|-------|---------|
| **Sections Removed** | 3 | Project Overview, Research & Discovery, Strategy & Design |
| **Sections Added** | 4 | Product Hypothesis, Key Challenges & Learnings, What This Project Demonstrates, What's Next |
| **Sections Modified** | 2 | Problem Framing → Product Context, Final Reflections → Reflection |
| **Custom Components Needed** | 8 | All new components required |
| **Content Rewrites** | ~85% | Almost complete content refresh |
| **Layout Complexity** | High | Side-by-side mockups, grid layouts, dark sections |

---

## Section-by-Section Comparison

### Section 1: Hero

**Component:** `<WorkHero>` (reusable, might need minor adjustments)

**Current:**
```typescript
<WorkHero
  img="/assets/Domani/DomaniHero.png"
  header="Domani"
  descriptor="A habit-building planning app that reduces decision fatigue"
/>
```

**New:**
```typescript
<WorkHero
  img="/assets/Domani/DomaniHero.png" // New asset needed
  header="Domani"
  descriptor="A calm, habit-focused planning app designed to help users trust tomorrow's decisions."
/>
```

**Changes:**
- ✏️ **Descriptor text change**: "habit-building planning app that reduces decision fatigue" → "calm, habit-focused planning app designed to help users trust tomorrow's decisions"
- 🖼️ **New hero image** needed (see layout image)

---

### Section 2: Product Context & Design Challenge

**Current Section Name:** Problem Framing (0.0)
**New Section Name:** Product Context & Design Challenge
**Component Needed:** `<ProductContext>` ⭐ CUSTOM

**Current Content:**
```typescript
const problemFraming = [
  'Many people struggle with decision fatigue when planning their day. Traditional planning apps either overwhelm users with too many options or fail to separate the planning mindset from the execution mindset, leading to abandoned plans and incomplete tasks.',
  'Domani needed to create a calm, focused planning experience that reduces cognitive load and helps users follow through on their daily intentions without feeling paralyzed by choice or distracted during execution.',
  "At its core, this project was about designing interaction models that respect the user's mental energy and create clear boundaries between thoughtful planning and focused doing."
]
```

**New Content:**
```typescript
const productContext = {
  paragraphs: [
    'Users want to feel calm, focused, and in control as they plan their day. However, many planning and productivity tools emphasize task density, reminders, and rigid workflows, which can increase stress rather than reduce it.',
    'Domani was created to explore a different approach to planning — one that prioritizes emotional clarity, intentionality, and trust over constant optimization.',
    // Design challenges as structured list:
    'The challenge was to design a system that:',
  ],
  challenges: [
    'Helps users make decisions without overthinking',
    'Encourages follow-through without pressure',
    'Separates planning from execution to reduce cognitive load',
    'Feels supportive rather than demanding'
  ]
}
```

**Change Type:** 🔄 Complete rewrite
**Change Analysis:**
- Removed: "decision fatigue" and "planning mindset vs execution mindset" framing
- Added: Emphasis on "emotional clarity, intentionality, and trust"
- Added: 4-bullet design challenge list (replaces narrative paragraph)
- Tone shift: From problem-solution to exploratory hypothesis

**Layout Notes:**
- Content in light background section
- Design challenges appear as **4 bullet points** (not paragraphs)

---

### Section 3: Project Overview (0.1)

**Status:** ❌ **REMOVED ENTIRELY**

**Current Content:**
```typescript
const projectOverview = {
  context: [
    'Domani is a habit-building planning app designed to help users reduce decision fatigue and follow through on daily intentions. The app separates planning from execution, creating distinct mental spaces for thoughtful intention-setting and focused task completion.',
    'I led product UX from concept through iterative refinement, shaping core interaction models, information architecture, and the overall user experience strategy. The app is currently in public beta and evolving toward launch based on user feedback and usage patterns.'
  ],
  roles: ['Product UX Designer', 'Interaction Designer', 'UX Strategist'],
  client: 'Domani (Internal Product)',
  deliverables: [
    'Core interaction models',
    'Information architecture',
    'Planning flow design',
    'Execution mode UX',
    'Iterative refinements based on beta feedback'
  ],
  timeline: 'Ongoing - Beta Phase',
  tools: ['Figma', 'User Testing', 'Analytics', 'Linear']
}
```

**New Content:** None - section removed

**Rationale:**
- Domani case study focuses on UX decision narratives, not project metadata
- Role/timeline/tools information not included in new copy
- Context information integrated into Product Context section instead

**Component:** `<ProjectOverview>` component NOT used

---

### Section 4: Product Hypothesis (Replaces Goals & Challenges)

**Current Section Name:** Goals and Challenges (0.2)
**New Section Name:** Product Hypothesis
**Component Needed:** `<ProductHypothesis>` ⭐ CUSTOM (callout card design)

**Current Content:**
```typescript
const goalsAndChallenges = {
  goals: [
    'Reduce decision fatigue during daily planning',
    'Create clear separation between planning and execution modes',
    'Lower cognitive load through focused, calm interactions',
    'Help users follow through on their intentions',
    'Build sustainable daily planning habits'
  ],
  challenges: [
    'Balancing simplicity with enough functionality to be useful',
    'Designing for different planning styles and preferences',
    'Creating habit-forming patterns without manipulation',
    'Iterating based on beta user feedback while maintaining vision',
    'Avoiding feature bloat common in productivity apps'
  ],
  description: [
    "The challenge wasn't just to create another planning app - it was to fundamentally rethink how planning tools support human cognition. Most productivity apps assume more features equals more value, but Domani needed to prove that intentional constraints and thoughtful interaction design could be more effective than endless options and configurations."
  ]
}
```

**New Content:**
```typescript
const productHypothesis = {
  hypothesis: [
    'If users are encouraged to plan tomorrow intentionally, in advance, and without urgency, they will feel more confident in their decisions and more likely to follow through.',
    'By shifting planning to a calm, reflective moment and limiting how and when tasks are surfaced, Domani aims to reduce decision fatigue while still supporting daily accountability.'
  ]
}
```

**Change Type:** 🔄 Complete structural change
**Change Analysis:**
- Removed: 5 goals array (bullet list)
- Removed: 5 challenges array (bullet list)
- Removed: Description paragraph explaining the challenge
- Added: 2-paragraph hypothesis narrative (not a list structure)
- Focus shift: From "what we're solving" → "what we believe and why"

**Layout Notes:**
- Appears as **highlighted card/callout** with distinct visual treatment
- Light sage background (see layout image)
- Not a standard section layout

**Component Design:**
- Custom card component with border
- Centered or emphasized layout
- Uses Domani sage color palette
- Typography hierarchy: "Product Hypothesis" as header

---

### Section 5: Research & Discovery (0.3)

**Status:** ❌ **REMOVED ENTIRELY**

**Current Content:**
```typescript
const researchAndDiscovery = {
  description: [
    'Research focused on understanding decision fatigue, planning psychology, and existing productivity app patterns. I analyzed competing apps to identify common pain points like overwhelming feature sets, unclear task hierarchies, and the blurring of planning vs. execution contexts.',
    'I also conducted informal user interviews with people who struggled to maintain planning habits, discovering that many abandoned apps not due to lack of features, but because the apps added cognitive overhead rather than reducing it.'
  ],
  quote: '"I have like five different planning apps on my phone but I don\'t use any of them consistently. They all feel like work."',
  author: 'Beta User Interview',
  takeaways: [
    'Decision fatigue is real - every configuration option adds mental load',
    'Planning and doing require different mental states and UI patterns',
    'Users want guidance, not infinite flexibility',
    'Calm, focused interfaces feel more trustworthy than busy, feature-rich ones',
    'Habit formation requires consistency and minimal friction'
  ]
}
```

**New Content:** None - section removed

**Rationale:**
- Domani case study doesn't include formal research documentation
- Focus is on design decisions and iterations, not research process
- Emphasizes product thinking over research validation

**Component:** `<ResearchAndDiscovery>` component NOT used

---

### Section 6: Key UX Decisions & Iterations (0.4)

**Current Section Name:** Key UX Decisions (empty)
**New Section Name:** Key UX Decisions & Iterations
**Component Needed:** `<DomaniDecisions>` ⭐ CUSTOM (numbered decisions with side-by-side mockups)

**Current Content:**
```typescript
keyUXDecisions: [] // Empty array with TODO comment
```

**New Content:**
```typescript
const keyUXDecisions = {
  intro: 'Each design decision below reflects a deliberate attempt to balance clarity, emotional tone, and behavioral follow-through.',
  decisions: [
    {
      number: 1,
      title: 'Moving away from a "tech startup" visual tone',
      problem: 'Early visual explorations leaned toward a dark, high-contrast aesthetic that felt more like a traditional productivity tool. While visually striking, this direction created unnecessary tension and made the experience feel more demanding.',
      solution: 'The visual system evolved toward lighter backgrounds, softer colors, and increased spacing to reinforce calm and approachability. This shift supported Domani\'s goal of reducing anxiety rather than amplifying it.',
      mockupBefore: '/assets/Domani/Decision1_Before.png', // Dark interface mockup
      mockupAfter: '/assets/Domani/Decision1_After.png'    // Light interface mockup
    },
    {
      number: 2,
      title: 'Evolving the task priority model',
      problem: 'Initial task prioritization relied on traditional importance and urgency markers. During iteration, this approach felt too rigid and encouraged users to over-optimize their day.',
      solution: 'The model was refined to emphasize intentional selection over strict prioritization, allowing users to commit to what matters most without ranking or labeling every task. This reduced decision overhead while still maintaining structure.',
      mockup: '/assets/Domani/Decision2.png' // Priority model interface
    },
    {
      number: 3,
      title: 'Separating planning from execution',
      problem: null, // No problem stated, just explanation
      explanation: 'One of the core UX decisions was to clearly separate the act of planning from the act of doing. Planning occurs in advance, in a calm context, allowing users to think clearly about their intentions. Execution happens later, with minimal friction, reducing the need for re-decision-making throughout the day.',
      solution: 'This separation helped reinforce trust in prior decisions rather than constantly revisiting them.',
      mockupLeft: '/assets/Domani/Decision3_Planning.png',
      mockupRight: '/assets/Domani/Decision3_Execution.png'
    },
    {
      number: 4,
      title: 'Balancing reminders without increasing anxiety',
      problem: null,
      explanation: 'Reminders were designed carefully to avoid feeling intrusive or stressful. Instead of frequent notifications, Domani uses gentle cues that reinforce commitment without creating pressure.',
      solution: 'The goal was to support follow-through while respecting the emotional state of the user.',
      mockup: '/assets/Domani/Decision4.png' // Reminder interface
    }
  ]
}
```

**Change Type:** ✨ Complete addition (was empty)
**Change Analysis:**
- Added: 4 decision narratives with custom structure
- Each decision has: number, title, problem/explanation, solution
- Each decision paired with mockup images (before/after or single)
- Content format varies by decision (not strict problem/risk/decision/solution/tradeoff like JPW)

**Layout Notes:**
- **Numbered decisions** (1, 2, 3, 4) with circular number badges
- **Side-by-side phone mockups** for Decision 1 (before/after)
- **Single mockup** for Decision 2
- **Side-by-side mockups** for Decision 3 (planning vs execution)
- **Single mockup** for Decision 4
- Each decision is a card with border and padding

**Component Design:**
- Custom decision card component
- Number badge (circular, sage gradient background)
- Title heading
- Problem/explanation paragraph
- Solution paragraph
- Mockup grid (1 or 2 columns depending on decision)
- Uses Domani card styling from helper classes

**Asset Requirements:**
- 7 new mockup images needed
- Images show actual Domani app interface
- Before/after comparisons for visual evolution

---

### Section 7: Strategy & Design (0.4)

**Status:** ❌ **REMOVED ENTIRELY**

**Current Content:**
```typescript
const strategyAndDesign = {
  description: [
    'The design strategy centered on creating distinct planning and execution modes with clear visual and interaction differences. Planning mode encourages thoughtful intention-setting in a calm, spacious interface, while execution mode focuses users on one thing at a time.',
    'Every design decision was evaluated against one question: Does this reduce cognitive load or add to it? This led to intentional constraints like limited daily task counts, single-focus execution, and the removal of typical productivity app complexity.'
  ],
  highlights: [
    {
      header: 'Planning/Execution Separation',
      Icon: 'FaArrowsLeftRight',
      description: 'Distinct modes with different UI patterns - planning mode for thoughtful setup, execution mode for focused completion without distraction.'
    },
    {
      header: 'Intentional Constraints',
      Icon: 'FaHandPointDown',
      description: 'Limited daily task capacity and simplified options to reduce decision fatigue and prevent overwhelming to-do lists.'
    },
    // ... 4 more highlights
  ],
  mockups: [
    {
      imgs: ['/assets/Domani/PlanningMode.png'],
      explanation: 'Planning mode - calm, spacious interface for thoughtful intention-setting'
    },
    {
      imgs: ['/assets/Domani/ExecutionMode.png'],
      explanation: 'Execution mode - focused, single-task view for distraction-free completion'
    }
  ]
}
```

**New Content:** None - section removed

**Rationale:**
- Strategy highlights content is now embedded in Key UX Decisions section
- Mockups are now paired with specific decisions (not separate section)
- Avoids duplication of content already covered in decisions

**Component:** `<StrategyAndDesign>` component NOT used

---

### Section 8: Reflection

**Current Section Name:** Final Reflections (0.5)
**New Section Name:** Reflection
**Component Needed:** `<DomaniReflection>` ⭐ CUSTOM (simple section, but custom for content structure)

**Current Content:**
```typescript
const finalReflections = {
  description: [
    'Domani demonstrates that thoughtful constraints and focused interaction design can create more value than feature abundance. By separating planning from execution and intentionally limiting options, the app reduces cognitive load rather than adding to it.',
    'The app is currently in public beta, with ongoing refinements based on user feedback. Each iteration balances user requests with the core principle of simplicity, ensuring new features serve the mission of reducing decision fatigue rather than adding complexity.'
  ],
  subHeader: 'Current Beta Status',
  url: 'https://domani.app',
  achievements: [
    'Created distinct planning and execution modes that respect user mental states',
    'Designed interaction models that reduce decision fatigue through intentional constraints',
    'Built a calm, focused visual system that supports concentration',
    'Established iterative feedback loops with beta users',
    'Maintained simplicity principles while adding requested features'
  ],
  lessons: [
    'Constraints can create more value than options when applied thoughtfully',
    'Different mental states require different interaction patterns',
    'Simplicity is harder to achieve than complexity',
    'Beta user feedback must be filtered through core product principles',
    'Habit formation happens through consistency, not features'
  ],
  feedback: '"This is the first planning app that doesn\'t make me feel overwhelmed. I actually use it every day."',
  client: 'Beta User',
  img: ['/assets/Domani/FinalMocks.png']
}
```

**New Content:**
```typescript
const reflection = {
  paragraph: 'Domani reinforced the importance of designing systems that respect a user\'s mental and emotional state, not just their productivity goals. Working without formal analytics or large-scale testing required making thoughtful tradeoffs and relying on UX judgment rather than optimization metrics. This project emphasized restraint, clarity, and intentional scope — designing only what was necessary to support the core experience.'
}
```

**Change Type:** 🔄 Content reduction and focus shift
**Change Analysis:**
- Removed: All structured content (achievements, lessons, feedback, images, links)
- Removed: Beta status information
- Added: Single reflective paragraph emphasizing design philosophy
- Focus: From "what we achieved" → "what I learned about design practice"

**Layout Notes:**
- Simple paragraph section
- Light background
- No special formatting or callouts
- Shorter than current Final Reflections

---

### Section 9: Key Challenges & Learnings

**Status:** ✨ **NEW SECTION** (doesn't exist in current)
**Component Needed:** `<ChallengesLearnings>` ⭐ CUSTOM (2-column grid layout)

**Current Content:** None (this is a new section)

**New Content:**
```typescript
const challengesLearnings = {
  challenges: [
    {
      title: 'Learning to separate solutions from habits',
      description: 'Designing behavior-focused products requires resisting the urge to over-engineer solutions. Simplicity often supports consistency better than flexibility.'
    },
    {
      title: 'Re-centering on the experience of time',
      description: 'Planning tools don\'t just manage tasks — they shape how users feel about their future time. Small interface decisions can meaningfully influence that perception.'
    }
  ]
}
```

**Change Type:** ✨ New addition
**Structure:**
- 2 learning items in a grid
- Each has title + description
- Presented as insights, not bullet lists

**Layout Notes:**
- **2-column grid layout** (desktop)
- 1-column stacked (mobile)
- Each item is a card with border
- Light background section
- See layout image for visual design

**Component Design:**
- Custom grid component
- Card styling for each challenge/learning
- Title typography: medium weight, darker text
- Description typography: body text color

---

### Section 10: What This Project Demonstrates

**Status:** ✨ **NEW SECTION** (partial current content in achievements)
**Component Needed:** `<ProjectDemonstrates>` ⭐ CUSTOM (dark background section with grid)

**Current Content (partial from achievements):**
```typescript
achievements: [
  'Created distinct planning and execution modes that respect user mental states',
  'Designed interaction models that reduce decision fatigue through intentional constraints',
  'Built a calm, focused visual system that supports concentration',
  'Established iterative feedback loops with beta users',
  'Maintained simplicity principles while adding requested features'
]
```

**New Content:**
```typescript
const projectDemonstrates = {
  capabilities: [
    'Product-level UX thinking beyond surface UI',
    'Comfort designing without complete data or validation',
    'Strong judgment around scope and restraint',
    'Ability to design systems that support behavior, not just features',
    'Emotional awareness in interaction design'
  ]
}
```

**Change Type:** 🔄 Capabilities reframing
**Change Analysis:**
- Removed: "What we built" achievement language
- Added: "What skills this demonstrates" capability language
- Focus shift: Deliverables → designer competencies
- All 5 items completely rewritten with meta-cognitive framing

**Layout Notes:**
- **Dark background section** (dark sage gradient from Domani palette)
- White or light text
- Header: "What This Project Demonstrates"
- 5 capability bullets in grid or vertical list
- High visual prominence (see layout image)

**Component Design:**
- Dark section with `bg-gradient-dark` or custom Domani dark gradient
- Text in white or light color
- Large header typography
- Bullet list or grid layout
- Uses `domaniGradients.dark` helper

---

### Section 11: What's Next

**Status:** ✨ **NEW SECTION** (doesn't exist in current)
**Component Needed:** `<WhatsNext>` ⭐ CUSTOM (simple section)

**Current Content:** None (this is a new section)

**New Content:**
```typescript
const whatsNext = {
  paragraph: 'Domani continues to evolve as a real-world concept, with future iterations focused on refining execution flows, reducing friction further, and preparing the experience for broader release.'
}
```

**Change Type:** ✨ New addition
**Structure:**
- Single forward-looking paragraph
- Emphasizes ongoing development
- Unique to Domani (other case studies don't have this)

**Layout Notes:**
- Simple paragraph section
- Light background
- No special formatting
- Brief, optimistic tone

---

## Custom Components Required

### Component Architecture

All Domani case study components should be created as custom, single-use components in a dedicated directory:

**Directory:** `/src/components/caseStudy/domani/`

### Components List

| Component | File | Purpose | Complexity |
|-----------|------|---------|-----------|
| `<ProductContext>` | `ProductContext.tsx` | Product context with 4-bullet challenge list | Medium |
| `<ProductHypothesis>` | `ProductHypothesis.tsx` | Hypothesis card/callout with 2 paragraphs | Low |
| `<DomaniDecisions>` | `DomaniDecisions.tsx` | 4 numbered decision cards with mockups | High |
| `<DomaniReflection>` | `DomaniReflection.tsx` | Simple paragraph section | Low |
| `<ChallengesLearnings>` | `ChallengesLearnings.tsx` | 2-column grid of learning cards | Medium |
| `<ProjectDemonstrates>` | `ProjectDemonstrates.tsx` | Dark section with capability list | Medium |
| `<WhatsNext>` | `WhatsNext.tsx` | Simple forward-looking paragraph | Low |
| `<DomaniCaseFooter>` | `DomaniCaseFooter.tsx` | 3-column case study grid (optional) | Medium |

### Component Design Patterns

**All components should:**
- Import and use `domaniClasses` and `domaniGradients` from `/lib/caseStudies/caseDomani.ts`
- Use Domani sub-theme color palette (sage greens, priority colors)
- Support dark/light mode via CSS variables
- Include scroll animations (SlideInSection, FadeUpSection)
- Follow accessibility standards (WCAG 2.1 AA)
- Use semantic HTML (`<section>`, `<article>`, `<h2>`, `<h3>`)

### Example Component Structure

```typescript
'use client'

import { domaniClasses } from '@/lib/caseStudies/caseDomani'
import { SlideInSection } from '@/components/animations'

interface ProductHypothesisProps {
  hypothesis: string[]
}

export default function ProductHypothesis({ hypothesis }: ProductHypothesisProps) {
  return (
    <section className={`halfPage ${domaniClasses.sectionSage}`}>
      <div className="section">
        <SlideInSection>
          <article className={domaniClasses.card + ' p-8 space-y-4'}>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Product Hypothesis
            </h2>
            {hypothesis.map((para, i) => (
              <p key={i} className={domaniClasses.body}>{para}</p>
            ))}
          </article>
        </SlideInSection>
      </div>
    </section>
  )
}
```

---

## Data Structure Changes

### New File Structure

```typescript
// /src/lib/caseStudies/caseDomani.ts

const productContext = {
  paragraphs: string[]
  challenges: string[]  // 4-bullet list
}

const productHypothesis = {
  hypothesis: string[]  // 2 paragraphs
}

const keyUXDecisions = {
  intro: string
  decisions: Array<{
    number: number
    title: string
    problem?: string
    explanation?: string
    solution: string
    mockupBefore?: string
    mockupAfter?: string
    mockup?: string
    mockupLeft?: string
    mockupRight?: string
  }>
}

const reflection = {
  paragraph: string
}

const challengesLearnings = {
  challenges: Array<{
    title: string
    description: string
  }>
}

const projectDemonstrates = {
  capabilities: string[]  // 5 items
}

const whatsNext = {
  paragraph: string
}

export default {
  productContext,
  productHypothesis,
  keyUXDecisions,
  reflection,
  challengesLearnings,
  projectDemonstrates,
  whatsNext
}
```

### Fields Removed

All standard case study fields removed:
- ❌ `problemFraming` (replaced with productContext)
- ❌ `projectOverview` (removed entirely)
- ❌ `goalsAndChallenges` (replaced with productHypothesis)
- ❌ `researchAndDiscovery` (removed entirely)
- ❌ `strategyAndDesign` (removed entirely)
- ❌ `finalReflections` (replaced with reflection + new sections)

---

## Page Component Structure

### New Page Structure

```typescript
// /src/app/works/domani/page.tsx

import WorkHero from '@/components/caseStudy/WorkHero'
import ProductContext from '@/components/caseStudy/domani/ProductContext'
import ProductHypothesis from '@/components/caseStudy/domani/ProductHypothesis'
import DomaniDecisions from '@/components/caseStudy/domani/DomaniDecisions'
import DomaniReflection from '@/components/caseStudy/domani/DomaniReflection'
import ChallengesLearnings from '@/components/caseStudy/domani/ChallengesLearnings'
import ProjectDemonstrates from '@/components/caseStudy/domani/ProjectDemonstrates'
import WhatsNext from '@/components/caseStudy/domani/WhatsNext'
import AvailableCases from '@/components/caseStudy/AvailableCases'

import caseDomani from '@/lib/caseStudies/caseDomani'

export default function WorksDomani() {
  return (
    <>
      <WorkHero
        img="/assets/Domani/DomaniHero.png"
        header="Domani"
        descriptor="A calm, habit-focused planning app designed to help users trust tomorrow's decisions."
      />
      <ProductContext {...caseDomani.productContext} />
      <ProductHypothesis {...caseDomani.productHypothesis} />
      <DomaniDecisions {...caseDomani.keyUXDecisions} />
      <DomaniReflection {...caseDomani.reflection} />
      <ChallengesLearnings {...caseDomani.challengesLearnings} />
      <ProjectDemonstrates {...caseDomani.projectDemonstrates} />
      <WhatsNext {...caseDomani.whatsNext} />
      <AvailableCases current="Domani" showHeader />
    </>
  )
}
```

**No standard case study components used** (except WorkHero and AvailableCases)

---

## Asset Requirements

### New Images Needed

Based on layout image and content:

| Asset | Path | Description |
|-------|------|-------------|
| Hero image | `/public/assets/Domani/DomaniHero.png` | Domani app hero mockup |
| Decision 1 Before | `/public/assets/Domani/Decision1_Before.png` | Dark interface mockup |
| Decision 1 After | `/public/assets/Domani/Decision1_After.png` | Light interface mockup |
| Decision 2 | `/public/assets/Domani/Decision2.png` | Priority model interface |
| Decision 3 Planning | `/public/assets/Domani/Decision3_Planning.png` | Planning mode mockup |
| Decision 3 Execution | `/public/assets/Domani/Decision3_Execution.png` | Execution mode mockup |
| Decision 4 | `/public/assets/Domani/Decision4.png` | Reminder interface |

**Total new assets:** 7 images

**Current assets directory:** `/public/assets/Domani/` (currently empty)

---

## Linear Ticket Recommendations

### Current Epic: PVS-300

**Recommendation:** Keep PVS-300 epic but update description to reflect custom implementation

### Current Child Tickets Status

| Ticket | Current Title | Recommendation |
|--------|---------------|----------------|
| PVS-301 | Create Domani Case Study Data Structure | ✏️ **Update** - reflects new data structure |
| PVS-302 | Add Domani Problem Framing Content (0.0) | ✏️ **Update** - rename to "Product Context" |
| PVS-303 | Add Domani Project Overview Content (0.1) | ❌ **Cancel** - section removed |
| PVS-304 | Add Domani Product Hypothesis Content (0.2) | ✏️ **Update** - correct section |
| PVS-305 | Add Domani Research & Discovery Content (0.3) | ❌ **Cancel** - section removed |
| PVS-306 | Add Domani Key UX Decisions Content (0.4) | ✏️ **Update** - add 4 decisions content |
| PVS-307 | Add Domani Final Reflection Content (0.5) | ✏️ **Update** - split into 4 sections |
| PVS-308 | Create Domani Case Study Route & Page | ✏️ **Update** - reflects custom component imports |
| PVS-309 | Integrate Domani Color Theme | ✅ **Keep** - unchanged |
| PVS-310 | Add Domani Case Study Assets & Images | ✏️ **Update** - list 7 new images |

### New Tickets Needed

| New Ticket | Title | Purpose |
|------------|-------|---------|
| PVS-311 | Create ProductContext Component | Build custom component |
| PVS-312 | Create ProductHypothesis Component | Build custom component |
| PVS-313 | Create DomaniDecisions Component | Build custom component (complex) |
| PVS-314 | Create DomaniReflection Component | Build custom component |
| PVS-315 | Create ChallengesLearnings Component | Build custom component |
| PVS-316 | Create ProjectDemonstrates Component | Build custom component |
| PVS-317 | Create WhatsNext Component | Build custom component |

**Total new tickets:** 7 (one per custom component)

### Recommended Ticket Structure

**Option A: Update + Add**
- Update 6 existing tickets (PVS-301, 302, 304, 306, 307, 308, 310)
- Cancel 2 tickets (PVS-303, 305)
- Add 7 new component tickets (PVS-311-317)

**Option B: Cancel All + Create New**
- Cancel all 10 current tickets (PVS-301-310)
- Create 15 new tickets reflecting actual scope:
  - 1 data structure ticket
  - 7 content tickets (one per section)
  - 7 component tickets (one per custom component)

---

## Implementation Order

### Phase 1: Foundation (Week 1)
1. **Update data structure** (`caseDomani.ts`)
   - Remove old sections
   - Add new section objects
   - Update TypeScript interfaces

2. **Create simple components first**
   - `<ProductHypothesis>` (easiest)
   - `<DomaniReflection>`
   - `<WhatsNext>`

### Phase 2: Complex Components (Week 2)
3. **Build medium complexity components**
   - `<ProductContext>` (with bullet list)
   - `<ChallengesLearnings>` (2-column grid)
   - `<ProjectDemonstrates>` (dark section)

### Phase 3: Advanced Components (Week 3)
4. **Build most complex component**
   - `<DomaniDecisions>` (numbered cards + mockup grids)

### Phase 4: Integration & Polish (Week 4)
5. **Update page component** (`/app/works/domani/page.tsx`)
6. **Add all 7 images** to `/public/assets/Domani/`
7. **Theme integration** (apply domaniClasses throughout)
8. **Test responsive layouts**
9. **Verify animations**
10. **Accessibility audit**
11. **Build verification**

---

## Testing Checklist

### Functionality
- [ ] All 7 sections render correctly
- [ ] Data flows from caseDomani.ts to components
- [ ] WorkHero shows correct descriptor
- [ ] Decision cards show correct mockups
- [ ] 2-column grid responsive on mobile
- [ ] Dark section uses correct background

### Visual/Design
- [ ] Domani sub-theme colors apply correctly
- [ ] Light/dark mode switching works
- [ ] Typography hierarchy clear
- [ ] Spacing consistent with layout image
- [ ] Card borders and shadows match design
- [ ] Mockups display at correct size

### Performance
- [ ] Page load under 3s
- [ ] Images optimized
- [ ] No layout shift (CLS < 0.1)
- [ ] Smooth scroll animations

### Accessibility
- [ ] Heading hierarchy (h1 → h2 → h3)
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Alt text on all images

### Cross-Browser
- [ ] Chrome/Edge
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari
- [ ] Mobile Chrome

---

## Summary

### What's Being Built
A completely custom Domani case study page with 7 custom components, breaking from the standard reusable component pattern. The case study emphasizes UX decision narratives, product thinking, and designer capabilities over project metadata and research documentation.

### Complexity Level
**High** - Requires:
- 7 new custom components
- Custom data structure
- Side-by-side mockup layouts
- 2-column grids
- Dark background sections
- 7 new image assets
- Domani sub-theme integration throughout

### Timeline Estimate
**3-4 weeks** for full implementation (1 developer)

### Key Success Factors
1. **Layout fidelity** - Match provided design image
2. **Theme integration** - Use domaniClasses/domaniGradients helpers
3. **Content accuracy** - Word-for-word copy from provided document
4. **Component quality** - Reusable patterns within Domani (even if not across case studies)
5. **Build verification** - Run `npm run build` after each component

---

**End of Scope Document**
