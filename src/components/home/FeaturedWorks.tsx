'use client'

import AvailableCases from '../caseStudy/AvailableCases'
import { SlideInSection } from '../animations'

export default function FeaturedWorks() {
  return (
    <section id="work" className="halfPage">
      <div className="section">
        <SlideInSection>
          <h2>Featured Work</h2>
        </SlideInSection>
        <AvailableCases current="" showHeader={false} />
      </div>
    </section>
  )
}
