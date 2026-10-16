import type { Metadata } from 'next'


import VinCheckClient from './VinCheckClient'

export const metadata: Metadata = {
  title: 'Free VIN Check — Instant Vehicle History Lookup | Run VIN Now',
  description: 'Enter any 17-character VIN for an instant vehicle history check. Get accident records, title brands, odometer fraud, open recalls, theft records & ownership history. Results in minutes.',
  keywords: [
    'free VIN check', 'run VIN check', 'VIN lookup', 'VIN number check', 'vehicle history lookup',
    'check car by VIN', 'VIN check online', '17 digit VIN check', 'car VIN report',
    'vehicle identification number check', 'used car VIN check', 'VIN check instant',
  ],
  alternates: { canonical: 'https://ridechecks.us/vin-check' },
  openGraph: {
    title: 'Free VIN Check — Run Instant Vehicle History Lookup | RideChecks',
    description: 'Enter any VIN to check a vehicle\'s accident history, title issues, odometer records, recalls, and more. Reports in minutes.',
    url: 'https://ridechecks.us/vin-check',
    images: [{ url: 'https://ridechecks.us/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free VIN Check — Instant Vehicle History Lookup',
    description: 'Enter any VIN and get a full vehicle history report in minutes. Accident records, title issues, odometer fraud & more.',
  },
}

export default function VinCheckPage() {
  return <VinCheckClient />
}
