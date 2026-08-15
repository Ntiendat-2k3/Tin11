export const b26Content = {
  warmUp: {
    question: "Làm thế nào để xây dựng một phần mềm quản lý lớn gồm hàng nghìn dòng code mà không bị 'ngợp' hay rối loạn tư duy ngay từ bước đầu tiên?",
    description: "Bước ngoặt tư duy quan trọng: Chuyển từ viết 1 hàm/1 thuật toán đơn lẻ sang thiết kế cả một chương trình lớn hoàn chỉnh có nhiều phần phối hợp bằng Phương pháp làm mịn dần (Stepwise Refinement)."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm Phương pháp làm mịn dần (Stepwise Refinement / Top-down Design)",
      subsections: [
        {
          heading: "Từ Tổng Quát đến Chi Tiết",
          text: "Phương pháp làm mịn dần (Top-down Design) là phương pháp thiết kế chương trình đi từ mức mô tả tổng quát nhất (1-2 câu lớn), sau đó bẻ nhỏ thành các bước trung gian, và tiếp tục chia nhỏ từng bước cho đến khi thu được các nhiệm vụ đủ chi tiết để viết trực tiếp thành mã nguồn.",
          points: [
            "Ẩn dụ bản đồ: Giống như việc phóng to bản đồ từ mức Toàn quốc (Mức 0) → Tỉnh thành (Mức 1) → Đường phố cụ thể (Mức 2 - đủ để đi/viết code).",
            "Vì sao cần: Lập trình viên không thể hình dung chính xác từng dòng mã của một hệ thống lớn ngay từ đầu. Cần làm mịn dàn ý trước khi gõ code."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Ý tưởng cốt lõi: Phân rã bài toán lớn thành mô-đun nhỏ",
      subsections: [
        {
          heading: "Tư duy 'Chia để trị' ở mức kiến trúc hệ thống",
          text: "Một bài toán phức tạp được phân rã thành nhiều bài toán con độc lập. Mỗi bài toán con lại được phân rã tiếp nếu vẫn còn phức tạp.",
          points: [
            "Tiêu chí 1 bước 'đủ nhỏ' để dừng làm mịn: Khi bước đó đảm nhận đúng 1 nhiệm vụ đơn lẻ, có thể viết ngắn gọn trong 1 hàm Python.",
            "Tính độc lập: Mỗi bài toán con xử lý một phần dữ liệu xác định và có giao diện đầu vào/đầu ra rõ ràng."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Ví dụ làm mịn qua các tầng (Quản lý điểm học sinh)",
      subsections: [
        {
          heading: "Phân rã 3 mức chi tiết bài toán thực tế",
          text: "Minh họa quá trình chuyển dịch tư duy từ bài toán phát biểu bằng lời đến các hàm Python:",
          points: [
            "Mức 0 (Khái quát): 'Xây dựng chương trình quản lý điểm học sinh'.",
            "Mức 1 (Chia chức năng lớn): 1. Nhập dữ liệu điểm; 2. Xử lý & Tính toán; 3. Xuất báo cáo kết quả.",
            "Mức 2 (Làm mịn chi tiết): 1.1 Nhập số lượng, 1.2 Nhập tên & điểm; 2.1 Tính điểm TB (Bài 17-18), 2.2 Xếp loại, 2.3 Sắp xếp (Bài 21); 3.1 In bảng xếp hạng, 3.2 Thống kê Giỏi/Khá.",
            "Mức 3 (Mã nguồn): Mỗi mục 2.x, 3.x tương ứng đúng 1 hàm Python cụ thể."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Lợi ích của phương pháp làm mịn dần",
      subsections: [
        {
          heading: "Tại sao đây là kỹ năng sống còn của lập trình viên?",
          text: "Áp dụng thiết kế Top-down mang lại 3 ưu thế vượt trội:",
          points: [
            "Giảm tải độ phức tạp tư duy: Tại mỗi thời điểm chỉ cần tập trung tư duy 1 chức năng nhỏ, không bị ngợp.",
            "Dễ phân công công việc (Teamwork): Các thành viên có thể chia nhau viết từng hàm độc lập cùng lúc.",
            "Dễ kiểm thử và sửa lỗi (Debugging): Phát hiện lỗi ở hàm nào chỉ cần sửa đúng hàm đó mà không làm hỏng cả hệ thống."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Kỹ thuật viết khung Stub Functions trong Python",
      subsections: [
        {
          heading: "Hiện thực hóa làm mịn dần bằng code khung",
          text: "Kỹ thuật viết trước 'khung sườn' gồm các hàm rỗng (Stub) sử dụng từ khóa `pass` hoặc trả về giá trị mặc định, sau đó viết hàm `main()` điều phối luồng chạy trước khi lấp đầy code chi tiết."
        }
      ],
      steps: [
        {
          step: "1. Sơ đồ cây phân rã (Hierarchy Chart)",
          detail: "                    [Quản lý điểm học sinh]\n                    /          |          \\\n             [Nhập DL]     [Xử lý]      [Xuất báo cáo]\n              /    \\        /  |  \\         /      \\\n        [SL HS] [Tên+Điểm] [TB][XL][Sort] [In DS] [Thống kê]"
        },
        {
          step: "2. Khai báo khung hàm Stub rỗng trong Python",
          detail: "def nhap_du_lieu():\n    # TODO: Cài đặt nhập danh sách học sinh\n    pass\n\ndef tinh_diem_trung_binh(diem_mon):\n    # TODO: Tái sử dụng logic Bài 17-18\n    pass\n\ndef xep_loai(diem_tb):\n    # TODO: Trả về 'Giỏi', 'Khá', 'Trung bình'\n    pass\n\ndef sap_xep_theo_diem(danh_sach):\n    # TODO: Tái sử dụng Bubble Sort Bài 21\n    pass\n\ndef xuat_bao_cao(danh_sach):\n    # TODO: In bảng điểm và thống kê\n    pass\n\ndef main():\n    # Hàm chính đóng vai trò 'nhạc trưởng' điều phối các hàm con\n    hoc_sinh = nhap_du_lieu()\n    for hs in hoc_sinh:\n        hs['diem_tb'] = tinh_diem_trung_binh(hs['diem_mon'])\n        hs['xep_loai'] = xep_loai(hs['diem_tb'])\n    hoc_sinh = sap_xep_theo_diem(hoc_sinh)\n    xuat_bao_cao(hoc_sinh)\n\n# main()"
        },
        {
          step: "3. Ví dụ làm mịn bài toán nhỏ (Kiểm tra số nguyên tố)",
          detail: "Mức 0: Kiểm tra số nguyên tố và in danh sách nguyên tố trong mảng\nMức 1: \n  1. Hàm is_nguyen_to(n) -> trả về True/False\n  2. Hàm loc_nguyen_to(a) -> duyệt mảng và lọc các số thỏa is_nguyen_to(x)\n  3. In kết quả\n→ Bài toán nhỏ chỉ cần 1-2 tầng làm mịn là đủ chi tiết để viết code!"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Phương pháp làm mịn dần (Stepwise Refinement / Top-down Design) trong thiết kế chương trình được thực hiện theo chiều nào?",
      options: [
        "A. Từ chi tiết code từng dòng rồi mới tổng hợp thành chức năng lớn",
        "B. Từ yêu cầu tổng quát chia nhỏ dần thành các bài toán con chi tiết",
        "C. Viết ngẫu nhiên các hàm rồi mới liên kết lại",
        "D. Chỉ tập trung thiết kế giao diện trước"
      ],
      answer: "B",
      explanation: "Phương pháp làm mịn dần thiết kế theo hướng Top-down: Bắt đầu từ mô tả tổng quát, bẻ nhỏ thành các bài toán con trung gian và chi tiết dần đến khi viết được code."
    },
    {
      question: "Trong lập trình Python, một 'hàm rỗng' (Stub function) dùng để làm gì trong quá trình thiết kế làm mịn dần?",
      options: [
        "A. Để chương trình chạy nhanh hơn",
        "B. Để định hình khung sườn kiến trúc chương trình và thứ tự gọi hàm trước khi viết logic chi tiết",
        "C. Để tự động sửa lỗi logic",
        "D. Để lưu dữ liệu vào bộ nhớ phụ"
      ],
      answer: "B",
      explanation: "Viết hàm Stub (chứa `pass` hoặc ghi chú TODO) giúp tạo khung sườn kiến trúc chương trình trước, đảm bảo luồng điều phối chính xác rồi mới cài đặt chi tiết từng hàm."
    },
    {
      question: "Khi nào ta biết một bước làm mịn đã 'đủ chi tiết' để dừng lại không phân rã tiếp?",
      options: [
        "A. Khi bước đó có thể cài đặt trực tiếp thành 1 đoạn code / 1 hàm đơn giản, rõ ràng",
        "B. Khi đã phân rã đúng 10 tầng",
        "C. Khi bước đó chứa ít nhất 100 dòng code",
        "D. Khi không còn biến số nào"
      ],
      answer: "A",
      explanation: "Tiêu chí dừng phân rã làm mịn là khi một bước đủ nhỏ để có thể hiện thực hóa trực tiếp thành 1 hàm Python đơn nhiệm, không còn mơ hồ."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Vẽ hoặc hoàn thiện Sơ đồ cây phân rã (Hierarchy Chart) từ mô tả bài toán.",
      answer: "Phương pháp giải: Xác định nút gốc (Mức 0), tách thành các nhánh chức năng lớn (Mức 1: Nhập, Xử lý, Xuất), sau đó tách tiếp thành các nút con chi tiết (Mức 2)."
    },
    {
      question: "Dạng 2: Chuyển đổi sơ đồ phân rã làm mịn thành khung chương trình hàm Stub Python.",
      answer: "Phương pháp giải: Mỗi nút lá ở tầng sâu nhất chuyển thành 1 def ten_ham(): pass. Viết hàm main() gọi các hàm con theo đúng thứ tự phụ thuộc dữ liệu."
    },
    {
      question: "Dạng 3: Phân tích lợi ích của làm mịn dần trong làm việc nhóm và bảo trì phần mềm.",
      answer: "Phương pháp giải: Nêu 3 điểm cốt lõi: Giảm tải tư duy, Dễ phân công nhiệm vụ độc lập, Dễ khoanh vùng kiểm thử & sửa lỗi."
    }
  ],
  homework: [
    {
      question: "Bài 1: Chọn bài toán 'Quản lý giỏ hàng mua sắm online'. Hãy phân rã bài toán theo phương pháp làm mịn dần qua 2 mức (Mức 0 → Mức 1 → Mức 2).",
      answer: "Đáp án mẫu:\nMức 0: Quản lý giỏ hàng online.\nMức 1:\n  1. Thêm/Xóa sản phẩm vào giỏ.\n  2. Tính tổng tiền giỏ hàng (áp mã giảm giá nếu có).\n  3. In hóa đơn thanh toán.\nMức 2:\n  1.1 them_san_pham(gio, sp), 1.2 xoa_san_pham(gio, sp_id)\n  2.1 tinh_tong_tien(gio), 2.2 ap_ma_giam_gia(tong_tien, ma_code)\n  3.1 in_hoa_don(gio, tong_tien_cuoi)"
    },
    {
      question: "Bài 2: Từ kết quả bài 1, viết khung mã nguồn Python (gồm các hàm Stub rỗng và hàm main()) thể hiện đúng kiến trúc vừa phân rã.",
      answer: "Đáp án mẫu:\ndef them_san_pham(gio, sp): pass\ndef xoa_san_pham(gio, sp_id): pass\ndef tinh_tong_tien(gio): pass\ndef ap_ma_giam_gia(tong_tien, ma_code): pass\ndef in_hoa_don(gio, tong_tien_cuoi): pass\n\ndef main():\n    gio = []\n    them_san_pham(gio, {'id': 1, 'ten': 'Áo', 'gia': 100})\n    tong = tinh_tong_tien(gio)\n    tong_cuoi = ap_ma_giam_gia(tong, 'SALE10')\n    in_hoa_don(gio, tong_cuoi)\n# main()"
    },
    {
      question: "Bài 3: Giải thích ngắn gọn: Tại sao việc phân rã bài toán Quản lý điểm học sinh thành các hàm nhỏ lại giúp quá trình kiểm thử lỗi (Bài 23) trở nên dễ dàng hơn?",
      answer: "Đáp án mẫu:\nVì khi chia thành các hàm nhỏ đơn nhiệm (như tinh_diem_trung_binh, xep_loai), ta có thể kiểm thử đơn vị (Unit Test) cho riêng từng hàm với các bộ test case biên nhỏ. Nếu phát hiện lỗi (như xếp loại sai), ta biết ngay lỗi nằm ở hàm xep_loai mà không cần phải tìm kiếm trong hàng trăm dòng code phức tạp."
    }
  ],
  practiceExercises: [
    {
      id: "ex-b26-1",
      badge: "Thiết Kế Kiến Trúc Phần Mềm",
      duration: "30 phút",
      title: "Thiết Kế Bài Toán Bằng Phương Pháp Làm Mịn Dần",
      description: "Tự tay vẽ sơ đồ cây phân rã bài toán và cài đặt khung hàm Stub Python chuẩn hóa.",
      type: "sheet",
      content: {
        objective: "Thành thạo tư duy Top-down design, biết cách chia bài toán lớn thành các hàm nhỏ có tính độc lập cao.",
        requirements: [
          "Vẽ sơ đồ Hierarchy Chart cho 1 trong 2 bài toán: Quản lý thư viện sách hoặc Game đoán số.",
          "Phân rã tối thiểu 2 tầng chi tiết.",
          "Viết khung hàm Stub Python kèm docstring giải thích tham số đầu vào và đầu ra."
        ],
        submissionHint: "Nộp sơ đồ phân rã dạng văn bản/hình cây và file khung code Python."
      }
    }
  ]
}
