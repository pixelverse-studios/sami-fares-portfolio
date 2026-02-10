/**
 * Domani Case Study - Reusable Class Constants
 *
 * Provides consistent class combinations for Domani case study components.
 * Uses core theme utilities (primary, background, text, priority).
 *
 * @example
 * import { domaniClasses, domaniGradients } from '@/lib/caseStudies/caseDomani'
 *
 * // Section with theme background
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

// Gradient helper
export const domaniGradients = {
  hero: 'bg-gradient-hero',
  sage: 'bg-gradient-sage',
  dark: 'bg-gradient-dark',
  cardPlaceholder: 'bg-gradient-card-placeholder'
}
