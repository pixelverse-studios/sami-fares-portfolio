'use client'

import { SlideInSection } from '../animations'

export default function AboutMe() {
  return (
    <section id="about" className="halfPage">
      <div className="section grid grid-cols-1 md:grid-cols-2 gap-12">
        <article className="flex flex-col gap-8 justify-center">
          <SlideInSection>
            <h2 className="mb-6">
              About <span className="text-primary">Me</span>
            </h2>
          </SlideInSection>
          <SlideInSection>
            <p>
              I've always been a creative, and my path to design started in
              music. Writing and producing for recording artists taught me how
              to explore ideas, collaborate closely, and turn concepts into
              something people could connect with. Music showed me how to create
              for people—and that's what drew me to UX as well: the idea that
              creativity can shape experiences people actually enjoy and use.
            </p>
          </SlideInSection>
          <SlideInSection>
            <p>
              Today, I design with clarity and purpose. My goal is to reduce
              friction, support decision-making, and make things feel good to
              use. I bring that same mindset to every project: thoughtful,
              hands-on, and focused on creating something that truly works for
              the people using it.
            </p>
          </SlideInSection>
          <SlideInSection>
            <p>
              When I'm not designing, you can probably find me outside fishing.
              It's how I step away from screens, reset, and come back with a
              clearer head.
            </p>
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
    </section>
  )
}
