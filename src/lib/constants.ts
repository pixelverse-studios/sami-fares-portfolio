const ContactMap = new Map()
ContactMap.set('email', 'Hello@samifdesigns@gmail.com')
ContactMap.set('linkedin', 'https://linkedin.com')

const NavigationMap = new Map()
NavigationMap.set('home', { label: '', id: 'home' })
NavigationMap.set('work', { label: 'Work', id: 'work' })
NavigationMap.set('about', { label: 'About', id: 'about' })
NavigationMap.set('contact', { label: 'Contact', id: 'contact' })

export { ContactMap, NavigationMap }
