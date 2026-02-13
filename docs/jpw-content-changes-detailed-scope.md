# Jones Pressure Washing Case Study - Detailed Content Changes Scope

**Date:** 2026-02-12
**Epic:** PVS-273
**Comparison:** Current code vs. User-provided document

---

## HERO SECTION

### Location: `/src/app/works/jones-pressure-washing/page.tsx`

**Current:**
```
descriptor="Designing scalable, trust-focused website for a new exterior washing company in New Jersey"
```

**New:**
```
descriptor="Designing a trust-driven digital experience that helps homeowners confidently request quotes from a new local service business"
```

**Change Type:** Complete rewrite
**What Changed:**
- Removed: "scalable, trust-focused website for a new exterior washing company in New Jersey"
- Added: "trust-driven digital experience that helps homeowners confidently request quotes from a new local service business"
- Shift from business-focused to user-outcome focused language
- Changed "trust-focused" → "trust-driven"
- Changed "website" → "digital experience"
- Added user benefit: "helps homeowners confidently request quotes"

---

## 0.0 PROBLEM FRAMING

### Section Header

**Location:** `/src/app/works/jones-pressure-washing/page.tsx`

**Current:**
```
header="Problem Framing - New Local Business with No Credibility"
```

**New:**
```
header="Problem Framing: Establishing Trust Without Social Proof"
```

**Change Type:** Complete rewrite
**What Changed:**
- Removed negative framing: "New Local Business with No Credibility"
- New strategic framing: "Establishing Trust Without Social Proof"
- Changed separator from " - " to ": "

### Paragraph 1

**Location:** `/src/lib/caseStudies/caseJpw.ts` - `problemFraming[0]`

**Current:**
```
Jones Pressure Washing was a brand-new company entering the competitive home services market in New Jersey. With no website, reviews, or digital footprint, they faced a major challenge: earning trust from customers who rely on online credibility to make quick decisions.
```

**New:**
```
Jones Pressure Washing was a brand-new company entering the competitive home services market in New Jersey. With no website, reviews, or digital footprint, the business faced a core challenge: earning trust quickly from homeowners who rely on online signals to make fast, high-stakes decisions.
```

**Change Type:** Minor edits
**What Changed:**
- "they faced a major challenge" → "the business faced a core challenge"
- "major" → "core"
- "customers" → "homeowners" (more specific)
- "online credibility" → "online signals"
- "make quick decisions" → "make fast, high-stakes decisions" (added emphasis on stakes)
- Added "quickly" after "earning trust"

### Paragraph 2

**Current:**
```
The client needed more than a basic website—they needed a professional, trustworthy brand presence that could stand out locally and convert visitors into leads. The design had to clearly communicate services, professionalism, and local relevance, while remaining simple enough to manage for a small team.
```

**New:**
```
The problem was not simply the absence of a website. Prospective customers needed to feel confident inviting a new service provider onto their property without the reassurance of testimonials, brand recognition, or past work examples. Any digital experience had to reduce uncertainty, clearly explain services, and make the next step feel safe and worthwhile.
```

**Change Type:** Complete rewrite
**What Changed:**
- COMPLETE REWRITE - no text preserved
- Old focus: What the client needed (business perspective)
- New focus: What customers needed (user perspective)
- Shifts from "brand presence" to "reduce uncertainty"
- Shifts from "convert visitors into leads" to "make the next step feel safe"
- New emphasis on user confidence and reducing risk

### Paragraph 3

**Current:**
```
At its core, this project was about crafting legitimacy from scratch in an industry where visual trust, clarity, and local SEO directly impact business growth.
```

**New:**
```
At its core, this project focused on establishing legitimacy from the ground up in an industry where clarity, perceived professionalism, and local relevance shape user trust.
```

**Change Type:** Moderate rewrite
**What Changed:**
- "this project was about crafting" → "this project focused on establishing"
- "from scratch" → "from the ground up"
- "visual trust, clarity, and local SEO" → "clarity, perceived professionalism, and local relevance"
- "directly impact business growth" → "shape user trust"
- Removed "visual trust" and "local SEO"
- Added "perceived professionalism" and "local relevance"
- Shifted from business growth focus to user trust focus

