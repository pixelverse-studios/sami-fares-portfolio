import WorkHero from '@/components/caseStudy/WorkHero'
import ProblemFraming from '@/components/caseStudy/ProblemFraming'
import ProjectOverview from '@/components/caseStudy/ProjectOverview'
import GoalsAndChallenges from '@/components/caseStudy/Goals&Challenges'
import ResearchAndDiscovery from '@/components/caseStudy/Research&Discovery'
import KeyUXDecisions from '@/components/caseStudy/KeyUXDecisions'
import FinalReflections from '@/components/caseStudy/FinalReflections'
import AvailableCases from '@/components/caseStudy/AvailableCases'

import caseJpw from '@/lib/caseStudies/caseJpw'

export default function WorksJPW() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/JPW case/JPW_Hero.png"
        header="Jones Pressure Washing - UX Case Study"
        descriptor="Designing a trust-driven digital experience that helps homeowners confidently request quotes from a new local service business"
      />
      <ProblemFraming
        items={caseJpw.problemFraming}
        header="Problem Framing: Establishing Trust Without Social Proof"
      />
      <ProjectOverview {...caseJpw.projectOverview} />
      <GoalsAndChallenges {...caseJpw.goalsAndChallenges} />
      <ResearchAndDiscovery {...caseJpw.researchAndDiscovery} />
      {caseJpw.keyUXDecisions && caseJpw.keyUXDecisions.length > 0 && (
        <KeyUXDecisions decisions={caseJpw.keyUXDecisions} />
      )}
      <FinalReflections {...caseJpw.finalReflections} />
      <AvailableCases current="Jones Pressure Washing" showHeader />
    </main>
  )
}
