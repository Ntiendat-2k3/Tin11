import { useState, useEffect, useRef } from "react"
import { verifyHomeworkPassword } from "@/services/passwordService"

export function HomeworkPasswordModal({ isOpen, onClose, onSuccess }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setPassword("")
      setError("")
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e?.preventDefault()
    if (!password || password.trim().length === 0) {
      setError("Vui lòng nhập mật khẩu.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const isValid = await verifyHomeworkPassword(password)
      if (isValid) {
        onSuccess()
        onClose()
      } else {
        setError("Mật khẩu không đúng!")
      }
    } catch (err) {
      setError("Có lỗi xảy ra, thử lại sau.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-xl border border-slate-200 dark:border-slate-800 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Nhập mật khẩu xem đáp án
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            ref={inputRef}
            type="password"
            maxLength={6}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.replace(/\D/g, ""))
              if (error) setError("")
            }}
            placeholder="Mật khẩu 6 số từ Terminal..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-base focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-center tracking-widest"
          />

          {error && (
            <p className="text-sm font-semibold text-red-500 text-center">{error}</p>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isSubmitting || password.length < 6}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              {isSubmitting ? "Đang xử lý..." : "Xác nhận"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
