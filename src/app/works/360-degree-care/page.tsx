import WorkHero from '@/components/caseStudy/WorkHero'
import ProblemFraming from '@/components/caseStudy/ProblemFraming'
import ProjectOverview from '@/components/caseStudy/ProjectOverview'
import GoalsAndChallenges from '@/components/caseStudy/Goals&Challenges'
import ResearchAndDiscovery from '@/components/caseStudy/Research&Discovery'
import StrategyAndDesign from '@/components/caseStudy/Strategy&Design'
import FinalReflections from '@/components/caseStudy/FinalReflections'
import AvailableCases from '@/components/caseStudy/AvailableCases'

import case360 from '@/lib/caseStudies/case360'

export default function Works360Degree() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/360 case/HomeMockDesktop.png"
        header="360 Degree Care - UX Case Study"
        descriptor="Designing a user-centered home care website while balancing evolving client preferences"
      />
      <ProblemFraming
        header="Problem Framing - Creating Digital Trust for a New Care Brand"
        items={case360.problemFraming}
      />
      <ProjectOverview {...case360.projectOverview} />
      <GoalsAndChallenges {...case360.goalsAndChallenges} />
      <ResearchAndDiscovery {...case360.researchAndDiscovery} />
      <StrategyAndDesign {...case360.strategyAndDesign} />
      <FinalReflections {...case360.finalReflections} />
      <AvailableCases current="360 Degree Care" showHeader />
    </main>
  )
}
