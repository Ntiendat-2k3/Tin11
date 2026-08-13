import { useState } from "react"
import { CheckCircle2, ChevronDown, Lock } from "lucide-react"

function parseItemToQnA(item, type) {
  if (typeof item === 'object' && item !== null) {
    return {
      question: item.question || item.title || item.task,
      answer: item.answer || item.solution || item.detail
    }
  }

  if (typeof item === 'string') {
    if (item.includes(' → ')) {
      const parts = item.split(' → ')
      return {
        question: parts[0].trim(),
        answer: parts.slice(1).join(' → ').trim()
      }
    }
    if (item.includes(': ')) {
      const firstColonIndex = item.indexOf(': ')
      return {
        question: item.substring(0, firstColonIndex).trim(),
        answer: item.substring(firstColonIndex + 2).trim()
      }
    }
    return {
      question: item,
      answer: type === 'exam'
        ? 'Phân tích & Hướng dẫn: Đọc kỹ yêu cầu đề bài, xác định từ khóa cốt lõi (khái niệm, phân loại hoặc cú pháp) và chọn đáp án chính xác nhất dựa trên lý thuyết đã học.'
        : 'Hướng dẫn tự làm: Thực hành trực tiếp thao tác trên máy tính theo đúng các bước trong bài học, chụp lại ảnh màn hình kết quả và ghi lại nhận xét rút ra.'
    }
  }
  return { question: '', answer: '' }
}

export function CollapsibleDropdownCard({ item, index, type, isLocked = false, onUnlockRequired }) {
  const [isOpen, setIsOpen] = useState(false)
  const parsed = parseItemToQnA(item, type)
  const isExam = type === "exam"

  const badgeText = isExam ? `Dạng bài thi #${index + 1}` : `Bài tập #${index + 1}`
  const iconText = isExam ? "🎯" : "✏️"

  const handleCardClick = () => {
    if (isLocked) {
      if (onUnlockRequired) {
        onUnlockRequired()
      }
      return
    }
    setIsOpen(!isOpen)
  }

  const headerBg = isExam
    ? "border-amber-200/90 bg-gradient-to-r from-amber-50 to-orange-50/50 hover:border-amber-400 dark:from-amber-950/40 dark:to-slate-900 dark:border-amber-800/80"
    : "border-purple-200/90 bg-gradient-to-r from-purple-50 to-indigo-50/50 hover:border-purple-400 dark:from-purple-950/40 dark:to-slate-900 dark:border-purple-800/80"

  const badgeStyle = isExam
    ? "bg-amber-500 text-white"
    : "bg-purple-600 text-white"

  const tagStyle = isExam
    ? "text-amber-800 bg-amber-200/70 dark:bg-amber-900/60 dark:text-amber-200"
    : "text-purple-800 bg-purple-200/70 dark:bg-purple-900/60 dark:text-purple-200"

  const panelBg = isExam
    ? "bg-amber-100/70 border-amber-300/80 dark:bg-amber-950/70 dark:border-amber-800/80 text-amber-950 dark:text-amber-100"
    : "bg-purple-100/70 border-purple-300/80 dark:bg-purple-950/70 dark:border-purple-800/80 text-purple-950 dark:text-purple-100"

  return (
    <div className={`rounded-2xl border-2 shadow-xs transition-all duration-200 overflow-hidden ${headerBg}`}>
      {/* Clickable Card Header */}
      <div
        onClick={handleCardClick}
        className="p-5 md:p-6 flex items-start justify-between gap-4 cursor-pointer select-none group"
      >
        <div className="flex items-start gap-4">
          <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-black text-base shadow-md mt-0.5 ${badgeStyle}`}>
            {index + 1}
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`inline-block text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full ${tagStyle}`}>
                {iconText} {badgeText}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {isLocked ? "(Cần mật khẩu để xem đáp án)" : `(Bấm để ${isOpen ? "ẩn" : "xem"} đáp án)`}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {parsed.question}
            </h3>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2 pt-1">
          {isLocked ? (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-extrabold bg-amber-500 text-white shadow-xs hover:bg-amber-600 transition-all">
              <Lock className="h-4 w-4" />
              <span>Nhập mật khẩu</span>
            </span>
          ) : (
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs md:text-sm font-extrabold transition-all ${isOpen
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                : "bg-white/90 text-slate-700 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 shadow-2xs"
              }`}>
              <span>{isOpen ? "Ẩn đáp án" : "Xem đáp án"}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </span>
          )}
        </div>
      </div>

      {/* Collapsible Dropdown Content */}
      {!isLocked && isOpen && (
        <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className={`p-5 md:p-6 rounded-2xl border font-medium text-base md:text-lg leading-relaxed whitespace-pre-wrap ${panelBg}`}>
            <div className="flex items-center gap-2 font-black text-lg md:text-xl mb-3 pb-2 border-b border-current/20">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>💡 Gợi ý giải & Đáp án mẫu chi tiết:</span>
            </div>
            {parsed.answer}
          </div>
        </div>
      )}
    </div>
  )
}

