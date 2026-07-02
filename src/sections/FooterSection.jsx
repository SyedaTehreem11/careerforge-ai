import { Link } from 'react-router-dom'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const footerLinks = [
  { title: 'Quick Links', items: ['Home', 'Dashboard', 'Resume Analyzer', 'Interview Prep'] },
  { title: 'Resources', items: ['Career Tips', 'AI Playbooks', 'Success Stories'] },
]

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-400 text-sm font-bold text-slate-950">
                CF
              </span>
              CareerForge AI
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A premium AI platform for career strategy, resume clarity, interview confidence, and job search momentum.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-400">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Link to="/" className="transition hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <FiMail className="h-4 w-4 text-indigo-300" />
                  hello@careerforge.ai
                </li>
                <li className="flex items-center gap-2">
                  <FiLinkedin className="h-4 w-4 text-indigo-300" />
                  linkedin.com/company/careerforge
                </li>
                <li className="flex items-center gap-2">
                  <FiGithub className="h-4 w-4 text-indigo-300" />
                  github.com/careerforge-ai
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">© 2026 CareerForge AI. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <FiGithub className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a href="mailto:hello@careerforge.ai" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <FiMail className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-500/20"
            >
              <FiArrowUp className="h-4 w-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
