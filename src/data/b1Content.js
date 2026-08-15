export const b1Content = {
  warmUp: {
    question: "Tình huống khởi động: Khi em bấm đúp vào Google Chrome hoặc mở file Word...",
    description: "Khi nhấn nút nguồn hoặc bấm đúp vào biểu tượng ứng dụng, làm thế nào máy tính biết phải lấy tệp từ ổ SSD nạp vào RAM rồi chuyển cho CPU xử lý? Chrome hay Word KHÔNG thể tự trực tiếp điều khiển phần cứng. Có một lớp phần mềm điều phối trung gian đứng ở giữa — đó chính là HỆ ĐIỀU HÀNH (Operating System - OS)."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm Hệ điều hành (OS)",
      subsections: [
        {
          heading: "Định nghĩa chuẩn cần nhớ",
          text: "Hệ điều hành (Operating System - OS) là phần mềm hệ thống có nhiệm vụ quản lý và điều phối tài nguyên máy tính, đồng thời cung cấp môi trường để người dùng và phần mềm ứng dụng làm việc với phần cứng.",
          points: [
            "Quản lý: Kiểm soát mọi tài nguyên phần cứng (CPU, RAM, đĩa cứng, bàn phím, chuột, màn hình, máy in, camera...).",
            "Điều phối: Phân chia thời gian CPU và không gian RAM để các ứng dụng chạy mượt mà, không đụng độ.",
            "Cung cấp môi trường: Tạo nền tảng để phần mềm ứng dụng (Word, Chrome, Zalo, Game...) giao tiếp và khai thác sức mạnh phần cứng."
          ]
        }
      ],
      osArchitecture: {
        title: "Sơ đồ Cấu trúc Phân tầng Hệ thống Máy tính",
        layers: [
          { name: "1. Người dùng (User)", color: "bg-indigo-100 border-indigo-300 text-indigo-800 dark:bg-indigo-950 dark:border-indigo-700 dark:text-indigo-200", icon: "user" },
          { name: "2. Phần mềm Ứng dụng (Chrome, Word, Zalo, Game, Spotify...)", color: "bg-sky-100 border-sky-300 text-sky-800 dark:bg-sky-950 dark:border-sky-700 dark:text-sky-200", icon: "app" },
          { name: "3. Hệ điều hành (Windows, Linux, macOS, Android, iOS)", color: "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold dark:bg-emerald-950 dark:border-emerald-700 dark:text-emerald-200", icon: "os" },
          { name: "4. Phần cứng (CPU, RAM, SSD/HDD, GPU, Camera, Bàn phím, Màn hình)", color: "bg-slate-200 border-slate-400 text-slate-800 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200", icon: "hardware" }
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. 5 Nhóm Chức năng Chính của Hệ Điều Hành & Mẹo Ghi Nhớ",
      subsections: [
        {
          heading: "💡 Thần chú ghi nhớ 5 chức năng: T – D – C – G – T",
          text: "Thuộc lòng câu thần chú: 'Thiết bị – Dữ liệu – Chương trình – Giao tiếp – Tiện ích' (T – D – C – G – T)."
        }
      ],
      functions: [
        {
          name: "1. Quản lý thiết bị (Hardware Management)",
          desc: "Quản lý CPU, RAM, ổ lưu trữ, bàn phím, chuột, màn hình, máy in, camera... Ví dụ: Mở Chrome và Spotify cùng lúc → HĐH điều phối CPU; Cắm USB → HĐH nhận biết và cấp cách sử dụng."
        },
        {
          name: "2. Quản lý lưu trữ dữ liệu (File & Storage Management)",
          desc: "Quản lý file, thư mục, ổ đĩa, quyền truy cập dữ liệu và cách tổ chức dữ liệu trên thiết bị lưu trữ (Ví dụ thư mục D:\\HocTap\\Toan). File Explorer chính là công cụ thao tác hệ thống tệp."
        },
        {
          name: "3. Tổ chức thực hiện chương trình (Process Management)",
          desc: "Phân phối CPU, cấp phát RAM, quản lý tiến trình. HĐH giống như 'người điều phối giao thông': CPU là con đường, các ứng dụng (Chrome, Word, Spotify, Discord) là phương tiện giao thông."
        },
        {
          name: "4. Cung cấp môi trường giao tiếp người dùng (User Interface)",
          desc: "CLI (Command Line Interface - gõ lệnh như 'mkdir lesson', 'cd lesson') và GUI (Graphical User Interface - cửa sổ, biểu tượng, chuột, menu, nút bấm)."
        },
        {
          name: "5. Cung cấp các tiện ích (System Utilities)",
          desc: "Các công cụ tích hợp như tìm kiếm tệp, chụp màn hình, sao lưu dữ liệu, cấu hình thiết bị, bảo mật hệ thống, quản lý mạng Wi-Fi/Bluetooth."
        }
      ],
      calloutBox: {
        type: "tip",
        title: "Mẹo làm bài trắc nghiệm về 5 chức năng",
        text: "Trong đề thi, khi gặp câu hỏi 'Chức năng nào KHÔNG phải của hệ điều hành?', học sinh phải dựa vào BẢN CHẤT (HĐH quản lý tài nguyên & cấp môi trường), không học thuộc máy móc từng từ ngữ!"
      }
    },
    {
      id: "sec-3",
      title: "3. Các Điểm Dễ Nhầm Lẫn Cần Tránh",
      qaList: {
        title: "3 Câu Hỏi Phân Biệt Khái Niệm Quan Trọng",
        questions: [
          {
            q: "Microsoft Word có phải là Hệ điều hành không?",
            a: "KHÔNG. Word là PHẦN MỀM ỨNG DỤNG (dùng để soạn thảo văn bản). Windows mới là Hệ điều hành.",
            badge: "Dễ nhầm lẫn"
          },
          {
            q: "Google Chrome có phải là Hệ điều hành không?",
            a: "KHÔNG. Chrome là TRÌNH DUYỆT WEB, thuộc nhóm Phần mềm ứng dụng.",
            badge: "Dễ nhầm lẫn"
          },
          {
            q: "Linux có phải là phần mềm không?",
            a: "CÓ. Linux là một Hệ điều hành, mà Hệ điều hành chính là một loại PHẦN MỀM HỆ THỐNG.",
            badge: "Khái niệm chuẩn"
          }
        ]
      }
    },
    {
      id: "sec-4",
      title: "4. Lịch Sử Phát Triển của Hệ Điều Hành (CLI vs GUI)",
      subsections: [
        {
          heading: "Mục tiêu xuyên suốt lịch sử: Máy tính ngày càng dễ sử dụng hơn",
          points: [
            "Giai đoạn Dòng lệnh (CLI - Command Line Interface): Người dùng phải nhớ và gõ câu lệnh chính xác (ví dụ trong MS-DOS: 'erase C:\\dulieu\\danhsach.txt'). Hạn chế: Khó nhớ, khó thao tác, không trực quan.",
            "Giai đoạn Giao diện Đồ họa (GUI - Graphical User Interface): Tương tác qua cửa sổ, biểu tượng (icon), chuột, menu, nút bấm. Thao tác gõ lệnh chuyển sang: click → drag → double click. Ví dụ: File Explorer → Folder → Double Click."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí", "Giao diện Dòng lệnh (CLI)", "Giao diện Đồ họa (GUI)"],
        rows: [
          ["Cách tương tác", "Gõ câu lệnh bằng bàn phím", "Dùng chuột click vào biểu tượng, cửa sổ, menu"],
          ["Ví dụ điển hình", "MS-DOS, Windows Command Prompt (CMD), Linux Terminal", "Windows, macOS, Ubuntu Desktop, Android, iOS"],
          ["Ưu điểm", "Tốn ít tài nguyên, chạy cực nhanh với chuyên gia", "Trực quan, sinh động, thân thiện với người dùng phổ thông"],
          ["Nhược điểm", "Khó nhớ cú pháp lệnh, dễ gõ sai", "Tốn nhiều tài nguyên RAM/CPU hơn để hiển thị giao diện"]
        ]
      }
    },
    {
      id: "sec-5",
      title: "5. Windows — Các Mốc Lịch Sử Phát Triển Quan Trọng",
      comparisonTable: {
        headers: ["Phiên bản", "Năm ra đời", "Ý nghĩa & Đặc điểm nổi bật"],
        rows: [
          ["Windows 1", "1985", "Phiên bản đầu tiên có Giao diện đồ họa (GUI) của Microsoft"],
          ["Windows 3", "1990", "Bắt đầu có khả năng đa nhiệm (chạy nhiều ứng dụng song song)"],
          ["Windows 95", "1995", "Tích hợp nhiều chức năng HĐH; ra mắt nút Start, Taskbar, tính năng cắm-là-chạy (Plug & Play)"],
          ["Windows XP", "2001", "Giao diện lột xác, cực kỳ ổn định, là một trong những phiên bản thành công nhất"],
          ["Windows 7", "2009", "Mốc quan trọng của dòng Windows hiện đại, mượt mà và bảo mật tốt"],
          ["Windows 8", "2012", "Hướng mạnh hơn tới thiết bị cảm ứng (màn hình Metro tile)"],
          ["Windows 10", "2015", "Hoàn thiện hệ sinh thái đa thiết bị (PC, laptop, tablet, Xbox)"],
          ["Windows 11", "2021", "Phiên bản Windows hiện đại nhất với giao diện bo tròn, tối ưu đa nhiệm"]
        ]
      },
      calloutBox: {
        type: "warning",
        title: "Tại sao Hệ điều hành phải liên tục phát triển?",
        text: "Trả lời: (1) Phần cứng thay đổi mạnh hơn, (2) Xuất hiện nhiều thiết bị mới, (3) Nhu cầu người dùng tăng, (4) Giao diện cần thân thiện hơn, (5) Hỗ trợ kết nối mạng & bảo mật tốt hơn."
      }
    },
    {
      id: "sec-6",
      title: "6. Linux & So Sánh Chi Tiết Windows vs Linux",
      subsections: [
        {
          heading: "Kiến thức bắt buộc về Linux",
          points: [
            "Linux có nguồn gốc từ Unix, là một hệ điều hành nguồn mở (Open Source).",
            "Được sử dụng rộng rãi trên PC, máy chủ (Server), siêu máy tính và hệ thống nhúng.",
            "Các biến thể (bản phân phối) phổ biến: Ubuntu, Debian, Red Hat, SUSE, Linux Mint, Fedora..."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí so sánh", "Windows", "Linux"],
        rows: [
          ["Nhà phát triển chính", "Tập đoàn Microsoft", "Cộng đồng quốc tế + Nhiều tổ chức/công ty"],
          ["Loại hệ điều hành", "Thương mại (Bản quyền trả phí)", "Nguồn mở (Open Source)"],
          ["Mã nguồn", "Mã nguồn đóng (Proprietary)", "Mở theo các giấy phép tự do (GPL...)"],
          ["Giao diện mặc định", "GUI phổ biến, chuẩn hóa", "GUI (GNOME/KDE) + CLI rất mạnh"],
          ["Ứng dụng Máy chủ (Server)", "Có sử dụng", "Rất phổ biến (chiếm đa số server toàn cầu)"],
          ["Ứng dụng PC cá nhân", "Rất phổ biến (chiếm đa số thị phần)", "Có sử dụng (chủ yếu là lập trình viên / kỹ sư)"],
          ["Các biến thể tiêu biểu", "Windows 7, 10, 11...", "Ubuntu, Debian, Fedora, Red Hat, SUSE..."]
        ]
      },
      qaList: {
        title: "Câu Hỏi Mở Rộng Kiểm Tra Tư Duy",
        questions: [
          {
            q: "Linux miễn phí thì có nghĩa MỌI phần mềm chạy trên Linux đều miễn phí không?",
            a: "KHÔNG! Hệ điều hành nguồn mở ≠ mọi phần mềm chạy trên đó đều miễn phí. Có những phần mềm thương mại trả phí vẫn được phát triển chạy trên nền Linux.",
            badge: "Mở rộng thực tế"
          }
        ]
      }
    },
    {
      id: "sec-7",
      title: "7. Hệ Điều Hành Cho Thiết Bị Di Động (Android & iOS)",
      subsections: [
        {
          heading: "Tại sao Hệ điều hành trên Điện thoại lại khác PC?",
          points: [
            "Thiết bị di động có đặc điểm: Kích thước nhỏ gọn, dùng màn hình cảm ứng, chạy bằng PIN, di chuyển liên tục.",
            "Tích hợp nhiều cảm biến (xoay, tiệm cận, gia tốc, ánh sáng) và kết nối không dây (Wi-Fi, 3G/4G/5G, Bluetooth, NFC, GPS).",
            "Vì vậy HĐH di động phải tối ưu đặc biệt cho thao tác cảm ứng, tiết kiệm PIN và quản lý kết nối linh hoạt."
          ]
        },
        {
          heading: "💡 Thần chú 4 đặc điểm HĐH di động: CẢM ỨNG – KẾT NỐI – CẢM BIẾN – TIỆN ÍCH CÁ NHÂN",
          points: [
            "Xoay điện thoại → Cảm biến gia tốc nhận biết → HĐH xoay màn hình.",
            "Bật Bluetooth / NFC → HĐH quản lý kết nối không dây với thiết bị ngoại vi.",
            "Mở Camera → HĐH phối hợp ứng dụng Camera với phần cứng ống kính.",
            "Bật GPS → HĐH cấp quyền ứng dụng truy cập dữ liệu vị trí."
          ]
        }
      ]
    },
    {
      id: "sec-8",
      title: "8. Mối Quan Hệ Phần Cứng – HĐH – Phần Mềm & Ví Dụ Thực Tế",
      subsections: [
        {
          heading: "Phân tích bản chất 3 thành phần",
          points: [
            "Phần cứng (Hardware): Thực hiện xử lý vật lý và cung cấp tài nguyên (CPU, RAM, SSD, GPU, Camera).",
            "Hệ điều hành (OS): Đứng giữa, quản lý tài nguyên và cung cấp môi trường để phần mềm sử dụng phần cứng.",
            "Phần mềm ứng dụng (App): Giải quyết nhu cầu công việc/giải trí cụ thể của người dùng (Chrome, Word, Game...)."
          ]
        }
      ],
      flowList: [
        {
          title: "Ví dụ 1: Quy trình 6 bước khi Mở YouTube trên điện thoại",
          subtitle: "Minh họa luồng điều phối tài nguyên của HĐH",
          steps: [
            { num: "1", title: "Người dùng chạm icon YouTube", desc: "Màn hình cảm ứng nhận tín hiệu chạm của ngón tay." },
            { num: "2", title: "HĐH nhận thao tác", desc: "Android/iOS nhận biết sự kiện chạm tại vị trí biểu tượng." },
            { num: "3", title: "HĐH khởi chạy ứng dụng", desc: "HĐH tải mã lệnh ứng dụng YouTube vào bộ nhớ." },
            { num: "4", title: "Ứng dụng xin tài nguyên", desc: "YouTube yêu cầu CPU xử lý, RAM lưu tạm và mạng 4G/Wi-Fi để tải video." },
            { num: "5", title: "HĐH quản lý & phân phối", desc: "HĐH cấp phát bộ nhớ RAM, phân chia thời gian CPU và mở cổng mạng." },
            { num: "6", title: "Phần cứng thực thi", desc: "CPU/GPU xử lý dữ liệu, màn hình hiển thị video và loa phát âm thanh." }
          ]
        },
        {
          title: "Ví dụ 2: Quy trình Chụp Ảnh bằng điện thoại",
          subtitle: "Luồng phối hợp phần cứng ngoại vi",
          steps: [
            { num: "1", title: "Người dùng", desc: "Nhấn nút chụp trong ứng dụng Camera." },
            { num: "2", title: "App Camera", desc: "Gửi yêu cầu lệnh chụp ảnh tới Hệ điều hành." },
            { num: "3", title: "Hệ điều hành (Android / iOS)", desc: "Cấp quyền và điều khiển trực tiếp cảm biến phần cứng Camera." },
            { num: "4", title: "Phần cứng Camera", desc: "Thu nhận ánh sáng và chụp dữ liệu ảnh số." },
            { num: "5", title: "Lưu trữ Ảnh", desc: "HĐH ghi tệp ảnh hoàn chỉnh vào bộ nhớ đĩa Flash Storage." }
          ]
        }
      ]
    },
    {
      id: "sec-9",
      title: "9. Các Câu Hỏi 'Bẫy' Quan Trọng & Kiến Thức Mở Rộng IT",
      qaList: {
        title: "3 Câu Hỏi 'Bẫy' Dễ Mất Điểm Trong Đề Thi",
        questions: [
          {
            q: "Một ứng dụng muốn dùng camera điện thoại. Ai là bên quản lý quyền truy cập camera?",
            a: "ĐÁP ÁN: HỆ ĐIỀU HÀNH. Ứng dụng không thể tự truy cập camera nếu HĐH không cấp quyền!",
            badge: "Bẫy Quyền ứng dụng"
          },
          {
            q: "CPU có trực tiếp hiểu thao tác 'Mở Word' của người dùng không?",
            a: "ĐÁP ÁN: KHÔNG. CPU chỉ xử lý lệnh nhị phân. HĐH và ứng dụng biên dịch thao tác thành chuỗi lệnh phần cứng cho CPU.",
            badge: "Bẫy Bản chất CPU"
          },
          {
            q: "Máy tính có nhất thiết luôn luôn phải có Hệ điều hành không?",
            a: "ĐÁP ÁN: KHÔNG PHẢI MỌI THIẾT BỊ. Thiết bị điều khiển đơn giản (lò vi sóng, máy giặt) chạy chương trình nạp sẵn mà không cần HĐH đa dụng. Nhưng MÁY TÍNH ĐA NĂNG bắt buộc cần HĐH để chạy ứng dụng.",
            badge: "Bẫy Thiết bị nhúng vs PC"
          }
        ]
      },
      subsections: [
        {
          heading: "🌐 Mở rộng kiến thức thực tế",
          points: [
            "Kernel (Nhân HĐH): Thành phần lõi quan trọng nhất của HĐH, quản lý tài nguyên và giao tiếp trực tiếp với phần cứng.",
            "Driver (Trình điều khiển): Phần mềm giúp HĐH hiểu và giao tiếp được với từng thiết bị phần cứng cụ thể (Ví dụ: GPU Driver cho Card NVIDIA).",
            "Process (Tiến trình): Một chương trình đang chạy trong bộ nhớ (Chrome đang chạy tạo ra hàng chục Chrome processes trong Task Manager).",
            "File System (Hệ thống tệp): Cách HĐH tổ chức dữ liệu trên đĩa (Windows dùng NTFS, Linux dùng ext4, macOS/iOS dùng APFS)."
          ]
        }
      ]
    },
    {
      id: "sec-10",
      title: "10. Luyện Tập Tại Lớp & Bài Kiểm Tra 7 Câu Cuối Buổi",
      inClassQuiz: {
        title: "Bộ Câu Hỏi Luyện Tập 3 Tầng Kiến Thức Tại Lớp",
        groups: [
          {
            level: "Nhóm A — Nhận biết (3 câu trắc nghiệm)",
            items: [
              "Câu 1: Hệ điều hành là: A. Phần cứng | B. Phần mềm hệ thống | C. Phần mềm văn phòng | D. Loại tệp → Đáp án B.",
              "Câu 2: Hệ điều hành nào sau đây là nguồn mở? A. Windows | B. Linux | C. MS Word | D. Chrome → Đáp án B.",
              "Câu 3: Hai HĐH di động phổ biến là: A. Windows+Linux | B. Android+iOS | C. DOS+Unix → Đáp án B."
            ]
          },
          {
            level: "Nhóm B — Thông hiểu (3 câu hỏi tự luận ngắn)",
            items: [
              "Câu 4: Tại sao HĐH cần quản lý CPU? → Trả lời: Vì nhiều chương trình cùng cần xử lý, HĐH phải phân chia thời gian CPU hợp lý.",
              "Câu 5: Tại sao GUI giúp máy tính dễ dùng hơn CLI? → Trả lời: GUI cung cấp cửa sổ, biểu tượng, chuột trực quan, không cần nhớ lệnh phức tạp.",
              "Câu 6: Tại sao HĐH di động phải quản lý các cảm biến? → Trả lời: Để hỗ trợ các thao tác thông minh như xoay màn hình, định vị GPS, đo bước chân."
            ]
          },
          {
            level: "Nhóm C — Vận dụng (3 câu tình huống thực tế)",
            items: [
              "Câu 7: Mở Chrome + Word + Spotify cùng lúc máy bị đơ lag. HĐH liên quan ra sao? → HĐH bị quá tải CPU/RAM khi phân phối tài nguyên cho các tiến trình.",
              "Câu 8: Cắm USB vào máy tính nhận đĩa mới. Chức năng HĐH nào thể hiện rõ nhất? → Quản lý thiết bị ngoại vi & Quản lý lưu trữ dữ liệu.",
              "Câu 9: App xin quyền Camera bị từ chối thì không quay phim được. Tại sao? → Do HĐH đóng vai trò kiểm soát và phân quyền sử dụng thiết bị phần cứng."
            ]
          }
        ]
      },
      endCheckList: {
        title: "📋 Bài Kiểm Tra 7 Câu Cuối Buổi (Yêu cầu học sinh không mở tài liệu)",
        questions: [
          "1. Định nghĩa Hệ điều hành là gì bằng ngôn ngữ của chính mình?",
          "2. Nêu 5 nhóm chức năng cốt lõi của Hệ điều hành.",
          "3. Phân biệt sự khác nhau giữa giao diện dòng lệnh (CLI) và giao diện đồ họa (GUI).",
          "4. Nêu các mốc phiên bản Windows quan trọng theo SGK (1985, 1990, 1995, 2001, 2009...).",
          "5. Linux có nguồn gốc từ đâu và có những đặc điểm nổi bật nào?",
          "6. Nêu các đặc điểm riêng biệt của Hệ điều hành trên thiết bị di động.",
          "7. Giải thích bằng sơ đồ mối quan hệ: Phần mềm ứng dụng – Hệ điều hành – Phần cứng."
        ]
      }
    },
    {
      id: "sec-11",
      title: "11. 5 Cụm Chốt Trọng Tâm Thi & Sơ Đồ Tổng Kết Bài 1",
      checkpointCards: [
        { title: "Cụm 1: 5 Chức năng HĐH", detail: "Thiết bị – Dữ liệu – Chương trình – Giao tiếp – Tiện ích (T – D – C – G – T)" },
        { title: "Cụm 2: Mốc Windows", detail: "1985 (Win 1 GUI) → 1990 (Win 3) → 1995 (Win 95) → XP (2001) → Win 7 (2009) → Win 8 → Win 10 → Win 11" },
        { title: "Cụm 3: Linux Nguồn Mở", detail: "UNIX → Linux → Nguồn mở (Open Source) → Dùng trên PC, Server, Embedded" },
        { title: "Cụm 4: HĐH Di động", detail: "Android + iOS (Cảm ứng + Cảm biến + Kết nối không dây + Tiện ích cá nhân)" },
        { title: "Cụm 5: Mối quan hệ 3 tầng", detail: "Phần mềm ứng dụng bắt buộc khai thác phần cứng thông qua Hệ điều hành" }
      ],
      mindmapText: `
                         HỆ ĐIỀU HÀNH (OS)
                                │
            ┌───────────────────┼───────────────────┐
            │                   │                   │
         LỊCH SỬ             MOBILE              QUAN HỆ
            │                   │                   │
        CLI → GUI         Android / iOS       Application
            │                   │                   ↓
       Windows/Linux     Cảm ứng/Cảm biến       Operating System
            │             Kết nối mạng             ↓
            │                   │                Hardware
            └───────────────────┴───────────────────┘
                                │
                      QUẢN LÝ & ĐIỀU PHỐI
                                │
          ┌──────────┬──────────┬─────────┬─────────┬─────────┐
          │          │          │         │         │
       Thiết bị    Dữ liệu   Chương trình Giao tiếp Tiện ích
      `
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
    },
    {
      question: "Cụm từ thần chú nào giúp ghi nhớ nhanh 5 nhóm chức năng chính của Hệ điều hành?",
      options: [
        "A. Thiết bị – Dữ liệu – Chương trình – Giao tiếp – Tiện ích (T-D-C-G-T)",
        "B. CPU – RAM – SSD – GPU – Mainboard",
        "C. Word – Excel – PowerPoint – Chrome – Edge",
        "D. Input – Process – Output – Storage – Network"
      ],
      answer: "A",
      explanation: "5 nhóm chức năng: Thiết bị, Dữ liệu, Chương trình, Giao tiếp, Tiện ích."
    },
    {
      question: "Khi ứng dụng Camera trên điện thoại muốn chụp ảnh, đối tượng nào quản lý quyền và điều khiển phần cứng camera?",
      options: [
        "A. Trình duyệt web Chrome",
        "B. Hệ điều hành (Android / iOS)",
        "C. Mạng Wi-Fi / 4G",
        "D. Ứng dụng tự điều khiển camera không cần qua HĐH"
      ],
      answer: "B",
      explanation: "Chính Hệ điều hành quản lý và cấp quyền phần cứng cho các ứng dụng."
    }
  ],
  examTypes: [
    "Dạng 1: Trắc nghiệm định nghĩa & vai trò trung gian: 'HĐH là...' → Chọn đáp án phần mềm hệ thống quản lý tài nguyên & kết nối Người dùng - Ứng dụng - Phần cứng.",
    "Dạng 2: Nhận biết & Phân loại HĐH: Cho danh sách HĐH (Windows, Android, MS-DOS, Linux server...) → Phân loại đơn/đa nhiệm, đơn/đa người dùng, PC/Mobile/Nhúng.",
    "Dạng 3: Trắc nghiệm Đúng/Sai có giải thích: 'Không có HĐH, máy tính vẫn chạy được phần mềm ứng dụng' → SAI, vì ứng dụng bắt buộc cần HĐH cấp RAM, CPU và giao tiếp phần cứng.",
    "Dạng 4: Tình huống thực tế & Quản lý quyền: 'Tại sao app không tự động bật Camera khi chưa được cho phép?' → Vì HĐH kiểm soát và phân quyền sử dụng thiết bị."
  ],
  homework: [
    "Bài tập bắt buộc 1: Viết lại 5 nhóm chức năng của Hệ điều hành bằng ngôn ngữ của chính mình (không sao chép tài liệu).",
    "Bài tập bắt buộc 2: Vẽ sơ đồ 4 tầng: Người dùng → Phần mềm ứng dụng → Hệ điều hành → Phần cứng và giải thích vai trò 3 thành phần.",
    "Bài tập bắt buộc 3: Hoàn thành 15 câu trắc nghiệm ôn tập tổng hợp Bài 1.",
    "Bài tập bắt buộc 4: Tự giải thích câu hỏi: 'Tại sao Chrome không thể trực tiếp quản lý CPU/RAM theo cách người dùng mong muốn?'.",
    "Bài tập dành cho học sinh Khá: Tìm hiểu và lập bảng so sánh 3 điểm khác biệt cốt lõi giữa Linux và Windows.",
    "Bài tập dành cho học sinh Giỏi: Tìm hiểu nâng cao: Kernel là gì? Driver là gì? Hai khái niệm này liên quan đến Hệ điều hành như thế nào?"
  ],
  practiceExercises: [
    {
      id: "quiz-b1",
      title: "Quiz Trắc Nghiệm Tương Tác: 10 Câu Hỏi Khái Niệm & 5 Chức Năng HĐH",
      type: "quiz",
      duration: "10 phút",
      badge: "Quiz Trực Tuyến",
      description: "Thử sức làm nhanh 10 câu trắc nghiệm để kiểm tra phản xạ về 5 chức năng cốt lõi T-D-C-G-T và phân biệt HĐH với ứng dụng.",
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
              "A. Thiết bị – Dữ liệu – Chương trình – Giao tiếp – Tiện ích (T-D-C-G-T)",
              "B. CPU - RAM - ROM - HDD - SSD",
              "C. CLI - GUI - API - DOS - OS",
              "D. TO - CC - BCC - SUB - SIG"
            ],
            answer: "A",
            explanation: "5 chức năng: Thiết bị - Dữ liệu - Chương trình - Giao tiếp - Tiện ích."
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
          },
          {
            q: "4. Hệ điều hành nào sau đây là hệ điều hành mã nguồn mở?",
            options: [
              "A. Microsoft Windows",
              "B. Linux",
              "C. macOS",
              "D. MS-DOS"
            ],
            answer: "B",
            explanation: "Linux là hệ điều hành mã nguồn mở nổi tiếng nhất."
          },
          {
            q: "5. Năm 1995 đánh dấu mốc quan trọng nào của dòng hệ điều hành Windows?",
            options: [
              "A. Ra mắt Windows 1 tích hợp GUI",
              "B. Ra mắt Windows 95 với nút Start, Taskbar và Plug & Play",
              "C. Ra mắt Windows XP",
              "D. Ra mắt Windows 11"
            ],
            answer: "B",
            explanation: "Windows 95 ra đời năm 1995 với nút Start, thanh Taskbar và tính năng cắm-là-chạy Plug & Play."
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
