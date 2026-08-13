export const b16Content = {
  warmUp: {
    question: "Ai là 'ông trùm' đứng sau sự vận hành 24/7 mượt mà của các hệ thống dữ liệu khổng lồ như Ngân hàng, Shopee, VnEdu?",
    description: "Đó chính là Người quản trị CSDL (DBA - Database Administrator). Bài học này sẽ giúp em tổng kết trọn vẹn mạch kiến thức CSDL (Bài 10-16) qua góc nhìn nghề nghiệp thực tế, định hướng con đường tương lai trong ngành CNTT!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Vai trò và trách nhiệm của Người quản trị CSDL (DBA)",
      subsections: [
        {
          heading: "Khái niệm Người quản trị CSDL (DBA - Database Administrator)",
          text: "DBA là chuyên gia chịu trách nhiệm TOÀN DIỆN về CSDL của tổ chức: từ giai đoạn thiết kế kiến trúc, cài đặt, vận hành hàng ngày, tối ưu hiệu năng cho đến đảm bảo an toàn bảo mật và phục hồi sự cố.",
          points: [
            "DBA là người có quyền hạn cao nhất (DBA Administrator) trong bảng phân quyền đã học ở Bài 15.",
            "Vị trí công việc trong doanh nghiệp: DBA thường thuộc phòng IT/Công nghệ thông tin, làm việc song song phối hợp với Lập trình viên (Developer) và Chuyên viên phân tích dữ liệu (Data Analyst)."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Bốn nhóm nhiệm vụ cốt lõi của một DBA",
      functions: [
        {
          name: "1. Cài đặt và cấu hình CSDL",
          desc: "Lựa chọn phần mềm DBMS phù hợp (MySQL, SQL Server, Oracle...), thiết lập các thông số ban đầu: dung lượng đĩa lưu trữ, số lượng kết nối tối đa, chính sách sao lưu tự động."
        },
        {
          name: "2. Theo dõi và tối ưu hiệu năng (Performance Monitoring)",
          desc: "Giám sát tốc độ xử lý câu lệnh truy vấn, phát hiện các câu lệnh SQL chạy chậm (do viết thiếu WHERE hoặc thiếu chỉ mục INDEX) để tối ưu lại, đảm bảo hệ thống không bị treo đơ."
        },
        {
          name: "3. Sao lưu và kiểm thử khôi phục (Backup & Restore Test)",
          desc: "Thiết lập lịch sao lưu tự động định kỳ, đồng thời ĐỊNH KỲ THỬ NGHIỆM KHÔI PHỤC (Restore test) để đảm bảo tập tin backup thực sự dùng được khi xảy ra sự cố thật."
        },
        {
          name: "4. Bảo trì và đảm bảo an toàn bảo mật",
          desc: "Cập nhật các bản vá lỗi bảo mật (security patch) cho DBMS, rà soát và thu hồi các quyền truy cập dư thừa theo nguyên tắc Least Privilege (Bài 15), dọn dẹp và tối ưu hóa ổ đĩa định kỳ."
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Minh họa thực hành: Checklist công việc & Lệnh SQL tối ưu INDEX",
      steps: [
        {
          step: "1. Checklist công việc thường nhật của một DBA chuyên nghiệp",
          detail: "[ ] Kiểm tra log hệ thống 24h qua xem có truy cập bất thường không\n[ ] Xác nhận job sao lưu (backup) tự động đêm qua chạy thành công\n[ ] Theo dõi dung lượng ổ đĩa CSDL còn trống bao nhiêu %\n[ ] Rà soát danh sách các truy vấn SQL chạy chậm nhất trong ngày\n[ ] Kiểm tra danh sách tài khoản mới cấp quyền xem có đúng Least Privilege không"
        },
        {
          step: "2. Câu lệnh SQL DBA dùng để kiểm tra & tạo chỉ mục tối ưu (INDEX)",
          detail: "-- Đếm tổng số dòng dữ liệu hiện có để theo dõi mức tăng trưởng\nSELECT COUNT(*) FROM HocSinh;\n\n-- Tạo chỉ mục (INDEX) giúp truy vấn tìm kiếm theo cột MaHS đạt tốc độ cực nhanh\nCREATE INDEX idx_MaHS ON Diem(MaHS);\n\n→ Khái niệm INDEX: Giống như 'Mục lục sách' — thay vì DBMS phải dò từng dòng trong hàng triệu dữ liệu, nó tra thẳng theo mục lục đã đánh chỉ số sẵn, giúp tăng tốc truy vấn lên hàng trăm lần."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Nhiệm vụ nào sau đây KHÔNG PHẢI là trách nhiệm chính của Người quản trị CSDL (DBA)?",
      options: [
        "A. Lập lịch sao lưu CSDL tự động hàng ngày",
        "B. Cấu hình phân quyền truy cập người dùng theo nguyên tắc Least Privilege",
        "C. Trực tiếp thiết kế giao diện đồ họa (UI/UX) cho ứng dụng di động",
        "D. Theo dõi và tối ưu các câu lệnh SQL chạy chậm trên hệ thống"
      ],
      answer: "C",
      explanation: "Thiết kế giao diện đồ họa ứng dụng (UI/UX) là công việc của Lập trình viên/Nhà thiết kế giao diện (UI Developer/Designer), không phải nhiệm vụ quản trị CSDL của DBA."
    },
    {
      question: "Vì sao DBA phải 'định kỳ thử nghiệm khôi phục dữ liệu' (Restore test) chứ không chỉ thiết lập sao lưu (Backup)?",
      options: [
        "A. Để làm cho ổ cứng bị đầy nhanh hơn",
        "B. Để đảm bảo tập tin sao lưu không bị lỗi và thực sự có khả năng khôi phục lại dữ liệu khi sự cố thật xảy ra",
        "C. Để xóa bớt dữ liệu cũ trong bảng",
        "D. Vì DBMS yêu cầu bắt buộc phải chạy lệnh khôi phục mỗi ngày"
      ],
      answer: "B",
      explanation: "Thực tế có nhiều sự cố đau đớn khi hệ thống gặp thảm họa nhưng file backup tạo ra lại bị hỏng không thể khôi phục. Việc kiểm thử khôi phục định kỳ giúp DBA đảm bảo quy trình sẵn sàng 100%."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Cho một tình huống sự cố CSDL cụ thể → Xác định thuộc nhiệm vụ nào của DBA (cài đặt / theo dõi hiệu năng / backup / bảo trì).",
      answer: "Phương pháp giải: Phân tích bản chất công việc: Tối ưu câu lệnh chạy chậm → Tối ưu hiệu năng. Đặt lịch sao lưu → Backup/Restore. Cập nhật bản vá bảo mật → Bảo trì & an toàn."
    },
    {
      question: "Dạng 2: Giải thích vì sao 'chỉ backup mà không kiểm thử khôi phục' là chưa đủ an toàn.",
      answer: "Phương pháp giải: Trình bày lý do thực tế: File backup có thể bị lỗi ghi đĩa, thiếu dữ liệu hoặc không tương thích phiên bản DBMS. Nếu không Restore test định kỳ thì khi xảy ra sự cố thật sẽ không thể phục hồi dữ liệu."
    },
    {
      question: "Dạng 3: Liên hệ vai trò DBA với các bài đã học (Bài 12, 14, 15) — DBA sử dụng kiến thức nào ở từng bài.",
      answer: "Phương pháp giải: Bài 12: Sử dụng DDL/DML/DCL và hiểu cấu trúc Hệ CSDL. Bài 14: Viết và tối ưu SQL, dùng INDEX. Bài 15: Phân quyền GRANT/REVOKE, áp dụng Least Privilege và sao lưu backup."
    }
  ],
  homework: [
    {
      question: "Bài 1: Tìm hiểu và ghi chú: Mức lương / yêu cầu kỹ năng thực tế của nghề DBA tại Việt Nam hiện nay.",
      answer: "Hướng dẫn thực hiện:\nTra cứu trên các trang tuyển dụng (TopCV, VietnamWorks, ITViec): Yêu cầu am hiểu SQL, Linux, kinh nghiệm làm việc với MySQL/Oracle/PostgreSQL, chứng chỉ DBA (như OCA, OCP, MCSA). Mức lương khởi điểm từ 15-25 triệu/tháng, senior DBA có thể từ 30-50+ triệu/tháng."
    },
    {
      question: "Bài 2: Thiết kế 1 checklist công việc DBA cho một hệ thống cụ thể em tự chọn (Website trường học, App bán hàng online...).",
      answer: "Đáp án mẫu (Cho App bán hàng online):\n- Hàng ngày: Kiểm tra backup CSDL đơn hàng lúc 0h.\n- Hàng giờ: Monitoring tải CPU và memory của MySQL server.\n- Hàng tuần: Kiểm tra danh sách truy vấn tìm kiếm sản phẩm chạy chậm.\n- Hàng tháng: Kiểm tra và thu hồi các tài khoản nhân viên đã nghỉ việc."
    },
    {
      question: "Bài 3: Viết đoạn văn ngắn so sánh công việc DBA với công việc Lập trình viên (Developer) — Điểm giống và khác nhau.",
      answer: "Đáp án mẫu:\n- Giống nhau: Cùng thuộc ngành CNTT, cùng làm việc với dữ liệu và hệ thống phần mềm.\n- Khác nhau: Developer tập trung viết code tạo tính năng cho người dùng (Frontend/Backend); còn DBA tập trung vào tầng lưu trữ bên dưới — đảm bảo CSDL chạy nhanh, không bị quá tải, không bị mất dữ liệu và an toàn bảo mật."
    }
  ]
}
