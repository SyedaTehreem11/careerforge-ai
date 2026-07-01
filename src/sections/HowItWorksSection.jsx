import { motion } from 'framer-motion'
import { FiCompass, FiTarget, FiTrendingUp } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading'

const steps = [
  {
    icon: FiCompass,
    title: '1. Define your direction',
    description: 'Share your goals, strengths, and the role you want next so the system can understand your trajectory.',
  },
  {
    icon: FiTarget,
    title: '2. Generate your strategy',
    description: 'Receive a tailored playbook with priorities, milestones, and opportunities to accelerate growth.',
  },
  {
    icon: FiTrendingUp,
    title: '3. Build momentum',
    description: 'Stay on track with adaptive coaching, insights, and a clear path to your next breakthrough.',
  },
]

const HowItWorksSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionHeading
        eyebrow="How it works"
        title="A clean path from ambition to action"
        description="The experience is designed to feel effortless while still giving you the depth and insight of a seasoned advisor."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_18px_60px_rgba(2,6,23,0.35)] backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-emerald-400/20 text-indigo-200">
              <step.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-base leading-8 text-slate-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection
