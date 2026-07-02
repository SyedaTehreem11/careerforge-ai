import { useMemo, useState } from 'react'
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

const companies = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Apple', 'OpenAI']
const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer', 'Product Manager', 'Data Analyst']
const experienceLevels = ['Fresh Graduate', 'Junior', 'Mid Level', 'Senior']

const progress = [
  { label: 'Completed Sessions', value: '12' },
  { label: 'Average Score', value: '86%' },
  { label: 'Weak Areas', value: 'System Design' },
  { label: 'Strong Areas', value: 'Communication' },
]

const InterviewPrepPage = () => {
  const [company, setCompany] = useState('Google')
  const [role, setRole] = useState('Frontend Developer')
  const [experience, setExperience] = useState('Mid Level')

  const interviewProfile = useMemo(() => {
    const companyTraits = {
      Google: {
        focus: 'shipping polished product experiences at scale',
        nuance: 'clarity, velocity, and strong user empathy',
        signal: 'product excellence',
      },
      Microsoft: {
        focus: 'building resilient systems for broad audiences',
        nuance: 'cross-team alignment and long-term reliability',
        signal: 'platform thinking',
      },
      Amazon: {
        focus: 'operating with high ownership and measurable outcomes',
        nuance: 'execution discipline and prioritization',
        signal: 'customer obsession',
      },
      Meta: {
        focus: 'crafting experiences that influence billions of users',
        nuance: 'experimentation, growth, and rapid iteration',
        signal: 'scale and impact',
      },
      Netflix: {
        focus: 'delivering entertainment experiences with strong personalization',
        nuance: 'data-informed judgment and creative boldness',
        signal: 'product experimentation',
      },
      Tesla: {
        focus: 'shipping ambitious hardware and software products',
        nuance: 'systems thinking and execution under pressure',
        signal: 'mission-driven innovation',
      },
      Apple: {
        focus: 'building intuitive, premium experiences',
        nuance: 'attention to detail and quality craftsmanship',
        signal: 'design excellence',
      },
      OpenAI: {
        focus: 'advancing intelligent products with thoughtful constraints',
        nuance: 'scientific reasoning and strong product instincts',
        signal: 'AI-first product thinking',
      },
    }

    const roleTraits = {
      'Frontend Developer': {
        technical: ['design a scalable component architecture', 'optimize rendering performance', 'improve accessibility and interaction quality', 'structure state for complex flows', 'ship polished user experiences'],
        hr: ['explain your collaboration style with design and product', 'describe how you manage feedback loops in delivery', 'share how you keep stakeholders aligned on UI choices'],
        behavioral: ['tell me about a launch where you iterated quickly', 'describe a time you recovered from a UX issue under deadline', 'share a moment where you balanced speed with quality'],
      },
      'Backend Developer': {
        technical: ['design a reliable API contract', 'improve service latency under load', 'balance consistency with delivery speed', 'reason through data model tradeoffs', 'structure observability for a critical path'],
        hr: ['explain how you communicate technical debt to peers', 'describe how you handle ambiguity in requirements', 'share how you align with cross-functional teams'],
        behavioral: ['tell me about a service outage you helped resolve', 'describe a time you improved reliability through iteration', 'share how you supported a teammate during delivery pressure'],
      },
      'Full Stack Developer': {
        technical: ['connect frontend and backend concerns elegantly', 'build a resilient end-to-end feature', 'optimize a full-stack flow for speed', 'design for maintainability across layers', 'think about deployment and observability'],
        hr: ['describe how you communicate tradeoffs across disciplines', 'share how you collaborate with design and operations', 'explain how you keep delivery momentum healthy'],
        behavioral: ['tell me about a product feature you delivered end to end', 'describe a time you resolved a cross-layer issue', 'share a moment where you simplified a complex workflow'],
      },
      'UI/UX Designer': {
        technical: ['turn research into a clear product vision', 'improve conversion through interface refinements', 'build a scalable design system', 'map a journey for a complex flow', 'balance aesthetics with usability'],
        hr: ['explain how you handle stakeholder feedback', 'describe how you influence without over-asserting', 'share how you keep design quality consistent'],
        behavioral: ['tell me about a design critique that changed your approach', 'describe a time you advocated for users in a tough discussion', 'share a project where you adapted to changing business goals'],
      },
      'Product Manager': {
        technical: ['prioritize a roadmap under constraints', 'translate user insights into measurable initiatives', 'frame a decision with clear tradeoffs', 'drive a cross-functional launch plan', 'evaluate a product metric with nuance'],
        hr: ['describe how you align teams with different perspectives', 'explain how you handle messy stakeholder inputs', 'share how you communicate a strategic pivot'],
        behavioral: ['tell me about a launch that went off track', 'describe a time you changed direction based on evidence', 'share an example where you influenced a team without authority'],
      },
      'Data Analyst': {
        technical: ['build a clear reporting framework', 'look for signal inside noisy data', 'design a dashboard for decision-making', 'validate an insight before presenting it', 'translate findings into meaningful recommendations'],
        hr: ['describe how you explain metrics to non-technical partners', 'share how you handle feedback on your analysis', 'explain how you manage deadlines for multiple requests'],
        behavioral: ['tell me about a surprising insight you uncovered', 'describe a time your analysis changed a decision', 'share a moment where you improved a reporting process'],
      },
    }

    const experienceTraits = {
      'Fresh Graduate': { difficulty: 'Easy', time: '20 min', voice: 'foundational problem solving and curiosity' },
      Junior: { difficulty: 'Easy', time: '25 min', voice: 'ownership, learning speed, and clear execution' },
      'Mid Level': { difficulty: 'Medium', time: '35 min', voice: 'tradeoffs, delivery quality, and collaboration' },
      Senior: { difficulty: 'Hard', time: '45 min', voice: 'strategy, mentorship, and systems-level thinking' },
    }

    const companyData = companyTraits[company]
    const roleData = roleTraits[role]
    const experienceData = experienceTraits[experience]

    const technicalQuestions = [
      `How would you ${roleData.technical[0]} for ${company} while keeping the experience focused on ${companyData.focus}?`,
      `Walk me through how you would ${roleData.technical[1]} in a product setting that values ${companyData.nuance}.`,
      `Describe a plan for ${roleData.technical[2]} when the team is balancing speed and quality at ${company}.`,
      `How would you ${roleData.technical[3]} if the product suddenly needed to support a broader audience?`,
      `What approach would you take to ${roleData.technical[4]} while still aligning with ${companyData.signal}?`,
    ]

    const hrQuestions = [
      `${roleData.hr[0]} for a high-growth team like ${company}?`,
      `${roleData.hr[1]} when the brief is still evolving?`,
      `${roleData.hr[2]} while keeping the broader organization informed?`,
    ]

    const behavioralQuestions = [
      `${roleData.behavioral[0]} and what did you learn from the experience?`,
      `${roleData.behavioral[1]} and how did you respond?`,
      `${roleData.behavioral[2]} and what changed in your approach afterward?`,
    ]

    const aiTips = [
      {
        title: 'Communication Tips',
        value: `Frame answers around impact, reasoning, and tradeoffs for a ${company} style interview.`,
      },
      {
        title: 'Technical Tips',
        value: `Tie your examples back to ${companyData.focus} and show how you make decisions with clarity.`,
      },
      {
        title: 'Confidence Score',
        value: `${experienceData.voice} should be your anchor when you explain your approach.`,
      },
      {
        title: 'Time Management',
        value: `Aim for concise stories that surface the problem, action, and outcome within ${experienceData.time}.`,
      },
    ]

    return {
      technicalQuestions,
      hrQuestions,
      behavioralQuestions,
      aiTips,
      difficulty: experienceData.difficulty,
      time: experienceData.time,
    }
  }, [company, experience, role])

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
                <label className="text-sm font-medium text-slate-300">Company</label>
                <select
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-0"
                >
                  {companies.map((item) => (
                    <option key={item} value={item} className="bg-slate-900">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Job Role</label>
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-0"
                >
                  {roles.map((item) => (
                    <option key={item} value={item} className="bg-slate-900">
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Experience Level</label>
                <select
                  value={experience}
                  onChange={(event) => setExperience(event.target.value)}
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none ring-0"
                >
                  {experienceLevels.map((item) => (
                    <option key={item} value={item} className="bg-slate-900">
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-600/15 via-slate-900 to-indigo-500/10 p-5">
              <div className="flex items-center gap-2 text-cyan-200">
                <FiTarget className="h-5 w-5" />
                <h2 className="text-lg font-semibold text-white">AI Interview Simulator</h2>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">Company: {company}</div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">Role: {role}</div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">Experience: {experience}</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">
                    <p className="text-slate-400">Difficulty</p>
                    <p className="mt-1 font-semibold text-white">{interviewProfile.difficulty}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3">
                    <p className="text-slate-400">Estimated Time</p>
                    <p className="mt-1 font-semibold text-white">{interviewProfile.time}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-cyan-200">
                  Questions update instantly as you switch the scenario.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">AI Interview Simulation</h2>
                <p className="mt-1 text-sm text-slate-400">Fresh questions tailored to your selected company, role, and experience level.</p>
              </div>
              <div className="rounded-2xl bg-cyan-500/10 p-2 text-cyan-300">
                <FiZap className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-cyan-200">
                  <FiCpu className="h-4 w-4" />
                  <h3 className="font-semibold text-white">Technical Questions</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                  {interviewProfile.technicalQuestions.map((question) => (
                    <li key={question} className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-emerald-200">
                  <FiGlobe className="h-4 w-4" />
                  <h3 className="font-semibold text-white">HR Questions</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                  {interviewProfile.hrQuestions.map((question) => (
                    <li key={question} className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-violet-200">
                  <FiShield className="h-4 w-4" />
                  <h3 className="font-semibold text-white">Behavioral Questions</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                  {interviewProfile.behavioralQuestions.map((question) => (
                    <li key={question} className="rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2">
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
              {interviewProfile.aiTips.map((tip) => (
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
