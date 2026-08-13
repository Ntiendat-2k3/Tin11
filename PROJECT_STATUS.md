# Project status

- Data validation: **PASS** (`npm run validate`)
- Roadmap: **32/32 tuần**, đúng 2 buổi/tuần
- Lớp 11: **27 bài** (Bài 1–27)
- Chuyên đề KHMT mở rộng: **3 cụm**
- `sourceIds`: **PASS** (không có id nguồn bị thiếu)
- JS/JSX syntax check: **PASS** (31 file, 0 lỗi cú pháp)
- Production build trong sandbox: **chưa chạy được** vì `npm install` bị timeout khi tải dependency từ registry trong môi trường thực thi.

Trên máy có Node.js + npm:

```bash
npm install
npm run validate
npm run dev
# hoặc npm run build
```
