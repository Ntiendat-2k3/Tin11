export const b14Content = {
  warmUp: {
    question: "Vì sao SQL được gọi là ngôn ngữ 'giao tiếp' chuẩn của thế giới dữ liệu?",
    description: "Dù em dùng MySQL, SQL Server, Oracle hay PostgreSQL, SQL luôn là thứ ngôn ngữ chung giúp em trò chuyện với hệ quản trị CSDL. Bài học này nặng thực hành nhất toàn chương trình — em sẽ tự tay gõ và chạy được câu lệnh SQL!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Tổng quan về ngôn ngữ SQL (Structured Query Language)",
      subsections: [
        {
          heading: "Định nghĩa SQL & Đặc điểm ngôn ngữ Khai báo (Declarative)",
          text: "SQL (Structured Query Language - Ngôn ngữ truy vấn có cấu trúc) là ngôn ngữ chuẩn quốc tế dùng để giao tiếp với các DBMS quan hệ. SQL thực hiện toàn bộ 4 nhóm chức năng DDL, DML, DQL, DCL bằng các câu lệnh tiếng Anh tự nhiên.",
          points: [
            "Đặc điểm cốt lõi: SQL là ngôn ngữ Khai báo (Declarative) — người lập trình chỉ cần khai báo 'muốn lấy dữ liệu gì' (WHAT), không cần chỉ rõ 'làm thế nào để lấy' (HOW). DBMS sẽ tự tối ưu thuật toán tìm kiếm.",
            "Khác biệt với Python: Python là ngôn ngữ lập trình thủ tục/mệnh lệnh (phải tự viết vòng lặp for, kiểm tra if từng phần tử).",
            "💡 Mẹo nhớ: Cú pháp SQL đọc gần giống câu tiếng Anh: SELECT HoTen FROM HocSinh WHERE Lop = '11A1' = 'Chọn (SELECT) Họ tên TỪ (FROM) bảng Học sinh VỚI ĐIỀU KIỆN (WHERE) Lớp = 11A1'."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Cú pháp cơ bản câu lệnh SELECT...FROM...WHERE (Trọng tâm số 1)",
      subsections: [
        {
          heading: "Cấu trúc 3 mệnh đề chuẩn",
          text: "Mọi câu lệnh truy vấn dữ liệu cơ bản đều gồm 3 mệnh đề chính:",
          points: [
            "SELECT <danh sách cột>: Chọn các cột muốn hiển thị (dùng dấu * để lấy tất cả các cột).",
            "FROM <tên bảng>: Lấy dữ liệu từ bảng nào.",
            "WHERE <điều kiện lọc>: Lọc chỉ giữ lại các dòng thỏa mãn điều kiện."
          ]
        },
        {
          heading: "⚠️ Phân biệt Thứ tự viết vs Thứ tự thực thi ngầm của DBMS",
          text: "Khi gõ lệnh, ta viết SELECT → FROM → WHERE. Tuy nhiên khi chạy ngầm bên dưới, máy tính thực thi theo thứ tự hoàn toàn khác:",
          points: [
            "1. FROM: DBMS xác định và nạp bảng dữ liệu cần lấy.",
            "2. WHERE: Lọc loại bỏ các dòng không thỏa điều kiện.",
            "3. SELECT: Trích xuất đúng các cột được yêu cầu để hiển thị ra màn hình.",
            "→ Hiểu đúng thứ tự thực thi này giúp tránh nhầm lẫn khi viết câu lệnh truy vấn có tính toán phức tạp."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Nhóm lệnh DDL: CREATE, ALTER, DROP (Quản lý Cấu trúc Bảng)",
      subsections: [
        {
          heading: "Ba từ khóa thay đổi khung cấu trúc CSDL",
          text: "Dùng để tạo lập, chỉnh sửa hoặc xóa bỏ cấu trúc bảng (chưa đụng tới các dòng dữ liệu bên trong)."
        }
      ],
      comparisonTable: {
        headers: ["Lệnh SQL", "Chức năng nghiệp vụ", "Ví dụ cú pháp thực tế"],
        rows: [
          ["CREATE TABLE", "Tạo một bảng mới trong CSDL", "CREATE TABLE HocSinh (MaHS VARCHAR(10) PRIMARY KEY, HoTen NVARCHAR(50), Lop VARCHAR(10));"],
          ["ALTER TABLE", "Sửa đổi cấu trúc bảng đã có (thêm/sửa cột)", "ALTER TABLE HocSinh ADD DiaChi NVARCHAR(100);"],
          ["DROP TABLE", "Xóa hẳn một bảng khỏi CSDL (cả cấu trúc lẫn dữ liệu)", "DROP TABLE Diem;"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "4. Nhóm lệnh DML: INSERT, UPDATE, DELETE (Thao tác Dữ liệu)",
      subsections: [
        {
          heading: "Ba từ khóa thay đổi dữ liệu bản ghi bên trong bảng",
          text: "Dùng để thêm mới, sửa đổi hoặc xóa các dòng dữ liệu cụ thể."
        }
      ],
      comparisonTable: {
        headers: ["Lệnh SQL", "Chức năng nghiệp vụ", "Ví dụ cú pháp thực tế"],
        rows: [
          ["INSERT INTO", "Thêm 1 hoặc nhiều bản ghi mới vào bảng", "INSERT INTO HocSinh VALUES ('HS03', N'Lê C', '11A2');"],
          ["UPDATE", "Chỉnh sửa giá trị dữ liệu đã có trong bảng", "UPDATE HocSinh SET Lop='11A3' WHERE MaHS='HS03';"],
          ["DELETE FROM", "Xóa 1 hoặc nhiều dòng dữ liệu khỏi bảng", "DELETE FROM HocSinh WHERE MaHS='HS03';"]
        ]
      },
      functions: [
        {
          name: "⚠️ CẢNH BÁO NGUY HIỂM: LỆNH UPDATE / DELETE THIẾU WHERE",
          desc: "Nếu chạy câu lệnh UPDATE hoặc DELETE mà THIẾU mệnh đề WHERE, câu lệnh sẽ áp dụng cho TOÀN BỘ tất cả các dòng trong bảng! Đây là lỗi thực tế cực kỳ phổ biến gây thảm họa mất mát dữ liệu."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Các toán tử lọc dữ liệu nâng cao trong WHERE & Mệnh đề ORDER BY",
      subsections: [
        {
          heading: "Mở rộng khả năng lọc điều kiện phức tạp",
          text: "Để lọc dữ liệu chính xác trong các bài toán thực tế, SQL cung cấp nhiều toán tử hỗ trợ mạnh mẽ trong mệnh đề WHERE."
        }
      ],
      comparisonTable: {
        headers: ["Toán tử / Mệnh đề", "Ý nghĩa & Công dụng", "Ví dụ câu lệnh SQL minh họa"],
        rows: [
          ["AND / OR", "Kết hợp nhiều điều kiện logic (Cùng thỏa / Một trong các thỏa)", "WHERE Lop='11A1' AND Diem>=8"],
          ["LIKE", "Tìm kiếm theo mẫu ký tự (% = chuỗi bất kỳ, _ = đúng 1 ký tự)", "WHERE HoTen LIKE N'Nguyễn%' (Tìm tên bắt đầu bằng Nguyễn)"],
          ["BETWEEN ... AND ...", "Lọc các giá trị nằm trong khoảng đóng [giá_trị_1, giá_trị_2]", "WHERE Diem BETWEEN 5 AND 8"],
          ["IN (...)", "Lọc các giá trị nằm trong một tập hợp danh sách cho trước", "WHERE Lop IN ('11A1', '11A2')"],
          ["ORDER BY", "Sắp xếp kết quả trả về (ASC: Tăng dần - mặc định, DESC: Giảm dần)", "ORDER BY Diem DESC (Sắp xếp điểm từ cao xuống thấp)"]
        ]
      }
    },
    {
      id: "sec-6",
      title: "6. Hàm tổng hợp (Aggregate Functions) và Mệnh đề GROUP BY",
      subsections: [
        {
          heading: "Các hàm tính toán tập hợp",
          text: "SQL hỗ trợ các hàm tổng hợp tính toán trên nhiều dòng: COUNT() (đếm), SUM() (tổng), AVG() (trung bình), MAX() (lớn nhất), MIN() (nhỏ nhất).",
          points: [
            "Các hàm này thường đi kèm với mệnh đề GROUP BY để gộp nhóm dữ liệu theo một hoặc nhiều cột.",
            "Ví dụ thực tế: Tính điểm trung bình của TỪNG LỚP (chứ không phải trung bình cả trường) cần dùng GROUP BY Lop."
          ]
        }
      ]
    },
    {
      id: "sec-7",
      title: "7. Kết nối nhiều bảng bằng INNER JOIN (Điểm nhấn kỹ thuật)",
      subsections: [
        {
          heading: "Cơ chế nối bảng qua Khóa chính - Khóa ngoại",
          text: "INNER JOIN cho phép truy vấn trích xuất dữ liệu từ nhiều bảng liên kết cùng lúc thông qua điều kiện ghép khớp giá trị khóa chính và khóa ngoại.",
          points: [
            "Chỉ các dòng có giá trị liên kết khớp ở CẢ HAI BẢNG mới xuất hiện trong kết quả trả về."
          ]
        }
      ],
      steps: [
        {
          step: "1. Truy vấn cơ bản SELECT-FROM-WHERE",
          detail: "SELECT HoTen, Lop\nFROM HocSinh\nWHERE Lop = '11A1';\n\n→ Luồng hoạt động: Nạp bảng HocSinh (FROM) → Lọc các dòng Lop='11A1' (WHERE) → Hiển thị 2 cột HoTen, Lop (SELECT)."
        },
        {
          step: "2. Truy vấn hàm tổng hợp AVG + GROUP BY + ORDER BY",
          detail: "SELECT Lop, AVG(Diem) AS DiemTrungBinh\nFROM Diem\nGROUP BY Lop\nORDER BY DiemTrungBinh DESC;\n\n→ Luồng hoạt động: Gộp dòng theo từng Lop → Tính AVG(Diem) → Đặt tên cột kết quả là DiemTrungBinh (AS) → Sắp xếp lớp có điểm TB cao nhất lên đầu."
        },
        {
          step: "3. Truy vấn ghép nối INNER JOIN 2 bảng (Mã SQL thực tế)",
          detail: "SELECT HocSinh.HoTen, Diem.Mon, Diem.Diem\nFROM HocSinh\nINNER JOIN Diem ON HocSinh.MaHS = Diem.MaHS\nWHERE Diem.Diem >= 8;\n\n→ Luồng hoạt động: Nối bảng HocSinh và Diem tại những dòng có MaHS bằng nhau (ON) → Lọc các dòng có điểm >= 8 (WHERE) → Hiển thị tên học sinh thật thay vì mã số."
        },
        {
          step: "4. Toàn bộ vòng đời DDL → DML → DQL trên cùng 1 bảng",
          detail: "-- Bước 1 (DDL): Tạo bảng\nCREATE TABLE Diem (MaHS VARCHAR(10), Mon NVARCHAR(30), Diem FLOAT);\n\n-- Bước 2 (DML): Thêm dữ liệu\nINSERT INTO Diem VALUES ('HS01', N'Toán', 8.5);\n\n-- Bước 3 (DQL): Truy vấn lại\nSELECT * FROM Diem WHERE Diem >= 8;"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Thứ tự thực thi ngầm bên trong DBMS đối với một câu lệnh SQL SELECT ... FROM ... WHERE là như thế nào?",
      options: [
        "A. SELECT → FROM → WHERE",
        "B. WHERE → SELECT → FROM",
        "C. FROM → WHERE → SELECT",
        "D. FROM → SELECT → WHERE"
      ],
      answer: "C",
      explanation: "Thứ tự thực thi ngầm của DBMS: Lấy bảng dữ liệu (FROM) → Lọc các dòng thỏa điều kiện (WHERE) → Chọn và hiển thị danh sách cột yêu cầu (SELECT)."
    },
    {
      question: "Câu lệnh SQL nào sau đây dùng để cập nhật lại tên lớp cho học sinh có mã 'HS03' thành '11A3'?",
      options: [
        "A. CHANGE HocSinh SET Lop='11A3' WHERE MaHS='HS03';",
        "B. UPDATE HocSinh SET Lop='11A3' WHERE MaHS='HS03';",
        "C. MODIFY HocSinh WHERE MaHS='HS03' SET Lop='11A3';",
        "D. INSERT INTO HocSinh (Lop) VALUES ('11A3') WHERE MaHS='HS03';"
      ],
      answer: "B",
      explanation: "Cú pháp sửa dữ liệu chuẩn trong DML: UPDATE <tên_bảng> SET <cột> = <giá_trị_mới> WHERE <điều_kiện>."
    },
    {
      question: "Điều gì xảy ra nếu bạn thực hiện câu lệnh 'DELETE FROM HocSinh;' mà quên không viết mệnh đề WHERE?",
      options: [
        "A. Hệ thống báo lỗi cú pháp và dừng lại không chạy",
        "B. Chỉ dòng đầu tiên trong bảng bị xóa",
        "C. Chỉ dòng cuối cùng trong bảng bị xóa",
        "D. TOÀN BỘ các dòng dữ liệu trong bảng HocSinh sẽ bị xóa sạch"
      ],
      answer: "D",
      explanation: "UPDATE hoặc DELETE thiếu mệnh đề WHERE sẽ tác động lên TOÀN BỘ tất cả các bản ghi trong bảng. Cần cực kỳ cẩn trọng kiểm tra WHERE trước khi chạy!"
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Viết câu lệnh SQL cho một yêu cầu truy vấn nghiệp vụ bằng lời (Dạng phổ biến nhất trong đề thi).",
      answer: "Phương pháp giải: Xác định đúng 3 thành phần: Lấy cột gì? (SELECT) - Lấy từ bảng nào? (FROM) - Điều kiện lọc là gì? (WHERE). Nếu liên quan 2 bảng thì dùng INNER JOIN ... ON ... chính xác."
    },
    {
      question: "Dạng 2: Cho một câu lệnh SQL có sẵn → Dự đoán chính xác bảng dữ liệu kết quả (Output).",
      answer: "Phương pháp giải: Thực hiện chạy tay theo đúng thứ tự: Tìm bảng gốc (FROM) → Loại các dòng không thỏa WHERE → Giữ lại đúng các cột trong SELECT → Sắp xếp nếu có ORDER BY."
    },
    {
      question: "Dạng 3: Tìm lỗi sai trong một câu lệnh SQL cho trước.",
      answer: "Phương pháp giải: Kiểm tra các lỗi phổ biến: Thiếu dấu chấm phẩy (;), sai từ khóa (SELECK, UPDAT), thiếu mệnh đề ON trong JOIN, so sánh chuỗi thiếu dấu nháy đơn ('11A1'), thiếu WHERE trong UPDATE/DELETE."
    },
    {
      question: "Dạng 4: So sánh sự khác nhau giữa các câu lệnh gần giống nhau.",
      answer: "Phương pháp giải: Phân biệt câu lệnh có/không có DISTINCT (loại bỏ trùng lặp), có/không có GROUP BY (gộp nhóm theo cột), so sánh WHERE (lọc dòng) vs HAVING (lọc nhóm)."
    }
  ],
  homework: [
    {
      question: "Bài 1: Cho bảng HocSinh (MaHS, HoTen, Lop) và Diem (MaDiem, MaHS, Mon, Diem). Viết câu lệnh SQL liệt kê học sinh lớp 11A1 có điểm môn Toán trên 8.",
      answer: "Đáp án mẫu:\nSELECT HocSinh.HoTen, Diem.Diem\nFROM HocSinh\nINNER JOIN Diem ON HocSinh.MaHS = Diem.MaHS\nWHERE HocSinh.Lop = '11A1' AND Diem.Mon = N'Toán' AND Diem.Diem > 8;"
    },
    {
      question: "Bài 2: Viết câu lệnh SQL tính điểm trung bình từng môn học (GROUP BY theo Mon).",
      answer: "Đáp án mẫu:\nSELECT Mon, AVG(Diem) AS DiemTrungBinhMon\nFROM Diem\nGROUP BY Mon;"
    },
    {
      question: "Bài 3: Viết câu lệnh SQL dùng INNER JOIN để in ra Họ tên, Môn học, Điểm số của toàn bộ học sinh đạt điểm dưới 5 (cần phụ đạo).",
      answer: "Đáp án mẫu:\nSELECT HocSinh.HoTen, Diem.Mon, Diem.Diem\nFROM HocSinh\nINNER JOIN Diem ON HocSinh.MaHS = Diem.MaHS\nWHERE Diem.Diem < 5\nORDER BY Diem.Diem ASC;"
    },
    {
      question: "Bài 4: Tự tạo một bộ dữ liệu mẫu nhỏ (5-6 dòng) trên giấy/Excel, thực hành viết 3 câu SQL khác nhau khai thác bộ dữ liệu đó.",
      answer: "Hướng dẫn thực hành:\n1. Viết câu SELECT lấy toàn bộ dữ liệu thỏa điều kiện so sánh số (VD: Diem >= 8).\n2. Viết câu SELECT dùng toán tử LIKE lọc tên (VD: HoTen LIKE N'Nguyễn%').\n3. Viết câu SELECT dùng COUNT() đếm số lượng học sinh trong từng lớp."
    }
  ]
}
