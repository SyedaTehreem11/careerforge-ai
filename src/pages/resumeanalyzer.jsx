import { useRef, useState } from 'react'
import {
  FiAlertTriangle,
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiCpu,
  FiFileText,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUploadCloud,
  FiZap,
} from 'react-icons/fi'

const formatFileSize = (bytes) => {
  if (!bytes) return '0 KB'
  const units = ['B', 'KB', 'MB']
  let size = bytes
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex += 1
  }

  return `${size.toFixed(size >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`
}

const getScoreTone = (score) => {
  if (score >= 85) {
    return {
      label: 'Strong signal',
      text: 'text-emerald-300',
      border: 'border-emerald-400/20',
      bg: 'bg-emerald-500/10',
      dot: 'bg-emerald-400',
      gradient: 'from-emerald-500 to-cyan-400',
    }
  }

  if (score >= 70) {
    return {
      label: 'Needs polish',
      text: 'text-amber-300',
      border: 'border-amber-400/20',
      bg: 'bg-amber-500/10',
      dot: 'bg-amber-400',
      gradient: 'from-amber-500 to-orange-400',
    }
  }

  return {
    label: 'Needs work',
    text: 'text-rose-300',
    border: 'border-rose-400/20',
    bg: 'bg-rose-500/10',
    dot: 'bg-rose-400',
    gradient: 'from-rose-500 to-pink-400',
  }
}

const ScoreRing = ({ score, label, detail }) => {
  const radius = 46
  const circumference = 2 * Math.PI * radius
  const tone = getScoreTone(score)
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-32 w-32 items-center justify-center">
        <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
          <circle cx="60" cy="60" r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#scoreGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute text-center">
          <p className="text-3xl font-semibold text-white">{score}</p>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">/100</p>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold text-white">{label}</p>
      <p className="mt-1 text-sm text-slate-400">{detail}</p>
      <div className={`mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${tone.text} ${tone.border} ${tone.bg}`}>
        <span className={`h-2.5 w-2.5 rounded-full ${tone.dot}`} />
        {tone.label}
      </div>
    </div>
  )
}

