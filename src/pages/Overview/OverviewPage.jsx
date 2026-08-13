import { BookOpenCheck, BrainCircuit, Database, Gauge, GraduationCap, TimerReset } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { examSnapshot, kpis, phaseSummary } from "@/data"

const icons = [BookOpenCheck, Database, BrainCircuit, Gauge, GraduationCap]

export function OverviewPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Tổng quan"
        title="Học sâu lớp 11, nhưng mọi thứ đều quy về năng lực làm đề"
        description="Lộ trình giữ đủ nội dung Kết nối tri thức lớp 11, ưu tiên nhánh Khoa học máy tính cho học sinh định hướng lập trình, đồng thời luyện dần format và cách tư duy của đề tốt nghiệp THPT."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2 bg-primary text-primary-foreground border-primary shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2"><TimerReset className="h-5 w-5" /><span className="text-sm font-medium">Mốc bám đề chính thức</span></div>
            <CardTitle className="text-2xl font-bold">{examSnapshot.duration} · 2 phần · có phần riêng theo định hướng</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm font-semibold">{examSnapshot.part1.label} · {examSnapshot.part1.points} điểm</p>
              <p className="mt-1 text-sm text-primary-foreground/85">{examSnapshot.part1.structure}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {examSnapshot.part1.gradeDistribution.map((g) => <Badge key={g.grade} className="bg-white/15 text-white border-white/20">{g.grade}: {g.count}</Badge>)}
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm font-semibold">{examSnapshot.part2.label} · {examSnapshot.part2.points} điểm</p>
              <p className="mt-1 text-sm leading-6 text-primary-foreground/85">{examSnapshot.part2.structure}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200 dark:border-slate-800">
          <CardHeader><CardTitle className="text-lg font-bold">Chiến lược lớp 11</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed text-muted-foreground">
            <p><strong className="text-foreground">Không học trước lớp 12 quá sâu.</strong> Chỉ bridge các chủ đề cần thiết.</p>
            <p><strong className="text-foreground">Không biến thành lớp thuật toán HSG.</strong> Chuyên đề nâng cao có trần thời lượng.</p>
            <p><strong className="text-foreground">Không chữa đáp án suông.</strong> Mọi câu sai vào Error Log.</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Phân bổ 32 tuần</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {phaseSummary.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Card key={item.phase} className="shadow-sm border-slate-200 dark:border-slate-800">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex gap-3">
                      <div className="rounded-xl bg-teal-100 dark:bg-teal-950 p-2.5 text-teal-700 dark:text-teal-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-base">{item.phase}</p>
                        <p className="text-xs text-muted-foreground">Tuần {item.weeks}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="font-bold">{item.share}%</Badge>
                  </div>
                  <Progress value={item.share * 3} className="h-2" />
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">{item.objective}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">KPI cuối lớp 11</h3>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {kpis.map((item) => (
            <Card key={item.label} className="shadow-sm border-slate-200 dark:border-slate-800">
              <CardContent className="p-5">
                <p className="text-sm font-bold text-slate-600 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 text-3xl font-black tracking-tight text-teal-600 dark:text-teal-400">{item.target}{item.unit}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
