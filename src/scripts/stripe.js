// src/scripts/stripe.js
import { supabase } from './auth.js'

export async function startCheckout() {
  const session = await supabase.auth.getSession()
  const user = session?.user
  if (!user) {
    alert('Please log in first.')
    return
  }

  const res = await fetch('https://your-edge-endpoint/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: user.id })
  })

  const data = await res.json()
  if (data.url) {
    window.location.href = data.url
  } else {
    alert('Unable to start checkout.')
  }
}
