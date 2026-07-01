import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ quote, name, role, company }) => {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-xl"
    >
      <div className="flex gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <FiStar key={index} className="h-4 w-4" />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-slate-300">“{quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">
          {role} · {company}
        </p>
      </div>
    </motion.article>
  )
}

export default TestimonialCard
