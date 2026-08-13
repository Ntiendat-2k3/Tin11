export const b12Content = {
  warmUp: {
    question: "MySQL là Cơ sở dữ liệu hay là Phần mềm quản lý Cơ sở dữ liệu?",
    description: "Rất nhiều học sinh và cả người lớn nhầm lẫn hai khái niệm này. CSDL là 'dữ liệu được lưu', còn DBMS là 'phần mềm dùng để điều khiển dữ liệu đó'. Phân biệt đúng hai khái niệm này là bước chuẩn bị quan trọng nhất trước khi bước vào học câu lệnh SQL!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm Hệ quản trị CSDL (DBMS - Database Management System)",
      subsections: [
        {
          heading: "Định nghĩa DBMS & Phân biệt CSDL vs DBMS",
          text: "Hệ quản trị cơ sở dữ liệu (DBMS) là phần mềm đóng vai trò trung gian giữa người dùng/ứng dụng và CSDL, cung cấp môi trường để tạo lập, lưu trữ, cập nhật, truy vấn và bảo mật CSDL một cách thuận tiện, an toàn.",
          points: [
            "CSDL (Database): Là bản thân dữ liệu được tổ chức lưu trữ (như 'cuốn sổ ghi chép').",
            "DBMS: Là phần mềm thao tác trên cuốn sổ đó (như 'người thủ thư' biết cách tra cứu, ghi chép, cất giữ và bảo quản cuốn sổ).",
            "Ví dụ thực tế: MySQL, Microsoft SQL Server, PostgreSQL, Oracle, SQLite, Microsoft Access là các DBMS. Còn dữ liệu điểm số của học sinh trường em lưu bên trong mới là CSDL.",
            "💡 Mẹo nhớ: DBMS là 'cái hộp công cụ', CSDL là 'đồ vật nằm trong hộp' — không được gọi lẫn lộn 2 khái niệm này trong bài kiểm tra!"
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Hệ cơ sở dữ liệu (Database System)",
      subsections: [
        {
          heading: "Khái niệm Hệ CSDL bao trùm",
          text: "Hệ cơ sở dữ liệu là một hệ thống hoàn chỉnh gồm 4 thành phần kết hợp chặt chẽ: CSDL + DBMS + Phần mềm ứng dụng + Con người (Người quản trị DBA, Lập trình viên, Người dùng cuối).",
          points: [
            "Sơ đồ quan hệ: Người dùng ↔ Phần mềm ứng dụng ↔ DBMS ↔ CSDL (lưu trên đĩa cứng)."
          ]
        }
      ],
      osArchitecture: {
        title: "Sơ đồ kiến trúc Hệ Cơ sở Dữ liệu (Database System)",
        layers: [
          { name: "Người dùng (Học sinh, Giáo viên, Nhân viên thu ngân)", color: "bg-indigo-100 border-indigo-300 text-indigo-800", icon: "user" },
          { name: "Phần mềm Ứng dụng (App quản lý trường học VnEdu, Web bán hàng Shopee...)", color: "bg-sky-100 border-sky-300 text-sky-800", icon: "app" },
          { name: "Hệ quản trị CSDL - DBMS (MySQL, SQL Server, PostgreSQL...)", color: "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold", icon: "os" },
          { name: "Cơ sở dữ liệu - CSDL (Các bảng dữ liệu vật lý lưu trữ trên ổ đĩa máy chủ)", color: "bg-slate-200 border-slate-400 text-slate-800", icon: "hardware" }
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Ba nhóm chức năng cốt lõi của DBMS (DDL - DML/DQL - DCL)",
      subsections: [
        {
          heading: "Phân loại các nhóm lệnh của DBMS",
          text: "Mọi thao tác của DBMS đều được chia vào 3 nhóm chức năng chính:"
        }
      ],
      comparisonTable: {
        headers: ["Nhóm chức năng", "Tên đầy đủ", "Nhiệm vụ chính", "Các lệnh tiêu biểu"],
        rows: [
          ["DDL", "Data Definition Language (Định nghĩa dữ liệu)", "Tạo mới, sửa đổi cấu trúc khung của bảng/CSDL (chưa đụng đến dữ liệu bên trong)", "CREATE TABLE, ALTER TABLE, DROP TABLE"],
          ["DML / DQL", "Data Manipulation & Query Language (Thao tác & Truy vấn)", "Thêm, sửa, xóa dữ liệu bên trong bảng và tìm kiếm/lọc dữ liệu theo điều kiện", "INSERT (Thêm), UPDATE (Sửa), DELETE (Xóa), SELECT (Truy vấn)"],
          ["DCL", "Data Control Language (Kiểm soát dữ liệu)", "Cấp quyền hoặc thu hồi quyền truy cập, bảo mật an toàn cho CSDL", "GRANT (Cấp quyền), REVOKE (Thu hồi quyền)"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "4. Các nhóm người dùng trong Hệ CSDL",
      functions: [
        {
          name: "Người quản trị CSDL (DBA - Database Administrator)",
          desc: "Người có toàn quyền cao nhất: cài đặt DBMS, phân quyền cho người dùng, tối ưu hiệu năng và thực hiện sao lưu/khôi phục dữ liệu định kỳ."
        },
        {
          name: "Người lập trình ứng dụng (Application Programmer)",
          desc: "Xây dựng các phần mềm giao diện (Web, App di động) gửi câu lệnh truy vấn xuống DBMS để lấy dữ liệu phục vụ người dùng."
        },
        {
          name: "Người dùng cuối (End-user)",
          desc: "Người sử dụng phần mềm hàng ngày để nhập liệu hoặc tra cứu thông tin (như học sinh xem điểm trên app, giáo viên nhập điểm, thu ngân quét mã vạch)."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành Nhóm lệnh DBMS",
      steps: [
        {
          step: "Bảng tổng hợp ghi nhớ nhanh DDL vs DML vs DCL",
          detail: "• DDL (Definition): Làm việc với CẤU TRÚC (Khung bảng)\n• DML/DQL (Manipulation/Query): Làm việc với DỮ LIỆU (Bản ghi bên trong bảng)\n• DCL (Control): Làm việc với QUYỀN TRUY CẬP (Bảo mật tài khoản)\n\n→ Nhớ được 3 từ khóa 'Cấu trúc - Dữ liệu - Quyền' là trả lời đúng 80% câu trắc nghiệm Bài 12!"
        },
        {
          step: "Quy trình hoạt động thực tế",
          detail: "1. Thầy cô mở phần mềm quản lý điểm (Ứng dụng)\n2. Chọn chức năng 'Nhập điểm kiểm tra môn Toán' (Giao diện)\n3. Ứng dụng gửi lệnh INSERT INTO Diem... tới DBMS MySQL\n4. MySQL kiểm tra quyền (DCL) → Ghi dữ liệu vào đĩa cứng (DML)"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Hành động 'Tạo thêm một bảng mới có tên PhongHoc trong CSDL của trường' thuộc nhóm chức năng nào của Hệ quản trị CSDL?",
      options: [
        "A. DML (Data Manipulation Language)",
        "B. DDL (Data Definition Language)",
        "C. DCL (Data Control Language)",
        "D. DQL (Data Query Language)"
      ],
      answer: "B",
      explanation: "Tạo mới hoặc chỉnh sửa cấu trúc khung bảng (CREATE TABLE) thuộc nhóm ngôn ngữ định nghĩa dữ liệu DDL (Data Definition Language)."
    },
    {
      question: "Phần mềm nào sau đây là một Hệ quản trị cơ sở dữ liệu (DBMS)?",
      options: [
        "A. Microsoft Word",
        "B. Adobe Photoshop",
        "C. MySQL",
        "D. Google Chrome"
      ],
      answer: "C",
      explanation: "MySQL là một Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) mã nguồn mở rất phổ biến. Word là soạn thảo, Photoshop là chỉnh sửa ảnh, Chrome là trình duyệt web."
    }
  ],
  examTypes: [
    "Trắc nghiệm phân loại: Cho một thao tác cụ thể (ví dụ: 'Thêm một học sinh mới vào danh sách', 'Xóa bảng HocSinh') → xác định thuộc nhóm DDL, DML, DQL hay DCL.",
    "Cho một danh sách phần mềm → chọn ra đâu là Hệ quản trị CSDL (DBMS) thực tế (MySQL, SQL Server, PostgreSQL, Access...) và đâu là phần mềm ứng dụng thông thường.",
    "Trình bày sơ đồ mối quan hệ giữa Người dùng – Phần mềm ứng dụng – Hệ quản trị CSDL (DBMS) – Cơ sở dữ liệu (CSDL)."
  ],
  homework: [
    "Tìm hiểu và liệt kê tên 3 Hệ quản trị CSDL (DBMS) phổ biến hiện nay ngoài MySQL (ví dụ: PostgreSQL, Oracle Database, Microsoft SQL Server, MongoDB, SQLite). Ghi chú ngắn gọn 1 ưu điểm của từng loại.",
    "Với bài toán quản lý Thư viện trường học, hãy liệt kê 2 thao tác cụ thể thuộc mỗi nhóm chức năng: DDL (2 thao tác), DML/DQL (2 thao tác) và DCL (2 thao tác).",
    "Vẽ lại sơ đồ Hệ CSDL hoàn chỉnh áp dụng cho 1 ứng dụng mà em thường xuyên sử dụng (ví dụ: Ứng dụng đặt đồ ăn Grab/ShopeeFood, hoặc Ứng dụng ngân hàng số)."
  ]
}
