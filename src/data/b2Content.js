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
      title: "IX. 5 Kiến thức 'Đinh' Cần Nhớ Của Bài Học",
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
      question: "Dạng 1: Phân biệt thao tác Sao chép (Copy) và Di chuyển (Move) trong tình huống quản lý tệp",
      answer: "Phương pháp giải: Nắm vững định nghĩa cốt lõi. Copy (Ctrl+C) tạo thêm một bản sao độc lập tại vị trí mới, tệp gốc vẫn giữ nguyên. Move (Ctrl+X) chuyển tệp gốc sang vị trí mới, vị trí cũ không còn tệp."
    },
    {
      question: "Dạng 2: Phân tích bẫy đổi tên tệp và phần mở rộng (Extension) như .docx -> .pdf",
      answer: "Phương pháp giải: Giải thích rõ phần mở rộng (.docx, .pdf, .jpg) chỉ là ký hiệu nhận diện loại tệp cho HĐH. Việc đổi tên phần mở rộng KHÔNG làm chuyển đổi định dạng dữ liệu thực tế bên trong tệp mà chỉ khiến HĐH nhận diện sai ứng dụng để mở tệp."
    },
    {
      question: "Dạng 3: Phân biệt cơ chế Xóa thường (Delete) và Xóa vĩnh viễn (Shift + Delete)",
      answer: "Phương pháp giải: Delete đưa tệp vào Recycle Bin (Thùng rác), có thể khôi phục bằng lệnh Restore. Shift + Delete xóa trực tiếp tệp khỏi bảng chỉ mục đĩa, bỏ qua Recycle Bin."
    },
    {
      question: "Dạng 4: Phân biệt cơ chế Tối ưu hóa / Chống phân mảnh đĩa (Optimize) giữa HDD và SSD",
      answer: "Phương pháp giải: HDD bị phân mảnh do đĩa từ quay và đầu đọc cơ học nên cần chạy Defrag để gom dữ liệu. SSD lưu trên chip nhớ Flash, không bị ảnh hưởng bởi vị trí vật lý và có số lần ghi hạn chế, do đó KHÔNG defrag thủ công SSD mà để HĐH tự chạy lệnh Trim."
    },
    {
      question: "Dạng 5: Trắc nghiệm nhận diện tiện ích HĐH & Phím tắt quản lý hệ thống",
      answer: "Phương pháp giải: Thuộc nhóm phím tắt F2 (Rename), Ctrl+C/X/V (Clipboard), Win+V (Clipboard History), Win+Shift+S (Snipping Tool), Win+E (File Explorer)."
    }
  ],
  homework: [
    {
      question: "Bài tập A – Kiến thức Lý thuyết Cốt lõi (5 câu hỏi ngắn)",
      answer: "1. Phân biệt File (tệp dữ liệu có tên & đuôi mở rộng), Folder (cấu trúc chứa file/folder), Shortcut (đường tắt dẫn tới tệp/app) và Application (chương trình ứng dụng).\n2. Phân biệt Copy (tạo bản sao), Move (chuyển vị trí), Rename (đổi tên) và Delete (xóa vào thùng rác).\n3. File Explorer là tiện ích trung tâm quản lý ổ đĩa, thư mục và tệp tin trên Windows.\n4. Recycle Bin là nơi lưu tạm các tệp bị xóa thông thường để có thể khôi phục lại khi cần.\n5. Không nên tùy tiện đổi phần mở rộng tệp vì sẽ làm HĐH mở sai ứng dụng."
    },
    {
      question: "Bài tập Tình huống 1 – Chuẩn hóa cấu trúc thư mục học tập",
      answer: "Tình huống: Thư mục Downloads có bai1.docx, bai2.docx, bai3.docx, anh1.png, anh2.jpg, de1.pdf, de2.pdf.\nYêu cầu thiết kế cây thư mục:\nTIN_HOC_11\n├── LY_THUYET (chứa bai1.docx, bai2.docx, bai3.docx)\n├── BAI_TAP\n├── DE_THI (chứa de1.pdf, de2.pdf)\n├── HINH_ANH (chứa anh1.png, anh2.jpg)\n└── BACKUP (chứa bản sao lưu các bài tập quan trọng)"
    },
    {
      question: "Bài tập Tình huống 2 – Sửa lỗi học sinh đổi tên tệp .docx thành .pdf",
      answer: "Tình huống: Lan đổi tên baitap.docx thành baitap.pdf rồi không mở được bằng Word.\nGiải thích nguyên nhân: Lan đã làm thay đổi phần mở rộng làm HĐH nhận diện nhầm đây là tệp PDF và dùng phần mềm đọc PDF để mở (gây lỗi cấu trúc).\nCách sửa: Đổi tên tệp trở lại thành baitap.docx để Word nhận diện đúng và mở bình thường."
    },
    {
      question: "Bài tập Tình huống 3 – Nén thư mục gửi qua Email (Tệp ZIP)",
      answer: "Tình huống: Nam muốn gửi 1 thư mục chứa 50 tệp cho bạn qua email bị giới hạn dung lượng.\nPhương án giải quyết: Click chuột phải vào thư mục -> Send to -> Compressed (zipped) folder (hoặc Compress to ZIP file trên Win 11). Việc nén thành 1 tệp .zip giúp giảm dung lượng gửi và gom 50 tệp nhỏ thành 1 tệp duy nhất tránh thất lạc."
    },
    {
      question: "Bài tập Thực hành Bắt buộc – 10 bước thao tác trên máy tính",
      answer: "1. Tạo thư mục TIN_HOC_11 trong Documents.\n2. Tạo 5 thư mục con: LY_THUYET, BAI_TAP, DE_THI, HINH_ANH, BACKUP.\n3. Tạo 5 file mẫu bất kỳ.\n4. Move các file vào đúng thư mục phân loại.\n5. Đổi tên 2 file theo đúng chuẩn đặt tên khoa học (dùng F2).\n6. Copy 1 file quan trọng vào thư mục BACKUP.\n7. Move 1 file từ vị trí này sang vị trí khác.\n8. Delete 1 file mẫu (chuyển vào Recycle Bin).\n9. Restore lại file vừa xóa từ Recycle Bin.\n10. Dùng ô Search tìm kiếm file theo tên 'bai2' hoặc '*.docx', chụp ảnh cấu trúc thư mục (Win+Shift+S) gửi cho giáo viên."
    },
    {
      question: "Challenge Nâng cao – Thiết kế hệ thống dữ liệu dự án lớn 1.000 tệp",
      answer: "Giả sử quản lý tài liệu dự án nhóm 5 người gồm 1.000 tệp. Cần tổ chức:\nPROJECT\n├── DOCUMENT (tài liệu quy chuẩn)\n├── PRESENTATION (bài thuyết trình)\n├── IMAGE (hình ảnh minh họa)\n├── DATA (bảng dữ liệu tính toán)\n├── SUBMISSION (bài nộp hoàn chỉnh)\n└── BACKUP (bản lưu dự phòng theo ngày)\nGiải thích: Cần quy định quy chuẩn đặt tên tệp ([Ngay]_[TenFile]_[Version].docx), dùng Copy khi làm bản sao lưu định kỳ, dùng Move khi phân loại tệp đã hoàn thành."
    }
  ],
  practiceExercises: [
    {
      id: "practice-b2-1",
      badge: "Bài 1 – 5 phút",
      title: "Bài 1 – Khởi động nhanh (5 câu phản xạ thao tác)",
      duration: "5 phút",
      type: "quiz",
      description: "Giáo viên đưa lần lượt các tình huống, học sinh chọn phương án thao tác xử lý đúng nhất trong 5 phút.",
      content: {
        objective: "Mức 1 (Nhận biết): Kiểm tra phản xạ thao tác nhanh trên hệ điều hành.",
        questions: [
          {
            q: "Câu 1: Em muốn tạo thư mục 'TinHoc11'. Thao tác nào đúng?",
            options: ["A. Click chuột phải -> New -> Folder", "B. Nhấn Alt + F4", "C. Mở Calculator", "D. Nhấn Shift + Delete"],
            answer: "A",
            explanation: "Thao tác chuẩn tạo thư mục mới trên Windows là chuột phải -> New -> Folder (hoặc Ctrl + Shift + N)."
          },
          {
            q: "Câu 2: Em có file 'Bai2.docx' và muốn tạo thêm một bản sao trong thư mục 'Backup'. Dùng thao tác nào?",
            options: ["A. Move -> Paste", "B. Copy -> Paste", "C. Rename -> Enter", "D. Delete -> Restore"],
            answer: "B",
            explanation: "Tạo thêm bản sao giữ nguyên file gốc dùng Copy (Ctrl+C) -> Paste (Ctrl+V)."
          },
          {
            q: "Câu 3: Em muốn chuyển file 'Bai2.docx' từ 'Downloads' sang 'TinHoc11'. Dùng thao tác nào?",
            options: ["A. Copy -> Paste", "B. Move (Cut) -> Paste", "C. Print -> Save", "D. Zip -> Extract"],
            answer: "B",
            explanation: "Chuyển vị trí tệp từ nơi này sang nơi khác dùng Move/Cut (Ctrl+X) -> Paste (Ctrl+V)."
          },
          {
            q: "Câu 4: Em lỡ tay xóa nhầm một tệp tin. Cần kiểm tra ở đâu đầu tiên để khôi phục?",
            options: ["A. Control Panel", "B. Recycle Bin (Thùng rác)", "C. Google Drive", "D. Task Manager"],
            answer: "B",
            explanation: "File bị xóa thông thường sẽ được chuyển vào Recycle Bin, chọn chuột phải -> Restore để khôi phục."
          },
          {
            q: "Câu 5: Em có 500 file và muốn tìm tất cả các file có đuôi '.pdf'. Sử dụng công cụ gì?",
            options: ["A. Thanh ô Search trong File Explorer", "B. Command Prompt gõ exit", "C. Mở Snipping Tool", "D. Nhấn F2"],
            answer: "A",
            explanation: "Sử dụng ô Search trong File Explorer với từ khóa '*.pdf' để tìm nhanh tất cả file PDF."
          }
        ]
      }
    },
    {
      id: "practice-b2-2",
      badge: "Bài 2 – 10 phút",
      title: "Bài 2 – Thực hành Quản lý File & Cấu trúc Thư mục TIN_HOC_11",
      duration: "10 phút",
      type: "exercise",
      description: "Tài liệu gửi về lộn xộn trong Downloads. Học sinh tự tạo cấu trúc thư mục TIN_HOC_11 và phân loại 10 tệp vào đúng thư mục.",
      content: {
        objective: "Mức 2 (Thông hiểu): Tự thiết kế cây thư mục chuẩn và phân loại dữ liệu khoa học.",
        requirements: [
          "Tạo cấu trúc cây thư mục: TIN_HOC_11 chứa 4 thư mục con: BAI_HOC, DE_THI, HINH_ANH, BACKUP.",
          "Bước 1: Chuyển các file bài học (Bai1.docx -> Bai5.docx) vào thư mục BAI_HOC.",
          "Bước 2: Chuyển các file đề thi (DeThi1.pdf, DeThi2.pdf) vào thư mục DE_THI.",
          "Bước 3: Chuyển các file ảnh (Anh1.png, Anh2.jpg, Anh3.jpg) vào thư mục HINH_ANH.",
          "Bước 4: Đổi tên file 'Bai1.docx' thành 'Bai1_HeDieuHanh.docx' (dùng phím F2).",
          "Bước 5: Copy file 'Bai1_HeDieuHanh.docx' vào thư mục BACKUP."
        ],
        submissionHint: "Giải thích câu hỏi của Giáo viên: Tại sao ở Bước 5 lại dùng thao tác Copy chứ không dùng Move?\nĐáp án mong đợi: Vì cần giữ lại file gốc trong thư mục BAI_HOC đồng thời tạo thêm một bản sao lưu dự phòng trong thư mục BACKUP."
      }
    },
    {
      id: "practice-b2-3",
      badge: "Bài 3 – 7 phút",
      title: "Bài 3 – Thử thách 'File Bị Mất' & Cơ chế Khôi phục Recycle Bin",
      duration: "7 phút",
      type: "exercise",
      description: "Thực hành quy trình tạo file baitap.txt, xóa tệp, kiểm tra Recycle Bin, khôi phục Restore và phân tích tình huống mất tệp vĩnh viễn.",
      content: {
        objective: "Mức 3 (Vận dụng): Hiểu bản chất cơ chế lưu vết Thùng rác và xử lý khi tệp bị xóa vĩnh viễn.",
        requirements: [
          "Thao tác 1: Tạo một file văn bản mẫu đặt tên 'baitap.txt' trong thư mục tạm.",
          "Thao tác 2: Bấm Delete để xóa file. Trả lời câu hỏi: File hiện đang nằm ở đâu? -> Kiểm tra Recycle Bin.",
          "Thao tác 3: Chọn Restore để đưa file trở lại thư mục ban đầu.",
          "Câu hỏi thảo luận mở rộng: Nếu file KHÔNG còn nằm trong Recycle Bin thì sao?\nĐáp án phân tích: (1) File đã bị xóa vĩnh viễn bằng Shift+Delete; (2) Recycle Bin đã bị dọn sạch (Empty Recycle Bin); (3) Dung lượng file quá lớn vượt quá sức chứa Recycle Bin. Khi đó việc khôi phục sẽ rất khó khăn, cần dùng phần mềm phục hồi dữ liệu chuyên dụng hoặc dùng bản sao Backup từ trước."
        ]
      }
    },
    {
      id: "practice-b2-4",
      badge: "Bài 4 – 5 phút",
      title: "Bài 4 – Thử thách Tìm kiếm Search & Tư duy Quản lý Dữ liệu lớn",
      duration: "5 phút",
      type: "exercise",
      description: "Thực hành 3 nhiệm vụ tìm kiếm tệp bằng thanh ô Search trong File Explorer và phân tích tư duy tổ chức khi máy có 100.000 tệp.",
      content: {
        objective: "Khai thác tối đa công cụ Search và hình thành tư duy sắp xếp dữ liệu lớn.",
        requirements: [
          "Nhiệm vụ 1: Tìm tất cả tệp có phần mở rộng .pdf trong thư mục tổng bằng từ khóa '*.pdf'.",
          "Nhiệm vụ 2: Tìm tất cả tệp có tên chứa chuỗi 'Bai2'.",
          "Nhiệm vụ 3: Tìm một file cụ thể khi giáo viên chỉ cung cấp một phần tên tệp ngẫu nhiên.",
          "Câu hỏi tư duy: Nếu máy tính có 100.000 file, việc tổ chức thư mục tốt mang lại lợi ích gì?\nĐáp án mong đợi: Giúp tìm kiếm dữ liệu trong vài giây, dễ quản lý phân loại, giảm nguy cơ nhầm lẫn/xóa nhầm, dễ dàng thực hiện sao lưu (backup) và chia sẻ tài liệu."
        ]
      }
    },
    {
      id: "practice-b2-5",
      badge: "Bài 5 – 8 phút",
      title: "Bài 5 – Case Study Thực tế: Bạn An Chuẩn bị Thi Tin học & Ổ C Báo Đầy",
      duration: "8 phút",
      type: "exercise",
      description: "Giải quyết bài toán thực tế: Thư mục Downloads lộn xộn 12 tệp, ổ C báo Low disk space và An cần gửi toàn bộ tài liệu cho giáo viên.",
      content: {
        objective: "Vận dụng tổng hợp kỹ năng tổ chức dữ liệu, dọn dẹp bộ nhớ và đóng gói tệp ZIP.",
        requirements: [
          "Bước 1 – Tổ chức dữ liệu khoa học: Đề xuất cấu trúc TIN_HOC_11 gồm 5 thư mục con (BAI_HOC, BAI_TAP, DE_THI, HINH_ANH, VIDEO). Move các tệp lộn xộn vào đúng thư mục.",
          "Bước 2 – Lọc và xử lý ổ đĩa báo Low Disk Space: Không xóa bừa bãi! Kiểm tra và xóa tệp rác trong Recycle Bin, tệp tạm, các file video/ảnh dung lượng lớn trùng lặp.",
          "Bước 3 – Đóng gói gửi cho Giáo viên: Nhấp chuột phải vào thư mục TIN_HOC_11 -> Chọn Send to -> Compressed (zipped) folder để nén thành file 'TIN_HOC_11.zip' gọn nhẹ trước khi gửi."
        ]
      }
    },
    {
      id: "practice-b2-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – 5 Câu hỏi Bẫy Tư duy Thao tác Cuối buổi",
      duration: "3 phút",
      type: "quiz",
      description: "Giải đáp 5 câu hỏi tình huống bẫy về Copy/Move, Đổi đuôi tệp, Shift+Delete và nguyên tắc quản lý tệp.",
      content: {
        objective: "Củng cố chống nhầm lẫn các bẫy lý thuyết thường gặp trong bài kiểm tra.",
        questions: [
          {
            q: "Câu 1: Lan Copy tệp a.docx từ thư mục A sang B. Sau đó xóa file ở thư mục A. File ở thư mục B có còn không?",
            options: ["A. Có, vì bản sao ở B độc lập với A.", "B. Không, vì tệp ở A đã bị xóa.", "C. Tệp ở B tự động chuyển thành file rác.", "D. Tệp ở B đổi tên thành b.docx."],
            answer: "A",
            explanation: "Copy tạo ra bản sao độc lập ở thư mục B. Việc xóa tệp gốc ở A không ảnh hưởng tới tệp ở B."
          },
          {
            q: "Câu 2: Lan Move (Cắt) tệp từ A sang B. Sau khi hoàn tất, tìm file ở thư mục A có còn không?",
            options: ["A. Còn nguyên", "B. Không còn (nếu thao tác Move hoàn tất)", "C. Nhân đôi thành 2 tệp", "D. Chuyển vào Recycle Bin"],
            answer: "B",
            explanation: "Thao tác Move di chuyển đối tượng sang vị trí mới nên thư mục gốc A sẽ không còn tệp."
          },
          {
            q: "Câu 3: Lan đổi tên tệp 'photo.jpg' thành 'photo.png'. Tệp có thực sự trở thành định dạng PNG không?",
            options: ["A. Có", "B. Không, chỉ thay đổi tên hiển thị phần mở rộng chứ không biến đổi cấu trúc ảnh gốc", "C. Tệp biến thành file PDF", "D. Tệp tự động nén ZIP"],
            answer: "B",
            explanation: "Đổi tên phần mở rộng thủ công không làm biến đổi cấu trúc dữ liệu thực tế bên trong tệp."
          },
          {
            q: "Câu 4: Lan xóa tệp bằng tổ hợp phím Shift + Delete. Có thể tìm lại tệp trong Recycle Bin không?",
            options: ["A. Có", "B. Thông thường là KHÔNG, vì Shift+Delete xóa vĩnh viễn bỏ qua Recycle Bin", "C. Tệp tự lưu vào Google Drive", "D. Tệp tự chuyển sang ổ D:"],
            answer: "B",
            explanation: "Shift + Delete xóa vĩnh viễn khỏi bảng chỉ mục ổ đĩa, không đưa vào Thùng rác."
          },
          {
            q: "Câu 5: Có 1.000 file trong một thư mục lộn xộn. Điều gì quan trọng hơn cả?",
            options: ["A. Đổi tên tất cả tệp ngẫu nhiên", "B. Xóa bớt tất cả tệp", "C. Thiết kế hệ thống thư mục phân cấp và quy tắc đặt tên hợp lý", "D. Đổi tất cả đuôi tệp thành .zip"],
            answer: "C",
            explanation: "Tổ chức hệ thống thư mục phân cấp và quy tắc đặt tên rõ ràng là cốt lõi của quản lý dữ liệu."
          }
        ]
      }
    },
    {
      id: "practice-b2-7",
      badge: "Đánh giá & BTVN",
      title: "Tiêu chí Đánh giá Năng lực Sau Buổi học & Bài tập Về nhà",
      duration: "Tổng kết",
      type: "exercise",
      description: "Xem chi tiết bảng tiêu chí đánh giá mức độ hoàn thành bài học (Mức Đạt, Khá, Tốt) và dặn dò bài tập về nhà.",
      content: {
        objective: "Đánh giá mức độ đạt năng lực thực hành của học sinh và dặn dò bài tập về nhà.",
        criteria: [
          { level: "Mức Đạt", desc: "Tạo được Folder; tạo/đổi tên file; Copy/Move file; Delete/Restore; dùng ô Search tìm tệp." },
          { level: "Mức Khá", desc: "Giải thích được sự khác nhau giữa Copy vs Move; biết tổ chức dữ liệu hợp lý; biết xử lý tình huống file bị mất; tìm kiếm dữ liệu tốt." },
          { level: "Mức Tốt", desc: "Tự thiết kế cấu trúc thư mục tối ưu; lựa chọn thao tác chính xác và giải thích được lý do; xử lý được tình huống bộ nhớ đĩa đầy; biết cách sao lưu backup dữ liệu; có tư duy quản lý hệ thống." }
        ],
        homework: [
          { title: "BTVN Bắt buộc", desc: "Tạo thư mục TIN_HOC_11 > BAI_HOC, BAI_TAP, DE_THI, HINH_ANH, BACKUP trên máy thật. Tạo 10 file mẫu, phân loại, đổi tên 3 file, Copy 2 file vào BACKUP, Move 2 file, Delete/Restore 1 file, dùng Search tìm file và chụp ảnh gửi GV." },
          { title: "Bài tập Tư duy Backup", desc: "Trả lời bằng lời của em: 'Nếu máy tính của em bị hỏng ổ cứng ngày mai, những dữ liệu nào em có thể bị mất? Em sẽ làm gì ngay từ hôm nay để giảm thiểu rủi ro?'" }
        ]
      }
    }
  ]
}
