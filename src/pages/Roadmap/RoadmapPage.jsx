import { CalendarDays, CheckCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { roadmap } from "@/data"

export function RoadmapPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="32 tuần / 64 buổi"
        title="Lộ trình học tập chi tiết tuần-by-tuần"
        description="Mỗi tuần thiết kế chuẩn 2 buổi học (~3h-4h). Tuần 22-26 là phần mở rộng thuật toán có kiểm soát; nếu học sinh đang yếu phần thi cốt lõi, linh hoạt chuyển sang ôn luyện chắc CSDL & KHMT."
      />
      <div className="space-y-4">
        {roadmap.map((item) => (
          <Card key={item.week} className="p-0 overflow-hidden border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <CardContent className="grid gap-4 p-0 md:grid-cols-[160px_1fr_1fr]">
              <div className="bg-slate-100/80 dark:bg-slate-900 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-teal-700 dark:text-teal-400 font-extrabold text-lg">
                    <CalendarDays className="h-5 w-5" />
                    <span>Tuần {item.week}</span>
                  </div>
                  <Badge variant="outline" className="mt-3 whitespace-normal text-left font-bold text-xs bg-white dark:bg-slate-800">
                    {item.phase}
                  </Badge>
                </div>
              </div>
              <div className="p-6 md:py-6 md:px-4">
                <p className="mb-2 text-xs font-black uppercase tracking-wider text-teal-700 dark:text-teal-400">2 Buổi học trọng tâm</p>
                <ol className="space-y-2 text-base md:text-lg font-medium text-slate-800 dark:text-slate-200">
                  {item.sessions.map((session, index) => (
                    <li key={session} className="flex items-start gap-2">
                      <span className="font-extrabold text-teal-600 dark:text-teal-400 shrink-0">{index + 1}.</span>
                      <span>{session}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{item.focus}</p>
              </div>
              <div className="border-t p-6 md:border-l md:border-t-0 border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
                <p className="mb-2 text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400">Checkpoint đạt chuẩn</p>
                <div className="flex gap-2.5 text-base leading-relaxed font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>{item.checkpoint}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
