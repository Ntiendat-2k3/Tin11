/**
 * Dữ liệu bài giảng Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: 90 phút)
 */
export const b3Content = {
  warmUp: {
    question: "Một phần mềm được tải miễn phí có chắc chắn là phần mềm nguồn mở không?",
    description: "Câu trả lời là: KHÔNG! 'Miễn phí' (Freeware) và 'Nguồn mở' (Open Source) là hai khái niệm hoàn toàn khác nhau. Hiểu rõ điều này giúp em làm chủ bản chất công nghệ, tôn trọng quyền sở hữu trí tuệ và biết cách lựa chọn công cụ tối ưu cho học tập và công việc."
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mục Tiêu Buổi Học & Khung Phân Bổ 90 Phút",
      subsections: [
        {
          heading: "1. Mục tiêu buổi học – Chuẩn năng lực gia sư",
          points: [
            "Hiểu bản chất mã nguồn (Source Code) và vai trò của việc biên dịch/thông dịch.",
            "Nắm vững định nghĩa phần mềm nguồn mở và quyền của người dùng theo giấy phép.",
            "Phân biệt chính xác 3 khái niệm: Phần mềm thương mại, Phần mềm miễn phí và Phần mềm nguồn mở.",
            "Hiểu rõ vai trò và tiêu chí lựa chọn giữa phần mềm nguồn mở và phần mềm thương mại.",
            "Hiểu bản chất phần mềm chạy trên Internet (Web App / SaaS), phân tích ưu điểm và hạn chế.",
            "Phân biệt rành mạch: 'nguồn mở', 'miễn phí' và 'chạy trên Internet'.",
            "Nhận diện các vấn đề thực tế: giấy phép, tài khoản, dữ liệu và mức độ phụ thuộc dịch vụ."
          ]
        },
        {
          heading: "2. Khung phân bổ thời gian buổi học 90 phút",
          points: [
            "0–8 phút: Khởi động & Ôn tập Bài 2 (Quản lý tệp & Tiện ích HĐH).",
            "8–23 phút: Bản chất Mã nguồn & Phần mềm nguồn mở.",
            "23–35 phút: Phân biệt 3 khái niệm: Thương mại – Miễn phí – Nguồn mở.",
            "35–45 phút: Vai trò của phần mềm nguồn mở và phần mềm thương mại.",
            "45–55 phút: Phần mềm chạy trên Internet (Web App) & So sánh với phần mềm cài máy.",
            "55–82 phút: 10 bài luyện tập thực hành tình huống trực tiếp.",
            "82–87 phút: Mini Test trắc nghiệm 5 câu chốt kiến thức.",
            "87–90 phút: Tổng kết 7 điểm cốt lõi và giao bài tập về nhà."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Tình huống Khởi động Đặt vấn đề",
        text: "Gia sư hỏi học sinh: 'Một phần mềm được tải miễn phí có chắc chắn là phần mềm nguồn mở không?' ➜ Cho học sinh suy nghĩ và trả lời trước khi giảng. Ý chốt: 'Không! Miễn phí nói về giá tiền (0 đồng), còn Nguồn mở nói về quyền tiếp cận và chỉnh sửa mã nguồn.'"
      }
    },
    {
      id: "sec-2",
      title: "III & IV. Bản Chất Mã Nguồn (Source Code) & Phần Mềm Nguồn Mở",
      subsections: [
        {
          heading: "1. Mã nguồn (Source Code) là gì?",
          text: "Mã nguồn là phần chương trình được viết bằng ngôn ngữ lập trình (như C++, Python, JavaScript, Java) để con người có thể đọc, hiểu và chỉnh sửa.",
          points: [
            "Ví dụ đoạn mã nguồn đơn giản: function calculateSum(a, b) { return a + b; }",
            "Máy tính không trực tiếp thực hiện mã nguồn ở mọi trường hợp; chương trình phải được biên dịch (compile) hoặc thông dịch (interpret) thành mã máy (Machine Code / Bytecode) để CPU thực thi.",
            "Cần nhớ: Mã nguồn = Phần chương trình con người có thể đọc và sửa."
          ]
        },
        {
          heading: "2. Phần mềm nguồn mở (Open Source Software - OSS)",
          text: "Phần mềm nguồn mở là phần mềm có mã nguồn được công khai và cung cấp theo giấy phép nguồn mở, cho phép người dùng thực hiện một số quyền như sử dụng, nghiên cứu, sửa đổi và phân phối lại theo điều kiện của giấy phép.",
          points: [
            "Người dùng được tự do nghiên cứu cấu trúc bên trong và tùy biến theo nhu cầu.",
            "Cộng đồng lập trình viên toàn cầu có thể cùng tham gia kiểm tra lỗi, tối ưu hiệu năng và phát triển tính năng mới.",
            "Ví dụ tiêu biểu: Hệ điều hành Linux, Trình duyệt Mozilla Firefox, Trình phát VLC Media Player, Bộ văn phòng LibreOffice, Trình chỉnh sửa ảnh GIMP."
          ]
        }
      ],
      calloutBox: {
        type: "warning",
        title: "⚠️ ĐIỂM RẤT QUAN TRỌNG: Nguồn mở KHÔNG CÓ NGHĨA là không có bản quyền!",
        text: "Phần mềm nguồn mở VẪN CÓ tác giả/chủ sở hữu bản quyền và VẪN CHỊU sự điều chỉnh của giấy phép. Người dùng chỉ được sửa đổi và phân phối lại trong phạm vi các điều khoản mà giấy phép nguồn mở đó cho phép (Ví dụ: Giấy phép GNU GPL yêu cầu bản sửa đổi cũng phải mở nguồn; Giấy phép MIT yêu cầu giữ nguyên ghi công tác giả gốc)."
      }
    },
    {
      id: "sec-3",
      title: "V, VI & VII. Phân Biệt 3 Khái Niệm Dễ Nhầm: Thương Mại – Miễn Phí – Nguồn Mở",
      subsections: [
        {
          heading: "1. Phần mềm thương mại (Commercial Software)",
          text: "Phần mềm được phát triển với mục đích kinh doanh và được cung cấp theo các điều kiện/giấy phép sử dụng cụ thể (thường phải trả phí bản quyền).",
          points: [
            "Ví dụ quen thuộc: Microsoft Windows, Microsoft Office, Adobe Photoshop, AutoCAD.",
            "Lưu ý quan trọng cho gia sư: Không nên dạy học sinh rằng 'Thương mại = chắc chắn mã nguồn đóng'. 'Thương mại' mô tả mô hình kinh doanh; còn 'Nguồn mở / Nguồn đóng' nói về quyền tiếp cận và sử dụng mã nguồn."
          ]
        },
        {
          heading: "2. Phần mềm miễn phí (Freeware)",
          text: "Phần mềm cho phép người dùng tải về và sử dụng mà không phải trả tiền theo mô hình cung cấp của nhà phát triển.",
          points: [
            "Cần nhớ: MIỄN PHÍ ≠ NGUỒN MỞ.",
            "Một phần mềm có thể hoàn toàn miễn phí nhưng mã nguồn bị đóng kín, người dùng không được xem hay sửa code bên trong (Ví dụ: Zalo PC, Unikey, Zoom bản Basic, Google Chrome)."
          ]
        },
        {
          heading: "3. Phần mềm nguồn mở (Open Source Software)",
          text: "Mã nguồn được cung cấp công khai theo giấy phép nguồn mở và người dùng có các quyền hạn rõ ràng đối với mã nguồn.",
          points: [
            "Người dùng có quyền: Sử dụng ➜ Nghiên cứu mã nguồn ➜ Chỉnh sửa mã nguồn ➜ Phân phối lại bản đã sửa (theo giấy phép).",
            "Ví dụ phổ biến: Linux, Mozilla Firefox, VLC, LibreOffice, GIMP, 7-Zip, Blender, Android (phần mã nguồn mở AOSP)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí đối chiếu", "Phần mềm Thương mại", "Phần mềm Miễn phí (Freeware)", "Phần mềm Nguồn mở (Open Source)"],
        rows: [
          ["Giá 0 đồng (Không thu phí)", "Thường có phí (có thể có bản dùng thử)", "Có (100% miễn phí sử dụng)", "Có thể (Đa số miễn phí, có thể thu phí dịch vụ)"],
          ["Công khai mã nguồn (Source Code)", "Thường KHÔNG (Mã nguồn đóng)", "KHÔNG NHẤT THIẾT (Hầu hết đóng)", "CÓ (Công khai theo giấy phép nguồn mở)"],
          ["Quyền sửa đổi mã nguồn", "Theo giấy phép (Thường cấm)", "Không nhất thiết (Thường cấm)", "CÓ theo điều kiện giấy phép"],
          ["Quyền phân phối lại (Redistribute)", "Theo giấy phép (Thường cấm sao chép)", "Theo điều kiện của nhà sản xuất", "CÓ THỂ theo điều kiện của giấy phép"],
          ["Có bản quyền (Copyright)", "CÓ (Bản quyền thuộc nhà sản xuất)", "CÓ (Bản quyền thuộc tác giả)", "CÓ (Bản quyền thuộc tác giả/tổ chức)"]
        ]
      },
      checkpointCards: [
        {
          title: "FREE ≠ OPEN SOURCE",
          detail: "Một phần mềm có giá 0 đồng (miễn phí) KHÔNG đồng nghĩa với việc mã nguồn của nó được mở cho mọi người xem và sửa."
        },
        {
          title: "OPEN SOURCE ≠ NO COPYRIGHT",
          detail: "Nguồn mở KHÔNG phải là vô chủ. Phần mềm nguồn mở vẫn có bản quyền và người dùng bắt buộc phải tuân thủ điều khoản giấy phép."
        },
        {
          title: "ONLINE ≠ OPEN SOURCE",
          detail: "Một dịch vụ chạy trực tuyến trên web (như Google Docs, Canva) KHÔNG đồng nghĩa với việc nó là phần mềm nguồn mở."
        }
      ]
    },
    {
      id: "sec-4",
      title: "VIII & IX. Vai Trò Của Phần Mềm Nguồn Mở & Phần Mềm Thương Mại",
      subsections: [
        {
          heading: "1. Vai trò của Phần mềm Nguồn mở trong kỷ nguyên số",
          text: "Nguồn mở không chỉ là giải pháp tiết kiệm chi phí mà là nền tảng cốt lõi của toàn bộ nền công nghiệp công nghệ thông tin hiện đại.",
          points: [
            "Đối với người dùng phổ thông: Có thêm lựa chọn phong phú, giảm phụ thuộc độc quyền vào một nhà cung cấp (tránh Vendor Lock-in), có thể tùy biến và chia sẻ hợp pháp.",
            "Đối với lập trình viên & chuyên gia CNTT: Học hỏi cách các dự án lớn hàng đầu thế giới được xây dựng; đọc hiểu và nghiên cứu mã nguồn thực tế; đóng góp sửa lỗi và phát triển tính năng mới; tái sử dụng các thư viện/framework có sẵn theo giấy phép.",
            "Ví dụ thực tế: Toàn bộ hệ sinh thái Web hiện đại chạy trên các nền tảng nguồn mở: Linux (hệ điều hành máy chủ), React & Next.js (thư viện giao diện), Node.js (môi trường thực thi JavaScript), PostgreSQL (cơ sở dữ liệu)."
          ]
        },
        {
          heading: "2. Vai trò của Phần mềm Thương mại & Góc nhìn khách quan",
          text: "Tuyệt đối không nên dạy học sinh định kiến: 'Nguồn mở là tốt, thương mại là xấu'. Mỗi mô hình phục vụ các mục tiêu và giá trị khác nhau.",
          points: [
            "Phần mềm thương mại mang lại: Hỗ trợ kỹ thuật chuyên nghiệp 24/7; tài liệu hướng dẫn chuẩn hóa; dịch vụ tùy biến chuyên sâu cho doanh nghiệp; tính năng chuyên biệt cao cấp; hệ sinh thái tích hợp mượt mà và cam kết chất lượng dịch vụ có hợp đồng pháp lý (SLA).",
            "Tình huống thực tế: Một ngân hàng hoặc tập đoàn cần hệ thống phần mềm có cam kết hỗ trợ xử lý sự cố trong vòng 15 phút và có bảo hiểm bồi thường rủi ro. Họ sẽ chọn phần mềm thương mại dù trên thị trường có phần mềm nguồn mở miễn phí.",
            "Kết luận: Không có loại nào luôn tốt hơn loại còn lại. Việc lựa chọn phải dựa trên: Nhu cầu thực tế, Chi phí đầu tư & vận hành (TCO), Tính năng, Yêu cầu bảo mật, Giấy phép, Khả năng tùy biến, Năng lực hỗ trợ kỹ thuật."
          ]
        }
      ],
      functions: [
        {
          name: "💰 Chi phí & Ngân sách (TCO)",
          desc: "Xem xét tổng chi phí sở hữu bao gồm tiền mua bản quyền, chi phí triển khai, đào tạo nhân sự và bảo trì lâu dài."
        },
        {
          name: "🔒 An toàn & Bảo mật thông tin",
          desc: "Đánh giá khả năng kiểm soát mã nguồn, kiểm tra lỗ hổng bảo mật độc lập và tuân thủ các tiêu chuẩn bảo mật dữ liệu."
        },
        {
          name: "🛠️ Hỗ trợ kỹ thuật & Cam kết dịch vụ",
          desc: "Cân nhắc giữa việc tự quản trị/tìm hỗ trợ từ cộng đồng nguồn mở với dịch vụ hỗ trợ kỹ thuật 24/7 có hợp đồng ràng buộc."
        },
        {
          name: "🧩 Khả năng tích hợp & Tùy biến",
          desc: "Độ linh hoạt khi cần chỉnh sửa mã nguồn để phù hợp với quy trình nội bộ hoặc tích hợp với các hệ thống sẵn có."
        }
      ]
    },
    {
      id: "sec-5",
      title: "X & XI. Phần Mềm Chạy Trên Internet (Web App / SaaS) & So Sánh Nền Tảng",
      subsections: [
        {
          heading: "1. Khái niệm Phần mềm chạy trên Internet",
          text: "Phần mềm chạy trên Internet là phần mềm mà một phần hoặc phần lớn chức năng được cung cấp thông qua kết nối mạng, thường được người dùng truy cập bằng trình duyệt web hoặc ứng dụng kết nối tới máy chủ từ xa.",
          points: [
            "Tên gọi công nghệ tương đương: Web Application (Web App), Cloud Software, SaaS (Software as a Service - Phần mềm dưới dạng dịch vụ).",
            "Ví dụ tiêu biểu: Google Docs, Google Sheets, Google Slides, Canva, Figma, Gmail, Notion, Miro, Microsoft 365 Online."
          ]
        },
        {
          heading: "2. So sánh Phần mềm Cài trên máy vs Phần mềm Chạy trên Internet",
          text: "Hai mô hình vận hành khác nhau về kiến trúc thực thi và nơi lưu trữ dữ liệu:",
          points: [
            "Phần mềm cài trên máy (Desktop App): Cài trực tiếp lên ổ đĩa của thiết bị và sử dụng tài nguyên CPU/RAM/GPU cục bộ để chạy (Ví dụ: VLC, Photoshop bản cài đặt, Microsoft Word bản Desktop). Mô hình: Thiết bị ➜ Cài phần mềm ➜ Chạy trực tiếp.",
            "Phần mềm chạy trên Internet (Web App): Chạy trên máy chủ từ xa của nhà cung cấp dịch vụ, người dùng chỉ cần thiết bị có trình duyệt và kết nối mạng (Ví dụ: Google Docs, Canva, Figma). Mô hình: Thiết bị ➜ Trình duyệt ➜ Internet ➜ Máy chủ ➜ Dịch vụ & Dữ liệu."
          ]
        }
      ],
      flowList: [
        {
          title: "Mô hình Vận hành của Phần mềm Chạy Trên Internet (Web App / SaaS)",
          subtitle: "Dòng luân chuyển dữ liệu và xử lý giữa thiết bị người dùng và máy chủ đám mây",
          steps: [
            {
              num: 1,
              title: "Thiết bị người dùng",
              desc: "Máy tính, laptop, máy tính bảng hoặc điện thoại thông minh kết nối mạng."
            },
            {
              num: 2,
              title: "Trình duyệt / App Client",
              desc: "Giao diện hiển thị web (Chrome, Edge, Safari, Firefox) gửi yêu cầu (Request)."
            },
            {
              num: 3,
              title: "Mạng Internet toàn cầu",
              desc: "Đường truyền dữ liệu bảo mật kết nối thiết bị với trung tâm dữ liệu từ xa."
            },
            {
              num: 4,
              title: "Máy chủ Đám mây (Cloud Server)",
              desc: "Hệ thống máy chủ mạnh mẽ tiếp nhận xử lý logic, tính toán và quản lý phiên làm việc."
            },
            {
              num: 5,
              title: "Dịch vụ & Lưu trữ Dữ liệu",
              desc: "Cơ sở dữ liệu đồng bộ tức thời, trả kết quả hiển thị về màn hình người dùng."
            }
          ]
        }
      ]
    },
    {
      id: "sec-6",
      title: "XII, XIII & XIV. Ưu Điểm, Hạn Chế, Quản Trị Dữ Liệu & 2 Cặp Khái Niệm Cần Nhớ",
      subsections: [
        {
          heading: "1. Ưu điểm nổi bật của Phần mềm chạy trên Internet",
          text: "Mang lại sự linh hoạt tối đa cho cá nhân và tổ chức trong thời đại số:",
          points: [
            "Truy cập từ mọi nơi, trên nhiều thiết bị: Chỉ cần có tài khoản và mạng là làm việc được trên PC, iPad hay điện thoại.",
            "Hỗ trợ cộng tác thời gian thực (Real-time Collaboration): Nhiều người có thể cùng chỉnh sửa một văn bản, bảng tính hoặc bản vẽ cùng lúc (Ví dụ: 5 học sinh cùng làm chung 1 Google Docs thay vì gửi qua lại 5 file Word).",
            "Dễ dàng chia sẻ: Chia sẻ nhanh qua liên kết (link) thay vì gửi tệp đính kèm dung lượng lớn.",
            "Tự động đồng bộ và sao lưu dữ liệu: Dữ liệu được lưu liên tục trên máy chủ đám mây, giảm rủi ro hỏng ổ cứng máy tính cá nhân.",
            "Cập nhật hệ thống tập trung: Nhà cung cấp nâng cấp phiên bản và vá lỗi trên máy chủ, người dùng luôn được dùng bản mới nhất mà không phải cài đặt cập nhật thủ công.",
            "Không đòi hỏi cấu hình máy tính quá cao: Phần lớn tác vụ tính toán nặng do máy chủ đám mây đảm nhận."
          ]
        },
        {
          heading: "2. Hạn chế và các rủi ro cần quản trị",
          text: "Bên cạnh sự tiện lợi, người dùng cần nhận thức rõ các rào cản kỹ thuật và an toàn:",
          points: [
            "Phụ thuộc kết nối Internet: Khi mất mạng hoặc mạng chập chờn, một số tính năng có thể bị gián đoạn (trừ các ứng dụng có hỗ trợ chế độ Offline cục bộ).",
            "Phụ thuộc nhà cung cấp dịch vụ (Vendor Dependency): Nếu nhà cung cấp đổi chính sách, tăng giá dịch vụ hoặc ngừng hoạt động thì dữ liệu có thể bị ảnh hưởng.",
            "Rủi ro quản trị tài khoản: Quên mật khẩu, mất quyền truy cập tài khoản hoặc bị tin tặc chiếm quyền kiểm soát.",
            "Quản lý quyền truy cập dữ liệu: Tình huống thực tế: Nếu học sinh chia sẻ tài liệu với chế độ 'Bất kỳ ai có liên kết' (Anyone with the link) thì người có link có thể đọc hoặc sửa tùy theo quyền được cấp.",
            "Quyền riêng tư và an toàn thông tin: Dữ liệu nhạy cảm được lưu trữ trên máy chủ của bên thứ ba, đòi hỏi người dùng phải cân nhắc kỹ trước khi tải lên."
          ]
        }
      ],
      qaList: {
        title: "2 Cặp Khái Niệm Phải Phân Biệt Tuyệt Đối Rạch Ròi",
        questions: [
          {
            badge: "Cặp 1: Nguồn mở vs Trực tuyến",
            q: "Phần mềm nguồn mở có bắt buộc phải chạy trên Internet không? Phần mềm chạy trên Internet có phải là nguồn mở không?",
            a: "Đáp án: NGUỒN MỞ ≠ CHẠY TRÊN INTERNET. Một phần mềm nguồn mở hoàn toàn có thể cài đặt và chạy offline trên máy tính (như Linux, VLC, LibreOffice, GIMP). Ngược lại, một dịch vụ chạy trên Internet (như Google Docs, Canva, Figma) là dịch vụ phần mềm đóng do doanh nghiệp làm chủ, KHÔNG PHẢI là nguồn mở."
          },
          {
            badge: "Cặp 2: Miễn phí vs Nguồn mở",
            q: "Một phần mềm cho tải dùng miễn phí (0 đồng) có chắc chắn là phần mềm nguồn mở không?",
            a: "Đáp án: MIỄN PHÍ ≠ NGUỒN MỞ. Miễn phí (Freeware) chỉ quy định về giá tiền sử dụng (không thu phí). Nguồn mở (Open Source) quy định về quyền tiếp cận, nghiên cứu, sửa đổi và phân phối mã nguồn theo giấy phép."
          }
        ]
      },
      endCheckList: {
        title: "7 Kiến Thức Cốt Lõi Buổi Học Sinh Phải Tự Nói Lại",
        questions: [
          "1. Mã nguồn là phần chương trình mà con người có thể đọc, hiểu và chỉnh sửa.",
          "2. Phần mềm nguồn mở được cung cấp theo giấy phép cho phép những quyền nhất định đối với mã nguồn.",
          "3. Nguồn mở không đồng nghĩa với miễn phí.",
          "4. Miễn phí không đồng nghĩa với nguồn mở.",
          "5. Nguồn mở vẫn có bản quyền và người dùng bắt buộc phải tuân thủ giấy phép.",
          "6. Phần mềm chạy trên Internet và phần mềm nguồn mở là hai khái niệm khác nhau.",
          "7. Lựa chọn phần mềm phải dựa vào nhu cầu, chi phí, bảo mật, giấy phép, tính năng và khả năng hỗ trợ; không chỉ dựa vào việc phần mềm có miễn phí hay không."
        ]
      },
      mindmapText: `+-----------------------------------------------------------------------------------+
|               BÀI 3: PHẦN MỀM NGUỒN MỞ VÀ PHẦN MỀM CHẠY TRÊN INTERNET             |
+-----------------------------------------------------------------------------------+
       |
       +---> [1] BẢN CHẤT MÃ NGUỒN (SOURCE CODE)
       |       * Chương trình con người đọc/sửa được
       |       * Máy tính biên dịch / thông dịch thành mã máy để thực thi
       |
       +---> [2] PHÂN BIỆT 3 LOẠI PHẦN MỀM THEO BẢN QUYỀN
       |       * THƯƠNG MẠI: Mục đích kinh doanh, bản quyền chặt chẽ (Windows, Office, Photoshop)
       |       * MIỄN PHÍ (FREEWARE): Giá 0 đồng, mã nguồn thường đóng (Zalo, Zoom Basic, Unikey)
       |       * NGUỒN MỞ (OPEN SOURCE): Mở mã nguồn, có bản quyền & giấy phép (Linux, VLC, Firefox)
       |       => 3 CÂU THUỘC LÒNG:
       |          - FREE ≠ OPEN SOURCE
       |          - OPEN SOURCE ≠ NO COPYRIGHT
       |          - ONLINE ≠ OPEN SOURCE
       |
       +---> [3] VAI TRÒ NGUỒN MỞ & THƯƠNG MẠI
       |       * NGUỒN MỞ: Thêm lựa chọn, tự do tùy biến, môi trường học tập cho dev (Linux, React, Node.js)
       |       * THƯƠNG MẠI: Hỗ trợ 24/7, cam kết dịch vụ (SLA), giải pháp hoàn thiện cho doanh nghiệp
       |       * NGUYÊN TẮC CHỌN: Dựa trên nhu cầu, chi phí TCO, bảo mật, hỗ trợ kỹ thuật
       |
       +---> [4] PHẦN MỀM CHẠY TRÊN INTERNET (WEB APP / SAAS)
               * Vận hành qua mạng (Trình duyệt -> Internet -> Máy chủ đám mây)
               * Ví dụ: Google Docs, Google Sheets, Canva, Figma, Gmail
               * ƯU ĐIỂM: Truy cập đa thiết bị, cộng tác real-time, đồng bộ tự động, không cài nặng
               * HẠN CHẾ: Phụ thuộc mạng, phụ thuộc nhà cung cấp, rủi ro tài khoản, phân quyền link`
    }
  ],
  summaryQuiz: [
    {
      question: "Phần mềm nguồn mở (Open Source Software) là phần mềm:",
      options: [
        "A. Luôn luôn miễn phí về tiền và ai muốn làm gì với phần mềm cũng được.",
        "B. Có mã nguồn được cung cấp theo giấy phép cho phép người dùng có những quyền nhất định đối với mã nguồn.",
        "C. Chỉ có thể chạy trực tiếp trên môi trường Internet thông qua trình duyệt web.",
        "D. Là phần mềm công cộng hoàn toàn không có bản quyền và không chịu sự ràng buộc nào."
      ],
      answer: "B",
      explanation: "Phần mềm nguồn mở công khai mã nguồn theo giấy phép xác định, cho phép người dùng sử dụng, nghiên cứu, sửa đổi và phân phối lại theo điều kiện của giấy phép đó. Phần mềm nguồn mở vẫn có bản quyền và không nhất thiết phải chạy trên Internet."
    },
    {
      question: "Phát biểu nào sau đây là ĐÚNG về mối quan hệ giữa các khái niệm phần mềm?",
      options: [
        "A. Miễn phí đồng nghĩa với nguồn mở.",
        "B. Phần mềm nguồn mở thì không có bản quyền.",
        "C. Miễn phí không đồng nghĩa với nguồn mở.",
        "D. Phần mềm chạy trên Internet luôn luôn là phần mềm nguồn mở."
      ],
      answer: "C",
      explanation: "Miễn phí (Freeware) và Nguồn mở (Open Source) là hai khái niệm khác nhau. Một phần mềm có thể cho dùng miễn phí nhưng mã nguồn bị khóa kín (như Zalo, Chrome)."
    },
    {
      question: "Phần mềm nào sau đây là ví dụ điển hình về phần mềm nguồn mở?",
      options: [
        "A. Hệ điều hành Linux",
        "B. Microsoft Word bản quyền",
        "C. Adobe Photoshop",
        "D. Một trang web thương mại điện tử bất kỳ"
      ],
      answer: "A",
      explanation: "Linux là hệ điều hành nguồn mở tiêu biểu nhất thế giới, mã nguồn được công khai theo giấy phép GNU GPL. Word và Photoshop là phần mềm thương mại mã nguồn đóng."
    },
    {
      question: "Ứng dụng Google Docs thuộc nhóm nào sau đây theo mô hình cung cấp và vận hành?",
      options: [
        "A. Chỉ là phần mềm nguồn mở cài đặt cục bộ.",
        "B. Phần mềm chạy trên Internet (Web App / SaaS).",
        "C. Hệ điều hành quản lý phần cứng máy tính.",
        "D. Tiện ích chống phân mảnh ổ đĩa cứng."
      ],
      answer: "B",
      explanation: "Google Docs là ứng dụng chạy trên Internet (Web App / SaaS): người dùng truy cập qua trình duyệt web, dữ liệu lưu trữ và xử lý trên máy chủ của Google, hỗ trợ làm việc cộng tác trực tuyến."
    },
    {
      question: "Ưu điểm nổi bật nhất của phần mềm chạy trên Internet (như Google Docs, Canva, Figma) là gì?",
      options: [
        "A. Hoàn toàn không bao giờ cần đến kết nối Internet.",
        "B. Không cần tài khoản người dùng và không cần bảo mật dữ liệu.",
        "C. Có thể hỗ trợ truy cập, đồng bộ và cộng tác thời gian thực từ nhiều thiết bị.",
        "D. Luôn đảm bảo 100% miễn phí cho mọi tính năng nâng cao."
      ],
      answer: "C",
      explanation: "Phần mềm chạy trên Internet giúp người dùng truy cập dữ liệu từ nhiều thiết bị khác nhau (máy tính, điện thoại, máy tính bảng) và cho phép nhiều người cùng tham gia cộng tác trực tuyến cùng lúc."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Phân biệt Khái niệm Miễn phí (Freeware) vs Nguồn mở (Open Source) trong Tình Huống",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Một doanh nghiệp tải về một phần mềm kế toán có giá 0 đồng trên Internet. Mã nguồn của phần mềm này được đóng kín và điều khoản sử dụng ghi rõ: 'Người dùng không được phép giải mã, sửa đổi hoặc dịch ngược chương trình'. Nhân viên A cho rằng: 'Phần mềm này là phần mềm nguồn mở vì doanh nghiệp không mất tiền mua'. Khẳng định của nhân viên A đúng hay sai? Hãy giải thích bản chất.",
      method: "⚡ Phương pháp giải nhanh:\n1. Nhận diện tiêu chí: Giá tiền = 0 đồng ➜ Thuộc tính 'Miễn phí' (Freeware).\n2. Quyền tiếp cận mã nguồn: Đóng kín, cấm sửa đổi, cấm dịch ngược ➜ Không phải là 'Nguồn mở'.\n3. Khắc sâu nguyên tắc vàng: FREE ≠ OPEN SOURCE (Miễn phí tiền không đồng nghĩa mở mã nguồn).",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• Khẳng định của nhân viên A là HOÀN TOÀN SAI.\n• Bản chất: Phần mềm này là Phần mềm Miễn phí (Freeware) hoặc phần mềm thương mại có gói miễn phí, KHÔNG PHẢI phần mềm nguồn mở.\n• Lý do: Phần mềm nguồn mở bắt buộc phải công khai mã nguồn và cấp quyền cho người dùng được xem, sửa đổi và phân phối lại theo giấy phép. Việc miễn phí sử dụng chỉ thể hiện chính sách giá của nhà phát triển, không làm thay đổi tính chất đóng kín của mã nguồn."
    },
    {
      title: "Dạng 2: Bản quyền và Giấy phép Phần mềm Nguồn Mở (Open Source License)",
      tag: "Bẫy Lý thuyết Điểm 9-10",
      sampleQuestion: "Học sinh Nam phát biểu: 'Phần mềm nguồn mở là phần mềm của cộng đồng, không có ai sở hữu bản quyền nên em có thể lấy mã nguồn về chỉnh sửa rồi bán kín cho người khác mà không cần quan tâm đến điều kiện gì'. Nhận xét nào sau đây đánh giá đúng phát biểu của Nam?",
      method: "⚡ Phương pháp phân tích quyền sở hữu trí tuệ:\n1. Nguyên tắc cốt lõi: OPEN SOURCE ≠ NO COPYRIGHT. Phần mềm nguồn mở vẫn có tác giả giữ bản quyền.\n2. Giấy phép nguồn mở (như GPL, MIT, Apache) là văn bản pháp lý quy định rõ quyền hạn và nghĩa vụ của người sử dụng/sửa đổi.\n3. Nếu giấy phép có điều khoản Copyleft (như GNU GPL), bản sửa đổi phát hành lại bắt buộc phải tiếp tục công khai mã nguồn.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• Phát biểu của Nam là SAI CĂN BẢN.\n• Phân tích 2 lỗi sai trong phát biểu của Nam:\n  1. Sai lầm về bản quyền: Phần mềm nguồn mở vẫn có tác giả/tổ chức sở hữu bản quyền hợp pháp.\n  2. Sai lầm về quyền sử dụng: Người dùng chỉ được sửa đổi và phân phối theo đúng các điều khoản quy định trong giấy phép của phần mềm đó. Nếu vi phạm giấy phép (ví dụ đóng gói mã nguồn GPL để bán độc quyền mà không mở nguồn), người vi phạm có thể bị kiện vì vi phạm bản quyền."
    },
    {
      title: "Dạng 3: Phân biệt Phần mềm Cài Đặt (Desktop) vs Phần mềm Chạy trên Internet (Web App)",
      tag: "Thông hiểu & Vận dụng",
      sampleQuestion: "Hãy so sánh phần mềm Microsoft Word (bản cài đặt trên máy tính Desktop) và Google Docs (chạy trên trình duyệt web) về: (1) Nơi lưu trữ và xử lý dữ liệu chính, (2) Khả năng làm việc khi mất kết nối mạng Internet, (3) Tính năng cộng tác làm việc nhóm thời gian thực.",
      method: "⚡ Khung đối chiếu so sánh nền tảng:\n• Desktop App: Xử lý cục bộ bằng CPU/RAM máy tính, lưu trữ trên ổ đĩa máy tính, hoạt động độc lập không cần mạng.\n• Web App: Xử lý và lưu trữ trên máy chủ đám mây, yêu cầu kết nối mạng, tối ưu cho việc chia sẻ và cộng tác real-time.",
      solution: "✅ Đáp án & Bảng so sánh chi tiết:\n1. Nơi lưu trữ và xử lý:\n   • MS Word Desktop: Dữ liệu lưu trên ổ đĩa cứng (C:, D:) của máy tính; CPU/RAM của máy tính trực tiếp xử lý.\n   • Google Docs: Dữ liệu lưu trên máy chủ Google Drive; máy chủ đám mây đảm nhận phần lớn việc xử lý và đồng bộ.\n2. Khi mất kết nối Internet:\n   • MS Word Desktop: Làm việc bình thường 100% không bị ảnh hưởng.\n   • Google Docs: Có thể bị gián đoạn; chỉ lưu tạm nếu đã bật chế độ Offline từ trước, việc đồng bộ với nhóm sẽ bị tạm dừng.\n3. Khả năng cộng tác nhóm thời gian thực:\n   • MS Word Desktop truyền thống: Phải gửi tệp qua lại (email, USB), dễ bị xung đột nhiều phiên bản.\n   • Google Docs: Nhiều người cùng mở 1 đường link và cùng gõ văn bản tại cùng một thời điểm, nhìn thấy con trỏ của nhau trực tiếp."
    },
    {
      title: "Dạng 4: Tình huống Ra Quyết Định Lựa Chọn Phần Mềm cho Tổ Chức / Doanh Nghiệp",
      tag: "Vận dụng Thực tế",
      sampleQuestion: "Một phòng khám y tế tư nhân gồm 50 nhân viên cần phần mềm quản lý hồ sơ bệnh án điện tử. Trên thị trường có một phần mềm nguồn mở miễn phí và một phần mềm thương mại có phí dịch vụ kèm hợp đồng hỗ trợ kỹ thuật 24/7. Trưởng phòng khám băn khoăn không biết nên chọn phần mềm nào. Em hãy tư vấn các tiêu chí đánh giá để phòng khám đưa ra quyết định đúng đắn.",
      method: "⚡ Phương pháp phân tích bài toán TCO & Rủi ro:\n• Không có lựa chọn nào hoàn hảo tuyệt đối.\n• Xét 5 tiêu chí: Nhu cầu chuyên môn, Năng lực đội ngũ kỹ thuật nội bộ, Yêu cầu an toàn dữ liệu y tế, Cam kết hỗ trợ khi có sự cố, Tổng chi phí vận hành lâu dài.",
      solution: "✅ Đáp án & Lời tư vấn chuẩn mực:\n• Không nên vội kết luận chọn phần mềm miễn phí chỉ vì tiết kiệm tiền bản quyền.\n• Tư vấn phòng khám đánh giá cụ thể:\n  1. Năng lực IT nội bộ: Nếu phòng khám không có đội ngũ lập trình viên chuyên trách để tự cài đặt, bảo trì và vá lỗi, việc dùng phần mềm nguồn mở có thể gặp rủi ro lớn khi hệ thống gặp sự cố.\n  2. Tính chất dịch vụ y tế: Hồ sơ bệnh án yêu cầu hoạt động liên tục và bảo mật nghiêm ngặt. Khi hệ thống ngừng hoạt động, cần có chuyên gia hỗ trợ khắc phục ngay lập tức (SLA 24/7).\n  3. Khuyến nghị: Phòng khám nên ưu tiên phần mềm thương mại có hợp đồng bảo hành và hỗ trợ kỹ thuật chuyên nghiệp, hoặc thuê một công ty công nghệ triển khai và chịu trách nhiệm vận hành phiên bản nguồn mở."
    },
    {
      title: "Dạng 5: Phân tích Rủi ro An toàn Thông tin & Quyền Truy cập Dữ liệu Trực Tuyến",
      tag: "Vận dụng Cao & Trách nhiệm Số",
      sampleQuestion: "Một học sinh chuẩn bị bài thuyết trình nhóm trên Google Docs và chia sẻ liên kết với tùy chọn: 'Bất kỳ ai có liên kết đều có quyền Chỉnh sửa' (Anyone with the link can edit), sau đó dán liên kết vào nhóm chat chung có 100 thành viên. Nêu 2 rủi ro dữ liệu có thể xảy ra và hướng dẫn cách thiết lập phân quyền an toàn hơn.",
      method: "⚡ Quy tắc phân quyền an toàn đám mây:\n• Quyền Chỉnh sửa (Editor) cho 'Anyone with the link' = Mọi người lạ có link đều có thể xóa, sửa, ghi đè nội dung mà không cần đăng nhập.\n• Phân quyền chuẩn: Chỉ chia sẻ cho email thành viên nhóm cụ thể; người ngoài chỉ cấp quyền Xem (Viewer) hoặc Nhận xét (Commenter).",
      solution: "✅ Đáp án & Hướng dẫn thiết lập an toàn:\n1. 2 Rủi ro dữ liệu nghiêm trọng:\n   • Rủi ro bị phá hoại/xóa dữ liệu: Bất kỳ ai trong nhóm chat (kể cả người ngoài nếu link bị chia sẻ tiếp) đều có thể vào xóa toàn bộ bài làm hoặc chèn nội dung không lành mạnh.\n   • Rủi ro lộ lọt thông tin cá nhân: Tài liệu có thể bị phát tán ngoài tầm kiểm soát của nhóm.\n2. Cách thiết lập phân quyền an toàn chuẩn:\n   • Bước 1: Trong Google Docs, bấm nút 'Chia sẻ' (Share).\n   • Bước 2: Tại mục Quyền chung (General access), chuyển từ 'Bất kỳ ai có liên kết' thành 'Hạn chế' (Restricted).\n   • Bước 3: Nhập chính xác địa chỉ Gmail của 4 thành viên trong nhóm và cấp quyền 'Người chỉnh sửa' (Editor).\n   • Bước 4: Nếu gửi cho giáo viên hoặc cả lớp tham khảo, chỉ cấp quyền 'Người xem' (Viewer)."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Kiểm Tra Toàn Diện Kiến Thức Cốt Lõi (6 Câu hỏi Tự luận Phân tích)",
      tag: "Lý thuyết & Bản chất",
      problem: "Hãy đọc kỹ và trả lời ngắn gọn, chính xác 6 câu hỏi lý thuyết cốt lõi về Phần mềm Nguồn mở và Phần mềm chạy trên Internet:",
      tasks: [
        "Câu 1: Mã nguồn (Source Code) là gì? Tại sao con người có thể đọc hiểu mã nguồn nhưng máy tính lại cần qua bước biên dịch hoặc thông dịch để thực thi?",
        "Câu 2: Phần mềm nguồn mở là gì? Nêu 3 ví dụ điển hình về phần mềm nguồn mở trong thực tế.",
        "Câu 3: Vì sao nói 'Miễn phí không đồng nghĩa với Nguồn mở'? Cho 1 ví dụ minh họa phần mềm miễn phí nhưng không phải là nguồn mở.",
        "Câu 4: Phần mềm nguồn mở có bản quyền (Copyright) không? Người sử dụng phần mềm nguồn mở có được tự ý làm bất cứ điều gì mà không tuân theo điều kiện nào không?",
        "Câu 5: Phần mềm chạy trên Internet (Web App / SaaS) là gì? Vẽ mô hình luân chuyển thông tin từ thiết bị người dùng đến máy chủ đám mây.",
        "Câu 6: Nêu 3 ưu điểm nổi bật và 2 hạn chế/rủi ro lớn nhất khi sử dụng phần mềm chạy trên Internet."
      ],
      requirements: "Trình bày rõ ràng, giải thích bản chất bằng ngôn ngữ của bản thân, không sao chép máy móc.",
      hint: "Bám sát các mục IV, V, VI, VII, X, XII và XIII trong phần Lý thuyết của bài học.",
      solution: `1. Khái niệm Mã nguồn (Source Code):
• Mã nguồn là phần chương trình được viết bằng ngôn ngữ lập trình (Python, C++, JS...) để lập trình viên con người có thể đọc, hiểu, thiết kế và chỉnh sửa logic.
• Máy tính (phần cứng CPU) chỉ trực tiếp hiểu và thực thi chuỗi nhị phân (Mã máy - Machine Code gồm các bit 0 và 1). Do đó, mã nguồn bắt buộc phải qua phần mềm biên dịch (Compiler) hoặc thông dịch (Interpreter) để chuyển đổi thành dạng mã máy tương thích.

2. Phần mềm nguồn mở (Open Source Software) & 3 ví dụ:
• Định nghĩa: Phần mềm có mã nguồn được công khai theo giấy phép nguồn mở, cho phép người dùng có các quyền tự do sử dụng, nghiên cứu, sửa đổi và phân phối lại theo điều kiện giấy phép.
• 3 ví dụ tiêu biểu: Hệ điều hành Linux, Trình phát media VLC, Bộ ứng dụng văn phòng LibreOffice (hoặc GIMP, Mozilla Firefox).

3. Vì sao 'Miễn phí ≠ Nguồn mở':
• 'Miễn phí' (Freeware) chỉ nói về chính sách kinh doanh: người dùng không phải trả tiền mua bản quyền sử dụng (giá 0 đồng).
• 'Nguồn mở' (Open Source) nói về quyền truy cập mã nguồn và quyền can thiệp vào cấu trúc chương trình.
• Ví dụ: Zalo PC, Zoom bản Basic hoặc Unikey là phần mềm miễn phí (ai cũng tải dùng không mất tiền) nhưng tác giả KHÔNG công khai mã nguồn và cấm sửa đổi code -> Đây là phần mềm mã nguồn đóng, không phải nguồn mở.

4. Vấn đề bản quyền của phần mềm nguồn mở:
• Phần mềm nguồn mở VẪN CÓ BẢN QUYỀN hợp pháp thuộc về tác giả hoặc tổ chức tạo ra nó.
• Người sử dụng KHÔNG ĐƯỢC tự ý làm bất cứ điều gì vượt ngoài giấy phép. Mọi thao tác sửa đổi, tích hợp hay phân phối lại đều bắt buộc phải tuân thủ các điều khoản ràng buộc trong giấy phép nguồn mở đính kèm (như GPL, MIT, Apache).

5. Khái niệm Web App & Mô hình luân chuyển:
• Phần mềm chạy trên Internet là phần mềm cung cấp chức năng thông qua kết nối mạng, người dùng truy cập chủ yếu bằng trình duyệt web mà không cần cài đặt đầy đủ lên máy cục bộ.
• Mô hình luân chuyển:
  [Thiết bị người dùng: PC / Laptop / Mobile]
       ↓
  [Trình duyệt web: Chrome / Edge / Safari]
       ↓
  [Mạng Internet toàn cầu]
       ↓
  [Máy chủ đám mây (Cloud Server) tiếp nhận & xử lý]
       ↓
  [Cơ sở dữ liệu lưu trữ & Dịch vụ đồng bộ]

6. 3 Ưu điểm & 2 Hạn chế của phần mềm trên Internet:
• 3 Ưu điểm: (1) Truy cập linh hoạt từ mọi thiết bị có mạng; (2) Hỗ trợ làm việc nhóm và cộng tác thời gian thực; (3) Tự động đồng bộ và cập nhật hệ thống tập trung.
• 2 Hạn chế: (1) Phụ thuộc vào kết nối mạng Internet (mất mạng dễ bị gián đoạn công việc); (2) Tiềm ẩn rủi ro về an toàn tài khoản và quyền riêng tư khi dữ liệu lưu trên máy chủ bên thứ ba.`
    },
    {
      title: "Bài tập 2: Lập Bảng Phân Loại & Đánh Giá 6 Phần Mềm / Dịch Vụ Thực Tế",
      tag: "Phân loại & Thực tiễn",
      scenario: "Trong quá trình học tập và sinh hoạt hàng ngày, học sinh tiếp xúc với rất nhiều phần mềm và dịch vụ công nghệ khác nhau.",
      problem: "Em hãy chọn 6 phần mềm/dịch vụ trong danh sách thường dùng và hoàn thành bảng phân loại toàn diện kèm giải thích ngắn gọn bản chất của từng phần mềm:",
      tasks: [
        "Nhiệm vụ 1: Lập bảng gồm 5 cột: (1) Tên phần mềm/dịch vụ, (2) Miễn phí sử dụng?, (3) Nguồn mở?, (4) Chạy trên Internet?, (5) Giải thích ngắn gọn.",
        "Nhiệm vụ 2: Điền đầy đủ thông tin cho 6 phần mềm tiêu biểu: (1) Linux Ubuntu, (2) Microsoft Word Desktop, (3) Google Docs, (4) VLC Media Player, (5) Zalo PC, (6) Canva.",
        "Nhiệm vụ 3: Rút ra nhận xét về mối quan hệ chéo giữa 'Miễn phí', 'Nguồn mở' và 'Chạy trên Internet' từ bảng trên."
      ],
      requirements: "Không chỉ đánh dấu Có/Không đơn thuần; mỗi ô phân loại phải có giải thích ngắn gọn, chuẩn xác.",
      hint: "Dựa vào bảng tiêu chuẩn phân loại trong Mục VII của bài học.",
      solution: `1 & 2. Bảng Phân Loại Chi Tiết 6 Phần Mềm / Dịch Vụ Tiêu Biểu:

| Tên Phần Mềm / Dịch Vụ | Miễn phí? | Nguồn mở? | Chạy trên Internet? | Giải thích ngắn gọn bản chất |
|---|---|---|---|---|
| 1. Linux Ubuntu | CÓ | CÓ | KHÔNG | Hệ điều hành mã nguồn mở hoàn toàn, miễn phí tải về, cài đặt và chạy trực tiếp trên máy tính. |
| 2. Microsoft Word (Desktop) | KHÔNG | KHÔNG | KHÔNG | Phần mềm thương mại đóng mã nguồn của Microsoft, phải mua bản quyền (hoặc gói Office 365), cài đặt chạy cục bộ. |
| 3. Google Docs | CÓ | KHÔNG | CÓ | Ứng dụng văn phòng chạy trên trình duyệt web, lưu dữ liệu trên Google Drive, mã nguồn độc quyền của Google (nguồn đóng). |
| 4. VLC Media Player | CÓ | CÓ | KHÔNG | Trình phát đa phương tiện nguồn mở (GPL), miễn phí 100%, cài đặt và xử lý video/audio trực tiếp trên thiết bị. |
| 5. Zalo PC | CÓ | KHÔNG | MỘT PHẦN | Ứng dụng nhắn tin cài trên máy, sử dụng miễn phí nhưng mã nguồn đóng kín của VNG; cần kết nối Internet để truyền nhận tin nhắn. |
| 6. Canva | CÓ (bản Free) | KHÔNG | CÓ | Nền tảng thiết kế đồ họa chạy trên nền tảng web đám mây, cung cấp gói miễn phí nhưng là phần mềm thương mại nguồn đóng. |

3. Nhận xét cốt lõi:
• Một phần mềm có thể vừa Miễn phí vừa Nguồn mở (Linux, VLC).
• Một phần mềm có thể Miễn phí nhưng Nguồn đóng (Google Docs, Zalo PC).
• Một phần mềm có thể Chạy trên Internet nhưng Nguồn đóng (Google Docs, Canva).
• Kết luận: 'Miễn phí', 'Nguồn mở' và 'Chạy trên Internet' là 3 thuộc tính độc lập nhau!`
    },
    {
      title: "Bài tập 3: Tình Huống Thiết Kế Giải Pháp Phần Mềm Chuyển Đổi Số Cho Trường Học",
      tag: "Tình huống Vận dụng Cao",
      scenario: "Một trường THPT chuẩn bị triển khai đề án 'Chuyển đổi số trong dạy và học' cho 1.200 học sinh và 80 giáo viên. Yêu cầu của hệ thống gồm:\n- Giáo viên có thể soạn giáo án và tạo bài giảng trực tuyến.\n- Học sinh có thể cùng nhau làm bài tập nhóm, cùng chỉnh sửa văn bản/slide thuyết trình thời gian thực.\n- Lưu trữ và đồng bộ tài nguyên học tập an toàn trên đám mây.\n- Có thể truy cập linh hoạt từ máy tính phòng thực hành lẫn điện thoại thông minh ở nhà.\n- Dễ dàng chia sẻ tài liệu và quản lý phân quyền theo lớp học.\n- Ngân sách đầu tư ban đầu của nhà trường có giới hạn.",
      problem: "Với tư cách là chuyên viên tư vấn CNTT giáo dục, em hãy đề xuất mô hình phần mềm tối ưu và giải thích lý do lựa chọn.",
      tasks: [
        "Nhiệm vụ 1: Đề xuất mô hình phần mềm chính (Phần mềm cài đặt cục bộ hay Phần mềm chạy trên Internet)? Nêu tên cụ thể gói giải pháp phổ biến hiện nay.",
        "Nhiệm vụ 2: Phân tích vì sao giải pháp đề xuất đáp ứng hoàn hảo cả 5 yêu cầu kỹ thuật và bài toán ngân sách của trường.",
        "Nhiệm vụ 3: Đề xuất phương án kết hợp thêm các phần mềm nguồn mở cài trên máy tính phòng Lab của trường để học sinh học lập trình và xử lý đồ họa mà không mất chi phí mua bản quyền đắt đỏ.",
        "Nhiệm vụ 4: Cảnh báo 2 rủi ro về an toàn dữ liệu học sinh và đề xuất quy tắc phân quyền sử dụng tài khoản trường học."
      ],
      requirements: "Trình bày giải pháp logic, có tính khả thi thực tế cao, bám sát các tiêu chuẩn lựa chọn phần mềm.",
      solution: `1. Đề xuất Mô hình Phần mềm Trung tâm:
• Khuyến nghị sử dụng: Mô hình PHẦN MỀM CHẠY TRÊN INTERNET (Cloud Web App / SaaS).
• Gói giải pháp cụ thể: Google Workspace for Education Fundamentals hoặc Microsoft 365 Education (Cả hai hãng đều có chính sách miễn phí 100% gói giáo dục cơ bản cho các trường học).

2. Phân tích tính phù hợp với 5 yêu cầu của trường:
• Soạn thảo & Cộng tác nhóm: Google Docs, Google Sheets, Google Slides cho phép giáo viên và học sinh cùng làm việc trên 1 liên kết, xem lịch sử chỉnh sửa chi tiết.
• Đồng bộ & Lưu trữ đám mây: Google Drive dung lượng giáo dục tự động lưu trữ tài liệu, không lo hỏng ổ cứng máy tính trường.
• Đa thiết bị: Học sinh mở bài tập trên máy tính trường hoặc điện thoại cá nhân ở nhà qua trình duyệt/app đều đồng bộ tức thì.
• Dễ chia sẻ & Phân quyền: Tích hợp Google Classroom phân quyền theo từng lớp học, hạn chế chia sẻ ra ngoài tên miền trường học.
• Tối ưu ngân sách: Miễn phí tiền bản quyền phần mềm, nhà trường không cần đầu tư mua máy chủ lưu trữ đắt tiền (tiết kiệm hàng trăm triệu đồng).

3. Đề xuất Kết hợp Phần mềm Nguồn Mở cho Phòng Lab máy tính:
• Soạn thảo văn bản & Văn phòng offline: Cài LibreOffice (thay thế MS Office thương mại).
• Học thiết kế đồ họa & Xử lý ảnh: Cài GIMP và Inkscape (thay thế Photoshop, Illustrator).
• Học lập trình: Cài Python (môi trường nguồn mở), VS Code (trình soạn thảo mã nguồn tự do), hệ điều hành Linux (tùy chọn).
• Lợi ích: Phòng máy tính 100% bản quyền hợp pháp với chi phí 0 đồng.

4. Cảnh báo Rủi ro & Quy tắc An toàn:
• Rủi ro 1: Học sinh chia sẻ tài liệu nội bộ ra ngoài với chế độ 'Anyone with the link' ➜ Biện pháp: Quản trị viên IT cấu hình chỉ cho phép chia sẻ trong nội bộ miền email trường (@truonghoc.edu.vn).
• Rủi ro 2: Học sinh để lộ mật khẩu tài khoản dẫn đến bị sửa điểm hoặc xóa bài ➜ Biện pháp: Bắt buộc bật xác thực 2 bước (2FA) và giáo dục ý thức bảo mật tài khoản cá nhân.`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b3-1",
      badge: "Bài 1 – 3 phút",
      title: "Bài 1 – Free hay Open Source?",
      duration: "3 phút",
      type: "exercise",
      description: "Phân biệt phần mềm tải miễn phí (0 đồng) với phần mềm nguồn mở thực thụ.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 3 phút. Khắc sâu nguyên tắc: Miễn phí không đồng nghĩa với nguồn mở.",
        requirements: [
          "Tình huống: Một phần mềm có giá 0 đồng, cho phép mọi người tải về sử dụng hoàn toàn miễn phí, nhưng mã nguồn của nó không được công khai.",
          "Câu hỏi: Phần mềm này có chắc chắn là phần mềm nguồn mở không? Giải thích ngắn gọn vì sao."
        ],
        qaList: [
          {
            q: "Phần mềm này có chắc chắn là phần mềm nguồn mở không?",
            a: "Đáp án: KHÔNG. Vì phần mềm này chỉ là Phần mềm Miễn phí (Freeware). Phần mềm nguồn mở bắt buộc phải công khai mã nguồn và cho phép người dùng có các quyền xem, sửa đổi, phân phối theo giấy phép."
          }
        ],
        knowledgeNotice: "💡 KIẾN THỨC CỐT LÕI:\n• FREEWARE = Miễn phí tiền sử dụng, mã nguồn đóng.\n• OPEN SOURCE = Công khai mã nguồn theo giấy phép, người dùng có quyền tiếp cận và chỉnh sửa code."
      }
    },
    {
      id: "practice-b3-2",
      badge: "Bài 2 – 3 phút",
      title: "Bài 2 – Nhận diện Phần Mềm Nguồn Mở",
      duration: "3 phút",
      type: "exercise",
      description: "Xác định các ví dụ điển hình của phần mềm nguồn mở trong danh sách cho trước.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 3 phút. Nhận diện chính xác các phần mềm nguồn mở phổ biến trong chương trình học.",
        requirements: [
          "Cho danh sách 6 phần mềm sau: Linux, Mozilla Firefox, LibreOffice, Microsoft Word, Adobe Photoshop, VLC Media Player.",
          "Nhiệm vụ: Hãy chỉ ra các phần mềm là ví dụ điển hình của phần mềm nguồn mở và giải thích tiêu chí nhận diện."
        ],
        qaList: [
          {
            q: "Các phần mềm nào trong danh sách là phần mềm nguồn mở?",
            a: "Đáp án: Linux, Mozilla Firefox, LibreOffice, VLC Media Player."
          },
          {
            q: "Câu hỏi mở rộng: Vì sao Mozilla Firefox được xếp vào nguồn mở?",
            a: "Đáp án: Vì toàn bộ mã nguồn của Firefox được tổ chức Mozilla công khai minh bạch và cho phép cộng đồng nghiên cứu, sửa đổi và đóng góp theo giấy phép nguồn mở phù hợp; không phải vì nó là trình duyệt miễn phí."
          }
        ],
        knowledgeNotice: "💡 LƯU Ý:\n• Microsoft Word và Adobe Photoshop là phần mềm thương mại mã nguồn đóng (Proprietary/Commercial Software)."
      }
    },
    {
      id: "practice-b3-3",
      badge: "Bài 3 – 3 phút",
      title: "Bài 3 – Phân Biệt Thương Mại và Nguồn Mở",
      duration: "3 phút",
      type: "exercise",
      description: "Phân loại hai phần mềm A và B dựa trên mô hình cung cấp và mã nguồn.",
      content: {
        objective: "Mức độ: Cơ bản → Thông hiểu | Thời gian: 3 phút. Hiểu rõ sự khác biệt cốt lõi về quyền kiểm soát mã nguồn.",
        requirements: [
          "Mô tả Phần mềm A: Do một công ty phát triển, mã nguồn không công khai, người dùng sử dụng theo giấy phép của công ty.",
          "Mô tả Phần mềm B: Mã nguồn được công khai theo giấy phép nguồn mở, cộng đồng lập trình viên có thể cùng đóng góp phát triển.",
          "Nhiệm vụ: Hãy phân loại A và B, sau đó nêu điểm khác biệt quan trọng nhất giữa hai phần mềm này."
        ],
        qaList: [
          {
            q: "Phần loại phần mềm A và B?",
            a: "Đáp án: Phần mềm A là phần mềm nguồn đóng (thường là phần mềm thương mại). Phần mềm B là phần mềm nguồn mở (Open Source Software)."
          },
          {
            q: "Khác biệt quan trọng nhất giữa A và B là gì?",
            a: "Đáp án: Điểm quan trọng nhất là quyền tiếp cận, quyền nghiên cứu, chỉnh sửa và phân phối lại mã nguồn được quy định rõ trong giấy phép sử dụng."
          }
        ]
      }
    },
    {
      id: "practice-b3-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Nguồn Mở Có Phải Không Có Bản Quyền?",
      duration: "3 phút",
      type: "exercise",
      description: "Phản biện quan niệm sai lầm: 'Phần mềm nguồn mở thì ai muốn làm gì cũng được'.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Khắc sâu nguyên tắc pháp lý: Nguồn mở vẫn có bản quyền và tuân thủ giấy phép.",
        requirements: [
          "Tình huống: Một học sinh phát biểu: 'Phần mềm nguồn mở là của chung, ai muốn làm gì thì làm, thích lấy bán hay sửa đổi tùy ý'.",
          "Câu hỏi 1: Phát biểu trên Đúng hay Sai? Vì sao?",
          "Câu hỏi 2: Tại sao người khác có quyền sửa và phân phối lại phần mềm nguồn mở?"
        ],
        qaList: [
          {
            q: "Phát biểu trên là Đúng hay Sai?",
            a: "Đáp án: SAI. Phần mềm nguồn mở vẫn có tác giả/tổ chức sở hữu bản quyền và người dùng bắt buộc phải tuân thủ các điều khoản trong giấy phép nguồn mở tương ứng."
          },
          {
            q: "Tại sao người khác có quyền sửa và phân phối lại phần mềm nguồn mở?",
            a: "Đáp án: Vì tác giả đã chủ động cấp cho người dùng những quyền đó thông qua giấy phép nguồn mở (như GPL, MIT, Apache), chứ không phải vì phần mềm không có bản quyền."
          }
        ]
      }
    },
    {
      id: "practice-b3-5",
      badge: "Bài 5 – 3 phút",
      title: "Bài 5 – Google Docs Có Phải Nguồn Mở?",
      duration: "3 phút",
      type: "exercise",
      description: "Phân biệt phần mềm chạy trên Internet với phần mềm nguồn mở.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Tránh nhầm lẫn giữa Web App (nền tảng vận hành) và Nguồn mở (bản quyền mã nguồn).",
        requirements: [
          "Đặc điểm Google Docs: Dùng qua trình duyệt web, lưu và đồng bộ dữ liệu đám mây trên máy chủ Google, hỗ trợ làm việc cộng tác trực tuyến.",
          "Câu hỏi: Google Docs có phải là phần mềm nguồn mở chỉ vì nó chạy trên Internet và cho dùng miễn phí không? Giải thích."
        ],
        qaList: [
          {
            q: "Google Docs có phải là phần mềm nguồn mở không?",
            a: "Đáp án: KHÔNG. Google Docs là phần mềm chạy trên Internet (Web App) mã nguồn đóng do tập đoàn Google sở hữu độc quyền. Mã nguồn của Google Docs không hề được công khai cho người dùng sửa đổi."
          }
        ],
        knowledgeNotice: "💡 CẶP KHÁI NIỆM CẦN NHỚ:\nCHẠY TRÊN INTERNET ≠ NGUỒN MỞ\nMột dịch vụ chạy trên web hoàn toàn có thể là phần mềm nguồn đóng độc quyền."
      }
    },
    {
      id: "practice-b3-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – Chọn Công Cụ Phù Hợp Cho Nhóm 5 Người",
      duration: "3 phút",
      type: "exercise",
      description: "Lựa chọn công cụ tối ưu cho tình huống làm việc nhóm phân tán ở 5 địa điểm khác nhau.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Ứng dụng ưu điểm của phần mềm chạy trên Internet vào giải quyết bài toán thực tế.",
        requirements: [
          "Tình huống: 5 học sinh ở 5 địa điểm khác nhau cần cùng nhau chuẩn bị và chỉnh sửa một bài thuyết trình nhóm cho buổi học ngày mai.",
          "Nhiệm vụ 1: Đề xuất một loại phần mềm hoặc công cụ cụ thể phù hợp nhất.",
          "Nhiệm vụ 2: Giải thích ít nhất 3 lý do vì sao lựa chọn công cụ đó thay vì gửi file qua lại."
        ],
        qaList: [
          {
            q: "Đề xuất công cụ phù hợp?",
            a: "Đáp án: Nên dùng công cụ trình chiếu chạy trên Internet như Google Slides, Canva, Microsoft PowerPoint Online hoặc Prezi."
          },
          {
            q: "Lý do vì sao chọn công cụ này?",
            a: "Đáp án: (1) Dễ chia sẻ qua 1 đường liên kết; (2) Hỗ trợ cả 5 bạn cùng truy cập và sửa slide cùng lúc (cộng tác real-time); (3) Tự động lưu và đồng bộ, tránh tình trạng gửi qua lại 5 phiên bản file gây xung đột và thất lạc."
          }
        ]
      }
    },
    {
      id: "practice-b3-7",
      badge: "Bài 7 – 3 phút",
      title: "Bài 7 – Xử Lý Khi Mất Kết Nối Internet",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích tác động và khả năng làm việc của Web App khi xảy ra sự cố mất mạng.",
      content: {
        objective: "Mức độ: Thông hiểu → Vận dụng | Thời gian: 3 phút. Hiểu rõ hạn chế về phụ thuộc mạng và cơ chế Offline mode.",
        requirements: [
          "Tình huống: Một học sinh đang soạn bài tập trực tuyến trên Google Docs thì máy tính bị mất kết nối Internet.",
          "Câu hỏi 1: Điều gì có thể xảy ra với phiên làm việc của học sinh?",
          "Câu hỏi 2: Có phải mọi phần mềm chạy trên Internet đều hoàn toàn vô dụng khi mất mạng không?"
        ],
        qaList: [
          {
            q: "Điều gì xảy ra khi mất mạng trong lúc dùng Web App?",
            a: "Đáp án: Tùy dịch vụ: Một số tính năng trực tuyến sẽ ngừng hoạt động, việc đồng bộ dữ liệu lên đám mây bị tạm dừng, không nhìn thấy thay đổi của bạn bè cùng nhóm, và phiên làm việc có thể bị gián đoạn nếu ứng dụng không có bộ đệm."
          },
          {
            q: "Có phải phần mềm trên Internet hoàn toàn vô dụng khi mất mạng?",
            a: "Đáp án: KHÔNG NHẤT THIẾT. Một số dịch vụ hiện đại (như Google Docs Offline, Notion, Figma) có tính năng lưu trữ tạm vào bộ nhớ cục bộ (Local Storage/Cache), cho phép tiếp tục gõ văn bản và sẽ tự động đồng bộ lên máy chủ ngay khi có mạng trở lại."
          }
        ]
      }
    },
    {
      id: "practice-b3-8",
      badge: "Bài 8 – 3 phút",
      title: "Bài 8 – Ưu và Nhược Điểm Phần Mềm Trực Tuyến",
      duration: "3 phút",
      type: "exercise",
      description: "Tổng hợp nhanh 3 lợi ích vượt trội và 2 hạn chế lớn của phần mềm chạy trên Internet.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Khái quát hóa ưu/nhược điểm phục vụ làm bài thi.",
        requirements: [
          "Nêu ngắn gọn, chuẩn xác:",
          "- 3 Lợi ích lớn nhất của phần mềm chạy trên Internet.",
          "- 2 Hạn chế/rủi ro quan trọng cần lưu ý."
        ],
        qaList: [
          {
            q: "3 Lợi ích lớn nhất?",
            a: "Đáp án: (1) Truy cập linh hoạt từ nhiều thiết bị ở mọi nơi; (2) Hỗ trợ làm việc nhóm và cộng tác thời gian thực; (3) Tự động đồng bộ dữ liệu và nhà cung cấp tự nâng cấp phiên bản mới mà không cần cài đặt nặng."
          },
          {
            q: "2 Hạn chế lớn nhất?",
            a: "Đáp án: (1) Phụ thuộc vào chất lượng kết nối Internet và sự ổn định của nhà cung cấp dịch vụ; (2) Phải quản lý an toàn tài khoản và quyền riêng tư khi dữ liệu lưu trên máy chủ bên thứ ba."
          }
        ]
      }
    },
    {
      id: "practice-b3-9",
      badge: "Bài 9 – 4 phút",
      title: "Bài 9 – Tình Huống Lựa Chọn Cho Doanh Nghiệp",
      duration: "4 phút",
      type: "exercise",
      description: "Giải bài toán doanh nghiệp 100 nhân viên lựa chọn giữa nguồn mở miễn phí và phần mềm thương mại.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 4 phút. Tư duy đa chiều: Không có loại phần mềm nào luôn tốt hơn loại còn lại.",
        requirements: [
          "Tình huống: Một công ty có 100 nhân viên cần hệ thống phần mềm kế toán và quản lý khách hàng có: hỗ trợ kỹ thuật 24/7, hợp đồng dịch vụ có cam kết pháp lý, quản trị tập trung, bảo mật cao và độ ổn định liên tục. Trên thị trường có sẵn một phần mềm nguồn mở miễn phí.",
          "Câu hỏi: Công ty có nhất thiết phải chọn phần mềm nguồn mở miễn phí để tiết kiệm chi phí không? Vì sao?"
        ],
        qaList: [
          {
            q: "Công ty có nhất thiết phải chọn phần mềm nguồn mở không?",
            a: "Đáp án: KHÔNG NHẤT THIẾT. Công ty hoàn toàn có thể ưu tiên chọn phần mềm thương mại."
          },
          {
            q: "Giải thích các yếu tố cần cân nhắc?",
            a: "Đáp án: Cần đánh giá tổng thể: Chi phí vận hành lâu dài (TCO), tính năng đáp ứng, mức độ bảo mật, cam kết dịch vụ kỹ thuật có hợp đồng (SLA) khi gặp sự cố, và nguồn lực IT nội bộ. Phần mềm nguồn mở dù miễn phí mua ban đầu nhưng nếu công ty không có lập trình viên giỏi để bảo trì thì chi phí khắc phục sự cố có thể tốn kém hơn rất nhiều."
          }
        ],
        knowledgeNotice: "💡 KẾT LUẬN VÀNG:\nKhông có loại phần mềm nào luôn tốt hơn loại còn lại trong mọi trường hợp. Việc lựa chọn phải dựa vào bài toán thực tế của tổ chức."
      }
    },
    {
      id: "practice-b3-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử Thách Tổng Hợp: Dự Án Nhóm Ngân Sách Thấp",
      duration: "6 phút",
      type: "exercise",
      description: "Thiết kế bộ công cụ phần mềm hoàn chỉnh cho nhóm 4 học sinh làm dự án với ngân sách 0 đồng.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Tổng hợp toàn bộ năng lực phân loại, lựa chọn phần mềm và nhận thức an toàn số.",
        requirements: [
          "Tình huống: Một nhóm 4 học sinh chuẩn bị thực hiện dự án nghiên cứu học tập. Nhóm có các nhu cầu sau với ngân sách 0 đồng:\n1. Phần mềm chỉnh sửa ảnh tư liệu.\n2. Công cụ cùng viết báo cáo và phân chia công việc.\n3. Phần mềm xem lại các video phỏng vấn.\n4. Hệ điều hành cho máy tính cũ tại phòng thí nghiệm.\n5. Nơi lưu trữ và chia sẻ dữ liệu chung cho cả nhóm.",
          "Nhiệm vụ học sinh:\n- Đề xuất công cụ cụ thể cho từng nhu cầu.\n- Xác định công cụ nào là nguồn mở, công cụ nào chạy trên Internet.\n- Nêu ít nhất 1 rủi ro khi dùng dịch vụ trực tuyến và cách phòng tránh.\n- Giải thích tại sao không được dùng từ 'miễn phí' để kết luận một phần mềm là 'nguồn mở'."
        ],
        submissionHint: "Gợi ý đáp án mẫu:\n• Chỉnh sửa ảnh ➜ GIMP (Nguồn mở, cài máy)\n• Viết báo cáo ➜ Google Docs (Chạy trên Internet, nguồn đóng)\n• Xem video ➜ VLC Media Player (Nguồn mở, cài máy)\n• Hệ điều hành máy cũ ➜ Linux Ubuntu/Mint (Nguồn mở, cài máy)\n• Lưu trữ chia sẻ ➜ Google Drive / OneDrive (Chạy trên Internet)\n• Rủi ro trực tuyến: Bị lộ link bài làm nếu để Anyone with the link ➜ Cách phòng tránh: Chỉ share quyền cho email của 4 bạn trong nhóm.\n• Không đánh đồng Free với Open Source: Vì phần mềm miễn phí chỉ cho dùng 0đ nhưng khóa mã nguồn, còn nguồn mở công khai mã nguồn theo giấy phép.",
        scoring: [
          { level: "Đạt (7-8đ)", desc: "Đề xuất đúng các công cụ cơ bản, phân biệt được nguồn mở và chạy trên Internet." },
          { level: "Khá (9đ)", desc: "Đề xuất công cụ tối ưu, giải thích rõ ràng lý do lựa chọn và nêu được giải pháp bảo mật." },
          { level: "Xuất sắc (10đ)", desc: "Phân tích sắc bén, liên hệ đúng bản chất giấy phép bản quyền, giải thích thuyết phục nguyên tắc Free ≠ Open Source." }
        ]
      }
    },
    {
      id: "practice-b3-minitest",
      badge: "Mini Test – 5 phút",
      title: "Mini Test Đánh Giá Năng Lực Cuối Buổi (5 Câu Trắc Nghiệm)",
      duration: "5 phút",
      type: "quiz",
      description: "5 câu hỏi trắc nghiệm tương tác kiểm tra độ hiểu sâu các khái niệm cốt lõi của Bài 3.",
      content: {
        objective: "Đánh giá mức độ tiếp thu 7 kiến thức cốt lõi sau 90 phút học tập.",
        questions: [
          {
            q: "Câu 1: Phần mềm nguồn mở là phần mềm:",
            options: [
              "A. Luôn luôn miễn phí cho mọi mục đích sử dụng thương mại.",
              "B. Có mã nguồn được cung cấp theo giấy phép cho phép người dùng có những quyền nhất định đối với mã nguồn.",
              "C. Chỉ chạy được trên môi trường mạng Internet.",
              "D. Không có tác giả và không có bản quyền."
            ],
            answer: "B",
            explanation: "Phần mềm nguồn mở có mã nguồn công khai kèm giấy phép cấp quyền sử dụng, nghiên cứu, sửa đổi và phân phối lại."
          },
          {
            q: "Câu 2: Phát biểu nào sau đây là hoàn toàn ĐÚNG?",
            options: [
              "A. Miễn phí đồng nghĩa với nguồn mở.",
              "B. Nguồn mở có nghĩa là không có bản quyền.",
              "C. Miễn phí không đồng nghĩa với nguồn mở.",
              "D. Mọi phần mềm chạy trên Internet đều là nguồn mở."
            ],
            answer: "C",
            explanation: "Miễn phí (Freeware) và Nguồn mở (Open Source) là hai khái niệm khác nhau về bản chất mã nguồn và giá thành."
          },
          {
            q: "Câu 3: Phần mềm nào sau đây là ví dụ điển hình về phần mềm nguồn mở?",
            options: [
              "A. Hệ điều hành Linux",
              "B. Microsoft Word bản quyền",
              "C. Adobe Photoshop",
              "D. Trình duyệt Google Chrome"
            ],
            answer: "A",
            explanation: "Linux là phần mềm nguồn mở tiêu biểu nhất thế giới phát hành theo giấy phép GNU GPL."
          },
          {
            q: "Câu 4: Google Docs thuộc nhóm nào sau đây?",
            options: [
              "A. Chỉ là phần mềm nguồn mở.",
              "B. Phần mềm chạy trên Internet (Web App).",
              "C. Hệ điều hành máy tính cá nhân.",
              "D. Phần mềm quản lý phần cứng."
            ],
            answer: "B",
            explanation: "Google Docs là ứng dụng đám mây chạy trên Internet thông qua trình duyệt web."
          },
          {
            q: "Câu 5: Ưu điểm nổi bật hàng đầu của phần mềm chạy trên Internet là gì?",
            options: [
              "A. Không bao giờ cần kết nối mạng Internet.",
              "B. Không cần tài khoản và không cần bảo mật.",
              "C. Có thể hỗ trợ truy cập, đồng bộ và cộng tác từ nhiều thiết bị khác nhau.",
              "D. Luôn luôn miễn phí không giới hạn tính năng."
            ],
            answer: "C",
            explanation: "Khả năng truy cập đa nền tảng và hỗ trợ làm việc cộng tác thời gian thực là thế mạnh lớn nhất của Web App."
          }
        ]
      }
    },
    {
      id: "practice-b3-summary",
      badge: "Tổng Kết Buổi Học",
      title: "Chốt 7 Điểm Cốt Lõi, Ghi Chú Gia Sư & Tiêu Chí Đánh Giá Năng Lực",
      duration: "Tổng kết",
      type: "exercise",
      description: "7 ý cốt lõi học sinh tự nói lại, 5 lỗi tư duy gia sư cần chỉnh ngay và bảng tiêu chí đánh giá.",
      content: {
        objective: "Khắc sâu toàn bộ kiến thức Bài 3 và cung cấp hướng dẫn sư phạm cho gia sư.",
        knowledgeNotice: "📌 7 Ý KIẾN THỨC ĐINH HỌC SINH PHẢI TỰ NÓI LẠI TRƯỚC KHI KẾT THÚC BUỔI:\n1. Mã nguồn: Phần chương trình con người đọc và sửa được.\n2. Phần mềm nguồn mở: Mã nguồn cung cấp theo giấy phép cấp quyền hạn cụ thể.\n3. Nguồn mở ≠ Miễn phí.\n4. Miễn phí ≠ Nguồn mở.\n5. Nguồn mở VẪN CÓ BẢN QUYỀN và phải tuân thủ giấy phép.\n6. Phần mềm chạy trên Internet ≠ Phần mềm nguồn mở.\n7. Chọn phần mềm: Dựa trên nhu cầu, chi phí TCO, bảo mật, giấy phép, tính năng và hỗ trợ kỹ thuật; không chỉ dựa vào miễn phí.",
        table: {
          headers: ["Khoảng thời gian", "Nội dung hoạt động sư phạm", "Mục tiêu trọng tâm cần đạt"],
          rows: [
            ["0–8 phút", "Khởi động & Ôn Bài 2", "Đặt câu hỏi tình huống: Free có phải Open Source?"],
            ["8–23 phút", "Mã nguồn & Nguồn mở", "Hiểu bản chất mã nguồn, biên dịch/thông dịch và giấy phép OSS"],
            ["23–35 phút", "Thương mại – Miễn phí – Nguồn mở", "Phân tích bảng đối chiếu 3 loại phần mềm và 3 câu thuộc lòng"],
            ["35–45 phút", "Vai trò Nguồn mở & Thương mại", "Cái nhìn khách quan, phân tích bài toán doanh nghiệp 100 người"],
            ["45–55 phút", "Phần mềm chạy trên Internet", "Mô hình vận hành Web App, ưu điểm và quản trị rủi ro dữ liệu"],
            ["55–82 phút", "10 Bài Luyện Tập Thực Hành", "Rèn luyện tư duy phân loại, giải quyết tình huống thực tế"],
            ["82–87 phút", "Mini Test 5 Câu Cuối Buổi", "Đánh giá mức độ tiếp thu và khắc phục lỗ hổng kiến thức"],
            ["87–90 phút", "Chốt 7 Ý & Giao Bài Về Nhà", "Học sinh tự trình bày lại 7 ý cốt lõi và nhận bài tập về nhà"]
          ]
        },
        criteria: [
          { level: "Mức Đạt (5-6.5đ)", desc: "Nêu được định nghĩa mã nguồn, phần mềm nguồn mở, phần mềm chạy trên Internet; kể được tên một số ví dụ quen thuộc (Linux, Google Docs, Word)." },
          { level: "Mức Khá (7-8.5đ)", desc: "Phân biệt rành mạch Free vs Open Source; hiểu nguồn mở vẫn có bản quyền; phân tích được ưu/nhược điểm của Web App; chọn được công cụ phù hợp cho tình huống nhóm học sinh." },
          { level: "Mức Xuất Sắc (9-10đ)", desc: "Tự phản biện được các quan niệm sai lầm; phân tích sâu sắc bài toán chi phí TCO và hỗ trợ kỹ thuật cho doanh nghiệp; hiểu cơ chế phân quyền an toàn trên Internet; tự nói lại lưu loát 7 ý cốt lõi không cần tài liệu." }
        ]
      }
    }
  ]
}
