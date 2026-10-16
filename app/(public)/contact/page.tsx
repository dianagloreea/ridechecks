import { Mail, Clock, MapPin, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Contact Us — RideChecks',
  description: 'Contact RideChecks support for questions about your vehicle history report order. We respond within 2 hours.',
}

const CONTACT_ITEMS = [
  {
    icon: Mail,
    title: 'Email Support',
    desc: 'For order questions, report issues, or refund requests.',
    value: 'support@ridechecks.us',
    href: 'mailto:support@ridechecks.us',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    desc: 'Our team is available 7 days a week.',
    value: 'Monday – Sunday, 8 AM – 10 PM EST',
    href: null,
  },
  {
    icon: MessageCircle,
    title: 'Response Time',
    desc: 'We aim to respond to all inquiries promptly.',
    value: 'Within 2 hours during business hours',
    href: null,
  },
  {
    icon: MapPin,
    title: 'Business Address',
    desc: 'Our registered business location.',
    value: '30 N Gould St, Sheridan, WY 82801, USA',
    href: null,
  },
]

const FAQS = [
  { q: 'How long does it take to receive my report?', a: 'Our Standard Report is delivered within 24 hours, Professional within 4 hours, and Instant within 30 minutes.' },
  { q: 'What if I entered the wrong VIN?', a: 'Contact us immediately at support@ridechecks.us with your order ID and the correct VIN. We will re-run the report at no extra charge.' },
  { q: 'How do I get a refund?', a: 'We offer a 30-day money-back guarantee. Email us with your order ID and we will process a full refund within 5–10 business days.' },
  { q: 'My report shows no data — why?', a: 'Some vehicles have limited history if incidents were not reported to official agencies. We will still show all data we have access to.' },
]

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-[#080c18] text-slate-900 dark:text-white">

      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Support</p>
          <h1 className="text-4xl font-bold mb-4">We're here to help.</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Have a question about your order or report? Reach out — we respond within 2 hours.</p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CONTACT_ITEMS.map(item => (
            <div key={item.title} className="border border-slate-200 dark:border-white/10 rounded-xl p-6 bg-white dark:bg-[#0e1628]">
              <div className="w-10 h-10 bg-[#c4953a]/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={20} className="text-[#c4953a]" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{item.desc}</p>
              {item.href ? (
                <a href={item.href} className="font-semibold text-[#c4953a] hover:underline">{item.value}</a>
              ) : (
                <p className="font-semibold text-slate-800 dark:text-white">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-t border-slate-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">FAQ</p>
          <h2 className="text-2xl font-bold mb-8">Common questions.</h2>
          <div className="space-y-5">
            {FAQS.map(faq => (
              <div key={faq.q} className="border border-slate-200 dark:border-white/10 rounded-xl p-5 bg-white dark:bg-[#0e1628]">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
