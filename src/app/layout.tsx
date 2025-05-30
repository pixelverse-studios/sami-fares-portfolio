// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import AppNavbar from '@/components/AppNavbar'
import Footer from '@/components/footer'
import { NavigationMap, CasesMap } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  /* … all your existing metadata here … */
}

const navItems = Array.from(NavigationMap.values())
const caseItems = Array.from(CasesMap.values())

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/favicon_32x32.svg"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/assets/favicon_200x200.svg" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem>
          <AppNavbar navItems={navItems} caseItems={caseItems} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
