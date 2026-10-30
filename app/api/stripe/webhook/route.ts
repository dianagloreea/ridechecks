import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY not configured')
  return new Stripe(key, { apiVersion: '2026-09-30.endive' })
}

function getAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    const stripe = getStripe()
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'payment_intent.succeeded') {
    const intent = event.data.object as Stripe.PaymentIntent
    const meta = intent.metadata

    // Only process if order metadata is attached
    if (!meta?.vin || !meta?.email || !meta?.full_name || !meta?.package_name) {
      // Metadata not yet attached — order will be created via the details form
      return NextResponse.json({ received: true })
    }

    try {
      const db = getAdmin()

      // Avoid duplicate orders for the same payment intent
      const { data: existing } = await db
        .from('orders')
        .select('id')
        .eq('stripe_payment_intent_id', intent.id)
        .maybeSingle()

      if (existing) {
        return NextResponse.json({ received: true })
      }

      const resend = new Resend(process.env.RESEND_API_KEY)
      const packagePrice = Number(intent.amount) / 100

      const { data: order, error: dbError } = await db
        .from('orders')
        .insert({
          full_name: meta.full_name,
          email: meta.email,
          phone: meta.phone ?? '',
          vin: meta.vin.toUpperCase(),
          package_name: meta.package_name,
          package_price: packagePrice,
          status: 'pending',
          stripe_payment_intent_id: intent.id,
        })
        .select()
        .single()

      if (dbError) throw dbError

      // Confirmation email to customer
      await resend.emails.send({
        from: 'RideChecks <noreply@ridechecks.us>',
        to: meta.email,
        subject: `Your RideChecks Order Confirmation — ${meta.package_name} Report`,
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;background:#ffffff;">
            <div style="background:#080c18;padding:24px 32px;border-radius:12px 12px 0 0;">
              <div style="display:flex;align-items:center;gap:8px;">
                <img src="https://ridechecks.us/logo.png" alt="RideChecks" width="36" height="36" style="display:block;border-radius:4px;" />
                <span style="color:white;font-weight:700;font-size:18px;">Ride<span style="color:#c4953a;">Checks</span></span>
              </div>
            </div>
            <div style="padding:32px;background:#faf8f4;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
              <h2 style="color:#0f172a;margin:0 0 8px;font-size:22px;">Order Received!</h2>
              <p style="color:#475569;margin:0 0 24px;font-size:15px;">Hi ${meta.full_name}, we've received your order and our team is now preparing your vehicle history report.</p>
              <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;padding:20px;margin-bottom:24px;">
                <table style="width:100%;font-size:14px;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;color:#64748b;border-bottom:1px solid #f1f5f9;">VIN</td><td style="padding:8px 0;font-weight:700;font-family:monospace;border-bottom:1px solid #f1f5f9;">${meta.vin.toUpperCase()}</td></tr>
                  <tr><td style="padding:8px 0;color:#64748b;border-bottom:1px solid #f1f5f9;">Package</td><td style="padding:8px 0;font-weight:600;border-bottom:1px solid #f1f5f9;">${meta.package_name}</td></tr>
                  <tr><td style="padding:8px 0;color:#64748b;border-bottom:1px solid #f1f5f9;">Amount Paid</td><td style="padding:8px 0;font-weight:700;color:#c4953a;border-bottom:1px solid #f1f5f9;">$${packagePrice}</td></tr>
                  <tr><td style="padding:8px 0;color:#64748b;">Order ID</td><td style="padding:8px 0;color:#94a3b8;font-size:11px;font-family:monospace;">${order.id}</td></tr>
                </table>
              </div>
              <p style="color:#64748b;font-size:13px;margin:0;">You'll receive your completed report to this email once it's ready.</p>
            </div>
          </div>
        `,
      })

      // Admin notification
      await resend.emails.send({
        from: 'RideChecks <noreply@ridechecks.us>',
        to: process.env.ADMIN_EMAIL!,
        subject: `New Order — ${meta.package_name} — VIN: ${meta.vin.toUpperCase()}`,
        html: `
          <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:520px;margin:0 auto;padding:24px;">
            <h2 style="margin:0 0 16px;color:#0f172a;">New Order (via Stripe webhook)</h2>
            <table style="width:100%;font-size:14px;border-collapse:collapse;border:1px solid #e5e7eb;">
              <tr style="background:#f8fafc;"><td style="padding:10px 16px;color:#64748b;width:140px;border-bottom:1px solid #e5e7eb;">Name</td><td style="padding:10px 16px;font-weight:600;border-bottom:1px solid #e5e7eb;">${meta.full_name}</td></tr>
              <tr><td style="padding:10px 16px;color:#64748b;border-bottom:1px solid #e5e7eb;">Email</td><td style="padding:10px 16px;border-bottom:1px solid #e5e7eb;">${meta.email}</td></tr>
              <tr style="background:#f8fafc;"><td style="padding:10px 16px;color:#64748b;border-bottom:1px solid #e5e7eb;">Phone</td><td style="padding:10px 16px;border-bottom:1px solid #e5e7eb;">${meta.phone ?? '—'}</td></tr>
              <tr><td style="padding:10px 16px;color:#64748b;border-bottom:1px solid #e5e7eb;">VIN</td><td style="padding:10px 16px;font-family:monospace;font-weight:700;border-bottom:1px solid #e5e7eb;">${meta.vin.toUpperCase()}</td></tr>
              <tr style="background:#f8fafc;"><td style="padding:10px 16px;color:#64748b;border-bottom:1px solid #e5e7eb;">Package</td><td style="padding:10px 16px;border-bottom:1px solid #e5e7eb;">${meta.package_name} — $${packagePrice}</td></tr>
              <tr><td style="padding:10px 16px;color:#64748b;">Payment ID</td><td style="padding:10px 16px;font-size:11px;color:#94a3b8;font-family:monospace;">${intent.id}</td></tr>
            </table>
            <a href="https://ridechecks.us/admin" style="display:inline-block;margin-top:20px;background:#c4953a;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:700;">View in Admin →</a>
          </div>
        `,
      })
    } catch (err) {
      console.error('Webhook order creation failed:', err)
      return NextResponse.json({ error: 'Order creation failed' }, { status: 500 })
    }
  }

  return NextResponse.json({ received: true })
}
