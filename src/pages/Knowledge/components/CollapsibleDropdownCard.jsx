import { useState } from "react"
import { 
  CheckCircle2, ChevronDown, Lock, BookOpen, 
  HelpCircle, Target, Sparkles, Lightbulb, Compass
} from "lucide-react"

function parseItemToQnA(item, type) {
  if (typeof item === 'object' && item !== null) {
    const rawQuestion = item.problem || item.questionDetail || item.question || item.task || ""
    const rawTitle = item.title || (item.question && item.question.length < 80 ? item.question : "") || `Bài tập`
    
    return {
      title: rawTitle || "Nội dung bài tập",
      tag: item.tag || item.badge || (type === 'exam' ? 'Dạng bài thi' : 'Bài tập tự luyện'),
      scenario: item.scenario || item.context || item.situation || null,
      sampleQuestion: item.sampleQuestion || null,
      problem: rawQuestion !== rawTitle ? rawQuestion : (item.description || null),
      tasks: item.tasks || item.steps || item.subQuestions || [],
      requirements: item.requirements || item.requirement || item.submissionHint || null,
      hint: item.hint || item.note || item.knowledgeNotice || null,
      method: item.method || item.approach || null,
      answer: item.solution || item.answer || item.detail || item.explanation || ""
    }
  }

  if (typeof item === 'string') {
    const raw = item.trim()
    // Check for " → " separator (common in exam types)
    if (raw.includes(' → ')) {
      const parts = raw.split(' → ')
      const left = parts[0].trim()
      const right = parts.slice(1).join(' → ').trim()
      
      let title = left
      let sampleQuestion = null
      if (left.includes(': ')) {
        const colonIdx = left.indexOf(': ')
        title = left.substring(0, colonIdx).trim()
        sampleQuestion = left.substring(colonIdx + 2).trim()
      }
      return {
        title: title || raw,
        tag: type === 'exam' ? 'Dạng bài thi' : 'Bài tập tự luyện',
        scenario: null,
        sampleQuestion: sampleQuestion || left,
        problem: null,
        tasks: [],
        requirements: null,
        hint: null,
        method: null,
        answer: right
      }
    }

    // Check for "Bài tập X: " or "Dạng X: "
    if (raw.includes(': ')) {
      const colonIdx = raw.indexOf(': ')
      const prefix = raw.substring(0, colonIdx).trim()
      const rest = raw.substring(colonIdx + 2).trim()
      return {
        title: prefix,
        tag: type === 'exam' ? 'Dạng bài thi' : 'Bài tập tự luyện',
        scenario: null,
        sampleQuestion: type === 'exam' ? rest : null,
        problem: type !== 'exam' ? rest : null,
        tasks: [],
        requirements: null,
        hint: null,
        method: null,
        answer: type === 'exam'
          ? 'Phân tích & Hướng dẫn: Đọc kỹ yêu cầu đề bài, xác định từ khóa cốt lõi (khái niệm, phân loại hoặc cú pháp) và chọn đáp án chính xác nhất dựa trên lý thuyết đã học.'
          : 'Hướng dẫn tự làm: Vận dụng kiến thức đã học trong bài để trình bày chi tiết theo các bước hướng dẫn.'
      }
    }

    return {
      title: raw,
      tag: type === 'exam' ? 'Dạng bài thi' : 'Bài tập tự luyện',
      scenario: null,
      sampleQuestion: null,
      problem: raw,
      tasks: [],
      requirements: null,
      hint: null,
      method: null,
      answer: type === 'exam'
        ? 'Phân tích & Hướng dẫn: Đọc kỹ yêu cầu đề bài, xác định từ khóa cốt lõi và chọn đáp án chính xác nhất.'
        : 'Hướng dẫn tự làm: Thực hành trực tiếp thao tác trên máy tính theo đúng các bước trong bài học.'
    }
  }

  return {
    title: '',
    tag: '',
    scenario: null,
    sampleQuestion: null,
    problem: null,
    tasks: [],
    requirements: null,
    hint: null,
    method: null,
    answer: ''
  }
}

