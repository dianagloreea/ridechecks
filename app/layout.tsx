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
    default: 'RideChecks — Free VIN Check & Vehicle History Reports USA',
    template: '%s | RideChecks',
  },
  description: 'Run a free VIN check instantly. Get a full vehicle history report — accident records, title issues, odometer fraud, theft records, recalls & ownership history. Trusted by US car buyers.',
  keywords: [
    'VIN check', 'free VIN check', 'vehicle history report', 'car history report',
    'VIN lookup', 'used car check', 'carfax alternative', 'vehicle history check',
    'VIN number check', 'car accident history', 'title check', 'run VIN check',
    'check car history', 'vehicle report', 'auto history report', 'salvage title check',
    'odometer fraud check', 'car theft check', 'VIN decoder', 'NMVTIS report',
  ],
  authors: [{ name: 'RideChecks', url: BASE_URL }],
  creator: 'RideChecks',
  publisher: 'RideChecks',
  category: 'automotive',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'RideChecks',
    title: 'RideChecks — Free VIN Check & Vehicle History Reports USA',
    description: 'Run a free VIN check and get a full vehicle history report — accident records, title issues, odometer fraud, theft records & more. Instant results.',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'RideChecks — Vehicle History Reports & VIN Check' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RideChecks — Free VIN Check & Vehicle History Reports',
    description: 'Run a free VIN check and get a full vehicle history report instantly. Accident history, title check, odometer fraud & more.',
    images: [`${BASE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/favicon-icon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-icon.ico', sizes: '64x64', type: 'image/x-icon' },
      { url: '/favicon-icon.ico', sizes: '128x128', type: 'image/x-icon' },
      { url: '/favicon-icon.ico', sizes: '256x256', type: 'image/x-icon' },
    ],
    apple: [{ url: '/favicon-icon.ico', sizes: '180x180' }],
    shortcut: '/favicon-icon.ico',
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
  alternateName: 'RideChecks Vehicle History Reports',
  url: 'https://ridechecks.us',
  logo: {
    '@type': 'ImageObject',
    url: 'https://ridechecks.us/logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://ridechecks.us/og-image.png',
  description: 'RideChecks provides instant vehicle history reports and VIN checks for US car buyers. Access accident records, title history, odometer readings, theft records, and recall information.',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'support@ridechecks.us',
      contactType: 'customer support',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Vehicle History Report Plans',
    itemListElement: [
      { '@type': 'Offer', name: 'Standard Report', price: '29.99', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Professional Report', price: '44.99', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Instant Report', price: '59.99', priceCurrency: 'USD' },
    ],
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RideChecks',
  alternateName: 'RideChecks VIN Check',
  url: 'https://ridechecks.us',
  description: 'Free VIN check and vehicle history reports for US car buyers.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://ridechecks.us/vin-check?vin={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Vehicle History Report',
  alternateName: 'VIN Check',
  provider: { '@type': 'Organization', name: 'RideChecks', url: 'https://ridechecks.us' },
  description: 'Comprehensive vehicle history reports including accident records, title checks, odometer fraud detection, theft records, recall information, and ownership history.',
  serviceType: 'Vehicle History Report',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://ridechecks.us/vin-check',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '29.99',
    highPrice: '59.99',
    priceCurrency: 'USD',
    offerCount: 3,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1247',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
