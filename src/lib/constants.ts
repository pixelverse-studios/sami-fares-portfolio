const ContactMap = new Map()
ContactMap.set('email', 'Hello@samifdesigns@gmail.com')
ContactMap.set('linkedin', 'https://linkedin.com')

const NavigationMap = new Map()
NavigationMap.set('home', { label: '', id: 'home' })
NavigationMap.set('work', { label: 'Work', id: 'work' })
NavigationMap.set('about', { label: 'About', id: 'about' })
NavigationMap.set('contact', { label: 'Contact', id: 'contact' })

const CasesMap = new Map()
CasesMap.set(0, { label: 'Problem Framing', id: 'Problem Framing' })
CasesMap.set(1, { label: 'Overview', id: 'Overview' })
CasesMap.set(2, { label: 'Goals & Challenges', id: 'Goals & Challenges' })
CasesMap.set(3, { label: 'Research & Discovery', id: 'Research & Discovery' })
CasesMap.set(4, { label: 'UX Strategy', id: 'UX Strategy' })
CasesMap.set(5, { label: 'Final Designs', id: 'Final Designs' })

export { ContactMap, NavigationMap, CasesMap }
