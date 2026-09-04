import { b10Content } from "./b10Content.js"
import { b11Content } from "./b11Content.js"
import { b12Content } from "./b12Content.js"
import { b13Content } from "./b13Content.js"
import { b14Content } from "./b14Content.js"
import { b15Content } from "./b15Content.js"
import { b16Content } from "./b16Content.js"

export const database11 = [
  {
    id: "b10",
    lesson: "Bài 10",
    title: "Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Bài toán quản lí dữ liệu trong các tổ chức, trường học, bệnh viện, doanh nghiệp",
      "Mối quan hệ giữa Dữ liệu (Data) - Xử lý (Processing) - Thông tin (Information) - Quyết định (Decision)",
      "Lý do cần chuyển đổi từ quản lí thủ công trên sổ sách sang lưu trữ trên máy tính",
      "Các hoạt động chính của bài toán quản lí: Tạo lập, Cập nhật (Thêm/Sửa/Xóa), Khai thác (Tìm kiếm/Lọc/Thống kê/Báo cáo)",
      "Những hạn chế khi quản lí dữ liệu bằng tệp văn bản / bảng tính rời rạc"
    ],
    codeSkills: [
      "Khảo sát bài toán thực tế và lập danh sách các thực thể / đối tượng cần quản lí",
      "Mô tả dòng luồng dữ liệu đầu vào và thông tin đầu ra cho một bài toán quản lí nhỏ"
    ],
    examSkills: [
      "Đọc yêu cầu nghiệp vụ và xác định đúng các tập dữ liệu cần lưu trữ",
      "Phân tích nhược điểm của việc lưu trữ trùng lặp dữ liệu trên các tệp riêng lẻ",
      "Xác định đúng các thao tác cập nhật dữ liệu trong bài toán cụ thể"
    ],
    practice: [
      "Case study 1: Phân tích hệ thống Quản lí Thư viện trường học (Sách, Độc giả, Phiếu mượn)",
      "Case study 2: Hệ thống Quản lí Cửa hàng bán lẻ (Sản phẩm, Khách hàng, Hóa đơn)",
      "Case study 3: Quản lí Hồ sơ Học sinh và Điểm số lớp 11",
      "10 câu trắc nghiệm nhận diện các bài toán quản lí trong thực tế"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "kgv-focus11"],
    lectureContent: b10Content
  },
  {
    id: "b11",
    lesson: "Bài 11",
    title: "Cơ sở dữ liệu",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Lưu trữ dữ liệu khoa học: Khắc phục dư thừa dữ liệu (Data redundancy) và mâu thuẫn không nhất quán (Data inconsistency)",
      "Sự phụ thuộc giữa phần mềm và dữ liệu & Khái niệm Tính độc lập dữ liệu (Data independence)",
      "Khái niệm Cơ sở dữ liệu (CSDL): Tập hợp dữ liệu có liên quan, có cấu trúc, lưu trên máy tính",
      "Sáu thuộc tính cơ bản của CSDL: Cấu trúc, Không dư thừa, Độc lập dữ liệu, Toàn vẹn, Nhất quán, Bảo mật & An toàn",
      "Phân biệt sâu sắc cặp khái niệm: Toàn vẹn (Hợp lệ) vs Nhất quán (Ăn khớp); Bảo mật (Đúng người) vs An toàn (Sao lưu dự phòng)"
    ],
    codeSkills: [
      "Phân tích và phát hiện các trường dữ liệu dư thừa, dữ liệu suy diễn trong bài toán quản lý",
      "Chẩn đoán các lỗi vi phạm tính toàn vẹn (giá trị ngoài phạm vi) và tính nhất quán (dữ liệu mâu thuẫn)",
      "Thiết kế danh mục nhóm dữ liệu có cấu trúc cho bài toán quản lý trường học, thư viện, cửa hàng"
    ],
    examSkills: [
      "Giải quyết 5 dạng câu hỏi thi: Khái niệm CSDL vs Bảng tính rời rạc, Phát hiện dư thừa dữ liệu, Toàn vẹn vs Nhất quán, Tính độc lập dữ liệu, Bảo mật vs An toàn",
      "Phản biện nhận định sai lầm 'Dư thừa là cấm giá trị trùng lặp' và 'Lưu càng nhiều file càng tốt'",
      "Trả lời xuất sắc 6 câu hỏi cốt lõi chuẩn đầu ra Bài 11"
    ],
    practice: [
      "10 bài tập tình huống thực hành trực tiếp trong buổi học (2-6 phút/bài)",
      "Mini Test 7 câu trắc nghiệm tương tác đánh giá chuẩn đầu ra cuối buổi",
      "Bài tập về nhà: Đề xuất dữ liệu quản lý lớp học + Phân tích dư thừa hóa đơn + Phân loại 4 tình huống Toàn vẹn vs Nhất quán"
    ],
    sourceIds: ["kgv-cs11", "vietjack-mock2026", "kgv-app11"],
    lectureContent: b11Content
  },
  {
    id: "b12",
    lesson: "Bài 12",
    title: "Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Khái niệm Hệ quản trị cơ sở dữ liệu (DBMS): phần mềm cung cấp môi trường tạo lập, lưu trữ, cập nhật và khai thác CSDL",
      "4 nhóm chức năng cốt lõi của DBMS: Định nghĩa dữ liệu (DDL), Cập nhật dữ liệu (DML), Truy xuất dữ liệu (DQL), Bảo mật & An toàn CSDL (DCL/Admin)",
      "Kiến trúc 4 tầng của Hệ cơ sở dữ liệu: Người dùng -> Phần mềm ứng dụng -> Hệ QTCSDL (DBMS) -> CSDL lưu trữ vật lý",
      "Ba nhóm vai trò người dùng trong hệ CSDL: Quản trị CSDL (DBA), Lập trình viên ứng dụng, Người dùng cuối (End-user)",
      "Hai mô hình tổ chức hệ CSDL: Hệ CSDL tập trung (Centralized) vs Hệ CSDL phân tán (Distributed), ưu nhược điểm qua ca thực tế (chuỗi siêu thị)",
      "Phân biệt chính xác bộ tứ: Dữ liệu -> CSDL -> Hệ QTCSDL (DBMS) -> Hệ CSDL"
    ],
    codeSkills: [
      "Trải nghiệm tương tác với mô hình Hệ QTCSDL: tạo bảng, chèn bản ghi, truy xuất và phân quyền truy cập",
      "Phân tích luồng truyền nhận dữ liệu qua 4 tầng kiến trúc của một hệ CSDL thực tế"
    ],
    examSkills: [
      "Phân biệt chính xác giữa CSDL, Hệ quản trị CSDL (DBMS) và Hệ CSDL hoàn chỉnh",
      "Nhận diện đúng 4 nhóm chức năng của DBMS trong các thao tác nghiệp vụ",
      "Phân loại chuẩn xác quyền hạn và trách nhiệm của 3 nhóm người dùng (DBA, Lập trình viên, Người dùng cuối)",
      "Phân tích ưu - nhược điểm và lựa chọn mô hình CSDL Tập trung vs Phân tán phù hợp bài toán nghiệp vụ"
    ],
    practice: [
      "10 bài tập tình huống thực tế chuyên sâu (bàn giao CSDL, lỗi kiến trúc 4 tầng, phân quyền DBA, chuỗi siêu thị phân tán...)",
      "Mini Test 10 câu trắc nghiệm 4 lựa chọn có đáp án và giải thích chi tiết",
      "5 Dạng bài thi trọng tâm: Nhận diện định nghĩa, Phân loại chức năng DBMS, Sơ đồ 4 tầng, Phân quyền người dùng, Bài toán Tập trung vs Phân tán"
    ],
    sourceIds: ["kgv-cs11", "kgv-focus11"],
    lectureContent: b12Content
  },
  {
    id: "b13",
    lesson: "Bài 13",
    title: "Cơ sở dữ liệu quan hệ",
    priority: "critical",
    hours: 3,
    mustKnow: [
      "Mô hình dữ liệu quan hệ (Relational Data Model)",
      "Cấu trúc CSDL quan hệ: Bảng (Table / Relation), Hàng (Row / Tuple / Record), Cột (Column / Attribute / Field)",
      "Khái niệm Khóa (Key), Khóa chính (Primary Key) và tính duy nhất của hàng",
      "Khái niệm Khóa ngoài (Foreign Key) và cơ chế liên kết giữa các bảng",
      "Các ràng buộc toàn vẹn dữ liệu: Toàn vẹn thực thể, Toàn vẹn tham chiếu, Ràng buộc miền giá trị",
      "Hiện tượng dư thừa dữ liệu và các bất thường khi Cập nhật / Thêm / Xóa (Anomalies)"
    ],
    codeSkills: [
      "Xác định khóa chính và khóa ngoài cho sơ đồ CSDL gồm 3-4 bảng",
      "Vẽ sơ đồ liên kết giữa các bảng (Entity-Relationship Diagram / Table Relationship)",
      "Kiểm tra tính hợp lệ của dữ liệu nhập vào theo quy tắc khóa chính và khóa ngoài"
    ],
    examSkills: [
      "Xác định chính xác Khóa chính, Khóa ngoài từ mô tả cấu trúc bảng trong đề thi",
      "Suy luận mối quan hệ giữa các bảng (1-1, 1-N, N-N) và cách phân rã bảng",
      "Phát hiện dữ liệu dư thừa, dữ liệu vi phạm ràng buộc toàn vẹn trong đề bài",
      "Trả lời xuất sắc cụm câu hỏi Đúng/Sai về thiết kế CSDL quan hệ trong đề thi 2026"
    ],
    practice: [
      "Bài tập thiết kế CSDL Quan hệ 3 bảng cho Quản lí Học sinh - Lớp học - Môn học",
      "12 câu bài tập xác định khóa chính / khóa ngoài trong các bảng dữ liệu thực tế",
      "1 cụm bài tập Đúng/Sai 4 ý về tính toàn vẹn tham chiếu trong CSDL quan hệ",
      "Bài tập phân tích sơ đồ CSDL Quản lí Đặt hàng (KhachHang, SanPham, HoaDon, ChiTietHoaDon)"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "nxbgd-training"],
    lectureContent: b13Content
  },
  {
    id: "b14",
    lesson: "Bài 14",
    title: "SQL - Ngôn ngữ truy vấn có cấu trúc",
    priority: "critical",
    hours: 5,
    mustKnow: [
      "Tổng quan về ngôn ngữ SQL (Structured Query Language)",
      "Cú pháp cơ bản của câu lệnh truy vấn dữ liệu: SELECT ... FROM ... WHERE ...",
      "Các biểu thức điều kiện trong WHERE: Toán tử so sánh (=, <>, >, <, >=, <=), Toán tử logic (AND, OR, NOT)",
      "Các toán tử bổ trợ: LIKE (tìm kiếm mẫu ký tự %), IN, BETWEEN ... AND ..., IS NULL",
      "Sắp xếp kết quả với ORDER BY (ASC / DESC)",
      "Làm quen với câu lệnh liên kết hai bảng INNER JOIN ... ON ...",
      "Đọc hiểu và dự đoán bảng kết quả trả về của một truy vấn SQL"
    ],
    codeSkills: [
      "Viết câu lệnh SELECT lấy danh sách cột cụ thể hoặc toàn bộ các cột (*)",
      "Viết câu lệnh lọc dữ liệu theo nhiều điều kiện kết hợp phức tạp",
      "Viết câu lệnh truy vấn liên kết 2 bảng bằng khóa chính - khóa ngoài",
      "Chạy và kiểm thử các câu lệnh SQL trên công cụ quản trị CSDL"
    ],
    examSkills: [
      "Đọc hiểu câu lệnh SQL trong đề thi và dự đoán chính xác kết quả đầu ra",
      "Lựa chọn câu lệnh SQL đúng nhất thỏa mãn yêu cầu truy vấn nghiệp vụ",
      "Phát hiện lỗi cú pháp hoặc lỗi logic điều kiện trong các phương án trắc nghiệm",
      "Giải quyết dạng bài tập viết/sửa câu lệnh SQL trong phần riêng đề thi THPT 2026"
    ],
    practice: [
      "Bộ 20 bài tập viết câu lệnh SQL từ mức độ Cơ bản đến Nâng cao",
      "10 bài tập Trace (theo dõi) kết quả câu lệnh SQL trên bảng dữ liệu giả định",
      "4 mini-case bài tập truy vấn tổng hợp: Quản lí thư viện, Quản lí điểm số, Quản lí bán hàng",
      "Bài tập phân biệt SELECT DISTINCT, ORDER BY, và lọc dữ liệu với LIKE"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "vietjack-mock2026"],
    lectureContent: b14Content
  },
  {
    id: "b15",
    lesson: "Bài 15",
    title: "Bảo mật và an toàn hệ cơ sở dữ liệu",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Các nguy cơ gây mất an toàn CSDL: Sự cố phần cứng/phần mềm, truy cập trái phép, mã độc, lỗi con người",
      "Biện pháp Phân quyền truy cập (Authorization) và Nguyên tắc quyền tối thiểu (Least Privilege)",
      "Cơ chế Xác thực người dùng (Authentication): Mật khẩu, sinh trắc học, 2FA",
      "Sao lưu dữ liệu (Backup) định kỳ và Khôi phục dữ liệu (Recovery) khi có sự cố",
      "Khái niệm Mã hóa dữ liệu (Encryption) khi lưu trữ và khi truyền trên mạng",
      "Nhận diện nguy cơ tấn công SQL Injection và biện pháp phòng ngừa"
    ],
    codeSkills: [
      "Mô phỏng phân quyền người dùng (Xem / Thêm / Sửa / Xóa) cho các nhóm tài khoản",
      "Xây dựng kịch bản sao lưu CSDL tự động theo thời gian"
    ],
    examSkills: [
      "Lựa chọn chính sách phân quyền đúng đắn cho các vai trò trong tổ chức",
      "Phân tích nguyên nhân rò rỉ / mất mát dữ liệu và đề xuất giải pháp an toàn",
      "Đánh giá rủi ro an ninh CSDL trong các câu hỏi tình huống thực tế đề thi"
    ],
    practice: [
      "Case study 1: Cấu hình phân quyền CSDL cho Hệ thống Bệnh viện (Bác sĩ, Y sĩ, Bệnh nhân)",
      "Case study 2: Lập kế hoạch sao lưu dữ liệu cho CSDL Ngân hàng / Trường học",
      "1 cụm bài tập Đúng/Sai 4 ý về chính sách an toàn và bảo mật CSDL",
      "Bài tập phân tích 3 tình huống vi phạm quy định bảo mật dữ liệu"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "kgv-focus11"],
    lectureContent: b15Content
  },
  {
    id: "b16",
    lesson: "Bài 16",
    title: "Công việc quản trị cơ sở dữ liệu",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Vai trò và trách nhiệm của Người quản trị CSDL (DBA - Database Administrator)",
      "Các nhiệm vụ thường nhật của DBA: Cài đặt, cấu hình, theo dõi hiệu năng, sao lưu, bảo trì CSDL",
      "Công việc thiết kế CSDL, tối ưu hóa câu lệnh truy vấn và xử lý sự cố (Troubleshooting)",
      "Yêu cầu về kiến thức, kỹ năng và đạo đức nghề nghiệp của một DBA",
      "Định hướng nghề nghiệp Tin học / Công nghệ thông tin liên quan đến dữ liệu (Data Engineer, Data Analyst, DBA)"
    ],
    codeSkills: [
      "Sử dụng công cụ giám sát (Monitoring tools) để kiểm tra dung lượng và hiệu năng CSDL",
      "Đọc tệp nhật ký hệ thống (System Log) để phát hiện sự cố"
    ],
    examSkills: [
      "Ghép nối đúng các nhiệm vụ thực tế với vai trò tương ứng của DBA",
      "Phân tích trách nhiệm xử lý khi xảy ra sự cố ngừng hoạt động hệ thống (Downtime)",
      "Nhận diện định hướng nghề nghiệp trong ngành CNTT qua các mô tả công việc"
    ],
    practice: [
      "Sơ đồ phân định trách nhiệm: Lập trình viên vs DBA vs Người dùng cuối",
      "8 câu trắc nghiệm tình huống về công việc quản trị CSDL",
      "Bài tập đóng vai DBA xử lí sự cố CSDL bị treo do quá tải truy vấn"
    ],
    sourceIds: ["kgv-cs11", "nxbgd-training"],
    lectureContent: b16Content
  }
]
