import {
  FiArrowRight,
  FiBarChart2,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiCpu,
  FiFileText,
  FiPenTool,
  FiPlay,
  FiSearch,
  FiTarget,
  FiTrendingUp,
  FiUploadCloud,
  FiZap,
} from 'react-icons/fi'

const stats = [
  { label: 'Resume Score', value: '92%', change: '+6% this month', icon: FiFileText, accent: 'from-indigo-500/20 to-indigo-400/10' },
  { label: 'Applications Sent', value: '18', change: '4 this week', icon: FiBriefcase, accent: 'from-emerald-500/20 to-emerald-400/10' },
  { label: 'Interviews Scheduled', value: '5', change: '2 this week', icon: FiCalendar, accent: 'from-violet-500/20 to-violet-400/10' },
  { label: 'Skill Match', value: '88%', change: 'Strong fit', icon: FiTarget, accent: 'from-cyan-500/20 to-cyan-400/10' },
  { label: 'Saved Jobs', value: '14', change: '3 new saves', icon: FiBarChart2, accent: 'from-amber-500/20 to-amber-400/10' },
  { label: 'Weekly Goal', value: '75%', change: 'On track', icon: FiTrendingUp, accent: 'from-rose-500/20 to-rose-400/10' },
]

const applications = [
  { company: 'Northstar Labs', position: 'Senior Product Designer', status: 'Interviewing', date: 'Jun 28, 2026' },
  { company: 'Flux AI', position: 'UX Engineer', status: 'Applied', date: 'Jun 24, 2026' },
  { company: 'BrightPath', position: 'Design Systems Lead', status: 'Follow-up', date: 'Jun 20, 2026' },
]

const suggestions = [
  'Tailor your résumé summary to emphasize product strategy and AI collaboration.',
  'Add one quantified outcome to your recent design case study for stronger credibility.',
  'Prepare a concise story about leading cross-functional projects with measurable impact.',
]

const quickActions = [
  { title: 'Upload Resume', description: 'Refresh your profile and keep your materials current.', icon: FiUploadCloud },
  { title: 'Analyze Resume', description: 'Surface keyword gaps and strength areas instantly.', icon: FiSearch },
  { title: 'Track Jobs', description: 'Monitor stages, deadlines, and follow-ups in one view.', icon: FiBriefcase },
  { title: 'Prepare Interview', description: 'Get AI-guided prompts and practice questions ready.', icon: FiPenTool },
]

