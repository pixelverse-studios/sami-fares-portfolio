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
  intro:
    'Each design decision below reflects a deliberate attempt to balance clarity, emotional tone, and behavioral follow-through.',
  decisions: [
    {
      number: 1,
      title: 'Moving away from a "tech startup" visual tone',
      problem:
        'Early visual explorations leaned toward a dark, high-contrast aesthetic that felt more like a traditional productivity tool. While visually striking, this direction created unnecessary tension and made the experience feel more demanding.',
      solution:
        "The visual system evolved toward lighter backgrounds, softer colors, and increased spacing to reinforce calm and approachability. This shift supported Domani's goal of reducing anxiety rather than amplifying it.",
      mockupBefore: '/assets/Domani/Decision1_Before.png',
      mockupAfter: '/assets/Domani/Decision1_After.png'
    },
    {
      number: 2,
      title: 'Evolving the task priority model',
      problem:
        'Initial task prioritization relied on traditional importance and urgency markers. During iteration, this approach felt too rigid and encouraged users to over-optimize their day.',
      solution:
        'The model was refined to emphasize intentional selection over strict prioritization, allowing users to commit to what matters most without ranking or labeling every task. This reduced decision overhead while still maintaining structure.',
      mockup: '/assets/Domani/Decision2.png'
    },
    {
      number: 3,
      title: 'Separating planning from execution',
      explanation:
        'One of the core UX decisions was to clearly separate the act of planning from the act of doing. Planning occurs in advance, in a calm context, allowing users to think clearly about their intentions. Execution happens later, with minimal friction, reducing the need for re-decision-making throughout the day.',
      solution:
        'This separation helped reinforce trust in prior decisions rather than constantly revisiting them.',
      mockupLeft: '/assets/Domani/Decision3_Planning.png',
      mockupRight: '/assets/Domani/Decision3_Execution.png'
    },
    {
      number: 4,
      title: 'Balancing reminders without increasing anxiety',
      explanation:
        'Reminders were designed carefully to avoid feeling intrusive or stressful. Instead of frequent notifications, Domani uses gentle cues that reinforce commitment without creating pressure.',
      solution:
        'The goal was to support follow-through while respecting the emotional state of the user.'
    }
  ]
}

// ============================================================================
// Reflection
// ============================================================================
const reflection = {
  paragraph:
    "Domani reinforced the importance of designing systems that respect a user's mental and emotional state, not just their productivity goals. Working without formal analytics or large-scale testing required making thoughtful tradeoffs and relying on UX judgment rather than optimization metrics. This project emphasized restraint, clarity, and intentional scope — designing only what was necessary to support the core experience."
}

// ============================================================================
// Key Challenges & Learnings
// ============================================================================
const challengesLearnings = {
  challenges: [
    {
      title: 'Learning to separate solutions from habits',
      description:
        'Designing behavior-focused products requires resisting the urge to over-engineer solutions. Simplicity often supports consistency better than flexibility.'
    },
    {
      title: 'Re-centering on the experience of time',
      description:
        "Planning tools don't just manage tasks — they shape how users feel about their future time. Small interface decisions can meaningfully influence that perception."
    }
  ]
}

// ============================================================================
// What This Project Demonstrates
// ============================================================================
const projectDemonstrates = {
  capabilities: [
    'Product-level UX thinking beyond surface UI',
    'Comfort designing without complete data or validation',
    'Strong judgment around scope and restraint',
    'Ability to design systems that support behavior, not just features',
    'Emotional awareness in interaction design'
  ]
}

// ============================================================================
// What's Next
// ============================================================================
const whatsNext = {
  paragraph:
    'Domani continues to evolve as a real-world concept, with future iterations focused on refining execution flows, reducing friction further, and preparing the experience for broader release.'
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
