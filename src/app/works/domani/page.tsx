import WorkHero from '@/components/caseStudy/WorkHero'
import ProblemFraming from '@/components/caseStudy/ProblemFraming'
import ProjectOverview from '@/components/caseStudy/ProjectOverview'
import GoalsAndChallenges from '@/components/caseStudy/Goals&Challenges'
import ResearchAndDiscovery from '@/components/caseStudy/Research&Discovery'
import KeyUXDecisions from '@/components/caseStudy/KeyUXDecisions'
import StrategyAndDesign from '@/components/caseStudy/Strategy&Design'
import FinalReflections from '@/components/caseStudy/FinalReflections'
import AvailableCases from '@/components/caseStudy/AvailableCases'

import caseDomani from '@/lib/caseStudies/caseDomani'

export default function WorksDomani() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/Domani/DomaniHero.png"
        header="Domani - UX Case Study"
        descriptor="Designing a calm, habit-building planning app that reduces decision fatigue and helps users follow through on daily intentions"
      />
      <ProblemFraming
        items={caseDomani.problemFraming}
        header="Problem Framing - Planning Without Execution"
      />
      <ProjectOverview {...caseDomani.projectOverview} />
      <GoalsAndChallenges {...caseDomani.goalsAndChallenges} />
      <ResearchAndDiscovery {...caseDomani.researchAndDiscovery} />
      {caseDomani.keyUXDecisions && caseDomani.keyUXDecisions.length > 0 && (
        <KeyUXDecisions decisions={caseDomani.keyUXDecisions} />
      )}
      <StrategyAndDesign {...caseDomani.strategyAndDesign} />
      <FinalReflections {...caseDomani.finalReflections} />
      <AvailableCases current="Domani" showHeader />
    </main>
  )
}
