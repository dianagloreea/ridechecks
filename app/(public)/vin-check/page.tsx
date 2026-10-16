import type { Metadata } from 'next'
import VinCheckClient from './VinCheckClient'

export const metadata: Metadata = {
  title: 'VIN Check — Free VIN Lookup & Vehicle History Report',
  description: 'Enter any 17-character VIN to instantly check a vehicle\'s history. Accidents, title brands, odometer fraud, recalls, theft records and more. Fast, accurate, affordable.',
  alternates: { canonical: 'https://ridechecks.us/vin-check' },
  openGraph: {
    title: 'Free VIN Check — Vehicle History Report | RideChecks',
    description: 'Enter any VIN to check a vehicle\'s accident history, title issues, odometer records, recalls, and more. Reports delivered in as little as 30 minutes.',
    url: 'https://ridechecks.us/vin-check',
  },
}

export default function VinCheckPage() {
  return <VinCheckClient />
}
