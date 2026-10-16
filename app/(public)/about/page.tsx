import { Shield, Users, Clock, Award, Mail, MapPin, Phone } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RideChecks — Trusted Vehicle History Report Service USA',
  description: 'RideChecks is a US-based vehicle history report company helping buyers make confident used car decisions. 50,000+ reports delivered. NMVTIS-sourced data. Based in Sheridan, Wyoming.',
  keywords: [
    'about RideChecks', 'vehicle history report company', 'VIN check service USA',
    'trusted car history report', 'US vehicle report service', 'who is RideChecks',
  ],
  alternates: { canonical: 'https://ridechecks.us/about' },
  openGraph: {
    title: 'About RideChecks — Trusted Vehicle History Reports USA',
    description: '50,000+ vehicle history reports delivered. US-based team, NMVTIS data, 30-day money-back guarantee. Learn who we are.',
    url: 'https://ridechecks.us/about',
    images: [{ url: 'https://ridechecks.us/og-image.png', width: 1200, height: 630 }],
  },
}

const STATS = [
  { value: '50,000+', label: 'Reports Delivered' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '30 min', label: 'Average Delivery' },
  { value: '24/7', label: 'Support Available' },
]

const VALUES = [
  { icon: Shield, title: 'Transparency', desc: 'We pull data from official government databases, insurance records, and auction histories — no guesswork, no filler.' },
  { icon: Users, title: 'Customer First', desc: 'Every report is reviewed by our team before delivery. If we find something critical, we flag it clearly so you understand what it means.' },
  { icon: Clock, title: 'Speed', desc: 'Most reports are delivered within 30 minutes. Our Instant Report guarantees delivery in under 30 minutes or your money back.' },
  { icon: Award, title: 'Accuracy', desc: 'We source data from NMVTIS, NHTSA, insurance carriers, and 50-state DMV records to give you the most complete picture available.' },
]

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-[#080c18] text-slate-900 dark:text-white">

      {/* Hero */}
      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">About RideChecks</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">We help you buy used cars with confidence.</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            RideChecks is a US-based vehicle history service founded to give everyday car buyers access to the same data that dealers and auction houses use — at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-[#c4953a]">{s.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Our Story</p>
        <h2 className="text-2xl font-bold mb-5">Built by car buyers, for car buyers.</h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          <p>
            RideChecks was started after our founder bought a used SUV that turned out to have undisclosed flood damage. The car looked perfect at the dealership — clean interior, fresh detail, no visible rust. But within six months, electrical problems started surfacing. A proper vehicle history check would have caught it immediately.
          </p>
          <p>
            That experience led to the creation of RideChecks — a service that makes comprehensive vehicle history reports accessible, affordable, and easy to understand for anyone buying a used car in the United States.
          </p>
          <p>
            Today we serve thousands of customers every month, from individual buyers inspecting a single vehicle to small dealerships running bulk checks on auction inventory. Our reports are trusted because we never cut corners on data sources.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-y border-slate-200 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Our Values</p>
          <h2 className="text-2xl font-bold mb-10">What we stand for.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white dark:bg-[#0e1628] border border-slate-200 dark:border-white/10 rounded-xl p-6">
                <div className="w-10 h-10 bg-[#c4953a]/10 rounded-lg flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-[#c4953a]" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Contact Us</p>
        <h2 className="text-2xl font-bold mb-8">Get in touch.</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 border border-slate-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#0e1628]">
            <div className="w-10 h-10 bg-[#c4953a]/10 rounded-lg flex items-center justify-center shrink-0">
              <Mail size={18} className="text-[#c4953a]" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Email</p>
              <a href="mailto:support@ridechecks.us" className="font-semibold text-slate-900 dark:text-white hover:text-[#c4953a] transition-colors">support@ridechecks.us</a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border border-slate-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#0e1628]">
            <div className="w-10 h-10 bg-[#c4953a]/10 rounded-lg flex items-center justify-center shrink-0">
              <Clock size={18} className="text-[#c4953a]" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Support Hours</p>
              <p className="font-semibold text-slate-900 dark:text-white">Monday – Sunday, 8 AM – 10 PM EST</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 border border-slate-200 dark:border-white/10 rounded-xl bg-white dark:bg-[#0e1628]">
            <div className="w-10 h-10 bg-[#c4953a]/10 rounded-lg flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-[#c4953a]" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Business Address</p>
              <p className="font-semibold text-slate-900 dark:text-white">30 N Gould St, Sheridan, WY 82801, United States</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
