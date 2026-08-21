/**
 * Dữ liệu bài giảng Bài 4: Bên trong máy tính
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: 90 phút)
 * Định hướng: Kiến thức cốt lõi chung (CS & ICT)
 */
export const b4Content = {
  warmUp: {
    question: "Một laptop có CPU Intel Core i5, RAM 8GB, SSD 512GB. Nếu nâng cấp RAM từ 8GB lên 16GB, dung lượng ổ cứng SSD có tăng từ 512GB lên 1TB không?",
    description: "Câu trả lời là: KHÔNG! CPU ≠ RAM ≠ SSD. Mỗi thành phần đảm nhận một nhiệm vụ chuyên biệt: CPU là 'bộ não xử lý', RAM là 'bàn làm việc tạm thời', còn SSD là 'tủ hồ sơ lưu trữ lâu dài'. Hiểu rõ cấu trúc bên trong máy tính và mạch logic giúp em không bị bối rối khi chọn mua máy tính, biết cách tối ưu hiệu năng và hiểu được nguyên lý máy tính tính toán nhị phân từ các cổng logic cơ bản."
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mục Tiêu Buổi Học & Khung Phân Bổ 90 Phút",
      subsections: [
        {
          heading: "1. Mục tiêu buổi học – 3 tầng năng lực gia sư",
          points: [
            "Kiến thức cốt lõi: Nhận diện chính xác các thành phần bên trong máy tính (Mainboard, CPU, RAM, ROM, Bộ nhớ ngoài); hiểu rõ chức năng và thông số cơ bản.",
            "Phân biệt rạch ròi 4 cặp khái niệm: RAM vs ROM; RAM vs Bộ nhớ ngoài; HDD vs SSD; CPU vs GPU.",
            "Mạch logic & Nhị phân: Hiểu bản chất các phép toán logic AND, OR, NOT; đọc bảng chân trị; thực hiện thành thạo phép cộng nhị phân và hiểu ý tưởng dùng mạch logic để tính toán.",
            "Kỹ năng thực tiễn: Biết đọc cấu hình máy tính thực tế, phân tích nguyên nhân máy tính chạy chậm (điểm nghẽn phần cứng) và tư vấn cấu hình phù hợp nhu cầu.",
            "Mục tiêu vận dụng: Không chỉ học vẹt định nghĩa mà giải thích được: 'Tại sao máy có SSD rất lớn nhưng RAM quá ít vẫn bị giật lag khi chạy đa nhiệm?'"
          ]
        },
        {
          heading: "2. Khung phân bổ thời gian buổi học 90 phút",
          points: [
            "0–8 phút: Ôn Bài 3 + Tình huống khởi động phân tích cấu hình.",
            "8–25 phút: Các thiết bị bên trong máy tính & Bo mạch chủ (Mainboard).",
            "25–38 phút: Bộ xử lí trung tâm (CPU) & Các loại bộ nhớ (RAM, ROM, Bộ nhớ ngoài).",
            "38–48 phút: Thông số hiệu năng, So sánh HDD/SSD & Mô hình phối hợp 3 tầng.",
            "48–60 phút: Mạch logic cơ bản: Cổng AND, OR, NOT & Bảng chân trị.",
            "60–68 phút: Phép cộng nhị phân, Bit nhớ (Carry) & Ý tưởng mạch cộng 2 bit.",
            "68–86 phút: 10 bài luyện tập thực hành tình huống trực tiếp.",
            "86–88 phút: Mini Test 7 câu trắc nghiệm đánh giá chuẩn đầu ra.",
            "88–90 phút: Tổng kết 8 kiến thức cốt lõi và giao nhiệm vụ về nhà."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Tình huống Khởi động Đặt vấn đề",
        text: "Cho học sinh xem thông số cấu hình một laptop: 'CPU: Intel Core i5 | RAM: 8 GB | SSD: 512 GB | GPU: Tích hợp'. Gia sư hỏi: 'CPU, RAM, SSD dùng để làm gì? Nâng RAM có làm tăng dung lượng SSD không?' ➜ Mục tiêu: Học sinh nhận ra ngay CPU ≠ RAM ≠ SSD và mỗi thành phần có một vai trò hoàn toàn độc lập nhưng phối hợp chặt chẽ với nhau."
      }
    },
    {
      id: "sec-2",
      title: "IV & V. Các Thiết Bị Bên Trong Máy Tính: Mainboard & CPU (ALU + CU)",
      subsections: [
        {
          heading: "1. Bo mạch chủ (Mainboard / Motherboard)",
          text: "Mainboard là bảng mạch in chính đóng vai trò làm nền tảng kết nối vật lý và truyền dẫn tín hiệu giữa toàn bộ các linh kiện bên trong máy tính.",
          points: [
            "Mainboard chứa các khe cắm (Socket CPU, khe cắm RAM, khe PCIe cho Card đồ họa, cổng SATA/M.2 cho SSD) và các đường mạch dẫn tín hiệu (Bus hệ thống).",
            "Cần nhớ: Mainboard KHÔNG PHẢI là 'bộ não' của máy tính. CPU mới là bộ xử lý trung tâm. Mainboard đóng vai trò là 'khung xương và hệ thống mạch máu/dây thần kinh' liên kết và cấp nguồn điện cho các linh kiện giao tiếp với nhau."
          ]
        },
        {
          heading: "2. CPU (Central Processing Unit) – Bộ xử lí trung tâm",
          text: "CPU là 'bộ não' của máy tính, có nhiệm vụ thực thi các lệnh của chương trình và điều khiển toàn bộ quá trình xử lý dữ liệu.",
          points: [
            "ALU (Arithmetic Logic Unit – Khối Số học và Logic): Nơi trực tiếp thực hiện các phép toán số học (cộng, trừ, nhân, chia) và các phép toán logic (so sánh >, <, =, AND, OR, NOT). Ví dụ: 5 + 3, 7 - 2, A AND B.",
            "CU (Control Unit – Khối Điều khiển): Nơi điều phối, chỉ đạo các thành phần khác hoạt động nhịp nhàng theo đúng chu trình lệnh (Lấy lệnh Fetch ➜ Giải mã Decode ➜ Thực thi Execute).",
            "Các thanh ghi (Registers): Vùng nhớ dung lượng cực nhỏ nhưng có tốc độ truy xuất nhanh nhất hệ thống, nằm ngay trong CPU để lưu tạm dữ liệu tính toán tức thời.",
            "Ví dụ trực quan: Khi máy tính tính '27 + 35', CU chỉ đạo nạp hai số 27 và 35 từ bộ nhớ vào thanh ghi, sau đó ra lệnh cho ALU thực hiện phép cộng và lưu kết quả 62 lại thanh ghi."
          ]
        }
      ],
      osArchitecture: {
        title: "Sơ đồ Kiến trúc Kết nối Các Thành phần Bên Trong Máy Tính",
        layers: [
          { name: "CPU (Bộ não trung tâm): Khối ALU (Tính toán) + Khối CU (Điều phối) + Thanh ghi Registers", color: "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold", icon: "os" },
          { name: "Bộ nhớ trong (Primary Memory): RAM (Vùng nhớ làm việc tạm thời) + ROM/Firmware (Khởi động hệ thống)", color: "bg-teal-100 border-teal-300 text-teal-900 font-bold", icon: "app" },
          { name: "Bo mạch chủ (Mainboard): Hệ thống Bus Dữ liệu, Bus Địa chỉ, Bus Điều khiển & Chipset cầu nối", color: "bg-indigo-100 border-indigo-300 text-indigo-900 font-bold", icon: "hardware" },
          { name: "Bộ nhớ ngoài & Thiết bị lưu trữ (Secondary Storage): Ổ cứng SSD (NVMe/SATA), HDD, USB, Thẻ nhớ", color: "bg-slate-200 border-slate-400 text-slate-900 font-bold", icon: "user" }
        ]
      }
    },
    {
      id: "sec-3",
      title: "VI, VII & VIII. Phân Biệt Các Loại Bộ Nhớ: RAM, ROM & Tránh Hiểu Lầm Xung Nhịp CPU",
      subsections: [
        {
          heading: "1. Xung nhịp CPU (Clock Speed) & Tránh hiểu lầm",
          text: "Tần số xung nhịp đo số chu kỳ dao động của mạch tạo xung trong 1 giây, thường tính bằng Gigahertz (GHz). Ví dụ: 3.5 GHz = 3.5 tỷ chu kỳ/giây.",
          points: [
            "⚠️ TRÁNH HIỂU LẦM TAI HẠI: Tuyệt đối không dạy 'CPU 4 GHz chắc chắn nhanh gấp đôi CPU 2 GHz'. Điều này hoàn toàn không chính xác!",
            "Hiệu năng thực tế của CPU còn phụ thuộc vào nhiều yếu tố: Kiến trúc vi xử lý (IPC – số lệnh thực hiện trên mỗi chu kỳ), Số nhân vật lý (Cores), Số luồng (Threads), Dung lượng bộ nhớ đệm (Cache L1/L2/L3), Giới hạn nhiệt độ và sự tối ưu của phần mềm.",
            "Ở mức lớp 11: Chỉ cần hiểu xung nhịp là MỘT TRONG CÁC thông số mô tả hoạt động, không phải là yếu tố duy nhất quyết định toàn bộ sức mạnh CPU."
          ]
        },
        {
          heading: "2. RAM (Random Access Memory) – Bộ nhớ truy cập ngẫu nhiên",
          text: "RAM là bộ nhớ trong dùng để lưu trữ dữ liệu và mã chương trình đang được sử dụng trong phiên làm việc hiện tại của máy tính.",
          points: [
            "Đặc tính cốt lõi: Dễ bay hơi (Volatile Memory) – mất toàn bộ dữ liệu khi mất điện hoặc tắt máy.",
            "Quy trình hoạt động: Người dùng mở ứng dụng (Word, Chrome) ➜ HĐH sao chép dữ liệu ứng dụng từ ổ đĩa (SSD/HDD) nạp vào RAM ➜ CPU đọc trực tiếp dữ liệu từ RAM để xử lý với tốc độ siêu nhanh.",
            "Tình huống thực tế: Máy tính có RAM 4 GB nhưng mở cùng lúc 20 tab Chrome, Word, Photoshop ➜ Tràn RAM ➜ Hệ thống buộc phải dùng một phần ổ đĩa SSD/HDD làm 'Bộ nhớ ảo' (Virtual Memory/Paging) ➜ Máy tính bị giật, lag và phản hồi rất chậm."
          ]
        },
        {
          heading: "3. ROM (Read Only Memory) & Bộ nhớ Firmware",
          text: "ROM là bộ nhớ lưu trữ các chương trình điều khiển hệ thống cơ bản và ổn định (như chương trình khởi động BIOS/UEFI).",
          points: [
            "Đặc tính cốt lõi: Không bay hơi (Non-volatile) – dữ liệu được giữ nguyên vẹn kể cả khi tắt nguồn điện.",
            "Phân biệt ở mức phổ thông: RAM dùng để ĐỌC + GHI dữ liệu làm việc tức thời (mất điện là mất); ROM dùng để lưu nội dung chương trình khởi động hệ thống ổn định (không dùng làm vùng nhớ tạm thời như RAM).",
            "Lưu ý công nghệ hiện đại: Trong máy tính hiện nay, firmware hệ thống thường được lưu trên bộ nhớ Flash ROM (có thể nâng cấp/ghi đè khi cập nhật BIOS), không nên giải thích cứng nhắc ROM là 'chip chỉ đọc tuyệt đối 100%'."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí đối chiếu", "RAM (Bộ nhớ trong)", "ROM / Firmware", "Bộ nhớ ngoài (SSD / HDD)"],
        rows: [
          ["Mục đích sử dụng", "Lưu dữ liệu/chương trình đang chạy", "Lưu chương trình khởi động hệ thống (BIOS/UEFI)", "Lưu trữ dữ liệu, tài liệu, hệ điều hành lâu dài"],
          ["Khả năng Ghi / Sửa", "Đọc và Ghi liên tục, tốc độ cực nhanh", "Chủ yếu Đọc (chỉ ghi khi cập nhật BIOS)", "Đọc và Ghi dữ liệu theo nhu cầu người dùng"],
          ["Trạng thái khi tắt nguồn điện", "MẤT TOÀN BỘ dữ liệu (Volatile)", "KHÔNG MẤT dữ liệu (Non-volatile)", "KHÔNG MẤT dữ liệu (Non-volatile)"],
          ["Tốc độ truy xuất", "Siêu nhanh (hàng chục GB/s)", "Nhanh", "Trung bình đến Nhanh (SSD: 500-7000 MB/s, HDD: 150 MB/s)"],
          ["Dung lượng phổ biến", "8 GB – 64 GB", "Vài MB – vài chục MB", "256 GB – nhiều TB (1000 GB)"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "IX, X & XI. Bộ Nhớ Ngoài (HDD vs SSD), Thông Số Hiệu Năng & Mô Hình Phối Hợp",
      subsections: [
        {
          heading: "1. So sánh chi tiết HDD và SSD",
          text: "Bộ nhớ ngoài giữ dữ liệu an toàn lâu dài ngay cả khi máy tính đã tắt nguồn:",
          points: [
            "HDD (Hard Disk Drive – Ổ đĩa cứng cơ học): Sử dụng các phiến đĩa từ quay tròn và đầu đọc cơ học di chuyển để ghi/đọc dữ liệu. Tốc độ đọc ghi thấp (~150 MB/s), độ trễ cao, dễ hỏng khi bị va đập; ưu điểm là giá thành trên mỗi GB rẻ, phù hợp lưu trữ tài liệu dung lượng khổng lồ.",
            "SSD (Solid State Drive – Ổ thể rắn bán dẫn): Sử dụng các chip nhớ Flash thể rắn, hoàn toàn không có bộ phận cơ học chuyển động. Tốc độ đọc ghi siêu nhanh (500 MB/s đến trên 7.000 MB/s), độ trễ cực thấp, chống sốc tốt; giúp máy tính khởi động Windows trong vài giây và mở ứng dụng tức thì.",
            "Tình huống so sánh thực tế: Một laptop có CPU mạnh + RAM 16 GB nhưng dùng ổ cứng cơ học HDD vẫn cho cảm giác mở máy và khởi động ứng dụng chậm chạp hơn một laptop tương đương dùng ổ SSD."
          ]
        },
        {
          heading: "2. Các thông số hiệu năng phần cứng cần biết khi đọc cấu hình",
          text: "Không yêu cầu học sinh học thuộc lòng tất cả các chuẩn, trọng tâm là biết đọc và hiểu ý nghĩa:",
          points: [
            "CPU: Xung nhịp cơ bản & tối đa (GHz), Số nhân (Cores - như 4 cores, 8 cores), Số luồng (Threads), Dung lượng bộ nhớ đệm Cache (L2, L3).",
            "RAM: Dung lượng (8GB, 16GB, 32GB), Thế hệ & Tốc độ bus (DDR4 3200MHz, DDR5 5600MHz).",
            "Ổ cứng (Storage): Dung lượng (256GB, 512GB, 1TB), Chuẩn giao tiếp (SATA III, NVMe M.2 PCIe Gen 4)."
          ]
        },
        {
          heading: "3. CPU – RAM – Storage phối hợp như thế nào? (Ví dụ Đời Thực)",
          text: "Mối quan hệ 3 tầng tạo nên hiệu suất tổng thể của chiếc máy tính:",
          points: [
            "SSD/HDD = 'Tủ hồ sơ lưu trữ' (Rất rộng, chứa toàn bộ sách vở, dữ liệu lâu năm nhưng lấy ra chậm).",
            "RAM = 'Mặt bàn làm việc' (Chỉ để những tài liệu đang xem và xử lý, lấy ra cực nhanh, dọn sạch khi hết giờ).",
            "CPU = 'Người nhân viên xử lý hồ sơ' (Đọc, tính toán, viết báo cáo).",
            "💡 Bài học đắt giá: Một người làm việc cực nhanh (CPU khủng) nhưng chiếc bàn làm việc quá bé (RAM 4GB) thì không thể bày nhiều tài liệu cùng lúc, phải liên tục đứng dậy chạy ra tủ hồ sơ (SSD/HDD) để cất tài liệu cũ và lấy tài liệu mới ➜ Toàn bộ quá trình bị chậm lại do nghẽn cổ chai (Bottleneck) ở RAM!"
          ]
        }
      ],
      flowList: [
        {
          title: "Dòng Chảy Dữ Liệu Khi Khởi Động & Thực Thi Một Ứng Dụng",
          subtitle: "Quy trình phối hợp nhịp nhàng giữa Thiết bị lưu trữ ➜ RAM ➜ CPU ➜ Màn hình",
          steps: [
            {
              num: 1,
              title: "1. Lưu trữ tĩnh trên Ổ cứng (SSD / HDD)",
              desc: "Chương trình nằm sẵn dưới dạng các file nhị phân trên ổ đĩa lưu trữ lâu dài."
            },
            {
              num: 2,
              title: "2. Nạp dữ liệu vào Bộ nhớ trong (RAM)",
              desc: "Khi người dùng nháy đúp chuột, HĐH sao chép dữ liệu chương trình nạp lên RAM để sẵn sàng xử lý."
            },
            {
              num: 3,
              title: "3. Chuyển vào Bộ nhớ đệm Cache & Thanh ghi",
              desc: "Các dòng lệnh và biến dữ liệu cần dùng ngay được đưa vào Cache L1/L2/L3 và Registers của CPU."
            },
            {
              num: 4,
              title: "4. CPU (ALU & CU) Xử lý phép tính",
              desc: "Khối CU điều khiển nạp lệnh, khối ALU thực thi các phép toán số học và logic với tốc độ hàng tỷ phép tính/giây."
            },
            {
              num: 5,
              title: "5. Xuất kết quả ra Thiết bị ngoại vi & Lưu lại",
              desc: "Kết quả hiển thị lên màn hình (qua GPU); nếu người dùng bấm Save (Ctrl+S), dữ liệu từ RAM được ghi bền vững trở lại SSD."
            }
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "XIII, XIV, XV, XVI & XVII. Mạch Logic Số Cơ Bản: Cổng AND, OR, NOT",
      subsections: [
        {
          heading: "1. Bản chất Mạch Logic Số trong máy tính",
          text: "Mọi hoạt động xử lý phức tạp của máy tính thực chất được xây dựng từ hàng tỷ mạch logic cơ bản hoạt động với hai mức điện áp tương ứng hai giá trị nhị phân: 0 (Sai / False / Mức điện áp thấp) và 1 (Đúng / True / Mức điện áp cao).",
          points: [
            "3 Cổng logic cơ bản nhất: Cổng AND, Cổng OR, Cổng NOT.",
            "Bảng chân trị (Truth Table): Bảng liệt kê tất cả các khả năng của đầu vào và giá trị đầu ra tương ứng của mạch logic."
          ]
        },
        {
          heading: "2. Cổng AND (Phép VÀ Logic)",
          text: "Cổng AND chỉ cho đầu ra bằng 1 khi TẤT CẢ các đầu vào đều bằng 1.",
          points: [
            "Quy tắc logic: 0 AND 0 = 0 | 0 AND 1 = 0 | 1 AND 0 = 0 | 1 AND 1 = 1.",
            "Mẹo nhớ: AND = 'TẤT CẢ ĐỀU ĐÚNG'. Chỉ cần có ít nhất một đầu vào bằng 0 thì đầu ra lập tức bằng 0.",
            "Ví dụ thực tế đời sống: Máy điều hòa nhiệt độ chỉ hoạt động khi: 'Có điện nguồn (1) AND Người dùng bật công tắc (1)'. Nếu mất điện (0) hoặc chưa bật công tắc (0) thì máy không chạy."
          ]
        },
        {
          heading: "3. Cổng OR (Phép HOẶC Logic)",
          text: "Cổng OR cho đầu ra bằng 1 nếu có ÍT NHẤT MỘT đầu vào bằng 1.",
          points: [
            "Quy tắc logic: 0 OR 0 = 0 | 0 OR 1 = 1 | 1 OR 0 = 1 | 1 OR 1 = 1.",
            "Mẹo nhớ: OR = 'ÍT NHẤT MỘT CÁI ĐÚNG'. Đầu ra chỉ bằng 0 khi tất cả các đầu vào đều bằng 0.",
            "Ví dụ thực tế đời sống: Cửa tự động mở khi: 'Có người bấm nút mở cửa (1) OR Cảm biến phát hiện chuyển động (1)'."
          ]
        },
        {
          heading: "4. Cổng NOT (Phép ĐẢO / PHỦ ĐỊNH Logic)",
          text: "Cổng NOT chỉ có 1 đầu vào và làm đảo ngược giá trị logic của đầu vào đó.",
          points: [
            "Quy tắc logic: NOT 0 = 1 | NOT 1 = 0.",
            "Mẹo nhớ: NOT = 'ĐẢO NGƯỢC'. Đúng thành Sai, Sai thành Đúng (0 thành 1, 1 thành 0)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Đầu vào A", "Đầu vào B", "Phép toán A AND B", "Phép toán A OR B", "Phép toán NOT A"],
        rows: [
          ["0", "0", "0", "0", "1"],
          ["0", "1", "0", "1", "1"],
          ["1", "0", "0", "1", "0"],
          ["1", "1", "1", "1", "0"]
        ]
      },
      qaList: {
        title: "Các Bài Toán Logic Kết Hợp Thường Gặp",
        questions: [
          {
            badge: "Ví dụ 1: Mạch AND",
            q: "Tính giá trị Y = A AND B khi A = 1, B = 0?",
            a: "Đáp án: Y = 1 AND 0 = 0 (vì phép AND yêu cầu tất cả đầu vào phải bằng 1)."
          },
          {
            badge: "Ví dụ 2: Mạch OR",
            q: "Tính giá trị Y = A OR B khi A = 1, B = 0?",
            a: "Đáp án: Y = 1 OR 0 = 1 (vì phép OR chỉ cần ít nhất một đầu vào bằng 1)."
          },
          {
            badge: "Ví dụ 3: Mạch NOT",
            q: "Tính giá trị Y = NOT A khi A = 1?",
            a: "Đáp án: Y = NOT 1 = 0 (phép NOT đảo ngược giá trị 1 thành 0)."
          }
        ]
      }
    },
    {
      id: "sec-6",
      title: "XVIII, XIX & XX. Phép Cộng Nhị Phân & Ý Tưởng Mạch Cộng 2 Bit (Half Adder)",
      subsections: [
        {
          heading: "1. Các quy tắc Phép cộng Nhị phân cơ bản",
          text: "Hệ nhị phân chỉ sử dụng hai chữ số 0 và 1, hoạt động theo cơ số 2:",
          points: [
            "0 + 0 = 0",
            "0 + 1 = 1",
            "1 + 0 = 1",
            "1 + 1 = 10₂ (Trong hệ nhị phân, 10₂ có giá trị bằng 2 trong hệ thập phân. Khi thực hiện phép cộng ta ghi 0 và nhớ 1 sang hàng bên trái).",
            "Trường hợp có nhớ thêm 1: 1 + 1 + 1 = 11₂ (Trong hệ nhị phân, 11₂ có giá trị bằng 3 trong hệ thập phân. Ta ghi 1 và nhớ 1 sang hàng bên trái)."
          ]
        },
        {
          heading: "2. Phép cộng hai số nhị phân nhiều bit & Kiểm tra bằng hệ thập phân",
          text: "Thực hiện cộng từng cột từ phải sang trái (từ hàng đơn vị lên hàng cao hơn):",
          points: [
            "Ví dụ cộng: 101₂ + 011₂\n   101  (tương ứng 5 trong hệ thập phân)\n + 011  (tương ứng 3 trong hệ thập phân)\n -----\n  1000  (tương ứng 8 trong hệ thập phân)\n• Cột 1 (phải nhất): 1 + 1 = 10 ➜ Ghi 0, nhớ 1.\n• Cột 2 (ở giữa): 0 + 1 = 1, cộng thêm 1 nhớ = 10 ➜ Ghi 0, nhớ 1.\n• Cột 3 (bên trái): 1 + 0 = 1, cộng thêm 1 nhớ = 10 ➜ Ghi 0, nhớ 1.\n• Cột 4 (hàng mới): Hạ 1 nhớ xuống ➜ Kết quả là 1000₂.",
            "💡 Mẹo kiểm tra siêu nhanh: Luôn đổi hai số nhị phân sang hệ thập phân (5 + 3 = 8), sau đó đổi 8 sang nhị phân (8 = 1000₂) để kiểm tra tính chính xác và tránh quên bit nhớ."
          ]
        },
        {
          heading: "3. Mạch cộng 2 bit – Hiểu ý tưởng dùng cổng Logic để tính toán",
          text: "Không yêu cầu học sinh thiết kế vi mạch điện tử thực tế, trọng tâm là hiểu ý tưởng nền tảng:",
          points: [
            "Khi cộng hai bit A và B (A + B), máy tính cần xác định 2 đầu ra:",
            "1. Bit kết quả (Sum - S): S = 1 khi A=0, B=1 hoặc A=1, B=0 (hai bit khác nhau) ➜ Được tạo bằng cổng XOR (hoặc kết hợp cổng AND, OR, NOT).",
            "2. Bit nhớ (Carry - C): C = 1 chỉ khi cả A=1 và B=1 (1 + 1 = 10) ➜ Được tạo ra chính xác bằng một cổng AND (C = A AND B).",
            "Kết luận triết lý công nghệ: Bằng cách ghép nối hàng triệu cổng logic AND, OR, NOT với nhau, các kỹ sư máy tính đã chế tạo ra khối ALU có khả năng thực hiện mọi phép tính toán số học và logic cực kỳ phức tạp!"
          ]
        }
      ],
      checkpointCards: [
        {
          title: "1. CPU = BỘ XỬ LÝ TRUNG TÂM",
          detail: "CPU gồm khối ALU (tính toán số học + logic), khối CU (điều khiển) và các thanh ghi Registers siêu tốc."
        },
        {
          title: "2. RAM = BỘ NHỚ LÀM VIỆC TẠM",
          detail: "RAM lưu chương trình/dữ liệu đang chạy, truy xuất cực nhanh nhưng MẤT HẾT dữ liệu khi tắt máy (Volatile)."
        },
        {
          title: "3. STORAGE = LƯU TRỮ LÂU DÀI",
          detail: "SSD/HDD lưu trữ dữ liệu bền vững không mất khi tắt máy. SSD nhanh hơn HDD vượt trội nhờ chip nhớ thể rắn."
        },
        {
          title: "4. MAINBOARD = BẢNG KẾT NỐI",
          detail: "Bo mạch chủ kết nối và tạo đường truyền tín hiệu (Bus) giữa CPU, RAM, Ổ đĩa và thiết bị ngoại vi."
        },
        {
          title: "5. AND = TẤT CẢ PHẢI ĐÚNG",
          detail: "A AND B chỉ bằng 1 khi cả A=1 và B=1. Có bất kỳ số 0 nào thì kết quả bằng 0."
        },
        {
          title: "6. OR = ÍT NHẤT MỘT CÁI ĐÚNG",
          detail: "A OR B bằng 1 khi có ít nhất một đầu vào bằng 1. Chỉ bằng 0 khi cả hai đầu vào đều bằng 0."
        },
        {
          title: "7. NOT = ĐẢO NGƯỢC GIÁ TRỊ",
          detail: "NOT 0 = 1 và NOT 1 = 0. Đảo ngược trạng thái logic của tín hiệu đầu vào."
        },
        {
          title: "8. 1 + 1 = 10₂ (NHỊ PHÂN)",
          detail: "Phép cộng nhị phân: 1 + 1 = 10₂ (ghi 0 nhớ 1). Mạch logic AND, OR, NOT kết hợp tạo ra mạch cộng nhị phân."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|                           BÀI 4: BÊN TRONG MÁY TÍNH                               |
+-----------------------------------------------------------------------------------+
       |
       +---> [1] PHẦN CỨNG BÊN TRONG (HARDWARE)
       |       * MAINBOARD: Bảng mạch chính kết nối CPU, RAM, Ổ cứng, Bus hệ thống
       |       * CPU (Bộ xử lý trung tâm): 
       |           - ALU: Thực hiện phép tính số học (+ - * /) & logic (AND OR NOT)
       |           - CU: Điều phối, lấy lệnh, giải mã lệnh và ra lệnh thực thi
       |           - Registers: Thanh ghi siêu tốc trong CPU
       |           - Xung nhịp (GHz): Tần số chu kỳ (Lưu ý: GHz cao chưa chắc nhanh hơn)
       |       * BỘ NHỚ TRONG:
       |           - RAM: Lưu tạm dữ liệu đang chạy, siêu nhanh, MẤT DỮ LIỆU khi tắt máy
       |           - ROM/Firmware: Lưu chương trình khởi động (BIOS/UEFI), không mất điện
       |       * BỘ NHỚ NGOÀI (STORAGE):
       |           - HDD: Đĩa từ cơ học quay, dung lượng lớn, giá rẻ, tốc độ thấp (~150MB/s)
       |           - SSD: Chip nhớ bán dẫn Flash, tốc độ cực nhanh (500-7000MB/s), chống sốc
       |       * MÔ HÌNH PHỐI HỢP: Storage (Tủ hồ sơ) -> RAM (Bàn làm việc) -> CPU (Nhân viên)
       |
       +---> [2] MẠCH LOGIC SỐ (LOGIC GATES)
       |       * AND: Y = 1 khi TẤT CẢ đầu vào = 1 (1 AND 1 = 1; còn lại = 0)
       |       * OR:  Y = 1 khi ÍT NHẤT 1 đầu vào = 1 (0 OR 0 = 0; còn lại = 1)
       |       * NOT: Đảo ngược giá trị logic (NOT 0 = 1; NOT 1 = 0)
       |
       +---> [3] PHÉP CỘNG NHỊ PHÂN & MẠCH CỘNG
               * Quy tắc: 0+0=0 | 0+1=1 | 1+0=1 | 1+1=10₂ (Ghi 0, nhớ 1)
               * Có nhớ:  1+1+1 = 11₂ (Ghi 1, nhớ 1)
               * Ví dụ:   101₂ (5) + 011₂ (3) = 1000₂ (8)
               * Ý tưởng: Bit kết quả (Sum) = XOR/Logic | Bit nhớ (Carry) = Cổng AND`
    }
  ],
  summaryQuiz: [
    {
      question: "Bộ phận nào sau đây trong máy tính có nhiệm vụ trực tiếp thực hiện chương trình và xử lý các phép toán số học & logic?",
      options: [
        "A. Ổ đĩa cứng SSD",
        "B. Bộ xử lí trung tâm (CPU)",
        "C. Màn hình hiển thị",
        "D. Bộ nhớ truy cập ngẫu nhiên (RAM)"
      ],
      answer: "B",
      explanation: "CPU (Central Processing Unit) là bộ xử lý trung tâm, trong đó khối ALU trực tiếp tính toán số học và logic, khối CU điều phối thực hiện các lệnh của chương trình."
    },
    {
      question: "Loại bộ nhớ nào sau đây sẽ bị MẤT TOÀN BỘ dữ liệu khi máy tính bị mất điện hoặc tắt máy?",
      options: [
        "A. Ổ cứng thể rắn SSD",
        "B. Ổ đĩa cứng cơ học HDD",
        "C. Bộ nhớ truy cập ngẫu nhiên RAM",
        "D. Ổ đĩa flash USB"
      ],
      answer: "C",
      explanation: "RAM là bộ nhớ khả biến (Volatile Memory), chỉ lưu trữ dữ liệu tạm thời khi có nguồn điện nuôi dưỡng. Khi tắt máy hoặc mất điện đột ngột, toàn bộ dữ liệu trên RAM sẽ bị xóa sạch."
    },
    {
      question: "Thiết bị nào sau đây đóng vai trò là bộ nhớ lưu trữ dữ liệu lâu dài (không bị mất khi tắt máy)?",
      options: [
        "A. Bộ nhớ RAM",
        "B. Ổ đĩa cứng thể rắn SSD",
        "C. Bộ nhớ đệm CPU Cache L1",
        "D. Các thanh ghi Registers"
      ],
      answer: "B",
      explanation: "SSD (Solid State Drive) là thiết bị lưu trữ ngoài không bay hơi (Non-volatile), dữ liệu văn bản, ảnh, video, hệ điều hành được lưu trữ an toàn lâu dài ngay cả khi ngắt điện."
    },
    {
      question: "Kết quả của phép toán logic '1 AND 0' là bao nhiêu?",
      options: [
        "A. 0",
        "B. 1",
        "C. 2",
        "D. 10"
      ],
      answer: "A",
      explanation: "Phép toán logic AND chỉ cho kết quả bằng 1 khi TẤT CẢ các đầu vào đều bằng 1. Vì có một đầu vào bằng 0 nên 1 AND 0 = 0."
    },
    {
      question: "Kết quả của phép toán logic '1 OR 0' là bao nhiêu?",
      options: [
        "A. 0",
        "B. 1",
        "C. 2",
        "D. -1"
      ],
      answer: "B",
      explanation: "Phép toán logic OR cho kết quả bằng 1 khi có ÍT NHẤT MỘT đầu vào bằng 1. Do đó 1 OR 0 = 1."
    },
    {
      question: "Kết quả của phép toán logic 'NOT 1' là bao nhiêu?",
      options: [
        "A. 0",
        "B. 1",
        "C. -1",
        "D. 2"
      ],
      answer: "A",
      explanation: "Phép toán NOT là phép phủ định/đảo ngược giá trị logic: NOT 1 = 0 và NOT 0 = 1."
    },
    {
      question: "Trong hệ nhị phân, kết quả của phép cộng '1 + 1' bằng bao nhiêu?",
      options: [
        "A. 1",
        "B. 10",
        "C. 11",
        "D. 2"
      ],
      answer: "B",
      explanation: "Trong hệ nhị phân (cơ số 2), số 2 được biểu diễn là 10₂. Do đó 1 + 1 = 10₂ (viết 0, nhớ 1 sang hàng tiếp theo)."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Phân biệt Cơ Chế Lưu Trữ của RAM vs ROM vs Storage (SSD/HDD) trong Đề Thi",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Hãy phân biệt sự khác nhau cốt lõi giữa RAM (Bộ nhớ trong) và SSD (Bộ nhớ ngoài) dựa trên 3 tiêu chí: (1) Mục đích sử dụng trong quá trình máy tính vận hành, (2) Khả năng lưu trữ khi mất điện, (3) Tốc độ truy xuất dữ liệu.",
      method: "⚡ Phương pháp phân tích nhanh:\n• RAM = Bộ nhớ trong, phục vụ xử lý tức thời, Volatile (mất điện mất dữ liệu), tốc độ siêu nhanh (hàng chục GB/s).\n• SSD = Bộ nhớ ngoài, lưu trữ dữ liệu lâu dài, Non-volatile (mất điện còn nguyên), tốc độ chậm hơn RAM nhưng nhanh hơn HDD.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n1. Mục đích sử dụng:\n   • RAM: Lưu trữ tạm thời các chương trình và dữ liệu đang được CPU xử lý tại thời điểm hiện tại.\n   • SSD: Lưu trữ lâu dài hệ điều hành, phần mềm cài đặt và tài liệu cá nhân của người dùng.\n2. Khả năng duy trì dữ liệu khi tắt máy:\n   • RAM: Mất toàn bộ dữ liệu (bộ nhớ tạm).\n   • SSD: Dữ liệu vẫn được bảo toàn nguyên vẹn.\n3. Tốc độ truy xuất:\n   • RAM nhanh hơn SSD từ 5 đến 20 lần, giúp CPU không bị chờ đợi khi tính toán."
    },
    {
      title: "Dạng 2: Phân tích Hiệu Năng CPU (GHz, Cores, Threads) & Nhận Diện Bẫy Lý Thuyết",
      tag: "Bẫy Lý thuyết Điểm 9-10",
      sampleQuestion: "Bạn Bình khẳng định: 'CPU có xung nhịp 4.0 GHz chắc chắn sẽ xử lý mọi tác vụ nhanh gấp đôi CPU có xung nhịp 2.0 GHz'. Nhận định trên Đúng hay Sai? Hãy nêu ít nhất 3 yếu tố phần cứng khác ảnh hưởng trực tiếp đến hiệu năng thực tế của CPU.",
      method: "⚡ Phương pháp phản biện khoa học:\n1. Khẳng định: Hoàn toàn SAI.\n2. Giải thích: Xung nhịp chỉ là số chu kỳ dao động/giây, không phản ánh toàn bộ lượng công việc hoàn thành nếu kiến trúc khác nhau.\n3. 3 yếu tố quyết định hiệu năng: Kiến trúc vi xử lý (IPC), Số nhân/luồng (Cores/Threads), Bộ nhớ đệm (Cache L1/L2/L3), Tản nhiệt.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• Nhận định của Bình là SAI.\n• Lý do: Xung nhịp (GHz) chỉ phản ánh tốc độ chu kỳ xung nhịp. Một CPU thế hệ mới với xung nhịp 2.0 GHz nhưng có kiến trúc hiện đại (IPC cao hơn), thực hiện được nhiều lệnh hơn trong mỗi chu kỳ thì vẫn có thể chạy nhanh hơn một CPU thế hệ cũ 4.0 GHz.\n• 3 yếu tố quan trọng khác quyết định hiệu năng CPU:\n  1. Số nhân vật lý (Cores) và số luồng (Threads): Hỗ trợ xử lý song song nhiều tác vụ cùng lúc.\n  2. Bộ nhớ đệm (Cache L2, L3): Dung lượng cache lớn giúp CPU giảm thời gian chờ đợi lấy dữ liệu từ RAM.\n  3. Kiến trúc vi xử lý (IPC - Instructions Per Cycle): Khả năng xử lý số lượng lệnh trong 1 chu kỳ xung nhịp."
    },
    {
      title: "Dạng 3: Bảng Chân Trị và Biểu Thức Logic Kết Hợp (AND, OR, NOT)",
      tag: "Thông hiểu & Tính toán Logic",
      sampleQuestion: "Cho biểu thức logic: Y = (A AND B) OR (NOT C). Hãy tính giá trị đầu ra Y trong các trường hợp sau:\n(a) A = 1, B = 0, C = 1\n(b) A = 1, B = 1, C = 1\n(c) A = 0, B = 1, C = 0",
      method: "⚡ Quy tắc tính toán biểu thức logic:\n1. Thực hiện trong ngoặc đơn trước: Tính (A AND B) và tính (NOT C).\n2. Thực hiện phép toán OR ở ngoài cùng: 0 OR 0 = 0; các trường hợp còn lại bằng 1.",
      solution: "✅ Đáp án & Các bước tính toán chi tiết:\n• Trường hợp (a): A = 1, B = 0, C = 1\n  - (A AND B) = 1 AND 0 = 0\n  - (NOT C) = NOT 1 = 0\n  ➜ Y = 0 OR 0 = 0.\n\n• Trường hợp (b): A = 1, B = 1, C = 1\n  - (A AND B) = 1 AND 1 = 1\n  - (NOT C) = NOT 1 = 0\n  ➜ Y = 1 OR 0 = 1.\n\n• Trường hợp (c): A = 0, B = 1, C = 0\n  - (A AND B) = 0 AND 1 = 0\n  - (NOT C) = NOT 0 = 1\n  ➜ Y = 0 OR 1 = 1."
    },
    {
      title: "Dạng 4: Phép Cộng Nhị Phân Nhiều Bit Có Nhớ & Chuyển Đổi Kiểm Tra Hệ Thập Phân",
      tag: "Vận dụng Tính toán",
      sampleQuestion: "Thực hiện phép cộng hai số nhị phân sau và trình bày rõ bit nhớ ở từng cột:\n   1 1 0 1₂\n + 0 1 1 1₂\nSau đó đổi cả hai số hạng và kết quả sang hệ thập phân để kiểm chứng.",
      method: "⚡ Quy tắc cộng cột từ phải sang trái:\n• 1 + 1 = 10 (ghi 0 nhớ 1)\n• 1 + 1 + 1 = 11 (ghi 1 nhớ 1)\n• Đổi nhị phân sang thập phân: 1101₂ = 8+4+1 = 13; 0111₂ = 4+2+1 = 7. Tổng = 20 = 10100₂.",
      solution: "✅ Trình bày chi tiết phép cộng:\n     ¹ ¹ ¹   (các bit nhớ)\n     1 1 0 1₂  (= 13 trong hệ thập phân)\n   + 0 1 1 1₂  (= 7 trong hệ thập phân)\n   -----------\n   1 0 1 0 0₂  (= 20 trong hệ thập phân)\n\n• Phân tích từng bước từ phải qua trái:\n  - Cột 1: 1 + 1 = 10 ➜ Ghi 0, nhớ 1.\n  - Cột 2: 0 + 1 = 1, cộng thêm 1 nhớ = 10 ➜ Ghi 0, nhớ 1.\n  - Cột 3: 1 + 1 = 10, cộng thêm 1 nhớ = 11 ➜ Ghi 1, nhớ 1.\n  - Cột 4: 1 + 0 = 1, cộng thêm 1 nhớ = 10 ➜ Ghi 0, nhớ 1.\n  - Cột 5: Hạ 1 nhớ xuống ➜ Kết quả là 10100₂.\n• Kiểm chứng hệ thập phân: 13 + 7 = 20. Đổi 20 sang nhị phân: 20 = 16 + 4 = 2⁴ + 2² = 10100₂ (Hoàn toàn chính xác!)."
    },
    {
      title: "Dạng 5: Bài Toán Tình Huống Phân Tích Điểm Nghẽn Phần Cứng & Tư Vấn Cấu Hình",
      tag: "Vận dụng Cao & Thực tế",
      sampleQuestion: "Một học sinh sử dụng máy tính bàn có cấu hình: CPU Intel Core i7 (rất mạnh), RAM 4 GB, Ổ cứng SSD 1 TB NVMe. Học sinh phản ánh khi vừa học trực tuyến trên Teams, vừa mở 25 tab Chrome tìm tài liệu và soạn thảo Word thì máy tính chạy rất giật lag, đơ chuột. Em hãy:\n(1) Xác định thành phần linh kiện nào đang là điểm nghẽn (Bottleneck) chính của hệ thống?\n(2) Giải thích cơ chế kỹ thuật vì sao linh kiện đó khiến máy bị chậm?\n(3) Đưa ra giải pháp nâng cấp tối ưu và tiết kiệm nhất.",
      method: "⚡ Phương pháp bắt bệnh phần cứng:\n• Đa nhiệm nhiều tab Chrome + Teams + Word ➜ Tốn rất nhiều RAM (thường cần 6-10GB RAM).\n• RAM 4GB quá nhỏ ➜ Tràn RAM ➜ Dữ liệu bị đẩy xuống ổ đĩa ảo (Pagefile) ➜ Tốc độ bị giảm nghìn lần.\n• Giải pháp: Nâng cấp thêm thanh RAM 8GB hoặc 16GB.",
      solution: "✅ Đáp án & Tư vấn chuẩn chuyên gia:\n1. Điểm nghẽn chính: Bộ nhớ RAM 4 GB.\n2. Giải thích cơ chế: Mở đồng thời 25 tab trình duyệt và ứng dụng hội họp trực tuyến Teams tiêu tốn từ 6 GB đến 8 GB RAM. Khi RAM vật lý 4 GB bị đầy 100%, hệ điều hành Windows bắt buộc phải chuyển phần dữ liệu dư thừa sang lưu tạm trên ổ cứng SSD (tạo bộ nhớ ảo - Virtual Memory). Dù SSD NVMe rất nhanh so với HDD nhưng tốc độ truyền tải vẫn chậm hơn RAM hàng chục lần, đồng thời CPU phải mất thêm chu kỳ quản lý phân trang bộ nhớ, dẫn đến hiện tượng nghẽn cổ chai và đơ giật.\n3. Giải pháp nâng cấp: Nâng cấp RAM từ 4 GB lên 16 GB (gắn thêm 1 thanh RAM 8GB hoặc 1 thanh 16GB). Chi phí nâng cấp RAM chỉ vài trăm nghìn đồng nhưng sẽ giải quyết triệt để 100% tình trạng giật lag."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Kiểm Tra Toàn Diện Kiến Thức Cốt Lõi (10 Câu hỏi Tự luận)",
      tag: "Lý thuyết & Bản chất",
      problem: "Hãy đọc kỹ và trả lời ngắn gọn, chính xác 10 câu hỏi lý thuyết cốt lõi về Thiết bị bên trong máy tính và Mạch logic:",
      tasks: [
        "Câu 1: CPU là gì và gồm những bộ phận chức năng quan trọng nào?",
        "Câu 2: RAM có vai trò gì trong quá trình máy tính hoạt động? Tại sao khi mất điện dữ liệu trong RAM bị mất?",
        "Câu 3: ROM khác RAM như thế nào về mục đích lưu trữ và khả năng giữ dữ liệu khi ngắt điện?",
        "Câu 4: Bộ nhớ ngoài dùng để làm gì? Kể tên 3 thiết bị bộ nhớ ngoài phổ biến.",
        "Câu 5: Bo mạch chủ (Mainboard) có vai trò gì? Mainboard có phải là 'bộ não' của máy tính không?",
        "Câu 6: Ổ cứng SSD khác ổ cứng HDD ở những điểm nào (cơ chế hoạt động, tốc độ, độ bền)?",
        "Câu 7: Cổng logic AND hoạt động theo quy tắc nào? Nêu 1 ví dụ thực tế.",
        "Câu 8: Cổng logic OR hoạt động theo quy tắc nào? Nêu 1 ví dụ thực tế.",
        "Câu 9: Cổng logic NOT hoạt động theo quy tắc nào?",
        "Câu 10: Vì sao một chiếc máy tính có ổ cứng SSD dung lượng rất lớn (1 TB) nhưng dung lượng RAM quá ít (4 GB) vẫn có thể bị chạy chậm khi mở nhiều ứng dụng?"
      ],
      requirements: "Trình bày rõ ràng, giải thích bằng ngôn ngữ của bản thân, không sao chép máy móc.",
      hint: "Bám sát các mục IV, V, VII, VIII, X, XII, XIV, XV, XVI trong phần Lý thuyết của bài học.",
      solution: `1. CPU & Bộ phận chức năng:
• CPU (Central Processing Unit) là bộ xử lý trung tâm, thực hiện chương trình và xử lý phép toán.
• Gồm 2 khối quan trọng: ALU (tính toán số học và logic) và CU (điều phối, giải mã lệnh), cùng hệ thống thanh ghi (Registers) lưu tạm dữ liệu siêu tốc.

2. Vai trò của RAM & Tính bay hơi:
• RAM là bộ nhớ trong lưu tạm dữ liệu và chương trình đang chạy để CPU truy xuất cực nhanh.
• RAM dùng các tụ điện và transistor bán dẫn cần dòng điện liên tục để duy trì trạng thái bit, do đó khi mất điện thì điện tích biến mất, dữ liệu bị xóa sạch (Volatile).

3. Phân biệt ROM vs RAM:
• RAM: Đọc và ghi liên tục, lưu dữ liệu làm việc tạm thời, mất dữ liệu khi ngắt điện.
• ROM: Lưu chương trình hệ thống/firmware khởi động (BIOS/UEFI), không bị mất dữ liệu khi ngắt điện, không dùng làm vùng nhớ làm việc như RAM.

4. Bộ nhớ ngoài:
• Dùng để lưu trữ dữ liệu, phần mềm và hệ điều hành lâu dài, an toàn khi tắt máy.
• 3 thiết bị phổ biến: Ổ thể rắn SSD, Ổ đĩa cứng HDD, Ổ nhớ Flash USB (hoặc Thẻ nhớ SD).

5. Vai trò của Mainboard:
• Là bảng mạch chính kết nối vật lý và truyền dẫn tín hiệu (Bus) giữa CPU, RAM, Ổ cứng, Card màn hình và thiết bị ngoại vi.
• Mainboard KHÔNG PHẢI là bộ não (CPU mới là bộ não), Mainboard đóng vai trò cầu nối liên lạc.

6. SSD khác HDD:
• HDD: Dùng đĩa từ quay và đầu đọc cơ học, tốc độ chậm (~150MB/s), dễ hỏng khi va đập, giá rẻ/GB.
• SSD: Dùng chip nhớ Flash bán dẫn, không có bộ phận chuyển động cơ học, tốc độ cực nhanh (500-7000MB/s), chống sốc tốt, mở máy trong vài giây.

7. Quy tắc cổng AND:
• Chỉ cho đầu ra = 1 khi TẤT CẢ đầu vào đều = 1. Ví dụ: Điều hòa bật khi 'Có điện (1) AND Bật công tắc (1)'.

8. Quy tắc cổng OR:
• Cho đầu ra = 1 khi có ÍT NHẤT MỘT đầu vào = 1. Ví dụ: Cửa tự động mở khi 'Bấm nút (1) OR Cảm biến thấy người (1)'.

9. Quy tắc cổng NOT:
• Đảo ngược giá trị logic của 1 đầu vào: NOT 0 = 1 và NOT 1 = 0.

10. Vì sao SSD lớn nhưng RAM ít máy vẫn chậm:
• SSD là 'tủ hồ sơ' (lưu lâu dài), RAM là 'bàn làm việc'. Khi mở nhiều ứng dụng, bàn làm việc RAM bị đầy, hệ thống phải liên tục chuyển bớt dữ liệu sang ổ đĩa SSD làm bộ nhớ ảo. Tốc độ SSD dù nhanh nhưng vẫn chậm hơn RAM nhiều lần, gây hiện tượng nghẽn cổ chai khiến máy bị giật lag.`
    },
    {
      title: "Bài tập 2: Đọc & Phân Tích Cấu Hình Máy Tính Cá Nhân Thực Tế",
      tag: "Thực hành Đọc Thông số",
      scenario: "Cho thông số cấu hình một máy tính để bàn học tập:\n- CPU: Intel Core i5-12400 (6 Cores, 12 Threads, Max 4.4 GHz, 18 MB Cache)\n- RAM: 16 GB DDR4 3200 MHz\n- Storage: SSD 512 GB NVMe M.2 PCIe Gen 4 (Đọc 3500 MB/s, Ghi 2100 MB/s)\n- GPU: Intel UHD Graphics 730 (Tích hợp)",
      problem: "Em hãy phân tích chi tiết cấu hình máy tính trên theo các yêu cầu sau:",
      tasks: [
        "Nhiệm vụ 1: Nêu chức năng và ý nghĩa cụ thể của từng thông số: CPU (Số nhân, số luồng, xung nhịp, Cache), RAM (Dung lượng, bus), SSD (Dung lượng, chuẩn kết nối, tốc độ), GPU.",
        "Nhiệm vụ 2: Thành phần linh kiện nào ảnh hưởng nhiều nhất đến khả năng chạy đa nhiệm mượt mà khi mở đồng thời 30 tab Chrome và phần mềm lập trình?",
        "Nhiệm vụ 3: Thành phần nào quyết định không gian lưu trữ tài liệu, phim ảnh và tốc độ khởi động Windows?",
        "Nhiệm vụ 4: Nếu trong tương lai học sinh muốn học thêm về dựng phim 4K và thiết kế đồ họa 3D nặng, thành phần nào nên được ưu tiên gắn thêm?"
      ],
      requirements: "Giải thích rõ ràng cơ sở kỹ thuật cho từng câu trả lời.",
      hint: "Bám sát các mục VI, VII, X, XI trong bài học.",
      solution: `1. Phân tích ý nghĩa chi tiết các thông số:
• CPU Intel Core i5-12400: 6 nhân (Cores) và 12 luồng (Threads) giúp xử lý đồng thời nhiều tác vụ; Xung nhịp tối đa 4.4 GHz thể hiện tốc độ chu kỳ xung nhịp cao; 18 MB Cache L3 giúp lưu trữ đệm dữ liệu truy xuất nhanh cho CPU.
• RAM 16 GB DDR4 3200 MHz: Dung lượng 16 GB rộng rãi cho đa nhiệm; Tốc độ bus 3200 MHz cho băng thông truyền tải dữ liệu nhanh giữa RAM và CPU.
• SSD 512 GB NVMe PCIe Gen 4: Dung lượng 512 GB lưu trữ Windows và phần mềm; Chuẩn NVMe tốc độ đọc 3500 MB/s giúp khởi động máy chỉ mất 5-10 giây và mở ứng dụng tức thời.
• GPU Tích hợp UHD 730: Nhân đồ họa tích hợp sẵn trong CPU, đủ đáp ứng xem video 4K, học tập văn phòng và đồ họa nhẹ 2D.

2. Linh kiện ảnh hưởng đến khả năng Đa nhiệm:
• Bộ nhớ RAM (16 GB) và Số nhân/luồng của CPU (6 Cores / 12 Threads) là hai yếu tố quyết định. Với 16 GB RAM, học sinh hoàn toàn mở 30 tab trình duyệt + code mà không lo bị tràn bộ nhớ.

3. Linh kiện quyết định không gian lưu trữ & tốc độ khởi động:
• Ổ cứng SSD 512 GB NVMe quyết định toàn bộ không gian lưu trữ và tốc độ load hệ điều hành.

4. Nâng cấp cho dựng phim 4K / Đồ họa 3D:
• Ưu tiên gắn thêm Card đồ họa rời (Dedicated GPU như NVIDIA RTX) và nâng cấp RAM lên 32 GB.`
    },
    {
      title: "Bài tập 3: Thực Hành Tính Toán Mạch Logic & Lập Bảng Chân Trị",
      tag: "Toán Logic Cơ bản",
      problem: "Thực hiện tính toán các biểu thức logic cơ bản và lập bảng chân trị hoàn chỉnh:",
      tasks: [
        "Nhiệm vụ 1: Tính giá trị của 10 phép toán sau:\n1. 0 AND 0 = ?\n2. 0 AND 1 = ?\n3. 1 AND 0 = ?\n4. 1 AND 1 = ?\n5. 0 OR 0 = ?\n6. 0 OR 1 = ?\n7. 1 OR 0 = ?\n8. 1 OR 1 = ?\n9. NOT 0 = ?\n10. NOT 1 = ?",
        "Nhiệm vụ 2: Tự lập bảng chân trị tổng hợp cho 3 cổng AND, OR, NOT.",
        "Nhiệm vụ 3: Cho mạch logic có hàm số Y = (NOT A) AND (B OR C). Tính giá trị của Y khi A = 0, B = 0, C = 1."
      ],
      requirements: "Ghi rõ các bước tính toán và kết quả cuối cùng.",
      solution: `1. Kết quả 10 phép tính logic cơ bản:
• 1. 0 AND 0 = 0
• 2. 0 AND 1 = 0
• 3. 1 AND 0 = 0
• 4. 1 AND 1 = 1
• 5. 0 OR 0 = 0
• 6. 0 OR 1 = 1
• 7. 1 OR 0 = 1
• 8. 1 OR 1 = 1
• 9. NOT 0 = 1
• 10. NOT 1 = 0

2. Bảng chân trị tổng hợp:

| A | B | A AND B | A OR B | NOT A | NOT B |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

3. Tính hàm logic Y = (NOT A) AND (B OR C) với A = 0, B = 0, C = 1:
• Bước 1: Tính (NOT A) = NOT 0 = 1
• Bước 2: Tính (B OR C) = 0 OR 1 = 1
• Bước 3: Tính Y = 1 AND 1 = 1
• Kết luận: Giá trị đầu ra Y = 1.`
    },
    {
      title: "Bài tập 4: Luyện Tập Phép Cộng Nhị Phân & Đổi Sang Hệ Thập Phân Kiểm Tra",
      tag: "Tính toán Nhị phân Chuyên sâu",
      problem: "Thực hiện 5 phép cộng số nhị phân sau đây (trình bày rõ từng cột và bit nhớ carry), sau đó đổi cả hai số hạng và kết quả sang hệ thập phân để kiểm chứng:",
      tasks: [
        "Phép tính 1: 101₂ + 001₂",
        "Phép tính 2: 110₂ + 010₂",
        "Phép tính 3: 101₂ + 011₂",
        "Phép tính 4: 111₂ + 001₂",
        "Phép tính 5: 1001₂ + 0011₂"
      ],
      requirements: "Đặt tính thẳng cột, thể hiện rõ bit nhớ ở từng hàng và có phần đối chiếu thập phân.",
      solution: `1. Phép tính 1: 101₂ + 001₂
     ¹   (nhớ)
     1 0 1₂  (= 5)
   + 0 0 1₂  (= 1)
   -------
     1 1 0₂  (= 6)
• Kiểm tra: 5 + 1 = 6 (Chính xác).

2. Phép tính 2: 110₂ + 010₂
   ¹     (nhớ)
     1 1 0₂  (= 6)
   + 0 1 0₂  (= 2)
   -------
   1 0 0 0₂  (= 8)
• Kiểm tra: 6 + 2 = 8 (Chính xác).

3. Phép tính 3: 101₂ + 011₂
   ¹ ¹   (nhớ)
     1 0 1₂  (= 5)
   + 0 1 1₂  (= 3)
   -------
   1 0 0 0₂  (= 8)
• Kiểm tra: 5 + 3 = 8 (Chính xác).

4. Phép tính 4: 111₂ + 001₂
   ¹ ¹ ¹ (nhớ)
     1 1 1₂  (= 7)
   + 0 0 1₂  (= 1)
   -------
   1 0 0 0₂  (= 8)
• Kiểm tra: 7 + 1 = 8 (Chính xác).

5. Phép tính 5: 1001₂ + 0011₂
     ¹ ¹ (nhớ)
   1 0 0 1₂  (= 9)
 + 0 0 1 1₂  (= 3)
 ---------
   1 1 0 0₂  (= 12)
• Kiểm tra: 9 + 3 = 12 (Chính xác: 1100₂ = 8 + 4 = 12).`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b4-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Nhận Diện Phần Cứng & Ghép Chức Năng",
      duration: "2 phút",
      type: "exercise",
      description: "Ghép 4 thành phần CPU, RAM, SSD, Mainboard với đúng chức năng cốt lõi.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Nhận diện chính xác 4 linh kiện phần cứng cơ bản.",
        requirements: [
          "Cho 4 thành phần: (1) CPU, (2) RAM, (3) SSD, (4) Mainboard.",
          "Nhiệm vụ: Hãy ghép từng thành phần với chức năng tương ứng:\n- [A] Lưu trữ dữ liệu lâu dài không mất khi tắt máy.\n- [B] Thực hiện xử lý chương trình và tính toán.\n- [C] Bảng mạch chính kết nối các thành phần.\n- [D] Lưu dữ liệu/chương trình đang được sử dụng tạm thời."
        ],
        qaList: [
          {
            q: "Kết quả ghép nối chính xác là gì?",
            a: "Đáp án:\n• CPU ➜ Thực hiện xử lý chương trình và tính toán (B).\n• RAM ➜ Lưu dữ liệu/chương trình đang được sử dụng tạm thời (D).\n• SSD ➜ Lưu trữ dữ liệu lâu dài không mất khi tắt máy (A).\n• Mainboard ➜ Bảng mạch chính kết nối các thành phần (C)."
          }
        ]
      }
    },
    {
      id: "practice-b4-2",
      badge: "Bài 2 – 2 phút",
      title: "Bài 2 – Phân Loại: RAM hay SSD?",
      duration: "2 phút",
      type: "exercise",
      description: "Xác định linh kiện phù hợp cho từng nhu cầu và đặc điểm vận hành.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Phân biệt tuyệt đối rạch ròi giữa bộ nhớ trong (RAM) và bộ nhớ ngoài (SSD).",
        requirements: [
          "Xác định thành phần (RAM hay SSD/HDD) phù hợp với từng mô tả sau:\n1. Nơi lưu trữ hệ điều hành Windows lâu dài nhiều năm.\n2. Nơi lưu trữ dữ liệu tạm thời khi một chương trình đang chạy.\n3. Khi tắt máy tính, dữ liệu đang lưu trong bộ nhớ này sẽ bị mất sạch.\n4. Nơi lưu trữ bộ sưu tập ảnh, video, tài liệu học tập an toàn."
        ],
        qaList: [
          {
            q: "1. Lưu Windows lâu dài nhiều năm?",
            a: "Đáp án: SSD / HDD (Bộ nhớ ngoài)."
          },
          {
            q: "2. Lưu dữ liệu tạm thời khi chương trình đang chạy?",
            a: "Đáp án: RAM (Bộ nhớ trong)."
          },
          {
            q: "3. Tắt máy dữ liệu bị mất sạch?",
            a: "Đáp án: RAM (Bộ nhớ khả biến Volatile)."
          },
          {
            q: "4. Lưu ảnh và video an toàn nhiều năm?",
            a: "Đáp án: SSD / HDD (Bộ nhớ lưu trữ bền vững)."
          }
        ]
      }
    },
    {
      id: "practice-b4-3",
      badge: "Bài 3 – 2 phút",
      title: "Bài 3 – Tình Huống Phân Tích Máy Tính Chạy Chậm",
      duration: "2 phút",
      type: "exercise",
      description: "Phân tích điểm nghẽn của laptop có CPU khá tốt, RAM 4GB, SSD 512GB khi mở nhiều ứng dụng.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nhận diện hiện tượng nghẽn cổ chai phần cứng.",
        requirements: [
          "Tình huống: Một chiếc laptop có cấu hình gồm CPU khá tốt, RAM 4 GB, SSD 512 GB. Khi người dùng mở nhiều tab trình duyệt và nhiều ứng dụng cùng lúc thì máy bị chậm và giật lag rõ rệt.",
          "Câu hỏi 1: Thành phần nào có khả năng cao là một trong những điểm nghẽn chính?",
          "Câu hỏi 2 (Mở rộng): Nếu nâng cấp dung lượng SSD từ 512 GB lên 1 TB thì có trực tiếp giải quyết được vấn đề thiếu RAM không?"
        ],
        qaList: [
          {
            q: "Thành phần nào là điểm nghẽn chính?",
            a: "Đáp án: RAM 4 GB là điểm nghẽn chính. Dung lượng 4 GB quá nhỏ đối với nhu cầu đa nhiệm hiện đại."
          },
          {
            q: "Nâng SSD lên 1 TB có giải quyết được không?",
            a: "Đáp án: KHÔNG. Dung lượng ổ cứng lưu trữ (SSD) và dung lượng bộ nhớ làm việc (RAM) là hai vấn đề hoàn toàn khác nhau. Muốn hết giật lag khi mở nhiều tab cần phải nâng cấp RAM (ví dụ lên 8GB hoặc 16GB)."
          }
        ]
      }
    },
    {
      id: "practice-b4-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Đọc & So Sánh Cấu Hình 2 Máy Tính",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích nhận định về xung nhịp CPU giữa Máy A và Máy B.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Tránh bẫy hiểu lầm chỉ nhìn vào xung nhịp GHz để đánh giá máy tính.",
        requirements: [
          "Cho cấu hình 2 máy tính:\n- Máy A: CPU 3.0 GHz | RAM 8 GB | SSD 512 GB\n- Máy B: CPU 3.2 GHz | RAM 16 GB | SSD 256 GB\nMột học sinh nhận xét: 'Máy B chắc chắn mạnh hơn Máy A vì CPU của Máy B có xung nhịp 3.2 GHz cao hơn 3.0 GHz'.",
          "Câu hỏi: Nhận xét trên của học sinh có hoàn toàn chính xác không? Hãy giải thích rõ lý do."
        ],
        qaList: [
          {
            q: "Nhận xét của học sinh có chính xác không?",
            a: "Đáp án: KHÔNG CHÍNH XÁC nếu chỉ kết luận dựa vào xung nhịp GHz."
          },
          {
            q: "Giải thích các yếu tố cần đánh giá tổng thể?",
            a: "Đáp án: Không thể khẳng định một CPU mạnh hơn chỉ dựa vào con số xung nhịp. Cần xem xét: Thế hệ và kiến trúc CPU, số nhân/luồng, dung lượng bộ nhớ đệm Cache. Tuy nhiên, Máy B có lợi thế lớn về dung lượng RAM (16 GB so với 8 GB) giúp đa nhiệm mượt hơn; trong khi Máy A có dung lượng lưu trữ SSD lớn hơn (512 GB so với 256 GB). Việc máy nào 'tốt hơn' còn phụ thuộc vào loại công việc cụ thể của người dùng."
          }
        ]
      }
    },
    {
      id: "practice-b4-5",
      badge: "Bài 5 – 2 phút",
      title: "Bài 5 – Phép Toán Logic AND",
      duration: "2 phút",
      type: "exercise",
      description: "Thực hành tính toán phép toán logic AND và khắc sâu quy tắc chân trị.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Thành thạo quy tắc cổng AND.",
        requirements: [
          "Tính các giá trị sau:\n1. Cho A = 1, B = 0. Tính A AND B = ?\n2. Cho A = 1, B = 1. Tính A AND B = ?\n3. Nêu câu ghi nhớ cốt lõi về phép toán AND."
        ],
        qaList: [
          {
            q: "1. A = 1, B = 0 ➜ A AND B = ?",
            a: "Đáp án: 1 AND 0 = 0"
          },
          {
            q: "2. A = 1, B = 1 ➜ A AND B = ?",
            a: "Đáp án: 1 AND 1 = 1"
          },
          {
            q: "3. Câu chốt ghi nhớ?",
            a: "Đáp án: Phép AND chỉ bằng 1 khi TẤT CẢ các đầu vào đều bằng 1."
          }
        ]
      }
    },
    {
      id: "practice-b4-6",
      badge: "Bài 6 – 2 phút",
      title: "Bài 6 – Phép Toán Logic OR và NOT",
      duration: "2 phút",
      type: "exercise",
      description: "Thực hành tính toán phép toán logic OR và NOT.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Thành thạo quy tắc cổng OR và NOT.",
        requirements: [
          "Tính các giá trị sau:\n1. Cho A = 0, B = 1. Tính A OR B = ?\n2. Cho A = 0. Tính NOT A = ?\n3. Cho B = 1. Tính NOT B = ?"
        ],
        qaList: [
          {
            q: "1. A = 0, B = 1 ➜ A OR B = ?",
            a: "Đáp án: 0 OR 1 = 1 (vì phép OR chỉ cần ít nhất một đầu vào bằng 1)."
          },
          {
            q: "2. A = 0 ➜ NOT A = ?",
            a: "Đáp án: NOT 0 = 1 (phép NOT đảo 0 thành 1)."
          },
          {
            q: "3. B = 1 ➜ NOT B = ?",
            a: "Đáp án: NOT 1 = 0 (phép NOT đảo 1 thành 0)."
          }
        ]
      }
    },
    {
      id: "practice-b4-7",
      badge: "Bài 7 – 2 phút",
      title: "Bài 7 – Ứng Dụng Mạch Logic Trong Đời Sống",
      duration: "2 phút",
      type: "exercise",
      description: "Mô hình hóa hệ thống khóa cửa thông minh bằng phép toán logic.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Liên hệ cổng logic số với các điều khiển thực tế.",
        requirements: [
          "Tình huống: Một hệ thống cửa bảo mật của tòa nhà được lập trình chỉ mở khi: Quẹt thẻ hợp lệ AND Nhập mã PIN đúng.",
          "Trường hợp thực tế: Một người quẹt Thẻ hợp lệ (Giá trị = 1) nhưng Nhập mã PIN sai (Giá trị = 0).",
          "Câu hỏi: Cửa có mở không? Hãy biểu diễn bằng phép toán logic."
        ],
        qaList: [
          {
            q: "Biểu thức logic và trạng thái mở cửa?",
            a: "Đáp án: Biểu thức: 1 AND 0 = 0 ➜ Cửa KHÔNG MỞ. Vì hệ thống dùng cổng AND, bắt buộc cả 2 điều kiện phải cùng đúng (bằng 1) thì cửa mới mở."
          }
        ]
      }
    },
    {
      id: "practice-b4-8",
      badge: "Bài 8 – 2 phút",
      title: "Bài 8 – Thực Hành Phép Cộng Nhị Phân Cơ Bản",
      duration: "2 phút",
      type: "exercise",
      description: "Thực hiện phép cộng hai số nhị phân 101₂ + 011₂ và kiểm tra hệ thập phân.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Thành thạo quy tắc cộng nhị phân và bit nhớ.",
        requirements: [
          "Thực hiện phép tính: 101₂ + 011₂",
          "Nêu giá trị tương ứng của hai số hạng và kết quả trong hệ thập phân."
        ],
        qaList: [
          {
            q: "Kết quả phép cộng nhị phân?",
            a: "Đáp án:\n    101₂\n  + 011₂\n  ------\n   1000₂"
          },
          {
            q: "Kiểm tra bằng hệ thập phân?",
            a: "Đáp án: 101₂ = 5, 011₂ = 3. Ta có: 5 + 3 = 8. Đổi 8 sang hệ nhị phân là 1000₂. Kết quả hoàn toàn chính xác."
          }
        ]
      }
    },
    {
      id: "practice-b4-9",
      badge: "Bài 9 – 2 phút",
      title: "Bài 9 – Tìm Lỗi Sai Trong Phép Cộng Nhị Phân",
      duration: "2 phút",
      type: "exercise",
      description: "Phát hiện và sửa lỗi quên bit nhớ (carry) trong bài làm học sinh.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 2 phút. Khắc phục lỗi sai kinh điển khi cộng nhị phân.",
        requirements: [
          "Một học sinh làm bài tập cộng nhị phân như sau:\n    101₂\n  + 011₂\n  ------\n    110₂",
          "Câu hỏi: Bạn học sinh trên đã làm sai ở bước nào? Hãy chỉ rõ nguyên nhân và ghi lại kết quả đúng."
        ],
        qaList: [
          {
            q: "Học sinh sai ở đâu và kết quả đúng là gì?",
            a: "Đáp án: Học sinh bị sai do QUÊN BIT NHỚ (Carry). Ở cột ngoài cùng bên phải: 1 + 1 = 10 thì phải ghi 0 và nhớ 1 sang cột thứ hai. Cột thứ hai có 0 + 1 = 1, cộng thêm 1 nhớ lại thành 10 (ghi 0 nhớ 1 sang cột ba). Cột ba có 1 + 0 = 1, cộng thêm 1 nhớ thành 10 (ghi 0 hạ 1). Kết quả đúng bắt buộc phải là 1000₂ (tương ứng số 8, trong khi 110₂ chỉ là số 6)."
          }
        ]
      }
    },
    {
      id: "practice-b4-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử Thách Tổng Hợp: Tư Vấn Mua Laptop",
      duration: "6 phút",
      type: "exercise",
      description: "Lựa chọn cấu hình laptop tối ưu trong 3 máy cho học sinh học lập trình và đa nhiệm.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Đánh giá năng lực tư vấn cấu hình toàn diện.",
        requirements: [
          "Tình huống: Một học sinh cần mua laptop để học online, học lập trình, mở nhiều tab trình duyệt, lưu tài liệu và thỉnh thoảng chỉnh sửa ảnh. Cửa hàng đề xuất 3 cấu hình cùng tầm giá:\n- Máy A: CPU khá | RAM 4 GB | SSD 1 TB\n- Máy B: CPU khá | RAM 16 GB | SSD 512 GB\n- Máy C: CPU rất mạnh | RAM 8 GB | HDD 1 TB",
          "Nhiệm vụ học sinh:\n1. Chọn chiếc máy tính phù hợp và tối ưu nhất cho nhu cầu trên.\n2. Giải thích chi tiết lý do lựa chọn.\n3. Chỉ ra nhược điểm lớn của 2 máy còn lại.\n4. Nếu có thêm một khoản ngân sách nhỏ sau này, em sẽ ưu tiên nâng cấp thành phần nào trước?"
        ],
        submissionHint: "Đáp án tham khảo chuẩn:\n• Lựa chọn tối ưu: Chọn MÁY B.\n• Lý do: RAM 16 GB đảm bảo chạy mượt mà đa nhiệm (nhiều tab Chrome + phần mềm lập trình); Ổ SSD 512 GB cho tốc độ khởi động và mở file tức thì, dung lượng 512 GB là rất thoải mái cho học tập.\n• Nhược điểm 2 máy kia: Máy A có RAM 4 GB quá ít, sẽ bị giật lag khi mở nhiều tab dù SSD 1 TB rất lớn. Máy C có CPU mạnh nhưng dùng ổ cơ HDD sẽ khiến tốc độ mở máy và nạp ứng dụng rất chậm chạp.\n• Nâng cấp tiếp theo: Nếu cần thêm không gian lưu trữ sau vài năm có thể nâng cấp SSD lên 1TB hoặc mua thêm ổ cứng cắm ngoài/Cloud.",
        scoring: [
          { level: "Đạt (7-8đ)", desc: "Chọn đúng Máy B và nêu được lý do liên quan đến RAM 16GB." },
          { level: "Khá (9đ)", desc: "Phân tích được đầy đủ ưu điểm Máy B và nhược điểm (RAM 4GB của Máy A, HDD của Máy C)." },
          { level: "Xuất sắc (10đ)", desc: "Phân tích sâu sắc cơ chế điểm nghẽn hiệu năng, hiểu mối quan hệ phối hợp giữa CPU, RAM và SSD." }
        ]
      }
    },
    {
      id: "practice-b4-minitest",
      badge: "Mini Test – 5 phút",
      title: "Mini Test Đánh Giá Năng Lực Cuối Buổi (7 Câu Trắc Nghiệm)",
      duration: "5 phút",
      type: "quiz",
      description: "7 câu hỏi trắc nghiệm tương tác đánh giá độ hiểu sâu toàn bộ kiến thức Bài 4.",
      content: {
        objective: "Đánh giá mức độ tiếp thu 8 kiến thức cốt lõi sau 90 phút học tập.",
        questions: [
          {
            q: "Câu 1: CPU có nhiệm vụ chính là gì trong hệ thống máy tính?",
            options: [
              "A. Lưu trữ dữ liệu lâu dài",
              "B. Thực hiện chương trình và xử lí các phép toán",
              "C. Hiển thị hình ảnh lên màn hình",
              "D. Kết nối máy tính với mạng Internet"
            ],
            answer: "B",
            explanation: "CPU là bộ xử lý trung tâm, có nhiệm vụ thực thi các lệnh của chương trình và xử lý tính toán số học & logic."
          },
          {
            q: "Câu 2: Bộ nhớ nào sau đây thường bị mất sạch dữ liệu khi tắt máy tính?",
            options: [
              "A. Ổ cứng thể rắn SSD",
              "B. Ổ đĩa cứng cơ học HDD",
              "C. Bộ nhớ truy cập ngẫu nhiên RAM",
              "D. Thẻ nhớ ngoài USB"
            ],
            answer: "C",
            explanation: "RAM là bộ nhớ trong khả biến (Volatile Memory), dữ liệu sẽ biến mất khi không còn nguồn điện."
          },
          {
            q: "Câu 3: Thiết bị nào sau đây là bộ nhớ lưu trữ dữ liệu lâu dài?",
            options: [
              "A. Bộ nhớ RAM",
              "B. Ổ cứng thể rắn SSD",
              "C. Bộ nhớ đệm Cache",
              "D. Thanh ghi Register"
            ],
            answer: "B",
            explanation: "SSD là thiết bị lưu trữ thứ cấp bền vững (Non-volatile), dữ liệu vẫn tồn tại an toàn khi tắt máy."
          },
          {
            q: "Câu 4: Kết quả của phép toán logic '1 AND 0' là bao nhiêu?",
            options: [
              "A. 0",
              "B. 1"
            ],
            answer: "A",
            explanation: "Phép AND chỉ bằng 1 khi cả hai đầu vào cùng bằng 1. Do đó 1 AND 0 = 0."
          },
          {
            q: "Câu 5: Kết quả của phép toán logic '1 OR 0' là bao nhiêu?",
            options: [
              "A. 0",
              "B. 1"
            ],
            answer: "B",
            explanation: "Phép OR bằng 1 khi có ít nhất một đầu vào bằng 1. Do đó 1 OR 0 = 1."
          },
          {
            q: "Câu 6: Kết quả của phép toán logic 'NOT 1' là bao nhiêu?",
            options: [
              "A. 0",
              "B. 1"
            ],
            answer: "A",
            explanation: "Phép NOT đảo ngược giá trị: NOT 1 = 0."
          },
          {
            q: "Câu 7: Trong hệ nhị phân, kết quả của phép tính '1 + 1' bằng bao nhiêu?",
            options: [
              "A. 1",
              "B. 10",
              "C. 11",
              "D. 2"
            ],
            answer: "B",
            explanation: "Trong hệ đếm nhị phân (cơ số 2), số 2 được biểu diễn là 10₂ (ghi 0, nhớ 1 sang hàng bên trái)."
          }
        ]
      }
    },
    {
      id: "practice-b4-summary",
      badge: "Tổng Kết Buổi Học",
      title: "Chốt 8 Điểm Cốt Lõi, Cẩm Nang Sư Phạm Gia Sư & Tiêu Chí Đánh Giá",
      duration: "Tổng kết",
      type: "exercise",
      description: "8 ý cốt lõi học sinh tự nói lại, 5 cẩm nang sư phạm gia sư và tiêu chí đánh giá năng lực.",
      content: {
        objective: "Khắc sâu toàn bộ kiến thức Bài 4 và cung cấp hướng dẫn sư phạm chuẩn mực cho gia sư.",
        knowledgeNotice: "📌 8 Ý KIẾN THỨC ĐINH HỌC SINH PHẢI TỰ NÓI LẠI TRƯỚC KHI KẾT THÚC BUỔI:\n1. CPU: Bộ xử lí trung tâm (ALU tính toán, CU điều khiển).\n2. RAM: Vùng nhớ làm việc tạm thời, mất điện là mất dữ liệu (Volatile).\n3. SSD/HDD: Thiết bị lưu trữ dữ liệu lâu dài, tắt máy dữ liệu vẫn còn.\n4. Mainboard: Bảng mạch chính kết nối và truyền tín hiệu giữa các linh kiện.\n5. RAM ≠ Storage: Dung lượng lưu trữ (SSD/HDD) khác hoàn toàn dung lượng làm việc (RAM).\n6. AND: TẤT CẢ đầu vào phải đúng (bằng 1) thì đầu ra mới bằng 1.\n7. OR: ÍT NHẤT MỘT đầu vào đúng (bằng 1) thì đầu ra bằng 1.\n8. NOT: Đảo ngược giá trị logic (0 thành 1, 1 thành 0); 1 + 1 = 10₂ và mạch logic kết hợp tạo thành mạch tính toán số học.",
        table: {
          headers: ["Khoảng thời gian", "Nội dung hoạt động sư phạm", "Mục tiêu trọng tâm cần đạt"],
          rows: [
            ["0–8 phút", "Khởi động & Ôn Bài 3", "Đặt tình huống cấu hình i5/8GB/512GB ➜ Nhận diện CPU ≠ RAM ≠ SSD"],
            ["8–25 phút", "Thiết bị bên trong & Mainboard", "Nắm vững vai trò Mainboard, CPU (ALU số học & logic, CU điều khiển)"],
            ["25–38 phút", "CPU, RAM, ROM, Bộ nhớ ngoài", "Phân biệt RAM (tạm thời) vs ROM (firmware) vs Storage (lâu dài)"],
            ["38–48 phút", "Thông số hiệu năng + HDD/SSD", "Mô hình phối hợp 3 tầng (Tủ hồ sơ ➜ Bàn làm việc ➜ Nhân viên xử lý)"],
            ["48–60 phút", "Mạch Logic AND, OR, NOT", "Học bảng chân trị qua tình huống đời sống (Khóa cửa, Máy lạnh)"],
            ["60–68 phút", "Cộng nhị phân & Mạch cộng", "Thành thạo 4 quy tắc cộng, xử lý bit nhớ (Carry) & Mạch cộng 2 bit"],
            ["68–86 phút", "10 Bài Luyện Tập Thực Hành", "Rèn luyện tư duy phân tích điểm nghẽn và tính toán logic nhị phân"],
            ["86–88 phút", "Mini Test 7 Câu Cuối Buổi", "Đánh giá mức độ tiếp thu và khắc phục lỗ hổng kiến thức"],
            ["88–90 phút", "Chốt 8 Ý & Giao Bài Về Nhà", "Học sinh tự trình bày lại 8 ý cốt lõi và nhận 4 phần bài tập về nhà"]
          ]
        },
        criteria: [
          { level: "Mức Đạt (5-6.5đ)", desc: "Nhận diện được CPU, RAM, ROM, Storage; phân biệt được RAM và Storage; tính được các phép toán AND, OR, NOT; cộng được số nhị phân đơn giản." },
          { level: "Mức Khá (7-8.5đ)", desc: "Đọc được cấu hình máy tính thực tế; giải thích được vai trò từng thành phần; hiểu mối quan hệ phối hợp CPU – RAM – Storage; sử dụng thành thạo bảng chân trị; tính được phép cộng nhị phân có nhớ." },
          { level: "Mức Xuất Sắc (9-10đ)", desc: "Không đánh giá máy tính chỉ dựa trên một thông số (GHz); phân tích chính xác điểm nghẽn hiệu năng trong tình huống thực tế; biết tư vấn cấu hình tối ưu theo ngân sách; giải thích được cách các cổng logic kết hợp thành mạch tính toán nhị phân; tự nói lại lưu loát 8 ý cốt lõi không cần tài liệu." }
        ]
      }
    }
  ]
}
