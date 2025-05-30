const ContactMap = new Map()
ContactMap.set('email', 'samifdesigns@gmail.com')
ContactMap.set('linkedin', 'www.linkedin.com/in/sami-fares812')

const NavigationMap = new Map()
NavigationMap.set('home', { label: '', id: 'home' })
NavigationMap.set('work', { label: 'Work', id: 'work' })
NavigationMap.set('about', { label: 'About', id: 'about' })
NavigationMap.set('contact', { label: 'Contact', id: 'contact' })

const CasesMap = new Map()
CasesMap.set(0, { label: 'Problem', id: 'Problem' })
CasesMap.set(1, { label: 'Overview', id: 'Overview' })
CasesMap.set(2, { label: 'Challenges', id: 'Challenges' })
CasesMap.set(3, { label: 'Research', id: 'Research' })
CasesMap.set(4, { label: 'Strategy', id: 'Strategy' })
CasesMap.set(5, { label: 'Final', id: 'Final' })

export { ContactMap, NavigationMap, CasesMap }
