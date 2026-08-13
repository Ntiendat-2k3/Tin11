export const b6Content = {
  warmUp: {
    question: "'Đám mây' thực ra là gì? Và dữ liệu của em đang nằm ở đâu?",
    description: "Khi em lưu ảnh lên Google Photos, bức ảnh đó không bay lơ lửng trong không khí. Nó được truyền qua Internet và nằm trên một ổ cứng vật lý thật — trong một tòa nhà khổng lồ gọi là Data Center (Trung tâm dữ liệu) của Google, có thể đặt ở Singapore, Mỹ hoặc Phần Lan. 'Đám mây' chỉ là cách gọi hình tượng cho kho lưu trữ từ xa này."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Cloud Storage — Lưu trữ đám mây là gì?",
      subsections: [
        {
          heading: "Định nghĩa và bản chất thật sự",
          text: "Lưu trữ đám mây (Cloud Storage) là dịch vụ lưu trữ dữ liệu trên máy chủ từ xa thông qua Internet, thay vì lưu trên ổ cứng vật lý tại chỗ. Người dùng truy cập dữ liệu qua trình duyệt hoặc ứng dụng, từ bất kỳ thiết bị nào có Internet.",
          points: [
            "Các dịch vụ phổ biến: Google Drive (15 GB miễn phí), OneDrive (Microsoft, 5 GB miễn phí), Dropbox (2 GB miễn phí), iCloud (Apple, 5 GB miễn phí).",
            "Bản chất kỹ thuật: Dữ liệu được chia nhỏ (chunk), mã hóa, và lưu nhiều bản sao trên các máy chủ ở nhiều vị trí địa lý khác nhau — đảm bảo không mất dữ liệu dù 1 máy chủ gặp sự cố.",
            "Không phải phép màu: 'Đám mây' vẫn là ổ cứng vật lý thật, chỉ là ổ cứng đó ở trung tâm dữ liệu của Google/Microsoft thay vì trong laptop của em."
          ]
        },
        {
          heading: "So sánh: Cloud Storage vs USB/Ổ cứng ngoài",
          text: "Câu hỏi hay gặp trong đề thi: nêu ưu/nhược điểm của từng hình thức lưu trữ.",
          points: [
            "Cloud Storage — Ưu điểm: Truy cập mọi nơi có Internet; tự động sao lưu; chia sẻ cộng tác dễ dàng; không sợ hỏng phần cứng vật lý.",
            "Cloud Storage — Nhược điểm: Cần Internet; chi phí thuê bao nếu vượt dung lượng miễn phí; rủi ro bảo mật nếu tài khoản bị hack; phụ thuộc vào nhà cung cấp (nếu dịch vụ đóng cửa?).",
            "USB/Ổ cứng ngoài — Ưu điểm: Dùng offline hoàn toàn; tốc độ truy xuất cao; không mất phí thuê bao; toàn quyền kiểm soát dữ liệu.",
            "USB/Ổ cứng ngoài — Nhược điểm: Dễ mất, hỏng, cháy, bị ăn cắp; không tự đồng bộ; khó chia sẻ cho nhiều người."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Đồng bộ hóa dữ liệu (Synchronization)",
      subsections: [
        {
          heading: "Đồng bộ là gì và hoạt động như thế nào?",
          text: "Đồng bộ hóa (Sync) là quá trình tự động cập nhật để nhiều bản sao dữ liệu (trên nhiều thiết bị khác nhau) luôn giống hệt nhau — bất kỳ thay đổi nào ở một nơi sẽ lan ra tất cả các nơi còn lại.",
          points: [
            "Ví dụ trực quan: Em chụp ảnh trên điện thoại có bật Google Photos → 30 giây sau mở laptop, ảnh đã xuất hiện trong Google Photos web. Không cần cắm dây USB, không cần copy thủ công.",
            "Cơ chế: Ứng dụng sync chạy nền (background), phát hiện thay đổi → nén và upload lên server → server đẩy (push) bản cập nhật xuống các thiết bị khác đang online.",
            "Đồng bộ 2 chiều vs 1 chiều: Google Drive đồng bộ 2 chiều (thiết bị nào thay đổi cũng lan sang thiết bị kia). Backup một chiều (chỉ đẩy từ máy lên cloud, không chiều ngược lại) — an toàn hơn vì tránh vô tình xóa file trên cloud làm mất file gốc.",
            "Lưu ý khi offline: Khi không có mạng, em vẫn làm việc bình thường. Khi có mạng trở lại, ứng dụng sẽ đồng bộ lại những thay đổi đã tích lũy — không mất dữ liệu, chỉ trễ."
          ]
        },
        {
          heading: "Xung đột đồng bộ (Sync Conflict) — Khi 2 người cùng sửa",
          text: "Điều gì xảy ra khi em và bạn cùng mở 1 file Google Docs và cùng sửa đồng thời? Google Docs dùng kỹ thuật cộng tác thời gian thực (Real-time Collaboration) — thấy được con trỏ của nhau và mọi thay đổi được merge tức thì.",
          points: [
            "Google Docs giải quyết xung đột thông minh bằng thuật toán 'Operational Transformation'.",
            "Dropbox/OneDrive với file Office bình thường: Nếu 2 người sửa file cùng lúc khi offline → khi online lại sẽ tạo ra 2 bản 'conflict copy' để người dùng tự quyết định giữ bản nào.",
            "Bài học thực tế: Làm việc nhóm với file Word qua USB email qua lại là cách tệ nhất. Nên dùng Google Docs để tránh hoàn toàn vấn đề này."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Ba mức phân quyền chia sẻ — Nội dung trọng tâm nhất",
      subsections: [
        {
          heading: "Tại sao phân quyền lại quan trọng?",
          text: "Khi chia sẻ file lên cloud, em phải quyết định người khác được làm gì với file đó. Cấp sai quyền dẫn đến 2 hậu quả: (1) Quá chặt → bạn bè không cộng tác được. (2) Quá lỏng → người không liên quan sửa nhầm hoặc xóa mất nội dung.",
          points: [
            "Quyền Xem (Viewer): Chỉ đọc nội dung, không thể thay đổi bất cứ điều gì. Dùng khi: Chia sẻ tài liệu tham khảo, đề cương ôn tập cho cả lớp xem.",
            "Quyền Nhận xét (Commenter): Xem + để lại bình luận, đề xuất chỉnh sửa (hiển thị màu khác) — nhưng KHÔNG thể trực tiếp sửa nội dung gốc. Dùng khi: Gửi bài viết cho thầy cô góp ý, nhận phản hồi từ khách hàng.",
            "Quyền Chỉnh sửa (Editor): Toàn quyền — thêm, sửa, xóa nội dung như người chủ sở hữu. Dùng khi: Nhóm cùng viết chung 1 tài liệu."
          ]
        },
        {
          heading: "Mẹo nhớ và Ví dụ thực tế",
          text: "Thứ tự quyền tăng dần: Viewer < Commenter < Editor. Giống như vai trò trong cuộc họp: Khán giả (xem) → Thành viên góp ý (comment) → Người trình bày (edit toàn quyền).",
          points: [
            "Tình huống 1: Cô giáo chia sẻ đề cương học kỳ cho cả lớp → Quyền Viewer (tránh học sinh sửa nhầm).",
            "Tình huống 2: Nhóm 4 bạn viết báo cáo chung → Quyền Editor cho cả 4 (cùng gõ, cùng sửa).",
            "Tình huống 3: Gửi bản thảo cho thầy hướng dẫn để review → Quyền Commenter (thầy góp ý nhưng không sửa trực tiếp bài của em).",
            "Lỗi hay gặp: Để file quan trọng ở chế độ 'Anyone with the link - Editor' → Bất kỳ ai có link đều xóa được nội dung!"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Quyền", "Tên tiếng Anh", "Được làm gì?", "Dùng khi nào?"],
        rows: [
          ["Xem", "Viewer", "Chỉ đọc nội dung, tải về (nếu được cho phép)", "Chia sẻ tài liệu tham khảo cho nhiều người"],
          ["Nhận xét", "Commenter", "Xem + để lại bình luận, đề xuất sửa", "Gửi bài cho người review góp ý"],
          ["Chỉnh sửa", "Editor", "Thêm, sửa, xóa nội dung toàn quyền", "Làm việc nhóm, cùng soạn thảo một tài liệu"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "4. Chia sẻ công khai vs Riêng tư và Quy tắc Backup 3-2-1",
      functions: [
        {
          name: "Link công khai (Anyone with the link)",
          desc: "Bất kỳ ai có đường link đều truy cập được — không cần đăng nhập tài khoản Google. Tiện lợi để chia sẻ rộng rãi nhưng rủi ro bảo mật cao nếu link bị lộ ra ngoài. Tuyệt đối không dùng cho file chứa thông tin cá nhân, điểm số, hồ sơ học sinh."
        },
        {
          name: "Link riêng tư (Restricted / Chỉ định email)",
          desc: "Chỉ những tài khoản được cấp quyền cụ thể (theo email) mới truy cập được. An toàn hơn nhiều, dù link bị lộ cũng không ai khác vào được. Dùng cho dữ liệu nhạy cảm."
        },
        {
          name: "Lịch sử phiên bản (Version History)",
          desc: "Google Docs/Drive lưu tự động toàn bộ lịch sử chỉnh sửa — ai sửa gì, lúc mấy giờ. Nếu bạn xóa nhầm đoạn văn quan trọng, vào File → Version History → Xem lịch sử và khôi phục về phiên bản trước là xong."
        },
        {
          name: "Quy tắc Backup 3-2-1",
          desc: "Quy tắc vàng bảo vệ dữ liệu: (3) Luôn có 3 bản sao dữ liệu. (2) Lưu trên 2 loại thiết bị khác nhau. (1) Ít nhất 1 bản ở vị trí địa lý khác biệt. Ví dụ: 1 bản trên laptop + 1 bản trên ổ cứng ngoài + 1 bản trên Google Drive → Dù cháy nhà hay laptop hỏng, dữ liệu vẫn an toàn."
        },
        {
          name: "Nguy cơ lộ dữ liệu khi chia sẻ sai",
          desc: "Nhiều vụ lộ đề thi, lộ điểm nội bộ đã xảy ra vì giáo viên/học sinh vô tình để file ở chế độ 'Anyone with the link - Viewer'. Google Search có thể index (đánh chỉ mục) các link công khai — khiến file hiển thị trên kết quả tìm kiếm khi ai đó tìm đúng từ khóa."
        },
        {
          name: "Đồng bộ vs Backup — Hai khái niệm dễ nhầm",
          desc: "Đồng bộ (Sync): Giữ nhiều thiết bị có cùng dữ liệu. Nếu xóa file trên 1 thiết bị → file bị xóa trên TẤT CẢ thiết bị. Backup: Tạo bản sao dự phòng. Xóa file gốc không ảnh hưởng bản backup. Google Drive thực chất là sync, không hoàn toàn là backup."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Thực hành: Thao tác phân quyền trên Google Drive",
      steps: [
        {
          step: "Tạo file và thiết lập quyền chia sẻ cho người cụ thể",
          detail: "Mở drive.google.com → Tạo file Google Docs mới → Click nút Share (Chia sẻ) → Nhập email của bạn cùng lớp → Chọn quyền (Viewer/Commenter/Editor) từ menu thả xuống → Click Send. Yêu cầu người bạn mở link và thử thực hiện các thao tác để cảm nhận sự khác biệt giữa các mức quyền."
        },
        {
          step: "Kiểm tra và khôi phục từ Version History",
          detail: "Mở một file Google Docs bất kỳ → Gõ thêm vài chữ → Xóa đi → Vào menu File → Version History → See version history → Xem timeline bên phải hiển thị các phiên bản đã lưu → Click vào phiên bản cũ để xem nội dung trước khi bị xóa → Click Restore this version để khôi phục."
        },
        {
          step: "Thiết lập Backup 3-2-1 cho dữ liệu học tập cá nhân",
          detail: "Bài tập thực tế: Mở Google Drive, tạo thư mục 'Backup TinHoc11'. Copy toàn bộ bài tập, tài liệu Tin học lên đó (1 bản trên Drive). Cắm USB, copy cùng nội dung vào USB (1 bản trên thiết bị vật lý). Nếu có ổ cứng ngoài, copy thêm 1 bản nữa (hoàn thành quy tắc 3-2-1)."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Giáo viên muốn chia sẻ đề cương ôn thi cho cả lớp 40 học sinh để TẤT CẢ đều đọc được, nhưng KHÔNG ai được phép sửa nội dung. Cách chia sẻ nào sau đây vừa tiện lợi vừa an toàn nhất?",
      options: [
        "A. Chia sẻ link công khai (Anyone with the link) với quyền Viewer.",
        "B. Nhập lần lượt 40 email học sinh, cấp quyền Editor.",
        "C. Nhập lần lượt 40 email học sinh, cấp quyền Viewer.",
        "D. Đổi tên file thành mật khẩu và gửi link qua Zalo nhóm lớp."
      ],
      answer: "A",
      explanation: "Cấp link công khai (Anyone with the link) với quyền Viewer là cách hiệu quả và tiện lợi nhất khi cần chia sẻ đến nhiều người — không cần nhập từng email, chỉ cần gửi link vào nhóm Zalo lớp. Quyền Viewer đảm bảo không ai sửa được nội dung. Lưu ý: Chỉ dùng cách này cho tài liệu không nhạy cảm như đề cương học tập."
    },
    {
      question: "Bạn Nam và bạn Lan cùng được cấp quyền Editor trên 1 file Google Docs. Nam đang viết đoạn kết luận, Lan vô tình XÓA toàn bộ phần giới thiệu quan trọng. Cách nhanh nhất để khôi phục nội dung bị xóa là gì?",
      options: [
        "A. Nhấn Ctrl + Z ngay lập tức để hoàn tác — chỉ hoạt động trong phiên làm việc hiện tại.",
        "B. Vào File → Version History → See version history → Chọn phiên bản trước khi Lan xóa → Restore.",
        "C. Liên hệ Google hỗ trợ và chờ họ khôi phục từ máy chủ.",
        "D. Không thể khôi phục vì Google Docs không có tính năng lưu lịch sử."
      ],
      answer: "B",
      explanation: "Google Docs tự động lưu toàn bộ lịch sử chỉnh sửa theo thời gian thực. Chức năng Version History (Lịch sử phiên bản) cho phép xem lại và khôi phục về bất kỳ trạng thái nào trong quá khứ, kể cả thấy ai là người đã xóa nội dung đó. Ctrl+Z chỉ hoạt động với thao tác vừa làm ngay lập tức, không dùng được để khôi phục thay đổi của người khác."
    },
    {
      question: "Theo quy tắc Backup 3-2-1, học sinh nên bảo vệ bài luận quan trọng theo cách nào sau đây?",
      options: [
        "A. Lưu file trên máy tính và một file nữa trên Desktop (2 bản, 1 thiết bị).",
        "B. Chỉ lưu duy nhất trên Google Drive vì Google không bao giờ mất dữ liệu.",
        "C. Lưu trên laptop + ổ cứng ngoài + Google Drive (3 bản, 3 thiết bị, 1 bản ở xa).",
        "D. Lưu 3 bản khác nhau cùng trên 1 ổ cứng ngoài là đủ an toàn."
      ],
      answer: "C",
      explanation: "Quy tắc 3-2-1 yêu cầu: 3 bản sao dữ liệu, trên 2 loại phương tiện lưu trữ khác nhau (ổ cứng laptop ≠ ổ cứng ngoài), và 1 bản ở vị trí địa lý khác biệt (ví dụ: cloud hoặc nhà người thân). Phương án C (laptop + ổ cứng ngoài + Google Drive) thỏa mãn cả 3 điều kiện, đảm bảo dữ liệu an toàn dù laptop hỏng, ổ cứng ngoài mất, hay tài khoản Google bị xâm phạm."
    }
  ],
  examTypes: [
    "Tình huống thực tế: 'File báo cáo nhóm bị 1 bạn xóa nhầm nội dung quan trọng' → nên đặt quyền chia sẻ nào để tránh việc này lặp lại (gợi ý: Commenter thay vì Editor cho thành viên chỉ đóng góp ý kiến).",
    "Phân biệt Cloud Storage với lưu trữ trên USB/ổ cứng ngoài truyền thống — nêu 2 ưu điểm và 2 nhược điểm của mỗi loại.",
    "Trắc nghiệm: Xếp đúng thứ tự 3 mức quyền chia sẻ từ thấp đến cao (Viewer < Commenter < Editor)."
  ],
  homework: [
    "Tạo 1 thư mục trên Google Drive (hoặc OneDrive), thử chia sẻ cho 1 người bạn với quyền Viewer, sau đó đổi sang Editor — ghi lại nhận xét sự khác biệt khi bạn thao tác.",
    "Thiết kế quy tắc backup 3-2-1 cho chính dữ liệu học tập của em (bài tập, ảnh kỷ niệm, tài liệu ôn thi) — liệt kê cụ thể 3 nơi lưu trữ và 2 phương tiện khác nhau.",
    "Viết đoạn văn ngắn (5-7 câu) phân tích rủi ro bảo mật khi để chế độ 'Anyone with the link' cho một file chứa thông tin cá nhân, danh sách lớp hoặc bảng điểm."
  ]
}
