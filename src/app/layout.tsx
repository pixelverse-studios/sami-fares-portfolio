// app/layout.tsx
import type { Metadata } from 'next'
import Script from 'next/script'
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
  title: 'Sami Fares | UI/UX',
  description:
    "I'm a UX Designer who makes things easy to use and hard to ignore.",
  icons: {
    icon: [
      {
        url: '/assets/favicon_16x16.svg',
        type: 'image/svg+xml',
        sizes: '16x16'
      },
      {
        url: '/assets/favicon_32x32.svg',
        type: 'image/svg+xml',
        sizes: '32x32'
      },
      {
        url: '/assets/favicon_200x200.svg',
        type: 'image/svg+xml',
        sizes: '64x64'
      }
    ],
    apple: [
      {
        url: '/assets/favicon_200x200.svg',
        sizes: '180x180',
        type: 'image/svg+xml'
      }
    ],
    shortcut: '/assets/favicon_32x32.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samifares.com',
    siteName: 'Sami Fares Portfolio',
    title: 'Sami Fares | UI/UX Designer',
    description:
      "I'm a UX Designer who makes things easy to use and hard to ignore.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sami Fares - UI/UX Designer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@samifares',
    creator: '@samifares',
    title: 'Sami Fares | UI/UX Designer',
    description:
      "I'm a UX Designer who makes things easy to use and hard to ignore.",
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
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
        <Script
          id="site-behaviour-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var sbSiteSecret = '44850ac3-c46a-49ee-a3a9-65e1cc703258';
                window.sitebehaviourTrackingSecret = sbSiteSecret;
                var scriptElement = document.createElement('script');
                scriptElement.async = true;
                scriptElement.id = 'site-behaviour-script-v2';
                scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                document.head.appendChild(scriptElement); 
              })()
            `
          }}
        />
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
