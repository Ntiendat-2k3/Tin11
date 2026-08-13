import { AlertTriangle, Sparkles } from "lucide-react"
import { SectionHeader } from "@/components/SectionHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { advanced11 } from "@/data"

export function AdvancedPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Định hướng lập trình"
        title="Chuyên đề thuật toán+: Học để mạnh tư duy, không lệch mục tiêu thi"
        description="Ba chuyên đề thuật toán nâng cao mang lại nền tảng vững chắc cho học sinh định hướng ngành CNTT/Lập trình. Tuy nhiên đây là phần mở rộng có kiểm soát; chỉ triển khai khi phần cốt lõi lớp 11 đã đạt KPI."
      />
      
      <div className="rounded-2xl border-2 border-amber-300/80 bg-amber-50/80 p-5 text-base leading-relaxed text-amber-950 dark:bg-amber-950/60 dark:border-amber-800 dark:text-amber-200">
        <div className="flex gap-3 items-start">
          <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600 dark:text-amber-400" />
          <span>
            <strong className="font-extrabold text-amber-900 dark:text-amber-100">Quy tắc trần thời lượng:</strong> Tối đa khoảng 10 buổi trong tổng số 64 buổi lộ trình. Nếu thi thử dưới 7.5 điểm hoặc CSDL/KHMT chưa chắc, dành ngay thời lượng này để ôn tập củng cố lỗ hổng.
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {advanced11.map((item) => (
          <Card key={item.id} className="rounded-2xl border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="p-6 pb-3">
              <div className="flex items-center justify-between gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-amber-500" />
                <Badge variant="outline" className="font-bold text-xs">~{item.suggestedHours} giờ học</Badge>
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-4 text-base md:text-lg leading-relaxed font-medium">
              <div>
                <p className="mb-2 font-black text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">Phạm vi kiến thức</p>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                  {item.scope.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-1 font-black text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">Mục tiêu phát triển</p>
                <p className="text-slate-600 dark:text-slate-400">{item.purpose}</p>
              </div>
              <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700">
                <p className="font-extrabold text-slate-900 dark:text-slate-100 text-sm uppercase tracking-wider">Chính sách kiểm tra đề thi</p>
                <p className="mt-1 text-slate-700 dark:text-slate-300 text-sm font-medium">{item.examPolicy}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
