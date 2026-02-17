/**
 * Domani Case Study Data - Custom Implementation
 *
 * This case study uses a custom structure different from other case studies
 * to reflect Domani's unique positioning as a live product with iterative UX decisions.
 */

// ============================================================================
// Product Context & Design Challenge
// ============================================================================
const productContext = {
  paragraphs: [
    'Domani is a task planning app designed around a specific moment: planning the night before. The core idea was to create a focused alternative to bloated productivity tools that attempt to do everything, often overwhelming users and undermining follow-through.',
    'Users want to feel calm, focused, and in control as they plan their day. However, many planning and productivity tools emphasize task density, reminders, and rigid workflows, which can increase stress rather than reduce it.',
    "The insight driving Domani is that execution struggles often stem from planning at the wrong time. When users plan in the moment (rushed, reactive, already stressed) they make decisions they don't trust. Domani separates planning from execution intentionally, built on the principle that decisions made while calm lead to better follow-through than decisions made under pressure.",
    'The challenge was to design a system that:'
  ],
  challenges: [
    'Helps users make decisions without overthinking',
    'Encourages follow-through without pressure',
    'Separates planning from execution to reduce cognitive load',
    'Feels supportive rather than demanding'
  ]
}

// ============================================================================
// Product Hypothesis
// ============================================================================
const productHypothesis = {
  hypothesis: [
    "Planning the night before helps users start the day with clarity instead of hesitation. When morning arrives, there's no need to second-guess or debate priorities because decisions were already made while calm and clear-headed.",
    'Domani supports execution by helping users trust those prior decisions. The product is intentionally designed to reduce re-planning, minimize choice during execution, and reinforce commitment rather than constant adjustment.'
  ]
}

// ============================================================================
// Key UX Decisions & Iterations
// ============================================================================
const keyUXDecisions = {
  intro:
    'Each design decision was driven by user feedback and a commitment to maintaining calm, intentional planning.',
  decisions: [
    {
      number: 1,
      title: 'Moving away from a "tech startup" visual tone',
      problem:
        "The app's color palette shifted from a dark, high-contrast purple to a lighter sage-green palette.",
      explanation:
        'Feedback on early designs indicated the darker palette felt too "tech startup" and productivity-driven, which conflicted with Domani\'s goal of supporting calm, reflective planning and habit formation.',
      solution:
        'The palette was adjusted to feel more lifestyle-oriented and approachable, reinforcing Domani as a habit-building tool rather than a high-pressure productivity app.',
      mockupBefore: '/assets/Domani/Decision1_Before.png',
      mockupAfter: '/assets/Domani/Decision1_After.png'
    },
    {
      number: 2,
      title: 'Evolving the task priority model',
      problem:
        'The priority system evolved from a simple High / Medium / Low model into a four-tier structure with a single capped Top Priority task.',
      explanation:
        'Early versions limited users to one "High" priority task per day. Feedback revealed this didn\'t reflect real planning behavior, as many users legitimately consider multiple tasks high priority.',
      solution:
        'The restriction on high-priority tasks was removed, and a single Top Priority was introduced and capped at one per day. This preserved flexibility while still encouraging users to identify the most important outcome for the day.',
      mockup: '/assets/Domani/Decision2.png'
    },
    {
      number: 3,
      title: 'Separating planning from execution',
      problem:
        'Planning and execution were intentionally separated into distinct experiences rather than combined into a single screen or flow.',
      explanation:
        'Planning and execution occur in different mental states. Planning is reflective and calm, while execution is reactive and time-sensitive. Combining both increased friction and encouraged re-prioritization.',
      solution:
        'Users plan tasks the night before, then return the next day to a focused execution view. Each mode is designed around its specific needs: intention during planning and momentum during execution.',
      outcome:
        'This separation reduced morning decision fatigue and reinforced trust in previously made decisions.',
      mockupLeft: '/assets/Domani/Decision3_Planning.png',
      mockupRight: '/assets/Domani/Decision3_Execution.png'
    },
    {
      number: 4,
      title: 'Balancing reminders without increasing anxiety',
      problem:
        'Reminders were designed to support follow-through without creating pressure, while allowing users to opt in when needed.',
      explanation:
        'Many productivity apps rely on aggressive notifications, which can increase anxiety and avoidance. Feedback showed users wanted reminders, but only when they felt helpful.',
      solution:
        'Instead of enforcing reminders by default, Domani introduced optional, user-defined reminders at the task level. This preserved a calm core experience while supporting individual planning styles.',
      outcome:
        'Users who wanted reminders could enable them, while others could rely on their original plan without feeling monitored or pressured.'
    }
  ]
}

