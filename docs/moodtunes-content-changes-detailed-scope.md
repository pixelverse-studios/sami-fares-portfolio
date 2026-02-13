# MoodTunes Case Study - Detailed Content Changes Scope

**Date:** 2026-02-13
**Epic:** TBD
**Comparison:** Current code vs. User-provided document

---

## HERO SECTION

### Location: `/src/app/works/moodtunes/page.tsx`

**Current:**
```
descriptor="Designing a music discovery experience that curates playlists based on mood, energy, and activity."
```

**New:**
```
descriptor="Designing a music discovery experience that adapts to how you feel in the moment.\n(Conceptual product design project)"
```

**Change Type:** Complete rewrite with addition
**What Changed:**
- Removed: "that curates playlists based on mood, energy, and activity"
- Added: "that adapts to how you feel in the moment"
- Added subtitle: "(Conceptual product design project)"
- Shift from feature description to user benefit
- More concise, personal language ("how you feel" vs. "mood, energy, and activity")

---

## 0.0 PROBLEM FRAMING

### Section Header

**Location:** `/src/app/works/moodtunes/page.tsx`

**Current:**
```
header="Problem Framing - Music that Matches the Moment"
```

**New:**
```
header="Problem Framing – Music That Matches the Moment"
```

**Change Type:** Minor punctuation change
**What Changed:**
- Changed separator from " - " to " – " (em dash)
- "that" → "That" (capitalization)

### Paragraph 1

**Location:** `/src/lib/caseStudies/caseMood.tsx` - `problemFraming[0]`

**Current:**
```
Users often feel disconnected from the music recommendations they receive. Traditional streaming algorithms focus on past behavior and general taste — but don't account for real-time context like mood, energy level, or activity. As a result, users find themselves replaying the same playlists for workouts, focus, or relaxation, and are rarely exposed to new or local artists.
```

**New:**
```
Music streaming platforms are highly effective at recommending content based on past listening behavior. Over time, this creates familiarity, but it often limits discovery and emotional relevance.
Users frequently return to the same playlists for focus, workouts, or relaxation because existing systems are optimized around history, not real-time context. When mood, energy, or intent changes, users are left to manually search, filter, or settle for music that only partially fits the moment.
This project explores a different approach to music discovery, one that starts with how a user feels right now, rather than what they've listened to before.
```

**Change Type:** Complete rewrite - 1 paragraph → 3 paragraphs
**What Changed:**
- **Paragraph 1 (NEW):**
  - Opens with acknowledgment of platform effectiveness (more balanced)
  - "Traditional streaming algorithms" → "Music streaming platforms"
  - Reframes problem as trade-off: "creates familiarity, but it often limits discovery"

- **Paragraph 2 (REWRITTEN):**
  - Old: "As a result, users find themselves replaying the same playlists..."
  - New: "Users frequently return to the same playlists..."
  - Added explanation: "because existing systems are optimized around history, not real-time context"
  - Added consequence: "When mood, energy, or intent changes, users are left to manually search, filter, or settle for music that only partially fits the moment"
  - More specific about user friction points

- **Paragraph 3 (NEW):**
  - Completely new closing statement
  - Introduces project positioning: "This project explores a different approach..."
  - Clear contrast: "how a user feels right now" vs. "what they've listened to before"

### Paragraph 2

**Current:**
```
Moodtunes addresses this by letting users select how they feel in the moment and generating playlists that match that energy — while subtly surfacing local artists they might otherwise miss.
```

**New:**
```
[REMOVED - This paragraph is not in the new version]
```

**Change Type:** Complete removal
**What Changed:**
- Entire solution-focused paragraph removed
- Old paragraph mentioned local artists feature - no longer emphasized upfront
- New version ends with problem/opportunity framing instead of solution preview

---

## 0.1 PROJECT OVERVIEW

### Location: `/src/lib/caseStudies/caseMood.tsx` - `projectOverview`

### Context Field

