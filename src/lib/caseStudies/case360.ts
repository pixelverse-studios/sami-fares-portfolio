const problemFraming = [
  '360 Degree Care was a newly established in-home care provider in New Jersey with no digital presence, no online reviews, and no reputation in the market. For families searching online for trusted care, the brand was essentially invisible.',
  'The core challenge was not just building a website. It was creating a digital experience that could establish trust quickly—for a brand with zero digital footprint—in an industry where families are making high-stakes, emotionally charged decisions about their loved ones\' safety and wellbeing.',
  'Poor UX in this context would not simply frustrate users. Confusion or uncertainty could delay critical care decisions, erode trust before it was even built, or cause families to abandon the site entirely in favor of competitors with stronger digital credibility.'
]

const projectOverview = {
  context: [
    'As the UX designer for 360 Degree Care\'s first website, my primary goals were to establish legitimacy for a brand-new care provider with no digital presence, clearly communicate their services and coverage areas, and create a user experience that would support lead generation while building trust with families in high-stakes decision-making moments.',
    'I conducted competitive research, developed the site architecture and content strategy, designed high-fidelity mockups, and collaborated with a developer to bring the vision to life—balancing strong client preferences with user-centered design principles throughout.'
  ],
  roles: ['UX Designer', 'Content Strategy', 'UI Design'],
  client: '360 Degree Care, New Jersey',
  deliverables: [
    'Site architecture & wireframes',
    'High-fidelity UI designs',
    'Empathetic, SEO-aware copy',
    'Brand & visual assets'
  ],
  timeline: '8 weeks',
  tools: ['Figma', 'Google Docs', 'Competitive Research']
}

const goalsAndChallenges = {
  goals: [
    'Establish credibility for a new care provider',
    'Clearly communicate services, coverage areas, and next steps',
    'Support emotionally stressed users with calm, readable content',
    'Encourage contact without aggressive sales pressure'
  ],
  challenges: [
    'No prior digital presence or social proof',
    'Strong stakeholder preference for oversized typography',
    'Limited time and content availability',
    'Accessibility considerations across a wide age range'
  ],
  description: [
    "The client's primary goal was to establish a digital presence quickly and start building trust with families in need of in-home care. While they had experience in traditional marketing, they were less familiar with the nuances of digital UX and web strategy. The project required thoughtful communication to align user-centered design decisions with a visually driven brand vision.",
    'I focused early efforts on educating the client about effective UX principles — including content hierarchy, scannability, and what builds trust for first-time visitors — while ensuring the final site honored their preferences and goals.'
  ]
}

const researchAndDiscovery = {
  description: [
    'I began with a competitive review of the top home care agencies in northern New Jersey, analyzing how they structured their websites, the tone of their messaging, and how effectively they reassured visitors navigating emotionally complex decisions.',
    'To complement that, I also conducted informal discovery through conversations with friends and family members who had recently gone through the process of finding home care. These stories underscored the urgency, emotional strain, and confusion that often accompany these decisions — and shaped how I approached tone, structure, and visual hierarchy.'
  ],
  quote:
    '"When you are in a position where you need to find care for a loved one, it can be scary. It feels like you are trusting the person you hire with their life".',
  author: 'Mario G',
  takeaways: [
    'Most competitors used calming color palettes and soft, reassuring imagery',
    'Sites with clear FAQs and multiple contact options instilled more trust',
    'Visitors scanned for key info like insurance accepted, service areas, and 24/7 availability',
    'Overly modern or salesy designs felt cold and disconnected from user needs',
    "CTAs needed to be visible early and often — visitors shouldn't have to search to reach out"
  ]
}

const strategyAndDesign = {
  description: [
    'Given the emotional nature of the service, I proposed a visual direction that combined calming blue tones with warm, uplifting imagery — portraying aging with dignity and vitality. While the client chose a more vibrant palette to stand out from competitors, they embraced the imagery concept fully, and it became a key visual theme across the site.',
    'Throughout the project, I worked to preserve core UX principles: structuring information to reduce cognitive load, emphasizing clarity of message, and ensuring large, tappable areas for mobile users. The goal was to keep the experience reassuring and intuitive, regardless of aesthetic preferences.'
  ],
  highlights: [
    {
      header: 'Emotionally Calibrated Copy',
      Icon: 'FaBullseye',
      description:
        'Tone was crafted to feel warm and informative, while addressing key user concerns.'
    },
    {
      header: 'Color Palette + Branding',
      Icon: 'FaPalette',
      description:
        'The client’s preference for vibrant orange was balanced with neutral supporting tones to maintain readability and trust.'
    },
    {
      header: 'Location callouts',
      Icon: 'FaStar',
      description:
        'Local areas were integrated across pages to build geographic authority and support SEO.'
    },
    {
      header: 'Imagery & Tone',
      Icon: 'FaSitemap',
      description:
        'Photography featured active, joyful older adults to reinforce dignity, comfort, and optimism.'
    }
  ],
  mockups: [
    {
      imgs: [
        '/assets/360 case/PersonalCareMock1.png',
        '/assets/360 case/PersonalCareMock2.png'
      ],
      explanation: 'Mockups highlighting the Personal Care Service Page'
    }
  ]
}

