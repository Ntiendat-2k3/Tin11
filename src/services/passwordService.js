let cachedPassword = null

export async function fetchHomeworkPassword() {
  try {
    const res = await fetch("/api/homework-password", {
      headers: {
        "Bypass-Tunnel-Reminder": "true"
      }
    })
    if (res.ok) {
      const data = await res.json()
      if (data && data.password) {
        cachedPassword = data.password
        console.log(
          "%c[KHÓA BÀI TẬP VỀ NHÀ] Mật khẩu 6 số lấy từ Terminal:",
          "color: #06b6d4; font-weight: bold; font-size: 14px;",
          cachedPassword
        )
        return cachedPassword
      }
    }
  } catch (err) {
    console.warn("Could not fetch password from /api/homework-password endpoint, fallbacking local session code:", err)
  }

  // Fallback if API unavailable
  if (!cachedPassword) {
    cachedPassword = Math.floor(100000 + Math.random() * 900000).toString()
    console.log(
      "%c[KHÓA BÀI TẬP VỀ NHÀ] Mật khẩu 6 số (Fallback):",
      "color: #06b6d4; font-weight: bold; font-size: 14px;",
      cachedPassword
    )
  }

  return cachedPassword
}

export async function verifyHomeworkPassword(inputCode) {
  if (!inputCode) return false
  const cleanInput = String(inputCode).trim()
  const realPassword = await fetchHomeworkPassword()
  return cleanInput === String(realPassword).trim()
}
