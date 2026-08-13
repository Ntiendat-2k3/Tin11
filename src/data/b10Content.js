export const b10Content = {
  warmUp: {
    question: "Làm thế nào nhà trường tìm ra ngay học sinh đạt giải Nhất toàn khối chỉ sau 1 giây?",
    description: "Nếu có 2.000 học sinh và mỗi lớp lưu điểm trên một cuốn sổ tay hoặc 1 file Excel riêng lẻ, việc thống kê khen thưởng sẽ mất nhiều ngày. Nhưng với một hệ thống dữ liệu tập trung, hiệu trưởng chỉ cần 1 cú nhấp chuột. Chào mừng em đến với thế giới của Dữ liệu & Cơ sở dữ liệu!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Bài toán quản lý dữ liệu trong thực tế tổ chức",
      subsections: [
        {
          heading: "Vấn đề đặt ra",
          text: "Mọi tổ chức xã hội (trường học, bệnh viện, ngân hàng, siêu thị, sàn thương mại điện tử) đều phải quản lý lượng dữ liệu khổng lồ: hồ sơ học sinh, bệnh án bệnh nhân, tài khoản khách hàng, đơn hàng tồn kho. Nếu chỉ ghi chép thủ công hoặc lưu trữ trên các file Excel phân tán, việc tra cứu sẽ cực kỳ chậm chạp, dễ trùng lặp và sai sót.",
          points: [
            "Ví dụ thực tế: Trường có 40 lớp, mỗi lớp lưu 1 file Excel điểm riêng → khi cần lọc danh sách học sinh đạt học bổng toàn trường phải mở tay từng file rất mất thời gian.",
            "Giải pháp: Cần một hệ thống lưu trữ dữ liệu tập trung, có cấu trúc khoa học và cho phép nhiều người cùng truy cập an toàn."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Chu trình xử lý thông tin: Data → Processing → Information → Decision",
      subsections: [
        {
          heading: "Bốn bước trong chu trình D-P-I-D",
          text: "Hiểu rõ sự khác biệt bản chất giữa Dữ liệu (Data) và Thông tin (Information) là chìa khóa của toàn bộ môn học.",
          points: [
            "💡 Mẹo nhớ: Viết tắt 'D-P-I-D' (Quy trình 1 chiều: Dữ liệu thô → qua máy Xử lý → ra Thông tin có nghĩa → con người đưa ra Quyết định).",
            "Phân biệt Data vs Information: Data là con số, sự kiện thô rời rạc (ví dụ: '8, 9, 7, 10'); Information là kết luận đã qua xử lý có ý nghĩa (ví dụ: 'Học lực Giỏi, xếp thứ 2 của lớp')."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Thành phần", "Định nghĩa", "Ví dụ trong Quản lý Học sinh"],
        rows: [
          ["Data (Dữ liệu)", "Các số liệu, sự kiện thô chưa qua phân tích, xử lý", "Điểm kiểm tra 15p, 1 tiết, thi HK của từng học sinh"],
          ["Processing (Xử lý)", "Thao tác tính toán, tổng hợp, sắp xếp, lọc dữ liệu", "Tính điểm trung bình môn, xếp thứ hạng, xét học lực"],
          ["Information (Thông tin)", "Kết quả sau xử lý, mang ý nghĩa cụ thể cho người đọc", "Bảng danh sách học sinh đạt danh hiệu Học sinh Giỏi"],
          ["Decision (Quyết định)", "Hành động, chính sách được đưa ra dựa trên thông tin", "Hiệu trưởng ký quyết định khen thưởng và cấp học bổng"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Đặc điểm của Dữ liệu trong Quản lý hiện đại",
      functions: [
        {
          name: "Khối lượng lớn (Volume)",
          desc: "Hàng triệu đến hàng tỷ bản ghi dữ liệu phát sinh mỗi ngày từ các giao dịch thanh toán, tương tác mạng xã hội và cảm biến IoT."
        },
        {
          name: "Tốc độ phát sinh cao (Velocity)",
          desc: "Dữ liệu được cập nhật theo thời gian thực (Real-time), đòi hỏi hệ thống phải xử lý tức thời mà không bị gián đoạn."
        },
        {
          name: "Đa dạng định dạng (Variety)",
          desc: "Không chỉ là các con số và văn bản có cấu trúc, dữ liệu còn gồm hình ảnh, video, âm thanh và tài liệu phi cấu trúc."
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Khai thác Thông tin phục vụ Ra Quyết định (Data Mining)",
      subsections: [
        {
          heading: "Từ thông tin đến quyết định kinh doanh",
          text: "Dữ liệu được lưu trữ không chỉ để lưu kho mà để phân tích, tìm ra các quy luật ẩn giúp tối ưu hóa hoạt động.",
          points: [
            "Ví dụ kinh điển về siêu thị: Phân tích hàng triệu hóa đơn mua hàng → phát hiện khách mua bỉm trẻ em thường mua kèm sữa tươi → siêu thị quyết định xếp hai mặt hàng này cạnh nhau để tăng doanh thu.",
            "Trong giáo dục: Phân tích phổ điểm qua nhiều năm → phát hiện môn học sinh đang gặp khó khăn → ban giám hiệu điều chỉnh phân phối chương trình và phương pháp dạy học."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành Chu trình D-P-I-D",
      steps: [
        {
          step: "Bảng đối chiếu Data (Thô) vs Information (Có nghĩa)",
          detail: "Dữ liệu thô (Data): '7, 8, 9, 6, 10' → Thông tin (Information): 'Điểm trung bình = 8.0, Xếp loại Giỏi'\nDữ liệu thô (Data): '15/8, 16/8, tạnh ráo' → Thông tin (Information): 'Tuần này thời tiết thuận lợi cho hoạt động dã ngoại ngoài trời'"
        },
        {
          step: "Mô phỏng chu trình ra quyết định trong trường học",
          detail: "[Data] Điểm thi 8 môn của 2.000 học sinh nhập vào hệ thống\n   ↓ Processing (Tính điểm trung bình học kỳ theo công thức trọng số)\n[Information] Danh sách 50 học sinh có điểm cao nhất khối\n   ↓\n[Decision] Hội đồng khen thưởng quyết định cấp học bổng khuyến học"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Dãy giá trị '7.5, 8.0, 9.0, 6.5' thu được sau bài kiểm tra của một học sinh được gọi là gì trong chu trình xử lý thông tin?",
      options: [
        "A. Information (Thông tin)",
        "B. Data (Dữ liệu)",
        "C. Decision (Quyết định)",
        "D. Processing (Xử lý)"
      ],
      answer: "B",
      explanation: "Các con số điểm số thô chưa qua tính toán, tổng hợp thành kết luận có ý nghĩa được gọi là Dữ liệu (Data)."
    },
    {
      question: "Thứ tự chính xác của 4 thành phần trong chu trình xử lý thông tin phục vụ quản lý là gì?",
      options: [
        "A. Information → Data → Processing → Decision",
        "B. Processing → Data → Information → Decision",
        "C. Data → Processing → Information → Decision",
        "D. Data → Information → Processing → Decision"
      ],
      answer: "C",
      explanation: "Quy trình chuẩn là: Data (Dữ liệu) → Processing (Xử lý) → Information (Thông tin) → Decision (Quyết định)."
    }
  ],
  examTypes: [
    "Cho một tập số liệu hoặc câu phát biểu → yêu cầu phân biệt đâu là Data (dữ liệu thô) và đâu là Information (thông tin sau xử lý).",
    "Trình bày và phân tích ví dụ minh họa đủ 4 bước trong chu trình D-P-I-D trong một lĩnh vực tự chọn (y tế, bán lẻ, giao thông thông minh).",
    "Giải thích vì sao các tổ chức lớn bắt buộc phải chuyển từ lưu trữ sổ sách/Excel rời rạc sang hệ thống Cơ sở dữ liệu tập trung."
  ],
  homework: [
    "Chọn 1 tổ chức thực tế (trường học, quán cà phê, tiệm sách, cửa hàng thời trang...) và mô tả bài toán quản lý dữ liệu của tổ chức đó hiện gặp khó khăn gì nếu làm thủ công.",
    "Vẽ sơ đồ chu trình D-P-I-D áp dụng cho chính bài toán quản lý điểm số và kế hoạch ôn thi môn Tin học của em trong học kỳ này.",
    "Tìm 1 ví dụ thực tế về 'Khai thác dữ liệu để gợi ý cá nhân hóa' (như Shopee gợi ý món hàng, Netflix gợi ý phim, YouTube gợi ý video) và giải thích ngắn gọn cơ chế hoạt động.",
    "Lập bảng so sánh 2 cột nêu rõ ít nhất 4 ưu điểm và 2 nhược điểm giữa quản lý bằng Sổ sách giấy vs Phần mềm Cơ sở dữ liệu."
  ]
}
