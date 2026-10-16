import type { Metadata } from 'next'
import FaqSection from '@/components/FaqSection'
import { Shield, BarChart2, Car, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works — How We Run Your VIN Check & Vehicle History Report',
  description: 'Learn how RideChecks generates vehicle history reports using NMVTIS, NHTSA, insurance records, and all 50-state DMV data. Enter a VIN, pick a plan, receive your report in minutes.',
  keywords: [
    'how does VIN check work', 'how vehicle history report works', 'NMVTIS vehicle report',
    'what does VIN check show', 'VIN check explained', 'car history report explained',
    'DMV vehicle records', 'NHTSA recall data', 'vehicle history data sources',
  ],
  alternates: { canonical: 'https://ridechecks.us/how-it-works' },
  openGraph: {
    title: 'How RideChecks VIN Checks & Vehicle History Reports Work',
    description: 'We pull data from NMVTIS, NHTSA, insurance records, and all 50-state DMV databases to give you the most complete vehicle history available.',
    url: 'https://ridechecks.us/how-it-works',
    images: [{ url: 'https://ridechecks.us/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How RideChecks VIN Checks Work',
    description: 'NMVTIS, NHTSA, insurance records & 50-state DMV data — all in one report.',
  },
}

const DATA_SOURCES = [
  { icon: AlertCircle, title: 'Insurance & claims', desc: 'Total-loss and damage claim records reported by carriers.' },
  { icon: Car, title: 'Auction & salvage', desc: 'Listings and sale records from salvage and wholesale auctions.' },
  { icon: Shield, title: 'Title & registration', desc: 'DMV-sourced brand, ownership and registration events.' },
  { icon: BarChart2, title: 'Manufacturer & safety', desc: 'Recall campaigns, build data and published safety ratings.' },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Run a VIN Check & Get a Vehicle History Report',
  description: 'Check any used car\'s history in 3 simple steps using RideChecks.',
  totalTime: 'PT5M',
  supply: [{ '@type': 'HowToSupply', name: 'Vehicle VIN number (17 characters)' }],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Enter the VIN', text: 'Type or paste the 17-character VIN from the windshield, doorframe, or registration into the search bar at ridechecks.us/vin-check.' },
    { '@type': 'HowToStep', position: 2, name: 'Select your report plan', text: 'Choose Standard ($29.99), Professional ($44.99), or Instant ($59.99) based on the level of detail you need.' },
    { '@type': 'HowToStep', position: 3, name: 'Receive your vehicle history report', text: 'Your completed report is delivered to your email, typically within 30 minutes to 24 hours depending on the plan.' },
  ],
}

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <section className="bg-[#faf8f4] dark:bg-[#080c18] text-slate-900 dark:text-white py-20 text-center px-4">
        <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-2">HOW IT WORKS</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Three simple steps to check a vehicle.</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">No phone calls, no waiting on a dealer. A VIN is all we need to start pulling the record.</p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-12">
          {[
            { n: '01', title: 'Enter the VIN', desc: 'Type or paste the 17-character VIN from the windshield plate, doorframe label or registration.' },
            { n: '02', title: 'Select your package', desc: 'Choose the report package and delivery option that best suits your needs.' },
            { n: '03', title: 'Receive your report', desc: 'Your completed report will be delivered according to the timeframe shown for your selected package.' },
          ].map(s => (
            <div key={s.n} className="flex gap-8 items-start">
              <span className="text-7xl font-black text-[#c4953a]/20 leading-none">{s.n}</span>
              <div className="pt-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-2">WHERE THE DATA COMES FROM</p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">100+ sources, four record families.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DATA_SOURCES.map(ds => (
              <div key={ds.title} className="bg-white dark:bg-[#0e1628] border border-slate-200 dark:border-white/10 rounded-xl p-5 flex gap-4">
                <div className="w-10 h-10 bg-[#c4953a]/10 rounded-lg flex items-center justify-center shrink-0">
                  <ds.icon size={18} className="text-[#c4953a]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{ds.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{ds.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  )
}
