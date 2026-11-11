import { supabase } from '../lib/supabase'

// Placeholder shown after login. The course page comes in build step 2.
export default function Home({ session }) {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-md px-5 py-10 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">You're in! 🎉</h1>
        <p className="text-slate-600">Logged in as {session.user.email}.</p>
        <button
          onClick={() => supabase.auth.signOut()}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 font-medium"
        >
          Log out
        </button>
      </div>
    </main>
  )
}