const DashboardPage = () => {
  const weeklyProgress = [72, 81, 76, 88, 91, 85, 94]
  const skillProgress = [
    { label: 'Resume clarity', value: 88 },
    { label: 'AI interview prep', value: 91 },
    { label: 'Job fit targeting', value: 82 },
    { label: 'Portfolio storytelling', value: 76 },
  ]
  const activityTimeline = [
    { title: 'Resume optimized', time: '2h ago', detail: 'Updated summary and skills section' },
    { title: 'Interview practice completed', time: 'Yesterday', detail: 'Completed 3 AI mock interview rounds' },
    { title: 'New application submitted', time: '2 days ago', detail: 'Applied to BrightPath Design Systems' },
  ]
  const upcomingTasks = [
    { title: 'Follow up with Northstar Labs', time: 'Today · 4:00 PM' },
    { title: 'Refine portfolio case study', time: 'Tomorrow · 11:30 AM' },
    { title: 'Prepare salary negotiation notes', time: 'Friday · 6:00 PM' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-200">Career dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Welcome back, Tehreem 👋</h1>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
                Your momentum is strong. Keep building toward the role you want with focused, confident next steps.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <FiCheckCircle className="h-4 w-4" />
              3 strong opportunities this week
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-emerald-500/10 p-5 shadow-[0_16px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">AI Career Score</p>
                <p className="mt-2 text-3xl font-semibold text-white">91/100</p>
              </div>
              <div className="rounded-2xl bg-indigo-500/10 p-2 text-indigo-200">
                <FiCpu className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">Your profile is highly aligned for modern product and design roles.</p>
          </div>
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <article
                key={stat.label}
                className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-[0_16px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent} text-indigo-200`}>
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm text-slate-400">{stat.label}</p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <span className="text-sm text-slate-400">{stat.change}</span>
                </div>
              </article>
            )
          })}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Recent Applications</h2>
                <p className="mt-1 text-sm text-slate-400">A quick pulse on your active opportunities.</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10">
                View all
                <FiArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm">
                <thead className="bg-slate-950/70 text-slate-400">
                  <tr>
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Position</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Applied Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-slate-900/60">
                  {applications.map((item) => (
                    <tr key={item.company} className="transition hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-white">{item.company}</td>
                      <td className="px-4 py-3 text-slate-300">{item.position}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-200">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-emerald-500/10 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
              <div className="flex items-center gap-2 text-indigo-200">
                <FiCpu className="h-5 w-5" />
                <h2 className="text-xl font-semibold text-white">AI Suggestions</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {suggestions.map((item) => (
                  <li key={item} className="flex gap-2 rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                    <FiPlay className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Upcoming interview</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">BrightPath AI</h3>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 p-2 text-emerald-300">
                  <FiCalendar className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <FiClock className="h-4 w-4 text-indigo-200" />
                  <span>July 3, 2026 · 10:30 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiBriefcase className="h-4 w-4 text-indigo-200" />
                  <span>Senior Product Designer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Weekly Progress</h2>
                <p className="mt-1 text-sm text-slate-400">Momentum is climbing across your growth plan.</p>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-300">+12% this week</div>
            </div>

            <div className="mt-6 flex h-44 items-end gap-3 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4">
              {weeklyProgress.map((value, index) => (
                <div key={`${value}-${index}`} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex h-32 w-full items-end justify-center rounded-2xl bg-gradient-to-t from-indigo-500/70 to-emerald-400/40 p-1">
                    <div className="w-full rounded-xl bg-gradient-to-t from-cyan-400 to-indigo-400" style={{ height: `${value}%` }} />
                  </div>
                  <span className="text-xs text-slate-500">D{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-emerald-500/10 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-indigo-200">
              <FiCpu className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">AI Career Insights</h2>
            </div>
            <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
              <p className="text-sm text-slate-400">Best next move</p>
              <p className="mt-2 text-lg font-semibold text-white">Double down on storytelling and measurable outcomes.</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Your profile is strongest in leadership and cross-functional collaboration. Sharpen the proof points and you’ll stand out even more.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Skills Progress</h2>
                <p className="mt-1 text-sm text-slate-400">Your growth is consistent and focused.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {skillProgress.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-300">{skill.label}</span>
                    <span className="text-slate-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-amber-200">
              <FiZap className="h-5 w-5" />
              <h2 className="text-xl font-semibold text-white">Motivational Quote</h2>
            </div>
            <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-amber-500/10 via-slate-950/60 to-emerald-500/10 p-5">
              <p className="text-lg leading-8 text-slate-200">“Momentum compounds when you show up with intention.”</p>
              <p className="mt-4 text-sm text-slate-400">Keep building, one strong action at a time.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
                <p className="mt-1 text-sm text-slate-400">Your latest momentum and wins.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {activityTimeline.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-white">{item.title}</p>
                      <span className="text-xs text-slate-500">{item.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Upcoming Tasks</h2>
                <p className="mt-1 text-sm text-slate-400">Stay ahead of the next milestone.</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {upcomingTasks.map((task) => (
                <div key={task.title} className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-slate-950/60 px-4 py-3">
                  <div>
                    <p className="font-medium text-white">{task.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{task.time}</p>
                  </div>
                  <div className="rounded-full bg-indigo-500/10 p-2 text-indigo-200">
                    <FiCalendar className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
              <p className="mt-1 text-sm text-slate-400">Move faster with focused next steps.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <button
                  key={action.title}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-emerald-400/10 text-indigo-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{action.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{action.description}</p>
                </button>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default DashboardPage
