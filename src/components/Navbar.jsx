import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Resume Analyzer', to: '/resume' },
  { label: 'Job Tracker', to: '/jobtracker' },
  { label: 'Interview Prep', to: '/interview' },
]

const Navbar = ({ variant = 'landing' }) => {
  const isDashboard = variant === 'dashboard'
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-400 text-sm font-bold text-slate-950">
            CF
          </span>
          CareerForge AI
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white/10 text-white shadow-[0_0_30px_rgba(99,102,241,0.16)]'
                    : 'text-slate-400 hover:-translate-y-0.5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={isDashboard ? '/' : '/dashboard'}
            className="hidden items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-500/20 sm:inline-flex"
          >
            {isDashboard ? 'Back home' : 'Open dashboard'}
            <FiArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to={isDashboard ? '/' : '/dashboard'}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-200"
            >
              {isDashboard ? 'Back home' : 'Open dashboard'}
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
