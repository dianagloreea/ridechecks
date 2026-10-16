import type { Metadata } from 'next'

export const homeMetadata: Metadata = {
  title: 'Free VIN Check — Instant Vehicle History Reports USA | RideChecks',
  description: 'Check any VIN free in seconds. Get full vehicle history reports: accident records, title issues, odometer fraud, theft history, open recalls & ownership history. Trusted by 50,000+ US buyers.',
  keywords: [
    'free VIN check', 'VIN check', 'vehicle history report', 'car history check',
    'VIN lookup free', 'check VIN number', 'used car history', 'carfax alternative free',
    'vehicle report USA', 'accident history check', 'title history check',
    'odometer fraud detection', 'stolen car check', 'recall check by VIN',
    'NMVTIS vehicle history', 'run VIN check online', 'car background check',
  ],
  alternates: { canonical: 'https://ridechecks.us' },
  openGraph: {
    title: 'Free VIN Check — Instant Vehicle History Reports | RideChecks',
    description: 'Check any VIN free in seconds. Accident records, title issues, odometer fraud, theft history, recalls & ownership history. 50,000+ US buyers trust RideChecks.',
    url: 'https://ridechecks.us',
    images: [{ url: 'https://ridechecks.us/og-image.png', width: 1200, height: 630, alt: 'RideChecks — Free VIN Check & Vehicle History Reports' }],
  },
}
