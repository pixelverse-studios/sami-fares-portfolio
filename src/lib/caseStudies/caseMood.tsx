const problemFraming = [
  'Music streaming platforms are highly effective at recommending content based on past listening behavior. Over time, this creates familiarity, but it often limits discovery and emotional relevance.',
  'Users frequently return to the same playlists for focus, workouts, or relaxation because existing systems are optimized around history, not real-time context. When mood, energy, or intent changes, users are left to manually search, filter, or settle for music that only partially fits the moment.',
  "This project explores a different approach to music discovery, one that starts with how a user feels right now, rather than what they've listened to before."
]

const projectOverview = {
  context: [
    "Moodtunes is a conceptual mobile music app exploring how music discovery can adapt to a user's current mood, energy level, or activity. Rather than relying primarily on listening history, the concept centers on giving users a simple way to express how they feel in the moment and receive playlists aligned to that context.",
    'This project was created as a self-initiated product exploration, allowing me to focus on product thinking, emotional UX, and mobile-first interaction design within a deliberately scoped concept.',
    'Moodtunes served as a way to explore alternative discovery patterns in the music space without attempting to design a fully production-ready application.'
  ],
  roles: ['UI/UX Designer', 'Product Thinking', 'Copywriting'],
  client: 'Conceptual Music App',
  timeline: '8 weeks',
  tools: ['Figma', 'Web Research', 'AI-assisted ideation'],
  deliverables: [
    'Key user flows',
    'Conceptual wireframes',
    'Selected high-fidelity screens'
  ]
}

const goalsAndChallenges = {
  description: [
    'Moodtunes explores the hypothesis that music discovery becomes more meaningful when users can express how they feel in the moment, rather than relying solely on past listening behavior.',
    'Drawing from my background in music and sound design, I explored how elements such as tempo, energy level, and overall sonic character influence emotional and cognitive states like focus, relaxation, or motivation. While Moodtunes does not attempt to model these relationships scientifically, the concept uses these principles as directional inputs to guide playlist grouping and UI tone.',
    'The goal was not to overwhelm users with controls, but to create a lightweight interaction that allows them to signal intent quickly and receive music that feels emotionally aligned. This hypothesis informed both the structure of the input flow and the overall pacing, color, and density of the interface.',
    'Because Moodtunes is a conceptual project, design decisions were evaluated based on clarity, emotional resonance, and internal UX logic rather than performance metrics or live user testing.'
  ]
}

const researchAndDiscovery = {
  description: [
    'Rather than conducting formal user research, I used lightweight validation to ground the concept in observable behavior. This included reviewing how existing music platforms approach discovery and identifying where those experiences fall short when users want music that fits their current mood or activity.',
    'Across platforms, discovery systems are highly optimized for familiarity and past listening behavior, but provide limited ways for users to express intent in the moment. When mood or energy changes, users are often left to manually search, reuse old playlists, or compromise with music that only partially fits how they feel.',
    'These observations reinforced the direction behind Moodtunes and informed the interaction model. Instead of competing on depth or personalization, the concept focuses on a simple input flow that allows users to quickly signal intent and begin listening.'
  ]
}

const strategyAndDesign = {
  description: [
    'With a mobile-first approach, the core UX goal was to minimize friction and make discovery feel instant, personal, and emotionally relevant. I focused on designing a flow that lets users express how they feel with minimal effort — while keeping the interface clean, accessible, and emotionally resonant. Every screen was built to support intuitive navigation and promote meaningful listening moments, without overwhelming users with options.'
  ],
  highlights: [
    {
      header: 'Mood-Based Input Flow',
      Icon: 'FaBullseye',
      description:
        'Designed an intuitive mood/energy selection screen to streamline how users request playlists, minimizing taps and decision fatigue.'
    },
    {
      header: 'Emotionally-Aligned UI',
      Icon: 'FaPalette',
      description:
        'Applied calming tones, clean spacing, and mood-matching visuals to create an interface that feels responsive to user emotion.'
    },
    {
      header: 'Local Artist Discovery',
      Icon: 'FaStar',
      description:
        'Subtly highlighted local talent with small labels in the playlist view — keeping the UI clean while surfacing new voices.'
    },
    {
      header: 'Playlist Logic',
      Icon: 'FaGears',
      description:
        'Informed playlist groupings using sound frequency principles to align music with emotional or cognitive states like focus or relaxation.'
    }
  ],
  mockups: [
    {
      imgs: ['/assets/MoodTunes/ArtistProfile.png'],
      explanation: 'Mockup showing the Artist Profile Screen under Discovery'
    }
  ]
}

const finalReflections = {
  description: [
    'This project reinforced my approach to product UX when working without formal data, testing infrastructure, or production constraints. Rather than attempting to simulate a full build, I focused on making deliberate interaction choices, defining clear boundaries, and designing only what was necessary to support the core experience.',
    'MoodTunes strengthened my confidence in designing through abstraction, making tradeoffs early, and resisting the urge to over-specify solutions. It also reinforced the importance of aligning interface complexity with user intent, especially in experiences meant to support background or emotional states rather than direct task completion.'
  ],
  subHeader: 'Final Designs',
  url: '',
  outcomes: [
    'Ability to make confident design decisions without relying on exhaustive research or metrics',
    'Strong judgment around scope, restraint, and feature prioritization',
    'Comfort designing systems based on qualitative reasoning and domain knowledge',
    'Cross-domain thinking, applying an understanding of sound and emotional response to interaction design',
    'Ownership of product thinking from concept through interface execution'
  ],
  feedback: '',
  client: '',
  img: [
    '/assets/MoodTunes/HomeScreen.png',
    '/assets/MoodTunes/Playlist.png',
    '/assets/MoodTunes/ArtistProfile.png'
  ]
}

export default {
  problemFraming,
  projectOverview,
  goalsAndChallenges,
  researchAndDiscovery,
  keyUXDecisions: [
    {
      title: 'Replacing search with a mood-first entry point',
      decision:
        'Instead of relying on search, genres, or artist selection, the experience begins with mood and activity inputs.',
      rationale:
        'This intentionally removes precision in favor of speed, acknowledging that users often know how they feel faster than they can describe what they want to hear.'
    },
    {
      title: 'Treating energy as a spectrum, not a category',
      decision:
        'Energy was designed as a continuous slider rather than preset labels.',
      rationale:
        'This avoided forcing users into rigid states and allowed for subtle adjustment without introducing additional controls or decision overhead.'
    },
    {
      title: 'Limiting visible choice after playlist generation',
      decision:
        'Once a playlist is created, the interface minimizes visible options.',
      rationale:
        'This was a deliberate tradeoff: reducing control in order to encourage listening and maintain momentum, rather than pulling users back into browsing behaviors.'
    },
    {
      title: 'Integrating local artists without dedicated discovery surfaces',
      decision:
        'Local artists were surfaced through subtle labels within playlists instead of standalone sections.',
      rationale:
        "This allowed discovery to occur passively, without shifting attention away from the user's original intent or reframing the experience around exploration."
    }
  ],
  strategyAndDesign,
  finalReflections
}
