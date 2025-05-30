'use client'

import AvailableCases from '../caseStudy/AvailableCases'
import { SlideInSection } from '../animations'

export default function FeaturedWorks() {
  return (
    <section id="work" className="halfPage">
      <div className="section">
        <SlideInSection>
          <h3>Featured Work</h3>
        </SlideInSection>
        <AvailableCases current="" showHeader={false} />
      </div>
    </section>
  )
}
