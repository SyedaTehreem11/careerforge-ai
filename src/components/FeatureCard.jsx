import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description, badge }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01, boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 25px 80px rgba(99,102,241,0.16)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_18px_60px_rgba(2,6,23,0.4)] backdrop-blur-xl transition duration-300 hover:border-indigo-400/30"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/30 to-emerald-400/20 text-indigo-200">
          <Icon className="h-5 w-5" />
        </div>
        {badge && (
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
    </motion.article>
  )
}

export default FeatureCard
