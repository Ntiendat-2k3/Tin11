import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function QuizCard({ quiz, index }) {
  const [selected, setSelected] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  return (
    <Card className="mb-6 rounded-2xl border border-slate-200/90 bg-white p-2 shadow-md dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex gap-3 text-lg md:text-xl font-bold leading-relaxed text-slate-900 dark:text-slate-100">
          <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600 text-white text-base font-black">
            Q{index + 1}
          </span>
          <span className="pt-0.5">{quiz.question}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {quiz.options.map((opt, i) => {
            const optLetter = opt.charAt(0)
            const isSelected = selected === optLetter
            const isCorrect = optLetter === quiz.answer

            let btnStyle = "justify-start text-left font-semibold border-slate-200 text-slate-800 bg-slate-50 hover:bg-teal-50 hover:text-teal-900 hover:border-teal-300 dark:border-slate-800 dark:text-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800"
            if (showExplanation) {
              if (isCorrect) {
                btnStyle = "justify-start text-left font-extrabold bg-emerald-100 text-emerald-950 border-emerald-400 dark:bg-emerald-950 dark:text-emerald-200 dark:border-emerald-700 shadow-sm"
              } else if (isSelected) {
                btnStyle = "justify-start text-left font-bold bg-rose-100 text-rose-950 border-rose-400 dark:bg-rose-950 dark:text-rose-200 dark:border-rose-700"
              }
            }

            return (
              <Button
                key={i}
                variant="outline"
                className={`h-auto min-h-[52px] whitespace-normal px-5 py-3.5 text-base md:text-lg rounded-xl transition-all ${btnStyle}`}
                onClick={() => {
                  if (!showExplanation) {
                    setSelected(optLetter)
                    setShowExplanation(true)
                  }
                }}
              >
                {opt}
              </Button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="mt-4 animate-in fade-in duration-300 rounded-xl border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-5 text-base md:text-lg leading-relaxed text-slate-800 dark:border-teal-900 dark:from-teal-950/80 dark:to-slate-900 dark:text-slate-200">
            <p className="mb-2 flex items-center gap-2 font-black text-teal-900 dark:text-teal-300">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              Đáp án đúng: {quiz.answer}
            </p>
            <p className="text-slate-700 dark:text-slate-300 font-medium">{quiz.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
