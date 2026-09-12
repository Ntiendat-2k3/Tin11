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
      "Lưu trữ dữ liệu khoa học: Hạn chế dư thừa dữ liệu (Data redundancy) và mâu thuẫn không nhất quán (Data inconsistency)",
      "Sự phụ thuộc giữa phần mềm và dữ liệu & Tính độc lập dữ liệu (Data independence)",
      "Khái niệm Cơ sở dữ liệu (CSDL) qua 4 mảnh ghép: Tập hợp dữ liệu có liên quan, lưu trên máy tính, phục vụ khai thác, được tổ chức có cấu trúc",
      "Sáu thuộc tính cơ bản của CSDL: Cấu trúc, Không dư thừa, Độc lập dữ liệu, Toàn vẹn, Nhất quán, Bảo mật & An toàn",
      "Phân biệt sâu sắc cặp khái niệm: Toàn vẹn (Hợp lệ) vs Nhất quán (Ăn khớp); Bảo mật (Đúng người) vs An toàn (Sao lưu dự phòng)",
      "Giải tỏa 4 hiểu lầm phổ biến: CSDL không phải Excel, không phải Google Sheets, không phải Máy chủ (Server), không phải Phần mềm"
    ],
    codeSkills: [
      "Phân tích và phát hiện các trường dữ liệu dư thừa, dữ liệu suy diễn tính toán được (Thành tiền, Tuổi, Điểm TB)",
      "Chẩn đoán các lỗi vi phạm tính toàn vẹn (giá trị vô lý, sai miền giá trị) và tính nhất quán (dữ liệu mâu thuẫn giữa các nguồn)",
      "Thiết kế ý tưởng dữ liệu có cấu trúc cho bài toán quản lý thư viện, cửa hàng, ngân hàng, rạp phim"
    ],
    examSkills: [
      "Giải quyết 5 dạng bài thi trọng tâm: Nhận diện CSDL 4 mảnh ghép, Dư thừa vs Không nhất quán, Toàn vẹn vs Nhất quán, Bảo mật vs An toàn, Bài toán tình huống thực tế",
      "Nắm vững bảng đối chiếu song song Thuật ngữ chuyên môn ↔ Cách nói đời thường",
      "Phản biện các bẫy đề thi: 'Không dư thừa là cấm giá trị trùng lặp', 'Có backup là đã bảo mật tốt'",
      "Trả lời trọn vẹn 6 câu hỏi tự vấn bắt buộc và 5 câu hỏi tự luận cốt lõi chuẩn đầu ra Bài 11"
    ],
    practice: [
      "12 bài tập tình huống thực hành phản xạ in-class (Điểm TB, Ngày sinh, Cấu trúc, Toàn vẹn, Nhất quán, Độc lập, Bảo mật, An toàn...)",
      "Bài vận dụng lớn: Xây dựng ý tưởng dữ liệu Thư viện (Sách, Bạn đọc, Mượn-Trả) soi chiếu 6 thuộc tính CSDL",
      "Bốn tình huống thực tế mở rộng: Nhà sách, Quán trà sữa, Game online, Mua hàng online",
      "Bộ 12 tình huống ngắn kiểm tra phản xạ 6 thuộc tính (Mục 148)",
      "Mini Test 8 câu trắc nghiệm tương tác chuẩn SGK kèm giải thích chi tiết",
      "Năm câu hỏi tự luận cốt lõi rèn luyện diễn đạt tư duy chuyên môn"
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
      "Khái niệm Hệ quản trị cơ sở dữ liệu (DBMS): phần mềm cung cấp môi trường tạo lập, lưu trữ, cập nhật, truy xuất và bảo vệ CSDL",
      "Phân biệt rạch ròi bộ tứ: CSDL (Dữ liệu) vs Hệ QTCSDL (Phần mềm quản trị) vs Phần mềm ứng dụng CSDL (Phần mềm người dùng) vs Hệ CSDL (Toàn bộ hệ thống)",
      "4 nhóm chức năng cốt lõi của DBMS: Định nghĩa dữ liệu (DDL), Cập nhật & truy xuất dữ liệu (DML/DQL), Bảo mật & an toàn CSDL, Cung cấp giao diện lập trình ứng dụng (API)",
      "Kiến trúc 4 tầng chuẩn mực: Người dùng ➜ Phần mềm ứng dụng CSDL ➜ Hệ QTCSDL ➜ CSDL",
      "Hệ CSDL tập trung (CSDL trên 1 máy tính) vs Hệ CSDL phân tán (Dữ liệu phân bố trên nhiều trạm qua mạng)",
      "Phân biệt phạm vi: Ứng dụng cục bộ (1 trạm) vs Ứng dụng toàn cục / phân tán (từ ít nhất 2 trạm)",
      "Phá vỡ bẫy tư duy: 'Nhiều người dùng qua mạng KHÔNG CÓ NGHĨA là CSDL phân tán' (Quyết định bởi nơi lưu CSDL)"
    ],
    codeSkills: [
      "Phân tích luồng truyền nhận dữ liệu qua 4 tầng kiến trúc của một hệ CSDL thực tế (Website tra cứu điểm thi, App bán hàng)",
      "Phân loại chính xác các thao tác quản trị nghiệp vụ vào 4 nhóm chức năng của Hệ QTCSDL",
      "Thiết kế phân định phạm vi trạm và lựa chọn mô hình CSDL Tập trung vs Phân tán phù hợp bài toán quản lý"
    ],
    examSkills: [
      "Giải quyết 5 dạng bài thi trọng tâm: Phân biệt bộ tứ khái niệm, Phân loại 4 nhóm chức năng DBMS, Sơ đồ 4 tầng, Tập trung vs Phân tán, Ứng dụng cục bộ vs Toàn cục",
      "Nhận diện và hóa giải 5 câu gài đề thi phổ biến: 'Hệ QTCSDL là website', 'Backup là chống đăng nhập lậu', 'Cập nhật chỉ là sửa'",
      "Trả lời trọn vẹn 7 câu hỏi tự vấn bắt buộc và 7 câu hỏi tự luận cốt lõi chuẩn đầu ra Bài 12"
    ],
    practice: [
      "10 bài tập tình huống thực hành phản xạ in-class (Bộ tứ khái niệm, 4 nhóm chức năng, Tập trung vs Phân tán, Cục bộ vs Toàn cục, 5 câu gài tránh bẫy)",
      "Bài vận dụng lớn: Phân tích toàn diện Hệ CSDL thư viện trường học chuẩn SGK (Mục 164–165)",
      "Bộ 15 tình huống ngắn kiểm tra phản xạ thần tốc (Mục 181)",
      "Mini Test 10 câu trắc nghiệm tương tác chuẩn SGK kèm giải thích chi tiết",
      "Bảy câu hỏi tự luận cốt lõi rèn luyện diễn đạt tư duy chuyên môn chuẩn xác"
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
      "Mô hình dữ liệu quan hệ (Relational Model) & CSDL quan hệ: Bảng + Quan hệ giữa các bảng",
      "Cấu trúc 2 chiều: Bảng (Table), Hàng = Bản ghi (Record / Tuple), Cột = Trường / Thuộc tính (Field / Attribute)",
      "Kiểu dữ liệu của trường: Số nguyên, Số thực, Xâu ký tự, Ngày tháng, Logic (tiết kiệm bộ nhớ & kiểm soát tính đúng đắn logic)",
      "Khái niệm Khóa (Key): Khóa một trường vs Khóa ghép (nhiều trường trong bảng Điểm thi)",
      "Khóa chính (Primary Key): Nhận diện chính thức duy nhất mỗi bản ghi, không trùng, NOT NULL ('Tôi là ai?')",
      "Khóa ngoài (Foreign Key): Tham chiếu tới PK bảng khác để tạo liên kết ('Tôi liên quan tới ai?', có thể lặp, bảng nhiều FK)",
      "Liên kết dữ liệu theo khóa & Ràng buộc toàn vẹn tham chiếu (ngăn chặn dữ liệu mồ côi)",
      "Hóa giải 6 câu gài đề thi: 'Có chữ Mã là khóa', 'PK luôn 1 cột', 'FK không được lặp', 'Họ tên làm khóa tốt'"
    ],
    codeSkills: [
      "Thiết kế phân rã bảng tránh dư thừa dữ liệu cho bài toán Quản lý học tập, Cửa hàng, Mạng xã hội, Game online",
      "Xác định đúng Khóa chính (đơn hoặc ghép) và các Khóa ngoài liên kết trong sơ đồ CSDL 3-4 bảng",
      "Chẩn đoán và xử lý lỗi vi phạm ràng buộc toàn vẹn tham chiếu khi nhập liệu"
    ],
    examSkills: [
      "Giải quyết 5 dạng bài thi trọng tâm: Chọn trường làm PK, Xác định FK, Phân rã bảng, Khóa ghép, Vi phạm tham chiếu",
      "Phân biệt chính xác bộ ba thuật ngữ: Bảng (Table/Relation) - Bản ghi (Record/Row/Tuple) - Trường (Field/Column/Attribute)",
      "Hóa giải các bẫy trắc nghiệm về tính duy nhất của Khóa chính và khả năng lặp lại của Khóa ngoài",
      "Trả lời xuất sắc 10 câu hỏi trắc nghiệm Mini Test và các câu hỏi tự luận chuẩn đầu ra Bài 13"
    ],
    practice: [
      "10 bài tập thực hành in-class (Đếm bản ghi & trường, chọn PK, truy tìm nhạc sĩ CSDL âm nhạc, phân biệt PK/FK, khóa ghép...)",
      "Bài vận dụng lớn: Thiết kế CSDL Kì thi tốt nghiệp THPT quốc gia 4 bảng (THISINH, PHONGTHI, MONTHI, KETQUA)",
      "Bộ 10 câu hỏi phản xạ nhanh thuật ngữ CSDL quan hệ trong 3 giây",
      "Mini Test 10 câu trắc nghiệm tương tác chuẩn SGK kèm giải thích chi tiết",
      "Ba bài tập về nhà có lời giải chi tiết bảo vệ bằng mã khóa"
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
      "Bản chất ngôn ngữ SQL: Ngôn ngữ truy vấn có cấu trúc mang tính Khai báo (Declarative: chỉ định 'muốn dữ liệu gì' thay vì 'làm thế nào')",
      "Ba nhóm ngôn ngữ cấu thành: DDL (Định nghĩa - CREATE, ALTER), DML (Thao tác - SELECT, INSERT, UPDATE, DELETE, JOIN), DCL (Kiểm soát quyền - GRANT, REVOKE)",
      "Cú pháp DDL: CREATE DATABASE, CREATE TABLE, khai báo PRIMARY KEY (đơn & ghép), FOREIGN KEY ... REFERENCES, ALTER TABLE",
      "Kiểu dữ liệu SQL: Phân biệt CHAR(n) (độ dài cố định) vs VARCHAR(n) (độ dài thay đổi tối đa n), INT, REAL, DATE, BOOLEAN",
      "Cú pháp truy vấn DML: SELECT ... FROM ... WHERE ... ORDER BY (ASC / DESC)",
      "Các toán tử điều kiện trong WHERE: So sánh (=, <>, >, <, >=, <=), Logic (AND, OR), quy tắc đặt xâu ký tự trong dấu nháy đơn ('...')",
      "Bộ ba cập nhật: INSERT INTO ... VALUES, UPDATE ... SET ... WHERE, DELETE FROM ... WHERE",
      "Cảnh báo khẩn cấp: Thảm họa mất sạch dữ liệu hoặc sai lệch toàn bộ bảng khi UPDATE / DELETE thiếu mệnh đề WHERE",
      "Liên kết bảng với INNER JOIN ... ON ... và cú pháp TenBang.TenCot để tránh mơ hồ",
      "Hàm tính trung bình AVG() và ý tưởng các hàm tổng hợp COUNT, SUM, MIN, MAX",
      "Phân biệt các cặp lệnh dễ nhầm: CREATE vs INSERT; ALTER vs UPDATE; DELETE vs DROP"
    ],
    codeSkills: [
      "Viết câu lệnh CREATE TABLE tạo bảng đầy đủ Khóa chính và Khóa ngoài tham chiếu",
      "Áp dụng quy trình 5 bước viết câu lệnh SELECT lọc dữ liệu theo nhiều điều kiện và sắp xếp",
      "Viết câu lệnh truy vấn liên kết 2 bảng và 3 bảng với INNER JOIN ... ON",
      "Viết câu lệnh thêm mới, sửa đổi và xóa dữ liệu an toàn có kiểm soát điều kiện WHERE",
      "Phát hiện và sửa 6 lỗi cú pháp SQL kinh điển (thiếu nháy đơn, thiếu SET, DELETE TABLE, JOIN sai cột...)"
    ],
    examSkills: [
      "Giải quyết 5 dạng bài thi trọng tâm: Phân loại DDL/DML/DCL, Dự đoán kết quả SELECT, Bẫy WHERE, Tạo bảng PK/FK, Truy vấn INNER JOIN",
      "Đọc hiểu và dự đoán chính xác bảng kết quả truy vấn SQL trong đề thi THPT 2026",
      "Phát hiện các lỗi cú pháp hoặc bẫy điều kiện logic trong các phương án trắc nghiệm",
      "Trả lời xuất sắc 10 câu hỏi Mini Test và 4 câu hỏi tự luận cốt lõi về bản chất SQL"
    ],
    practice: [
      "10 bài tập thực hành in-class (SELECT đơn giản, AND & ORDER BY, cập nhật DML, tạo bảng casi & banthuam, INNER JOIN 2-3 bảng...)",
      "Bài tập viết trọn bộ SQL cho hệ thống Quản lý Bán hàng (SANPHAM)",
      "Bộ 10 câu hỏi phản xạ phân loại DDL / DML / DCL trong 3 giây",
      "Mini Test 10 câu trắc nghiệm tương tác chuẩn SGK kèm giải thích chi tiết",
      "Ba bài tập về nhà thực hành viết code và tự luận tư duy bản chất SQL"
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
