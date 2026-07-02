import { useMemo, useState } from 'react'
import { FiBriefcase, FiCalendar, FiDollarSign, FiFilter, FiMapPin, FiPlus, FiSearch, FiTarget, FiTrendingUp } from 'react-icons/fi'

const applicationsData = [
  { company: 'Northstar Labs', position: 'Senior Product Designer', location: 'Remote · US', salary: '$165k', appliedDate: '2026-06-28', status: 'Interview', nextAction: 'Prep portfolio story for Jul 03 call' },
  { company: 'Flux AI', position: 'UX Engineer', location: 'New York, NY', salary: '$150k', appliedDate: '2026-06-24', status: 'Applied', nextAction: 'Follow up this week' },
  { company: 'BrightPath', position: 'Design Systems Lead', location: 'Austin, TX', salary: '$180k', appliedDate: '2026-06-20', status: 'Offer', nextAction: 'Review offer terms' },
  { company: 'Lumen Cloud', position: 'Product Designer', location: 'Remote · EU', salary: '$140k', appliedDate: '2026-06-18', status: 'Applied', nextAction: 'Send case study recap' },
  { company: 'Mosaic AI', position: 'Visual Designer', location: 'Chicago, IL', salary: '$130k', appliedDate: '2026-06-15', status: 'Rejected', nextAction: 'Archive and revisit in 90 days' },
  { company: 'Aurelia', position: 'Senior UI Designer', location: 'Remote · Canada', salary: '$155k', appliedDate: '2026-06-12', status: 'Interview', nextAction: 'Prepare system design walkthrough' },
  { company: 'Helio', position: 'Product Design Manager', location: 'San Francisco, CA', salary: '$190k', appliedDate: '2026-06-10', status: 'Applied', nextAction: 'Schedule recruiter conversation' },
  { company: 'Nova Studio', position: 'Brand Designer', location: 'Seattle, WA', salary: '$125k', appliedDate: '2026-06-08', status: 'Rejected', nextAction: 'Refresh portfolio case studies' },
]

const statusStyles = {
  Applied: 'border-sky-400/20 bg-sky-500/10 text-sky-200',
  Interview: 'border-violet-400/20 bg-violet-500/10 text-violet-200',
  Rejected: 'border-rose-400/20 bg-rose-500/10 text-rose-200',
  Offer: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-200',
  Pending: 'border-amber-400/20 bg-amber-500/10 text-amber-200',
}

const progressCards = [
  { label: 'Applied', value: '24', accent: 'from-sky-500/20 to-sky-400/10' },
  { label: 'Interviewing', value: '6', accent: 'from-violet-500/20 to-violet-400/10' },
  { label: 'Offers', value: '2', accent: 'from-emerald-500/20 to-emerald-400/10' },
  { label: 'Rejected', value: '4', accent: 'from-rose-500/20 to-rose-400/10' },
]

const JobTrackerPage = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [sortBy, setSortBy] = useState('date')
  const [applications, setApplications] = useState(applicationsData)

  const filteredApplications = useMemo(() => {
    const result = applications.filter((item) => {
      const matchesQuery = [item.company, item.position, item.location].some((value) =>
        value.toLowerCase().includes(query.toLowerCase()),
      )
      const matchesFilter = filter === 'All' || item.status === filter
      return matchesQuery && matchesFilter
    })

    return result.sort((a, b) => {
      if (sortBy === 'status') {
        return a.status.localeCompare(b.status)
      }

      return new Date(b.appliedDate) - new Date(a.appliedDate)
    })
  }, [applications, filter, query, sortBy])

  const handleStatusChange = (company, newStatus) => {
    setApplications((current) =>
      current.map((item) => (item.company === company ? { ...item, status: newStatus } : item)),
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-amber-200">Job Tracker</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Job Tracker</h1>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
                Track every application, interview, and opportunity in one premium workspace.
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 font-medium text-white shadow-[0_14px_50px_rgba(99,102,241,0.26)] transition hover:scale-[1.01]">
              <FiPlus className="h-4 w-4" />
              Add Application
            </button>
          </div>
        </header>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 flex-col gap-3 sm:flex-row">
              <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 sm:min-w-[260px]">
                <FiSearch className="h-4 w-4 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search company"
                  className="w-full bg-transparent outline-none placeholder:text-slate-500"
                />
              </label>

              <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <FiFilter className="h-4 w-4 text-slate-400" />
                <select
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                  className="bg-transparent outline-none"
                >
                  <option value="All" className="bg-slate-900">All</option>
                  <option value="Applied" className="bg-slate-900">Applied</option>
                  <option value="Interview" className="bg-slate-900">Interview</option>
                  <option value="Offer" className="bg-slate-900">Offer</option>
                  <option value="Rejected" className="bg-slate-900">Rejected</option>
                </select>
              </label>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <FiCalendar className="h-4 w-4 text-slate-400" />
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="bg-transparent outline-none"
                >
                  <option value="date" className="bg-slate-900">Sort by date</option>
                  <option value="status" className="bg-slate-900">Sort by status</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {filteredApplications.map((item) => (
              <article key={`${item.company}-${item.position}`} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_16px_60px_rgba(2,6,23,0.24)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-200">{item.company}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.position}</h3>
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[item.status]}`}>
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <FiMapPin className="h-4 w-4 text-slate-300" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <FiDollarSign className="h-4 w-4 text-slate-300" />
                    <span>{item.salary}</span>
                  </div>
                </div>

                <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-400">Applied Date</span>
                    <span className="font-medium text-white">{item.appliedDate}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-slate-400">Next Action</span>
                    <span className="max-w-[60%] text-right font-medium text-white">{item.nextAction}</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    <span className="text-slate-400">Status</span>
                    <select
                      value={item.status}
                      onChange={(event) => handleStatusChange(item.company, event.target.value)}
                      className="w-full bg-transparent outline-none"
                    >
                      <option value="Applied" className="bg-slate-900">Applied</option>
                      <option value="Interview" className="bg-slate-900">Interview</option>
                      <option value="Offer" className="bg-slate-900">Offer</option>
                      <option value="Rejected" className="bg-slate-900">Rejected</option>
                    </select>
                  </label>

                  <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/20">
                    <FiTarget className="h-4 w-4" />
                    Open Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Application Progress</h2>
              <p className="mt-1 text-sm text-slate-400">A quick snapshot of your pipeline this month.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {progressCards.map((card) => (
              <div key={card.label} className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${card.accent} p-5 shadow-[0_16px_60px_rgba(2,6,23,0.24)] backdrop-blur-xl`}>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">{card.label}</p>
                  <div className="rounded-2xl bg-white/10 p-2 text-slate-100">
                    <FiBriefcase className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default JobTrackerPage