const finalReflections = {
  description: [
    'Despite a tight timeline and strong client direction on visuals, I delivered a responsive, multi-page website that remained grounded in UX best practices. The final design performed well in early user feedback, with clear navigation paths, emotionally calibrated copy, and locally relevant content that built instant credibility.'
  ],
  subHeader: 'Final Homepage Design',
  url: 'https://www.360degreecare.net',
  achievements: [
    'Established a credible digital presence for a new in-home care provider',
    'Improved user understanding of services, coverage areas, and next steps',
    'Reduced hesitation through clear content hierarchy and repeated contact opportunities',
    'Supported ongoing lead generation through calls and form submissions'
  ],
  lessons: [
    'Strengthened communication and alignment with non-technical stakeholders',
    'Practiced balancing strong client preferences with user-centered design principles',
    'Reinforced the importance of accessibility in emotionally sensitive decision contexts',
    'Applied qualitative research insights to concrete UX decisions under real constraints'
  ],
  feedback:
    '"I\'m really happy with how everything turned out. You were flexible, patient, and always found a way to make my ideas work. I appreciate how you took the time to explain things and still delivered something polished and easy to use."',
  client: 'Owner, 360 Degree Care',
  img: ['/assets/360 case/360HomeMock.png']
}

export default {
  problemFraming,
  projectOverview,
  goalsAndChallenges,
  researchAndDiscovery,
  keyUXDecisions: [
    {
      title: 'Supporting diverse readability needs through user control',
      problem:
        'Families navigating care decisions include users with varying visual abilities, from aging adults with declining vision to younger family members researching on behalf of parents.',
      risk: 'Defaulting to oversized typography could break visual hierarchy and make content harder to scan, while small text could exclude users who need larger fonts.',
      decision:
        'Rather than forcing a single typography size, design the site to allow users to control how content is presented to them.',
      solution:
        'Implemented global accessibility controls including adjustable text size, high-contrast modes, and font options—ensuring readability across a wide range of visual needs.',
      tradeoff:
        'Added implementation complexity and required careful testing across configurations, but ultimately served a broader audience more effectively.'
    },
    {
      title: 'Prioritizing information hierarchy to reduce cognitive load',
      problem:
        'Users in emotional distress need to quickly understand what services are offered, which areas are covered, and how to take the next step—without being overwhelmed by dense blocks of text.',
      risk: 'Presenting too much information at once increases cognitive load and may cause users to abandon the site before finding what they need.',
      decision:
        'Design the information architecture to surface the most essential details early and allow progressive disclosure for users who want more depth.',
      solution:
        'Created scannable content blocks with clear section headings, visual breathing room, and repeated calls-to-action throughout the experience.',
      tradeoff:
        'Limited opportunities for visual experimentation in favor of clarity and scannability—prioritizing function over form.'
    },
    {
      title: 'Establishing trust through local relevance and legitimacy cues',
      problem:
        'As a newly established provider with no online reviews or digital footprint, 360 Degree Care lacked the external validation signals users typically rely on when evaluating care providers.',
      risk: 'Without social proof or third-party credibility markers, users might hesitate to reach out or choose a competitor with more established online presence.',
      decision:
        'Build trust through hyper-local context and transparent, empathetic service explanations rather than relying on reviews or testimonials that didn\'t yet exist.',
      solution:
        'Emphasized specific coverage areas throughout the site, clearly outlined services with approachable language, and maintained a calm, reassuring tone that acknowledged the emotional weight of care decisions.',
      tradeoff:
        'Emphasizing locality and specificity required disciplined content decisions and limited the ability to appeal broadly—but deepened trust with the target New Jersey audience.'
    }
  ],
  strategyAndDesign,
  finalReflections
}
