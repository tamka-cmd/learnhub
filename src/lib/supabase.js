import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  console.error('Missing Supabase keys. Copy .env.example to .env.local and fill them in.')
}

// The anon key is safe in the browser. Row Level Security in Supabase protects the data.
export const supabase = createClient(url ?? 'http://localhost', anonKey ?? 'missing')
