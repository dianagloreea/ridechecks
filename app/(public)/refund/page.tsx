import type { Metadata } from 'next'
import { ShieldCheck, Clock, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Refund Policy — 30-Day Money-Back Guarantee',
  description: 'RideChecks offers a 30-day money-back guarantee on all vehicle history reports. Learn how to request a refund and what qualifies.',
  alternates: { canonical: 'https://ridechecks.us/refund' },
  openGraph: {
    title: 'Refund Policy — RideChecks 30-Day Guarantee',
    description: 'Not satisfied with your vehicle history report? We offer a full refund within 30 days of purchase, no questions asked.',
    url: 'https://ridechecks.us/refund',
  },
}

export default function RefundPage() {
  return (
    <main className="bg-white dark:bg-[#080c18] text-slate-900 dark:text-white">

      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Our Promise</p>
          <h1 className="text-4xl font-bold mb-4">30-Day Money-Back Guarantee</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
            If you're not completely satisfied with your vehicle history report, we'll give you a full refund — no questions asked.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-4xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="border border-slate-200 dark:border-white/10 rounded-xl p-6 bg-white dark:bg-[#0e1628] text-center">
          <div className="w-12 h-12 bg-[#c4953a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <ShieldCheck size={22} className="text-[#c4953a]" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-1">Full Refund</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">100% of your payment returned. No partial refunds, no restocking fees.</p>
        </div>
        <div className="border border-slate-200 dark:border-white/10 rounded-xl p-6 bg-white dark:bg-[#0e1628] text-center">
          <div className="w-12 h-12 bg-[#c4953a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Clock size={22} className="text-[#c4953a]" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-1">30-Day Window</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Request your refund any time within 30 days of your purchase date.</p>
        </div>
        <div className="border border-slate-200 dark:border-white/10 rounded-xl p-6 bg-white dark:bg-[#0e1628] text-center">
          <div className="w-12 h-12 bg-[#c4953a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Mail size={22} className="text-[#c4953a]" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-1">Simple Process</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Email us with your order ID and we handle the rest within 2 hours.</p>
        </div>
      </section>

      {/* Policy details */}
      <section className="max-w-3xl mx-auto px-4 pb-16 space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How to Request a Refund</h2>
          <ol className="list-decimal ml-5 space-y-3">
            <li>Email <a href="mailto:support@ridechecks.us" className="text-[#c4953a] hover:underline">support@ridechecks.us</a> with the subject line <strong>"Refund Request"</strong>.</li>
            <li>Include your <strong>Order ID</strong> (found in your confirmation email).</li>
            <li>Briefly tell us why you'd like a refund (optional but helpful).</li>
            <li>We will process your refund within <strong>1–2 business days</strong>.</li>
            <li>Funds return to your original payment method within <strong>5–10 business days</strong> depending on your bank.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">What Qualifies for a Refund</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>Report delivered more than 2 hours past the guaranteed delivery time.</li>
            <li>Report was for the wrong VIN due to a system error on our end.</li>
            <li>Report contained clearly inaccurate data that we cannot correct.</li>
            <li>Any reason within the 30-day window — we trust our customers.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Wrong VIN Entered?</h2>
          <p>If you accidentally entered the wrong VIN, contact us within <strong>24 hours</strong> and we will re-run the report for the correct VIN at no charge — no refund needed.</p>
        </div>

        <div className="bg-[#faf8f4] dark:bg-white/5 border border-[#c4953a]/20 rounded-xl p-6">
          <p className="font-semibold text-slate-900 dark:text-white mb-2">Ready to request a refund?</p>
          <p className="text-sm mb-4">Our support team responds within 2 hours during business hours (Mon–Sun, 8 AM – 10 PM EST).</p>
          <a
            href="mailto:support@ridechecks.us?subject=Refund Request"
            className="inline-flex items-center gap-2 bg-[#c4953a] hover:bg-[#b8872e] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Email Support <ArrowRight size={14} />
          </a>
        </div>

      </section>
    </main>
  )
}
