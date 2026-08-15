import { b1Content } from "./b1Content.js"
import { b2Content } from "./b2Content.js"
import { b3Content } from "./b3Content.js"
import { b4Content } from "./b4Content.js"
import { b5Content } from "./b5Content.js"
import { b6Content } from "./b6Content.js"
import { b7Content } from "./b7Content.js"
import { b8Content } from "./b8Content.js"
import { b9Content } from "./b9Content.js"

export const common11 = [
  {
    id: "b1",
    lesson: "Bài 1",
    title: "Hệ điều hành",
    cluster: "Máy tính và xã hội tri thức",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Khái niệm Hệ điều hành (Quản lý – Điều phối – Môi trường ứng dụng)",
      "5 Nhóm chức năng cốt lõi HĐH: Thiết bị – Dữ liệu – Chương trình – Giao tiếp – Tiện ích (T-D-C-G-T)",
      "Lịch sử phát triển HĐH: CLI → GUI; Mốc Windows (1985–2021) & Linux nguồn mở",
      "Đặc điểm HĐH di động (Android, iOS): Cảm ứng – Kết nối – Cảm biến – Tiện ích cá nhân",
      "Mô hình mối quan hệ 4 tầng: Người dùng → Phần mềm ứng dụng → Hệ điều hành → Phần cứng",
      "Phân biệt HĐH với Phần mềm ứng dụng (Word, Chrome) và các câu hỏi bẫy"
    ],
    codeSkills: [
      "Thao tác kiểm tra tiến trình đang chạy và mức tiêu thụ RAM/CPU trong Task Manager",
      "Sử dụng các câu lệnh cơ bản trong CLI (Windows CMD / PowerShell / Terminal)"
    ],
    examSkills: [
      "Giải quyết 3 dạng câu hỏi thi: Trắc nghiệm định nghĩa, Phân loại HĐH, Đúng/Sai có giải thích",
      "Phân tích tình huống thực tế (Mở YouTube, Chụp ảnh, Cắm USB, Máy lag do quá tải CPU/RAM)",
      "Trình bày bài phát biểu tổng kết 2 phút chuẩn đầu ra sau buổi học"
    ],
    practice: [
      "10 câu trắc nghiệm tương tác kiểm tra khái niệm và 5 nhóm chức năng",
      "1 bài tập thực hành phân tích tiến trình Task Manager trên máy tính cá nhân",
      "7 câu hỏi bài kiểm tra cuối buổi không tài liệu & 5 cụm chốt kiến thức trọng tâm"
    ],
    sourceIds: ["kgv-cs11", "nxbgd-training", "kgv-focus11"],
    lectureContent: b1Content
  },
  {
    id: "b2",
    lesson: "Bài 2",
    title: "Thực hành sử dụng hệ điều hành",
    cluster: "Máy tính và xã hội tri thức",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Quản lí tệp và thư mục: cấu trúc cây, đường dẫn tương đối/tuyệt đối",
      "Các đường tắt (shortcut), thao tác nén và giải nén tệp tin (ZIP, RAR)",
      "Thiết lập môi trường làm việc cá nhân: màn hình, bàn phím, ngôn ngữ, múi giờ",
      "Cài đặt và gỡ bỏ phần mềm an toàn qua Control Panel / Settings",
      "Quản lí tài khoản người dùng và phân quyền truy cập máy tính"
    ],
    codeSkills: [
      "Sử dụng các phím tắt quản lí hệ thống (Ctrl+Shift+Esc, Win+X, Win+R)",
      "Thực hiện tìm kiếm tệp tin bằng ký tự đại diện (*, ?)"
    ],
    examSkills: [
      "Sắp xếp đúng quy trình thao tác cài đặt / quản lí tệp",
      "Chọn phương án xử lí phù hợp khi tệp tin bị khóa hoặc không gỡ được phần mềm"
    ],
    practice: [
      "Checklist 8 thao tác chuẩn trên máy tính (nén, gỡ ứng dụng, phân quyền)",
      "5 câu tình huống xử lí lỗi đường dẫn và cấp quyền truy cập thư mục",
      "Bài tập tổ chức cây thư mục học tập môn Tin học khoa học"
    ],
    sourceIds: ["kgv-cs11", "kgv-app11"],
    lectureContent: b2Content
  },
  {
    id: "b3",
    lesson: "Bài 3",
    title: "Phần mềm nguồn mở và phần mềm chạy trên Internet",
    cluster: "Máy tính và xã hội tri thức",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Khái niệm phần mềm nguồn mở (Open Source) và bản quyền phần mềm (GPL, MIT)",
      "So sánh phần mềm nguồn mở với phần mềm thương mại đóng mã nguồn (Proprietary)",
      "Dịch vụ và phần mềm chạy trực tuyến trên Internet (SaaS / Web-based App)",
      "Ưu điểm và hạn chế của ứng dụng đám mây (Google Docs, Office 365, Canva)",
      "Xu hướng phát triển và vai trò của cộng đồng nguồn mở toàn cầu"
    ],
    codeSkills: [
      "Sử dụng công cụ trực tuyến hợp tác thời gian thực (Real-time Collaboration)",
      "Xuất dữ liệu giữa các định dạng phần mềm thương mại và nguồn mở (.docx vs .odt)"
    ],
    examSkills: [
      "Phân loại chính xác các phần mềm thông dụng theo giấy phép bản quyền",
      "Đánh giá và đề xuất giải pháp phần mềm tối ưu chi phí cho nhà trường/doanh nghiệp"
    ],
    practice: [
      "Bảng phân loại 15 phần mềm phổ biến (Open Source vs Closed Source vs Web App)",
      "8 câu nhận diện + 2 câu giải thích về bản quyền phần mềm",
      "Case study: Lựa chọn phần mềm văn phòng cho dự án khởi nghiệp"
    ],
    sourceIds: ["kgv-cs11", "kgv-focus11"],
    lectureContent: b3Content
  },
  {
    id: "b4",
    lesson: "Bài 4",
    title: "Bên trong máy tính",
    cluster: "Máy tính và xã hội tri thức",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Mô hình kiến trúc Von Neumann cơ bản của máy tính",
      "Bộ xử lí trung tâm (CPU): ALU, CU, Các thanh ghi (Registers), Tốc độ xung nhịp (GHz)",
      "Bộ nhớ trong: Bộ nhớ truy cập ngẫu nhiên (RAM) và Bộ nhớ chỉ đọc (ROM)",
      "Bộ nhớ ngoài: Ổ cứng SSD (NVMe/SATA), HDD, Thẻ nhớ, USB",
      "Bo mạch chủ (Mainboard), Bus hệ thống và các thông số hiệu năng phần cứng"
    ],
    codeSkills: [
      "Đọc hiểu cấu hình chi tiết phần cứng máy tính (CPU Core/Threads, RAM MHz, SSD Read/Write)",
      "Phân tích hiện tượng chai bộ nhớ / nghẽn cổ chai (Bottleneck) hệ thống"
    ],
    examSkills: [
      "Lựa chọn cấu hình máy tính tối ưu theo nhu cầu (Lập trình, Đồ họa, Văn phòng)",
      "Đọc hiểu bài toán nâng cấp phần cứng và dự đoán sự cải thiện hiệu năng"
    ],
    practice: [
      "Sơ đồ tư duy kiến trúc các thành phần bên trong máy tính",
      "Case study: Tư vấn nâng cấp máy tính cho học sinh chuyên Tin",
      "10 câu trắc nghiệm so sánh RAM vs SSD vs CPU Cache"
    ],
    sourceIds: ["kgv-cs11", "nxbgd-training"],
    lectureContent: b4Content
  },
  {
    id: "b5",
    lesson: "Bài 5",
    title: "Kết nối máy tính với các thiết bị số",
    cluster: "Máy tính và xã hội tri thức",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Các chuẩn cổng kết nối có dây thông dụng (USB-A, USB-C, HDMI, DisplayPort, LAN RJ45)",
      "Kết nối không dây: Bluetooth, Wi-Fi, NFC, Infrared",
      "Thiết bị vào-ra số thông minh: Máy in, máy quét, webcam, micro, bảng vẽ điện tử",
      "Khái niệm driver thiết bị và cơ chế Plug and Play (PnP)",
      "An toàn khi kết nối và rút thiết bị số ngoại vi"
    ],
    codeSkills: [
      "Kiểm tra trạng thái kết nối thiết bị trong Device Manager",
      "Cài đặt và cập nhật Driver thủ công cho thiết bị ngoại vi"
    ],
    examSkills: [
      "Chọn chuẩn kết nối phù hợp nhất cho từng thiết bị và băng thông dữ liệu",
      "Chẩn đoán và giải thích nguyên nhân lỗi mất kết nối phần cứng cơ bản"
    ],
    practice: [
      "Nhận diện 8 loại cổng kết nối thực tế trên laptop/PC",
      "10 tình huống ghép nối thiết bị trong phòng máy thực hành",
      "Bài tập chẩn đoán lỗi thiếu Driver / sai chuẩn cáp tín hiệu"
    ],
    sourceIds: ["kgv-cs11", "kgv-app11"],
    lectureContent: b5Content
  },
  {
    id: "b6",
    lesson: "Bài 6",
    title: "Lưu trữ và chia sẻ tệp tin trên Internet",
    cluster: "Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Khái niệm lưu trữ đám mây (Cloud Storage) và cơ chế đồng bộ dữ liệu",
      "Các mức phân quyền chia sẻ tệp: Xem (Viewer), Nhận xét (Commenter), Chỉnh sửa (Editor)",
      "Quản lí đường liên kết (Link sharing) và kiểm soát truy cập theo email",
      "Đồng bộ hóa thư mục tự động giữa máy tính cục bộ và dịch vụ đám mây",
      "Các rủi ro an toàn thông tin khi chia sẻ dữ liệu công khai"
    ],
    codeSkills: [
      "Tạo thư mục làm việc nhóm trên Google Drive / OneDrive với đúng quyền hạn",
      "Thiết lập lịch sử phiên bản (Version History) để khôi phục tệp bị đè dữ liệu"
    ],
    examSkills: [
      "Chọn đúng phân quyền và chính sách chia sẻ tệp trong bối cảnh cụ thể",
      "Phân tích tình huống rò rỉ dữ liệu do cài đặt quyền công khai sai"
    ],
    practice: [
      "Thực hành tạo và phân quyền cây thư mục dự án lớp 11",
      "Case study 4 tình huống chia sẻ dữ liệu nhạy cảm",
      "Cụm 4 câu hỏi Đúng/Sai về nguyên tắc lưu trữ đám mây an toàn"
    ],
    sourceIds: ["kgv-cs11", "kgv-focus11"],
    lectureContent: b6Content
  },
  {
    id: "b7",
    lesson: "Bài 7",
    title: "Thực hành tìm kiếm thông tin trên Internet",
    cluster: "Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
    priority: "medium",
    hours: 1.5,
    mustKnow: [
      "Kỹ thuật lựa chọn từ khóa tìm kiếm chính xác và cô đọng",
      "Cú pháp tìm kiếm nâng cao trên Google: ngoặc kép \"\", site:, filetype:, minus -",
      "Các tiêu chí đánh giá độ tin cậy của thông tin: tác giả, cơ quan xuất bản, thời gian, bằng chứng",
      "Phân biệt nguồn tin chính thống, tài liệu khoa học và tin đồn/tin giả (Fake news)",
      "Bản quyền nội dung và quy tắc trích dẫn nguồn Internet"
    ],
    codeSkills: [
      "Viết truy vấn tìm kiếm phức tạp sử dụng kết hợp toán tử boolean",
      "Tự động tra cứu tài liệu học thuật định dạng PDF từ các tên miền edu.vn / gov.vn"
    ],
    examSkills: [
      "Xác định cú pháp tìm kiếm tối ưu nhất cho bài toán tìm tài liệu chuẩn",
      "Đánh giá và so sánh mức độ tin cậy của các trang thông tin trong đề thi"
    ],
    practice: [
      "3 bài tập thực hành truy vấn tài liệu SGK KNTT bằng cú pháp nâng cao",
      "Bảng đối chiếu đánh giá 3 website có thông tin trái ngược nhau",
      "Bài tập trích dẫn nguồn tài liệu chuẩn APA đơn giản"
    ],
    sourceIds: ["kgv-cs11", "nxbgd-training"],
    lectureContent: b7Content
  },
  {
    id: "b8",
    lesson: "Bài 8",
    title: "Thực hành nâng cao sử dụng thư điện tử và mạng xã hội",
    cluster: "Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin",
    priority: "low",
    hours: 1,
    mustKnow: [
      "Giao thức và quy tắc giao tiếp qua Email chuyên nghiệp (Văn hóa email)",
      "Sử dụng hiệu quả các trường To, Cc, Bcc, Tiêu đề (Subject) và Chữ ký email",
      "Quản lí hộp thư: Phân loại nhãn (Labels/Folders), bộ lọc tự động (Filters), chặn Spam",
      "Thiết lập an toàn và riêng tư trên các nền tảng mạng xã hội",
      "Nhận diện các dấu hiệu lừa đảo qua email (Phishing Email) và tin nhắn giả mạo"
    ],
    codeSkills: [
      "Cài đặt xác thực 2 yếu tố (2FA) cho tài khoản Email và Mạng xã hội",
      "Tạo bộ lọc tự động phân loại thư từ giáo viên / nhà trường"
    ],
    examSkills: [
      "Chọn phương án phản ứng đúng trước email lừa đảo hoặc tin nhắn độc hại",
      "Phân biệt mục đích sử dụng của trường Cc và Bcc trong giao tiếp công việc"
    ],
    practice: [
      "Checklist 10 tiêu chuẩn viết email xin hỗ trợ học tập chuẩn mực",
      "Case study: Nhận diện 3 email lừa đảo mạo danh ngân hàng/nhà trường",
      "Thực hành cấu hình 2FA và kiểm tra nhật ký đăng nhập tài khoản"
    ],
    sourceIds: ["kgv-cs11", "kgv-app11"],
    lectureContent: b8Content
  },
  {
    id: "b9",
    lesson: "Bài 9",
    title: "Giao tiếp an toàn trên Internet",
    cluster: "Đạo đức, pháp luật và văn hoá trong môi trường số",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Các hình thức lừa đảo phổ biến trên không gian mạng (Phishing, Social Engineering)",
      "Bảo vệ dữ liệu cá nhân (PII) và quyền riêng tư trong môi trường số",
      "Mã độc (Malware): Virus, Trojan, Ransomware, Spyware và con đường lây nhiễm",
      "Đạo đức và ứng xử văn minh trên không gian mạng (Netiquette)",
      "Các quy định pháp luật cơ bản về An ninh mạng và Luật Sở hữu trí tuệ"
    ],
    codeSkills: [
      "Sử dụng công cụ kiểm tra độ an toàn của liên kết (VirusTotal, Google Transparency)",
      "Sao lưu dữ liệu quan trọng chống Ransomware theo quy tắc 3-2-1"
    ],
    examSkills: [
      "Phân tích tình huống vi phạm pháp luật / an toàn thông tin số",
      "Xác định đúng quy trình xử lí sự cố khi bị lộ mật khẩu hoặc mất tài khoản",
      "Giải quyết các câu hỏi Đúng/Sai dạng bối cảnh trong đề thi THPT 2026"
    ],
    practice: [
      "6 bài tập tình huống thực tế về an toàn mạng đối với học sinh THPT",
      "1 cụm bài tập Đúng/Sai 4 ý về Luật An ninh mạng Việt Nam",
      "Bảng phân biệt 5 loại mã độc và cơ chế phòng chống"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "kgv-focus11"],
    lectureContent: b9Content
  }
]
