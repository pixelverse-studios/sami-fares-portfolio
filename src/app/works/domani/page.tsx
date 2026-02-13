import WorkHero from '@/components/caseStudy/WorkHero'
import AvailableCases from '@/components/caseStudy/AvailableCases'

// Custom components will be added in future tickets
// This is a placeholder until PVS-331 epic custom components are implemented

export default function WorksDomani() {
  return (
    <main className="text-text-body">
      <WorkHero
        img="/assets/Domani/DomaniHero.png"
        header="Domani - UX Case Study"
        descriptor="Designing a calm, habit-building planning app that reduces decision fatigue and helps users follow through on daily intentions"
      />

      {/* Placeholder section - Custom components coming soon */}
      <section className="section text-center py-20">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-text-heading">
            Custom Case Study Coming Soon
          </h2>
          <p className="text-text-body">
            Domani uses a custom case study structure with 7 unique components.
            These components are currently being developed as part of the
            PVS-331 epic.
          </p>
        </div>
      </section>

      <AvailableCases current="Domani" showHeader />
    </main>
  )
}
