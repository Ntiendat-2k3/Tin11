const meta = {
  critical: { label: "🔥 Rất cao", style: "bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950 dark:text-rose-200 dark:border-rose-800" },
  high: { label: "⚡ Cao", style: "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800" },
  medium: { label: "📘 Vừa", style: "bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950 dark:text-sky-200 dark:border-sky-800" },
  low: { label: "🌱 Thấp", style: "bg-slate-100 text-slate-800 border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700" },
  enrichment: { label: "🎓 Nâng cao", style: "bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950 dark:text-purple-200 dark:border-purple-800" }
}

export function PriorityBadge({ priority }) {
  const item = meta[priority] ?? meta.medium
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border shadow-xs ${item.style}`}>
      {item.label}
    </span>
  )
}
