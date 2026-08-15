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
