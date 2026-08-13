export function KeyboardKbd({ shortcuts }) {
  if (!shortcuts?.length) return null
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {shortcuts.map((sc, idx) => (
        <div key={idx} className="flex items-start gap-4 p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-md">
          <div className="flex flex-wrap gap-1.5 shrink-0 mt-0.5">
            {sc.keys.map((k, kIdx) => (
              <kbd key={kIdx} className="px-3 py-1 text-base font-black text-slate-900 bg-amber-400 border-b-4 border-amber-600 rounded-lg shadow-sm">
                {k}
              </kbd>
            ))}
          </div>
          <p className="text-base md:text-lg leading-relaxed text-slate-200">{sc.desc}</p>
        </div>
      ))}
    </div>
  )
}
