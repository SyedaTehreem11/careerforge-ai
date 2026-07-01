const SectionHeading = ({ eyebrow, title, description, align = 'center' }) => {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col max-w-3xl ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex w-fit items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-200">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p>}
    </div>
  )
}

export default SectionHeading
