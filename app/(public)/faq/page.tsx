import type { Metadata } from 'next'
import { FAQ_ITEMS } from '@/lib/types'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions About VIN Checks',
  description: 'Answers to the most common questions about RideChecks vehicle history reports — what a VIN check includes, how long it takes, accuracy, and refund policy.',
  alternates: { canonical: 'https://ridechecks.us/faq' },
  openGraph: {
    title: 'FAQ — RideChecks Vehicle History Reports',
    description: 'Answers to common questions about VIN checks, vehicle history reports, delivery times, accuracy, and refunds.',
    url: 'https://ridechecks.us/faq',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function FaqPage() {
  return (
    <main className="bg-white dark:bg-[#080c18] text-slate-900 dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Support</p>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Everything you need to know about VIN checks and vehicle history reports.
          </p>
        </div>
      </section>

      <FaqSection />
    </main>
  )
}
