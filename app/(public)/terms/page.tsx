export const metadata = {
  title: 'Terms of Service — RideChecks',
  description: 'RideChecks Terms of Service — the rules and policies governing use of our vehicle history report service.',
}

export default function TermsPage() {
  return (
    <main className="bg-white dark:bg-[#080c18] text-slate-900 dark:text-white">
      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Legal</p>
          <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
          <p className="text-slate-500 dark:text-slate-400">Last updated: October 1, 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using RideChecks ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Service.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Description of Service</h2>
          <p>RideChecks provides vehicle history reports based on a vehicle's VIN (Vehicle Identification Number). Reports include available data from government databases, insurance records, and other third-party sources. Reports are informational only and should not be the sole basis for a vehicle purchase decision.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Accuracy of Information</h2>
          <p>While we strive to provide accurate and complete information, RideChecks does not guarantee the accuracy, completeness, or timeliness of any report. Vehicle history data depends on whether incidents were properly reported to relevant authorities. Some incidents may not appear in any database.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Payment & Pricing</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>All prices are in USD and subject to change without notice.</li>
            <li>Payment is due at the time of order.</li>
            <li>We accept major debit and credit cards through PayPal.</li>
            <li>Your order confirmation will be emailed to the address you provide.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Refund Policy</h2>
          <p>We offer a <strong>30-day refund policy</strong>. If you are not satisfied with your report, contact us within 30 days of purchase at <a href="mailto:support@ridechecks.us" className="text-[#c4953a] hover:underline">support@ridechecks.us</a> and we will issue a full refund. Refunds are processed within 5–10 business days.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Prohibited Use</h2>
          <p>You may not use RideChecks to:</p>
          <ul className="list-disc ml-5 mt-3 space-y-2">
            <li>Conduct any unlawful activity or violate any applicable laws.</li>
            <li>Resell or redistribute report data without our written consent.</li>
            <li>Attempt to reverse engineer, scrape, or copy our system.</li>
            <li>Submit false or misleading information.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">7. Limitation of Liability</h2>
          <p>RideChecks shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our reports or the Service. Our total liability in any case shall not exceed the amount you paid for the report in question.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">8. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and report formats, is the property of RideChecks and protected by US copyright law. You may not reproduce or redistribute any content without our written permission.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">9. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Wyoming, United States. Any disputes shall be resolved in the courts of Sheridan County, Wyoming.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">10. Contact</h2>
          <div className="p-4 bg-[#faf8f4] dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl">
            <p className="font-semibold text-slate-900 dark:text-white">RideChecks</p>
            <p>30 N Gould St, Sheridan, WY 82801, United States</p>
            <p><a href="mailto:support@ridechecks.us" className="text-[#c4953a] hover:underline">support@ridechecks.us</a></p>
          </div>
        </div>

      </section>
    </main>
  )
}
