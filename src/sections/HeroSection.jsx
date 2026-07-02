import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiPlay,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

const featureCards = [
  { title: 'Role matching', text: 'AI that understands your strengths and market timing.' },
  { title: 'Interview prep', text: 'Practice with adaptive coaching and instant feedback.' },
]

const statCards = [
  { label: 'AI score', value: 92, suffix: '/100', detail: 'Signal quality', accent: 'from-cyan-500/25 to-indigo-600/25' },
  { label: 'Momentum', value: 18, suffix: '%', detail: 'Week over week', accent: 'from-emerald-500/25 to-cyan-500/20' },
  { label: 'Readiness', value: 4.9, suffix: '/5', detail: 'User confidence', accent: 'from-violet-500/25 to-fuchsia-500/20' },
]

const Counter = ({ value, suffix }) => {
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => {
    if (Number.isInteger(value)) {
      return `${Math.round(latest)}${suffix}`
    }

    return `${latest.toFixed(1)}${suffix}`
  })

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 1.2, ease: 'easeOut' })
    return controls.stop
  }, [motionValue, value])

  return <motion.span>{rounded}</motion.span>
}

const HeroSection = () => {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.22),_transparent_28%),radial-gradient(circle_at_85%_20%,_rgba(16,185,129,0.2),_transparent_24%)]" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
            <FiShield className="h-4 w-4" />
            The AI career operating system for ambitious teams
          </div>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build your next move with{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-emerald-300 bg-clip-text text-transparent">
              clarity
            </span>
            .
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            CareerForge AI helps founders, operators, and ambitious professionals turn their goals into a confident roadmap with smart coaching, personalized strategy, and instant momentum.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 font-medium text-white shadow-[0_12px_45px_rgba(99,102,241,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(99,102,241,0.4)]"
            >
              Start free
              <FiArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/interview"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <FiPlay className="h-4 w-4" />
              Watch demo
            </Link>
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
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/30 via-transparent to-emerald-400/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_35px_120px_rgba(2,6,23,0.72)] backdrop-blur-xl sm:p-6">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_42%)]" />

              <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div>
                  <p className="text-sm text-slate-400">Career growth score</p>
                  <p className="mt-1 text-3xl font-semibold text-white">92/100</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-500/30 to-emerald-400/20 p-3 text-emerald-300">
                  <FiCpu className="h-6 w-6" />
                </div>
              </div>

              <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                {featureCards.map((card) => (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition"
                  >
                    <p className="font-medium text-white">{card.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{card.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-5 grid gap-3 md:grid-cols-3">
                {statCards.map((card) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`rounded-2xl border border-white/10 bg-gradient-to-br ${card.accent} p-3`}
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{card.label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      <Counter value={card.value} suffix={card.suffix} />
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{card.detail}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ y: [0, -6, 0], boxShadow: ['0 0 0 rgba(34,211,238,0)', '0 20px 50px rgba(34,211,238,0.15)', '0 0 0 rgba(34,211,238,0)'] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative mt-5 rounded-[1.5rem] border border-indigo-400/20 bg-gradient-to-r from-indigo-500/15 to-emerald-500/10 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-300">Next best move</p>
                    <p className="mt-1 text-lg font-semibold text-white">Launch a founder-led content sprint</p>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 p-2 text-emerald-300">
                    <FiTrendingUp className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 6, 0], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
              className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-xl sm:block"
            >
              <FiStar className="h-5 w-5 text-cyan-300" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0], rotate: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-12 hidden rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-xl sm:block"
            >
              <FiZap className="h-5 w-5 text-violet-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