---

## 0.1 PROJECT OVERVIEW

### Location: `/src/lib/caseStudies/caseJpw.ts` - `projectOverview`

### Context Field

**Current:**
```typescript
context: [
  'Jones Pressure Washing is a residential and commercial exterior washing company based in New Jersey. At the start of the project, they had a basic one-page site that lacked clear structure, hierarchy, or branding. Their goal was to elevate their digital presence with a professional website that could build trust, attract local leads, and support long-term growth.',
  'I led the UX strategy, responsive design, content planning, and SEO foundation. I collaborated closely with a developer to ensure every custom-coded component was implemented as designed. The result is a clean, mobile-friendly experience built to establish credibility and drive conversions — even without existing reviews or a visual portfolio.'
]
```

**New:**
```typescript
context: [
  'Jones Pressure Washing is a residential and commercial exterior washing company based in New Jersey. At the start of the project, the business had a minimal one-page site that lacked clear structure, hierarchy, and messaging.\n\nThe goal was to design a scalable website that could support service clarity and long-term local growth.'
]
```

**Change Type:** Complete consolidation and rewrite
**What Changed:**
- **2 paragraphs → 1 paragraph** (consolidated)
- Paragraph 1 changes:
  - "they had a basic one-page site" → "the business had a minimal one-page site"
  - "hierarchy, or branding" → "hierarchy, and messaging"
  - Removed entire sentence about goal to elevate presence, build trust, etc.
  - Added new simpler goal statement
- Paragraph 2: COMPLETELY REMOVED
  - Removed all content about "I led the UX strategy..."
  - Removed mention of developer collaboration
  - Removed mention of mobile-friendly experience

### Roles Field

**Current:**
```typescript
roles: ['UX Designer', 'Content Strategist', 'Copywriter']
```

**New:**
```typescript
roles: ['UX Design', 'Information Architecture', 'Content Strategy', 'Copywriting']
```

**Change Type:** Expansion and format change
**What Changed:**
- 3 roles → 4 roles
- Changed format from "Designer/Strategist/Writer" to "Design/Architecture/Strategy/Writing"
- "UX Designer" → "UX Design"
- Added "Information Architecture" (NEW)
- "Content Strategist" → "Content Strategy"
- "Copywriter" → "Copywriting"

### Tools Field

**Current:**
```typescript
tools: ['Figma', 'Web Research', 'Google Docs', 'Linear']
```

**New:**
```typescript
tools: ['Figma', 'Web Research', 'Google Docs', 'Linear (project tracking)']
```

**Change Type:** Minor addition
**What Changed:**
- Added clarification: "Linear" → "Linear (project tracking)"

### Deliverables Field

**Current:**
```typescript
deliverables: [
  'Full homepage',
  'Services overview and detail pages',
  'Contact page',
  'SEO-focused copywriting'
]
```

**New:**
```typescript
deliverables: [
  'Responsive homepage designed to support lead requests',
  'Service overview and detail pages with clear hierarchy',
  'Contact and lead capture experience',
  'SEO-informed copywriting to support local discovery'
]
```

**Change Type:** Rewrites with added detail
**What Changed:**
- "Full homepage" → "Responsive homepage designed to support lead requests"
- "Services overview and detail pages" → "Service overview and detail pages with clear hierarchy"
- "Contact page" → "Contact and lead capture experience"
- "SEO-focused copywriting" → "SEO-informed copywriting to support local discovery"
- All items now include purpose/benefit

---

## 0.2 GOALS & CONSTRAINTS

### Location: `/src/lib/caseStudies/caseJpw.ts` - `goalsAndChallenges`

### Section Header (Component Level)

**Note:** Section header changes from "Project Goals and Challenges" to "Project Goals & Challenges" (minor), but more importantly "Challenges" becomes "Constraints" in the component rendering.

### Description Field

