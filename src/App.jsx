import { motion } from 'framer-motion'
import { NavLink, Route, Routes } from 'react-router-dom'
import { FiBarChart2, FiBriefcase, FiFileText, FiHome, FiLayers, FiMessageSquare, FiMonitor } from 'react-icons/fi'
import Navbar from './components/Navbar'
import DashboardPage from './pages/dashboard'
import InterviewPrepPage from './pages/interviewprep'
import JobTrackerPage from './pages/jobtracker'
import ResumeAnalyzerPage from './pages/resumeanalyzer'
import HeroSection from './sections/HeroSection'
import TrustedCompaniesSection from './sections/TrustedCompaniesSection'
import FeaturesSection from './sections/FeaturesSection'
import HowItWorksSection from './sections/HowItWorksSection'
import TestimonialsSection from './sections/TestimonialsSection'
import CTASection from './sections/CTASection'
import FooterSection from './sections/FooterSection'

const dashboardLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: FiHome },
  { to: '/resume', label: 'Resume', icon: FiFileText },
  { to: '/interview', label: 'Interview', icon: FiMessageSquare },
  { to: '/jobtracker', label: 'Job Tracker', icon: FiBriefcase },
]

function AnimatedSection({ children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl"
        />
      </div>

      <div className="pointer-events-none absolute right-6 top-24 hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-[0_20px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl lg:block">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">AI copilot</p>
        <p className="mt-2 text-sm font-semibold text-white">Live guidance on demand</p>
      </div>

      <Navbar />
      <main className="relative z-10">
        <AnimatedSection><HeroSection /></AnimatedSection>
        <AnimatedSection><TrustedCompaniesSection /></AnimatedSection>
        <AnimatedSection><FeaturesSection /></AnimatedSection>
        <AnimatedSection><HowItWorksSection /></AnimatedSection>
        <AnimatedSection><TestimonialsSection /></AnimatedSection>
        <AnimatedSection><CTASection /></AnimatedSection>
      </main>
      <FooterSection />
    </div>
  )
}

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 p-4 lg:flex-row lg:p-6">
        <aside className="w-full rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_20px_80px_rgba(2,6,23,0.32)] backdrop-blur-xl lg:w-72 lg:flex lg:flex-col lg:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-400 text-sm font-bold text-slate-950">
              CF
            </div>
            <div>
              <p className="text-lg font-semibold text-white">CareerForge AI</p>
              <p className="text-sm text-slate-400">Growth workspace</p>
            </div>
          </div>

          <nav className="mt-8 flex flex-wrap gap-2 lg:flex-col">
            {dashboardLinks.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-500/20 to-violet-500/10 text-white shadow-[0_10px_35px_rgba(99,102,241,0.16)]'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="mt-8 rounded-[1.5rem] border border-indigo-400/20 bg-indigo-500/10 p-4 text-sm text-slate-300">
            <div className="flex items-center gap-2 text-indigo-200">
              <FiBarChart2 className="h-4 w-4" />
              <span className="font-medium">Momentum mode</span>
            </div>
            <p className="mt-2 leading-7">Stay focused with a calm, intelligent workspace built for your next move.</p>
          </div>
        </aside>

        <div className="flex-1">
          <Navbar variant="dashboard" />
          <main className="mt-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
      <Route path="/resume" element={<DashboardLayout><ResumeAnalyzerPage /></DashboardLayout>} />
      <Route path="/interview" element={<DashboardLayout><InterviewPrepPage /></DashboardLayout>} />
      <Route path="/jobtracker" element={<DashboardLayout><JobTrackerPage /></DashboardLayout>} />
    </Routes>
  )
}

export default App