**Current:**
```typescript
context: [
  'Moodtunes is a conceptual mobile music app designed to improve how users discover playlists that reflect their real-time mood, energy level, or activity. Unlike traditional platforms that rely on taste history or engagement patterns, Moodtunes takes a user-centered approach — letting users guide their listening experience based on how they feel in the moment.',
  'This project was initiated to expand my portfolio beyond client websites and explore the full product design process. I led all UX and UI design, including research, user flows, wireframes, and high-fidelity mockups. The app also introduces an additional layer of value by subtly promoting local artists, giving them visibility through emotionally aligned playlists.',
  'Moodtunes allowed me to apply emotional design thinking, mobile-first UX, and product strategy within a realistic scope, while experimenting with new patterns of discovery in the music space.'
]
```

**New:**
```typescript
context: [
  'Moodtunes is a conceptual mobile music app exploring how music discovery can adapt to a user's current mood, energy level, or activity. Rather than relying primarily on listening history, the concept centers on giving users a simple way to express how they feel in the moment and receive playlists aligned to that context.',
  'This project was created as a self-initiated product exploration, allowing me to focus on product thinking, emotional UX, and mobile-first interaction design within a deliberately scoped concept.',
  'Moodtunes served as a way to explore alternative discovery patterns in the music space without attempting to design a fully production-ready application.'
]
```

**Change Type:** Complete rewrite maintaining 3-paragraph structure
**What Changed:**

**Paragraph 1:**
- "designed to improve" → "exploring how music discovery can adapt"
- More exploratory language vs. solution language
- "Unlike traditional platforms that rely on taste history or engagement patterns" → "Rather than relying primarily on listening history"
- Simpler contrast statement
- "Moodtunes takes a user-centered approach — letting users guide their listening experience" → "the concept centers on giving users a simple way to express how they feel"
- Emphasis on simplicity and expression
- Removed local artists mention

**Paragraph 2:**
- "This project was initiated to expand my portfolio beyond client websites and explore the full product design process" → "This project was created as a self-initiated product exploration, allowing me to focus on product thinking, emotional UX, and mobile-first interaction design"
- Less about portfolio building, more about skill focus
- Removed: "I led all UX and UI design, including research, user flows, wireframes, and high-fidelity mockups"
- Removed: Local artists mention
- "within a realistic scope" → "within a deliberately scoped concept"

**Paragraph 3:**
- COMPLETELY NEW paragraph
- "Moodtunes allowed me to apply emotional design thinking..." → "Moodtunes served as a way to explore alternative discovery patterns..."
- New ending clarifies scope: "without attempting to design a fully production-ready application"
- Sets clearer expectations about project nature

### Roles Field

**Current:**
```typescript
roles: ['UI/UX Designer', 'Copywriter']
```

**New:**
```typescript
roles: ['UI/UX Designer', 'Product Thinking', 'Copywriting']
```

**Change Type:** Minor modification
**What Changed:**
- "Copywriter" → "Copywriting" (noun form)
- Added: "Product Thinking"
- 2 roles → 3 roles

### Timeline Field

**Current:**
```typescript
timeline: '8 Weeks'
```

**New:**
```typescript
timeline: '8 weeks'
```

**Change Type:** Minor capitalization change
**What Changed:**
- "8 Weeks" → "8 weeks" (lowercase "weeks")

### Tools Field

**Current:**
```typescript
tools: ['Figma', 'Web Research', 'ChatGPT']
```

**New:**
```typescript
tools: ['Figma', 'Web Research', 'AI-assisted ideation']
```

**Change Type:** Minor terminology change
**What Changed:**
- "ChatGPT" → "AI-assisted ideation"
- More generic/professional language
- Describes the activity rather than the specific tool

### Deliverables Field

**Current:**
```typescript
deliverables: ['User Flows', 'Wireframes', 'High-Fidelity Mockups']
```

**New:**
```typescript
deliverables: [
  'Key user flows',
  'Conceptual wireframes',
  'Selected high-fidelity screens'
]
```

**Change Type:** Rewrites with added qualifiers
**What Changed:**
- "User Flows" → "Key user flows" (scoped)
- "Wireframes" → "Conceptual wireframes" (clarified nature)
- "High-Fidelity Mockups" → "Selected high-fidelity screens" (scoped + terminology)
- Lowercase styling throughout
- All items qualified to indicate partial/selective scope

---

## 0.2 GOALS & CHALLENGES

### Location: `/src/lib/caseStudies/caseMood.tsx` - `goalsAndChallenges`

### Section Structure Change

**Current Structure:**
- `description` field (2 paragraphs)
- `goals` field (3 items)
- `challenges` field (2 items)

