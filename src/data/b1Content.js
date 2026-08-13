export const b1Content = {
  warmUp: {
    question: "Đặt vấn đề: Điều gì xảy ra khi bạn bật máy tính?",
    description: "Khi nhấn nút nguồn, phần cứng (CPU, RAM, Ổ cứng) được cấp điện. Nhưng làm thế nào để máy tính hiển thị màn hình làm việc, nhận diện con chuột và chạy ứng dụng? Tất cả nhờ có Hệ điều hành (Operating System - OS). Không có HĐH, máy tính chỉ là 'cục sắt' không biết làm gì."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Định nghĩa & Lịch sử phát triển của Hệ điều hành (OS)",
      subsections: [
        {
          heading: "Khái niệm Hệ điều hành",
          text: "HĐH là phần mềm hệ thống, đóng vai trò trung gian giữa người dùng – phần mềm ứng dụng – phần cứng. Không có HĐH, máy tính chỉ là 'cục sắt' vô tri.",
          points: [
            "Tại sao cần nhớ: Đây là khái niệm nền cho toàn bộ chương trình Tin học 11 — mọi bài sau (quản lý tệp, tiến trình, thiết bị...) đều xoay quanh việc HĐH 'điều phối' ra sao.",
            "Lịch sử ngắn gọn: DOS (giao diện dòng lệnh CLI, thập niên 80) → Windows (giao diện đồ họa GUI, từ 1985) → Linux (mã nguồn mở, 1991) → macOS, Android, iOS (di động, đồ họa cảm ứng).",
            "Ví dụ thực tế: Khi em bấm mở Zalo trên điện thoại, chính Android/iOS (HĐH) là bên cấp bộ nhớ, cấp quyền camera, quyền mạng cho Zalo hoạt động — Zalo không thể tự 'xin' phần cứng.",
            "💡 Mẹo nhớ: HĐH giống như 'người quản lý tòa nhà' — ứng dụng (cư dân) muốn dùng điện, nước, thang máy (phần cứng) đều phải qua quản lý tòa nhà điều phối."
          ]
        }
      ],
      osArchitecture: {
        title: "Sơ đồ Cấu trúc phân tầng Hệ thống Máy tính",
        layers: [
          { name: "Người dùng (User)", color: "bg-indigo-100 border-indigo-300 text-indigo-800", icon: "user" },
          { name: "Phần mềm Ứng dụng (Trình duyệt, Word, Zalo, Game...)", color: "bg-sky-100 border-sky-300 text-sky-800", icon: "app" },
          { name: "Hệ điều hành (Kernel, Driver & System Utilities)", color: "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold", icon: "os" },
          { name: "Phần cứng (CPU, RAM, Ổ cứng, Chuột, Bàn phím, Màn hình)", color: "bg-slate-200 border-slate-400 text-slate-800", icon: "hardware" }
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. Vai trò quản lý tài nguyên phần cứng",
      subsections: [
        {
          heading: "HĐH quản lý 4 loại tài nguyên chính",
          points: [
            "CPU: Quyết định ứng dụng nào được xử lý trước, phân chia thời gian CPU (Time-sharing).",
            "Bộ nhớ (RAM): Cấp phát và thu hồi vùng nhớ RAM cho từng chương trình khi mở/đóng app.",
            "Thiết bị ngoại vi: Chuột, bàn phím, màn hình, máy in, USB thông qua các trình điều khiển (Driver).",
            "Tệp / Dữ liệu: Tổ chức lưu trữ trên ổ đĩa dạng cây thư mục, bảo mật và phân quyền truy cập."
          ]
        },
        {
          heading: "Ví dụ thực tế",
          text: "Khi em mở cùng lúc Chrome, Word, và nghe nhạc Spotify — HĐH chia nhỏ thời gian CPU cho từng ứng dụng theo mili-giây (cảm giác 'chạy song song' nhưng CPU 1 nhân thực ra chạy tuần tự cực nhanh)."
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Chức năng cốt lõi của HĐH (5 chức năng cần thuộc)",
      subsections: [
        {
          heading: "💡 Mẹo nhớ 5 chức năng",
          text: "Thuộc lòng câu thần chú: 'TIẾN - BỘ - TỆP - THIẾT - GIAO' (Tiến trình – Bộ nhớ – Tệp – Thiết bị – Giao diện)."
        }
      ],
      comparisonTable: {
        headers: ["Chức năng cốt lõi", "Giải thích ngắn", "Ví dụ thực tế"],
        rows: [
          ["Quản lý tiến trình (Process)", "Quyết định tiến trình nào chạy, khi nào, bao lâu", "Task Manager thấy hàng trăm process"],
          ["Quản lý bộ nhớ (Memory)", "Cấp/thu hồi vùng RAM cho ứng dụng", "Đóng app → RAM được giải phóng ngay"],
          ["Quản lý tệp (File System)", "Tổ chức thư mục, phân quyền truy cập", "Cấu trúc ổ C:, ổ D: trên Windows"],
          ["Quản lý thiết bị (Device)", "Giao tiếp phần cứng qua driver", "Cắm chuột mới, Windows tự nhận diện"],
          ["Giao diện người dùng (UI)", "CLI (dòng lệnh) hoặc GUI (đồ họa)", "Gõ lệnh CMD vs Thao tác chuột File Explorer"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "4. Phân loại Hệ điều hành",
      functions: [
        {
          name: "Theo số người dùng",
          desc: "Đơn người dùng (Single-user: Windows cá nhân, macOS) vs Đa người dùng (Multi-user: Linux server, Unix — cho phép nhiều người đăng nhập cùng lúc)."
        },
        {
          name: "Theo số tác vụ",
          desc: "Đơn nhiệm (Single-tasking: MS-DOS chỉ chạy 1 app tại 1 thời điểm) vs Đa nhiệm (Multi-tasking: Windows, macOS, Android chạy song song nhiều app)."
        },
        {
          name: "Theo mục đích thiết bị",
          desc: "HĐH để bàn (Desktop OS: Windows, macOS, Ubuntu), HĐH di động (Mobile OS: Android, iOS), HĐH nhúng (Embedded OS: trong ô tô thông minh, smart TV, robot) và HĐH thời gian thực (RTOS)."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Các HĐH phổ biến hiện nay & Đặc trưng",
      comparisonTable: {
        headers: ["Hệ điều hành", "Thiết bị mục tiêu", "Loại mã nguồn", "Đặc trưng nổi bật"],
        rows: [
          ["Windows", "PC, Laptop cá nhân & văn phòng", "Mã nguồn đóng (Thương mại)", "Phổ biến nhất, giao diện thân thiện, tương thích phần mềm phong phú"],
          ["macOS", "Máy tính Apple (MacBook, iMac)", "Mã nguồn đóng", "Tối ưu phần cứng hoàn hảo, giao diện đẹp, tính bảo mật cao"],
          ["Linux", "Máy chủ (Server), Siêu máy tính, Lập trình", "Mã nguồn mở (Miễn phí)", "Tùy biến cao, bảo mật, cực kỳ ổn định, cộng đồng lập trình viên lớn"],
          ["Android / iOS", "Smartphone, Tablet, Smartwatch", "Android (Mở) / iOS (Đóng)", "Tối ưu cảm ứng, tiết kiệm pin, hệ sinh thái ứng dụng Google Play / App Store"]
        ]
      },
      osMarketShare: [
        { name: "Windows", value: 72.1, color: "#0078D7" },
        { name: "macOS", value: 15.4, color: "#6B7280" },
        { name: "Linux", value: 3.2, color: "#F5AF19" },
        { name: "Chrome OS", value: 4.1, color: "#0F9D58" },
        { name: "Khác", value: 5.2, color: "#9CA3AF" }
      ]
    },
    {
      id: "sec-6",
      title: "6. Minh họa thực hành bằng dòng lệnh",
      steps: [
        {
          step: "Xem tiến trình đang chạy (Windows CMD / PowerShell)",
          detail: "Nhấn Win + R → gõ cmd → Enter → Gõ lệnh 'tasklist'. Màn hình liệt kê toàn bộ tiến trình HĐH đang quản lý — chứng minh trực quan khái niệm 'quản lý tiến trình'."
        },
        {
          step: "Xem thông tin chi tiết hệ thống",
          detail: "Trong cửa sổ lệnh gõ 'systeminfo'. Hiện tên HĐH, phiên bản, dung lượng RAM, cấu hình phần cứng — liên hệ trực tiếp mục 'quản lý tài nguyên phần cứng'."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Phát biểu nào sau đây đúng nhất về vai trò của Hệ điều hành?",
      options: [
        "A. Là phần mềm ứng dụng dùng để soạn thảo văn bản và tính toán số liệu.",
        "B. Là tập hợp các chương trình phần mềm hệ thống quản lý tài nguyên và làm cầu nối giữa người dùng, ứng dụng với phần cứng.",
        "C. Là thiết bị phần cứng nằm bên trong thùng máy tính.",
        "D. Là phần mềm diệt virus bảo vệ máy tính khỏi mã độc."
      ],
      answer: "B",
      explanation: "Hệ điều hành là phần mềm hệ thống trung gian quản lý tài nguyên phần cứng/phần mềm và cung cấp môi trường giao tiếp."
    },
    {
      question: "Giao diện nào cho phép người dùng điều khiển máy tính bằng cách gõ các dòng lệnh?",
      options: [
        "A. GUI (Graphical User Interface)",
        "B. CLI (Command Line Interface)",
        "C. API (Application Programming Interface)",
        "D. USB (Universal Serial Bus)"
      ],
      answer: "B",
      explanation: "CLI (Command Line Interface) là giao diện dòng lệnh."
    }
  ],
  examTypes: [
    "Trắc nghiệm khái niệm: 'HĐH là...' → chọn đáp án đúng định nghĩa (phần mềm hệ thống trung gian giữa người dùng – phần mềm ứng dụng – phần cứng).",
    "Nhận biết – phân loại: Cho danh sách HĐH (Windows, Android, MS-DOS, Linux server...) → yêu cầu xếp loại đơn/đa nhiệm, đơn/đa người dùng, để bàn/di động/nhúng.",
    "Đúng/Sai + giải thích: 'Không có HĐH, máy tính vẫn chạy được phần mềm ứng dụng' → Sai, vì ứng dụng cần HĐH cấp phát bộ nhớ RAM, CPU và giao tiếp phần cứng."
  ],
  homework: [
    "Liệt kê HĐH đang có trên các thiết bị số của em (điện thoại, laptop, TV thông minh, đồng hồ thông minh...) và xác định loại (di động / để bàn / nhúng).",
    "Vẽ sơ đồ 3 lớp: Người dùng → Ứng dụng → HĐH → Phần cứng, chú thích vai trò cụ thể của HĐH ở từng mũi tên liên kết.",
    "Giải thích bằng ví dụ thực tế: vì sao máy tính 'treo' (không phản hồi) khi mở quá nhiều ứng dụng cùng lúc — liên hệ tới chức năng quản lý CPU và bộ nhớ RAM của HĐH."
  ],
  practiceExercises: [
    {
      id: "quiz-b1",
      title: "Quiz Trắc Nghiệm Tương Tác: 10 Câu Hỏi Khái Niệm & 5 Chức Năng HĐH",
      type: "quiz",
      duration: "10 phút",
      badge: "Quiz Trực Tuyến",
      description: "Thử sức làm nhanh 10 câu trắc nghiệm để kiểm tra phản xạ về 5 chức năng cốt lõi TIẾN-BỘ-TỆP-THIẾT-GIAO và phân biệt HĐH với ứng dụng.",
      externalUrl: "https://quizizz.com/join",
      content: {
        questions: [
          {
            q: "1. Hệ điều hành đóng vai trò là phần mềm trung gian giữa những đối tượng nào?",
            options: [
              "A. Người dùng - Phần mềm ứng dụng - Phần cứng máy tính",
              "B. CPU - Bộ nhớ RAM - Ổ đĩa cứng SSD",
              "C. Mạng Internet - Trình duyệt Web - Máy chủ Server",
              "D. Chuột - Bàn phím - Màn hình hiển thị"
            ],
            answer: "A",
            explanation: "HĐH là phần mềm hệ thống trung gian quản lý tài nguyên và kết nối Người dùng - Ứng dụng - Phần cứng."
          },
          {
            q: "2. Cụm từ thần chú nào giúp ghi nhớ 5 chức năng cốt lõi của Hệ điều hành?",
            options: [
              "A. TIẾN - BỘ - TỆP - THIẾT - GIAO",
              "B. CPU - RAM - ROM - HDD - SSD",
              "C. CLI - GUI - API - DOS - OS",
              "D. TO - CC - BCC - SUB - SIG"
            ],
            answer: "A",
            explanation: "5 chức năng: Tiến trình - Bộ nhớ - Tệp - Thiết bị - Giao diện."
          },
          {
            q: "3. Khi ứng dụng Zalo trên điện thoại muốn xin quyền sử dụng Camera, Zalo phải gửi yêu cầu tới đối tượng nào?",
            options: [
              "A. Hệ điều hành (Android / iOS)",
              "B. Mạng Wi-Fi / 4G",
              "C. Bộ nhớ flash ROM",
              "D. Zalo tự mở camera mà không cần xin phép"
            ],
            answer: "A",
            explanation: "Chính HĐH quản lý và cấp quyền phần cứng (Camera, Micro, GPS) cho các ứng dụng."
          }
        ]
      }
    },
    {
      id: "lab-b1",
      title: "Bài Tập Thực Hành Buổi Học: Phân Tích Hiệu Năng Tiến Trình Trong Task Manager",
      type: "custom_assignment",
      duration: "20 phút",
      badge: "Bài Tập Buổi Học",
      description: "Bài tập thực hành thao tác trực tiếp trên máy tính cá nhân: mở 5 ứng dụng cùng lúc, theo dõi mức tiêu thụ RAM/CPU trong Task Manager và ghi báo cáo thu hoạch.",
      content: {
        objective: "Hiểu thực tế cơ chế quản lý tiến trình và phân chia tài nguyên RAM/CPU của Hệ điều hành Windows.",
        requirements: [
          "Bước 1: Mở tổ hợp phím Ctrl + Shift + Esc để khởi động Task Manager.",
          "Bước 2: Mở cùng lúc 5 tab Chrome (hoặc Edge) và 1 file Word.",
          "Bước 3: Chuyển sang tab 'Performance' ghi lại % tải của CPU và dung lượng RAM đang dùng.",
          "Bước 4: Nhấp chuột phải vào ứng dụng Chrome chọn 'End Task' và quan sát dung lượng RAM được giải phóng ngay lập tức."
        ],
        submissionHint: "Chụp 2 ảnh màn hình Task Manager (trước và sau khi End Task) và viết 3 dòng nhận xét vào vở học tập."
      }
    }
  ]
}
