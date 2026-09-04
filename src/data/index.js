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

export { b1Content } from "./b1Content.js"
export { b2Content } from "./b2Content.js"
export { b3Content } from "./b3Content.js"
export { b4Content } from "./b4Content.js"
export { b5Content } from "./b5Content.js"
export { b6Content } from "./b6Content.js"
export { b7Content } from "./b7Content.js"
export { b11Content } from "./b11Content.js"
export { b12Content } from "./b12Content.js"

import { common11 } from "./common11.js"
import { database11 } from "./database11.js"
import { cs11 } from "./cs11.js"
import { advanced11 } from "./advanced11.js"
import { b1Content } from "./b1Content.js"
import { b2Content } from "./b2Content.js"
import { b3Content } from "./b3Content.js"
import { b4Content } from "./b4Content.js"
import { b5Content } from "./b5Content.js"
import { b6Content } from "./b6Content.js"
import { b7Content } from "./b7Content.js"
import { b11Content } from "./b11Content.js"
import { b12Content } from "./b12Content.js"

export function getLessonById(id) {
  const allLessons = [...common11, ...database11, ...cs11, ...advanced11]
  const lesson = allLessons.find(l => l.id === id)
  if (!lesson) return null
  return lesson
}