**Current:**
```typescript
description: [
  "With no content, brand identity, or online credibility in place, Jones Pressure Washing needed more than a visual facelift — they needed a foundation. Rather than rehash the limitations, I focused on building a site that could earn trust quickly through clarity, visual professionalism, and strong local signals. The challenge wasn't just to make something look good — it was to design a conversion engine for a brand without a track record."
]
```

**New:**
```typescript
// REMOVED - This field should be removed entirely
```

**Change Type:** Complete removal
**What Changed:**
- Description field completely removed
- Component must handle missing description gracefully (already does via optional pattern)

### Goals Field

**Current:**
```typescript
goals: [
  'Establish a professional and trustworthy digital presence',
  'Generate leads through clear, action-oriented CTAs',
  'Clearly explain core services to first-time visitors',
  'Rank well for local search terms in New Jersey',
  "Appear as the 'elite' provider of this service"
]
```

**New:**
```typescript
goals: [
  'Reduce perceived risk for first-time visitors by establishing trust and legitimacy',
  'Help homeowners quickly understand services and determine fit without additional clarification',
  'Guide users toward requesting a quote through clear, confidence-building calls to action',
  'Support local search visibility across New Jersey',
  'Position the business as a reliable, premium option relative to local competitors'
]
```

**Change Type:** Complete rewrite of all 5 goals
**What Changed:**
1. **Goal 1:**
   - Old: "Establish a professional and trustworthy digital presence"
   - New: "Reduce perceived risk for first-time visitors by establishing trust and legitimacy"
   - Shift from business perspective to user-focused risk reduction

2. **Goal 2:**
   - Old: "Generate leads through clear, action-oriented CTAs"
   - New: "Help homeowners quickly understand services and determine fit without additional clarification"
   - Shift from lead generation to understanding and fit

3. **Goal 3:**
   - Old: "Clearly explain core services to first-time visitors"
   - New: "Guide users toward requesting a quote through clear, confidence-building calls to action"
   - More specific about outcome (quote request) and emotional component (confidence)

4. **Goal 4:**
   - Old: "Rank well for local search terms in New Jersey"
   - New: "Support local search visibility across New Jersey"
   - Softer language: "rank well" → "support visibility"

5. **Goal 5:**
   - Old: "Appear as the 'elite' provider of this service"
   - New: "Position the business as a reliable, premium option relative to local competitors"
   - More specific and strategic language

### Challenges Field → Constraints Field

**Field Name Change:** `challenges` → `constraints`

**Current:**
```typescript
challenges: [
  'No brand identity, portfolio, or testimonials',
  'Limited visual assets or content at kickoff',
  'Highly competitive local market',
  'Tight timeline: 6 weeks from start to delivery'
]
```

**New:**
```typescript
constraints: [
  'No existing brand identity, service portfolio, or customer testimonials',
  'Limited visual assets and written content at project kickoff',
  'Highly competitive local home services landscape',
  'Fixed timeline of six weeks from kickoff to launch'
]
```

**Change Type:** Complete rewrite of all 4 items + terminology change
**What Changed:**
1. **Constraint 1:**
   - Old: "No brand identity, portfolio, or testimonials"
   - New: "No existing brand identity, service portfolio, or customer testimonials"
   - Added "existing", "service", "customer" for clarity

2. **Constraint 2:**
   - Old: "Limited visual assets or content at kickoff"
   - New: "Limited visual assets and written content at project kickoff"
   - "or content" → "and written content"
   - "at kickoff" → "at project kickoff"

3. **Constraint 3:**
   - Old: "Highly competitive local market"
   - New: "Highly competitive local home services landscape"
   - Added specificity: "home services landscape"

4. **Constraint 4:**
   - Old: "Tight timeline: 6 weeks from start to delivery"
   - New: "Fixed timeline of six weeks from kickoff to launch"
   - "Tight" → "Fixed" (less negative)
   - "6 weeks" → "six weeks" (spelled out)
   - "from start to delivery" → "from kickoff to launch"

---

## 0.3 RESEARCH & DISCOVERY

