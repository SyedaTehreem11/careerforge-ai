import { useState } from 'react'
import {
  FiCpu,
  FiGlobe,
  FiLayers,
  FiMonitor,
  FiPlay,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

const categories = [
  { title: 'Frontend Developer', description: 'React, accessibility, and modern UI systems.', icon: FiMonitor },
  { title: 'Backend Developer', description: 'APIs, scalability, and system design discussions.', icon: FiLayers },
  { title: 'Flutter Developer', description: 'Cross-platform architecture and performance tuning.', icon: FiCpu },
  { title: 'General HR Interview', description: 'Leadership, teamwork, and communication readiness.', icon: FiShield },
]

const difficulties = ['Easy', 'Medium', 'Hard']
const companies = ['Google', 'Microsoft', 'Amazon', 'Netflix', 'OpenAI']

const sampleQuestions = [
  'Walk me through a product feature you built end to end and the tradeoffs you made.',
  'How do you balance performance, maintainability, and team velocity in your work?',
  'Describe a time you handled ambiguity or a major change in priorities.',
  'How would you explain a complex technical decision to a non-technical stakeholder?',
  'What would you do if a launch was at risk and your team needed a quick recovery plan?',
]

const tips = [
  { title: 'Communication Tips', value: 'Keep answers structured with a clear situation, action, and result.' },
  { title: 'Technical Tips', value: 'Explain your decisions with tradeoffs and user impact in mind.' },
  { title: 'Confidence Score', value: 'High confidence: 84% based on your preparation patterns.' },
  { title: 'Time Management', value: 'Aim for 60-90 second answers with a strong closing takeaway.' },
]

const progress = [
  { label: 'Completed Sessions', value: '12' },
  { label: 'Average Score', value: '86%' },
  { label: 'Weak Areas', value: 'System Design' },
  { label: 'Strong Areas', value: 'Communication' },
]

const InterviewPrepPage = () => {
  const [difficulty, setDifficulty] = useState('Medium')
  const [company, setCompany] = useState('Google')

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">AI Interview Preparation</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">AI Interview Preparation</h1>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
                Practice interviews and improve your confidence with AI-powered guidance designed for modern hiring loops.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <FiZap className="h-4 w-4" />
              Live mock prep ready
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <article
                key={category.title}
                className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-[0_16px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-400/10 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{category.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-400">{category.description}</p>
              </article>
            )
          })}
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-300">Difficulty</label>
                <div className="mt-3 flex flex-wrap gap-3">
                  {difficulties.map((item) => (
                    <button
                      key={item}
                      onClick={() => setDifficulty(item)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        difficulty === item
                          ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white'
                          : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Company</label>
                <div className="mt-3 flex flex-wrap gap-3">
                  {companies.map((item) => (
                    <button
                      key={item}
                      onClick={() => setCompany(item)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        company === item
                          ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
                          : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-600/15 via-slate-900 to-indigo-500/10 p-5">
              <div className="flex items-center gap-2 text-cyan-200">
                <FiTarget className="h-5 w-5" />
                <h2 className="text-lg font-semibold text-white">Current Prep Setup</h2>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">Difficulty: {difficulty}</div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">Target Company: {company}</div>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 font-medium text-white transition hover:scale-[1.01]">
                  <FiPlay className="h-4 w-4" />
                  Generate Interview Questions
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Sample Questions</h2>
                <p className="mt-1 text-sm text-slate-400">Professional prompts tailored to your selection.</p>
              </div>
              <div className="rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                <FiZap className="h-5 w-5" />
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {sampleQuestions.map((question) => (
                <li key={question} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  {question}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">AI Tips</h2>
                <p className="mt-1 text-sm text-slate-400">Focused guidance to sharpen your response quality.</p>
              </div>
              <div className="rounded-2xl bg-indigo-500/10 p-2 text-indigo-300">
                <FiGlobe className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {tips.map((tip) => (
                <div key={tip.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{tip.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{tip.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Progress</h2>
              <p className="mt-1 text-sm text-slate-400">Your improvement snapshot over time.</p>
            </div>
            <div className="rounded-2xl bg-emerald-500/10 p-2 text-emerald-300">
              <FiTrendingUp className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {progress.map((item) => (
              <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default InterviewPrepPage
