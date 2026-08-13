import { ClipboardCheck, Clock3, ShieldCheck } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { assessmentSystem, errorCodes, examPrinciples, examSnapshot, exerciseMix, sessionTemplate } from "@/data"

export function ExamPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Bám đề thi"
        title="Chiến Lược Luyện Đề & Phương Pháp Gia Sư"
        description="Đề thi tốt nghiệp THPT 2026 đòi hỏi vừa phủ rộng lý thuyết, vừa vận dụng giải quyết bối cảnh thực tế. Việc luyện đề và theo dõi Error Log được cài cắm trực tiếp vào từng bài học."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm">
          <CardHeader><CardTitle className="text-xl font-bold">Cấu trúc mốc đề thi 2026</CardTitle></CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700">
              <p className="font-bold text-slate-900 dark:text-slate-100">{examSnapshot.part1.label} · {examSnapshot.part1.points} điểm</p>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{examSnapshot.part1.structure}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {examSnapshot.part1.gradeDistribution.map((g) => (
                  <Badge key={g.grade} variant="secondary" className="font-bold">{g.grade}: {g.count} câu</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700">
              <p className="font-bold text-slate-900 dark:text-slate-100">{examSnapshot.part2.label} · {examSnapshot.part2.points} điểm</p>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{examSnapshot.part2.structure}</p>
              <p className="mt-2 text-xs font-semibold text-teal-600 dark:text-teal-400">{examSnapshot.part2.note}</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">Bối cảnh thực tế trong đề thi 2026:</p>
              <ul className="mt-2 space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                {examSnapshot.observedContexts.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm">
          <CardHeader><CardTitle className="text-xl font-bold">Tỷ lệ bài tập khuyến nghị</CardTitle></CardHeader>
          <CardContent className="space-y-5">
            {exerciseMix.map((item) => (
              <div key={item.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-base font-bold">
                  <span>{item.label}</span>
                  <span className="text-teal-600 dark:text-teal-400">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2.5" />
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {examPrinciples.map((item, index) => {
          const Icon = [ClipboardCheck, ShieldCheck, Clock3, ClipboardCheck][index]
          return (
            <Card key={item.title} className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <Icon className="mb-3 h-7 w-7 text-teal-600 dark:text-teal-400" />
                <p className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">{item.title}</p>
                <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{item.detail}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Khung 1 buổi học 120 phút</h3>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
          <table className="w-full min-w-[720px] text-base">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-4 font-black">Phút</th>
                <th className="p-4 font-black">Hoạt động</th>
                <th className="p-4 font-black">Mục tiêu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {sessionTemplate.map((item) => (
                <tr key={item.activity} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-4 font-black text-teal-600 dark:text-teal-400">{item.minutes}</td>
                  <td className="p-4 font-bold text-slate-800 dark:text-slate-200">{item.activity}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Hệ thống kiểm tra & đánh giá</h3>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {assessmentSystem.map((item) => (
            <Card key={item.cadence} className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="font-extrabold text-slate-900 dark:text-slate-100 text-lg">{item.cadence}</p>
                  <Badge variant="outline" className="font-bold text-xs">{item.duration}</Badge>
                </div>
                <p className="text-sm font-bold text-teal-600 dark:text-teal-400">{item.format}</p>
                <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{item.goal}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xl font-bold">Hệ thống Error Log xử lý lỗi sai</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {errorCodes.map((item) => (
            <Card key={item.code} className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm">
              <CardContent className="p-5">
                <Badge className="bg-rose-600 text-white font-black">{item.code}</Badge>
                <p className="mt-3 font-bold text-slate-900 dark:text-slate-100 text-base">{item.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{item.fix}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
