'use client'

import WorkHero from '@/components/caseStudy/WorkHero'
import ProblemFraming from '@/components/caseStudy/ProblemFraming'
import ProjectOverview from '@/components/caseStudy/ProjectOverview'
import GoalsAndChallenges from '@/components/caseStudy/Goals&Challenges'
import StrategyAndDesign from '@/components/caseStudy/Strategy&Design'
import FinalReflections from '@/components/caseStudy/FinalReflections'
import AvailableCases from '@/components/caseStudy/AvailableCases'
import ResearchAndDiscovery from '@/components/caseStudy/Research&Discovery'

import caseMood from '@/lib/caseStudies/caseMood'

export default function WorksMoodTunes() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/MoodTunes/HomeScreen.png"
        header="MoodTunes - UX Case Study"
        descriptor="Designing a music discovery experience that curates playlists based on mood, energy, and activity."
      />
      <ProblemFraming
        items={caseMood.problemFraming}
        header="Problem Framing - New Local Business with No Credibility"
      />
      <ProjectOverview {...caseMood.projectOverview} />
      <GoalsAndChallenges {...caseMood.goalsAndChallenges} />
      <ResearchAndDiscovery {...caseMood.researchAndDiscovery} />
      <StrategyAndDesign {...caseMood.strategyAndDesign} />
      <FinalReflections {...caseMood.finalReflections} />
      <AvailableCases current="MoodTunes" showHeader />
    </main>
  )
}