**New Structure:**
- Single conceptual section titled "UX Hypothesis: Designing for Mood, Energy, and Intent"
- No traditional goals/challenges format

**CRITICAL NOTE:** The new document REPLACES the traditional goals/challenges section with a UX Hypothesis narrative. This is a complete structural change.

### Current Description Field

**Current:**
```typescript
description: [
  'The goal behind Moodtunes was to explore how music discovery could shift from algorithm-driven suggestions to real-time emotional curation. I wanted to create an experience that respected how users feel in the moment, not just what they've historically liked — while also giving local artists more visibility in a space dominated by mainstream data.',
  'To strengthen emotional alignment, the playlist logic also draws inspiration from how certain frequencies can trigger psychological responses — calming, energizing, or focusing the listener. This helped inform both the tone of the UI and the intent behind curated playlist groupings.'
]
```

**New Content:**
```
Moodtunes explores the hypothesis that music discovery becomes more meaningful when users can express how they feel in the moment, rather than relying solely on past listening behavior.

Drawing from my background in music and sound design, I explored how elements such as tempo, energy level, and overall sonic character influence emotional and cognitive states like focus, relaxation, or motivation. While Moodtunes does not attempt to model these relationships scientifically, the concept uses these principles as directional inputs to guide playlist grouping and UI tone.

The goal was not to overwhelm users with controls, but to create a lightweight interaction that allows them to signal intent quickly and receive music that feels emotionally aligned. This hypothesis informed both the structure of the input flow and the overall pacing, color, and density of the interface.

Because Moodtunes is a conceptual project, design decisions were evaluated based on clarity, emotional resonance, and internal UX logic rather than performance metrics or live user testing.
```

**Change Type:** Complete structural replacement
**What Changed:**
- Section title changes from "Project Goals and Challenges" to "UX Hypothesis: Designing for Mood, Energy, and Intent"
- Description field should be replaced with new narrative
- **Paragraph 1 (NEW):** Opens with hypothesis statement
- **Paragraph 2:**
  - Old: "To strengthen emotional alignment, the playlist logic also draws inspiration from how certain frequencies can trigger psychological responses"
  - New: "Drawing from my background in music and sound design, I explored how elements such as tempo, energy level, and overall sonic character influence emotional and cognitive states"
  - Added personal background context
  - Added disclaimer: "While Moodtunes does not attempt to model these relationships scientifically, the concept uses these principles as directional inputs"
  - More cautious, less definitive language
- **Paragraph 3 (NEW):** Explains design intent ("not to overwhelm users")
- **Paragraph 4 (NEW):** Clarifies evaluation criteria for conceptual work

### Current Goals Field

**Current:**
```typescript
goals: [
  'Create a fast and frictionless flow where users can select their mood and receive music instantly — without needing to search, filter, or dig through menus.',
  'Balance emotional depth with simplicity, ensuring the design feels reactive and supportive, not overwhelming.',
  'Build a system that introduces local or lesser-known artists in a subtle, non-intrusive way — integrated into the flow, not tacked on.'
]
```

**New:**
```
[REMOVED - No separate goals list in new structure]
```

**Change Type:** Complete removal
**What Changed:**
- Traditional goals list removed
- Goals are now woven into hypothesis narrative
- Some concepts preserved (fast flow, emotional depth) but not as bullet points

### Current Challenges Field

**Current:**
```typescript
challenges: [
  'No live user testing was conducted, so design decisions were informed by competitive review, informal feedback, and UX best practices.',
  'Because the app is conceptual, flows were designed to demonstrate clear UX logic and visual consistency, rather than functioning as a fully scoped MVP.'
]
```

**New:**
```
[REMOVED - Addressed in final paragraph of hypothesis section]
```

**Change Type:** Integrated into narrative
**What Changed:**
- Challenges list removed as discrete field
- Constraint about conceptual nature addressed in hypothesis closing paragraph
- Less defensive framing

---

## 0.3 RESEARCH & DISCOVERY

### Location: `/src/lib/caseStudies/caseMood.tsx` - `researchAndDiscovery`

### Section Title

**New Title:** "Concept Validation & Design Inputs"

### Description Field

