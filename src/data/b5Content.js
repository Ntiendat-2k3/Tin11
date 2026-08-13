export const b5Content = {
  warmUp: {
    question: "Vì sao cùng là cổng USB nhưng cái thì sạc được, cái thì không?",
    description: "Em cắm cáp sạc vào cổng USB-A của laptop nhưng điện thoại không sạc. Cắm sang cổng USB-C thì sạc bình thường. Mỗi chuẩn kết nối có 'ngôn ngữ' riêng và được thiết kế cho công việc khác nhau. Sau bài này, em sẽ không bao giờ cắm nhầm hay mua nhầm dây cáp nữa."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Các chuẩn kết nối có dây thông dụng",
      subsections: [
        {
          heading: "Nhóm USB — Kết nối thiết bị đa năng",
          text: "USB (Universal Serial Bus) là chuẩn kết nối phổ biến nhất thế giới, được thiết kế để 'đa năng' — từ chuột bàn phím đến ổ cứng di động đến sạc điện thoại.",
          points: [
            "USB-A: Hình chữ nhật dẹt, 1 chiều cắm, rất phổ biến trên máy tính để bàn và laptop đời cũ. Tốc độ: USB 2.0 (~480 Mbps), USB 3.0 (~5 Gbps — thường cổng màu xanh).",
            "USB-C: Hình oval nhỏ, 2 chiều cắm được (không phân biệt chiều như USB-A), hỗ trợ sạc nhanh, truyền dữ liệu tốc độ cao và xuất hình ảnh ra màn hình. Đang thay thế USB-A dần dần trên thiết bị mới.",
            "Micro-USB & Lightning: Cổng nhỏ dùng cho điện thoại đời cũ (Micro-USB phổ biến trên Android cũ, Lightning là cổng riêng của Apple iPhone đến 2022).",
            "Mẹo nhớ: Nhìn màu cổng USB trên laptop/PC — Đen = USB 2.0 (chậm hơn), Xanh dương = USB 3.0 (nhanh hơn). Nên cắm ổ cứng ngoài vào cổng xanh để copy file nhanh hơn nhiều."
          ]
        },
        {
          heading: "Nhóm kết nối Hình ảnh & Âm thanh",
          text: "Các cổng này chuyên dụng để xuất tín hiệu hình ảnh (và âm thanh) từ máy tính ra màn hình ngoài, TV, máy chiếu.",
          points: [
            "HDMI (High Definition Multimedia Interface): Truyền cả hình ảnh HD/4K lẫn âm thanh qua 1 dây. Phổ biến nhất cho TV và máy chiếu. Thấy ở hầu hết laptop và TV hiện đại.",
            "DisplayPort: Tương tự HDMI nhưng hỗ trợ tần số quét cao hơn (144Hz, 240Hz) và nhiều màn hình kết nối chuỗi (daisy-chain). Phổ biến trong màn hình gaming và workstation đồ họa.",
            "VGA (Video Graphics Array): Cổng hình thang cũ màu xanh lam, chỉ hình ảnh, không âm thanh, chất lượng thấp hơn. Dần bị loại bỏ nhưng vẫn thấy ở máy chiếu, màn hình cũ.",
            "Mẹo nhớ: HDMI = phòng khách (TV, máy chiếu). DisplayPort = phòng gaming và studio đồ họa."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Chuẩn kết nối", "Công dụng chính", "Tốc độ / Chất lượng", "Gặp ở đâu?"],
        rows: [
          ["USB-A", "Thiết bị ngoại vi, lưu trữ", "2.0: 480Mbps | 3.0: 5Gbps", "Laptop, PC, hub USB"],
          ["USB-C", "Sạc, dữ liệu, xuất hình", "Đến 40Gbps (Thunderbolt)", "Laptop mới, điện thoại Android mới"],
          ["HDMI", "Hình ảnh + âm thanh ra TV/màn hình", "4K@60Hz, 8K (HDMI 2.1)", "TV, laptop, máy chiếu"],
          ["DisplayPort", "Hình ảnh tần số cao ra màn hình", "4K@144Hz, 8K@60Hz", "Màn hình gaming, workstation"],
          ["LAN (RJ45)", "Mạng có dây (Ethernet)", "1Gbps - 10Gbps", "Router, switch, laptop cao cấp"]
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. Các chuẩn kết nối không dây",
      subsections: [
        {
          heading: "Bluetooth — Kết nối thiết bị cá nhân tầm gần",
          text: "Bluetooth là chuẩn không dây tầm ngắn (~10 mét), thiết kế cho các thiết bị cá nhân không cần tốc độ truyền cao nhưng cần tiết kiệm pin.",
          points: [
            "Ứng dụng: Tai nghe không dây, loa Bluetooth, chuột/bàn phím không dây, đồng hồ thông minh, kết nối xe hơi với điện thoại.",
            "Tốc độ: ~2-3 Mbps (Bluetooth 5.x) — đủ cho âm thanh chất lượng cao nhưng không đủ để truyền file lớn nhanh.",
            "Bluetooth Low Energy (BLE): Phiên bản tiết kiệm pin tối đa, dùng cho thiết bị IoT, vòng tay thể thao, đèn thông minh."
          ]
        },
        {
          heading: "Wi-Fi — Kết nối mạng không dây",
          text: "Wi-Fi (IEEE 802.11) là chuẩn kết nối mạng không dây, cho phép kết nối Internet và truyền dữ liệu tốc độ cao trong phạm vi vài chục đến vài trăm mét.",
          points: [
            "Tầm hoạt động: Trong nhà ~30-50m, ngoài trời (không chướng ngại vật) đến vài trăm mét.",
            "Các thế hệ: Wi-Fi 4 (802.11n, phổ biến cũ), Wi-Fi 5 (802.11ac, phổ biến hiện nay), Wi-Fi 6/6E (802.11ax, nhanh hơn và ổn định trong môi trường đông thiết bị).",
            "Tốc độ: Wi-Fi 5 đạt đến 3.5 Gbps lý thuyết. Thực tế phụ thuộc khoảng cách, tường cản và số thiết bị chia sẻ cùng lúc."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Chuẩn không dây", "Tầm hoạt động", "Tốc độ truyền", "Ứng dụng điển hình"],
        rows: [
          ["NFC", "Vài cm (< 10cm)", "~400 Kbps", "Thanh toán chạm, thẻ xe bus, tag thông minh"],
          ["Bluetooth", "~10 mét", "~2-3 Mbps", "Tai nghe, loa, chuột không dây, smartwatch"],
          ["Wi-Fi", "30-100+ mét", "Đến 3.5 Gbps", "Internet, chia sẻ file trong mạng nội bộ"],
          ["Hồng ngoại (IR)", "< 5 mét, cần thẳng hướng", "Rất thấp", "Remote TV, điều hòa không khí"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Băng thông và Tính toán thời gian truyền dữ liệu",
      subsections: [
        {
          heading: "Băng thông (Bandwidth) là gì?",
          text: "Băng thông là lượng dữ liệu tối đa có thể truyền qua kênh kết nối trong 1 giây. Đơn vị phổ biến: Mbps (Megabit/giây) và Gbps (Gigabit/giây).",
          points: [
            "Chú ý quan trọng về đơn vị: 1 byte = 8 bit. Khi nhà mạng nói 'tốc độ 100 Mbps' nghĩa là 100 Megabit/giây, KHÔNG phải 100 MB (Megabyte)/giây.",
            "Tốc độ thực tế luôn thấp hơn lý thuyết vì có overhead (chi phí giao thức), nhiễu tín hiệu và chia sẻ băng thông với nhiều người.",
            "Ví dụ tính toán: File 4 GB qua USB 2.0 (480 Mbps): 4 GB = 4×8 = 32 Gb = 32.000 Mb. Thời gian = 32.000 / 480 ≈ 67 giây (lý thuyết). Thực tế thường chậm hơn 30-50%."
          ]
        },
        {
          heading: "So sánh băng thông thực tế của các chuẩn kết nối",
          text: "Bảng dưới giúp em hiểu tại sao phải chọn đúng chuẩn kết nối cho từng tác vụ — sai chuẩn có thể làm chậm tốc độ xuống hàng trăm lần.",
          points: [
            "USB 2.0 (~60 MB/s thực tế) vs USB 3.0 (~400 MB/s thực tế): Chênh nhau ~7 lần. Copy 100GB phim: USB 2.0 mất ~28 phút, USB 3.0 chỉ mất ~4 phút.",
            "Wi-Fi 5 (~300 Mbps thực tế) vs Ethernet Gigabit (~940 Mbps thực tế): Có dây nhanh hơn và ổn định hơn không dây, đặc biệt khi nhiều người cùng dùng.",
            "Bluetooth (~2 Mbps thực tế): Chỉ phù hợp âm thanh và thiết bị nhỏ. Tuyệt đối không dùng để truyền file lớn."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Driver và Plug & Play",
      functions: [
        {
          name: "Driver (Trình điều khiển thiết bị) là gì?",
          desc: "Driver là phần mềm trung gian giúp HĐH 'hiểu ngôn ngữ' của phần cứng cụ thể. Mỗi thiết bị (máy in, card đồ họa, webcam) có driver riêng. Không có driver đúng → HĐH nhận ra thiết bị nhưng không điều khiển được."
        },
        {
          name: "Plug and Play (PnP) — Cắm là chạy",
          desc: "Công nghệ cho phép HĐH tự động nhận diện, tìm kiếm và cài driver cho thiết bị mới được cắm vào — không cần người dùng thao tác thủ công. Ví dụ: cắm USB flash drive vào Windows, ổ đĩa tự xuất hiện trong File Explorer ngay lập tức."
        },
        {
          name: "Khi nào cần cài driver thủ công?",
          desc: "Thiết bị đặc biệt như card đồ họa rời (GPU), máy in chuyên dụng, thiết bị âm thanh chuyên nghiệp thường cần tải driver từ trang web nhà sản xuất về cài thủ công để hoạt động đầy đủ tính năng và hiệu năng tối ưu."
        },
        {
          name: "Cổng LAN (RJ45) và ưu thế so với Wi-Fi",
          desc: "Kết nối có dây qua cáp Ethernet (cổng RJ45) ổn định hơn Wi-Fi vì không bị nhiễu sóng vô tuyến, độ trễ thấp hơn (ping thấp hơn). Lý tưởng cho gaming online, video call quan trọng và truyền file lớn nhanh chóng."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Thực hành: Kiểm tra thiết bị và kết nối trên máy",
      steps: [
        {
          step: "Mở Device Manager kiểm tra tất cả thiết bị kết nối",
          detail: "Nhấn Win + X → Chọn Device Manager (Trình quản lý thiết bị). Đây là nơi hiển thị toàn bộ phần cứng mà Windows đã nhận ra. Nếu thiết bị nào có dấu chấm than (!) màu vàng → driver đang bị lỗi hoặc thiếu."
        },
        {
          step: "Tính thời gian truyền file để chọn đúng cổng kết nối",
          detail: "Bài toán: Em muốn copy 50GB phim từ ổ cứng ngoài vào laptop. Ổ cứng hỗ trợ USB 3.0. Laptop có cả cổng USB 2.0 (màu đen) và USB 3.0 (màu xanh). → Cắm vào USB 3.0 (~400 MB/s): 50.000 MB / 400 = 125 giây ≈ 2 phút. → Cắm vào USB 2.0 (~60 MB/s): 50.000 / 60 ≈ 833 giây ≈ 14 phút. Tiết kiệm 12 phút chỉ bằng cách chọn đúng cổng!"
        },
        {
          step: "Kiểm tra chuẩn Wi-Fi và cổng kết nối của laptop",
          detail: "Nhấn Win + I → System → About → Bấm Device Manager → Mở rộng mục 'Network Adapters'. Đọc tên Wi-Fi adapter để biết hỗ trợ Wi-Fi 5 hay Wi-Fi 6. Mở rộng 'Universal Serial Bus controllers' để xem có bao nhiêu cổng USB và thế hệ nào."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Em muốn kết nối điện thoại vào máy tính để thanh toán tiền học phí bằng cách chạm thẻ học sinh vào điện thoại. Chuẩn kết nối không dây nào được dùng trong tình huống này?",
      options: [
        "A. Bluetooth — tầm ngắn, tiết kiệm pin, phù hợp thiết bị cá nhân.",
        "B. Wi-Fi — tốc độ cao, phù hợp truyền dữ liệu lớn.",
        "C. NFC (Near Field Communication) — hoạt động ở tầm vài cm, dùng cho thanh toán chạm.",
        "D. Hồng ngoại (Infrared) — điều khiển từ xa, cần thẳng hướng."
      ],
      answer: "C",
      explanation: "NFC (Near Field Communication) hoạt động ở khoảng cách rất ngắn (dưới 10cm), tiêu thụ năng lượng cực thấp và được thiết kế đặc biệt cho giao dịch nhanh như thanh toán chạm (Apple Pay, Google Pay, thẻ ngân hàng contactless, thẻ xe bus). Đây là chuẩn không dây duy nhất trong danh sách phù hợp với tình huống này."
    },
    {
      question: "File có dung lượng 2 GB được truyền qua kết nối Bluetooth tốc độ 2 Mbps. Thời gian truyền xấp xỉ là bao nhiêu? (bỏ qua overhead)",
      options: [
        "A. Khoảng 8 giây.",
        "B. Khoảng 8.000 giây (hơn 2 giờ).",
        "C. Khoảng 133 giây (hơn 2 phút).",
        "D. Khoảng 1.000 giây (gần 17 phút)."
      ],
      answer: "B",
      explanation: "Bước 1 — Đổi đơn vị: 2 GB = 2 × 1.024 MB = 2.048 MB = 2.048 × 8 Mb = 16.384 Mb. Bước 2 — Tính thời gian: 16.384 Mb ÷ 2 Mbps = 8.192 giây ≈ 8.000 giây (hơn 2 giờ!). Kết luận: Bluetooth TUYỆT ĐỐI không dùng để truyền file lớn. Đây là lý do tại sao em phải dùng USB hoặc Wi-Fi khi cần copy file giữa điện thoại và máy tính."
    }
  ],
  examTypes: [
    "Cho hình ảnh hoặc mô tả cổng kết nối → yêu cầu gọi tên chính xác và nêu công dụng (USB-A, USB-C, HDMI, DisplayPort, LAN RJ45).",
    "So sánh Bluetooth vs Wi-Fi vs NFC vs Hồng ngoại theo tầm hoạt động, tốc độ và ứng dụng thực tế phù hợp.",
    "Bài toán tính thời gian truyền dữ liệu dựa trên dung lượng file và băng thông cho trước (lưu ý đổi byte sang bit)."
  ],
  homework: [
    "Quan sát laptop và điện thoại của em: liệt kê toàn bộ cổng kết nối có dây và chuẩn không dây đang được hỗ trợ.",
    "So sánh và giải thích: vì sao thanh toán NFC (chạm thẻ) lại yêu cầu đưa sát thiết bị (vài cm), trong khi Wi-Fi có thể dùng cách xa hàng chục mét?",
    "Tính thời gian truyền 1 file 10GB qua USB 3.0 (~5 Gbps) và so sánh với qua Bluetooth (~2 Mbps) — rút ra nhận xét thực tế khi chọn thiết bị."
  ]
}
