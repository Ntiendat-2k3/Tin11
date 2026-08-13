import {
  advanced11,
  common11,
  cs11,
  database11,
  exerciseMix,
  phaseSummary,
  roadmap,
  sources
} from "../src/data/index.js"

const errors = []
const assert = (condition, message) => { if (!condition) errors.push(message) }

assert(roadmap.length === 32, `roadmap phải có 32 tuần, hiện có ${roadmap.length}`)
assert(roadmap.every((item, index) => item.week === index + 1), "roadmap.week phải liên tục từ 1 đến 32")
assert(roadmap.every((item) => Array.isArray(item.sessions) && item.sessions.length === 2), "mỗi tuần phải có đúng 2 buổi")
assert(phaseSummary.reduce((sum, item) => sum + item.share, 0) === 100, "phaseSummary.share phải cộng thành 100%")
assert(exerciseMix.reduce((sum, item) => sum + item.value, 0) === 100, "exerciseMix.value phải cộng thành 100%")

const lessons = [...common11, ...database11, ...cs11]
const ids = lessons.map((item) => item.id)
assert(new Set(ids).size === ids.length, "id bài học lớp 11 bị trùng")
assert(common11.length === 9, `common11 phải có 9 bài, hiện có ${common11.length}`)
assert(database11.length === 7, `database11 phải có 7 bài, hiện có ${database11.length}`)
assert(cs11.length === 11, `cs11 phải có 11 bài, hiện có ${cs11.length}`)
assert(advanced11.length === 3, `advanced11 dự kiến 3 chuyên đề, hiện có ${advanced11.length}`)

const sourceIds = new Set(sources.map((item) => item.id))
for (const item of [...lessons, ...advanced11]) {
  for (const sourceId of item.sourceIds ?? []) {
    assert(sourceIds.has(sourceId), `${item.id ?? item.title}: sourceId không tồn tại: ${sourceId}`)
  }
}

if (errors.length) {
  console.error("Data validation FAILED:\n- " + errors.join("\n- "))
  process.exit(1)
}

console.log(`Data validation OK: 32 tuần, ${lessons.length} bài lớp 11, ${advanced11.length} chuyên đề mở rộng, ${sources.length} nguồn.`)
