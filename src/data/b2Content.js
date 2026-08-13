export const b2Content = {
  warmUp: {
    question: "Bạn đã từng bị 'lạc' file trên máy tính hoặc gửi nhầm bài tập chưa?",
    description: "Rất nhiều người tải một file từ trên mạng về nhưng sau đó không biết nó nằm ở đâu. Hoặc gửi bài nhóm gồm 10 ảnh rời rạc qua email làm thất lạc file. Trong bài thực hành này, chúng ta sẽ biến kiến thức lý thuyết Bài 1 thành kỹ năng thao tác thực tế trên hệ thống tệp — kỹ năng dùng cả đời, không riêng gì môn Tin!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Cấu trúc cây thư mục (Tree Structure)",
      subsections: [
        {
          heading: "Cấu trúc cây: Gốc → Cành → Lá",
          text: "Toàn bộ dữ liệu trên ổ đĩa được tổ chức theo hình cây phân cấp chặt chẽ: ổ đĩa (gốc) → thư mục (cành) → tệp tin (lá). Một thư mục có thể chứa nhiều thư mục con (lồng nhau).",
          points: [
            "Ví dụ thực tế: C:\\Users\\Nam\\Documents\\BaoCao.docx — C: là gốc, Users/Nam/Documents là các cành, BaoCao.docx là lá.",
            "Tệp tin (File): Là đơn vị lưu trữ dữ liệu cơ bản, gồm tên tệp và phần mở rộng (.docx, .pdf, .py, .png...).",
            "Thư mục (Folder/Directory): Là nơi chứa các tệp và các thư mục con khác giúp sắp xếp dữ liệu khoa học."
          ]
        }
      ],
      fileTree: {
        title: "Minh họa Cây thư mục (C:\\Users\\Nam)",
        nodes: [
          { name: "C:", type: "drive", isExpanded: true, children: [
            { name: "Users", type: "folder", isExpanded: true, children: [
              { name: "Nam", type: "folder", isExpanded: true, children: [
                { name: "Documents", type: "folder", isExpanded: true, children: [
                  { name: "BaoCao.docx", type: "file", desc: "Đường dẫn tuyệt đối: C:\\Users\\Nam\\Documents\\BaoCao.docx" },
                  { name: "BaiTap.xlsx", type: "file" }
                ]},
                { name: "Downloads", type: "folder", isExpanded: false, children: [] },
                { name: "Pictures", type: "folder", isExpanded: true, children: [
                  { name: "logo.png", type: "file", desc: "Từ Documents tới đây: ..\\Pictures\\logo.png (tương đối)" }
                ]}
              ]}
            ]}
          ]}
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. Đường dẫn tuyệt đối & Đường dẫn tương đối",
      subsections: [
        {
          heading: "Phân biệt 2 loại đường dẫn",
          points: [
            "Đường dẫn tuyệt đối (Absolute Path): Luôn bắt đầu từ ổ đĩa gốc (C:\\, D:\\), chỉ ra vị trí chính xác độc lập, dùng được ở bất kỳ đâu. Ví dụ: C:\\Users\\Nam\\Documents\\BaoCao.docx.",
            "Đường dẫn tương đối (Relative Path): Tính từ vị trí thư mục hiện tại đang đứng. Ví dụ đang ở 'Documents', chỉ cần gõ 'BaoCao.docx' hoặc '..\\Pictures\\logo.png' (dấu '..' nghĩa là lùi ra thư mục cha 1 cấp).",
            "💡 Mẹo nhớ: Tuyệt đối = 'Địa chỉ nhà đầy đủ trên bản đồ (Số nhà, Phố, Quận)'. Tương đối = 'Rẽ trái, đi thẳng 2 ngã tư' (tính từ chỗ đang đứng).",
            "Tại sao quan trọng: Khái niệm này chính là nền tảng cho lập trình sau này — khi viết code Python open('data/file.txt') chính là dùng đường dẫn tương đối."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Thao tác Quản lý Tệp & Phím tắt thông dụng",
      subsections: [
        {
          heading: "Các thao tác cơ bản",
          text: "Sao chép (Copy), Cắt/Di chuyển (Cut/Move), Xóa (Delete), Đổi tên (Rename), Tìm kiếm (Search) — mỗi thao tác cần thành thạo cả cách làm bằng chuột (GUI) lẫn phím tắt.",
          points: [
            "💡 Mẹo nhớ phím tắt: Nhóm theo cụm phím trái tay (Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Z, Ctrl+A đều gần nhau, thao tác bằng tay trái nhanh gọn).",
            "Xóa an toàn vs Xóa vĩnh viễn: Phím Delete đưa file vào Thùng rác (Recycle Bin - khôi phục được). Shift + Delete xóa vĩnh viễn không qua thùng rác."
          ]
        }
      ],
      shortcuts: [
        { keys: ["Ctrl", "C"], desc: "Sao chép (Copy) tệp/thư mục đã chọn vào bộ nhớ tạm (Clipboard)." },
        { keys: ["Ctrl", "X"], desc: "Cắt/Di chuyển (Cut) tệp/thư mục đã chọn." },
        { keys: ["Ctrl", "V"], desc: "Dán (Paste) tệp/thư mục từ bộ nhớ tạm vào vị trí mới." },
        { keys: ["Ctrl", "Z"], desc: "Hoàn tác (Undo) thao tác vừa thực hiện nhầm." },
        { keys: ["Ctrl", "Y"], desc: "Làm lại (Redo) thao tác vừa hoàn tác." },
        { keys: ["F2"], desc: "Đổi tên nhanh (Rename) tệp/thư mục đang chọn." },
        { keys: ["Ctrl", "A"], desc: "Chọn tất cả (Select All) tệp và thư mục trong cửa sổ." },
        { keys: ["Shift", "Delete"], desc: "Xóa vĩnh viễn (Permanent Delete) không đưa vào thùng rác." }
      ]
    },
    {
      id: "sec-4",
      title: "4. Nén và Giải nén tệp tin (ZIP, RAR)",
      subsections: [
        {
          heading: "Vì sao cần nén tệp?",
          points: [
            "Giảm dung lượng: Giúp tiết kiệm không gian lưu trữ và thời gian upload/download qua mạng.",
            "Gộp nhóm file: Gộp hàng chục tệp nhỏ thành 1 file .zip duy nhất để gửi email gọn gàng, tránh thất lạc file.",
            "Ví dụ thực tế: Nộp bài tập nhóm gồm 10 file ảnh + 1 file Word → nén thành 1 file 'BaiTapNhom.zip' để gửi email cho thầy cô.",
            "Định dạng phổ biến: ZIP là chuẩn nén phổ biến nhất, hỗ trợ sẵn trên Windows; RAR cần phần mềm riêng (WinRAR) nhưng nén tốt hơn với tệp lớn."
          ]
        }
      ],
      steps: [
        { step: "Cách nén bằng chuột (Windows GUI)", detail: "Chọn các tệp cần nén → Click chuột phải → Chọn 'Send to' → Chọn 'Compressed (zipped) folder' (hoặc Windows 11: 'Compress to ZIP file')." },
        { step: "Cách giải nén bằng chuột", detail: "Click chuột phải vào file .zip → Chọn 'Extract All...' → Chọn thư mục đích đến → Bấm 'Extract'." }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành bằng dòng lệnh (CMD / PowerShell)",
      steps: [
        {
          step: "Di chuyển thư mục & tạo tệp bằng CMD",
          detail: "Gõ lệnh: cd Documents → mkdir BaiTap → copy C:\\Downloads\\anh.jpg BaiTap\\anh.jpg → Thực hành đường dẫn tương đối (BaiTap\\anh.jpg tính từ Documents)."
        },
        {
          step: "Nén thư mục bằng PowerShell",
          detail: "Mở PowerShell và gõ lệnh: Compress-Archive -Path .\\BaiTap -DestinationPath .\\BaiTap.zip → Tạo ngay 1 file ZIP nén toàn bộ thư mục BaiTap."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Để gỡ bỏ phần mềm ra khỏi máy tính một cách an toàn và sạch sẽ, bạn nên làm gì?",
      options: [
        "A. Chọn thư mục phần mềm trong ổ C rồi bấm Shift + Delete.",
        "B. Vào Control Panel -> Programs and Features -> Chọn phần mềm -> Uninstall.",
        "C. Xóa biểu tượng (Shortcut) của phần mềm trên màn hình Desktop.",
        "D. Kéo biểu tượng phần mềm thả vào Thùng rác (Recycle Bin)."
      ],
      answer: "B",
      explanation: "Dùng Control Panel hoặc Settings để Uninstall sẽ xóa sạch các khóa Registry và file phụ thuộc. Xóa thủ công thư mục sẽ để lại rác hệ thống."
    },
    {
      question: "Trong Windows, đường dẫn nào sau đây là đường dẫn tuyệt đối?",
      options: [
        "A. ..\\HinhAnh\\logo.png",
        "B. Documents\\TinHoc11.docx",
        "C. C:\\Users\\Nam\\Desktop\\BaiTap.zip",
        "D. \\Downloads\\music.mp3"
      ],
      answer: "C",
      explanation: "Đường dẫn tuyệt đối luôn bắt đầu từ ổ đĩa gốc (C:\\, D:\\)."
    },
    {
      question: "Tổ hợp phím nào dùng để đổi tên nhanh một tệp tin đang được chọn trong File Explorer?",
      options: [
        "A. Ctrl + R",
        "B. F2",
        "C. Alt + Enter",
        "D. F5"
      ],
      answer: "B",
      explanation: "Phím F2 là phím tắt mặc định trên Windows để đổi tên tệp/thư mục nhanh."
    }
  ],
  examTypes: [
    "Cho một đường dẫn bất kỳ → xác định đây là đường dẫn tuyệt đối hay tương đối, giải thích dấu hiệu nhận biết (bắt đầu từ ổ đĩa C:\\ hay từ '..' hay tên thư mục con).",
    "Cho cây thư mục (hình vẽ) → yêu cầu viết đường dẫn tuyệt đối đến 1 tệp cụ thể hoặc đường dẫn tương đối từ 1 thư mục đến tệp khác.",
    "Tình huống thực tế: 'Muốn gửi 5 ảnh dung lượng lớn qua email bị giới hạn 10MB, em làm gì?' → liên hệ đến thao tác nén tệp (ZIP/RAR) để giảm dung lượng."
  ],
  homework: [
    "Tạo cây thư mục thật trên máy: HocTap > TinHoc11 > Bai2, sao chép 3 tệp bất kỳ vào đó. Ghi lại đường dẫn tuyệt đối và đường dẫn tương đối của từng tệp (tính từ thư mục TinHoc11).",
    "Thực hành nén 1 thư mục thành file ZIP, sau đó giải nén ra một thư mục khác. Chụp ảnh màn hình so sánh dung lượng trước và sau khi nén.",
    "Liệt kê 5 phím tắt em thấy hữu ích nhất trong cuộc sống học tập hàng ngày. Với mỗi phím tắt, viết 1 tình huống cụ thể em đã hoặc sẽ dùng nó."
  ]
}
