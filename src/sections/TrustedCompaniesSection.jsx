import SectionHeading from '../components/SectionHeading'

const companies = ['Notion', 'Stripe', 'Vercel', 'Linear', 'Figma', 'OpenAI']

const TrustedCompaniesSection = () => {
  return (
    <section id="product" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 px-8 py-10 shadow-[0_18px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl">
        <SectionHeading
          eyebrow="Trusted by modern teams"
          title="Designed for founders, operators, and ambitious professionals"
          description="From early-stage startups to fast-moving teams, CareerForge AI delivers a premium experience with sharp insight and real momentum."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-300"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedCompaniesSection
