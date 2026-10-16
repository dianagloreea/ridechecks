import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import ThemeProvider from '@/components/ThemeProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const BASE_URL = 'https://ridechecks.us'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'RideChecks — Vehicle History Reports | VIN Check USA',
    template: '%s | RideChecks',
  },
  description: 'Run a VIN check and get a detailed vehicle history report in minutes. Accident records, title issues, odometer fraud, recalls & more. Trusted by thousands of US car buyers.',
  keywords: ['VIN check', 'vehicle history report', 'car history report', 'VIN lookup', 'used car check', 'carfax alternative', 'vehicle history check', 'VIN number check', 'car accident history', 'title check'],
  authors: [{ name: 'RideChecks', url: BASE_URL }],
  creator: 'RideChecks',
  publisher: 'RideChecks',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'RideChecks',
    title: 'RideChecks — Vehicle History Reports | VIN Check USA',
    description: 'Run a VIN check and get a detailed vehicle history report in minutes. Accident records, title issues, odometer fraud, recalls & more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RideChecks — Vehicle History Reports' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RideChecks — Vehicle History Reports | VIN Check USA',
    description: 'Run a VIN check and get a detailed vehicle history report in minutes.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '64x64', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/logo.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: '',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RideChecks',
  url: 'https://ridechecks.us',
  logo: 'https://ridechecks.us/logo.png',
  description: 'Professional vehicle history report service for US car buyers.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@ridechecks.us',
    contactType: 'customer support',
    availableLanguage: 'English',
    hoursAvailable: 'Mo-Su 08:00-22:00',
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RideChecks',
  url: 'https://ridechecks.us',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ridechecks.us/vin-check?vin={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: '#0e1628', color: '#faf8f4', border: '1px solid rgba(196,149,58,0.3)', fontFamily: 'var(--font-body)' },
            success: { iconTheme: { primary: '#c4953a', secondary: '#faf8f4' } },
            error: { iconTheme: { primary: '#ef4444', secondary: '#faf8f4' } },
          }}
        />
      </body>
    </html>
  )
}
