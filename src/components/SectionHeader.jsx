export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-6 space-y-2">
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-teal-100 text-teal-900 dark:bg-teal-950 dark:text-teal-200 border border-teal-200 dark:border-teal-800">
          ✨ {eyebrow}
        </span>
      )}
      <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-4xl text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  )
}