export function CollapsibleDropdownCard({ item, index, type, isLocked = false, onUnlockRequired }) {
  const [isOpen, setIsOpen] = useState(false)
  const parsed = parseItemToQnA(item, type)
  const isExam = type === "exam"

  const badgeText = isExam ? `Dạng bài thi #${index + 1}` : `Bài tập #${index + 1}`
  const iconText = isExam ? "🎯" : "✏️"

  const handleToggleAnswer = (e) => {
    e.stopPropagation()
    if (isLocked) {
      if (onUnlockRequired) {
        onUnlockRequired()
      }
      return
    }
    setIsOpen(!isOpen)
  }

  const containerBg = isExam
    ? "border-amber-200/90 bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 dark:from-amber-950/30 dark:via-slate-900 dark:to-slate-900 dark:border-amber-800/80"
    : "border-purple-200/90 bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 dark:from-purple-950/30 dark:via-slate-900 dark:to-slate-900 dark:border-purple-800/80"

  const badgeStyle = isExam
    ? "bg-amber-500 text-white"
    : "bg-purple-600 text-white"

  const tagStyle = isExam
    ? "text-amber-800 bg-amber-200/70 dark:bg-amber-900/60 dark:text-amber-200"
    : "text-purple-800 bg-purple-200/70 dark:bg-purple-900/60 dark:text-purple-200"

  const solutionBg = isExam
    ? "bg-amber-100/80 border-amber-300 dark:bg-amber-950/70 dark:border-amber-800/80 text-amber-950 dark:text-amber-100"
    : "bg-purple-100/80 border-purple-300 dark:bg-purple-950/70 dark:border-purple-800/80 text-purple-950 dark:text-purple-100"

  return (
    <div className={`rounded-2xl border-2 shadow-xs transition-all duration-200 overflow-hidden ${containerBg}`}>
      
      {/* 1. CARD HEADER (Tiêu đề & Badge) */}
      <div className="p-5 md:p-6 pb-4 border-b border-slate-200/80 dark:border-slate-800">
        <div className="flex items-start gap-3.5">
          <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-black text-base shadow-md mt-0.5 ${badgeStyle}`}>
            {index + 1}
          </div>
          <div className="space-y-1 w-full">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-block text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full ${tagStyle}`}>
                {iconText} {badgeText}
              </span>
              {parsed.tag && parsed.tag !== badgeText && (
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {parsed.tag}
                </span>
              )}
            </div>
            <h3 className="text-base md:text-lg font-black text-slate-900 dark:text-slate-100 leading-snug">
              {parsed.title}
            </h3>
          </div>
        </div>
      </div>

      {/* 2. CARD BODY - ĐỀ BÀI & YÊU CẦU CHI TIẾT (ALWAYS VISIBLE - Luôn hiển thị rõ ràng) */}
      <div className="p-5 md:p-6 space-y-4">
        
        {/* Tình huống thực tế (nếu có) */}
        {parsed.scenario && (
          <div className="rounded-xl border border-sky-300/80 bg-sky-50/80 dark:border-sky-900/60 dark:bg-slate-900/90 p-4 space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-sky-900 dark:text-sky-300 text-xs uppercase tracking-wider">
              <BookOpen className="h-4 w-4 text-sky-600 dark:text-sky-400" />
              <span>Bối cảnh / Tình huống thực tế:</span>
            </div>
            <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              {parsed.scenario}
            </p>
          </div>
        )}

        {/* Câu hỏi trắc nghiệm / Tình huống mẫu trong đề thi (nếu có) */}
        {parsed.sampleQuestion && (
          <div className="rounded-xl border border-amber-300 bg-amber-50/90 dark:border-amber-900/70 dark:bg-slate-900/90 p-4 space-y-1.5 shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-xs uppercase tracking-wider">
              <HelpCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>Đề bài câu hỏi thi mẫu:</span>
            </div>
            <p className="text-xs md:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed whitespace-pre-wrap">
              {parsed.sampleQuestion}
            </p>
          </div>
        )}

        {/* Nội dung đề bài / Yêu cầu chính */}
        {parsed.problem && (
          <div className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
            {parsed.problem}
          </div>
        )}

        {/* Danh sách nhiệm vụ / Câu hỏi cụ thể */}
        {parsed.tasks && parsed.tasks.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              <span>Nhiệm vụ cụ thể cần hoàn thành:</span>
            </div>
            <div className="space-y-2">
              {parsed.tasks.map((task, tIdx) => (
                <div key={tIdx} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200 shadow-2xs">
                  <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-md bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold text-[11px] mt-0.5">
                    {tIdx + 1}
                  </span>
                  <span className="leading-relaxed">{task}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Yêu cầu nộp bài / Tiêu chí hoàn thành */}
        {parsed.requirements && (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <Target className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span><strong>Yêu cầu cần đạt:</strong> {parsed.requirements}</span>
          </div>
        )}

        {/* Gợi ý tư duy (Hint) */}
        {parsed.hint && (
          <div className="flex items-start gap-2 text-xs font-medium text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800">
            <Lightbulb className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="leading-relaxed"><strong>Gợi ý:</strong> {parsed.hint}</span>
          </div>
        )}

        {/* 3. CARD ACTION BAR (Khóa / Mở đáp án) */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {isLocked ? (
            <>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                <Lock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Đáp án mẫu & Hướng dẫn giải đang bị khóa</span>
              </div>
              <button
                type="button"
                onClick={handleToggleAnswer}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-amber-500 hover:bg-amber-600 text-white shadow-xs transition-all cursor-pointer"
              >
                <Lock className="h-3.5 w-3.5" />
                <span>Nhập mật khẩu để xem đáp án</span>
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={handleToggleAnswer}
              className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-xs ${
                isOpen
                  ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                  : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700"
              }`}
            >
              <span>{isOpen ? "Ẩn đáp án & hướng dẫn giải" : "💡 Xem hướng dẫn giải & đáp án mẫu chi tiết"}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
          )}
        </div>

        {/* 4. EXPANDABLE SOLUTION PANEL (Chỉ hiện khi mở khóa và click xem) */}
        {!isLocked && isOpen && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            
            {/* Phương pháp tư duy / Công thức giải (nếu có) */}
            {parsed.method && (
              <div className="rounded-xl border border-teal-300 bg-teal-50/90 dark:border-teal-800 dark:bg-slate-900 p-4 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 font-bold text-teal-900 dark:text-teal-300 text-xs uppercase tracking-wider">
                  <Compass className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>Phương pháp tư duy & Mẹo giải nhanh:</span>
                </div>
                <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {parsed.method}
                </p>
              </div>
            )}

            {/* Đáp án mẫu chi tiết */}
            <div className={`p-5 md:p-6 rounded-2xl border font-medium text-xs md:text-sm leading-relaxed whitespace-pre-wrap shadow-xs ${solutionBg}`}>
              <div className="flex items-center gap-2 font-black text-sm md:text-base mb-3 pb-2 border-b border-current/20">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Hướng dẫn giải & Đáp án mẫu chi tiết:</span>
              </div>
              <div className="leading-relaxed font-sans">
                {parsed.answer}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}


