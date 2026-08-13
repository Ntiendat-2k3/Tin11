export { common11 } from "./common11.js"
export { database11 } from "./database11.js"
export { cs11 } from "./cs11.js"
export { advanced11 } from "./advanced11.js"
export { grade12Bridge } from "./grade12Bridge.js"
export { roadmap, phaseSummary } from "./roadmap.js"
export { examSnapshot, examPrinciples, exerciseMix, errorCodes } from "./examStrategy.js"
export { assessmentSystem, sessionTemplate } from "./assessments.js"
export { sources } from "./sources.js"
export { kpis } from "./kpis.js"
export { appConfig } from "./appConfig.js"

import { common11 } from "./common11.js"
import { database11 } from "./database11.js"
import { cs11 } from "./cs11.js"
import { advanced11 } from "./advanced11.js"
import { b1Content } from "./b1Content.js"
import { b2Content } from "./b2Content.js"

export function getLessonById(id) {
  const allLessons = [...common11, ...database11, ...cs11, ...advanced11]
  const lesson = allLessons.find(l => l.id === id)
  if (!lesson) return null
  return lesson
}



