'use client'
import { SlideInSection } from '../animations'

export default function HomeHero() {
  return (
    <section id="home" className="halfPage mt-16">
      <div className="section grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-end">
        <SlideInSection className="flex flex-col gap-6 justify-center">
          <h2>
            Hi, I'm <span className="text-primary">Sami</span>.
          </h2>
          <p className="text-text-body text-[1.2rem] font-normal">
            I design digital experiences with people in mind and intention
            behind the details.
          </p>
        </SlideInSection>
        <SlideInSection direction="right">
          <img src="/assets/NewAvatar.png" alt="Avatar" />
        </SlideInSection>
      </div>
    </section>
  )
}
