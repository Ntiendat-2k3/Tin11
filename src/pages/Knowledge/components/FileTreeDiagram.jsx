import { FileText, HardDrive, Folder, ChevronDown, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FileTreeDiagram({ data }) {
  if (!data) return null
  
  const renderNode = (node, depth = 0) => {
    const isFolder = node.type === 'folder'
    const isDrive = node.type === 'drive'
    
    let Icon = FileText
    let iconColor = "text-slate-400"
    if (isDrive) {
      Icon = HardDrive
      iconColor = "text-teal-400"
    } else if (isFolder) {
      Icon = Folder
      iconColor = "text-amber-400"
    }

    return (
      <div key={node.name} className="flex flex-col">
        <div className={`flex items-start gap-2 py-2 ${depth === 0 ? 'mt-2' : ''}`}>
          <div className="flex shrink-0" style={{ width: depth * 24 }}>
            {depth > 0 && <div className="w-full h-full border-l-2 border-slate-700 ml-[11px]" />}
          </div>
          
          <div className="shrink-0 mt-1">
            {isFolder || isDrive ? (
              node.isExpanded ? <ChevronDown className="h-4 w-4 text-slate-400" /> : <ChevronRight className="h-4 w-4 text-slate-400" />
            ) : (
              <div className="w-4" />
            )}
          </div>
          
          <Icon className={`h-5 w-5 shrink-0 ${iconColor} ${isFolder && node.isExpanded ? 'fill-amber-400/20' : ''}`} />
          
          <div className="flex flex-col">
            <span className={`text-base md:text-lg ${isDrive || isFolder ? 'font-bold text-white' : 'text-slate-300'}`}>
              {node.name}
            </span>
            {node.desc && (
              <span className="text-sm text-teal-300 font-mono bg-teal-950/80 px-2.5 py-1 rounded-md mt-1 border border-teal-800/80 inline-block">
                {node.desc}
              </span>
            )}
          </div>
        </div>
        
        {node.children && node.isExpanded && (
          <div className="flex flex-col">
            {node.children.map(child => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="my-8 rounded-2xl border border-slate-800 bg-slate-950 text-white shadow-xl overflow-hidden">
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-sm font-mono text-slate-400 font-semibold">{data.title}</span>
        </div>
        <Badge variant="outline" className="border-teal-500/40 text-teal-400 text-xs">Cây Thư Mục Trực Quan</Badge>
      </div>
      <div className="p-6 overflow-x-auto font-mono">
        <div className="min-w-max">
          {data.nodes.map(node => renderNode(node, 0))}
        </div>
      </div>
    </div>
  )
}
