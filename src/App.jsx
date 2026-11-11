import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Landing from './pages/Landing'
import Auth from './pages/Auth'
import Home from './pages/Home'

export default function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  // 'landing' | 'login' | 'signup'
  const [view, setView] = useState('landing')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
    })
    return () => data.subscription.unsubscribe()
  }, [])

  if (loading) {
    return <div className="min-h-dvh grid place-items-center text-slate-500">Loading…</div>
  }

  if (session) return <Home session={session} />

  if (view === 'login' || view === 'signup') {
    return <Auth mode={view} setView={setView} />
  }

  return <Landing setView={setView} />
}
