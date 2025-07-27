// supabase/edge-functions/create-checkout-session.ts
import { serve } from 'https://deno.land/std/http/server.ts'

serve(async (req) => {
  const body = await req.json()
  const stripe = require('stripe')('STRIPE_SECRET_KEY')

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{
      price: 'YOUR_STRIPE_PRICE_ID',
      quantity: 1
    }],
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel',
    metadata: { userId: body.userId }
  })

  return new Response(JSON.stringify({ url: session.url }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  })
})
