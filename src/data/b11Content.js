/**
 * Dữ liệu bài giảng Bài 11: Cơ sở dữ liệu
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: khoảng 100 phút)
 * Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu
 * Định hướng: Kiến thức cốt lõi chung (CS & ICT)
 */
export const b11Content = {
  warmUp: {
    question: "Bảng điểm môn Toán ghi Nguyễn Kì Duyên được 9 điểm cuối kì, nhưng Bảng điểm tổng hợp của lớp lại ghi môn Toán 8 điểm. Điểm thật của bạn là 8 hay 9? Và tại sao máy tính lại xuất hiện mâu thuẫn này?",
    description: "Câu trả lời là: Do dữ liệu bị lưu lặp lại nhiều nơi (dư thừa dữ liệu) và khi cập nhật điểm mới ở một nơi thì nơi khác bị quên hoặc gõ nhầm, dẫn tới 'mất tính nhất quán'. Tin học hóa không chỉ đơn thuần là gõ sổ giấy thành các file Word, Excel riêng lẻ. Để dữ liệu không rối, không trùng lặp, không mâu thuẫn và nhiều phần mềm cùng khai thác được, chúng ta cần tổ chức dữ liệu thành Cơ sở dữ liệu (CSDL) đáp ứng 6 thuộc tính vàng!"
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mạch Kiến Thức Cả Buổi & Khung Phân Bổ 100 Phút",
      subsections: [
        {
          heading: "1. Mạch tư duy của buổi học",
          points: [
            "Bài 10 đã cho học sinh thấy dòng luồng: Dữ liệu ➜ Xử lý ➜ Thông tin ➜ Hỗ trợ quản lý / Ra quyết định.",
            "Bài 11 đi tiếp một câu hỏi sống còn: Khi dữ liệu ngày càng nhiều, nhiều người và nhiều phần mềm cùng sử dụng thì phải lưu trữ như thế nào để không rối, không trùng lặp, không mâu thuẫn và dễ khai thác?",
            "Mạch logic: Lưu tùy tiện ➜ Dư thừa, sai lệch, khó sửa phần mềm ➜ Cần tổ chức dữ liệu khoa học ➜ Dữ liệu có cấu trúc ➜ CƠ SỞ DỮ LIỆU (CSDL) với 6 thuộc tính cơ bản.",
            "Trọng tâm Bài 11: Không học SQL hay thiết kế bảng quan hệ phức tạp. Trọng tâm là hiểu 'Vì sao cần tổ chức dữ liệu khoa học', 'CSDL là gì' và nắm vững '6 thuộc tính cơ bản của CSDL'."
          ]
        },
        {
          heading: "2. Khung phân bổ thời gian buổi học 100 phút",
          points: [
            "0–8 phút: Khởi động bằng tình huống hai bảng điểm mâu thuẫn (Toán 9 vs Tổng hợp 8).",
            "8–23 phút: Dư thừa dữ liệu và không nhất quán (Tin học hóa không chỉ là biến giấy thành file; Dư thừa ≠ cấm trùng lặp).",
            "23–36 phút: Sự phụ thuộc giữa phần mềm và dữ liệu (Tính độc lập dữ liệu mức độ lớp 11).",
            "36–48 phút: Dữ liệu có cấu trúc và Định nghĩa Cơ sở dữ liệu (3 ví dụ: trường học, bán hàng, ngân hàng).",
            "48–72 phút: Sáu thuộc tính cơ bản của CSDL (Cấu trúc, Không dư thừa, Độc lập, Toàn vẹn, Nhất quán, Bảo mật & An toàn).",
            "72–90 phút: 10 bài tập tình huống thực tế (Thư viện, Ngân hàng, Cửa hàng).",
            "90–97 phút: Mini Test 7 câu trắc nghiệm đánh giá chuẩn đầu ra.",
            "97–100 phút: Chốt 8 kiến thức cốt lõi, 6 câu hỏi tự vấn và mạch nối sang Bài 12."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Tình huống Khởi động Đặt vấn đề",
        text: "Gia sư trình chiếu: Bảng điểm môn Toán: Nguyễn Kì Duyên - 9. Bảng điểm tổng hợp lớp: Nguyễn Kì Duyên - Toán 8, Tin 10, Lý 9. Hỏi: 'Điểm Toán cuối kì của bạn là 8 hay 9? Nếu điểm đúng là 9, tại sao hệ thống lại xuất hiện số 8?' ➜ Học sinh nhận ra ngay: Cùng một dữ liệu bị chép ở nhiều file riêng lẻ; một nơi sửa mà nơi kia quên sửa ➜ Dư thừa dẫn đến mất nhất quán!"
      }
    },
    {
      id: "sec-2",
      title: "III. Lưu Trữ Dữ Liệu Khoa Học: Chống Dư Thừa & Mất Nhất Quán",
      subsections: [
        {
          heading: "1. Tin học hóa không chỉ là 'đưa giấy vào máy tính'",
          text: "Nếu trước đây ghi điểm vào sổ giấy, bây giờ chỉ gõ y nguyên thành các file Excel riêng lẻ (diem_toan.xlsx, diem_tin.xlsx, bang_diem_lop.xlsx, tong_hop.xlsx) thì chưa phải là tổ chức khoa học:",
          points: [
            "Nếu cùng một điểm xuất hiện trong nhiều file, mỗi lần sửa điểm giáo viên phải nhớ mở tất cả các file để sửa.",
            "Chỉ cần quên một file (diem_toan.xlsx là 9, nhưng tong_hop.xlsx vẫn là 8) ➜ Dữ liệu lập tức mâu thuẫn.",
            "Kết luận: Dữ liệu phải được tổ chức tập trung để giảm lặp lại không cần thiết và thuận tiện cho việc cập nhật, khai thác."
          ]
        },
        {
          heading: "2. Dư thừa dữ liệu là gì?",
          text: "Dư thừa dữ liệu (Data Redundancy) là việc một thông tin bị lưu lặp lại không cần thiết ở nhiều nơi, hoặc lưu trữ cả những dữ liệu có thể dễ dàng tính toán/suy diễn từ dữ liệu gốc đã có.",
          points: [
            "Ví dụ 1 (Lưu lặp): Lưu họ tên và số điện thoại của một khách hàng vào cả 4 file riêng biệt: KhachHang, DonHang, GiaoHang, BaoHanh. Khi khách đổi số điện thoại, nhân viên sửa 1 file, 3 file kia vẫn là số cũ ➜ Không biết số nào đúng!",
            "Ví dụ 2 (Dữ liệu suy diễn): Đã lưu 'Ngày sinh' lại lưu thêm 'Tuổi hiện tại' (sau 1 năm ngày sinh vẫn đúng nhưng tuổi bị sai); hoặc đã lưu Số lượng và Đơn giá lại lưu cứng 'Thành tiền' (khi sửa đơn giá mà quên nhân lại thì thành tiền bị sai).",
            "⚠️ LƯU Ý BẢN CHẤT: Dư thừa không có nghĩa là 'cấm hai giá trị giống nhau'. Việc cả 3 học sinh An, Bình, Chi đều học lớp '11A' là sự thật khách quan, không phải là lỗi dư thừa. Tính không dư thừa là hạn chế chép đi chép lại thông tin không cần thiết!"
          ]
        },
        {
          heading: "3. Không nhất quán dữ liệu (Data Inconsistency)",
          text: "Không nhất quán xảy ra khi các dữ liệu có liên quan với nhau lại mâu thuẫn, cùng nói về một sự thật nhưng lại hiển thị các giá trị trái ngược nhau:",
          points: [
            "Hồ sơ học sinh ghi: An sinh ngày 12/03/2009; nhưng Danh sách thi tốt nghiệp lại ghi: An sinh ngày 21/03/2009 ➜ Không biết ngày nào đúng!",
            "Giao dịch chuyển tiền ngân hàng: Tài khoản gửi đã bị trừ 1.000.000đ nhưng hệ thống gặp sự cố mất điện chưa kịp cộng 1.000.000đ vào tài khoản nhận ➜ 1 triệu đồng biến mất khỏi hệ thống ➜ Dữ liệu mất tính nhất quán!"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Hiện tượng", "Bản chất vấn đề", "Hậu quả thực tế", "Giải pháp trong CSDL"],
        rows: [
          ["Dư thừa dữ liệu", "Lưu lặp lại cùng một thông tin ở nhiều nơi hoặc lưu dữ liệu suy diễn", "Tốn bộ nhớ, tốn công sửa nhiều file, tăng nguy cơ sai sót", "Lưu thông tin tại một nguồn duy nhất (Single Source of Truth)"],
          ["Không nhất quán", "Các dữ liệu có liên quan mâu thuẫn nhau, không ăn khớp", "Mất niềm tin vào số liệu, không biết giá trị nào chính xác", "Cập nhật đồng bộ, kiểm soát giao dịch toàn vẹn"],
          ["Dữ liệu suy diễn", "Lưu các giá trị có thể tính toán lại (Thành tiền = SL × Giá, Tuổi từ Ngày sinh)", "Dữ liệu bị lỗi thời khi thông tin gốc thay đổi mà không cập nhật lại", "Chỉ lưu dữ liệu gốc, tính toán tức thời khi cần hiển thị"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "IV. Sự Phụ Thuộc Phần Mềm – Dữ Liệu & Tính Độc Lập Dữ Liệu",
      subsections: [
        {
          heading: "1. Vấn đề: Phần mềm phụ thuộc chặt vào cách lưu trữ",
          text: "Khi lưu dữ liệu bằng file văn bản hay bảng tính thô sơ, chương trình ứng dụng phải 'hiểu ngầm' cấu trúc từng dòng:",
          points: [
            "Giả sử file lưu: '11A,3,Nguyễn Kì Duyên' (Cột 1: Lớp, Cột 2: STT, Cột 3: Họ tên, ngăn cách bởi dấu phẩy ',').",
            "Năm chương trình cùng đọc file này: Chương trình nhập điểm, xem điểm, in bảng điểm, thống kê học lực, gửi tin nhắn SMS.",
            "Một ngày, người quản lý đổi cách lưu thành: '3;Nguyễn Kì Duyên;11A' (Đổi thứ tự cột và đổi dấu ngăn cách thành chấm phẩy ';') ➜ Cả 5 chương trình đều bị lỗi và buộc phải viết lại mã nguồn!",
            "Hệ quả: Tốn kém chi phí bảo trì, dễ phát sinh lỗi, không thể mở rộng tính năng mới."
          ]
        },
        {
          heading: "2. Tính độc lập dữ liệu (Data Independence) – Mức độ lớp 11",
          text: "Tính độc lập dữ liệu là khả năng thay đổi cách tổ chức, vị trí hoặc định dạng lưu trữ vật lý của dữ liệu mà KHÔNG buộc các chương trình ứng dụng phải sửa đổi theo tương ứng.",
          points: [
            "Mô hình chuẩn: Dữ liệu được quản trị tập trung tại CSDL. Tất cả các ứng dụng (Bán hàng, Kho, Thống kê, Báo cáo) đều tương tác với dữ liệu thông qua giao tiếp chuẩn mực chung.",
            "Khi nâng cấp ổ cứng, đổi cấu trúc lưu đĩa, hoặc thêm cột thông tin mới, các chương trình cũ vẫn hoạt động bình thường mà không cần viết lại mã nguồn."
          ]
        }
      ],
      functions: [
        {
          name: "❌ Phụ thuộc chặt (File truyền thống)",
          desc: "Ứng dụng A tự đọc File A, Ứng dụng B tự đọc File B. Đổi cấu trúc file là tất cả ứng dụng sập."
        },
        {
          name: "✅ Độc lập dữ liệu (Cơ sở dữ liệu)",
          desc: "Các ứng dụng cùng khai thác một nguồn CSDL thống nhất. Thay đổi cách lưu trữ bên dưới không ảnh hưởng đến phần mềm."
        }
      ]
    },
    {
      id: "sec-4",
      title: "V. Dữ Liệu Có Cấu Trúc & Khái Niệm Cơ Sở Dữ Liệu (CSDL)",
      subsections: [
        {
          heading: "1. Vì sao dữ liệu cần có cấu trúc?",
          text: "So sánh hai cách ghi chép dữ liệu của cùng 3 học sinh:",
          points: [
            "Cách A (Ghi tự do): 'An học lớp 11A, Toán cuối kì 9, sinh 12/3/2009. Bình lớp 11A điểm Toán 7.5. Chi sinh 2/7/2009 Toán 8.' ➜ Máy tính rất khó tìm kiếm, không lọc được học sinh giỏi, không thể xử lý tự động.",
            "Cách B (Có cấu trúc): Tổ chức thành bảng với các cột xác định (MaHS, HoTen, Lop, NgaySinh, DiemToan). Mỗi cột là một loại dữ liệu, mỗi hàng là một đối tượng ➜ Máy tính và con người đều dễ dàng tìm kiếm, lọc, tính toán tức thì."
          ]
        },
        {
          heading: "2. Định nghĩa chuẩn Cơ sở dữ liệu (Database - CSDL)",
          text: "Định nghĩa cốt lõi học sinh cần thuộc lòng:",
          points: [
            "CƠ SỞ DỮ LIỆU (CSDL) là một tập hợp dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính.",
            "Công thức ghi nhớ: CSDL = [Tập hợp dữ liệu] + [Có liên quan với nhau] + [Được tổ chức có cấu trúc] + [Lưu trên hệ thống máy tính].",
            "⚠️ ĐIỂM QUAN TRỌNG: CSDL không đơn giản là 'một chỗ chứa thật nhiều file'. Một thư mục chứa lộn xộn ảnh mèo, file nhạc mp3, bài tập toán docx và hóa đơn pdf không phải là CSDL vì các dữ liệu đó không liên quan và không được tổ chức theo mục đích quản lý thống nhất!"
          ]
        },
        {
          heading: "3. Ba ví dụ thực tế điển hình về CSDL",
          points: [
            "Ví dụ 1 – CSDL Trường học: Quản lý các thực thể liên quan: Học sinh (học ở Lớp), Môn học (do Giáo viên dạy), Điểm số (thuộc Môn học và Học sinh).",
            "Ví dụ 2 – CSDL Bán hàng: Quản lý Khách hàng, Đơn hàng, Sản phẩm, Số lượng, Giá bán, Ngày mua, Doanh thu tồn kho.",
            "Ví dụ 3 – CSDL Ngân hàng: Quản lý Khách hàng, Tài khoản, Số dư, Lịch sử giao dịch chuyển tiền, Ngày giờ."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "VI. Sáu Thuộc Tính Cơ Bản Của Cơ Sở Dữ Liệu",
      subsections: [
        {
          heading: "1. Danh mục 6 thuộc tính vàng của CSDL",
          text: "Mỗi thuộc tính ngăn chặn một vấn đề cụ thể trong thực tế:",
          points: [
            "1. Tính cấu trúc (Structured): Dữ liệu được tổ chức theo một 'khuôn' rõ ràng, xác định (các bảng gồm hàng và cột cố định, kiểu dữ liệu thống nhất).",
            "2. Tính không dư thừa (Minimal Redundancy): Hạn chế tối đa việc lặp lại thông tin không cần thiết; không lưu dữ liệu suy diễn có thể tính toán lại.",
            "3. Tính độc lập dữ liệu (Data Independence): Thay đổi cách lưu trữ hoặc cấu trúc vật lý không làm các chương trình ứng dụng phải sửa theo.",
            "4. Tính toàn vẹn (Integrity): Dữ liệu phải HỢP LỆ, thỏa mãn các ràng buộc thực tế (Ví dụ: 0 ≤ Điểm ≤ 10, Tồn kho ≥ 0, Ngày trả ≥ Ngày mượn).",
            "5. Tính nhất quán (Consistency): Dữ liệu liên quan phải ĂN KHỚP, không mâu thuẫn; trạng thái CSDL luôn đúng đắn sau mỗi lần cập nhật (Ví dụ: Chuyển tiền trừ bên A thì phải cộng bên B).",
            "6. Tính bảo mật và an toàn (Security & Safety): Bảo mật là ngăn truy cập trái phép (đúng người đúng quyền); An toàn là bảo vệ dữ liệu không bị mất mát khi hỏng hóc và có khả năng phục hồi từ bản sao lưu (Backup)."
          ]
        },
        {
          heading: "2. Phân biệt cặp khái niệm dễ nhầm nhất: Toàn vẹn vs Nhất quán",
          text: "Mẹo phân biệt cực nhanh:",
          points: [
            "TOÀN VẸN = MỘT giá trị có HỢP LỆ theo quy tắc không? (Ví dụ: Điểm = 15 là sai toàn vẹn; Số dư = -500k là sai toàn vẹn).",
            "NHẤT QUÁN = NHIỀU dữ liệu liên quan có ĂN KHỚP nhau không? (Ví dụ: Bảng Toán ghi 9, Bảng tổng hợp ghi 8 là sai nhất quán; Một ghế máy bay bán cho 2 người là sai nhất quán)."
          ]
        },
        {
          heading: "3. Phân biệt Bảo mật vs An toàn dữ liệu",
          points: [
            "Bảo mật (Security): Chống người không được phép (Học sinh không được sửa điểm, người ngoài không xem được lương).",
            "An toàn (Safety): Chống mất mát do sự cố phần cứng/phần mềm (Có bản sao lưu định kỳ, khôi phục được khi cháy ổ cứng)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Thuộc tính", "Câu hỏi nhận biết", "Vấn đề cần ngăn chặn", "Ví dụ minh họa"],
        rows: [
          ["1. Tính cấu trúc", "Dữ liệu có khuôn rõ ràng không?", "Dữ liệu ghi tự do, hỗn loạn", "Mỗi học sinh đều có Mã HS, Họ tên, Ngày sinh, Lớp"],
          ["2. Không dư thừa", "Có lưu lặp lại thông tin không?", "Chép đi chép lại nhiều nơi", "SĐT khách chỉ lưu 1 lần, điểm trung bình tính bằng công thức"],
          ["3. Độc lập dữ liệu", "Đổi cách lưu có phải sửa phần mềm?", "Phần mềm phụ thuộc chặt vào file", "Nhiều ứng dụng cùng khai thác một nguồn CSDL sản phẩm"],
          ["4. Tính toàn vẹn", "Giá trị có HỢP LỆ không?", "Dữ liệu vô lý, trái quy tắc", "Điểm phải từ 0 đến 10, Tồn kho không được âm"],
          ["5. Tính nhất quán", "Các dữ liệu có ĂN KHỚP nhau?", "Dữ liệu mâu thuẫn, lệch nhau", "Chuyển tiền: tài khoản gửi bị trừ thì nhận phải được cộng"],
          ["6. Bảo mật & An toàn", "Đúng người? Có bản sao lưu?", "Lộ dữ liệu, mất sạch khi hỏng máy", "Phân quyền giáo viên sửa điểm + Sao lưu dự phòng CSDL"]
        ]
      }
    },
    {
      id: "sec-6",
      title: "VII. Chốt 8 Kiến Thức Cốt Lõi Buổi Học",
      checkpointCards: [
        {
          title: "1. CSDL = TẬP HỢP CÓ TỔ CHỨC",
          detail: "Tập hợp dữ liệu có liên quan, được tổ chức có cấu trúc, lưu trên hệ thống máy tính để nhiều ứng dụng cùng dùng."
        },
        {
          title: "2. TIN HỌC HÓA ≠ BIẾN GIẤY THÀNH FILE",
          detail: "Nếu chỉ gõ sổ giấy thành các file Excel rời rạc thì vẫn gây dư thừa và mâu thuẫn số liệu."
        },
        {
          title: "3. DƯ THỪA ➜ MẤT NHẤT QUÁN",
          detail: "Lưu một thông tin ở nhiều nơi dẫn tới sửa chỗ này quên chỗ kia, làm số liệu mâu thuẫn không biết đâu là đúng."
        },
        {
          title: "4. DỮ LIỆU CÓ THỂ SUY RA ➜ KHÔNG NÊN LƯU",
          detail: "Thành tiền (SL × Giá), Tuổi (tính từ Ngày sinh), Điểm TB không nên lưu cứng để tránh quên cập nhật."
        },
        {
          title: "5. ĐỘC LẬP DỮ LIỆU",
          detail: "Thay đổi cách tổ chức lưu trữ vật lý không làm các chương trình ứng dụng khai thác phải viết lại mã nguồn."
        },
        {
          title: "6. TOÀN VẸN = HỢP LỆ",
          detail: "Dữ liệu phải thỏa mãn các ràng buộc thực tế (0 ≤ Điểm ≤ 10, Ngày trả ≥ Ngày mượn)."
        },
        {
          title: "7. NHẤT QUÁN = ĂN KHỚP",
          detail: "Các dữ liệu liên quan không được mâu thuẫn, trạng thái CSDL luôn đúng sau mọi giao dịch cập nhật."
        },
        {
          title: "8. BẢO MẬT (ĐÚNG NGƯỜI) & AN TOÀN (SAO LƯU)",
          detail: "Bảo mật là kiểm soát quyền xem/sửa; An toàn là có bản sao lưu để phục hồi khi có sự cố phần cứng."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|                           BÀI 11: CƠ SỞ DỮ LIỆU (CSDL)                            |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
                             LƯU TRỮ DỮ LIỆU KHOA HỌC
                                         │
                    ┌────────────────────┴────────────────────┐
                    ▼                                         ▼
           Hạn chế dư thừa &                         Giảm phụ thuộc giữa
           Tránh mất nhất quán                       phần mềm và dữ liệu
                    │                                         │
                    └────────────────────┬────────────────────┘
                                         ▼
                                DỮ LIỆU CÓ CẤU TRÚC
                                         │
                                         ▼
                                CƠ SỞ DỮ LIỆU (CSDL)
                                         │
         ┌──────────┬──────────┬─────────┴────────┬──────────┬──────────┐
         ▼          ▼          ▼                  ▼          ▼          ▼
     Cấu trúc   Không dư    Độc lập            Toàn vẹn  Nhất quán  Bảo mật
                 thừa       dữ liệu                                 & An toàn
         │          │          │                  │          │          │
      Có khuôn   Hạn chế    Đổi cách lưu       Giá trị    Dữ liệu    Đúng người
      rõ ràng    chép lặp   không phải sửa     hợp lệ     ăn khớp    + Sao lưu
                 vô ích     phần mềm           quy tắc    không lệch phục hồi`
    }
  ],
  summaryQuiz: [
    {
      question: "Cơ sở dữ liệu (CSDL) được định nghĩa chuẩn xác là gì?",
      options: [
        "A. Một thư mục trên máy tính chứa nhiều tệp tin Word và Excel.",
        "B. Một tập hợp dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính.",
        "C. Một phần mềm chuyên dùng để gõ văn bản và in ấn tài liệu.",
        "D. Một trang web chứa nhiều hình ảnh và video giải trí."
      ],
      answer: "B",
      explanation: "Theo định nghĩa chuẩn SGK Tin học 11, CSDL là một tập hợp dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính để phục vụ nhu cầu khai thác của nhiều người và phần mềm."
    },
    {
      question: "Một điểm số của học sinh được sao chép và lưu trữ ở 4 tệp bảng tính khác nhau không cần thiết. Đây là biểu hiện của vấn đề gì?",
      options: [
        "A. Tính toàn vẹn dữ liệu",
        "B. Dư thừa dữ liệu (Data Redundancy)",
        "C. Tính bảo mật dữ liệu",
        "D. Tính độc lập dữ liệu"
      ],
      answer: "B",
      explanation: "Việc lưu lặp lại cùng một thông tin ở nhiều nơi không cần thiết chính là hiện tượng 'Dư thừa dữ liệu'."
    },
    {
      question: "Trong hồ sơ cá nhân ghi ngày sinh của học sinh là 12/03/2009, nhưng trong danh sách thi học sinh giỏi lại ghi 21/03/2009. Tình huống này vi phạm thuộc tính nào của CSDL?",
      options: [
        "A. Tính nhất quán (Consistency)",
        "B. Tính độc lập dữ liệu",
        "C. Tính cấu trúc",
        "D. Tính an toàn dữ liệu"
      ],
      answer: "A",
      explanation: "Cùng một đối tượng nhưng các dữ liệu liên quan lại mâu thuẫn, trái ngược nhau là vi phạm 'Tính nhất quán'."
    },
    {
      question: "Hệ thống quản lý điểm của nhà trường vô tình cho phép người dùng nhập điểm môn học là 15 (trong thang điểm quy định từ 0 đến 10). Giá trị này vi phạm thuộc tính nào?",
      options: [
        "A. Tính không dư thừa",
        "B. Tính độc lập dữ liệu",
        "C. Tính toàn vẹn (Integrity)",
        "D. Tính nhất quán"
      ],
      answer: "C",
      explanation: "Tính toàn vẹn yêu cầu dữ liệu phải thỏa mãn các ràng buộc hợp lệ theo thực tế (0 ≤ Điểm ≤ 10). Nhập 15 là vi phạm tính toàn vẹn."
    },
    {
      question: "Một học sinh có thể tự đăng nhập vào hệ thống và tự ý thay đổi điểm thi môn Tin học của mình từ 5 lên 10. Hệ thống này đã vi phạm thuộc tính nào?",
      options: [
        "A. Tính cấu trúc",
        "B. Tính bảo mật (Security)",
        "C. Tính độc lập dữ liệu",
        "D. Tính không dư thừa"
      ],
      answer: "B",
      explanation: "Tính bảo mật nhằm kiểm soát quyền truy cập: ngăn chặn người không có thẩm quyền (học sinh) can thiệp, xem hoặc sửa đổi dữ liệu trái phép."
    },
    {
      question: "Khi người quản trị thay đổi cách tổ chức hoặc định dạng lưu trữ file dữ liệu trên ổ đĩa, tất cả 5 chương trình ứng dụng khai thác dữ liệu đều bị lỗi và buộc phải viết lại mã nguồn. Điều này chứng tỏ hệ thống chưa đảm bảo tốt thuộc tính nào?",
      options: [
        "A. Tính độc lập dữ liệu (Data Independence)",
        "B. Tính toàn vẹn",
        "C. Tính bảo mật",
        "D. Tính có cấu trúc"
      ],
      answer: "A",
      explanation: "Tính độc lập dữ liệu đảm bảo việc thay đổi cách lưu trữ vật lý không làm ảnh hưởng hay bắt buộc các chương trình ứng dụng phải viết lại."
    },
    {
      question: "Toàn bộ dữ liệu của doanh nghiệp bị mất sạch sau một sự cố sét đánh làm cháy ổ cứng máy chủ và không thể phục hồi do không có bản sao lưu dự phòng. Đây là vấn đề thuộc về:",
      options: [
        "A. An toàn dữ liệu (Safety / Backup & Recovery)",
        "B. Tính không dư thừa",
        "C. Tính cấu trúc",
        "D. Tính độc lập dữ liệu"
      ],
      answer: "A",
      explanation: "An toàn dữ liệu liên quan đến việc bảo vệ dữ liệu trước hỏng hóc phần cứng/sự cố và có cơ chế sao lưu (Backup) để phục hồi đầy đủ."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Phân Biệt Cơ Sở Dữ Liệu (CSDL) vs Tệp Bảng Tính / Thư Mục Rời Rạc",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Một giáo viên nói: 'Tôi lưu toàn bộ điểm của học sinh vào một thư mục gồm 10 file Excel riêng lẻ cho 10 môn học, như vậy tôi đã có một Cơ sở dữ liệu rồi'. Nhận định của giáo viên có hoàn toàn chính xác theo định nghĩa khoa học không? Hãy nêu 3 lý do giải thích.",
      method: "⚡ Phương pháp phân tích bản chất CSDL:\n• CSDL không chỉ là tập hợp nhiều file.\n• CSDL đòi hỏi tính liên kết, cấu trúc thống nhất, hạn chế dư thừa, đảm bảo nhất quán và độc lập dữ liệu.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• Nhận định của giáo viên là CHƯA CHÍNH XÁC.\n• 3 Lý do giải thích theo tiêu chuẩn CSDL:\n  1. Thiếu tính liên kết và quản trị tập trung: 10 file Excel rời rạc không tự động liên kết với nhau. Muốn tính điểm trung bình hay xét học bổng, giáo viên phải copy thủ công giữa các file.\n  2. Dễ gây dư thừa và mất nhất quán: Thông tin học sinh (Mã HS, Họ tên, Ngày sinh) bị lặp lại ở cả 10 file. Khi học sinh chuyển lớp hoặc đổi tên, nếu chỉ sửa ở 1 vài file thì dữ liệu sẽ mâu thuẫn ngay lập tức.\n  3. Kém an toàn và không hỗ trợ nhiều người cùng truy cập đồng thời: File Excel chia sẻ chung dễ bị người này ghi đè làm mất dữ liệu của người kia và không phân quyền chi tiết cho từng cột/hàng."
    },
    {
      title: "Dạng 2: Phát Hiện & Xử Lý Hiện Tượng Dư Thừa Dữ Liệu (Dữ liệu Gốc vs Suy diễn)",
      tag: "Thông hiểu & Tối ưu Dữ liệu",
      sampleQuestion: "Một cửa hàng thiết kế bảng dữ liệu bán hàng gồm các cột: MaSP, TenSP, SoLuong, DonGia, ThanhTien, NgayBan, TuoiKhachHang, NgaySinhKhachHang. Hãy chỉ ra 2 điểm dư thừa dữ liệu trong bảng trên và đề xuất cách thiết kế tối ưu.",
      method: "⚡ Quy tắc phát hiện dư thừa dữ liệu suy diễn:\n• Dữ liệu nào có thể tính toán được từ dữ liệu khác ➜ Không nên lưu trực tiếp.\n• ThànhTien = SoLuong × DonGia.\n• Tuoi = Năm hiện tại - Năm sinh (hoặc tính từ NgaySinh).",
      solution: "✅ Đáp án & Đề xuất tối ưu:\n1. 2 Điểm dư thừa dữ liệu:\n   • Cột 'ThanhTien': Có thể dễ dàng tính bằng công thức `SoLuong * DonGia`. Nếu lưu cột này, khi nhân viên sửa Đơn giá mà quên nhân lại Thành tiền thì số liệu sẽ bị sai lệch.\n   • Cột 'TuoiKhachHang': Tuổi thay đổi theo thời gian, nếu lưu cứng thì sang năm sau tuổi sẽ bị sai trong khi Ngày sinh vẫn đúng.\n2. Thiết kế tối ưu:\n   • Bỏ cột 'ThanhTien': Khi cần xuất hóa đơn hay báo cáo, phần mềm sẽ tự động tính toán tức thời.\n   • Bỏ cột 'TuoiKhachHang': Chỉ lưu 'NgaySinhKhachHang' là dữ liệu gốc duy nhất, phần mềm tự tính tuổi khi cần."
    },
    {
      title: "Dạng 3: Phân Biệt Sâu Sắc Tính Toàn Vẹn (Hợp lệ) vs Tính Nhất Quán (Ăn khớp)",
      tag: "Bẫy Đề thi Cực kỳ Phổ biến",
      sampleQuestion: "Cho 4 tình huống sau, hãy xác định mỗi tình huống vi phạm TÍNH TOÀN VẸN hay TÍNH NHẤT QUÁN:\n(1) Hệ thống cho phép lưu ngày trả sách là 10/09/2026 trong khi ngày mượn sách là 15/09/2026.\n(2) Bảng điểm môn Toán ghi học sinh được 9.5 điểm, nhưng Bảng tổng hợp học kỳ lại ghi môn Toán được 7.0 điểm.\n(3) Số lượng sản phẩm tồn kho của một mặt hàng bị âm (-12 chiếc).\n(4) Cùng một chuyến bay, chiếc ghế 15B được bán thành công cho cả 2 hành khách khác nhau.",
      method: "⚡ Mẹo phân biệt vàng:\n• Toàn vẹn = MỘT giá trị có HỢP LỆ với quy tắc thực tế không?\n• Nhất quán = NHIỀU dữ liệu liên quan có ĂN KHỚP nhau không?",
      solution: "✅ Phân loại chính xác 100%:\n• (1) Ngày trả < Ngày mượn ➜ Vi phạm TÍNH TOÀN VẸN (giá trị không hợp lệ với logic quy tắc mượn trả).\n• (2) Toán 9.5 vs Toán 7.0 ➜ Vi phạm TÍNH NHẤT QUÁN (dữ liệu liên quan ở 2 nơi mâu thuẫn nhau).\n• (3) Tồn kho = -12 ➜ Vi phạm TÍNH TOÀN VẸN (số lượng tồn kho không được là số âm).\n• (4) Ghế 15B bán cho 2 người ➜ Vi phạm TÍNH NHẤT QUÁN (trạng thái hệ thống mâu thuẫn với thực tế duy nhất 1 ghế)."
    },
    {
      title: "Dạng 4: Phân Tích Tính Độc Lập Dữ Liệu & Giải Pháp Cho Bài Toán Doanh Nghiệp",
      tag: "Vận dụng & Kiến trúc Hệ thống",
      sampleQuestion: "Một công ty có 3 phần mềm độc lập: Phần mềm Bán hàng, Phần mềm Quản lý Kho, và Phần mềm Kế toán. Trước đây, mỗi phần mềm tự tạo một file dữ liệu riêng. Hãy phân tích những khó khăn của công ty và giải thích CSDL giúp giải quyết bài toán này như thế nào nhờ 'Tính độc lập dữ liệu'.",
      method: "⚡ Phân tích trước và sau khi áp dụng CSDL:\n• Trước: Dữ liệu phân tán, phụ thuộc mã nguồn từng phần mềm, sửa file là sửa code.\n• Sau: CSDL tập trung, các phần mềm cùng kết nối, độc lập cấu trúc lưu trữ.",
      solution: "✅ Đáp án & Phân tích chuyên sâu:\n1. Những khó khăn khi mỗi phần mềm tự lưu file riêng:\n   • Trùng lặp dữ liệu: Thông tin sản phẩm và khách hàng bị lưu 3 lần ở 3 nơi.\n   • Dễ mất nhất quán: Bán hàng đã bán xong nhưng Kho chưa trừ số lượng, Kế toán chưa ghi nhận doanh thu kịp thời.\n   • Khó bảo trì: Mỗi khi thêm thông tin mã vạch hay đổi định dạng ngày tháng, cả 3 phần mềm đều phải thuê lập trình viên sửa lại mã nguồn.\n2. CSDL giải quyết bài toán nhờ 'Tính độc lập dữ liệu':\n   • Dữ liệu được gom về một CSDL dùng chung duy nhất.\n   • Cả 3 phần mềm cùng gửi yêu cầu truy vấn đến CSDL thông qua giao tiếp chuẩn mực.\n   • Khi CSDL thay đổi cấu trúc lưu trữ bên dưới (như đổi loại ổ cứng, tối ưu chỉ mục index), 3 phần mềm phía trên hoàn toàn không bị ảnh hưởng, không cần sửa đổi mã nguồn."
    },
    {
      title: "Dạng 5: Phân Biệt Bảo Mật (Đúng Người) vs An Toàn (Sao Lưu) Trong Tình Huống Thực Tế",
      tag: "Vận dụng Cao & Quản trị Rủi ro",
      sampleQuestion: "Trong một bệnh viện, hệ thống máy tính lưu trữ toàn bộ bệnh án của bệnh nhân. Nêu 2 ví dụ thực tế vi phạm tính BẢO MẬT và 2 ví dụ thực tế vi phạm tính AN TOÀN dữ liệu trong bệnh viện này.",
      method: "⚡ Phân biệt:\n• Bảo mật: Quyền xem / sửa của con người (Ai được xem? Ai được sửa?).\n• An toàn: Rủi ro kỹ thuật, mất mát, hỏng hóc và năng lực phục hồi (Backup).",
      solution: "✅ Ví dụ minh họa chuẩn xác:\n1. 2 Tình huống vi phạm tính BẢO MẬT (Security):\n   • Một nhân viên bảo vệ hoặc lao công có thể dùng tài khoản cá nhân mở xem toàn bộ hồ sơ bệnh án riêng tư của các bệnh nhân VIP.\n   • Một y tá có thể tự ý sửa đổi đơn thuốc và kết quả chẩn đoán của bác sĩ điều trị trên phần mềm mà không cần sự đồng ý của bác sĩ.\n2. 2 Tình huống vi phạm tính AN TOÀN dữ liệu (Safety):\n   • Bệnh viện bị sự cố chập điện đột ngột làm hỏng toàn bộ dàn ổ cứng máy chủ và bệnh viện không có hệ thống lưu điện dự phòng (UPS).\n   • Máy tính lưu dữ liệu bị nhiễm virus tống tiền (Ransomware) mã hóa toàn bộ dữ liệu và bệnh viện không có bản sao lưu (Backup) ngoại tuyến để khôi phục."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Đề Xuất Các Nhóm Dữ Liệu Cần Quản Lý Cho Lớp Học 11",
      tag: "Khảo sát & Thiết kế",
      problem: "Hãy hình dung em là lớp trưởng hoặc cán sự tin học, cần thiết kế một hệ thống quản lý dữ liệu toàn diện cho lớp học của mình:",
      tasks: [
        "Nhiệm vụ 1: Liệt kê ít nhất 4 nhóm đối tượng dữ liệu cần quản lý (Gợi ý: Học sinh, Môn học, Điểm số, Chuyên cần/Khen thưởng).",
        "Nhiệm vụ 2: Với mỗi nhóm dữ liệu, đề xuất ít nhất 3 thuộc tính (cột) thông tin cần lưu trữ cụ thể.",
        "Nhiệm vụ 3: Chỉ ra một dữ liệu KHÔNG NÊN lưu trực tiếp mà nên để hệ thống tự động tính toán (giải thích vì sao)."
      ],
      requirements: "Trình bày rõ ràng thành danh mục khoa học, chưa cần thiết kế bảng quan hệ.",
      hint: "Bám sát Mục 46, 47, 48 trong giáo trình Bài 11.",
      solution: `Gợi ý giải bài tập 1:
1. 4 Nhóm đối tượng dữ liệu cần quản lý:
• Nhóm 1 - Học sinh: MaHS, HoTen, NgaySinh, GioiTinh, DiaChi, SDT_PhuHuynh.
• Nhóm 2 - Môn học: MaMon, TenMon, SoTiet, GiaoVienPhuTrach.
• Nhóm 3 - Điểm số: MaHS, MaMon, DiemTX1, DiemTX2, DiemGiuaKy, DiemCuoiKy.
• Nhóm 4 - Chuyên cần & Nề nếp: MaHS, NgayVang, CoPhep (Có/Không), DiemRenLuyen.

2. Dữ liệu KHÔNG NÊN lưu trực tiếp:
• Điểm trung bình môn và Điểm trung bình học kỳ: Không nên lưu cứng thành cột cố định, vì điểm này hoàn toàn tính được từ các điểm thành phần theo công thức trọng số. Nếu lưu cứng, khi giáo viên chấm phúc khảo sửa lại điểm cuối kỳ mà quên tính lại điểm trung bình thì hệ thống sẽ xuất hiện dữ liệu không nhất quán.`
    },
    {
      title: "Bài tập 2: Phân Tích Hiện Tượng Dư Thừa Dữ Liệu Trong Hóa Đơn Bán Hàng",
      tag: "Phân tích Nghiệp vụ",
      scenario: "Một cửa hàng văn phòng phẩm thiết kế file Excel lưu hóa đơn: Cứ mỗi lần khách mua hàng, nhân viên lại gõ vào dòng hóa đơn gồm: Mã hóa đơn, Tên khách hàng, Địa chỉ nhà, Số điện thoại, Mã sản phẩm, Tên sản phẩm, Đơn giá, Số lượng.",
      problem: "Một khách hàng quen tên là 'Trần Minh Nam' đã đến mua hàng 50 lần trong một năm:",
      tasks: [
        "Câu 1: Thông tin của khách hàng Nam đã bị lặp lại bao nhiêu lần trong file? Đây có phải là dư thừa dữ liệu không?",
        "Câu 2: Nếu khách hàng Nam chuyển nhà và đổi số điện thoại mới, nhân viên thu ngân sẽ gặp phải khó khăn và nguy cơ sai sót gì?",
        "Câu 3: Thuộc tính nào của CSDL liên quan trực tiếp đến việc giải quyết bài toán này?"
      ],
      requirements: "Lập luận mạch lạc, nêu rõ rủi ro và cách khắc phục.",
      hint: "Bám sát các mục 24, 25 và 38 trong bài học.",
      solution: `Đáp án phân tích bài tập 2:
1. Thông tin của khách hàng Nam bị lặp lại 50 lần trong file hóa đơn. Đây chính là HIỆN TƯỢNG DƯ THỪA DỮ LIỆU rất nghiêm trọng, làm tốn dung lượng và gia tăng thời gian nhập liệu vô ích.
2. Nguy cơ khi khách đổi địa chỉ và số điện thoại:
• Nhân viên thường chỉ cập nhật số mới cho hóa đơn lần mua thứ 51. Trong hệ thống vẫn còn 50 dòng hóa đơn cũ lưu địa chỉ và số điện thoại cũ.
• Khi cần giao hàng hoặc chăm sóc khách hàng tra cứu lại lịch sử, hệ thống hiển thị 2 số điện thoại và 2 địa chỉ khác nhau ➜ MẤT TÍNH NHẤT QUÁN, không biết thông tin nào mới là chính xác!
3. Thuộc tính liên quan:
• Tính không dư thừa: Chỉ nên lưu thông tin khách hàng 1 lần duy nhất trong danh mục Khách hàng; các hóa đơn chỉ cần lưu 'Mã khách hàng' để liên kết.
• Tính nhất quán: Khi khách đổi số điện thoại, chỉ cần sửa 1 chỗ duy nhất trong bảng Khách hàng, toàn bộ 50 hóa đơn tự động ăn khớp với thông tin mới.`
    },
    {
      title: "Bài tập 3: Phân Loại Chuẩn Xác 4 Tình Huống Toàn Vẹn vs Nhất Quán",
      tag: "Bản chất Khái niệm",
      problem: "Đọc kỹ 4 tình huống thực tế sau và xếp vào nhóm vi phạm TÍNH TOÀN VẸN hoặc TÍNH NHẤT QUÁN (kèm giải thích ngắn gọn):",
      tasks: [
        "Tình huống A: Một học sinh nhập điểm kiểm tra là 12 trên hệ thống trường học.",
        "Tình huống B: Bảng điểm cá nhân ghi bạn Lan đạt học lực Giỏi, nhưng danh sách khen thưởng toàn trường lại ghi bạn Lan học lực Khá.",
        "Tình huống C: Số lượng tồn kho của một quyển sách trong nhà sách được ghi là -10 cuốn.",
        "Tình huống D: Một phòng khách sạn vào đêm 30 Tết được hệ thống xác nhận đặt thành công cho 2 gia đình khác nhau cùng lúc."
      ],
      requirements: "Chỉ rõ lý do 'Vì sao Toàn vẹn' và 'Vì sao Nhất quán'.",
      hint: "Bám sát Mục 35 và 55 trong bài học.",
      solution: `Đáp án chi tiết bài tập 3:
• Tình huống A (Điểm = 12): Vi phạm TÍNH TOÀN VẸN. Vì thang điểm chỉ từ 0 đến 10, giá trị 12 là không hợp lệ với quy tắc của một điểm số.
• Tình huống B (Học lực Giỏi vs Học lực Khá): Vi phạm TÍNH NHẤT QUÁN. Vì cùng một bạn Lan nhưng hai bảng dữ liệu có liên quan lại mâu thuẫn, không ăn khớp với nhau.
• Tình huống C (Tồn kho = -10): Vi phạm TÍNH TOÀN VẸN. Vì số lượng hàng hóa vật lý thực tế trong kho không thể là một số âm (ràng buộc Tồn kho ≥ 0).
• Tình huống D (1 phòng khách sạn bán cho 2 khách): Vi phạm TÍNH NHẤT QUÁN. Vì trạng thái của phòng bị mâu thuẫn trong hệ thống, không phản ánh đúng sự thật duy nhất của phòng vật lý.`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b11-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Phát Hiện Dư Thừa Dữ Liệu & Hậu Quả",
      duration: "2 phút",
      type: "exercise",
      description: "Phát hiện thông tin lặp trong file Khách hàng và Đơn hàng, chỉ ra nguy cơ khi đổi số điện thoại.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Nhận diện hiện tượng dư thừa dữ liệu trong thực tế.",
        requirements: [
          "Cho cấu trúc lưu trữ của cửa hàng máy tính:\n- File KhachHang: KH001 | Nguyễn Văn An | 0988123456\n- File DonHang: \n  + DH001 | Nguyễn Văn An | 0988123456 | Bàn phím | 1\n  + DH002 | Nguyễn Văn An | 0988123456 | Chuột    | 2\n  + DH003 | Nguyễn Văn An | 0988123456 | Tai nghe | 1\n\nCâu hỏi:\n1. Thông tin nào đang bị lặp lại nhiều lần?\n2. Nếu An đổi số điện thoại thì có nguy cơ gì xảy ra?\n3. Thuộc tính nào của CSDL đang được quan tâm?"
        ],
        qaList: [
          {
            q: "1. Thông tin nào bị lặp?",
            a: "Đáp án: Họ tên ('Nguyễn Văn An') và Số điện thoại ('0988123456') bị lặp lại ở tất cả các dòng đơn hàng."
          },
          {
            q: "2. Nguy cơ khi đổi số điện thoại?",
            a: "Đáp án: Nếu nhân viên chỉ sửa số mới ở file KhachHang mà quên sửa ở file DonHang thì một khách hàng sẽ có 2 số điện thoại khác nhau ➜ Dữ liệu mất tính nhất quán, không biết liên hệ số nào."
          },
          {
            q: "3. Thuộc tính CSDL liên quan?",
            a: "Đáp án: Thuộc tính Tính không dư thừa (Minimal Redundancy) và liên quan trực tiếp tới Tính nhất quán (Consistency)."
          }
        ]
      }
    },
    {
      id: "practice-b11-2",
      badge: "Bài 2 – 2 phút",
      title: "Bài 2 – Kiểm Tra Tính Toàn Vẹn Của Dữ Liệu",
      duration: "2 phút",
      type: "exercise",
      description: "Xác định các giá trị điểm số vi phạm tính toàn vẹn trong danh sách cho trước.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Hiểu rõ quy tắc ràng buộc giá trị hợp lệ.",
        requirements: [
          "Quy định: Điểm số học sinh phải nằm trong đoạn [0, 10].",
          "Cho danh sách các giá trị điểm sau: 8; 9.5; 10; -1; 11; 7.25.",
          "Nhiệm vụ: Hãy chỉ ra các giá trị KHÔNG HỢP LỆ và cho biết thuộc tính CSDL nào đang được kiểm tra."
        ],
        qaList: [
          {
            q: "Giá trị không hợp lệ và thuộc tính liên quan?",
            a: "Đáp án:\n• Giá trị không hợp lệ: -1 (nhỏ hơn 0) và 11 (lớn hơn 10).\n• Thuộc tính CSDL đang được kiểm tra là: Tính toàn vẹn (Integrity) — đảm bảo dữ liệu luôn hợp lệ theo các quy tắc nghiệp vụ thực tế."
          }
        ]
      }
    },
    {
      id: "practice-b11-3",
      badge: "Bài 3 – 2 phút",
      title: "Bài 3 – Phát Hiện Mâu Thuẫn Dữ Liệu Trong Thư Viện",
      duration: "2 phút",
      type: "exercise",
      description: "Phát hiện mâu thuẫn giữa trạng thái sách trên giá và lịch sử mượn trả.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nhận diện vi phạm tính nhất quán dữ liệu.",
        requirements: [
          "Hồ sơ thư viện trường ghi:\n- Mã sách: S001 | Tên sách: Lập trình Python | Trạng thái: Đang có trong thư viện (trên giá).\nNhưng dữ liệu mượn trả lại ghi:\n- Bạn đọc BD015 đang mượn sách S001 từ ngày 10/09/2026 và chưa trả.\n\nHỏi: Hai dữ liệu này có vấn đề gì và thuộc tính nào của CSDL đã bị vi phạm?"
        ],
        qaList: [
          {
            q: "Vấn đề và thuộc tính bị vi phạm?",
            a: "Đáp án:\n• Vấn đề: Hai dữ liệu mâu thuẫn nhau. Sách đang được một bạn đọc mượn về nhà thì không thể đồng thời ở trạng thái 'đang có sẵn trên giá' trong thư viện.\n• Thuộc tính bị vi phạm: Tính nhất quán (Consistency) — dữ liệu liên quan không ăn khớp với nhau."
          }
        ]
      }
    },
    {
      id: "practice-b11-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Phân Tích Tính Độc Lập Dữ Liệu",
      duration: "3 phút",
      type: "exercise",
      description: "Giải thích vì sao việc đổi định dạng file khiến 3 phần mềm phải sửa mã nguồn và đề xuất hướng khắc phục.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Hiểu sâu khái niệm độc lập dữ liệu ở mức lớp 11.",
        requirements: [
          "Một trường học lưu dữ liệu trong file văn bản: '11A,HS001,Nguyễn Văn An'. Sau đó nhà trường đổi thành: 'HS001|Nguyễn Văn An|11A'. Toàn bộ 3 phần mềm (Nhập điểm, Xem điểm, In học bạ) đều bị lỗi và phải thuê lập trình viên sửa lại mã nguồn.",
          "Câu hỏi: Tình huống này minh họa vấn đề gì? Một CSDL được tổ chức tốt cần đảm bảo thuộc tính nào để khắc phục?"
        ],
        qaList: [
          {
            q: "Vấn đề và thuộc tính khắc phục?",
            a: "Đáp án:\n• Tình huống minh họa: Sự phụ thuộc quá chặt chẽ giữa phần mềm và cách lưu trữ dữ liệu.\n• Khắc phục: CSDL cần đảm bảo Tính độc lập dữ liệu (Data Independence) — thay đổi cách tổ chức hoặc định dạng lưu trữ vật lý không buộc các chương trình ứng dụng phải sửa đổi theo."
          }
        ]
      }
    },
    {
      id: "practice-b11-5",
      badge: "Bài 5 – 2 phút",
      title: "Bài 5 – Phân Loại: Bảo Mật Hay An Toàn Dữ Liệu?",
      duration: "2 phút",
      type: "exercise",
      description: "Phân loại 4 tình huống thực tế vào đúng nhóm Bảo mật hoặc An toàn dữ liệu.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Phân biệt rõ ranh giới giữa Bảo mật và An toàn.",
        requirements: [
          "Phân loại 4 tình huống sau vào nhóm 'Bảo mật' hoặc 'An toàn dữ liệu':\n(A) Một học sinh dùng trộm mật khẩu tài khoản của giáo viên để sửa điểm thi.\n(B) Ổ cứng máy chủ bị hỏng đột ngột và trường không có bản sao lưu dự phòng.\n(C) Nhân viên bán hàng mở xem được bảng lương của toàn bộ nhân sự công ty.\n(D) Máy chủ bị sự cố sập nguồn nhưng hệ thống khôi phục nguyên vẹn dữ liệu từ bản backup hôm qua."
        ],
        qaList: [
          {
            q: "Kết quả phân loại 4 tình huống?",
            a: "Đáp án:\n• (A) Học sinh sửa trộm điểm ➜ Vi phạm BẢO MẬT (truy cập/sửa trái phép).\n• (B) Hỏng ổ cứng không có sao lưu ➜ Vi phạm AN TOÀN DỮ LIỆU (mất mát dữ liệu do sự cố phần cứng).\n• (C) Xem trộm bảng lương ➜ Vi phạm BẢO MẬT (xem dữ liệu vượt quá thẩm quyền).\n• (D) Khôi phục từ backup ➜ Đảm bảo AN TOÀN DỮ LIỆU (năng lực phục hồi sau sự cố)."
          }
        ]
      }
    },
    {
      id: "practice-b11-6",
      badge: "Bài 6 – 2 phút",
      title: "Bài 6 – Có Nên Lưu Cột 'Tuổi Hiện Tại' Không?",
      duration: "2 phút",
      type: "exercise",
      description: "Phân tích vì sao nên xem Ngày sinh là dữ liệu gốc thay vì lưu cứng cột Tuổi.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Khắc sâu nguyên tắc không lưu dữ liệu suy diễn.",
        requirements: [
          "Hồ sơ học sinh hiện đang lưu cả hai cột: 'Ngày sinh: 12/03/2009' và 'Tuổi: 17'.",
          "Câu hỏi: Một năm sau điều gì sẽ xảy ra? Ta nên xem dữ liệu nào là dữ liệu cơ sở quan trọng hơn và vì sao không nên lưu cột Tuổi?"
        ],
        qaList: [
          {
            q: "Dữ liệu cơ sở và lý do không lưu cột Tuổi?",
            a: "Đáp án:\n• Một năm sau: Ngày sinh vẫn đúng nhưng Tuổi đã bị sai nếu không có ai nhớ vào sửa lại.\n• Dữ liệu cơ sở quan trọng hơn là NGÀY SINH (dữ liệu gốc cố định).\n• Không nên lưu cột Tuổi vì Tuổi có thể dễ dàng tính từ Ngày sinh và thời điểm hiện tại. Lưu dữ liệu suy diễn chỉ làm tăng dư thừa và tăng nguy cơ sai sót khi dữ liệu bị lỗi thời."
          }
        ]
      }
    },
    {
      id: "practice-b11-7",
      badge: "Bài 7 – 2 phút",
      title: "Bài 7 – Xử Lý Giao Dịch Chuyển Tiền Ngân Hàng",
      duration: "2 phút",
      type: "exercise",
      description: "Phân tích lỗi mất tiền do hệ thống ngắt điện giữa chừng khi chuyển tiền.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 2 phút. Hiểu rõ tính nhất quán trong xử lý giao dịch.",
        requirements: [
          "Lan có 3.000.000đ, Minh có 5.000.000đ. Lan chuyển cho Minh 500.000đ.",
          "Hệ thống thực hiện xong bước trừ Lan 500.000đ (Lan còn 2.500.000đ) thì bị ngắt điện, chưa kịp cộng cho Minh (Minh vẫn 5.000.000đ).",
          "Câu hỏi: Hệ thống có vấn đề gì và đã vi phạm thuộc tính nào của CSDL?"
        ],
        qaList: [
          {
            q: "Vấn đề và thuộc tính bị vi phạm?",
            a: "Đáp án:\n• Vấn đề: 500.000đ bị trừ khỏi tài khoản Lan nhưng không vào tài khoản Minh ➜ Tiền bị bốc hơi khỏi hệ thống!\n• Thuộc tính bị vi phạm: Tính nhất quán (Consistency). Một CSDL chuẩn mực phải có cơ chế giao dịch (Transaction): nếu không hoàn thành trọn vẹn cả 2 bước thì phải tự động hoàn tác (Rollback) về trạng thái ban đầu để dữ liệu luôn ăn khớp."
          }
        ]
      }
    },
    {
      id: "practice-b11-8",
      badge: "Bài 8 – 3 phút",
      title: "Bài 8 – Ghép Nối 6 Tình Huống Với 6 Thuộc Tính CSDL",
      duration: "3 phút",
      type: "exercise",
      description: "Nối chính xác từng yêu cầu thực tế với thuộc tính tương ứng của CSDL.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Tổng hợp toàn diện 6 thuộc tính CSDL.",
        requirements: [
          "Ghép 6 tình huống sau với 6 thuộc tính CSDL tương ứng:\n1. Điểm học sinh không được nhập lớn hơn 10.\n2. Không lưu số điện thoại của một khách hàng ở 10 file khác nhau.\n3. Chỉ có giáo viên bộ môn mới có quyền nhập và sửa điểm thi.\n4. Mọi bản ghi học sinh đều có đúng các cột: Mã HS, Họ tên, Lớp, Ngày sinh.\n5. Hai hệ thống không được hiển thị hai ngày sinh khác nhau cho cùng một người.\n6. Thay đổi cách lưu trữ vật lý trên đĩa không khiến các ứng dụng phải viết lại mã nguồn."
        ],
        qaList: [
          {
            q: "Kết quả ghép nối 6 tình huống?",
            a: "Đáp án chuẩn xác:\n1. Điểm không lớn hơn 10 ➜ Tính toàn vẹn (Integrity).\n2. Không lưu SĐT ở 10 file ➜ Tính không dư thừa (Minimal Redundancy).\n3. Chỉ giáo viên được sửa điểm ➜ Tính bảo mật (Security).\n4. Cột cố định theo khuôn ➜ Tính cấu trúc (Structured).\n5. Không hiển thị 2 ngày sinh khác nhau ➜ Tính nhất quán (Consistency).\n6. Đổi cách lưu không phải sửa phần mềm ➜ Tính độc lập dữ liệu (Data Independence)."
          }
        ]
      }
    },
    {
      id: "practice-b11-9",
      badge: "Bài 9 – 4 phút",
      title: "Bài 9 – Vận Dụng Lớn: Ý Tưởng Dữ Liệu Quản Lý Thư Viện",
      duration: "4 phút",
      type: "exercise",
      description: "Đề xuất 3 nhóm dữ liệu thư viện (Sách, Bạn đọc, Mượn trả) và kiểm tra 6 thuộc tính CSDL.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 4 phút. Áp dụng kiến thức CSDL vào bài toán thực tế SGK.",
        requirements: [
          "Một thư viện trường học cần xây dựng CSDL quản lý sách và bạn đọc.",
          "Nhiệm vụ:\n1. Đề xuất các thông tin cần lưu cho 3 nhóm: (a) Sách, (b) Bạn đọc, (c) Mượn - Trả.\n2. Lấy một ví dụ vi phạm Tính toàn vẹn và một ví dụ vi phạm Tính nhất quán trong thư viện này."
        ],
        qaList: [
          {
            q: "1. 3 Nhóm dữ liệu cần lưu?",
            a: "Đáp án:\n• Nhóm Sách: Mã sách, Tên sách, Tác giả, Thể loại, Tình trạng (Có sẵn / Đang mượn).\n• Nhóm Bạn đọc: Mã bạn đọc, Họ tên, Lớp, Ngày sinh, Thông tin liên hệ.\n• Nhóm Mượn - Trả: Mã phiếu, Mã bạn đọc, Mã sách, Ngày mượn, Hạn trả, Ngày trả thực tế."
          },
          {
            q: "2. Ví dụ vi phạm Toàn vẹn và Nhất quán?",
            a: "Đáp án:\n• Vi phạm Toàn vẹn: Nhập ngày trả thực tế trước ngày mượn (ví dụ: mượn 20/09 nhưng trả 15/09) hoặc để trống Mã sách.\n• Vi phạm Nhất quán: Quyển sách S001 đang được một bạn đọc mượn về nhà nhưng trên hệ thống tra cứu vẫn báo là 'Đang có sẵn trên giá để mượn'."
          }
        ]
      }
    },
    {
      id: "practice-b11-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử Thách Tổng Hợp: Chẩn Đoán Hệ Thống Cửa Hàng",
      duration: "6 phút",
      type: "exercise",
      description: "Phát hiện ít nhất 5 lỗi nghiêm trọng trong một hệ thống cửa hàng quản lý bằng file rời rạc.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Đánh giá toàn diện năng lực phân tích dữ liệu thực tế.",
        requirements: [
          "Một cửa hàng quản lý bằng 3 file Excel: san_pham.xlsx, ban_hang.xlsx, ton_kho.xlsx. Trong cả 3 file đều lưu Mã SP, Tên SP, Giá, Số lượng. Một ngày nọ:\n1. Giá sản phẩm SP001 đổi từ 150k lên 170k nhưng nhân viên chỉ sửa ở 2 file (file thứ ba vẫn là 150k).\n2. Một nhân viên gõ nhầm số lượng tồn kho của SP002 là -5.\n3. Nhân viên bán hàng mở xem và sửa được toàn bộ dữ liệu bảng lương công ty.\n4. Cuối tuần máy chủ bị sét đánh hỏng ổ cứng và không có bản sao lưu dự phòng.\n5. Đổi cấu trúc file khiến 3 phần mềm của cửa hàng đều phải viết lại code.\n\nNhiệm vụ: Hãy chỉ ra 5 lỗi trên tương ứng với những thuộc tính CSDL nào bị vi phạm."
        ],
        submissionHint: "Hướng dẫn giải chi tiết:\n1. Giá lưu lặp lại ở 3 file ➜ Vi phạm Tính không dư thừa.\n2. Giá SP001 một nơi 170k, một nơi 150k ➜ Vi phạm Tính nhất quán.\n3. Tồn kho = -5 chiếc ➜ Vi phạm Tính toàn vẹn (tồn kho không được âm).\n4. Nhân viên bán hàng xem sửa bảng lương ➜ Vi phạm Tính bảo mật (phân quyền sai).\n5. Hỏng ổ cứng mất sạch dữ liệu không thể khôi phục ➜ Vi phạm An toàn dữ liệu (thiếu sao lưu Backup).\n6. Đổi file phải viết lại code ➜ Vi phạm Tính độc lập dữ liệu.",
        scoring: [
          { level: "Đạt (7-8đ)", desc: "Tìm đúng ít nhất 3 lỗi và gọi đúng tên thuộc tính CSDL." },
          { level: "Khá (9đ)", desc: "Tìm đúng cả 5 lỗi, phân biệt rõ ràng giữa Dư thừa, Nhất quán và Toàn vẹn." },
          { level: "Xuất sắc (10đ)", desc: "Chẩn đoán hoàn hảo cả 6 vấn đề, phân tích sâu sắc nguyên nhân gốc rễ và đề xuất giải pháp kiến trúc CSDL tập trung." }
        ]
      }
    },
    {
      id: "practice-b11-minitest",
      badge: "Mini Test – 7 phút",
      title: "Mini Test Đánh Giá Năng Lực Cuối Buổi (7 Câu Trắc Nghiệm)",
      duration: "7 phút",
      type: "quiz",
      description: "7 câu hỏi trắc nghiệm tương tác kiểm tra độ hiểu sâu các khái niệm và 6 thuộc tính của CSDL trong Bài 11.",
      content: {
        objective: "Đánh giá mức độ tiếp thu 6 thuộc tính vàng sau 100 phút học tập.",
        questions: [
          {
            q: "Câu 1: Cơ sở dữ liệu (CSDL) là gì?",
            options: [
              "A. Một thư mục chứa rất nhiều file Word và Excel",
              "B. Tập hợp dữ liệu có liên quan với nhau, được lưu trữ có tổ chức trên hệ thống máy tính",
              "C. Một chương trình dùng để nhập dữ liệu văn bản",
              "D. Một trang web chứa các tệp PDF tài liệu học tập"
            ],
            answer: "B",
            explanation: "CSDL là tập hợp dữ liệu có liên quan, được tổ chức có cấu trúc và lưu trữ trên hệ thống máy tính."
          },
          {
            q: "Câu 2: Một thông tin được sao chép và lưu trữ ở ba nơi khác nhau không cần thiết. Đây là vấn đề liên quan trực tiếp tới:",
            options: [
              "A. Tính toàn vẹn",
              "B. Tính cấu trúc",
              "C. Dư thừa dữ liệu (Data Redundancy)",
              "D. Bảo mật"
            ],
            answer: "C",
            explanation: "Lưu lặp lại thông tin không cần thiết chính là hiện tượng dư thừa dữ liệu."
          },
          {
            q: "Câu 3: Cùng một học sinh nhưng nơi này ghi ngày sinh 12/03/2009, nơi khác lại ghi 21/03/2009. Hiện tượng này vi phạm chủ yếu:",
            options: [
              "A. Tính nhất quán (Consistency)",
              "B. Tính bảo mật",
              "C. Tính độc lập",
              "D. Tính cấu trúc"
            ],
            answer: "A",
            explanation: "Dữ liệu liên quan bị mâu thuẫn, không ăn khớp với nhau là vi phạm tính nhất quán."
          },
          {
            q: "Câu 4: Hệ thống cho phép người dùng nhập điểm kiểm tra là 15 (vượt quá thang điểm 10). Giá trị này vi phạm:",
            options: [
              "A. Tính toàn vẹn (Integrity)",
              "B. Tính nhất quán",
              "C. Tính độc lập",
              "D. Tính không dư thừa"
            ],
            answer: "A",
            explanation: "Tính toàn vẹn kiểm tra xem giá trị có hợp lệ theo các ràng buộc thực tế hay không."
          },
          {
            q: "Câu 5: Học sinh có thể tự ý đăng nhập để sửa điểm thi của chính mình. Hệ thống này vi phạm:",
            options: [
              "A. Tính cấu trúc",
              "B. Tính bảo mật (Security)",
              "C. Tính độc lập",
              "D. Tính không dư thừa"
            ],
            answer: "B",
            explanation: "Tính bảo mật ngăn chặn người dùng không có thẩm quyền truy cập hoặc chỉnh sửa dữ liệu trái phép."
          },
          {
            q: "Câu 6: Thay đổi cấu trúc lưu trữ vật lý của dữ liệu khiến tất cả các ứng dụng đều bị lỗi và phải viết lại mã nguồn. Thuộc tính nào chưa được đảm bảo?",
            options: [
              "A. Tính toàn vẹn",
              "B. Tính độc lập dữ liệu (Data Independence)",
              "C. Tính bảo mật",
              "D. Tính cấu trúc"
            ],
            answer: "B",
            explanation: "Tính độc lập dữ liệu đảm bảo đổi cách lưu trữ bên dưới không bắt các chương trình bên trên phải viết lại."
          },
          {
            q: "Câu 7: Dữ liệu CSDL bị mất hoàn toàn sau khi ổ cứng máy chủ hỏng và không thể phục hồi do không có bản sao lưu. Đây là vấn đề liên quan tới:",
            options: [
              "A. An toàn dữ liệu (Safety / Backup)",
              "B. Tính không dư thừa",
              "C. Tính cấu trúc",
              "D. Tính độc lập"
            ],
            answer: "A",
            explanation: "An toàn dữ liệu bảo vệ dữ liệu khỏi sự cố mất mát và đảm bảo khả năng phục hồi từ bản sao lưu dự phòng."
          }
        ]
      }
    },
    {
      id: "practice-b11-summary",
      badge: "Tổng Kết Buổi Học",
      title: "Chốt 8 Điểm Cốt Lõi, 6 Câu Hỏi Tự Vấn & Mạch Nối Sang Bài 12",
      duration: "Tổng kết",
      type: "exercise",
      description: "8 kiến thức cốt lõi học sinh tự nói lại, 6 câu hỏi chốt chuẩn đầu ra và mạch nối sang Bài 12 (Hệ quản trị CSDL).",
      content: {
        objective: "Khắc sâu toàn bộ kiến thức Bài 11 và tạo đà tâm lý chuyển tiếp sang Bài 12.",
        knowledgeNotice: "📌 6 CÂU HỎI HỌC SINH PHẢI TỰ TRẢ LỜI ĐƯỢC SAU BUỔI HỌC:\n1. Vì sao không nên lưu cùng một thông tin ở quá nhiều nơi? ➜ Gây dư thừa và dễ mất nhất quán khi cập nhật.\n2. CSDL là gì? ➜ Tập hợp dữ liệu có liên quan, được tổ chức có cấu trúc, lưu trên hệ thống máy tính.\n3. Tính cấu trúc nghĩa là gì? ➜ Dữ liệu có khuôn rõ ràng, thống nhất để dễ lưu trữ và khai thác.\n4. Toàn vẹn khác Nhất quán thế nào? ➜ Toàn vẹn là MỘT giá trị có HỢP LỆ không; Nhất quán là NHIỀU dữ liệu liên quan có ĂN KHỚP không.\n5. Tại sao cần tính độc lập dữ liệu? ➜ Để đổi cách lưu trữ không phải sửa hàng loạt mã nguồn phần mềm.\n6. Bảo mật khác An toàn điểm nào? ➜ Bảo mật là chống người không được phép (đúng người); An toàn là chống mất mát sự cố và có thể phục hồi (sao lưu backup).",
        table: {
          headers: ["Khoảng thời gian", "Nội dung hoạt động sư phạm", "Mục tiêu trọng tâm cần đạt"],
          rows: [
            ["0–8 phút", "Khởi động: Bảng điểm mâu thuẫn", "Nhận thức ngay hậu quả của việc lưu dữ liệu tùy tiện"],
            ["8–23 phút", "Dư thừa & Không nhất quán", "Hiểu bản chất dư thừa; phân biệt dư thừa ≠ cấm giá trị trùng"],
            ["23–36 phút", "Sự phụ thuộc & Độc lập dữ liệu", "Hiểu tại sao đổi cách lưu file lại làm hỏng phần mềm"],
            ["36–48 phút", "Dữ liệu có cấu trúc & Khái niệm CSDL", "Nắm vững định nghĩa CSDL và 3 ví dụ trường học, bán hàng, ngân hàng"],
            ["48–72 phút", "6 Thuộc tính cơ bản của CSDL", "Phân biệt Toàn vẹn vs Nhất quán, Bảo mật vs An toàn"],
            ["72–90 phút", "10 Bài Luyện Tập Thực Tế", "Rèn luyện phản xạ chẩn đoán lỗi trong hệ thống thư viện, cửa hàng"],
            ["90–97 phút", "Mini Test 7 Câu Cuối Buổi", "Đánh giá mức độ tiếp thu 6 thuộc tính vàng"],
            ["97–100 phút", "Chốt 8 Ý & Mạch Nối Bài 12", "Học sinh tự nói lại 6 câu hỏi và chuẩn bị tâm thế sang Hệ QTCSDL"]
          ]
        },
        criteria: [
          { level: "Mức Đạt (5-6.5đ)", desc: "Nêu được định nghĩa CSDL; nhận biết được dữ liệu dư thừa; phân biệt được điểm hợp lệ vs không hợp lệ (toàn vẹn)." },
          { level: "Mức Khá (7-8.5đ)", desc: "Phân biệt rạch ròi giữa Toàn vẹn (hợp lệ) và Nhất quán (ăn khớp); giải thích được vì sao không nên lưu dữ liệu suy diễn; hiểu tính độc lập dữ liệu cơ bản." },
          { level: "Mức Xuất Sắc (9-10đ)", desc: "Chẩn đoán toàn diện các vấn đề trong hệ thống quản lý thực tế; phân tích sâu sắc cơ chế giao dịch ngân hàng; hiểu trọn vẹn ranh giới giữa Bảo mật và An toàn dữ liệu." }
        ]
      }
    }
  ]
}
