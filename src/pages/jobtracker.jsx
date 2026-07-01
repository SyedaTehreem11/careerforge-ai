import { useMemo, useState } from 'react'
import { FiBriefcase, FiFilter, FiPlus, FiSearch, FiTarget, FiTrendingUp } from 'react-icons/fi'

const applicationsData = [
  { company: 'Northstar Labs', position: 'Senior Product Designer', location: 'Remote · US', appliedDate: 'Jun 28', status: 'Interview', nextInterview: 'Jul 03 · 10:30 AM' },
  { company: 'Flux AI', position: 'UX Engineer', location: 'New York, NY', appliedDate: 'Jun 24', status: 'Applied', nextInterview: 'Pending' },
  { company: 'BrightPath', position: 'Design Systems Lead', location: 'Austin, TX', appliedDate: 'Jun 20', status: 'Offer', nextInterview: 'Jul 06 · 2:00 PM' },
  { company: 'Lumen Cloud', position: 'Product Designer', location: 'Remote · EU', appliedDate: 'Jun 18', status: 'Pending', nextInterview: 'Jul 08 · 4:00 PM' },
  { company: 'Mosaic AI', position: 'Visual Designer', location: 'Chicago, IL', appliedDate: 'Jun 15', status: 'Rejected', nextInterview: '—' },
  { company: 'Aurelia', position: 'Senior UI Designer', location: 'Remote · Canada', appliedDate: 'Jun 12', status: 'Interview', nextInterview: 'Jul 01 · 1:00 PM' },
  { company: 'Helio', position: 'Product Design Manager', location: 'San Francisco, CA', appliedDate: 'Jun 10', status: 'Applied', nextInterview: 'Pending' },
  { company: 'Nova Studio', position: 'Brand Designer', location: 'Seattle, WA', appliedDate: 'Jun 08', status: 'Pending', nextInterview: 'Jul 10 · 11:00 AM' },
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

  const filteredApplications = useMemo(() => {
    return applicationsData.filter((item) => {
      const matchesQuery = [item.company, item.position, item.location].some((value) =>
        value.toLowerCase().includes(query.toLowerCase()),
      )
      const matchesFilter = filter === 'All' || item.status === filter
      return matchesQuery && matchesFilter
    })
  }, [filter, query])

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
                  placeholder="Search companies or roles"
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
                  <option value="Rejected" className="bg-slate-900">Rejected</option>
                  <option value="Offer" className="bg-slate-900">Offer</option>
                  <option value="Pending" className="bg-slate-900">Pending</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm">
                <thead className="bg-slate-950/70 text-slate-400">
                  <tr>
                    <th className="px-4 py-3 font-medium">Company</th>
                    <th className="px-4 py-3 font-medium">Position</th>
                    <th className="px-4 py-3 font-medium">Location</th>
                    <th className="px-4 py-3 font-medium">Applied Date</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Next Interview</th>
                    <th className="px-4 py-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-slate-900/60">
                  {filteredApplications.map((item) => (
                    <tr key={`${item.company}-${item.position}`} className="transition hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-white">{item.company}</td>
                      <td className="px-4 py-3 text-slate-300">{item.position}</td>
                      <td className="px-4 py-3 text-slate-400">{item.location}</td>
                      <td className="px-4 py-3 text-slate-400">{item.appliedDate}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[item.status]}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-400">{item.nextInterview}</td>
                      <td className="px-4 py-3">
                        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10">
                          <FiTarget className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
