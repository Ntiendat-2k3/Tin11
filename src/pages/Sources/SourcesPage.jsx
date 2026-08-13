import { ExternalLink } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { sources } from "@/data"

const typeMeta = {
  official: { label: "Chính thống Bộ GD&ĐT", variant: "bg-emerald-100 text-emerald-950 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200" },
  reference: { label: "Tham khảo giáo trình", variant: "bg-sky-100 text-sky-950 border-sky-300 dark:bg-sky-950 dark:text-sky-200" },
  practice: { label: "Luyện tập bổ sung", variant: "bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-950 dark:text-amber-200" }
}

export function SourcesPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Tài Liệu & Nguồn Dữ Liệu"
        title="Danh Mục Tài Liệu & Giáo Trình Tham Khảo Chính Thức"
        description="Nguồn dữ liệu chuẩn hoá từ Bộ GD&ĐT, NXB Giáo dục Việt Nam và các trang tham khảo uy tín phục vụ việc xây dựng giáo trình gia sư chuẩn THPT 2026."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {sources.map((item) => {
          const meta = typeMeta[item.type] || typeMeta.official
          return (
            <Card key={item.id} className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-extrabold text-slate-900 dark:text-slate-100 text-lg leading-snug">{item.title}</p>
                    <p className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{item.publisher}</p>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black border ${meta.variant}`}>
                    {meta.label}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{item.useFor}</p>
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-4 inline-flex items-center gap-2 text-sm md:text-base font-extrabold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                >
                  <span>Mở nguồn tài liệu</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
