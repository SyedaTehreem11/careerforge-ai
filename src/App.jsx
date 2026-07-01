import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import TrustedCompaniesSection from './sections/TrustedCompaniesSection'
import FeaturesSection from './sections/FeaturesSection'
import HowItWorksSection from './sections/HowItWorksSection'
import TestimonialsSection from './sections/TestimonialsSection'
import CTASection from './sections/CTASection'
import FooterSection from './sections/FooterSection'
import DashboardPage from './pages/dashboard'
import ResumeAnalyzerPage from './pages/resumeanalyzer'
import JobTrackerPage from './pages/jobtracker'
import InterviewPrepPage from './pages/interviewprep'

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedCompaniesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzerPage />} />
        <Route path="/job-tracker" element={<JobTrackerPage />} />
        <Route path="/interview-prep" element={<InterviewPrepPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App