**Current:**
```typescript
description: [
  'To ground the concept in real user needs, I evaluated how current music platforms approach discovery. I reviewed Spotify, Pandora, and SoundCloud, focusing on how they match music to user context.',
  [JSX WITH BULLETED LIST - 3 items about Spotify, Pandora, SoundCloud],
  'These gaps revealed a clear opportunity: design a mobile experience that meets users where they are emotionally and mentally — not just musically. By giving users a simple way to express how they feel or what they're doing, we can help them discover music that's right for that moment. And by embedding local artist discovery into that flow, Moodtunes offers something that feels personal, fresh, and intentional.'
]
```

**New:**
```typescript
description: [
  'Rather than conducting formal user research, I used lightweight validation to ground the concept in observable behavior. This included reviewing how existing music platforms approach discovery and identifying where those experiences fall short when users want music that fits their current mood or activity.',
  'Across platforms, discovery systems are highly optimized for familiarity and past listening behavior, but provide limited ways for users to express intent in the moment. When mood or energy changes, users are often left to manually search, reuse old playlists, or compromise with music that only partially fits how they feel.',
  'These observations reinforced the direction behind Moodtunes and informed the interaction model. Instead of competing on depth or personalization, the concept focuses on a simple input flow that allows users to quickly signal intent and begin listening.'
]
```

**Change Type:** Complete rewrite - 3 items → 3 paragraphs (removes JSX list)
**What Changed:**

**Paragraph 1:**
- Old: "To ground the concept in real user needs, I evaluated how current music platforms approach discovery"
- New: "Rather than conducting formal user research, I used lightweight validation to ground the concept in observable behavior"
- Acknowledges lack of formal research upfront
- "reviewing how existing music platforms approach discovery and identifying where those experiences fall short"
- No longer names specific platforms (Spotify, Pandora, SoundCloud)
- Removed JSX bulleted list entirely

**Paragraph 2:**
- COMPLETELY NEW
- Synthesizes findings without platform-specific details
- "discovery systems are highly optimized for familiarity and past listening behavior, but provide limited ways for users to express intent"
- More concise, pattern-focused vs. platform-specific

**Paragraph 3:**
- Old: "These gaps revealed a clear opportunity: design a mobile experience that meets users where they are emotionally and mentally"
- New: "These observations reinforced the direction behind Moodtunes and informed the interaction model"
- Less promotional: "opportunity" → "reinforced the direction"
- Removed: Local artist discovery mention
- New ending: "Instead of competing on depth or personalization, the concept focuses on a simple input flow"
- Clearer about trade-offs

### Takeaways Field

**Current:**
```typescript
takeaways: [
  'Existing platforms lack contextual awareness in music recommendations.',
  'Users crave novelty but don't want to sacrifice relevance or mood alignment.',
  'There's a growing interest in discovering local/independent artists, but visibility is low.',
  'Over-personalization in music platforms leads to repetitive listening habits, reducing discovery over time.',
  'Users often associate music with productivity, emotion regulation, or identity — but current apps don't let them signal these needs directly.'
]
```

**New:**
```
[REMOVED - No takeaways list in new structure]
```

**Change Type:** Complete removal
**What Changed:**
- Takeaways list completely removed
- Insights now integrated into narrative description
- No discrete bullet points

### Quote & Author Fields

**Current:**
```typescript
quote: '',
author: ''
```

**New:**
```
[REMAINS EMPTY]
```

**Change Type:** NO CHANGE
**What Changed:** Stays empty

### Mockups Field

**Current:**
```typescript
mockups: [
  {
    imgs: [
      '/assets/MoodTunes/homeWF.png',
      '/assets/MoodTunes/playlistWF.png'
    ],
    explanation: 'Early wireframes showcasing the Homepage and personalized mix'
  }
]
```

**New:**
```
[REMOVED - No mockups in this section in new structure]
```

**Change Type:** Complete removal
**What Changed:**
- Mockups removed from Research section
- May appear in other sections instead

---

## 0.4 KEY UX DECISIONS

### Location: `/src/lib/caseStudies/caseMood.tsx` - `keyUXDecisions`

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

**NOTE:** The new document titles this section "Interaction Model & Key Design Decisions" but it maps to the `keyUXDecisions` array structure.

### Decision 1: Replacing search with a mood-first entry point

