'use client'
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js'
import { ShieldCheck } from 'lucide-react'

interface Props {
  amount: number
  packageName: string
  onSuccess: () => void
  onError?: (err: unknown) => void
}

export default function PayPalButton({ amount, packageName, onSuccess, onError }: Props) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID

  if (!clientId) {
    return (
      <div className="text-center text-sm text-red-500 py-4">
        PayPal is not configured. Please add NEXT_PUBLIC_PAYPAL_CLIENT_ID.
      </div>
    )
  }

  return (
    <PayPalScriptProvider options={{
      clientId,
      currency: 'USD',
      intent: 'capture',
      components: 'buttons',
    }}>
      <div className="space-y-3">
        <PayPalButtons
          style={{ layout: 'vertical', shape: 'rect', height: 48, label: 'pay' }}
          fundingSource={FUNDING.CARD}
          createOrder={(_data, actions) =>
            actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [{
                amount: { currency_code: 'USD', value: amount.toFixed(2) },
                description: `RideChecks ${packageName} Report`,
              }],
            })
          }
          onApprove={async (_data, actions) => {
            if (!actions.order) return
            await actions.order.capture()
            onSuccess()
          }}
          onError={(err) => {
            console.error('PayPal error:', err)
            onError?.(err)
          }}
        />
        <p className="text-xs text-center text-slate-400 dark:text-slate-500">
          <ShieldCheck size={11} className="inline mr-1 text-[#c4953a]" />
          Secured by PayPal — 30-day refund policy applies.
        </p>
      </div>
    </PayPalScriptProvider>
  )
}
