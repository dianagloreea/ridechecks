export const metadata = {
  title: 'Privacy Policy — RideChecks',
  description: 'RideChecks Privacy Policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="bg-white dark:bg-[#080c18] text-slate-900 dark:text-white">
      <section className="bg-[#faf8f4] dark:bg-[#0a0f1e] border-b border-slate-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-xs font-bold tracking-widest text-[#c4953a] uppercase mb-3">Legal</p>
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-slate-500 dark:text-slate-400">Last updated: October 1, 2026</p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12 space-y-10 text-slate-600 dark:text-slate-400 leading-relaxed">

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Information We Collect</h2>
          <p>When you use RideChecks, we collect the following information:</p>
          <ul className="list-disc ml-5 mt-3 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, and phone number when you place an order.</li>
            <li><strong>Vehicle Information:</strong> The VIN (Vehicle Identification Number) you submit for a report.</li>
            <li><strong>Payment Information:</strong> Payment is processed by PayPal. We do not store your card number, expiry, or CVV on our servers.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on pages, collected automatically.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>To process your order and deliver your vehicle history report.</li>
            <li>To send you order confirmation and report delivery emails.</li>
            <li>To respond to customer support inquiries.</li>
            <li>To improve our website and services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. How We Share Your Information</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc ml-5 mt-3 space-y-2">
            <li><strong>Payment Processors:</strong> PayPal processes all payments. Their privacy policy applies to payment data.</li>
            <li><strong>Service Providers:</strong> We use Resend for transactional emails and Supabase for secure data storage.</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">4. Data Retention</h2>
          <p>We retain your order information for up to 3 years for business records and legal compliance. You may request deletion of your data at any time by contacting us at <a href="mailto:support@ridechecks.us" className="text-[#c4953a] hover:underline">support@ridechecks.us</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">5. Cookies</h2>
          <p>We use cookies to maintain your session and improve site performance. We do not use cookies for advertising or cross-site tracking. You can disable cookies in your browser settings, though some features may not function properly.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">6. Security</h2>
          <p>We use industry-standard SSL encryption for all data transmitted on our site. Payment data is handled exclusively by PayPal and is never stored on our servers. Access to customer data is restricted to authorized personnel only.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-5 mt-3 space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Opt out of marketing communications.</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:support@ridechecks.us" className="text-[#c4953a] hover:underline">support@ridechecks.us</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="mt-3 p-4 bg-[#faf8f4] dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl">
            <p className="font-semibold text-slate-900 dark:text-white">RideChecks</p>
            <p>30 N Gould St, Sheridan, WY 82801, United States</p>
            <p><a href="mailto:support@ridechecks.us" className="text-[#c4953a] hover:underline">support@ridechecks.us</a></p>
          </div>
        </div>

      </section>
    </main>
  )
}