```typescript
{
  title: 'Replacing search with a mood-first entry point',
  problem: '[Not provided in new document]',
  risk: '[Not provided in new document]',
  decision: 'Instead of relying on search, genres, or artist selection, the experience begins with mood and activity inputs.',
  solution: 'This intentionally removes precision in favor of speed, acknowledging that users often know how they feel faster than they can describe what they want to hear.',
  tradeoff: '[Implicit in solution text]'
}
```

**NOTE:** New document provides decision + rationale, not the full problem/risk/decision/solution/tradeoff structure used in JPW case study. May need to adapt to fit existing KeyUXDecisions component or revise component to accept simplified format.

### Decision 2: Treating energy as a spectrum, not a category

```typescript
{
  title: 'Treating energy as a spectrum, not a category',
  problem: '[Not provided]',
  risk: '[Not provided]',
  decision: 'Energy was designed as a continuous slider rather than preset labels.',
  solution: 'This avoided forcing users into rigid states and allowed for subtle adjustment without introducing additional controls or decision overhead.',
  tradeoff: '[Implicit in solution]'
}
```

### Decision 3: Limiting visible choice after playlist generation

```typescript
{
  title: 'Limiting visible choice after playlist generation',
  problem: '[Not provided]',
  risk: '[Not provided]',
  decision: 'Once a playlist is created, the interface minimizes visible options.',
  solution: 'This was a deliberate tradeoff: reducing control in order to encourage listening and maintain momentum, rather than pulling users back into browsing behaviors.',
  tradeoff: 'reducing control in order to encourage listening and maintain momentum'
}
```

### Decision 4: Integrating local artists without dedicated discovery surfaces

```typescript
{
  title: 'Integrating local artists without dedicated discovery surfaces',
  problem: '[Not provided]',
  risk: '[Not provided]',
  decision: 'Local artists were surfaced through subtle labels within playlists instead of standalone sections.',
  solution: 'This allowed discovery to occur passively, without shifting attention away from the user's original intent or reframing the experience around exploration.',
  tradeoff: '[Implicit in solution]'
}
```

**IMPLEMENTATION NOTE:** The new content does not follow the problem/risk/decision/solution/tradeoff structure. The KeyUXDecisions component may need to be updated to accept a more flexible format, OR we need to synthesize missing fields from the provided text.

---

## 0.4 STRATEGY & DESIGN (strategyAndDesign section)

### Location: `/src/lib/caseStudies/caseMood.tsx` - `strategyAndDesign`

**IMPORTANT NOTE:** The new document does NOT include a traditional "Strategy & Design" section. The existing `strategyAndDesign` section in the code has:
- `description` array (1 paragraph)
- `highlights` array (4 items with icons)
- `mockups` array (1 item)

**New Document:** Does not reference this section

**Recommendation:** This section may need to be removed or replaced with the Key UX Decisions content. The mockups reference should be preserved somewhere (possibly moved to Final Reflections).

---

## 0.5 FINAL REFLECTIONS

### Location: `/src/lib/caseStudies/caseMood.tsx` - `finalReflections`

### Section Header (in document)

**New:** "Final Reflection"

### Description Field

**Current:**
```typescript
description: [
  'MoodTunes was designed as a passion project to explore product-focused UX beyond marketing websites. The challenge was to create a more emotionally intelligent music experience — one that responds to how users feel in the moment, not just what they've liked in the past.',
  'Working solo, I handled the full process from concept to UI delivery, using research, user flows, low-fidelity wireframes, and high-fidelity mockups to bring the idea to life. The result is a context-aware listening experience that curates music by energy, mood, and activity — while giving visibility to underrepresented local artists.'
]
```

**New:**
```typescript
description: [
  'This project reinforced my approach to product UX when working without formal data, testing infrastructure, or production constraints. Rather than attempting to simulate a full build, I focused on making deliberate interaction choices, defining clear boundaries, and designing only what was necessary to support the core experience.',
  'MoodTunes strengthened my confidence in designing through abstraction, making tradeoffs early, and resisting the urge to over-specify solutions. It also reinforced the importance of aligning interface complexity with user intent, especially in experiences meant to support background or emotional states rather than direct task completion.'
]
```

**Change Type:** Complete rewrite maintaining 2-paragraph structure
**What Changed:**

