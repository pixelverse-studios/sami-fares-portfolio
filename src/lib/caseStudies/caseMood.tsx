const problemFraming = [
  'Users often feel disconnected from the music recommendations they receive. Traditional streaming algorithms focus on past behavior and general taste — but don’t account for real-time context like mood, energy level, or activity. As a result, users find themselves replaying the same playlists for workouts, focus, or relaxation, and are rarely exposed to new or local artists.',
  'Moodtunes addresses this by letting users select how they feel in the moment and generating playlists that match that energy — while subtly surfacing local artists they might otherwise miss.'
]

const projectOverview = {
  context: [
    'Moodtunes is a conceptual mobile music app designed to improve how users discover playlists that reflect their real-time mood, energy level, or activity. Unlike traditional platforms that rely on taste history or engagement patterns, Moodtunes takes a user-centered approach — letting users guide their listening experience based on how they feel in the moment.',
    'This project was initiated to expand my portfolio beyond client websites and explore the full product design process. I led all UX and UI design, including research, user flows, wireframes, and high-fidelity mockups. The app also introduces an additional layer of value by subtly promoting local artists, giving them visibility through emotionally aligned playlists.',
    'Moodtunes allowed me to apply emotional design thinking, mobile-first UX, and product strategy within a realistic scope, while experimenting with new patterns of discovery in the music space.'
  ],
  roles: ['UI/UX Designer', 'Copywriter'],
  client: 'Conceptual Music App',
  timeline: '8 Weeks',
  tools: ['Figma', 'Web Research', 'ChatGPT'],
  deliverables: ['User Flows', 'Wireframes', 'High-Fidelity Mockups']
}

const goalsAndChallenges = {
  description: [
    'The goal behind Moodtunes was to explore how music discovery could shift from algorithm-driven suggestions to real-time emotional curation. I wanted to create an experience that respected how users feel in the moment, not just what they’ve historically liked — while also giving local artists more visibility in a space dominated by mainstream data.',
    'To strengthen emotional alignment, the playlist logic also draws inspiration from how certain frequencies can trigger psychological responses — calming, energizing, or focusing the listener. This helped inform both the tone of the UI and the intent behind curated playlist groupings.'
  ],
  goals: [
    'Create a fast and frictionless flow where users can select their mood and receive music instantly — without needing to search, filter, or dig through menus.',
    'Balance emotional depth with simplicity, ensuring the design feels reactive and supportive, not overwhelming.',
    'Build a system that introduces local or lesser-known artists in a subtle, non-intrusive way — integrated into the flow, not tacked on.'
  ],
  challenges: [
    'No live user testing was conducted, so design decisions were informed by competitive review, informal feedback, and UX best practices.',
    'Because the app is conceptual, flows were designed to demonstrate clear UX logic and visual consistency, rather than functioning as a fully scoped MVP.'
  ]
}

const researchAndDiscovery = {
  description: [
    'To ground the concept in real user needs, I evaluated how current music platforms approach discovery. I reviewed Spotify, Pandora, and SoundCloud, focusing on how they match music to user context.',
    <>
      <ul className="list-disc indentedList">
        <li>
          Spotify excels at delivering suggestions based on listening history
          and algorithmic trends, but it lacks input for current mood or
          activity, making it feel static when users want something emotionally
          aligned in the moment.
        </li>
        <li>
          Pandora uses its Music Genome Project to deeply categorize tracks by
          musical traits, but the user’s emotional or situational context are
          never directly considered.
        </li>
        <li>
          SoundCloud placed value on exploration and the wide range of emerging
          artists, but the browsing experience can feel chaotic. There’s no
          structured way to find music that fits a vibe or intention.
        </li>
      </ul>
    </>,
    'These gaps revealed a clear opportunity: design a mobile experience that meets users where they are emotionally and mentally — not just musically. By giving users a simple way to express how they feel or what they’re doing, we can help them discover music that’s right for that moment. And by embedding local artist discovery into that flow, Moodtunes offers something that feels personal, fresh, and intentional.'
  ],
  takeaways: [
    'Existing platforms lack contextual awareness in music recommendations.',
    'Users crave novelty but don’t want to sacrifice relevance or mood alignment.',
    'There’s a growing interest in discovering local/independent artists, but visibility is low.',
    'Over-personalization in music platforms leads to repetitive listening habits, reducing discovery over time.',
    'Users often associate music with productivity, emotion regulation, or identity — but current apps don’t let them signal these needs directly.'
  ],
  quote: '',
  author: '',
  mockups: [
    {
      imgs: [
        '/assets/MoodTunes/homeWF.png',
        '/assets/MoodTunes/playlistWF.png'
      ],
      explanation:
        'Early wireframes showcasing the Homepage (left) and personalized mix (right)'
    }
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
      Icon: 'FaStar',
      description:
        'Informed playlist groupings using sound frequency principles to align music with emotional or cognitive states like focus or relaxation.'
    }
  ],
  mockups: [
    {
      imgs: ['/assets/MoodTunes/AristProfile.png'],
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
  achievments: [
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
    '/assets/MoodTunes/AristProfile.png'
  ]
}

export default {
  problemFraming,
  projectOverview,
  goalsAndChallenges,
  researchAndDiscovery,
  strategyAndDesign,
  finalReflections
}
