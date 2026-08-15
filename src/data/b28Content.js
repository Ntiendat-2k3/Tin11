export const b28Content = {
  warmUp: {
    question: "TẠI SAO trong các công ty phần mềm lớn, 100 lập trình viên có thể cùng nhau viết một hệ thống khổng lồ mà không hề giẫm chân lên nhau?",
    description: "Chuyển hóa các hàm rời rạc thành khái niệm chính thức 'Mô-đun' (Module) — đơn vị tổ chức mã nguồn chuẩn mực trong lập trình thực tế với 2 nguyên lý sinh tử: Tính liên kết cao (High Cohesion) và Tính phụ thuộc thấp (Low Coupling)."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm Mô-đun chương trình (Module) & Nguyên lý thiết kế",
      subsections: [
        {
          heading: "Đơn vị tổ chức mã nguồn độc lập",
          text: "Mô-đun là 1 đơn vị chương trình độc lập có chức năng xác định rõ ràng, có thể được phát triển, kiểm thử riêng biệt và kết hợp với các mô-đun khác để tạo thành chương trình hoàn chỉnh. Trong Python, mô-đun thường được cài đặt bằng hàm (function) hoặc file `.py` riêng chứa nhóm hàm liên quan.",
          points: [
            "Khác biệt với 'hàm đơn thuần': Hàm chỉ là khối lệnh có tên; còn 'mô-đun' nhấn mạnh thêm tính độc lập và khả năng lắp ghép.",
            "Ẩn dụ thực tế: Giống bộ phận động cơ và bộ phận nội thất xe hơi được chế tạo độc lập ở 2 xưởng khác nhau rồi mới lắp ráp lại.",
            "Ví dụ: File `toan_hoc.py` chứa các hàm tính toán, file `bao_cao.py` chứa các hàm in ấn xuất dữ liệu."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Hai nguyên lý cốt lõi: Cohesion Cao và Coupling Thấp",
      subsections: [
        {
          heading: "Câu thần chú thiết kế mô-đun chất lượng: 'Cohesion CAO - Coupling THẤP'",
          text: "Chất lượng của một kiến trúc phần mềm phụ thuộc trực tiếp vào 2 chỉ số này:",
          points: [
            "Cohesion cao (Tính liên kết nội bộ cao): Các lệnh/hàm bên trong cùng 1 mô-đun phải liên quan chặt chẽ tới CÙNG MỘT nhiệm vụ duy nhất.",
            "Coupling thấp (Tính phụ thuộc giữa các mô-đun thấp): Giữa các mô-đun khác nhau càng ít phụ thuộc chặt chẽ vào nhau càng tốt. Sửa mô-đun này không làm hỏng mô-đun khác.",
            "Ẩn dụ doanh nghiệp: Trong cùng 1 phòng ban thì nhân viên phối hợp chặt (Cohesion cao); giữa các phòng ban thì trao đổi qua đầu việc rõ ràng chứ không can thiệp nội bộ phòng khác (Coupling thấp)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tiêu chí thiết kế", "Định nghĩa chuẩn", "Ví dụ THIẾT KẾ TỐT", "Ví dụ THIẾT KẾ KÉM"],
        rows: [
          ["Cohesion (Tính liên kết)", "Độ tập trung nhiệm vụ bên trong mô-đun", "File `diem_so.py` CHỈ chứa các hàm xử lý điểm", "File `xu_ly.py` chứa lẫn lộn cả tính điểm, gửi mail, vẽ biểu đồ"],
          ["Coupling (Tính phụ thuộc)", "Mức độ ràng buộc giữa các mô-đun", "Hàm `sap_xep` nhận vào 1 mảng bất kỳ, không quan tâm nguồn gốc mảng", "Hàm `sap_xep` phải biết cấu trúc nội bộ của file `nhap_lieu` mới chạy được"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. 4 Ưu điểm vượt trội của thiết kế mô-đun",
      subsections: [
        {
          heading: "Lợi ích đối với dự án phần mềm thực tế",
          text: "Áp dụng kiến trúc mô-đun hóa mang lại 4 lợi ích cốt lõi:",
          points: [
            "1. Dễ phát triển song song (Teamwork): Nhiều lập trình viên có thể viết các mô-đun khác nhau cùng lúc.",
            "2. Dễ tái sử dụng (Reusability): Một mô-đun viết tốt có thể mang sang dùng cho nhiều dự án khác (nền tảng cho Thư viện ở Bài 30).",
            "3. Dễ kiểm thử & khoanh vùng lỗi: Kiểm thử riêng từng mô-đun (Unit Test) giúp phát hiện bug ngay lập tức.",
            "4. Dễ bảo trì & nâng cấp: Muốn thay đổi logic bên trong 1 mô-đun thì các mô-đun khác hoàn toàn không bị ảnh hưởng."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Minh họa thực hành Mã nguồn Python",
      steps: [
        {
          step: "1. So sánh Cohesion Thấp vs Cohesion Cao",
          detail: "# ❌ THIẾT KẾ KÉM (Cohesion THẤP — 1 hàm ôm đồm quá nhiều việc)\ndef xu_ly_tat_ca(hoc_sinh):\n    for hs in hoc_sinh:\n        hs['diem_tb'] = sum(hs['diem_mon']) / len(hs['diem_mon'])  # Việc 1: Tính điểm\n        if hs['diem_tb'] >= 8: hs['xep_loai'] = 'Giỏi'               # Việc 2: Xếp loại\n    print('--- BÁO CÁO ---')\n    for hs in hoc_sinh: print(hs['ten'], hs['diem_tb'])             # Việc 3: In ấn\n\n# ✅ THIẾT KẾ TỐT (Cohesion CAO — mỗi hàm chỉ làm ĐÚNG 1 việc)\ndef tinh_diem_trung_binh(diem_mon):\n    return sum(diem_mon) / len(diem_mon)                        # Mô-đun CHỈ tính toán\n\ndef xep_loai(diem_tb):\n    return 'Giỏi' if diem_tb >= 8.0 else 'Khá'                   # Mô-đun CHỈ xếp loại\n\ndef in_bao_cao(hoc_sinh):\n    for hs in hoc_sinh: print(hs['ten'], hs['diem_tb'])             # Mô-đun CHỈ in ấn"
        },
        {
          step: "2. Minh họa Coupling Thấp (Tái sử dụng mô-đun tổng quát)",
          detail: "# Mô-đun sắp xếp CHỈ nhận vào 1 danh sách và tên khóa — KHÔNG phụ thuộc nguồn dữ liệu\ndef sap_xep_giam_dan(danh_sach, khoa):\n    n = len(danh_sach)\n    for luot in range(n - 1):\n        for i in range(n - 1 - luot):\n            if danh_sach[i][khoa] < danh_sach[i + 1][khoa]:\n                danh_sach[i], danh_sach[i + 1] = danh_sach[i + 1], danh_sach[i]\n    return danh_sach\n\n# Dùng lại y hệt cho 2 bài toán hoàn toàn khác nhau:\ndiem_hs = [{'ten': 'An', 'diem_tb': 8}, {'ten': 'Binh', 'diem_tb': 9}]\nsap_xep_giam_dan(diem_hs, 'diem_tb')  # Dùng cho Quản lý điểm\n\nsan_pham = [{'ten': 'Áo', 'gia': 200}, {'ten': 'Quần', 'gia': 150}]\nsap_xep_giam_dan(san_pham, 'gia')      # Dùng cho Bán hàng online!"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Câu thần chú chuẩn mực nhất trong thiết kế mô-đun chương trình là gì?",
      options: [
        "A. Cohesion thấp, Coupling cao",
        "B. Cohesion cao, Coupling thấp",
        "C. Cohesion cao, Coupling cao",
        "D. Cohesion thấp, Coupling thấp"
      ],
      answer: "B",
      explanation: "Một mô-đun tốt phải có Cohesion cao (nội bộ tập trung làm 1 việc) và Coupling thấp (ít phụ thuộc lỏng lẻo với các mô-đun khác)."
    },
    {
      question: "Một mô-đun có tính Cohesion CAO (High Cohesion) nghĩa là gì?",
      options: [
        "A. Mô-đun đó chứa hàng nghìn dòng code",
        "B. Các hàm/lệnh bên trong mô-đun đó tập trung giải quyết đúng 1 chức năng duy nhất",
        "C. Mô-đun đó phụ thuộc chặt chẽ vào mọi mô-đun khác",
        "D. Mô-đun đó không thể tái sử dụng"
      ],
      answer: "B",
      explanation: "Cohesion đo lường độ gắn kết nội bộ: Cohesion cao nghĩa là mọi thành phần trong mô-đun đều phục vụ cùng một mục tiêu chức năng xác định."
    },
    {
      question: "Ưu điểm trực tiếp nhất của việc thiết kế các mô-đun có Coupling THẤP (Low Coupling) là gì?",
      options: [
        "A. Khi thay đổi logic bên trong một mô-đun, các mô-đun khác hoàn toàn không bị hỏng hay ảnh hưởng",
        "B. Chương trình tự động chạy nhanh gấp 10 lần",
        "C. Không cần viết hàm main",
        "D. Không cần đặt tên biến"
      ],
      answer: "A",
      explanation: "Coupling thấp giúp giảm thiểu sự phụ thuộc qua lại. Nhờ đó ta có thể sửa đổi, nâng cấp hoặc thay thế 1 mô-đun mà không sợ gây ra tác dụng phụ ngoài ý muốn cho các phần khác."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Phân tích và chỉ ra điểm kém chất lượng về Cohesion / Coupling trong đoạn mã cho trước.",
      answer: "Phương pháp giải: Kiểm tra xem 1 hàm/mô-đun có làm nhiều hơn 1 nhiệm vụ không (nếu có → Cohesion thấp). Kiểm tra xem hàm này có truy cập trực tiếp biến nội bộ của hàm khác không (nếu có → Coupling cao)."
    },
    {
      question: "Dạng 2: Refactor (Tái cấu trúc) đoạn mã ôm đồm thành các mô-đun độc lập có Cohesion cao.",
      answer: "Phương pháp giải: Tách các công việc (tính toán, lọc dữ liệu, in ấn) thành từng hàm riêng biệt nhận tham số và trả về giá trị rõ ràng."
    },
    {
      question: "Dạng 3: Trả lời câu hỏi tình huống về ưu điểm của thiết kế mô-đun trong làm việc nhóm.",
      answer: "Phương pháp giải: Nêu rõ 4 ưu điểm: Phát triển song song, Tái sử dụng, Kiểm thử khoanh vùng bug, Bảo trì độc lập."
    }
  ],
  homework: [
    {
      question: "Bài 1: Cho một hàm Python vừa làm nhiệm vụ đọc file dữ liệu, vừa tính toán trung bình, vừa in biểu đồ. Hãy vẽ thiết kế phân rã hàm đó thành 3 mô-đun nhỏ đạt Cohesion cao.",
      answer: "Đáp án mẫu:\n- Mô-đun 1: doc_du_lieu_tu_file(ten_file) -> trả về list dữ liệu\n- Mô-đun 2: tinh_trung_binh(ds_so) -> trả về giá trị float\n- Mô-đun 3: in_bieu_do(ds_so, gia_tri_tb) -> chỉ lo hiển thị"
    },
    {
      question: "Bài 2: Viết lại hàm sap_xep_giam_dan(danh_sach, khoa) áp dụng sắp xếp một mảng các đối tượng Phim [{'ten': 'Movie A', 'luot_xem': 5000}] theo lượt xem để minh họa tính tái sử dụng.",
      answer: "Đáp án mẫu:\nds_phim = [{'ten': 'Phim A', 'luot_xem': 5000}, {'ten': 'Phim B', 'luot_xem': 12000}]\nsap_xep_giam_dan(ds_phim, 'luot_xem')\n# Kết quả: Phim B (12000) được đẩy lên đầu, hàm sap_xep dùng lại 100% không cần sửa code!"
    }
  ],
  practiceExercises: [
    {
      id: "ex-b28-1",
      badge: "Thiết Kế Mô-đun Chuẩn",
      duration: "30 phút",
      title: "Đánh Giá Và Tái Cấu Trúc Mã Nguồn Theo Mô-đun",
      description: "Nhận diện các đoạn mã có Cohesion thấp, tiến hành phân tách thành các mô-đun hàm có Coupling thấp và tính tái sử dụng cao.",
      type: "sheet",
      content: {
        objective: "Làm chủ 2 nguyên lý Cohesion cao - Coupling thấp, biết cách thiết kế mô-đun có thể tái sử dụng cho nhiều bài toán.",
        requirements: [
          "Tách 1 hàm ôm đồm 40 dòng code thành 3 mô-đun đơn nhiệm.",
          "Xác định tham số truyền vào và giá trị trả về cho từng mô-đun.",
          "Chạy thử tái sử dụng 1 mô-đun cho 2 tập dữ liệu khác nhau."
        ],
        submissionHint: "Nộp mã nguồn trước và sau khi refactor kèm giải thích đánh giá Cohesion/Coupling."
      }
    }
  ]
}
