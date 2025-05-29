'use client'

import AvailableCases from '../caseStudy/AvailableCases'

export default function FeaturedWorks() {
  return (
    <section id="work" className="halfPage">
      <div className="section">
        <h3>Featured Work</h3>
        <AvailableCases current="" showHeader={false} />
      </div>
    </section>
  )
}
