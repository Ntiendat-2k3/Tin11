export const b7Content = {
  warmUp: {
    question: "Vì sao bạn gõ Google mãi mà không ra đúng tài liệu mình cần?",
    description: "Ai cũng biết gõ từ khóa vào Google, nhưng hầu hết mọi người chỉ tìm theo bản năng tự nhiên. Biến việc 'search Google' thành kỹ năng có phương pháp giúp em lọc đúng tài liệu chuẩn xác giữa hàng triệu kết quả trong vài giây!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Kỹ thuật lựa chọn từ khóa chính xác và cô đọng",
      subsections: [
        {
          heading: "Nguyên tắc chọn từ khóa",
          text: "Dùng danh từ/cụm danh từ cốt lõi, loại bỏ hoàn toàn các hư từ (là, thì, mà, và, làm sao, như thế nào...), ưu tiên thuật ngữ chuyên ngành thay vì câu hỏi tự nhiên dài dòng.",
          points: [
            "Ví dụ thực tế: Thay vì gõ 'làm sao để tính diện tích hình tròn vậy mọi người ơi' → chỉ cần gõ 'công thức tính diện tích hình tròn'.",
            "Cơ chế máy tìm kiếm: Máy tìm kiếm phân tích và đánh chỉ mục (index) theo từ khóa cốt lõi, không xử lý tốt các câu hỏi giao tiếp ngữ pháp dài dòng.",
            "💡 Mẹo nhớ: Search Google giống như 'gọi món' — càng nói ngắn gọn, rõ ràng đúng tên món thì phục vụ mang đúng món; nói lan man rất dễ bị hiểu sai ý."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Cú pháp tìm kiếm nâng cao trên Google",
      subsections: [
        {
          heading: "5 Cú pháp toán tử nâng cao cần thuộc lòng",
          text: "Đây là kiến thức trọng tâm nhất của bài — giúp em khoanh vùng chính xác nội dung cần tìm.",
          points: [
            "💡 Mẹo nhớ theo hình ảnh: Ngoặc kép = 'Khóa cứng cụm từ' | Dấu trừ (-) = 'Trừ đi cái không muốn' | site: = 'Khoanh vùng website' | filetype: = 'Lọc định dạng file'."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Cú pháp", "Ý nghĩa", "Ví dụ thực tế"],
        rows: [
          ["\"...\" (ngoặc kép)", "Tìm chính xác cụm từ, giữ nguyên thứ tự không đảo từ", "\"kiến trúc Von Neumann\""],
          ["site:", "Giới hạn phạm vi tìm kiếm trong 1 website hoặc tên miền", "site:vietjack.com Tin học 11"],
          ["filetype:", "Chỉ tìm kiếm 1 định dạng tệp tin cụ thể (pdf, docx, pptx...)", "giáo án Tin học 11 filetype:pdf"],
          ["- (dấu trừ)", "Loại bỏ các kết quả chứa từ khóa không mong muốn", "python -snake (loại kết quả về loài rắn)"],
          ["OR", "Tìm kiếm một trong hai từ khóa (phải viết hoa chữ OR)", "SGK Tin 11 KNTT OR Cánh diều"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Đánh giá độ tin cậy của nguồn thông tin",
      functions: [
        {
          name: "Ưu tiên nguồn chính thống (.edu.vn, .gov.vn)",
          desc: "Các website của cơ quan nhà nước (.gov.vn), trường đại học / tổ chức giáo dục (.edu.vn), cơ quan báo chí chính thống và sách giáo khoa điện tử của Nhà xuất bản Giáo dục."
        },
        {
          name: "Cảnh giác với nguồn tin không rõ ràng",
          desc: "Bài viết không ghi tên tác giả, không có ngày đăng cập nhật, website cá nhân chứa nhiều quảng cáo câu view, hoặc thông tin trái ngược với đa số nguồn uy tín khác."
        },
        {
          name: "Ví dụ thực tế",
          desc: "Khi tra cứu số liệu dân số Việt Nam, phải ưu tiên trang Tổng cục Thống kê (gso.gov.vn) hơn là một bài blog cá nhân không trích dẫn nguồn."
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Sử dụng bộ lọc kết quả tìm kiếm (Search Tools)",
      subsections: [
        {
          heading: "Các công cụ lọc mạnh mẽ của Google",
          points: [
            "Thời gian: Lọc 24 giờ qua, 1 tuần, 1 năm qua hoặc khoảng thời gian tùy chỉnh — cực kỳ hữu ích khi tìm tin tức mới nhất hoặc dữ liệu theo năm.",
            "Loại nội dung: Tab Hình ảnh, Video, Tin tức, Sách hoặc Google Scholar (scholar.google.com) chuyên tìm tài liệu khoa học học thuật.",
            "Khu vực & Ngôn ngữ: Giới hạn kết quả bằng tiếng Việt hoặc theo vị trí địa lý."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Kỹ năng tổng hợp & Trích dẫn thông tin (Tránh đạo văn)",
      subsections: [
        {
          heading: "Quy tắc lấy thông tin học tập",
          points: [
            "Đọc – hiểu – diễn đạt lại bằng ngôn ngữ của chính mình (Paraphrase), không copy-paste nguyên văn bài viết của người khác.",
            "Ghi rõ nguồn tham khảo: Tác giả, tên bài viết, đường link URL và ngày truy cập.",
            "Đây là kỹ năng cốt lõi liên hệ trực tiếp tới bài học Đạo đức số (Bài 9)."
          ]
        }
      ],
      steps: [
        {
          step: "So sánh tìm kiếm thường vs Tìm kiếm nâng cao",
          detail: "Thử tìm kiếm: 'cách học tốt tin học 11' (cho ra hàng triệu kết quả chung chung) so với '\"phương pháp học tốt\" tin học 11 site:vietjack.com filetype:pdf' (lọc ngay file PDF chuẩn)."
        },
        {
          step: "Kết hợp nhiều toán tử trong 1 truy vấn",
          detail: "Cú pháp: 'đề thi Tin học 11 -đáp án filetype:docx site:.edu.vn' → Tìm file Word đề thi (không kèm đáp án) từ các trang web giáo dục."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Để tìm kiếm chính xác định dạng tài liệu PDF về bài giảng Hệ điều hành chỉ trong trang web của Bộ Giáo dục (moet.gov.vn), cú pháp nào sau đây là đúng nhất?",
      options: [
        "A. \"bài giảng Hệ điều hành\" filetype:pdf site:moet.gov.vn",
        "B. bài giảng Hệ điều hành type:pdf url:moet.gov.vn",
        "C. moet.gov.vn search \"bài giảng Hệ điều hành\" pdf",
        "D. site:pdf filetype:moet.gov.vn \"bài giảng Hệ điều hành\""
      ],
      answer: "A",
      explanation: "Toán tử ngoặc kép \"...\" khóa chính xác cụm từ, filetype:pdf lọc đúng định dạng tệp PDF, và site:moet.gov.vn giới hạn phạm vi tìm kiếm trong website moet.gov.vn."
    },
    {
      question: "Khi tra cứu tài liệu học tập trên Internet, nguồn thông tin nào sau đây có độ tin cậy CAO NHẤT?",
      options: [
        "A. Bài viết trên một diễn đàn mạng xã hội không có tên tác giả.",
        "B. Bài viết trên website có tên miền kết thúc bằng .gov.vn hoặc .edu.vn.",
        "C. Video trên TikTok có nhiều lượt xem và bình luận.",
        "D. Trang web cá nhân chứa nhiều biểu ngữ quảng cáo game."
      ],
      answer: "B",
      explanation: "Tên miền .gov.vn (cơ quan chính phủ) và .edu.vn (tổ chức giáo dục) được kiểm duyệt và quản lý chặt chẽ, luôn có độ tin cậy và tính chính thống cao nhất."
    }
  ],
  examTypes: [
    "Cho một nhu cầu tìm kiếm cụ thể → yêu cầu viết đúng câu lệnh tìm kiếm nâng cao (kết hợp ngoặc kép \"\", site:, filetype:, dấu trừ -).",
    "Trắc nghiệm độ tin cậy: Chọn nguồn thông tin chính thống, đáng tin cậy nhất trong 4 lựa chọn cho trước.",
    "Tình huống xử lý: 'Kết quả tìm kiếm trả về quá nhiều nội dung rác không liên quan' → đề xuất phương án tinh chỉnh từ khóa và áp dụng toán tử lọc."
  ],
  homework: [
    "Thực hiện 3 truy vấn tìm kiếm nâng cao trên Google (sử dụng lần lượt: ngoặc kép \"\", site:, filetype:). Chụp ảnh màn hình kết quả và ghi nhận xét về sự khác biệt so với tìm kiếm thường.",
    "Tìm 1 chủ đề bất kỳ (ví dụ: Biến đổi khí hậu tại Việt Nam), so sánh chất lượng thông tin giữa 1 nguồn chính thống (.gov.vn / .edu.vn) và 1 bài viết trên blog cá nhân.",
    "Viết lại một đoạn văn ngắn khoảng 5 câu bằng lời văn của em dựa trên thông tin tìm được từ Internet (không copy nguyên văn), kèm theo trích dẫn nguồn tham khảo đầy đủ."
  ]
}
