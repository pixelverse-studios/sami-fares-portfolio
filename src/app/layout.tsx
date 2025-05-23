import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
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
      <body className={`${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
