import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay, FiCheckCircle, FiCpu, FiShield, FiTrendingUp } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
            <FiShield className="h-4 w-4" />
            The AI career operating system for ambitious teams
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build your next move with <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-emerald-300 bg-clip-text text-transparent">clarity</span>.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            CareerForge AI helps founders, operators, and ambitious professionals turn their goals into a confident roadmap with smart coaching, personalized strategy, and instant momentum.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 font-medium text-white shadow-[0_10px_40px_rgba(99,102,241,0.35)] transition hover:scale-[1.01]"
            >
              Start free
              <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#stories"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
            >
              <FiPlay className="h-4 w-4" />
              Watch demo
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <FiCheckCircle className="h-4 w-4 text-emerald-400" />
              10k+ career plans generated
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <FiCheckCircle className="h-4 w-4 text-emerald-400" />
              Trusted by modern teams
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/25 via-transparent to-emerald-400/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_30px_100px_rgba(2,6,23,0.65)] backdrop-blur-xl">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <div>
                <p className="text-sm text-slate-400">Career growth score</p>
                <p className="mt-1 text-3xl font-semibold text-white">92/100</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500/30 to-emerald-400/20 p-3 text-emerald-300">
                <FiCpu className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ['Role matching', 'AI that understands your strengths'],
                ['Interview prep', 'Practice with live, adaptive coaching'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-medium text-white">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Next best move</p>
                  <p className="mt-1 text-lg font-semibold text-white">Launch a founder-led content sprint</p>
                </div>
                <div className="rounded-full bg-emerald-500/20 p-2 text-emerald-300">
                  <FiTrendingUp className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