### Location: `/src/lib/caseStudies/caseJpw.ts` - `researchAndDiscovery`

### Description Field

**Current:**
```typescript
description: [
  'I conducted a competitive review of pressure washing businesses across Northern New Jersey, analyzing how they structured content, implemented SEO, and approached layout across desktop and mobile. I also read through Google and Yelp reviews to understand what customers cared about most — from communication and pricing to before-and-after results.',
  'Because the client lacked testimonials and a visual portfolio, I explored how to build trust without traditional social proof. I supplemented my research by speaking with homeowners in my network to better understand how they choose service providers. These informal conversations revealed a strong reliance on first impressions, location visibility, and quick clarity about services and pricing.'
]
```

**New:**
```typescript
description: [
  'To understand how homeowners evaluate and select pressure washing services, I conducted a competitive review of local businesses across Northern New Jersey. This research focused on how competitors communicated credibility, structured service information, and surfaced trust signals through messaging, local SEO presence, and visual professionalism.',
  'I also reviewed Google and Yelp feedback to identify recurring decision drivers, including responsiveness, pricing clarity, professionalism, and visible results. Because the client lacked testimonials and a visual portfolio at launch, a key focus of this research was understanding how trust is established when traditional social proof is limited or absent.',
  'To supplement this analysis, I spoke informally with homeowners in my network about how they typically choose local service providers. These conversations reinforced a consistent pattern: decisions are often made quickly, based on first impressions, perceived professionalism, and how easily users can understand services and take action.'
]
```

**Change Type:** 2 paragraphs → 3 paragraphs, extensive rewrites
**What Changed:**

**Paragraph 1:**
- Old: Started with "I conducted a competitive review..."
- New: Started with purpose: "To understand how homeowners evaluate and select..."
- Old: "analyzing how they structured content, implemented SEO, and approached layout across desktop and mobile"
- New: "This research focused on how competitors communicated credibility, structured service information, and surfaced trust signals through messaging, local SEO presence, and visual professionalism"
- Removed mention of Google/Yelp reviews from this paragraph
- More strategic focus on credibility and trust signals

**Paragraph 2:**
- Starts with Google/Yelp reviews (moved from paragraph 1)
- Old: "I also read through Google and Yelp reviews to understand what customers cared about most — from communication and pricing to before-and-after results"
- New: "I also reviewed Google and Yelp feedback to identify recurring decision drivers, including responsiveness, pricing clarity, professionalism, and visible results"
- More analytical language: "identify recurring decision drivers"
- Second half brings in trust without social proof (moved from old paragraph 2)
- More focused on the research question

**Paragraph 3:** (NEW - split from old paragraph 2)
- Content about informal homeowner conversations
- More structured presentation of findings
- "reinforced a consistent pattern" - stronger analytical framing
- Clearer articulation of what was learned

### Quote & Author

**Current:**
```typescript
quote: '"Honestly I just google the service, look at the first couple options and whichever company looks more professional I usually call first"',
author: 'Tyler B'
```

**New:**
```typescript
quote: '"Honestly, I just Google the service, look at the first couple options, and whichever company looks more professional I usually call first."',
author: 'Tyler B'
```

**Change Type:** Minor punctuation fixes
**What Changed:**
- Added comma after "Honestly"
- "google" → "Google" (proper capitalization)
- Added comma before "and whichever"
- Added period at end of quote (inside quotation marks)

### Takeaways Field

**Current:**
```typescript
takeaways: [
  'Sites must establish trust within the first few seconds of landing',
  'Services should be broken down into short, scannable chunks',
  'Local SEO (county and town names) plays a major role in discovery',
  'Mobile-first layouts are critical for on-the-go, last-minute searches',
  'CTAs should appear early and often — users shouldn't have to search for ways to take action'
]
```

**New:**
```typescript
takeaways: [
  'Trust is often established within the first few seconds of landing, especially for first-time visitors',
  'Homeowners scan quickly to understand services, coverage areas, and pricing expectations',
  'Local signals such as county and town references strongly influence perceived legitimacy',
  'Many service searches occur on mobile, often under time pressure',
  'Users expect clear next steps without needing to search or scroll excessively'
]
```

