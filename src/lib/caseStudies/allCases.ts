import { CaseStudy } from '../types'

const allCases: CaseStudy[] = [
  {
    img: '/assets/Domani/HomeMock.png',
    label: 'Domani',
    category: 'Product UX - Systems & Iteration',
    tags: ['Productivity App', 'Interaction Design'],
    description:
      'Designed a calm, habit-building planning app focused on reducing decision fatigue and helping users follow through on daily intentions. Led product UX from concept through iterative refinement, shaping core interaction models that separate planning from execution and lower cognitive load. Currently in public beta and evolving toward launch.',
    destination: '/works/domani'
  },
  {
    img: '/assets/Home_JPW.png',
    label: 'Jones Pressure Washing',
    category: 'Commercial UX - Trust & Decision Clarity',
    tags: ['Commercial UX', 'Trust & Decision Clarity'],
    description:
      'Helped a new local service business earn user trust without reviews or brand recognition. Led UX strategy, information architecture, and content decisions to reduce perceived risk, clarify services quickly, and guide high-intent homeowners toward confident quote requests in a competitive market.',
    destination: '/works/jones-pressure-washing'
  },
  {
    img: '/assets/360 case/360HomeMock.png',
    label: '360 Degree Care',
    category: 'Emotional UX - Accessibility & Reassurance',
    tags: ['Healthcare Platform', 'Emotional Accessibility'],
    description:
      'Shaped a trust-focused digital experience for families navigating high-stakes care decisions. Led UX and content strategy to support emotionally stressed users through clear information hierarchy, accessibility controls, and calm, confidence-building interaction patterns.',
    destination: '/works/360-degree-care'
  },
  {
    img: '/assets/MoodTunes/HomeScreen.png',
    label: 'MoodTunes',
    category: 'Conceptual Product UX - Interaction Design',
    tags: ['Music App (Concept)', 'Product Thinking'],
    description:
      'Explored a mood-first approach to music discovery that prioritizes how users feel in the moment over listening history. Designed a lightweight interaction model focused on reducing friction at entry, limiting choice to maintain momentum, and surfacing discovery without overwhelming users.',
    destination: '/works/moodtunes'
  }
]

export default allCases
