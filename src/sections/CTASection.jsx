import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const CTASection = () => {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-indigo-400/20 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-emerald-500/10 p-8 shadow-[0_24px_80px_rgba(99,102,241,0.16)] backdrop-blur-xl sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-200">Launch faster</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Turn your next chapter into a clear, confident plan.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Start with a premium, AI-powered strategy experience built to help you make the next move with clarity.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-slate-950 transition hover:scale-[1.01]"
            >
              Get started
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/60 px-6 py-3.5 font-medium text-slate-200 transition hover:bg-slate-900"
            >
              Explore product
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
