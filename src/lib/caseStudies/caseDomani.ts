/**
 * Domani Case Study Data
 *
 * TODO: Replace placeholder content with actual case study details
 */

const problemFraming = [
  'Many people struggle with decision fatigue when planning their day. Traditional planning apps either overwhelm users with too many options or fail to separate the planning mindset from the execution mindset, leading to abandoned plans and incomplete tasks.',
  'Domani needed to create a calm, focused planning experience that reduces cognitive load and helps users follow through on their daily intentions without feeling paralyzed by choice or distracted during execution.',
  "At its core, this project was about designing interaction models that respect the user's mental energy and create clear boundaries between thoughtful planning and focused doing."
]

const projectOverview = {
  context: [
    'Domani is a habit-building planning app designed to help users reduce decision fatigue and follow through on daily intentions. The app separates planning from execution, creating distinct mental spaces for thoughtful intention-setting and focused task completion.',
    'I led product UX from concept through iterative refinement, shaping core interaction models, information architecture, and the overall user experience strategy. The app is currently in public beta and evolving toward launch based on user feedback and usage patterns.'
  ],
  roles: ['Product UX Designer', 'Interaction Designer', 'UX Strategist'],
  client: 'Domani (Internal Product)',
  deliverables: [
    'Core interaction models',
    'Information architecture',
    'Planning flow design',
    'Execution mode UX',
    'Iterative refinements based on beta feedback'
  ],
  timeline: 'Ongoing - Beta Phase',
  tools: ['Figma', 'User Testing', 'Analytics', 'Linear']
}

const goalsAndChallenges = {
  goals: [
    'Reduce decision fatigue during daily planning',
    'Create clear separation between planning and execution modes',
    'Lower cognitive load through focused, calm interactions',
    'Help users follow through on their intentions',
    'Build sustainable daily planning habits'
  ],
  constraints: [
    'Balancing simplicity with enough functionality to be useful',
    'Designing for different planning styles and preferences',
    'Creating habit-forming patterns without manipulation',
    'Iterating based on beta user feedback while maintaining vision',
    'Avoiding feature bloat common in productivity apps'
  ],
  description: [
    "The challenge wasn't just to create another planning app - it was to fundamentally rethink how planning tools support human cognition. Most productivity apps assume more features equals more value, but Domani needed to prove that intentional constraints and thoughtful interaction design could be more effective than endless options and configurations."
  ]
}

const researchAndDiscovery = {
  description: [
    'Research focused on understanding decision fatigue, planning psychology, and existing productivity app patterns. I analyzed competing apps to identify common pain points like overwhelming feature sets, unclear task hierarchies, and the blurring of planning vs. execution contexts.',
    'I also conducted informal user interviews with people who struggled to maintain planning habits, discovering that many abandoned apps not due to lack of features, but because the apps added cognitive overhead rather than reducing it.'
  ],
  quote:
    '"I have like five different planning apps on my phone but I don\'t use any of them consistently. They all feel like work."',
  author: 'Beta User Interview',
  takeaways: [
    'Decision fatigue is real - every configuration option adds mental load',
    'Planning and doing require different mental states and UI patterns',
    'Users want guidance, not infinite flexibility',
    'Calm, focused interfaces feel more trustworthy than busy, feature-rich ones',
    'Habit formation requires consistency and minimal friction'
  ]
}

const strategyAndDesign = {
  description: [
    'The design strategy centered on creating distinct planning and execution modes with clear visual and interaction differences. Planning mode encourages thoughtful intention-setting in a calm, spacious interface, while execution mode focuses users on one thing at a time.',
    'Every design decision was evaluated against one question: Does this reduce cognitive load or add to it? This led to intentional constraints like limited daily task counts, single-focus execution, and the removal of typical productivity app complexity.'
  ],
  highlights: [
    {
      header: 'Planning/Execution Separation',
      Icon: 'FaArrowsLeftRight',
      description:
        'Distinct modes with different UI patterns - planning mode for thoughtful setup, execution mode for focused completion without distraction.'
    },
    {
      header: 'Intentional Constraints',
      Icon: 'FaHandPointDown',
      description:
        'Limited daily task capacity and simplified options to reduce decision fatigue and prevent overwhelming to-do lists.'
    },
    {
      header: 'Calm Visual Design',
      Icon: 'FaPalette',
      description:
        'Sage green color palette and generous whitespace create a focused, calming environment that reduces visual noise.'
    },
    {
      header: 'Single-Task Focus',
      Icon: 'FaBullseye',
      description:
        'Execution mode shows one task at a time, maintaining focus and reducing the anxiety of seeing an entire uncompleted list.'
    },
    {
      header: 'Iterative Refinement',
      Icon: 'FaRotate',
      description:
        'Beta feedback drives continuous UX improvements, balancing user requests with core simplicity principles.'
    },
    {
      header: 'Habit-Forming Patterns',
      Icon: 'FaCheckCircle',
      description:
        'Consistent daily planning rituals and completion feedback build sustainable habits without manipulative gamification.'
    }
  ],
  mockups: [
    {
      imgs: ['/assets/Domani/PlanningMode.png'],
      explanation:
        'Planning mode - calm, spacious interface for thoughtful intention-setting'
    },
    {
      imgs: ['/assets/Domani/ExecutionMode.png'],
      explanation:
        'Execution mode - focused, single-task view for distraction-free completion'
    }
  ]
}

const finalReflections = {
  description: [
    'Domani demonstrates that thoughtful constraints and focused interaction design can create more value than feature abundance. By separating planning from execution and intentionally limiting options, the app reduces cognitive load rather than adding to it.',
    'The app is currently in public beta, with ongoing refinements based on user feedback. Each iteration balances user requests with the core principle of simplicity, ensuring new features serve the mission of reducing decision fatigue rather than adding complexity.'
  ],
  subHeader: 'Current Beta Status',
  url: 'https://domani.app',
  achievements: [
    'Created distinct planning and execution modes that respect user mental states',
    'Designed interaction models that reduce decision fatigue through intentional constraints',
    'Built a calm, focused visual system that supports concentration',
    'Established iterative feedback loops with beta users',
    'Maintained simplicity principles while adding requested features'
  ],
  lessons: [
    'Constraints can create more value than options when applied thoughtfully',
    'Different mental states require different interaction patterns',
    'Simplicity is harder to achieve than complexity',
    'Beta user feedback must be filtered through core product principles',
    'Habit formation happens through consistency, not features'
  ],
  feedback:
    '"This is the first planning app that doesn\'t make me feel overwhelmed. I actually use it every day."',
  client: 'Beta User',
  img: ['/assets/Domani/FinalMocks.png']
}

// Reusable Class Constants (from previous implementation)
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

export default {
  problemFraming,
  projectOverview,
  goalsAndChallenges,
  researchAndDiscovery,
  keyUXDecisions: [], // Content to be added in future ticket
  strategyAndDesign,
  finalReflections
}
