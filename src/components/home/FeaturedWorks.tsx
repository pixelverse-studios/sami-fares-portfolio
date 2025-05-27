'use client'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const works = [
  {
    img: '/assets/Home_JPW.png',
    label: 'Jones Pressure Washing',
    description:
      'Designed a full website for a local pressure washing business previously operating with only a single landing page. Led all UX, visual design, and copywriting — with a focus on local SEO, conversion-oriented content, and a premium brand presence built to scale in a competitive market.',
    destination: '/works/jones-pressure-washing'
  },
  {
    img: '/assets/Home_360.png',
    label: '360 Degree Care',
    description:
      'Designed a multi-page website for a new home health care provider launching online for the first time. Balanced client-driven visual preferences with user-centered UX to build trust, deliver clarity, and support long-term growth.',
    destination: '/works/360-degree-care'
  }
]

export default function FeaturedWorks() {
  const router = useRouter()

  const onReadClick = (to: string) => router.push(to)

  return (
    <section id="work" className="halfPage">
      <div className="section">
        <h3>Featured Work</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {works.map(item => (
            <div
              key={item.label}
              className="grid grid-rows-2 shadow-xl rounded-xl border-primary bg-background-section">
              <div className="px-6 py-4 h-80">
                <img
                  src={item.img}
                  alt={`${item.label} example image`}
                  className="object-fit h-full w-auto mx-auto"
                />
              </div>
              <div className="bg-background-subtle rounded-b-xl h-full">
                <div className="h-full px-6 py-8 grid grid-rows-[2rem_1fr_2rem] gap-4 items-start justify-items-start">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                  <Button
                    className="pl-0"
                    variant="link"
                    onClick={() => onReadClick(item.destination)}>
                    Read Case Study {'->'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}
