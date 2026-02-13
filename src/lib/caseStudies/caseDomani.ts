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
    'Users want to feel calm, focused, and in control as they plan their day. However, many planning and productivity tools emphasize task density, reminders, and rigid workflows, which can increase stress rather than reduce it.',
    'Domani was created to explore a different approach to planning — one that prioritizes emotional clarity, intentionality, and trust over constant optimization.',
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
    'If users are encouraged to plan tomorrow intentionally, in advance, and without urgency, they will feel more confident in their decisions and more likely to follow through.',
    'By shifting planning to a calm, reflective moment and limiting how and when tasks are surfaced, Domani aims to reduce decision fatigue while still supporting daily accountability.'
  ]
}

// ============================================================================
// Key UX Decisions & Iterations
// ============================================================================
const keyUXDecisions = {
  intro: '', // Introduction paragraph
  decisions: [] as Array<{
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

// ============================================================================
// Reflection
// ============================================================================
const reflection = {
  paragraph: '' // Single reflection paragraph
}

// ============================================================================
// Key Challenges & Learnings
// ============================================================================
const challengesLearnings = {
  challenges: [] as Array<{
    title: string
    description: string
  }>
}

// ============================================================================
// What This Project Demonstrates
// ============================================================================
const projectDemonstrates = {
  capabilities: [] as string[] // 5 items
}

// ============================================================================
// What's Next
// ============================================================================
const whatsNext = {
  paragraph: '' // Forward-looking paragraph
}

// ============================================================================
// Reusable Class Constants (Theme-Specific Styling)
// ============================================================================
export const domaniClasses = {
  // Section Variants
  section: 'bg-background text-text-heading',
  sectionAlt: 'bg-background-section text-text-heading',
  sectionSage: 'bg-background-subtle text-text-heading',
  sectionDark: 'bg-gradient-dark text-white',

  // Cards
  card: 'bg-background-section border border-[var(--border-subtle)] rounded-xl',
  cardGlass:
    'bg-[var(--white-60)] backdrop-blur border border-[var(--white-20)] rounded-xl',

  // Typography
  heading: 'text-text-heading',
  body: 'text-text-body',
  accent: 'text-primary',

  // Badges & Tags
  badge:
    'bg-[var(--sage-10)] text-primary-dark border border-[var(--sage-20)] rounded-full px-3 py-1',
  badgeSage: 'bg-gradient-sage text-white rounded-full px-3 py-1',

  // Decision Cards
  decisionCard: {
    container:
      'bg-background-section border border-[var(--border-subtle)] rounded-xl p-6',
    numberBadge:
      'bg-gradient-sage text-white rounded-full w-10 h-10 flex items-center justify-center font-bold',
    decisionTag:
      'bg-[var(--sage-10)] text-primary-dark px-3 py-1 rounded text-sm font-medium',
    whyTag:
      'bg-[rgba(232,184,109,0.10)] text-priority-medium-dark px-3 py-1 rounded text-sm font-medium',
    howTag:
      'bg-[rgba(215,122,97,0.10)] text-priority-high-dark px-3 py-1 rounded text-sm font-medium'
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
