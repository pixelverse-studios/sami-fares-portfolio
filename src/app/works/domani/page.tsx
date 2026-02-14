import WorkHero from '@/components/caseStudy/WorkHero'
import ProductContext from '@/components/caseStudy/domani/ProductContext'
import ProductHypothesis from '@/components/caseStudy/domani/ProductHypothesis'
import DomaniDecisions from '@/components/caseStudy/domani/DomaniDecisions'
import DomaniReflection from '@/components/caseStudy/domani/DomaniReflection'
import ChallengesLearnings from '@/components/caseStudy/domani/ChallengesLearnings'
import ProjectDemonstrates from '@/components/caseStudy/domani/ProjectDemonstrates'
import WhatsNext from '@/components/caseStudy/domani/WhatsNext'
import AvailableCases from '@/components/caseStudy/AvailableCases'

import caseDomani from '@/lib/caseStudies/caseDomani'

export default function WorksDomani() {
  return (
    <>
      <WorkHero
        img="/assets/Domani/DomaniHero.png"
        header="Domani"
        descriptor="A calm, habit-focused planning app designed to help users trust tomorrow's decisions."
      />
      <ProductContext {...caseDomani.productContext} />
      <ProductHypothesis {...caseDomani.productHypothesis} />
      <DomaniDecisions {...caseDomani.keyUXDecisions} />
      <DomaniReflection {...caseDomani.reflection} />
      <ChallengesLearnings {...caseDomani.challengesLearnings} />
      <ProjectDemonstrates {...caseDomani.projectDemonstrates} />
      <WhatsNext {...caseDomani.whatsNext} />
      <AvailableCases current="Domani" showHeader />
    </>
  )
}
