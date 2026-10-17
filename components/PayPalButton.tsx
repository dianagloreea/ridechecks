'use client'
import { useState } from 'react'
import {
  PayPalScriptProvider,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
} from '@paypal/react-paypal-js'
import { ShieldCheck, Lock } from 'lucide-react'

interface Props {
  amount: number
  packageName: string
  onSuccess: () => void
  onError?: (err: unknown) => void
}

function CardForm({ amount, packageName, onSuccess, onError }: Props) {
  const hostedFields = usePayPalHostedFields()
  const [paying, setPaying] = useState(false)
  const [cardError, setCardError] = useState('')

  async function handlePay() {
    if (!hostedFields?.cardFields) return
    setCardError('')
    setPaying(true)
    try {
      const order = await hostedFields.cardFields.submit({
        cardholderName: (document.getElementById('cardholder-name') as HTMLInputElement)?.value || '',
        billingAddress: {
          countryCodeAlpha2: 'US',
        },
      })
      if (order) {
        onSuccess()
      }
    } catch (err: unknown) {
      console.error('PayPal card error:', err)
      const msg = err instanceof Error ? err.message : 'Payment failed. Please check your card details and try again.'
      setCardError(msg)
      onError?.(err)
    } finally {
      setPaying(false)
    }
  }

  const fieldStyle = {
    base: {
      'font-size': '15px',
      'font-family': 'system-ui, sans-serif',
      color: '#1e293b',
      padding: '0 12px',
    },
    input: { color: '#1e293b' },
    ':focus': { color: '#080c18' },
    '.invalid': { color: '#ef4444' },
  }

  return (
    <div className="space-y-3">
      {/* Cardholder name */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Name on card</label>
        <input
          id="cardholder-name"
          type="text"
          placeholder="John Smith"
          className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1628] text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c4953a]/50 focus:border-[#c4953a]"
        />
      </div>

      {/* Card number */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Card number</label>
        <div className="h-11 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1628] flex items-center overflow-hidden focus-within:ring-2 focus-within:ring-[#c4953a]/50 focus-within:border-[#c4953a]">
          <PayPalHostedField
            id="card-number"
            hostedFieldType="number"
            options={{ selector: '#card-number', placeholder: '1234 5678 9012 3456', styles: fieldStyle }}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Expiry + CVV */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Expiry date</label>
          <div className="h-11 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1628] flex items-center overflow-hidden focus-within:ring-2 focus-within:ring-[#c4953a]/50 focus-within:border-[#c4953a]">
            <PayPalHostedField
              id="expiration-date"
              hostedFieldType="expirationDate"
              options={{ selector: '#expiration-date', placeholder: 'MM / YY', styles: fieldStyle }}
              className="w-full h-full"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">CVV</label>
          <div className="h-11 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0e1628] flex items-center overflow-hidden focus-within:ring-2 focus-within:ring-[#c4953a]/50 focus-within:border-[#c4953a]">
            <PayPalHostedField
              id="cvv"
              hostedFieldType="cvv"
              options={{ selector: '#cvv', placeholder: '123', styles: fieldStyle }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {cardError && (
        <p className="text-xs text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-3 py-2">
          {cardError}
        </p>
      )}

      <button
        onClick={handlePay}
        disabled={paying}
        className="w-full h-12 bg-[#c4953a] hover:bg-[#b8872e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
      >
        {paying ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Processing…
          </>
        ) : (
          <>
            <Lock size={14} />
            Pay ${amount.toFixed(2)} Securely
          </>
        )}
      </button>

      <p className="text-xs text-center text-slate-400 dark:text-slate-500">
        <ShieldCheck size={11} className="inline mr-1 text-[#c4953a]" />
        Secured by PayPal — 30-day refund policy applies.
      </p>
    </div>
  )
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
      components: 'hosted-fields',
    }}>
      <PayPalHostedFieldsProvider
        createOrder={() =>
          fetch('/api/paypal/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount.toFixed(2), packageName }),
          })
            .then(r => r.json())
            .then(d => d.id)
        }
        notEligibleError={
          <FallbackPayPalButton amount={amount} packageName={packageName} onSuccess={onSuccess} onError={onError} />
        }
      >
        <CardForm amount={amount} packageName={packageName} onSuccess={onSuccess} onError={onError} />
      </PayPalHostedFieldsProvider>
    </PayPalScriptProvider>
  )
}

// Fallback to standard PayPal button if hosted fields not eligible
import { PayPalButtons, FUNDING } from '@paypal/react-paypal-js'

function FallbackPayPalButton({ amount, packageName, onSuccess, onError }: Props) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500 text-center">Pay securely with your card via PayPal</p>
      <PayPalButtons
        style={{ layout: 'vertical', shape: 'rect', height: 48 }}
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
        onError={(err) => { console.error('PayPal error:', err); onError?.(err) }}
      />
      <p className="text-xs text-center text-slate-400 dark:text-slate-500">
        <ShieldCheck size={11} className="inline mr-1 text-[#c4953a]" />
        Secured by PayPal — 30-day refund policy applies.
      </p>
    </div>
  )
}
