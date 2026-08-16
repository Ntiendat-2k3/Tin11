export const b2Content = {
  warmUp: {
    question: "Làm thế nào để quản lý tệp tin và sử dụng tiện ích hệ điều hành máy tính & điện thoại hiệu quả nhất?",
    description: "Trong bài thực hành này, bạn sẽ làm chủ giao diện Windows, thành thạo 6 thao tác tệp/thư mục (Copy vs Move, Search, Delete/Restore), phân biệt cách tối ưu đĩa HDD vs SSD, sử dụng các tiện ích máy tính (Screenshot, Calculator, Clipboard Win+V) và tiện ích thiết bị di động (Android/iOS) để giải quyết các tình huống thực tế trong học tập và công việc."
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mục tiêu Buổi học & Giao diện Hệ điều hành Windows",
      subsections: [
        {
          heading: "1. Mục tiêu buổi học – 3 tầng năng lực gia sư",
          points: [
            "Mức bắt buộc (Phải biết): Nhận biết các thành phần giao diện HĐH (Desktop, Taskbar, Window, File Explorer); thực hiện thành thạo 6 thao tác tệp và thư mục cơ bản.",
            "Bám sát 3 mục tiêu SGK Bài 2: Sử dụng chức năng cơ bản của HĐH PC, tiện ích nâng cao hiệu quả máy tính và một số tiện ích trên thiết bị di động (Android/iOS).",
            "Mức vận dụng & nâng cao: Thiết kế cấu trúc cây thư mục khoa học, giải quyết bài toán dọn dẹp dữ liệu lộn xộn và tối ưu hóa bộ nhớ thiết bị."
          ]
        },
        {
          heading: "2. Giao diện cơ bản của hệ điều hành Windows 10/11",
          points: [
            "Desktop: Màn hình làm việc chính của Windows, chứa các Shortcut (đường tắt), Folder (thư mục), File (tệp tin), Recycle Bin (thùng rác) và các biểu tượng ứng dụng.",
            "Taskbar: Thanh công việc nằm ở cạnh dưới màn hình, hỗ trợ mở nhanh ứng dụng, chuyển đổi giữa các tiến trình đang chạy, xem ứng dụng hệ thống và System Tray (giờ, mạng, pin).",
            "Window (Cửa sổ ứng dụng): Gồm thanh tiêu đề (Title Bar), nút thu nhỏ (_), nút phóng to/khôi phục (□), nút đóng (X) và vùng hiển thị nội dung làm việc.",
            "File Explorer: Tiện ích quan trọng hàng đầu giúp người dùng duyệt, tìm kiếm và quản lý toàn bộ ổ đĩa, thư mục, tệp tin trên máy tính."
          ]
        }
      ],
      functions: [
        { name: "Desktop & Shortcuts", desc: "Không gian làm việc trực quan, truy cập nhanh tới tệp và ứng dụng thường dùng." },
        { name: "Taskbar (Thanh công việc)", desc: "Quản lý tiến trình đang chạy, ghim ứng dụng yêu thích và chuyển đổi cửa sổ linh hoạt." },
        { name: "File Explorer (Win + E)", desc: "Quản lý hệ thống ổ đĩa (C:, D:), cây thư mục phân cấp và khai thác tệp dữ liệu." },
        { name: "Cửa sổ ứng dụng (Window)", desc: "Điều khiển kích thước làm việc, thu nhỏ, phóng to và sắp xếp màn hình đa nhiệm." }
      ]
    },
    {
      id: "sec-2",
      title: "III. Bản chất File và Folder – Nền tảng Quản lý Dữ liệu",
      subsections: [
        {
          heading: "1. File (Tệp tin) là gì?",
          text: "File là đơn vị lưu trữ dữ liệu cơ bản có tên được ghi trên bộ nhớ ngoài. Tên file thường gồm hai phần phân cách bởi dấu chấm (.): [Tên_chính].[Phần_mở_rộng].",
          points: [
            "Phần mở rộng (Extension): Giúp hệ điều hành nhận biết loại dữ liệu và tự động chọn phần mềm phù hợp để mở tệp.",
            "Ví dụ phổ biến: baitap.docx (Văn bản Word), anh.jpg (Hình ảnh), video.mp4 (Phim/Video), data.xlsx (Bảng tính Excel), main.py (Code Python).",
            "⚠️ Bẫy kiến thức cần lưu ý: Đổi tên 'baitap.docx' thành 'baitap.pdf' bằng cách gõ lại tên KHÔNG biến tệp Word thành tệp PDF mà chỉ làm HĐH hiểu sai định dạng mở tệp!"
          ]
        },
        {
          heading: "2. Folder (Thư mục) là gì?",
          text: "Folder là một cấu trúc của hệ thống tệp dùng để tổ chức, nhóm và chứa các file cùng các folder con khác.",
          points: [
            "Khái niệm cốt lõi: Folder KHÔNG phải là 'file đặc biệt' mà là công cụ tổ chức phân cấp dữ liệu.",
            "Ví dụ cấu trúc: Thư mục 'Documents' chứa các thư mục con 'TinHoc11' (chứa Bai1.docx, Bai2.docx) và 'Toan11' (chứa DaiSo.docx, HinhHoc.docx)."
          ]
        }
      ],
      fileTree: {
        title: "Minh họa Cấu trúc Cây Thư mục Quản lý Học tập (C:\\Documents)",
        nodes: [
          {
            name: "C:", type: "drive", isExpanded: true, children: [
              {
                name: "Users", type: "folder", isExpanded: true, children: [
                  {
                    name: "HocSinh", type: "folder", isExpanded: true, children: [
                      {
                        name: "Documents", type: "folder", isExpanded: true, children: [
                          {
                            name: "TinHoc11", type: "folder", isExpanded: true, children: [
                              { name: "Bai1_HeDieuHanh.docx", type: "file", desc: "Đường dẫn: C:\\Users\\HocSinh\\Documents\\TinHoc11\\Bai1_HeDieuHanh.docx" },
                              { name: "Bai2_ThucHanh.docx", type: "file" },
                              { name: "BaiTap.xlsx", type: "file" }
                            ]
                          },
                          {
                            name: "Toan11", type: "folder", isExpanded: true, children: [
                              { name: "DaiSo.docx", type: "file" },
                              { name: "HinhHoc.docx", type: "file" }
                            ]
                          }
                        ]
                      },
                      {
                        name: "Pictures", type: "folder", isExpanded: false, children: [
                          { name: "AnhThucHanh.jpg", type: "file" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      id: "sec-3",
      title: "IV. 6 Thao tác Tệp & Thư mục Bắt buộc Thực hành",
      subsections: [
        {
          heading: "Quy trình 6 thao tác cốt lõi trên File Explorer",
          points: [
            "1. Tạo thư mục (New Folder): Đặt tên khoa học để phân loại tài liệu (ví dụ: TinHoc11 chứa Bai1, Bai2, Bai3, TaiLieu).",
            "2. Đổi tên (Rename / phím F2): Đổi tên rõ ràng (từ 'Bai02' thành 'Bai2_ThucHanh'). Không tự ý sửa phần mở rộng .docx, .pdf.",
            "3. Sao chép (Copy / Ctrl+C -> Ctrl+V): Tạo một bản sao mới tại thư mục đích, tệp gốc ở vị trí cũ vẫn giữ nguyên.",
            "4. Di chuyển (Move / Cut / Ctrl+X -> Ctrl+V): Chuyển đối tượng sang vị trí mới, vị trí cũ không còn tệp.",
            "5. Xóa & Khôi phục (Delete vs Shift+Delete): Xóa thông thường (Delete) đưa tệp vào Recycle Bin (có thể khôi phục Restore). Xóa vĩnh viễn (Shift+Delete) bỏ qua Recycle Bin.",
            "6. Tìm kiếm (Search): Sử dụng ô Search trong File Explorer để tìm tệp theo tên ('bai2') hoặc phần mở rộng ('*.pdf') giúp khai thác dữ liệu hiệu quả."
          ]
        }
      ],
      shortcuts: [
        { keys: ["F2"], desc: "Đổi tên nhanh (Rename) tệp hoặc thư mục đang chọn." },
        { keys: ["Ctrl", "C"], desc: "Sao chép (Copy) tệp/thư mục vào bộ nhớ tạm (Clipboard)." },
        { keys: ["Ctrl", "X"], desc: "Cắt/Di chuyển (Cut/Move) tệp/thư mục." },
        { keys: ["Ctrl", "V"], desc: "Dán (Paste) tệp/thư mục từ Clipboard vào thư mục hiện tại." },
        { keys: ["Delete"], desc: "Xóa tệp/thư mục đưa vào Thùng rác (Recycle Bin - khôi phục được)." },
        { keys: ["Shift", "Delete"], desc: "Xóa vĩnh viễn (Permanent Delete) tệp/thư mục khỏi đĩa cứng." },
        { keys: ["Win", "E"], desc: "Mở nhanh tiện ích quản lý tệp File Explorer." },
        { keys: ["Win", "V"], desc: "Mở Lịch sử bộ nhớ tạm (Clipboard History) để chọn dán nhiều mục." }
      ],
      calloutBox: {
        type: "warning",
        title: "Câu hỏi kiểm tra cốt lõi: Copy và Move khác nhau như thế nào?",
        text: "Trả lời: Copy (Ctrl+C) tạo thêm một bản sao độc lập tại vị trí mới, tệp gốc vẫn giữ nguyên. Move (Ctrl+X) thay đổi vị trí của tệp gốc, sau khi di chuyển thì vị trí cũ không còn tệp."
      }
    },
    {
      id: "sec-4",
      title: "V. Thực hành Tổng hợp 1 – Sắp xếp Thư mục Downloads Lộn xộn",
      flowList: [
        {
          title: "Bài toán thực tế: Chuẩn hóa thư mục Downloads",
          subtitle: "Thư mục Downloads đang chứa: Bai1.docx, Bai2.docx, Bai3.docx, anh1.jpg, anh2.jpg, dekiemtra.pdf, baitap.docx",
          steps: [
            { num: 1, title: "Tạo thư mục gốc", desc: "Tạo thư mục chính tên 'TinHoc11' trong Documents." },
            { num: 2, title: "Tạo cấu trúc phân loại", desc: "Bên trong 'TinHoc11' tạo 4 thư mục con: LyThuyet, BaiTap, HinhAnh, DeKiemTra." },
            { num: 3, title: "Di chuyển & Phân loại", desc: "Move các tệp docx học vào LyThuyet/BaiTap, tệp jpg vào HinhAnh, dekiemtra.pdf vào DeKiemTra." },
            { num: 4, title: "Đổi tên chuẩn hóa", desc: "Đổi tên tệp 'baitap.docx' thành 'BaiTap_Bai2.docx'." },
            { num: 5, title: "Tạo sao lưu Backup", desc: "Copy tệp 'BaiTap_Bai2.docx' vào thư mục Backup để làm bản sao lưu an toàn." },
            { num: 6, title: "Xóa tệp rác thừa", desc: "Xóa thử 1 tệp thừa bằng phím Delete (chuyển vào Recycle Bin)." },
            { num: 7, title: "Khôi phục tệp bị xóa", desc: "Mở Recycle Bin, click chuột phải vào tệp chọn Restore để đưa về vị trí cũ." }
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "VI & VII. Tiện ích Kiểm tra & Tối ưu hóa Ổ đĩa (HDD vs SSD)",
      subsections: [
        {
          heading: "1. Kiểm tra lỗi hệ thống tệp và ổ đĩa (Check Disk)",
          text: "Giúp phát hiện lỗi hệ thống tệp hoặc sửa các vùng đĩa bị lỗi vật lý/thao tác đột ngột ngắt nguồn.",
          points: [
            "Quy trình thực hiện: File Explorer -> Click chuột phải vào ổ đĩa (C: hoặc D:) -> Properties -> Thẻ Tools -> Chọn 'Check' tại mục Error checking."
          ]
        },
        {
          heading: "2. Tối ưu hóa ổ đĩa (Optimize / Defragment) – Tránh học máy móc",
          points: [
            "HDD (Ổ cứng cơ): Dữ liệu phân bố rải rác tạo hiện tượng phân mảnh (Fragmentation) khiến đầu đọc cơ học phải di chuyển nhiều. Việc dồn đĩa (Defragment/Optimize) giúp tăng tốc độ đọc dữ liệu.",
            "SSD (Ổ cứng thể rắn): Lưu trữ trên chip nhớ Flash, không có đầu đọc cơ học, số lần ghi có giới hạn. KHÔNG nên tự ý dồn đĩa (defrag) thủ công cho SSD như HDD vì gây giảm tuổi thọ SSD!",
            "Cơ chế Windows hiện đại: Tự nhận biết ổ SSD để chạy cơ chế Trim/Optimize phù hợp thay vì chống phân mảnh kiểu HDD.",
            "🎯 Kiến thức thi chốt: Công cụ Optimize giúp tối ưu hóa thiết bị lưu trữ. Với SSD, để hệ điều hành tự điều phối tối ưu, không tự ý defrag thủ công."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Đặc điểm / Tiêu chí", "Ổ cứng HDD (Hard Disk Drive)", "Ổ cứng SSD (Solid State Drive)"],
        rows: [
          ["Cơ chế lưu trữ vật lý", "Đĩa từ quay + đầu đọc cơ học", "Chip nhớ Flash thể rắn (không có bộ phận quay)"],
          ["Hiện tượng phân mảnh dữ liệu", "Bị phân mảnh nặng, làm chậm tốc độ đọc/ghi", "Không bị ảnh hưởng bởi vị trí phân bố dữ liệu"],
          ["Thao tác Optimize / Defrag", "Nên chạy chống phân mảnh (Defragment) định kỳ", "KHÔNG dồn đĩa thủ công; HĐH tự chạy lệnh Trim"],
          ["Tác động của Defrag thủ công", "Giúp cải thiện rõ rệt tốc độ truy xuất tệp", "Làm tăng số lần ghi không cần thiết, giảm tuổi thọ SSD"]
        ]
      }
    },
    {
      id: "sec-6",
      title: "VIII. Các Tiện ích Hệ điều hành Thực tế (Screenshot, Calculator, Clipboard)",
      subsections: [
        {
          heading: "Ứng dụng tiện ích hỗ trợ công việc và học tập",
          points: [
            "1. Chụp màn hình (Screenshot / Snipping Tool): Phím tắt Win + Shift + S giúp chụp toàn màn hình, chụp 1 cửa sổ hoặc 1 vùng tùy chọn. Hình chụp tự động lưu vào Clipboard.",
            "2. Máy tính hệ thống (Calculator): Cung cấp các chế độ tính toán Standard (cơ bản), Scientific (khoa học), Programmer (lập trình viên), chuyển đổi đơn vị độ dài, khối lượng, tiền tệ.",
            "3. Lịch sử Bộ nhớ tạm (Clipboard History - Win + V): Cho phép lưu và xem lại danh sách nhiều văn bản/hình ảnh đã Ctrl+C trước đó để chọn dán linh hoạt."
          ]
        }
      ],
      steps: [
        {
          step: "Thực hành Chụp màn hình bằng Snipping Tool",
          detail: "Nhấn Win + Shift + S → Kéo chuột chọn vùng màn hình chứa cửa sổ File Explorer → Mở Zalo/Word/Paint → Nhấn Ctrl + V để dán trực tiếp ảnh vừa chụp."
        },
        {
          step: "Thực hành Clipboard History (Win + V)",
          detail: "Bật Clipboard History trong Settings → Nhấn Ctrl + C chép lần lượt 3 đoạn văn bản khác nhau → Nhấn Win + V để bật bảng chọn và dán đoạn văn bản thứ 1 hoặc thứ 2."
        }
      ]
    },
    {
      id: "sec-7",
      title: "IX. Tiện ích trên Thiết bị Di động (Android / iOS)",
      subsections: [
        {
          heading: "Hệ điều hành di động & Tiện ích cá nhân",
          text: "Điện thoại thông minh (Smartphone) là một dạng máy tính cá nhân chạy HĐH di động (Android, iOS) tích hợp nhiều tiện ích quản lý thiết bị và công việc.",
          points: [
            "1. Quản lý danh bạ (Contacts): Tạo liên hệ mới, chỉnh sửa, xóa, tìm kiếm danh bạ và đồng bộ mây (Google Account / iCloud).",
            "2. Lịch và Nhắc việc (Calendar & Reminders): Đặt lịch sự kiện (ví dụ: 'Học Tin học 11' lúc 19:00, cài chuông nhắc trước 30 phút).",
            "3. Quản lý ứng dụng & Bộ nhớ (App Management): Kiểm tra ứng dụng đã cài, phân quyền truy cập (Micro, Camera, Vị trí), dung lượng chiếm dụng và gỡ ứng dụng.",
            "⚠️ An toàn bảo mật: Tại sao không nên cài ứng dụng từ nguồn không rõ nguồn gốc (.apk trôi nổi)? Vì nguy cơ dính mã độc đánh cắp thông tin cá nhân và tài khoản (kết nối Bài 3 & Bài 9)."
          ]
        }
      ],
      flowList: [
        {
          title: "Quy trình xử lý khi Điện thoại báo 'Bộ nhớ gần đầy'",
          subtitle: "5 bước quản lý dung lượng lưu trữ trên thiết bị di động",
          steps: [
            { num: 1, title: "Kiểm tra Storage", desc: "Vào Cài đặt -> Dung lượng (Storage) để xem phân bổ bộ nhớ (Hình ảnh, App, Hệ thống)." },
            { num: 2, title: "Lọc Ứng dụng", desc: "Xem danh sách ứng dụng chiếm nhiều dung lượng hoặc ít khi sử dụng." },
            { num: 3, title: "Xóa Cache rác", desc: "Xóa bộ nhớ đệm (Cache) của các ứng dụng mạng xã hội (Facebook, TikTok, Zalo)." },
            { num: 4, title: "Gỡ ứng dụng thừa", desc: "Gỡ cài đặt (Uninstall) các ứng dụng không còn nhu cầu sử dụng." },
            { num: 5, title: "Sao lưu & Xóa Ảnh/Video", desc: "Đồng bộ ảnh/video lên mây (Google Photos/iCloud) hoặc máy tính rồi xóa bớt tệp gốc trên máy." }
          ]
        }
      ]
    },
    {
      id: "sec-8",
      title: "X. Phân biệt các Hệ điều hành (Windows, Linux, macOS, Android, iOS)",
      subsections: [
        {
          heading: "Bảng tổng hợp phân loại Hệ điều hành",
          text: "Hệ điều hành được thiết kế tối ưu cho từng loại phần cứng và mục đích sử dụng khác nhau. Không đồng nhất khái niệm 'máy tính' chỉ là 'Windows'."
        }
      ],
      comparisonTable: {
        headers: ["Hệ điều hành", "Thiết bị điển hình", "Môi trường & Đặc điểm nổi bật"],
        rows: [
          ["Windows", "PC / Laptop", "HĐH thương mại phổ biến nhất trên PC cá nhân, giao diện GUI thân thiện, kho ứng dụng phong phú."],
          ["Linux", "PC / Server / Thiết bị nhúng", "HĐH mã nguồn mở, độ bảo mật cao, khả năng tùy biến mạnh mẽ, dùng phổ biến trên các máy chủ."],
          ["macOS", "Máy tính Mac (Apple)", "HĐH độc quyền trên phần cứng Apple, độ tối ưu cao, chuyên dụng cho thiết kế đồ họa và sáng tạo."],
          ["Android", "Điện thoại / Tablet (Google)", "HĐH di động mã nguồn mở (nhân Linux), thị phần di động lớn nhất thế giới."],
          ["iOS", "Điện thoại iPhone (Apple)", "HĐH di động mã nguồn đóng độc quyền của Apple, hiệu năng mượt mà, tính bảo mật nghiêm ngặt."]
        ]
      },
      calloutBox: {
        type: "quote",
        title: "Tư duy mở rộng từ Bài 1 sang Bài 2",
        text: "Bài 1 giúp học sinh hiểu bản chất HĐH là môi trường quản lý tài nguyên. Bài 2 chuyển hóa kiến thức đó thành kỹ năng thao tác thực tế trên PC (Windows) và thiết bị di động (Android/iOS)."
      }
    },
    {
      id: "sec-9",
      title: "XI. 5 Kiến thức 'Đinh' Cần Nhớ Của Bài Học (Tổng Kết)",
      checkpointCards: [
        { title: "1. File vs Folder", detail: "File = dữ liệu có tên & đuôi mở rộng; Folder = cấu trúc tổ chức dữ liệu." },
        { title: "2. File Explorer", detail: "Công cụ trung tâm quản lý toàn bộ ổ đĩa, tệp và thư mục trên Windows." },
        { title: "3. Copy ≠ Move", detail: "Copy tạo bản sao mới độc lập; Move thay đổi vị trí của đối tượng." },
        { title: "4. Tiện ích PC", detail: "Check Disk, Optimize (HDD/SSD), Screenshot, Calculator, Clipboard History hỗ trợ công việc." },
        { title: "5. Tiện ích Di động", detail: "Android/iOS quản lý danh bạ, lịch nhắc việc, ứng dụng và bộ nhớ an toàn." }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Công cụ nào thường được dùng để quản lý tệp và thư mục chính trên hệ điều hành Windows?",
      options: [
        "A. Task Manager",
        "B. File Explorer",
        "C. Calculator",
        "D. Control Panel"
      ],
      answer: "B",
      explanation: "File Explorer (Win + E) là tiện ích mặc định trên Windows dùng để quản lý hệ thống tệp, thư mục và ổ đĩa."
    },
    {
      question: "Thao tác sao chép (Copy) tệp tin khác với thao tác di chuyển (Move) tệp tin ở điểm nào?",
      options: [
        "A. Copy làm đổi tên tệp gốc, Move giữ nguyên tên tệp.",
        "B. Copy tạo thêm một bản sao độc lập tại vị trí mới; Move chuyển tệp sang vị trí mới và vị trí cũ không còn tệp.",
        "C. Copy đưa tệp vào Thùng rác, Move xóa vĩnh viễn tệp.",
        "D. Copy chỉ áp dụng cho thư mục, Move chỉ áp dụng cho tệp."
      ],
      answer: "B",
      explanation: "Copy (Ctrl+C) tạo thêm bản sao mới ở thư mục đích; Move (Ctrl+X) di chuyển tệp gốc sang vị trí mới."
    },
    {
      question: "Khi xóa một tệp tin bằng phím Delete thông thường trên Windows, tệp đó sẽ được chuyển đến đâu?",
      options: [
        "A. Xóa vĩnh viễn khỏi ổ cứng.",
        "B. Chuyển vào thư mục Downloads.",
        "C. Chuyển vào Thùng rác (Recycle Bin) và có thể khôi phục (Restore).",
        "D. Chuyển sang ổ đĩa D:."
      ],
      answer: "C",
      explanation: "Phím Delete chuyển tệp vào Recycle Bin để người dùng có thể Restore nếu cần. Tổ hợp Shift + Delete mới xóa vĩnh viễn."
    },
    {
      question: "Một học sinh đổi tên tệp 'baitap.docx' thành 'baitap.pdf' bằng cách sửa trực tiếp tên tệp. Phát biểu nào sau đây đúng?",
      options: [
        "A. Tệp Word tự động chuyển thành tệp PDF chuẩn.",
        "B. Tệp chỉ bị thay đổi phần mở rộng trên tên, không biến nội dung Word thành định dạng PDF thực tế.",
        "C. Tệp bị xóa vĩnh viễn khỏi hệ thống.",
        "D. Dung lượng tệp giảm đi một nửa."
      ],
      answer: "B",
      explanation: "Đổi tên phần mở rộng không làm thay đổi định dạng cấu trúc dữ liệu bên trong tệp mà chỉ khiến HĐH hiểu sai ứng dụng cần mở."
    },
    {
      question: "Về việc sử dụng công cụ Optimize / Defragment (Tối ưu hóa / Chống phân mảnh ổ đĩa), kết luận nào sau đây chuẩn xác nhất?",
      options: [
        "A. SSD và HDD đều phải dồn đĩa (Defragment) thủ công hàng tuần.",
        "B. HDD bị phân mảnh dữ liệu nên cần Optimize/Defrag; SSD KHÔNG nên tự ý defrag thủ công vì gây giảm tuổi thọ chip nhớ.",
        "C. SSD bị phân mảnh nặng hơn HDD rất nhiều.",
        "D. Optimize là công cụ dùng để gỡ bỏ phần mềm virus."
      ],
      answer: "B",
      explanation: "HDD có đầu đọc cơ học nên cần defrag để gom dữ liệu liên tục. SSD dùng chip nhớ Flash, không có đầu đọc cơ học, HĐH sẽ tự điều phối tối ưu (Trim) thay vì defrag thủ công."
    },
    {
      question: "Tổ hợp phím nào dùng để mở Lịch sử bộ nhớ tạm (Clipboard History) trên Windows 10/11?",
      options: [
        "A. Ctrl + V",
        "B. Alt + Tab",
        "C. Win + V",
        "D. Win + Shift + S"
      ],
      answer: "C",
      explanation: "Phím Win + V mở bảng Lịch sử Clipboard để người dùng chọn dán lại các mục văn bản/hình ảnh đã sao chép trước đó."
    },
    {
      question: "Tổ hợp phím nào giúp chụp nhanh một vùng màn hình tùy chọn (Snipping Tool)?",
      options: [
        "A. Win + Shift + S",
        "B. Ctrl + Alt + Delete",
        "C. Shift + F2",
        "D. Alt + F4"
      ],
      answer: "A",
      explanation: "Win + Shift + S mở công cụ chụp ảnh màn hình Snipping Tool cho phép chụp vùng tùy chọn, cửa sổ hoặc toàn màn hình."
    },
    {
      question: "Tại sao không nên tự ý cài đặt các tệp ứng dụng di động (.apk) không rõ nguồn gốc từ Internet?",
      options: [
        "A. Vì làm tăng độ phân giải màn hình điện thoại.",
        "B. Vì các tệp này có nguy cơ chứa mã độc, vi-rút gây mất an toàn thông tin và tài khoản cá nhân.",
        "C. Vì điện thoại sẽ tự động bị khóa danh bạ.",
        "D. Vì ứng dụng di động chỉ chạy được trên PC."
      ],
      answer: "B",
      explanation: "Cài app ngoài chợ ứng dụng chính thức (Google Play / App Store) rất dễ dính malware đánh cắp dữ liệu cá nhân."
    },
    {
      question: "Thanh công việc Taskbar trên Windows có chức năng chính là gì?",
      options: [
        "A. Lưu trữ tập tin đã xóa.",
        "B. Chống phân mảnh ổ đĩa cứng.",
        "C. Hỗ trợ truy cập nhanh, hiển thị và chuyển đổi các ứng dụng đang chạy cùng các chức năng hệ thống.",
        "D. Tạo bản sao lưu định kỳ cho máy tính."
      ],
      answer: "C",
      explanation: "Taskbar nằm ở cạnh dưới màn hình giúp quản lý tiến trình ứng dụng, ghim ứng dụng và truy cập System Tray."
    },
    {
      question: "Để kiểm tra và khắc phục lỗi hệ thống tệp trên một ổ đĩa trong File Explorer, bạn sử dụng thao tác nào?",
      options: [
        "A. Click chuột phải ổ đĩa -> Properties -> Thẻ Tools -> Chọn Check.",
        "B. Bấm Shift + Delete vào biểu tượng ổ đĩa.",
        "C. Mở Calculator -> Gõ lệnh Check.",
        "D. Kéo ổ đĩa thả vào Recycle Bin."
      ],
      answer: "A",
      explanation: "Thao tác Properties -> Tools -> Check trên ổ đĩa giúp kiểm tra và quét khắc phục lỗi hệ thống tệp."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Phân biệt thao tác Sao chép (Copy) và Di chuyển (Move) trong tình huống thực tế",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Trong File Explorer, bạn Bình thực hiện thao tác: Chọn tệp `DeCuongOnTap.docx` trong thư mục `Documents`, nhấn tổ hợp phím `Ctrl + C`, sau đó mở thư mục `USB_Data` và nhấn `Ctrl + V`. Hỏi sau thao tác này, tệp `DeCuongOnTap.docx` nằm ở đâu trên máy tính?",
      method: "⚡ Phương pháp giải nhanh:\n1. Xác định tổ hợp phím: `Ctrl + C` + `Ctrl + V` = Thao tác Sao chép (Copy).\n2. Bản chất Copy: Tạo thêm một bản sao độc lập tại thư mục đích, tệp gốc tại thư mục nguồn vẫn được bảo toàn nguyên vẹn.\n3. Nếu đề bài dùng `Ctrl + X` (Cut / Move) thì tệp gốc ở vị trí cũ sẽ bị xóa và chỉ tồn tại ở vị trí mới.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• Tệp `DeCuongOnTap.docx` sẽ xuất hiện ở CẢ HAI NƠI: thư mục `Documents` (vị trí gốc) và thư mục `USB_Data` (vị trí đích).\n• Điểm ăn điểm trong bài thi: Học sinh cần giải thích rõ Copy tạo bản sao nhân đôi, không xóa tệp gốc."
    },
    {
      title: "Dạng 2: Phân tích bẫy đổi tên tệp và phần mở rộng (Extension: .docx, .pdf, .jpg)",
      tag: "Bẫy Lý thuyết & Thực hành",
      sampleQuestion: "Một học sinh đổi tên tệp `BaoCaoTinHoc.docx` thành `BaoCaoTinHoc.pdf` bằng cách nhấn phím F2 và gõ lại tên. Khi nháy đúp chuột để mở tệp thì máy tính báo lỗi định dạng. Phát biểu nào sau đây giải thích đúng bản chất hiện tượng trên?",
      method: "⚡ Phương pháp giải nhanh:\n1. Phần mở rộng (Extension) đứng sau dấu chấm cuối cùng của tên tệp, chỉ đóng vai trò là 'nhãn nhận diện' để HĐH biết nên dùng phần mềm nào mở tệp.\n2. Đổi tên phần mở rộng KHÔNG làm thay đổi cấu trúc dữ liệu nhị phân (binary format) bên trong tệp.\n3. Muốn đổi từ Word sang PDF bắt buộc phải qua bước biên dịch/chuyển đổi (Save As PDF / Export PDF).",
      solution: "✅ Đáp án & Giải thích chi tiết:\n• Việc đổi tên trực tiếp khiến HĐH hiểu lầm đây là tệp PDF và tự động gọi phần mềm đọc PDF (Adobe Acrobat / Chrome / Edge) để mở. Phần mềm PDF không giải mã được cấu trúc dữ liệu Word (.docx) nên báo lỗi tệp hỏng (Corrupted file).\n• Tệp gốc bên trong thực chất vẫn là tệp Word nguyên vẹn. Chỉ cần đổi tên lại thành `.docx` là mở lại bình thường."
    },
    {
      title: "Dạng 3: Phân biệt cơ chế Xóa thường (Delete) và Xóa vĩnh viễn (Shift + Delete)",
      tag: "Nhận biết & Thông hiểu",
      sampleQuestion: "Cho hai thao tác xóa tệp trên ổ đĩa máy tính Windows: (A) Nhấn phím `Delete` đơn thuần, (B) Nhấn tổ hợp phím `Shift + Delete`. Nêu sự khác biệt cốt lõi về khả năng khôi phục (Restore) và giải phóng dung lượng đĩa giữa hai thao tác này.",
      method: "⚡ Phương pháp giải nhanh:\n• Phím `Delete`: Chuyển tệp vào Recycle Bin -> Chưa giải phóng dung lượng đĩa -> Khôi phục dễ dàng bằng nút Restore.\n• Tổ hợp `Shift + Delete`: Bỏ qua Recycle Bin -> Giải phóng ngay bảng chỉ mục (MFT) -> Không thể khôi phục từ Recycle Bin theo cách thông thường.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n1. Thao tác Delete thông thường: Tệp chỉ bị đổi vị trí sang thư mục tạm Thùng rác (Recycle Bin). Dung lượng ổ đĩa chưa được giải phóng. Người dùng có thể vào Recycle Bin -> Click chuột phải -> Chọn Restore để đưa tệp về vị trí ban đầu.\n2. Thao tác Shift + Delete: HĐH xóa vĩnh viễn tệp khỏi bảng phân phối tập tin và đánh dấu vùng nhớ đó là sẵn sàng ghi đè. Không thể lấy lại bằng Recycle Bin.\n⚠️ Lưu ý thi cử: Xóa tệp trên USB / thẻ nhớ ngoài bằng phím Delete thông thường cũng sẽ bị xóa trực tiếp (không qua Recycle Bin)."
    },
    {
      title: "Dạng 4: Phân biệt cơ chế Tối ưu hóa / Chống phân mảnh đĩa (Optimize) giữa HDD và SSD",
      tag: "Câu hỏi Phân hóa Điểm 9-10",
      sampleQuestion: "Tại sao công cụ Optimize / Defragment trên Windows được khuyến nghị chạy định kỳ cho ổ đĩa cứng cơ học (HDD) nhưng các chuyên gia lại khuyên KHÔNG NÊN tự ý dồn đĩa (Defragment) thủ công cho ổ đĩa thể rắn (SSD)?",
      method: "⚡ Phương pháp so sánh bản chất vật lý:\n• HDD: Đĩa từ quay + đầu đọc cơ học di chuyển -> Bị chậm khi dữ liệu bị phân mảnh rải rác -> Cần Defrag để gom cụm dữ liệu liên tục.\n• SSD: Chip nhớ Flash thể rắn (NAND Flash) -> Tốc độ đọc ngẫu nhiên tức thời -> Có giới hạn số lần ghi/xóa (Write Cycles) -> Defrag làm tăng chu kỳ ghi vô ích gây giảm tuổi thọ SSD.",
      solution: "✅ Đáp án & Giải thích chi tiết:\n1. Với HDD: Dữ liệu phân mảnh khiến đầu đọc cơ học phải di chuyển qua lại liên tục giữa các cung từ (sector), làm giảm tốc độ đọc/ghi. Defragment giúp gom các mảnh tệp lại gần nhau, tăng tốc độ truy xuất.\n2. Với SSD: Do không có bộ phận cơ học quay, thời gian truy cập mọi ô nhớ là như nhau nên hiện tượng phân mảnh không làm SSD bị chậm. Việc dồn đĩa thủ công sẽ thực hiện hàng nghìn lượt ghi/xóa không cần thiết, làm tiêu hao tuổi thọ chip nhớ của SSD.\n3. HĐH Windows hiện đại tự nhận biết ổ SSD và chỉ gửi lệnh tối ưu hóa TRIM để dọn sạch các khối dữ liệu thừa."
    },
    {
      title: "Dạng 5: Nhận diện tiện ích HĐH & Bộ phím tắt quản lý hệ thống thường gặp",
      tag: "Trắc nghiệm Nhận biết Nhanh",
      sampleQuestion: "Hãy nối từng phím tắt ở cột Trái với chức năng chính xác tương ứng ở cột Phải:\n(1) F2\n(2) Win + E\n(3) Win + Shift + S\n(4) Win + V",
      method: "⚡ Bộ thẻ ghi nhớ phím tắt cốt lõi:\n• F2 = Đổi tên (Rename)\n• Win + E = Mở File Explorer (E = Explorer)\n• Win + Shift + S = Chụp ảnh màn hình (Snipping Tool)\n• Win + V = Mở Lịch sử bộ nhớ tạm (Clipboard History)",
      solution: "✅ Đáp án chính xác:\n• (1) F2 ➜ Đổi tên nhanh tệp hoặc thư mục đang chọn.\n• (2) Win + E ➜ Khởi động tiện ích quản lý tệp tin File Explorer.\n• (3) Win + Shift + S ➜ Bật công cụ Snipping Tool chụp ảnh màn hình theo vùng chọn.\n• (4) Win + V ➜ Mở bảng Lịch sử Clipboard (Clipboard History) để chọn dán nhiều nội dung đã sao chép."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Kiểm tra Toàn diện Kiến thức Cốt lõi (5 Câu hỏi Tự luận Phân tích)",
      tag: "Lý thuyết & Bản chất",
      problem: "Hãy đọc kỹ và trả lời ngắn gọn, chính xác 5 câu hỏi lý thuyết cốt lõi về Quản lý Tệp & Tiện ích Hệ điều hành:",
      tasks: [
        "Câu 1: Phân biệt bản chất giữa File (Tệp tin), Folder (Thư mục), Shortcut (Đường tắt) và Application (Phần mềm ứng dụng)? Cho ví dụ minh họa.",
        "Câu 2: So sánh sự khác nhau cơ bản giữa 2 thao tác Sao chép (Copy: Ctrl+C) và Di chuyển (Move: Ctrl+X) về vị trí tệp gốc và bản sao. Thao tác Đổi tên (Rename) có làm mất nội dung bên trong tệp không?",
        "Câu 3: Tiện ích File Explorer (Win + E) trên Windows đóng vai trò gì? Nêu 3 chức năng chính mà em thường sử dụng nhất trong File Explorer.",
        "Câu 4: Thùng rác (Recycle Bin) hoạt động như thế nào? Xóa tệp bằng phím Delete khác gì so với tổ hợp phím Shift + Delete?",
        "Câu 5: Tại sao người dùng không nên tùy tiện sửa phần mở rộng (đuôi tệp như .docx, .png, .mp4, .pdf) khi đổi tên tệp?"
      ],
      requirements: "Tự trình bày câu trả lời bằng ngôn ngữ cá nhân, không sao chép máy móc.",
      hint: "Bám sát các mục II, III, IV và VI trong phần Lý thuyết của bài học.",
      solution: `1. Phân biệt 4 khái niệm nền tảng:
• File (Tệp tin): Đơn vị lưu trữ dữ liệu cơ bản có tên và phần mở rộng (ví dụ: BaiHoc.docx, Anh.jpg).
• Folder (Thư mục): Cấu trúc tổ chức phân cấp dùng để chứa các file và folder con khác.
• Shortcut (Đường tắt): Tệp liên kết trỏ tới một tệp, thư mục hoặc ứng dụng khác để mở nhanh (dung lượng chỉ vài KB).
• Application (Ứng dụng): Chương trình phần mềm chạy trên HĐH để thực hiện tác vụ cụ thể (Word, Excel, Chrome).

2. So sánh Copy vs Move:
• Copy (Ctrl+C ➜ Ctrl+V): Tạo một bản sao mới tại thư mục đích; tệp gốc tại vị trí cũ vẫn giữ nguyên vẹn.
• Move (Ctrl+X ➜ Ctrl+V): Chuyển đối tượng sang vị trí mới; vị trí cũ không còn tệp.
• Thao tác Đổi tên (F2): Chỉ thay đổi tên hiển thị trong hệ thống tệp, KHÔNG làm mất hoặc thay đổi nội dung dữ liệu bên trong.

3. Vai trò của File Explorer (Win + E):
• Là tiện ích trung tâm quản lý toàn bộ ổ đĩa cứng (C:, D:), cây thư mục phân cấp và các tệp dữ liệu trên máy tính.
• 3 chức năng chính: (1) Duyệt và tổ chức thư mục/tệp; (2) Tìm kiếm dữ liệu nhanh bằng ô Search; (3) Quản lý dung lượng và thuộc tính ổ đĩa (Properties).

4. Cơ chế của Thùng rác (Recycle Bin):
• Phím Delete: Chuyển tệp vào Recycle Bin để lưu tạm, người dùng có thể nhấp chuột phải chọn 'Restore' để khôi phục lại khi cần.
• Phím Shift + Delete: Xóa vĩnh viễn tệp trực tiếp khỏi ổ đĩa, bỏ qua Recycle Bin và không thể khôi phục theo cách thông thường.

5. Lý do không tùy tiện đổi phần mở rộng:
• Phần mở rộng là ký hiệu nhận diện định dạng dữ liệu giúp HĐH chọn đúng phần mềm để mở tệp.
• Tự ý đổi đuôi (ví dụ .docx thành .pdf) không biến đổi dữ liệu thực tế mà khiến HĐH dùng sai phần mềm đọc, dẫn đến lỗi hỏng tệp.`
    },
    {
      title: "Bài tập Tình huống 1: Chuẩn hóa Cấu trúc Thư mục Học tập Cá nhân",
      tag: "Tình huống Thực tế",
      scenario: "Thư mục 'Downloads' của bạn An sau một học kỳ trở nên vô cùng lộn xộn với 8 tệp tin nằm rải rác: `bai1_he_dieu_hanh.docx`, `bai2_thuc_hanh.docx`, `de_kiem_tra_1.pdf`, `de_giua_ky.pdf`, `anh_thuc_hanh_1.png`, `so_do_he_thong.jpg`, `bai_tap_nhom.xlsx`, `slide_thuyet_trinh.pptx`.",
      problem: "Em hãy giúp bạn An xây dựng lại một hệ thống thư mục khoa học và sắp xếp các tệp dữ liệu vào đúng vị trí một cách logic.",
      tasks: [
        "Nhiệm vụ 1: Thiết kế cấu trúc cây thư mục chuẩn bắt đầu từ thư mục gốc TIN_HOC_11 với ít nhất 4 thư mục con (ví dụ: LY_THUYET, BAI_TAP, DE_THI, HINH_ANH, BACKUP).",
        "Nhiệm vụ 2: Phân loại và chỉ định chính xác từng tệp trong số 8 tệp trên sẽ được Di chuyển (Move) vào thư mục con nào.",
        "Nhiệm vụ 3: Giải thích lý do vì sao cần có thêm thư mục BACKUP và hướng dẫn An thao tác sao chép (Copy) tệp quan trọng vào đó.",
        "Nhiệm vụ 4: Đề xuất một quy tắc đặt tên tệp thống nhất cho An để các bài học sau này không bị nhầm lẫn."
      ],
      requirements: "Vẽ sơ đồ cây thư mục và lập bảng phân loại tệp rõ ràng.",
      solution: `1. Thiết kế Cấu trúc Cây Thư mục chuẩn:
TIN_HOC_11
├── 01_LY_THUYET        (Chứa bài giảng lý thuyết Word/PDF/PowerPoint)
├── 02_BAI_TAP          (Chứa bài tập thực hành, bài làm nhóm)
├── 03_DE_THI           (Chứa đề kiểm tra, đề ôn tập)
├── 04_HINH_ANH         (Chứa ảnh chụp màn hình, sơ đồ tư duy)
└── 05_BACKUP           (Chứa bản sao lưu dự phòng các tài liệu quan trọng)

2. Bảng phân bổ di chuyển 8 tệp tin (Dùng thao tác Move / Ctrl+X -> Ctrl+V):
• bai1_he_dieu_hanh.docx   ➜ Chuyển vào 01_LY_THUYET
• slide_thuyet_trinh.pptx  ➜ Chuyển vào 01_LY_THUYET
• bai2_thuc_hanh.docx      ➜ Chuyển vào 02_BAI_TAP
• bai_tap_nhom.xlsx        ➜ Chuyển vào 02_BAI_TAP
• de_kiem_tra_1.pdf        ➜ Chuyển vào 03_DE_THI
• de_giua_ky.pdf           ➜ Chuyển vào 03_DE_THI
• anh_thuc_hanh_1.png      ➜ Chuyển vào 04_HINH_ANH
• so_do_he_thong.jpg       ➜ Chuyển vào 04_HINH_ANH

3. Lý do cần thư mục BACKUP:
• Phòng ngừa rủi ro mất mát dữ liệu khi chỉnh sửa nhầm, tệp bị hỏng hoặc xóa nhầm.
• Thao tác: Chọn các tệp quan trọng (như bai_tap_nhom.xlsx) -> Nhấn Ctrl + C -> Mở thư mục 05_BACKUP -> Nhấn Ctrl + V để tạo bản sao lưu độc lập.

4. Quy tắc đặt tên tệp chuẩn hóa khuyến nghị:
• Cú pháp: [STT]_[MonHoc]_[TenBai]_[PhienBan].[ext]
• Ví dụ: B02_TinHoc11_ThucHanhQuanLyTep_v1.0.docx`
    },
    {
      title: "Bài tập Tình huống 2: Giải cứu Tệp tin bị lỗi do Đổi Phần Mở Rộng (.docx -> .pdf)",
      tag: "Phân tích & Khắc phục Lỗi",
      scenario: "Bạn Lan soạn thảo xong bài báo cáo môn Tin học bằng Microsoft Word và lưu lại với tên `BaoCaoTinHoc.docx`. Để nộp bài định dạng PDF theo yêu cầu của giáo viên, Lan đã dùng phím F2 đổi tên tệp trực tiếp thành `BaoCaoTinHoc.pdf`. Khi nháy đúp chuột để mở tệp thì phần mềm đọc PDF báo lỗi: 'The file is corrupted or not a supported format' (Tệp bị lỗi hoặc không đúng định dạng) và Lan hoảng hốt tưởng rằng toàn bộ bài làm đã bị mất trắng.",
      problem: "Em hãy đóng vai trò là một chuyên viên hỗ trợ kỹ thuật máy tính để giải thích và xử lý tình huống cho Lan.",
      tasks: [
        "Nhiệm vụ 1: Giải thích bản chất vì sao phần mềm đọc PDF lại báo lỗi khi mở tệp vừa đổi tên? Đổi tên phần mở rộng có biến nội dung Word thành PDF thực sự không?",
        "Nhiệm vụ 2: Hướng dẫn Lan các bước cụ thể để khôi phục lại tệp Word ban đầu mà không bị mất dữ liệu.",
        "Nhiệm vụ 3: Hướng dẫn Lan cách xuất (Export / Save As) một tệp Word thành tệp PDF chuẩn và đúng kỹ thuật nhất trong Microsoft Word."
      ],
      requirements: "Chỉ rõ nguyên nhân, thao tác sửa lỗi và thao tác xuất PDF chuẩn.",
      solution: `1. Giải thích nguyên nhân bản chất:
• Đổi tên phần mở rộng (Extension) chỉ làm thay đổi 'nhãn nhận diện' bề ngoài của tệp, KHÔNG làm thay đổi cấu trúc dữ liệu nhị phân bên trong.
• Nội dung bên trong tệp vẫn mang cấu trúc nén XML của Word (.docx). Khi đổi đuôi thành .pdf, hệ điều hành tự động gọi phần mềm đọc PDF (như Adobe Acrobat / Edge) để mở. Phần mềm PDF không thể giải mã được định dạng Word nên hiển thị thông báo lỗi file hỏng (Corrupted).
• Dữ liệu bài làm của Lan thực chất KHÔNG bị mất.

2. Các bước khôi phục lại tệp Word ban đầu:
• Bước 1: Mở File Explorer và tìm đến tệp BaoCaoTinHoc.pdf.
• Bước 2: Nhấp chọn tệp và nhấn phím F2 (hoặc click chuột phải -> Rename).
• Bước 3: Đổi phần đuôi '.pdf' trở lại thành '.docx' (thành BaoCaoTinHoc.docx) rồi nhấn Enter.
• Bước 4: Nếu Windows hiện cảnh báo 'If you change a file name extension, the file might become unusable', chọn 'Yes'.
• Bước 5: Nháy đúp chuột để mở lại bình thường bằng Microsoft Word.

3. Hướng dẫn xuất tệp Word sang PDF chuẩn xác:
• Cách 1 (Khuyên dùng): Trong Microsoft Word -> Vào thẻ File -> Chọn 'Save As' -> Tại ô 'Save as type', chọn 'PDF (*.pdf)' -> Nhấn Save.
• Cách 2: Vào thẻ File -> Chọn 'Export' -> Chọn 'Create PDF/XPS Document' -> Đặt tên và nhấn Publish.`
    },
    {
      title: "Bài tập Tình huống 3: Đóng gói & Nén Thư mục Dự án (.ZIP) gửi qua Email",
      tag: "Tiện ích Nén Tệp",
      scenario: "Bạn Nam vừa hoàn thành bài tập dự án nhóm gồm 1 thư mục `DuAn_TinHoc11` chứa 45 tệp tin (gồm ảnh chụp tư liệu, tài liệu Word, bảng tính Excel, video ngắn). Khi đính kèm cả thư mục vào Email để gửi cho cô giáo, hệ thống Email báo lỗi không hỗ trợ tải trực tiếp cả thư mục lên mà yêu cầu đính kèm từng tệp đơn lẻ.",
      problem: "Em hãy giúp Nam xử lý vấn đề trên một cách nhanh gọn, chuyên nghiệp nhất.",
      tasks: [
        "Nhiệm vụ 1: Giải thích tại sao hệ thống Email không cho phép tải trực tiếp một thư mục thô chưa nén?",
        "Nhiệm vụ 2: Hướng dẫn Nam từng bước thao tác sử dụng tính năng nén có sẵn trên Windows (Compressed / ZIP Folder) để đóng gói thư mục.",
        "Nhiệm vụ 3: Nêu 2 lợi ích lớn nhất của việc nén thư mục (về dung lượng và tính toàn vẹn của tệp) khi gửi dữ liệu qua Internet."
      ],
      requirements: "Nêu rõ các bước nén trên Windows 10/11 và cách giải nén khi nhận bài.",
      solution: `1. Lý do Email không nhận thư mục thô:
• Giao thức truyền thư điện tử (Email) được thiết kế để đính kèm các tệp tin đơn lẻ (Files) có luồng dữ liệu liên tục, không thể truyền trực tiếp một cấu trúc thư mục chứa nhiều tệp rải rác bên trong.

2. Hướng dẫn thao tác nén thư mục trên Windows:
• Trên Windows 10:
  - Click chuột phải vào thư mục 'DuAn_TinHoc11'.
  - Chọn 'Send to' ➜ Chọn 'Compressed (zipped) folder'.
• Trên Windows 11:
  - Click chuột phải vào thư mục 'DuAn_TinHoc11'.
  - Chọn biểu tượng hoặc mục 'Compress to ZIP file'.
• Kết quả: Hệ thống tạo ra một tệp duy nhất tên 'DuAn_TinHoc11.zip'. Nam chỉ cần đính kèm tệp .zip này vào Email.

3. 2 lợi ích lớn nhất của việc nén ZIP:
• Tính toàn vẹn & Tiện lợi: Gom toàn bộ 45 tệp tin và giữ nguyên cấu trúc thư mục phân cấp bên trong thành 1 tệp duy nhất, tránh bị thất lạc hoặc sót file.
• Giảm dung lượng truyền tải: Thuật toán nén không mất mát dữ liệu giúp giảm bớt kích thước tổng thể, tiết kiệm băng thông và gửi nhanh hơn qua Email.

💡 Hướng dẫn cô giáo giải nén khi nhận tệp: Click chuột phải vào tệp .zip ➜ Chọn 'Extract All...' ➜ Chọn 'Extract'.`
    },
    {
      title: "Bài tập Thực hành Máy tính: Quy trình 10 Bước Quản trị Tệp Chuẩn Chuyên Nghiệp",
      tag: "Thực hành Máy tính Bắt buộc",
      problem: "Mở máy tính, khởi động hệ điều hành Windows và thực hiện tuần tự 10 bước thao tác quản lý tệp theo đúng tiêu chuẩn kỹ thuật sau:",
      tasks: [
        "Bước 1: Nhấn tổ hợp phím Win + E mở File Explorer, truy cập vào thư mục Documents.",
        "Bước 2: Tạo thư mục gốc mới với tên TIN_HOC_11_[TenHocSinh] (Ví dụ: TIN_HOC_11_NguyenVanA).",
        "Bước 3: Bên trong thư mục gốc, tạo 5 thư mục con: 01_LY_THUYET, 02_BAI_TAP, 03_DE_THI, 04_HINH_ANH, 05_BACKUP.",
        "Bước 4: Trong thư mục 01_LY_THUYET, tạo 3 tệp tin văn bản Notepad (.txt) với tên: Bai1.txt, Bai2.txt, Bai3.txt.",
        "Bước 5: Sử dụng phím F2 đổi tên Bai1.txt thành Bai1_HeDieuHanh.txt và Bai2.txt thành Bai2_ThucHanhTapTin.txt.",
        "Bước 6: Thực hiện thao tác Sao chép (Copy: Ctrl+C -> Ctrl+V) tệp Bai2_ThucHanhTapTin.txt sang thư mục 05_BACKUP.",
        "Bước 7: Thực hiện thao tác Di chuyển (Move: Ctrl+X -> Ctrl+V) tệp Bai3.txt từ 01_LY_THUYET sang thư mục 02_BAI_TAP.",
        "Bước 8: Xóa tệp Bai3.txt trong 02_BAI_TAP bằng phím Delete (chuyển vào Recycle Bin).",
        "Bước 9: Mở Recycle Bin trên Desktop, tìm tệp Bai3.txt, click chuột phải chọn Restore để khôi phục lại vị trí cũ và kiểm tra.",
        "Bước 10: Sử dụng ô Search trong File Explorer gõ *.txt để tìm kiếm nhanh tất cả các tệp văn bản vừa tạo, sau đó dùng phím tắt Win + Shift + S chụp lại toàn bộ cây thư mục để gửi kết quả."
      ],
      requirements: "Chụp 1 ảnh màn hình thể hiện cây thư mục hoàn chỉnh (dùng Snipping Tool Win+Shift+S) để nộp cho giáo viên.",
      solution: `Checklist đánh giá kết quả thực hành (10/10 Điểm):
✓ [1.0đ] Mở nhanh File Explorer bằng Win + E và tạo đúng tên thư mục gốc.
✓ [1.5đ] Tạo đủ 5 thư mục con đúng cấu trúc phân loại.
✓ [1.0đ] Tạo đúng 3 file .txt trong 01_LY_THUYET.
✓ [1.0đ] Đổi tên chuẩn bằng phím F2, giữ nguyên phần mở rộng .txt.
✓ [1.0đ] Thao tác Copy đúng vào 05_BACKUP (file gốc ở 01_LY_THUYET vẫn còn).
✓ [1.0đ] Thao tác Move đúng sang 02_BAI_TAP (file ở 01_LY_THUYET không còn).
✓ [1.0đ] Xóa Delete đúng vào Recycle Bin.
✓ [1.0đ] Khôi phục Restore thành công từ Recycle Bin.
✓ [0.5đ] Dùng ô Search với từ khóa wildcard *.txt chính xác.
✓ [1.0đ] Chụp ảnh màn hình bằng Win + Shift + S rõ nét, đầy đủ thông tin.`
    },
    {
      title: "Thử thách Nâng cao (Dành cho HS Khá Giỏi): Thiết kế Hệ thống Lưu trữ Dự án 1.000 Tệp",
      tag: "Thử thách Vận dụng Cao",
      scenario: "Câu lạc bộ Truyền thông trường em gồm 10 thành viên cùng tham gia tổ chức chuỗi sự kiện trong năm học. Dự kiến trong 1 năm sẽ phát sinh hơn 1.000 tệp dữ liệu hỗn hợp (ảnh chụp RAW/JPG, video phóng sự MP4, kịch bản Word .docx, bảng dự toán Excel .xlsx, slide thuyết trình .pptx, ấn phẩm poster .png/.psd).",
      problem: "Với tư cách là Trưởng ban Kỹ thuật, em hãy thiết kế một hệ thống quản lý dữ liệu toàn diện để tránh tình trạng lưu đè, mất tệp hoặc khó tìm kiếm.",
      tasks: [
        "Nhiệm vụ 1: Thiết kế sơ đồ cây thư mục 3 cấp logic, phân cấp theo Năm học -> Tên Sự kiện -> Loại Tài nguyên.",
        "Nhiệm vụ 2: Xây dựng quy tắc chuẩn hóa tên tệp (File Naming Standard) mẫu. Ví dụ: [YYYY-MM-DD]_[SuKien]_[NoiDung]_[NguoiTao]_[vX.X].[ext].",
        "Nhiệm vụ 3: Đề xuất phương án sao lưu dự phòng an toàn (Backup Strategy) kết hợp giữa ổ cứng máy tính và lưu trữ đám mây (Google Drive / OneDrive) theo nguyên tắc sao lưu 3-2-1."
      ],
      requirements: "Trình bày giải pháp có tính khả thi thực tế cao, phân quyền và quy trình rõ ràng.",
      solution: `1. Mô hình Cây Thư mục 3 Cấp Chuyên nghiệp:
CLB_TRUYEN_THONG_2026-2027
├── 01_SU_KIEN
│   ├── 2026-09_KhaiGiang
│   │   ├── 01_KichBan (Word, PDF)
│   │   ├── 02_HinhAnh_Goc (JPG, RAW)
│   │   ├── 03_ThietKe_Poster (PSD, PNG)
│   │   └── 04_Video_HauKy (MP4, Premiere)
│   └── 2026-11_NgayNhaGiao
├── 02_TAI_CHINH_DU_TOAN (Excel, BienLai)
├── 03_AN_PHAM_THUONG_DUNG (Logo, Font, Template)
└── 04_SUBMISSION_NOI_BO (Các bài nộp đã duyệt)

2. Quy chuẩn đặt tên tệp thống nhất (Naming Convention):
• Công thức: [YYYYMMDD]_[TenSuKien]_[HangMuc]_[NguoiChinhSua]_[PhiênBản].[ext]
• Ví dụ:
  - 20260905_KhaiGiang_KichBanMC_AnNguyen_v1.2.docx
  - 20260905_KhaiGiang_PosterChinh_BaoLam_Final.png
• Nguyên tắc: Không dấu cách (dùng dấu gạch dưới _), không dấu tiếng Việt, ghi rõ số phiên bản (v1.0, v1.1, Final).

3. Chiến lược Sao lưu Dự phòng theo Nguyên tắc Vàng 3-2-1:
• 3 Bản sao: Luôn duy trì ít nhất 3 bản sao dữ liệu của dự án.
• 2 Loại phương tiện lưu trữ:
  - Bản 1 & 2: Lưu trên ổ cứng máy tính trạm làm việc và 1 ổ cứng di động cắm ngoài (HDD/SSD External).
• 1 Bản lưu trữ đám mây ngoài cơ sở (Off-site Cloud):
  - Bản 3: Đồng bộ tự động lên Google Drive / Microsoft OneDrive dung lượng trường học để tránh rủi ro mất điện thoại, hỏng máy tính hoặc chập cháy.`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b2-1",
      badge: "Bài 1 – 3 phút",
      title: "Bài 1 – Tạo cấu trúc thư mục (TIN_HOC_11)",
      duration: "3 phút",
      type: "exercise",
      description: "Biết tạo thư mục, tổ chức dữ liệu theo cấu trúc và làm quen với File Explorer.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 3 phút. Học sinh tự tạo đúng cấu trúc thư mục mà không cần giáo viên hướng dẫn từng bước.",
        requirements: [
          "Tạo thư mục chính: TIN_HOC_11",
          "Tạo thư mục con 1: BAI_HOC",
          "Tạo thư mục con 2: BAI_TAP",
          "Tạo thư mục con 3: DE_THI",
          "Tạo thư mục con 4: HINH_ANH"
        ],
        submissionHint: "Giáo viên kiểm tra: Học sinh phải tự tạo đúng cây thư mục TIN_HOC_11 > BAI_HOC, BAI_TAP, DE_THI, HINH_ANH trên máy tính."
      }
    },
    {
      id: "practice-b2-2",
      badge: "Bài 2 – 3 phút",
      title: "Bài 2 – Tạo và đổi tên File / Folder (Bai1_HeDieuHanh)",
      duration: "3 phút",
      type: "exercise",
      description: "Tạo các thư mục Bai1, Bai2, Bai3 trong BAI_HOC và đổi tên Bai1 thành Bai1_HeDieuHanh.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 3 phút. Thành thạo thao tác tạo mới và đổi tên thư mục.",
        requirements: [
          "Trong thư mục BAI_HOC: Tạo 3 thư mục con: Bai1, Bai2, Bai3.",
          "Thao tác đổi tên: Đổi tên thư mục Bai1 thành Bai1_HeDieuHanh (sử dụng phím F2 hoặc click chuột phải -> Rename)."
        ],
        qaList: [
          { q: "Đổi tên một folder có làm mất dữ liệu bên trong folder đó không?", a: "Đáp án: KHÔNG. Đổi tên chỉ thay đổi tên hiển thị của đối tượng, không xóa nội dung bên trong." }
        ]
      }
    },
    {
      id: "practice-b2-3",
      badge: "Bài 3 – 4 phút",
      title: "Bài 3 – Thao tác Copy và Move (Tạo bản sao vs Chuyển vị trí)",
      duration: "4 phút",
      type: "exercise",
      description: "Tạo BaiTap1.txt, BaiTap2.txt trong BAI_TAP. Copy BaiTap1.txt sang DE_THI, Move BaiTap2.txt sang BAI_HOC.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 4 phút. Hiểu rõ bản chất Copy (tạo bản sao) và Move (chuyển vị trí).",
        requirements: [
          "Tạo trong thư mục BAI_TAP 2 tệp văn bản: BaiTap1.txt và BaiTap2.txt",
          "Thao tác 1: Copy BaiTap1.txt sang thư mục DE_THI.",
          "Thao tác 2: Move BaiTap2.txt sang thư mục BAI_HOC."
        ],
        qaList: [
          { q: "Sau khi thực hiện xong, BaiTap1.txt có còn ở thư mục BAI_TAP không?", a: "Đáp án: VẪN CÒN. Vì Copy tạo thêm một bản sao độc lập tại thư mục DE_THI." },
          { q: "BaiTap2.txt có còn ở thư mục BAI_TAP không? Vì sao?", a: "Đáp án: KHÔNG CÒN. Vì Move đã chuyển vị trí tệp sang thư mục BAI_HOC." }
        ],
        knowledgeNotice: "💡 KIẾN THỨC CẦN NHỚ:\n• COPY = Tạo thêm bản sao độc lập.\n• MOVE = Thay đổi vị trí của đối tượng trong hệ thống tệp."
      }
    },
    {
      id: "practice-b2-4",
      badge: "Bài 4 – 3 phút",
      title: "Bài 4 – Thao tác Delete và Khôi phục Restore",
      duration: "3 phút",
      type: "exercise",
      description: "Tạo file test.txt, xóa file, mở Recycle Bin tìm test.txt và Restore khôi phục tệp.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 3 phút. Hiểu cơ chế chuyển vào Thùng rác của Windows và xóa vĩnh viễn.",
        requirements: [
          "Bước 1: Tạo file test.txt.",
          "Bước 2: Bấm phím Delete để xóa file.",
          "Bước 3: Mở Recycle Bin (Thùng rác).",
          "Bước 4: Tìm file test.txt và chọn Restore."
        ],
        qaList: [
          { q: "Khi xóa file thông thường trên Windows, file có mất vĩnh viễn ngay không?", a: "Đáp án: Thông thường KHÔNG. File thường được chuyển vào Recycle Bin trước." },
          { q: "Nếu sử dụng tổ hợp phím Shift + Delete thì sao?", a: "Đáp án: File thường bị xóa vĩnh viễn khỏi chỉ mục đĩa mà không chuyển vào Recycle Bin." }
        ]
      }
    },
    {
      id: "practice-b2-5",
      badge: "Bài 5 – 3 phút",
      title: "Bài 5 – Tìm kiếm File bằng ô Search",
      duration: "3 phút",
      type: "exercise",
      description: "Tìm tất cả file .pdf, tìm file có tên chứa 'Bai2', tìm file cụ thể dựa vào một phần tên.",
      content: {
        objective: "Mức độ: Cơ bản → Khá | Thời gian: 3 phút. Sử dụng công cụ Search trong File Explorer để tìm dữ liệu nhanh.",
        requirements: [
          "Giáo viên chuẩn bị khoảng 15-20 file (Bai1.docx, Bai2.docx, DeThi1.pdf, Anh1.jpg...).",
          "Nhiệm vụ 1: Tìm tất cả file .pdf bằng từ khóa '*.pdf'.",
          "Nhiệm vụ 2: Tìm file có tên chứa 'Bai2'.",
          "Nhiệm vụ 3: Tìm một file cụ thể chỉ dựa vào một phần tên."
        ],
        qaList: [
          { q: "Nếu có hàng nghìn file thì ô Search trong File Explorer giúp ích như thế nào?", a: "Đáp án mong đợi: Tìm dữ liệu nhanh hơn rất nhiều; Không cần mở từng thư mục tìm thủ công; Có thể lọc chính xác theo tên hoặc phần mở rộng loại file." }
        ]
      }
    },
    {
      id: "practice-b2-6",
      badge: "Bài 6 – 4 phút",
      title: "Bài 6 – Sắp xếp Thư mục Downloads Lộn xộn",
      duration: "4 phút",
      type: "exercise",
      description: "Tổ chức lại thư mục Downloads chứa 9 tệp lộn xộn (bai1.docx, de1.pdf, anh1.jpg, baitap.docx, slide.pptx...) trong 4 phút.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 4 phút. Kiểm tra khả năng phân loại dữ liệu và tổ chức cấu trúc thư mục hợp lý.",
        requirements: [
          "Tình huống: Downloads chứa bai1.docx, bai2.docx, de1.pdf, de2.pdf, anh1.jpg, anh2.png, baitap.docx, slide.pptx, anh3.jpg.",
          "Nhiệm vụ: Trong 4 phút, tổ chức lại sao cho một học sinh lớp 11 dễ dàng tìm tài liệu sau này.",
          "Gợi ý cấu trúc: TIN_HOC_11 > BAI_HOC, BAI_TAP, DE_THI, HINH_ANH, TAI_LIEU."
        ],
        submissionHint: "Lưu ý đánh giá: Không bắt học sinh phải có đúng một cấu trúc duy nhất. Quan trọng là cấu trúc đó có LOGIC, DỄ TÌM KIẾM và CÓ THỂ MỞ RỘNG về sau."
      }
    },
    {
      id: "practice-b2-7",
      badge: "Bài 7 – 3 phút",
      title: "Bài 7 – Cạm bẫy Phần mở rộng (Bẫy Extension)",
      duration: "3 phút",
      type: "exercise",
      description: "Phân tích tình huống đổi tên baitap.docx thành baitap.pdf và hiểu rõ nguyên tắc chuyển đổi định dạng tệp.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Nhận thức rõ Đổi tên file ≠ Chuyển đổi định dạng file.",
        requirements: [
          "Thực hành tình huống: Đổi tên file baitap.docx thành baitap.pdf.",
          "Thử mở file bằng ứng dụng xem PDF."
        ],
        qaList: [
          { q: "File baitap.docx sau khi đổi tên thành baitap.pdf có thực sự trở thành file PDF không? Tại sao?", a: "Đáp án: KHÔNG. Đổi tên phần mở rộng không làm thay đổi định dạng dữ liệu thực tế bên trong file." }
        ],
        knowledgeNotice: "💡 KIẾN THỨC CẦN NHỚ:\n• ĐỔI TÊN FILE ≠ CHUYỂN ĐỔI ĐỊNH DẠNG FILE.\n• Ví dụ thực tế: Muốn chuyển Word (.docx) -> PDF (.pdf), cần sử dụng chức năng Save as PDF hoặc công cụ chuyển đổi phù hợp."
      }
    },
    {
      id: "practice-b2-8",
      badge: "Bài 8 – 4 phút",
      title: "Bài 8 – Thực hành Sao lưu Dữ liệu (Backup)",
      duration: "4 phút",
      type: "exercise",
      description: "Tạo bản sao dự phòng cho file BAI_HOC\\Bai2_HeDieuHanh.docx sang thư mục BACKUP.",
      content: {
        objective: "Mức độ: Thông hiểu → Khá | Thời gian: 4 phút. Khắc sâu nguyên tắc Backup dữ liệu.",
        requirements: [
          "Tình huống: Có file BAI_HOC\\Bai2_HeDieuHanh.docx",
          "Nhiệm vụ: Tạo bản sao dự phòng vào thư mục BACKUP\\Bai2_HeDieuHanh.docx"
        ],
        qaList: [
          { q: "Tại sao ở thao tác làm bản sao lưu Backup phải dùng Copy chứ không dùng Move?", a: "Đáp án: Vì Backup phải giữ lại file gốc trong thư mục BAI_HOC đồng thời tạo thêm một bản sao dự phòng trong thư mục BACKUP." }
        ],
        knowledgeNotice: "💡 KIẾN THỨC TRỌNG TÂM:\nBackup = Tạo bản dự phòng (Copy) để giảm nguy cơ mất mát dữ liệu."
      }
    },
    {
      id: "practice-b2-9",
      badge: "Bài 9 – 4 phút",
      title: "Bài 9 – Case thực tế: Máy tính Báo đầy Bộ nhớ (Low Disk Space)",
      duration: "4 phút",
      type: "exercise",
      description: "Giải quyết bài toán khi máy tính hiển thị Low Disk Space mà không xóa tùy tiện dữ liệu quan trọng.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 4 phút. Hiểu quy trình dọn dẹp bộ nhớ đĩa an toàn.",
        requirements: [
          "Quy trình xử lý chuẩn:\nKiểm tra dung lượng -> Xác định file/thư mục lớn -> Kiểm tra dữ liệu không cần thiết -> Xóa dữ liệu không cần -> Kiểm tra Recycle Bin -> Gỡ ứng dụng không sử dụng nếu cần -> Kiểm tra lại dung lượng."
        ],
        qaList: [
          { q: "Có được tự ý xóa ngay toàn bộ thư mục Downloads khi máy báo Low Disk Space không?", a: "Đáp án: KHÔNG. Phải kiểm tra nội dung trước vì trong Downloads có thể chứa tài liệu quan trọng, file cài đặt, hình ảnh, bài tập học tập." }
        ],
        submissionHint: "Mục tiêu: Học sinh phải biết không phải cứ 'ổ đĩa đầy' là xóa dữ liệu một cách tùy tiện."
      }
    },
    {
      id: "practice-b2-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử thách Tổng hợp 6 Phút",
      duration: "6 phút",
      type: "exercise",
      description: "Thực hiện chuỗi 7 thao tác tổng hợp trong vòng 6 phút: Tạo thư mục, phân loại 10 tệp, đổi tên, Copy Backup, Search, Delete/Restore và giải thích.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Đánh giá toàn diện năng lực thao tác và tư duy quản lý hệ thống tệp.",
        requirements: [
          "Trong vòng 6 phút thực hiện các nhiệm vụ trong Downloads:\n1. Tạo một hệ thống thư mục hợp lý (BAI_HOC, BAI_TAP, DE_THI, HINH_ANH, BACKUP).\n2. Phân loại toàn bộ 10 file trong Downloads.\n3. Đổi tên Bai2.docx thành Bai2_HeDieuHanh.docx.\n4. Copy file này sang thư mục BACKUP.\n5. Tìm De2.pdf bằng công cụ Search.\n6. Xóa một file bất kỳ và Khôi phục file đó từ Recycle Bin.\n7. Giải thích vì sao dùng Copy ở bước backup."
        ],
        scoring: [
          { level: "8 / 10 Điểm", desc: "Hoàn thành phần lớn thao tác, còn cần giáo viên hướng dẫn ở một số bước." },
          { level: "9 / 10 Điểm", desc: "Tự hoàn thành gần như toàn bộ bài tập, hiểu rõ bản chất Copy và Move." },
          { level: "10 / 10 Điểm", desc: "Tự hoàn thành xuất sắc không cần hướng dẫn, giải thích được lý do lựa chọn từng thao tác, có tư duy tổ chức dữ liệu hệ thống." }
        ]
      }
    },
    {
      id: "practice-b2-minitest",
      badge: "Mini Test – 5 phút",
      title: "II. Mini Test Cuối Phần Luyện Tập (5 Câu trắc nghiệm)",
      duration: "5 phút",
      type: "quiz",
      description: "5 câu hỏi trắc nghiệm đánh giá mức độ ghi nhớ kiến thức cốt lõi cuối phần luyện tập.",
      content: {
        objective: "Đánh giá mức độ ghi nhớ kiến thức cốt lõi.",
        questions: [
          {
            q: "Câu 1: Công cụ nào dùng để quản lý file và folder chính trên hệ điều hành Windows?",
            options: ["A. Calculator", "B. File Explorer", "C. Paint", "D. Task Manager"],
            answer: "B",
            explanation: "File Explorer là tiện ích mặc định trên Windows dùng để quản lý hệ thống tệp và thư mục."
          },
          {
            q: "Câu 2: Thao tác Copy file có tác dụng gì?",
            options: ["A. Xóa file", "B. Đổi tên file", "C. Tạo bản sao", "D. Di chuyển file"],
            answer: "C",
            explanation: "Copy (Ctrl+C) tạo thêm một bản sao độc lập ở thư mục đích."
          },
          {
            q: "Câu 3: File bị xóa thông thường trên Windows thường được chuyển đến đâu?",
            options: ["A. Downloads", "B. Desktop", "C. Recycle Bin", "D. Taskbar"],
            answer: "C",
            explanation: "File bị xóa thông thường được đưa vào Thùng rác (Recycle Bin) và có thể khôi phục lại (Restore)."
          },
          {
            q: "Câu 4: Đổi tên file 'a.docx' thành 'a.pdf' bằng cách gõ lại tên có làm file trở thành PDF thực sự không?",
            options: ["A. Có", "B. Không"],
            answer: "B",
            explanation: "Đổi tên phần mở rộng không làm thay đổi định dạng cấu trúc dữ liệu thực bên trong file."
          },
          {
            q: "Câu 5: Mục đích chính của việc Backup dữ liệu là gì?",
            options: ["A. Xóa dữ liệu", "B. Tăng tốc CPU", "C. Tạo bản sao dự phòng", "D. Đổi tên dữ liệu"],
            answer: "C",
            explanation: "Backup giúp tạo bản sao dự phòng để giảm nguy cơ mất mát dữ liệu khi gặp sự cố."
          }
        ]
      }
    },
    {
      id: "practice-b2-summary",
      badge: "Chốt Kiến Thức & Đánh Giá",
      title: "III & IV. Chốt Kiến Thức Trọng Tâm & Tiêu Chí Đánh Giá Năng Lực Học Sinh",
      duration: "Tổng kết",
      type: "exercise",
      description: "5 ý kiến thức 'Đinh' học sinh tự nói lại, Bảng phân bổ 90 phút buổi học và Bảng tiêu chí đánh giá Mức Đạt / Khá / Tốt.",
      content: {
        objective: "Khắc sâu 5 ý trọng tâm và tổng kết tiêu chí đánh giá năng lực học sinh sau buổi học.",
        knowledgeNotice: "📌 III. CHỐT KIẾN THỨC CUỐI BUỔI (5 Ý HỌC SINH TỰ NÓI LẠI):\n1. File và Folder: File = dữ liệu | Folder = tổ chức dữ liệu.\n2. File Explorer: Công cụ quản lý file và folder trên Windows.\n3. Copy và Move: Copy → tạo bản sao | Move → chuyển vị trí.\n4. Delete và Restore: Delete → Recycle Bin → Restore.\n5. Backup: Dữ liệu gốc → Copy → Bản sao dự phòng.",
        table: {
          headers: ["Thời gian", "Nội dung hoạt động", "Mục tiêu đạt được"],
          rows: [
            ["0–10 phút", "Ôn Bài 1", "Kích hoạt kiến thức cũ"],
            ["10–25 phút", "File, Folder, File Explorer", "Nắm vững kiến thức cốt lõi"],
            ["25–35 phút", "Copy, Move, Rename, Delete, Search", "Thành thạo 6 thao tác cơ bản"],
            ["35–45 phút", "Tiện ích hệ điều hành + Thiết bị di động", "Liên hệ kiến thức thực tế"],
            ["45–82 phút", "10 Bài luyện tập thực hành", "Rèn luyện năng lực thao tác & tư duy"],
            ["82–87 phút", "Mini Test 5 câu trắc nghiệm", "Đánh giá mức độ tiếp thu"],
            ["87–90 phút", "Chốt kiến thức trọng tâm", "Khắc sâu 5 điểm cốt lõi"]
          ]
        },
        criteria: [
          { level: "Mức Đạt", desc: "Tạo được folder; đổi tên file/folder; Copy file; Move file; Delete file; Restore file; tìm kiếm file bằng Search." },
          { level: "Mức Khá", desc: "Hiểu rõ Copy và Move; tự tổ chức thư mục; biết sử dụng Search hiệu quả; biết xử lý file bị xóa." },
          { level: "Mức Tốt", desc: "Tự thiết kế cấu trúc thư mục tối ưu; chọn đúng thao tác cho từng tình huống và giải thích được lý do; hiểu vai trò của Backup; biết xử lý tình huống máy tính thiếu dung lượng; có tư duy tổ chức và bảo vệ dữ liệu." }
        ]
      }
    }
  ]
}
