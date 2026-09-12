/**
 * Dữ liệu bài giảng Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: khoảng 100 phút)
 * Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu
 * Định hướng: Kiến thức cốt lõi chung (Khoa học máy tính CS & Tin học ứng dụng ICT)
 * Biên soạn bám sát 121 mục giáo trình chi tiết từ tài liệu chuẩn
 */

export const b14Content = {
  warmUp: {
    question: "Làm thế nào để con người có thể 'ra lệnh' trực tiếp cho Hệ quản trị CSDL: Tạo bảng mới, thêm hồ sơ, tìm kiếm bạn điểm cao nhất hay xóa dữ liệu nhập nhầm?",
    description: "Tình huống thực tế: Ở Bài 13, ta đã thiết kế các bảng dữ liệu trên giấy (Bảng, Hàng, Cột, Khóa chính, Khóa ngoài). Nhưng làm sao để máy tính hiểu và thực hiện những điều đó? Trong lập trình truyền thống (như Python hay C++), ta phải viết hàng chục dòng code phức tạp: mở tệp, duyệt từng dòng bằng vòng lặp for, so sánh bằng lệnh if, rồi in kết quả. Ngành CSDL đã phát minh ra một ngôn ngữ kỳ diệu: SQL (Structured Query Language). Thay vì chỉ cho máy tính 'làm như thế nào', ta chỉ cần nói 'TÔI MUỐN LẤY DỮ LIỆU GÌ' bằng những câu tiếng Anh gần gũi như: SELECT HoTen FROM HocSinh WHERE Lop = '11A1' — và Hệ QTCSDL sẽ tự động làm hết mọi việc phía sau!",
    roles: [
      { role: "Người dùng / Lập trình viên", action: "Viết câu lệnh SQL mô tả dữ liệu mình muốn (ví dụ: lấy tên các bạn đạt điểm 10)" },
      { role: "Hệ QTCSDL (DBMS)", action: "Đọc hiểu câu lệnh SQL, tự tìm giải thuật tối ưu truy cập đĩa và xuất kết quả" },
      { role: "Nhóm lệnh DDL (Định nghĩa)", action: "CREATE, ALTER: Xây dựng và tinh chỉnh 'cái khung' cấu trúc các bảng" },
      { role: "Nhóm lệnh DML (Thao tác)", action: "SELECT, INSERT, UPDATE, DELETE: Đọc, thêm, sửa, xóa các dòng dữ liệu cụ thể" },
      { role: "Nhóm lệnh DCL (Kiểm soát)", action: "GRANT, REVOKE: Cấp và thu hồi quyền truy cập bảo mật cho người dùng" }
    ]
  },

  sections: [
    {
      id: "sec-1",
      title: "1–10. Tổng Quan Về SQL & Ba Thành Phần DDL – DML – DCL",
      subsections: [
        {
          heading: "1. Mạch nối tiếp tự nhiên từ Bài 13 sang Bài 14",
          points: [
            "Bài 13 đã cho ta mô hình lý thuyết: Bảng, Hàng (Bản ghi), Cột (Trường/Thuộc tính), Kiểu dữ liệu, Khóa chính (PK), Khóa ngoài (FK) và Liên kết dữ liệu.",
            "Bài 14 đặt câu hỏi thực tế sống còn: 'Làm thế nào để nói chuyện và ra lệnh cho Hệ QTCSDL thực sự thi hành các công việc đó?'",
            "Câu trả lời chuẩn mực của nhân loại: NGÔN NGỮ SQL (Structured Query Language)."
          ]
        },
        {
          heading: "2. SQL là gì? Bản chất ngôn ngữ Khai báo (Declarative)",
          points: [
            "Định nghĩa: SQL (viết tắt của Structured Query Language – Ngôn ngữ truy vấn có cấu trúc) là ngôn ngữ chuẩn dùng để giao tiếp, định nghĩa, thao tác và kiểm soát dữ liệu trong các hệ CSDL quan hệ.",
            "Cách nói đời thường: 'SQL là ngôn ngữ dùng để nói chuyện với Hệ quản trị CSDL quan hệ.'",
            "Đặc điểm đột phá: SQL là ngôn ngữ mang tính KHAI BÁO (Declarative). Người dùng chỉ cần chỉ ra 'TÔI MUỐN DỮ LIỆU GÌ' (What), còn Hệ QTCSDL tự đảm nhận tính toán cách thức truy xuất tối ưu nhất (How).",
            "Ví dụ đời thường so sánh: 'Khi đi ăn nhà hàng, ta chỉ cần gọi món mình muốn ăn với bồi bàn, chứ không phải xuống bếp hướng dẫn đầu bếp từng bước nấu món ăn!'"
          ]
        },
        {
          heading: "3. Ba thành phần lớn của SQL trong SGK: DDL – DML – DCL",
          text: "Toàn bộ hệ thống câu lệnh SQL được phân chia thành 3 nhóm chức năng cốt lõi:",
          points: [
            "1. DDL (Data Definition Language – Ngôn ngữ định nghĩa dữ liệu):\n• Dùng để: Tạo CSDL, tạo cấu trúc bảng, sửa đổi cấu trúc bảng, khai báo khóa chính, khóa ngoài.\n• Mẹo nhớ: DEFINE ➜ Tạo 'cái khung' chứa đồ.",
            "2. DML (Data Manipulation Language – Ngôn ngữ thao tác dữ liệu):\n• Dùng để: Thêm mới (INSERT), sửa đổi (UPDATE), xóa (DELETE) và truy xuất/tìm kiếm (SELECT), liên kết bảng (JOIN).\n• Mẹo nhớ: MANIPULATE ➜ Thao tác các dòng dữ liệu bên trong khung.",
            "3. DCL (Data Control Language – Ngôn ngữ kiểm soát dữ liệu):\n• Dùng để: Cấp quyền (GRANT) và thu hồi quyền (REVOKE) truy cập CSDL của người dùng.\n• Mẹo nhớ: CONTROL ➜ Kiểm soát an ninh, đúng người đúng quyền."
          ]
        },
        {
          heading: "4. CSDL Âm nhạc chuẩn xuyên suốt bài học",
          points: [
            "Bài học tiếp tục sử dụng CSDL Âm nhạc gồm 4 bảng đã học ở Bài 13 làm thực hành:",
            "• NHACSI (Aid, TenNS): Aid là Khóa chính.",
            "• CASI (Sid, TenCS): Sid là Khóa chính.",
            "• BANNHAC (Mid, Aid, TenBN): Mid là Khóa chính; Aid là Khóa ngoài tham chiếu tới NHACSI.Aid.",
            "• BANTHUAM (Mid, Sid): Cặp (Mid, Sid) là Khóa chính ghép; Mid là Khóa ngoài trỏ tới BANNHAC.Mid; Sid là Khóa ngoài trỏ tới CASI.Sid."
          ]
        }
      ],
      calloutBox: {
        type: "tip",
        title: "Khung phân bổ 100 phút chuẩn của buổi học",
        text: "0–10 phút: SQL là gì? Khai báo vs Lập trình thủ tục | 10–30 phút: DDL (CREATE DATABASE/TABLE, kiểu dữ liệu) | 30–42 phút: PRIMARY KEY & FOREIGN KEY | 42–68 phút: DML (SELECT, WHERE, ORDER BY, INSERT, UPDATE, DELETE) | 68–82 phút: Liên kết bảng bằng INNER JOIN | 82–90 phút: Hàm AVG và ý tưởng hàm tổng hợp | 90–96 phút: DCL (GRANT, REVOKE) | 96–100 phút: Mini Test 10 câu + Chốt bài."
      },
      comparisonTable: {
        headers: ["Nhóm lệnh SQL", "Tên tiếng Anh đầy đủ", "Ý nghĩa đời thường", "Các câu lệnh tiêu biểu trong SGK"],
        rows: [
          ["DDL", "Data Definition Language", "Tạo 'cái khung' cấu trúc", "CREATE DATABASE, CREATE TABLE, ALTER TABLE, PRIMARY KEY, FOREIGN KEY"],
          ["DML", "Data Manipulation Language", "Thao tác dữ liệu bản ghi", "SELECT, INSERT INTO, UPDATE ... SET, DELETE FROM, INNER JOIN, AVG"],
          ["DCL", "Data Control Language", "Kiểm soát quyền bảo mật", "GRANT (cấp quyền), REVOKE (thu hồi quyền)"]
        ]
      }
    },

    {
      id: "sec-2",
      title: "11–19. DDL: Tạo CSDL, Tạo Bảng & Các Kiểu Dữ Liệu",
      subsections: [
        {
          heading: "1. Lệnh tạo Cơ sở dữ liệu: CREATE DATABASE",
          text: "Để bắt đầu, ta cần tạo một vùng CSDL mới trên Hệ QTCSDL:",
          points: [
            "Cú pháp: CREATE DATABASE TenCSDL;",
            "Ví dụ tạo CSDL âm nhạc: CREATE DATABASE music;",
            "Đọc bằng lời tiếng Việt: 'Tạo cơ sở dữ liệu có tên là music'.",
            "Quy tắc cú pháp: Trong SQL, dấu chấm phẩy (;) được đặt ở cuối mỗi câu lệnh để báo hiệu kết thúc lệnh."
          ]
        },
        {
          heading: "2. Cấu trúc câu lệnh tạo bảng: CREATE TABLE",
          text: "Mẫu cú pháp tổng quát:",
          points: [
            "CREATE TABLE TenBang (\n    TenTruong1 KieuDuLieu,\n    TenTruong2 KieuDuLieu,\n    ...\n);",
            "Mỗi dòng định nghĩa gồm: [Tên trường] + [Khoảng trắng] + [Kiểu dữ liệu], phân tách nhau bởi dấu phẩy (,).",
            "Ví dụ tạo bảng nhacsi:\nCREATE TABLE nhacsi (\n    Aid INT,\n    TenNS VARCHAR(100)\n);",
            "Đọc bằng lời: 'Tạo bảng nhacsi gồm cột Aid kiểu số nguyên (INT) và cột TenNS kiểu chuỗi ký tự dài tối đa 100 (VARCHAR(100))'."
          ]
        },
        {
          heading: "3. Các kiểu dữ liệu SGK giới thiệu & Phân biệt CHAR vs VARCHAR",
          points: [
            "INT / INTEGER: Số nguyên (dùng cho mã số tự tăng, số lượng, năm sinh).",
            "REAL / FLOAT: Số thực (dùng cho điểm số, giá tiền lẻ, tỉ lệ phần trăm).",
            "BOOLEAN: Giá trị logic (Đúng/Sai, True/False, Nam/Nữ, Đã nộp/Chưa nộp).",
            "DATE: Ngày tháng năm (định dạng chuẩn YYYY-MM-DD, ví dụ: '2009-03-12').",
            "TIME: Giờ phút giây (định dạng HH:MM:SS, ví dụ: '08:30:00').",
            "PHÂN BIỆT RẠCH RÒI GIỮA CHAR(n) VÀ VARCHAR(n):\n• CHAR(n): Chuỗi có ĐỘ DÀI CỐ ĐỊNH đúng n ký tự. Thích hợp cho các mã chuẩn hóa luôn bằng nhau (Ví dụ: Mã bản nhạc Mid luôn có 4 ký tự '0001', '0002' ➜ Dùng CHAR(4); Mã căn cước CCCD 12 số ➜ Dùng CHAR(12)).\n• VARCHAR(n): Chuỗi có ĐỘ DÀI THAY ĐỔI, tối đa n ký tự. Máy tính chỉ lưu đúng số ký tự thực tế nhập vào (Ví dụ: Họ tên người 'An' dài 2 ký tự, 'Nguyễn Văn Minh' dài 14 ký tự ➜ Dùng VARCHAR(100) để tiết kiệm dung lượng lưu trữ)."
          ]
        },
        {
          heading: "4. Ví dụ tạo bảng BANNHAC và CASI",
          points: [
            "Tạo bảng bannhac:\nCREATE TABLE bannhac (\n    Mid CHAR(4),\n    Aid INT,\n    TenBN VARCHAR(100)\n);",
            "Tạo bảng casi:\nCREATE TABLE casi (\n    Sid VARCHAR(10),\n    TenCS VARCHAR(100)\n);"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Kiểu dữ liệu SQL", "Ý nghĩa bản chất", "Đặc điểm lưu trữ", "Ví dụ áp dụng trong thực tế"],
        rows: [
          ["CHAR(n)", "Xâu ký tự độ dài cố định n", "Luôn chiếm đúng n ký tự (nếu thiếu sẽ tự đệm khoảng trắng)", "CHAR(4) cho Mid: '0001', '0002'; CHAR(12) cho CCCD"],
          ["VARCHAR(n)", "Xâu ký tự độ dài thay đổi tối đa n", "Chỉ chiếm đúng độ dài thực tế của xâu nhập vào", "VARCHAR(100) cho TenNS, HoTen, TenBN"],
          ["INT / INTEGER", "Số nguyên", "Lưu trữ số nguyên không có phần thập phân", "INT cho Aid (1, 2, 3), NamSinh (2009)"],
          ["REAL / FLOAT", "Số thực", "Lưu số có dấu phẩy thập phân", "REAL cho Diem (8.5), DonGia (250000.5)"],
          ["DATE", "Ngày tháng năm", "Lưu theo định dạng chuẩn quốc tế 'YYYY-MM-DD'", "DATE cho NgaySinh ('2009-03-12')"],
          ["BOOLEAN", "Giá trị logic Đúng / Sai", "Nhận giá trị TRUE (1) hoặc FALSE (0)", "BOOLEAN cho GioiTinh (1: Nam, 0: Nữ)"]
        ]
      }
    },

    {
      id: "sec-3",
      title: "20–28. DDL: Khai Báo Khóa Chính, Khóa Ngoài & Lệnh ALTER TABLE",
      subsections: [
        {
          heading: "1. Khai báo Khóa chính (PRIMARY KEY) trong CREATE TABLE",
          text: "Có hai cách khai báo Khóa chính khi tạo bảng:",
          points: [
            "CÁCH 1: Khai báo trực tiếp ngay sau tên trường (dành cho khóa 1 cột):\nCREATE TABLE nhacsi (\n    Aid INT PRIMARY KEY,\n    TenNS VARCHAR(100)\n);",
            "CÁCH 2: Khai báo ở dòng riêng biệt cuối bảng (áp dụng cho cả khóa đơn và khóa ghép):\nCREATE TABLE bannhac (\n    Mid CHAR(4),\n    Aid INT,\n    TenBN VARCHAR(100),\n    PRIMARY KEY (Mid)\n);",
            "Cả hai cách đều chỉ định rõ ràng cho Hệ QTCSDL biết Mid hoặc Aid là Khóa chính duy nhất của bảng."
          ]
        },
        {
          heading: "2. Lệnh sửa đổi cấu trúc bảng: ALTER TABLE",
          points: [
            "Nếu bảng đã được tạo trước đó nhưng ta quên chưa đặt Khóa chính, ta dùng lệnh ALTER TABLE:",
            "Cú pháp: ALTER TABLE TenBang ADD PRIMARY KEY (TenCot);",
            "Ví dụ bổ sung PK cho bannhac:\nALTER TABLE bannhac\nADD PRIMARY KEY (Mid);",
            "Ý nghĩa: Lệnh ALTER TABLE dùng để thay đổi cấu trúc/khung định nghĩa của bảng đã tồn tại (thêm cột, sửa kiểu dữ liệu, bổ sung khóa)."
          ]
        },
        {
          heading: "3. Khai báo Khóa ngoài (FOREIGN KEY ... REFERENCES)",
          points: [
            "Cú pháp khai báo khóa ngoài chuẩn SGK:\nFOREIGN KEY (TenCotKhoaNgoai) REFERENCES BangGoc(TenCotKhoaChinh)",
            "Ví dụ tạo bảng bannhac đầy đủ cả Khóa chính và Khóa ngoài:\nCREATE TABLE bannhac (\n    Mid CHAR(4),\n    Aid INT,\n    TenBN VARCHAR(100),\n    PRIMARY KEY (Mid),\n    FOREIGN KEY (Aid) REFERENCES nhacsi(Aid)\n);",
            "Đọc bằng lời: 'Mid là khóa chính; Aid là khóa ngoài tham chiếu tới trường Aid trong bảng nhacsi'."
          ]
        },
        {
          heading: "4. Tạo bảng BANTHUAM – Ví dụ hoàn hảo về Khóa ghép & Hai Khóa ngoài",
          points: [
            "Câu lệnh SQL tạo bảng banthuam chuẩn mực:\nCREATE TABLE banthuam (\n    Mid CHAR(4),\n    Sid VARCHAR(10),\n    PRIMARY KEY (Mid, Sid),\n    FOREIGN KEY (Mid) REFERENCES bannhac(Mid),\n    FOREIGN KEY (Sid) REFERENCES casi(Sid)\n);",
            "Phân tích chuyên môn cực hay:\n• PRIMARY KEY (Mid, Sid): Khóa chính ghép từ 2 trường vì 1 bản nhạc có thể nhiều ca sĩ hát (Mid lặp) và 1 ca sĩ có thể hát nhiều bản nhạc (Sid lặp).\n• FOREIGN KEY (Mid) REFERENCES bannhac(Mid): Ràng buộc bản nhạc thu âm phải tồn tại thực tế trong bảng bannhac.\n• FOREIGN KEY (Sid) REFERENCES casi(Sid): Ràng buộc ca sĩ thể hiện phải có trong danh sách bảng casi."
          ]
        }
      ],
      calloutBox: {
        type: "warning",
        title: "Câu hỏi thi rất dễ gài: Phân biệt ALTER TABLE vs UPDATE",
        text: "• ALTER TABLE là lệnh thuộc nhóm DDL ➜ Dùng để thay đổi CẤU TRÚC / CÁI KHUNG của bảng (Ví dụ: Thêm cột mới Email, thêm Khóa chính).\n• UPDATE là lệnh thuộc nhóm DML ➜ Dùng để thay đổi NỘI DUNG DỮ LIỆU trong các dòng bản ghi cụ thể (Ví dụ: Đổi tên nhạc sĩ từ 'Văn Cao' thành 'Nhạc sĩ Văn Cao')."
      }
    },

    {
      id: "sec-4",
      title: "29–41. DML: Truy Xuất Dữ Liệu Với SELECT, WHERE & ORDER BY",
      subsections: [
        {
          heading: "1. Cú pháp cơ bản câu lệnh SELECT – Trọng tâm số 1 của SQL",
          text: "SELECT là câu lệnh được sử dụng nhiều nhất trong toàn bộ thế giới CSDL:",
          points: [
            "Cú pháp chuẩn: SELECT <danh sách cột cần lấy> FROM <tên bảng>;",
            "Ví dụ 1 (Lấy 1 cột): SELECT TenNS FROM nhacsi; ➜ Lấy danh sách toàn bộ tên nhạc sĩ.",
            "Ví dụ 2 (Lấy nhiều cột): SELECT Mid, TenBN FROM bannhac; ➜ Kết quả hiển thị bảng gồm 2 cột Mid và TenBN.",
            "Ví dụ 3 (Lấy tất cả các cột): SELECT * FROM nhacsi; ➜ Ký tự dấu sao (*) đại diện cho 'TẤT CẢ CÁC CỘT' có trong bảng."
          ]
        },
        {
          heading: "2. Mệnh đề WHERE – Lọc các dòng thỏa mãn điều kiện",
          points: [
            "Câu hỏi thực tế: 'Làm sao chỉ lấy các bản nhạc do nhạc sĩ có Aid = 2 sáng tác?'",
            "Câu lệnh SQL:\nSELECT Mid, TenBN\nFROM bannhac\nWHERE Aid = 2;",
            "Đọc bằng lời tiếng Việt:\n• SELECT Mid, TenBN: Tôi muốn xem 2 cột Mid và TenBN.\n• FROM bannhac: Dữ liệu nằm trong bảng bannhac.\n• WHERE Aid = 2: Chỉ giữ lại những dòng có Aid bằng 2.",
            "Khẩu quyết phân biệt SELECT vs WHERE:\n• SELECT = Chọn CỘT nào hiển thị (chiều DỌC).\n• WHERE = Lọc DÒNG nào thỏa mãn điều kiện (chiều NGANG)."
          ]
        },
        {
          heading: "3. Các quy tắc quan trọng khi viết điều kiện trong WHERE",
          points: [
            "QUY TẮC NHÁY ĐƠN VỚI XÂU KÝ TỰ:\n• Nếu so sánh trường kiểu chữ/xâu hoặc ngày tháng, giá trị BẮT BUỘC PHẢI ĐẶT TRONG CẶP NHÁY ĐƠN ('...').\n• Ví dụ ĐÚNG: WHERE Lop = '11A1';\n• Ví dụ SAI: WHERE Lop = 11A1; (Hệ thống sẽ báo lỗi không tìm thấy cột 11A1!).",
            "CÁC TOÁN TỬ SO SÁNH SỐ HỌC:\n• = (bằng), > (lớn hơn), < (nhỏ hơn), >= (lớn hơn hoặc bằng), <= (nhỏ hơn hoặc bằng), <> hoặc != (khác nhau).\n• Ví dụ: WHERE DiemTin >= 8.0;",
            "KẾT HỢP ĐIỀU KIỆN VỚI AND VÀ OR:\n• AND: Cả hai điều kiện đều phải cùng ĐÚNG (Ví dụ: WHERE Lop = '11A1' AND DiemTin >= 8.0;).\n• OR: Chỉ cần ít nhất một điều kiện ĐÚNG (Ví dụ: WHERE Lop = '11A1' OR Lop = '11A2';)."
          ]
        },
        {
          heading: "4. Mệnh đề sắp xếp: ORDER BY (ASC / DESC)",
          points: [
            "Muốn sắp xếp kết quả hiển thị theo một hoặc nhiều cột, ta dùng mệnh đề ORDER BY ở cuối câu lệnh:",
            "Mặc định (ASC – Ascending): Sắp xếp TĂNG DẦN (từ nhỏ đến lớn, hoặc A ➜ Z).\nSELECT Mid, TenBN FROM bannhac ORDER BY TenBN; (hoặc ghi rõ ORDER BY TenBN ASC;)",
            "Giảm dần (DESC – Descending): Sắp xếp GIẢM DẦN (từ lớn về nhỏ, hoặc Z ➜ A).\nSELECT HoTen, DiemTin FROM hocsinh ORDER BY DiemTin DESC; ➜ Danh sách học sinh điểm cao nhất xếp trước!",
            "Kết hợp hoàn hảo SELECT + FROM + WHERE + ORDER BY:\nSELECT Mid, TenBN\nFROM bannhac\nWHERE Aid = 2\nORDER BY TenBN ASC;\n(Lấy bài hát của nhạc sĩ số 2, sắp xếp theo thứ tự chữ cái tên bài hát)."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Quy trình 5 bước thần tốc viết câu lệnh SELECT",
        text: "Khi gặp yêu cầu đề bài bằng tiếng Việt, hãy làm đúng 5 bước:\n1. Lấy gì? ➜ Viết sau SELECT (Danh sách cột)\n2. Từ đâu? ➜ Viết sau FROM (Tên bảng)\n3. Điều kiện gì? ➜ Viết sau WHERE (Biểu thức logic lọc dòng)\n4. Sắp xếp thế nào? ➜ Viết sau ORDER BY (Cột + ASC/DESC)\n5. Đặt dấu chấm phẩy (;) kết thúc và đọc lại bằng lời để kiểm tra!"
      }
    },

    {
      id: "sec-5",
      title: "42–49 & 96–99. DML: Bộ Ba Cập Nhật Dữ Liệu INSERT – UPDATE – DELETE",
      subsections: [
        {
          heading: "1. Lệnh thêm dòng mới: INSERT INTO",
          text: "Dùng để chèn thêm một hoặc nhiều bản ghi mới vào bảng dữ liệu:",
          points: [
            "Cú pháp chuẩn mực và an toàn nhất:\nINSERT INTO TenBang (Cot1, Cot2, ...)\nVALUES (GiaTri1, GiaTri2, ...);",
            "Ví dụ thêm nhạc sĩ mới:\nINSERT INTO nhacsi (Aid, TenNS)\nVALUES (5, 'Phạm Tuyên');",
            "Vì sao luôn nên ghi rõ danh sách cột? ➜ Giúp ta kiểm soát chính xác giá trị nào chui vào cột nào, tránh bị lệch thứ tự khi bảng có nhiều cột.",
            "Thêm nhiều dòng cùng lúc (Multi-row Insert):\nINSERT INTO casi (Sid, TenCS)\nVALUES\n    ('TK2', 'Nguyễn Trung Kiên'),\n    ('QD', 'Quý Dương'),\n    ('YM', 'Y Moan');"
          ]
        },
        {
          heading: "2. Lệnh sửa dữ liệu bản ghi: UPDATE ... SET ... WHERE",
          text: "Dùng để sửa đổi giá trị trong các dòng dữ liệu đã tồn tại:",
          points: [
            "Cú pháp: UPDATE TenBang SET TenCot = GiaTriMoi WHERE DieuKien;",
            "Ví dụ: Khi học sinh có mã 'HS05' chuyển từ lớp 11A2 sang lớp 11A1:\nUPDATE hocsinh\nSET Lop = '11A1'\nWHERE MaHS = 'HS05';",
            "Đọc bằng lời: 'Cập nhật bảng hocsinh, gán cột Lop thành 11A1 chỉ cho dòng có MaHS bằng HS05'."
          ]
        },
        {
          heading: "3. Lệnh xóa dòng bản ghi: DELETE FROM ... WHERE",
          text: "Dùng để xóa bỏ các bản ghi không còn cần thiết khỏi bảng:",
          points: [
            "Cú pháp: DELETE FROM TenBang WHERE DieuKien;",
            "Ví dụ: Xóa bản nhạc có mã '0005':\nDELETE FROM bannhac\nWHERE Mid = '0005';",
            "Đọc bằng lời: 'Xóa khỏi bảng bannhac dòng có Mid bằng 0005'."
          ]
        },
        {
          heading: "4. Phân biệt các cặp lệnh kinh điển hay bị nhầm lẫn trong đề thi",
          points: [
            "CẶP 1: CREATE vs INSERT:\n• CREATE TABLE: Tạo cái tủ rỗng (định nghĩa cấu trúc bảng).\n• INSERT INTO: Bỏ hồ sơ vào tủ (thêm dữ liệu cụ thể vào bảng).",
            "CẶP 2: ALTER vs UPDATE:\n• ALTER TABLE: Đóng thêm ngăn kéo cho cái tủ (sửa cấu trúc, thêm cột mới).\n• UPDATE ... SET: Rút giấy tờ ra viết đè chữ mới lên (sửa giá trị dữ liệu bên trong).",
            "CẶP 3: DELETE vs DROP:\n• DELETE FROM: Dọn rác, vứt các tờ giấy hồ sơ ra khỏi tủ (bảng vẫn còn nguyên vẹn).\n• DROP TABLE: Đập nát và vứt luôn cả chiếc tủ vào thùng rác (xóa sổ vĩnh viễn cả bảng lẫn dữ liệu)!"
          ]
        }
      ],
      calloutBox: {
        type: "warning",
        title: "CẢNH BÁO TỐI KHẨN CẤP VỀ LỆNH UPDATE VÀ DELETE",
        text: "Mỗi khi gõ lệnh UPDATE hoặc DELETE, hãy luôn tự hỏi: 'MỆNH ĐỀ WHERE CỦA MÌNH ĐÂU?'.\n• Nếu gõ: DELETE FROM hocsinh; (Không có WHERE) ➜ Hệ QTCSDL sẽ XÓA SẠCH TOÀN BỘ TẤT CẢ CÁC HỌC SINH trong trường!\n• Nếu gõ: UPDATE hocsinh SET Lop = '11A1'; (Không có WHERE) ➜ TOÀN BỘ 2.000 HỌC SINH của trường sẽ bị đổi tên thành lớp 11A1!"
      }
    },

    {
      id: "sec-6",
      title: "50–65. DML & DCL: Liên Kết Bảng Bằng JOIN, Hàm AVG & Quyền DCL",
      subsections: [
        {
          heading: "1. Liên kết bảng trong SQL: Mệnh đề INNER JOIN",
          text: "Ở Bài 13 ta biết BANNHAC.Aid nối với NHACSI.Aid. Bài 14 dùng SQL để ghép nối thực sự:",
          points: [
            "Cú pháp ghép 2 bảng:\nSELECT bannhac.TenBN, nhacsi.TenNS\nFROM bannhac\nINNER JOIN nhacsi\n    ON bannhac.Aid = nhacsi.Aid;",
            "Đọc bằng lời: 'Lấy tên bản nhạc và tên nhạc sĩ. Nối bảng bannhac với nhacsi theo điều kiện Aid của bannhac bằng Aid của nhacsi'.",
            "Vì sao phải viết TenBang.TenCot (ví dụ bannhac.Aid)? ➜ Khi hai bảng cùng có cột trùng tên là Aid, viết tên bảng phía trước giúp máy tính không bị nhập nhằng mơ hồ!",
            "Cú pháp ghép 3 bảng (SGK): Lấy Mã bài, Mã ca sĩ, Tên bài hát và Tên ca sĩ:\nSELECT banthuam.Mid, banthuam.Sid, bannhac.TenBN, casi.TenCS\nFROM banthuam\nINNER JOIN bannhac ON banthuam.Mid = bannhac.Mid\nINNER JOIN casi ON banthuam.Sid = casi.Sid;"
          ]
        },
        {
          heading: "2. Hàm tính giá trị trung bình: AVG & Khái niệm Hàm tổng hợp",
          points: [
            "SGK minh họa hàm tính trung bình điểm thi:\nSELECT AVG(tb)\nFROM diemtoan_11A;",
            "Ý nghĩa: Hàm AVG tính giá trị trung bình cộng của toàn bộ các số có trong cột tb.",
            "Mở rộng nhẹ các hàm tổng hợp thường gặp trong SQL: COUNT (đếm số dòng), SUM (tính tổng cộng), MIN (tìm giá trị nhỏ nhất), MAX (tìm giá trị lớn nhất).",
            "Ví dụ đếm số lượng học sinh: SELECT COUNT(*) FROM hocsinh;"
          ]
        },
        {
          heading: "3. Nhóm lệnh DCL: Kiểm soát quyền bảo mật (GRANT & REVOKE)",
          points: [
            "Lệnh cấp quyền (GRANT): Cấp quyền cho một tài khoản người dùng được phép thực hiện thao tác trên CSDL.\nCú pháp SGK: GRANT SELECT ON music.* TO guest;\n(Cho phép tài khoản 'guest' được quyền xem dữ liệu (SELECT) trên tất cả các bảng của CSDL music).",
            "Lệnh thu hồi quyền (REVOKE): Tước lại quyền đã cấp khi không còn phù hợp.\nCú pháp SGK: REVOKE DELETE ON music.nhacsi FROM mod;\n(Tước bỏ quyền xóa dữ liệu (DELETE) trên bảng nhacsi của tài khoản 'mod').",
            "Các quyền thao tác phổ biến: SELECT (xem), INSERT (thêm), UPDATE (sửa), DELETE (xóa), CREATE (tạo mới)."
          ]
        }
      ],
      flowList: [
        {
          title: "Quy trình thực thi trực quan câu lệnh INNER JOIN",
          subtitle: "Cách Hệ QTCSDL ghép nối thông tin từ 2 bảng khác nhau dựa trên khóa liên kết",
          steps: [
            {
              num: "1",
              title: "Quét bảng gốc",
              desc: "Hệ QTCSDL đọc từng dòng trong bảng bannhac, ví dụ dòng 'Xa khơi' có trường Aid = 4."
            },
            {
              num: "2",
              title: "So khớp khóa (ON)",
              desc: "Hệ thống đối chiếu sang bảng nhacsi để tìm dòng có Aid = 4 (nhạc sĩ Nguyễn Tài Tuệ)."
            },
            {
              num: "3",
              title: "Trích xuất kết quả",
              desc: "Ghép TenBN ('Xa khơi') cùng TenNS ('Nguyễn Tài Tuệ') thành một dòng kết quả hoàn chỉnh hiển thị lên màn hình."
            }
          ]
        }
      ]
    },

    {
      id: "sec-7",
      title: "66–85 & 100–105. Tổng Kết Toàn Bài, Các Lỗi Thường Gặp & Sơ Đồ Tư Duy",
      subsections: [
        {
          heading: "1. Bảng tra cứu toàn bộ 15 lệnh SQL cốt lõi cần thuộc",
          points: [
            "DDL: CREATE DATABASE (tạo CSDL), CREATE TABLE (tạo bảng), ALTER TABLE (sửa cấu trúc), PRIMARY KEY (khóa chính), FOREIGN KEY ... REFERENCES (khóa ngoài).",
            "DML: SELECT (chọn cột), FROM (chọn bảng), WHERE (lọc hàng), ORDER BY (sắp xếp), INNER JOIN ... ON (nối bảng), INSERT INTO ... VALUES (thêm dòng), UPDATE ... SET ... WHERE (sửa dòng), DELETE FROM ... WHERE (xóa dòng), AVG (tính trung bình).",
            "DCL: GRANT (cấp quyền), REVOKE (thu hồi quyền)."
          ]
        },
        {
          heading: "2. Sáu lỗi cú pháp và tư duy học sinh hay mắc phải nhất",
          points: [
            "LỖI 1: Quên dấu nháy đơn quanh xâu ký tự (Viết WHERE Lop = 11A1 ➜ Sai; phải viết WHERE Lop = '11A1').",
            "LỖI 2: Nhầm lẫn giữa SELECT và WHERE (Tư duy nhầm 'SELECT dùng để lọc học sinh giỏi' ➜ Đúng là SELECT chọn cột hiển thị, còn WHERE mới là nơi đặt điều kiện lọc Điểm >= 8).",
            "LỖI 3: UPDATE thiếu từ khóa SET (Viết UPDATE hocsinh Lop = '11A1' ➜ Sai cú pháp; bắt buộc phải có từ khóa SET).",
            "LỖI 4: Gõ DELETE TABLE thay vì DELETE FROM (Muốn xóa dòng phải dùng DELETE FROM; còn DROP TABLE là xóa mất luôn cả bảng).",
            "LỖI 5: JOIN nhầm cột không liên quan (Viết ON bannhac.Mid = nhacsi.Aid ➜ Sai bản chất quan hệ; phải là bannhac.Aid = nhacsi.Aid).",
            "LỖI 6: Khai báo nhầm Khóa chính / Khóa ngoài (Khai báo BANNHAC có Aid làm PK ➜ Sai; Mid mới là PK, Aid là FK)."
          ]
        }
      ],
      checkpointCards: [
        {
          title: "1. SQL LÀ GÌ?",
          detail: "Ngôn ngữ truy vấn có cấu trúc mang tính khai báo: Chỉ cần nói 'muốn dữ liệu gì', không cần chỉ 'làm thế nào'."
        },
        {
          title: "2. BỘ BA DDL – DML – DCL",
          detail: "DDL định nghĩa cấu trúc khung; DML thao tác dữ liệu bên trong; DCL kiểm soát quyền bảo mật."
        },
        {
          title: "3. CÂU LỆNH SELECT KINH ĐIỂN",
          detail: "SELECT chọn cột hiển thị, FROM chọn bảng nạp dữ liệu, WHERE lọc dòng thỏa điều kiện, ORDER BY sắp xếp."
        },
        {
          title: "4. BỘ BA CẬP NHẬT DỮ LIỆU",
          detail: "INSERT INTO thêm bản ghi mới; UPDATE sửa đổi giá trị; DELETE FROM xóa dòng. Nhớ luôn có WHERE khi sửa/xóa!"
        },
        {
          title: "5. LIÊN KẾT BẢNG INNER JOIN",
          detail: "Ghép các bảng dựa trên trường khóa chung: FROM Bang1 INNER JOIN Bang2 ON Bang1.Khoa = Bang2.Khoa."
        },
        {
          title: "6. DCL: GRANT & REVOKE",
          detail: "GRANT cấp quyền cho tài khoản; REVOKE tước lại quyền đã cấp. Đảm bảo an toàn bảo mật CSDL."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|                        BÀI 14: SQL - NGÔN NGỮ TRUY VẤN CÓ CẤU TRÚC                |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
                     SQL (STRUCTURED QUERY LANGUAGE)
                                         │
         ┌───────────────────────────────┼───────────────────────────────┐
         ▼                               ▼                               ▼
        DDL                             DML                             DCL
(Định nghĩa dữ liệu)            (Thao tác dữ liệu)              (Kiểm soát quyền)
         │                               │                               │
  ┌──────┴──────┐                 ┌──────┴──────┐                 ┌──────┴──────┐
  ▼             ▼                 ▼             ▼                 ▼             ▼
CREATE        ALTER            TRUY VẤN      CẬP NHẬT           GRANT        REVOKE
TABLE         TABLE            (DQL/JOIN)   (Thêm/Sửa/Xóa)   (Cấp quyền)   (Thu hồi)
  │             │                 │             │
Khai báo     Thêm PK,          SELECT        INSERT INTO
PK & FK      sửa cột           FROM          UPDATE ... SET
                               WHERE         DELETE FROM
                               ORDER BY         │
                               INNER JOIN    (CẢNH BÁO:
                               AVG()         Nhớ WHERE!)`
    }
  ],

  summaryQuiz: [
    {
      question: "Câu 1: Ngôn ngữ SQL là viết tắt của cụm từ tiếng Anh nào sau đây?",
      options: [
        "A. Structured Question Language",
        "B. Structured Query Language",
        "C. System Query Logic",
        "D. Standard Quantity Language"
      ],
      answer: "B",
      explanation: "SQL là viết tắt của Structured Query Language (Ngôn ngữ truy vấn có cấu trúc), ngôn ngữ chuẩn quốc tế cho CSDL quan hệ."
    },
    {
      question: "Câu 2: Nhóm lệnh DDL (Data Definition Language) trong SQL có công dụng chính là gì?",
      options: [
        "A. Thêm mới, chỉnh sửa và xóa các dòng dữ liệu.",
        "B. Cấp phát và thu hồi quyền đăng nhập của người dùng.",
        "C. Định nghĩa và thay đổi cấu trúc của cơ sở dữ liệu và các bảng.",
        "D. Tính toán giá trị trung bình cộng các cột số."
      ],
      answer: "C",
      explanation: "DDL dùng để định nghĩa và thay đổi cấu trúc CSDL (tạo CSDL, tạo bảng, sửa cấu trúc bảng, khai báo khóa)."
    },
    {
      question: "Câu 3: Câu lệnh nào sau đây thuộc nhóm ngôn ngữ thao tác dữ liệu (DML)?",
      options: [
        "A. CREATE TABLE",
        "B. ALTER TABLE",
        "C. SELECT",
        "D. GRANT"
      ],
      answer: "C",
      explanation: "SELECT, INSERT, UPDATE, DELETE thuộc nhóm DML (Thao tác dữ liệu). CREATE và ALTER thuộc DDL; GRANT thuộc DCL."
    },
    {
      question: "Câu 4: Để hiển thị TẤT CẢ các cột và tất cả các dòng của bảng 'nhacsi', câu lệnh SQL nào sau đây là ĐÚNG?",
      options: [
        "A. SELECT ALL FROM nhacsi;",
        "B. SELECT * FROM nhacsi;",
        "C. SHOW ALL nhacsi;",
        "D. GET * FROM nhacsi;"
      ],
      answer: "B",
      explanation: "Trong SQL, dấu sao (*) đại diện cho tất cả các cột của bảng. Câu lệnh chuẩn là: SELECT * FROM nhacsi;"
    },
    {
      question: "Câu 5: Cú pháp mệnh đề WHERE nào sau đây là ĐÚNG khi muốn lọc học sinh thuộc lớp 11A1?",
      options: [
        "A. WHERE Lop = 11A1;",
        "B. WHERE Lop = '11A1';",
        "C. WHERE Lop IS 11A1;",
        "D. WHERE Lop IN 11A1;"
      ],
      answer: "B",
      explanation: "Giá trị kiểu ký tự/xâu (như 11A1) bắt buộc phải được đặt trong cặp dấu nháy đơn ('11A1')."
    },
    {
      question: "Câu 6: Muốn sắp xếp danh sách học sinh theo điểm Tin học từ CAO XUỐNG THẤP (giảm dần), ta sử dụng mệnh đề nào?",
      options: [
        "A. ORDER BY DiemTin ASC;",
        "B. SORT BY DiemTin DESC;",
        "C. ORDER BY DiemTin DESC;",
        "D. GROUP BY DiemTin DOWN;"
      ],
      answer: "C",
      explanation: "ORDER BY dùng để sắp xếp; từ khóa DESC (Descending) dùng để sắp xếp giảm dần từ lớn đến nhỏ."
    },
    {
      question: "Câu 7: Điều gì sẽ xảy ra nếu ta chạy câu lệnh: 'DELETE FROM hocsinh;' mà KHÔNG có mệnh đề WHERE?",
      options: [
        "A. Hệ thống sẽ xóa dòng đầu tiên của bảng.",
        "B. Hệ thống sẽ báo lỗi và không làm gì cả.",
        "C. Toàn bộ tất cả các dòng dữ liệu trong bảng hocsinh sẽ bị xóa sạch.",
        "D. Cấu trúc bảng hocsinh sẽ bị xóa hoàn toàn khỏi CSDL."
      ],
      answer: "C",
      explanation: "Nếu câu lệnh DELETE không có mệnh đề WHERE lọc dòng, nó sẽ xóa sạch toàn bộ tất cả các dòng dữ liệu có trong bảng."
    },
    {
      question: "Câu 8: Cú pháp khai báo Khóa ngoài nào sau đây là ĐÚNG CHUẨN khi tạo bảng?",
      options: [
        "A. FOREIGN KEY (Aid) CONNECT nhacsi(Aid)",
        "B. FOREIGN KEY (Aid) REFERENCES nhacsi(Aid)",
        "C. FOREIGN KEY Aid TO nhacsi(Aid)",
        "D. FOREIGN KEY (Aid) IN nhacsi(Aid)"
      ],
      answer: "B",
      explanation: "Cú pháp chuẩn của SQL là: FOREIGN KEY (TenCot) REFERENCES BangGoc(CotKhoaChinh)."
    },
    {
      question: "Câu 9: Mệnh đề nào sau đây dùng để liên kết dữ liệu giữa hai bảng trong câu lệnh SELECT?",
      options: [
        "A. CONNECT TO",
        "B. LINK WITH",
        "C. INNER JOIN ... ON ...",
        "D. MERGE ... WHERE ..."
      ],
      answer: "C",
      explanation: "INNER JOIN ... ON ... là mệnh đề chuẩn dùng để thực hiện phép liên kết dữ liệu giữa các bảng theo điều kiện khóa."
    },
    {
      question: "Câu 10: Nhóm câu lệnh DCL gồm hai lệnh nào sau đây dùng để quản lý phân quyền người dùng?",
      options: [
        "A. CREATE và DROP",
        "B. INSERT và UPDATE",
        "C. GRANT và REVOKE",
        "D. SELECT và WHERE"
      ],
      answer: "C",
      explanation: "GRANT (cấp quyền) và REVOKE (thu hồi quyền) là hai câu lệnh đại diện cốt lõi của nhóm DCL (Data Control Language)."
    }
  ],

  practiceExercises: [
    {
      id: "practice-b14-1",
      badge: "Bài 1 – 3 phút",
      title: "Bài 1 – Viết Câu Lệnh SELECT Lọc Dữ Liệu Đơn Giản (Mục 70–73)",
      duration: "3 phút",
      type: "exercise",
      description: "Thực hành viết các câu lệnh SELECT trên bảng HOCSINH (MaHS, HoTen, Lop, DiemTin).",
      content: {
        objective: "Mức độ: Nhận biết – Thông hiểu | Thời gian: 3 phút. Thành thạo SELECT, FROM, WHERE.",
        requirements: [
          "Cho bảng HOCSINH gồm các cột: MaHS, HoTen, Lop, DiemTin.\n1. Viết câu lệnh lấy ra toàn bộ thông tin của tất cả học sinh trong bảng.\n2. Viết câu lệnh chỉ lấy cột HoTen của những học sinh thuộc lớp '11A1'.\n3. Viết câu lệnh lấy MaHS, HoTen của những học sinh có DiemTin từ 8.0 trở lên."
        ],
        qaList: [
          {
            q: "Đáp án các câu truy vấn SQL:",
            a: "1. Lấy toàn bộ bảng:\nSELECT * FROM hocsinh;\n\n2. Lấy họ tên học sinh lớp 11A1:\nSELECT HoTen\nFROM hocsinh\nWHERE Lop = '11A1';\n\n3. Lấy học sinh điểm Tin ≥ 8.0:\nSELECT MaHS, HoTen, DiemTin\nFROM hocsinh\nWHERE DiemTin >= 8.0;"
          }
        ]
      }
    },
    {
      id: "practice-b14-2",
      badge: "Bài 2 – 3 phút",
      title: "Bài 2 – Kết Hợp Điều Kiện Logic AND & Sắp Xếp ORDER BY (Mục 74–75)",
      duration: "3 phút",
      type: "exercise",
      description: "Viết câu lệnh SELECT kết hợp mệnh đề WHERE phức hợp và mệnh đề ORDER BY.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Sử dụng thành thạo AND, ORDER BY DESC.",
        requirements: [
          "Vẫn với bảng HOCSINH (MaHS, HoTen, Lop, DiemTin):\n1. Viết câu lệnh lấy HoTen và DiemTin của tất cả học sinh, sắp xếp theo điểm Tin giảm dần từ cao xuống thấp.\n2. Viết câu lệnh lấy HoTen và DiemTin của những bạn học sinh lớp '11A1' CÓ ĐIỂM TIN từ 7.0 trở lên, và sắp xếp theo điểm Tin giảm dần."
        ],
        qaList: [
          {
            q: "Đáp án câu lệnh SQL kết hợp:",
            a: "1. Sắp xếp điểm giảm dần:\nSELECT HoTen, DiemTin\nFROM hocsinh\nORDER BY DiemTin DESC;\n\n2. Lớp 11A1, điểm ≥ 7.0, sắp xếp giảm dần:\nSELECT HoTen, DiemTin\nFROM hocsinh\nWHERE Lop = '11A1'\n  AND DiemTin >= 7.0\nORDER BY DiemTin DESC;"
          }
        ]
      }
    },
    {
      id: "practice-b14-3",
      badge: "Bài 3 – 3 phút",
      title: "Bài 3 – Thao Tác Cập Nhật Dữ Liệu INSERT, UPDATE, DELETE (Mục 76–78)",
      duration: "3 phút",
      type: "exercise",
      description: "Thực hành lần lượt 3 thao tác thêm mới, chỉnh sửa và xóa bản ghi trên bảng HOCSINH.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Nắm vững cú pháp bộ ba thao tác dữ liệu.",
        requirements: [
          "Thực hiện lần lượt 3 yêu cầu sau trên bảng HOCSINH:\n1. Thêm một học sinh mới: Mã 'HS05', Họ tên 'Lê Thị Mai', Lớp '11A2', Điểm Tin 8.5.\n2. Chuyển học sinh 'HS05' sang học lớp '11A1'.\n3. Xóa thông tin của học sinh có mã 'HS05' khỏi bảng."
        ],
        qaList: [
          {
            q: "Đáp án 3 câu lệnh DML cập nhật:",
            a: "1. Lệnh INSERT thêm mới:\nINSERT INTO hocsinh (MaHS, HoTen, Lop, DiemTin)\nVALUES ('HS05', 'Lê Thị Mai', '11A2', 8.5);\n\n2. Lệnh UPDATE sửa lớp:\nUPDATE hocsinh\nSET Lop = '11A1'\nWHERE MaHS = 'HS05';\n\n3. Lệnh DELETE xóa học sinh:\nDELETE FROM hocsinh\nWHERE MaHS = 'HS05';"
          }
        ]
      }
    },
    {
      id: "practice-b14-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Tạo Bảng CASI Có Khai Báo PRIMARY KEY (Mục 86)",
      duration: "3 phút",
      type: "exercise",
      description: "Viết câu lệnh DDL CREATE TABLE tạo bảng casi với kiểu dữ liệu và khóa chính chuẩn SGK.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Khai báo bảng và khóa chính chuẩn mực.",
        requirements: [
          "Viết câu lệnh SQL tạo bảng casi gồm 2 trường:\n• Sid: Mã ca sĩ (kiểu chuỗi ký tự độ dài thay đổi tối đa 10, đóng vai trò là Khóa chính).\n• TenCS: Tên ca sĩ (kiểu chuỗi ký tự độ dài thay đổi tối đa 100)."
        ],
        qaList: [
          {
            q: "Đáp án câu lệnh CREATE TABLE:",
            a: "Cú pháp chuẩn SGK:\nCREATE TABLE casi (\n    Sid VARCHAR(10),\n    TenCS VARCHAR(100),\n    PRIMARY KEY (Sid)\n);\n\n(Hoặc có thể viết trực tiếp: Sid VARCHAR(10) PRIMARY KEY, TenCS VARCHAR(100));"
          }
        ]
      }
    },
    {
      id: "practice-b14-5",
      badge: "Bài 5 – 4 phút",
      title: "Bài 5 – Tạo Bảng BANTHUAM Với Khóa Ghép & 2 Khóa Ngoài (Mục 87)",
      duration: "4 phút",
      type: "exercise",
      description: "Thực hành viết câu lệnh tạo bảng trung gian có khóa chính ghép và 2 khóa ngoài liên kết.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 4 phút. Làm chủ cú pháp DDL nâng cao có khóa ngoại.",
        requirements: [
          "Viết câu lệnh SQL tạo bảng banthuam gồm 2 trường:\n• Mid: Mã bản nhạc (kiểu CHAR(4)).\n• Sid: Mã ca sĩ (kiểu VARCHAR(10)).\n• Khóa chính là cặp ghép (Mid, Sid).\n• Khóa ngoài Mid tham chiếu tới Mid của bảng bannhac.\n• Khóa ngoài Sid tham chiếu tới Sid của bảng casi."
        ],
        qaList: [
          {
            q: "Đáp án câu lệnh hoàn chỉnh:",
            a: "CREATE TABLE banthuam (\n    Mid CHAR(4),\n    Sid VARCHAR(10),\n    PRIMARY KEY (Mid, Sid),\n    FOREIGN KEY (Mid) REFERENCES bannhac(Mid),\n    FOREIGN KEY (Sid) REFERENCES casi(Sid)\n);"
          }
        ]
      }
    },
    {
      id: "practice-b14-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – Truy Vấn Liên Kết Hai Bảng Với INNER JOIN (Mục 90)",
      duration: "3 phút",
      type: "exercise",
      description: "Viết câu lệnh ghép dữ liệu từ hai bảng BANTHUAM và BANNHAC.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Thành thạo cú pháp INNER JOIN ... ON.",
        requirements: [
          "Viết câu lệnh SQL lấy ra: Mid, Sid của bảng banthuam và TenBN của bảng bannhac bằng cách liên kết hai bảng này theo trường Mid chung."
        ],
        qaList: [
          {
            q: "Đáp án câu truy vấn INNER JOIN:",
            a: "SELECT\n    banthuam.Mid,\n    banthuam.Sid,\n    bannhac.TenBN\nFROM banthuam\nINNER JOIN bannhac\n    ON banthuam.Mid = bannhac.Mid;"
          }
        ]
      }
    },
    {
      id: "practice-b14-7",
      badge: "Vận Dụng – 4 phút",
      title: "Bài 7 – Liên Kết Ba Bảng: BANTHUAM + BANNHAC + CASI (Mục 91)",
      duration: "4 phút",
      type: "exercise",
      description: "Viết câu lệnh truy vấn liên kết đồng thời 3 bảng để hiển thị đầy đủ thông tin thu âm.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 4 phút. Tích hợp liên kết nhiều bảng liên tiếp.",
        requirements: [
          "Viết câu lệnh SQL lấy ra 4 thông tin: Mid, Sid, Tên bản nhạc (TenBN) và Tên ca sĩ (TenCS) bằng cách liên kết bảng banthuam đồng thời với cả bảng bannhac và bảng casi."
        ],
        qaList: [
          {
            q: "Đáp án câu lệnh JOIN 3 bảng chuẩn mực:",
            a: "SELECT\n    banthuam.Mid,\n    banthuam.Sid,\n    bannhac.TenBN,\n    casi.TenCS\nFROM banthuam\nINNER JOIN bannhac\n    ON banthuam.Mid = bannhac.Mid\nINNER JOIN casi\n    ON banthuam.Sid = casi.Sid;"
          }
        ]
      }
    },
    {
      id: "practice-b14-8",
      badge: "Bài 8 – 2 phút",
      title: "Bài 8 – Cấp Quyền & Thu Hồi Quyền Với DCL (Mục 92–93)",
      duration: "2 phút",
      type: "exercise",
      description: "Thực hành viết hai câu lệnh DCL: GRANT và REVOKE theo tinh thần SGK.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Phân biệt cú pháp cấp và tước quyền.",
        requirements: [
          "1. Viết câu lệnh cấp quyền UPDATE trên toàn bộ các bảng trong CSDL music cho người dùng 'mod'.\n2. Viết câu lệnh thu hồi quyền DELETE trên bảng nhacsi của CSDL music từ người dùng 'mod'."
        ],
        qaList: [
          {
            q: "Đáp án hai câu lệnh DCL:",
            a: "1. Cấp quyền UPDATE:\nGRANT UPDATE\nON music.*\nTO mod;\n\n2. Thu hồi quyền DELETE:\nREVOKE DELETE\nON music.nhacsi\nFROM mod;"
          }
        ]
      }
    },
    {
      id: "practice-b14-9",
      badge: "Bài 9 – 4 phút",
      title: "Bài 9 – Sửa Lỗi Cú Pháp SQL Cho Học Sinh (Mục 81–85)",
      duration: "4 phút",
      type: "exercise",
      description: "Phát hiện và sửa lại cho đúng 4 câu lệnh SQL có lỗi phổ biến.",
      content: {
        objective: "Rèn luyện khả năng phát hiện lỗi cú pháp và tư duy truy vấn chuẩn xác.",
        requirements: [
          "Hãy chỉ ra lỗi sai và viết lại cho đúng 4 câu lệnh sau:\n1. SELECT * FROM hocsinh WHERE Lop = 11A1;\n2. UPDATE hocsinh Lop = '11A2' WHERE MaHS = 'HS01';\n3. DELETE TABLE FROM hocsinh WHERE MaHS = 'HS02';\n4. SELECT * FROM bannhac INNER JOIN nhacsi ON bannhac.Mid = nhacsi.Aid;"
        ],
        qaList: [
          {
            q: "Đáp án sửa lỗi 4 câu lệnh:",
            a: "1. Lỗi: Thiếu nháy đơn quanh xâu ký tự 11A1.\n➜ Sửa lại: SELECT * FROM hocsinh WHERE Lop = '11A1';\n\n2. Lỗi: Thiếu từ khóa SET trong lệnh UPDATE.\n➜ Sửa lại: UPDATE hocsinh SET Lop = '11A2' WHERE MaHS = 'HS01';\n\n3. Lỗi: Cú pháp thừa từ TABLE trong lệnh DELETE.\n➜ Sửa lại: DELETE FROM hocsinh WHERE MaHS = 'HS02';\n\n4. Lỗi: Điều kiện ON nối nhầm cột Mid với Aid (không cùng bản chất).\n➜ Sửa lại: SELECT * FROM bannhac INNER JOIN nhacsi ON bannhac.Aid = nhacsi.Aid;"
          }
        ]
      }
    },
    {
      id: "practice-b14-10",
      badge: "Phản Xạ – 3 phút",
      title: "Bài 10 – Phân Loại Nhanh Nhóm Lệnh DDL / DML / DCL (Mục 66)",
      duration: "3 phút",
      type: "exercise",
      description: "Đọc tên câu lệnh và xếp vào đúng 1 trong 3 nhóm chức năng lớn trong 3 giây!",
      content: {
        objective: "Rèn luyện phản xạ siêu tốc cho các câu hỏi nhận biết phân loại trong đề thi.",
        requirements: [
          "Hãy xếp các câu lệnh sau vào đúng nhóm DDL, DML hoặc DCL:\n1. CREATE TABLE\n2. SELECT\n3. ALTER TABLE\n4. INSERT INTO\n5. GRANT\n6. DELETE FROM\n7. REVOKE\n8. UPDATE ... SET\n9. CREATE DATABASE\n10. INNER JOIN"
        ],
        qaList: [
          {
            q: "Đáp án phân loại chuẩn xác 10 lệnh:",
            a: "• Nhóm DDL (Định nghĩa dữ liệu): CREATE TABLE, ALTER TABLE, CREATE DATABASE.\n• Nhóm DML (Thao tác dữ liệu): SELECT, INSERT INTO, DELETE FROM, UPDATE ... SET, INNER JOIN.\n• Nhóm DCL (Kiểm soát quyền): GRANT, REVOKE."
          }
        ]
      }
    }
  ],

  examTypes: [
    {
      id: "exam-type-1",
      title: "Dạng 1: Phân loại câu lệnh vào 3 nhóm chức năng DDL, DML, DCL",
      importance: "Rất hay gặp trong phần trắc nghiệm Nhận biết",
      technique: "Công thức nhớ nhanh: DDL liên quan tới CẤU TRÚC/CÁI KHUNG (CREATE, ALTER, DROP, PRIMARY KEY, FOREIGN KEY); DML liên quan tới THAO TÁC DỮ LIỆU BÊN TRONG (SELECT, INSERT, UPDATE, DELETE, JOIN, AVG); DCL liên quan tới QUYỀN BẢO MẬT (GRANT, REVOKE).",
      examples: [
        "Câu hỏi đề thi: 'Câu lệnh ALTER TABLE ADD PRIMARY KEY (MaHS) thuộc nhóm ngôn ngữ nào trong SQL?' ➜ Đáp án: DDL."
      ]
    },
    {
      id: "exam-type-2",
      title: "Dạng 2: Đọc hiểu và dự đoán kết quả truy vấn SELECT có điều kiện và sắp xếp",
      importance: "Trọng tâm phần Thông hiểu và Vận dụng đề thi THPT",
      technique: "Phương pháp giải theo 3 bước: Bước 1 (WHERE): Lọc bỏ tất cả các dòng không thỏa mãn điều kiện; Bước 2 (ORDER BY): Sắp xếp các dòng còn lại theo cột yêu cầu (ASC: nhỏ ➜ lớn; DESC: lớn ➜ nhỏ); Bước 3 (SELECT): Giữ lại đúng các cột được yêu cầu để ghi kết quả đầu ra.",
      examples: [
        "Đề bài: Cho bảng điểm 4 dòng, dự đoán bảng kết quả trả về khi thực thi câu lệnh: SELECT HoTen, Diem FROM diemthi WHERE Diem >= 8.0 ORDER BY Diem DESC;"
      ]
    },
    {
      id: "exam-type-3",
      title: "Dạng 3: Nhận diện lỗi và hiểm họa của câu lệnh UPDATE / DELETE thiếu WHERE",
      importance: "Câu hỏi tình huống thực tế bẫy học sinh",
      technique: "Phương pháp giải: Khi câu lệnh UPDATE hoặc DELETE không có mệnh đề WHERE, tác động sẽ diễn ra trên TOÀN BỘ TẤT CẢ CÁC BẢN GHI trong bảng. Chọn đáp án cảnh báo mất dữ liệu toàn bảng hoặc mọi dòng bị gán chung một giá trị.",
      examples: [
        "Câu hỏi đề thi: 'Nếu chạy lệnh: UPDATE NhanVien SET Luong = 10000000; mà thiếu WHERE thì kết quả sẽ là gì?' ➜ Tất cả nhân viên trong công ty đều bị đổi lương thành 10 triệu!"
      ]
    },
    {
      id: "exam-type-4",
      title: "Dạng 4: Viết câu lệnh DDL tạo bảng có Khóa chính (PK) và Khóa ngoài (FK)",
      importance: "Vận dụng viết code thực hành CSDL",
      technique: "Phương pháp giải: Khóa chính đơn ghi 'TenCot KieuDuLieu PRIMARY KEY'; Khóa ngoài ghi ở cuối: 'FOREIGN KEY (CotNgoai) REFERENCES BangGoc(CotGoc)'. Chú ý kiểu dữ liệu giữa Khóa ngoài và Khóa chính được tham chiếu bắt buộc phải tương thích với nhau.",
      examples: [
        "Đề bài: Viết câu lệnh tạo bảng DONHANG gồm: MaDH CHAR(5) là khóa chính, MaKH VARCHAR(10) là khóa ngoài tham chiếu KHACHHANG(MaKH), và NgayDat DATE."
      ]
    },
    {
      id: "exam-type-5",
      title: "Dạng 5: Viết câu lệnh truy vấn liên kết bảng với INNER JOIN ... ON",
      importance: "Vận dụng nâng cao điểm 9 – 10",
      technique: "Phương pháp giải: Cú pháp chuẩn: FROM Bang1 INNER JOIN Bang2 ON Bang1.KhoaChung = Bang2.KhoaChung. Chú ý ghi rõ tiền tố 'TenBang.TenCot' ở các cột có thể bị trùng tên để tránh lỗi mơ hồ (ambiguous column).",
      examples: [
        "Đề bài: Cho 2 bảng HOCSINH (MaHS, HoTen, MaLop) và LOP (MaLop, TenLop). Viết câu lệnh lấy HoTen và TenLop của toàn bộ học sinh."
      ]
    }
  ],

  homework: [
    {
      title: "Bài tập 1: Viết Trọn Bộ Câu Lệnh SQL Cho Hệ Thống Quản Lý Bán Hàng",
      tag: "Thực Hành Viết Code",
      problem: "Một cửa hàng máy tính cần quản lý danh mục sản phẩm trong bảng SANPHAM (MaSP, TenSP, DonGia, TonKho):",
      tasks: [
        "Nhiệm vụ 1: Viết câu lệnh DDL tạo bảng SANPHAM với MaSP (CHAR(4)) là Khóa chính, TenSP (VARCHAR(100)), DonGia (REAL), TonKho (INT).",
        "Nhiệm vụ 2: Viết câu lệnh thêm sản phẩm mới: MaSP 'SP04', Tên 'Webcam Full HD', Đơn giá 650000, Tồn kho 10.",
        "Nhiệm vụ 3: Viết câu lệnh SELECT lấy Tên và Đơn giá của các sản phẩm có TonKho > 0, sắp xếp theo Đơn giá giảm dần.",
        "Nhiệm vụ 4: Viết câu lệnh cập nhật số lượng tồn kho của sản phẩm 'SP02' thành 15.",
        "Nhiệm vụ 5: Viết câu lệnh xóa sản phẩm có mã 'SP04' khỏi bảng."
      ],
      requirements: "Viết đúng chuẩn cú pháp SQL, có dấu chấm phẩy (;) kết thúc câu lệnh.",
      hint: "Xem lại Mục 116–119 trong bài học về ví dụ bảng SANPHAM.",
      solution: `Gợi ý lời giải Bài tập 1:
1. Tạo bảng SANPHAM:
CREATE TABLE sanpham (
    MaSP CHAR(4) PRIMARY KEY,
    TenSP VARCHAR(100),
    DonGia REAL,
    TonKho INT
);

2. Thêm sản phẩm mới:
INSERT INTO sanpham (MaSP, TenSP, DonGia, TonKho)
VALUES ('SP04', 'Webcam Full HD', 650000, 10);

3. Lấy sản phẩm còn hàng, sắp xếp giá giảm dần:
SELECT TenSP, DonGia
FROM sanpham
WHERE TonKho > 0
ORDER BY DonGia DESC;

4. Cập nhật tồn kho sản phẩm SP02:
UPDATE sanpham
SET TonKho = 15
WHERE MaSP = 'SP02';

5. Xóa sản phẩm SP04:
DELETE FROM sanpham
WHERE MaSP = 'SP04';`
    },
    {
      title: "Bài tập 2: Củng Cố Lý Thuyết & Giải Thích Chi Tiết 10 Câu Mini Test",
      tag: "Trắc nghiệm Bắt buộc",
      problem: "Làm lại toàn bộ 10 câu hỏi trắc nghiệm của Bài 14 trong bài học:",
      tasks: [
        "Nhiệm vụ 1: Ghi lại đáp án đúng cho từng câu từ Câu 1 đến Câu 10.",
        "Nhiệm vụ 2: Viết câu giải thích ngắn gọn (1–2 dòng) chỉ rõ căn cứ chuyên môn vì sao chọn đáp án đó."
      ],
      requirements: "Trình bày rõ ràng vào vở bài tập.",
      hint: "Bám sát các khái niệm: SQL, DDL, DML, DCL, SELECT, WHERE, ORDER BY, INSERT, UPDATE, DELETE, JOIN.",
      solution: `Checklist đánh giá bài tập 2 (10/10 Điểm):
✓ Câu 1 (B): SQL là viết tắt của Structured Query Language.
✓ Câu 2 (C): DDL dùng để định nghĩa và thay đổi cấu trúc bảng CSDL.
✓ Câu 3 (C): SELECT thuộc nhóm thao tác dữ liệu DML.
✓ Câu 4 (B): Ký tự sao (*) đại diện cho tất cả các cột trong SELECT * FROM nhacsi;
✓ Câu 5 (B): Giá trị xâu phải đặt trong nháy đơn WHERE Lop = '11A1';
✓ Câu 6 (C): ORDER BY DiemTin DESC sắp xếp giảm dần.
✓ Câu 7 (C): DELETE thiếu WHERE sẽ xóa toàn bộ các dòng trong bảng.
✓ Câu 8 (B): Cú pháp khóa ngoài chuẩn là FOREIGN KEY ... REFERENCES ...
✓ Câu 9 (C): INNER JOIN ... ON ... dùng để liên kết các bảng.
✓ Câu 10 (C): GRANT và REVOKE thuộc nhóm kiểm soát quyền DCL.`
    },
    {
      title: "Bài tập 3: Bốn Câu Hỏi Tự Luận Cốt Lõi Về Bản Chất SQL",
      tag: "Tự Luận Tư Duy",
      problem: "Bốn câu hỏi tự luận giúp học sinh tự diễn đạt trôi chảy bản chất chuyên môn của ngôn ngữ SQL:",
      tasks: [
        "Câu 1: Vì sao nói sử dụng ngôn ngữ SQL tiện lợi hơn nhiều so với việc tự viết chương trình đọc từng dòng tệp dữ liệu?",
        "Câu 2: Phân biệt rõ sự khác nhau giữa 3 nhóm ngôn ngữ DDL, DML và DCL.",
        "Câu 3: Phân biệt rạch ròi giữa câu lệnh ALTER TABLE và UPDATE ... SET.",
        "Câu 4: Vì sao mệnh đề WHERE lại đặc biệt quan trọng và nguy hiểm trong hai lệnh UPDATE và DELETE?"
      ],
      requirements: "Trả lời mạch lạc, sử dụng hình ảnh so sánh thực tế.",
      hint: "Xem lại Mục 120 trong bài học.",
      solution: `Gợi ý lời giải Bài tập 3:
• Câu 1: Vì SQL mang tính khai báo (Declarative): người dùng chỉ cần mô tả 'muốn lấy dữ liệu gì', còn Hệ QTCSDL tự đảm nhận thuật toán tìm kiếm tối ưu. Không phải tự viết các vòng lặp for, mở tệp hay kiểm tra thủ công.
• Câu 2: DDL định nghĩa cấu trúc khung CSDL; DML thao tác dữ liệu bên trong khung; DCL kiểm soát quyền hạn bảo mật người dùng.
• Câu 3: ALTER TABLE sửa 'cái khuôn' cấu trúc bảng (thêm/xóa cột, thêm khóa); UPDATE sửa 'dữ liệu' nằm trong khuôn (đổi giá trị của dòng cụ thể).
• Câu 4: Vì nếu thiếu mệnh đề WHERE, thao tác sửa hoặc xóa sẽ tự động áp dụng cho TOÀN BỘ TẤT CẢ các dòng trong bảng, dẫn tới thảm họa mất sạch dữ liệu hoặc sai lệch toàn hệ thống.`
    }
  ],

  pedagogyTips: {
    teachingSteps: [
      { step: "Bước 1: Khởi động bằng so sánh Khai báo vs Lập trình thủ tục", desc: "Đưa ví dụ tìm học sinh lớp 11A1 ➜ So sánh cách viết vòng lặp Python phức tạp với câu lệnh SQL ngắn gọn: SELECT HoTen FROM hocsinh WHERE Lop = '11A1'." },
      { step: "Bước 2: Phân loại 3 nhóm DDL - DML - DCL", desc: "Dùng hình ảnh chiếc tủ: DDL đóng tủ (CREATE/ALTER); DML bỏ giấy tờ vào tủ và lấy ra đọc (INSERT/UPDATE/DELETE/SELECT); DCL phân chìa khóa tủ cho ai (GRANT/REVOKE)." },
      { step: "Bước 3: Dạy DDL & Khai báo Khóa", desc: "Dạy CREATE TABLE, các kiểu dữ liệu (CHAR cố định vs VARCHAR thay đổi). Hướng dẫn khai báo PRIMARY KEY và FOREIGN KEY ... REFERENCES." },
      { step: "Bước 4: Dạy SELECT & Quy trình 5 bước", desc: "Dạy theo quy trình: Lấy gì (SELECT) ➜ Từ đâu (FROM) ➜ Điều kiện gì (WHERE) ➜ Sắp xếp thế nào (ORDER BY). Nhấn mạnh dấu nháy đơn quanh xâu ký tự." },
      { step: "Bước 5: Cảnh báo nguy hiểm khi thiếu WHERE", desc: "Viết lệnh DELETE FROM hocsinh; lên bảng và hỏi: 'Dòng nào bị xóa?' ➜ Khắc sâu: XÓA CẢ BẢNG! Học sinh sẽ nhớ suốt đời." },
      { step: "Bước 6: Trực quan hóa INNER JOIN bằng màu sắc", desc: "Tô cùng màu trường khóa liên kết giữa 2 bảng (bannhac.Aid và nhacsi.Aid) ➜ Kéo mũi tên ghép nối dữ liệu ➜ Viết câu lệnh INNER JOIN." }
    ],
    rulesToAvoid: [
      "TUYỆT ĐỐI KHÔNG đưa ngay 20 cú pháp bắt học sinh chép thuộc lòng. Hãy luôn bắt đầu từ câu hỏi tiếng Việt ➜ Viết SQL ➜ Đọc lại bằng lời.",
      "TUYỆT ĐỐI KHÔNG dạy các cú pháp ngoài phạm vi SGK lớp 11 như Subquery lồng nhau phức tạp, Window functions, CTE, Transaction ACID chi tiết, Stored procedure, Trigger.",
      "Không nhầm lẫn giữa ALTER TABLE (sửa cấu trúc) và UPDATE (sửa dữ liệu).",
      "Không nhầm lẫn giữa DELETE (xóa dòng dữ liệu) và DROP (xóa sổ cả bảng)."
    ]
  }
}