const MetricCard = ({ label, score }) => {
  const tone = getScoreTone(score)

  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">{label}</span>
        <span className={`font-semibold ${tone.text}`}>{score}%</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-800">
        <div className={`h-2 rounded-full bg-gradient-to-r ${tone.gradient}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  )
}

const ResumeAnalyzerPage = () => {
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [analysis, setAnalysis] = useState(null)

  const handleFileSelection = (file) => {
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file)
      setIsAnalyzed(false)
      setAnalysis(null)
    }
  }

  const handleInputChange = (event) => {
    const file = event.target.files?.[0]
    handleFileSelection(file)
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setIsDragging(false)
    const file = event.dataTransfer.files?.[0]
    handleFileSelection(file)
  }

  const handleAnalyze = () => {
    if (!selectedFile) return

    setAnalysis({
      resumeScore: 86,
      atsScore: 92,
      keywordMatch: 89,
      missingSkills: ['Motion Design', 'Go-to-Market Analytics', 'B2B SaaS Metrics'],
      strengths: [
        'Strong ownership and cross-functional collaboration',
        'Clear impact storytelling with measurable outcomes',
        'Solid leadership presence in recent roles',
      ],
      weaknesses: [
        'Leadership examples need more quantification',
        'Some ATS keywords for product analytics are missing',
        'The opening summary could be more tailored to the role',
      ],
      suggestions: [
        'Add a concise metrics section to highlight results more clearly.',
        'Mention your AI workflow experience in the summary for better ATS match.',
        'Tighten the top section so the strongest signal appears earlier.',
      ],
    })
    setIsAnalyzed(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <header className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-200">Resume Analyzer</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Resume Analyzer</h1>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
                Upload your resume and receive AI-powered feedback crafted to sharpen your story and improve your fit.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <FiShield className="h-4 w-4" />
              ATS-ready insights in seconds
            </div>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
              <div
                onDragOver={(event) => {
                  event.preventDefault()
                  setIsDragging(true)
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`rounded-[1.5rem] border-2 border-dashed p-8 text-center transition ${
                  isDragging
                    ? 'border-indigo-400 bg-indigo-500/10'
                    : 'border-white/10 bg-white/5 hover:border-indigo-400/40 hover:bg-indigo-500/5'
                }`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-emerald-400/10 text-indigo-200">
                  <FiUploadCloud className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-white">Drag & drop your resume</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Upload a polished PDF to unlock analysis tailored to modern hiring standards.
                </p>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/20"
                  >
                    Upload PDF
                  </button>
                  <span className="inline-flex items-center justify-center text-sm text-slate-500">
                    PDF • Max 5 MB
                  </span>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  className="hidden"
                  onChange={handleInputChange}
                />
              </div>

              {selectedFile && (
                <div className="mt-5 flex items-center justify-between rounded-[1.25rem] border border-emerald-400/20 bg-emerald-500/10 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-emerald-500/20 p-2 text-emerald-300">
                      <FiFileText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{selectedFile.name}</p>
                      <p className="text-sm text-slate-400">{formatFileSize(selectedFile.size)}</p>
                    </div>
                  </div>
                  <FiCheckCircle className="h-5 w-5 text-emerald-300" />
                </div>
              )}

              <button
                type="button"
                onClick={handleAnalyze}
                disabled={!selectedFile}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-[0_14px_50px_rgba(99,102,241,0.28)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Analyze Resume
                <FiArrowRight className="h-4 w-4" />
              </button>
            </div>

            {isAnalyzed && analysis && (
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-200">AI analysis preview</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">ATS resume intelligence</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300">
                    <FiShield className="h-4 w-4" />
                    Strong match for modern hiring pipelines
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                    <div className="flex items-center gap-2 text-cyan-200">
                      <FiTarget className="h-4 w-4" />
                      <h3 className="font-semibold text-white">Resume Score</h3>
                    </div>
                    <div className="mt-5 flex flex-col items-center justify-center">
                      <ScoreRing score={analysis.resumeScore} label="Resume Score" detail="Role fit + clarity" />
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <MetricCard label="ATS Score" score={analysis.atsScore} />
                      <MetricCard label="Keyword Match" score={analysis.keywordMatch} />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                      <div className="flex items-center gap-2 text-amber-200">
                        <FiAlertTriangle className="h-4 w-4" />
                        <h3 className="font-semibold text-white">Missing Skills</h3>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-400">
                        {analysis.missingSkills.map((skill) => (
                          <li key={skill} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                      <div className="flex items-center gap-2 text-emerald-200">
                        <FiZap className="h-4 w-4" />
                        <h3 className="font-semibold text-white">Strengths</h3>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-400">
                        {analysis.strengths.map((item) => (
                          <li key={item} className="flex gap-2">
                            <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                    <div className="flex items-center gap-2 text-rose-200">
                      <FiBarChart2 className="h-4 w-4" />
                      <h3 className="font-semibold text-white">Weaknesses</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-400">
                      {analysis.weaknesses.map((item) => (
                        <li key={item} className="flex gap-2">
                          <FiAlertTriangle className="mt-1 h-4 w-4 shrink-0 text-rose-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                    <div className="flex items-center gap-2 text-indigo-200">
                      <FiTrendingUp className="h-4 w-4" />
                      <h3 className="font-semibold text-white">Improvement Suggestions</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-400">
                      {analysis.suggestions.map((item) => (
                        <li key={item} className="flex gap-2">
                          <FiArrowRight className="mt-1 h-4 w-4 shrink-0 text-indigo-200" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-emerald-500/10 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-200">AI assistant</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Resume intelligence</h2>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-500/20 to-emerald-400/10 p-3 text-indigo-200">
                  <FiCpu className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Match quality</span>
                  <span>96%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[96%] rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" />
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-500/10 p-2 text-emerald-300">
                    <FiCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ready for review</p>
                    <p className="mt-1 text-sm text-slate-400">Your résumé is already presenting a strong narrative.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                {['Keyword alignment', 'Leadership signal', 'Impact-driven phrasing'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                    <span>{item}</span>
                    <span className="text-emerald-300">Strong</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ResumeAnalyzerPage
