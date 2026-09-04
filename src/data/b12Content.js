/**
 * Dữ liệu bài giảng Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: khoảng 100 phút)
 * Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu
 * Định hướng: Kiến thức cốt lõi chung (CS & ICT)
 */
export const b12Content = {
  warmUp: {
    question: "Em vào website tra cứu điểm thi, chỉ cần gõ Số báo danh rồi bấm 'Tra cứu', vài giây sau màn hình hiện ra đầy đủ Họ tên, Điểm các môn và Kết quả xét tuyển. Có phải trình duyệt đang trực tiếp mở một file chứa hàng trăm nghìn thí sinh để tự tìm kiếm không?",
    description: "Câu trả lời là: KHÔNG! Trình duyệt hay ứng dụng người dùng không bao giờ can thiệp trực tiếp vào các tệp dữ liệu thô trên đĩa. Ở giữa chúng luôn có một lớp phần mềm trung gian cực kỳ thông minh gọi là Hệ quản trị cơ sở dữ liệu (DBMS). DBMS tiếp nhận yêu cầu, kiểm tra quyền hạn, tìm kiếm dữ liệu trong CSDL rồi trả kết quả về cho website hiển thị. Bài học này sẽ giúp em làm chủ vai trò của DBMS, cấu trúc của một Hệ CSDL hoàn chỉnh và phân biệt hệ CSDL tập trung với phân tán!"
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mạch Kiến Thức Từ Bài 11 Sang Bài 12 & Khung Phân Bổ 100 Phút",
      subsections: [
        {
          heading: "1. Mạch kiến thức nối tiếp",
          points: [
            "Bài 11 đã giúp học sinh hiểu CSDL là gì (tập hợp dữ liệu có liên quan, có tổ chức, lưu trên máy tính) và 6 thuộc tính cơ bản cần đạt (Cấu trúc, Không dư thừa, Độc lập dữ liệu, Toàn vẹn, Nhất quán, Bảo mật & An toàn).",
            "Vấn đề nảy sinh: Một CSDL thực tế chứa hàng nghìn, hàng triệu bản ghi. Người dùng bình thường và lập trình viên không thể tự mở từng tệp nhị phân trên ổ đĩa để tự tìm kiếm, phân quyền hay sao lưu.",
            "Giải pháp: Cần một lớp phần mềm chuyên dụng đứng giữa người dùng/ứng dụng và CSDL, đó chính là Hệ quản trị cơ sở dữ liệu (DBMS).",
            "Mô hình dòng chảy cốt lõi: NGƯỜI DÙNG / ỨNG DỤNG ➜ HỆ QTCSDL (DBMS) ➜ CƠ SỞ DỮ LIỆU (CSDL).",
            "Trọng tâm Bài 12: Nắm vững 3 vấn đề: (1) Hệ QTCSDL là gì và có các nhóm chức năng nào? (2) Hệ CSDL gồm những thành phần nào? (3) Phân biệt Hệ CSDL tập trung và phân tán."
          ]
        },
        {
          heading: "2. Khung phân bổ thời gian buổi học 100 phút",
          points: [
            "0–8 phút: Khởi động bằng tình huống tra cứu điểm thi THPT quốc gia.",
            "8–18 phút: Vì sao cần Hệ QTCSDL? (Hậu quả nếu để người dùng tự thao tác với tệp dữ liệu thô).",
            "18–30 phút: Khái niệm Hệ QTCSDL (DBMS) & Phân biệt rõ CSDL vs Hệ QTCSDL.",
            "30–54 phút: Bốn nhóm chức năng chính của Hệ QTCSDL (Định nghĩa, Cập nhật, Truy xuất, Bảo mật & An toàn, Giao diện lập trình).",
            "54–68 phút: Khái niệm Hệ CSDL & Sơ đồ kiến trúc 4 tầng hoàn chỉnh.",
            "68–85 phút: Hệ CSDL tập trung vs Hệ CSDL phân tán (Bản chất, ví dụ chuỗi siêu thị, so sánh ưu - nhược điểm).",
            "85–95 phút: 10 bài tập tình huống thực hành trực tiếp.",
            "95–100 phút: Mini Test 10 câu trắc nghiệm, 7 câu hỏi tự vấn và mạch nối sang Bài 13."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Tình huống Khởi động Đặt vấn đề",
        text: "Gia sư đặt câu hỏi: 'Nếu trường ta có 1.000 học sinh, 20 môn học, hàng chục giáo viên. Nếu tất cả chỉ lưu trong các file thô trên ổ cứng, khi thầy cô muốn tìm 'học sinh lớp 11A có điểm Tin >= 8' thì sẽ khó khăn thế nào?' ➜ Người dùng phải tự biết file lưu ở đâu, tự đọc cấu trúc file, tự viết code tìm kiếm, tự xử lý lỗi, tự lo phân quyền và sao lưu ➜ Bất khả thi trong thực tế! Đó là lý do bắt buộc phải có Hệ QTCSDL làm thay toàn bộ những công việc phức tạp đó."
      }
    },
    {
      id: "sec-2",
      title: "III. Khái Niệm Hệ Quản Trị CSDL (DBMS) & Phân Biệt Tuyệt Đối Với CSDL",
      subsections: [
        {
          heading: "1. Hệ quản trị cơ sở dữ liệu (DBMS) là gì?",
          text: "Hệ quản trị cơ sở dữ liệu (tiếng Anh: Database Management System, viết tắt: DBMS) là phần mềm cung cấp các phương tiện để tạo lập, lưu trữ, cập nhật, truy xuất, bảo mật và bảo đảm an toàn cho CSDL, đồng thời hỗ trợ các chương trình ứng dụng làm việc với dữ liệu.",
          points: [
            "Vai trò trung gian: Làm 'người phục vụ' đứng giữa nhận lệnh từ ứng dụng/người dùng ➜ xử lý trên đĩa cứng ➜ trả kết quả.",
            "Tự động hóa: Người dùng chỉ cần ra lệnh 'Tìm học sinh HS001', DBMS sẽ tự biết đọc đĩa thế nào, kiểm tra quyền truy cập ra sao và trả về kết quả chính xác."
          ]
        },
        {
          heading: "2. Phân biệt tuyệt đối: CSDL vs Hệ QTCSDL (Lỗi kinh điển học sinh hay mắc)",
          text: "Tuyệt đối không được nhầm lẫn giữa dữ liệu và phần mềm quản lý dữ liệu:",
          points: [
            "CƠ SỞ DỮ LIỆU (CSDL) là BẢN THÂN DỮ LIỆU được tổ chức (như: danh sách học sinh, điểm số, ngày sinh, đơn hàng, số dư tài khoản).",
            "HỆ QUẢN TRỊ CSDL (DBMS) là PHẦN MỀM dùng để quản lý CSDL đó (như: MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database, Microsoft Access, SQLite).",
            "❌ SAI LẦM PHỔ BIẾN: Nói 'MySQL là dữ liệu điểm thi'.",
            "✅ NÓI CHUẨN XÁC: 'Dữ liệu điểm thi là CSDL; còn MySQL là Hệ QTCSDL được dùng để quản lý CSDL điểm thi đó!'"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí so sánh", "Cơ sở dữ liệu (CSDL)", "Hệ quản trị CSDL (DBMS)"],
        rows: [
          ["Bản chất", "Là DỮ LIỆU được tổ chức lưu trữ", "Là PHẦN MỀM quản trị dữ liệu"],
          ["Ví dụ cụ thể", "Danh sách 50.000 khách hàng, Bảng điểm học sinh lớp 11", "MySQL, PostgreSQL, Oracle, MS SQL Server, MS Access"],
          ["Hình ảnh so sánh", "Kho sách và các tập tài liệu bên trong", "Người thủ thư và hệ thống công cụ quản lý thư viện"],
          ["Mối quan hệ", "Nằm dưới sự điều khiển của DBMS", "Đứng ra quản lý, bảo vệ và thao tác trên CSDL"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "IV. Bốn Nhóm Chức Năng Chính Của Hệ Quản Trị CSDL",
      subsections: [
        {
          heading: "1. Nhóm 1: Định nghĩa dữ liệu (Data Definition)",
          text: "Trước khi nhập dữ liệu, DBMS cho phép khai báo 'khung' của CSDL:",
          points: [
            "Tạo lập CSDL mới, khai báo các bảng dữ liệu, đặt tên các cột và chỉ định kiểu dữ liệu (Số, Chuỗi văn bản, Ngày tháng...).",
            "Thay đổi cấu trúc: Thêm cột mới (ví dụ thêm cột 'Email học sinh'), xóa bớt cột không dùng.",
            "Thiết lập các ràng buộc toàn vẹn (Constraints): Ví dụ quy định Điểm phải từ 0 đến 10, Mã học sinh không được để trống. (Liên hệ DDL - Data Definition Language)."
          ]
        },
        {
          heading: "2. Nhóm 2: Cập nhật dữ liệu & Truy xuất dữ liệu",
          text: "Hai thao tác làm việc hàng ngày với dữ liệu bên trong CSDL:",
          points: [
            "CẬP NHẬT DỮ LIỆU (Làm THAY ĐỔI dữ liệu): Gồm 3 thao tác cơ bản: THÊM (Insert - thêm học sinh mới chuyển đến), SỬA (Update - đổi số điện thoại học sinh), XÓA (Delete - xóa bản ghi bị nhập trùng).",
            "TRUY XUẤT DỮ LIỆU (LẤY dữ liệu ra xem, KHÔNG làm thay đổi dữ liệu gốc): Tìm kiếm, lọc theo điều kiện (tìm học sinh lớp 11A có điểm Tin >= 8), sắp xếp và thống kê báo cáo (tính điểm trung bình). (Liên hệ DML/DQL)."
          ]
        },
        {
          heading: "3. Nhóm 3: Bảo mật và an toàn CSDL",
          text: "Bảo vệ CSDL trước truy cập trái phép và sự cố phần cứng:",
          points: [
            "Bảo mật dữ liệu (Security): Kiểm soát quyền truy cập chi tiết (Xác định danh tính người dùng ➜ Kiểm tra quyền ➜ Cho phép/Từ chối). Ví dụ: Học sinh chỉ được xem điểm của mình; Giáo viên bộ môn được nhập điểm môn mình dạy; người ngoài không được truy cập.",
            "Kiểm soát truy cập đồng thời: Điều phối khi nhiều người cùng thao tác cùng lúc để tránh tranh chấp (Ví dụ: 2 nhân viên cùng bán chiếc laptop cuối cùng trong kho; DBMS đảm bảo chỉ 1 người mua thành công, tránh mâu thuẫn).",
            "An toàn dữ liệu (Safety / Backup & Recovery): Cung cấp công cụ sao lưu dự phòng (Backup) định kỳ và phục hồi (Restore) nguyên vẹn dữ liệu khi máy chủ bị cháy ổ cứng, sét đánh hoặc sập nguồn."
          ]
        },
        {
          heading: "4. Nhóm 4: Hỗ trợ giao diện lập trình ứng dụng (API)",
          text: "Cung cấp cổng giao tiếp chuẩn mực để các phần mềm ứng dụng (Website tra cứu, App mobile, Phần mềm bán hàng POS) gửi câu lệnh truy vấn xuống DBMS và nhận dữ liệu trả về:",
          points: [
            "Lập trình viên không cần biết chi tiết file dữ liệu ghi ở đâu trong ổ cứng, chỉ cần gọi hàm qua giao diện lập trình của DBMS.",
            "Phân biệt: Giao diện người dùng (UI - màn hình ô nhập, nút bấm cho con người) vs Giao diện lập trình (API - cổng kết nối cho phần mềm giao tiếp với DBMS)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Nhóm chức năng", "Nhiệm vụ cốt lõi", "Thao tác tiêu biểu", "Ví dụ trong trường học"],
        rows: [
          ["Định nghĩa dữ liệu", "Tạo và sửa 'khung/cấu trúc' CSDL", "Tạo bảng, thêm cột, đặt ràng buộc", "Thêm cột 'Email' vào hồ sơ học sinh"],
          ["Cập nhật dữ liệu", "Làm THAY ĐỔI dữ liệu bên trong", "Thêm, Sửa, Xóa bản ghi", "Sửa số điện thoại phụ huynh học sinh"],
          ["Truy xuất dữ liệu", "LẤY thông tin ra xem, không đổi dữ liệu", "Tìm kiếm, lọc, thống kê", "Lọc danh sách học sinh đạt điểm Giỏi"],
          ["Bảo mật CSDL", "Đúng người, đúng quyền hạn", "Xác thực, phân quyền truy cập", "Học sinh không được tự sửa điểm thi"],
          ["An toàn CSDL", "Chống mất mát, phục hồi sự cố", "Sao lưu (Backup), Phục hồi (Restore)", "Tự động sao lưu dữ liệu điểm mỗi đêm"],
          ["Giao diện lập trình", "Cổng kết nối cho phần mềm khác", "Gửi nhận truy vấn qua API", "Website tra cứu điểm kết nối tới DBMS"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "V. Khái Niệm Hệ Cơ Sở Dữ Liệu (Database System) & Sơ Đồ 4 Tầng",
      subsections: [
        {
          heading: "1. Hệ cơ sở dữ liệu là gì?",
          text: "Một CSDL và một DBMS vẫn chưa đủ để người dùng thông thường sử dụng thuận tiện. Học sinh không thể gõ câu lệnh DBMS trực tiếp mà cần một phần mềm giao diện thân thiện (Website, App).",
          points: [
            "HỆ CƠ SỞ DỮ LIỆU (Database System) là một hệ thống hoàn chỉnh gồm 3 thành phần kỹ thuật kết hợp chặt chẽ: CSDL + Hệ QTCSDL + Các phần mềm ứng dụng CSDL (cùng với Con người vận hành và sử dụng hệ thống).",
            "Mối quan hệ: CSDL là 'dữ liệu'; DBMS là 'bộ máy điều khiển'; Phần mềm ứng dụng là 'giao diện trung gian' phục vụ người dùng cuối."
          ]
        },
        {
          heading: "2. Sơ đồ kiến trúc 4 tầng kinh điển (Bắt buộc phải thuộc)",
          text: "Dòng luồng tương tác từ người dùng xuống đĩa cứng:",
          points: [
            "Tầng 1 – NGƯỜI DÙNG: Học sinh, Giáo viên, Thu ngân, Khách hàng.",
            "Tầng 2 – PHẦN MỀM ỨNG DỤNG: Website tra cứu điểm, App di động VnEdu, Web bán hàng Shopee.",
            "Tầng 3 – HỆ QUẢN TRỊ CSDL (DBMS): MySQL, PostgreSQL, MS SQL Server, Oracle.",
            "Tầng 4 – CƠ SỞ DỮ LIỆU (CSDL): Các bảng dữ liệu vật lý lưu trên ổ đĩa máy chủ.",
            "💡 Nguyên tắc vàng: Nhiều phần mềm ứng dụng khác nhau (App học sinh, Web giáo viên, Ứng dụng phòng đào tạo) có thể cùng kết nối và khai thác CHUNG MỘT CSDL thông qua Hệ QTCSDL!"
          ]
        }
      ],
      osArchitecture: {
        title: "Sơ Đồ Kiến Trúc 4 Tầng Của Hệ Cơ Sở Dữ Liệu",
        layers: [
          { name: "1. NGƯỜI DÙNG (Học sinh, Giáo viên, Nhân viên thu ngân, Quản trị viên)", color: "bg-indigo-100 border-indigo-300 text-indigo-800", icon: "user" },
          { name: "2. PHẦN MỀM ỨNG DỤNG (Website tra cứu, App mobile VnEdu, Phần mềm POS)", color: "bg-sky-100 border-sky-300 text-sky-800", icon: "app" },
          { name: "3. HỆ QUẢN TRỊ CSDL - DBMS (PostgreSQL, MySQL, MS SQL Server, Oracle)", color: "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold", icon: "os" },
          { name: "4. CƠ SỞ DỮ LIỆU - CSDL (Dữ liệu học sinh, điểm số, sách, tài khoản trên đĩa)", color: "bg-slate-200 border-slate-400 text-slate-800", icon: "hardware" }
        ]
      }
    },
    {
      id: "sec-5",
      title: "VI. Phân Biệt Hệ CSDL Tập Trung Và Hệ CSDL Phân Tán",
      subsections: [
        {
          heading: "1. Hệ CSDL tập trung (Centralized Database System)",
          text: "Bản chất: Toàn bộ CSDL được lưu trữ tại MỘT hệ thống máy tính trung tâm duy nhất (có thể là một máy chủ đơn lẻ hoặc một cụm máy chủ tập trung). Người dùng ở các máy khách kết nối qua mạng về máy chủ trung tâm để làm việc.",
          points: [
            "Các dạng hệ tập trung: Hệ CSDL cá nhân (trên 1 laptop riêng); Hệ CSDL trung tâm; Hệ CSDL khách - chủ (Client - Server: Client gửi yêu cầu, Server xử lý CSDL và trả lời).",
            "Ưu điểm: Dữ liệu tập trung một nơi dễ quản lý, dễ sao lưu dự phòng, phân quyền bảo mật thống nhất, dễ giữ tính nhất quán.",
            "Hạn chế: Phụ thuộc hoàn toàn vào máy chủ trung tâm (nếu máy chủ bị sự cố sập nguồn thì toàn bộ hệ thống bị tê liệt); dễ trở thành 'điểm nghẽn' (bottleneck) khi có hàng trăm nghìn người cùng truy cập; người dùng ở chi nhánh xa phụ thuộc vào tốc độ đường truyền Internet."
          ]
        },
        {
          heading: "2. Hệ CSDL phân tán (Distributed Database System)",
          text: "Bản chất: Dữ liệu không lưu ở một nơi duy nhất mà được phân chia và lưu trữ trên NHIỀU máy tính khác nhau đặt tại nhiều vị trí địa lý, được tổ chức thành các CSDL thành phần (CSDL con) có liên kết phối hợp qua mạng.",
          points: [
            "Ví dụ điển hình: Chuỗi siêu thị toàn quốc có 3 CSDL con đặt tại chi nhánh Hà Nội, Đà Nẵng, TP.HCM. Mỗi chi nhánh phục vụ bán hàng và quản lý kho tại chỗ, đồng thời kết nối mạng để tổng hợp doanh thu toàn quốc.",
            "Hai loại phân tán: Phân tán thuần nhất (các chi nhánh dùng cùng loại DBMS như PostgreSQL) và Phân tán hỗn hợp (các chi nhánh dùng các DBMS khác nhau như PostgreSQL, Oracle, MS SQL Server).",
            "Ưu điểm: Dữ liệu đặt gần người dùng địa phương nên truy xuất cực nhanh; dễ mở rộng khi công ty mở thêm chi nhánh mới; tăng độ sẵn sàng (chi nhánh này đứt cáp mạng thì các chi nhánh khác vẫn hoạt động bình thường với dữ liệu cục bộ).",
            "Hạn chế: Quản lý cực kỳ phức tạp; rất khó duy trì tính nhất quán dữ liệu (đồng bộ giá bán giữa các chi nhánh); bảo mật phức tạp hơn do có nhiều máy chủ và đường truyền cần bảo vệ."
          ]
        },
        {
          heading: "3. Hai hiểu lầm kinh điển cần tránh tuyệt đối",
          points: [
            "⚠️ HIỂU LẦM 1: 'Nhiều người ở nhiều tỉnh truy cập thì chắc chắn là CSDL phân tán!' ➜ SAI! Người dùng ở Hà Nội, Đà Nẵng, TP.HCM cùng truy cập vào 1 máy chủ duy nhất đặt tại Hà Nội thì đó vẫn là HỆ CSDL TẬP TRUNG! Yếu tố quyết định là DỮ LIỆU ĐƯỢC LƯU Ở ĐÂU, không phải người dùng ở đâu.",
            "⚠️ HIỂU LẦM 2: 'Hệ CSDL phân tán lúc nào cũng tốt và hiện đại hơn hệ tập trung!' ➜ SAI! Phân tán chỉ dùng khi quy mô địa lý bắt buộc. Với trường học hay doanh nghiệp vừa và nhỏ, hệ CSDL tập trung vẫn là lựa chọn tối ưu nhất vì chi phí rẻ, quản lý đơn giản và đảm bảo tính nhất quán tuyệt đối."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí đối chiếu", "Hệ CSDL Tập trung (Centralized)", "Hệ CSDL Phân tán (Distributed)"],
        rows: [
          ["Vị trí lưu trữ dữ liệu", "Chủ yếu tại MỘT hệ thống máy tính trung tâm", "Trên NHIỀU máy tính đặt tại các vị trí địa lý khác nhau"],
          ["Mức độ quản lý", "Đơn giản, tập trung kiểm soát tại một điểm", "Phức tạp, đòi hỏi đồng bộ và phối hợp đa nút"],
          ["Đảm bảo tính nhất quán", "Rất dễ kiểm soát và đảm bảo tính ăn khớp", "Khó khăn, dễ xảy ra độ trễ lệch pha dữ liệu giữa các nơi"],
          ["Rủi ro sự cố trung tâm", "Cao (Máy chủ trung tâm lỗi ➜ toàn hệ thống dừng)", "Thấp hơn (Một nút gặp sự cố, các nút khác vẫn chạy cục bộ)"],
          ["Khả năng mở rộng địa lý", "Khó khăn khi mở rộng ra quy mô toàn cầu", "Rất thuận lợi, chỉ cần bổ sung thêm nút CSDL con mới"],
          ["Ví dụ thực tế", "Hệ thống CSDL điểm của một trường THPT", "Hệ thống quản lý chuỗi siêu thị VinMart / Ngân hàng toàn quốc"]
        ]
      }
    },
    {
      id: "sec-6",
      title: "VII. Chốt 8 Kiến Thức Cốt Lõi Buổi Học",
      checkpointCards: [
        {
          title: "1. HỆ QTCSDL (DBMS) LÀ PHẦN MỀM",
          detail: "Phần mềm cung cấp phương tiện tạo lập, cập nhật, truy xuất, bảo mật và an toàn cho CSDL (MySQL, PostgreSQL, Oracle)."
        },
        {
          title: "2. CSDL (DỮ LIỆU) ≠ HỆ QTCSDL (PHẦN MỀM)",
          detail: "CSDL là bản thân dữ liệu lưu bên trong; DBMS là phần mềm quản trị dữ liệu đó. Không được gọi lẫn lộn!"
        },
        {
          title: "3. CẬP NHẬT (THAY ĐỔI) vs TRUY XUẤT (LẤY RA)",
          detail: "Cập nhật = Thêm / Sửa / Xóa dữ liệu (đổi nội dung); Truy xuất = Tìm kiếm / Lọc / Tra cứu / Thống kê (chỉ xem, không đổi dữ liệu)."
        },
        {
          title: "4. BẢO MẬT (ĐÚNG NGƯỜI) & AN TOÀN (SAO LƯU)",
          detail: "Bảo mật là kiểm soát quyền truy cập xem/sửa; An toàn là có bản sao lưu (Backup) để phục hồi (Restore) khi hỏng máy."
        },
        {
          title: "5. HỆ CSDL = CSDL + DBMS + ỨNG DỤNG",
          detail: "Hệ CSDL là tổng thể gồm dữ liệu + phần mềm quản trị + phần mềm ứng dụng phục vụ người dùng."
        },
        {
          title: "6. SƠ ĐỒ 4 TẦNG KINH ĐIỂN",
          detail: "Người dùng ➜ Phần mềm ứng dụng ➜ Hệ QTCSDL ➜ CSDL (Nhiều ứng dụng cùng dùng chung 1 CSDL)."
        },
        {
          title: "7. TẬP TRUNG vs PHÂN TÁN",
          detail: "Tập trung = Dữ liệu ở 1 hệ thống trung tâm; Phân tán = Dữ liệu chia thành các CSDL con trên nhiều máy qua mạng."
        },
        {
          title: "8. YẾU TỐ QUYẾT ĐỊNH LÀ VỊ TRÍ DỮ LIỆU",
          detail: "Người dùng ở nhiều tỉnh cùng truy cập vào 1 máy chủ thì vẫn là HỆ TẬP TRUNG. Phân tán không phải luôn tốt hơn."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|               BÀI 12: HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU VÀ HỆ CƠ SỞ DỮ LIỆU               |
+-----------------------------------------------------------------------------------+
                                         │
                                         ▼
                      HỆ QUẢN TRỊ CƠ SỞ DỮ LIỆU (DBMS)
             (Phần mềm trung gian: MySQL, PostgreSQL, Oracle, SQL Server)
                                         │
         ┌──────────────────┬────────────┴───────┬──────────────────┐
         ▼                  ▼                    ▼                  ▼
   1. ĐỊNH NGHĨA     2. CẬP NHẬT           3. TRUY XUẤT       4. BẢO MẬT &
      DỮ LIỆU           DỮ LIỆU               DỮ LIỆU            AN TOÀN
   (Tạo khung bảng,  (Thêm, Sửa, Xóa     (Tìm kiếm, Lọc,    (Phân quyền +
    đặt ràng buộc)    làm đổi dữ liệu)    thống kê xem dữ    Sao lưu Backup
                                          liệu, không đổi)   khôi phục)
                                         │
                                         ▼
                                HỆ CƠ SỞ DỮ LIỆU
              (CSDL + Hệ QTCSDL + Phần mềm ứng dụng + Con người)
                                         │
                      ┌──────────────────┴──────────────────┐
                      ▼                                     ▼
              HỆ CSDL TẬP TRUNG                     HỆ CSDL PHÂN TÁN
         (Dữ liệu ở 1 máy chủ duy nhất,         (Dữ liệu chia nhỏ thành
          quản lý đơn giản, dễ nhất quán,        các CSDL con ở nhiều nơi,
          dễ nghẽn cổ chai khi đông)             truy xuất gần nhưng khó đồng bộ)`
    }
  ],
  summaryQuiz: [
    {
      question: "Hệ quản trị cơ sở dữ liệu (DBMS) được hiểu chuẩn xác là gì?",
      options: [
        "A. Một tập hợp dữ liệu được ghi chép trên giấy.",
        "B. Phần mềm cung cấp các phương tiện để tạo lập, lưu trữ, cập nhật, truy xuất và bảo đảm an toàn cho CSDL.",
        "C. Một trang web tra cứu thông tin trên Internet.",
        "D. Một máy tính để bàn có cấu hình mạnh."
      ],
      answer: "B",
      explanation: "Hệ QTCSDL (DBMS) là phần mềm chuyên dụng quản lý CSDL, làm cầu nối giữa người dùng/ứng dụng và dữ liệu vật lý trên đĩa."
    },
    {
      question: "Thao tác nào sau đây thuộc nhóm chức năng CẬP NHẬT dữ liệu của Hệ QTCSDL?",
      options: [
        "A. Tìm kiếm học sinh lớp 11A có điểm Tin >= 8.",
        "B. Thống kê tổng doanh thu bán hàng trong tháng 8.",
        "C. Sửa số điện thoại liên lạc của một khách hàng.",
        "D. Lọc danh sách sản phẩm còn tồn kho dưới 5 chiếc."
      ],
      answer: "C",
      explanation: "Cập nhật dữ liệu là thao tác làm thay đổi nội dung dữ liệu bên trong CSDL (gồm Thêm, Sửa, Xóa). Sửa số điện thoại là thao tác Cập nhật."
    },
    {
      question: "Thao tác nào sau đây thuộc nhóm chức năng TRUY XUẤT dữ liệu của Hệ QTCSDL?",
      options: [
        "A. Xóa một học sinh đã chuyển trường khỏi danh sách lớp.",
        "B. Thêm một mặt hàng mới vào danh mục sản phẩm.",
        "C. Tìm kiếm các sản phẩm có giá bán dưới 100.000đ.",
        "D. Sửa lại họ tên bị viết sai chính tả của học sinh."
      ],
      answer: "C",
      explanation: "Truy xuất dữ liệu là việc lấy thông tin ra để xem, tìm kiếm, lọc hoặc thống kê mà KHÔNG làm thay đổi dữ liệu gốc trong CSDL."
    },
    {
      question: "Chức năng phân quyền: 'Học sinh chỉ được xem điểm của mình, không được sửa điểm; chỉ có giáo viên bộ môn mới được nhập điểm' thuộc nhóm chức năng nào của Hệ QTCSDL?",
      options: [
        "A. Nhóm chức năng định nghĩa dữ liệu",
        "B. Nhóm chức năng cập nhật dữ liệu",
        "C. Nhóm chức năng bảo mật CSDL",
        "D. Nhóm chức năng truy xuất dữ liệu"
      ],
      answer: "C",
      explanation: "Kiểm soát quyền truy cập, đảm bảo đúng người đúng thẩm quyền thuộc nhóm chức năng Bảo mật (Security) của Hệ QTCSDL."
    },
    {
      question: "Việc định kỳ mỗi đêm tự động tạo một bản sao lưu (Backup) toàn bộ CSDL của trường học nhằm mục đích chủ yếu gì?",
      options: [
        "A. Tăng tốc độ hiển thị của giao diện website.",
        "B. Bảo đảm tính an toàn dữ liệu, sẵn sàng phục hồi khi máy chủ gặp sự cố.",
        "C. Giảm dung lượng chiếm dụng của ổ đĩa cứng.",
        "D. Thay thế hoàn toàn cho giáo viên nhập điểm."
      ],
      answer: "B",
      explanation: "Sao lưu (Backup) là biện pháp cốt lõi bảo đảm tính An toàn dữ liệu, giúp khôi phục nguyên vẹn dữ liệu nếu máy tính bị lỗi, cháy nổ hay virus tấn công."
    },
    {
      question: "Tên gọi nào sau đây là một Hệ quản trị cơ sở dữ liệu (DBMS) phổ biến trên thế giới?",
      options: [
        "A. Microsoft Word",
        "B. PostgreSQL",
        "C. Windows 11",
        "D. Google Chrome"
      ],
      answer: "B",
      explanation: "PostgreSQL (cùng với MySQL, Oracle, MS SQL Server, MS Access) là các Hệ quản trị cơ sở dữ liệu (DBMS) chuyên nghiệp."
    },
    {
      question: "Một Hệ cơ sở dữ liệu (Database System) hoàn chỉnh được cấu thành từ những thành phần kỹ thuật nào?",
      options: [
        "A. Chỉ có duy nhất Cơ sở dữ liệu.",
        "B. Chỉ có Hệ quản trị CSDL.",
        "C. CSDL + Hệ QTCSDL + Các phần mềm ứng dụng CSDL.",
        "D. Chỉ có màn hình máy tính và chuột."
      ],
      answer: "C",
      explanation: "Hệ CSDL là hệ thống hoàn chỉnh gồm 3 thành phần: CSDL (dữ liệu) + Hệ QTCSDL (phần mềm quản trị) + Các phần mềm ứng dụng làm việc với CSDL (và người dùng vận hành)."
    },
    {
      question: "Hệ thống quản lý điểm thi của một tỉnh đặt CSDL tại duy nhất một máy chủ ở Sở GD&ĐT, các thí sinh từ tất cả các huyện, thị xã đều truy cập vào máy chủ này qua mạng Internet để tra cứu. Đây là ví dụ của mô hình nào?",
      options: [
        "A. Hệ CSDL tập trung",
        "B. Hệ CSDL phân tán",
        "C. Hệ CSDL cá nhân",
        "D. Hệ tệp văn bản thô"
      ],
      answer: "A",
      explanation: "Dữ liệu được lưu trữ tập trung tại một máy chủ duy nhất của Sở GD&ĐT, dù người dùng truy cập từ nhiều địa điểm khác nhau thì đây vẫn là Hệ CSDL tập trung."
    },
    {
      question: "Hệ thống CSDL của một chuỗi siêu thị bán lẻ được chia thành các CSDL thành phần đặt tại 3 chi nhánh Hà Nội, Đà Nẵng và TP.HCM, các CSDL này kết nối và phối hợp dữ liệu với nhau qua mạng máy tính. Đây là:",
      options: [
        "A. Hệ CSDL tập trung",
        "B. Hệ CSDL phân tán",
        "C. Hệ CSDL cá nhân",
        "D. Hệ thống bảng tính Excel"
      ],
      answer: "B",
      explanation: "Dữ liệu được phân chia và lưu trữ trên nhiều máy tính ở các địa điểm địa lý khác nhau thành các CSDL con có liên kết qua mạng, đây chính là Hệ CSDL phân tán."
    },
    {
      question: "Một trong những khó khăn, thách thức lớn nhất khi xây dựng và vận hành Hệ CSDL phân tán là gì?",
      options: [
        "A. Không thể có nhiều người cùng sử dụng.",
        "B. Không thể tìm kiếm được dữ liệu.",
        "C. Việc quản lý, bảo mật và duy trì tính nhất quán, đồng bộ dữ liệu giữa các địa điểm rất phức tạp.",
        "D. Không thể kết nối được mạng Internet."
      ],
      answer: "C",
      explanation: "Khi dữ liệu nằm rải rác ở nhiều nơi, việc quản trị, bảo mật và đặc biệt là giữ cho dữ liệu luôn đồng bộ, nhất quán (ví dụ đồng bộ giá bán) là bài toán kỹ thuật rất phức tạp."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Phân Biệt Ba Khái Niệm CSDL, Hệ QTCSDL (DBMS) và Hệ CSDL",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Cho các mục sau: (1) Bảng điểm học sinh lớp 11; (2) Phần mềm MySQL; (3) Website VnEdu + Hệ QTCSDL MySQL + CSDL điểm học sinh toàn trường; (4) Danh sách 10.000 khách hàng mua vé máy bay; (5) Hệ QTCSDL PostgreSQL. Em hãy phân loại từng mục vào đúng 3 khái niệm: CSDL, Hệ QTCSDL hay Hệ CSDL và nêu sự khác nhau cốt lõi giữa CSDL và Hệ QTCSDL.",
      method: "⚡ Phương pháp phân loại chuẩn xác:\n• CSDL = Bản thân dữ liệu lưu trữ.\n• Hệ QTCSDL = Phần mềm đứng ra quản lý dữ liệu đó.\n• Hệ CSDL = Toàn bộ hệ thống kết hợp (CSDL + DBMS + Ứng dụng).",
      solution: "✅ Phân loại chính xác 100%:\n• Cơ sở dữ liệu (CSDL): (1) Bảng điểm học sinh lớp 11; (4) Danh sách 10.000 khách hàng mua vé máy bay.\n• Hệ quản trị CSDL (DBMS): (2) Phần mềm MySQL; (5) Hệ QTCSDL PostgreSQL.\n• Hệ cơ sở dữ liệu: (3) Website VnEdu + Hệ QTCSDL MySQL + CSDL điểm học sinh toàn trường.\n\nSự khác nhau cốt lõi giữa CSDL và Hệ QTCSDL:\n- CSDL là DỮ LIỆU (nội dung lưu trữ trên đĩa).\n- Hệ QTCSDL là PHẦN MỀM (công cụ điều khiển, thao tác, bảo vệ dữ liệu đó). Không có CSDL thì DBMS không có gì để quản lý; không có DBMS thì người dùng rất khó khai thác CSDL."
    },
    {
      title: "Dạng 2: Phân Loại 4 Nhóm Chức Năng Cốt Lõi Của Hệ QTCSDL",
      tag: "Nhận biết & Thông hiểu",
      sampleQuestion: "Một quản trị viên CSDL thực hiện 5 thao tác sau. Hãy chỉ ra mỗi thao tác thuộc nhóm chức năng nào của Hệ QTCSDL:\n(a) Tạo bảng mới 'LopHoc' gồm 3 cột: MaLop, TenLop, GiaoVienChuNhiem.\n(b) Sửa địa chỉ nhà của học sinh Nguyễn Văn An từ 'Số 10 Hà Nội' thành 'Số 25 Đà Nẵng'.\n(c) Lập danh sách các học sinh có điểm trung bình học kỳ từ 9.0 trở lên để xét học bổng.\n(d) Thiết lập quy định: Chỉ giáo viên bộ môn mới có quyền nhập điểm thi, học sinh chỉ được xem.\n(e) Xuất bản sao lưu dữ liệu toàn trường vào ổ cứng ngoài vào lúc 23:00 hàng ngày.",
      method: "⚡ Quy tắc phân loại 4 nhóm chức năng:\n• Thay đổi khung/cấu trúc/ràng buộc ➜ Định nghĩa dữ liệu.\n• Thay đổi dữ liệu bên trong (Thêm/Sửa/Xóa) ➜ Cập nhật dữ liệu.\n• Lấy dữ liệu ra xem (Tìm/Lọc/Thống kê) ➜ Truy xuất dữ liệu.\n• Phân quyền ➜ Bảo mật | Sao lưu phục hồi ➜ An toàn dữ liệu.",
      solution: "✅ Đáp án chuẩn mực:\n• (a) Tạo bảng mới 'LopHoc' ➜ Nhóm chức năng ĐỊNH NGHĨA DỮ LIỆU (Data Definition).\n• (b) Sửa địa chỉ học sinh ➜ Nhóm chức năng CẬP NHẬT DỮ LIỆU (Data Update - làm thay đổi nội dung dữ liệu).\n• (c) Lập danh sách học sinh giỏi ➜ Nhóm chức năng TRUY XUẤT DỮ LIỆU (Data Retrieval - lọc thông tin theo điều kiện, không đổi dữ liệu gốc).\n• (d) Phân quyền giáo viên và học sinh ➜ Nhóm chức năng BẢO MẬT CSDL (Security - kiểm soát quyền truy cập).\n• (e) Xuất bản sao lưu 23:00 ➜ Nhóm chức năng AN TOÀN CSDL (Safety - sao lưu và phục hồi dữ liệu)."
    },
    {
      title: "Dạng 3: Vẽ & Phân Tích Sơ Đồ Kiến Trúc 4 Tầng Của Hệ CSDL",
      tag: "Vận dụng Lý thuyết Hệ thống",
      sampleQuestion: "Trình bày sơ đồ kiến trúc 4 tầng của một Hệ CSDL hoàn chỉnh. Hãy mô tả dòng luồng dữ liệu khi một phụ huynh dùng điện thoại thông minh tra cứu kết quả học tập của con trên ứng dụng VnEdu.",
      method: "⚡ Sơ đồ 4 tầng: Người dùng ➜ Phần mềm ứng dụng ➜ Hệ QTCSDL ➜ CSDL.",
      solution: "✅ Sơ đồ 4 tầng & Dòng luồng xử lý chi tiết:\n1. Sơ đồ kiến trúc:\n   NGƯỜI DÙNG\n       │\n       ▼\n   PHẦN MỀM ỨNG DỤNG\n       │\n       ▼\n   HỆ QUẢN TRỊ CSDL (DBMS)\n       │\n       ▼\n   CƠ SỞ DỮ LIỆU (CSDL)\n\n2. Dòng luồng xử lý tra cứu điểm của phụ huynh:\n   • Bước 1: Phụ huynh (Người dùng) mở ứng dụng VnEdu trên điện thoại, nhập mã học sinh và bấm 'Xem bảng điểm'.\n   • Bước 2: Ứng dụng VnEdu (Phần mềm ứng dụng) tiếp nhận yêu cầu, đóng gói thành câu lệnh truy vấn gửi qua mạng đến Hệ QTCSDL (MySQL/PostgreSQL) đặt tại máy chủ trung tâm.\n   • Bước 3: Hệ QTCSDL kiểm tra tính hợp lệ và quyền hạn của tài khoản phụ huynh, sau đó tiến hành tìm kiếm và trích xuất dữ liệu điểm của học sinh đó từ Cơ sở dữ liệu (CSDL) lưu trên đĩa cứng.\n   • Bước 4: Hệ QTCSDL trả dữ liệu về cho ứng dụng VnEdu. Ứng dụng định dạng giao diện đẹp mắt và hiển thị bảng điểm ra màn hình cho phụ huynh xem."
    },
    {
      title: "Dạng 4: So Sánh Hệ CSDL Tập Trung vs Hệ CSDL Phân Tán",
      tag: "Thông hiểu & Đánh giá Kiến trúc",
      sampleQuestion: "Một chuỗi cửa hàng tiện lợi ban đầu chỉ có 1 cửa hàng ở Hà Nội, sau 5 năm đã phát triển thành 50 cửa hàng trên 10 tỉnh thành. Ban giám đốc phân vân giữa việc giữ mô hình Hệ CSDL tập trung hay chuyển sang Hệ CSDL phân tán. Em hãy so sánh ưu - nhược điểm của 2 mô hình này để tư vấn cho công ty.",
      method: "⚡ So sánh dựa trên: Vị trí dữ liệu, Quản lý, Nhất quán, Độ phụ thuộc trung tâm và Khả năng mở rộng.",
      solution: "✅ Bảng tư vấn chuyên sâu cho doanh nghiệp:\n1. Phương án Hệ CSDL tập trung (Tất cả 50 cửa hàng kết nối về 1 máy chủ tại Hà Nội):\n   • Ưu điểm: Quản lý rất đơn giản; dữ liệu giá bán và tồn kho được cập nhật đồng bộ tức thời, không lo mâu thuẫn số liệu; chi phí đầu tư máy chủ rẻ hơn.\n   • Nhược điểm: Nếu đường truyền mạng Internet từ tỉnh về Hà Nội bị đứt hoặc máy chủ trung tâm gặp sự cố, các cửa hàng ở xa sẽ không thể quét mã thanh toán được; máy chủ dễ bị quá tải vào giờ cao điểm.\n2. Phương án Hệ CSDL phân tán (Mỗi tỉnh/cửa hàng có CSDL con riêng, phối hợp qua mạng):\n   • Ưu điểm: Tốc độ quét mã thanh toán tại quầy cực nhanh vì dữ liệu nằm ngay tại chỗ; dù mất mạng Internet với trụ sở Hà Nội thì cửa hàng vẫn bán hàng bình thường bằng CSDL cục bộ; mở thêm chi nhánh mới rất linh hoạt.\n   • Nhược điểm: Chi phí đầu tư thiết bị và kỹ thuật viên rất tốn kém; việc đồng bộ dữ liệu doanh thu và điều chỉnh giá bán giữa 50 cửa hàng cực kỳ phức tạp, dễ xảy ra chênh lệch số liệu nếu phần mềm xử lý không tốt.\n➜ Tư vấn: Giai đoạn đầu nên dùng Hệ CSDL tập trung chất lượng cao (thuê máy chủ đám mây Cloud). Khi quy mô quá lớn mới chuyển dần sang kiến trúc phân tán."
    },
    {
      title: "Dạng 5: Phản Biện Hiểu Lầm Về Hệ CSDL Phân Tán & Tình Huống Thực Tế",
      tag: "Vận dụng Cao & Tránh Bẫy Đề thi",
      sampleQuestion: "Bạn Nam phát biểu: 'Hệ thống CSDL tuyển sinh lớp 10 của thành phố có hơn 100.000 học sinh từ hàng trăm trường THCS cùng truy cập để nộp hồ sơ, chứng tỏ đây bắt buộc phải là một Hệ CSDL phân tán, và mô hình phân tán lúc nào cũng tốt hơn mô hình tập trung'. Em hãy chỉ ra 2 điểm sai trong phát biểu của Nam và giải thích cặn kẽ.",
      method: "⚡ Phản biện 2 sai lầm:\n1. Nhiều người truy cập từ xa ≠ CSDL phân tán (yếu tố quyết định là dữ liệu lưu ở đâu).\n2. Phân tán không phải luôn tốt hơn (tốn kém, phức tạp, khó giữ nhất quán).",
      solution: "✅ Phản biện sắc bén 2 điểm sai của Nam:\n1. Điểm sai thứ nhất: 'Có 100.000 người từ nhiều nơi truy cập thì bắt buộc là CSDL phân tán'.\n   • Giải thích: Số lượng người dùng và vị trí của người dùng KHÔNG quyết định mô hình CSDL. Nếu toàn bộ dữ liệu hồ sơ tuyển sinh được đặt tập trung trên một cụm máy chủ tại Sở GD&ĐT thì đó hoàn toàn là HỆ CSDL TẬP TRUNG. Yếu tố quyết định phân tán hay tập trung là 'Dữ liệu được lưu trữ ở đâu' (tại 1 trung tâm hay chia nhỏ thành các CSDL con trên nhiều máy độc lập).\n2. Điểm sai thứ hai: 'Mô hình phân tán lúc nào cũng tốt hơn mô hình tập trung'.\n   • Giải thích: Trong bài toán tuyển sinh lớp 10, tính nhất quán và công bằng về chỉ tiêu xét tuyển là quan trọng nhất. Nếu dùng CSDL phân tán, dữ liệu bị phân mảnh ở nhiều nơi, việc đồng bộ điểm chuẩn và số lượng hồ sơ rất dễ bị trễ hoặc sai lệch. Mô hình tập trung giúp dữ liệu luôn thống nhất 100%, dễ sao lưu và bảo mật hơn rất nhiều."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Phân Tích 4 Thành Phần Của Một Hệ CSDL Thực Tế",
      tag: "Khảo sát Thực tiễn",
      problem: "Chọn một trong các hệ thống quen thuộc sau: (1) Website bán hàng Shopee/Tiki, (2) Ứng dụng ngân hàng số (Mobile Banking), (3) Ứng dụng quản lý trường học VnEdu, (4) Website tra cứu điểm thi THPT.",
      tasks: [
        "Nhiệm vụ 1: Xác định CSDL của hệ thống đó lưu trữ những đối tượng dữ liệu cụ thể nào?",
        "Nhiệm vụ 2: Phần mềm ứng dụng của hệ thống đó là gì và cung cấp giao diện cho ai?",
        "Nhiệm vụ 3: Hệ QTCSDL (DBMS) đóng vai trò gì ở tầng giữa?",
        "Nhiệm vụ 4: Kể tên ít nhất 2 nhóm người dùng tham gia vào hệ thống và nêu rõ quyền hạn của họ."
      ],
      requirements: "Trình bày mạch lạc theo đúng sơ đồ kiến trúc 4 tầng.",
      hint: "Bám sát Mục 34, 35, 36, 37 trong bài học.",
      solution: `Gợi ý giải mẫu cho Ứng dụng ngân hàng số (Mobile Banking):
1. Cơ sở dữ liệu (CSDL): Lưu thông tin Khách hàng (Họ tên, CCCD, SĐT), Tài khoản (Số tài khoản, Số dư), Lịch sử giao dịch (Mã GD, Số tiền, Thời gian, Người nhận).
2. Phần mềm ứng dụng: App ngân hàng (Vietcombank/MBBank...) cài trên smartphone, cung cấp giao diện nút bấm, nhập mã PIN, quét mã QR cho khách hàng.
3. Hệ QTCSDL (DBMS - như Oracle Database): Tiếp nhận lệnh chuyển tiền từ App, kiểm tra số dư và mã OTP, thực hiện trừ tiền tài khoản gửi và cộng tiền tài khoản nhận, ghi nhật ký giao dịch và bảo vệ an toàn dữ liệu.
4. 2 Nhóm người dùng:\n• Khách hàng (Người dùng cuối): Chỉ xem số dư và chuyển tiền trong tài khoản của mình.\n• Quản trị viên hệ thống (DBA): Cài đặt máy chủ, sao lưu dữ liệu toàn ngân hàng, cấp quyền truy cập.`
    },
    {
      title: "Bài tập 2: Phân Loại 6 Thao Tác Vào Đúng Nhóm Chức Năng Của DBMS",
      tag: "Nhận biết Chức năng",
      problem: "Đọc kỹ 6 thao tác quản lý dữ liệu sau và chỉ rõ mỗi thao tác thuộc nhóm chức năng nào của Hệ QTCSDL:",
      tasks: [
        "1. Khai báo thêm trường 'DiemUuTien' (kiểu số thực) vào bảng ThiSinh.",
        "2. Thêm một bản ghi học sinh mới trúng tuyển vào danh sách lớp 11A.",
        "3. Xóa một đơn hàng bị đặt nhầm ra khỏi hệ thống.",
        "4. Tìm kiếm các bạn đọc đang mượn sách quá hạn từ 7 ngày trở lên.",
        "5. Cấu hình để nhân viên bán hàng chỉ được xem giá bán, không được xem giá nhập kho.",
        "6. Cài đặt lịch tự động nén và sao lưu dữ liệu CSDL vào ổ cứng ngoài mỗi ngày lúc 24:00."
      ],
      requirements: "Gọi đúng tên nhóm chức năng kỹ thuật của DBMS.",
      hint: "Bám sát Mục 30 và 86 trong bài học.",
      solution: `Đáp án chi tiết bài tập 2:
1. Khai báo thêm trường 'DiemUuTien' ➜ Nhóm chức năng ĐỊNH NGHĨA DỮ LIỆU (thay đổi cấu trúc khung bảng).
2. Thêm bản ghi học sinh mới ➜ Nhóm chức năng CẬP NHẬT DỮ LIỆU (thao tác Thêm - Insert).
3. Xóa đơn hàng bị đặt nhầm ➜ Nhóm chức năng CẬP NHẬT DỮ LIỆU (thao tác Xóa - Delete).
4. Tìm bạn đọc mượn sách quá hạn ➜ Nhóm chức năng TRUY XUẤT DỮ LIỆU (tìm kiếm/lọc theo điều kiện).
5. Phân quyền xem giá bán, giấu giá nhập ➜ Nhóm chức năng BẢO MẬT CSDL (kiểm soát quyền truy cập).
6. Tự động sao lưu dữ liệu 24:00 ➜ Nhóm chức năng AN TOÀN CSDL (sao lưu Backup và phục hồi).`
    },
    {
      title: "Bài tập 3: Phân Biệt Hệ CSDL Tập Trung Hay Phân Tán",
      tag: "Vận dụng Mô hình",
      problem: "Xác định mô hình (Hệ CSDL tập trung hay Hệ CSDL phân tán) cho 3 tình huống sau và giải thích ngắn gọn nguyên nhân:",
      tasks: [
        "Hệ thống A: Trường Đại học Bách Khoa có 500 máy tính tại các phòng máy thực hành cùng truy cập vào một CSDL duy nhất đặt tại Trung tâm Máy tính của trường.",
        "Hệ thống B: Một công ty vận tải có 20 trạm điều hành xe tại 20 tỉnh thành; mỗi trạm sở hữu một CSDL thành phần quản lý xe tại địa phương, các CSDL này kết nối và chia sẻ lịch trình cho nhau qua Internet.",
        "Hệ thống C: Người dân tại Hà Nội, Huế, TP.HCM và Cà Mau cùng ngồi tại nhà dùng điện thoại tra cứu thông tin Căn cước công dân trên Cổng Dịch vụ công Quốc gia (CSDL đặt tại Trung tâm dữ liệu Quốc gia ở Hà Nội)."
      ],
      requirements: "Chỉ rõ 'Dữ liệu được lưu ở đâu' để lập luận.",
      hint: "Bám sát Mục 56, 57 và 87 trong bài học.",
      solution: `Đáp án chi tiết bài tập 3:
• Hệ thống A ➜ HỆ CSDL TẬP TRUNG. Vì toàn bộ dữ liệu chỉ nằm tại một hệ thống máy tính trung tâm duy nhất của trường, các máy phòng thực hành chỉ đóng vai trò là máy khách kết nối về.
• Hệ thống B ➜ HỆ CSDL PHÂN TÁN. Vì dữ liệu được chia nhỏ thành các CSDL con độc lập đặt tại 20 tỉnh thành khác nhau và phối hợp với nhau qua mạng.
• Hệ thống C ➜ HỆ CSDL TẬP TRUNG. Dù người dùng ở khắp mọi miền đất nước cùng tra cứu, nhưng toàn bộ dữ liệu gốc chỉ được lưu trữ tại một Trung tâm dữ liệu Quốc gia duy nhất ở Hà Nội. Nhớ kỹ: Người dùng ở nhiều nơi KHÔNG ĐỒNG NGHĨA dữ liệu bị phân tán!`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b12-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Phân Loại: CSDL Hay Hệ QTCSDL?",
      duration: "2 phút",
      type: "exercise",
      description: "Phân loại 4 mục vào đúng nhóm CSDL (dữ liệu) hoặc Hệ QTCSDL (phần mềm quản lý).",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Phân biệt chính xác giữa dữ liệu và phần mềm quản trị.",
        requirements: [
          "Phân loại 4 đối tượng sau vào nhóm 'CSDL' hoặc 'Hệ QTCSDL':\n(A) Phần mềm MySQL.\n(B) Danh sách 50.000 khách hàng và hóa đơn của siêu thị.\n(C) Phần mềm PostgreSQL.\n(D) Dữ liệu điểm kiểm tra của học sinh toàn trường lưu trên đĩa cứng."
        ],
        qaList: [
          {
            q: "Kết quả phân loại 4 đối tượng?",
            a: "Đáp án:\n• (A) MySQL ➜ Hệ QTCSDL (phần mềm quản trị dữ liệu).\n• (B) Danh sách khách hàng và hóa đơn ➜ CSDL (bản thân dữ liệu được tổ chức).\n• (C) PostgreSQL ➜ Hệ QTCSDL (phần mềm quản trị dữ liệu).\n• (D) Dữ liệu điểm kiểm tra ➜ CSDL (dữ liệu lưu trữ trên đĩa)."
          }
        ]
      }
    },
    {
      id: "practice-b12-2",
      badge: "Bài 2 – 2 phút",
      title: "Bài 2 – Xác Định Chức Năng: Thêm Cột Mới Vào CSDL",
      duration: "2 phút",
      type: "exercise",
      description: "Nhận diện nhóm chức năng khi quản trị viên khai báo thêm trường 'Email học sinh'.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Nắm vững chức năng định nghĩa dữ liệu.",
        requirements: [
          "Tình huống: Người quản trị CSDL của nhà trường thực hiện thao tác: Tạo thêm một cột mới có tên 'Email' với kiểu dữ liệu chuỗi ký tự vào bảng HocSinh.",
          "Câu hỏi: Thao tác này thuộc nhóm chức năng nào của Hệ QTCSDL?"
        ],
        qaList: [
          {
            q: "Thao tác thuộc nhóm chức năng nào?",
            a: "Đáp án: Nhóm chức năng ĐỊNH NGHĨA DỮ LIỆU (Data Definition) — vì thao tác này làm thay đổi 'khung/cấu trúc' của bảng dữ liệu, chưa tác động đến nội dung dữ liệu của từng học sinh."
          }
        ]
      }
    },
    {
      id: "practice-b12-3",
      badge: "Bài 3 – 2 phút",
      title: "Bài 3 – Xác Định Chức Năng: Sửa Số Điện Thoại Học Sinh",
      duration: "2 phút",
      type: "exercise",
      description: "Nhận diện nhóm chức năng khi sửa đổi thông tin của một bản ghi cụ thể.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Phân biệt thao tác cập nhật dữ liệu.",
        requirements: [
          "Tình huống: Giáo viên chủ nhiệm vào hệ thống để cập nhật lại số điện thoại mới của phụ huynh bạn Nguyễn Văn An.",
          "Câu hỏi: Thao tác này thuộc nhóm chức năng nào của Hệ QTCSDL?"
        ],
        qaList: [
          {
            q: "Thao tác thuộc nhóm chức năng nào?",
            a: "Đáp án: Nhóm chức năng CẬP NHẬT DỮ LIỆU (Data Update - cụ thể là thao tác Sửa/Update) — vì hành động này làm THAY ĐỔI nội dung dữ liệu bên trong CSDL."
          }
        ]
      }
    },
    {
      id: "practice-b12-4",
      badge: "Bài 4 – 2 phút",
      title: "Bài 4 – Xác Định Chức Năng: Lọc Học Sinh Có Điểm Tin > 9",
      duration: "2 phút",
      type: "exercise",
      description: "Nhận diện nhóm chức năng khi tìm kiếm và trích xuất dữ liệu theo điều kiện.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Nắm vững thao tác truy xuất dữ liệu.",
        requirements: [
          "Tình huống: Thầy giáo dạy Tin học mở phần mềm để tìm kiếm tất cả các học sinh khối 11 có điểm Tin học lớn hơn 9.0 để chọn vào đội tuyển thi học sinh giỏi.",
          "Câu hỏi: Thao tác này thuộc nhóm chức năng nào của Hệ QTCSDL?"
        ],
        qaList: [
          {
            q: "Thao tác thuộc nhóm chức năng nào?",
            a: "Đáp án: Nhóm chức năng TRUY XUẤT DỮ LIỆU (Data Retrieval) — vì thao tác này chỉ LẤY dữ liệu ra để xem và lọc theo điều kiện, hoàn toàn không làm thay đổi hay xóa dữ liệu gốc trong CSDL."
          }
        ]
      }
    },
    {
      id: "practice-b12-5",
      badge: "Bài 5 – 2 phút",
      title: "Bài 5 – Xác Định Chức Năng: Phân Quyền Xem Thông Tin",
      duration: "2 phút",
      type: "exercise",
      description: "Nhận diện nhóm chức năng kiểm soát quyền truy cập của người dùng.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nhận diện chức năng bảo mật CSDL.",
        requirements: [
          "Tình huống: Hệ thống CSDL của nhà trường được cấu hình sao cho: Chỉ có giáo viên chủ nhiệm mới được xem số điện thoại của phụ huynh lớp mình; học sinh khác không thể xem được.",
          "Câu hỏi: Cấu hình này thể hiện nhóm chức năng nào của Hệ QTCSDL?"
        ],
        qaList: [
          {
            q: "Cấu hình thể hiện nhóm chức năng nào?",
            a: "Đáp án: Nhóm chức năng BẢO MẬT CSDL (Security) — kiểm soát quyền truy cập chi tiết, xác thực đúng người đúng quyền, ngăn chặn xem hoặc can thiệp dữ liệu trái phép."
          }
        ]
      }
    },
    {
      id: "practice-b12-6",
      badge: "Bài 6 – 2 phút",
      title: "Bài 6 – Xác Định Chức Năng: Tự Động Tạo Bản Sao Lưu",
      duration: "2 phút",
      type: "exercise",
      description: "Nhận diện chức năng an toàn và sao lưu dự phòng của DBMS.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nắm vững vai trò của an toàn dữ liệu.",
        requirements: [
          "Tình huống: Quản trị viên thiết lập cho Hệ QTCSDL cứ vào đúng 23:00 mỗi đêm sẽ tự động xuất một bản sao lưu (Backup) toàn bộ CSDL ra ổ cứng thứ hai.",
          "Câu hỏi: Thao tác này thuộc nhóm chức năng nào và nhằm mục đích gì?"
        ],
        qaList: [
          {
            q: "Nhóm chức năng và mục đích?",
            a: "Đáp án:\n• Nhóm chức năng AN TOÀN CSDL (Safety).\n• Mục đích: Đảm bảo dữ liệu không bị mất mát khi máy chủ gặp sự cố cháy nổ, hỏng ổ cứng hoặc nhiễm mã độc; cho phép phục hồi (Restore) lại trạng thái hoạt động bình thường nhanh chóng."
          }
        ]
      }
    },
    {
      id: "practice-b12-7",
      badge: "Bài 7 – 3 phút",
      title: "Bài 7 – Phân Biệt CSDL, Hệ QTCSDL Và Hệ CSDL",
      duration: "3 phút",
      type: "exercise",
      description: "Ghép 3 thành phần thực tế vào đúng 3 khái niệm kỹ thuật cốt lõi.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Khắc sâu sự khác biệt giữa 3 khái niệm nền tảng.",
        requirements: [
          "Cho 3 thành phần sau trong một thư viện điện tử:\n1. Phần mềm PostgreSQL.\n2. Tập hợp dữ liệu về sách, bạn đọc và các phiếu mượn trả lưu trên máy chủ.\n3. Hệ thống gồm: Website tra cứu sách trực tuyến + Phần mềm PostgreSQL + Dữ liệu thư viện.",
          "Nhiệm vụ: Hãy ghép từng thành phần với đúng khái niệm: CSDL, Hệ QTCSDL hay Hệ CSDL."
        ],
        qaList: [
          {
            q: "Kết quả ghép nối 3 thành phần?",
            a: "Đáp án chính xác:\n• Thành phần 1 (PostgreSQL) ➜ Hệ QTCSDL (DBMS).\n• Thành phần 2 (Dữ liệu sách, bạn đọc, mượn trả) ➜ CSDL (Database).\n• Thành phần 3 (Website + PostgreSQL + Dữ liệu) ➜ Hệ CSDL (Database System)."
          }
        ]
      }
    },
    {
      id: "practice-b12-8",
      badge: "Bài 8 – 2 phút",
      title: "Bài 8 – Nhận Diện: Hệ CSDL Tập Trung Hay Phân Tán?",
      duration: "2 phút",
      type: "exercise",
      description: "Phân tích mô hình máy chủ trường học phục vụ nhiều phòng máy tính.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Phân biệt bản chất của hệ CSDL tập trung.",
        requirements: [
          "Tình huống: Một trường THPT có 1.500 học sinh. Nhà trường đặt toàn bộ dữ liệu điểm trên một máy chủ duy nhất ở phòng máy chủ. Các máy tính ở phòng Hiệu trưởng, phòng Giám thị, phòng Giáo viên và các phòng học đều kết nối qua mạng LAN vào máy chủ này.",
          "Câu hỏi: Đây là Hệ CSDL tập trung hay Hệ CSDL phân tán? Giải thích vì sao."
        ],
        qaList: [
          {
            q: "Tập trung hay phân tán và giải thích?",
            a: "Đáp án: Đây là HỆ CSDL TẬP TRUNG.\n• Giải thích: Toàn bộ dữ liệu CSDL được lưu trữ tại duy nhất MỘT máy tính trung tâm (máy chủ của trường). Dù có rất nhiều máy tính khác nhau truy cập vào qua mạng LAN, nhưng dữ liệu không hề bị chia nhỏ lưu ở các máy đó."
          }
        ]
      }
    },
    {
      id: "practice-b12-9",
      badge: "Bài 9 – 2 phút",
      title: "Bài 9 – Nhận Diện: CSDL Chuỗi Siêu Thị Ba Miền",
      duration: "2 phút",
      type: "exercise",
      description: "Phân tích mô hình dữ liệu lưu trữ tại nhiều chi nhánh địa lý.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 2 phút. Nắm vững bản chất của hệ CSDL phân tán.",
        requirements: [
          "Tình huống: Một hệ thống siêu thị điện máy có 3 chi nhánh tại Hà Nội, Đà Nẵng và TP.HCM. Mỗi chi nhánh sở hữu một máy chủ riêng lưu CSDL thành phần phục vụ bán hàng và quản lý kho tại chi nhánh đó. Hàng ngày các máy chủ này kết nối và chia sẻ số liệu với nhau qua mạng Internet.",
          "Câu hỏi: Đây là mô hình hệ CSDL nào? Nêu 1 ưu điểm lớn nhất của mô hình này."
        ],
        qaList: [
          {
            q: "Mô hình và ưu điểm lớn nhất?",
            a: "Đáp án:\n• Đây là HỆ CSDL PHÂN TÁN (Distributed Database System).\n• Ưu điểm lớn nhất: Dữ liệu đặt gần người dùng địa phương, giúp thao tác bán hàng và xuất kho tại mỗi chi nhánh diễn ra cực kỳ nhanh chóng và nếu đường truyền mạng giữa các tỉnh bị đứt thì mỗi chi nhánh vẫn hoạt động bình thường với CSDL cục bộ."
          }
        ]
      }
    },
    {
      id: "practice-b12-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử Thách Tổng Hợp: Phân Tích Hệ Thống Thực Tế & Thách Thức Nhất Quán",
      duration: "6 phút",
      type: "exercise",
      description: "Phân tích kiến trúc 4 tầng của một hệ thống quản lý và giải thích thách thức đồng bộ dữ liệu trong hệ phân tán.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Đánh giá toàn diện năng lực hiểu sâu kiến trúc CSDL.",
        requirements: [
          "Tình huống: Một công ty thời trang có hệ thống gồm:\n- Ứng dụng bán hàng POS tại quầy + Website mua hàng trực tuyến.\n- Hệ QTCSDL MySQL quản lý dữ liệu.\n- CSDL lưu trữ thông tin sản phẩm, đơn hàng và kho hàng.\n\nNhiệm vụ học sinh:\n1. Vẽ sơ đồ luồng dữ liệu 4 tầng của hệ thống trên.\n2. Nếu công ty mở 30 chi nhánh và chuyển sang Hệ CSDL phân tán, tại sao việc 'duy trì tính nhất quán của giá sản phẩm' lại trở thành một thách thức kỹ thuật rất lớn?"
        ],
        submissionHint: "Hướng dẫn giải chi tiết:\n1. Sơ đồ 4 tầng:\n   Người mua / Thu ngân (Người dùng) ➜ Website / App POS (Phần mềm ứng dụng) ➜ MySQL (Hệ QTCSDL) ➜ CSDL sản phẩm/đơn hàng (CSDL vật lý trên đĩa).\n\n2. Thách thức duy trì tính nhất quán trong hệ phân tán:\n   • Khi dữ liệu bị chia nhỏ và lưu tại 30 máy chủ ở 30 chi nhánh, khi công ty ban hành đợt giảm giá mới (ví dụ áo khoác giảm từ 500k xuống 400k), lệnh cập nhật giá phải truyền qua mạng đến cả 30 máy chủ.\n   • Nếu có 5 chi nhánh bị chập chờn mạng Internet chưa nhận được lệnh cập nhật, khách hàng đến 5 chi nhánh đó vẫn bị tính giá 500k, trong khi 25 chi nhánh kia bán giá 400k ➜ Xảy ra hiện tượng MÂU THUẪN, MẤT TÍNH NHẤT QUÁN dữ liệu trên toàn hệ thống công ty!\n   • Việc đồng bộ dữ liệu tức thời giữa 30 nút qua mạng là bài toán kỹ thuật phức tạp hơn nhiều so với việc chỉ sửa giá tại 1 máy chủ trung tâm duy nhất.",
        scoring: [
          { level: "Đạt (7-8đ)", desc: "Trình bày đúng sơ đồ 4 tầng và nhận biết được khó khăn khi dữ liệu lưu ở nhiều nơi." },
          { level: "Khá (9đ)", desc: "Phân tích rõ dòng luồng dữ liệu và giải thích đúng ví dụ mâu thuẫn giá giữa các chi nhánh." },
          { level: "Xuất sắc (10đ)", desc: "Lập luận sắc bén, hiểu trọn vẹn sự đánh đổi giữa tính sẵn sàng địa phương và độ phức tạp đồng bộ nhất quán trong kiến trúc phân tán." }
        ]
      }
    },
    {
      id: "practice-b12-minitest",
      badge: "Mini Test – 7 phút",
      title: "Mini Test Đánh Giá Năng Lực Cuối Buổi (10 Câu Trắc Nghiệm)",
      duration: "7 phút",
      type: "quiz",
      description: "10 câu hỏi trắc nghiệm tương tác kiểm tra độ hiểu sâu các khái niệm Hệ QTCSDL, Hệ CSDL, Tập trung và Phân tán của Bài 12.",
      content: {
        objective: "Đánh giá mức độ tiếp thu 3 trọng tâm cốt lõi sau 100 phút học tập.",
        questions: [
          {
            q: "Câu 1: Hệ quản trị cơ sở dữ liệu (DBMS) là:",
            options: [
              "A. Một tập hợp dữ liệu được ghi chép trên giấy",
              "B. Phần mềm cung cấp các phương tiện để quản lý và khai thác CSDL",
              "C. Một trang web tra cứu thông tin",
              "D. Một máy tính để bàn"
            ],
            answer: "B",
            explanation: "Hệ QTCSDL là phần mềm quản lý và khai thác CSDL."
          },
          {
            q: "Câu 2: Thao tác nào sau đây thuộc nhóm chức năng CẬP NHẬT dữ liệu?",
            options: [
              "A. Tìm học sinh lớp 11A",
              "B. Xem danh sách sản phẩm",
              "C. Sửa số điện thoại khách hàng",
              "D. Thống kê doanh thu tháng"
            ],
            answer: "C",
            explanation: "Sửa số điện thoại làm thay đổi dữ liệu bên trong CSDL, thuộc nhóm Cập nhật."
          },
          {
            q: "Câu 3: Thao tác nào sau đây thuộc nhóm chức năng TRUY XUẤT dữ liệu?",
            options: [
              "A. Xóa học sinh đã chuyển trường",
              "B. Thêm sản phẩm mới vào kho",
              "C. Tìm các sản phẩm còn dưới 5 chiếc",
              "D. Sửa giá bán một mặt hàng"
            ],
            answer: "C",
            explanation: "Tìm kiếm sản phẩm theo điều kiện là thao tác lấy dữ liệu ra xem, thuộc Truy xuất."
          },
          {
            q: "Câu 4: Kiểm soát ai được phép xem điểm và ai được sửa điểm thuộc nhóm chức năng nào?",
            options: [
              "A. Định nghĩa dữ liệu",
              "B. Cập nhật dữ liệu",
              "C. Bảo mật CSDL",
              "D. Truy xuất dữ liệu"
            ],
            answer: "C",
            explanation: "Phân quyền truy cập thuộc nhóm chức năng Bảo mật."
          },
          {
            q: "Câu 5: Việc định kỳ tạo bản sao CSDL dự phòng nhằm mục đích chủ yếu là:",
            options: [
              "A. Đảm bảo an toàn dữ liệu, sẵn sàng phục hồi khi gặp sự cố",
              "B. Tăng tốc độ truy vấn",
              "C. Thêm dữ liệu mới",
              "D. Thiết kế giao diện"
            ],
            answer: "A",
            explanation: "Sao lưu (Backup) phục vụ tính An toàn dữ liệu."
          },
          {
            q: "Câu 6: Thành phần nào sau đây là một Hệ quản trị cơ sở dữ liệu?",
            options: [
              "A. Dữ liệu học sinh",
              "B. PostgreSQL",
              "C. Website tra cứu điểm",
              "D. Bảng danh sách lớp"
            ],
            answer: "B",
            explanation: "PostgreSQL là phần mềm Hệ QTCSDL."
          },
          {
            q: "Câu 7: Một Hệ CSDL hoàn chỉnh có thể hình dung gồm những thành phần nào?",
            options: [
              "A. Chỉ có CSDL",
              "B. Chỉ có Hệ QTCSDL",
              "C. CSDL + Hệ QTCSDL + Các phần mềm ứng dụng CSDL",
              "D. Chỉ có website"
            ],
            answer: "C",
            explanation: "Hệ CSDL gồm CSDL + DBMS + Phần mềm ứng dụng."
          },
          {
            q: "Câu 8: Dữ liệu được đặt tại một máy chủ trung tâm duy nhất, người dùng từ nhiều tỉnh thành cùng kết nối vào để tra cứu. Đây là:",
            options: [
              "A. Hệ CSDL tập trung",
              "B. Chắc chắn là Hệ CSDL phân tán",
              "C. Không phải CSDL",
              "D. Hệ tệp văn bản"
            ],
            answer: "A",
            explanation: "Dữ liệu đặt tại 1 máy chủ trung tâm thì là Hệ CSDL tập trung."
          },
          {
            q: "Câu 9: Dữ liệu được phân chia thành các CSDL thành phần đặt trên nhiều máy tính ở các địa điểm khác nhau và kết nối qua mạng. Đây là:",
            options: [
              "A. Hệ CSDL tập trung",
              "B. Hệ CSDL phân tán",
              "C. Hệ CSDL cá nhân",
              "D. File văn bản thô"
            ],
            answer: "B",
            explanation: "Dữ liệu phân chia trên nhiều máy ở nhiều nơi là Hệ CSDL phân tán."
          },
          {
            q: "Câu 10: Khó khăn nổi bật nhất của Hệ CSDL phân tán so với hệ tập trung là:",
            options: [
              "A. Không thể có nhiều người dùng",
              "B. Không thể tìm kiếm dữ liệu",
              "C. Quản lý, bảo mật và duy trì tính nhất quán, đồng bộ dữ liệu giữa các nơi phức tạp hơn",
              "D. Không thể kết nối mạng"
            ],
            answer: "C",
            explanation: "Đảm bảo nhất quán và đồng bộ dữ liệu giữa nhiều địa điểm là thách thức kỹ thuật lớn nhất của hệ phân tán."
          }
        ]
      }
    },
    {
      id: "practice-b12-summary",
      badge: "Tổng Kết Buổi Học",
      title: "Chốt 8 Điểm Cốt Lõi, 7 Câu Hỏi Tự Vấn & Mạch Nối Sang Bài 13",
      duration: "Tổng kết",
      type: "exercise",
      description: "8 kiến thức cốt lõi học sinh tự nói lại, 7 câu hỏi chốt chuẩn đầu ra và mạch nối sang Bài 13 (Cơ sở dữ liệu quan hệ).",
      content: {
        objective: "Khắc sâu toàn bộ kiến thức Bài 12 và tạo đà chuyển tiếp sang Bài 13.",
        knowledgeNotice: "📌 7 CÂU HỎI HỌC SINH PHẢI TỰ TRẢ LỜI ĐƯỢC CUỐI BUỔI:\n1. Hệ QTCSDL là gì? ➜ Phần mềm cung cấp phương tiện tạo lập, cập nhật, truy xuất, bảo mật và an toàn cho CSDL.\n2. Cập nhật dữ liệu gồm những thao tác nào? ➜ Thêm, Sửa, Xóa (làm thay đổi dữ liệu bên trong).\n3. Truy xuất dữ liệu là gì? ➜ Tìm kiếm, Lọc, Tra cứu, Thống kê (lấy dữ liệu ra xem, không làm đổi dữ liệu gốc).\n4. CSDL khác Hệ QTCSDL thế nào? ➜ CSDL là DỮ LIỆU; Hệ QTCSDL là PHẦN MỀM quản lý dữ liệu.\n5. Hệ CSDL gồm những thành phần nào? ➜ CSDL + Hệ QTCSDL + Phần mềm ứng dụng CSDL (+ con người).\n6. Tập trung và phân tán khác nhau ở đâu? ➜ Tập trung là dữ liệu tại 1 hệ thống trung tâm; Phân tán là dữ liệu chia thành các CSDL con trên nhiều máy qua mạng.\n7. Vì sao không thể nói hệ phân tán luôn tốt hơn tập trung? ➜ Vì phân tán quản lý cực kỳ phức tạp, khó đồng bộ nhất quán và bảo mật tốn kém hơn.",
        table: {
          headers: ["Khoảng thời gian", "Nội dung hoạt động sư phạm", "Mục tiêu trọng tâm cần đạt"],
          rows: [
            ["0–8 phút", "Khởi động tra cứu điểm", "Nhận thức vai trò của lớp phần mềm trung gian đứng giữa"],
            ["8–18 phút", "Vì sao cần Hệ QTCSDL?", "Hiểu khó khăn khi người dùng phải tự thao tác file thô"],
            ["18–30 phút", "Khái niệm Hệ QTCSDL (DBMS)", "Phân biệt rạch ròi giữa Dữ liệu (CSDL) và Phần mềm (DBMS)"],
            ["30–54 phút", "4 Nhóm chức năng của DBMS", "Phân biệt Cập nhật vs Truy xuất, Bảo mật vs An toàn"],
            ["54–68 phút", "Hệ CSDL & Sơ đồ 4 tầng", "Nắm vững dòng luồng: Người dùng ➜ App ➜ DBMS ➜ CSDL"],
            ["68–85 phút", "Tập trung vs Phân tán", "So sánh ưu nhược điểm qua ví dụ trường học & chuỗi siêu thị"],
            ["85–95 phút", "10 Bài Luyện Tập Thực Tế", "Rèn luyện kỹ năng phân loại thao tác và chẩn đoán hệ thống"],
            ["95–100 phút", "Mini Test 10 Câu & Mạch Nối", "Đánh giá chuẩn đầu ra và chuẩn bị tâm thế sang CSDL quan hệ"]
          ]
        },
        criteria: [
          { level: "Mức Đạt (5-6.5đ)", desc: "Nêu được khái niệm Hệ QTCSDL; phân biệt được CSDL vs DBMS; phân biệt được thao tác Cập nhật vs Truy xuất cơ bản." },
          { level: "Mức Khá (7-8.5đ)", desc: "Trình bày chuẩn xác 4 tầng của Hệ CSDL; phân biệt được Hệ CSDL tập trung vs phân tán; hiểu rõ vai trò của sao lưu và bảo mật." },
          { level: "Mức Xuất Sắc (9-10đ)", desc: "Phân tích sâu sắc bài toán đồng bộ nhất quán trong CSDL phân tán; giải thích vì sao nhiều người truy cập không đồng nghĩa phân tán; tư vấn được mô hình tối ưu cho bài toán doanh nghiệp." }
        ]
      }
    }
  ]
}
