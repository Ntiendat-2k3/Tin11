export const b13Content = {
  warmUp: {
    question: "Vì sao gọi là Cơ sở dữ liệu QUAN HỆ? Có phải các bảng 'có tình cảm' với nhau không?",
    description: "Rất nhiều người lầm tưởng từ 'quan hệ' trong CSDL quan hệ mang ý nghĩa thông thường. Thực chất, từ relation xuất phát từ toán học tập hợp — đại diện cho các bảng hai chiều được liên kết chặt chẽ với nhau thông qua Khóa chính và Khóa ngoại!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Mô hình dữ liệu quan hệ (Relational Data Model)",
      subsections: [
        {
          heading: "Định nghĩa & Nguồn gốc phát triển",
          text: "Mô hình dữ liệu quan hệ tổ chức dữ liệu thành các bảng hai chiều (dòng – cột), trong đó dữ liệu giữa các bảng liên kết với nhau thông qua các giá trị chung ở các cột liên kết (không dùng con trỏ hay đường link vật lý như các mô hình CSDL thế hệ cũ).",
          points: [
            "Được nhà toán học E. F. Codd đề xuất năm 1970 tại IBM.",
            "Hiện là mô hình CSDL phổ biến nhất trên thế giới (tất cả các DBMS lớn như MySQL, SQL Server, Oracle, PostgreSQL đều tuân theo mô hình này).",
            "💡 Mẹo nhớ: Cứ thấy dữ liệu dạng lưới ô vuông (hàng - cột) như bảng tính Excel là đang làm việc theo tư duy mô hình quan hệ."
          ]
        },
        {
          heading: "Bản chất toán học của thuật ngữ 'Quan hệ' (Relation)",
          text: "Trong tiếng Anh, 'Relation' dịch ra tiếng Việt là 'Quan hệ'. Tuy nhiên không phải vì các bảng 'có quan hệ tình cảm' hay quan hệ dòng họ với nhau.",
          points: [
            "Xuất phát từ khái niệm Relation trong toán học tập hợp.",
            "Mỗi bảng dữ liệu hai chiều chính là một 'quan hệ' — tức là một tập hợp các bộ dữ liệu có cùng cấu trúc thuộc tính."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Ba thành phần cấu trúc CSDL quan hệ (Bảng - Hàng - Cột)",
      subsections: [
        {
          heading: "Bộ thuật ngữ chuẩn phải thuộc lòng",
          text: "Khi làm bài thi hoặc thảo luận kỹ thuật, các thuật ngữ Tiếng Việt, Tiếng Anh và Thuật ngữ Chuyên ngành Toán/CSDL thường được dùng thay thế cho nhau. Học sinh cần ghi nhớ theo từng cụm tương đương."
        }
      ],
      comparisonTable: {
        headers: ["Tên gọi thông dụng", "Tên gọi chuyên ngành (Song ngữ)", "Ý nghĩa bản chất", "Ví dụ minh họa thực tế"],
        rows: [
          ["Bảng (Table)", "Relation (Quan hệ)", "Tập hợp dữ liệu về 1 đối tượng quản lý cụ thể", "Bảng HocSinh, Bảng Diem"],
          ["Hàng (Row)", "Tuple / Record (Bộ / Bản ghi)", "1 bản ghi dữ liệu cụ thể của 1 đối tượng", "Thông tin chi tiết của học sinh Nguyễn Văn A"],
          ["Cột (Column)", "Attribute / Field (Thuộc tính / Trường)", "1 thuộc tính dữ liệu cần lưu trữ của đối tượng", "Cột MaHS, HoTen, NgaySinh, Lop"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Khóa chính (Primary Key - PK)",
      subsections: [
        {
          heading: "Định nghĩa & Vai trò của Khóa chính",
          text: "Khóa chính là một hoặc nhiều cột có giá trị DUY NHẤT tuyệt đối và KHÔNG ĐƯỢC ĐỂ TRỐNG (NOT NULL), dùng để định danh chính xác từng hàng dữ liệu trong bảng, không bao giờ xảy ra trường hợp 2 hàng trùng giá trị khóa chính.",
          points: [
            "Ví dụ thực tế: Cột MaHS (mã học sinh) là khóa chính của bảng HocSinh. Trường có thể có 2 bạn cùng tên 'Nguyễn Văn A', nhưng Mã học sinh thì tuyệt đối không bao giờ trùng.",
            "💡 Mẹo nhớ: Khóa chính giống như Số CCCD / Mã định danh cá nhân của mỗi người — duy nhất tuyệt đối và bắt buộc phải có."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Khóa ngoại (Foreign Key - FK)",
      subsections: [
        {
          heading: "Định nghĩa & Vai trò của Khóa ngoại",
          text: "Khóa ngoại là một cột trong bảng này THAM CHIẾU TỚI KHÓA CHÍNH của một bảng khác, dùng để thiết lập mối liên kết (Relationship) giữa các bảng.",
          points: [
            "Là công cụ kỹ thuật giúp thực hiện tính 'giảm thiểu dư thừa dữ liệu' đã học ở Bài 11.",
            "Ví dụ thực tế: Bảng Diem (điểm) có cột MaHS — đây là khóa ngoại trỏ về khóa chính MaHS của bảng HocSinh. Nhờ khóa ngoại này, bảng Diem không cần lặp lại các cột Họ tên, Ngày sinh, Lớp của học sinh mà vẫn biết điểm đó là của ai."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Các loại liên kết giữa các bảng (Quan hệ 1-1, 1-N, N-N)",
      subsections: [
        {
          heading: "Phân loại 3 mối quan hệ bảng trong thiết kế CSDL",
          text: "Khi thiết kế CSDL thực tế, mối quan hệ giữa 2 thực thể luôn rơi vào 1 trong 3 dạng sau:"
        }
      ],
      comparisonTable: {
        headers: ["Loại quan hệ", "Ý nghĩa liên kết", "Ví dụ thực tế tiêu biểu"],
        rows: [
          ["1-1 (Một - Một)", "1 bản ghi ở bảng A ứng với đúng 1 bản ghi ở bảng B", "1 học sinh - 1 hồ sơ sức khỏe cá nhân"],
          ["1-N (Một - Nhiều)", "1 bản ghi ở bảng A ứng với nhiều bản ghi ở bảng B", "1 học sinh - nhiều điểm kiểm tra các môn học"],
          ["N-N (Nhiều - Nhiều)", "Nhiều bản ghi bảng A ứng nhiều bản ghi bảng B (cần tách thành 2 quan hệ 1-N qua bảng trung gian)", "Học sinh - Câu lạc bộ (1 học sinh tham gia nhiều CLB, 1 CLB có nhiều học sinh)"]
        ]
      }
    },
    {
      id: "sec-6",
      title: "6. Ràng buộc toàn vẹn dữ liệu (Data Integrity Constraints)",
      functions: [
        {
          name: "Ràng buộc thực thể (Entity Integrity)",
          desc: "Giá trị của Khóa chính không được phép trùng lặp giữa các dòng và tuyệt đối KHÔNG ĐƯỢC RỖNG (NOT NULL)."
        },
        {
          name: "Ràng buộc tham chiếu (Referential Integrity)",
          desc: "Giá trị của Khóa ngoại ở bảng tham chiếu bắt buộc phải tồn tại trong bảng gốc chứa Khóa chính — đảm bảo dữ liệu không bị 'mồ côi' (orphan record, ví dụ: không thể lưu điểm của MaHS = 'HS99' nếu HS99 chưa có trong bảng HocSinh)."
        }
      ]
    },
    {
      id: "sec-7",
      title: "7. Minh họa thực hành: Sơ đồ ERD & Lệnh SQL tạo bảng",
      steps: [
        {
          step: "1. Mô hình bảng minh họa Khóa chính - Khóa ngoại",
          detail: "Bảng HocSinh (Khóa chính: MaHS)\n| MaHS | HoTen | Lop  |\n| HS01 | Ng.A  | 11A1 |\n| HS02 | Tr.B  | 11A1 |\n\nBảng Diem (Khóa chính: MaDiem, Khóa ngoại: MaHS)\n| MaDiem | MaHS | Mon  | Diem |\n| D001   | HS01 | Toán | 8    |\n| D002   | HS01 | Văn  | 7    |\n| D003   | HS02 | Toán | 9    |\n\n→ MaHS trong bảng Diem PHẢI tồn tại trong bảng HocSinh (Ràng buộc tham chiếu)."
        },
        {
          step: "2. Câu lệnh SQL tạo bảng có Primary Key & Foreign Key (Làm quen trước Bài 14)",
          detail: "CREATE TABLE HocSinh (\n    MaHS VARCHAR(10) PRIMARY KEY,\n    HoTen NVARCHAR(50),\n    Lop VARCHAR(10)\n);\n\nCREATE TABLE Diem (\n    MaDiem VARCHAR(10) PRIMARY KEY,\n    MaHS VARCHAR(10),\n    Mon NVARCHAR(30),\n    Diem FLOAT,\n    FOREIGN KEY (MaHS) REFERENCES HocSinh(MaHS)\n);\n\n→ Dòng 'FOREIGN KEY (MaHS) REFERENCES HocSinh(MaHS)' chính là câu lệnh khai báo mối liên kết giữa 2 bảng."
        },
        {
          step: "3. Sơ đồ quan hệ thực thể (ERD - Entity Relationship Diagram) đơn giản",
          detail: "[HocSinh] 1 ------------ N [Diem]\n   MaHS (PK)                MaDiem (PK), MaHS (FK)\n\n→ Ký hiệu 1 và N thể hiện quan hệ 1-N: 1 học sinh có N điểm số."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Cột nào sau đây thích hợp nhất để chọn làm Khóa chính (Primary Key) cho bảng lưu trữ thông tin Học Sinh?",
      options: [
        "A. HoTen (Họ và tên học sinh)",
        "B. NgaySinh (Ngày tháng năm sinh)",
        "C. MaHS (Mã định danh học sinh)",
        "D. Lop (Lớp học)"
      ],
      answer: "C",
      explanation: "Họ tên, ngày sinh hay lớp đều có thể bị trùng lặp giữa nhiều học sinh. Chỉ có Mã học sinh (MaHS) là giá trị duy nhất, không trùng và không rỗng, thích hợp làm khóa chính."
    },
    {
      question: "Trong CSDL quan hệ, hàng (Row) và cột (Column) còn có tên gọi chuyên ngành song ngữ tương ứng nào?",
      options: [
        "A. Hàng = Attribute, Cột = Tuple",
        "B. Hàng = Tuple (Record), Cột = Attribute (Field)",
        "C. Hàng = Relation, Cột = Key",
        "D. Hàng = Field, Cột = Record"
      ],
      answer: "B",
      explanation: "Bộ ba tương đương chuẩn: Bảng = Table = Relation | Hàng = Row = Tuple = Record (Bộ/Bản ghi) | Cột = Column = Attribute = Field (Thuộc tính/Trường)."
    },
    {
      question: "Ràng buộc toàn vẹn tham chiếu (Referential Integrity) quy định điều gì về giá trị của Khóa ngoại?",
      options: [
        "A. Giá trị khóa ngoại phải bằng 0",
        "B. Giá trị khóa ngoại phải là số nguyên dương",
        "C. Giá trị khóa ngoại ở bảng tham chiếu phải tồn tại trong cột Khóa chính của bảng gốc",
        "D. Khóa ngoại không được phép xuất hiện ở bất kỳ bảng nào"
      ],
      answer: "C",
      explanation: "Ràng buộc tham chiếu đảm bảo dữ liệu không bị mồ côi: Mọi giá trị khóa ngoại xuất hiện ở bảng phụ phải tham chiếu chính xác đến một giá trị khóa chính đang tồn tại ở bảng gốc."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Cho một bảng dữ liệu thực tế → Xác định cột làm khóa chính hợp lệ và giải thích vì sao các cột khác không thể làm khóa chính.",
      answer: "Phương pháp giải: Tìm cột chứa các giá trị duy nhất không trùng lặp và không rỗng (VD: MaHS, Số CCCD, MaSach). Giải thích các cột như Họ tên, Ngày sinh, Địa chỉ không thể làm khóa chính vì thực tế có thể có 2 người trùng tên, trùng ngày sinh hoặc ở cùng địa chỉ."
    },
    {
      question: "Dạng 2: Cho 2 bảng có liên quan → Xác định khóa ngoại và vẽ mối liên kết.",
      answer: "Phương pháp giải: Tìm cột ở bảng này có tên và ý nghĩa trùng với khóa chính của bảng kia. Cột đó ở bảng phụ chính là Khóa ngoại (FK), trỏ về Khóa chính (PK) của bảng gốc."
    },
    {
      question: "Dạng 3: Phân loại một tình huống thực tế thuộc quan hệ 1-1, 1-N hay N-N.",
      answer: "Phương pháp giải: Xét 2 chiều — 1 đối tượng A liên kết với bao nhiêu B? 1 đối tượng B liên kết với bao nhiêu A? Nếu 1-1 → 1-1. Nếu 1-nhiều và 1-1 → 1-N. Nếu cả 2 chiều đều nhiều → N-N (cần bảng trung gian)."
    },
    {
      question: "Dạng 4: Giải thích ràng buộc toàn vẹn tham chiếu qua một ví dụ cụ thể.",
      answer: "Phương pháp giải: Lấy ví dụ bảng HocSinh (PK: MaHS) và Diem (FK: MaHS). Không thể xóa học sinh HS01 ở bảng HocSinh nếu ở bảng Diem vẫn đang còn lưu các điểm số liên quan đến HS01."
    }
  ],
  homework: [
    {
      question: "Bài 1: Thiết kế trên giấy 2 bảng CSDL quan hệ cho hệ thống quản lý thư viện (Sách và Người mượn), xác định rõ khóa chính, khóa ngoại.",
      answer: "Đáp án mẫu:\n- Bảng Sach (MaSach [PK], TenSach, TacGia, NamXuatBan)\n- Bảng NguoiMuon (MaDocGia [PK], HoTen, NgaySinh, SoDienThoai)\n- Bảng PhieuMuon (MaPhieu [PK], MaDocGia [FK], MaSach [FK], NgayMuon, NgayTra)"
    },
    {
      question: "Bài 2: Vẽ sơ đồ ERD đơn giản cho bài toán quản lý thư viện ở câu 1.",
      answer: "Đáp án mẫu:\n[NguoiMuon] 1 ------------ N [PhieuMuon] N ------------ 1 [Sach]\n  MaDocGia(PK)               MaPhieu(PK)                 MaSach(PK)\n                            MaDocGia(FK)\n                            MaSach(FK)"
    },
    {
      question: "Bài 3: Giải thích bằng lời: Vì sao không nên dùng cột 'Họ tên' làm khóa chính?",
      answer: "Đáp án mẫu:\n1. Tính duy nhất: Trong thực tế, nguy cơ 2 hoặc nhiều người trùng cả Họ và Tên là rất cao (VD: Nguyễn Văn A).\n2. Tính ổn định: Họ tên có thể thay đổi hoặc gõ sai chính tả cần sửa lại, trong khi Khóa chính cần tính cố định lâu dài để đảm bảo toàn vẹn liên kết."
    },
    {
      question: "Bài 4: Cho 3 tình huống thực tế (Học sinh - Lớp, Đơn hàng - Sản phẩm, Người dùng - Số CCCD) → Xác định loại quan hệ.",
      answer: "Đáp án mẫu:\n1. Học sinh - Lớp: Quan hệ 1-N (1 lớp có nhiều học sinh, 1 học sinh thuộc 1 lớp tại một thời điểm).\n2. Đơn hàng - Sản phẩm: Quan hệ N-N (1 đơn hàng có thể mua nhiều sản phẩm, 1 sản phẩm xuất hiện trong nhiều đơn hàng).\n3. Người dùng - Số CCCD: Quan hệ 1-1 (1 công dân sở hữu đúng 1 số CCCD, 1 số CCCD cấp cho đúng 1 người dùng)."
    }
  ]
}
