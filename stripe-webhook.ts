// supabase/edge-functions/stripe-webhook.ts
// Placeholder for handling Stripe webhook events
import { serve } from 'https://deno.land/std/http/server.ts'

serve(async (req) => {
  const body = await req.json()
  console.log('🔔 Stripe webhook event:', body.type)
  // Handle 'checkout.session.completed', 'invoice.payment_succeeded', etc.
  return new Response(JSON.stringify({ received: true }), { status: 200 })
})
