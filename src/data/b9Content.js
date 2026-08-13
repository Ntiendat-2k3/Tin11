export const b9Content = {
  warmUp: {
    question: "Bạn có chắc tài khoản và thông tin cá nhân của mình đang an toàn?",
    description: "Nhận được tin nhắn 'Bạn đã trúng thưởng iPhone 17' hay email 'Tài khoản ngân hàng bị khóa, bấm vào đây để mở' — chỉ một cú click chuột bất cẩn là toàn bộ mật khẩu, thông tin cá nhân và tiền bạc có thể bốc hơi. Bài học này sẽ trang bị cho em chiếc 'áo giáp số' vững chắc nhất!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Phishing — Tấn công giả mạo",
      subsections: [
        {
          heading: "Khái niệm Phishing",
          text: "Phishing (tấn công giả mạo) là hình thức kẻ xấu giả danh các tổ chức uy tín (ngân hàng, trường học, sàn thương mại điện tử) qua email, tin nhắn SMS hoặc website giả mạo nhằm lừa nạn nhân cung cấp thông tin nhạy cảm như mật khẩu, mã OTP, số thẻ tín dụng.",
          points: [
            "Ví dụ thực tế: Email thông báo 'Tài khoản của bạn bị tạm khóa, vui lòng nhấp vào liên kết để xác thực' — link dẫn đến trang web giả mạo có giao diện y hệt ngân hàng thật để đánh cắp tài khoản.",
            "Dấu hiệu nhận diện: Tên miền email/link bị sai khác nhẹ so với tên chính thức (thêm từ phụ như -verify, -support), nội dung tạo cảm giác hối thúc, khẩn cấp bất thường ('trong 24h'), yêu cầu nhập trực tiếp OTP/mật khẩu."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Social Engineering — Kỹ thuật thao túng tâm lý",
      subsections: [
        {
          heading: "Kỹ thuật thao túng tâm lý con người",
          text: "Social Engineering là thủ đoạn lợi dụng điểm yếu tâm lý của con người (sự cả tin, nỗi sợ hãi, lòng tham, sự tò mò) để lừa nạn nhân tự nguyện giao nộp thông tin hoặc cấp quyền truy cập — không cần dùng đến công cụ kỹ thuật bẻ khóa phức tạp.",
          points: [
            "Ví dụ thực tế: Giả danh nhân viên IT gọi điện 'Em đọc mật khẩu Wi-Fi/tài khoản học sinh để anh hỗ trợ nâng cấp phần mềm'; hoặc tin nhắn trúng thưởng xe máy/điện thoại yêu cầu nạp thẻ cào để nhận quà.",
            "💡 Mẹo nhớ: Phishing thường thực hiện qua đường link/email giả mạo; Social Engineering tấn công trực tiếp vào tâm lý con người qua lời nói, tin nhắn trò chuyện (Phishing có thể xem là một công cụ nằm trong Social Engineering)."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Thông tin cá nhân nhận dạng (PII) & Quyền riêng tư số",
      subsections: [
        {
          heading: "Thông tin cá nhân (PII - Personally Identifiable Information)",
          text: "PII là bất kỳ dữ liệu nào có thể dùng để xác định trực tiếp hoặc gián tiếp danh tính của một cá nhân cụ thể.",
          points: [
            "Các thông tin thuộc PII: Họ tên đầy đủ, số CCCD, số điện thoại, địa chỉ nhà riêng, ngày tháng năm sinh, ảnh khuôn mặt, dữ liệu sinh trắc học (vân tay, mống mắt), lịch sử định vị GPS.",
            "Ví dụ rủi ro: Đăng story mạng xã hội check-in tại nhà kèm bảng tên trường và số điện thoại → vô tình cung cấp trọn bộ PII cho kẻ xấu theo dõi, định vị."
          ]
        },
        {
          heading: "Quyền riêng tư trong môi trường số (Digital Privacy)",
          text: "Quyền kiểm soát thông tin cá nhân của chính mình: ai được phép xem, dữ liệu được dùng vào việc gì. Cần bật chế độ tài khoản riêng tư (Private), đọc kỹ quyền truy cập (camera, danh bạ, vị trí) trước khi cài app."
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Biện pháp Phòng ngừa & Xử lý khi bị lừa đảo",
      functions: [
        {
          name: "Biện pháp phòng ngừa chủ động",
          desc: "Tuyệt đối không nhấp vào liên kết lạ; xác minh qua kênh chính thống (gọi tổng đài chính thức); bật xác thực 2 yếu tố (2FA); không bao giờ chia sẻ mã OTP với bất kỳ ai."
        },
        {
          name: "Quy trình xử lý khi phát hiện bị lừa đảo",
          desc: "1. Đổi mật khẩu ngay lập tức → 2. Khóa thẻ/tài khoản ngân hàng → 3. Thông báo cho người thân, nhà trường cảnh giác → 4. Lưu lại bằng chứng (ảnh chụp tin nhắn/email) để trình báo cơ quan chức năng."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành Nhận diện Phishing",
      steps: [
        {
          step: "Đối chiếu tên miền Email thật vs Giả mạo",
          detail: "Email thật từ Vietcombank: noreply@vietcombank.com.vn\nEmail giả mạo (Phishing): noreply@vietcombank-verify.com (tên miền lạ, chèn thêm chữ '-verify')\n\n→ Luôn soi kỹ phần đuôi tên miền đằng sau ký tự '@'."
        },
        {
          step: "Checklist 4 câu hỏi vàng trước khi nhấp vào một liên kết",
          detail: "1. Người gửi có phải người quen hoặc tổ chức chính thống không?\n2. Nội dung có tạo cảm giác đe dọa, hối thúc bất thường không?\n3. Đường link khi rê chuột vào có đúng tên miền chính thức không?\n4. Trang web có yêu cầu nhập mã OTP hoặc mật khẩu không?\n→ Nếu có từ 1 dấu hiệu nghi vấn → DỪNG LẠI NGAY LẬP TỨC."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Bạn nhận được một email từ 'service@facebook-security-check.com' thông báo tài khoản Facebook của bạn sẽ bị xóa vĩnh viễn trong 12 giờ nếu không nhấp vào liên kết để xác thực. Hành động đúng đắn nhất là gì?",
      options: [
        "A. Bấm vào liên kết ngay để kịp bảo vệ tài khoản không bị xóa.",
        "B. Trả lời email yêu cầu họ gia hạn thêm thời gian.",
        "C. Không bấm vào liên kết, kiểm tra tên miền (không phải @facebook.com), đánh dấu là thư lừa đảo (Spam/Phishing).",
        "D. Chuyển tiếp email cho tất cả bạn bè để cảnh báo họ cùng xác thực."
      ],
      answer: "C",
      explanation: "Email tạo cảm giác cấp bách, đe dọa và sử dụng tên miền phụ lạ (@facebook-security-check.com) là dấu hiệu kinh điển của tấn công Phishing. Tuyệt đối không nhấp vào liên kết."
    },
    {
      question: "Dữ liệu nào sau đây KHÔNG thuộc nhóm Thông tin nhận dạng cá nhân (PII)?",
      options: [
        "A. Số Căn cước công dân (CCCD).",
        "B. Bức ảnh chụp phong cảnh hoàng hôn trên biển không có người.",
        "C. Dấu vân tay dùng để mở khóa điện thoại.",
        "D. Địa chỉ nhà riêng kèm số điện thoại."
      ],
      answer: "B",
      explanation: "Ảnh phong cảnh không chứa dữ liệu danh tính hay thông tin liên quan đến bất kỳ cá nhân cụ thể nào nên không thuộc nhóm PII."
    }
  ],
  examTypes: [
    "Cho một tình huống / nội dung email mẫu → yêu cầu phân tích xem đây có phải là Phishing không, chỉ ra các dấu hiệu nhận biết cụ thể.",
    "Phân biệt sự khác nhau giữa Phishing và Social Engineering thông qua các ví dụ thực tế.",
    "Trắc nghiệm xác định các loại dữ liệu thuộc nhóm Thông tin nhận dạng cá nhân (PII)."
  ],
  homework: [
    "Tìm một ví dụ tin nhắn hoặc email lừa đảo có thật (từ người thân kể lại hoặc trên báo chí chính thống) → phân tích 3 dấu hiệu nhận biết lừa đảo.",
    "Rà soát lại toàn bộ thiết lập quyền riêng tư trên tài khoản Facebook/TikTok/Zalo của em. Liệt kê các thay đổi em đã thực hiện để bảo vệ PII tốt hơn.",
    "Viết quy trình 4 bước xử lý khẩn cấp khi phát hiện tài khoản email hoặc mạng xã hội của mình bị kẻ xấu đăng nhập trái phép."
  ]
}
