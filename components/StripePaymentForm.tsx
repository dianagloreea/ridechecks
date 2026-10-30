'use client'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { Lock, Loader2, ShieldCheck } from 'lucide-react'

function getStripePromise() {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if (!key) return null
  return loadStripe(key)
}

const stripePromise = getStripePromise()

interface CheckoutFormProps {
  onSuccess: () => void
  onError?: (msg: string) => void
}

function CheckoutForm({ onSuccess, onError }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError('')

    const { error: submitError } = await elements.submit()
    if (submitError) {
      const msg = submitError.message ?? 'Card validation failed'
      setError(msg)
      onError?.(msg)
      setLoading(false)
      return
    }

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.href },
      redirect: 'if_required',
    })

    if (confirmError) {
      const msg = confirmError.message ?? 'Payment failed. Please try again.'
      setError(msg)
      onError?.(msg)
      setLoading(false)
      return
    }

    setLoading(false)
    onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          layout: 'tabs',
          paymentMethodOrder: ['card'],
        }}
      />

      {error && (
        <p className="text-xs text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-[#c4953a] hover:bg-[#b8872e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <><Loader2 size={16} className="animate-spin" /> Processing...</>
        ) : (
          <>Pay Now</>
        )}
      </button>

      <p className="text-xs text-center text-slate-400 dark:text-slate-500">
        <ShieldCheck size={11} className="inline mr-1 text-[#c4953a]" />
        Secured by Stripe — 256-bit SSL encryption
      </p>
    </form>
  )
}

interface StripePaymentFormProps {
  amount: number
  packageName: string
  vin?: string
  fullName?: string
  email?: string
  phone?: string
  onSuccess: () => void
  onError?: (msg: string) => void
}

export default function StripePaymentForm({
  amount,
  packageName,
  vin,
  fullName,
  email,
  phone,
  onSuccess,
  onError,
}: StripePaymentFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [initError, setInitError] = useState('')
  const [loading, setLoading] = useState(false)
  const [started, setStarted] = useState(false)

  const initPayment = async () => {
    if (started) return
    setStarted(true)
    setLoading(true)
    setInitError('')
    try {
      const res = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, packageName, vin, full_name: fullName, email, phone }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to initialize payment')
      setClientSecret(data.clientSecret)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to initialize payment'
      setInitError(msg)
      setStarted(false)
    } finally {
      setLoading(false)
    }
  }

  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    return (
      <div className="text-center text-sm text-red-500 py-4">
        Payment is not configured. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="space-y-3">
        {initError && (
          <p className="text-xs text-red-600 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-3 py-2">
            {initError}
          </p>
        )}
        <button
          onClick={initPayment}
          disabled={loading}
          className="w-full bg-[#c4953a] hover:bg-[#b8872e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <><Loader2 size={16} className="animate-spin" /> Loading payment form...</>
          ) : (
            <><Lock size={14} /> Pay ${amount.toFixed(2)} with Card</>
          )}
        </button>
        <p className="text-xs text-center text-slate-400 dark:text-slate-500">
          <ShieldCheck size={11} className="inline mr-1 text-[#c4953a]" />
          Secured by Stripe — 256-bit SSL encryption
        </p>
      </div>
    )
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#c4953a',
            colorBackground: '#ffffff',
            colorText: '#0f172a',
            colorDanger: '#dc2626',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            borderRadius: '8px',
          },
        },
      }}
    >
      <CheckoutForm onSuccess={onSuccess} onError={onError} />
    </Elements>
  )
}
