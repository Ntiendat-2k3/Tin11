export const b3Content = {
  warmUp: {
    question: "Tại sao Zalo miễn phí nhưng Adobe Photoshop lại phải trả hàng triệu đồng?",
    description: "Phía sau mỗi phần mềm là một loại giấy phép (license) quy định ai được dùng, ai được sửa mã nguồn, ai phải trả tiền. Hiểu điều này giúp em không vô tình vi phạm bản quyền — và biết lựa chọn công cụ phù hợp mà không mất một đồng."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Bốn loại phần mềm theo bản quyền",
      subsections: [
        {
          heading: "Tại sao phần mềm lại có nhiều loại giấy phép?",
          text: "Phần mềm là sản phẩm trí tuệ. Người tạo ra nó có quyền quyết định: ai được dùng, có phải trả tiền không, và có được xem/sửa mã nguồn không. Bốn loại giấy phép phổ biến nhất:",
          points: [
            "Phần mềm thương mại (Commercial/Proprietary): Mã nguồn đóng, phải trả phí. Ví dụ: Microsoft Office, Adobe Photoshop, Windows 11.",
            "Phần mềm miễn phí (Freeware): Mã nguồn đóng nhưng không thu phí. Ví dụ: Zalo PC, Zoom bản free, 7-Zip.",
            "Phần mềm dùng thử (Shareware): Miễn phí có giới hạn thời gian hoặc tính năng, muốn dùng đủ phải trả tiền. Ví dụ: WinRAR (thông báo mua sau 40 ngày), Photoshop Trial.",
            "Phần mềm nguồn mở (Open Source): Công khai mã nguồn, thường miễn phí, cho phép xem, sửa và phân phối lại theo điều khoản giấy phép. Ví dụ: Linux, LibreOffice, VLC, Firefox."
          ]
        },
        {
          heading: "Chìa khóa phân biệt — chỉ cần nhớ 1 điều",
          text: "Chỉ có 'Nguồn mở' mới cho xem và sửa được mã nguồn (source code). Ba loại còn lại đều 'đóng hộp' — em chỉ dùng được phần mềm chứ không thể đọc hay thay đổi code bên trong.",
          points: [
            "Mẹo nhớ: Freeware = miễn phí nhưng đóng. Open Source = mở cả mã nguồn, thường miễn phí.",
            "Dễ nhầm: Freeware và Open Source đều có thể miễn phí về tiền, nhưng khác hoàn toàn về quyền truy cập mã nguồn.",
            "WinRAR là Shareware điển hình — về mặt kỹ thuật vẫn dùng được sau 40 ngày dùng thử, nhưng đó là vi phạm điều khoản."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Loại phần mềm", "Mã nguồn", "Có phải trả phí?", "Ví dụ thực tế"],
        rows: [
          ["Thương mại (Commercial)", "Đóng", "Có", "MS Office, Adobe Photoshop, Windows"],
          ["Miễn phí (Freeware)", "Đóng", "Không", "Zalo PC, 7-Zip, Zoom Free"],
          ["Dùng thử (Shareware)", "Đóng", "Miễn phí có giới hạn", "WinRAR, Photoshop Trial"],
          ["Nguồn mở (Open Source)", "Mở", "Thường miễn phí", "Linux, LibreOffice, VLC, Firefox"]
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. Phần mềm nguồn mở & Giấy phép GPL, MIT",
      subsections: [
        {
          heading: "Open Source là gì?",
          text: "Phần mềm nguồn mở (Open Source Software) công khai toàn bộ mã nguồn, cho phép người dùng tự do xem, sửa đổi và phân phối lại — nhưng phải tuân thủ điều khoản của giấy phép cụ thể đính kèm.",
          points: [
            "Người ta thường nhầm: 'mã nguồn mở = làm gì cũng được'. Không đúng — mỗi giấy phép có ràng buộc riêng.",
            "Hai giấy phép quan trọng nhất trong chương trình: GPL và MIT."
          ]
        },
        {
          heading: "GPL vs MIT — Điểm khác biệt cốt lõi",
          text: "GPL (GNU General Public License) và MIT là hai loại giấy phép nguồn mở phổ biến nhất, nhưng ràng buộc hoàn toàn khác nhau:",
          points: [
            "GPL (Dùng cho Linux kernel): Có tính 'lây lan' (copyleft) — nếu ai sửa code GPL và phát hành lại, bản sửa đó CŨNG phải công khai mã nguồn. Công ty không thể lấy code GPL về, sửa rồi bán kín mà không công khai mã nguồn.",
            "MIT License (Dùng rộng rãi cho các thư viện): Rất tự do — ai muốn làm gì cũng được, kể cả đóng gói bán thương mại, chỉ cần giữ lại dòng ghi công tác giả gốc.",
            "Mẹo nhớ: GPL = 'mở mãi mãi' (copyleft). MIT = 'tự do tuyệt đối, chỉ cần credit'.",
            "Ví dụ thực tế: Nhiều startup lấy thư viện MIT về để xây dựng sản phẩm đóng và bán — hoàn toàn hợp lệ. Nhưng nếu dùng code GPL mà không trả lại mã nguồn — vi phạm bản quyền."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Phần mềm chạy trên Internet (Web App / SaaS)",
      subsections: [
        {
          heading: "Định nghĩa & Đặc điểm",
          text: "Web App (hay SaaS — Software as a Service) là phần mềm chạy hoàn toàn trên máy chủ từ xa, người dùng truy cập qua trình duyệt mà không cần cài đặt gì lên máy. Dữ liệu lưu trên cloud chứ không lưu cục bộ.",
          points: [
            "Ví dụ thực tế: Google Docs (thay Word), Google Sheets (thay Excel), Canva (thay Photoshop), Gmail (thay Outlook desktop), Figma (thay Adobe XD).",
            "Ưu điểm: Dùng mọi thiết bị có trình duyệt + mạng, tự động cập nhật phiên bản mới, cộng tác real-time dễ dàng.",
            "Nhược điểm: Phụ thuộc Internet (mất mạng là mất khả năng làm việc), dữ liệu nằm trên server người khác (rủi ro bảo mật nếu hãng bị hack)."
          ]
        },
        {
          heading: "So sánh: Phần mềm cài máy vs Web App",
          text: "Câu hỏi hay gặp trong đề thi: 'Nên dùng loại nào cho tình huống X?' — cần nhớ ưu/nhược điểm mỗi loại.",
          points: [
            "Làm việc offline, cần tốc độ xử lý cao (chỉnh sửa video, đồ họa nặng) → Dùng phần mềm cài đặt cục bộ.",
            "Làm việc nhóm cần chia sẻ real-time, dùng nhiều thiết bị → Dùng Web App.",
            "Trường hợp lai: Microsoft Office 365 vừa có bản cài máy vừa có bản web online — xu hướng hiện đại là hybrid (lai)."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Lợi ích và Rủi ro của Phần mềm Nguồn mở",
      functions: [
        {
          name: "✅ Lợi ích 1: Tiết kiệm chi phí",
          desc: "Không mất tiền mua bản quyền. Rất phù hợp với trường học, tổ chức phi lợi nhuận, cá nhân. Ví dụ: LibreOffice thay thế hoàn toàn Microsoft Office với chi phí 0 đồng."
        },
        {
          name: "✅ Lợi ích 2: Minh bạch và An toàn",
          desc: "Hàng ngàn lập trình viên toàn cầu có thể đọc và kiểm tra mã nguồn. Lỗ hổng bảo mật và 'cửa hậu' (backdoor) khó tồn tại lâu vì bị cộng đồng phát hiện nhanh."
        },
        {
          name: "✅ Lợi ích 3: Tùy biến cao",
          desc: "Tổ chức có thể tải về, sửa theo nhu cầu riêng và triển khai nội bộ. Đây là lý do hầu hết siêu máy tính thế giới chạy Linux."
        },
        {
          name: "⚠️ Rủi ro 1: Hỗ trợ kỹ thuật hạn chế",
          desc: "Không có đường dây hỗ trợ 24/7 như phần mềm thương mại. Khi gặp lỗi phải tự tìm giải pháp trên diễn đàn cộng đồng — đòi hỏi người dùng có kỹ năng kỹ thuật nhất định."
        },
        {
          name: "⚠️ Rủi ro 2: Độ tương thích",
          desc: "Một số file .docx phức tạp (bảng biểu, macro) có thể hiển thị sai khi mở bằng LibreOffice thay vì Microsoft Word — đặc biệt trong môi trường làm việc chung với nhiều người dùng Office."
        },
        {
          name: "⚠️ Rủi ro 3: Chất lượng không đồng đều",
          desc: "Không phải mọi phần mềm nguồn mở đều được cộng đồng lớn duy trì. Một số dự án nhỏ có thể bị 'bỏ rơi' (abandoned) và không còn được cập nhật bảo mật."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Thực hành: Nhận diện giấy phép thực tế",
      steps: [
        {
          step: "Kiểm tra giấy phép phần mềm đang cài trên máy",
          detail: "Trên Windows: Mở Settings → Apps → Installed apps. Tìm tên phần mềm, Google '[Tên phần mềm] license type' để tra xem nó thuộc loại nào."
        },
        {
          step: "Đọc giấy phép MIT trong một dự án thực tế",
          detail: "Truy cập github.com/nicehash/NiceHashQuickMiner hoặc bất kỳ repo GitHub nào, tìm file có tên LICENSE.md — đây là nơi khai báo giấy phép chính thức của dự án."
        },
        {
          step: "Tìm phần mềm thay thế nguồn mở cho các phần mềm thương mại",
          detail: "Vào trang alternativeto.net, gõ tên phần mềm thương mại (VD: Photoshop) rồi lọc theo 'Open Source' để xem các lựa chọn thay thế miễn phí."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Điểm khác biệt CƠ BẢN nhất giữa Freeware và Open Source Software là gì?",
      options: [
        "A. Freeware phải trả phí, Open Source hoàn toàn miễn phí.",
        "B. Freeware không cho xem mã nguồn, Open Source công khai và cho phép sửa đổi mã nguồn.",
        "C. Freeware chỉ chạy trên Windows, Open Source chạy trên mọi hệ điều hành.",
        "D. Freeware do cá nhân phát triển, Open Source do doanh nghiệp phát triển."
      ],
      answer: "B",
      explanation: "Cả Freeware và Open Source đều có thể miễn phí về chi phí. Điểm khác biệt cốt lõi là quyền truy cập mã nguồn: Freeware khóa mã nguồn (đóng), trong khi Open Source công khai mã nguồn và cho phép người dùng xem, sửa đổi, phân phối lại."
    },
    {
      question: "Công ty A lấy thư viện mã nguồn mở có giấy phép GPL về, sửa đổi và phát hành sản phẩm thương mại mà KHÔNG công khai mã nguồn đã sửa. Nhận xét nào sau đây là đúng?",
      options: [
        "A. Hợp lệ, vì đây là sản phẩm thương mại nên không cần theo GPL.",
        "B. Vi phạm giấy phép GPL vì tính chất copyleft yêu cầu bản sửa đổi cũng phải mở nguồn.",
        "C. Hợp lệ, miễn là công ty ghi rõ nguồn gốc thư viện.",
        "D. Vi phạm chỉ nếu sản phẩm thu lợi nhuận từ việc bán hàng."
      ],
      answer: "B",
      explanation: "GPL có tính 'copyleft' hay 'lây lan' — bất kỳ sản phẩm nào sửa đổi và phân phối code GPL đều phải tiếp tục công khai mã nguồn dưới cùng giấy phép GPL, bất kể có thu tiền hay không. Đây chính là điểm khác biệt với giấy phép MIT vốn cho phép đóng gói thương mại."
    },
    {
      question: "Google Docs thuộc loại phần mềm nào theo cách phân loại trong chương trình Tin học 11?",
      options: [
        "A. Phần mềm thương mại (Commercial Software).",
        "B. Phần mềm nguồn mở (Open Source Software).",
        "C. Phần mềm miễn phí dùng thử (Shareware).",
        "D. Phần mềm chạy trên Internet (Web App / SaaS)."
      ],
      answer: "D",
      explanation: "Google Docs là một Web App / SaaS điển hình: không cần cài đặt, chạy hoàn toàn qua trình duyệt, dữ liệu lưu trên máy chủ của Google, hỗ trợ cộng tác thời gian thực. Lưu ý: một phần mềm có thể đồng thời là Web App VÀ miễn phí — nhưng theo cách phân loại theo nền tảng vận hành, Google Docs được xếp vào Web App."
    }
  ],
  examTypes: [
    "Phân loại phần mềm: Cho tên phần mềm cụ thể (WinRAR, VLC, Photoshop, Zalo, LibreOffice...) → xếp vào 1 trong 4 nhóm (thương mại / freeware / shareware / nguồn mở).",
    "So sánh GPL vs MIT: Chọn phát biểu đúng về tính 'lây lan' (copyleft) của GPL — bản sửa của code GPL phải tiếp tục mở nguồn, khác với MIT cho phép đóng gói thương mại.",
    "Tình huống đạo đức: 'Một bạn tải phần mềm crack (bẻ khóa) MS Office thay vì mua bản quyền' — đúng hay sai, vì sao? (Liên hệ giấy phép thương mại và Freeware.)"
  ],
  homework: [
    "Liệt kê 5 phần mềm em đang dùng hàng ngày, phân loại theo 4 nhóm bản quyền. Với những phần mềm thương mại, tìm xem giá bản quyền chính thức là bao nhiêu.",
    "Tìm hiểu LibreOffice: đây là phần mềm nguồn mở thay thế cho phần mềm thương mại nào? Liệt kê 2 ưu điểm và 2 nhược điểm so với bản gốc.",
    "Giải thích bằng lý lẽ cụ thể vì sao các trường học và cơ quan nhà nước nên khuyến khích sử dụng phần mềm nguồn mở — nêu tối thiểu 3 lý do (chi phí, bảo mật, chủ quyền dữ liệu)."
  ]
}