// ============================================================================
// Reflection
// ============================================================================
const reflection = {
  paragraphs: [
    'Domani is currently live in public beta, with a full launch planned in the coming weeks. The product was designed from the ground up as a focused alternative to bloated task managers, prioritizing clarity, restraint, and habit formation over feature density.',
    'Design decisions throughout the project were guided by emotional timing rather than optimization metrics. Planning happens at night, when users are calmer and more reflective. Execution happens later, when the goal is momentum, not decision-making. Each interaction was shaped to respect those different mental states.',
    'Rather than relying on aggressive reminders or complex systems, Domani supports follow-through by helping users trust the decisions they already made. The result is a lightweight experience that feels supportive instead of demanding, and intentional rather than prescriptive.'
  ]
}

// ============================================================================
// Key Challenges & Learnings
// ============================================================================
const challengesLearnings = {
  challenges: [
    {
      title:
        'Learning to separate actionable feedback from subjective preference',
      description:
        'Receiving feedback at scale during public beta surfaced a wide range of opinions and feature requests. Not all feedback pointed to a real problem, and many suggestions reflected personal preference rather than underlying user need.',
      takeaway:
        'I learned to slow down, look for patterns, and validate whether feedback addressed the root issue before deciding if it warranted a design change.'
    },
    {
      title: 'Re-centering on the perspective of first-time users',
      description:
        'Deep familiarity with the product occasionally clouded design judgment. When flows began to feel obvious to me but confusing to others, I had to consciously step back and design from the perspective of users encountering the app for the first time.',
      takeaway:
        'This helped realign decisions around clarity rather than internal logic.'
    }
  ]
}

// ============================================================================
// What This Project Demonstrates
// ============================================================================
const projectDemonstrates = {
  capabilities: [
    'End-to-end product design ownership from problem framing through live beta',
    'Strong judgment around simplifying experiences instead of adding features',
    'Ability to design for emotional context, not just functional requirements',
    "Comfort iterating based on feedback without losing the product's core intent",
    'Close collaboration with engineering while leading UX decisions'
  ]
}

// ============================================================================
// What's Next
// ============================================================================
const whatsNext = {
  paragraph:
    'As Domani approaches full launch, the focus will be on refining interactions, learning from real usage patterns, and strengthening the habit loop without increasing cognitive load. Future iterations will continue to prioritize calm, clarity, and intentional use.'
}

// ============================================================================
// Reusable Class Constants (Theme-Specific Styling)
// ============================================================================
export const domaniClasses = {
  // Layout
  content: 'md:max-w-[70vw] mx-auto',

  // Section Variants
  section: 'bg-background text-text-heading',
  sectionAlt: 'bg-background-section text-text-heading',
  sectionSage: 'bg-background-subtle text-text-heading',
  sectionDark: 'bg-gradient-dark text-white',

  // Cards
  card: 'bg-background-section border border-[var(--border-subtle)] rounded-xl',
  cardWhite:
    'bg-background-card border border-[var(--border-subtle)] rounded-xl',
  cardGlass:
    'bg-[var(--white-60)] backdrop-blur border border-[var(--white-20)] rounded-xl',

  // Typography
  heading: 'text-text-heading',
  body: 'text-text-body',
  accent: 'text-primary',

  // Badges & Tags
  badge:
    'bg-[var(--sage-10)] text-primary-dark border border-[var(--sage-20)] rounded-full px-3 py-1',
  badgeSage:
    'bg-background-subtle border border-[var(--border-subtle)] rounded-full px-3 py-2 text-[var(--primary-light)]',

  // Decision Cards
  decisionCard: {
    container:
      'bg-background-card border border-[var(--border-subtle)] rounded-xl p-6 shadow-sm',
    numberBadge:
      'bg-gradient-sage text-white rounded-full w-10 h-10 flex items-center justify-center font-bold',
    decisionTag:
      'bg-[var(--sage-10)] text-primary-dark px-3 py-1 rounded text-sm font-medium',
    whyTag:
      'bg-[rgba(232,184,109,0.10)] text-priority-medium-dark px-3 py-1 rounded text-sm font-medium',
    howTag:
      'bg-[rgba(215,122,97,0.10)] text-priority-high-dark px-3 py-1 rounded text-sm font-medium'
  },

  // Hero
  hero: {
    title: 'text-primary',
    badge:
      'text-sm text-primary border border-primary bg-[var(--sage-10)] rounded-full px-4 py-1.5',
    tag: 'flex items-center gap-2 text-sm text-primary border border-primary bg-background-card rounded-full px-4 py-1.5'
  }
}

// ============================================================================
// Gradient Helpers
// ============================================================================
export const domaniGradients = {
  hero: 'bg-gradient-hero',
  sage: 'bg-gradient-sage',
  dark: 'bg-gradient-dark',
  cardPlaceholder: 'bg-gradient-card-placeholder'
}

// ============================================================================
// Default Export - Custom Domani Data Structure
// ============================================================================
export default {
  productContext,
  productHypothesis,
  keyUXDecisions,
  reflection,
  challengesLearnings,
  projectDemonstrates,
  whatsNext
}
