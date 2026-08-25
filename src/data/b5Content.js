/**
 * Dữ liệu bài giảng Bài 5: Kết nối máy tính với các thiết bị số
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: 90 phút)
 * Định hướng: Kiến thức cốt lõi chung (CS & ICT)
 */
export const b5Content = {
  warmUp: {
    question: "Laptop chỉ có cổng USB-C thì có cắm trực tiếp được USB flash drive chuẩn USB-A không? Và cổng USB-C nào cũng xuất được hình ảnh ra TV/máy chiếu?",
    description: "Câu trả lời là: KHÔNG! USB-A và USB-C khác nhau về hình dáng vật lý, không thể cắm trực tiếp nếu không có đầu chuyển (Adapter/Hub). Đồng thời, không phải mọi cổng USB-C đều có khả năng xuất hình ảnh. Hiểu đúng bản chất các cổng có dây, chuẩn không dây (Bluetooth, Wi-Fi, NFC) và vai trò của Driver giúp em làm chủ kết nối thiết bị số và tự tin xử lý mọi sự cố kết nối trong thực tế."
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mục Tiêu Buổi Học & Khung Phân Bổ 90 Phút",
      subsections: [
        {
          heading: "1. Mục tiêu buổi học – Chuẩn năng lực gia sư",
          points: [
            "Phân biệt rành mạch: Thiết bị vào (Input), Thiết bị ra (Output) và Thiết bị vào-ra (Input/Output).",
            "Nhận biết chính xác các thiết bị số: Bàn phím, chuột, webcam, micro, màn hình, máy in, loa, tai nghe, USB flash drive.",
            "Nhận biết và hiểu công dụng của các cổng kết nối có dây: USB-A, USB-C, HDMI, DisplayPort, Ethernet / RJ45.",
            "Nhận biết và phân biệt các chuẩn kết nối không dây: Bluetooth, Wi-Fi, NFC, Hồng ngoại (Infrared).",
            "Hiểu bản chất và vai trò của Driver (Trình điều khiển thiết bị) trong việc kết nối phần cứng với hệ điều hành.",
            "Kỹ năng thực hành: Biết cách chọn giải pháp kết nối tối ưu theo nhu cầu và thực hiện quy trình xử lý lỗi kết nối cơ bản."
          ]
        },
        {
          heading: "2. Khung phân bổ thời gian buổi học 90 phút",
          points: [
            "0–8 phút: Ôn Bài 4 + Tình huống khởi động phân biệt cổng cắm.",
            "8–22 phút: Bản chất & Phân loại thiết bị Vào – Ra – Vào/Ra.",
            "22–38 phút: Các cổng kết nối có dây (USB-A, USB-C, HDMI, DisplayPort, RJ45).",
            "38–48 phút: Các chuẩn kết nối không dây (Bluetooth, Wi-Fi, NFC, Hồng ngoại).",
            "48–55 phút: Trình điều khiển (Driver) & Quy trình xử lý lỗi kết nối 6 bước.",
            "55–82 phút: 10 bài luyện tập thực hành tình huống trực tiếp.",
            "82–87 phút: Mini Test 5 câu trắc nghiệm đánh giá chuẩn đầu ra.",
            "87–90 phút: Tổng kết 8 kiến thức cốt lõi và giao nhiệm vụ về nhà."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Tình huống Khởi động Đặt vấn đề",
        text: "Gia sư đặt câu hỏi: 'Một chiếc laptop đời mới chỉ có 2 cổng USB-C, em muốn cắm USB flash drive (đầu USB-A) để copy tài liệu và cắm dây HDMI để chiếu lên TV thì phải làm thế nào? Cổng USB-C có cắm vừa cổng USB-A không?' ➜ Mục tiêu: Học sinh nhận diện ngay sự khác biệt giữa các chuẩn cổng vật lý và ý thức được nhu cầu dùng bộ chuyển đổi (Adapter/Hub) trong thực tế."
      }
    },
    {
      id: "sec-2",
      title: "III.1. Phân Loại Thiết Bị Vào (Input) – Ra (Output) – Vào/Ra (I/O)",
      subsections: [
        {
          heading: "1. Mẹo tư duy xác định loại thiết bị",
          text: "Để phân loại bất kỳ thiết bị số nào, học sinh chỉ cần tự đặt câu hỏi: 'Dữ liệu đang đi VÀO máy tính, đi RA khỏi máy tính, hay đi theo CẢ HAI CHIỀU?'",
          points: [
            "Thiết bị vào (Input Devices): Chuyển thông tin từ thế giới bên ngoài thành dữ liệu nhị phân đưa VÀO máy tính để xử lý. Ví dụ: Bàn phím (gõ ký tự), Chuột (tọa độ con trỏ, nhấp lệnh), Micro (thu tín hiệu âm thanh), Webcam (thu hình ảnh/video), Máy quét / Scanner (chuyển văn bản/ảnh giấy thành file số).",
            "Thiết bị ra (Output Devices): Chuyển dữ liệu nhị phân từ trong máy tính thành thông tin dạng âm thanh, hình ảnh, văn bản in ấn đưa RA NGOÀI cho con người tiếp nhận. Ví dụ: Màn hình (hiển thị giao diện), Loa & Tai nghe (phát âm thanh), Máy in (in văn bản ra giấy), Máy chiếu (chiếu hình ảnh lên màn lớn).",
            "Thiết bị vào-ra (Input/Output - I/O Devices): Trao đổi dữ liệu theo cả 2 chiều (vừa có thể tiếp nhận dữ liệu vào máy, vừa có thể nhận dữ liệu từ máy truyền ra). Ví dụ: Ổ nhớ USB flash, Ổ cứng di động cắm ngoài, Màn hình cảm ứng (Touchscreen - vừa hiển thị ra vừa chạm nhận cảm ứng vào), Modem/Card mạng (vừa gửi vừa nhận gói tin mạng)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Nhóm thiết bị", "Chiều luồng dữ liệu", "Chức năng chính", "Ví dụ tiêu biểu"],
        rows: [
          ["Thiết bị Vào (Input)", "Từ ngoài ➜ VÀO máy tính", "Thu nhận thông tin và gửi vào bộ xử lý CPU", "Bàn phím, Chuột, Micro, Webcam, Máy quét"],
          ["Thiết bị Ra (Output)", "Từ máy tính ➜ RA bên ngoài", "Hiển thị, phát âm thanh, in ấn cho người dùng", "Màn hình, Loa, Tai nghe, Máy in, Máy chiếu"],
          ["Thiết bị Vào - Ra (I/O)", "CẢ 2 CHIỀU (Vào ⇄ Ra)", "Vừa nhập dữ liệu vào vừa xuất dữ liệu ra", "USB flash, Màn hình cảm ứng, Ổ cứng di động, Card mạng"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "III.2, III.3 & III.4. Các Cổng Kết Nối Có Dây Thông Dụng: USB, HDMI, DisplayPort, RJ45",
      subsections: [
        {
          heading: "1. Nhóm cổng USB: USB-A và USB-C",
          text: "USB (Universal Serial Bus) là chuẩn giao tiếp đa năng phổ biến nhất để kết nối các thiết bị ngoại vi:",
          points: [
            "USB-A: Đầu nối hình chữ nhật truyền thống, chỉ cắm được 1 chiều nhất định. Phổ biến trên máy tính để bàn (PC) và laptop đời cũ để cắm chuột, bàn phím, USB. Các thế hệ: USB 2.0 (màu đen, tốc độ 480 Mbps) và USB 3.0 (màu xanh dương, tốc độ 5 Gbps).",
            "USB-C (Type-C): Đầu nối nhỏ gọn hình bầu dục, thiết kế đối xứng hoàn toàn nên cắm được cả hai chiều (không lo bị cắm ngược). Hỗ trợ truyền dữ liệu tốc độ cao, cấp nguồn sạc nhanh công suất lớn (Power Delivery lên tới 100W-240W).",
            "⚠️ LƯU Ý RẤT QUAN TRỌNG: Không phải mọi cổng USB-C đều có khả năng như nhau! Một số cổng USB-C chỉ dùng để truyền dữ liệu và sạc; chỉ những cổng USB-C hỗ trợ chuẩn xuất hình (DisplayPort Alt Mode hoặc Thunderbolt) mới có thể xuất tín hiệu hình ảnh/âm thanh ra màn hình ngoài."
          ]
        },
        {
          heading: "2. Cổng truyền hình ảnh & âm thanh: HDMI vs DisplayPort",
          text: "Các cổng chuyên dụng để truyền tín hiệu hình ảnh độ nét cao và âm thanh đa kênh:",
          points: [
            "HDMI (High-Definition Multimedia Interface): Chuển tín hiệu truyền đồng thời cả HÌNH ẢNH chất lượng cao (Full HD, 4K, 8K) và ÂM THANH qua 1 sợi cáp duy nhất. Rất phổ biến khi kết nối laptop với TV, máy chiếu trường học, màn hình gia đình.",
            "DisplayPort (DP): Tương tự HDMI, truyền cả hình ảnh và âm thanh nhưng hỗ trợ băng thông lớn hơn, tần số quét cực cao (144Hz, 240Hz, 360Hz) và tính năng nối tiếp nhiều màn hình (Daisy Chaining). Thường gặp trên PC máy tính bàn, Card đồ họa rời và màn hình gaming chuyên nghiệp."
          ]
        },
        {
          heading: "3. Cổng mạng có dây Ethernet (RJ45)",
          text: "Cổng cắm hình chữ nhật có lẫy nhựa dùng cho kết nối mạng có dây:",
          points: [
            "Mô hình kết nối: PC / Laptop ➜ Cáp mạng RJ45 ➜ Router / Switch ➜ Mạng Internet.",
            "Ưu điểm so với Wi-Fi: Tốc độ cao, đường truyền cực kỳ ổn định, độ trễ (ping) rất thấp và không bị ảnh hưởng bởi tường chắn hay nhiễu sóng vô tuyến."
          ]
        }
      ],
      functions: [
        {
          name: "🔌 Cổng USB-A",
          desc: "Đầu nối chữ nhật phổ biến kết nối chuột, bàn phím, USB flash; cắm 1 chiều."
        },
        {
          name: "⚡ Cổng USB-C",
          desc: "Đầu nối oval đối xứng cắm 2 chiều; hỗ trợ sạc nhanh, truyền dữ liệu và xuất hình (nếu hỗ trợ DP Alt Mode/Thunderbolt)."
        },
        {
          name: "📺 Cổng HDMI & DisplayPort",
          desc: "Truyền đồng thời cả hình ảnh sắc nét và âm thanh ra TV, máy chiếu, màn hình phụ."
        },
        {
          name: "🌐 Cổng Ethernet (RJ45)",
          desc: "Kết nối mạng Internet có dây tốc độ cao, độ trễ thấp và ổn định vượt trội."
        }
      ]
    },
    {
      id: "sec-4",
      title: "III.5. Các Chuẩn Kết Nối Không Dây: Bluetooth, Wi-Fi, NFC, Hồng Ngoại (IR)",
      subsections: [
        {
          heading: "1. Bốn chuẩn kết nối không dây cốt lõi",
          text: "Các chuẩn kết nối không dây sử dụng sóng điện từ để truyền dữ liệu mà không cần dây cáp vật lý:",
          points: [
            "Bluetooth: Kết nối các thiết bị cá nhân ở khoảng cách gần (tầm hoạt động ~10 mét). Tiêu thụ ít năng lượng, tốc độ vừa phải (~2-3 Mbps). Ứng dụng: Tai nghe không dây, chuột/bàn phím không dây, loa Bluetooth, kết nối điện thoại với ô tô.",
            "Wi-Fi: Kết nối các thiết bị vào mạng không dây cục bộ (WLAN) và Internet ở khoảng cách rộng hơn (trong nhà 30-50m, ngoài trời 100m+). Tốc độ cao (từ hàng trăm Mbps đến hàng Gbps). Ứng dụng: Laptop, smartphone truy cập Internet qua Router Wi-Fi.",
            "NFC (Near Field Communication): Giao tiếp trường gần ở khoảng cách cực kỳ ngắn (dưới 10cm, thường là CHẠM sát vào nhau). Tốc độ thấp nhưng kích hoạt tức thì và bảo mật vật lý cao. Ứng dụng: Thanh toán không tiếp xúc (Apple Pay, Google Pay, thẻ ngân hàng chạm), quét thẻ xe buýt, thẻ học sinh.",
            "Hồng ngoại (Infrared - IR): Sử dụng sóng ánh sáng hồng ngoại để truyền tín hiệu điều khiển định hướng ở tầm gần (< 5m, yêu cầu thẳng hướng không có vật cản). Ứng dụng: Điều khiển từ xa (Remote) của TV, máy lạnh, quạt điện."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Chuẩn không dây", "Khoảng cách hoạt động", "Tốc độ truyền dữ liệu", "Ứng dụng thực tế điển hình"],
        rows: [
          ["Bluetooth", "Tầm gần (~10 mét)", "Trung bình (~2-3 Mbps)", "Tai nghe không dây, chuột, bàn phím, smartwatch"],
          ["Wi-Fi", "Tầm trung (30 – 100 mét)", "Cao (Hàng trăm Mbps đến Gbps)", "Kết nối Laptop/Điện thoại vào mạng Internet qua Router"],
          ["NFC", "Cực gần (< 10 cm, chạm sát)", "Thấp (~400 Kbps)", "Thanh toán chạm, quẹt thẻ xe bus, thẻ từ ra vào cửa"],
          ["Hồng ngoại (IR)", "Ngắn (< 5 mét, thẳng hướng)", "Rất thấp (Gửi mã lệnh)", "Điều khiển từ xa (Remote) TV, điều hòa nhiệt độ"]
        ]
      }
    },
    {
      id: "sec-5",
      title: "III.6 & III.7. Trình Điều Khiển Thiết Bị (Driver) & Quy Trình 6 Bước Xử Lý Lỗi Kết Nối",
      subsections: [
        {
          heading: "1. Driver là gì và tại sao lại cần Driver?",
          text: "Driver (Trình điều khiển thiết bị) là phần mềm đặc thù đóng vai trò làm 'phiên dịch viên' giúp hệ điều hành hiểu và ra lệnh điều khiển một thiết bị phần cứng cụ thể.",
          points: [
            "Mô hình phân tầng giao tiếp: Ứng dụng ➜ Hệ điều hành ➜ Driver ➜ Thiết bị phần cứng.",
            "Hiện tượng khi thiếu hoặc lỗi Driver: Máy tính nhận diện có thiết bị cắm vào nhưng không hoạt động được, hoặc chỉ chạy ở chế độ cơ bản (Ví dụ: Card đồ họa không cài driver thì màn hình bị mờ nhòe, máy in không in được, webcam không mở được).",
            "Cơ chế Plug and Play (PnP - Cắm là chạy): Công nghệ giúp HĐH tự động nhận diện và cài đặt driver cơ bản cho thiết bị ngay khi cắm vào (như chuột, bàn phím, USB)."
          ]
        },
        {
          heading: "2. Quy trình 6 bước xử lý lỗi kết nối phần cứng chuẩn",
          text: "Khi một thiết bị ngoại vi không hoạt động (máy in không nhận, màn hình không lên hình), học sinh cần thực hiện tuần tự theo 6 bước chẩn đoán:",
          points: [
            "Bước 1: Kiểm tra nguồn điện của thiết bị (Đèn nguồn có sáng không? Đã bật công tắc chưa?).",
            "Bước 2: Kiểm tra dây cáp và cổng cắm (Cáp có bị lỏng, đứt gãy, chân cắm bị cong vênh không?).",
            "Bước 3: Thử cắm sang một cổng kết nối khác trên máy tính.",
            "Bước 4: Kiểm tra Hệ điều hành có nhận thiết bị không (Mở Device Manager trên Windows xem thiết bị có dấu chấm than màu vàng '!' không).",
            "Bước 5: Kiểm tra và cài đặt/cập nhật Driver mới nhất từ trang web chính thức của nhà sản xuất.",
            "Bước 6: Thử cắm thiết bị hoặc dây cáp đó sang một máy tính khác để xác định lỗi do thiết bị hay do máy tính của mình."
          ]
        }
      ],
      flowList: [
        {
          title: "Quy Trình 6 Bước Xử Lý Sự Cố Kết Nối Thiết Bị Số Chuẩn Mực",
          subtitle: "Phương pháp tư duy loại trừ nguyên nhân từ phần cứng đến phần mềm",
          steps: [
            {
              num: 1,
              title: "1. Kiểm tra nguồn điện",
              desc: "Xác nhận thiết bị đã được cấp nguồn và bật công tắc On/Off."
            },
            {
              num: 2,
              title: "2. Kiểm tra cáp & đầu cắm",
              desc: "Đảm bảo đầu cáp cắm chặt, không bị lỏng hoặc chân tiếp xúc bị bẩn/hỏng."
            },
            {
              num: 3,
              title: "3. Thử cổng kết nối khác",
              desc: "Cắm thử sang cổng USB/HDMI khác trên thân máy tính để loại trừ cổng hỏng."
            },
            {
              num: 4,
              title: "4. Kiểm tra Device Manager",
              desc: "Xem Windows đã nhận diện phần cứng chưa, có cảnh báo lỗi chấm than (!) không."
            },
            {
              num: 5,
              title: "5. Cập nhật / Cài Driver",
              desc: "Tải và cài đặt đúng phiên bản Driver chuẩn từ nhà sản xuất thiết bị."
            },
            {
              num: 6,
              title: "6. Thử trên máy tính khác",
              desc: "Cách ly lỗi: xác định chắc chắn lỗi do phụ kiện hay do hệ thống máy tính."
            }
          ]
        }
      ]
    },
    {
      id: "sec-6",
      title: "VI. Chốt 8 Kiến Thức Cốt Lõi Buổi Học",
      checkpointCards: [
        {
          title: "1. THIẾT BỊ VÀO (INPUT)",
          detail: "Đưa dữ liệu vào máy tính để xử lý (Bàn phím, Chuột, Micro, Webcam, Máy quét)."
        },
        {
          title: "2. THIẾT BỊ RA (OUTPUT)",
          detail: "Đưa thông tin ra ngoài cho người dùng tiếp nhận (Màn hình, Loa, Tai nghe, Máy in, Máy chiếu)."
        },
        {
          title: "3. THIẾT BỊ VÀO-RA (I/O)",
          detail: "Trao đổi dữ liệu theo cả hai chiều (USB flash, Ổ cứng di động, Màn hình cảm ứng, Card mạng)."
        },
        {
          title: "4. CỔNG USB-A & USB-C",
          detail: "USB-A hình chữ nhật cắm 1 chiều. USB-C hình oval đối xứng cắm 2 chiều; hỗ trợ sạc nhanh, truyền dữ liệu và xuất hình (nếu hỗ trợ)."
        },
        {
          title: "5. HDMI & DISPLAYPORT",
          detail: "Cổng truyền đồng thời cả hình ảnh sắc nét và âm thanh chất lượng cao ra TV, máy chiếu, màn hình phụ."
        },
        {
          title: "6. ETHERNET (RJ45)",
          detail: "Cổng kết nối mạng có dây tốc độ cao, ổn định, độ trễ thấp vượt trội so với Wi-Fi."
        },
        {
          title: "7. KHÔNG DÂY (BT, WI-FI, NFC, IR)",
          detail: "Bluetooth (cá nhân gần ~10m); Wi-Fi (mạng không dây); NFC (chạm cực gần <10cm); Hồng ngoại (điều khiển thẳng hướng)."
        },
        {
          title: "8. DRIVER (TRÌNH ĐIỀU KHIỂN)",
          detail: "Cầu nối phần mềm giúp hệ điều hành hiểu và điều khiển các thiết bị phần cứng hoạt động."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|               BÀI 5: KẾT NỐI MÁY TÍNH VỚI CÁC THIẾT BỊ SỐ                          |
+-----------------------------------------------------------------------------------+
       |
       +---> [1] PHÂN LOẠI THIẾT BỊ (THEO CHIỀU DỮ LIỆU)
       |       * THIẾT BỊ VÀO (Input): Bàn phím, Chuột, Micro, Webcam, Máy quét
       |       * THIẾT BỊ RA (Output): Màn hình, Loa, Tai nghe, Máy in, Máy chiếu
       |       * THIẾT BỊ VÀO-RA (I/O): USB flash, Ổ cứng ngoài, Màn hình cảm ứng
       |
       +---> [2] CỔNG KẾT NỐI CÓ DÂY
       |       * USB-A: Chữ nhật cắm 1 chiều, thông dụng cho chuột/phím/USB
       |       * USB-C: Oval đối xứng cắm 2 chiều, sạc nhanh, xuất hình (tùy cổng)
       |       * HDMI: Truyền Hình ảnh + Âm thanh ra TV, Máy chiếu
       |       * DisplayPort: Hình ảnh + Âm thanh tần số quét cao (Màn hình gaming)
       |       * Ethernet (RJ45): Mạng có dây tốc độ cao, ổn định, ping thấp
       |
       +---> [3] CHUẨN KẾT NỐI KHÔNG DÂY
       |       * BLUETOOTH: Thiết bị cá nhân tầm gần ~10m (Tai nghe, Chuột không dây)
       |       * WI-FI: Mạng không dây 30-100m, tốc độ cao (Laptop vào Internet)
       |       * NFC: Giao tiếp chạm cực gần <10cm (Thanh toán Apple/Google Pay, Thẻ xe bus)
       |       * HỒNG NGOẠI (IR): Tầm ngắn thẳng hướng (Remote TV, Điều hòa)
       |
       +---> [4] DRIVER & XỬ LÝ SỰ CỐ
               * DRIVER: Phần mềm cầu nối (Ứng dụng -> HĐH -> Driver -> Phần cứng)
               * 6 BƯỚC XỬ LÝ LỖI:
                 1. Nguồn điện -> 2. Dây cáp/Cổng -> 3. Đổi cổng khác ->
                 4. Device Manager -> 5. Cài Driver -> 6. Thử máy khác`
    }
  ],
  summaryQuiz: [
    {
      question: "Thiết bị nào sau đây thuộc nhóm THIẾT BỊ VÀO (Input Device)?",
      options: [
        "A. Màn hình máy tính",
        "B. Bàn phím",
        "C. Máy in laser",
        "D. Tai nghe"
      ],
      answer: "B",
      explanation: "Bàn phím là thiết bị vào dùng để nhập ký tự và dữ liệu từ bên ngoài vào máy tính. Màn hình, máy in và tai nghe là thiết bị ra."
    },
    {
      question: "Cổng kết nối nào sau đây được sử dụng phổ biến nhất để cắm cáp mạng Ethernet có dây?",
      options: [
        "A. Cổng HDMI",
        "B. Cổng USB-A",
        "C. Cổng RJ45 (Ethernet)",
        "D. Cổng DisplayPort"
      ],
      answer: "C",
      explanation: "Cổng RJ45 (còn gọi là cổng Ethernet hoặc cổng LAN) là chuẩn giao tiếp vật lý chuyên dụng cho kết nối mạng có dây."
    },
    {
      question: "Cáp kết nối chuẩn HDMI có chức năng chính là truyền tải tín hiệu nào?",
      options: [
        "A. Chỉ truyền tín hiệu âm thanh đơn thuần.",
        "B. Chỉ truyền tín hiệu nguồn điện để sạc pin.",
        "C. Truyền đồng thời cả tín hiệu hình ảnh chất lượng cao và âm thanh.",
        "D. Chỉ truyền tín hiệu điều khiển của chuột và bàn phím."
      ],
      answer: "C",
      explanation: "HDMI (High-Definition Multimedia Interface) truyền đồng thời cả tín hiệu hình ảnh sắc nét và âm thanh qua một sợi cáp duy nhất."
    },
    {
      question: "Để kết nối tai nghe không dây với điện thoại hoặc laptop ở khoảng cách gần (trong phòng), chuẩn kết nối nào được sử dụng phù hợp nhất?",
      options: [
        "A. Bluetooth",
        "B. Cáp Ethernet RJ45",
        "C. Sóng Hồng ngoại (IR)",
        "D. Cáp HDMI"
      ],
      answer: "A",
      explanation: "Bluetooth là chuẩn kết nối không dây tầm ngắn (~10m), tiêu thụ ít điện năng, cực kỳ lý tưởng cho các thiết bị cá nhân như tai nghe, chuột không dây."
    },
    {
      question: "Vai trò cốt lõi của Driver (Trình điều khiển thiết bị) trong máy tính là gì?",
      options: [
        "A. Tăng dung lượng lưu trữ cho ổ đĩa cứng.",
        "B. Phần mềm giúp hệ điều hành hiểu và điều khiển các thiết bị phần cứng.",
        "C. Diệt trừ tất cả các loại vi-rút trên mạng Internet.",
        "D. Thay thế hoàn toàn cho bo mạch chủ Mainboard."
      ],
      answer: "B",
      explanation: "Driver là phần mềm trung gian đóng vai trò phiên dịch, giúp hệ điều hành có thể giao tiếp và điều khiển các linh kiện phần cứng hoạt động chính xác."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Phân Loại Thiết Bị Vào (Input), Ra (Output) và Vào-Ra (I/O)",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Cho danh sách các thiết bị số sau: (1) Bàn phím cơ, (2) Màn hình hiển thị, (3) Máy quét tài liệu (Scanner), (4) Máy in màu, (5) Ổ nhớ flash USB, (6) Tai nghe không dây, (7) Webcam ghi hình, (8) Màn hình cảm ứng trên điện thoại. Hãy phân loại các thiết bị trên vào đúng 3 nhóm: Thiết bị vào, Thiết bị ra và Thiết bị vào-ra.",
      method: "⚡ Phương pháp giải nhanh:\n• Xét hướng luồng dữ liệu:\n  - Dữ liệu từ ngoài vào máy tính ➜ Thiết bị vào (Input).\n  - Dữ liệu từ máy tính ra ngoài ➜ Thiết bị ra (Output).\n  - Dữ liệu trao đổi 2 chiều ➜ Thiết bị vào-ra (I/O).",
      solution: "✅ Đáp án & Bảng phân loại chi tiết:\n• Thiết bị vào (Input): (1) Bàn phím cơ, (3) Máy quét tài liệu, (7) Webcam ghi hình.\n• Thiết bị ra (Output): (2) Màn hình hiển thị, (4) Máy in màu, (6) Tai nghe không dây.\n• Thiết bị vào-ra (Input/Output): (5) Ổ nhớ flash USB, (8) Màn hình cảm ứng trên điện thoại."
    },
    {
      title: "Dạng 2: Phân Biệt & Nhận Diện Cổng Kết Nối Có Dây (USB-A, USB-C, HDMI, DisplayPort, RJ45)",
      tag: "Nhận biết & Thông hiểu",
      sampleQuestion: "Một học sinh cắm dây cáp HDMI từ laptop sang máy chiếu nhưng máy chiếu báo 'No Signal'. Nêu 3 nguyên nhân phần cứng có thể xảy ra và cách khắc phục.",
      method: "⚡ Quy trình kiểm tra kết nối hiển thị:\n1. Kiểm tra đầu cáp cắm chặt chưa.\n2. Kiểm tra nguồn phát tín hiệu (Input Source) trên máy chiếu đã chọn đúng cổng HDMI chưa.\n3. Kiểm tra cài đặt xuất màn hình trên laptop (nhấn phím Win + P chọn Duplicate / Extend).",
      solution: "✅ Đáp án & Hướng dẫn xử lý:\n1. Cáp HDMI cắm bị lỏng hoặc hỏng cổng: Rút ra cắm lại thật chặt vào cả laptop và máy chiếu, hoặc đổi dây cáp khác.\n2. Máy chiếu chọn sai cổng đầu vào (Input Source): Dùng remote hoặc nút trên máy chiếu chuyển đúng nguồn sang HDMI 1 hoặc HDMI 2.\n3. Laptop chưa bật chế độ xuất màn hình ngoài: Nhấn tổ hợp phím Win + P trên Windows và chọn chế độ 'Duplicate' (Nhân bản màn hình) hoặc 'Extend' (Mở rộng màn hình)."
    },
    {
      title: "Dạng 3: So Sánh & Lựa Chọn Chuẩn Kết Nối Không Dây (Bluetooth, Wi-Fi, NFC, IR)",
      tag: "Vận dụng Thực tiễn",
      sampleQuestion: "Em hãy đề xuất chuẩn kết nối không dây tối ưu cho 4 tình huống sau và giải thích lý do:\n(a) Kết nối chuột không dây với laptop trong phòng làm việc.\n(b) Kết nối điện thoại thông minh để thanh toán tiền vé xe bus bằng cách chạm vào máy quét.\n(c) Kết nối laptop vào mạng Internet gia đình để tải tệp 20 GB.\n(d) Điều khiển bật/tắt máy điều hòa không khí trong phòng khách.",
      method: "⚡ Khung chọn chuẩn không dây:\n• Khoảng cách gần cá nhân (~10m) ➜ Bluetooth.\n• Chạm cực gần (<10cm), thanh toán ➜ NFC.\n• Tải dữ liệu lớn, Internet ➜ Wi-Fi.\n• Điều khiển từ xa thẳng hướng ➜ Hồng ngoại (IR).",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• (a) Chuột không dây ➜ Dùng BLUETOOTH (tiết kiệm pin, tầm hoạt động ~10m, đủ băng thông phản hồi con trỏ).\n• (b) Thanh toán chạm xe bus ➜ Dùng NFC (khoảng cách chạm < 10cm, kích hoạt tức thì, an toàn bảo mật cao).\n• (c) Tải tệp 20 GB qua Internet ➜ Dùng WI-FI (băng thông lớn hàng trăm Mbps, phạm vi phủ sóng rộng).\n• (d) Điều khiển điều hòa ➜ Dùng HỒNG NGOẠI (IR) (truyền tín hiệu mã lệnh thẳng hướng, chi phí rẻ, bền bỉ)."
    },
    {
      title: "Dạng 4: Vai Trò Của Driver & Chẩn Đoán Lỗi Qua Device Manager",
      tag: "Bẫy Lý thuyết & Kỹ năng Số",
      sampleQuestion: "Một người dùng cắm một chiếc máy in mới mua vào máy tính qua cổng USB. Đèn nguồn máy in đã sáng nhưng khi bấm in văn bản từ Word thì máy tính báo lỗi không tìm thấy máy in. Giải thích nguyên nhân vì sao và hướng dẫn người dùng các bước xử lý.",
      method: "⚡ Phân tích nguyên nhân:\n• Đèn nguồn sáng = Phần cứng đã có điện.\n• Không in được = Hệ điều hành thiếu Driver điều khiển máy in.\n• Hướng xử lý: Tải và cài đặt Driver chính hãng từ website nhà sản xuất.",
      solution: "✅ Đáp án & Hướng dẫn kỹ thuật:\n1. Nguyên nhân: Hệ điều hành Windows chưa có Trình điều khiển (Driver) phù hợp với model máy in đó, nên không thể chuyển đổi lệnh in từ Word thành tín hiệu điều khiển cơ cấu in.\n2. Các bước xử lý:\n   • Bước 1: Mở Device Manager (nhấn Win + X ➜ Device Manager) kiểm tra xem máy in có bị hiện dấu chấm than vàng (!) ở mục Printers / Other devices không.\n   • Bước 2: Truy cập trang web chính thức của hãng sản xuất máy in (Canon, HP, Epson...), tìm kiếm đúng tên model máy in và phiên bản Windows đang dùng.\n   • Bước 3: Tải file cài đặt Driver về và tiến hành cài đặt theo hướng dẫn trên màn hình.\n   • Bước 4: Khởi động lại máy tính và in thử trang kiểm tra."
    },
    {
      title: "Dạng 5: Bài Toán Tình Huống Laptop Thiếu Cổng & Lựa Chọn Bộ Chuyển Đổi (Hub / Dock)",
      tag: "Vận dụng Cao",
      sampleQuestion: "Bạn An sở hữu một chiếc laptop mỏng nhẹ chỉ có duy nhất 2 cổng USB-C. Trong buổi thuyết trình học tập, An cần đồng thời: (1) Cắm chuột có dây đầu USB-A, (2) Cắm USB flash drive đầu USB-A để lấy dữ liệu, (3) Cắm dây cáp HDMI nối máy chiếu, (4) Cắm dây mạng có dây RJ45 do phòng học không có Wi-Fi. Hãy đề xuất giải pháp phần cứng tối ưu nhất cho An và nêu 2 lưu ý quan trọng khi chọn mua phụ kiện.",
      method: "⚡ Phương pháp thiết kế giải pháp mở rộng kết nối:\n• Nhu cầu: 1 USB-C ra nhiều cổng (2 USB-A + 1 HDMI + 1 RJ45).\n• Giải pháp: Sử dụng bộ chia đa năng USB-C Multi-port Hub (hoặc USB-C Docking Station).\n• Lưu ý: Cổng USB-C trên laptop phải hỗ trợ DisplayPort Alt Mode thì cổng HDMI trên Hub mới xuất hình được.",
      solution: "✅ Đáp án & Tư vấn chuẩn xác:\n1. Giải pháp tối ưu: An nên trang bị một bộ chuyển đổi đa năng USB-C Multi-port Hub (gồm tối thiểu 2 cổng USB-A, 1 cổng HDMI, 1 cổng mạng LAN RJ45 và 1 cổng sạc USB-C Pass-through PD).\n2. 2 Lưu ý kỹ thuật quan trọng khi chọn mua:\n   • Lưu ý 1 (Xuất hình ảnh): Phải kiểm tra thông số kỹ thuật của laptop xem cổng USB-C trên máy có hỗ trợ chuẩn xuất hình (DisplayPort over Type-C hoặc Thunderbolt) không. Nếu cổng USB-C chỉ hỗ trợ truyền dữ liệu thông thường thì cắm Hub có cổng HDMI vẫn không thể xuất hình ảnh lên máy chiếu được.\n   • Lưu ý 2 (Cấp nguồn): Nên chọn loại Hub có hỗ trợ sạc ngược (Power Delivery - PD) để có thể vừa cắm sạc laptop vừa sử dụng toàn bộ các thiết bị ngoại vi cùng lúc."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Khảo Sát Thực Tế Các Cổng Kết Nối Trên Thiết Bị Cá Nhân",
      tag: "Thực hành Khảo sát",
      problem: "Quan sát trực tiếp chiếc máy tính (Laptop hoặc PC để bàn) và chiếc điện thoại thông minh em đang sử dụng:",
      tasks: [
        "Nhiệm vụ 1: Chụp ảnh hoặc vẽ lại vị trí các cổng kết nối có trên 2 cạnh bên của laptop (hoặc mặt trước/sau của thùng máy PC).",
        "Nhiệm vụ 2: Lập bảng liệt kê: (1) Tên từng cổng kết nối, (2) Ký hiệu/Màu sắc nhận diện, (3) Chức năng chính của cổng đó trong thực tế.",
        "Nhiệm vụ 3: Liệt kê các chuẩn kết nối không dây (Bluetooth, Wi-Fi, NFC) mà thiết bị của em hỗ trợ và chỉ ra 1 thiết bị thực tế em thường ghép nối."
      ],
      requirements: "Ghi chép cụ thể thông số thực tế, không sao chép máy móc.",
      hint: "Bám sát các mục III.2, III.3, III.4 và III.5 trong bài học.",
      solution: `1 & 2. Bảng Khảo Sát Mẫu Cổng Kết Nối Trên Laptop Cá Nhân:
• Cổng USB-A (Màu xanh dương): Chuẩn USB 3.0 dùng cắm chuột, USB flash với tốc độ truyền 5 Gbps.
• Cổng USB-C: Cổng oval nhỏ gọn dùng để sạc pin (Power Delivery) và truyền dữ liệu tốc độ cao.
• Cổng HDMI: Cổng vát góc dùng để xuất hình ảnh và âm thanh lên màn hình phụ hoặc TV.
• Cổng Audio 3.5mm: Cổng tròn dùng cắm tai nghe hoặc loa ngoài.
• Cổng mạng RJ45 (nếu có): Cổng có nắp gập dùng cắm cáp mạng Internet có dây.

3. Khảo sát Chuẩn Không Dây:
• Wi-Fi 6: Kết nối vào Router Wi-Fi gia đình để học tập trực tuyến.
• Bluetooth 5.2: Kết nối với tai nghe không dây AirPods / Galaxy Buds.
• NFC (trên điện thoại): Dùng để quẹt thẻ ngân hàng hoặc nạp tiền thẻ xe buýt.`
    },
    {
      title: "Bài tập 2: Xây Dựng Sơ Đồ Quy Trình Xử Lý Sự Cố Khi Máy Tính Không Nhận USB",
      tag: "Quy trình Chẩn đoán",
      scenario: "Em cắm chiếc USB flash drive chứa bài thuyết trình vào cổng USB trên laptop nhưng trong File Explorer (This PC) hoàn toàn không xuất hiện biểu tượng ổ đĩa USB.",
      problem: "Hãy xây dựng một quy trình chẩn đoán và khắc phục lỗi tuần tự 5 bước theo đúng nguyên tắc kỹ thuật:",
      tasks: [
        "Bước 1: Kiểm tra vật lý đầu cắm và cổng kết nối.",
        "Bước 2: Thao tác đổi cổng cắm trên thân máy tính.",
        "Bước 3: Hướng dẫn mở Device Manager hoặc Disk Management để kiểm tra trạng thái ổ đĩa.",
        "Bước 4: Cách xử lý khi thiếu hoặc lỗi Driver.",
        "Bước 5: Thao tác kiểm tra cô lập lỗi trên một chiếc máy tính khác."
      ],
      requirements: "Trình bày rõ ràng từng bước thao tác logic và giải thích vì sao thực hiện bước đó.",
      hint: "Dựa vào quy trình xử lý lỗi kết nối trong Mục III.7 của bài học.",
      solution: `Quy trình 5 Bước Xử Lý Khi Máy Không Nhận USB:
• Bước 1 (Kiểm tra vật lý): Rút USB ra, kiểm tra xem chân tiếp xúc kim loại có bị bụi bẩn, rỉ sét hay cong vênh không; thổi sạch bụi và cắm lại thật dứt khoát.
• Bước 2 (Đổi cổng kết nối): Nếu cắm cổng USB phía trước thùng máy (hoặc cạnh trái laptop) không nhận, hãy cắm sang cổng USB phía sau mainboard hoặc cạnh phải máy để loại trừ nguyên nhân cổng cắm bị hỏng.
• Bước 3 (Kiểm tra hệ thống): Nhấn Win + X ➜ Chọn 'Disk Management'. Nếu thấy ổ đĩa có dung lượng nhưng chưa có tên ký tự (như E:, F:), click chuột phải chọn 'Change Drive Letter and Paths...' để gán ký tự ổ đĩa.
• Bước 4 (Xử lý Driver): Nhấn Win + X ➜ Chọn 'Device Manager' ➜ Mở mục 'Universal Serial Bus controllers'. Nếu thấy biểu tượng có dấu '!', click chuột phải chọn 'Update driver' hoặc 'Uninstall device' rồi rút USB cắm lại để Windows tự nạp lại Driver.
• Bước 5 (Thử trên máy khác): Cắm USB sang một chiếc máy tính khác. Nếu máy khác vẫn không nhận ➜ USB đã bị hỏng phần cứng; nếu máy khác nhận bình thường ➜ Vấn đề nằm ở hệ điều hành hoặc cổng cắm của máy ban đầu.`
    },
    {
      title: "Bài tập 3: Giải Thích Bản Chất Kỹ Thuật (3 Câu hỏi Phân tích Sâu)",
      tag: "Bản chất Công nghệ",
      problem: "Đọc kỹ và giải thích ngắn gọn, chính xác 3 câu hỏi bản chất công nghệ sau:",
      tasks: [
        "Câu 1: Phân biệt sự khác nhau cốt lõi giữa cổng HDMI và cổng mạng Ethernet (RJ45) về mục đích sử dụng và loại tín hiệu truyền tải?",
        "Câu 2: Tại sao nói 'Không phải mọi cổng USB-C đều có khả năng xuất hình ảnh và sạc nhanh giống nhau'? Nêu ví dụ minh họa.",
        "Câu 3: Hãy tìm 2 ví dụ thực tế về thiết bị số vừa có chức năng nhận dữ liệu (Vào) vừa có chức năng gửi dữ liệu (Ra) và phân tích luồng dữ liệu của chúng."
      ],
      requirements: "Trả lời mạch lạc, sử dụng đúng thuật ngữ kỹ thuật đã học.",
      hint: "Bám sát các mục III.1, III.2, III.3, III.4 trong bài giảng.",
      solution: `1. Phân biệt HDMI vs RJ45:
• Cổng HDMI: Dùng để truyền tín hiệu ĐA PHƯƠNG TIỆN (Hình ảnh độ nét cao + Âm thanh số) từ máy tính xuất trực tiếp ra thiết bị hiển thị như TV, máy chiếu.
• Cổng RJ45 (Ethernet): Dùng để truyền DỮ LIỆU MẠNG DẠNG GÓI TIN (IP packets) kết nối máy tính với hệ thống mạng Internet / Router, không trực tiếp xuất hình ảnh lên màn hình.

2. Vì sao USB-C không phải cổng nào cũng giống nhau:
• USB-C chỉ là quy chuẩn thiết kế về HÌNH DÁNG VẬT LÝ của đầu cắm. Giao thức điện tử bên trong do nhà sản xuất tích hợp:
  - Một số máy giá rẻ chỉ tích hợp chuẩn USB 2.0/3.0 trên cổng USB-C (chỉ truyền file và sạc chậm 10W).
  - Một số máy cao cấp tích hợp thêm chuẩn Thunderbolt 4 hoặc DisplayPort Alt Mode trên cổng USB-C (cho phép xuất màn hình 4K/8K và sạc nhanh 100W).
• Do đó, nhìn cổng USB-C giống nhau nhưng tính năng có thể hoàn toàn khác nhau.

3. 2 Ví dụ về Thiết bị Vào-Ra (I/O) & Luồng dữ liệu:
• Ví dụ 1 - Ổ nhớ flash USB: Khi người dùng chép file từ máy tính vào USB (USB nhận dữ liệu ➜ Chiều Ra); khi mở file từ USB lên máy tính (USB gửi dữ liệu vào CPU ➜ Chiều Vào).
• Ví dụ 2 - Màn hình cảm ứng (Smartphone / Tablet): Khi màn hình hiển thị hình ảnh phim ảnh ra mắt người xem (Chiều Ra); khi ngón tay người dùng chạm/vuốt để nhập lệnh điều khiển vào hệ thống (Chiều Vào).`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b5-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Phân Loại Thiết Bị Vào, Ra và Vào-Ra",
      duration: "2 phút",
      type: "exercise",
      description: "Phân loại 6 thiết bị số cơ bản vào đúng nhóm Vào, Ra hoặc Vào-Ra.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Nắm vững mẹo tư duy xác định luồng dữ liệu.",
        requirements: [
          "Cho danh sách 6 thiết bị sau: Bàn phím, Màn hình, Micro, Loa, Webcam, Ổ nhớ flash USB.",
          "Nhiệm vụ: Phân loại từng thiết bị vào đúng 3 nhóm: Thiết bị vào, Thiết bị ra, Thiết bị vào-ra."
        ],
        qaList: [
          {
            q: "Kết quả phân loại 6 thiết bị?",
            a: "Đáp án:\n• Thiết bị vào (Input): Bàn phím, Micro, Webcam.\n• Thiết bị ra (Output): Màn hình, Loa.\n• Thiết bị vào-ra (I/O): Ổ nhớ flash USB."
          }
        ]
      }
    },
    {
      id: "practice-b5-2",
      badge: "Bài 2 – 3 phút",
      title: "Bài 2 – Chọn Cổng Kết Nối Phù Hợp",
      duration: "3 phút",
      type: "exercise",
      description: "Lựa chọn chuẩn cổng kết nối chính xác cho từng loại thiết bị ngoại vi.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 3 phút. Ghép nối chính xác cổng cắm và thiết bị.",
        requirements: [
          "Hãy chỉ ra cổng cắm hoặc chuẩn kết nối phù hợp cho 5 tình huống sau:\n1. Cắm ổ nhớ USB flash vào máy tính.\n2. Cắm dây mạng có dây từ router vào laptop.\n3. Kết nối laptop với TV hoặc máy chiếu phòng học.\n4. Kết nối chuột không dây với laptop trong phòng.\n5. Cắm tai nghe có dây vào điện thoại hoặc máy tính."
        ],
        qaList: [
          {
            q: "1. Cắm ổ nhớ USB flash?",
            a: "Đáp án: Dùng cổng USB-A hoặc USB-C (tùy theo chuẩn đầu cắm của USB flash)."
          },
          {
            q: "2. Cắm mạng có dây từ router?",
            a: "Đáp án: Dùng cổng mạng Ethernet (RJ45)."
          },
          {
            q: "3. Nối laptop với TV / Máy chiếu?",
            a: "Đáp án: Dùng cổng HDMI (hoặc DisplayPort / USB-C có hỗ trợ xuất hình)."
          },
          {
            q: "4. Chuột không dây?",
            a: "Đáp án: Dùng chuẩn kết nối không dây Bluetooth (hoặc đầu thu USB Wireless Dongle 2.4GHz)."
          },
          {
            q: "5. Tai nghe có dây?",
            a: "Đáp án: Dùng cổng Audio jack 3.5mm (hoặc cổng USB / USB-C tùy loại tai nghe)."
          }
        ]
      }
    },
    {
      id: "practice-b5-3",
      badge: "Bài 2 – 2 phút",
      title: "Bài 3 – USB-A hay USB-C?",
      duration: "2 phút",
      type: "exercise",
      description: "Xử lý tình huống không tương thích cổng cắm và hiểu rõ tính năng xuất hình của USB-C.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Hiểu rõ sự khác biệt vật lý và tính năng của USB-C.",
        requirements: [
          "Tình huống 1: Laptop của em chỉ có cổng USB-C, trong khi chiếc USB flash drive có đầu cắm USB-A. Em có thể cắm trực tiếp vào laptop được không? Nếu không, cần dùng thiết bị gì?",
          "Tình huống 2: Có phải mọi cổng USB-C trên tất cả các dòng máy tính đều hỗ trợ xuất hình ảnh ra màn hình ngoài không?"
        ],
        qaList: [
          {
            q: "Có cắm trực tiếp USB-A vào cổng USB-C được không?",
            a: "Đáp án: KHÔNG THỂ cắm trực tiếp do khác biệt hình dáng vật lý. Em bắt buộc phải sử dụng một đầu chuyển đổi (Adapter USB-C to USB-A) hoặc bộ chia cổng Hub đa năng."
          },
          {
            q: "Cổng USB-C nào cũng xuất được hình ảnh?",
            a: "Đáp án: KHÔNG. Khả năng xuất hình ảnh phụ thuộc vào việc nhà sản xuất có tích hợp chuẩn DisplayPort Alt Mode hoặc Thunderbolt trên cổng USB-C đó hay không. Một số máy giá rẻ cổng USB-C chỉ hỗ trợ truyền dữ liệu và sạc."
          }
        ]
      }
    },
    {
      id: "practice-b5-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Xử Lý Sự Cố Trình Chiếu Qua HDMI",
      duration: "3 phút",
      type: "exercise",
      description: "Xây dựng quy trình xử lý khi laptop nối TV qua HDMI nhưng chưa lên hình.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Thành thạo thao tác kết nối và thiết lập trình chiếu.",
        requirements: [
          "Tình huống: Giáo viên cắm cáp HDMI từ laptop sang TV trường học nhưng màn hình TV vẫn hiển thị màu đen hoặc báo 'No Signal'.",
          "Nhiệm vụ: Hãy xây dựng quy trình 4 bước kiểm tra và khắc phục sự cố trên."
        ],
        qaList: [
          {
            q: "Quy trình 4 bước khắc phục sự cố HDMI?",
            a: "Đáp án:\n• Bước 1: Kiểm tra hai đầu cáp HDMI đã cắm chặt vào cổng trên laptop và TV chưa.\n• Bước 2: Dùng điều khiển TV chọn đúng nguồn tín hiệu đầu vào (Input Source: HDMI 1 hoặc HDMI 2).\n• Bước 3: Trên laptop Windows, nhấn tổ hợp phím Win + P và chọn chế độ 'Duplicate' (Nhân bản) hoặc 'Extend' (Mở rộng).\n• Bước 4: Nếu vẫn không lên, thử rút ra cắm lại hoặc thay dây cáp HDMI khác."
          }
        ]
      }
    },
    {
      id: "practice-b5-5",
      badge: "Bài 5 – 3 phút",
      title: "Bài 5 – Lựa Chọn: Bluetooth hay Wi-Fi?",
      duration: "3 phút",
      type: "exercise",
      description: "Phân biệt trường hợp sử dụng Bluetooth và Wi-Fi trong 4 tình huống thực tế.",
      content: {
        objective: "Mức độ: Cơ bản → Thông hiểu | Thời gian: 3 phút. Phân định rõ phạm vi và mục đích của 2 chuẩn không dây phổ biến.",
        requirements: [
          "Chọn chuẩn kết nối phù hợp (Bluetooth hoặc Wi-Fi) cho từng trường hợp sau:\n1. Kết nối tai nghe không dây nghe nhạc với điện thoại khi đi dạo.\n2. Kết nối laptop để truy cập Internet, xem video 4K và tải tài liệu tại nhà.\n3. Kết nối chuột không dây với máy tính xách tay.\n4. Kết nối điện thoại thông minh với Router trong gia đình."
        ],
        qaList: [
          {
            q: "1. Tai nghe không dây nghe nhạc?",
            a: "Đáp án: Bluetooth (tầm gần, tiết kiệm pin)."
          },
          {
            q: "2. Laptop tải tài liệu và xem video 4K qua Internet?",
            a: "Đáp án: Wi-Fi (băng thông lớn, kết nối mạng Internet)."
          },
          {
            q: "3. Chuột không dây?",
            a: "Đáp án: Bluetooth (kết nối phụ kiện cá nhân tầm gần)."
          },
          {
            q: "4. Điện thoại kết nối Router gia đình?",
            a: "Đáp án: Wi-Fi (truy cập mạng không dây cục bộ)."
          }
        ]
      }
    },
    {
      id: "practice-b5-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – Tình Huống Driver Máy In Không Nhận Diện",
      duration: "3 phút",
      type: "exercise",
      description: "Liệt kê các bước kiểm tra khi cắm máy in vào máy tính nhưng không sử dụng được.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Vận dụng kiến thức về Driver vào xử lý sự cố thiết bị in ấn.",
        requirements: [
          "Tình huống: Học sinh cắm dây cáp USB của máy in vào máy tính để in bài tập nhưng máy tính báo không nhận diện được thiết bị.",
          "Nhiệm vụ: Nêu ít nhất 4 việc cần kiểm tra và xử lý theo thứ tự hợp lý."
        ],
        qaList: [
          {
            q: "Ít nhất 4 việc cần kiểm tra khi máy in không nhận?",
            a: "Đáp án:\n1. Kiểm tra nguồn điện máy in: Đã cắm điện và bật nút nguồn Power sáng đèn chưa.\n2. Kiểm tra cáp và cổng cắm USB: Rút ra cắm lại chặt hoặc đổi sang cổng USB khác trên máy tính.\n3. Kiểm tra Device Manager: Xem hệ thống có nhận diện thiết bị hoặc báo thiếu Driver (dấu ! vàng) không.\n4. Cài đặt Driver chính hãng: Tải đúng bộ cài Driver của máy in từ website nhà sản xuất về cài đặt vào máy tính."
          }
        ]
      }
    },
    {
      id: "practice-b5-7",
      badge: "Bài 7 – 2 phút",
      title: "Bài 7 – NFC hay Bluetooth?",
      duration: "2 phút",
      type: "exercise",
      description: "Chọn công nghệ không dây tối ưu cho thao tác chạm thanh toán siêu nhanh.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Phân biệt đặc tính cự ly của NFC so với Bluetooth.",
        requirements: [
          "Tình huống: Một hành khách muốn dùng điện thoại thông minh để chạm vào cửa soát vé tàu điện ngầm tự động để mở cửa trong vòng 0.5 giây.",
          "Câu hỏi: Trong trường hợp này, công nghệ NFC hay Bluetooth được lựa chọn? Giải thích vì sao."
        ],
        qaList: [
          {
            q: "Chọn NFC hay Bluetooth?",
            a: "Đáp án: Chọn NFC (Near Field Communication).\n• Lý do: NFC hoạt động ở khoảng cách cực gần (< 10cm), chỉ cần đưa điện thoại chạm nhẹ là kết nối và truyền mã định danh tức thì mà không cần qua bước dò tìm ghép đôi (pairing) như Bluetooth, đảm bảo tốc độ qua cửa nhanh và tránh bị quét nhầm thẻ của người đi bên cạnh."
          }
        ]
      }
    },
    {
      id: "practice-b5-8",
      badge: "Bài 8 – 3 phút",
      title: "Bài 8 – Đề Xuất Giải Pháp Khi Laptop Thiếu Cổng",
      duration: "3 phút",
      type: "exercise",
      description: "Tư vấn phụ kiện mở rộng cổng kết nối cho laptop mỏng nhẹ.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Hiểu cách sử dụng Hub/Docking Station và lưu ý kỹ thuật.",
        requirements: [
          "Tình huống: Một giáo viên có laptop đời mới chỉ có 2 cổng USB-C. Khi đi dạy, giáo viên cần: Cắm USB flash drive (đầu USB-A), Cắm dây máy chiếu (HDMI) và Cắm dây mạng có dây (RJ45).",
          "Nhiệm vụ:\n1. Đề xuất thiết bị phụ kiện giúp giải quyết bài toán trên.\n2. Nêu điểm kỹ thuật quan trọng nhất cần kiểm tra trước khi chọn mua."
        ],
        qaList: [
          {
            q: "Đề xuất phụ kiện và điểm kỹ thuật cần kiểm tra?",
            a: "Đáp án:\n1. Đề xuất: Sử dụng một bộ chia cổng đa năng USB-C Multi-port Hub (tích hợp sẵn cổng USB-A, HDMI và RJ45).\n2. Điểm kỹ thuật bắt buộc phải kiểm tra: Phải kiểm tra cổng USB-C trên laptop có hỗ trợ chuẩn xuất hình DisplayPort Alt Mode (hoặc Thunderbolt) không thì cổng HDMI trên Hub mới xuất được hình ảnh ra máy chiếu."
          }
        ]
      }
    },
    {
      id: "practice-b5-9",
      badge: "Bài 9 – 3 phút",
      title: "Bài 9 – Chọn Giải Pháp Kết Nối Cho Phòng Học Thông Minh",
      duration: "3 phút",
      type: "exercise",
      description: "Thiết kế giải pháp kết nối toàn diện cho 4 nhu cầu trong phòng học.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Tổng hợp toàn diện các chuẩn kết nối có dây và không dây.",
        requirements: [
          "Một phòng học thông minh cần trang bị hệ thống kết nối cho 4 nhu cầu sau:\n1. Trình chiếu bài giảng từ máy tính giáo viên lên màn hình lớn 85 inch.\n2. Kết nối Internet ổn định, tốc độ cao cho máy tính giảng dạy.\n3. Chuột điều khiển từ xa để giáo viên vừa giảng bài vừa di chuyển trong lớp.\n4. Hệ thống loa phát âm thanh bài giảng cho cả lớp nghe rõ.",
          "Nhiệm vụ: Hãy đề xuất công nghệ kết nối phù hợp nhất cho từng nhu cầu và giải thích ngắn gọn."
        ],
        submissionHint: "Gợi ý đáp án mẫu:\n1. Trình chiếu lên màn hình lớn ➜ Dùng cáp HDMI (hoặc DisplayPort) để đảm bảo hình ảnh sắc nét 4K và không bị giật hình.\n2. Kết nối Internet máy giáo viên ➜ Dùng cáp mạng có dây Ethernet (RJ45) nối trực tiếp router để đảm bảo đường truyền ổn định tuyệt đối.\n3. Chuột điều khiển di chuyển ➜ Dùng chuột không dây Bluetooth (hoặc Wireless 2.4GHz) cho phép di chuyển tự do trong bán kính 10 mét.\n4. Hệ thống loa lớp học ➜ Dùng cáp âm thanh 3.5mm / Optical nối từ máy tính vào amply loa để âm thanh không bị trễ tiếng."
      }
    },
    {
      id: "practice-b5-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử Thách Xử Lý Lỗi Kết Nối Đa Thiết Bị",
      duration: "6 phút",
      type: "exercise",
      description: "Chẩn đoán và cô lập sự cố khi máy tính cùng lúc không nhận máy chiếu và chuột USB.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Đánh giá tư duy chẩn đoán lỗi logic và cô lập nguyên nhân.",
        requirements: [
          "Tình huống thực tế: Trong phòng họp, một diễn giả cắm laptop vào hệ thống máy chiếu qua cổng HDMI và cắm chuột USB có dây qua cổng USB-A. Tuy nhiên:\n- Máy chiếu không hiển thị bất kỳ hình ảnh nào.\n- Con trỏ chuột USB không sáng đèn và không di chuyển được.\n- Trong khi đó, laptop vẫn vào mạng Wi-Fi và nghe nhạc qua loa ngoài bình thường.",
          "Nhiệm vụ học sinh:\n1. Tách và phân tích từng lỗi độc lập (Lỗi hiển thị HDMI và Lỗi chuột USB).\n2. Trình bày các bước chẩn đoán kiểm tra lần lượt từ cáp, cổng cắm, nguồn phát, phím tắt hiển thị đến Driver.\n3. Nêu phương án thử nghiệm để xác định chắc chắn linh kiện nào bị hỏng."
        ],
        submissionHint: "Hướng dẫn chẩn đoán chuẩn mực:\n1. Phân tích tách biệt 2 lỗi: Lỗi hiển thị HDMI và lỗi chuột USB là 2 giao tiếp độc lập. Wi-Fi và Loa vẫn chạy chứng tỏ bo mạch chủ và hệ điều hành của laptop vẫn hoạt động bình thường.\n2. Chẩn đoán Lỗi Chuột USB:\n   • Chuột không sáng đèn ➜ Khả năng cao chưa nhận nguồn điện từ cổng USB.\n   • Bước 1: Rút chuột cắm sang cổng USB khác trên máy tính.\n   • Bước 2: Cắm chuột đó sang một máy tính khác. Nếu máy khác vẫn không sáng đèn ➜ Chuột hoặc dây cáp chuột đã hỏng.\n3. Chẩn đoán Lỗi Máy Chiếu HDMI:\n   • Bước 1: Kiểm tra máy chiếu đã bật nguồn chưa và chọn đúng cổng Input (HDMI 1 / HDMI 2).\n   • Bước 2: Nhấn tổ hợp phím Win + P trên Windows ➜ Chọn 'Duplicate' để kích hoạt tín hiệu xuất màn hình.\n   • Bước 3: Cắm thử dây HDMI đó sang một laptop khác để xác định do dây cáp hỏng hay do cổng HDMI laptop.",
        scoring: [
          { level: "Đạt (7-8đ)", desc: "Nêu được các bước kiểm tra cơ bản về dây cáp và phím tắt Win + P." },
          { level: "Khá (9đ)", desc: "Biết tách riêng 2 lỗi, kiểm tra nguồn điện chuột và Input Source của máy chiếu." },
          { level: "Xuất sắc (10đ)", desc: "Quy trình chẩn đoán mạch lạc, có tư duy cô lập lỗi phần cứng và phần mềm, giải quyết dứt điểm sự cố." }
        ]
      }
    },
    {
      id: "practice-b5-minitest",
      badge: "Mini Test – 5 phút",
      title: "Mini Test Đánh Giá Năng Lực Cuối Buổi (5 Câu Trắc Nghiệm)",
      duration: "5 phút",
      type: "quiz",
      description: "5 câu hỏi trắc nghiệm tương tác kiểm tra độ hiểu sâu các khái niệm kết nối thiết bị số của Bài 5.",
      content: {
        objective: "Đánh giá mức độ tiếp thu 8 kiến thức cốt lõi sau 90 phút học tập.",
        questions: [
          {
            q: "Câu 1: Thiết bị nào sau đây là ví dụ điển hình của THIẾT BỊ VÀO (Input)?",
            options: [
              "A. Loa máy tính",
              "B. Bàn phím",
              "C. Máy in",
              "D. Màn hình"
            ],
            answer: "B",
            explanation: "Bàn phím là thiết bị vào dùng để nhập dữ liệu ký tự vào máy tính."
          },
          {
            q: "Câu 2: Cổng kết nối nào sau đây được sử dụng chuyên dụng cho mạng Ethernet có dây?",
            options: [
              "A. Cổng HDMI",
              "B. Cổng RJ45",
              "C. Cổng USB-A",
              "D. Cổng DisplayPort"
            ],
            answer: "B",
            explanation: "Cổng RJ45 (Ethernet/LAN) dùng để cắm cáp mạng có dây."
          },
          {
            q: "Câu 3: Chuẩn kết nối HDMI thường truyền tải đồng thời những tín hiệu nào?",
            options: [
              "A. Chỉ hình ảnh",
              "B. Hình ảnh + Âm thanh",
              "C. Chỉ âm thanh",
              "D. Chỉ nguồn điện"
            ],
            answer: "B",
            explanation: "HDMI truyền đồng thời cả tín hiệu hình ảnh độ nét cao và âm thanh qua một sợi cáp."
          },
          {
            q: "Câu 4: Để kết nối tai nghe không dây ở khoảng cách gần với điện thoại, chuẩn nào sau đây phù hợp nhất?",
            options: [
              "A. Bluetooth",
              "B. Ethernet RJ45",
              "C. Cáp HDMI",
              "D. Cổng VGA"
            ],
            answer: "A",
            explanation: "Bluetooth là chuẩn kết nối không dây cá nhân tầm gần (~10m) tối ưu cho tai nghe và phụ kiện."
          },
          {
            q: "Câu 5: Driver (Trình điều khiển thiết bị) đóng vai trò gì trong máy tính?",
            options: [
              "A. Làm tăng dung lượng pin",
              "B. Giúp hệ điều hành giao tiếp và điều khiển phần cứng",
              "C. Thay thế cho màn hình hiển thị",
              "D. Làm mát cho CPU"
            ],
            answer: "B",
            explanation: "Driver là phần mềm trung gian giúp hệ điều hành hiểu và điều khiển các thiết bị phần cứng."
          }
        ]
      }
    },
    {
      id: "practice-b5-summary",
      badge: "Tổng Kết Buổi Học",
      title: "Chốt 8 Điểm Cốt Lõi, Tiêu Chí Đánh Giá Năng Lực & Nhiệm Vụ Về Nhà",
      duration: "Tổng kết",
      type: "exercise",
      description: "8 kiến thức cốt lõi học sinh tự nói lại, 3 mức tiêu chí đánh giá và bảng phân bổ sư phạm.",
      content: {
        objective: "Khắc sâu toàn bộ kiến thức Bài 5 và đánh giá chuẩn đầu ra của học sinh.",
        knowledgeNotice: "📌 8 Ý KIẾN THỨC ĐINH HỌC SINH PHẢI TỰ NÓI LẠI TRƯỚC KHI KẾT THÚC BUỔI:\n1. Thiết bị vào: Đưa dữ liệu vào máy (Bàn phím, Chuột, Micro, Webcam, Scanner).\n2. Thiết bị ra: Đưa thông tin ra ngoài (Màn hình, Loa, Tai nghe, Máy in, Máy chiếu).\n3. Thiết bị vào-ra: Trao đổi dữ liệu 2 chiều (USB flash, Màn hình cảm ứng, Card mạng).\n4. USB-A vs USB-C: USB-A chữ nhật cắm 1 chiều; USB-C oval đối xứng cắm 2 chiều, sạc nhanh, xuất hình (nếu hỗ trợ).\n5. HDMI & DisplayPort: Truyền đồng thời Hình ảnh + Âm thanh ra màn hình/TV/máy chiếu.\n6. Ethernet RJ45: Mạng có dây tốc độ cao, độ trễ thấp và ổn định.\n7. Chuẩn không dây: Bluetooth (gần ~10m), Wi-Fi (mạng không dây), NFC (chạm <10cm), Hồng ngoại (remote thẳng hướng).\n8. Driver: Phần mềm phiên dịch giúp Hệ điều hành giao tiếp và điều khiển phần cứng.",
        table: {
          headers: ["Khoảng thời gian", "Nội dung hoạt động sư phạm", "Mục tiêu trọng tâm cần đạt"],
          rows: [
            ["0–8 phút", "Khởi động & Ôn Bài 4", "Đặt tình huống cắm cáp USB-A/C ➜ Nhận thức nhu cầu kết nối"],
            ["8–22 phút", "Thiết bị Vào – Ra – Vào/Ra", "Phân loại chuẩn xác theo chiều luồng dữ liệu (Input / Output / IO)"],
            ["22–38 phút", "Cổng kết nối có dây", "Nhận biết USB-A, USB-C, HDMI, DisplayPort, RJ45 và công dụng"],
            ["38–48 phút", "Kết nối không dây", "So sánh cự ly & băng thông: Bluetooth, Wi-Fi, NFC, Hồng ngoại"],
            ["48–55 phút", "Driver & Xử lý lỗi", "Hiểu vai trò Driver, cơ chế PnP và 6 bước xử lý sự cố kết nối"],
            ["55–82 phút", "10 Bài Luyện Tập Thực Hành", "Rèn luyện kỹ năng chọn cổng, phối hợp thiết bị và sửa lỗi thực tế"],
            ["82–87 phút", "Mini Test 5 Câu Cuối Buổi", "Đánh giá mức độ tiếp thu 8 kiến thức cốt lõi"],
            ["87–90 phút", "Chốt 8 Ý & Giao Bài Về Nhà", "Học sinh tự nói lại 8 ý cốt lõi và nhận 3 phần bài tập về nhà"]
          ]
        },
        criteria: [
          { level: "Mức Đạt (5-6.5đ)", desc: "Nhận biết được các thiết bị vào, ra; phân biệt được cổng USB, HDMI, RJ45 và các chuẩn không dây cơ bản." },
          { level: "Mức Khá (7-8.5đ)", desc: "Chọn được chuẩn kết nối phù hợp cho từng thiết bị; hiểu vai trò của Driver; thực hiện được quy trình xử lý lỗi kết nối đơn giản." },
          { level: "Mức Xuất Sắc (9-10đ)", desc: "Phân tích sâu sắc bài toán thiếu cổng cắm (Hub/Docking); hiểu rõ sự khác biệt giữa các chuẩn USB-C; chẩn đoán và khắc phục nhanh chóng các sự cố kết nối đa thiết bị." }
        ]
      }
    }
  ]
}
