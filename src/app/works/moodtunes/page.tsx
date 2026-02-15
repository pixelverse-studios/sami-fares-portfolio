'use client'

import WorkHero from '@/components/caseStudy/WorkHero'
import ProblemFraming from '@/components/caseStudy/ProblemFraming'
import ProjectOverview from '@/components/caseStudy/ProjectOverview'
import GoalsAndChallenges from '@/components/caseStudy/Goals&Challenges'
import ResearchAndDiscovery from '@/components/caseStudy/Research&Discovery'
import KeyUXDecisions from '@/components/caseStudy/KeyUXDecisions'
import StrategyAndDesign from '@/components/caseStudy/Strategy&Design'
import FinalReflections from '@/components/caseStudy/FinalReflections'
import AvailableCases from '@/components/caseStudy/AvailableCases'

import caseMood from '@/lib/caseStudies/caseMood'

export default function WorksMoodTunes() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/MoodTunes/HomeScreen.png"
        header="MoodTunes - UX Case Study"
        descriptor="Designing a music discovery experience that adapts to how you feel in the moment."
        subDescriptor="(Conceptual product design project)"
      />
      <ProblemFraming
        items={caseMood.problemFraming}
        header="Problem Framing – Music That Matches the Moment"
      />
      <ProjectOverview {...caseMood.projectOverview} />
      <GoalsAndChallenges
        {...caseMood.goalsAndChallenges}
        header="UX Hypothesis: Designing for Mood, Energy, and Intent"
      />
      <ResearchAndDiscovery
        {...caseMood.researchAndDiscovery}
        header="Concept Validation & Design Inputs"
      />
      {caseMood.keyUXDecisions && caseMood.keyUXDecisions.length > 0 && (
        <KeyUXDecisions
          decisions={caseMood.keyUXDecisions}
          header="Interaction Model & Key Design Decisions"
        />
      )}
      <StrategyAndDesign {...caseMood.strategyAndDesign} />
      <FinalReflections
        {...caseMood.finalReflections}
        outcomesHeader="What This Project Demonstrates"
      />
      <AvailableCases current="MoodTunes" showHeader />
    </main>
  )
}
