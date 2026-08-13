export const b15Content = {
  warmUp: {
    question: "Chuyện gì xảy ra nếu hacker lấy trộm CSDL ngân hàng hoặc nhân viên vô tình xóa nhầm dữ liệu?",
    description: "Sau khi biết cách 'khai thác' CSDL bằng SQL ở Bài 14, bài học này giúp em hiểu vì sao và làm thế nào để BẢO VỆ dữ liệu đó — nối tiếp tư duy an toàn thông tin đã học ở Bài 9 nhưng ở tầm mức hệ thống doanh nghiệp lớn!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Bốn nhóm nguy cơ gây mất an toàn CSDL",
      subsections: [
        {
          heading: "Nhận diện các mối đe dọa với CSDL",
          text: "Mọi hệ thống CSDL đều đối mặt với 5 nhóm nguy cơ chính gây mất mát, hư hỏng hoặc rò rỉ dữ liệu."
        }
      ],
      comparisonTable: {
        headers: ["Nhóm nguy cơ", "Bản chất nguyên nhân", "Ví dụ tình huống thực tế cụ thể"],
        rows: [
          ["Sự cố phần cứng", "Hỏng hóc thiết bị vật lý, mất nguồn điện", "Ổ cứng máy chủ bị hỏng, mất điện đột ngột khi DBMS đang ghi dữ liệu"],
          ["Sự cố phần mềm", "Lỗi DBMS, lỗi hệ điều hành, xung đột phần mềm", "DBMS bị crash bất ngờ làm hỏng tập tin dữ liệu (corrupted file)"],
          ["Truy cập trái phép", "Hacker xâm nhập, rò rỉ tài khoản", "Kẻ xấu đoán mật khẩu admin hoặc khai thác lỗ hổng lấy cắp dữ liệu"],
          ["Mã độc (Malware)", "Virus, Trojan, Ransomware", "Mã độc tống tiền mã hóa toàn bộ CSDL và đòi tiền chuộc"],
          ["Lỗi con người", "Vô tình hoặc cố ý thao tác sai", "Nhân viên vô tình chạy nhầm lệnh DELETE thiếu mệnh đề WHERE (liên hệ Bài 14!)"]
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. Sao lưu dự phòng (Backup & Recovery)",
      subsections: [
        {
          heading: "Biện pháp phòng ngừa sự cố phần cứng & phần mềm",
          text: "Sao lưu (Backup) là việc tạo bản sao dữ liệu tại thời điểm nhất định và lưu ở nơi an toàn. Khi xảy ra sự cố, hệ thống sẽ thực hiện Khôi phục (Restore) để đưa CSDL về trạng thái hoạt động gần nhất.",
          points: [
            "Áp dụng quy tắc sao lưu 3-2-1 đã học ở Bài 6 vào tầm vóc doanh nghiệp.",
            "CSDL lớn thường được sao lưu tự động theo lịch (hàng ngày/hàng giờ) để giảm thiểu tối đa lượng dữ liệu bị mất khi sự cố xảy ra."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Phân quyền truy cập (Authorization) & Nhóm lệnh DCL",
      subsections: [
        {
          heading: "Cơ chế kiểm soát quyền hạn",
          text: "Phân quyền truy cập quy định rõ ràng AI ĐƯỢC PHÉP LÀM GÌ trên CSDL. Đăng nhập thành công vào hệ thống không có nghĩa là được truy cập mọi dữ liệu.",
          points: [
            "Ví dụ thực tế: Tài khoản giáo viên chỉ có quyền SELECT (xem) và UPDATE (sửa) điểm lớp mình dạy, tuyệt đối không có quyền DELETE (xóa) hay DROP TABLE (xóa cả bảng).",
            "Đây chính là ứng dụng thực tế của nhóm lệnh DCL (Data Control Language) đã học ở Bài 12."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Nguyên tắc quyền tối thiểu (Least Privilege - Nguyên tắc vàng)",
      subsections: [
        {
          heading: "Định nghĩa & Ý nghĩa nguyên tắc Least Privilege",
          text: "Mỗi người dùng hoặc nhóm người dùng chỉ nên được cấp ĐÚNG VÀ ĐỦ các quyền cần thiết để hoàn thành công việc — tuyệt đối không cấp quyền dư thừa 'cho chắc phòng khi cần'.",
          points: [
            "Ví dụ thực tế: Nhân viên thực tập chỉ cần xem báo cáo doanh số → chỉ cấp quyền SELECT, tuyệt đối không cấp thêm quyền UPDATE/DELETE/DROP dù họ 'có vẻ đáng tin cậy'.",
            "Tác dụng: Giảm thiểu tối đa thiệt hại nếu tài khoản đó bị rò rỉ mật khẩu hoặc nhân viên vô tình/cố ý thao tác sai.",
            "💡 Mẹo nhớ: Least Privilege giống nguyên tắc phát chìa khóa trong công ty — nhân viên kho chỉ giữ chìa khóa kho, không phát luôn chìa khóa phòng Giám đốc 'cho tiện'."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Mã hóa dữ liệu & Nhật ký hệ thống (Audit Log)",
      functions: [
        {
          name: "Mã hóa dữ liệu (Encryption)",
          desc: "Chuyển dữ liệu gốc thành dạng mật mã khó đọc khi lưu trữ hoặc truyền trên mạng — kể cả khi hacker lấy trộm được file CSDL, không có khóa giải mã cũng không đọc được mật khẩu hay số thẻ ngân hàng."
        },
        {
          name: "Nhật ký hệ thống (Log) & Giám sát (Auditing)",
          desc: "DBMS tự động ghi lại toàn bộ lịch sử: Ai đăng nhập, chạy câu lệnh SQL gì, vào lúc nào — giúp phục vụ công tác truy vết thủ phạm và nguyên nhân khi xảy ra sự cố."
        }
      ]
    },
    {
      id: "sec-6",
      title: "6. Minh họa thực hành: Phân quyền DCL & Bảng Role-based Access",
      steps: [
        {
          step: "1. Câu lệnh DCL phân quyền thực tế (GRANT & REVOKE)",
          detail: "-- Cấp quyền chỉ được XEM cho tài khoản giaovien_A\nGRANT SELECT ON Diem TO giaovien_A;\n\n-- Thu hồi quyền xóa dữ liệu (nếu từng lỡ cấp nhầm)\nREVOKE DELETE ON Diem FROM giaovien_A;\n\n→ Đây chính là minh họa sống động của nguyên tắc Least Privilege: chỉ cấp đúng quyền SELECT và chủ động REVOKE quyền DELETE nguy hiểm."
        },
        {
          step: "2. Bảng Phân quyền theo Vai trò (Role-based Access Control - RBAC)",
          detail: "Vai trò             | SELECT | INSERT | UPDATE | DELETE | DROP TABLE\n-------------------------------------------------------------------\nHọc sinh            |   ✓    |   ✗    |   ✗    |   ✗    |     ✗     \nGiáo viên           |   ✓    |   ✓    |   ✓    |   ✗    |     ✗     \nQuản trị viên (DBA) |   ✓    |   ✓    |   ✓    |   ✓    |     ✓     "
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Nguyên tắc 'Quyền tối thiểu' (Least Privilege) trong an toàn CSDL được hiểu đúng nhất là gì?",
      options: [
        "A. Không cấp bất kỳ quyền nào cho người dùng",
        "B. Chỉ cấp đúng và đủ quyền cần thiết để người dùng hoàn thành công việc được giao",
        "C. Cấp tất cả các quyền cho người dùng rồi thu hồi sau",
        "D. Chỉ người quản trị DBA mới cần có mật khẩu đăng nhập"
      ],
      answer: "B",
      explanation: "Nguyên tắc Least Privilege yêu cầu chỉ cấp đúng và đủ các quyền tối thiểu phục vụ công việc của từng vai trò, tuyệt đối không cấp dư thừa nhằm hạn chế rủi ro an ninh."
    },
    {
      question: "Câu lệnh SQL nào sau đây dùng để THU HỒI quyền thao tác dữ liệu đã được cấp cho người dùng trước đó?",
      options: [
        "A. GRANT",
        "B. REMOVE",
        "C. REVOKE",
        "D. CANCEL"
      ],
      answer: "C",
      explanation: "Trong nhóm lệnh DCL: GRANT dùng để cấp quyền, còn REVOKE dùng để thu hồi quyền đã cấp."
    },
    {
      question: "Hành động một nhân viên vô tình chạy lệnh 'DELETE FROM HocSinh' mà không có mệnh đề WHERE thuộc nhóm nguy cơ nào?",
      options: [
        "A. Sự cố phần cứng",
        "B. Lỗi phần mềm DBMS",
        "C. Tấn công mã độc",
        "D. Lỗi con người (Vô tình thao tác sai)"
      ],
      answer: "D",
      explanation: "Chạy nhầm câu lệnh gây hỏng/mất dữ liệu do sơ suất của người dùng/nhân viên thuộc nhóm nguy cơ do Lỗi con người."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Cho một tình huống sự cố CSDL cụ thể → Phân loại thuộc nhóm nguy cơ nào (phần cứng / phần mềm / truy cập trái phép / mã độc / con người).",
      answer: "Phương pháp giải: Dựa vào nguyên nhân gốc rễ: Nếu do thiết bị/điện → Phần cứng. Nếu do crash phần mềm → Phần mềm. Nếu do sơ suất gõ sai → Con người. Nếu do hacker/mã hóa → Mã độc/Truy cập trái phép."
    },
    {
      question: "Dạng 2: Giải thích nguyên tắc Least Privilege qua một ví dụ tự chọn.",
      answer: "Phương pháp giải: Định nghĩa nguyên tắc + Nêu ví dụ vai trò cụ thể (VD: Nhân viên bán hàng chỉ cần xem giá và tạo hóa đơn → cấp SELECT/INSERT trên Bảng HoaDon, không cấp DELETE hay DROP TABLE)."
    },
    {
      question: "Dạng 3: Viết câu lệnh GRANT / REVOKE cho một tình huống phân quyền cụ thể.",
      answer: "Phương pháp giải: Cú pháp: GRANT <quyền> ON <bảng> TO <tài_khoản>; và REVOKE <quyền> ON <bảng> FROM <tài_khoản>;"
    }
  ],
  homework: [
    {
      question: "Bài 1: Liệt kê 5 nguy cơ mất an toàn CSDL mà một trường học có thể gặp phải, phân loại theo 5 nhóm đã học.",
      answer: "Đáp án mẫu:\n1. Phần cứng: Máy chủ lưu CSDL VnEdu bị cháy hỏng ổ cứng.\n2. Phần mềm: Phần mềm DBMS bị lỗi ngắt đột ngột khi đang chốt sổ điểm.\n3. Truy cập trái phép: Học sinh lấy trộm mật khẩu tài khoản giáo viên để sửa điểm.\n4. Mã độc: Server trường bị dính Virus Ransomware mã hóa dữ liệu đòi tiền chuộc.\n5. Con người: Cán bộ nhập liệu vô tình xóa nhầm danh sách học sinh thi lại."
    },
    {
      question: "Bài 2: Thiết kế bảng phân quyền (như minh họa) cho hệ thống quản lý thư viện có 3 vai trò: Học sinh mượn sách, Thủ thư, Quản trị hệ thống.",
      answer: "Đáp án mẫu:\n- Học sinh: SELECT (Xem sách)\n- Thủ thư: SELECT, INSERT, UPDATE (Tạo phiếu mượn, cập nhật trả sách)\n- Quản trị hệ thống (DBA): Full quyền (SELECT, INSERT, UPDATE, DELETE, DROP TABLE)"
    },
    {
      question: "Bài 3: Giải thích vì sao 'cấp quyền càng rộng càng tiện, càng ít rủi ro' là một quan niệm SAI — Phản biện bằng ví dụ cụ thể.",
      answer: "Đáp án mẫu:\nQuan niệm này SAI nghiêm trọng. Cấp quyền rộng có thể 'tiện' trước mắt vì không mất công cấu hình phân quyền, nhưng đẩy RỦI RO LÊN MỨC CỰC CAO. Ví dụ: Cấp quyền DELETE cho nhân viên nhập liệu → Khi họ sơ suất gõ nhầm lệnh xóa, toàn bộ CSDL sẽ bị mất hoàn toàn mà không có rào cản ngăn chặn."
    },
    {
      question: "Bài 4: Tìm hiểu và trình bày ngắn gọn 1 sự cố lộ dữ liệu (data breach) có thật báo chí đưa tin, phân tích nguyên nhân.",
      answer: "Hướng dẫn thực hiện:\nChọn 1 vụ việc rò rỉ thông tin khách hàng (VD: Sự cố lộ thông tin tài khoản ngân hàng hoặc Facebook) → Phân tích xem nguyên nhân do kẻ xấu tấn công truy cập trái phép hay rò rỉ từ chính sách bảo mật nội bộ kém."
    }
  ]
}
