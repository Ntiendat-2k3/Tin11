# Lộ trình gia sư Tin học 11 – KHMT & định hướng thi THPT

App React/Vite dùng **mock data tách file** để quản lý giáo trình gia sư Tin học lớp 11. Trục chính là chương trình lớp 11 Kết nối tri thức, ưu tiên nhánh **Khoa học máy tính** cho học sinh định hướng lập trình; lớp 12 chỉ xuất hiện dưới dạng “bridge” để chuẩn bị sớm cho các mảng sẽ gặp trong năm cuối cấp.

## Chạy project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

> Cấu hình `base: "./"` đã được bật trong Vite để thuận tiện khi deploy project vào một sub-folder/static hosting.

## Cấu trúc

```text
tin-hoc-11-roadmap-app/
├─ original-lo-trinh.html       # HTML gốc để đối chiếu
├─ components.json              # cấu hình shadcn/ui
├─ package.json
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ components/
   │  ├─ ui/                    # các primitive theo cách tổ chức shadcn/ui
   │  ├─ KnowledgeCard.jsx
   │  ├─ KnowledgePanel.jsx
   │  ├─ RoadmapPanel.jsx
   │  ├─ ExamPanel.jsx
   │  └─ ...
   ├─ data/
   │  ├─ common11.js            # Bài 1–9
   │  ├─ database11.js          # Bài 10–16: CSDL/SQL
   │  ├─ cs11.js                # Bài 17–27: nhánh KHMT
   │  ├─ advanced11.js          # đệ quy/chia để trị/duyệt-quay lui
   │  ├─ roadmap.js             # 32 tuần / 64 buổi
   │  ├─ examStrategy.js        # cấu trúc thi + tỷ lệ bài tập + Error Log
   │  ├─ assessments.js         # hệ thống kiểm tra + cấu trúc 120 phút
   │  ├─ grade12Bridge.js       # chỉ các điểm nối lớp 12
   │  ├─ kpis.js                # KPI cuối lớp 11
   │  ├─ sources.js             # nguồn tham khảo và phân tầng độ tin cậy
   │  └─ index.js
   └─ index.css
```

## Cách quản lý nội dung

### 1. Sửa một bài lớp 11
Mở đúng file dữ liệu trong `src/data/`. Mỗi bài là một object độc lập, ví dụ:

```js
{
  id: "b14",
  lesson: "Bài 14",
  title: "SQL - Ngôn ngữ truy vấn có cấu trúc",
  priority: "critical",
  hours: 5,
  mustKnow: [/* kiến thức bắt buộc */],
  examSkills: [/* năng lực dùng khi làm đề */],
  practice: [/* bài tập / case */],
  sourceIds: [/* id từ sources.js */]
}
```

UI không chứa giáo trình cứng; `KnowledgePanel` và `KnowledgeCard` chỉ render dữ liệu này.

### 2. Đổi lịch 32 tuần
Sửa `src/data/roadmap.js`. Mỗi tuần có:
- `week`: số tuần
- `phase`: giai đoạn
- `sessions`: 2 buổi
- `focus`: trọng tâm sư phạm
- `checkpoint`: chuẩn đầu ra để quyết định có được đi tiếp hay không

### 3. Thay chiến lược đề thi năm mới
Chỉ cần cập nhật `src/data/examStrategy.js` và, nếu cần, `src/data/sources.js`. Không phải sửa các component giao diện.

### 4. Thêm/bớt chuyên đề nâng cao
Sửa `src/data/advanced11.js`. Các chuyên đề nâng cao được tách khỏi Bài 1–27 để tránh vô tình biến kế hoạch ôn thi thành chương trình thi HSG.

## Các thay đổi chính so với HTML cũ

1. Không còn coi **CSDL là trục trọng tâm duy nhất**. Lộ trình có hai trục lớn: CSDL/SQL và Kĩ thuật lập trình KHMT.
2. Nhánh KHMT được triển khai chi tiết theo Bài 17–27: mảng, tìm kiếm, sắp xếp, kiểm thử, độ phức tạp, làm mịn dần/thiết kế mô-đun.
3. Chuyên đề đệ quy, chia để trị, duyệt/quay lui được giữ ở mức bổ trợ có giới hạn thời lượng.
4. Mỗi tuần có checkpoint định lượng/quan sát được, không chỉ có “nội dung cần học”.
5. Bài tập được chia theo năng lực: hiểu bản chất, đọc/trace code, tình huống thực tế, format thi bấm giờ, nâng cao.
6. Lớp 12 chỉ là bridge: AI, mạng, an toàn số, HTML/CSS và một số nội dung KHMT liên quan học máy/dữ liệu/mô phỏng.
7. Toàn bộ nguồn tham khảo được quản lý bằng `sourceIds`, giúp biết một mục kiến thức đang dựa vào nguồn nào.

## Gợi ý quy trình gia sư

- Không cho sang chủ đề mới chỉ vì “đã hết buổi”; dùng `checkpoint` làm cổng.
- Mỗi lỗi làm đề phải ghi vào Error Log và có bài sửa tương ứng.
- Với học sinh định hướng lập trình, ưu tiên bài đọc code/trace/debug/test trước khi tăng độ khó code dài.
- Chỉ tăng bài thuật toán nâng cao khi đề mô phỏng và KPI cốt lõi đang ổn định.
