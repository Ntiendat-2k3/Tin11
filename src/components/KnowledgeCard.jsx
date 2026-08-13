import { Code2, Target, Wrench, BookOpen, ArrowRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { PriorityBadge } from "@/components/PriorityBadge"
import { Link } from "react-router-dom"

export function KnowledgeCard({ item }) {
  const mustKnowCount = item.mustKnow?.length || 0
  const codeSkillsCount = item.codeSkills?.length || 0
  const examSkillsCount = item.examSkills?.length || 0
  const practiceCount = item.practice?.length || 0

  // Take top 2 key points to preview on card
  const previewPoints = item.mustKnow?.slice(0, 2) || []

  return (
    <Card className="h-full flex flex-col rounded-2xl border border-slate-200/90 hover:border-teal-400/80 bg-white dark:bg-slate-900 dark:border-slate-800 transition-all duration-300 study-card-shadow overflow-hidden group">
      {/* Top Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-emerald-400 to-indigo-500 group-hover:h-2 transition-all" />

      <CardHeader className="p-5 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            {item.lesson && (
              <span className="px-3 py-1 rounded-lg text-sm font-extrabold bg-teal-100 text-teal-900 dark:bg-teal-950/90 dark:text-teal-200 border border-teal-200/80 dark:border-teal-800">
                {item.lesson}
              </span>
            )}
            <PriorityBadge priority={item.priority} />
          </div>
          {item.hours && (
            <span className="text-xs font-bold text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-700">
              ⏱️ ~{item.hours}h
            </span>
          )}
        </div>
        
        <CardTitle className="text-xl font-extrabold leading-snug text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors pt-1">
          {item.title}
        </CardTitle>
        {item.cluster && (
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-1">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
            <span>{item.cluster}</span>
          </p>
        )}
      </CardHeader>
      
      <CardContent className="flex-1 space-y-4 p-5 pt-1 pb-4">
        {/* Short Content Preview */}
        {previewPoints.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            {previewPoints.map((point, idx) => (
              <div key={idx} className="text-sm md:text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2 flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-teal-500 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Visual Summary Badges - Clear, High Contrast Colors */}
        <div className="flex flex-wrap gap-2 pt-2">
          {mustKnowCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-100 text-blue-950 dark:bg-blue-950 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
              <Target className="h-3.5 w-3.5 text-blue-700 dark:text-blue-300" />
              {mustKnowCount} Trọng tâm
            </span>
          )}
          {codeSkillsCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-100 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">
              <Code2 className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-300" />
              {codeSkillsCount} Code
            </span>
          )}
          {examSkillsCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
              <Wrench className="h-3.5 w-3.5 text-amber-700 dark:text-amber-300" />
              {examSkillsCount} Dạng thi
            </span>
          )}
          {practiceCount > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-purple-100 text-purple-950 dark:bg-purple-950 dark:text-purple-200 border border-purple-200 dark:border-purple-800">
              <BookOpen className="h-3.5 w-3.5 text-purple-700 dark:text-purple-300" />
              {practiceCount} Bài tập
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-3 mt-auto border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50">
        <Link 
          to={`/lesson/${item.id}`}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 shadow-sm transition-all duration-200 cursor-pointer"
        >
          <span>Xem chi tiết bài học</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}
