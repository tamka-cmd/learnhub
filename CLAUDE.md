# LearnHub (working name)

## What this is
A mobile-first web app that helps Nigerian university engineering students (ICE/EIE departments) learn and pass courses they often carry over. AI tutor + past-question-style practice + light gamification. Paid by cheap monthly subscription.

## MVP scope (do not go beyond this)
- ONE course: Electric Circuit Theory, about 10 topics
- Each topic: short explanation with an analogy, then 5 practice questions, then AI tutor
- AI tutor explains WHY a student's answer is wrong, step by step
- XP and daily streaks (keep it simple)
- Free tier: first 2 topics. Paid: everything + unlimited tutor (with daily cap)
- Payments via Paystack (add last)

## Stack
- React + Vite + Tailwind
- Supabase (auth, Postgres database)
- Claude API for the tutor, called from a server function (never expose the API key in the frontend)
- Deploy on Vercel

## Rules
- Mobile-first, low data usage, fast on slow networks
- Simple, readable code. No extra libraries unless necessary
- No features outside the MVP scope. Ask before adding anything
- Course content lives in JSON/markdown files in /content so it is easy to edit
- Tutor must use the verified worked solution in the content file as ground truth, and only explain it. It must not invent its own answers
- Cap tutor messages per user per day (default 10 free, 50 paid)
- Commit after every working step with a clear message

## Build order
1. Project setup, landing page, signup/login
2. Course page listing topics
3. Topic page: explanation + practice questions with answer checking
4. AI tutor chat with daily cap
5. XP and streaks
6. Paystack subscription
7. Deploy and test on a real phone

## Tone for student-facing text
Friendly, direct, analogy-driven. No jargon without explanation.
