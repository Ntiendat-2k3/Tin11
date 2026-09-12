/**
 * Dữ liệu bài giảng Bài 13: Cơ sở dữ liệu quan hệ
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: khoảng 100 phút)
 * Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu
 * Định hướng: Kiến thức cốt lõi chung (Khoa học máy tính CS & Tin học ứng dụng ICT)
 * Biên soạn bám sát 60 mục giáo trình chi tiết từ tài liệu chuẩn
 */

export const b13Content = {
  warmUp: {
    question: "Có nên gom tất cả thông tin: Học sinh, Lớp học, Môn học, Giáo viên và Điểm số vào MỘT BẢNG KHỔNG LỒ DUY NHẤT để tiện theo dõi không?",
    description: "Tình huống thực tế: Nếu nhét tất cả vào một bảng (Mã HS, Họ tên, Lớp, Mã môn, Tên môn, Giáo viên, Điểm), thông tin 'HS01 – Nguyễn Văn An – 11A1' và 'TOAN – Toán – Cô Lan' sẽ bị chép đi chép lại hàng trăm, hàng nghìn lần! Vừa lãng phí bộ nhớ lưu trữ, vừa dễ gõ sai lệch, khi một giáo viên đổi tên hay chuyển trường thì phải đi sửa hàng nghìn dòng. Giải pháp ưu việt của ngành Tin học: Chia nhỏ dữ liệu thành các BẢNG ĐỘC LẬP có ý nghĩa rõ ràng (Bảng Học sinh, Bảng Môn học, Bảng Điểm) rồi dùng các CỘT MÃ ĐẶC BIỆT để liên kết chúng lại với nhau — đó chính là bản chất của CƠ SỞ DỮ LIỆU QUAN HỆ!",
    roles: [
      { role: "Bảng Học Sinh (HOCSINH)", action: "Chỉ lưu hồ sơ của học sinh: MaHS, HoTen, NgaySinh, Lop. Mỗi bạn đúng 1 dòng duy nhất." },
      { role: "Bảng Môn Học (MONHOC)", action: "Chỉ lưu danh mục các môn: MaMon, TenMon, SoTiet. Không ghi tên học sinh." },
      { role: "Bảng Điểm Số (DIEM)", action: "Chỉ lưu kết quả: MaHS, MaMon, Diem. Nhờ MaHS và MaMon để biết điểm của ai, môn gì mà không cần chép lại họ tên!" },
      { role: "Cơ chế Liên kết (Relationship)", action: "Dùng các mã chung (Khóa chính & Khóa ngoài) để ghép nối dữ liệu giữa các bảng khi cần tra cứu." }
    ]
  },

  sections: [
    {
      id: "sec-1",
      title: "1–11. Mô Hình Dữ Liệu Quan Hệ & Cơ Sở Dữ Liệu Quan Hệ",
      subsections: [
        {
          heading: "1. Mạch nối tiếp tự nhiên từ Bài 11 và Bài 12 sang Bài 13",
          points: [
            "Bài 11 đã giải quyết: CSDL là tập hợp dữ liệu có liên quan, được lưu trữ có tổ chức trên máy tính.",
            "Bài 12 đã giải quyết: Hệ QTCSDL (DBMS) là phần mềm giúp tạo lập, cập nhật, truy xuất và bảo vệ CSDL.",
            "Bài 13 đặt câu hỏi cốt lõi: 'Bên trong CSDL, dữ liệu thực tế được tổ chức theo mô hình cấu trúc nào?'",
            "Câu trả lời chuẩn mực của thế giới dữ liệu: MÔ HÌNH DỮ LIỆU QUAN HỆ (Relational Data Model) — dữ liệu được tổ chức thành các BẢNG và giữa các bảng có QUAN HỆ với nhau."
          ]
        },
        {
          heading: "2. Khởi động: Vì sao không nhét mọi thứ vào một bảng khổng lồ?",
          text: "Giả sử một trường học quản lý: Học sinh, Lớp, Môn học, Giáo viên và Điểm số trong một bảng duy nhất:",
          points: [
            "Bảng gồm các cột: | MaHS | HoTen | Lop | MaMon | TenMon | GiaoVien | Diem |",
            "Dòng 1: HS01 | An | 11A1 | TOAN | Toán | Cô Lan | 8",
            "Dòng 2: HS01 | An | 11A1 | TIN | Tin học | Thầy Minh | 9",
            "Dòng 3: HS02 | Bình | 11A1 | TOAN | Toán | Cô Lan | 7",
            "Hậu quả nhìn thấy ngay: Dữ liệu 'HS01 – An – 11A1' và 'TOAN – Toán – Cô Lan' bị lặp lại vô số lần.",
            "Dẫn tới 3 thảm họa quản lý: Lãng phí dung lượng lưu trữ; Dễ mâu thuẫn mất nhất quán (dòng ghi Cô Lan, dòng ghi Cô Hương); Rất khó cập nhật hoặc xóa dữ liệu."
          ]
        },
        {
          heading: "3. Khái niệm Mô hình dữ liệu quan hệ & CSDL quan hệ",
          points: [
            "Cách nói đời thường: 'Chia dữ liệu thành nhiều bảng có ý nghĩa rõ ràng, rồi dùng các mã định danh để nối chúng lại khi cần thông tin.'",
            "Định nghĩa chuyên môn: Mô hình dữ liệu quan hệ tổ chức dữ liệu thành các BẢNG dữ liệu của các đối tượng có thuộc tính giống nhau; các bảng có thể có quan hệ với nhau.",
            "Cơ sở dữ liệu quan hệ (Relational Database - RDBMS): Là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau.",
            "Công thức cốt lõi: CSDL QUAN HỆ = BẢNG + QUAN HỆ GIỮA CÁC BẢNG."
          ]
        },
        {
          heading: "4. CSDL Âm nhạc chuẩn SGK – Ví dụ kinh điển 4 bảng",
          points: [
            "Bảng NHACSI: Gồm Aid (Mã nhạc sĩ), TenNS (Tên nhạc sĩ). Ví dụ: (1, Đỗ Nhuận), (2, Văn Cao), (3, Hoàng Việt), (4, Nguyễn Tài Tuệ).",
            "Bảng CASI: Gồm Sid (Mã ca sĩ), TenCS (Tên ca sĩ). Ví dụ: (TK, Trần Khánh), (LD, Lê Dung), (TN, Tân Nhân), (QH, Quốc Hương).",
            "Bảng BANNHAC: Gồm Mid (Mã bản nhạc), Aid (Mã nhạc sĩ sáng tác), TenBN (Tên bản nhạc). Ví dụ: (0001, 1, Du kích sông Thao), (0002, 2, Trường ca Sông Lô), (0003, 3, Tình ca), (0004, 4, Xa khơi).",
            "Bảng BANTHUAM: Gồm Mid (Mã bản nhạc), Sid (Mã ca sĩ thể hiện). Ví dụ: (0001, TK), (0001, LD), (0002, TK), (0003, TN), (0004, QH).",
            "Cách đọc dữ liệu liên kết: Ai sáng tác bài 'Trường ca Sông Lô'? ➜ Tra BANNHAC: 'Trường ca Sông Lô' có Aid = 2 ➜ Sang NHACSI: Aid = 2 là Văn Cao ➜ Kết luận: Văn Cao sáng tác!",
            "Tại sao BANTHUAM chỉ cần mã (0004 | QH)? ➜ 0004 tra ra 'Xa khơi', QH tra ra 'Quốc Hương'. Không cần lưu lặp lại chữ 'Xa khơi' hay 'Quốc Hương' ở khắp nơi!"
          ]
        }
      ],
      calloutBox: {
        type: "tip",
        title: "Tinh thần sư phạm cốt lõi của Bài 13",
        text: "Bài 13 là bài xây nền tư duy quan hệ cho ngôn ngữ SQL ở Bài 14. Học sinh không chỉ học thuộc lòng các định nghĩa: bảng, hàng, cột, bản ghi, trường, khóa, khóa chính, khóa ngoài. Mục tiêu quan trọng hơn là: Khi nhìn một bài toán quản lý thực tế, học sinh trả lời được: 'Nên chia dữ liệu thành những bảng nào? Mỗi hàng đại diện cho ai/cái gì? Cột nào nhận diện duy nhất một đối tượng và các bảng nối với nhau bằng cách nào?'"
      },
      comparisonTable: {
        headers: ["Tiêu chí so sánh", "Tổ chức nhét hết vào 1 Bảng khổng lồ", "Tổ chức theo Mô hình CSDL Quan hệ"],
        rows: [
          ["Cấu trúc lưu trữ", "Gom tất cả cột học sinh, lớp, môn, điểm vào 1 bảng duy nhất", "Tách thành các bảng riêng biệt: HOCSINH, MONHOC, DIEM"],
          ["Trùng lặp dữ liệu", "Rất nghiêm trọng: Tên học sinh, lớp, tên giáo viên lặp hàng nghìn lần", "Hạn chế tối đa dư thừa: Tên học sinh, tên môn chỉ lưu đúng 1 lần"],
          ["Tính nhất quán", "Rất dễ mâu thuẫn: Cùng 1 học sinh nhưng dòng này tên An, dòng kia gõ nhầm Anh", "Đảm bảo tính nhất quán: Sửa thông tin học sinh ở bảng HOCSINH là xong"],
          ["Cập nhật & Xóa", "Rất nguy hiểm: Xóa điểm cuối cùng của học sinh có thể xóa mất luôn hồ sơ học sinh", "An toàn tuyệt đối: Xóa điểm ở bảng DIEM không làm mất thông tin học sinh ở HOCSINH"],
          ["Cách liên kết", "Không cần liên kết vì đã dồn hết vào 1 bảng", "Dùng các trường chung (MaHS, MaMon) để nối dữ liệu khi cần tra cứu"]
        ]
      }
    },

    {
      id: "sec-2",
      title: "12–20. Bảng – Hàng – Cột – Bản Ghi – Trường & Kiểu Dữ Liệu",
      subsections: [
        {
          heading: "1. Bảng – Khung chứa dữ liệu cơ bản",
          points: [
            "Trong CSDL quan hệ, BẢNG (Table / Relation) là cấu trúc chính để lưu trữ dữ liệu về một tập hợp các đối tượng cùng loại (ví dụ: bảng HOCSINH lưu học sinh; bảng SANPHAM lưu hàng hóa).",
            "Một bảng gồm hai chiều trực quan: Các HÀNG ngang và các CỘT dọc."
          ]
        },
        {
          heading: "2. Hàng và Bản ghi (Record / Row / Tuple)",
          text: "Mỗi hàng trong bảng đại diện cho một thực thể cụ thể:",
          points: [
            "Cách nói đời thường: 'Mỗi hàng là một bộ hồ sơ trọn vẹn của một đối tượng cụ thể.'",
            "Định nghĩa chuyên môn SGK: BẢN GHI (Record / Tuple) là một hàng của bảng, chứa toàn bộ thông tin về một đối tượng cụ thể được quản lý trong bảng đó.",
            "Ví dụ cụ thể: Cặp dữ liệu (2, 'Văn Cao') là một bản ghi trọn vẹn của nhạc sĩ Văn Cao trong bảng NHACSI; Bản ghi ('HS01', 'Nguyễn Văn An', '11A1') là hồ sơ của bạn An trong bảng HOCSINH."
          ]
        },
        {
          heading: "3. Cột, Trường và Thuộc tính (Field / Column / Attribute)",
          text: "Mỗi cột trong bảng đại diện cho một đặc điểm dữ liệu cần thu thập:",
          points: [
            "Cách nói đời thường: 'Mỗi cột là một loại thông tin mà ta muốn ghi nhận cho mọi đối tượng trong bảng.'",
            "Định nghĩa chuyên môn SGK: TRƯỜNG (Field / Attribute) là một cột của bảng, thể hiện một thuộc tính nhất định của đối tượng cần quản lý.",
            "Ví dụ cụ thể: Bảng NHACSI có 2 trường: Aid (Mã nhạc sĩ) và TenNS (Tên nhạc sĩ). Bảng HOCSINH có các trường: MaHS, HoTen, NgaySinh, Lop."
          ]
        },
        {
          heading: "4. Kiểu dữ liệu của trường (Data Types)",
          points: [
            "Định nghĩa: Mỗi trường đều có một KIỂU DỮ LIỆU quy định loại giá trị mà trường đó được phép lưu trữ.",
            "Các kiểu dữ liệu phổ biến ở lớp 11: Số nguyên (Integer / INT), Xâu kí tự (Văn bản / Text / VARCHAR), Số thực (Real / Float), Ngày tháng (Date), Logic Đúng/Sai (Boolean).",
            "Ví dụ: Trường NgaySinh phải mang kiểu Ngày; Trường Diem mang kiểu Số thực; Trường HoTen mang kiểu Xâu kí tự.",
            "Hai lý do sống còn vì sao bắt buộc phải quy định kiểu dữ liệu cho từng trường:\n1. Hạn chế lãng phí dung lượng lưu trữ: Hệ thống cấp phát đúng số byte cần thiết cho từng loại giá trị.\n2. Kiểm soát tính đúng đắn logic của dữ liệu nhập: Ngăn chặn người dùng nhập chữ 'rất giỏi' vào ô Điểm số, hoặc nhập câu văn vào ô Ngày sinh."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Thuật ngữ chuyên môn CSDL", "Thuật ngữ tiếng Anh tương đương", "Cách nói đời thường gần gũi", "Ví dụ trong bảng HOCSINH"],
        rows: [
          ["Bảng (Quan hệ)", "Table / Relation", "Chiếc bảng danh sách dữ liệu", "Bảng HOCSINH (chứa toàn bộ học sinh)"],
          ["Bản ghi (Hàng / Bộ)", "Record / Row / Tuple", "Một dòng hồ sơ của 1 đối tượng cụ thể", "Dòng ('HS01', 'An', '11A1')"],
          ["Trường (Cột / Thuộc tính)", "Field / Column / Attribute", "Một cột thông tin chung cho mọi đối tượng", "Cột HoTen, Cột NgaySinh, Cột Diem"],
          ["Kiểu dữ liệu", "Data Type", "Quy định loại giá trị được gõ vào ô", "HoTen: Kiểu chữ; Diem: Kiểu số; NgaySinh: Kiểu ngày"]
        ]
      }
    },

    {
      id: "sec-3",
      title: "21–30. Khóa (Key) & Khóa Chính (Primary Key)",
      subsections: [
        {
          heading: "1. Vấn đề đặt ra: Vì sao cần Khóa?",
          text: "Giả sử một bảng chỉ có 2 cột: | HoTen | Lop |. Trong trường có 2 bạn cùng tên 'Nguyễn Văn An' học lớp 11A1:",
          points: [
            "Nếu chỉ nhìn vào cột Họ tên, ta có biết chắc chắn dòng đó là bạn An nào không? ➜ KHÔNG THỂ!",
            "Nếu giáo viên muốn nhập điểm 10 cho một bạn An, hệ thống sẽ không biết ghi điểm cho ai.",
            "Do đó, mỗi bảng bắt buộc phải có một giá trị giúp XÁC ĐỊNH DUY NHẤT MỖI BẢN GHI, không bao giờ xảy ra nhầm lẫn."
          ]
        },
        {
          heading: "2. Khái niệm Khóa (Key) – Khóa một trường vs Khóa ghép",
          points: [
            "Cách nói đời thường: 'Khóa là dấu hiệu nhận diện đặc biệt để nhìn vào là biết chính xác 100% bản ghi nào.'",
            "Định nghĩa chuyên môn SGK: KHÓA là một trường hoặc một nhóm trường có giá trị đủ để xác định duy nhất một bản ghi trong bảng.",
            "KHÓA MỘT TRƯỜNG (Khóa đơn): Chỉ cần 1 trường duy nhất đã đủ phân biệt từng dòng. Ví dụ: MaHS trong bảng HOCSINH; MaSP trong bảng SANPHAM; SoTheHS trong bảng độc giả.",
            "KHÓA NHIỀU TRƯỜNG (Khóa ghép / Composite Key): Khi không có một trường đơn lẻ nào đủ sức phân biệt từng dòng, ta phải ghép 2 hoặc nhiều trường lại mới tạo thành sự duy nhất.",
            "Ví dụ kinh điển về Khóa ghép trong bảng DIEM:\n| MaHS | MaMon | Nam | HocKi | LoaiDiem | Diem |\n• Một học sinh (MaHS) thi nhiều môn (MaMon).\n• Một môn có nhiều học sinh thi.\n• Trong một năm, một học sinh thi môn đó nhiều lần (Giữa kì, Cuối kì).\n➜ Khóa phải ghép từ 5 trường: (MaHS + MaMon + Nam + HocKi + LoaiDiem) mới xác định duy nhất đúng một dòng điểm số!"
          ]
        },
        {
          heading: "3. Khái niệm Khóa chính (Primary Key - PK)",
          points: [
            "Một bảng có thể có nhiều cách nhận diện duy nhất (gọi là các khóa ứng viên). Ví dụ: Trong hồ sơ công dân, cả 'Số CCCD' và 'Mã số bảo hiểm' đều duy nhất.",
            "Người thiết kế CSDL chọn ra một khóa tiện lợi và chính thức nhất để định danh cho bảng, gọi là KHÓA CHÍNH (PRIMARY KEY).",
            "Định nghĩa chuyên môn: Khóa chính là khóa được chọn để nhận diện chính thức từng bản ghi trong bảng.",
            "Hai quy tắc sắt đá bắt buộc của Khóa chính:\n1. TÍNH DUY NHẤT: Giá trị khóa chính tuyệt đối KHÔNG ĐƯỢC TRÙNG LẶP giữa bất kỳ hai hàng nào.\n2. KHÔNG ĐƯỢC RỖNG (NOT NULL): Khóa chính bắt buộc phải có giá trị cụ thể, không được để trống.",
            "Vì sao thường ưu tiên chọn khóa có ít trường? ➜ Càng ít trường thì cấu trúc càng gọn nhẹ, máy tính so sánh tìm kiếm càng nhanh và các bảng khác tham chiếu sang càng đơn giản!"
          ]
        },
        {
          heading: "4. Khóa chính trong CSDL Âm nhạc SGK",
          points: [
            "Bảng NHACSI: Khóa chính là Aid (Mỗi nhạc sĩ có 1 mã số duy nhất: 1, 2, 3, 4).",
            "Bảng CASI: Khóa chính là Sid (Mỗi ca sĩ có mã chuỗi duy nhất: TK, LD, TN, QH).",
            "Bảng BANNHAC: Khóa chính là Mid (Mỗi bản nhạc có mã 4 ký tự duy nhất: 0001, 0002, 0003, 0004).",
            "Bảng BANTHUAM: Khóa chính là CẶP GHÉP (Mid, Sid).\n• Vì một bản nhạc Mid có thể được nhiều ca sĩ hát ➜ Mid bị lặp.\n• Một ca sĩ Sid có thể hát nhiều bản nhạc ➜ Sid bị lặp.\n• Cặp ghép (Mid, Sid) mới đại diện cho đúng MỘT lần thu âm cụ thể của ca sĩ đó cho bản nhạc đó!"
          ]
        }
      ],
      qaList: {
        title: "Hai Câu Hỏi Gài Về Khóa Chính Trong Đề Thi",
        questions: [
          {
            badge: "Bẫy 1 – Họ tên",
            q: "Trường 'Họ và tên' có thể dùng làm Khóa chính cho bảng HOCSINH được không?",
            a: "TUYỆT ĐỐI KHÔNG! Vì trong thực tế có rất nhiều người trùng cả họ lẫn tên (ví dụ: trường có thể có 5 bạn cùng tên Nguyễn Văn An). Khóa chính bắt buộc phải duy nhất tuyệt đối."
          },
          {
            badge: "Bẫy 2 – Lớp học",
            q: "Trường 'Lớp' (Lop) có thể làm Khóa chính cho bảng HOCSINH được không?",
            a: "TUYỆT ĐỐI KHÔNG! Vì một lớp học có từ 30 đến 45 học sinh cùng chung một tên lớp (11A1). Giá trị '11A1' lặp lại 40 lần nên không thể xác định duy nhất một học sinh cụ thể."
          }
        ]
      }
    },

    {
      id: "sec-4",
      title: "31–41. Khóa Ngoài (Foreign Key) & Liên Kết Dữ Liệu Theo Khóa",
      subsections: [
        {
          heading: "1. Vấn đề đặt ra: Làm sao biết bản nhạc do ai sáng tác?",
          points: [
            "Trong bảng BANNHAC, dòng '0002 | 2 | Trường ca Sông Lô' có cột Aid mang giá trị 2.",
            "Số 2 này không phải số ngẫu nhiên. Nó chính là Mã nhạc sĩ Aid được mượn từ bảng NHACSI sang!",
            "Nhờ mang số 2 này sang, ta đối chiếu sang bảng NHACSI thấy Aid = 2 là Văn Cao ➜ Ta biết ngay bài hát này do nhạc sĩ Văn Cao sáng tác.",
            "Cột Aid nằm trong bảng BANNHAC đó được gọi là KHÓA NGOÀI (FOREIGN KEY)!"
          ]
        },
        {
          heading: "2. Khái niệm Khóa ngoài (Foreign Key - FK)",
          points: [
            "Cách nói đời thường: 'Khóa ngoài là chiếc mã mượn từ bảng khác mang sang bảng này, để cho biết dòng này có liên quan tới ai hoặc cái gì bên kia.'",
            "Định nghĩa chuyên môn SGK: KHÓA NGOÀI (Foreign Key) là một trường hoặc nhóm trường của bảng này tham chiếu tới khóa chính của một bảng khác, giúp thiết lập mối liên kết giữa hai bảng.",
            "Ví dụ liên kết chuẩn:\n• NHACSI.Aid ➜ Là Khóa chính (PK) của bảng NHACSI.\n• BANNHAC.Aid ➜ Là Khóa ngoài (FK) của bảng BANNHAC, tham chiếu tới NHACSI.Aid."
          ]
        },
        {
          heading: "3. Hai đặc điểm sống còn của Khóa ngoài cần khắc cốt ghi tâm",
          points: [
            "ĐẶC ĐIỂM 1: KHÓA NGOÀI CÓ THỂ LẶP LẠI GIÁ TRỊ!\n• Trong bảng BANNHAC, Aid = 2 có thể xuất hiện ở dòng bài 'Trường ca Sông Lô' và xuất hiện tiếp ở dòng bài 'Tiến quân ca'.\n• Điều này hoàn toàn hợp lý vì MỘT NHẠC SĨ CÓ THỂ SÁNG TÁC NHIỀU BẢN NHẠC!\n• Khóa ngoài KHÔNG đòi hỏi phải duy nhất như khóa chính.",
            "ĐẶC ĐIỂM 2: MỘT BẢNG CÓ THỂ CÓ NHIỀU KHÓA NGOÀI!\n• Bảng BANTHUAM có tới 2 khóa ngoài:\n  + Mid: Khóa ngoài tham chiếu tới BANNHAC.Mid (cho biết thu âm bài hát nào).\n  + Sid: Khóa ngoài tham chiếu tới CASI.Sid (cho biết ca sĩ nào hát)."
          ]
        },
        {
          heading: "4. Cơ chế Liên kết dữ liệu theo khóa & Ràng buộc toàn vẹn tham chiếu",
          points: [
            "LIÊN KẾT DỮ LIỆU THEO KHÓA (Data Linkage): Việc ghép nối các dòng dữ liệu từ nhiều bảng dựa trên sự trùng khớp giá trị giữa Khóa ngoài và Khóa chính được gọi là liên kết dữ liệu theo khóa.",
            "RÀNG BUỘC TOÀN VẸN THAM CHIẾU (Referential Integrity): Giá trị của khóa ngoài bắt buộc phải tồn tại trong cột khóa chính của bảng gốc (hoặc để trống nếu cho phép).",
            "Cảnh báo vi phạm tham chiếu: Nếu trong bảng HOCSINH có học sinh ghi MaLop = 'L99', nhưng bảng LOP chỉ có L01 và L02 mà không có L99 ➜ Dữ liệu bị lỗi 'mồ côi', Hệ QTCSDL sẽ ngăn chặn không cho nhập hoặc báo lỗi!"
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Khẩu quyết phân biệt Khóa chính vs Khóa ngoài",
        text: "PRIMARY KEY (Khóa chính) trả lời câu hỏi: 'TÔI LÀ AI?' (Định danh duy nhất bản thân dòng này, tuyệt đối cấm trùng).\nFOREIGN KEY (Khóa ngoài) trả lời câu hỏi: 'TÔI LIÊN QUAN ĐẾN AI?' (Dẫn đường sang bảng khác, được phép lặp lại)."
      },
      comparisonTable: {
        headers: ["Tiêu chí phân biệt", "Khóa chính (Primary Key - PK)", "Khóa ngoài (Foreign Key - FK)"],
        rows: [
          ["Ý nghĩa bản chất", "Nhận diện duy nhất mỗi bản ghi trong CHÍNH BẢNG ĐÓ", "Tạo mối quan hệ liên kết THAM CHIẾU TỚI BẢNG KHÁC"],
          ["Tính duy nhất", "Bắt buộc DUY NHẤT TUYỆT ĐỐI, không bao giờ được trùng", "CÓ THỂ LẶP LẠI (một nhạc sĩ viết nhiều bài hát)"],
          ["Giá trị rỗng (NULL)", "TUYỆT ĐỐI KHÔNG ĐƯỢC RỖNG (NOT NULL)", "Có thể cho phép rỗng trong một số nghiệp vụ tùy chọn"],
          ["Số lượng trong 1 bảng", "Mỗi bảng chỉ chọn DUY NHẤT 1 khóa chính (có thể gồm nhiều trường)", "Một bảng có thể có NHIỀU khóa ngoài khác nhau"],
          ["Ví dụ trong CSDL Âm nhạc", "BANNHAC.Mid (mã bản nhạc nhận diện từng bài hát)", "BANNHAC.Aid (mã nhạc sĩ dùng để nối sang bảng NHACSI)"]
        ]
      }
    },

    {
      id: "sec-5",
      title: "42–52. Các Tình Huống Thực Tế & Luyện Tập Thiết Kế CSDL",
      subsections: [
        {
          heading: "1. Bài luyện tập SGK: CSDL Quản lý Học tập",
          text: "Một trường học cần quản lý kết quả học tập gồm 3 bảng:",
          points: [
            "Bảng HOCSINH: (SoTheHS, HoTen, CCCD, NgaySinh, DiaChi). Khóa chính phù hợp nhất: SoTheHS (Mã định danh nội bộ nhà trường cấp).",
            "Bảng MONHOC: (MaMon, TenMon, SoTiet). Khóa chính: MaMon.",
            "Bảng DIEM: (SoTheHS, MaMon, Nam, HocKi, LoaiDiem, Diem).\n• Khóa chính ghép: (SoTheHS, MaMon, Nam, HocKi, LoaiDiem).\n• Khóa ngoài 1: SoTheHS (tham chiếu tới HOCSINH.SoTheHS để biết điểm của ai).\n• Khóa ngoài 2: MaMon (tham chiếu tới MONHOC.MaMon để biết điểm của môn nào)."
          ]
        },
        {
          heading: "2. Ba ví dụ đời sống phong phú: Cửa hàng – Mạng xã hội – Game",
          points: [
            "VÍ DỤ 1: QUẢN LÝ BÁN HÀNG CỬA HÀNG:\n• Bảng KHACHHANG: MaKH (PK), HoTen, SDT.\n• Bảng DONHANG: MaDH (PK), MaKH (FK trỏ tới KHACHHANG.MaKH), NgayDat, TongTien. MaKH là khóa ngoài cho biết đơn hàng này do khách nào mua!",
            "VÍ DỤ 2: MẠNG XÃ HỘI (Facebook / Instagram):\n• Bảng NGUOIDUNG: UserID (PK), HoTen, Email.\n• Bảng BAIVIET: PostID (PK), UserID (FK trỏ tới NGUOIDUNG.UserID), NoiDung, NgayDang. Cột UserID cho biết bài đăng này là của tác giả nào!",
            "VÍ DỤ 3: HỆ THỐNG GAME ONLINE:\n• Bảng NGUOICHOI: PlayerID (PK), TenNhanVat, Server.\n• Bảng GIAODICH: TransID (PK), PlayerID (FK trỏ tới NGUOICHOI.PlayerID), SoXu, NgayNap. PlayerID trong bảng giao dịch được phép lặp lại nhiều lần vì một người có thể nạp xu nhiều lần!"
          ]
        },
        {
          heading: "3. Vận dụng lớn: CSDL Kì thi tốt nghiệp THPT",
          text: "Thiết kế CSDL quản lý kết quả thi tốt nghiệp chuẩn gồm 4 bảng:",
          points: [
            "Bảng THISINH: SBD (PK - Số báo danh), HoTen, NgaySinh, MaPhong (FK).",
            "Bảng PHONGTHI: MaPhong (PK), DiaDiem, SoLuongCho.",
            "Bảng MONTHI: MaMon (PK), TenMon, ThoiGianThi.",
            "Bảng KETQUA: SBD (FK tham chiếu THISINH), MaMon (FK tham chiếu MONTHI), DiemThi.\n➜ Khóa chính của bảng KETQUA là cặp ghép (SBD, MaMon) vì mỗi thí sinh có đúng 1 điểm thi cho mỗi môn!"
          ]
        },
        {
          heading: "4. Lưu ý sư phạm: Không có một phương án thiết kế duy nhất",
          points: [
            "Khi học sinh tự thiết kế bảng, không ép buộc phải giống hệt 100% một đáp án khuôn mẫu.",
            "Tiêu chí đánh giá một thiết kế CSDL quan hệ tốt:\n1. Tên bảng và ý nghĩa đối tượng có rõ ràng không?\n2. Mỗi bản ghi đại diện cho cái gì?\n3. Khóa chính có đảm bảo tính duy nhất không?\n4. Khóa ngoài có tham chiếu đúng khóa chính của bảng kia không?\n5. Có loại bỏ được sự lặp lại dữ liệu thừa không cần thiết không?"
          ]
        }
      ],
      calloutBox: {
        type: "warning",
        title: "6 hiểu nhầm cần sửa ngay cho học sinh",
        text: "1. 'Tên cột có chữ Mã thì tự động là khóa' ➜ SAI! Phải kiểm tra giá trị có duy nhất không.\n2. 'Khóa chính luôn luôn chỉ gồm 1 cột' ➜ SAI! Khóa chính hoàn toàn có thể là nhóm nhiều cột (Khóa ghép).\n3. 'Khóa ngoài không bao giờ được lặp lại' ➜ SAI! Khóa ngoài được lặp lại thoải mái.\n4. 'Một bảng chỉ được phép có một khóa ngoài' ➜ SAI! Bảng có thể có nhiều khóa ngoài (như BANTHUAM có 2 FK).\n5. 'Họ và tên luôn là khóa tốt' ➜ SAI! Họ tên rất hay trùng lặp.\n6. 'Một bảng có thể có nhiều khóa chính' ➜ SAI! Mỗi bảng chỉ chọn duy nhất MỘT khóa chính, nhưng khóa đó có thể cấu thành từ nhiều trường."
      }
    },

    {
      id: "sec-6",
      title: "53–60. Tổng Kết Bài Học, Sáu Câu Tự Vấn Cốt Lõi & Sơ Đồ Tư Duy",
      checkpointCards: [
        {
          title: "1. CSDL QUAN HỆ LÀ GÌ?",
          detail: "CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau (Bảng + Quan hệ)."
        },
        {
          title: "2. HÀNG & CỘT LÀ GÌ?",
          detail: "Hàng = Bản ghi (hồ sơ 1 đối tượng cụ thể). Cột = Trường/Thuộc tính (loại thông tin cần lưu)."
        },
        {
          title: "3. VÌ SAO CẦN KIỂU DỮ LIỆU?",
          detail: "Tiết kiệm dung lượng lưu trữ trên đĩa và kiểm soát tính đúng đắn logic của dữ liệu nhập."
        },
        {
          title: "4. KHÓA CHÍNH (PRIMARY KEY)",
          detail: "Nhận diện chính thức duy nhất mỗi bản ghi trong bảng. Không được trùng lặp, không được rỗng."
        },
        {
          title: "5. KHÓA NGOÀI (FOREIGN KEY)",
          detail: "Trường tham chiếu tới PK của bảng khác để nối dữ liệu. Được phép lặp, bảng có thể có nhiều FK."
        },
        {
          title: "6. BƯỚC ĐỆM SANG BÀI 14",
          detail: "Bài 13 hiểu nguyên lý tổ chức ➜ Bài 14 sẽ dùng ngôn ngữ SQL để ra lệnh tạo bảng, khóa và truy vấn!"
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|                        BÀI 13: CƠ SỞ DỮ LIỆU QUAN HỆ                               |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
                            CƠ SỞ DỮ LIỆU QUAN HỆ (RDBMS)
                         (Dữ liệu tổ chức thành các BẢNG)
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
             CẤU TRÚC BẢNG                                  CƠ CHẾ KHÓA
                 │                                               │
        ┌────────┴────────┐                             ┌────────┴────────┐
        ▼                 ▼                             ▼                 ▼
      HÀNG               CỘT                        KHÓA CHÍNH        KHÓA NGOÀI
   (Bản ghi /         (Trường /                   (Primary Key)     (Foreign Key)
     Record)         Thuộc tính)                        │                 │
        │                 │                        "Tôi là ai?"    "Tôi liên quan
   Hồ sơ của 1       Một loại thông                     │             đến ai?"
   đối tượng         tin chung                          ▼                 │
   cụ thể                 │                         Duy nhất,             ▼
                          ▼                         Không NULL,     Tham chiếu PK,
                     KIỂU DỮ LIỆU                   Nhận diện       Có thể lặp,
                  (Số, Chữ, Ngày...)                chính thức      Tạo liên kết
                          │                                               │
             ┌────────────┴────────────┐                                  ▼
             ▼                         ▼                           LIÊN KẾT BẢNG
        Tiết kiệm               Kiểm soát tính                     (Data Linkage)
        dung lượng               đúng đắn logic                           │
                                                                          ▼
                                                                 (Cầu nối sang Bài 14:
                                                                 Dùng SQL để thao tác)`
    }
  ],

  summaryQuiz: [
    {
      question: "Câu 1: Cơ sở dữ liệu quan hệ được định nghĩa chuẩn xác là:",
      options: [
        "A. Tập hợp các tệp văn bản Word lưu trữ rời rạc trên máy tính.",
        "B. CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau.",
        "C. Một trang tính Excel gồm nhiều ô dữ liệu màu sắc.",
        "D. Một phần mềm dùng để lập trình giao diện website."
      ],
      answer: "B",
      explanation: "Theo định nghĩa chuẩn SGK Tin học 11, CSDL quan hệ là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau."
    },
    {
      question: "Câu 2: Trong CSDL quan hệ, thuật ngữ 'Bản ghi' (Record / Tuple) dùng để chỉ thành phần nào của bảng?",
      options: [
        "A. Một cột của bảng thể hiện một thuộc tính của đối tượng.",
        "B. Tên của bảng dữ liệu.",
        "C. Một hàng của bảng, thể hiện tập hợp thông tin về một đối tượng cụ thể.",
        "D. Kiểu dữ liệu của một trường."
      ],
      answer: "C",
      explanation: "Hàng (Row) trong CSDL quan hệ tương đương với Bản ghi (Record / Tuple), chứa thông tin về một đối tượng cụ thể được quản lý."
    },
    {
      question: "Câu 3: Thuật ngữ 'Trường' (Field / Attribute) trong bảng dữ liệu tương ứng với:",
      options: [
        "A. Một cột của bảng thể hiện một thuộc tính của đối tượng.",
        "B. Một hàng của bảng dữ liệu.",
        "C. Toàn bộ các dòng dữ liệu trong bảng.",
        "D. Khóa chính của bảng."
      ],
      answer: "A",
      explanation: "Cột (Column) trong bảng CSDL quan hệ tương đương với Trường (Field) hoặc Thuộc tính (Attribute)."
    },
    {
      question: "Câu 4: Vai trò cốt lõi nhất của Khóa trong CSDL quan hệ là gì?",
      options: [
        "A. Dùng để khóa phần mềm không cho người lạ mở máy tính.",
        "B. Một trường hoặc nhóm trường có giá trị đủ để xác định duy nhất một bản ghi trong bảng.",
        "C. Tự động tính toán điểm trung bình cho học sinh.",
        "D. Đổi màu các ô dữ liệu trong bảng."
      ],
      answer: "B",
      explanation: "Khóa là một trường hoặc nhóm trường có giá trị đủ để xác định duy nhất một bản ghi trong bảng, tránh nhầm lẫn giữa các đối tượng."
    },
    {
      question: "Câu 5: Phát biểu nào sau đây về Khóa chính (Primary Key) là ĐÚNG?",
      options: [
        "A. Khóa chính luôn luôn chỉ bao gồm đúng một trường đơn lẻ.",
        "B. Khóa chính có thể nhận giá trị trùng lặp thoải mái giữa các hàng.",
        "C. Khóa chính là khóa được chọn để nhận diện chính thức từng bản ghi, không được trùng lặp và không được rỗng.",
        "D. Một bảng có thể có nhiều khóa chính độc lập cùng lúc."
      ],
      answer: "C",
      explanation: "Khóa chính là khóa nhận diện chính thức của bảng, bắt buộc phải có tính duy nhất và không được để trống (NOT NULL). Khóa chính có thể gồm 1 trường hoặc nhóm nhiều trường (khóa ghép)."
    },
    {
      question: "Câu 6: Mục đích chính của Khóa ngoài (Foreign Key) trong CSDL quan hệ là:",
      options: [
        "A. Xác định duy nhất bản ghi trong chính bảng đó.",
        "B. Tham chiếu tới khóa chính của bảng khác để tạo liên kết dữ liệu giữa các bảng.",
        "C. Ngăn không cho người dùng xóa bảng dữ liệu.",
        "D. Tự động sao lưu dự phòng CSDL mỗi đêm."
      ],
      answer: "B",
      explanation: "Khóa ngoài là trường tham chiếu tới khóa chính của bảng khác, đóng vai trò tạo mối quan hệ và liên kết dữ liệu giữa các bảng."
    },
    {
      question: "Câu 7: Phát biểu nào sau đây về Khóa ngoài là ĐÚNG?",
      options: [
        "A. Khóa ngoài tuyệt đối không bao giờ được phép lặp lại giá trị.",
        "B. Khóa ngoài có thể lặp lại giá trị và một bảng có thể có nhiều khóa ngoài.",
        "C. Một bảng chỉ được phép có duy nhất một khóa ngoài.",
        "D. Khóa ngoài bắt buộc phải có tên giống hệt 100% với tên bảng gốc."
      ],
      answer: "B",
      explanation: "Khóa ngoài hoàn toàn có thể lặp lại giá trị (ví dụ: một nhạc sĩ sáng tác nhiều bản nhạc) và một bảng có thể chứa nhiều khóa ngoài tham chiếu sang nhiều bảng khác nhau."
    },
    {
      question: "Câu 8: Trong CSDL âm nhạc SGK, trường nào đóng vai trò là Khóa chính của bảng BANNHAC?",
      options: [
        "A. Aid (Mã nhạc sĩ)",
        "B. TenBN (Tên bản nhạc)",
        "C. Mid (Mã bản nhạc)",
        "D. Sid (Mã ca sĩ)"
      ],
      answer: "C",
      explanation: "Trong bảng BANNHAC, trường Mid (Mã bản nhạc) nhận diện duy nhất mỗi bản nhạc nên được chọn làm Khóa chính."
    },
    {
      question: "Câu 9: Trong bảng BANNHAC, trường Aid đóng vai trò là gì?",
      options: [
        "A. Khóa chính của bảng BANNHAC.",
        "B. Khóa ngoài tham chiếu tới trường Aid trong bảng NHACSI.",
        "C. Một trường dữ liệu không có ý nghĩa liên kết.",
        "D. Khóa ghép của bảng CASI."
      ],
      answer: "B",
      explanation: "Aid trong bảng BANNHAC là Khóa ngoài, tham chiếu tới Khóa chính Aid của bảng NHACSI để xác định bài hát do nhạc sĩ nào sáng tác."
    },
    {
      question: "Câu 10: Vì sao mỗi trường trong bảng dữ liệu bắt buộc phải được khai báo một kiểu dữ liệu cụ thể?",
      options: [
        "A. Để màn hình máy tính hiển thị nhiều màu sắc đẹp mắt hơn.",
        "B. Để hạn chế lãng phí dung lượng lưu trữ và kiểm soát tính đúng đắn logic của dữ liệu nhập.",
        "C. Để phần mềm tự động dịch sang tiếng Anh.",
        "D. Để khóa CSDL không cho người khác truy cập."
      ],
      answer: "B",
      explanation: "Quy định kiểu dữ liệu giúp hệ thống cấp phát bộ nhớ tối ưu (tránh lãng phí) và kiểm soát tính hợp lệ (ngăn nhập sai loại dữ liệu như gõ chữ vào ô điểm số)."
    }
  ],

  practiceExercises: [
    {
      id: "practice-b13-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Nhận Diện Số Bản Ghi & Số Trường Của Bảng (Mục 16)",
      duration: "2 phút",
      type: "exercise",
      description: "Đọc cấu trúc một bảng dữ liệu thực tế và xác định chính xác số lượng bản ghi cùng danh sách các trường.",
      content: {
        objective: "Mức độ: Nhận biết | Thời gian: 2 phút. Phân biệt chính xác hàng (bản ghi) và cột (trường).",
        requirements: [
          "Cho bảng dữ liệu SANPHAM như sau:\n| MaSP | TenSP | DonGia | SoLuong |\n| SP01 | Chuột không dây | 250000 | 15 |\n| SP02 | Bàn phím cơ | 750000 | 8 |\n| SP03 | Tai nghe chụp tai | 450000 | 20 |\n\nHãy xác định:\n1. Bảng trên có bao nhiêu bản ghi?\n2. Bảng trên có bao nhiêu trường? Kể tên các trường đó."
        ],
        qaList: [
          {
            q: "Đáp án phân tích cấu trúc bảng:",
            a: "1. Số bản ghi (số hàng dữ liệu) = 3 bản ghi (tương ứng với 3 sản phẩm SP01, SP02, SP03).\n2. Số trường (số cột) = 4 trường. Tên các trường lần lượt là: MaSP, TenSP, DonGia, SoLuong."
          }
        ]
      }
    },
    {
      id: "practice-b13-2",
      badge: "Bài 2 – 3 phút",
      title: "Bài 2 – Chọn Khóa Chính Chuẩn Xác Cho Bảng HOCSINH (Mục 21–27)",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích các thuộc tính của học sinh và chọn trường thích hợp nhất làm Khóa chính.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Nắm vững điều kiện cần và đủ của Khóa chính.",
        requirements: [
          "Bảng dữ liệu HOCSINH gồm các trường sau: MaHS, HoTen, NgaySinh, Lop, DiaChi.\n1. Trường nào thích hợp nhất để chọn làm Khóa chính? Vì sao?\n2. Giải thích vì sao các trường: HoTen, NgaySinh và Lop KHÔNG THỂ chọn làm Khóa chính?"
        ],
        qaList: [
          {
            q: "Hướng dẫn phân tích và lời giải:",
            a: "1. Trường thích hợp nhất làm Khóa chính là: MaHS (Mã học sinh).\n• Lý do: Mỗi học sinh khi vào trường đều được cấp một mã số duy nhất, không bao giờ trùng lặp giữa hai học sinh và bắt buộc phải có.\n\n2. Vì sao các trường khác không thể làm khóa chính:\n• HoTen: Rất dễ trùng nhau trong thực tế (trường có thể có nhiều bạn cùng tên Nguyễn Văn An).\n• NgaySinh: Hàng chục học sinh có thể có cùng ngày tháng năm sinh.\n• Lop: Một lớp có từ 30 đến 45 học sinh cùng chung giá trị (ví dụ lớp 11A1 lặp lại 40 lần)."
          }
        ]
      }
    },
    {
      id: "practice-b13-3",
      badge: "Bài 3 – 3 phút",
      title: "Bài 3 – Truy Tìm Nhạc Sĩ Qua 4 Bảng CSDL Âm Nhạc SGK (Mục 9–11)",
      duration: "3 phút",
      type: "exercise",
      description: "Thực hành truy vết dữ liệu liên kết giữa 4 bảng: BANNHAC, NHACSI, CASI và BANTHUAM.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Hiểu cơ chế liên kết dữ liệu theo mã tham chiếu.",
        requirements: [
          "Dựa vào CSDL Âm nhạc SGK ở Mục 9 trong bài học:\n1. Cho biết bản nhạc 'Xa khơi' (Mid = '0004') do nhạc sĩ nào sáng tác? Nêu rõ các bước tra cứu.\n2. Bản ghi ('0003', 'TN') trong bảng BANTHUAM cho biết thông tin gì khi tra cứu sang các bảng liên quan?"
        ],
        qaList: [
          {
            q: "Lời giải tra cứu dữ liệu liên kết:",
            a: "1. Truy tìm tác giả bài 'Xa khơi':\n• Bước 1: Tra bảng BANNHAC tại dòng có TenBN = 'Xa khơi' ➜ Thấy Aid = 4.\n• Bước 2: Dùng Aid = 4 tra sang bảng NHACSI ➜ Thấy dòng có Aid = 4 là nhạc sĩ Nguyễn Tài Tuệ.\n➜ Kết luận: Bản nhạc 'Xa khơi' do nhạc sĩ Nguyễn Tài Tuệ sáng tác.\n\n2. Ý nghĩa bản ghi ('0003', 'TN') trong BANTHUAM:\n• Tra Mid = '0003' sang bảng BANNHAC ➜ Đó là bài hát 'Tình ca'.\n• Tra Sid = 'TN' sang bảng CASI ➜ Đó là ca sĩ Tân Nhân.\n➜ Ý nghĩa: Ca sĩ Tân Nhân đã thu âm thể hiện bản nhạc 'Tình ca'."
          }
        ]
      }
    },
    {
      id: "practice-b13-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Phân Biệt Khóa Chính vs Khóa Ngoài Trong Bảng BANNHAC (Mục 31–36)",
      duration: "3 phút",
      type: "exercise",
      description: "Xác định vai trò PK và FK trong cùng một bảng dữ liệu thực tế.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Phân biệt rạch ròi PK và FK.",
        requirements: [
          "Bảng BANNHAC gồm 3 trường: Mid, Aid, TenBN.\n1. Trường nào là Khóa chính (PK)? Trường nào là Khóa ngoài (FK)?\n2. Khóa ngoài Aid tham chiếu tới bảng nào và trường nào?\n3. Trong bảng BANNHAC, giá trị ở trường Aid có được phép xuất hiện lặp lại nhiều lần không? Vì sao?"
        ],
        qaList: [
          {
            q: "Đáp án phân tích:",
            a: "1. Khóa chính là Mid; Khóa ngoài là Aid.\n2. Aid tham chiếu tới trường Khóa chính Aid của bảng NHACSI.\n3. Hoàn toàn ĐƯỢC PHÉP lặp lại! Vì một nhạc sĩ (Aid) có thể sáng tác nhiều bản nhạc khác nhau. Khóa ngoài không yêu cầu tính duy nhất như khóa chính."
          }
        ]
      }
    },
    {
      id: "practice-b13-5",
      badge: "Bài 5 – 4 phút",
      title: "Bài 5 – Thiết Kế Khóa Ghép Cho Bảng Điểm Học Tập (Mục 24 & 45)",
      duration: "4 phút",
      type: "exercise",
      description: "Phân tích vì sao bảng điểm kiểm tra bắt buộc phải sử dụng tổ hợp khóa ghép nhiều trường.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 4 phút. Hiểu bản chất và cách xác định khóa ghép.",
        requirements: [
          "Một trường học ghi điểm vào bảng DIEM gồm các cột: SoTheHS, MaMon, NamHoc, HocKi, LoaiDiem, Diem.\n1. Vì sao không thể lấy SoTheHS hoặc MaMon làm khóa chính đơn lẻ?\n2. Hãy đề xuất một Khóa chính ghép hợp lý để nhận diện duy nhất từng dòng điểm số.\n3. Bảng DIEM có những Khóa ngoài nào tham chiếu tới những bảng nào?"
        ],
        qaList: [
          {
            q: "Hướng dẫn giải chi tiết:",
            a: "1. Không thể dùng đơn lẻ:\n• SoTheHS bị lặp nhiều lần vì một học sinh học nhiều môn và có nhiều cột điểm.\n• MaMon bị lặp nhiều lần vì cả lớp đều học chung môn đó.\n\n2. Khóa chính ghép hợp lý:\n• Cần ghép 5 trường: (SoTheHS + MaMon + NamHoc + HocKi + LoaiDiem).\n• Tổ hợp này đảm bảo duy nhất vì: Một học sinh, trong một năm học, ở một học kì, với một môn học cụ thể, chỉ có đúng một điểm cho một loại điểm nhất định (ví dụ: điểm Giữa kì môn Toán Học kì 1 năm 2026 của An).\n\n3. Các Khóa ngoài của bảng DIEM:\n• SoTheHS: Khóa ngoài tham chiếu tới bảng HOCSINH (SoTheHS).\n• MaMon: Khóa ngoài tham chiếu tới bảng MONHOC (MaMon)."
          }
        ]
      }
    },
    {
      id: "practice-b13-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – Phát Hiện Lỗi Vi Phạm Toàn Vẹn Tham Chiếu (Mục 41)",
      duration: "3 phút",
      type: "exercise",
      description: "Chẩn đoán tình huống nhập sai giá trị khóa ngoài trong cơ sở dữ liệu quan hệ.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Hiểu quy tắc ràng buộc toàn vẹn tham chiếu.",
        requirements: [
          "Hệ thống quản lý lớp học có 2 bảng:\n• Bảng LOP (Khóa chính: MaLop) chỉ có 2 dòng: L01 (11A1) và L02 (11A2).\n• Bảng HOCSINH (Khóa chính: MaHS, Khóa ngoài: MaLop).\n\nKhi cán bộ nhập liệu thêm một học sinh mới: ('HS99', 'Trần Văn Cường', 'L99'), hệ thống DBMS báo lỗi và từ chối lưu. Hãy giải thích nguyên nhân vì sao hệ thống báo lỗi?"
        ],
        qaList: [
          {
            q: "Đáp án phân tích lỗi tham chiếu:",
            a: "• Nguyên nhân: Thao tác trên đã vi phạm RÀNG BUỘC TOÀN VẸN THAM CHIẾU (Referential Integrity).\n• Giải thích: Cột MaLop trong bảng HOCSINH là Khóa ngoài tham chiếu tới Khóa chính MaLop của bảng LOP. Do bảng LOP hiện tại chỉ có mã L01 và L02 mà KHÔNG CÓ mã L99, việc gán học sinh vào mã lớp L99 không tồn tại sẽ tạo ra dữ liệu 'mồ côi'. Hệ QTCSDL phát hiện và tự động chặn lại để bảo vệ tính nhất quán của dữ liệu."
          }
        ]
      }
    },
    {
      id: "practice-b13-7",
      badge: "Bài 7 – 3 phút",
      title: "Bài 7 – Thiết Kế CSDL Quản Lý Đơn Hàng Cửa Hàng (Mục 47)",
      duration: "3 phút",
      type: "exercise",
      description: "Xây dựng mô hình 2 bảng liên kết: KHACHHANG và DONHANG.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Ứng dụng mô hình quan hệ vào bài toán thương mại.",
        requirements: [
          "Một cửa hàng điện máy muốn quản lý khách hàng và các đơn đặt hàng:\n1. Hãy đề xuất cấu trúc cho 2 bảng: KHACHHANG và DONHANG (nêu rõ các trường cần thiết).\n2. Chỉ rõ trường Khóa chính (PK) của từng bảng.\n3. Chỉ rõ trường Khóa ngoài (FK) và giải thích ý nghĩa liên kết của nó."
        ],
        qaList: [
          {
            q: "Đáp án thiết kế chuẩn:",
            a: "1. Cấu trúc đề xuất:\n• Bảng KHACHHANG: MaKH, HoTen, SoDienThoai, DiaChi.\n• Bảng DONHANG: MaDH, MaKH, NgayDat, TongTien.\n\n2. Khóa chính (PK):\n• Bảng KHACHHANG: PK là MaKH (Mã khách hàng duy nhất).\n• Bảng DONHANG: PK là MaDH (Mã đơn hàng duy nhất).\n\n3. Khóa ngoài (FK):\n• Bảng DONHANG có trường MaKH là Khóa ngoài tham chiếu tới KHACHHANG.MaKH.\n• Ý nghĩa: Cho biết đơn hàng đó là do vị khách nào đặt mua, mà không cần chép lại họ tên, số điện thoại của khách trên từng hóa đơn."
          }
        ]
      }
    },
    {
      id: "practice-b13-8",
      badge: "Bài 8 – 3 phút",
      title: "Bài 8 – Hóa Giải 6 Câu Gài Đề Thi Về Khóa CSDL (Mục 50)",
      duration: "3 phút",
      type: "exercise",
      description: "Kiểm tra độ vững kiến thức qua 6 phát biểu đúng/sai cực kỳ dễ nhầm lẫn trong đề thi.",
      content: {
        objective: "Rèn luyện phản xạ tránh bẫy đề kiểm tra và thi tốt nghiệp.",
        requirements: [
          "Cho 6 phát biểu sau, hãy cho biết phát biểu nào ĐÚNG, phát biểu nào SAI và giải thích ngắn gọn:\n1. 'Cứ cột nào có chữ Mã ở đầu thì mặc nhiên là Khóa chính.'\n2. 'Một bảng dữ liệu có thể có nhiều Khóa chính độc lập.'\n3. 'Khóa ngoài được phép nhận các giá trị lặp lại giữa các dòng.'\n4. 'Một bảng chỉ được phép có tối đa một Khóa ngoài.'\n5. 'Khóa chính không bao giờ được phép mang giá trị rỗng (NULL).'\n6. 'Khóa chính bắt buộc phải gồm ít nhất 2 cột trở lên.'"
        ],
        qaList: [
          {
            q: "Đáp án phân tích 6 phát biểu:",
            a: "1. SAI! Chữ 'Mã' chỉ là tên gọi. Muốn làm khóa chính thì giá trị phải duy nhất tuyệt đối.\n2. SAI! Mỗi bảng chỉ chọn duy nhất 1 khóa chính (dù khóa đó có thể gồm nhiều trường).\n3. ĐÚNG! Khóa ngoài được phép lặp lại (1 nhạc sĩ sáng tác nhiều bài hát).\n4. SAI! Một bảng có thể có nhiều khóa ngoài (ví dụ BANTHUAM có 2 khóa ngoài Mid và Sid).\n5. ĐÚNG! Khóa chính bắt buộc phải có giá trị cụ thể, không được rỗng để nhận diện bản ghi.\n6. SAI! Đa số trường hợp khóa chính chỉ gồm 1 cột duy nhất cho gọn nhẹ (MaHS, MaSP)."
          }
        ]
      }
    },
    {
      id: "practice-b13-9",
      badge: "Vận Dụng Lớn – 5 phút",
      title: "Bài Vận Dụng Lớn: Thiết Kế CSDL Kì Thi Tốt Nghiệp THPT (Mục 51)",
      duration: "5 phút",
      type: "exercise",
      description: "Xây dựng sơ đồ 4 bảng hoàn chỉnh cho hệ thống quản lý thi tốt nghiệp THPT quốc gia.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 5 phút. Tích hợp toàn diện kiến thức bảng, PK, FK.",
        requirements: [
          "Một Hội đồng thi cần quản lý kì thi tốt nghiệp gồm: Thí sinh, Phòng thi, Môn thi và Kết quả thi.\n1. Hãy thiết kế 4 bảng dữ liệu: THISINH, PHONGTHI, MONTHI, KETQUA kèm danh sách các trường.\n2. Xác định Khóa chính (PK) cho từng bảng.\n3. Xác định tất cả các Khóa ngoài (FK) và bảng tham chiếu tương ứng."
        ],
        qaList: [
          {
            q: "Đáp án thiết kế hệ thống thi tốt nghiệp:",
            a: "1. Cấu trúc 4 bảng dữ liệu:\n• PHONGTHI (MaPhong, TenPhong, DiaDiemThi, SoChoNgoi).\n• THISINH (SBD, HoTen, NgaySinh, MaPhong).\n• MONTHI (MaMon, TenMon, ThoiGianLamBai).\n• KETQUA (SBD, MaMon, DiemThi).\n\n2. Khóa chính (PK):\n• PHONGTHI: PK là MaPhong.\n• THISINH: PK là SBD (Số báo danh thí sinh).\n• MONTHI: PK là MaMon (Mã môn thi).\n• KETQUA: PK là CẶP GHÉP (SBD, MaMon) — vì mỗi thí sinh có 1 điểm thi cho mỗi môn.\n\n3. Khóa ngoài (FK):\n• THISINH.MaPhong: Khóa ngoài tham chiếu tới PHONGTHI.MaPhong (cho biết thí sinh thi ở phòng nào).\n• KETQUA.SBD: Khóa ngoài tham chiếu tới THISINH.SBD (cho biết điểm này là của thí sinh nào).\n• KETQUA.MaMon: Khóa ngoài tham chiếu tới MONTHI.MaMon (cho biết điểm này thuộc môn thi nào)."
          }
        ]
      }
    },
    {
      id: "practice-b13-10",
      badge: "Phản Xạ – 3 phút",
      title: "Bộ 10 Câu Hỏi Phản Xạ Nhanh Thuật Ngữ CSDL Quan Hệ (Mục 54 & 56)",
      duration: "3 phút",
      type: "exercise",
      description: "Đọc câu hỏi và gọi tên chuẩn xác thuật ngữ hoặc nguyên tắc CSDL quan hệ trong 3 giây!",
      content: {
        objective: "Rèn luyện phản xạ thần tốc cho bài kiểm tra và đề thi chính thức.",
        requirements: [
          "Hãy gọi tên thuật ngữ CSDL quan hệ tương ứng cho 10 câu sau:\n1. Tập hợp các bảng dữ liệu có quan hệ với nhau gọi là gì?\n2. Một hàng trong bảng còn gọi là gì?\n3. Một cột trong bảng còn gọi là gì?\n4. Dấu hiệu nhận diện duy nhất một bản ghi gọi là gì?\n5. Khóa được chọn làm nhận diện chính thức của bảng gọi là gì?\n6. Trường tham chiếu sang khóa chính bảng khác gọi là gì?\n7. Khóa chính có được phép rỗng không?\n8. Khóa ngoài có được phép trùng lặp không?\n9. Việc ghép dữ liệu giữa các bảng dựa trên mã chung gọi là gì?\n10. Khóa chính gồm từ 2 trường trở lên gọi là gì?"
        ],
        qaList: [
          {
            q: "Đáp án phản xạ 10 câu hỏi:",
            a: "1. CSDL quan hệ (RDBMS).\n2. Bản ghi (Record / Tuple / Hàng).\n3. Trường (Field / Attribute / Thuộc tính / Cột).\n4. Khóa (Key).\n5. Khóa chính (Primary Key).\n6. Khóa ngoài (Foreign Key).\n7. Không được phép rỗng (NOT NULL).\n8. Được phép trùng lặp.\n9. Liên kết dữ liệu theo khóa (Data linkage).\n10. Khóa ghép (Composite Key)."
          }
        ]
      }
    }
  ],

  examTypes: [
    {
      id: "exam-type-1",
      title: "Dạng 1: Chọn trường làm Khóa chính (Primary Key) và giải thích vì sao",
      importance: "Cực kỳ hay gặp (Kiểm tra 15p, 1 tiết & Thi học kì)",
      technique: "Phương pháp giải: Tìm trường có giá trị duy nhất tuyệt đối, không trùng lặp và bắt buộc phải có (thường là các mã định danh: MaHS, MaSP, SoCCCD, MaSach). Khi giải thích vì sao các trường khác không được chọn: chỉ ra nguy cơ thực tế bị trùng lặp (Họ tên, Ngày sinh, Địa chỉ, Quê quán) hoặc mang tính tập thể lặp lại (Lớp, Khoa, Phòng ban).",
      examples: [
        "Đề bài: Cho bảng NHANVIEN gồm các trường: MaNV, HoTen, NgaySinh, PhongBan, SoDienThoai. Hãy chọn Khóa chính hợp lý nhất và giải thích vì sao HoTen không được chọn làm khóa chính?"
      ]
    },
    {
      id: "exam-type-2",
      title: "Dạng 2: Xác định Khóa ngoài (Foreign Key) và mô tả mối liên kết giữa 2 bảng",
      importance: "Trọng tâm thiết kế CSDL",
      technique: "Phương pháp giải: Tìm trường ở bảng này có tên và ý nghĩa tương ứng với Khóa chính của bảng kia. Cột đó ở bảng phụ chính là Khóa ngoài (FK), trỏ sang Khóa chính (PK) của bảng gốc. Mẹo nhớ: Bảng chứa Khóa ngoài là bên 'Nhiều', bảng chứa Khóa chính được tham chiếu là bên 'Một'.",
      examples: [
        "Đề bài: Cho bảng LOP (MaLop, TenLop) và bảng HOCSINH (MaHS, HoTen, MaLop). Chỉ rõ Khóa chính, Khóa ngoài và mô tả cách 2 bảng liên kết với nhau."
      ]
    },
    {
      id: "exam-type-3",
      title: "Dạng 3: Nhận diện hiện tượng dư thừa dữ liệu và đề xuất tách bảng quan hệ",
      importance: "Vận dụng điểm 8 – 9",
      technique: "Phương pháp giải: Khi đề bài cho 1 bảng lớn chứa nhiều loại đối tượng (học sinh, môn học, giáo viên) dẫn tới thông tin bị chép đi chép lại. Cách xử lý: Tách thành các bảng thực thể riêng biệt (HOCSINH, MONHOC, GIAOVIEN) và 1 bảng trung gian lưu kết quả liên kết (DIEM hoặc PHANCONG).",
      examples: [
        "Đề bài: Phân tích các nhược điểm khi lưu toàn bộ điểm thi và thông tin học sinh trên cùng một bảng tính phẳng duy nhất."
      ]
    },
    {
      id: "exam-type-4",
      title: "Dạng 4: Xác định Khóa chính ghép (nhiều trường) cho bảng trung gian",
      importance: "Vận dụng nâng cao điểm 9 – 10",
      technique: "Phương pháp giải: Trong các bảng ghi nhận quan hệ nhiều - nhiều (như BANTHUAM giữa bản nhạc và ca sĩ; DIEM giữa học sinh và môn học), từng trường đơn lẻ đều bị lặp lại. Phải kết hợp từ 2 trường trở lên mới đảm bảo tính duy nhất của từng bản ghi.",
      examples: [
        "Đề bài: Vì sao trong bảng BANTHUAM (Mid, Sid), trường Mid không thể làm khóa chính đơn lẻ mà bắt buộc phải dùng cặp (Mid, Sid)?"
      ]
    },
    {
      id: "exam-type-5",
      title: "Dạng 5: Nhận diện lỗi vi phạm ràng buộc toàn vẹn tham chiếu (Referential Integrity)",
      importance: "Câu hỏi thực hành và lý thuyết bẫy",
      technique: "Phương pháp giải: Đối chiếu giá trị của Khóa ngoài với danh sách các Khóa chính đang tồn tại ở bảng gốc. Nếu Khóa ngoài chứa một giá trị không hề có trong bảng gốc (như lớp L99 không có trong bảng LOP), kết luận ngay đây là lỗi vi phạm toàn vẹn tham chiếu.",
      examples: [
        "Đề bài: Một học sinh nhập điểm cho môn có MaMon = 'THE_DUC', nhưng trong bảng MONHOC chưa từng khai báo mã này. Hệ thống sẽ xử lý như thế nào?"
      ]
    }
  ],

  homework: [
    {
      title: "Bài tập 1: Thiết Kế Cơ Sở Dữ Liệu Quản Lý Thư Viện Trường Học",
      tag: "Tự Luận Thiết Kế",
      problem: "Một thư viện trường học cần quản lý độc giả mượn sách. Dữ liệu cần quản lý gồm thông tin về Sách, Độc giả (Học sinh) và Các phiếu mượn sách:",
      tasks: [
        "Nhiệm vụ 1: Đề xuất cấu trúc 3 bảng dữ liệu: SACH, DOCGIA và PHIEUMUON kèm danh sách các trường cần thiết.",
        "Nhiệm vụ 2: Xác định rõ Khóa chính (PK) cho từng bảng.",
        "Nhiệm vụ 3: Xác định các Khóa ngoài (FK) trong bảng PHIEUMUON và chỉ rõ nó tham chiếu tới bảng nào."
      ],
      requirements: "Trình bày rõ ràng tên bảng, các trường, ký hiệu rõ ràng [PK] và [FK].",
      hint: "Xem lại ví dụ CSDL Âm nhạc SGK (Mục 9) và CSDL Bán hàng (Mục 47) trong bài học.",
      solution: `Gợi ý lời giải Bài tập 1:
1. Cấu trúc 3 bảng đề xuất:
• Bảng SACH: MaSach [PK], TenSach, TacGia, NamXuatBan, TheLoai.
• Bảng DOCGIA: MaDG [PK], HoTen, Lop, NgaySinh, SoDienThoai.
• Bảng PHIEUMUON: MaPhieu [PK], MaDG [FK], MaSach [FK], NgayMuon, NgayHenTra, DaTra.

2. Khóa chính (PK):
• Bảng SACH: MaSach (Mã sách duy nhất cho từng cuốn sách).
• Bảng DOCGIA: MaDG (Mã độc giả duy nhất cấp cho từng học sinh).
• Bảng PHIEUMUON: MaPhieu (Mã phiếu mượn duy nhất cho mỗi lượt mượn).

3. Khóa ngoài (FK) trong bảng PHIEUMUON:
• MaDG: Khóa ngoài tham chiếu tới DOCGIA.MaDG (cho biết ai mượn).
• MaSach: Khóa ngoài tham chiếu tới SACH.MaSach (cho biết mượn cuốn sách nào).`
    },
    {
      title: "Bài tập 2: Củng Cố Lý Thuyết & Giải Thích Chi Tiết 10 Câu Mini Test",
      tag: "Trắc nghiệm Bắt buộc",
      problem: "Làm lại toàn bộ 10 câu hỏi trắc nghiệm của Bài 13 trong bài học:",
      tasks: [
        "Nhiệm vụ 1: Ghi lại đáp án đúng cho từng câu từ Câu 1 đến Câu 10.",
        "Nhiệm vụ 2: Viết câu giải thích ngắn gọn (1–2 dòng) chỉ rõ căn cứ chuyên môn vì sao chọn đáp án đó."
      ],
      requirements: "Trình bày đầy đủ vào vở bài tập.",
      hint: "Bám sát các khái niệm: Bảng, Bản ghi, Trường, Kiểu dữ liệu, Khóa chính, Khóa ngoài.",
      solution: `Checklist đánh giá bài tập 2 (10/10 Điểm):
✓ Câu 1 (B): CSDL quan hệ lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau.
✓ Câu 2 (C): Bản ghi (Record / Tuple) là một hàng của bảng thể hiện thông tin 1 đối tượng cụ thể.
✓ Câu 3 (A): Trường (Field / Attribute) là một cột thể hiện một thuộc tính của đối tượng.
✓ Câu 4 (B): Khóa có vai trò xác định duy nhất một bản ghi trong bảng.
✓ Câu 5 (C): Khóa chính nhận diện chính thức từng bản ghi, không được trùng và không được rỗng.
✓ Câu 6 (B): Khóa ngoài tham chiếu tới PK bảng khác để tạo liên kết dữ liệu.
✓ Câu 7 (B): Khóa ngoài có thể lặp lại giá trị và bảng có thể có nhiều khóa ngoài.
✓ Câu 8 (C): BANNHAC.Mid là Khóa chính nhận diện duy nhất từng bản nhạc.
✓ Câu 9 (B): BANNHAC.Aid là Khóa ngoài tham chiếu tới NHACSI.Aid.
✓ Câu 10 (B): Kiểu dữ liệu giúp tiết kiệm dung lượng và kiểm soát tính đúng đắn logic.`
    },
    {
      title: "Bài tập 3: Câu Hỏi Chuẩn Bị Bài 14 – Ngôn Ngữ Truy Vấn SQL",
      tag: "Chuẩn bị Bài mới",
      problem: "Ở Bài 13, chúng ta đã biết cách tổ chức dữ liệu thành các bảng và thiết lập khóa liên kết trên mô hình lý thuyết. Sang Bài 14, chúng ta sẽ học cách 'ra lệnh' trực tiếp cho Hệ QTCSDL:",
      tasks: [
        "Nhiệm vụ: Tìm hiểu trước xem ngôn ngữ tiêu chuẩn thế giới dùng để tạo bảng, khai báo khóa và truy vấn dữ liệu từ CSDL quan hệ có tên viết tắt là gì? Ba chữ cái đó viết tắt của cụm từ tiếng Anh nào?"
      ],
      requirements: "Ghi ngắn gọn định nghĩa tìm hiểu được.",
      hint: "Tìm kiếm từ khóa 'SQL là gì' (Structured Query Language).",
      solution: `Gợi ý lời giải Bài tập 3:
• Ngôn ngữ tiêu chuẩn đó là: SQL.
• SQL viết tắt của: Structured Query Language (Ngôn ngữ truy vấn có cấu trúc).
• SQL gồm 3 nhóm lệnh chính:
  1. DDL (Data Definition Language): Tạo CSDL, tạo bảng, khai báo khóa chính, khóa ngoài (CREATE TABLE, ALTER TABLE...).
  2. DML (Data Manipulation Language): Thêm, sửa, xóa và truy xuất dữ liệu (SELECT, INSERT, UPDATE, DELETE, JOIN...).
  3. DCL (Data Control Language): Cấp và thu hồi quyền truy cập (GRANT, REVOKE...).`
    }
  ],

  pedagogyTips: {
    teachingSteps: [
      { step: "Bước 1: Khởi động bằng tình huống 1 bảng khổng lồ", desc: "Đưa ví dụ nhét hết học sinh, lớp, môn, điểm vào 1 bảng ➜ Chỉ ra dữ liệu lặp lại nghiêm trọng ➜ Dẫn dắt sang giải pháp chia nhỏ bảng của mô hình CSDL quan hệ." },
      { step: "Bước 2: Dạy Bảng - Hàng - Cột qua so sánh đời thường", desc: "Hàng = Bản ghi (hồ sơ 1 người cụ thể); Cột = Trường (loại thông tin ghi cho mọi người); Kiểu dữ liệu (tiết kiệm bộ nhớ, chống nhập sai logic)." },
      { step: "Bước 3: Dạy Khóa & Khóa chính qua ví dụ trùng tên", desc: "Đưa tình huống 2 bạn cùng tên Nguyễn Văn An học cùng lớp 11A1 ➜ Khẳng định cần một mã nhận diện duy nhất tuyệt đối (PK). Khẩu quyết: 'Tôi là ai?'." },
      { step: "Bước 4: Dạy Khóa ngoài qua CSDL Âm nhạc SGK", desc: "Minh họa cột Aid trong BANNHAC mượn từ NHACSI sang để biết tác giả. Khẩu quyết: 'Tôi liên quan tới ai?'. Nhấn mạnh: FK được phép lặp, bảng có thể có nhiều FK." },
      { step: "Bước 5: Luyện tập thiết kế và chốt bài chuyển giao sang Bài 14", desc: "Cho học sinh thiết kế CSDL Học sinh - Điểm, Cửa hàng hoặc Kì thi tốt nghiệp. Chốt bài: Bài 13 xây nền kiến trúc, Bài 14 sẽ dùng lệnh SQL để thực sự biến mô hình này thành hiện thực!" }
    ],
    rulesToAvoid: [
      "TUYỆT ĐỐI KHÔNG biến trọng tâm Bài 13 thành bài học gõ lệnh SQL (CREATE TABLE, SELECT, JOIN...). Đó là nội dung trọng tâm của Bài 14.",
      "TUYỆT ĐỐI KHÔNG dạy các lý thuyết chuẩn hóa nâng cao ngoài SGK lớp 11 như Dạng chuẩn 1NF, 2NF, 3NF, BCNF, Đại số quan hệ toán học.",
      "Không nhầm lẫn rằng 'Khóa chính luôn chỉ gồm 1 cột' (nhớ nhấn mạnh trường hợp khóa ghép của BANTHUAM hoặc bảng DIEM).",
      "Không nhầm lẫn rằng 'Khóa ngoài cấm lặp lại' (khóa ngoài được lặp lại thoải mái vì một đối tượng gốc có thể liên quan tới nhiều dòng phụ)."
    ]
  }
}
