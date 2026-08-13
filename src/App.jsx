import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { HomePage, LessonDetailPage, PracticeDetailPage } from "@/pages"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tab/:tabId" element={<HomePage />} />
          <Route path="/lesson/:id" element={<LessonDetailPage />} />
          <Route path="/lesson/:lessonId/practice/:practiceId" element={<PracticeDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}
