import { useParams, useNavigate } from "react-router-dom"
import { BookOpen, BrainCircuit, CalendarRange, ClipboardList, DatabaseZap, GraduationCap, LibraryBig, GraduationCap as CapIcon } from "lucide-react"
import { OverviewPage, RoadmapPage, KnowledgePage, AdvancedPage, Grade12Page, ExamPage, SourcesPage } from "@/pages"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabs = [
  { value: "overview", label: "Tổng quan", icon: BookOpen, badge: "🎯" },
  { value: "roadmap", label: "32 tuần", icon: CalendarRange, badge: "🗓️" },
  { value: "knowledge", label: "Kiến thức 11", icon: DatabaseZap, badge: "📘" },
  { value: "advanced", label: "Thuật toán+", icon: BrainCircuit, badge: "⚡" },
  { value: "grade12", label: "Bridge 12", icon: GraduationCap, badge: "🎓" },
  { value: "exam", label: "Chiến lược thi", icon: ClipboardList, badge: "✍️" },
  { value: "sources", label: "Nguồn", icon: LibraryBig, badge: "📚" }
]

const validTabValues = tabs.map((t) => t.value)

export function HomePage() {
  const { tabId } = useParams()
  const navigate = useNavigate()

  const currentTab = tabId && validTabValues.includes(tabId) ? tabId : "overview"

  const handleTabChange = (val) => {
    if (val === "overview") {
      navigate("/tab/overview")
    } else {
      navigate(`/tab/${val}`)
    }
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Top Banner & Hub Header */}
      <header className="border-b border-teal-200/60 bg-gradient-to-r from-teal-900 via-teal-800 to-indigo-900 text-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-300/30 text-teal-200 text-sm font-semibold tracking-wide backdrop-blur-sm">
                <CapIcon className="h-4 w-4 text-amber-300" />
                <span>GIÁO TRÌNH GIA SƯ BẢN QUYỀN · TIN HỌC 11 KNTT</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
                Sổ Tay Lộ Trình & Kiến Thức Tin Học 11
              </h1>
              <p className="text-sm md:text-base text-teal-100/90 font-normal max-w-3xl leading-relaxed">
                Hệ thống 32 tuần học chuyên sâu — Hiểu bản chất thực tế, không học vẹt, sẵn sàng cho kỳ thi tốt nghiệp THPT 2026.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
              <div className="text-center px-2">
                <span className="block text-2xl font-black text-amber-300">12</span>
                <span className="text-xs text-teal-100 font-medium">Bài học chuẩn</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="text-center px-2">
                <span className="block text-2xl font-black text-emerald-300">32</span>
                <span className="text-xs text-teal-100 font-medium">Tuần lộ trình</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Hub */}
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-6">
          {/* Custom Styled Bookmark Tabs Bar */}
          <div className="sticky top-4 z-30 rounded-2xl bg-white/90 p-2 shadow-lg backdrop-blur-md border border-slate-200/80 dark:bg-slate-900/90 dark:border-slate-800">
            <TabsList className="flex w-full overflow-x-auto justify-start gap-1.5 p-1 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl">
              {tabs.map(({ value, label, icon: Icon, badge }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="group relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-base font-bold transition-all duration-200 min-w-fit cursor-pointer data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950 data-[state=active]:text-teal-700 dark:data-[state=active]:text-teal-300 data-[state=active]:shadow-sm border border-transparent data-[state=active]:border-teal-200/80 dark:data-[state=active]:border-teal-800/50"
                >
                  <span className="text-lg transition-transform group-hover:scale-110">{badge}</span>
                  <span className="whitespace-nowrap">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Contents */}
          <div className="pt-2">
            <TabsContent value="overview" className="mt-0 focus-visible:outline-none"><OverviewPage /></TabsContent>
            <TabsContent value="roadmap" className="mt-0 focus-visible:outline-none"><RoadmapPage /></TabsContent>
            <TabsContent value="knowledge" className="mt-0 focus-visible:outline-none"><KnowledgePage /></TabsContent>
            <TabsContent value="advanced" className="mt-0 focus-visible:outline-none"><AdvancedPage /></TabsContent>
            <TabsContent value="grade12" className="mt-0 focus-visible:outline-none"><Grade12Page /></TabsContent>
            <TabsContent value="exam" className="mt-0 focus-visible:outline-none"><ExamPage /></TabsContent>
            <TabsContent value="sources" className="mt-0 focus-visible:outline-none"><SourcesPage /></TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  )
}
