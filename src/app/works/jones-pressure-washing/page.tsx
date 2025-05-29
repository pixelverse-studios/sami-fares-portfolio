import WorkHero from '@/components/caseStudy/WorkHero'
import ProblemFraming from '@/components/caseStudy/ProblemFraming'
import ProjectOverview from '@/components/caseStudy/ProjectOverview'
import GoalsAndChallenges from '@/components/caseStudy/Goals&Challenges'
import StrategyAndDesign from '@/components/caseStudy/Strategy&Design'
import FinalReflections from '@/components/caseStudy/FinalReflections'
import AvailableCases from '@/components/caseStudy/AvailableCases'
import ResearchAndDiscovery from '@/components/caseStudy/Research&Discovery'

import caseJpw from '@/lib/caseStudies/caseJpw'

export default function WorksJPW() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/JPW case/JPW_Hero.png"
        header="Jones Pressure Washing - UX Case Study"
        descriptor="Designing scalable, trust-focused website for a new exterior washing company in New Jersey"
      />
      <ProblemFraming
        items={caseJpw.problemFraming}
        header="Problem Framing - New Local Business with No Credibility"
      />
      <ProjectOverview {...caseJpw.projectOverview} />
      <GoalsAndChallenges {...caseJpw.goalsAndChallenges} />
      <ResearchAndDiscovery {...caseJpw.researchAndDiscovery} />
      <StrategyAndDesign {...caseJpw.strategyAndDesign} />
      <FinalReflections {...caseJpw.finalReflections} />
      <AvailableCases current="Jones Pressure Washing" showHeader />
    </main>
  )
}
