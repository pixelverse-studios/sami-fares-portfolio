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
  title: 'Sami Fares | UX/UI',
  description:
    "I'm a UX Designer who makes things easy to use and hard to ignore.",
  icons: {
    icon: [
      {
        url: '/assets/NewAvatar.png',
        type: 'image/png',
        sizes: '16x16'
      },
      {
        url: '/assets/NewAvatar.png',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        url: '/assets/NewAvatar.png',
        type: 'image/png',
        sizes: '64x64'
      }
    ],
    apple: [
      {
        url: '/assets/NewAvatar.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    shortcut: '/assets/NewAvatar.png'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.samifares.com',
    siteName: 'Sami Fares Portfolio',
    title: 'Sami Fares | UX/UI Designer',
    description:
      "I'm a UX Designer who makes things easy to use and hard to ignore.",
    images: [
      {
        url: 'https://www.samifares.com/og-image.jpg', // Use absolute URL
        width: 1200,
        height: 630,
        alt: 'Sami Fares - UX/UI Designer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@samifares',
    creator: '@samifares',
    title: 'Sami Fares | UX/UI Designer',
    description:
      "I'm a UX Designer who makes things easy to use and hard to ignore.",
    images: ['https://www.samifares.com/og-image.jpg'] // Use absolute URL
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
        {/* <link rel="icon" href="/assets/NewAvatar.png" type="image/png" /> */}
        <link rel="apple-touch-icon" href="/assets/NewAvatar.png" />
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
