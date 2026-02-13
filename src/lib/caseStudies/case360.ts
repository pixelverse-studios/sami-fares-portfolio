const problemFraming = [
  '360 Degree Care was a newly established in-home care provider in New Jersey with no digital presence. In a crowded and highly sensitive industry, families searching online had no reviews, reputation, or existing brand signals to rely on.',
  'The core challenge was not just building a website. It was creating a digital experience that could establish trust quickly, communicate care quality clearly, and support users making emotionally difficult decisions under time pressure.',
  'Poor UX in this context would not simply frustrate users. Confusion or uncertainty could delay decisions or prevent families from reaching out at all.'
]

const projectOverview = {
  context: [
    '360 Degree Care needed its first website to establish legitimacy, communicate services clearly, and support early lead generation. I led the UX and design process from discovery through execution, working closely with the client and developer to balance user needs, accessibility, and strong stakeholder preferences.'
  ],
  roles: ['UX Designer', 'Content Strategy', 'UI Design'],
  client: '360 Degree Care, New Jersey',
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
  constraints: [
    'No prior digital presence or social proof',
    'Strong stakeholder preference for oversized typography',
    'Limited time and content availability',
    'Accessibility considerations across a wide age range',
    'Client-driven visual direction that evolved throughout the project'
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
    'Visitors scan quickly for clarity around services, availability, and location',
    'Calm imagery and empathetic language increase trust',
    'Clear FAQs and repeated contact opportunities reduce hesitation',
    'Overly sales-driven or modern designs can feel cold in this context'
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
    'This project focused on designing a digital experience that could establish trust quickly for families making emotionally difficult care decisions. Under a tight timeline and strong client-driven visual preferences, the final experience prioritized clarity, emotional reassurance, and accessibility to support confident decision-making in a high-trust industry.',
    'The resulting site provides a calm, legible, and structured experience that helps users understand services, assess legitimacy, and take next steps without pressure.'
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
        'Families researching in-home care include users with varying visual abilities and comfort levels with digital content, creating competing readability needs.',
      risk: 'Making large typography the default could improve accessibility for some users while introducing hierarchy breakdowns, excessive scrolling, and visual fatigue for others.',
      decision:
        'Avoid enforcing a single readability standard and instead allow users to control how content is presented.',
      solution:
        'I worked with the developer to implement a global accessibility control that allows users to: Increase or decrease text size, Enable high-contrast and negative contrast modes, Apply grayscale and light background modes, Switch to a readable font option, Reset preferences at any time. User preferences are stored locally so accessibility settings persist across visits.',
      tradeoff:
        'This added implementation complexity, but preserved clarity and hierarchy while supporting a wider range of accessibility needs.'
    },
    {
      title: 'Prioritizing information hierarchy to reduce cognitive load',
      problem:
        'Users evaluating care options need to quickly understand services, coverage, and next steps without processing dense or unstructured information.',
      risk: 'Unclear hierarchy or excessive content density could increase cognitive load and slow decision-making.',
      decision:
        'Design the information architecture to surface essential details early and guide users toward action without pressure.',
      solution:
        'Content was structured to support fast scanning by: Breaking services into clearly labeled sections, Using concise headings and scannable content blocks, Repeating primary CTAs at natural decision points, Making service scope, availability, and next steps immediately visible',
      tradeoff:
        'This limited visual experimentation, but improved comprehension and ease of navigation for first-time visitors.'
    },
    {
      title: 'Establishing trust through local relevance and legitimacy cues',
      problem:
        'With no reviews or established digital footprint, users lacked external validation signals when evaluating the provider.',
      risk: 'Without clear indicators of legitimacy, users could hesitate or delay outreach despite understanding the services offered.',
      decision:
        'Use visible local context and transparent service explanations to establish credibility within the experience itself.',
      solution:
        'Trust was reinforced by: Clearly explaining services and care approach, Surfacing service areas and availability early, Integrating location-specific references, Maintaining a calm, empathetic tone across key pages',
      tradeoff:
        'Emphasizing clarity and locality required disciplined content decisions, but reduced hesitation and increased user confidence.'
    }
  ],
  strategyAndDesign,
  finalReflections
}
