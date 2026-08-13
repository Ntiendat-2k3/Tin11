import { Layers, User, AppWindow, Settings, Cpu } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function OsArchitectureDiagram({ data }) {
  if (!data) return null
  
  const getIcon = (iconName) => {
    switch (iconName) {
      case "user": return <User className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      case "app": return <AppWindow className="h-6 w-6 text-sky-600 dark:text-sky-400" />
      case "os": return <Settings className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
      case "hardware": return <Cpu className="h-6 w-6 text-slate-700 dark:text-slate-300" />
      default: return null
    }
  }

  return (
    <div className="my-10 rounded-3xl border border-teal-200/80 bg-gradient-to-b from-teal-50/50 to-emerald-50/30 p-6 md:p-8 shadow-md dark:border-teal-900/60 dark:from-teal-950/40 dark:to-slate-900">
      <h3 className="mb-6 text-center text-xl md:text-2xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-2">
        <Layers className="h-6 w-6 text-teal-600" />
        {data.title}
      </h3>
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {data.layers.map((layer, idx) => (
          <div 
            key={idx} 
            className={`flex items-center justify-between gap-4 rounded-2xl border-2 p-5 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md ${layer.color}`}
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 rounded-xl bg-white p-2.5 shadow-xs dark:bg-slate-900">
                {getIcon(layer.icon)}
              </div>
              <span className="text-base md:text-xl font-bold">{layer.name}</span>
            </div>
            <Badge variant="outline" className="bg-white/80 font-mono text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Layer {idx + 1}
            </Badge>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-base font-medium text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Hệ điều hành đóng vai trò trung gian (Kernel), giao tiếp trực tiếp với phần cứng và cung cấp môi trường cho phần mềm ứng dụng vận hành.
      </p>
    </div>
  )
}