**Change Type:** Complete rewrite of all 5 takeaways
**What Changed:**

1. **Takeaway 1:**
   - Old: "Sites must establish trust within the first few seconds of landing"
   - New: "Trust is often established within the first few seconds of landing, especially for first-time visitors"
   - Softer: "must" → "is often"
   - Added context: "especially for first-time visitors"

2. **Takeaway 2:**
   - Old: "Services should be broken down into short, scannable chunks"
   - New: "Homeowners scan quickly to understand services, coverage areas, and pricing expectations"
   - Shifted from prescription to observation
   - More specific about what users scan for

3. **Takeaway 3:**
   - Old: "Local SEO (county and town names) plays a major role in discovery"
   - New: "Local signals such as county and town references strongly influence perceived legitimacy"
   - "Local SEO" → "Local signals"
   - "discovery" → "perceived legitimacy"
   - More UX-focused, less SEO-technical

4. **Takeaway 4:**
   - Old: "Mobile-first layouts are critical for on-the-go, last-minute searches"
   - New: "Many service searches occur on mobile, often under time pressure"
   - From prescription to observation
   - "Mobile-first layouts are critical" → "Many service searches occur on mobile"

5. **Takeaway 5:**
   - Old: "CTAs should appear early and often — users shouldn't have to search for ways to take action"
   - New: "Users expect clear next steps without needing to search or scroll excessively"
   - More general: "CTAs" → "clear next steps"
   - "search for ways to take action" → "search or scroll excessively"

---

## 0.4 KEY UX DECISIONS

### Location: `/src/lib/caseStudies/caseJpw.ts` - `keyUXDecisions`

**Current:**
```typescript
keyUXDecisions: [], // Content to be added in future ticket
```

**New:**
```typescript
keyUXDecisions: [
  // 4 complete decision objects
]
```

**Change Type:** NEW CONTENT - 4 complete UX decisions added

### Decision 1: Establishing trust without social proof or brand history

```typescript
{
  title: 'Establishing trust without social proof or brand history',
  problem: 'As a new local service business, Jones Pressure Washing had no reviews, testimonials, or visual portfolio. Homeowners needed to assess legitimacy quickly before deciding whether to request a quote.',
  risk: 'Without recognizable trust signals, users could hesitate, compare competitors that appeared more established, or abandon the experience entirely.',
  decision: 'Signal credibility through clarity, professionalism, and consistency rather than relying on unavailable social proof.',
  solution: 'Trust was reinforced by:\n\n• Prioritizing clear, descriptive service explanations over promotional language\n• Using a strong information hierarchy to surface key details immediately\n• Applying a restrained, professional visual system to convey reliability\n• Making the primary call to action visible early and consistently',
  tradeoff: 'Limiting expressive branding reduced early visual flexibility but lowered perceived risk and supported faster, more confident decisions.'
}
```

### Decision 2: Supporting fast decision-making for high-intent users

```typescript
{
  title: 'Supporting fast decision-making for high-intent users',
  problem: 'Homeowners searching for pressure washing services often do so with immediate intent and limited patience, frequently comparing multiple providers at once.',
  risk: 'If users had to search for key information or next steps, they could delay action or choose a competitor with a clearer path forward.',
  decision: 'Design the experience to support rapid scanning and action within seconds of landing.',
  solution: 'Fast decision-making was supported by:\n\n• Breaking services into short, scannable sections\n• Grouping offerings logically with access to deeper detail when needed\n• Repeating the primary "Request Your Free Estimate" call to action at natural decision points\n• Avoiding dense content blocks that slow evaluation',
  tradeoff: 'Reducing depth on top-level pages required careful prioritization, but improved clarity and reduced friction for first-time visitors.'
}
```

### Decision 3: Reinforcing local relevance in a competitive market