**Paragraph 1:**
- Old: "MoodTunes was designed as a passion project to explore product-focused UX beyond marketing websites"
- New: "This project reinforced my approach to product UX when working without formal data, testing infrastructure, or production constraints"
- Shift from "passion project" to methodological reflection
- No longer mentions "marketing websites"
- Removed: "The challenge was to create a more emotionally intelligent music experience"
- New focus: "making deliberate interaction choices, defining clear boundaries, and designing only what was necessary"

**Paragraph 2:**
- Old: "Working solo, I handled the full process from concept to UI delivery, using research, user flows, low-fidelity wireframes, and high-fidelity mockups"
- New: "MoodTunes strengthened my confidence in designing through abstraction, making tradeoffs early, and resisting the urge to over-specify solutions"
- Removed deliverables list
- Removed: "context-aware listening experience that curates music by energy, mood, and activity"
- Removed: Local artists mention
- New focus: "aligning interface complexity with user intent, especially in experiences meant to support background or emotional states"
- More meta-cognitive, less descriptive

### SubHeader Field

**Current:**
```typescript
subHeader: 'Final Designs'
```

**New:**
```typescript
subHeader: '[Not specified - possibly removed or changed to "What This Project Demonstrates"]'
```

**Change Type:** Possible removal or change
**What Changed:**
- New document includes "What This Project Demonstrates" section
- Not clear if this replaces or supplements "Final Designs"

### Achievements Field

**Current:**
```typescript
achievements: [
  'Developed a complete user flow from onboarding to playlist discovery to artist exploration',
  'Created wireframes and high-fidelity mockups across mobile',
  'Built a scalable system for mood-based curation and discovery',
  'Designed lightweight UX elements to highlight local artists without disrupting flow'
]
```

**New:**
```typescript
// NEW SECTION: "What This Project Demonstrates"
[
  'Ability to make confident design decisions without relying on exhaustive research or metrics',
  'Strong judgment around scope, restraint, and feature prioritization',
  'Comfort designing systems based on qualitative reasoning and domain knowledge',
  'Cross-domain thinking, applying an understanding of sound and emotional response to interaction design',
  'Ownership of product thinking from concept through interface execution'
]
```

**Change Type:** Complete conceptual replacement
**What Changed:**
- Old: Listed deliverables/outputs ("Developed a complete user flow...")
- New: Lists demonstrated capabilities ("Ability to make confident design decisions...")
- Shift from what was made to what skills were demonstrated
- More focused on designer capabilities than project outputs
- Field name should possibly change from `achievements` to `demonstrates` or similar

### Lessons Field

**Current:**
```typescript
lessons: [
  'Emotion-based UX benefits from simplified input and high-contrast feedback',
  'Wireframing complex cases (like label spacing or playlist logic) saved time in high-fi',
  'Product case studies offer more layered storytelling opportunities than web projects',
  'Practiced translating emotion-rich research into actionable design decisions',
  'Solo concept work still benefits from real-world flow prioritization and UX writing'
]
```

**New:**
```
[REMOVED - No lessons section in new structure]
```

**Change Type:** Complete removal
**What Changed:**
- Lessons list removed entirely
- Reflection is now in description field
- No discrete lessons bullets

### Feedback Field

**Current:**
```typescript
feedback: '',
client: ''
```

**New:**
```
[REMAINS EMPTY - Conceptual project has no client feedback]
```

**Change Type:** NO CHANGE
**What Changed:** Stays empty

### URL Field

**Current:**
```typescript
url: ''
```

**New:**
```
[REMAINS EMPTY]
```

**Change Type:** NO CHANGE

### Img Field

**Current:**
```typescript
img: [
  '/assets/MoodTunes/HomeScreen.png',
  '/assets/MoodTunes/Playlist.png',
  '/assets/MoodTunes/ArtistProfile.png'
]
```

**New:**
```
[NOT SPECIFIED - Likely unchanged]
```

**Change Type:** Assumed NO CHANGE
**What Changed:** Document doesn't specify image changes, assume existing mockups remain

---

## SUMMARY OF CHANGES

### Files to Update

1. **`/src/app/works/moodtunes/page.tsx`**
   - Hero descriptor prop (add subtitle about conceptual project)
   - ProblemFraming header prop (em dash + capitalization)

