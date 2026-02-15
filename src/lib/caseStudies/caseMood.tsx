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
    'MoodTunes was designed as a passion project to explore product-focused UX beyond marketing websites. The challenge was to create a more emotionally intelligent music experience — one that responds to how users feel in the moment, not just what they’ve liked in the past.',
    'Working solo, I handled the full process from concept to UI delivery, using research, user flows, low-fidelity wireframes, and high-fidelity mockups to bring the idea to life. The result is a context-aware listening experience that curates music by energy, mood, and activity — while giving visibility to underrepresented local artists.'
  ],
  subHeader: 'Final Designs',
  url: '',
  outcomes: [
    'Developed a complete user flow from onboarding to playlist discovery to artist exploration',
    'Created wireframes and high-fidelity mockups across mobile',
    'Built a scalable system for mood-based curation and discovery',
    'Designed lightweight UX elements to highlight local artists without disrupting flow'
  ],
  lessons: [
    'Emotion-based UX benefits from simplified input and high-contrast feedback',
    'Wireframing complex cases (like label spacing or playlist logic) saved time in high-fi',
    'Product case studies offer more layered storytelling opportunities than web projects',
    'Practiced translating emotion-rich research into actionable design decisions',
    'Solo concept work still benefits from real-world flow prioritization and UX writing'
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
  keyUXDecisions: [], // Content to be added in future ticket
  strategyAndDesign,
  finalReflections
}
