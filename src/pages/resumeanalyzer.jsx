import { useRef, useState } from 'react'
import {
  FiArrowRight,
  FiCheckCircle,
  FiCpu,
  FiFileText,
  FiShield,
  FiZap,
  FiUploadCloud,
} from 'react-icons/fi'

const skillsFound = ['Product Strategy', 'Design Systems', 'AI Collaboration', 'Leadership']
const missingSkills = ['Motion Design', 'Go-to-Market Analytics', 'B2B SaaS Metrics']
const strengths = [
  'Strong ownership and cross-functional collaboration',
  'Clear impact storytelling with measurable outcomes',
  'Solid leadership presence in recent roles',
]
const suggestions = [
  'Add a concise metrics section to highlight results more clearly.',
  'Mention your AI workflow experience in the summary for better ATS match.',
  'Tighten the top section so the strongest signal appears earlier.',
]

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

const ResumeAnalyzerPage = () => {
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzed, setIsAnalyzed] = useState(false)

  const handleFileSelection = (file) => {
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file)
      setIsAnalyzed(false)
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
                onClick={() => setIsAnalyzed(true)}
                disabled={!selectedFile}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-[0_14px_50px_rgba(99,102,241,0.28)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Analyze Resume
                <FiArrowRight className="h-4 w-4" />
              </button>
            </div>

            {isAnalyzed && (
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.3)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-200">AI analysis preview</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Resume performance overview</h2>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300">
                    Overall Rating 4.8/5
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">ATS Score</p>
                    <p className="mt-2 text-3xl font-semibold text-white">92%</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Overall Rating</p>
                    <p className="mt-2 text-3xl font-semibold text-white">Excellent</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-center gap-2 text-indigo-200">
                      <FiZap className="h-4 w-4" />
                      <h3 className="font-semibold text-white">Skills Found</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skillsFound.map((skill) => (
                        <span key={skill} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-center gap-2 text-amber-200">
                      <FiCpu className="h-4 w-4" />
                      <h3 className="font-semibold text-white">Missing Skills</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-400">
                      {missingSkills.map((skill) => (
                        <li key={skill} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
                    <h3 className="font-semibold text-white">Resume Strengths</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-400">
                      {strengths.map((item) => (
                        <li key={item} className="flex gap-2">
                          <FiCheckCircle className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-4">
                    <h3 className="font-semibold text-white">Suggestions</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-400">
                      {suggestions.map((item) => (
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
