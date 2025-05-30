'use client'
import { SlideInSection } from '../animations'

export default function HomeHero() {
  return (
    <section id="home" className="halfPage mt-16">
      <div className="section grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-end">
        <SlideInSection>
          <article className="flex flex-col gap-6 justify-center">
            <h2>
              Hi, I’m <span className="text-primary">Sami</span> — a UX/UI
              designer who makes digital experiences both easy to use and hard
              to ignore.
            </h2>
            <p className="text-text-body">
              I design interfaces your users will appreciate.
            </p>
          </article>
        </SlideInSection>
        <SlideInSection direction="right">
          <img src="/assets/NewAvatar.png" alt="Avatar" />
        </SlideInSection>
      </div>
    </section>
  )
}
