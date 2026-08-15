import { useMemo, useState } from "react"
import { Search, BookMarked, Filter } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { KnowledgeCard } from "@/components/KnowledgeCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { common11, database11, cs11, sources } from "@/data"

const groups = [
  { id: "all", label: "Tất cả bài học" },
  { id: "common", label: "Chủ đề 1-3 (Bài 1-9)" },
  { id: "database", label: "CSDL (Bài 10-16)" },
  { id: "cs", label: "KHMT & Python (Bài 17-31)" }
]

export function KnowledgePage() {
  const [group, setGroup] = useState("all")
  const [query, setQuery] = useState("")
  const sourceMap = useMemo(() => Object.fromEntries(sources.map((s) => [s.id, s])), [])

  const items = useMemo(() => {
    const source = group === "common" ? common11 : group === "database" ? database11 : group === "cs" ? cs11 : [...common11, ...database11, ...cs11]
    const normalized = query.trim().toLowerCase()
    if (!normalized) return source
    return source.filter((item) => [item.lesson, item.title, item.cluster, ...(item.mustKnow ?? []), ...(item.examSkills ?? []), ...(item.codeSkills ?? [])].filter(Boolean).join(" ").toLowerCase().includes(normalized))
  }, [group, query])

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Thư Viện Bài Học Tin Học 11"
        title="Chi tiết từng bài — Lý thuyết, Dạng thi & Bài tập thực hành"
        description="Toàn bộ bài học theo chương trình Kết nối tri thức. Bấm vào bài học để xem chi tiết giáo trình gia sư với ví dụ thực tế và câu hỏi trắc nghiệm củng cố."
      />

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-slate-500 flex items-center gap-1 mr-1">
            <Filter className="h-4 w-4 text-teal-600" />
            Lọc nhóm:
          </span>
          {groups.map((item) => (
            <Button 
              key={item.id} 
              size="sm" 
              variant={group === item.id ? "default" : "outline"} 
              className={`rounded-xl px-4 py-2 text-sm font-bold cursor-pointer transition-all ${
                group === item.id 
                  ? "bg-teal-600 text-white hover:bg-teal-700 shadow-sm" 
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
              onClick={() => setGroup(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <Input 
            className="pl-10 h-10 rounded-xl text-base bg-slate-50 border-slate-200 focus:bg-white dark:bg-slate-800 dark:border-slate-700" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Tìm kiếm: HĐH, SQL, Phishing..." 
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-base font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2">
          <BookMarked className="h-5 w-5 text-teal-600" />
          <span>Danh sách bài học: <strong className="text-teal-700 dark:text-teal-400">{items.length}</strong> bài</span>
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <KnowledgeCard key={item.id} item={item} sourceMap={sourceMap} />
        ))}
      </div>
    </div>
  )
}
