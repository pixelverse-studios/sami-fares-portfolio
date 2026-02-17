'use client'

import { FadeUpSection, SlideInSection } from '../animations'

const PARAGRAPHS = {
  origin:
    "I've always been a creative, and my path to design started in music. Writing and producing for recording artists taught me how to explore ideas, collaborate closely, and turn concepts into something people could connect with. Music showed me how to create for people\u2014and that's what drew me to UX as well: the idea that creativity can shape experiences people actually enjoy and use.",
  philosophy:
    'Today, I design with clarity and purpose. My goal is to reduce friction, support decision-making, and make things feel good to use. I bring that same mindset to every project: thoughtful, hands-on, and focused on creating something that truly works for the people using it.',
  personal:
    "When I'm not designing, you can probably find me outside fishing. It's how I step away from screens, reset, and come back with a clearer head."
}

export default function AboutMe() {
  return (
    <section id="about" className="halfPage">
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
    </section>
  )
}
