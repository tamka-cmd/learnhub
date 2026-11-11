import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Auth({ mode, setView }) {
  const isSignup = mode === 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({ email, password })
      if (error) setError(error.message)
      // If email confirmation is on, there is no session until the user clicks the link.
      else if (!data.session) setMessage('Check your email and click the link to confirm your account.')
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setError(error.message)
    }

    setBusy(false)
  }

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-md px-5 py-10 flex flex-col gap-6">
        <button onClick={() => setView('landing')} className="self-start text-sm text-slate-500">
          ← Back
        </button>

        <h1 className="text-2xl font-bold">{isSignup ? 'Create your account' : 'Welcome back'}</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm font-medium">
            Email
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal outline-none focus:border-indigo-500"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm font-medium">
            Password
            <input
              type="password"
              required
              minLength={6}
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-normal outline-none focus:border-indigo-500"
            />
          </label>

          {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
          {message && <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">{message}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white active:bg-indigo-700 disabled:opacity-60"
          >
            {busy ? 'Please wait…' : isSignup ? 'Sign up' : 'Log in'}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600">
          {isSignup ? 'Already have an account? ' : 'New here? '}
          <button
            onClick={() => setView(isSignup ? 'login' : 'signup')}
            className="font-medium text-indigo-600"
          >
            {isSignup ? 'Log in' : 'Create an account'}
          </button>
        </p>
      </div>
    </main>
  )
}
