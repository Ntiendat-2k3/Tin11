# Data layer

Thư mục này là nơi nên sửa **nội dung giáo trình**. Component UI không nên chứa danh sách bài học, tuần học hay nguồn tham khảo.

## Nhóm file

| File | Mục đích |
|---|---|
| `common11.js` | Kiến thức chung Bài 1–9 |
| `database11.js` | CSDL/SQL Bài 10–16 |
| `cs11.js` | Nhánh Khoa học máy tính Bài 17–27 |
| `advanced11.js` | Thuật toán mở rộng, không phải core roadmap |
| `roadmap.js` | Ghép nội dung vào 32 tuần / 64 buổi |
| `examStrategy.js` | Snapshot cấu trúc đề, nguyên tắc luyện, Error Log |
| `assessments.js` | Chu kỳ kiểm tra và cấu trúc mỗi buổi |
| `grade12Bridge.js` | Nội dung lớp 12 chỉ dạy trước ở mức cầu nối |
| `kpis.js` | Chuẩn đầu ra cuối lớp 11 |
| `sources.js` | Danh mục nguồn; mỗi lesson trỏ tới bằng `sourceIds` |

## Priority

- `critical`: phải vững, cần nhiều bài và kiểm tra lại.
- `high`: quan trọng, cần đạt chuẩn trước khi đi tiếp.
- `medium`: học đủ chương trình, ưu tiên thấp hơn khi phải co thời lượng.
- `bridge`: chuẩn bị trước cho lớp 12.

Khi đổi sách, đổi cấu trúc thi hoặc đổi học sinh, nên sửa data trước; chỉ sửa UI khi muốn đổi cách hiển thị.
