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
    description:
      'Designed a multi-page website for a new home health care provider launching online for the first time. Balanced client-driven visual preferences with user-centered UX to build trust, deliver clarity, and support long-term growth.',
    destination: '/works/360-degree-care'
  }
]

export default allCases
