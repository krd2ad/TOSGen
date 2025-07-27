// src/scripts/auth.js
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js'

export const supabase = createClient('SUPABASE_URL', 'SUPABASE_ANON_KEY')

export async function signIn(email) {
  const { error } = await supabase.auth.signInWithOtp({ email })
  if (error) {
    console.error('Login error:', error)
  } else {
    alert('Check your email for the login link.')
  }
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession()
  return data?.session
}