```typescript
{
  title: 'Reinforcing local relevance in a competitive market',
  problem: 'In a crowded local services landscape, homeowners rely heavily on geographic cues to judge relevance and legitimacy.',
  risk: 'Without strong local signals, the business could appear generic or less trustworthy than nearby competitors.',
  decision: 'Integrate location-based context throughout the experience to reinforce regional relevance and authority.',
  solution: 'Local credibility was strengthened by:\n\n• Incorporating county and town references across key pages\n• Aligning service language with regional search intent\n• Structuring content to support both user understanding and local discovery',
  tradeoff: 'Balancing geographic specificity with clean, readable content required restraint, but increased perceived legitimacy.'
}
```

### Decision 4: Designing for mobile-first, on-the-go usage

```typescript
{
  title: 'Designing for mobile-first, on-the-go usage',
  problem: 'Many pressure washing searches occur on mobile devices, often during time-sensitive or last-minute situations.',
  risk: 'Dense layouts, small tap targets, or buried calls to action could prevent users from acting quickly on mobile.',
  decision: 'Optimize the experience for mobile-first usability and ease of interaction.',
  solution: 'Mobile usability was improved by:\n\n• Stacking content vertically for easier scanning\n• Enlarging tap targets and spacing interactive elements\n• Ensuring calls to action remained accessible without excessive navigation',
  tradeoff: 'Simplifying some desktop layouts improved consistency and usability across devices.'
}
```

---

## 0.4 STRATEGY & DESIGN (strategyAndDesign section)

### Location: `/src/lib/caseStudies/caseJpw.ts` - `strategyAndDesign`

**IMPORTANT NOTE:** The new document includes a section titled "0.4 Key UX Strategy & Design Decisions" which maps to the `keyUXDecisions` array (documented above). The EXISTING `strategyAndDesign` section remains in the code but is NOT mentioned in the new document.

**Current State:** The `strategyAndDesign` section currently has:
- `description` array (2 paragraphs)
- `highlights` array (6 items with icons)
- `mockups` array (2 items)

**New Document:** Does not include this section

**Recommendation:** Keep this section as-is since the new document doesn't specify its removal, and it contains mockup references that are still relevant.

---

## 0.5 FINAL REFLECTIONS

### Location: `/src/lib/caseStudies/caseJpw.ts` - `finalReflections`

### Section Header (in document)

**New:** "Final Designs & Reflection"

### Description Field

**Current:**
```typescript
description: [
  'This project demonstrated how thoughtful UX strategy can establish credibility from the ground up — even for a brand with no content, reviews, or digital footprint. By designing for where the business was headed, not just where it was at launch, I helped the client establish a polished digital presence they could confidently grow into.',
  'Final development is currently in progress. All designs shown reflect approved deliverables, and I'm actively collaborating with the developer to bring them to life.'
]
```

**New:**
```typescript
description: [
  'This project demonstrates how UX strategy can establish credibility for a new local service business without reviews, testimonials, or an existing digital footprint. Rather than optimizing solely for launch, the experience was intentionally structured to remain clear, trustworthy, and scalable as the business grows.',
  'The final designs emphasize clarity, perceived professionalism, and ease of action. The experience helps first-time visitors quickly understand services, assess legitimacy, and move confidently toward requesting a quote within a competitive local market.'
]
```

**Change Type:** Complete rewrite maintaining 2-paragraph structure
**What Changed:**

**Paragraph 1:**
- "demonstrated" → "demonstrates" (present tense)
- "thoughtful UX strategy" → "UX strategy" (removed "thoughtful")
- "from the ground up" → new phrasing
- Removed "I helped the client establish a polished digital presence"
- New focus on "intentionally structured to remain clear, trustworthy, and scalable"
- Less personal, more strategic framing

**Paragraph 2:**
- COMPLETE REWRITE
- Old: Talks about development in progress
- New: Describes what the final designs achieve
- More outcome-focused

### SubHeader Field

**Current:**
```typescript
subHeader: 'Final Designs'
```

**New:**
```typescript
subHeader: 'Final Designs'
```

**Change Type:** NO CHANGE

### Achievements Field → Outcomes Field

