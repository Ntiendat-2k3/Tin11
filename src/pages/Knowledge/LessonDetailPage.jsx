import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getLessonById, sources } from "@/data"
import { 
  ArrowLeft, Code2, Target, Wrench, BookOpen, Layers, 
  HelpCircle, Lightbulb, Sparkles, Terminal, Lock, Unlock
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
      const y = el.getBoundingClientRect().top + window.scrollY - 120
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
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Không tìm thấy bài học</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">Bài học bạn yêu cầu không tồn tại hoặc đã bị xóa.</p>
        <Button size="lg" className="rounded-xl font-bold bg-teal-600 hover:bg-teal-700 text-white" onClick={handleGoBack}>
          Quay lại lộ trình
        </Button>
      </div>
    )
  }

  const sourceMap = Object.fromEntries(sources.map((s) => [s.id, s]))
  const lecture = lesson.lectureContent

  return (
    <div className="min-h-screen bg-slate-50/80 dark:bg-slate-950 pb-20">
      
      {/* FULL-WIDTH HERO BANNER */}
      <header className="border-b border-teal-300/40 bg-gradient-to-br from-slate-950 via-teal-950 to-indigo-950 text-white py-10 md:py-14 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10 space-y-6">
          
          {/* Back Button & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md cursor-pointer font-bold px-4 py-2"
              onClick={handleGoBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại Lộ trình
            </Button>

            <div className="flex flex-wrap items-center gap-2">
              {lesson.lesson && (
                <span className="px-3.5 py-1 rounded-lg text-sm font-black bg-teal-500/20 border border-teal-400/40 text-teal-300">
                  {lesson.lesson}
                </span>
              )}
              <PriorityBadge priority={lesson.priority} />
              {lesson.hours && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/15 text-slate-200">
                  ⏱️ ~{lesson.hours} giờ học
                </span>
              )}
            </div>
          </div>

          {/* Big Title */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {lesson.title}
            </h1>
            {lesson.cluster && (
              <p className="flex items-center gap-2 text-base md:text-lg font-medium text-teal-200/90">
                <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
                <span>Chuyên đề: <strong className="text-white font-bold">{lesson.cluster}</strong></span>
              </p>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap gap-4 pt-2">
            {lesson.mustKnow?.length > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/15 border border-blue-400/30 text-blue-200 text-sm md:text-base font-bold">
                <Target className="h-4 w-4 text-blue-400" />
                <span>{lesson.mustKnow.length} Trọng tâm lý thuyết</span>
              </div>
            )}
            {lesson.codeSkills?.length > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-sm md:text-base font-bold">
                <Code2 className="h-4 w-4 text-emerald-400" />
                <span>{lesson.codeSkills.length} Thao tác thực hành</span>
              </div>
            )}
            {lesson.examSkills?.length > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-200 text-sm md:text-base font-bold">
                <Wrench className="h-4 w-4 text-amber-400" />
                <span>{lesson.examSkills.length} Dạng câu hỏi thi</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* FULL-WIDTH STICKY QUICK NAVIGATION TOOLBAR */}
      {lecture && (
        <div className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 shadow-md backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-3 overflow-x-auto flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-400 shrink-0 mr-2 flex items-center gap-1">
              <Layers className="h-4 w-4 text-teal-600" /> Mục lục:
            </span>
            {lecture.sections?.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="shrink-0 text-sm md:text-base font-bold px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-600 hover:text-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 dark:hover:bg-teal-600 dark:hover:text-white transition-all cursor-pointer"
              >
                Mục {idx + 1}
              </button>
            ))}
            {lecture.summaryQuiz && (
              <button
                onClick={() => scrollToSection("quiz")}
                className="shrink-0 text-sm md:text-base font-bold px-3.5 py-1.5 rounded-lg bg-emerald-100 text-emerald-900 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950 dark:text-emerald-200 transition-all cursor-pointer"
              >
                ❓ Củng cố
              </button>
            )}
            {lecture.practiceExercises && (
              <button
                onClick={() => scrollToSection("practice-exercises")}
                className="shrink-0 text-sm md:text-base font-bold px-3.5 py-1.5 rounded-lg bg-indigo-100 text-indigo-900 hover:bg-indigo-600 hover:text-white dark:bg-indigo-950 dark:text-indigo-200 transition-all cursor-pointer"
              >
                🚀 Luyện tập
              </button>
            )}
            {lecture.examTypes && (
              <button
                onClick={() => scrollToSection("exam-types")}
                className="shrink-0 text-sm md:text-base font-bold px-3.5 py-1.5 rounded-lg bg-amber-100 text-amber-900 hover:bg-amber-600 hover:text-white dark:bg-amber-950 dark:text-amber-200 transition-all cursor-pointer"
              >
                🎯 Dạng thi
              </button>
            )}
            {lecture.homework && (
              <button
                onClick={() => scrollToSection("homework")}
                className="shrink-0 text-sm md:text-base font-bold px-3.5 py-1.5 rounded-lg bg-purple-100 text-purple-900 hover:bg-purple-600 hover:text-white dark:bg-purple-950 dark:text-purple-200 transition-all cursor-pointer"
              >
                ✏️ Bài tập
              </button>
            )}
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA - FULL SCREEN WIDTH */}
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 space-y-12">
        
        {/* Warm-Up Callout Hero Card */}
        {lecture?.warmUp && (
          <div className="rounded-3xl border-2 border-amber-300/80 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent p-6 md:p-8 shadow-md dark:border-amber-700/60 dark:from-amber-950/30">
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="shrink-0 rounded-2xl bg-amber-500 text-white p-4 shadow-md">
                <Lightbulb className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <span className="inline-block text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-200/60 dark:bg-amber-900/60 px-3 py-1 rounded-full">
                  📌 Đặt Vấn Đề
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                  {lecture.warmUp.question}
                </h3>
                <p className="text-base md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                  {lecture.warmUp.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Lecture Sections */}
        <div className="space-y-14">
          {lecture?.sections?.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-8">
              
              {/* Section Header */}
              <div className="border-b-2 border-teal-500/30 pb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="h-8 w-2.5 rounded-full bg-teal-600 shrink-0" />
                  {sec.title}
                </h2>
              </div>

              {/* Subsections */}
              {sec.subsections && (
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
                  {sec.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-slate-200/90 dark:border-slate-800 dark:bg-slate-900/80 space-y-4">
                      <h3 className="text-lg md:text-xl font-extrabold text-teal-900 dark:text-teal-300 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-amber-500 shrink-0" />
                        {sub.heading}
                      </h3>
                      <div className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300 space-y-3 font-medium">
                        {sub.text && <p>{sub.text}</p>}
                        {sub.points && (
                          <ul className="space-y-3">
                            {sub.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-3">
                                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {sec.functions.map((fn, fIdx) => (
                    <div key={fIdx} className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900 space-y-2">
                      <h4 className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
                        <span className="h-3 w-3 rounded-full bg-emerald-500 shrink-0" />
                        {fn.name}
                      </h4>
                      <p className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 font-medium">{fn.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Comparison Table */}
              {sec.comparisonTable && (
                <div className="overflow-hidden rounded-2xl border border-slate-300/80 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
                  <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-base font-bold text-white flex items-center gap-2">
                      <Layers className="h-5 w-5 text-teal-400" /> Bảng Đối Chiếu So Sánh
                    </span>
                    <Badge variant="outline" className="border-teal-500/40 text-teal-400">Tóm tắt kiến thức</Badge>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-base md:text-lg">
                      <thead className="bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 font-bold border-b border-slate-200 dark:border-slate-700">
                        <tr>
                          {sec.comparisonTable.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-4 md:p-5 font-black">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {sec.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="transition-colors hover:bg-teal-50/50 dark:hover:bg-slate-800/50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-4 md:p-5 ${cIdx === 0 ? "font-bold text-slate-900 dark:text-slate-100" : "text-slate-700 dark:text-slate-300"}`}>
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
                <div className="my-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="mb-6 text-center text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
                    Thị phần Hệ điều hành trên Desktop (Tham khảo)
                  </h3>
                  <div className="h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sec.osMarketShare}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={110}
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
                          contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* Practical Lab Steps Code/Console Cards */}
              {sec.steps && (
                <div className="space-y-4 my-6">
                  {sec.steps.map((st, stIdx) => (
                    <div key={stIdx} className="flex flex-col md:flex-row items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950 p-6 text-white shadow-lg font-mono">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500 font-black text-slate-950 text-base">
                        {stIdx + 1}
                      </span>
                      <div className="space-y-2 w-full">
                        <h4 className="text-lg md:text-xl font-bold text-teal-400 flex items-center gap-2">
                          <Terminal className="h-5 w-5 text-emerald-400" />
                          {st.step}
                        </h4>
                        <div className="text-base md:text-lg text-slate-200 leading-relaxed font-sans bg-slate-900 p-4 rounded-xl border border-slate-800 whitespace-pre-wrap">
                          {st.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* QUIZ SECTION */}
        {lecture?.summaryQuiz && (
          <section id="quiz" className="scroll-mt-28 pt-10 border-t-2 border-teal-500/30">
            <h2 className="mb-8 flex items-center gap-3 text-2xl md:text-4xl font-black text-slate-900 dark:text-white">
              <HelpCircle className="h-8 w-8 text-teal-500" />
              Câu hỏi Củng cố Kiến thức
            </h2>
            <div className="space-y-6">
              {lecture.summaryQuiz.map((q, qIdx) => (
                <QuizCard key={qIdx} quiz={q} index={qIdx} />
              ))}
            </div>
          </section>
        )}

        {/* PRACTICE EXERCISES & QUIZ LINKS SECTION */}
        {lecture?.practiceExercises && (
          <section id="practice-exercises" className="scroll-mt-28 pt-10 border-t-2 border-teal-500/30">
            <h2 className="mb-4 flex items-center gap-3 text-2xl md:text-4xl font-black text-slate-900 dark:text-white">
              <Sparkles className="h-8 w-8 text-indigo-500" />
              Luyện Tập Buổi Học & Quiz Tương Tác
            </h2>
            <p className="mb-6 text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
              Bấm vào bài tập hoặc quiz bên dưới để chuyển sang trang làm bài chuyên biệt (Quiz trực tuyến, link Kahoot/Quizizz hoặc phiếu bài tập tự thiết kế).
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {lecture.practiceExercises.map((ex, idx) => (
                <div key={idx} className="rounded-2xl border-2 border-indigo-200/90 bg-gradient-to-br from-indigo-50/70 via-slate-50 to-teal-50/40 p-6 shadow-sm hover:shadow-md transition-all dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 dark:border-indigo-800/80 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-200/80 text-indigo-900 dark:bg-indigo-900/80 dark:text-indigo-200">
                        {ex.badge || "Bài Tập Buổi Học"}
                      </span>
                      {ex.duration && (
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                          ⏱️ {ex.duration}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {ex.title}
                    </h3>
                    {ex.description && (
                      <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        {ex.description}
                      </p>
                    )}
                  </div>
                  
                  <Link 
                    to={`/lesson/${id}/practice/${ex.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-base font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm transition-all cursor-pointer mt-4"
                  >
                    <span>Làm Bài Tập / Vào Quiz</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXAM TYPES SECTION */}
        {lecture?.examTypes && (
          <section id="exam-types" className="scroll-mt-28 pt-10 border-t-2 border-teal-500/30">
            <h2 className="mb-4 flex items-center gap-3 text-2xl md:text-4xl font-black text-slate-900 dark:text-white">
              <Wrench className="h-8 w-8 text-amber-500" />
              Dạng Câu Hỏi Hay Gặp Trong Đề Thi
            </h2>
            <p className="mb-6 text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
              Bấm vào từng dạng câu hỏi bên dưới để mở dropdown xem đáp án và phân tích phương pháp giải chi tiết.
            </p>
            <div className="space-y-4">
              {lecture.examTypes.map((item, idx) => (
                <CollapsibleDropdownCard key={idx} item={item} index={idx} type="exam" />
              ))}
            </div>
          </section>
        )}

        {/* HOMEWORK SECTION */}
        {lecture?.homework && (
          <section id="homework" className="scroll-mt-28 pt-10 border-t-2 border-teal-500/30">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
              <h2 className="flex items-center gap-3 text-2xl md:text-4xl font-black text-slate-900 dark:text-white">
                <BookOpen className="h-8 w-8 text-purple-500" />
                Bài Tập Về Nhà (Thực Hành & Vận Dụng)
              </h2>

              <button
                onClick={() => setIsPasswordModalOpen(true)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm md:text-base font-extrabold shadow-sm transition-all cursor-pointer border ${
                  isHomeworkUnlocked
                    ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/25"
                    : "bg-amber-500/15 border-amber-500/40 text-amber-800 dark:text-amber-300 hover:bg-amber-500/25"
                }`}
                title={isHomeworkUnlocked ? "Đáp án bài tập đã mở khóa" : "Bấm vào đây để nhập mật khẩu mở khóa đáp án"}
              >
                {isHomeworkUnlocked ? (
                  <>
                    <Unlock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Đã mở khóa đáp án</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <span>Khóa đáp án (Nhập mật khẩu)</span>
                  </>
                )}
              </button>
            </div>

            <p className="mb-6 text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium">
              Bấm vào từng bài tập để xổ xuống đáp án bài làm mẫu và hướng dẫn các bước thao tác thực hiện (cần mật khẩu 6 số từ Terminal để xem).
            </p>
            <div className="space-y-4">
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
          <div className="mt-16 border-t border-slate-300/80 pt-8 dark:border-slate-800">
            <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tài liệu tham khảo chính thức
            </h4>
            <div className="flex flex-wrap gap-3">
              {lesson.sourceIds.map((sId) => {
                const source = sourceMap[sId]
                return source ? (
                  <Badge key={sId} variant="outline" className="px-4 py-1.5 text-sm font-medium text-slate-700 border-slate-300 dark:border-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 shadow-xs">
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