2. **`/src/lib/caseStudies/caseMood.tsx`**
   - problemFraming array (1 paragraph → 3 paragraphs, complete rewrite)
   - projectOverview object (all 3 context paragraphs rewritten, minor field updates)
   - goalsAndChallenges object (MAJOR STRUCTURAL CHANGE: remove traditional format, replace with hypothesis narrative)
   - researchAndDiscovery object (description rewritten, remove takeaways, remove mockups)
   - keyUXDecisions array (add 4 decisions, but simplified format vs. JPW structure)
   - strategyAndDesign object (possibly remove or integrate into keyUXDecisions)
   - finalReflections object (description rewritten, achievements → demonstrates, remove lessons)

3. **Component Considerations:**
   - **`Goals&Challenges.tsx`**: May need to handle new narrative format instead of goals/challenges lists
   - **`KeyUXDecisions.tsx`**: May need to accept simplified decision format (not full problem/risk/solution/tradeoff)
   - **`FinalReflections.tsx`**: May need to handle "What This Project Demonstrates" section

### Structural Changes

**CRITICAL CHANGES TO SECTION ARCHITECTURE:**

1. **Goals & Challenges → UX Hypothesis**
   - Traditional goals/challenges list replaced with narrative hypothesis
   - No discrete bullet points
   - More exploratory, less prescriptive language

2. **Research & Discovery → Concept Validation**
   - Section title change
   - No takeaways list
   - No platform-specific competitive analysis details
   - Shorter, more synthesized content

3. **Key UX Decisions - New Format**
   - Simplified structure: title + decision + rationale
   - Not the full problem/risk/decision/solution/tradeoff format
   - May require component update or data transformation

4. **Final Reflections - Meta-Cognitive Focus**
   - "Achievements" → "What This Project Demonstrates"
   - Focus on skills demonstrated, not deliverables
   - No lessons list
   - More reflective on process

### Change Statistics

- **Hero:** 1 complete rewrite + subtitle addition
- **Problem Framing:** 1 header minor change, complete content rewrite (1 paragraph → 3 paragraphs)
- **Project Overview:** 3 context paragraphs rewritten, 4 field updates (roles, timeline, tools, deliverables)
- **Goals & Challenges:** COMPLETE STRUCTURAL REPLACEMENT (goals/challenges → UX hypothesis narrative)
- **Research & Discovery:** Section title change, description rewrite (removes platform details), remove takeaways list, remove mockups
- **Key UX Decisions:** 4 new decisions added (simplified format, not full structure)
- **Strategy & Design:** Section status unclear (not in new document - possibly remove)
- **Final Reflections:** 2 description paragraphs rewritten, achievements → demonstrates (content completely changed), lessons removed

### Total Changes

- **Sections with changes:** 7 out of 7
- **Complete rewrites:** ~75% of content
- **Structural changes:** 3 major (Goals/Challenges, Research, Final Reflections format)
- **Field additions:** 4 UX decisions (new content)
- **Field removals:** takeaways, mockups (from research), lessons, description (from goals)
- **Section title changes:** 2 (Research → Concept Validation, Goals → UX Hypothesis)
- **Content philosophy shift:** More exploratory, conceptual, and capability-focused vs. deliverable-focused

### Tone & Voice Shifts

**Throughout the document:**
- **Old:** Solution-focused, portfolio presentation, "I created/delivered"
- **New:** Exploration-focused, design thinking process, "I explored/considered"
- **Old:** Emphasizes outputs and deliverables
- **New:** Emphasizes capabilities and decision-making process
- **Old:** Promotes features (local artist discovery)
- **New:** Clarifies scope limitations and conceptual nature
- **Old:** Definitive statements about user needs
- **New:** Observational, hypothesis-driven language

### Implementation Complexity

**Low Complexity:**
- Hero descriptor
- Section header changes
- Field value updates (timeline, tools, roles)

**Medium Complexity:**
- Problem Framing rewrite (1→3 paragraphs)
- Project Overview context rewrites
- Research description rewrite

**High Complexity:**
- Goals & Challenges structural replacement (may need component update)
- Key UX Decisions simplified format (may need component update)
- Final Reflections conceptual shift (achievements → demonstrates)
- Possible removal of Strategy & Design section

**Required Component Analysis:**
- Review `Goals&Challenges.tsx` to see if it can handle narrative format
- Review `KeyUXDecisions.tsx` to see if simplified decision format works
- Confirm what to do with existing `strategyAndDesign` content