**Field Name Change:** `achievements` → `outcomes`

**Current:**
```typescript
achievements: [
  'Created a scalable site structure designed to grow with the business',
  'Built a clean, professional brand presence from the ground up',
  'Delivered a responsive, mobile-first layout with strong conversion intent',
  'Designed an SEO-ready architecture with localized content and page structure',
  'Developed strategic content in the absence of branding, portfolio, or testimonials'
]
```

**New:**
```typescript
outcomes: [
  'Established a clear, scalable information structure that can grow alongside the business',
  'Created a professional digital presence without relying on testimonials or portfolio imagery',
  'Supported fast, confident decision-making through a mobile-first experience',
  'Designed an SEO-informed information architecture to strengthen local discovery',
  'Reduced user hesitation through intentional content hierarchy and repeated next steps'
]
```

**Change Type:** Complete rewrite of all 5 items + terminology change
**What Changed:**

1. **Outcome 1:**
   - Old: "Created a scalable site structure designed to grow with the business"
   - New: "Established a clear, scalable information structure that can grow alongside the business"
   - "site structure" → "information structure"
   - "with" → "alongside"
   - Added "clear"

2. **Outcome 2:**
   - Old: "Built a clean, professional brand presence from the ground up"
   - New: "Created a professional digital presence without relying on testimonials or portfolio imagery"
   - "Built" → "Created"
   - "brand presence from the ground up" → "digital presence without relying on testimonials or portfolio imagery"
   - More specific about the constraint addressed

3. **Outcome 3:**
   - Old: "Delivered a responsive, mobile-first layout with strong conversion intent"
   - New: "Supported fast, confident decision-making through a mobile-first experience"
   - "Delivered" → "Supported"
   - "layout with strong conversion intent" → "decision-making through a mobile-first experience"
   - User-benefit focused

4. **Outcome 4:**
   - Old: "Designed an SEO-ready architecture with localized content and page structure"
   - New: "Designed an SEO-informed information architecture to strengthen local discovery"
   - "SEO-ready" → "SEO-informed"
   - "architecture with localized content and page structure" → "information architecture to strengthen local discovery"

5. **Outcome 5:**
   - Old: "Developed strategic content in the absence of branding, portfolio, or testimonials"
   - New: "Reduced user hesitation through intentional content hierarchy and repeated next steps"
   - COMPLETE REWRITE
   - Shifted from constraint to user benefit

### Lessons Field → Reflection Field

**Field Name Change:** `lessons` → `reflection` (Note: In the document header it says "Reflection & Lessons Learned" but items are lessons)

**Actual Field Name:** Keep as `lessons` but section header becomes "Reflection & Lessons Learned"

**Current:**
```typescript
lessons: [
  'Starting with user needs leads to stronger outcomes than chasing visual trends',
  'Content strategy can bridge gaps when visual assets are limited',
  'Clear information architecture is essential for service-based websites',
  'Local SEO considerations should shape site structure from the beginning',
  'Designing for future growth requires conscious, scalable decisions early on'
]
```

**New:**
```typescript
lessons: [
  'Designing for user confidence can offset the absence of traditional trust signals',
  'Clear information architecture plays a critical role in service-based decision-making',
  'Content structure and hierarchy can substitute for missing brand assets in early-stage businesses',
  'Local context should inform both messaging and structural decisions from the outset',
  'Planning for growth requires balancing immediate clarity with long-term scalability'
]
```

**Change Type:** Complete rewrite of all 5 items
**What Changed:**

1. **Lesson 1:**
   - Old: "Starting with user needs leads to stronger outcomes than chasing visual trends"
   - New: "Designing for user confidence can offset the absence of traditional trust signals"
   - Complete rewrite, more specific to project context

2. **Lesson 2:**
   - Old: "Content strategy can bridge gaps when visual assets are limited"
   - New: "Clear information architecture plays a critical role in service-based decision-making"
   - Shifted from content strategy to IA focus

3. **Lesson 3:**
   - Old: "Clear information architecture is essential for service-based websites"
   - New: "Content structure and hierarchy can substitute for missing brand assets in early-stage businesses"
   - More specific about the substitution role

