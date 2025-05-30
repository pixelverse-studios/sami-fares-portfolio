import { FaEnvelope, FaLinkedinIn, FaFilePdf } from 'react-icons/fa6'

import { ContactMap } from '@/lib/constants'

export default function Footer() {
  return (
    <footer id="contact" className="bg-background-section">
      <section className="max-w-custom mx-auto min-h-16 px-x-gap py-y-gap space-y-10">
        <p className="text-xl text-center">
          Open to joining a UX team - let's connect
        </p>
        <ul className="max-w-sm mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-10">
          <a href={`mailto:${ContactMap.get('email')}`}>
            <li className="flex flex-col gap-4 items-center group cursor-pointer">
              <FaEnvelope size={30} className="text-primary" />
              <span className="transition-all duration-200 group-hover:text-primary">
                Email
              </span>
            </li>
          </a>
          <a href={ContactMap.get('linkedin')} target="__blank">
            <li className="flex flex-col gap-4 items-center group cursor-pointer">
              <FaLinkedinIn size={30} className="text-primary" />
              <span className="transition-all duration-200 group-hover:text-primary">
                LinkedIn
              </span>
            </li>
          </a>
          <li className="flex flex-col gap-4 items-center group cursor-pointer">
            <FaFilePdf size={30} className="text-primary" />
            <span className="transition-all duration-200 group-hover:text-primary">
              Resume
            </span>
          </li>
        </ul>
        <p className="text-text-body text-sm text-center">
          © {new Date().getFullYear()} Sami Fares. All rights reserved.
        </p>
      </section>
    </footer>
  )
}
