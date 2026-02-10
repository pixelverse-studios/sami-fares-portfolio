/**
 * Domani Case Study - Reusable Class Constants
 *
 * Provides consistent class combinations for Domani case study components.
 * Uses Tailwind utilities created in PVS-295 (colors) and PVS-297 (gradients).
 *
 * Integration Pattern (Option B: Explicit Component Classes):
 * Components import and explicitly apply classes, maintaining full control
 * over styling while benefiting from centralized constant management.
 *
 * @example
 * import { domaniClasses, domaniGradients } from '@/lib/caseStudies/caseDomani'
 *
 * // Section with Domani background
 * <section className={domaniClasses.section}>
 *
 * // Hero with gradient
 * <section className={domaniGradients.hero}>
 *
 * // Card with glass effect
 * <div className={domaniClasses.cardGlass}>
 *
 * // Decision card with nested constants
 * <div className={domaniClasses.decisionCard.container}>
 *   <div className={domaniClasses.decisionCard.numberBadge}>1</div>
 *   <span className={domaniClasses.decisionCard.decisionTag}>Decision</span>
 * </div>
 */

export const domaniClasses = {
  // Section Variants
  section: 'bg-domani-bg-cream text-domani-text-primary',
  sectionAlt: 'bg-domani-bg-cream-light text-domani-text-primary',
  sectionSage: 'bg-domani-bg-sage-tint text-domani-text-primary',
  sectionDark: 'bg-domani-dark text-white',

  // Cards
  card: 'bg-domani-bg-card border border-domani-border-light rounded-xl',
  cardGlass:
    'bg-[var(--domani-white-60)] backdrop-blur border border-[var(--domani-white-20)] rounded-xl',

  // Typography
  heading: 'text-domani-text-primary',
  body: 'text-domani-text-secondary',
  accent: 'text-domani-sage-primary',

  // Badges & Tags
  badge:
    'bg-[var(--domani-sage-10)] text-domani-sage-dark border border-[var(--domani-sage-20)] rounded-full px-3 py-1',
  badgeSage: 'bg-domani-sage text-white rounded-full px-3 py-1',

  // Decision Cards
  decisionCard: {
    container:
      'bg-domani-bg-card border border-domani-border-light rounded-xl p-6',
    numberBadge:
      'bg-domani-sage text-white rounded-full w-10 h-10 flex items-center justify-center font-bold',
    decisionTag:
      'bg-[var(--domani-sage-10)] text-domani-sage-dark px-3 py-1 rounded text-sm font-medium',
    whyTag:
      'bg-[rgba(232,184,109,0.10)] text-domani-priority-medium-dark px-3 py-1 rounded text-sm font-medium',
    howTag:
      'bg-[rgba(215,122,97,0.10)] text-domani-priority-high-dark px-3 py-1 rounded text-sm font-medium'
  }
}

// Gradient helper
export const domaniGradients = {
  hero: 'bg-domani-hero',
  sage: 'bg-domani-sage',
  dark: 'bg-domani-dark',
  cardPlaceholder: 'bg-domani-card-placeholder'
}
