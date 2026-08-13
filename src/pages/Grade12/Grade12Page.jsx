import { ArrowRight, GraduationCap } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { PriorityBadge } from "@/components/PriorityBadge"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { grade12Bridge } from "@/data"

export function Grade12Page() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Chỉ lấy điểm chính lớp 12"
        title="Bridge Lớp 12: Nối dài tư duy, sẵn sàng bứt phá"
        description="Mục tiêu giúp học sinh bước vào chương trình Tin học 12 không bị bỡ ngỡ, hiểu rõ mối liên hệ giữa kiến thức dữ liệu/lập trình lớp 11 với định hướng thi THPT 2026."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {grade12Bridge.map((item) => (
          <Card key={item.cluster} className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="p-6 pb-3">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <Badge variant="outline" className="font-bold text-xs">
                  <GraduationCap className="mr-1.5 h-4 w-4 text-teal-600" />
                  {item.lessons}
                </Badge>
                <PriorityBadge priority={item.priority} />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">{item.cluster}: {item.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-4 text-base md:text-lg leading-relaxed font-medium">
              <div>
                <p className="font-black text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider mb-1">Học trước đến đâu?</p>
                <p className="text-slate-600 dark:text-slate-400">{item.teachNow}</p>
              </div>
              <div className="flex gap-3 rounded-xl bg-teal-50/80 dark:bg-teal-950/60 p-4 border border-teal-200/80 dark:border-teal-900">
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-400" />
                <p className="text-slate-800 dark:text-slate-200 text-sm md:text-base">
                  <strong className="font-extrabold text-teal-950 dark:text-teal-200">Vì sao cần Bridge:</strong>{" "}
                  <span className="text-slate-700 dark:text-slate-300">{item.why}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
