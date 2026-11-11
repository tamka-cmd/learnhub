const points = [
  { title: 'Short lessons', text: 'Each topic explained with an everyday analogy. No long lectures.' },
  { title: 'Past-question style practice', text: '5 questions per topic, checked instantly.' },
  { title: 'AI tutor', text: 'Got it wrong? The tutor shows you why, step by step.' },
]

export default function Landing({ setView }) {
  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-md px-5 py-10 flex flex-col gap-8">
        <header className="flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">LearnHub</span>
          <button onClick={() => setView('login')} className="text-sm font-medium text-indigo-600">
            Log in
          </button>
        </header>

        <section className="flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold leading-tight">
            Stop carrying over Circuit Theory.
          </h1>
          <p className="text-slate-600">
            Learn Electric Circuit Theory the simple way, practise questions like the ones in
            your exams, and get help from a tutor whenever you're stuck.
          </p>
          <button
            onClick={() => setView('signup')}
            className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white active:bg-indigo-700"
          >
            Start free
          </button>
          <p className="text-center text-sm text-slate-500">First 2 topics are free. No card needed.</p>
        </section>

        <ul className="flex flex-col gap-3">
          {points.map((p) => (
            <li key={p.title} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-slate-600">{p.text}</p>
            </li>
          ))}
        </ul>

        <footer className="text-center text-xs text-slate-400">
          Built for ICE/EIE students in Nigerian universities.
        </footer>
      </div>
    </main>
  )
}
