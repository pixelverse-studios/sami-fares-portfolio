import WorkHero from '@/components/caseStudy/WorkHero'
import ProblemFraming from '@/components/caseStudy/ProblemFraming'
import ProjectOverview from '@/components/caseStudy/ProjectOverview'
import GoalsAndChallenges from '@/components/caseStudy/Goals&Challenges'
import StrategyAndDesign from '@/components/caseStudy/Strategy&Design'
import FinalReflections from '@/components/caseStudy/FinalReflections'
import AdditionalCases from '@/components/caseStudy/AdditionalCases'

import caseJpw from '@/lib/caseStudies/caseJpw'

export default function WorksJPW() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/JPW case/JPW_Hero.png"
        header="360 Degree Care - UX Case Study"
        descriptor="Designing a user-centered home care website while balancing evolving client preferences"
      />
      <ProblemFraming
        items={caseJpw.problemFraming}
        header="Problem Framing - New Local Business with No Credibility"
      />
      <ProjectOverview {...caseJpw.projectOverview} />
      <GoalsAndChallenges {...caseJpw.goalsAndChallenges} />
      <StrategyAndDesign {...caseJpw.strategyAndDesign} />
      <FinalReflections {...caseJpw.finalReflections} />
      <AdditionalCases cases={caseJpw.additionalCases} />
    </main>
  )
}
