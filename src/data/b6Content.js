/**
 * Dữ liệu bài giảng Bài 6: Lưu trữ và chia sẻ tệp tin trên Internet
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: 90 phút)
 * Định hướng: Kiến thức cốt lõi chung (CS & ICT)
 */
export const b6Content = {
  warmUp: {
    question: "Một học sinh chia sẻ bài kiểm tra trên Google Drive với tùy chọn 'Anyone with the link can edit' (Bất kỳ ai có liên kết đều có thể chỉnh sửa). Điều gì có thể xảy ra và cách sửa quyền an toàn là gì?",
    description: "Rủi ro cực lớn: Bất kỳ ai nhận được link (hoặc link bị chuyển tiếp qua nhóm chat) đều có thể vào xóa sạch bài làm, sửa đổi đáp án hoặc chèn nội dung xấu. Hiểu rõ bản chất Cloud Storage, phân biệt 3 mức quyền (Viewer, Commenter, Editor) và nguyên tắc SYNC ≠ BACKUP giúp em làm chủ dữ liệu và bảo mật thông tin an toàn tuyệt đối trên Internet."
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mục Tiêu Buổi Học & Khung Phân Bổ 90 Phút",
      subsections: [
        {
          heading: "1. Mục tiêu buổi học – Chuẩn năng lực gia sư",
          points: [
            "Hiểu bản chất của Lưu trữ đám mây (Cloud Storage) và ổ đĩa trực tuyến.",
            "Thực hiện thành thạo các thao tác: Upload (tải lên), Download (tải về), Tạo thư mục và tổ chức quản lý tệp trên đám mây.",
            "Biết cách chia sẻ tệp/thư mục cho tài khoản người dùng cụ thể (Restricted/By email) hoặc bằng liên kết (Link sharing).",
            "Phân biệt rạch ròi 3 mức quyền chia sẻ cốt lõi: Viewer (Người xem), Commenter (Người nhận xét) và Editor (Người chỉnh sửa).",
            "Hiểu cơ chế đồng bộ hóa dữ liệu (Sync) và phân biệt bản chất: SYNC ≠ BACKUP.",
            "Biết cách kiểm soát quyền truy cập, thu hồi quyền và nhận diện các rủi ro bảo mật khi chia sẻ dữ liệu trực tuyến."
          ]
        },
        {
          heading: "2. Khung phân bổ thời gian buổi học 90 phút",
          points: [
            "0–8 phút: Ôn Bài 5 + Tình huống khởi động phân quyền chia sẻ.",
            "8–20 phút: Bản chất Cloud Storage, Lợi ích và Rủi ro.",
            "20–32 phút: Thao tác Upload/Download & Quản lý tệp/thư mục trực tuyến.",
            "32–48 phút: Phân quyền chia sẻ (Viewer, Commenter, Editor; Link công khai vs Người cụ thể).",
            "48–55 phút: Đồng bộ hóa (Sync), Phân biệt Sync vs Backup & An toàn dữ liệu.",
            "55–82 phút: 10 bài luyện tập thực hành tình huống trực tiếp.",
            "82–87 phút: Mini Test 6 câu trắc nghiệm đánh giá chuẩn đầu ra.",
            "87–90 phút: Tổng kết 7 kiến thức cốt lõi và giao nhiệm vụ về nhà."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Tình huống Khởi động Đặt vấn đề",
        text: "Gia sư đặt câu hỏi: 'Nếu em gửi bài tập nhóm cho bạn qua liên kết Google Drive nhưng quên không chỉnh quyền, để mặc định là 'Anyone with the link can edit' rồi dán vào nhóm Zalo lớp 50 người. Điều gì nguy hiểm có thể xảy ra?' ➜ Mục tiêu: Học sinh nhận thức ngay nguy cơ mất dữ liệu, bị sửa đè nội dung và tầm quan trọng sống còn của việc phân quyền chính xác."
      }
    },
    {
      id: "sec-2",
      title: "III.1, III.2, III.3 & III.4. Bản Chất Cloud Storage, Upload – Download & Lợi Ích – Rủi Ro",
      subsections: [
        {
          heading: "1. Bản chất Cloud Storage (Lưu trữ đám mây)",
          text: "Lưu trữ đám mây (Cloud Storage) là hình thức lưu trữ dữ liệu trên hạ tầng máy chủ từ xa của nhà cung cấp dịch vụ và người dùng truy cập, quản lý thông qua kết nối Internet.",
          points: [
            "Các dịch vụ phổ biến: Google Drive (15 GB miễn phí), Microsoft OneDrive (5 GB miễn phí), Dropbox (2 GB miễn phí), Apple iCloud (5 GB miễn phí).",
            "Mô hình dòng chảy dữ liệu: Laptop / Điện thoại ➜ Mạng Internet ➜ Dịch vụ Cloud (Google Drive/OneDrive) ➜ Hệ thống Máy chủ (Data Center).",
            "💡 LƯU Ý BẢN CHẤT: 'Đám mây' không có nghĩa là dữ liệu bay lơ lửng trên không trung. Dữ liệu thực chất vẫn được lưu trữ bền vững trên hàng ngàn ổ đĩa cứng vật lý đặt tại các Trung tâm dữ liệu (Data Center) hiện đại của nhà cung cấp."
          ]
        },
        {
          heading: "2. Upload và Download",
          text: "Hai thao tác cơ bản để luân chuyển dữ liệu giữa thiết bị cá nhân và máy chủ đám mây:",
          points: [
            "UPLOAD (Tải lên): Đưa dữ liệu (tệp, thư mục) từ thiết bị cá nhân (laptop, PC, smartphone) lên lưu trữ trên máy chủ đám mây.",
            "DOWNLOAD (Tải về): Tải dữ liệu từ máy chủ đám mây về lưu trữ trên bộ nhớ cục bộ của thiết bị cá nhân."
          ]
        },
        {
          heading: "3. Lợi ích và Hạn chế/Rủi ro khi sử dụng Cloud Storage",
          text: "Hiểu rõ 2 mặt của công nghệ lưu trữ trực tuyến để sử dụng thông minh và an toàn:",
          points: [
            "Lợi ích vượt trội: Truy cập dữ liệu mọi lúc mọi nơi từ nhiều thiết bị khác nhau; Dễ dàng chia sẻ cho người khác; Hỗ trợ cộng tác thời gian thực (nhiều người cùng soạn thảo); Tự động đồng bộ và sao lưu dữ liệu; Giảm thiểu rủi ro hỏng ổ cứng hoặc mất máy tính cá nhân.",
            "Hạn chế và Rủi ro: Phụ thuộc vào chất lượng kết nối Internet (mất mạng khó truy cập nếu chưa cài đặt offline); Phụ thuộc vào nhà cung cấp dịch vụ (giới hạn dung lượng miễn phí, chính sách bảo mật thay đổi); Nguy cơ mất quyền truy cập tài khoản (quên mật khẩu, bị đánh cắp tài khoản); Rủi ro rò rỉ dữ liệu cá nhân khi chia sẻ nhầm quyền hoặc để liên kết công khai."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí đối chiếu", "Lưu trữ Cục bộ (Local: Ổ cứng C:, D:, USB)", "Lưu trữ Đám mây (Cloud Storage: Google Drive, OneDrive)"],
        rows: [
          ["Vị trí lưu dữ liệu", "Trên chip nhớ/đĩa từ của thiết bị cá nhân", "Trên hệ thống máy chủ Data Center của nhà cung cấp"],
          ["Yêu cầu kết nối mạng", "Hoàn toàn KHÔNG cần Internet", "BẮT BUỘC cần kết nối Internet (trừ khi bật Offline Cache)"],
          ["Khả năng truy cập", "Chỉ truy cập được trên chính thiết bị đó", "Truy cập từ BẤT KỲ thiết bị nào (PC, điện thoại, tablet)"],
          ["Chia sẻ & Cộng tác", "Khó khăn (phải gửi file qua email, copy USB)", "Cực kỳ dễ dàng qua liên kết, cộng tác thời gian thực"],
          ["Rủi ro vật lý", "Dễ mất dữ liệu khi hỏng máy, cháy nổ, mất cắp", "Không lo hỏng phần cứng máy tính cá nhân"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "III.5 & III.6. Ba Mức Quyền Chia Sẻ (Viewer, Commenter, Editor) & Phân Quyền An Toàn",
      subsections: [
        {
          heading: "1. Ba mức quyền chia sẻ cốt lõi",
          text: "Khi chia sẻ một tệp hoặc thư mục trên Cloud Storage, người dùng bắt buộc phải chọn 1 trong 3 mức quyền:",
          points: [
            "Viewer (Người xem): Người nhận CHỈ ĐƯỢC XEM nội dung (và tải xuống/in nếu chủ sở hữu không chặn). Họ hoàn toàn KHÔNG THỂ chỉnh sửa hay viết nhận xét vào tệp. ➜ Dùng khi: Chia sẻ đề cương ôn tập, tài liệu tham khảo, bảng thông báo chung cho cả lớp.",
            "Commenter (Người nhận xét): Người nhận được XEM + ĐỂ LẠI NHẬN XÉT, bình luận và đề xuất chỉnh sửa (hiển thị dưới dạng gợi ý riêng biệt). Họ KHÔNG THỂ trực tiếp thay đổi hoặc xóa nội dung gốc. ➜ Dùng khi: Gửi bài tập cho giáo viên chấm/góp ý, gửi bản thảo cho bạn bè phản biện.",
            "Editor (Người chỉnh sửa): Người nhận có TOÀN QUYỀN xem, nhận xét, chỉnh sửa, thêm mới, thậm chí XÓA nội dung trong tệp như chủ sở hữu. ➜ Dùng khi: Thành viên trong cùng một nhóm cùng nhau viết bài báo cáo, làm slide thuyết trình."
          ]
        },
        {
          heading: "2. Nguyên tắc vàng về phân quyền (Principle of Least Privilege)",
          text: "NGUYÊN TẮC: Luôn cấp quyền THẤP NHẤT nhưng vẫn ĐỦ để người nhận hoàn thành nhiệm vụ của họ.",
          points: [
            "Nếu người nhận chỉ cần đọc ➜ Chỉ cấp Viewer.",
            "Nếu người nhận cần đóng góp ý kiến ➜ Cấp Commenter.",
            "Chỉ khi cần cùng nhau gõ và sửa nội dung ➜ Mới cấp Editor.",
            "Ví dụ: Khi gửi bài tập cho giáo viên chấm, chỉ nên cấp quyền Commenter (để thầy cô ghi lời phê và gợi ý sửa) thay vì cấp Editor."
          ]
        },
        {
          heading: "3. Chia sẻ cho người cụ thể (By Email) vs Bằng liên kết (Anyone with the link)",
          text: "Hai phương thức chia sẻ có mức độ bảo mật và tính tiện dụng khác nhau:",
          points: [
            "Chia sẻ cho tài khoản cụ thể (Restricted / Theo địa chỉ Email): Chỉ những tài khoản Google/Microsoft được chỉ định chính xác mới mở được tệp. Cực kỳ an toàn, dù đường link có bị lộ ra ngoài thì người lạ cũng không thể truy cập.",
            "Chia sẻ bằng liên kết công khai ('Anyone with the link' - Bất kỳ ai có đường liên kết): Bất kỳ ai có đường link đều mở được tệp mà không cần đăng nhập tài khoản. Tiện lợi khi chia sẻ hàng loạt nhưng rủi ro bảo mật rất cao vì đường link có thể bị người nhận chuyển tiếp cho người lạ."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Mức quyền", "Tên tiếng Anh", "Quyền hạn được phép làm", "Tình huống áp dụng tối ưu"],
        rows: [
          ["Người xem", "Viewer", "Chỉ đọc nội dung, không sửa, không nhận xét", "Chia sẻ đề cương, tài liệu tham khảo, thông báo"],
          ["Người nhận xét", "Commenter", "Xem + Để lại nhận xét, bình luận, đề xuất sửa", "Gửi bài cho giáo viên chấm, xin góp ý bản thảo"],
          ["Người chỉnh sửa", "Editor", "Toàn quyền thêm, sửa, xóa nội dung trong file", "Các thành viên trong nhóm cùng soạn thảo chung"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "III.7 & IV. Đồng Bộ (Sync) vs Sao Lưu (Backup) & Thực Hành Tổ Chức Drive Chuẩn",
      subsections: [
        {
          heading: "1. Khắc sâu nguyên tắc vàng: SYNC ≠ BACKUP",
          text: "Rất nhiều người nhầm lẫn đồng bộ là sao lưu, dẫn đến mất trắng dữ liệu khi có sự cố:",
          points: [
            "Sync (Đồng bộ hóa): Quá trình tự động cập nhật để dữ liệu giữa các thiết bị (laptop, điện thoại, cloud) luôn ở trạng thái GIỐNG HỆT NHAU. ⚠️ RỦI RO: Nếu em vô tình xóa nhầm 1 file trên laptop (hoặc file bị virus mã hóa), lệnh xóa/hỏng đó sẽ được ĐỒNG BỘ NGAY LẬP TỨC lên đám mây và xóa luôn file trên các máy khác!",
            "Backup (Sao lưu dự phòng): Quá trình tạo ra một BẢN SAO ĐỘC LẬP tại một nơi lưu trữ an toàn khác để phục vụ khôi phục khi bản gốc bị mất hoặc hỏng. Khi xóa file gốc, bản backup vẫn nguyên vẹn 100%.",
            "Kết luận: Không được coi việc chỉ bật Sync là giải pháp sao lưu duy nhất. Luôn cần có thư mục Backup riêng hoặc sao lưu sang ổ cứng ngoài/USB định kỳ."
          ]
        },
        {
          heading: "2. Cấu trúc cây thư mục học tập chuẩn trên Google Drive",
          text: "Thiết kế hệ thống thư mục khoa học, đặt tên nhất quán để dễ tìm kiếm và mở rộng:",
          points: [
            "Quy tắc đặt tên: Viết hoa không dấu hoặc có gạch dưới _, phân cấp rõ ràng theo mục đích sử dụng.",
            "Cấu trúc khuyến nghị:\n  TIN_HOC_11\n  ├── BAI_HOC (Lưu trữ bài giảng lý thuyết, slide, tài liệu đọc)\n  ├── BAI_TAP (Lưu trữ bài thực hành, bài làm cá nhân, bài nhóm)\n  ├── DE_THI (Lưu đề cương ôn thi, đề kiểm tra định kỳ)\n  ├── HINH_ANH (Lưu ảnh chụp sơ đồ, tư liệu học tập)\n  └── BACKUP (Lưu các bản sao lưu quan trọng, không bật sync 2 chiều)"
          ]
        }
      ],
      fileTree: {
        title: "Cấu Trúc Cây Thư Mục Quản Trị Học Tập Chuẩn Trên Google Drive",
        nodes: [
          {
            name: "My Drive (Google Drive)", type: "drive", isExpanded: true, children: [
              {
                name: "TIN_HOC_11", type: "folder", isExpanded: true, children: [
                  {
                    name: "01_BAI_HOC", type: "folder", isExpanded: true, children: [
                      { name: "Bai5_ThietBiSo.pdf", type: "file" },
                      { name: "Bai6_LuuTruCloud.pdf", type: "file" }
                    ]
                  },
                  {
                    name: "02_BAI_TAP", type: "folder", isExpanded: true, children: [
                      { name: "BaiTapNhom_DuAn1.docx", type: "file", desc: "Chia sẻ quyền Editor cho nhóm" },
                      { name: "BaoCao_CaNhan.docx", type: "file" }
                    ]
                  },
                  {
                    name: "03_DE_THI", type: "folder", isExpanded: false, children: [
                      { name: "DeCuong_GiuaKy.pdf", type: "file", desc: "Chia sẻ quyền Viewer cho lớp" }
                    ]
                  },
                  {
                    name: "04_HINH_ANH", type: "folder", isExpanded: false, children: [
                      { name: "SoDo_CloudStorage.png", type: "file" }
                    ]
                  },
                  {
                    name: "05_BACKUP", type: "folder", isExpanded: false, children: [
                      { name: "Backup_TinHoc11_v1.0.zip", type: "file", desc: "Bản sao lưu dự phòng độc lập" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: "sec-5",
      title: "VI & VIII. Chốt Kiến Thức Cốt Lõi & 5 Câu Hỏi Tự Vấn Khi Chia Sẻ Dữ Liệu",
      subsections: [
        {
          heading: "5 Câu hỏi tự vấn trước khi bấm nút Chia sẻ (Share)",
          text: "Để không bao giờ bị rò rỉ dữ liệu hoặc mất file bài làm, học sinh phải luôn tự trả lời 5 câu hỏi:",
          points: [
            "1. Ai là người thực sự cần truy cập vào tệp này? (Chỉ định đúng email hay cần gửi link rộng rãi?)",
            "2. Họ cần quyền Xem (Viewer), Góp ý (Commenter) hay Chỉnh sửa (Editor)?",
            "3. Có thực sự cần bật chế độ 'Anyone with the link' không? (Có nguy cơ link bị gửi vào nhóm khác không?)",
            "4. Tệp này có chứa thông tin nhạy cảm (mật khẩu, điểm số, thông tin cá nhân) không?",
            "5. Sau khi công việc hoàn thành, mình có cần thu hồi quyền truy cập (Remove access) không?"
          ]
        }
      ],
      checkpointCards: [
        {
          title: "1. CLOUD STORAGE = MÁY CHỦ TRỰC TUYẾN",
          detail: "Lưu dữ liệu trên máy chủ Data Center của nhà cung cấp, truy cập mọi lúc mọi nơi qua Internet (Google Drive, OneDrive)."
        },
        {
          title: "2. UPLOAD vs DOWNLOAD",
          detail: "UPLOAD = Tải đưa dữ liệu lên đám mây | DOWNLOAD = Tải dữ liệu từ đám mây về thiết bị cá nhân."
        },
        {
          title: "3. VIEWER = CHỈ XEM",
          detail: "Chỉ đọc nội dung, không sửa, không nhận xét. Dùng chia sẻ đề cương ôn tập, tài liệu tham khảo cho nhiều người."
        },
        {
          title: "4. COMMENTER = XEM + GÓP Ý",
          detail: "Xem và để lại nhận xét/đề xuất sửa mà không làm thay đổi nội dung gốc. Dùng khi gửi bài cho giáo viên chấm."
        },
        {
          title: "5. EDITOR = CHỈNH SỬA TOÀN QUYỀN",
          detail: "Thêm, sửa, xóa nội dung trong file. Chỉ cấp cho các thành viên trực tiếp cùng làm việc nhóm."
        },
        {
          title: "6. RESTRICTED vs LINK CÔNG KHAI",
          detail: "Restricted (chỉ định email) an toàn bảo mật cao; 'Anyone with the link' dễ bị chuyển tiếp lộ dữ liệu."
        },
        {
          title: "7. SYNC ≠ BACKUP",
          detail: "Sync tự động cập nhật 2 chiều (xóa 1 nơi mất cả 2 nơi). Backup là bản sao lưu dự phòng độc lập an toàn."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|               BÀI 6: LƯU TRỮ VÀ CHIA SẺ TỆP TIN TRÊN INTERNET                     |
+-----------------------------------------------------------------------------------+
       |
       +---> [1] CLOUD STORAGE (LƯU TRỮ ĐÁM MÂY)
       |       * Bản chất: Lưu trên Data Center của nhà cung cấp (Google, Microsoft)
       |       * UPLOAD (Đưa file lên) vs DOWNLOAD (Tải file về)
       |       * ƯU ĐIỂM: Đa thiết bị, cộng tác real-time, tự động đồng bộ
       |       * HẠN CHẾ: Phụ thuộc Internet, phụ thuộc tài khoản, rủi ro phân quyền
       |
       +---> [2] 3 MỨC QUYỀN CHIA SẺ
       |       * VIEWER (Người xem): Chỉ đọc (Đề cương, tài liệu tham khảo)
       |       * COMMENTER (Người nhận xét): Xem + Góp ý (Gửi giáo viên chấm bài)
       |       * EDITOR (Người chỉnh sửa): Toàn quyền sửa/xóa (Thành viên nhóm cùng làm)
       |       => NGUYÊN TẮC: Cấp quyền thấp nhất đủ hoàn thành nhiệm vụ!
       |
       +---> [3] PHƯƠNG THỨC CHIA SẺ
       |       * CHỈ ĐỊNH EMAIL (Restricted): An toàn, đúng người, không sợ lộ link
       |       * BẰNG LIÊN KẾT (Anyone with the link): Tiện lợi nhưng dễ bị chuyển tiếp
       |
       +---> [4] ĐỒNG BỘ (SYNC) vs SAO LƯU (BACKUP)
               * SYNC ≠ BACKUP: Sync xóa 1 nơi mất cả 2; Backup là bản sao độc lập
               * QUẢN TRỊ DRIVE: Cây thư mục TIN_HOC_11 khoa học & Thư mục BACKUP riêng`
    }
  ],
  summaryQuiz: [
    {
      question: "Dịch vụ Lưu trữ đám mây (Cloud Storage) như Google Drive, OneDrive hoạt động dựa trên bản chất nào sau đây?",
      options: [
        "A. Dữ liệu bay lơ lửng trong khí quyển và truyền trực tiếp vào mắt người dùng.",
        "B. Lưu trữ dữ liệu trên hệ thống máy chủ của nhà cung cấp và truy cập thông qua kết nối Internet.",
        "C. Chỉ lưu trữ dữ liệu tạm thời trên bộ nhớ RAM của máy tính cá nhân.",
        "D. Tự động chuyển đổi toàn bộ văn bản thành các tệp âm thanh MP3."
      ],
      answer: "B",
      explanation: "Lưu trữ đám mây là hình thức lưu trữ dữ liệu trên hạ tầng máy chủ của các nhà cung cấp dịch vụ (Google, Microsoft...) và cho phép người dùng truy cập từ xa qua mạng Internet."
    },
    {
      question: "Thao tác chuyển một tệp tài liệu bài tập từ ổ cứng máy tính cá nhân lên lưu trữ trên Google Drive được gọi là gì?",
      options: [
        "A. Download (Tải xuống)",
        "B. Upload (Tải lên)",
        "C. Defragment (Chống phân mảnh)",
        "D. Format (Định dạng ổ đĩa)"
      ],
      answer: "B",
      explanation: "Upload (Tải lên) là thao tác đưa dữ liệu từ thiết bị cá nhân lên máy chủ đám mây. Download là thao tác tải dữ liệu từ máy chủ về máy cá nhân."
    },
    {
      question: "Khi chia sẻ đề cương ôn tập học kỳ cho 40 học sinh trong lớp để các bạn chỉ đọc bài mà không được phép sửa nội dung, chủ sở hữu nên cấp quyền nào?",
      options: [
        "A. Quyền Chỉnh sửa (Editor)",
        "B. Quyền Xem (Viewer)",
        "C. Quyền Chủ sở hữu (Owner)",
        "D. Quyền Nhận xét (Commenter)"
      ],
      answer: "B",
      explanation: "Quyền Viewer (Người xem) chỉ cho phép người nhận đọc nội dung, không thể thay đổi hay xóa tài liệu, đảm bảo đề cương được bảo toàn nguyên vẹn."
    },
    {
      question: "Học sinh gửi bản thảo bài tiểu luận cho giáo viên hướng dẫn để xin ý kiến nhận xét, sửa lỗi diễn đạt mà không muốn nội dung gốc bị thay đổi trực tiếp thì nên cấp quyền nào?",
      options: [
        "A. Quyền Xem (Viewer)",
        "B. Quyền Nhận xét (Commenter)",
        "C. Quyền Chỉnh sửa (Editor)",
        "D. Không chia sẻ quyền gì"
      ],
      answer: "B",
      explanation: "Quyền Commenter (Người nhận xét) cho phép giáo viên để lại bình luận và đề xuất chỉnh sửa trên tài liệu mà không làm thay đổi trực tiếp nội dung bài viết gốc của học sinh."
    },
    {
      question: "Trong một dự án nhóm 4 học sinh cùng nhau viết chung một bài báo cáo và thiết kế slide thuyết trình, các thành viên trong nhóm cần được cấp mức quyền nào?",
      options: [
        "A. Quyền Xem (Viewer)",
        "B. Quyền Nhận xét (Commenter)",
        "C. Quyền Chỉnh sửa (Editor)",
        "D. Quyền Hạn chế (Restricted)"
      ],
      answer: "C",
      explanation: "Để cả 4 thành viên có thể cùng gõ văn bản, chèn ảnh, chỉnh sửa slide đồng thời theo thời gian thực thì bắt buộc phải cấp quyền Editor (Người chỉnh sửa)."
    },
    {
      question: "Phát biểu nào sau đây là hoàn toàn ĐÚNG về việc quản lý và an toàn dữ liệu trên Cloud Storage?",
      options: [
        "A. Đồng bộ hóa (Sync) chính là sao lưu dự phòng (Backup), xóa file ở máy này thì máy khác vẫn còn nguyên.",
        "B. Mọi tài liệu khi đưa lên cloud đều nên để chế độ 'Anyone with the link can edit' để dễ tìm kiếm.",
        "C. Cần kiểm soát chặt chẽ quyền truy cập, áp dụng nguyên tắc quyền tối thiểu và phân biệt rõ Sync với Backup.",
        "D. Khi đã lưu file trên Google Drive thì không bao giờ cần lưu trữ thêm bản sao nào trên máy tính hay USB."
      ],
      answer: "C",
      explanation: "Cần kiểm soát chặt chẽ quyền truy cập (chỉ cấp đúng quyền cần thiết), nhận thức rõ SYNC ≠ BACKUP (vì sync xóa 1 nơi sẽ mất cả 2 nơi) và duy trì các bản sao lưu độc lập để bảo vệ an toàn dữ liệu."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Phân Biệt Lưu Trữ Cục Bộ (Local Storage) vs Lưu Trữ Đám Mây (Cloud Storage)",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Hãy so sánh hình thức lưu trữ tệp trên Ổ cứng máy tính cục bộ (C:\\Documents) và trên Ổ đĩa trực tuyến (Google Drive / OneDrive) theo 3 tiêu chí: (1) Yêu cầu kết nối mạng Internet, (2) Khả năng truy cập từ nhiều thiết bị khác nhau, (3) Rủi ro mất mát dữ liệu khi máy tính bị hỏng phần cứng.",
      method: "⚡ Phương pháp so sánh bản chất:\n• Local Storage: Offline hoàn toàn, chỉ mở được trên máy đó, hỏng máy là mất dữ liệu.\n• Cloud Storage: Cần Internet, mở được từ mọi thiết bị, dữ liệu an toàn trên Data Center dù máy tính cá nhân bị hỏng.",
      solution: "✅ Đáp án & Bảng so sánh chi tiết:\n1. Yêu cầu kết nối mạng:\n   • Local Storage: Hoàn toàn không cần Internet, làm việc offline 100%.\n   • Cloud Storage: Cần kết nối Internet để tải dữ liệu, đồng bộ và cộng tác.\n2. Khả năng truy cập từ thiết bị khác:\n   • Local Storage: Không thể truy cập từ xa (phải copy qua USB hoặc gửi email).\n   • Cloud Storage: Đăng nhập tài khoản là truy cập được ngay từ PC, điện thoại, máy tính bảng ở bất cứ đâu.\n3. Rủi ro khi máy tính hỏng phần cứng (cháy ổ cứng, rơi vỡ):\n   • Local Storage: Mất toàn bộ dữ liệu nếu chưa sao lưu.\n   • Cloud Storage: Dữ liệu vẫn an toàn nguyên vẹn trên máy chủ của Google/Microsoft, chỉ cần dùng máy tính khác đăng nhập là lấy lại được dữ liệu."
    },
    {
      title: "Dạng 2: Lựa Chọn Mức Phân Quyền Chia Sẻ (Viewer, Commenter, Editor) trong Tình Huống",
      tag: "Thông hiểu & Ứng dụng",
      sampleQuestion: "Em hãy lựa chọn mức quyền chia sẻ chính xác (Viewer, Commenter hay Editor) cho 3 tình huống sau và giải thích ngắn gọn nguyên nhân:\n(a) Chia sẻ file đề thi khảo sát chất lượng cho 100 học sinh khối 11 làm bài.\n(b) Gửi bài thuyết trình cho giáo viên bộ môn xem trước và cho lời khuyên chỉnh sửa.\n(c) Chia sẻ bảng phân công công việc cho 5 bạn trong ban tổ chức sự kiện để cùng cập nhật tiến độ hàng ngày.",
      method: "⚡ Quy tắc cấp quyền tối thiểu:\n• Chỉ đọc ➜ Viewer.\n• Góp ý, nhận xét ➜ Commenter.\n• Cùng làm, cập nhật tiến độ ➜ Editor.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• (a) Đề thi cho 100 học sinh ➜ Cấp quyền VIEWER (Người xem). Lý do: Để học sinh đọc đề thi nhưng tuyệt đối không thể can thiệp chỉnh sửa nội dung câu hỏi.\n• (b) Gửi bài cho giáo viên hướng dẫn ➜ Cấp quyền COMMENTER (Người nhận xét). Lý do: Giáo viên có thể để lại lời nhận xét, ghi chú và đề xuất cách sửa trực tiếp trên từng đoạn văn mà không làm xáo trộn bài viết gốc của học sinh.\n• (c) 5 bạn trong ban tổ chức cập nhật tiến độ ➜ Cấp quyền EDITOR (Người chỉnh sửa). Lý do: Các bạn cần trực tiếp đánh dấu hoàn thành, gõ nội dung công việc mới và điều chỉnh số liệu hàng ngày."
    },
    {
      title: "Dạng 3: Phân Tích Rủi Ro An Toàn Thông Tin của Liên Kết Công Khai (Anyone with the link)",
      tag: "Bẫy Lý thuyết & Đạo đức Số",
      sampleQuestion: "Một lớp trưởng tạo một bảng tính Google Sheets chứa toàn bộ danh sách lớp gồm: Họ tên, Số điện thoại cá nhân, Địa chỉ nhà và Điểm kiểm tra định kỳ của 45 học sinh. Để các bạn dễ vào xem điểm, lớp trưởng đã bật tùy chọn chia sẻ: 'Anyone with the link can edit' rồi gửi link vào nhóm Facebook của trường. Nêu 2 rủi ro an toàn dữ liệu nghiêm trọng và hướng dẫn cách khắc phục chuẩn mực.",
      method: "⚡ Phân tích lỗ hổng bảo mật:\n1. 'Anyone with the link' + 'Editor' = Bất kỳ ai có link đều xem và sửa/xóa được toàn bộ thông tin cá nhân.\n2. Link gửi lên nhóm Facebook có thể bị người ngoài lấy, lộ lọt dữ liệu nhạy cảm.\n3. Khắc phục: Chuyển sang 'Restricted' (chỉ định email) hoặc chỉ cấp 'Viewer' cho danh sách ẩn thông tin nhạy cảm.",
      solution: "✅ Đáp án & Phân tích rủi ro chi tiết:\n1. 2 Rủi ro nghiêm trọng:\n   • Rò rỉ thông tin cá nhân (Doxxing / Lừa đảo): Kẻ xấu có thể lấy số điện thoại, địa chỉ nhà của học sinh để thực hiện các cuộc gọi lừa đảo phụ huynh.\n   • Dữ liệu bị phá hoại hoặc sửa điểm: Bất kỳ ai có link đều có thể xóa sạch bảng tính hoặc cố tình sửa điểm của người khác mà không cần đăng nhập.\n2. Cách khắc phục chuẩn mực:\n   • Bước 1: Mở bảng tính ➜ Bấm nút 'Chia sẻ' (Share).\n   • Bước 2: Chuyển quyền chung từ 'Bất kỳ ai có liên kết' thành 'Hạn chế' (Restricted).\n   • Bước 3: Nhập chính xác danh sách địa chỉ email của 45 bạn học sinh trong lớp và chỉ cấp quyền 'Người xem' (Viewer).\n   • Bước 4: Tách riêng cột địa chỉ nhà và số điện thoại cá nhân sang một tệp quản trị riêng của giáo viên chủ nhiệm, không chia sẻ chung với bảng điểm."
    },
    {
      title: "Dạng 4: Phân Biệt Bản Chất Đồng Bộ (Sync) vs Sao Lưu Dự Phòng (Backup)",
      tag: "Thông hiểu & Phân tích Sâu",
      sampleQuestion: "Bạn Minh phát biểu: 'Máy tính của em đã cài phần mềm Google Drive for Desktop và bật tính năng đồng bộ (Sync) toàn bộ thư mục Documents lên cloud, nên em hoàn toàn yên tâm không cần sao lưu (Backup) gì nữa vì dữ liệu không bao giờ có thể bị mất'. Phát biểu của Minh có hoàn toàn đúng không? Hãy đưa ra một tình huống thực tế chứng minh rủi ro của việc hiểu nhầm Sync là Backup.",
      method: "⚡ Phản biện Sync ≠ Backup:\n• Sync = Đồng bộ 2 chiều tức thời (thay đổi ở máy ➜ thay đổi trên cloud).\n• Tình huống nguy hiểm: Xóa nhầm file hoặc bị virus mã hóa Ransomware ➜ Toàn bộ file trên cloud cũng bị xóa/mã hóa theo!",
      solution: "✅ Đáp án & Giải thích thuyết phục:\n• Phát biểu của Minh là KHÔNG HOÀN TOÀN ĐÚNG.\n• Bản chất: Đồng bộ (Sync) là cơ chế nhân bản trạng thái làm việc giữa máy tính và đám mây theo thời gian thực. Sync KHÔNG THỂ thay thế hoàn toàn cho Sao lưu dự phòng (Backup) độc lập.\n• Tình huống rủi ro thực tế:\n  1. Tình huống xóa nhầm: Nếu Minh vô tình chọn nhầm và xóa vĩnh viễn một thư mục tài liệu trên máy tính, phần mềm Sync sẽ lập tức gửi lệnh xóa lên Google Drive và xóa sạch dữ liệu trên đám mây.\n  2. Tình huống nhiễm virus Ransomware: Nếu máy tính bị mã độc tống tiền mã hóa toàn bộ tệp trong thư mục Documents thành file rác, ứng dụng Sync sẽ ngay lập tức đồng bộ các file bị hỏng đó đè lên các file chuẩn trên Google Drive.\n• Lời khuyên: Minh nên tạo thêm một bản sao lưu độc lập (Backup định kỳ vào thư mục riêng không sync hoặc nén lưu trữ trên ổ cứng ngoài cắm rời)."
    },
    {
      title: "Dạng 5: Thiết Kế Hệ Thống Quản Trị Tài Liệu & Phân Quyền Cho Dự Án Nhóm 5 Người",
      tag: "Vận dụng Cao & Quản trị Dự án",
      sampleQuestion: "Một nhóm 5 học sinh lớp 11 thực hiện dự án nghiên cứu khoa học trong 3 tháng. Nhóm gồm: 1 Trưởng nhóm (quản lý chung), 3 Thành viên nghiên cứu, và có 1 Giáo viên hướng dẫn đồng hành. Em hãy thiết kế cấu trúc thư mục làm việc trên Google Drive và xây dựng bảng phân quyền chi tiết cho từng thành viên để đảm bảo làm việc hiệu quả và an toàn dữ liệu.",
      method: "⚡ Thiết kế hệ thống dữ liệu nhóm:\n1. Cây thư mục phân cấp: PROJECT_NCKH > 01_TAI_LIEU_THAM_KHAO, 02_BAO_CAO_CHINH, 03_SO_LIEU_THUC_NGHIEM, 04_SLIDE_THUYET_TRINH, 05_BACKUP_DINH_KY.\n2. Phân quyền: Trưởng nhóm (Owner/Editor), Thành viên (Editor các tệp làm việc), Giáo viên (Commenter), Người ngoài (Viewer nếu cần).",
      solution: "✅ Thiết kế Hệ thống Quản trị & Phân quyền Toàn diện:\n1. Cấu trúc Cây Thư mục Dự án:\n   PROJECT_NCKH_TIN11\n   ├── 01_TAI_LIEU_THAM_KHAO (Sách, bài báo nghiên cứu dạng PDF)\n   ├── 02_BAO_CAO_CHINH (Tệp Google Docs bài viết chung)\n   ├── 03_SO_LIEU_THUC_NGHIEM (Tệp Google Sheets nhập dữ liệu khảo sát)\n   ├── 04_SLIDE_THUYET_TRINH (Tệp Google Slides báo cáo)\n   └── 05_BACKUP_DINH_KY (Lưu các bản sao lưu chốt tiến độ theo tuần)\n\n2. Bảng Phân Quyền Chi Tiết Theo Vai Trò:\n• Trưởng nhóm: Quyền Chủ sở hữu (Owner) / Editor toàn bộ thư mục gốc.\n• 3 Thành viên nghiên cứu: Cấp quyền Editor trên thư mục 02_BAO_CAO, 03_SO_LIEU và 04_SLIDE để cùng cộng tác gõ bài.\n• Giáo viên hướng dẫn: Cấp quyền Commenter trên toàn bộ các tệp báo cáo để thầy cô ghi nhận xét, phê duyệt từng phần.\n• Hội đồng chấm thi / Khách ngoài: Cấp quyền Viewer khi gửi bài báo cáo cuối cùng.\n\n3. Biện pháp an toàn bổ sung: Bật tính năng 'Lịch sử phiên bản' (Version History) để khôi phục bài viết nếu có bạn xóa nhầm đoạn văn; Chủ nhật hàng tuần Trưởng nhóm tải 1 bản nén .zip về lưu trên máy tính cá nhân (Quy tắc Backup)."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Thực Hành Tạo Cây Thư Mục TIN_HOC_11 & Thao Tác Tệp Trên Drive",
      tag: "Thực hành Máy tính Bắt buộc",
      problem: "Truy cập vào dịch vụ lưu trữ đám mây Google Drive (hoặc Microsoft OneDrive) bằng tài khoản cá nhân và thực hiện tuần tự các thao tác quản trị tệp sau:",
      tasks: [
        "Nhiệm vụ 1: Tạo một thư mục gốc mới có tên 'TIN_HOC_11_[TenHocSinh]' (Ví dụ: TIN_HOC_11_NguyenVanA).",
        "Nhiệm vụ 2: Bên trong thư mục gốc, tạo đủ 4 thư mục con: 01_BAI_HOC, 02_BAI_TAP, 03_DE_THI, 04_BACKUP.",
        "Nhiệm vụ 3: Upload ít nhất 5 tệp tin tài liệu học tập từ máy tính cá nhân lên các thư mục con phù hợp.",
        "Nhiệm vụ 4: Thực hiện thao tác Đổi tên (Rename) cho 2 tệp và Di chuyển (Move) 1 tệp giữa các thư mục.",
        "Nhiệm vụ 5: Thực hiện thao tác Download 1 tệp từ Google Drive về lưu vào thư mục Downloads trên máy tính."
      ],
      requirements: "Chụp 1 ảnh chụp màn hình thể hiện cây thư mục hoàn chỉnh trên Google Drive để nộp cho giáo viên.",
      hint: "Bám sát các mục III.4 và IV trong bài học.",
      solution: `Checklist đánh giá thực hành Drive (10/10 Điểm):
✓ [2.0đ] Tạo đúng tên thư mục gốc TIN_HOC_11_[TenHocSinh] trên Google Drive.
✓ [2.0đ] Tạo đủ 4 thư mục con đúng tên phân loại.
✓ [2.0đ] Upload thành công tối thiểu 5 file vào đúng thư mục con.
✓ [2.0đ] Thực hiện đúng thao tác đổi tên 2 file và di chuyển 1 file.
✓ [2.0đ] Download thành công 1 file về máy tính và chụp ảnh nộp bài rõ nét.`
    },
    {
      title: "Bài tập 2: Thực Nghiệm Phân Quyền 3 Mức (Viewer, Commenter, Editor) Thực Tế",
      tag: "Thực nghiệm Phân quyền",
      scenario: "Để hiểu sâu sự khác nhau giữa 3 mức quyền chia sẻ trong thực tế:",
      problem: "Em hãy tạo một tệp Google Docs thử nghiệm có tên `Thu_Nghiem_Phan_Quyen.docx` và thực hiện các bước sau cùng một người bạn:",
      tasks: [
        "Bước 1: Chia sẻ tệp cho bạn với quyền 'Người xem' (Viewer). Yêu cầu bạn thử gõ thêm chữ hoặc xóa chữ xem có được không.",
        "Bước 2: Nâng quyền của bạn lên 'Người nhận xét' (Commenter). Yêu cầu bạn thử bôi đen một đoạn văn và gõ lời nhận xét góp ý.",
        "Bước 3: Nâng quyền của bạn lên 'Người chỉnh sửa' (Editor). Yêu cầu bạn cùng gõ một đoạn văn bản mới đồng thời với em.",
        "Bước 4: Ghi lại cảm nhận và nhận xét sự khác biệt trực quan trên màn hình ở mỗi mức quyền."
      ],
      requirements: "Ghi chép kết quả thực nghiệm rõ ràng vào vở bài tập.",
      hint: "Bám sát Mục III.5 trong bài học.",
      solution: `Báo Cáo Kết Quả Thực Nghiệm Phân Quyền:
1. Khi ở quyền Viewer: Người bạn chỉ đọc được nội dung trên màn hình. Thanh công cụ chỉnh sửa bị ẩn hoàn toàn, không thể đặt con trỏ chuột để gõ chữ hay xóa bất kỳ ký tự nào.
2. Khi ở quyền Commenter: Người bạn không thể trực tiếp sửa chữ gốc, nhưng khi bôi đen văn bản sẽ xuất hiện biểu tượng dấu cộng (+) để thêm nhận xét ở lề phải, hoặc khi gõ chữ mới thì văn bản hiển thị dưới dạng 'Đề xuất chỉnh sửa' màu xanh lá cây để chủ sở hữu duyệt (Accept/Reject).
3. Khi ở quyền Editor: Người bạn nhìn thấy con trỏ chuột của chủ sở hữu theo thời gian thực (với tên hiển thị), hai người có thể cùng lúc gõ văn bản, chèn ảnh, xóa đoạn văn cực kỳ mượt mà.`
    },
    {
      title: "Bài tập 3: Phân Tích 3 Tình Huống Cấp Quyền & Rủi Ro Của 'Anyone With The Link Can Edit'",
      tag: "Phân tích Rủi ro & Tình huống",
      problem: "Hãy đọc kỹ và trả lời 2 bài toán phân tích tình huống thực tế sau:",
      tasks: [
        "Câu 1: Phân tích 3 tình huống chia sẻ dữ liệu trong trường học và chỉ định mức quyền tối ưu (Viewer, Commenter hay Editor) cho từng tình huống: (a) Giáo viên gửi bài giảng PDF cho cả khối 11 xem trước bài mới; (b) Học sinh gửi bài tập làm văn cho giáo viên nhận xét; (c) Nhóm 3 bạn cùng làm bài tập lớn môn Tin học.",
        "Câu 2: Viết đoạn văn ngắn (từ 5 đến 7 câu) phân tích rõ 2 rủi ro an toàn thông tin lớn nhất khi một người vô tình chia sẻ tệp dữ liệu quan trọng ở chế độ 'Anyone with the link can edit' lên mạng xã hội."
      ],
      requirements: "Trình bày mạch lạc, lập luận thuyết phục.",
      hint: "Dựa vào các mục III.5, III.6 và VIII trong bài học.",
      solution: `1. Phân tích 3 tình huống:
• (a) Giáo viên gửi bài giảng PDF cho học sinh ➜ Cấp quyền VIEWER (để học sinh đọc học bài, không làm xáo trộn bài giảng).
• (b) Học sinh gửi bài văn cho giáo viên ➜ Cấp quyền COMMENTER (để giáo viên nhận xét, sửa lỗi chính tả/ngữ pháp mà giữ nguyên bài làm của học sinh).
• (c) Nhóm 3 bạn cùng làm bài tập lớn ➜ Cấp quyền EDITOR (để cả 3 cùng soạn thảo, chia sẻ số liệu và hoàn thiện báo cáo).

2. Đoạn văn phân tích rủi ro của 'Anyone with the link can edit':
Việc chia sẻ tài liệu với tùy chọn 'Anyone with the link can edit' tiềm ẩn những hiểm họa an ninh thông tin vô cùng nghiêm trọng. Trước hết, bất kỳ ai có được đường liên kết (kể cả do bị chuyển tiếp ngoài ý muốn hoặc bị rò rỉ lên mạng xã hội) đều có toàn quyền xóa sạch toàn bộ nội dung tệp mà không để lại danh tính rõ ràng, khiến công sức của tập thể bị mất trắng. Thứ hai, kẻ xấu có thể lợi dụng quyền chỉnh sửa để chèn vào các liên kết độc hại, mã độc virus hoặc phát tán nội dung xuyên tạc, vi phạm pháp luật ngay trên tài liệu của người chia sẻ. Do đó, người dùng tuyệt đối không sử dụng tùy chọn này cho các dữ liệu quan trọng mà phải áp dụng nguyên tắc chia sẻ cho đúng tài khoản email với mức quyền tối thiểu cần thiết.`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b6-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Phân Loại: Cloud Storage hay Local Storage?",
      duration: "2 phút",
      type: "exercise",
      description: "Phân loại 4 vị trí lưu trữ: C:\\Documents, Google Drive, Ổ flash USB, Microsoft OneDrive.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Phân biệt chính xác giữa lưu trữ cục bộ và lưu trữ đám mây.",
        requirements: [
          "Cho 4 vị trí lưu trữ sau: (1) Thư mục C:\\Documents trên máy tính, (2) Google Drive, (3) Ổ nhớ flash USB, (4) Microsoft OneDrive.",
          "Nhiệm vụ: Phân loại từng vị trí vào nhóm 'Lưu trữ Cục bộ (Local Storage)' hoặc 'Lưu trữ Đám mây (Cloud Storage)'."
        ],
        qaList: [
          {
            q: "Kết quả phân loại 4 vị trí lưu trữ?",
            a: "Đáp án:\n• C:\\Documents ➜ Lưu trữ Cục bộ (Local Storage trên ổ cứng máy tính).\n• Google Drive ➜ Lưu trữ Đám mây (Cloud Storage trực tuyến).\n• Ổ nhớ flash USB ➜ Lưu trữ Cục bộ / Bộ nhớ ngoài (External Local Storage).\n• Microsoft OneDrive ➜ Lưu trữ Đám mây (Cloud Storage trực tuyến)."
          }
        ]
      }
    },
    {
      id: "practice-b6-2",
      badge: "Bài 2 – 2 phút",
      title: "Bài 2 – Phân Biệt: Upload hay Download?",
      duration: "2 phút",
      type: "exercise",
      description: "Xác định thao tác Upload hay Download trong 3 tình huống truyền tệp tin.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Nắm vững bản chất chiều luồng dữ liệu của Upload và Download.",
        requirements: [
          "Xác định thao tác (Upload hay Download) cho 3 tình huống sau:\n1. Chuyển một file báo cáo từ ổ cứng laptop lên lưu trữ trên Google Drive.\n2. Tải một file đề thi PDF từ Google Drive về lưu vào thư mục Downloads của máy tính để in ra giấy.\n3. Đồng bộ một bức ảnh vừa chụp từ điện thoại thông minh lên dịch vụ lưu trữ đám mây iCloud."
        ],
        qaList: [
          {
            q: "1. Từ laptop lên Google Drive?",
            a: "Đáp án: Thao tác UPLOAD (Tải lên)."
          },
          {
            q: "2. Từ Google Drive về thư mục Downloads của máy tính?",
            a: "Đáp án: Thao tác DOWNLOAD (Tải về / Tải xuống)."
          },
          {
            q: "3. Từ điện thoại lên dịch vụ đám mây?",
            a: "Đáp án: Thao tác UPLOAD (Tải lên)."
          }
        ]
      }
    },
    {
      id: "practice-b6-3",
      badge: "Bài 3 – 3 phút",
      title: "Bài 3 – Lựa Chọn Quyền Chia Sẻ Phù Hợp",
      duration: "3 phút",
      type: "exercise",
      description: "Chọn mức quyền Viewer, Commenter hay Editor cho 3 nhu cầu làm việc thực tế.",
      content: {
        objective: "Mức độ: Cơ bản → Thông hiểu | Thời gian: 3 phút. Áp dụng chuẩn xác 3 mức quyền chia sẻ cốt lõi.",
        requirements: [
          "Hãy chọn mức quyền chia sẻ phù hợp nhất (Viewer, Commenter hoặc Editor) cho 3 trường hợp sau:\n1. Chia sẻ tài liệu hướng dẫn học tập cho toàn bộ học sinh trong trường chỉ đọc tham khảo.\n2. Gửi bản thảo bài tập nghiên cứu cho giáo viên bộ môn xem trước để xin ý kiến góp ý.\n3. Chia sẻ file văn bản cho 3 bạn cùng nhóm để cùng nhau viết nội dung báo cáo thực hành."
        ],
        qaList: [
          {
            q: "1. Chia sẻ tài liệu chỉ để đọc?",
            a: "Đáp án: Cấp quyền VIEWER (Người xem)."
          },
          {
            q: "2. Gửi bài cho giáo viên góp ý?",
            a: "Đáp án: Cấp quyền COMMENTER (Người nhận xét)."
          },
          {
            q: "3. Các bạn cùng nhóm cùng soạn thảo?",
            a: "Đáp án: Cấp quyền EDITOR (Người chỉnh sửa)."
          }
        ]
      }
    },
    {
      id: "practice-b6-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Sửa Lỗi Cấp Quyền Chia Sẻ Nguy Hiểm",
      duration: "3 phút",
      type: "exercise",
      description: "Phát hiện rủi ro và điều chỉnh quyền khi bài kiểm tra bị để 'Anyone with the link can edit'.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Khắc phục lỗ hổng bảo mật khi phân quyền chia sẻ sai lầm.",
        requirements: [
          "Tình huống: Một bài kiểm tra 15 phút của lớp được lưu trên Google Docs nhưng người tạo vô tình bật chia sẻ: 'Anyone with the link' với quyền 'Editor' và dán link vào nhóm chat của lớp.",
          "Câu hỏi 1: Nêu 2 rủi ro nghiêm trọng nhất có thể xảy ra với bài kiểm tra này.",
          "Câu hỏi 2: Hãy hướng dẫn cách sửa lại cài đặt phân quyền để đảm bảo an toàn và đúng mục đích."
        ],
        qaList: [
          {
            q: "2 Rủi ro nghiêm trọng nhất là gì?",
            a: "Đáp án:\n1. Rủi ro bị xóa hoặc sửa đè đáp án: Bất kỳ ai trong nhóm chat (kể cả người ngoài nếu link bị chuyển tiếp) đều có thể vào xóa sạch toàn bộ nội dung đề bài hoặc sửa đáp án của người khác.\n2. Không kiểm soát được danh tính người sửa: Khi để Anyone with the link can edit, người sửa có thể ở trạng thái ẩn danh (Anonymous), không thể truy cứu ai là người đã phá hoại bài làm."
          },
          {
            q: "Cách sửa lại phân quyền an toàn?",
            a: "Đáp án: Bấm nút 'Chia sẻ' (Share) ➜ Chuyển từ 'Anyone with the link' thành 'Restricted' (Hạn chế) và chỉ chia sẻ cho danh sách email của học sinh với quyền 'Viewer' (nếu chỉ để xem đề) hoặc dùng hình thức Google Forms / Google Classroom để thu bài riêng biệt."
          }
        ]
      }
    },
    {
      id: "practice-b6-5",
      badge: "Bài 5 – 3 phút",
      title: "Bài 5 – Thực Hành Tổ Chức Thư Mục Trên Drive",
      duration: "3 phút",
      type: "exercise",
      description: "Tạo cấu trúc thư mục TIN_HOC_11 và phân loại 5 tệp tin đúng vị trí.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Rèn luyện kỹ năng quản trị tệp và thư mục trên đám mây.",
        requirements: [
          "Tạo cây thư mục chuẩn trên Google Drive:\n  TIN_HOC_11\n  ├── BAI_HOC\n  ├── BAI_TAP\n  ├── DE_THI\n  ├── HINH_ANH\n  └── BACKUP",
          "Nhiệm vụ: Upload 5 tệp sau và di chuyển vào đúng thư mục con: (1) Bai5_KetNoiThietBi.pdf, (2) BaiTapNhom_Tin11.docx, (3) DeOnTap_HocKy.pdf, (4) SoDo_Cloud.png, (5) Backup_T11.zip."
        ],
        submissionHint: "Phân bổ tệp chính xác:\n• Bai5_KetNoiThietBi.pdf ➜ Chuyển vào BAI_HOC\n• BaiTapNhom_Tin11.docx ➜ Chuyển vào BAI_TAP\n• DeOnTap_HocKy.pdf ➜ Chuyển vào DE_THI\n• SoDo_Cloud.png ➜ Chuyển vào HINH_ANH\n• Backup_T11.zip ➜ Chuyển vào BACKUP"
      }
    },
    {
      id: "practice-b6-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – Phân Quyền Bài Tập Nhóm & Nguyên Tắc Quyền Tối Thiểu",
      duration: "3 phút",
      type: "exercise",
      description: "Thiết lập quyền cho các đối tượng khác nhau và giải thích vì sao không cấp quyền Editor cho giáo viên.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Khắc sâu nguyên tắc cấp quyền tối thiểu.",
        requirements: [
          "Một nhóm 4 học sinh làm bài tập lớn trên Google Docs. Cần chia sẻ cho 3 nhóm đối tượng: (1) 4 Bạn trong nhóm, (2) Giáo viên hướng dẫn để xin nhận xét, (3) Các bạn học sinh lớp khác xem tham khảo.",
          "Câu hỏi 1: Chỉ định mức quyền (Viewer, Commenter, Editor) cho từng nhóm đối tượng trên.",
          "Câu hỏi 2: Vì sao khi gửi bài cho giáo viên hướng dẫn, nhóm KHÔNG NÊN cấp quyền Editor mà chỉ nên cấp quyền Commenter?"
        ],
        qaList: [
          {
            q: "Phân quyền cho 3 nhóm đối tượng?",
            a: "Đáp án:\n• 4 Bạn trong nhóm ➜ Cấp quyền EDITOR (để cùng soạn thảo).\n• Giáo viên hướng dẫn ➜ Cấp quyền COMMENTER (để nhận xét, góp ý).\n• Học sinh lớp khác xem tham khảo ➜ Cấp quyền VIEWER (chỉ đọc)."
          },
          {
            q: "Vì sao không cấp quyền Editor cho giáo viên?",
            a: "Đáp án: Theo nguyên tắc cấp quyền tối thiểu (Least Privilege), giáo viên chỉ có nhiệm vụ xem và đưa ra nhận xét, gợi ý sửa đổi. Nếu cấp quyền Editor, giáo viên có thể vô tình gõ đè làm thay đổi văn phong gốc của học sinh, hoặc học sinh không phân biệt được đâu là câu chữ của mình và đâu là góp ý của thầy cô. Cấp Commenter giúp các lời phê hiển thị riêng biệt ở lề phải rất rõ ràng."
          }
        ]
      }
    },
    {
      id: "practice-b6-7",
      badge: "Bài 7 – 3 phút",
      title: "Bài 7 – Phân Tích Rủi Ro Khi Chia Sẻ Bằng Liên Kết Công Khai",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích nguy cơ rò rỉ thông tin khi sử dụng liên kết 'Anyone with the link can view'.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Nhận thức rõ bản chất lan truyền của đường link công khai.",
        requirements: [
          "Tình huống: Một học sinh chia sẻ tài liệu học tập bằng tùy chọn 'Anyone with the link can view' (Bất kỳ ai có liên kết đều có thể xem) và gửi link cho một người bạn thân.",
          "Câu hỏi: Mặc dù đã đặt quyền là Viewer (không ai sửa được), việc chia sẻ bằng liên kết này vẫn tiềm ẩn rủi ro gì về bảo mật dữ liệu?"
        ],
        qaList: [
          {
            q: "Rủi ro bảo mật của liên kết Anyone with the link?",
            a: "Đáp án: RỦI RO LINK BỊ CHUYỂN TIẾP (Link Forwarding).\n• Người bạn thân có thể vô tình hoặc cố ý sao chép đường link đó gửi cho người khác, hoặc đăng lên nhóm chat công khai.\n• Bất kỳ ai nhận được đường link đó đều có thể mở xem toàn bộ nội dung tài liệu mà người chủ sở hữu hoàn toàn không hay biết và không thể kiểm soát được danh tính người đang đọc."
          }
        ]
      }
    },
    {
      id: "practice-b6-8",
      badge: "Bài 8 – 3 phút",
      title: "Bài 8 – Phản Biện: Sync Có Thay Thế Được Backup Không?",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích nhận định sai lầm: 'Em đã sync toàn bộ ảnh lên Google Drive nên không cần backup'.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Khắc sâu nguyên tắc cốt lõi: SYNC ≠ BACKUP.",
        requirements: [
          "Một học sinh nói: 'Điện thoại của em đã bật tính năng đồng bộ (Sync) toàn bộ ảnh lên Google Photos / Google Drive, nên em hoàn toàn yên tâm không cần sao lưu (Backup) gì nữa vì ảnh không bao giờ mất'.",
          "Câu hỏi: Nhận xét trên của học sinh Đúng hay Sai? Hãy chỉ ra một tình huống thực tế mà bạn ấy có thể bị mất sạch ảnh dù đã bật Sync."
        ],
        qaList: [
          {
            q: "Nhận xét của học sinh đúng hay sai?",
            a: "Đáp án: Nhận xét trên là SAI."
          },
          {
            q: "Tình huống thực tế có thể mất sạch ảnh?",
            a: "Đáp án: Vì SYNC là đồng bộ trạng thái 2 chiều:\n• Tình huống 1 (Xóa nhầm): Nếu học sinh vào điện thoại chọn 'Xóa toàn bộ thư mục ảnh', lệnh xóa đó sẽ ngay lập tức được đồng bộ lên Google Drive và xóa luôn toàn bộ ảnh trên đám mây.\n• Tình huống 2 (Mất tài khoản): Nếu tài khoản Google bị kẻ xấu đánh cắp (hack) hoặc bị khóa do vi phạm chính sách, học sinh sẽ mất toàn bộ quyền truy cập vào kho ảnh.\n• Lời khuyên: Phải duy trì thêm một bản sao lưu (Backup) độc lập trên máy tính hoặc ổ cứng ngoài cắm rời."
          }
        ]
      }
    },
    {
      id: "practice-b6-9",
      badge: "Bài 9 – 3 phút",
      title: "Bài 9 – Case Study: Xử Lý Khi Laptop Bị Hỏng Hoặc Bị Mất",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích các bước phục hồi dữ liệu khi tài liệu đã lưu trên Cloud và các lưu ý an toàn.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Vận dụng ưu thế của Cloud Storage vào giải quyết sự cố mất mát thiết bị.",
        requirements: [
          "Tình huống: Trước ngày nộp bài tập lớn 1 ngày, chiếc laptop của bạn An không may bị chập điện hỏng hoàn toàn ổ cứng. Rất may toàn bộ tài liệu đã được An lưu trữ trên Google Drive.",
          "Nhiệm vụ:\n1. Hướng dẫn An cách tiếp tục làm việc và nộp bài đúng hạn.\n2. Nêu ít nhất 3 lưu ý quan trọng để bảo vệ tài khoản đám mây khi phải đăng nhập trên máy tính lạ ở quán net hoặc trường học."
        ],
        qaList: [
          {
            q: "1. Cách tiếp tục làm việc và nộp bài?",
            a: "Đáp án: An chỉ cần mượn một chiếc máy tính khác (hoặc dùng điện thoại/máy tính bảng), mở trình duyệt web, truy cập drive.google.com, đăng nhập tài khoản Google của mình là có thể mở lại toàn bộ file bài tập để tiếp tục chỉnh sửa và nộp bài bình thường mà không bị mất một chữ nào."
          },
          {
            q: "2. 3 Lưu ý bảo mật khi đăng nhập trên máy lạ?",
            a: "Đáp án:\n1. Luôn mở chế độ Ẩn danh (Incognito / InPrivate mode) trên trình duyệt để không lưu mật khẩu và lịch sử.\n2. Bật tính năng Xác thực 2 bước (2-Factor Authentication - 2FA) qua mã gửi về điện thoại.\n3. Sau khi dùng xong, bắt buộc phải bấm nút Đăng xuất (Sign out) hoàn toàn và đóng tất cả cửa sổ trình duyệt."
          }
        ]
      }
    },
    {
      id: "practice-b6-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử Thách Tổng Hợp: Thiết Kế Hệ Thống Lưu Trữ Nhóm 5 Người",
      duration: "6 phút",
      type: "exercise",
      description: "Xây dựng cây thư mục PROJECT, thiết lập phân quyền cho 3 đối tượng và nêu 4 giải pháp an toàn dữ liệu.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Tổng hợp toàn diện năng lực tổ chức Drive, phân quyền và bảo vệ an toàn thông tin.",
        requirements: [
          "Tình huống: Một nhóm 5 học sinh cùng thực hiện một dự án học tập. Nhóm cần: (1) Lưu trữ tài liệu chung, (2) Cùng nhau viết báo cáo, (3) Gửi cho giáo viên hướng dẫn góp ý, (4) Chia sẻ tài liệu tham khảo cho người ngoài xem, (5) Giảm thiểu tối đa nguy cơ mất mát dữ liệu.",
          "Nhiệm vụ học sinh:\n1. Vẽ cấu trúc cây thư mục PROJECT trên Drive gồm ít nhất 4 thư mục con chuyên biệt.\n2. Chỉ định phân quyền chính xác cho: Thành viên nhóm, Giáo viên hướng dẫn, Người ngoài.\n3. Nêu 4 biện pháp kỹ thuật và quy tắc làm việc để bảo vệ dữ liệu dự án an toàn tuyệt đối."
        ],
        submissionHint: "Hướng dẫn giải chuẩn mực:\n1. Thiết kế Cây Thư mục:\n   PROJECT_TIN11\n   ├── 01_DOCUMENT (Chứa file văn bản báo cáo Google Docs)\n   ├── 02_IMAGE (Chứa ảnh tư liệu, sơ đồ thiết kế)\n   ├── 03_PRESENTATION (Chứa slide thuyết trình Google Slides)\n   └── 04_BACKUP (Chứa các file sao lưu tiến độ hàng tuần)\n\n2. Bảng Phân Quyền Chi Tiết:\n• 5 Thành viên trong nhóm ➜ Cấp quyền EDITOR trên các thư mục 01, 02, 03.\n• Giáo viên hướng dẫn ➜ Cấp quyền COMMENTER trên các file báo cáo.\n• Người ngoài / Học sinh lớp khác ➜ Cấp quyền VIEWER nếu cần thiết.\n\n3. 4 Biện pháp an toàn dữ liệu cốt lõi:\n• (1) Áp dụng nguyên tắc quyền tối thiểu (không cấp Editor cho người ngoài).\n• (2) Bật tính năng 'Lịch sử phiên bản' (Version History) để khôi phục bài viết khi bị xóa nhầm.\n• (3) Thực hiện quy tắc Backup: Cuối mỗi tuần tải 1 bản sao lưu nén .zip về lưu trên ổ cứng cá nhân.\n• (4) Bật xác thực 2 bước (2FA) cho tất cả tài khoản của các thành viên trong nhóm.",
        scoring: [
          { level: "Đạt (7-8đ)", desc: "Vẽ được cây thư mục 4 nhánh và chỉ định đúng quyền Editor/Commenter/Viewer." },
          { level: "Khá (9đ)", desc: "Cấu trúc thư mục logic, giải thích rõ lý do phân quyền và nêu được giải pháp Version History." },
          { level: "Xuất sắc (10đ)", desc: "Hệ thống quản trị hoàn hảo, kết hợp nhuần nhuyễn giữa Cloud Storage, nguyên tắc quyền tối thiểu và chiến lược Backup đa tầng." }
        ]
      }
    },
    {
      id: "practice-b6-minitest",
      badge: "Mini Test – 5 phút",
      title: "Mini Test Đánh Giá Năng Lực Cuối Buổi (6 Câu Trắc Nghiệm)",
      duration: "5 phút",
      type: "quiz",
      description: "6 câu hỏi trắc nghiệm tương tác kiểm tra độ hiểu sâu các khái niệm lưu trữ và chia sẻ tệp của Bài 6.",
      content: {
        objective: "Đánh giá mức độ tiếp thu 7 kiến thức cốt lõi sau 90 phút học tập.",
        questions: [
          {
            q: "Câu 1: Dịch vụ Lưu trữ đám mây (Cloud Storage) là gì?",
            options: [
              "A. Lưu trữ dữ liệu trên sóng vô tuyến không cần máy chủ",
              "B. Lưu trữ dữ liệu trên hạ tầng máy chủ từ xa và truy cập qua kết nối Internet",
              "C. Tự động in toàn bộ tài liệu ra giấy mỗi ngày",
              "D. Chỉ lưu trữ dữ liệu tạm thời trên chip nhớ RAM"
            ],
            answer: "B",
            explanation: "Lưu trữ đám mây là hình thức lưu trữ dữ liệu trên máy chủ của nhà cung cấp và truy cập qua mạng Internet."
          },
          {
            q: "Câu 2: Thao tác đưa dữ liệu từ thiết bị cá nhân lên máy chủ đám mây được gọi là gì?",
            options: [
              "A. Download",
              "B. Upload",
              "C. Delete",
              "D. Restore"
            ],
            answer: "B",
            explanation: "Upload là thao tác tải/đưa dữ liệu từ thiết bị cục bộ lên máy chủ đám mây."
          },
          {
            q: "Câu 3: Mức quyền nào cho phép người nhận CHỈ ĐỌC nội dung mà không thể sửa đổi hay nhận xét?",
            options: [
              "A. Viewer (Người xem)",
              "B. Commenter (Người nhận xét)",
              "C. Editor (Người chỉnh sửa)",
              "D. Owner (Chủ sở hữu)"
            ],
            answer: "A",
            explanation: "Quyền Viewer chỉ cho phép xem nội dung tài liệu."
          },
          {
            q: "Câu 4: Mức quyền nào cho phép người nhận để lại bình luận, góp ý mà KHÔNG trực tiếp làm thay đổi nội dung gốc?",
            options: [
              "A. Viewer",
              "B. Commenter",
              "C. Editor",
              "D. Restricted"
            ],
            answer: "B",
            explanation: "Quyền Commenter cho phép để lại nhận xét và đề xuất chỉnh sửa riêng biệt ở lề tài liệu."
          },
          {
            q: "Câu 5: Mức quyền nào cho phép người nhận toàn quyền thêm, sửa, xóa nội dung trong tài liệu?",
            options: [
              "A. Viewer",
              "B. Commenter",
              "C. Editor",
              "D. Anonymous"
            ],
            answer: "C",
            explanation: "Quyền Editor cho phép toàn quyền chỉnh sửa tài liệu như chủ sở hữu."
          },
          {
            q: "Câu 6: Phát biểu nào sau đây là hoàn toàn ĐÚNG về an toàn dữ liệu trên Cloud Storage?",
            options: [
              "A. Đồng bộ (Sync) chính là sao lưu (Backup), không bao giờ sợ mất file.",
              "B. Mọi tài liệu quan trọng đều nên để chế độ 'Anyone with the link can edit'.",
              "C. Cần kiểm soát chặt chẽ quyền truy cập và phân biệt rõ ràng: SYNC ≠ BACKUP.",
              "D. Đã lưu file trên cloud thì không cần quan tâm đến bảo mật tài khoản."
            ],
            answer: "C",
            explanation: "Cần kiểm soát chặt chẽ quyền truy cập dữ liệu và hiểu rõ bản chất SYNC ≠ BACKUP để tránh mất mát dữ liệu."
          }
        ]
      }
    },
    {
      id: "practice-b6-summary",
      badge: "Tổng Kết Buổi Học",
      title: "Chốt 7 Điểm Cốt Lõi, Tiêu Chí Đánh Giá Năng Lực & Nhiệm Vụ Về Nhà",
      duration: "Tổng kết",
      type: "exercise",
      description: "7 kiến thức cốt lõi học sinh tự nói lại, 3 mức tiêu chí đánh giá và bảng phân bổ sư phạm.",
      content: {
        objective: "Khắc sâu toàn bộ kiến thức Bài 6 và đánh giá chuẩn đầu ra của học sinh.",
        knowledgeNotice: "📌 7 Ý KIẾN THỨC ĐINH HỌC SINH PHẢI TỰ NÓI LẠI TRƯỚC KHI KẾT THÚC BUỔI:\n1. Cloud Storage: Lưu dữ liệu trên hạ tầng máy chủ trực tuyến, truy cập qua Internet.\n2. Upload: Đưa dữ liệu lên máy chủ | Download: Tải dữ liệu về thiết bị.\n3. Viewer: Quyền chỉ xem nội dung (dùng chia sẻ tài liệu tham khảo).\n4. Commenter: Quyền xem + nhận xét góp ý (dùng gửi bài cho giáo viên chấm).\n5. Editor: Quyền xem + nhận xét + chỉnh sửa toàn quyền (dùng cho nhóm cùng làm bài).\n6. SYNC ≠ BACKUP: Sync đồng bộ 2 chiều (xóa 1 nơi mất cả 2 nơi); Backup là bản sao lưu độc lập an toàn.\n7. Nguyên tắc vàng: Chỉ cấp quyền tối thiểu cần thiết cho đúng đối tượng cụ thể.",
        table: {
          headers: ["Khoảng thời gian", "Nội dung hoạt động sư phạm", "Mục tiêu trọng tâm cần đạt"],
          rows: [
            ["0–8 phút", "Khởi động & Ôn Bài 5", "Tình huống cấp quyền 'Anyone with the link can edit' ➜ Nhận thức rủi ro"],
            ["8–20 phút", "Cloud Storage & Bản chất", "Hiểu mô hình Data Center, ưu điểm đa thiết bị và các hạn chế mạng"],
            ["20–32 phút", "Upload/Download & Quản lý tệp", "Thực hành luân chuyển dữ liệu và tổ chức cây thư mục chuẩn"],
            ["32–48 phút", "Chia sẻ & Phân quyền", "Phân biệt sâu sắc Viewer, Commenter, Editor; Link công khai vs Email"],
            ["48–55 phút", "Đồng bộ & An toàn dữ liệu", "Khắc sâu nguyên tắc SYNC ≠ BACKUP và quy tắc bảo vệ tài khoản"],
            ["55–82 phút", "10 Bài Luyện Tập Thực Hành", "Rèn luyện kỹ năng phân quyền, tổ chức Drive và xử lý tình huống"],
            ["82–87 phút", "Mini Test 6 Câu Cuối Buổi", "Đánh giá mức độ tiếp thu 7 kiến thức cốt lõi"],
            ["87–90 phút", "Chốt 7 Ý & Giao Bài Về Nhà", "Học sinh tự nói lại 7 ý cốt lõi và nhận 3 phần bài tập về nhà"]
          ]
        },
        criteria: [
          { level: "Mức Đạt (5-6.5đ)", desc: "Hiểu khái niệm Cloud Storage; thực hiện được upload/download; phân biệt được 3 mức quyền Viewer, Commenter, Editor." },
          { level: "Mức Khá (7-8.5đ)", desc: "Tổ chức cây thư mục Drive khoa học; chọn đúng quyền theo tình huống; hiểu rõ rủi ro của liên kết công khai và phân biệt được Sync vs Backup." },
          { level: "Mức Xuất Sắc (9-10đ)", desc: "Thiết kế được hệ thống lưu trữ và phân quyền hoàn hảo cho dự án nhóm; áp dụng thuần thục nguyên tắc quyền tối thiểu; biết thu hồi quyền và kết hợp chiến lược sao lưu đa tầng bảo vệ dữ liệu." }
        ]
      }
    }
  ]
}
