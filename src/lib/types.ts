/**
 * Mockup data structure for case study image galleries
 */
export type Mockup = {
  imgs: string[]
  explanation: string
}

/**
 * Case study card data for homepage listing
 */
export type CaseStudy = {
  img: string
  label: string
  description: string
  destination: string
  category?: string
  tags?: string[]
}

/**
 * UX decision documentation structure for KeyUXDecisions component
 * Displays problem-solving process with 6-part framework
 */
export interface UXDecision {
  /** Decision title/name */
  title: string
  /** The problem or challenge identified */
  problem?: string
  /** Risk if the problem is not addressed */
  risk?: string
  /** The decision made to address the problem */
  decision: string
  /** How the solution was implemented */
  solution?: string
  /** What was given up or compromised in this decision */
  tradeoff?: string
  /** Short rationale for simplified decision format */
  rationale?: string
}

/**
 * Project overview metadata section (0.1)
 */
export interface ProjectOverview {
  context: string[]
  roles: string[]
  client: string
  deliverables: string[]
  timeline: string
  tools: string[]
}

/**
 * Goals and challenges section (0.2)
 */
export interface GoalsAndChallenges {
  goals: string[]
  challenges: string[]
  description: string[]
}

/**
 * Research findings section (0.3)
 */
export interface ResearchAndDiscovery {
  description: string[]
  quote: string
  author: string
  takeaways: string[]
}

/**
 * Strategy highlight for design decisions
 */
export interface StrategyHighlight {
  header: string
  Icon: string
  description: string
}

/**
 * Strategy and design section (0.5)
 */
export interface StrategyAndDesign {
  description: string[]
  highlights: StrategyHighlight[]
  mockups: Mockup[]
}

/**
 * Additional case study cross-link
 */
export interface AdditionalCase {
  title: string
  img: string
  route: string
}

/**
 * Final reflections section (0.6)
 */
export interface FinalReflections {
  description: string[]
  subHeader: string
  url: string
  achievements: string[]
  lessons: string[]
  feedback: string
  client: string
  img: string[]
}

/**
 * Complete case study data structure
 * All sections are optional for backward compatibility except problemFraming
 */
export interface CaseStudyData {
  /** Problem statement section (0.0) */
  problemFraming: string[]
  /** Project overview metadata (0.1) */
  projectOverview?: ProjectOverview
  /** Goals and challenges (0.2) */
  goalsAndChallenges?: GoalsAndChallenges
  /** Research findings (0.3) */
  researchAndDiscovery?: ResearchAndDiscovery
  /** Key UX decisions and tradeoffs (0.4) - NEW */
  keyUXDecisions?: UXDecision[]
  /** Strategy and design decisions (0.5) */
  strategyAndDesign?: StrategyAndDesign
  /** Final designs and reflections (0.6) */
  finalReflections?: FinalReflections
  /** Cross-links to other case studies */
  additionalCases?: AdditionalCase[]
}
