import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function homeworkPasswordPlugin() {
  let currentPassword = ""

  function generatePassword() {
    currentPassword = Math.floor(100000 + Math.random() * 900000).toString()
  }

  function printPasswordBanner() {
    console.log("\x1b[36m%s\x1b[0m", `
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  🔑 MẬT KHẨU BÀI TẬP VỀ NHÀ (TERMINAL CODE):  ${currentPassword}         │
│  👉 Nhập mã 6 số ngẫu nhiên này vào ứng dụng để mở đáp án.   │
│  🔄 Mã mới sẽ tự động sinh khi khởi động lại Terminal.       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
`)
  }

  return {
    name: "vite-plugin-homework-password",
    configureServer(server) {
      generatePassword()

      server.httpServer?.once("listening", () => {
        setTimeout(printPasswordBanner, 500)
      })

      server.middlewares.use((req, res, next) => {
        if (req.url === "/api/homework-password" || req.url?.startsWith("/api/homework-password?")) {
          res.setHeader("Content-Type", "application/json")
          res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
          res.end(JSON.stringify({ password: currentPassword }))
          return
        }
        next()
      })
    }
  }
}

export default defineConfig({
  base: "/",
  plugins: [homeworkPasswordPlugin(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    host: true,
    allowedHosts: true,
    cors: true,
    hmr: {
      clientPort: 443
    }
  }
})

