import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not configured')
  return new Stripe(key, { apiVersion: '2025-06-30.basil' })
}

export async function POST(req: NextRequest) {
  try {
    const { amount, packageName } = await req.json()

    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }
    if (!packageName || typeof packageName !== 'string') {
      return NextResponse.json({ error: 'Invalid package name' }, { status: 400 })
    }

    const stripe = getStripe()

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(Number(amount) * 100), // convert to cents
      currency: 'usd',
      description: `RideChecks ${packageName} Report`,
      automatic_payment_methods: { enabled: true },
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error('Stripe error:', err)
    return NextResponse.json({ error: 'Failed to create payment intent' }, { status: 500 })
  }
}
