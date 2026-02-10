import { CaseStudy } from '../types'

const allCases: CaseStudy[] = [
  {
    img: '/assets/MoodTunes/HomeScreen.png',
    label: 'MoodTunes',
    description:
      'Created a mobile music app that generates playlists based on a user\'s current mood, energy, or activity. Designed a context-aware flow that makes discovery feel instant and intuitive - while subtly spotlighting local artists.',
    destination: '/works/moodtunes'
  },
  {
    img: '/assets/Home_JPW.png',
    label: 'Jones Pressure Washing',
    category: 'Commercial UX - Trust & Decision Clarity',
    description:
      'Helped a new local service business earn user trust without reviews or brand recognition. Led UX strategy, information architecture, and content decisions to reduce perceived risk, clarify services quickly, and guide high-intent homeowners toward confident quote requests in a competitive market.',
    destination: '/works/jones-pressure-washing'
  },
  {
    img: '/assets/360 case/360HomeMock.png',
    label: '360 Degree Care',
    category: 'Emotional UX - Accessibility & Reassurance',
    description:
      'Shaped a trust-focused digital experience for families navigating high-stakes care decisions. Led UX and content strategy to support emotionally stressed users through clear information hierarchy, accessibility controls, and calm, confidence-building interaction patterns.',
    destination: '/works/360-degree-care'
  }
]

export default allCases
