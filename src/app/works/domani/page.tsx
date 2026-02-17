import WorkHero from '@/components/caseStudy/WorkHero'
import ProductContext from '@/components/caseStudy/domani/ProductContext'
import ProductHypothesis from '@/components/caseStudy/domani/ProductHypothesis'
import DomaniDecisions from '@/components/caseStudy/domani/DomaniDecisions'
import DomaniReflection from '@/components/caseStudy/domani/DomaniReflection'
import ChallengesLearnings from '@/components/caseStudy/domani/ChallengesLearnings'
import ProjectDemonstrates from '@/components/caseStudy/domani/ProjectDemonstrates'
import WhatsNext from '@/components/caseStudy/domani/WhatsNext'
import AvailableCases from '@/components/caseStudy/AvailableCases'
import { FaRegCalendar, FaCircle, FaWandMagicSparkles } from 'react-icons/fa6'

import caseDomani, { domaniClasses } from '@/lib/caseStudies/caseDomani'

export default function WorksDomani() {
  return (
    <>
      <WorkHero
        header="Domani"
        descriptor="A calm, habit-focused planning app designed to help users trust tomorrow's decisions"
        badgeText="Portfolio Case Study"
        badgeClassName={domaniClasses.badgeSage}
        titleClassName={domaniClasses.hero.title}
        tagClassName={domaniClasses.hero.tag}
        tags={[
          {
            icon: <FaRegCalendar className="text-xs" />,
            label: 'Public Beta'
          },
          {
            icon: <FaCircle className="text-[6px] text-primary" />,
            label: 'Product Designer'
          },
          {
            icon: <FaWandMagicSparkles className="text-xs" />,
            label: 'iOS & Android'
          }
        ]}
        ctaUrl="https://www.domani-app.com"
        ctaLabel="Download app here"
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
