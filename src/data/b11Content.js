/**
 * Dữ liệu bài giảng Bài 11: Cơ sở dữ liệu
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: khoảng 100 phút)
 * Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu
 * Định hướng: Kiến thức cốt lõi chung (Khoa học máy tính CS & Tin học ứng dụng ICT)
 * Biên soạn bám sát 152 mục của giáo trình gia sư chuyên sâu
 */

export const b11Content = {
  warmUp: {
    question: "Nguyễn Kì Duyên xem Bảng điểm môn Toán thấy ghi điểm cuối kì là 9, nhưng Bảng điểm tổng hợp cả lớp lại ghi môn Toán 8 điểm. Điểm thật của bạn là 8 hay 9? Và vì sao cùng lưu trên máy tính lại xuất hiện mâu thuẫn này?",
    description: "Câu trả lời đời thường: Cùng một thông tin nhưng bị chép ở hai cuốn sổ/tệp khác nhau. Một hôm giáo viên sửa ở cuốn thứ nhất nhưng quên sửa ở cuốn thứ hai, vài tuần sau mở ra thì không biết cuốn nào đúng! Sang ngôn ngữ chuyên môn: Đây chính là hiện tượng DƯ THỪA DỮ LIỆU dẫn tới KHÔNG NHẤT QUÁN DỮ LIỆU. Lưu dữ liệu trên máy tính không thể chỉ là 'chép sổ giấy thành các file riêng lẻ'. Để dữ liệu không lặp, không mâu thuẫn và nhiều phần mềm cùng dùng được, ta cần tổ chức dữ liệu thành Cơ sở dữ liệu (CSDL) với 6 thuộc tính cơ bản!",
    mathTable: [
      { student: "Nguyễn Kì Duyên", score: 9 }
    ],
    summaryTable: [
      { student: "Nguyễn Kì Duyên", math: 8, it: 10, physics: 10 }
    ]
  },

  sections: [
    {
      id: "sec-1",
      title: "1 & 2. Bức Tranh Toàn Bài & Khung Phân Bổ 100 Phút",
      subsections: [
        {
          heading: "1. Ba câu hỏi cốt lõi của Bài 11",
          points: [
            "Câu hỏi 1: Vì sao lưu dữ liệu trên máy tính không thể chỉ là 'chép sổ giấy thành file'?",
            "Câu hỏi 2: Cơ sở dữ liệu (CSDL) là gì?",
            "Câu hỏi 3: Một CSDL tốt cần có những đặc điểm nào?"
          ]
        },
        {
          heading: "2. Mạch tư duy sư phạm",
          points: [
            "DỮ LIỆU TRONG THỰC TẾ ➜ LƯU TRỮ TÙY TIỆN ➜ DỄ TRÙNG LẶP, DỄ MÂU THUẪN, KHÓ SỬA PHẦN MỀM ➜ CẦN TỔ CHỨC DỮ LIỆU KHOA HỌC ➜ CƠ SỞ DỮ LIỆU ➜ CÁC THUỘC TÍNH CƠ BẢN.",
            "Bài 11 CHƯA học SQL, CHƯA học truy vấn, CHƯA học khóa chính / khóa ngoại. Trọng tâm là hiểu 'Vì sao phải tổ chức dữ liệu khoa học', 'CSDL là gì' và 'Một CSDL tốt cần 6 thuộc tính nào'."
          ]
        },
        {
          heading: "3. Khung phân bổ buổi gia sư 100 phút",
          points: [
            "0–8 phút: Khởi động bằng bảng điểm – phát hiện dữ liệu mâu thuẫn (8 vs 9).",
            "8–23 phút: Dư thừa dữ liệu và không nhất quán.",
            "23–38 phút: Sự phụ thuộc giữa phần mềm và dữ liệu (Tính độc lập dữ liệu).",
            "38–48 phút: Vì sao dữ liệu cần có cấu trúc & Khái niệm CSDL.",
            "48–57 phút: Khái niệm CSDL và 4 mảnh ghép định nghĩa.",
            "57–82 phút: 6 thuộc tính cơ bản của CSDL (Cấu trúc, Không dư thừa, Độc lập, Toàn vẹn, Nhất quán, Bảo mật & an toàn).",
            "82–94 phút: Tình huống thực tế tổng hợp (Thư viện, Cửa hàng, Ngân hàng).",
            "94–100 phút: Mini Test 8 câu + Chốt bài và mạch nối sang Bài 12."
          ]
        }
      ],
      calloutBox: {
        type: "tip",
        title: "Lời khuyên sư phạm cho gia sư",
        text: "Nếu học sinh tiếp thu chậm, ưu tiên tập trung phần: Dư thừa – Độc lập dữ liệu – Toàn vẹn – Nhất quán. Đây là 4 ý học sinh dễ nhầm lẫn nhất trong các đề thi và kiểm tra!"
      }
    },

    {
      id: "sec-2",
      title: "3–22. Yêu Cầu 1: Hạn Chế Dư Thừa & Tránh Mất Nhất Quán",
      subsections: [
        {
          heading: "1. Khởi động: Một học sinh nhưng có hai điểm Toán",
          text: "Bảng điểm môn Toán ghi Nguyễn Kì Duyên: 9. Bảng điểm tổng hợp của lớp lại ghi: Toán 8, Tin học 10, Vật lí 10. Điểm Toán của bạn là 8 hay 9? ➜ Không thể biết được nếu chỉ nhìn vào hai bảng mâu thuẫn này.",
          points: [
            "Cách nói đời thường: Cùng một thông tin mà chép ở hai cuốn sổ khác nhau. Một hôm sửa cuốn thứ nhất nhưng quên sửa cuốn thứ hai. Vài tuần sau mở ra thì không biết cuốn nào đúng.",
            "Chuẩn hóa sang thuật ngữ chuyên môn: DƯ THỪA DỮ LIỆU và KHÔNG NHẤT QUÁN DỮ LIỆU.",
            "Quan hệ nhân quả: Dư thừa ➜ Phải cập nhật nhiều nơi ➜ Dễ quên / dễ sai ➜ Không nhất quán."
          ]
        },
        {
          heading: "2. Vì sao SGK dùng ví dụ bảng điểm?",
          text: "Giáo viên Toán có bảng điểm môn Toán, Giáo viên Tin có bảng điểm môn Tin, Giáo viên chủ nhiệm cần bảng tổng hợp cả lớp. Nếu giáo viên chủ nhiệm chép lại toàn bộ điểm sang bảng khác:",
          points: [
            "Điểm Toán của An = 9 xuất hiện trong: Bảng môn Toán, Bảng tổng hợp lớp, Bảng xếp loại, Bảng báo cáo cuối kì.",
            "Chỉ cần một nơi ghi nhầm (9 ➜ 8), dữ liệu lập tức mâu thuẫn!",
            "Có nhất thiết phải lưu bảng tổng hợp không? KHÔNG! Khi máy tính đã có bảng điểm từng môn, khi cần bảng tổng hợp, máy tính chỉ cần lấy dữ liệu các môn ghép lại và hiển thị (khung nhìn tổng hợp)."
          ]
        },
        {
          heading: "3. Dữ liệu suy diễn có nên lưu không? (Thành tiền, Điểm TB, Tuổi)",
          text: "Nguyên tắc vàng: Nếu một con số có thể tính toán ra ngay từ dữ liệu đã có thì phải cân nhắc không lưu riêng:",
          points: [
            "Ví dụ 1 (Thành tiền): Số lượng = 3, Đơn giá = 20.000 ➜ Thành tiền = 60.000. Nếu lưu cả 3 cột, sau đó sửa Số lượng từ 3 thành 4 nhưng quên sửa Thành tiền thì dữ liệu không còn khớp.",
            "Ví dụ 2 (Ngày sinh vs Tuổi): Ngày sinh (12/03/2009) là dữ liệu cơ sở cố định; Tuổi (17) thay đổi theo thời gian và tính được từ ngày sinh. Lưu tuổi sẽ rất nhanh bị lỗi thời!",
            "Ví dụ 3 (Thời gian tồn tại tài khoản): Lưu Ngày tạo tài khoản (01/01/2025) thay vì lưu số tháng tồn tại vì số tháng tăng dần mỗi ngày."
          ]
        },
        {
          heading: "4. Hiểu lầm cực lớn: 'Không dư thừa = không được trùng giá trị' là SAI!",
          text: "Học sinh rất hay hiểu nhầm điểm này. Cần phân biệt rõ:",
          points: [
            "Trùng giá trị hợp lý: Cả 3 bạn An, Bình, Chi đều học lớp '11A1'. Giá trị '11A1' lặp lại 3 lần là hoàn toàn bình thường vì cả 3 bạn cùng học một lớp thực tế.",
            "Dư thừa thông tin nguy hiểm: Số điện thoại của CÙNG MỘT khách hàng bị chép vào cả 5 file: Hồ sơ khách, Đơn hàng, Phiếu giao, Phiếu bảo hành, Chăm sóc khách hàng. Khách đổi số chỉ sửa được 2 file ➜ 3 file kia sai lệch.",
            "Định nghĩa chuẩn: TÍNH KHÔNG DƯ THỪA là yêu cầu hạn chế việc lưu trữ dữ liệu trùng lặp không cần thiết và những dữ liệu có thể dễ dàng thu được từ dữ liệu đã có. Mẹo nhớ: KHÔNG DƯ THỪA = KHÔNG CHÉP THỪA."
          ]
        },
        {
          heading: "5. Tính nhất quán: Đời thường vs Chuyên môn & 2 Ca kinh điển",
          text: "Đời thường: 'Các thông tin có liên quan phải nói cùng một câu chuyện'. Chuyên môn: Dữ liệu cần được đảm bảo đúng đắn và không mâu thuẫn sau các thao tác cập nhật, kể cả khi xảy ra sự cố. Mẹo: NHẤT QUÁN = ĂN KHỚP.",
          points: [
            "Ca kinh điển 1 (Chuyển tiền ngân hàng): Lan có 5 triệu, Minh có 2 triệu. Lan chuyển Minh 1 triệu. Trừ Lan 1 triệu thành công ➜ Mất điện / đứt mạng ➜ Chưa kịp cộng cho Minh. Kết quả: Lan còn 4 triệu, Minh vẫn 2 triệu, 1 triệu biến mất! CSDL phải đảm bảo tính nhất quán: hoặc cả hai cùng thành công, hoặc quay về trạng thái ban đầu.",
            "Ca kinh điển 2 (Vé máy bay / Xem phim): Chỉ còn đúng 1 ghế 12A. Hai đại lý cùng bấm bán cho 2 khách khác nhau. Kết quả xấu: Khách A và Khách B cùng cầm vé ghế 12A. Thực tế có 1 ghế nhưng dữ liệu cho 2 người sở hữu ➜ Mất tính nhất quán!"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Hiện tượng", "Cách nói đời thường", "Bản chất chuyên môn", "Hậu quả thực tế"],
        rows: [
          ["Dư thừa dữ liệu", "Chép lặp nhiều nơi vô ích, lưu cả con số tính nhẩm ra được", "Lưu trữ dữ liệu trùng lặp không cần thiết hoặc dữ liệu suy diễn", "Tốn bộ nhớ, tốn công cập nhật nhiều nơi, tăng nguy cơ sai sót"],
          ["Không nhất quán", "Thông tin cãi nhau, không nói cùng một câu chuyện", "Các dữ liệu có liên quan mâu thuẫn nhau sau thao tác cập nhật", "Mất niềm tin số liệu, tiền biến mất, 1 ghế bán cho 2 người"],
          ["Trùng giá trị hợp lý", "Nhiều người cùng ở một lớp, cùng ở một thành phố", "Nhiều đối tượng độc lập có cùng một thuộc tính thực tế", "Hoàn toàn hợp lệ, KHÔNG phải là lỗi dư thừa dữ liệu"]
        ]
      }
    },

    {
      id: "sec-3",
      title: "23–34. Yêu Cầu 2: Phụ Thuộc Phần Mềm – Dữ Liệu & Tính Độc Lập Dữ Liệu",
      subsections: [
        {
          heading: "1. Vấn đề: Phần mềm phụ thuộc chặt vào chi tiết file lưu trữ",
          text: "Khi lưu dữ liệu bằng file văn bản đơn giản (như danh_sach.txt):",
          points: [
            "Dữ liệu mẫu: '11A,1,Dương Hồng Anh' | '11A,2,Lương Việt Anh' | '11A,3,Nguyễn Kì Duyên'.",
            "Quy ước ngầm: Phần 1 = Lớp, Phần 2 = STT, Phần 3 = Họ tên, ngăn cách bởi dấu phẩy ','.",
            "Chương trình đọc file được lập trình viên viết dựa trên giả định này: cắt dòng theo dấu phẩy, lấy phần 1 làm lớp, phần 2 làm STT, phần 3 làm họ tên."
          ]
        },
        {
          heading: "2. Cấu trúc file thay đổi ➜ Thảm họa bảo trì phần mềm",
          text: "Nhà trường quyết định đổi quy ước lưu file thành: '3;Nguyễn Kì Duyên;11A' (STT; Họ tên; Lớp, ngăn cách bởi dấu chấm phẩy ';'):",
          points: [
            "Chương trình cũ lập tức lấy nhầm: STT '3' thành Lớp, Họ tên thành STT, Lớp thành Họ tên, hoặc báo lỗi cú pháp sập toàn bộ ứng dụng!",
            "Vấn đề lớn hơn: Nếu có 5 phần mềm cùng đọc file này (Điểm danh, Nhập điểm, In bảng điểm, SMS phụ huynh, Thống kê), cả 5 phần mềm đều phải đập đi sửa lại code!",
            "Hệ quả: Tốn chi phí, tốn thời gian, dễ sinh lỗi mới và hệ thống bị trói chặt không thể nâng cấp."
          ]
        },
        {
          heading: "3. Tính độc lập dữ liệu (Data Independence) là gì?",
          text: "Đời thường: 'Đổi cách cất dữ liệu không làm hỏng mọi ứng dụng'. Chuyên môn: Tính độc lập dữ liệu là khả năng thay đổi cấu trúc lưu trữ hoặc tổ chức dữ liệu vật lý mà KHÔNG làm thay đổi các chương trình ứng dụng đang khai thác dữ liệu đó.",
          points: [
            "Ví dụ cửa hàng: Cả Website bán hàng, App di động cho khách và Máy POS quầy thu ngân cùng truy cập vào một CSDL sản phẩm.",
            "Khi quản trị viên tối ưu hóa vị trí lưu trên ổ cứng hoặc thêm cột mới, cả 3 ứng dụng trên vẫn chạy ổn định bình thường mà không cần sửa một dòng code nào.",
            "Bài kiểm tra nhanh: Đổi cấu trúc file khiến 5 chương trình bị lỗi ➜ Hệ thống đang thiếu Tính độc lập dữ liệu!"
          ]
        }
      ],
      functions: [
        {
          name: "❌ Phụ thuộc chặt (Hệ thống tệp truyền thống)",
          desc: "Phần mềm biết quá sâu chi tiết cách cất file. Sửa một dấu phẩy hay đổi vị trí cột là toàn bộ các chương trình sập."
        },
        {
          name: "✅ Độc lập dữ liệu (Cơ sở dữ liệu)",
          desc: "Tổ chức dữ liệu tách biệt với phần mềm. Thay đổi định dạng hoặc nơi lưu trữ vật lý không ảnh hưởng tới code ứng dụng."
        }
      ]
    },

    {
      id: "sec-4",
      title: "35–48. Dữ Liệu Có Cấu Trúc & Khái Niệm Cơ Sở Dữ Liệu (CSDL)",
      subsections: [
        {
          heading: "1. Vì sao dữ liệu cần có cấu trúc?",
          text: "So sánh hai cách ghi nhận thông tin học sinh:",
          points: [
            "Cách A (Ghi tự do không cấu trúc): 'An học lớp 11A1 được tám rưỡi. Bình học 11A1 điểm 7. Chi học 11A2 điểm 9.' ➜ Máy tính rất khó tìm kiếm, không thể tự động lọc danh sách học sinh giỏi hay tính điểm trung bình.",
            "Cách B (Có cấu trúc): Tổ chức thành bảng với các cột xác định: [Họ tên], [Lớp], [Điểm]. Hàng 1: An, 11A1, 8.5. Hàng 2: Bình, 11A1, 7.0 ➜ Rõ ràng, máy tính xử lý và truy vấn cực nhanh.",
            "Chuẩn hóa dữ liệu: Ngày tháng quy ước rõ (DD/MM/YYYY); Số điện thoại chuẩn hóa 10 chữ số bắt đầu bằng số 0."
          ]
        },
        {
          heading: "2. Khái niệm Cơ sở dữ liệu (CSDL) – 4 Mảnh Ghép Cốt Lõi",
          text: "Định nghĩa chuẩn SGK Tin học 11: CƠ SỞ DỮ LIỆU là một tập hợp dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính.",
          points: [
            "Mảnh 1: 'Tập hợp dữ liệu' ➜ Không phải một mẩu tin đơn lẻ.",
            "Mảnh 2: 'Có liên quan với nhau' ➜ Dữ liệu cùng phục vụ một mục đích quản lý chung (không phải gộp bừa bãi).",
            "Mảnh 3: 'Được lưu trữ có tổ chức' ➜ Có cấu trúc, có quy tắc, không lưu lộn xộn.",
            "Mảnh 4: 'Trên hệ thống máy tính' ➜ Phục vụ nhiều người và nhiều phần mềm cùng khai thác."
          ]
        },
        {
          heading: "3. Một thư mục nhiều file có phải là CSDL không?",
          text: "Câu trả lời dứt khoát: KHÔNG THỂ KHẲNG ĐỊNH ĐÓ LÀ CSDL CHỈ VÌ CÓ NHIỀU FILE!",
          points: [
            "Một thư mục chứa: anh_meo.jpg, bai_hat.mp3, phim.mp4, baitap.docx ➜ Không phải là CSDL vì các file này rời rạc, không liên quan và không có cấu trúc tổ chức thống nhất.",
            "Ba ví dụ CSDL thực tế điển hình:",
            "• CSDL Trường học: Học sinh, Lớp học, Môn học, Điểm số, Giáo viên.",
            "• CSDL Cửa hàng: Sản phẩm, Khách hàng, Đơn hàng, Nhân viên, Tồn kho.",
            "• CSDL Ngân hàng: Khách hàng, Tài khoản, Số dư, Lịch sử giao dịch."
          ]
        }
      ]
    },

    {
      id: "sec-5",
      title: "49–79 & 147. Sáu Thuộc Tính Cơ Bản Của Cơ Sở Dữ Liệu",
      subsections: [
        {
          heading: "1. Bảng đối chiếu song song: Chuyên Môn ↔ Đời Thường (Mục 147)",
          text: "Để học sinh nhớ sâu bản chất và không học vẹt, hãy dùng bảng đối chiếu sau:",
          points: [
            "1. Tính cấu trúc ↔ Có khuôn rõ ràng (Dữ liệu lưu theo bảng, cột, kiểu thống nhất).",
            "2. Tính không dư thừa ↔ Không chép thừa (Hạn chế lặp lại, không lưu dữ liệu tính được).",
            "3. Tính độc lập dữ liệu ↔ Đổi cách cất không làm hỏng mọi ứng dụng (Tách biệt dữ liệu và app).",
            "4. Tính toàn vẹn ↔ Giá trị phải hợp lệ (Thỏa mãn quy tắc thực tế: 0 ≤ Điểm ≤ 10, Tồn kho ≥ 0).",
            "5. Tính nhất quán ↔ Các dữ liệu phải ăn khớp (Không mâu thuẫn, cùng nói một câu chuyện).",
            "6. Tính bảo mật ↔ Đúng người mới được xem/sửa (Phân quyền truy cập).",
            "7. Tính an toàn ↔ Có sự cố vẫn bảo vệ/khôi phục được dữ liệu (Có sao lưu backup)."
          ]
        },
        {
          heading: "2. Phân biệt Toàn vẹn vs Nhất quán – Cặp đôi dễ nhầm nhất (Mục 67–69)",
          text: "Công thức phân biệt thần tốc:",
          points: [
            "TOÀN VẸN = Bản thân MỘT giá trị có HỢP LỆ theo quy tắc hay không? (Ví dụ: Điểm = 15 là vi phạm toàn vẹn; Tồn kho = -5 là vi phạm toàn vẹn; Ngày trả sách trước ngày mượn là vi phạm toàn vẹn).",
            "NHẤT QUÁN = NHIỀU dữ liệu liên quan có ĂN KHỚP với nhau hay không? (Ví dụ: Bảng môn Toán ghi 9, Bảng tổng hợp ghi 8 là vi phạm nhất quán dù cả 8 và 9 đều là điểm hợp lệ!).",
            "Công thức nhớ: Điểm 15 ➜ Toàn vẹn. Điểm 8 và 9 ở hai bảng ➜ Nhất quán."
          ]
        },
        {
          heading: "3. Phân biệt Bảo mật vs An toàn dữ liệu (Mục 70–78)",
          points: [
            "Bảo mật (Security): Chống người không được phép (Học sinh không được sửa điểm; Người lạ không được xem số dư tài khoản của người khác).",
            "An toàn (Safety): Chống mất mát do sự cố phần cứng, thiên tai, mất điện và đảm bảo khả năng khôi phục từ bản sao lưu (Có sao lưu dự phòng Backup định kỳ)."
          ]
        },
        {
          heading: "4. Bốn câu hỏi gài tư duy sâu (Mục 116–119)",
          points: [
            "Gài 1 (Dữ liệu đúng chưa chắc CSDL tốt): Tất cả điểm số đều chính xác nhưng mọi học sinh đều có quyền vào sửa ➜ Vi phạm nghiêm trọng Tính bảo mật!",
            "Gài 2 (Có backup chưa chắc bảo mật tốt): Công ty sao lưu mỗi ngày nhưng file dữ liệu khách hàng ai cũng tải được về máy cá nhân ➜ An toàn có, nhưng Bảo mật cực kém!",
            "Gài 3 (Giá trị hợp lệ chưa chắc nhất quán): Bảng A điểm = 8, Bảng B điểm = 9. Cả hai số 8 và 9 đều hợp lệ (toàn vẹn ổn) nhưng dữ liệu không nhất quán!",
            "Gài 4 (Không trùng chưa chắc tốt): Mỗi khách hàng xuất hiện đúng 1 lần (không dư thừa) nhưng cột SĐT lại nhập 'abcxyz' ➜ Vi phạm Tính toàn vẹn!"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Thuộc tính", "Cách nói đời thường", "Ví dụ vi phạm", "Cách CSDL xử lý"],
        rows: [
          ["1. Tính cấu trúc", "Có khuôn rõ ràng", "Ghi điểm tự do bằng văn xuôi không tách cột", "Quy định rõ các trường: Mã, Họ tên, Ngày sinh, Điểm"],
          ["2. Tính không dư thừa", "Không chép thừa", "SĐT khách hàng chép lặp ở 6 file khác nhau", "Lưu thông tin tại một nguồn gốc, tính toán khi hiển thị"],
          ["3. Tính độc lập dữ liệu", "Đổi cách cất không hỏng app", "Đổi dấu phẩy thành chấm phẩy làm 5 phần mềm sập", "Tách riêng lớp lưu trữ vật lý với tầng ứng dụng"],
          ["4. Tính toàn vẹn", "Giá trị phải hợp lệ", "Nhập điểm = 15; Tồn kho = -20; Ngày trả trước ngày mượn", "Thiết lập ràng buộc miền giá trị: 0 ≤ Điểm ≤ 10"],
          ["5. Tính nhất quán", "Các dữ liệu phải ăn khớp", "Toán ghi 9 nhưng Tổng hợp ghi 8; Ghế 12A bán cho 2 khách", "Kiểm soát giao dịch đồng bộ, cập nhật dữ liệu liên quan"],
          ["6. Tính bảo mật", "Đúng người được xem/sửa", "Học sinh tự đăng nhập sửa điểm của cả lớp", "Phân quyền người dùng (User Role & Permissions)"],
          ["7. Tính an toàn", "Có sự cố vẫn không mất", "Máy chủ cháy ổ cứng, mất sạch vì không có backup", "Cơ chế ghi log giao dịch và sao lưu dữ liệu dự phòng"]
        ]
      }
    },

    {
      id: "sec-6",
      title: "91–94. Bốn Hiểu Lầm Thường Gặp Cần Giải Tỏa",
      subsections: [
        {
          heading: "1. CSDL có phải là file Excel không?",
          text: "Excel là một phần mềm bảng tính cá nhân, không phải là CSDL chuyên nghiệp:",
          points: [
            "Excel tốt cho tính toán nhanh, vẽ biểu đồ đơn giản của một người dùng.",
            "Excel thiếu cơ chế kiểm soát đồng thời khi hàng nghìn người cùng truy cập, dễ trùng lặp, không có tính độc lập dữ liệu cao và bảo mật phân quyền rất yếu."
          ]
        },
        {
          heading: "2. CSDL có phải là Google Sheets không?",
          text: "Google Sheets là công cụ bảng tính cộng tác trên nền tảng đám mây, nhưng vẫn là bảng tính, không phải là hệ thống CSDL quan hệ có cấu trúc chuẩn mực."
        },
        {
          heading: "3. CSDL có phải là 'Server' (Máy chủ) không?",
          text: "Không! Server là thiết bị phần cứng hoặc hệ thống máy tính cung cấp dịch vụ mạng; CSDL là dữ liệu được tổ chức có cấu trúc lưu trên máy tính đó."
        },
        {
          heading: "4. CSDL có phải là phần mềm không?",
          text: "Không! CSDL là DỮ LIỆU được tổ chức. Còn phần mềm dùng để tạo lập, cập nhật, quản lý CSDL được gọi là HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU (DBMS) – Đây chính là chủ đề của Bài 12!"
        }
      ]
    },

    {
      id: "sec-7",
      title: "133–143. Sơ Đồ Chốt Kiến Thức, 6 Câu Tự Vấn Bắt Buộc & Mạch Nối Bài 12",
      checkpointCards: [
        {
          title: "1. CSDL LÀ GÌ?",
          detail: "Tập hợp dữ liệu có liên quan với nhau, được lưu trữ có tổ chức trên hệ thống máy tính."
        },
        {
          title: "2. VÌ SAO HẠN CHẾ DƯ THỪA?",
          detail: "Lưu lặp tốn bộ nhớ, phải sửa nhiều nơi và dễ dẫn tới dữ liệu mâu thuẫn (không nhất quán)."
        },
        {
          title: "3. TÍNH ĐỘC LẬP DỮ LIỆU LÀ GÌ?",
          detail: "Đổi cách tổ chức hoặc lưu trữ vật lý không làm các phần mềm ứng dụng phải viết lại mã nguồn."
        },
        {
          title: "4. TOÀN VẸN KHÁC NHẤT QUÁN THẾ NÀO?",
          detail: "Toàn vẹn là MỘT giá trị có HỢP LỆ không; Nhất quán là CÁC dữ liệu liên quan có ĂN KHỚP không."
        },
        {
          title: "5. BẢO MẬT KHÁC AN TOÀN ĐIỂM NÀO?",
          detail: "Bảo mật là ĐÚNG NGƯỜI (chống truy cập trái phép); An toàn là KHÔNG MẤT (có sao lưu phục hồi)."
        },
        {
          title: "6. MẠCH NỐI SANG BÀI 12",
          detail: "Có CSDL rồi, phần mềm nào sẽ đứng ra quản lý, thêm/sửa/xóa và bảo vệ CSDL? ➜ Hệ quản trị CSDL (DBMS)!"
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|                        BÀI 11: CƠ SỞ DỮ LIỆU (TỔNG KẾT)                           |
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
      Có khuôn   Không      Đổi cách lưu       Giá trị    Dữ liệu    Đúng người
      rõ ràng    chép thừa  không hỏng app     hợp lệ     ăn khớp    + Backup`
    }
  ],

  summaryQuiz: [
    {
      question: "Câu 1: Cơ sở dữ liệu (CSDL) được định nghĩa chuẩn xác là:",
      options: [
        "A. Một chương trình dùng để tính toán điểm số trên máy tính.",
        "B. Một tập hợp dữ liệu có liên quan với nhau, được lưu trữ một cách có tổ chức trên hệ thống máy tính.",
        "C. Một thư mục bất kì chứa nhiều tệp tin văn bản và hình ảnh.",
        "D. Một máy chủ chuyên dụng lưu trữ tài liệu của cơ quan."
      ],
      answer: "B",
      explanation: "Theo định nghĩa chuẩn SGK Tin học 11, CSDL là tập hợp dữ liệu có liên quan với nhau, được lưu trữ có tổ chức trên hệ thống máy tính."
    },
    {
      question: "Câu 2: Một thông tin điểm số của học sinh được sao chép và lưu trữ ở bốn tệp bảng tính khác nhau không cần thiết. Hiện tượng này liên quan trực tiếp đến:",
      options: [
        "A. Tính cấu trúc",
        "B. Dư thừa dữ liệu (Data Redundancy)",
        "C. Tính bảo mật",
        "D. Tính an toàn"
      ],
      answer: "B",
      explanation: "Lưu lặp lại cùng một thông tin ở nhiều nơi không cần thiết chính là biểu hiện của Dư thừa dữ liệu."
    },
    {
      question: "Câu 3: Hai bảng dữ liệu lưu hai ngày sinh khác nhau cho cùng một học sinh (bảng A ghi 12/03/2009, bảng B ghi 21/03/2009). Hiện tượng này vi phạm thuộc tính nào?",
      options: [
        "A. Tính toàn vẹn",
        "B. Tính nhất quán (Consistency)",
        "C. Tính độc lập dữ liệu",
        "D. Tính an toàn"
      ],
      answer: "B",
      explanation: "Các dữ liệu liên quan mâu thuẫn nhau, không ăn khớp với nhau là vi phạm Tính nhất quán."
    },
    {
      question: "Câu 4: Hệ thống cho phép người dùng nhập điểm môn học là 15 (trong khi thang điểm quy định từ 0 đến 10). Giá trị này vi phạm thuộc tính nào?",
      options: [
        "A. Tính nhất quán",
        "B. Tính toàn vẹn (Integrity)",
        "C. Tính bảo mật",
        "D. Tính độc lập dữ liệu"
      ],
      answer: "B",
      explanation: "Tính toàn vẹn kiểm soát xem bản thân từng giá trị dữ liệu có hợp lệ theo quy định thực tế hay không."
    },
    {
      question: "Câu 5: Thay đổi cấu trúc dữ liệu lưu trữ bên dưới khiến 10 phần mềm ứng dụng đều bị lỗi và phải viết lại mã nguồn. Thuộc tính nào chưa được đảm bảo tốt?",
      options: [
        "A. Tính độc lập dữ liệu (Data Independence)",
        "B. Tính cấu trúc",
        "C. Tính an toàn",
        "D. Tính bảo mật"
      ],
      answer: "A",
      explanation: "Tính độc lập dữ liệu đảm bảo thay đổi cách tổ chức lưu trữ vật lý không ép các chương trình ứng dụng phải sửa đổi theo."
    },
    {
      question: "Câu 6: Người không có thẩm quyền vẫn có thể tự ý đăng nhập và chỉnh sửa dữ liệu tài khoản khách hàng. Hệ thống này vi phạm thuộc tính:",
      options: [
        "A. Tính không dư thừa",
        "B. Tính bảo mật (Security)",
        "C. Tính toàn vẹn",
        "D. Tính cấu trúc"
      ],
      answer: "B",
      explanation: "Tính bảo mật ngăn chặn người dùng không có thẩm quyền truy cập hoặc chỉnh sửa dữ liệu trái phép."
    },
    {
      question: "Câu 7: Ổ cứng máy chủ bị hỏng và toàn bộ dữ liệu bị mất vĩnh viễn, không thể khôi phục do không có bản sao lưu. Vấn đề này thuộc về:",
      options: [
        "A. Tính an toàn dữ liệu (Safety / Backup)",
        "B. Tính cấu trúc",
        "C. Tính độc lập dữ liệu",
        "D. Tính dư thừa"
      ],
      answer: "A",
      explanation: "Tính an toàn dữ liệu bảo vệ dữ liệu khỏi mất mát do sự cố phần cứng và đảm bảo khả năng phục hồi từ bản sao lưu dự phòng."
    },
    {
      question: "Câu 8: Trong giao dịch chuyển tiền ngân hàng, tài khoản người gửi đã bị trừ 1 triệu nhưng tài khoản người nhận chưa được cộng do sự cố mất điện. Dữ liệu này vi phạm:",
      options: [
        "A. Tính toàn vẹn",
        "B. Tính nhất quán (Consistency)",
        "C. Tính cấu trúc",
        "D. Tính không dư thừa"
      ],
      answer: "B",
      explanation: "Dữ liệu hai tài khoản bị lệch, tiền biến mất khỏi hệ thống sau sự cố là vi phạm tính nhất quán của CSDL."
    }
  ],

  practiceExercises: [
    {
      id: "practice-b11-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Điểm Trung Bình: Có Nhất Thiết Phải Lưu Cột Riêng?",
      duration: "2 phút",
      type: "exercise",
      description: "Phân tích xem có nên lưu cột Điểm trung bình vào CSDL hay chỉ tính toán khi cần hiển thị.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Phân biệt dữ liệu cơ sở và dữ liệu suy diễn.",
        requirements: [
          "Một bảng điểm đã lưu các điểm thành phần: Điểm thường xuyên 1 (TX1), Điểm thường xuyên 2 (TX2), Điểm giữa kì, Điểm cuối kì.",
          "Điểm trung bình có thể tính toán hoàn toàn từ các điểm trên theo công thức trọng số.",
          "Hỏi: Có nhất thiết phải lưu thêm một cột 'Điểm trung bình' cố định trong CSDL không? Vì sao?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: KHÔNG NHẤT THIẾT PHẢI LƯU.\n• Lý do: Điểm trung bình có thể dễ dàng tính toán lại bất cứ lúc nào từ các điểm thành phần (TX1, TX2, Giữa kì, Cuối kì).\n• Rủi ro nếu lưu: Nếu giáo viên sửa lại điểm Giữa kì của học sinh mà quên cập nhật lại cột Điểm trung bình, dữ liệu sẽ lập tức bị mâu thuẫn (mất tính nhất quán)!\n• Kết luận: Chỉ nên lưu dữ liệu cơ sở, dữ liệu suy diễn nên để máy tính tự động tính toán khi hiển thị."
          }
        ]
      }
    },
    {
      id: "practice-b11-2",
      badge: "Bài 2 – 2 phút",
      title: "Bài 2 – Tuổi Và Ngày Sinh: Dữ Liệu Nào Nhanh Lỗi Thời Hơn?",
      duration: "2 phút",
      type: "exercise",
      description: "Lựa chọn giữa lưu Ngày sinh hay lưu Tuổi để đảm bảo tính ổn định của CSDL.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nhận diện tính ổn định của dữ liệu.",
        requirements: [
          "Một học sinh có thông tin: Ngày sinh = 12/03/2009; Tuổi = 17.",
          "Hỏi: Dữ liệu nào sẽ nhanh bị lỗi thời hơn? CSDL nên ưu tiên lưu dữ liệu nào làm dữ liệu cơ sở?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án:\n• Dữ liệu nhanh lỗi thời hơn: 'Tuổi' (sau mỗi năm tuổi sẽ thay đổi, nếu lưu cứng sẽ bị sai lệch).\n• Dữ liệu cơ sở ổn định: 'Ngày sinh' (gần như cố định suốt đời).\n• Kết luận: Nên lưu Ngày sinh; Tuổi sẽ được tính tự động từ (Năm hiện tại - Năm sinh) khi cần hiển thị."
          }
        ]
      }
    },
    {
      id: "practice-b11-3",
      badge: "Bài 3 – 2 phút",
      title: "Bài 3 – Nhận Diện Dữ Liệu Có Cấu Trúc Rõ Ràng",
      duration: "2 phút",
      type: "exercise",
      description: "So sánh hai cách ghi chép dữ liệu để nhận ra ưu thế của tính cấu trúc.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Phân biệt dữ liệu tự do và dữ liệu có cấu trúc.",
        requirements: [
          "Xem xét hai cách ghi dữ liệu sau:\n• Cách A:\n  An,11A1,8.5\n  Bình,11A1,7.0\n• Cách B: 'An học lớp 11A1 được tám rưỡi. Bình học 11A1 điểm 7.'\n\nCách nào có cấu trúc rõ ràng hơn để máy tính dễ dàng xử lý, lọc và tính toán?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Cách A có cấu trúc rõ ràng hơn rất nhiều.\n• Cách A chia tách rành mạch thành các trường thông tin: [Họ tên], [Lớp], [Điểm]. Máy tính có thể đọc từng cột để tìm kiếm, sắp xếp học sinh giỏi hoặc tính điểm trung bình trong tích tắc.\n• Cách B là văn bản tự do, máy tính rất khó nhận diện đâu là tên, đâu là điểm số để xử lý tự động."
          }
        ]
      }
    },
    {
      id: "practice-b11-4",
      badge: "Bài 4 – 2 phút",
      title: "Bài 4 – Tính Toàn Vẹn: Phát Hiện Điểm Số Bất Thường",
      duration: "2 phút",
      type: "exercise",
      description: "Kiểm tra ràng buộc miền giá trị điểm số hợp lệ từ 0 đến 10.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Vận dụng tính toàn vẹn dữ liệu.",
        requirements: [
          "Quy định của nhà trường: 0 ≤ Điểm môn học ≤ 10.",
          "Trong danh sách điểm nhập vào có các giá trị: 8.5, 10, 0, -1, 12.",
          "Những giá trị nào vi phạm Tính toàn vẹn của CSDL?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Các giá trị '-1' và '12' vi phạm Tính toàn vẹn.\n• Giải thích: Điểm số thực tế không thể âm và không thể vượt quá thang điểm 10 quy định. Tính toàn vẹn đòi hỏi mọi dữ liệu đưa vào CSDL phải thỏa mãn các ràng buộc hợp lệ của bài toán quản lý."
          }
        ]
      }
    },
    {
      id: "practice-b11-5",
      badge: "Bài 5 – 2 phút",
      title: "Bài 5 – Tính Nhất Quán: Xung Đột Lớp Học Của Học Sinh",
      duration: "2 phút",
      type: "exercise",
      description: "Phát hiện sự mâu thuẫn dữ liệu giữa hai nguồn thông tin cùng một thời điểm.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nhận diện vi phạm tính nhất quán.",
        requirements: [
          "Hồ sơ học sinh của bạn An ghi: Lớp = 11A1.\nDanh sách lớp học của khối 11 lại ghi bạn An: Lớp = 11A2.\nNếu hai bảng này cùng nói về một thời điểm học tập của An, hiện tượng này vi phạm thuộc tính nào?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Vi phạm TÍNH NHẤT QUÁN (Consistency).\n• Giải thích: Cả hai giá trị '11A1' và '11A2' đều là tên lớp hợp lệ (tính toàn vẹn không sai), nhưng khi cùng nói về một học sinh tại một thời điểm mà lại đưa ra hai thông tin trái ngược nhau thì dữ liệu không ăn khớp ➜ Mất tính nhất quán."
          }
        ]
      }
    },
    {
      id: "practice-b11-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – Tính Độc Lập Dữ Liệu: Đổi Cấu Trúc File Làm 5 Phần Mềm Sập",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích hậu quả khi phần mềm phụ thuộc quá sâu vào cách tổ chức file.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Hiểu giá trị của tính độc lập dữ liệu.",
        requirements: [
          "File ban đầu: Lớp,Họ tên,Điểm.\nSau đó người quản lý đổi thứ tự và dấu ngăn cách thành: Điểm;Họ tên;Lớp.\nNgay lập tức, 5 chương trình đang dùng file này đều báo lỗi và buộc phải viết lại mã nguồn.\nHệ thống này đang thiếu thuộc tính quan trọng nào của CSDL?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Hệ thống đang thiếu TÍNH ĐỘC LẬP DỮ LIỆU (Data Independence).\n• Giải thích: Trong hệ thống tệp truyền thống, các chương trình phụ thuộc quá chặt vào chi tiết định dạng vật lý của file. CSDL chuẩn mực tạo ra một lớp trừu tượng ở giữa, giúp đổi cách lưu trữ bên dưới mà không làm ảnh hưởng đến mã nguồn của các ứng dụng bên trên."
          }
        ]
      }
    },
    {
      id: "practice-b11-7",
      badge: "Bài 7 – 2 phút",
      title: "Bài 7 – Tính Bảo Mật: Học Sinh Tự Sửa Điểm Cả Lớp",
      duration: "2 phút",
      type: "exercise",
      description: "Nhận diện lỗ hổng phân quyền truy cập trong hệ thống quản lý.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Xác định vi phạm tính bảo mật.",
        requirements: [
          "Một học sinh phát hiện đường link nhập điểm của giáo viên và có thể tự ý đăng nhập vào chỉnh sửa điểm số của tất cả các bạn trong lớp. Vấn đề này thuộc về thuộc tính nào của CSDL?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Vi phạm TÍNH BẢO MẬT (Security).\n• Giải thích: Tính bảo mật đảm bảo chỉ những người có thẩm quyền (đúng người, đúng quyền hạn) mới được phép xem hoặc chỉnh sửa dữ liệu tương ứng. Học sinh chỉ được xem điểm của mình, không được quyền sửa điểm của bất kỳ ai."
          }
        ]
      }
    },
    {
      id: "practice-b11-8",
      badge: "Bài 8 – 2 phút",
      title: "Bài 8 – Tính An Toàn: Ổ Cứng Hỏng Và Không Có Bản Sao Lưu",
      duration: "2 phút",
      type: "exercise",
      description: "Nhận thức tầm quan trọng sống còn của việc sao lưu dữ liệu dự phòng (Backup).",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Phân biệt an toàn dữ liệu và bảo mật.",
        requirements: [
          "Một trường học chỉ lưu trữ dữ liệu điểm trên 1 chiếc máy tính duy nhất và không bao giờ sao lưu (0 bản backup). Một ngày sét đánh làm cháy ổ cứng, toàn bộ dữ liệu bị mất vĩnh viễn không thể khôi phục. Thuộc tính nào chưa được đảm bảo?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Thuộc tính AN TOÀN DỮ LIỆU (Safety / Recovery) chưa được đảm bảo.\n• Giải thích: An toàn dữ liệu là khả năng bảo vệ dữ liệu khỏi hư hỏng, mất mát do sự cố phần cứng, thiên tai, hỏa hoạn và đảm bảo khả năng phục hồi nguyên vẹn dữ liệu từ các bản sao lưu dự phòng (Backup)."
          }
        ]
      }
    },
    {
      id: "practice-b11-9",
      badge: "Bài 9 – 3 phút",
      title: "Bài 9 – Dư Thừa Và Nhất Quán: Khách Đổi Số Điện Thoại",
      duration: "3 phút",
      type: "exercise",
      description: "Theo dõi mối quan hệ nhân quả: Dư thừa dữ liệu dẫn tới mất tính nhất quán.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Phân tích dòng chảy nhân quả.",
        requirements: [
          "Một khách hàng đổi số điện thoại mới. Do thông tin khách hàng bị sao chép ở 6 file Excel khác nhau, nhân viên chỉ kịp cập nhật số mới ở 4 file, 2 file còn lại vẫn giữ số cũ.\n1. Vì sao nhân viên phải tốn công sửa ở nhiều nơi?\n2. Hai nơi còn lại gây ra vấn đề gì?\n3. Nêu 2 khái niệm CSDL tương ứng với hiện tượng này."
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án:\n1. Phải sửa nhiều nơi vì dữ liệu bị LƯU LẶP LẠI (Dư thừa dữ liệu).\n2. Hai nơi còn lại giữ số cũ khiến số liệu mâu thuẫn, khi cần liên hệ giao hàng hay bảo hành không biết số nào là số đúng (Mất tính nhất quán).\n3. Hai khái niệm tương ứng: DƯ THỪA DỮ LIỆU (Data Redundancy) và KHÔNG NHẤT QUÁN DỮ LIỆU (Data Inconsistency)."
          }
        ]
      }
    },
    {
      id: "practice-b11-10",
      badge: "Bài 10 – 3 phút",
      title: "Bài 10 – Giao Dịch Ngân Hàng: Sự Cố Trừ Tiền Bên Gửi Chưa Cộng Bên Nhận",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích trạng thái đúng đắn của CSDL sau các giao dịch tài chính.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Vận dụng tính nhất quán trong giao dịch.",
        requirements: [
          "Lan chuyển 500.000đ cho Minh. Sau sự cố mạng, tài khoản của Lan đã bị trừ 500.000đ nhưng tài khoản của Minh chưa được cộng tiền. Sự cố này vi phạm trực tiếp thuộc tính nào của CSDL?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Vi phạm TÍNH NHẤT QUÁN (Consistency).\n• Giải thích: Chuyển tiền là một giao dịch toàn vẹn gồm hai bước gắn liền: bên gửi bị trừ tiền và bên nhận được cộng tiền. CSDL chuẩn phải đảm bảo: hoặc cả hai bước cùng thành công, hoặc nếu có sự cố phải tự động hoàn tác để trả lại tiền cho Lan, tuyệt đối không để tiền biến mất khỏi hệ thống."
          }
        ]
      }
    },
    {
      id: "practice-b11-11",
      badge: "Bài 11 – 3 phút",
      title: "Bài 11 – Vé Xem Phim: Trùng Ghế A10 Do Bán Đồng Thời",
      duration: "3 phút",
      type: "exercise",
      description: "Phát hiện lỗi không nhất quán khi hai quầy bán vé cùng truy cập một tài nguyên.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Giải thích lỗi xung đột dữ liệu.",
        requirements: [
          "Rạp chiếu phim chỉ còn đúng 1 ghế A10. Hai nhân viên ở hai quầy bán vé bấm nút bán ghế đó cho hai khách hàng khác nhau trong cùng một giây. Hệ thống in ra 2 vé cùng ghi ghế A10. Vấn đề ở đây là gì?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: Lỗi KHÔNG NHẤT QUÁN DỮ LIỆU (Data Inconsistency).\n• Giải thích: Thực tế chỉ có 1 vị trí ghế A10 trong rạp, nhưng CSDL lại ghi nhận 2 người cùng sở hữu ghế đó. CSDL cần cơ chế khóa dữ liệu (Locking) khi có giao dịch đang diễn ra để tránh bán trùng tài nguyên."
          }
        ]
      }
    },
    {
      id: "practice-b11-12",
      badge: "Bài 12 – 2 phút",
      title: "Bài 12 – Phân Biệt: CSDL Hay Chỉ Là Thư Mục Chứa Nhiều Tệp Tin?",
      duration: "2 phút",
      type: "exercise",
      description: "Khắc sâu 4 mảnh ghép định nghĩa của CSDL để tránh hiểu sai.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Bản chất của Cơ sở dữ liệu.",
        requirements: [
          "Một thư mục trên máy tính chứa: anh_meo.jpg, nhac_pop.mp3, phim_hanh_dong.mp4, baitap_toan.docx. Có thể khẳng định thư mục này là một Cơ sở dữ liệu (CSDL) hay không? Vì sao?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "Đáp án: KHÔNG THỂ KHẲNG ĐỊNH ĐÂY LÀ CSDL.\n• Giải thích: CSDL không phải chỉ là 'một nơi chứa nhiều file'. CSDL bắt buộc phải là tập hợp dữ liệu có LIÊN QUAN VỚI NHAU, phục vụ một mục đích quản lý thống nhất và được TỔ CHỨC CÓ CẤU TRÚC rõ ràng. Các file ảnh, nhạc, phim, tài liệu trên rời rạc và không có quan hệ nội dung với nhau."
          }
        ]
      }
    },
    {
      id: "practice-b11-library",
      badge: "Vận Dụng Lớn – 6 phút",
      title: "Bài Vận Dụng Lớn: Xây Dựng Ý Tưởng Dữ Liệu Thư Viện (Mục 107–111)",
      duration: "6 phút",
      type: "exercise",
      description: "Đề xuất 3 nhóm dữ liệu thư viện (Sách, Bạn đọc, Mượn-Trả) và soi chiếu đầy đủ 6 thuộc tính CSDL.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Thiết kế ý tưởng CSDL thực tế chuẩn SGK.",
        requirements: [
          "Thư viện trường học cần tin học hóa việc quản lý mượn trả sách.\n1. Hãy đề xuất các thông tin cần quản lý cho 3 nhóm: (a) Sách, (b) Bạn đọc, (c) Mượn - Trả.\n2. Soi chiếu và áp dụng 6 thuộc tính CSDL vào thư viện này."
        ],
        qaList: [
          {
            q: "1. Đề xuất thông tin 3 nhóm dữ liệu:",
            a: "• Nhóm Sách: Mã sách, Tên sách, Tác giả, Nhà xuất bản, Năm xuất bản, Thể loại, Tình trạng (Có sẵn / Đang mượn).\n• Nhóm Bạn đọc: Mã bạn đọc, Họ tên, Lớp, Ngày sinh, Thông tin liên hệ.\n• Nhóm Mượn - Trả: Mã phiếu mượn, Mã bạn đọc, Mã sách, Ngày mượn, Hạn trả, Ngày trả thực tế, Tình trạng sách khi trả."
          },
          {
            q: "2. Soi chiếu 6 thuộc tính CSDL vào thư viện:",
            a: "• Cấu trúc: Mọi cuốn sách và bạn đọc đều được lưu theo khuôn bảng cố định.\n• Không dư thừa: Không chép lại họ tên, ngày sinh của bạn đọc vào mỗi dòng mượn sách nếu đã có bảng Bạn đọc riêng.\n• Độc lập: Phần mềm tra cứu sách trên web và phần mềm quét mã mượn sách tại quầy không bị phụ thuộc vào cách lưu file dưới đĩa.\n• Toàn vẹn: Ngày trả thực tế không được trước ngày mượn; Mã sách không được để trống.\n• Nhất quán: Một cuốn sách đang được bạn đọc mượn về nhà thì hệ thống không thể hiển thị là 'Đang có sẵn trên giá để mượn tiếp'.\n• Bảo mật & An toàn: Học sinh không tự ý đăng nhập xóa lịch sử mượn; Dữ liệu thư viện có sao lưu định kỳ phòng hỏng máy tính."
          }
        ]
      }
    },
    {
      id: "practice-b11-cases",
      badge: "Tổng Hợp – 5 phút",
      title: "Bốn Tình Huống Thực Tế Mở Rộng: Nhà Sách, Trà Sữa, Game, Mua Hàng Online",
      duration: "5 phút",
      type: "exercise",
      description: "Rèn luyện tư duy thực tế qua các bài toán đời thường: Quán trà sữa, Game online, Mua hàng.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 5 phút. Vận dụng kiến thức vào đa dạng lĩnh vực.",
        requirements: [
          "Phân tích nhanh 4 tình huống sau:\n1. Quán trà sữa: 'Thành tiền' có nhất thiết phải lưu riêng không?\n2. Game online: Số lượng vật phẩm = -3 vi phạm thuộc tính nào?\n3. Game online: Nạp xu mua vật phẩm (xu giảm thì vật phẩm tăng) thể hiện thuộc tính nào?\n4. Mua hàng online: Tồn kho bằng 0 nhưng hệ thống vẫn cho khách khác mua tiếp là lỗi gì?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "1. Quán trà sữa: Không nhất thiết lưu 'Thành tiền' vì Thành tiền = Số lượng × Đơn giá. Tính toán tức thời giúp tránh dư thừa dữ liệu.\n2. Game online: Số lượng vật phẩm = -3 vi phạm TÍNH TOÀN VẸN (số lượng vật phẩm không được âm).\n3. Game online: Mua đồ thì xu giảm và đồ tăng cùng lúc thể hiện TÍNH NHẤT QUÁN của giao dịch CSDL.\n4. Mua hàng online: Kho hết hàng nhưng web vẫn cho thanh toán là lỗi vi phạm TÍNH NHẤT QUÁN giữa tồn kho thực tế và đơn hàng."
          }
        ]
      }
    },
    {
      id: "practice-b11-quick12",
      badge: "Phản Xạ – 3 phút",
      title: "Bộ 12 Tình Huống Ngắn Kiểm Tra Phản Xạ 6 Thuộc Tính (Mục 148)",
      duration: "3 phút",
      type: "exercise",
      description: "Thử thách phản xạ nhanh: Đọc tình huống và gọi đúng tên thuộc tính CSDL chỉ trong 5 giây!",
      content: {
        objective: "Mức độ: Nhận biết & Thông hiểu nhanh. Khắc sâu 6 thuộc tính vàng.",
        requirements: [
          "Gắn 12 tình huống sau vào đúng thuộc tính tương ứng:\n1. Điểm = 11.\n2. Hai bảng ghi hai ngày sinh khác nhau cho cùng một người.\n3. Số điện thoại khách hàng bị chép ở 10 file Excel.\n4. Đổi cấu trúc file làm 6 chương trình phải sửa code.\n5. Người lạ tự ý xem dữ liệu tài khoản ngân hàng.\n6. Ổ cứng máy chủ hỏng, không có sao lưu.\n7. Mọi ngày sinh được lưu theo quy ước thống nhất DD/MM/YYYY.\n8. Thành tiền tính từ Số lượng × Đơn giá nên không lưu riêng.\n9. Một ghế máy bay bán cho hai người.\n10. Tồn kho = -20 trong khi không cho phép âm.\n11. Học sinh tự ý vào sửa điểm của mình.\n12. Máy tính hỏng nhưng phục hồi được nguyên vẹn từ bản sao lưu dự phòng."
        ],
        qaList: [
          {
            q: "Đáp án phản xạ chuẩn xác 12 tình huống:",
            a: "1. Điểm = 11 ➜ Tính toàn vẹn.\n2. Hai bảng ghi hai ngày sinh khác nhau ➜ Tính nhất quán.\n3. SĐT chép ở 10 file ➜ Dư thừa dữ liệu.\n4. Đổi file làm 6 chương trình phải sửa ➜ Thiếu tính độc lập dữ liệu.\n5. Người lạ xem tài khoản ➜ Vi phạm tính bảo mật.\n6. Ổ cứng hỏng không có backup ➜ Vi phạm tính an toàn dữ liệu.\n7. Ngày sinh lưu theo quy ước thống nhất ➜ Tính cấu trúc.\n8. Thành tiền tính từ SL × Giá ➜ Đảm bảo tính không dư thừa.\n9. Một ghế máy bay bán cho hai người ➜ Vi phạm tính nhất quán.\n10. Tồn kho = -20 ➜ Vi phạm tính toàn vẹn.\n11. Học sinh tự sửa điểm ➜ Vi phạm tính bảo mật.\n12. Phục hồi được từ backup ➜ Đảm bảo tốt tính an toàn dữ liệu."
          }
        ]
      }
    },
    {
      id: "practice-b11-essay",
      badge: "Tự Luận – 5 phút",
      title: "Năm Câu Hỏi Tự Luận Cốt Lõi Buổi Học (Mục 128–132)",
      duration: "5 phút",
      type: "exercise",
      description: "5 câu hỏi tự luận rèn luyện năng lực diễn đạt tư duy chuyên môn mạch lạc, chính xác.",
      content: {
        objective: "Đánh giá mức độ hiểu bản chất sâu sắc của học sinh.",
        requirements: [
          "Câu 1: Vì sao lưu dữ liệu trên máy tính không đơn thuần là chuyển sổ giấy thành file?\nCâu 2: Vì sao dư thừa dữ liệu dễ dẫn đến không nhất quán?\nCâu 3: Vì sao cần độc lập dữ liệu với phần mềm?\nCâu 4: Phân biệt sự khác nhau giữa Toàn vẹn và Nhất quán.\nCâu 5: Phân biệt sự khác nhau giữa Bảo mật và An toàn dữ liệu."
        ],
        qaList: [
          {
            q: "Đáp án và dàn ý trả lời 5 câu tự luận:",
            a: "• Câu 1: Nếu chỉ chuyển nguyên sổ giấy thành các file riêng lẻ thì dữ liệu vẫn bị lưu lặp lại nhiều nơi, dễ mâu thuẫn khi sửa, khó kiểm soát và phần mềm bị phụ thuộc chặt vào file.\n• Câu 2: Một thông tin lưu ở nhiều nơi thì khi thay đổi phải nhớ sửa ở tất cả các nơi. Chỉ cần quên một nơi là dữ liệu ở các nguồn sẽ mâu thuẫn nhau, dẫn tới mất tính nhất quán.\n• Câu 3: Để khi thay đổi cấu trúc hoặc vị trí lưu trữ dữ liệu bên dưới, ta không phải đập đi sửa lại hàng loạt mã nguồn của các phần mềm ứng dụng bên trên, giúp hệ thống dễ bảo trì và nâng cấp.\n• Câu 4: Toàn vẹn là yêu cầu bản thân từng giá trị dữ liệu phải HỢP LỆ theo quy tắc thực tế (ví dụ: điểm 0-10). Nhất quán là yêu cầu các dữ liệu liên quan phải ĂN KHỚP, không mâu thuẫn nhau (ví dụ: điểm toán ở 2 bảng phải giống nhau).\n• Câu 5: Bảo mật là ngăn chặn truy cập hoặc chỉnh sửa trái phép (ĐÚNG NGƯỜI ĐÚNG QUYỀN). An toàn là bảo vệ dữ liệu không bị mất mát khi có sự cố và CÓ KHẢ NĂNG PHỤC HỒI từ bản sao lưu dự phòng."
          }
        ]
      }
    }
  ],

  examTypes: [
    {
      id: "exam-type-1",
      title: "Dạng 1: Nhận diện và định nghĩa Cơ sở dữ liệu (4 mảnh ghép)",
      importance: "Rất hay gặp (Kiểm tra 15p & Học kỳ)",
      technique: "Ghi nhớ đủ 4 mảnh ghép: 1. Tập hợp dữ liệu; 2. Có liên quan với nhau; 3. Lưu có tổ chức trên máy tính; 4. Phục vụ khai thác thông tin. Chú ý bẫy: Thư mục chứa nhiều file không liên quan KHÔNG phải là CSDL.",
      examples: [
        "Câu hỏi: Trong các tập hợp sau, tập hợp nào tạo thành một CSDL? A. Thư mục tải về chứa file word, nhạc mp3, video youtube. B. Danh sách học sinh, điểm số các môn và thông tin lớp học của trường THPT. C. Một file ảnh chụp bảng điểm. D. Một máy chủ cài Windows."
      ]
    },
    {
      id: "exam-type-2",
      title: "Dạng 2: Phân biệt Dư thừa dữ liệu và Không nhất quán",
      importance: "Trọng tâm bài học",
      technique: "Dư thừa là NGUYÊN NHÂN (lưu lặp lại nhiều nơi không cần thiết hoặc lưu dữ liệu suy diễn tính toán được). Không nhất quán là HẬU QUẢ (dữ liệu mâu thuẫn, lệch nhau sau khi cập nhật). Lưu ý: Nhiều người cùng học một lớp KHÔNG phải là dư thừa.",
      examples: [
        "Tình huống: SĐT của khách hàng lưu ở cả file Khách hàng và Đơn hàng. Khi khách đổi số, nhân viên chỉ sửa file Đơn hàng ➜ SĐT ở 2 file khác nhau. Hiện tượng này thể hiện: Dư thừa dữ liệu dẫn đến mất tính nhất quán."
      ]
    },
    {
      id: "exam-type-3",
      title: "Dạng 3: Phân biệt Tính Toàn vẹn vs Tính Nhất quán (Cực kỳ hay thi)",
      importance: "Hay nhầm nhất toàn bài",
      technique: "Mẹo: MỘT giá trị có hợp lệ không ➜ TOÀN VẸN (Điểm = 15; Tuổi = -3; Ngày trả < Ngày mượn). NHIỀU dữ liệu liên quan có khớp nhau không ➜ NHẤT QUÁN (Bảng A ghi 8, Bảng B ghi 9; Một ghế bán 2 người; Trừ tiền người gửi chưa cộng người nhận).",
      examples: [
        "Câu hỏi: Cho biết 'Điểm thi = 12' và 'Hồ sơ ghi An sinh 2008, Bảng điểm ghi sinh 2009' vi phạm những thuộc tính nào? ➜ Điểm 12 vi phạm Toàn vẹn; Hai năm sinh khác nhau vi phạm Nhất quán."
      ]
    },
    {
      id: "exam-type-4",
      title: "Dạng 4: Phân biệt Tính Bảo mật vs Tính An toàn dữ liệu",
      importance: "Phổ biến",
      technique: "Bảo mật = ĐÚNG NGƯỜI (ngăn chặn kẻ xấu, người không có thẩm quyền xem/sửa). An toàn = KHÔNG MẤT & CÓ THỂ PHỤC HỒI (bảo vệ khi cháy máy, hỏng ổ cứng, có bản sao lưu Backup).",
      examples: [
        "Tình huống: Hệ thống cho phép học sinh vào sửa điểm ➜ Vi phạm Bảo mật. Máy tính bị sét đánh mất sạch dữ liệu không khôi phục được ➜ Vi phạm An toàn dữ liệu."
      ]
    },
    {
      id: "exam-type-5",
      title: "Dạng 5: Bài toán tình huống áp dụng 6 thuộc tính CSDL",
      importance: "Dành cho điểm 9 - 10",
      technique: "Đọc kỹ đề bài mô tả một hệ thống thực tế (Thư viện, Siêu thị, Ngân hàng). Tách từng chi tiết trong đề và ánh xạ vào đúng 6 thuộc tính: Cấu trúc, Không dư thừa, Độc lập dữ liệu, Toàn vẹn, Nhất quán, Bảo mật & An toàn.",
      examples: [
        "Đề bài: Phân tích các vấn đề của một cửa hàng tạp hóa quản lý bằng sổ ghi tay và các file Excel rời rạc."
      ]
    }
  ],

  homework: [
    {
      title: "Bài tập 1: Củng Cố Lý Thuyết & Giải Thích Chi Tiết 8 Câu Mini Test",
      tag: "Trắc nghiệm Bắt buộc",
      problem: "Làm lại toàn bộ 8 câu hỏi trắc nghiệm của Bài 11:",
      tasks: [
        "Nhiệm vụ 1: Ghi lại đáp án đúng của từng câu hỏi từ 1 đến 8.",
        "Nhiệm vụ 2: Viết câu giải thích ngắn gọn (1–2 dòng) chỉ rõ vì sao chọn đáp án đó và vì sao các đáp án còn lại chưa chính xác."
      ],
      requirements: "Trình bày rõ ràng vào vở bài tập hoặc file tài liệu học tập.",
      hint: "Bám sát định nghĩa CSDL, 6 thuộc tính vàng và bảng đối chiếu Chuyên môn ↔ Đời thường.",
      solution: `Checklist đánh giá bài tập 1 (10/10 Điểm):
✓ Câu 1 (B): CSDL là tập hợp dữ liệu có liên quan, lưu có tổ chức trên máy tính.
✓ Câu 2 (B): Sao chép lưu lặp ở 4 nơi là Dư thừa dữ liệu.
✓ Câu 3 (B): Hai nơi ghi 2 ngày sinh khác nhau là vi phạm Tính nhất quán.
✓ Câu 4 (B): Điểm = 15 vượt quá quy định 0-10 là vi phạm Tính toàn vẹn.
✓ Câu 5 (A): Đổi cấu trúc lưu làm 10 app sập là thiếu Tính độc lập dữ liệu.
✓ Câu 6 (B): Người không có quyền xem được dữ liệu là vi phạm Tính bảo mật.
✓ Câu 7 (A): Hỏng ổ cứng mất sạch do không có backup là vi phạm Tính an toàn.
✓ Câu 8 (B): Trừ tiền gửi chưa cộng nhận sau sự cố là vi phạm Tính nhất quán.`
    },
    {
      title: "Bài tập 2: Phân Tích Thực Tế – Ý Tưởng CSDL Quán Cà Phê",
      tag: "Tình huống Thực tế",
      problem: "Một quán cà phê có menu gồm 20 món nước, 5 nhân viên phục vụ và hàng trăm khách hàng mỗi ngày:",
      tasks: [
        "Nhiệm vụ 1: Liệt kê các thông tin cần quản lý trong CSDL quán cà phê (phân theo các nhóm đối tượng: Món nước, Nhân viên, Đơn hàng).",
        "Nhiệm vụ 2: Cho 1 ví dụ cụ thể về vi phạm Tính toàn vẹn và 1 ví dụ cụ thể về vi phạm Tính nhất quán có thể xảy ra tại quán."
      ],
      requirements: "Nêu ví dụ thực tế rõ ràng, có số liệu minh họa.",
      hint: "Liên hệ bài toán quản lý cửa hàng và trà sữa trong bài học.",
      solution: `Gợi ý lời giải bài tập 2:
1. Các nhóm thông tin cần quản lý:
• Nhóm Món nước: Mã món, Tên món, Đơn giá, Thể loại (Cà phê, Trà, Nước ép), Tình trạng (Còn / Hết).
• Nhóm Nhân viên: Mã NV, Họ tên, Ca làm việc, Số điện thoại.
• Nhóm Đơn hàng: Mã đơn, Thời gian, Mã NV lập đơn, Mã món, Số lượng.
2. Ví dụ vi phạm:
• Vi phạm Toàn vẹn: Nhập Số lượng ly nước = -3 hoặc Đơn giá = 0đ (không hợp lệ theo quy tắc nghiệp vụ).
• Vi phạm Nhất quán: Trên phần mềm thu ngân báo món 'Trà đào' đã hết hàng nhưng máy in tại quầy pha chế vẫn nhận lệnh làm 2 ly trà đào.`
    },
    {
      title: "Bài tập 3: Câu Hỏi Chuẩn Bị Bài 12 – Hệ Quản Trị CSDL",
      tag: "Chuẩn bị Bài mới",
      problem: "Sau khi dữ liệu đã được tổ chức thành CSDL khoa học, làm sao con người và phần mềm ứng dụng có thể tạo lập, nhập dữ liệu, tìm kiếm và bảo vệ CSDL đó?",
      tasks: [
        "Nhiệm vụ: Tìm hiểu trước khái niệm Hệ quản trị cơ sở dữ liệu (DBMS) và kể tên 3 phần mềm DBMS phổ biến trên thế giới."
      ],
      requirements: "Ghi ngắn gọn định nghĩa và tên các phần mềm.",
      hint: "Xem mục tóm tắt cuối bài và chuẩn bị cho Bài 12.",
      solution: `Gợi ý lời giải bài tập 3:
• Cần một lớp phần mềm trung gian chuyên dụng gọi là Hệ quản trị cơ sở dữ liệu (DBMS - Database Management System).
• DBMS cung cấp môi trường để tạo bảng, thêm/sửa/xóa, tìm kiếm dữ liệu và phân quyền bảo mật.
• Ba phần mềm DBMS phổ biến: MySQL, PostgreSQL, Microsoft Access (hoặc Microsoft SQL Server, Oracle, SQLite).`
    }
  ],

  pedagogyTips: {
    questionGuide: [
      { bad: "Em hãy đọc thuộc lòng định nghĩa tính toàn vẹn.", good: "Nếu trong danh sách điểm có bạn được 15 điểm thì dữ liệu đó có vấn đề gì? Được gọi là thuộc tính nào?" },
      { bad: "Em hãy nêu định nghĩa tính nhất quán.", good: "Bảng điểm môn Toán ghi 9, bảng tổng hợp ghi 8 thì có vấn đề gì? Hai số này có ăn khớp không?" },
      { bad: "Em hãy trình bày tính độc lập dữ liệu.", good: "Nếu đổi một dấu phẩy trong file mà phải sửa lại code của 5 phần mềm thì hệ thống đó đang bị phụ thuộc vào cái gì?" }
    ],
    rulesToAvoid: [
      "Không giải thích 'CSDL là file Excel'. Excel chỉ là bảng tính cá nhân, không phải hệ CSDL chuyên nghiệp.",
      "Không giải thích 'Không dư thừa là cấm trùng giá trị'. Trùng giá trị khách quan (nhiều người cùng học lớp 11A) là hoàn toàn bình thường.",
      "Không gộp Toàn vẹn và Nhất quán làm một.",
      "Không thu hẹp Bảo mật chỉ là đặt mật khẩu, không thu hẹp An toàn chỉ là chống hacker.",
      "TUYỆT ĐỐI KHÔNG đưa vào Bài 11: SQL, câu lệnh SELECT/WHERE, khóa chính, khóa ngoại, JOIN, chuẩn hóa 1NF/2NF/3NF (để dành cho các bài sau)."
    ]
  }
}
