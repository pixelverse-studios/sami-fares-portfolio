'use client'

import { useState } from 'react'
import { FadeUpSection, SlideInSection } from '../animations'

type Layout = 'A' | 'B'

const PARAGRAPHS = {
  origin:
    "I've always been a creative, and my path to design started in music. Writing and producing for recording artists taught me how to explore ideas, collaborate closely, and turn concepts into something people could connect with. Music showed me how to create for people\u2014and that's what drew me to UX as well: the idea that creativity can shape experiences people actually enjoy and use.",
  philosophy:
    'Today, I design with clarity and purpose. My goal is to reduce friction, support decision-making, and make things feel good to use. I bring that same mindset to every project: thoughtful, hands-on, and focused on creating something that truly works for the people using it.',
  personal:
    "When I'm not designing, you can probably find me outside fishing. It's how I step away from screens, reset, and come back with a clearer head."
}

function LayoutToggle({
  active,
  onChange
}: {
  active: Layout
  onChange: (_layout: Layout) => void
}) {
  const layouts: Layout[] = ['A', 'B']
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 rounded-full bg-background-section/90 backdrop-blur-md border border-border-subtle px-1.5 py-1.5 shadow-lg">
      <span className="text-[10px] uppercase tracking-widest text-text-body/50 pl-2 pr-1 select-none">
        Layout
      </span>
      {layouts.map(l => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={`w-8 h-8 rounded-full text-xs font-semibold transition-all duration-300 ${
            active === l
              ? 'bg-primary text-background shadow-md scale-105'
              : 'text-text-body/70 hover:text-text-heading hover:bg-background-subtle'
          }`}>
          {l}
        </button>
      ))}
    </div>
  )
}

/* ─── Layout A: Classic (original) ─── */
function LayoutClassic() {
  return (
    <div className="section grid grid-cols-1 md:grid-cols-2 gap-12">
      <article className="flex flex-col gap-8 justify-center">
        <SlideInSection>
          <h2 className="mb-6">
            About <span className="text-primary">Me</span>
          </h2>
        </SlideInSection>
        <SlideInSection>
          <p>{PARAGRAPHS.origin}</p>
        </SlideInSection>
        <SlideInSection>
          <p>{PARAGRAPHS.philosophy}</p>
        </SlideInSection>
        <SlideInSection>
          <p>{PARAGRAPHS.personal}</p>
        </SlideInSection>
      </article>
      <SlideInSection direction="right">
        <div className="flex-1 bg-background-section p-10 rounded-xl h-full w-auto mx-auto">
          <img
            src="/assets/Home_About.png"
            alt="Creative designs and headphones sketch"
            className="rounded-xl w-full"
          />
        </div>
      </SlideInSection>
    </div>
  )
}

/* ─── Layout B: Stacked ─── */
function LayoutStacked() {
  return (
    <div className="section grid grid-cols-1 md:grid-cols-2 gap-12">
      <SlideInSection>
        <div className="bg-background-section p-10 rounded-xl h-full">
          <img
            src="/assets/Home_About.png"
            alt="Creative designs and headphones sketch"
            className="rounded-xl w-full"
          />
        </div>
      </SlideInSection>
      <article className="flex flex-col gap-8 justify-center">
        <FadeUpSection>
          <h2 className="mb-6">
            About <span className="text-primary">Me</span>
          </h2>
        </FadeUpSection>
        <FadeUpSection delay={100}>
          <div>
            <h4 className="text-primary font-semibold text-base mb-2">
              Origin
            </h4>
            <p>{PARAGRAPHS.origin}</p>
          </div>
        </FadeUpSection>
        <FadeUpSection delay={250}>
          <div>
            <h4 className="text-primary font-semibold text-base mb-2">
              Philosophy
            </h4>
            <p>{PARAGRAPHS.philosophy}</p>
          </div>
        </FadeUpSection>
        <FadeUpSection delay={400}>
          <div>
            <h4 className="text-primary font-semibold text-base mb-2">
              Off the clock
            </h4>
            <p>{PARAGRAPHS.personal}</p>
          </div>
        </FadeUpSection>
      </article>
    </div>
  )
}

export default function AboutMe() {
  const [layout, setLayout] = useState<Layout>('A')

  return (
    <section id="about" className="halfPage">
      {layout === 'A' && <LayoutClassic />}
      {layout === 'B' && <LayoutStacked />}
      <LayoutToggle active={layout} onChange={setLayout} />
    </section>
  )
}
