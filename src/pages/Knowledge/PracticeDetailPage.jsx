import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getLessonById } from "@/data"
import { 
  ArrowLeft, CheckCircle2, HelpCircle, Lightbulb, ExternalLink, 
  Sparkles, CheckSquare, Clock, Send, RefreshCw
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PracticeDetailPage() {
  const { lessonId, practiceId } = useParams()
  const navigate = useNavigate()
  const lesson = getLessonById(lessonId)

  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [practiceId])

  if (!lesson) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Không tìm thấy bài học</h2>
        <Button size="lg" className="rounded-xl font-bold bg-teal-600 hover:bg-teal-700 text-white" onClick={() => navigate("/tab/knowledge")}>
          Quay lại lộ trình
        </Button>
      </div>
    )
  }

  const lecture = lesson.lectureContent
  const practiceList = lecture?.practiceExercises || []
  const practiceItem = practiceList.find(p => p.id === practiceId) || practiceList[0]

  if (!practiceItem) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Không tìm thấy bài tập này</h2>
        <Button size="lg" className="rounded-xl font-bold bg-teal-600 hover:bg-teal-700 text-white" onClick={() => navigate(`/lesson/${lessonId}`)}>
          Quay lại bài học
        </Button>
      </div>
    )
  }

  const isQuiz = practiceItem.type === "quiz"
  const questions = practiceItem.content?.questions || []

  const handleSelectOption = (qIndex, optionLetter) => {
    if (submitted) return
    setSelectedAnswers(prev => ({
      ...prev,
      [qIndex]: optionLetter
    }))
  }

  const handleSubmitQuiz = () => {
    let currentScore = 0
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) {
        currentScore += 1
      }
    })
    setScore(currentScore)
    setSubmitted(true)
  }

  const handleResetQuiz = () => {
    setSelectedAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-slate-50/90 dark:bg-slate-950 pb-20">
      
      {/* HEADER HERO BANNER */}
      <header className="border-b border-teal-300/40 bg-gradient-to-br from-slate-950 via-teal-950 to-indigo-950 text-white py-10 md:py-14 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="mx-auto max-w-6xl px-4 md:px-8 relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-xl border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md cursor-pointer font-bold px-4 py-2"
              onClick={() => navigate(`/lesson/${lessonId}`)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại {lesson.lesson}: {lesson.title}
            </Button>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 border border-amber-400/40 text-amber-300">
                {practiceItem.badge || "Bài tập luyện tập"}
              </span>
              {practiceItem.duration && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/15 text-slate-200 flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-teal-300" />
                  {practiceItem.duration}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">
              {practiceItem.title}
            </h1>
            <p className="text-base md:text-lg text-teal-200/90 font-medium">
              {practiceItem.description}
            </p>
          </div>
        </div>
      </header>

      {/* MAIN PRACTICE BODY */}
      <main className="mx-auto max-w-5xl px-4 md:px-8 py-10 space-y-10">
        
        {/* EXTERNAL QUIZ LINK CARD */}
        {practiceItem.externalUrl && (
          <div className="rounded-3xl border-2 border-teal-300/80 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 md:p-8 shadow-md dark:border-teal-800/80 dark:from-teal-950/60 dark:to-slate-900 space-y-4">
            <div className="flex items-center gap-3 text-teal-900 dark:text-teal-200">
              <Sparkles className="h-6 w-6 text-amber-500 shrink-0" />
              <h3 className="text-xl font-extrabold">Link Quiz Trực Tuyến Ngoại Bối</h3>
            </div>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300">
              Bài tập này đã được thiết kế sẵn trên nền tảng trắc nghiệm trực tuyến. Bấm nút bên dưới để mở giao diện làm bài.
            </p>
            <a 
              href={practiceItem.externalUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-base shadow-md transition-all cursor-pointer"
            >
              <span>Mở Link Làm Quiz (Quizizz / Kahoot / Google Form)</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        )}

        {/* INTERACTIVE QUIZ MODE */}
        {isQuiz && questions.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <HelpCircle className="h-7 w-7 text-teal-600" />
                <span>Danh sách câu hỏi Quiz ({questions.length} câu)</span>
              </h2>

              {submitted && (
                <Badge className="bg-emerald-600 text-white text-base px-4 py-1.5 rounded-xl font-black">
                  🎯 Đạt: {score} / {questions.length} câu
                </Badge>
              )}
            </div>

            <div className="space-y-6">
              {questions.map((q, qIdx) => {
                const isUserSelected = selectedAnswers[qIdx]
                return (
                  <Card key={qIdx} className="rounded-2xl border-slate-200 shadow-sm dark:border-slate-800 overflow-hidden">
                    <CardHeader className="bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800">
                      <CardTitle className="text-lg md:text-xl font-bold flex gap-3 text-slate-900 dark:text-slate-100">
                        <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white text-base font-black">
                          {qIdx + 1}
                        </span>
                        <span className="pt-0.5">{q.q}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        {q.options.map((opt, oIdx) => {
                          const optLetter = opt.charAt(0)
                          const isSelected = isUserSelected === optLetter
                          const isCorrect = optLetter === q.answer

                          let btnStyle = "border-slate-200 text-slate-800 bg-white hover:bg-teal-50 dark:border-slate-700 dark:text-slate-200 dark:bg-slate-900"
                          if (submitted) {
                            if (isCorrect) {
                              btnStyle = "bg-emerald-100 text-emerald-950 border-emerald-400 font-bold dark:bg-emerald-950 dark:text-emerald-200"
                            } else if (isSelected) {
                              btnStyle = "bg-rose-100 text-rose-950 border-rose-400 font-bold dark:bg-rose-950 dark:text-rose-200"
                            }
                          } else if (isSelected) {
                            btnStyle = "bg-teal-100 text-teal-950 border-teal-400 font-bold dark:bg-teal-950 dark:text-teal-200"
                          }

                          return (
                            <Button
                              key={oIdx}
                              variant="outline"
                              className={`h-auto min-h-[48px] whitespace-normal justify-start text-left px-5 py-3 text-base md:text-lg rounded-xl transition-all ${btnStyle}`}
                              onClick={() => handleSelectOption(qIdx, optLetter)}
                            >
                              {opt}
                            </Button>
                          )
                        })}
                      </div>

                      {submitted && (
                        <div className="mt-4 rounded-xl border border-teal-200 bg-teal-50/80 p-4 text-base leading-relaxed text-teal-950 dark:border-teal-900 dark:bg-teal-950/80 dark:text-teal-200">
                          <p className="font-bold mb-1 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                            Đáp án đúng: {q.answer}
                          </p>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quiz Submit Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
              {!submitted ? (
                <Button 
                  size="lg" 
                  className="rounded-2xl font-black text-lg bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 cursor-pointer shadow-md"
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(selectedAnswers).length === 0}
                >
                  <Send className="mr-2 h-5 w-5" />
                  Nộp Bài Quiz
                </Button>
              ) : (
                <Button 
                  size="lg" 
                  variant="outline"
                  className="rounded-2xl font-black text-lg border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-4 cursor-pointer"
                  onClick={handleResetQuiz}
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Làm Lại Quiz
                </Button>
              )}
            </div>
          </div>
        )}

        {/* CUSTOM TEACHER-DESIGNED EXERCISE SHEET */}
        {!isQuiz && practiceItem.content && (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-md dark:border-slate-800 dark:bg-slate-900 space-y-8">
            <div className="border-b pb-4 space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200">
                📝 Phiếu Bài Tập Tự Thiết Kế Buổi Học
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                {practiceItem.title}
              </h2>
            </div>

            {practiceItem.content.objective && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 dark:border-amber-900/60 dark:bg-amber-950/40">
                <h4 className="font-bold text-amber-900 dark:text-amber-300 text-base md:text-lg mb-1 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  Mục tiêu cần đạt buổi học:
                </h4>
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium">
                  {practiceItem.content.objective}
                </p>
              </div>
            )}

            {practiceItem.content.requirements && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckSquare className="h-6 w-6 text-teal-600" />
                  Các bước thực hiện & Yêu cầu bài tập:
                </h3>
                <div className="space-y-3">
                  {practiceItem.content.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-800/60 dark:border-slate-800">
                      <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-sm">
                        {idx + 1}
                      </span>
                      <p className="text-base md:text-lg text-slate-800 dark:text-slate-200 font-medium pt-0.5 whitespace-pre-wrap">
                        {req}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Time Allocation Table */}
            {practiceItem.content.table && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Clock className="h-6 w-6 text-indigo-600" />
                  Bảng phân bổ thời lượng buổi học (90 phút):
                </h3>
                <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        {practiceItem.content.table.headers.map((h, idx) => (
                          <th key={idx} className="p-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {practiceItem.content.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-50 dark:bg-slate-800/50"}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-4 ${cIdx === 0 ? "font-bold text-teal-700 dark:text-teal-400" : "text-slate-700 dark:text-slate-300"}`}>
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

            {/* Evaluation Criteria */}
            {practiceItem.content.criteria && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  Tiêu chí đánh giá mức độ hoàn thành bài học:
                </h3>
                <div className="grid gap-3 md:grid-cols-3">
                  {practiceItem.content.criteria.map((c, idx) => (
                    <div key={idx} className={`p-5 rounded-2xl border shadow-xs space-y-2 ${
                      c.level === "Mức Đạt" ? "bg-emerald-50/70 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800" :
                      c.level === "Mức Khá" ? "bg-blue-50/70 border-blue-300 dark:bg-blue-950/40 dark:border-blue-800" :
                      "bg-purple-50/70 border-purple-300 dark:bg-purple-950/40 dark:border-purple-800"
                    }`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-black text-white ${
                        c.level === "Mức Đạt" ? "bg-emerald-600" :
                        c.level === "Mức Khá" ? "bg-blue-600" : "bg-purple-600"
                      }`}>
                        {c.level}
                      </span>
                      <p className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Homework List */}
            {practiceItem.content.homework && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-amber-500" />
                  Bài tập về nhà sau buổi học:
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {practiceItem.content.homework.map((hw, idx) => (
                    <div key={idx} className="p-5 rounded-2xl border border-amber-200 bg-amber-50/50 dark:border-amber-900/60 dark:bg-slate-900 space-y-2">
                      <span className="px-3 py-0.5 rounded-full text-xs font-black bg-amber-200 text-amber-900 dark:bg-amber-900 dark:text-amber-200">
                        {hw.title}
                      </span>
                      <p className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                        {hw.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {practiceItem.content.submissionHint && (
              <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-5 dark:border-teal-900/60 dark:bg-teal-950/40">
                <h4 className="font-bold text-teal-950 dark:text-teal-200 text-base md:text-lg mb-1 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-teal-600" />
                  Hướng dẫn nộp bài & Báo cáo:
                </h4>
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-medium whitespace-pre-wrap">
                  {practiceItem.content.submissionHint}
                </p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
