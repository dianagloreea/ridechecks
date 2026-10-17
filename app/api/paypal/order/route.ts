import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { amount, packageName } = await req.json()

    if (!amount || isNaN(Number(amount))) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }

    const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    const secret = process.env.PAYPAL_CLIENT_SECRET

    if (!clientId || !secret) {
      return NextResponse.json({ error: 'PayPal not configured' }, { status: 500 })
    }

    const base = process.env.NODE_ENV === 'production'
      ? 'https://api-m.paypal.com'
      : 'https://api-m.sandbox.paypal.com'

    // Get access token
    const tokenRes = await fetch(`${base}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${clientId}:${secret}`).toString('base64')}`,
      },
      body: 'grant_type=client_credentials',
    })
    const { access_token } = await tokenRes.json()

    // Create order
    const orderRes = await fetch(`${base}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: { currency_code: 'USD', value: String(amount) },
          description: `RideChecks ${packageName} Report`,
        }],
        payment_source: {
          card: {
            experience_context: {
              payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
            },
          },
        },
      }),
    })

    const order = await orderRes.json()
    return NextResponse.json({ id: order.id })
  } catch (err) {
    console.error('PayPal order error:', err)
    return NextResponse.json({ error: 'Failed to create PayPal order' }, { status: 500 })
  }
}