4. **Lesson 4:**
   - Old: "Local SEO considerations should shape site structure from the beginning"
   - New: "Local context should inform both messaging and structural decisions from the outset"
   - Broader: "Local SEO" → "Local context"
   - "from the beginning" → "from the outset"

5. **Lesson 5:**
   - Old: "Designing for future growth requires conscious, scalable decisions early on"
   - New: "Planning for growth requires balancing immediate clarity with long-term scalability"
   - Similar theme, different framing
   - Added "balancing" concept

### Feedback Field

**Current:**
```typescript
feedback: '"The website is everything I envisioned it to be. I understood the challenges during this process but ultimately I am extremely happy with how it all turned out. The website is currently being developed and I am confident once it rolls out business will pick up for us."'
```

**New:**
```typescript
feedback: '"The website is everything I envisioned it to be. I understood the challenges during this process, but I'm extremely happy with how it turned out. I'm confident the site will help the business continue to grow."'
```

**Change Type:** Minor edits
**What Changed:**
- "but ultimately I am" → "but I'm" (contraction)
- "extremely happy with how it all turned out" → "extremely happy with how it turned out" (removed "all")
- Removed: "The website is currently being developed and"
- "I am confident once it rolls out business will pick up for us" → "I'm confident the site will help the business continue to grow"
- Updated to reflect completed state vs. in-development

### Client Field

**Current:**
```typescript
client: 'Owner, Jones Pressure Washing'
```

**New:**
```typescript
client: 'Owner, Jones Pressure Washing'
```

**Change Type:** NO CHANGE

### URL Field

**Current:**
```typescript
url: 'https://www.jonespressurewashingnj.com'
```

**New:**
```typescript
url: 'https://www.jonespressurewashingnj.com'
```

**Change Type:** NO CHANGE (explicitly shown in document: "Live website: https://www.jonespressurewashingnj.com")

### Img Field

**Current:**
```typescript
img: ['/assets/JPW case/JPW_FinalMocks.png']
```

**New:**
```typescript
img: ['/assets/JPW case/JPW_FinalMocks.png']
```

**Change Type:** NO CHANGE (assumed, not specified in document)

---

## SUMMARY OF CHANGES

### Files to Update

1. **`/src/app/works/jones-pressure-washing/page.tsx`**
   - Hero descriptor prop
   - ProblemFraming header prop

2. **`/src/lib/caseStudies/caseJpw.ts`**
   - problemFraming array (3 paragraphs)
   - projectOverview object (all fields)
   - goalsAndChallenges object (rename field, update all content, remove description)
   - researchAndDiscovery object (all fields)
   - keyUXDecisions array (add 4 complete decisions)
   - finalReflections object (rename fields, update all content)

3. **`/src/components/caseStudy/Goals&Challenges.tsx`** (if needed)
   - Update to accept `constraints` prop name (or keep as `challenges` and just update the data)
   - Section header may need update to "Constraints"

### Change Statistics

- **Hero:** 1 complete rewrite
- **Problem Framing:** 1 header rewrite, 1 minor edit, 1 complete rewrite, 1 moderate rewrite
- **Project Overview:** 6 field updates (context consolidated, roles expanded, tools clarified, deliverables rewritten)
- **Goals & Constraints:** Field rename, description removed, 5 goals rewritten, 4 constraints rewritten
- **Research:** 2→3 paragraph restructure, quote punctuation fixes, 5 takeaways rewritten
- **Key UX Decisions:** 4 complete new decision objects (was empty array)
- **Final Reflections:** 2 field renames, 2 description paragraphs rewritten, 5 outcomes rewritten, 5 lessons rewritten, 1 feedback edit

### Total Changes
- **Sections with changes:** 7 out of 7
- **Complete rewrites:** ~60% of content
- **Field additions:** 4 UX decisions (new content)
- **Field removals:** 1 (description in goals)
- **Field renames:** 2 (challenges→constraints, achievements→outcomes)
