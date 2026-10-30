import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not configured')
  return new Stripe(key, { apiVersion: '2026-09-30.endive' })
}

export async function POST(req: NextRequest) {
  try {
    const { amount, packageName, vin, full_name, email, phone } = await req.json()

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }
    if (!packageName || typeof packageName !== 'string') {
      return NextResponse.json({ error: 'Invalid package name' }, { status: 400 })
    }

    const stripe = getStripe()

    const metadata: Record<string, string> = { package_name: packageName }
    if (vin) metadata.vin = String(vin).toUpperCase()
    if (full_name) metadata.full_name = String(full_name)
    if (email) metadata.email = String(email)
    if (phone) metadata.phone = String(phone)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100),
      currency: 'usd',
      description: `RideChecks ${packageName} Report`,
      automatic_payment_methods: { enabled: true, allow_redirects: 'never' },
      metadata,
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : JSON.stringify(err)
    console.error('Stripe error:', msg)
    return NextResponse.json({ error: 'Failed to create payment intent', detail: msg }, { status: 500 })
  }
}
