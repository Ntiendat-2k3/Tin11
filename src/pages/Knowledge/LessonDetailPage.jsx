import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getLessonById, sources } from "@/data"
import { 
  ArrowLeft, Code2, Target, Wrench, BookOpen, Layers, 
  HelpCircle, Lightbulb, Sparkles, Terminal, Lock, Unlock,
  Clock, AlertTriangle, ShieldCheck, Zap
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PriorityBadge } from "@/components/PriorityBadge"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

import { KeyboardKbd } from "./components/KeyboardKbd"
import { FileTreeDiagram } from "./components/FileTreeDiagram"
import { OsArchitectureDiagram } from "./components/OsArchitectureDiagram"
import { QuizCard } from "./components/QuizCard"
import { CollapsibleDropdownCard } from "./components/CollapsibleDropdownCard"
import { HomeworkPasswordModal } from "@/components/common/HomeworkPasswordModal"

export function LessonDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(id)
  const [isHomeworkUnlocked, setIsHomeworkUnlocked] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  
  // Smooth scroll to section
  const scrollToSection = (secId) => {
    const el = document.getElementById(secId)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate("/tab/knowledge")
    }
  }

  if (!lesson) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Không tìm thấy bài học</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">Bài học bạn yêu cầu không tồn tại hoặc đã bị xóa.</p>
        <Button size="sm" className="rounded-xl font-bold bg-teal-600 hover:bg-teal-700 text-white" onClick={handleGoBack}>
          Quay lại lộ trình
        </Button>
      </div>
    )
  }

  const sourceMap = Object.fromEntries(sources.map((s) => [s.id, s]))
  const lecture = lesson.lectureContent

  return (
    <div className="min-h-screen bg-slate-50/80 dark:bg-slate-950 pb-20 text-sm">
      
      {/* FULL-WIDTH HERO BANNER */}
      <header className="border-b border-teal-300/40 bg-gradient-to-br from-slate-950 via-teal-950 to-indigo-950 text-white py-8 md:py-10 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10 space-y-4">
          
          {/* Back Button & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md cursor-pointer font-bold px-3 py-1.5 text-xs"
              onClick={handleGoBack}
            >
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
              Quay lại Lộ trình
            </Button>

            <div className="flex flex-wrap items-center gap-2">
              {lesson.lesson && (
                <span className="px-3 py-0.5 rounded-lg text-xs font-black bg-teal-500/20 border border-teal-400/40 text-teal-300">
                  {lesson.lesson}
                </span>
              )}
              <PriorityBadge priority={lesson.priority} />
              {lesson.hours && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/10 border border-white/15 text-slate-200">
                  ⏱️ ~{lesson.hours} giờ học
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white leading-tight">
              {lesson.title}
            </h1>
            {lesson.cluster && (
              <p className="flex items-center gap-2 text-xs md:text-sm font-medium text-teal-200/90">
                <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Chuyên đề: <strong className="text-white font-bold">{lesson.cluster}</strong></span>
              </p>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap gap-3 pt-1">
            {lesson.mustKnow?.length > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-200 text-xs font-bold">
                <Target className="h-3.5 w-3.5 text-blue-400" />
                <span>{lesson.mustKnow.length} Trọng tâm lý thuyết</span>
              </div>
            )}
            {lesson.codeSkills?.length > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
                <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>{lesson.codeSkills.length} Thao tác thực hành</span>
              </div>
            )}
            {lesson.examSkills?.length > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs font-bold">
                <Wrench className="h-3.5 w-3.5 text-amber-400" />
                <span>{lesson.examSkills.length} Dạng câu hỏi thi</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* FULL-WIDTH STICKY QUICK NAVIGATION TOOLBAR */}
      {lecture && (
        <div className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-2 overflow-x-auto flex items-center gap-1.5">
            <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 shrink-0 mr-1 flex items-center gap-1">
              <Layers className="h-3.5 w-3.5 text-teal-600" /> Mục lục:
            </span>
            {lecture.sections?.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="shrink-0 text-xs font-bold px-3 py-1 rounded-lg bg-slate-100 hover:bg-teal-600 hover:text-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 dark:hover:bg-teal-600 dark:hover:text-white transition-all cursor-pointer"
              >
                Mục {idx + 1}
              </button>
            ))}
            {lecture.summaryQuiz && (
              <button
                onClick={() => scrollToSection("quiz")}
                className="shrink-0 text-xs font-bold px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950 dark:text-emerald-200 transition-all cursor-pointer"
              >
                ❓ Củng cố
              </button>
            )}
            {lecture.practiceExercises && (
              <button
                onClick={() => scrollToSection("practice-exercises")}
                className="shrink-0 text-xs font-bold px-3 py-1 rounded-lg bg-indigo-100 text-indigo-900 hover:bg-indigo-600 hover:text-white dark:bg-indigo-950 dark:text-indigo-200 transition-all cursor-pointer"
              >
                🚀 Luyện tập
              </button>
            )}
            {lecture.examTypes && (
              <button
                onClick={() => scrollToSection("exam-types")}
                className="shrink-0 text-xs font-bold px-3 py-1 rounded-lg bg-amber-100 text-amber-900 hover:bg-amber-600 hover:text-white dark:bg-amber-950 dark:text-amber-200 transition-all cursor-pointer"
              >
                🎯 Dạng thi
              </button>
            )}
            {lecture.homework && (
              <button
                onClick={() => scrollToSection("homework")}
                className="shrink-0 text-xs font-bold px-3 py-1 rounded-lg bg-purple-100 text-purple-900 hover:bg-purple-600 hover:text-white dark:bg-purple-950 dark:text-purple-200 transition-all cursor-pointer"
              >
                ✏️ Bài tập
              </button>
            )}
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA - FULL SCREEN WIDTH */}
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 space-y-8">
        
        {/* Warm-Up Callout Hero Card */}
        {lecture?.warmUp && (
          <div className="rounded-2xl border border-amber-300/80 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent p-5 md:p-6 shadow-xs dark:border-amber-700/60 dark:from-amber-950/30">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="shrink-0 rounded-xl bg-amber-500 text-white p-3 shadow-xs">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <span className="inline-block text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/60 px-2.5 py-0.5 rounded-full">
                  📌 Đặt Vấn Đề
                </span>
                <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white leading-snug">
                  {lecture.warmUp.question}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                  {lecture.warmUp.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Lecture Sections */}
        <div className="space-y-10">
          {lecture?.sections?.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-6">
              
              {/* Section Header */}
              <div className="border-b-2 border-teal-500/30 pb-3">
                <h2 className="text-lg md:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2.5">
                  <span className="h-6 w-2 rounded-full bg-teal-600 shrink-0" />
                  {sec.title}
                </h2>
              </div>

              {/* Subsections */}
              {sec.subsections && (
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                  {sec.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="rounded-xl bg-white p-5 md:p-6 shadow-xs border border-slate-200/90 dark:border-slate-800 dark:bg-slate-900/80 space-y-3">
                      <h3 className="text-base font-extrabold text-teal-900 dark:text-teal-300 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-500 shrink-0" />
                        {sub.heading}
                      </h3>
                      <div className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-2 font-medium">
                        {sub.text && <p>{sub.text}</p>}
                        {sub.points && (
                          <ul className="space-y-2">
                            {sub.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2.5">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                                <span className="leading-relaxed">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* OS Architecture Diagram */}
              {sec.osArchitecture && <OsArchitectureDiagram data={sec.osArchitecture} />}

              {/* File Tree Diagram */}
              {sec.fileTree && <FileTreeDiagram data={sec.fileTree} />}

              {/* Shortcuts */}
              {sec.shortcuts && <KeyboardKbd shortcuts={sec.shortcuts} />}

              {/* Function Grid Cards */}
              {sec.functions && (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {sec.functions.map((fn, fIdx) => (
                    <div key={fIdx} className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-xs transition-all hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-1.5">
                      <h4 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-slate-100">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
                        {fn.name}
                      </h4>
                      <p className="text-xs md:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{fn.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Comparison Table */}
              {sec.comparisonTable && (
                <div className="overflow-hidden rounded-xl border border-slate-300/80 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900">
                  <div className="bg-slate-900 px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-sm font-bold text-white flex items-center gap-2">
                      <Layers className="h-4 w-4 text-teal-400" /> Bảng Đối Chiếu So Sánh
                    </span>
                    <Badge variant="outline" className="border-teal-500/40 text-teal-400 text-xs">Tóm tắt kiến thức</Badge>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-700">
                        <tr>
                          {sec.comparisonTable.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 md:p-4 font-black">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {sec.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="transition-colors hover:bg-teal-50/50 dark:hover:bg-slate-800/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-3 md:p-4 ${cIdx === 0 ? "font-bold text-slate-900 dark:text-slate-100" : "text-slate-700 dark:text-slate-300"}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Recharts PieChart for OS Market Share */}
              {sec.osMarketShare && (
                <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="mb-4 text-center text-base font-bold text-slate-900 dark:text-slate-100">
                    Thị phần Hệ điều hành trên Desktop (Tham khảo)
                  </h3>
                  <div className="h-[280px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sec.osMarketShare}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={95}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {sec.osMarketShare.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, 'Thị phần']}
                          contentStyle={{ borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '12px' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '12px' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Practical Lab Steps Code/Console Cards */}
              {sec.steps && (
                <div className="space-y-3 my-5">
                  {sec.steps.map((st, stIdx) => (
                    <div key={stIdx} className="flex flex-col md:flex-row items-start gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4 text-white shadow-md font-mono text-xs md:text-sm">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-500 font-black text-slate-950 text-xs">
                        {stIdx + 1}
                      </span>
                      <div className="space-y-1.5 w-full">
                        <h4 className="text-sm font-bold text-teal-400 flex items-center gap-2">
                          <Terminal className="h-4 w-4 text-emerald-400" />
                          {st.step}
                        </h4>
                        <div className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans bg-slate-900 p-3 rounded-lg border border-slate-800 whitespace-pre-wrap">
                          {st.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Callout Box */}
              {sec.calloutBox && (
                <div className={`my-5 rounded-xl p-5 border shadow-xs ${
                  sec.calloutBox.type === "warning"
                    ? "bg-amber-500/10 border-amber-400/60 dark:bg-amber-950/30 dark:border-amber-700/60 text-slate-900 dark:text-slate-100"
                    : sec.calloutBox.type === "quote"
                    ? "bg-purple-500/10 border-purple-400/60 dark:bg-purple-950/30 dark:border-purple-700/60 text-slate-900 dark:text-slate-100"
                    : "bg-teal-500/10 border-teal-400/60 dark:bg-teal-950/30 dark:border-teal-700/60 text-slate-900 dark:text-slate-100"
                }`}>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-xs shrink-0">
                      {sec.calloutBox.type === "warning" ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                      ) : sec.calloutBox.type === "quote" ? (
                        <Sparkles className="h-5 w-5 text-purple-500" />
                      ) : (
                        <Lightbulb className="h-5 w-5 text-teal-500" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm md:text-base font-black">{sec.calloutBox.title}</h4>
                      <p className="text-xs md:text-sm leading-relaxed font-medium">{sec.calloutBox.text}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Q&A Trick Questions Cards */}
              {sec.qaList && (
                <div className="my-5 space-y-3">
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-amber-500 shrink-0" />
                    {sec.qaList.title}
                  </h3>
                  <div className="grid gap-3 md:grid-cols-1">
                    {sec.qaList.questions.map((item, qIdx) => (
                      <div key={qIdx} className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-xs dark:border-amber-900/50 dark:bg-slate-900 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200">
                            {item.badge || "Điểm quan trọng"}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400">Câu hỏi #{qIdx + 1}</span>
                        </div>
                        <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">{item.q}</h4>
                        <div className="rounded-lg bg-white p-3 text-xs md:text-sm font-semibold text-teal-900 border border-teal-200/80 dark:bg-slate-800 dark:border-slate-700 dark:text-teal-300">
                          {item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Flow Steps Process Diagrams */}
              {sec.flowList && (
                <div className="my-6 space-y-6">
                  {sec.flowList.map((flow, fIdx) => (
                    <div key={fIdx} className="rounded-2xl border border-teal-200/80 bg-gradient-to-br from-white via-slate-50 to-teal-50/30 p-5 md:p-6 shadow-xs dark:border-teal-900/60 dark:from-slate-900 dark:to-slate-950 space-y-4">
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-950 px-2.5 py-0.5 rounded-full">
                          Minh họa quy trình
                        </span>
                        <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white mt-1.5">{flow.title}</h3>
                        {flow.subtitle && <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">{flow.subtitle}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {flow.steps.map((st, sIdx) => (
                          <div key={sIdx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900 space-y-1.5 relative overflow-hidden">
                            <div className="flex items-center gap-2.5">
                              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-teal-600 text-white font-black text-xs shrink-0">
                                {st.num || sIdx + 1}
                              </span>
                              <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100">{st.title}</h4>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{st.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* In-Class Practice Exercises */}
              {sec.inClassQuiz && (
                <div className="my-6 space-y-4">
                  <h3 className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                    <Target className="h-5 w-5 text-indigo-500 shrink-0" />
                    {sec.inClassQuiz.title}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-1">
                    {sec.inClassQuiz.groups.map((grp, gIdx) => (
                      <div key={gIdx} className="rounded-xl border border-indigo-200 bg-indigo-50/30 p-5 dark:border-indigo-900 dark:bg-slate-900 space-y-3">
                        <h4 className="text-sm md:text-base font-black text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 shrink-0" />
                          {grp.level}
                        </h4>
                        <ul className="space-y-2">
                          {grp.items.map((item, iIdx) => (
                            <li key={iIdx} className="rounded-lg bg-white p-3 text-xs md:text-sm font-semibold text-slate-800 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 shadow-xs flex items-start gap-2.5">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-800 font-bold text-[11px] dark:bg-indigo-900 dark:text-indigo-200">
                                {iIdx + 1}
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* End of Lesson Checklist */}
              {sec.endCheckList && (
                <div className="my-6 rounded-2xl border border-emerald-300/80 bg-gradient-to-br from-emerald-500/10 via-slate-50 to-teal-50/50 p-5 md:p-6 shadow-xs dark:border-emerald-800/80 dark:from-emerald-950/40 dark:to-slate-900 space-y-4">
                  <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    {sec.endCheckList.title}
                  </h3>
                  <div className="grid gap-2.5 md:grid-cols-1">
                    {sec.endCheckList.questions.map((q, qIdx) => (
                      <div key={qIdx} className="rounded-lg bg-white p-3 text-xs md:text-sm font-bold text-slate-800 border border-emerald-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 flex items-start gap-2.5 shadow-xs">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-[11px]">
                          {qIdx + 1}
                        </span>
                        <span className="leading-relaxed">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Checkpoint Cards */}
              {sec.checkpointCards && (
                <div className="my-6 space-y-4">
                  <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <Zap className="h-5 w-5 text-amber-500 shrink-0" />
                    5 Cụm Chốt Trọng Tâm Thi — Phải Thuộc Cuối Buổi
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {sec.checkpointCards.map((cp, cpIdx) => (
                      <div key={cpIdx} className="rounded-xl border border-amber-300/80 bg-gradient-to-br from-amber-50 to-white p-4 shadow-xs dark:border-amber-800/60 dark:from-amber-950/40 dark:to-slate-900 space-y-1.5">
                        <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/60 px-2 py-0.5 rounded-md">
                          Trọng tâm #{cpIdx + 1}
                        </span>
                        <h4 className="text-xs md:text-sm font-extrabold text-slate-900 dark:text-white">{cp.title}</h4>
                        <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">{cp.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ASCII Mindmap Diagram */}
              {sec.mindmapText && (
                <div className="my-6 rounded-2xl border border-slate-800 bg-slate-950 p-5 md:p-6 text-white shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-base font-bold text-teal-400 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-emerald-400" /> Sơ Đồ Tư Duy Tổng Kết Bài 1
                    </h3>
                    <Badge variant="outline" className="border-teal-500/40 text-teal-400 text-xs font-bold">Mindmap ASCII</Badge>
                  </div>
                  <pre className="overflow-x-auto rounded-lg bg-slate-900 p-3 font-mono text-[11px] md:text-xs leading-snug text-emerald-300 border border-slate-800">
                    {sec.mindmapText}
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* QUIZ SECTION */}
        {lecture?.summaryQuiz && (
          <section id="quiz" className="scroll-mt-24 pt-8 border-t-2 border-teal-500/30">
            <h2 className="mb-6 flex items-center gap-2.5 text-lg md:text-2xl font-black text-slate-900 dark:text-white">
              <HelpCircle className="h-6 w-6 text-teal-500" />
              Câu hỏi Củng cố Kiến thức
            </h2>
            <div className="space-y-4">
              {lecture.summaryQuiz.map((q, qIdx) => (
                <QuizCard key={qIdx} quiz={q} index={qIdx} />
              ))}
            </div>
          </section>
        )}

        {/* PRACTICE EXERCISES & QUIZ LINKS SECTION */}
        {lecture?.practiceExercises && (
          <section id="practice-exercises" className="scroll-mt-24 pt-8 border-t-2 border-teal-500/30">
            <h2 className="mb-3 flex items-center gap-2.5 text-lg md:text-2xl font-black text-slate-900 dark:text-white">
              <Sparkles className="h-6 w-6 text-indigo-500" />
              Luyện Tập Buổi Học & Quiz Tương Tác
            </h2>
            <p className="mb-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
              Bấm vào bài tập hoặc quiz bên dưới để chuyển sang trang làm bài chuyên biệt (Quiz trực tuyến hoặc phiếu bài tập tự thiết kế).
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {lecture.practiceExercises.map((ex, idx) => (
                <div key={idx} className="rounded-xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/70 via-slate-50 to-teal-50/40 p-5 shadow-xs hover:shadow-sm transition-all dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 dark:border-indigo-800/80 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-indigo-200/80 text-indigo-900 dark:bg-indigo-900/80 dark:text-indigo-200">
                        {ex.badge || "Bài Tập Buổi Học"}
                      </span>
                      {ex.duration && (
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                          ⏱️ {ex.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      <Link 
                        to={`/lesson/${id}/practice/${ex.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {ex.title} ↗
                      </Link>
                    </h3>
                    {ex.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {ex.description}
                      </p>
                    )}
                  </div>
                  
                  <Link 
                    to={`/lesson/${id}/practice/${ex.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs md:text-sm font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-xs transition-all cursor-pointer mt-3"
                  >
                    <span>Mở Bài Tập Làm Trên Lớp (Tab mới ↗)</span>
                    <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXAM TYPES SECTION */}
        {lecture?.examTypes && (
          <section id="exam-types" className="scroll-mt-24 pt-8 border-t-2 border-teal-500/30">
            <h2 className="mb-3 flex items-center gap-2.5 text-lg md:text-2xl font-black text-slate-900 dark:text-white">
              <Wrench className="h-6 w-6 text-amber-500" />
              Dạng Câu Hỏi Hay Gặp Trong Đề Thi
            </h2>
            <p className="mb-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
              Bấm vào từng dạng câu hỏi bên dưới để mở dropdown xem đáp án và phân tích phương pháp giải chi tiết.
            </p>
            <div className="space-y-3">
              {lecture.examTypes.map((item, idx) => (
                <CollapsibleDropdownCard key={idx} item={item} index={idx} type="exam" />
              ))}
            </div>
          </section>
        )}

        {/* HOMEWORK SECTION */}
        {lecture?.homework && (
          <section id="homework" className="scroll-mt-24 pt-8 border-t-2 border-teal-500/30">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h2 className="flex items-center gap-2.5 text-lg md:text-2xl font-black text-slate-900 dark:text-white">
                <BookOpen className="h-6 w-6 text-purple-500" />
                Bài Tập Về Nhà (Thực Hành & Vận Dụng)
              </h2>

              <button
                onClick={() => setIsPasswordModalOpen(true)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold shadow-xs transition-all cursor-pointer border ${
                  isHomeworkUnlocked
                    ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/25"
                    : "bg-amber-500/15 border-amber-500/40 text-amber-800 dark:text-amber-300 hover:bg-amber-500/25"
                }`}
                title={isHomeworkUnlocked ? "Đáp án bài tập đã mở khóa" : "Bấm vào đây để nhập mật khẩu mở khóa đáp án"}
              >
                {isHomeworkUnlocked ? (
                  <>
                    <Unlock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Đã mở khóa đáp án</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span>Khóa đáp án (Nhập mật khẩu)</span>
                  </>
                )}
              </button>
            </div>

            <p className="mb-4 text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium">
              Bấm vào từng bài tập để xổ xuống đáp án bài làm mẫu và hướng dẫn các bước thao tác thực hiện (cần mật khẩu 6 số từ Terminal để xem).
            </p>
            <div className="space-y-3">
              {lecture.homework.map((hw, idx) => (
                <CollapsibleDropdownCard
                  key={idx}
                  item={hw}
                  index={idx}
                  type="homework"
                  isLocked={!isHomeworkUnlocked}
                  onUnlockRequired={() => setIsPasswordModalOpen(true)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Homework Password Modal */}
        <HomeworkPasswordModal
          isOpen={isPasswordModalOpen}
          onClose={() => setIsPasswordModalOpen(false)}
          onSuccess={() => setIsHomeworkUnlocked(true)}
        />

        {/* Source References at Bottom */}
        {lesson.sourceIds?.length > 0 && (
          <div className="mt-12 border-t border-slate-300/80 pt-6 dark:border-slate-800">
            <h4 className="mb-3 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tài liệu tham khảo chính thức
            </h4>
            <div className="flex flex-wrap gap-2">
              {lesson.sourceIds.map((sId) => {
                const source = sourceMap[sId]
                return source ? (
                  <Badge key={sId} variant="outline" className="px-3 py-1 text-xs font-medium text-slate-700 border-slate-300 dark:border-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 shadow-xs">
                    📚 {source.publisher} ({source.title})
                  </Badge>
                ) : null
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
