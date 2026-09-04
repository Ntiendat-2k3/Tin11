/**
 * Dữ liệu bài giảng Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: khoảng 100 phút)
 * Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu
 * Định hướng: Kiến thức cốt lõi chung (Khoa học máy tính CS & Tin học ứng dụng ICT)
 * Biên soạn bám sát 185 mục của giáo trình gia sư chuyên sâu
 */

export const b12Content = {
  warmUp: {
    question: "Nhà trường có tệp dữ liệu điểm của 2.000 học sinh lưu trên máy tính. Khi một học sinh muốn xem điểm của mình, vì sao nhà trường không mở thẳng tệp dữ liệu đó cho học sinh tự tìm mà lại xây dựng một Website tra cứu điểm thi?",
    description: "Câu trả lời đời thường: Nếu mở thẳng tệp cho học sinh, các bạn có thể đọc nhầm, vô tình sửa điểm của mình thành 10, hoặc xóa mất điểm của bạn khác! Chưa kể người dùng bình thường đâu biết cách đọc các tệp dữ liệu thô nhị phân phức tạp. Sang ngôn ngữ chuyên môn: Không thể để người dùng hay ứng dụng can thiệp trực tiếp vào CSDL. Cần có một phần mềm trung gian chuyên nghiệp đứng ra quản lý, bảo vệ, thêm, xóa, sửa và tìm kiếm dữ liệu – đó chính là HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU (DBMS). Học sinh dùng Website (phần mềm ứng dụng), Website nói chuyện với DBMS, DBMS thao tác với CSDL rồi trả kết quả về!",
    roles: [
      { role: "Người dùng (Học sinh)", action: "Gõ Số báo danh trên Website ➜ Bấm 'Tra cứu'" },
      { role: "Phần mềm ứng dụng (Website)", action: "Gửi yêu cầu tra cứu tới Hệ QTCSDL qua giao diện lập trình" },
      { role: "Hệ QTCSDL (DBMS)", action: "Kiểm tra quyền, tìm đúng bản ghi trong CSDL và gửi trả lại cho Website" },
      { role: "Cơ sở dữ liệu (CSDL)", action: "Nơi lưu trữ dữ liệu điểm số thực tế trên ổ đĩa máy tính" }
    ]
  },

  sections: [
    {
      id: "sec-1",
      title: "1 & 2. Ba Câu Hỏi Lớn & Khung Phân Bổ Buổi Học 100 Phút",
      subsections: [
        {
          heading: "1. Ba câu hỏi lớn nối tiếp từ Bài 11 sang Bài 12",
          points: [
            "Bài 11 đã trả lời: CSDL là gì? Dữ liệu nên được tổ chức như thế nào? CSDL tốt cần 6 thuộc tính gì?",
            "Bài 12 trả lời tiếp 3 câu hỏi thực tế sống còn:",
            "• Câu hỏi 1: Ai hoặc phần mềm nào sẽ đứng ra quản lí CSDL?",
            "• Câu hỏi 2: Làm sao người dùng bình thường sử dụng được dữ liệu mà không cần biết cấu trúc tệp bên trong?",
            "• Câu hỏi 3: Nếu dữ liệu nằm ở một nơi hoặc nhiều nơi thì hệ thống được tổ chức khác nhau ra sao?"
          ]
        },
        {
          heading: "2. Mạch tư duy sư phạm toàn bài",
          points: [
            "CSDL ➜ Cần một phần mềm chuyên dụng để quản lí ➜ HỆ QUẢN TRỊ CSDL (DBMS) ➜ Ứng dụng CSDL giúp người dùng sử dụng thuận tiện ➜ CSDL + Hệ QTCSDL + Ứng dụng CSDL ➜ HỆ CƠ SỞ DỮ LIỆU ➜ TẬP TRUNG / PHÂN TÁN.",
            "Bài 12 KHÔNG dạy sâu câu truy vấn/SQL. 'Truy xuất dữ liệu' chỉ cần hiểu là lấy thông tin từ CSDL theo nhu cầu."
          ]
        },
        {
          heading: "3. Khung phân bổ 100 phút chuẩn",
          points: [
            "0–8 phút: Khởi động: 'Có dữ liệu rồi tại sao vẫn cần phần mềm quản lý?' (Tình huống tra cứu điểm thi).",
            "8–20 phút: Khái niệm Hệ quản trị cơ sở dữ liệu (DBMS) & Phân biệt Hệ QTCSDL vs CSDL.",
            "20–48 phút: Bốn nhóm chức năng của Hệ QTCSDL (Định nghĩa, Cập nhật & truy xuất, Bảo mật & an toàn, Giao diện lập trình).",
            "48–62 phút: Phần mềm khách, Phần mềm ứng dụng CSDL và Hệ cơ sở dữ liệu (Bộ tứ khái niệm).",
            "62–74 phút: Hệ CSDL tập trung (Đặc điểm, Ưu điểm và Hạn chế).",
            "74–90 phút: Hệ CSDL phân tán, Ứng dụng cục bộ vs Ứng dụng toàn cục/phân tán.",
            "90–96 phút: So sánh chuẩn trọng tâm Tập trung vs Phân tán.",
            "96–100 phút: Mini Test 10 câu + Chốt kiến thức toàn bài."
          ]
        }
      ],
      calloutBox: {
        type: "tip",
        title: "Lời khuyên sư phạm cho gia sư",
        text: "Nếu học sinh tiếp thu chậm, ưu tiên 4 trọng tâm: (1) Hệ QTCSDL là gì ➜ (2) 4 nhóm chức năng ➜ (3) CSDL vs Hệ QTCSDL vs Ứng dụng vs Hệ CSDL ➜ (4) Tập trung vs Phân tán. Không cần sa đà vào tên các sản phẩm DBMS phức tạp."
      }
    },

    {
      id: "sec-2",
      title: "3–14. Khái Niệm Hệ Quản Trị Cơ Sở Dữ Liệu (DBMS)",
      subsections: [
        {
          heading: "1. Khởi động: Tại sao không mở trực tiếp file dữ liệu?",
          text: "Một tệp dữ liệu chứa điểm của hàng nghìn học sinh. Nếu để học sinh hay lập trình viên mở trực tiếp tệp trên đĩa:",
          points: [
            "Người dùng bình thường không biết cấu trúc tệp nhị phân phức tạp.",
            "Không thể phân quyền: mở tệp ra là xem được hết điểm của mọi người, thậm chí sửa xóa nhầm.",
            "Nhiều người cùng mở tệp một lúc sẽ gây khóa tệp (file lock) hoặc xung đột làm hỏng dữ liệu."
          ]
        },
        {
          heading: "2. Hệ quản trị CSDL là gì? (Đời thường vs Chuyên môn)",
          text: "Để giải quyết vấn đề trên, máy tính cần một lớp phần mềm trung gian đứng ra cai quản CSDL:",
          points: [
            "Cách nói đời thường: HỆ QTCSDL là 'BỘ PHẦN MỀM QUẢN LÍ KHO DỮ LIỆU' – giống như người thủ kho tận tụy, ai muốn gửi đồ, lấy đồ, kiểm tra đồ đều phải nói qua thủ kho.",
            "Định nghĩa chuyên môn SGK: HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU (Database Management System - DBMS) là phần mềm cung cấp môi trường tạo lập, lưu trữ, cập nhật, truy xuất và bảo đảm an toàn, bảo mật cho CSDL.",
            "Mô hình giao tiếp: NGƯỜI DÙNG / ỨNG DỤNG ➜ HỆ QTCSDL ➜ CƠ SỞ DỮ LIỆU."
          ]
        },
        {
          heading: "3. Khắc sâu: Hệ QTCSDL KHÔNG PHẢI LÀ CSDL!",
          text: "Học sinh rất hay nhầm lẫn giữa CSDL và Hệ QTCSDL. Cần dùng hình ảnh so sánh trực quan:",
          points: [
            "Ví dụ tủ hồ sơ: Tủ hồ sơ và chiếc chìa khóa = Hệ QTCSDL (công cụ chứa và quản lý); Giấy tờ hồ sơ học sinh bên trong = CSDL (dữ liệu thực tế).",
            "Ví dụ phần mềm: Microsoft Word là phần mềm (giống DBMS), còn bài văn em gõ là nội dung (giống CSDL).",
            "Một số Hệ QTCSDL phổ biến trong thực tế: MySQL, Microsoft Access, PostgreSQL, Microsoft SQL Server, Oracle, SQLite.",
            "Lưu ý quan trọng: Một Hệ QTCSDL có thể quản lý CÙNG LÚC NHIỀU CSDL khác nhau (CSDL trường học, CSDL thư viện, CSDL căng-tin)!"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí", "Cơ sở dữ liệu (CSDL)", "Hệ quản trị CSDL (DBMS)"],
        rows: [
          ["Bản chất", "DỮ LIỆU được tổ chức có cấu trúc", "PHẦN MỀM dùng để quản trị dữ liệu"],
          ["Ví dụ đời thường", "Giấy tờ, tài liệu, điểm số trong sổ", "Chiếc tủ sắt và người thủ kho quản lý tủ"],
          ["Ví dụ phần mềm", "Dữ liệu điểm thi tuyển sinh năm 2026", "MySQL, PostgreSQL, Microsoft Access, SQL Server"],
          ["Mối quan hệ", "Được lưu trữ trên đĩa và được DBMS điều phối", "Đứng giữa ứng dụng và CSDL, quản lý một hoặc nhiều CSDL"]
        ]
      }
    },

    {
      id: "sec-3",
      title: "15–59 & 180. Bốn Nhóm Chức Năng Của Hệ Quản Trị CSDL",
      subsections: [
        {
          heading: "1. Nhóm 1: Định nghĩa dữ liệu (Data Definition - DDL)",
          text: "Đời thường: 'TẠO CÁI KHUNG' – Xây một chiếc tủ ngăn nắp trước khi bỏ đồ vào:",
          points: [
            "Khai báo tên CSDL mới (ví dụ: tạo CSDL QuanLyHocSinh).",
            "Tạo kiến trúc bảng bên trong: đặt tên bảng (HocSinh), khai báo các cột (MaHS, HoTen, NgaySinh, DiemToan), chọn kiểu dữ liệu cho từng cột (chữ, số, ngày tháng).",
            "Sửa đổi kiến trúc: thêm cột mới (EmailPhuHuynh), xóa cột không dùng, đổi tên bảng.",
            "Thiết lập ràng buộc toàn vẹn (kết nối Bài 11): quy định 0 ≤ Điểm ≤ 10, quy định Mã HS không được để trống."
          ]
        },
        {
          heading: "2. Nhóm 2: Cập nhật và truy xuất dữ liệu (Data Manipulation & Retrieval - DML/DQL)",
          text: "Đời thường: 'THAY ĐỔI VÀ LẤY DỮ LIỆU RA DÙNG':",
          points: [
            "CẬP NHẬT DỮ LIỆU (Thêm - Sửa - Xóa):\n• THÊM: Tiếp nhận học sinh mới chuyển đến trường ➜ Thêm một dòng bản ghi mới.\n• SỬA: Học sinh đổi số điện thoại hoặc giáo viên chấm phúc khảo nâng điểm ➜ Sửa giá trị trong bản ghi.\n• XÓA: Xóa một bản ghi nhập nhầm hoặc xóa tài khoản đã đóng.",
            "TRUY XUẤT DỮ LIỆU (Xem, tìm kiếm, kết xuất thông tin):\n• Lấy thông tin từ CSDL theo nhu cầu (Ví dụ: Học sinh xem điểm thi; Hiệu trưởng in danh sách học sinh đạt giải quốc gia).\n• Lưu ý: Ở Bài 12 KHÔNG yêu cầu viết câu lệnh SQL/SELECT phức tạp, chỉ cần nhận biết hành động xem/tìm kiếm chính là chức năng truy xuất dữ liệu!"
          ]
        },
        {
          heading: "3. Nhóm 3: Bảo mật và an toàn CSDL (Security & Safety)",
          text: "Đời thường: 'ĐÚNG NGƯỜI + KHÔNG XUNG ĐỘT + CÓ BẢN DỰ PHÒNG':",
          points: [
            "Phần 1 – Kiểm soát quyền truy cập (Bảo mật): Phân quyền nghiêm ngặt theo vai trò. Học sinh chỉ được xem điểm của mình; Giáo viên bộ môn được nhập/sửa điểm môn phụ trách; Người quản trị hệ thống được cấp phát tài khoản.",
            "Phần 2 – Kiểm soát giao dịch & Tranh chấp dữ liệu: Khi nhiều người cùng thao tác đồng thời trên một dữ liệu (ví dụ: nhân viên A sửa địa chỉ khách hàng trong khi nhân viên B bấm xóa khách hàng đó; hoặc 2 khách cùng bấm mua chiếc điện thoại cuối cùng). Hệ QTCSDL điều phối để dữ liệu không bị phá hỏng và giữ vững TÍNH NHẤT QUÁN.",
            "Phần 3 – Sao lưu dự phòng và phục hồi (An toàn dữ liệu):\n• Backup (Sao lưu): Tự động tạo bản sao lưu dữ liệu ra nơi an toàn vào 23h mỗi đêm.\n• Restore (Khôi phục): Khi máy chủ bị sét đánh, cháy ổ cứng hay lỗi hệ thống, Hệ QTCSDL giúp phục hồi lại trạng thái dữ liệu nguyên vẹn từ bản sao lưu gần nhất."
          ]
        },
        {
          heading: "4. Nhóm 4: Cung cấp giao diện lập trình ứng dụng (Application Programming Interface - API)",
          text: "Đời thường: 'CHO PHẦN MỀM KHÁCH NÓI CHUYỆN VỚI HỆ QTCSDL':",
          points: [
            "Website tra cứu điểm thi không tự lưu dữ liệu. Nó cần một phương thức chuẩn mực để gửi câu hỏi: 'Hãy tìm cho tôi điểm của SBD 1102!' tới Hệ QTCSDL và nhận kết quả trả về.",
            "Giao diện lập trình ứng dụng là cầu nối phần mềm giúp các lập trình viên viết code (Python, Java, PHP, JavaScript) tương tác thuận lợi với Hệ QTCSDL.",
            "⚠️ LƯU Ý TRÁNH NHẦM: Đừng nhầm 'Giao diện lập trình' (cách hai phần mềm giao tiếp ngầm với nhau) với 'Giao diện người dùng' (các nút bấm, ô nhập màu sắc trên màn hình mà con người nhìn thấy)!"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Nhóm chức năng", "Cách nói đời thường", "Thao tác tiêu biểu", "Ví dụ cụ thể"],
        rows: [
          ["1. Định nghĩa dữ liệu", "Tạo cái khung", "Tạo CSDL, tạo bảng, thêm cột, đặt ràng buộc", "Thêm cột EmailPhuHuynh, đặt điều kiện 0 ≤ Điểm ≤ 10"],
          ["2. Cập nhật dữ liệu", "Thay đổi nội dung", "Thêm bản ghi, sửa thông tin, xóa dữ liệu nhầm", "Thêm học sinh mới chuyển trường, sửa số điện thoại"],
          ["3. Truy xuất dữ liệu", "Lấy dữ liệu cần dùng", "Xem bảng điểm, tìm kiếm học sinh, xuất báo cáo", "Học sinh gõ SBD tra cứu điểm thi trên mạng"],
          ["4. Bảo mật CSDL", "Đúng người đúng quyền", "Xác thực tài khoản, phân quyền xem/sửa", "Chỉ giáo viên dạy Toán mới được sửa điểm môn Toán"],
          ["5. An toàn CSDL", "Không sợ mất dữ liệu", "Kiểm soát giao dịch đồng thời, sao lưu dự phòng", "Khóa dữ liệu khi 2 người mua cùng 1 vé; Backup 23h hàng ngày"],
          ["6. Giao diện lập trình", "Cầu nối phần mềm", "Cung cấp thư viện/cơ chế cho app gửi yêu cầu", "Website tuyển sinh gửi lệnh lấy kết quả từ MySQL"]
        ]
      }
    },

    {
      id: "sec-4",
      title: "60–75. Phần Mềm Ứng Dụng CSDL & Hệ Cơ Sở Dữ Liệu",
      subsections: [
        {
          heading: "1. Phần mềm khách và Phần mềm ứng dụng CSDL là gì?",
          text: "Người dùng bình thường (học sinh, phụ huynh, thu ngân) không bao giờ gõ lệnh trực tiếp vào Hệ QTCSDL:",
          points: [
            "Ví dụ nhà hàng: Khách hàng (người dùng) ngồi ở bàn ăn ➜ Bồi bàn (phần mềm ứng dụng) tiếp nhận món ăn và chuyển đơn xuống bếp ➜ Bếp trưởng (Hệ QTCSDL) lấy nguyên liệu trong kho lạnh (CSDL) nấu xong giao lại cho bồi bàn mang ra.",
            "PHẦN MỀM ỨNG DỤNG CSDL là phần mềm được xây dựng để phục vụ nhu cầu nghiệp vụ cụ thể của người dùng, giao tiếp với Hệ QTCSDL để lấy và lưu dữ liệu.",
            "Cùng MỘT CSDL có thể phục vụ NHIỀU PHẦN MỀM ỨNG DỤNG khác nhau: CSDL nhà trường phục vụ Website tra cứu cho học sinh, App chấm điểm cho giáo viên, và Cổng thông tin báo cáo cho Sở GD&ĐT!"
          ]
        },
        {
          heading: "2. Khái niệm Hệ cơ sở dữ liệu (Database System)",
          text: "Định nghĩa chuẩn SGK: HỆ CƠ SỞ DỮ LIỆU là một hệ thống gồm:",
          points: [
            "1. Cơ sở dữ liệu (CSDL) – Chứa nội dung dữ liệu.",
            "2. Hệ quản trị CSDL (DBMS) – Phần mềm quản trị dữ liệu.",
            "3. Các phần mềm ứng dụng CSDL – Phần mềm phục vụ người dùng.",
            "4. Con người tham gia (Người quản trị CSDL, Người lập trình ứng dụng, Người dùng cuối).",
            "Công thức ghi nhớ: HỆ CSDL = CSDL + HỆ QTCSDL + PHẦN MỀM ỨNG DỤNG CSDL (+ Con người)."
          ]
        },
        {
          heading: "3. Sơ đồ 4 tầng kiến trúc bắt buộc phải thuộc",
          points: [
            "Tầng 1 (Trên cùng): NGƯỜI DÙNG (Học sinh, giáo viên, khách hàng).",
            "Tầng 2: PHẦN MỀM ỨNG DỤNG CSDL (Website, App di động, Phần mềm quản lý).",
            "Tầng 3: HỆ QUẢN TRỊ CSDL (MySQL, PostgreSQL, SQL Server, Access).",
            "Tầng 4 (Dưới cùng): CƠ SỞ DỮ LIỆU (Các tệp dữ liệu lưu trữ vật lý trên đĩa cứng).",
            "Đọc bằng lời: 'Người dùng sử dụng ứng dụng; Ứng dụng gửi yêu cầu tới Hệ QTCSDL; Hệ QTCSDL trực tiếp quản lý và truy xuất CSDL'."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Khái niệm", "Bản chất", "Ví dụ trong bài toán quản lý trường học", "Cách nhớ đời thường"],
        rows: [
          ["CSDL", "Dữ liệu được tổ chức", "Tệp lưu hồ sơ, điểm số của 2.000 học sinh", "Kho tài liệu"],
          ["Hệ QTCSDL", "Phần mềm quản trị dữ liệu", "MySQL Server, PostgreSQL", "Người thủ kho"],
          ["Phần mềm ứng dụng CSDL", "Phần mềm người dùng tương tác", "Website tra cứu điểm thi, App sổ liên lạc điện tử", "Bồi bàn / Cửa sổ giao dịch"],
          ["Hệ CSDL", "Toàn bộ hệ thống hoàn chỉnh", "Toàn bộ hệ thống quản lý học sinh của trường", "Cả tòa nhà cơ quan"]
        ]
      }
    },

    {
      id: "sec-5",
      title: "76–116. Hệ CSDL Tập Trung Và Hệ CSDL Phân Tán",
      subsections: [
        {
          heading: "1. Hệ CSDL tập trung (Centralized Database System)",
          text: "Định nghĩa chuẩn: Là hệ CSDL mà toàn bộ CSDL được lưu trữ TẬP TRUNG TRÊN MỘT MÁY TÍNH (hoặc một cụm máy chủ đặt tại một địa điểm duy nhất):",
          points: [
            "LƯU Ý CỰC KỲ QUAN TRỌNG: Nhiều người dùng truy cập từ xa qua mạng KHÔNG CÓ NGHĨA là phân tán! Điều quyết định là DỮ LIỆU ĐƯỢC LƯU Ở ĐÂU.",
            "Ví dụ: 100 giáo viên ở 100 phòng khác nhau cùng truy cập vào 1 CSDL duy nhất đặt tại máy chủ trường ➜ Đây vẫn là HỆ CSDL TẬP TRUNG!",
            "Ưu điểm: Dễ thiết kế, dễ bảo trì, dễ đảm bảo tính nhất quán (chỉ cần sửa tại 1 máy) và chi phí thấp cho quy mô nhỏ/vừa.",
            "Hạn chế: Toàn bộ hệ thống phụ thuộc vào máy chủ trung tâm. Nếu máy chủ hỏng hoặc đứt cáp mạng kết nối tới máy chủ thì toàn bộ hệ thống tê liệt; Dễ quá tải khi lượng truy cập tăng vọt."
          ]
        },
        {
          heading: "2. Hệ CSDL phân tán (Distributed Database System)",
          text: "Định nghĩa chuẩn: Là hệ CSDL mà dữ liệu không lưu tập trung tại một máy, mà được PHÂN BỐ LƯU TRỮ TRÊN NHIỀU MÁY TÍNH (gọi là các TRẠM / SITE) kết nối với nhau qua mạng máy tính:",
          points: [
            "Trạm (Site/Node): Là một máy tính trong mạng có cài Hệ QTCSDL và có thể chứa một phần dữ liệu.",
            "CSDL cục bộ (Local Database): Phần CSDL được lưu trữ và quản lý trực tiếp tại một trạm cụ thể.",
            "Ứng dụng cục bộ (Local Application): Ứng dụng CHỈ SỬ DỤNG DỮ LIỆU CỦA MỘT TRẠM duy nhất (Ví dụ: Chi nhánh Đà Nẵng in hóa đơn bán hàng cho khách tại Đà Nẵng).",
            "Ứng dụng toàn cục / Phân tán (Global Application): Ứng dụng SỬ DỤNG DỮ LIỆU CỦA ÍT NHẤT HAI TRẠM để cho kết quả cuối cùng (Ví dụ: Tổng giám đốc tại Hà Nội xem báo cáo doanh thu toàn quốc bằng cách tổng hợp dữ liệu từ cả 3 trạm HN, ĐN và TP.HCM)."
          ]
        },
        {
          heading: "3. Ưu điểm và Khó khăn của Hệ CSDL phân tán",
          points: [
            "ƯU ĐIỂM VƯỢT TRỘI:\n• Dễ dàng mở rộng: Mở thêm chi nhánh Cần Thơ chỉ cần lắp thêm một trạm mới vào mạng.\n• Tăng tính sẵn sàng và độ tin cậy: Trạm TP.HCM bị đứt mạng thì trạm Hà Nội và Đà Nẵng vẫn bán hàng bình thường cho khách địa phương!\n• Dữ liệu đặt gần người dùng: Giảm tải đường truyền mạng diện rộng, truy xuất cục bộ cực nhanh.",
            "KHÓ KHĂN LỚN:\n• Thiết kế và cài đặt cực kỳ phức tạp.\n• Rất khó đảm bảo tính nhất quán: Khi một món hàng được mua, làm sao để mọi trạm cùng đồng bộ số tồn kho ngay lập tức?\n• Bảo mật khó khăn hơn vì có nhiều trạm và nhiều đường truyền mạng dễ bị tấn công.\n• Chi phí đầu tư phần cứng và duy trì đội ngũ kỹ thuật rất tốn kém."
          ]
        },
        {
          heading: "4. Phân biệt Dữ liệu phân tán vs Xử lý phân tán (Lưu ý SGK)",
          points: [
            "Dữ liệu phân tán: Bản thân các phần của CSDL được chia ra lưu ở nhiều trạm khác nhau.",
            "Xử lý phân tán: CSDL có thể vẫn nằm trên một máy chủ trung tâm, nhưng việc tính toán, hiển thị được giao cho nhiều máy tính người dùng chia nhau xử lý.",
            "Kết luận: Không có mô hình nào là 'tốt nhất cho mọi bài toán'. Trường học nhỏ, phòng khám ➜ Chọn Tập trung. Chuỗi 200 siêu thị toàn quốc ➜ Cân nhắc Phân tán!"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí so sánh", "Hệ CSDL Tập Trung", "Hệ CSDL Phân Tán"],
        rows: [
          ["Vị trí lưu CSDL", "Toàn bộ CSDL lưu tại MỘT máy tính/máy chủ duy nhất", "Dữ liệu phân bố trên NHIỀU trạm khác nhau qua mạng"],
          ["Bản chất ứng dụng", "Mọi người dùng gửi yêu cầu về 1 máy chủ", "Có Ứng dụng cục bộ (1 trạm) và Toàn cục (nhiều trạm)"],
          ["Ưu điểm chính", "Dễ thiết kế, dễ bảo trì, dễ giữ nhất quán số liệu", "Dễ mở rộng thêm trạm, tính sẵn sàng cao, không lo sập toàn bộ"],
          ["Nhược điểm lớn", "Nếu máy chủ hỏng hoặc nghẽn mạng thì toàn bộ sập", "Thiết kế rất phức tạp, khó giữ nhất quán, bảo mật khó, chi phí đắt"],
          ["Ví dụ phù hợp", "Phòng khám tư nhân, trường học, thư viện tỉnh", "Chuỗi siêu thị toàn quốc, hệ thống ngân hàng thương mại"]
        ]
      }
    },

    {
      id: "sec-6",
      title: "153–157 & 171–172. Tổng Kết Bài Học, 7 Câu Tự Vấn Bắt Buộc & Mạch Kiến Thức",
      checkpointCards: [
        {
          title: "1. HỆ QTCSDL LÀ GÌ?",
          detail: "Phần mềm quản trị dữ liệu: tạo lập, cập nhật, truy xuất, bảo mật và an toàn cho CSDL."
        },
        {
          title: "2. BỐN NHÓM CHỨC NĂNG CỦA DBMS",
          detail: "Định nghĩa dữ liệu; Cập nhật & truy xuất; Bảo mật & an toàn; Giao diện lập trình ứng dụng."
        },
        {
          title: "3. HỆ CSDL GỒM NHỮNG GÌ?",
          detail: "CSDL (Dữ liệu) + Hệ QTCSDL (Phần mềm quản trị) + Phần mềm ứng dụng CSDL (+ Con người)."
        },
        {
          title: "4. SƠ ĐỒ 4 TẦNG CỐT LÕI",
          detail: "Người dùng ➜ Phần mềm ứng dụng CSDL ➜ Hệ QTCSDL (DBMS) ➜ Cơ sở dữ liệu (CSDL)."
        },
        {
          title: "5. TẬP TRUNG KHÁC PHÂN TÁN ĐIỂM NÀO?",
          detail: "Tập trung: Dữ liệu ở 1 nơi. Phân tán: Dữ liệu phân bố ở nhiều trạm qua mạng máy tính."
        },
        {
          title: "6. CỤC BỘ VS TOÀN CỤC",
          detail: "Cục bộ: Dùng dữ liệu 1 trạm. Toàn cục: Lấy dữ liệu từ ít nhất 2 trạm để cho kết quả."
        },
        {
          title: "7. CÂU NÓI KHẮC CỐT GHI TÂM",
          detail: "'Nhiều người cùng truy cập qua mạng KHÔNG CÓ NGHĨA là CSDL phân tán!' (Xem dữ liệu lưu ở đâu)."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|                        BÀI 12: HỆ QTCSDL VÀ HỆ CSDL                               |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
                             HỆ QUẢN TRỊ CSDL (DBMS)
                                         │
         ┌──────────────────┬────────────┴────────────┬──────────────────┐
         ▼                  ▼                         ▼                  ▼
     Định nghĩa       Cập nhật & truy xuất        Bảo mật &         Giao diện lập
       dữ liệu             dữ liệu                 an toàn          trình ứng dụng
     (Tạo khung)      (Thêm/Sửa/Xóa/Xem)        (Phân quyền/          (Cầu nối
                                               Giao dịch/Backup)     phần mềm)
                                         │
                                         ▼
                             PHẦN MỀM ỨNG DỤNG CSDL
                           (Website tra cứu, App bán hàng)
                                         │
                                         ▼
                                   HỆ CƠ SỞ DỮ LIỆU
                                         │
                     ┌───────────────────┴───────────────────┐
                     ▼                                       ▼
            HỆ CSDL TẬP TRUNG                       HỆ CSDL PHÂN TÁN
            (CSDL trên 1 máy)                     (Dữ liệu trên nhiều trạm)
                     │                                       │
              Dễ nhất quán,                         ┌────────┴────────┐
              nhưng dễ nghẽn                        ▼                 ▼
                                               Ứng dụng cục bộ   Ứng dụng toàn cục
                                                 (1 trạm)          (≥ 2 trạm)`
    }
  ],

  summaryQuiz: [
    {
      question: "Câu 1: Hệ quản trị cơ sở dữ liệu (DBMS) được định nghĩa chuẩn xác là:",
      options: [
        "A. Một tập hợp dữ liệu được tổ chức có cấu trúc.",
        "B. Phần mềm hỗ trợ quản lí, cập nhật, truy xuất và bảo vệ CSDL.",
        "C. Một website tra cứu điểm thi trên mạng Internet.",
        "D. Một mạng máy tính gồm nhiều trạm kết nối với nhau."
      ],
      answer: "B",
      explanation: "Theo định nghĩa chuẩn SGK, Hệ QTCSDL là phần mềm cung cấp môi trường tạo lập, lưu trữ, cập nhật, truy xuất và bảo đảm an toàn cho CSDL."
    },
    {
      question: "Câu 2: Thao tác người quản trị tạo thêm cấu trúc cột 'EmailPhuHuynh' vào bảng dữ liệu học sinh thuộc nhóm chức năng nào của Hệ QTCSDL?",
      options: [
        "A. Định nghĩa dữ liệu (Data Definition)",
        "B. Truy xuất dữ liệu",
        "C. Sao lưu dự phòng",
        "D. Ứng dụng cục bộ"
      ],
      answer: "A",
      explanation: "Tạo bảng, khai báo kiểu dữ liệu, thêm cột mới, sửa cấu trúc hoặc đặt ràng buộc toàn vẹn thuộc nhóm chức năng Định nghĩa dữ liệu."
    },
    {
      question: "Câu 3: Thao tác tiếp nhận và thêm thông tin một khách hàng mới vào hệ thống thuộc nhóm chức năng nào?",
      options: [
        "A. Định nghĩa dữ liệu",
        "B. Cập nhật dữ liệu (Thêm - Sửa - Xóa)",
        "C. Bảo mật CSDL",
        "D. Phân tán dữ liệu"
      ],
      answer: "B",
      explanation: "Thêm một bản ghi mới, sửa đổi thông tin hoặc xóa bản ghi thuộc nhóm chức năng Cập nhật dữ liệu."
    },
    {
      question: "Câu 4: Chức năng kiểm soát và quy định chỉ có giáo viên bộ môn mới có quyền sửa điểm môn học của mình thuộc về:",
      options: [
        "A. Bảo mật CSDL (Kiểm soát quyền truy cập)",
        "B. Định nghĩa dữ liệu",
        "C. Hệ CSDL tập trung",
        "D. Ứng dụng toàn cục"
      ],
      answer: "A",
      explanation: "Phân quyền truy cập theo vai trò người dùng nhằm ngăn chặn hành vi sửa đổi trái phép thuộc chức năng Bảo mật của Hệ QTCSDL."
    },
    {
      question: "Câu 5: Hoạt động tự động tạo bản sao lưu dữ liệu dự phòng (Backup) định kỳ nhằm mục đích chính nào sau đây?",
      options: [
        "A. Tăng cường tính an toàn dữ liệu và phục hồi khi xảy ra sự cố phần cứng",
        "B. Tạo giao diện người dùng đẹp mắt cho website",
        "C. Định nghĩa lại cấu trúc các bảng dữ liệu",
        "D. Phân tán dữ liệu sang nhiều chi nhánh"
      ],
      answer: "A",
      explanation: "Sao lưu dự phòng (Backup) là biện pháp bảo đảm An toàn dữ liệu, giúp khôi phục nguyên vẹn dữ liệu khi gặp sự cố."
    },
    {
      question: "Câu 6: Website tra cứu điểm thi THPT quốc gia được học sinh truy cập trên trình duyệt web thường được xếp vào thành phần nào?",
      options: [
        "A. Cơ sở dữ liệu (CSDL)",
        "B. Hệ quản trị CSDL (DBMS)",
        "C. Phần mềm ứng dụng CSDL",
        "D. Một bản sao lưu dự phòng"
      ],
      answer: "C",
      explanation: "Website tra cứu điểm thi là phần mềm ứng dụng CSDL phục vụ người dùng cuối, gửi yêu cầu qua DBMS để lấy dữ liệu hiển thị."
    },
    {
      question: "Câu 7: Một Hệ cơ sở dữ liệu (Database System) hoàn chỉnh bao gồm các thành phần cốt lõi nào?",
      options: [
        "A. Chỉ gồm các tệp dữ liệu lưu trên máy tính.",
        "B. Cơ sở dữ liệu + Hệ quản trị CSDL + Các phần mềm ứng dụng CSDL (và con người).",
        "C. Chỉ gồm trang web giao diện và máy chủ web.",
        "D. Chỉ gồm máy chủ phần cứng và mạng LAN."
      ],
      answer: "B",
      explanation: "Hệ CSDL = CSDL + Hệ QTCSDL + Các phần mềm ứng dụng CSDL (+ Con người tham gia quản lý, lập trình, sử dụng)."
    },
    {
      question: "Câu 8: Một hệ thống có CSDL lưu trữ trên một máy tính duy nhất, 50 nhân viên từ 50 máy tính khác nhau truy cập qua mạng để làm việc. Theo bài học, đây là:",
      options: [
        "A. Hệ CSDL phân tán",
        "B. Hệ CSDL tập trung",
        "C. Ứng dụng toàn cục",
        "D. Không phải là Hệ CSDL"
      ],
      answer: "B",
      explanation: "Điều quyết định hệ tập trung hay phân tán là VỊ TRÍ LƯU CSDL. Toàn bộ CSDL nằm trên 1 máy tính duy nhất nên đây vẫn là Hệ CSDL tập trung."
    },
    {
      question: "Câu 9: Điểm đặc trưng cốt lõi của Hệ cơ sở dữ liệu phân tán là:",
      options: [
        "A. Dữ liệu được phân bố lưu trữ trên nhiều trạm của mạng máy tính",
        "B. Chỉ có một người dùng duy nhất được phép sử dụng",
        "C. Không cần cài đặt Hệ quản trị CSDL",
        "D. Tuyệt đối không thể tạo bản sao lưu dữ liệu"
      ],
      answer: "A",
      explanation: "Trong hệ CSDL phân tán, dữ liệu thực tế được chia thành các phần và phân bố lưu trữ trên nhiều trạm (máy tính) kết nối qua mạng."
    },
    {
      question: "Câu 10: Ứng dụng tính toán doanh thu toàn quốc bằng cách tổng hợp dữ liệu từ cả hai trạm Hà Nội và TP.HCM được gọi là:",
      options: [
        "A. Ứng dụng cục bộ",
        "B. Ứng dụng toàn cục / phân tán",
        "C. Hệ quản trị CSDL",
        "D. Sao lưu dự phòng"
      ],
      answer: "B",
      explanation: "Ứng dụng toàn cục / phân tán là ứng dụng cần truy xuất dữ liệu từ ít nhất hai trạm khác nhau trong mạng để tạo ra kết quả cuối cùng."
    }
  ],

  practiceExercises: [
    {
      id: "practice-b12-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Điền Đúng Bộ Tứ Khái Niệm Cốt Lõi (Mục 126)",
      duration: "2 phút",
      type: "exercise",
      description: "Phân biệt chính xác giữa CSDL, Hệ QTCSDL, Phần mềm ứng dụng CSDL và Hệ CSDL.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Phân biệt 4 khái niệm dễ nhầm lẫn nhất.",
        requirements: [
          "Cho 4 khái niệm:\n[A] Cơ sở dữ liệu (CSDL)\n[B] Hệ quản trị CSDL (DBMS)\n[C] Phần mềm ứng dụng CSDL\n[D] Hệ cơ sở dữ liệu\n\nHãy ghép nối chính xác với 4 đối tượng thực tế sau:\n1. PostgreSQL\n2. Dữ liệu điểm thi học kì của 2.000 học sinh\n3. Website tra cứu điểm thi trực tuyến\n4. Toàn bộ hệ thống quản lý điểm gồm: CSDL điểm + PostgreSQL + Website tra cứu + Cán bộ quản lý"
        ],
        qaList: [
          {
            q: "Kết quả ghép nối chuẩn xác:",
            a: "Đáp án:\n• 1. PostgreSQL ➜ [B] Hệ quản trị CSDL (DBMS)\n• 2. Dữ liệu điểm thi ➜ [A] Cơ sở dữ liệu (CSDL)\n• 3. Website tra cứu điểm ➜ [C] Phần mềm ứng dụng CSDL\n• 4. Toàn bộ hệ thống ➜ [D] Hệ cơ sở dữ liệu"
          }
        ]
      }
    },
    {
      id: "practice-b12-2",
      badge: "Bài 2 – 3 phút",
      title: "Bài 2 – Nhận Diện 4 Nhóm Chức Năng Của Hệ QTCSDL (Mục 127)",
      duration: "3 phút",
      type: "exercise",
      description: "Phân loại các thao tác quản trị vào đúng 4 nhóm chức năng của DBMS.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Nhận diện 4 nhóm chức năng DBMS.",
        requirements: [
          "Ghép 5 thao tác sau vào 4 nhóm chức năng của Hệ QTCSDL:\n1. Thêm một học sinh mới chuyển trường vào danh sách lớp.\n2. Tạo cấu trúc bảng mới gồm các cột: Mã sách, Tên sách, Tác giả, Năm xuất bản.\n3. Thiết lập mật khẩu và quyền chỉ cho giáo viên sửa điểm.\n4. Tạo bản sao lưu dự phòng CSDL vào lúc 23h hàng đêm.\n5. Cung cấp phương thức cho Website bán hàng gửi lệnh tìm sản phẩm."
        ],
        qaList: [
          {
            q: "Đáp án phân loại chức năng:",
            a: "1. Thêm học sinh mới ➜ Nhóm CẬP NHẬT DỮ LIỆU.\n2. Tạo cấu trúc bảng mới ➜ Nhóm ĐỊNH NGHĨA DỮ LIỆU.\n3. Thiết lập quyền sửa điểm ➜ Nhóm BẢO MẬT CSDL.\n4. Sao lưu dự phòng lúc 23h ➜ Nhóm AN TOÀN CSDL.\n5. Cho Website kết nối gửi lệnh ➜ Nhóm GIAO DIỆN LẬP TRÌNH ỨNG DỤNG."
          }
        ]
      }
    },
    {
      id: "practice-b12-3",
      badge: "Bài 3 – 2 phút",
      title: "Bài 3 – Phân Biệt: Tập Trung Hay Phân Tán? (Mục 128)",
      duration: "2 phút",
      type: "exercise",
      description: "Xác định mô hình tổ chức hệ CSDL dựa trên vị trí lưu trữ dữ liệu thực tế.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nhận diện Hệ CSDL tập trung vs phân tán.",
        requirements: [
          "Xác định hai hệ thống sau thuộc mô hình Tập trung hay Phân tán:\n• Hệ thống A: Có 10 máy tính của nhân viên đặt ở 10 phòng ban khác nhau, tất cả cùng gửi yêu cầu truy cập về 1 CSDL duy nhất lưu trên 1 máy chủ trung tâm.\n• Hệ thống B: Một công ty có 3 chi nhánh tại Hà Nội, Đà Nẵng, TP.HCM; mỗi chi nhánh có một máy chủ lưu trữ CSDL cục bộ của riêng chi nhánh đó và các trạm kết nối với nhau qua mạng."
        ],
        qaList: [
          {
            q: "Đáp án phân tích mô hình:",
            a: "• Hệ thống A ➜ HỆ CSDL TẬP TRUNG (Vì toàn bộ CSDL chỉ lưu trên 1 máy chủ duy nhất, dù có nhiều máy trạm truy cập từ xa).\n• Hệ thống B ➜ HỆ CSDL PHÂN TÁN (Vì dữ liệu thực tế được phân bố lưu trữ trên nhiều trạm máy tính khác nhau trong mạng)."
          }
        ]
      }
    },
    {
      id: "practice-b12-4",
      badge: "Bài 4 – 2 phút",
      title: "Bài 4 – Ứng Dụng Cục Bộ Hay Ứng Dụng Toàn Cục? (Mục 129)",
      duration: "2 phút",
      type: "exercise",
      description: "Phân biệt phạm vi truy xuất dữ liệu giữa ứng dụng cục bộ và ứng dụng phân tán.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nhận thức rõ phạm vi trạm dữ liệu.",
        requirements: [
          "Một chuỗi bán lẻ có 3 trạm CSDL tại Hà Nội, Đà Nẵng và TP.HCM. Hãy cho biết 2 thao tác sau thuộc loại ứng dụng nào:\n• Thao tác 1: Thu ngân tại chi nhánh Đà Nẵng mở phần mềm in danh sách các đơn hàng đã bán trong ngày của riêng chi nhánh Đà Nẵng.\n• Thao tác 2: Giám đốc kinh doanh tại trụ sở mở phần mềm xem biểu đồ tổng doanh thu toàn quốc bằng cách tổng hợp dữ liệu từ cả 3 chi nhánh Hà Nội, Đà Nẵng và TP.HCM."
        ],
        qaList: [
          {
            q: "Đáp án phân loại ứng dụng:",
            a: "• Thao tác 1 ➜ ỨNG DỤNG CỤC BỘ (Vì ứng dụng chỉ cần truy xuất dữ liệu từ MỘT trạm duy nhất là Đà Nẵng).\n• Thao tác 2 ➜ ỨNG DỤNG TOÀN CỤC / PHÂN TÁN (Vì ứng dụng phải truy xuất và kết hợp dữ liệu từ ÍT NHẤT HAI TRẠM trở lên để cho kết quả cuối cùng)."
          }
        ]
      }
    },
    {
      id: "practice-b12-5",
      badge: "Bài 5 – 4 phút",
      title: "Bài 5 – Phân Tích Ưu Nhược Điểm: Doanh Nghiệp 100 Chi Nhánh (Mục 130)",
      duration: "4 phút",
      type: "exercise",
      description: "Đánh giá đa chiều lý do lựa chọn mô hình phân tán và các thách thức đi kèm.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 4 phút. Tư duy kiến trúc hệ thống thực tế.",
        requirements: [
          "Một doanh nghiệp bán lẻ đang phát triển mạnh và mở rộng tới 100 chi nhánh trên toàn quốc.\n1. Vì sao việc chuyển sang mô hình CSDL phân tán có thể hợp lý hơn là giữ nguyên 1 máy chủ tập trung duy nhất?\n2. Nêu ít nhất 3 khó khăn lớn nhất khi vận hành hệ CSDL phân tán 100 chi nhánh này."
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "1. Lý do nên dùng Phân tán:\n• Giảm tải nghẽn mạng: Dữ liệu khách hàng địa phương lưu ngay tại chi nhánh giúp thu ngân bán hàng cực nhanh không phụ thuộc đường truyền xa.\n• Độ sẵn sàng cao: Nếu cáp quang quốc tế hoặc mạng khu vực Hà Nội gặp sự cố, 99 chi nhánh còn lại vẫn bán hàng bình thường.\n• Dễ mở rộng: Mở thêm chi nhánh 101 chỉ cần bổ sung 1 trạm mới mà không làm quá tải cụm máy chủ cũ.\n\n2. Ba khó khăn lớn nhất:\n• Khó đảm bảo tính nhất quán (ví dụ: cập nhật bảng giá khuyến mại mới đồng loạt cho 100 trạm rất dễ bị lệch).\n• Thiết kế và bảo trì hệ thống cực kỳ phức tạp.\n• Chi phí đầu tư thiết bị và bảo mật mạng cho 100 trạm cao hơn rất nhiều so với tập trung."
          }
        ]
      }
    },
    {
      id: "practice-b12-6",
      badge: "Bài 6 – 2 phút",
      title: "Bài 6 – Câu Gài 1: 50 Ứng Dụng Đặt Trên 50 Máy Khác Nhau (Mục 131)",
      duration: "2 phút",
      type: "exercise",
      description: "Phá vỡ ngộ nhận thường gặp giữa 'nhiều ứng dụng' và 'CSDL phân tán'.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 2 phút. Phản xạ tránh bẫy đề thi.",
        requirements: [
          "Một bạn học sinh khẳng định: 'Trường em có 50 máy tính đặt ở 50 phòng ban khác nhau, mỗi máy cài một phần mềm ứng dụng riêng, nên hệ thống CSDL của trường em chắc chắn là Hệ CSDL phân tán!'\nKhẳng định của bạn có chính xác không? Vì sao?"
        ],
        qaList: [
          {
            q: "Đáp án phân tích bẫy:",
            a: "Đáp án: KHẲNG ĐỊNH CỦA BẠN LÀ SAI!\n• Giải thích: Số lượng máy tính người dùng hay số lượng phần mềm ứng dụng KHÔNG quyết định hệ thống là tập trung hay phân tán. Điều quyết định là: DỮ LIỆU CSDL ĐƯỢC LƯU Ở ĐÂU. Nếu toàn bộ dữ liệu điểm và hồ sơ học sinh vẫn lưu trữ trên 1 máy chủ duy nhất của trường thì đây vẫn là HỆ CSDL TẬP TRUNG."
          }
        ]
      }
    },
    {
      id: "practice-b12-7",
      badge: "Bài 7 – 2 phút",
      title: "Bài 7 – Câu Gài 2: Dữ Liệu Phân Tán Có Nhất Thiết Giống Hệt Nhau? (Mục 132)",
      duration: "2 phút",
      type: "exercise",
      description: "Làm rõ bản chất phân tán dữ liệu: Phân mảnh dữ liệu theo nghiệp vụ địa phương.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Hiểu đúng về CSDL cục bộ.",
        requirements: [
          "Có người cho rằng: 'Trong hệ CSDL phân tán, dữ liệu ở mọi trạm lúc nào cũng phải được sao chép y hệt nhau 100%'. Ý kiến này đúng hay sai? Vì sao?"
        ],
        qaList: [
          {
            q: "Đáp án phân tích:",
            a: "Đáp án: Ý KIẾN NÀY LÀ SAI!\n• Giải thích: Trong CSDL phân tán, các trạm thường lưu các phần DỮ LIỆU CỤC BỘ KHÁC NHAU theo địa bàn quản lý. Trạm Hà Nội lưu khách hàng Hà Nội; Trạm Đà Nẵng lưu khách hàng miền Trung. Chúng chỉ thuộc chung một hệ CSDL thống nhất và có thể truy xuất phối hợp khi cần chứ không nhất thiết trạm nào cũng phải giữ bản sao của nhau."
          }
        ]
      }
    },
    {
      id: "practice-b12-8",
      badge: "Bài 8 – 2 phút",
      title: "Bài 8 – Câu Gài 3: Hệ QTCSDL Có Phải Giao Diện Website Không? (Mục 133)",
      duration: "2 phút",
      type: "exercise",
      description: "Phân biệt rạch ròi giữa giao diện người dùng và phần mềm quản trị phía sau.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Phân biệt tầng ứng dụng và tầng quản trị.",
        requirements: [
          "Khi học sinh mở website tra cứu điểm thi và nhìn thấy các ô nhập Số báo danh, nút bấm 'Tra cứu', có phải bạn đang nhìn thấy Hệ quản trị CSDL không?"
        ],
        qaList: [
          {
            q: "Đáp án phân tích:",
            a: "Đáp án: KHÔNG PHẢI!\n• Giải thích: Màn hình giao diện màu sắc, ô nhập văn bản và nút bấm đó là PHẦN MỀM ỨNG DỤNG CSDL (giao diện người dùng). Còn Hệ quản trị CSDL (như MySQL, PostgreSQL) là phần mềm chạy ngầm phía sau máy chủ, không hiển thị trực tiếp cho học sinh xem mà chỉ giao tiếp với website qua giao diện lập trình."
          }
        ]
      }
    },
    {
      id: "practice-b12-9",
      badge: "Bài 9 – 2 phút",
      title: "Bài 9 – Câu Gài 4: Mục Đích Chính Của Backup Có Phải Chống Đăng Nhập Lậu? (Mục 134)",
      duration: "2 phút",
      type: "exercise",
      description: "Phân định ranh giới giữa Bảo mật (Security) và An toàn dữ liệu (Safety / Backup).",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Phân biệt Bảo mật vs An toàn.",
        requirements: [
          "Một kỹ thuật viên nói: 'Chúng tôi sao lưu dự phòng (Backup) CSDL mỗi ngày để ngăn chặn người lạ đăng nhập trái phép vào hệ thống'. Phát biểu này có đúng về mặt mục đích chuyên môn không?"
        ],
        qaList: [
          {
            q: "Đáp án phân tích:",
            a: "Đáp án: PHÁT BIỂU SAI MỤC ĐÍCH!\n• Giải thích: Mục đích chính của Backup (Sao lưu dự phòng) là bảo đảm AN TOÀN DỮ LIỆU – giúp khôi phục dữ liệu nguyên vẹn khi máy chủ hỏng hóc, cháy nổ, mất điện hoặc xóa nhầm. Còn việc ngăn chặn người lạ đăng nhập trái phép là chức năng BẢO MẬT (xác thực và phân quyền truy cập)."
          }
        ]
      }
    },
    {
      id: "practice-b12-10",
      badge: "Bài 10 – 2 phút",
      title: "Bài 10 – Câu Gài 5: 'Cập Nhật Dữ Liệu' Có Phải Chỉ Là Sửa Dữ Liệu? (Mục 135)",
      duration: "2 phút",
      type: "exercise",
      description: "Nắm trọn bộ 3 thao tác cơ bản cấu thành khái niệm Cập nhật dữ liệu.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Hiểu chuẩn thuật ngữ Cập nhật.",
        requirements: [
          "Trong ngôn ngữ hàng ngày, từ 'cập nhật' thường được hiểu là sửa thông tin cũ thành mới. Trong Tin học và CSDL, khái niệm 'Cập nhật dữ liệu' bao gồm những thao tác nào?"
        ],
        qaList: [
          {
            q: "Đáp án giải thích thuật ngữ:",
            a: "Đáp án:\n• Trong môn Tin học và CSDL, khái niệm CẬP NHẬT DỮ LIỆU bao gồm đầy đủ CẢ BA THAO TÁC làm thay đổi nội dung CSDL:\n  1. THÊM dữ liệu mới (Insert / Add).\n  2. SỬA dữ liệu đã có (Update / Modify).\n  3. XÓA dữ liệu không còn cần thiết (Delete / Remove)."
          }
        ]
      }
    },
    {
      id: "practice-b12-library",
      badge: "Vận Dụng Lớn – 5 phút",
      title: "Bài Vận Dụng Lớn: Phân Tích Hệ Thống CSDL Thư Viện Hoàn Chỉnh (Mục 164–165)",
      duration: "5 phút",
      type: "exercise",
      description: "Chỉ rõ các thành phần cấu thành một Hệ CSDL thư viện thực tế theo chuẩn SGK.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 5 phút. Tích hợp toàn diện kiến thức Bài 12.",
        requirements: [
          "Một thư viện số của trường học bao gồm: CSDL sách và độc giả; Hệ QTCSDL MySQL quản lý ngầm; Màn hình cảm ứng cho học sinh tra cứu sách tại sảnh; Phần mềm quét mã vạch mượn trả của thủ thư; và Đội ngũ thủ thư, học sinh sử dụng.\n1. Hãy chỉ rõ từng thành phần trên thuộc bộ phận nào của Hệ CSDL thư viện.\n2. Khi thủ thư bấm 'Gia hạn mượn sách thêm 7 ngày', Hệ QTCSDL thực hiện nhóm chức năng nào?"
        ],
        qaList: [
          {
            q: "1. Phân loại thành phần Hệ CSDL Thư viện:",
            a: "• CSDL: Dữ liệu về sách, thể loại, thông tin độc giả và lịch sử mượn trả lưu trên đĩa máy chủ.\n• Hệ QTCSDL: Phần mềm MySQL quản trị kho dữ liệu phía sau.\n• Phần mềm ứng dụng CSDL: Gồm 2 ứng dụng (Màn hình cảm ứng tra cứu sách + Phần mềm quét mã vạch của thủ thư).\n• Con người: Thủ thư (người dùng vận hành/nhập liệu), Học sinh (người dùng cuối tra cứu), Chuyên viên IT (người quản trị hệ thống)."
          },
          {
            q: "2. Chức năng khi thủ thư gia hạn sách:",
            a: "• Đó là chức năng CẬP NHẬT DỮ LIỆU (thao tác SỬA hạn trả sách từ ngày cũ sang ngày mới)."
          }
        ]
      }
    },
    {
      id: "practice-b12-quick15",
      badge: "Phản Xạ – 3 phút",
      title: "Bộ 15 Tình Huống Ngắn Kiểm Tra Phản Xạ Toàn Diện (Mục 181)",
      duration: "3 phút",
      type: "exercise",
      description: "Đọc tình huống và gọi tên đúng khái niệm hoặc chức năng CSDL trong 3 giây!",
      content: {
        objective: "Rèn luyện phản xạ thần tốc cho các câu hỏi trắc nghiệm kiểm tra.",
        requirements: [
          "Xác định nhanh khái niệm hoặc chức năng tương ứng cho 15 tình huống sau:\n1. Tạo CSDL mới.\n2. Thêm một học sinh vào lớp.\n3. Xóa một bản ghi nhập nhầm.\n4. Xem điểm thi của học sinh.\n5. Chỉ giáo viên dạy môn nào được sửa điểm môn đó.\n6. Hai nhân viên cùng sửa/xóa đồng thời một khách hàng.\n7. Tạo bản sao lưu dữ liệu lúc 23h.\n8. Website gửi yêu cầu lấy dữ liệu tới DBMS.\n9. Phần mềm PostgreSQL.\n10. Dữ liệu điểm số của học sinh.\n11. Website xem điểm thi.\n12. CSDL + DBMS + Website tra cứu.\n13. 20 người cùng truy cập 1 CSDL trên 1 máy tính.\n14. Mỗi chi nhánh có một máy chủ chứa CSDL riêng kết nối qua mạng.\n15. Tính tổng doanh thu của cả chi nhánh Hà Nội và Đà Nẵng."
        ],
        qaList: [
          {
            q: "Đáp án phản xạ chuẩn xác 15 tình huống:",
            a: "1. Tạo CSDL mới ➜ Định nghĩa dữ liệu.\n2. Thêm học sinh ➜ Cập nhật dữ liệu.\n3. Xóa bản ghi nhầm ➜ Cập nhật dữ liệu.\n4. Xem điểm thi ➜ Truy xuất dữ liệu.\n5. Chỉ giáo viên sửa điểm ➜ Bảo mật CSDL (phân quyền).\n6. Thao tác đồng thời ➜ Kiểm soát giao dịch (giữ nhất quán).\n7. Tạo bản sao lưu ➜ An toàn CSDL (sao lưu dự phòng).\n8. App gửi yêu cầu tới DBMS ➜ Giao diện lập trình ứng dụng.\n9. PostgreSQL ➜ Hệ quản trị CSDL (DBMS).\n10. Dữ liệu điểm số ➜ Cơ sở dữ liệu (CSDL).\n11. Website xem điểm ➜ Phần mềm ứng dụng CSDL.\n12. CSDL + DBMS + App ➜ Hệ cơ sở dữ liệu.\n13. 20 người dùng 1 CSDL trên 1 máy ➜ Hệ CSDL tập trung.\n14. Mỗi chi nhánh có CSDL riêng ➜ Hệ CSDL phân tán.\n15. Doanh thu nhiều chi nhánh ➜ Ứng dụng toàn cục / phân tán."
          }
        ]
      }
    },
    {
      id: "practice-b12-essay",
      badge: "Tự Luận – 5 phút",
      title: "Bảy Câu Hỏi Tự Luận Cốt Lõi Buổi Học (Mục 146–152)",
      duration: "5 phút",
      type: "exercise",
      description: "7 câu hỏi tự luận giúp học sinh tự diễn đạt trôi chảy toàn bộ kiến thức Bài 12.",
      content: {
        objective: "Đánh giá mức độ hiểu sâu bản chất kiến thức chuẩn đầu ra.",
        requirements: [
          "Câu 1: Vì sao không thể chỉ đưa tệp CSDL cho mọi người tự mở khai thác?\nCâu 2: Nêu 4 nhóm chức năng chính của Hệ QTCSDL.\nCâu 3: Vì sao kiểm soát giao dịch lại liên quan trực tiếp tới tính nhất quán?\nCâu 4: Phân biệt CSDL, Hệ QTCSDL, Phần mềm ứng dụng CSDL và Hệ CSDL.\nCâu 5: Phân biệt Hệ CSDL tập trung và Hệ CSDL phân tán.\nCâu 6: Vì sao CSDL phân tán lại khó quản lý hơn hệ tập trung?\nCâu 7: Ứng dụng cục bộ và Ứng dụng toàn cục khác nhau như thế nào?"
        ],
        qaList: [
          {
            q: "Đáp án và dàn ý 7 câu tự luận chuẩn mực:",
            a: "• Câu 1: Vì người dùng bình thường không biết cấu trúc tệp nhị phân phức tạp; không thể kiểm soát quyền xem/sửa (dễ bị sửa trộm hay xóa nhầm); và không xử lý được xung đột khi nhiều người cùng mở tệp một lúc.\n• Câu 2: Bốn nhóm: 1. Định nghĩa dữ liệu; 2. Cập nhật và truy xuất dữ liệu; 3. Bảo mật, an toàn CSDL; 4. Cung cấp giao diện lập trình ứng dụng.\n• Câu 3: Khi nhiều người cùng thao tác (sửa, xóa, chuyển tiền) đồng thời, nếu không kiểm soát giao dịch thì các thao tác sẽ đè lên nhau hoặc dở dang, dẫn tới số liệu mâu thuẫn, mất tính nhất quán.\n• Câu 4: CSDL là DỮ LIỆU; Hệ QTCSDL là PHẦN MỀM QUẢN TRỊ DỮ LIỆU; Phần mềm ứng dụng CSDL là PHẦN MỀM NGƯỜI DÙNG TƯƠNG TÁC; Hệ CSDL là TOÀN BỘ HỆ THỐNG gồm cả 3 thành phần trên (+ con người).\n• Câu 5: Hệ tập trung: Toàn bộ CSDL lưu tại 1 máy tính duy nhất. Hệ phân tán: Dữ liệu được phân bố lưu trữ trên nhiều trạm của mạng máy tính.\n• Câu 6: Vì có nhiều trạm, nhiều đường truyền mạng, rất khó đồng bộ dữ liệu để giữ tính nhất quán, bảo mật khó khăn và chi phí duy trì rất cao.\n• Câu 7: Ứng dụng cục bộ chỉ cần dữ liệu của 1 trạm duy nhất. Ứng dụng toàn cục/phân tán cần kết hợp dữ liệu từ ít nhất 2 trạm khác nhau để cho kết quả cuối cùng."
          }
        ]
      }
    }
  ],

  examTypes: [
    {
      id: "exam-type-1",
      title: "Dạng 1: Phân biệt bộ tứ: CSDL vs Hệ QTCSDL vs Ứng dụng vs Hệ CSDL",
      importance: "Rất hay gặp (Kiểm tra 15p & Học kỳ)",
      technique: "Công thức nhớ nhanh: CSDL = Dữ liệu; Hệ QTCSDL = Phần mềm quản trị (MySQL, Access, PostgreSQL); Ứng dụng = Phần mềm cho người dùng (Website, App); Hệ CSDL = Toàn bộ hệ thống kết hợp.",
      examples: [
        "Đề bài: Cho các đối tượng: MySQL, Danh sách học sinh lớp 11A, Website tra cứu điểm thi. Hãy xác định từng đối tượng thuộc khái niệm nào?"
      ]
    },
    {
      id: "exam-type-2",
      title: "Dạng 2: Phân loại 4 nhóm chức năng của Hệ QTCSDL",
      importance: "Trọng tâm bài học",
      technique: "Đọc hành động trong câu hỏi: Tạo khung/bảng/cột/ràng buộc ➜ Định nghĩa. Thêm/sửa/xóa ➜ Cập nhật. Xem/tìm/xuất báo cáo ➜ Truy xuất. Phân quyền/mật khẩu ➜ Bảo mật. Backup/khôi phục/giao dịch ➜ An toàn. App kết nối ➜ Giao diện lập trình.",
      examples: [
        "Câu hỏi: 'Người quản trị bổ sung cột Ngày sinh vào bảng NhanVien' thuộc nhóm chức năng nào của Hệ QTCSDL? ➜ Định nghĩa dữ liệu."
      ]
    },
    {
      id: "exam-type-3",
      title: "Dạng 3: Nhận diện kiến trúc 4 tầng của một Hệ CSDL",
      importance: "Cơ bản",
      technique: "Thứ tự từ trên xuống: Người dùng ➜ Phần mềm ứng dụng CSDL ➜ Hệ QTCSDL (DBMS) ➜ CSDL. Chú ý: Ứng dụng không bao giờ chui qua mặt DBMS để vào thẳng CSDL!",
      examples: [
        "Đề bài: Điền tên các tầng trong sơ đồ luồng dữ liệu khi thí sinh tra cứu điểm thi THPT quốc gia."
      ]
    },
    {
      id: "exam-type-4",
      title: "Dạng 4: Phân biệt Hệ CSDL Tập trung vs Hệ CSDL Phân tán",
      importance: "Trọng tâm lý thuyết và đề thi",
      technique: "Bí quyết vàng: Nhìn vào NƠI LƯU CSDL, KHÔNG nhìn vào số lượng người dùng. Lưu trên 1 máy tính duy nhất ➜ Tập trung (kể cả có 1.000 người truy cập qua mạng). Lưu trên nhiều trạm kết nối mạng ➜ Phân tán.",
      examples: [
        "Câu hỏi gài: 'Một hệ thống có 1 CSDL đặt ở Hà Nội, 20 chi nhánh gửi lệnh truy cập qua mạng. Đây là hệ tập trung hay phân tán?' ➜ Đáp án: Hệ CSDL tập trung!"
      ]
    },
    {
      id: "exam-type-5",
      title: "Dạng 5: Phân biệt Ứng dụng cục bộ vs Ứng dụng toàn cục (Phân tán)",
      importance: "Vận dụng điểm 9 - 10",
      technique: "Chỉ dùng dữ liệu của 1 trạm ➜ Cục bộ. Dùng dữ liệu từ ≥ 2 trạm để cho kết quả ➜ Toàn cục (phân tán).",
      examples: [
        "Tình huống: Chi nhánh TP.HCM in danh sách tồn kho của kho TP.HCM ➜ Cục bộ. Giám đốc in tổng tồn kho toàn quốc của cả kho HN và kho TP.HCM ➜ Toàn cục."
      ]
    }
  ],

  homework: {
    title: "Bài Tập Về Nhà Bài 12 (Chuẩn Bị Cho Bài 13: CSDL Quan Hệ)",
    part1: {
      title: "Phần 1: Trắc nghiệm củng cố (Tự làm lại Mini Test 10 câu)",
      description: "Làm lại toàn bộ 10 câu trắc nghiệm của Bài 12, giải thích rõ căn cứ chọn đáp án đúng cho từng câu."
    },
    part2: {
      title: "Phần 2: Phân tích Hệ CSDL thực tế – Cửa hàng tiện lợi",
      description: "Một cửa hàng tiện lợi gồm: Máy tính thu ngân quét mã vạch, CSDL hàng hóa và hóa đơn, Hệ QTCSDL SQLite và phần mềm bán hàng. Hãy: 1. Chỉ rõ 4 thành phần của Hệ CSDL này. 2. Cho ví dụ về một thao tác cập nhật và một thao tác truy xuất dữ liệu tại quầy thu ngân."
    },
    part3: {
      title: "Phần 3: Câu hỏi mở đầu Bài 13",
      description: "Suy nghĩ và tìm hiểu trước: 'Trong các CSDL hiện đại ngày nay, dữ liệu thường được tổ chức dưới dạng các BẢNG gồm các hàng và cột có liên kết chặt chẽ với nhau. Mô hình tổ chức này được gọi là gì?' ➜ Tìm hiểu về CƠ SỞ DỮ LIỆU QUAN HỆ (Relational Database)."
    }
  },

  pedagogyTips: {
    teachingSteps: [
      { step: "Bước 1: Khởi động bằng tình huống thực tế", desc: "Đưa ví dụ website tra cứu điểm thi ➜ Hỏi: 'Có phải website mở thẳng file dữ liệu không?' ➜ Khẳng định cần một lớp phần mềm trung gian bảo vệ và điều phối." },
      { step: "Bước 2: Chuẩn hóa thuật ngữ Hệ QTCSDL", desc: "Giới thiệu DBMS và phân biệt rõ: DBMS là công cụ phần mềm quản lý, CSDL là nội dung dữ liệu." },
      { step: "Bước 3: Dạy 4 nhóm chức năng bằng hình ảnh đời thường", desc: "Định nghĩa (Tạo khung), Cập nhật & truy xuất (Thêm/Sửa/Xóa/Xem), Bảo mật & an toàn (Đúng người, không xung đột, có backup), Giao diện lập trình (Cho app nói chuyện với DBMS)." },
      { step: "Bước 4: Dạy kiến trúc Hệ CSDL và bộ tứ khái niệm", desc: "Vẽ sơ đồ 4 tầng: Người dùng ➜ Ứng dụng CSDL ➜ Hệ QTCSDL ➜ CSDL. Phân biệt CSDL / DBMS / Ứng dụng / Hệ CSDL." },
      { step: "Bước 5: Dạy Tập trung vs Phân tán qua câu hỏi gài", desc: "Nhấn mạnh: 'Nhiều người dùng qua mạng KHÔNG CÓ NGHĨA là phân tán'. CSDL ở 1 máy là tập trung, CSDL ở nhiều trạm mới là phân tán." }
    ],
    rulesToAvoid: [
      "TUYỆT ĐỐI KHÔNG dạy câu lệnh SQL (SELECT, INSERT, UPDATE, DELETE, CREATE TABLE...) trong Bài 12.",
      "TUYỆT ĐỐI KHÔNG dạy các thuật ngữ nâng cao ngoài SGK như ACID chi tiết, Sharding, Replication, Khóa chính, Khóa ngoại, JOIN.",
      "Không nhầm lẫn 'Giao diện lập trình ứng dụng (API)' với 'Giao diện người dùng (UI)'.",
      "Không nhầm lẫn 'CSDL phân tán' với 'Xử lý phân tán'."
    ]
  }
}
