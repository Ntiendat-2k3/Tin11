export const b20Content = {
  warmUp: {
    question: "Nếu một giá trị xuất hiện nhiều lần trong mảng, làm thế nào để tìm chính xác vị trí ĐẦU TIÊN hoặc vị trí CUỐI CÙNG?",
    description: "Bài thực hành này mở rộng thuật toán cơ bản ở Bài 19 thành các biến thể thực tế phức tạp hơn: tìm vị trí đầu/cuối, tìm theo khoảng [X, Y], và tìm kiếm đa điều kiện."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Biến thể: Tìm vị trí xuất hiện đầu tiên (First Occurrence)",
      subsections: [
        {
          heading: "Cơ chế Early Return tự động",
          text: "Bài toán: Nếu giá trị x xuất hiện nhiều lần trong mảng, tìm vị trí xuất hiện sớm nhất (chỉ số nhỏ nhất).",
          points: [
            "Thuật toán Tìm kiếm tuần tự gốc ở Bài 19 (dùng return i ngay khi gặp a[i] == x) TỰ ĐỘNG cho ra vị trí xuất hiện đầu tiên.",
            "Do duyệt từ chỉ số 0 tăng dần, lần gặp đầu tiên sẽ kích hoạt lệnh return và thoát hàm ngay lập tục."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Biến thể: Tìm vị trí xuất hiện cuối cùng (Last Occurrence)",
      subsections: [
        {
          heading: "Kỹ thuật ghi nhớ biến tạm & Không return sớm",
          text: "Bài toán: Tìm vị trí xuất hiện muộn nhất (chỉ số lớn nhất) của x trong mảng.",
          points: [
            "Ý tưởng: KHÔNG ĐƯỢC dừng lại (return) ngay khi gặp — phải duyệt HẾT mảng. Mỗi lần gặp a[i] == x thì CẬP NHẬT lại biến vị trí vi_tri = i.",
            "Trả về biến vi_tri sau khi vòng for đã duyệt xong toàn bộ mảng.",
            "💡 Mẹo nhớ: First Occurrence = 'Gặp là return dừng luôn'; Last Occurrence = 'Gặp thì ghi nhớ lại vị trí mới nhưng vẫn đi tiếp'."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Tìm kiếm theo điều kiện phức tạp",
      subsections: [
        {
          heading: "Mở rộng điều kiện so sánh trong câu lệnh IF",
          text: "Trong thực tế, điều kiện tìm kiếm không chỉ đơn thuần là so sánh bằng a[i] == x, mà thường là:",
          points: [
            "Nằm trong khoảng giá trị [X, Y] (Ví dụ: Sản phẩm có giá từ 100k đến 500k).",
            "Thỏa mãn nhiều tiêu chí cùng lúc (VD: Học sinh Nữ VÀ có điểm Toán >= 8).",
            "Liên hệ SQL: Chính là biểu thức điều kiện sau mệnh đề WHERE ... AND ... đã học ở Bài 14!"
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Kết hợp Tìm kiếm với mẫu Lọc mảng (Filtering Pattern Bài 18)",
      subsections: [
        {
          heading: "Thu thập danh sách tất cả các kết quả thỏa mãn",
          text: "Khi bài toán yêu cầu trả về TOÀN BỘ các phần tử/vị trí thỏa điều kiện thay vì chỉ 1 vị trí duy nhất, ta kết hợp mẫu Filtering Pattern (Bài 18): Khởi tạo mảng rỗng res = [], duyệt mảng gốc, phần tử nào thỏa điều kiện thì res.append(i)."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành code Python 3 biến thể tìm kiếm",
      steps: [
        {
          step: "1. So sánh First Occurrence vs Last Occurrence",
          detail: "def tim_vi_tri_dau(a, x):\n    for i in range(len(a)):\n        if a[i] == x:\n            return i                      # Gặp là return ngay\n    return -1\n\ndef tim_vi_tri_cuoi(a, x):\n    vi_tri = -1\n    for i in range(len(a)):\n        if a[i] == x:\n            vi_tri = i                    # KHÔNG return, chỉ cập nhật biến vi_tri\n    return vi_tri                        # Trả về sau khi duyệt HẾT mảng\n\na = [3, 7, 2, 7, 9, 7, 1]\nprint('Vị trí đầu:', tim_vi_tri_dau(a, 7))   # → 1\nprint('Vị trí cuối:', tim_vi_tri_cuoi(a, 7))  # → 5"
        },
        {
          step: "2. Tìm kiếm trong khoảng giá trị [X, Y] (Trả về danh sách chỉ số)",
          detail: "def tim_theo_khoang(a, X, Y):\n    ket_qua = []                          # Mảng chứa danh sách vị trí (Filtering Pattern)\n    for i in range(len(a)):\n        if X <= a[i] <= Y:                # Điều kiện khoảng trong Python\n            ket_qua.append(i)\n    return ket_qua\n\ngia = [150000, 520000, 300000, 90000, 480000]\nprint('Vị trí giá trong [100k, 500k]:', tim_theo_khoang(gia, 100000, 500000))   # → [0, 2, 4]"
        },
        {
          step: "3. Tìm kiếm đa điều kiện (kết hợp AND) trên danh sách đối tượng",
          detail: "hoc_sinh = [\n    {'ten': 'An',   'gioi_tinh': 'Nữ', 'diem_toan': 9},\n    {'ten': 'Bình', 'gioi_tinh': 'Nam', 'diem_toan': 8},\n    {'ten': 'Chi',  'gioi_tinh': 'Nữ', 'diem_toan': 7},\n]\n\nket_qua = []\nfor hs in hoc_sinh:\n    if hs['gioi_tinh'] == 'Nữ' and hs['diem_toan'] >= 8:   # Nhiều điều kiện kết hợp\n        ket_qua.append(hs['ten'])\n\nprint('Học sinh Nữ có điểm Toán >= 8:', ket_qua)   # → ['An']"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Để tìm vị trí xuất hiện CUỐI CÙNG của phần tử x trong mảng, vị trí câu lệnh return vi_tri nằm ở đâu là ĐÚNG?",
      options: [
        "A. Bên trong khối lệnh if a[i] == x",
        "B. Nằm ngoài vòng lặp for (sau khi vòng for kết thúc toàn bộ)",
        "C. Ngay trước vòng lặp for",
        "D. Tùy thuộc vào giá trị của x"
      ],
      answer: "B",
      explanation: "Tìm vị trí cuối cùng yêu cầu duyệt hết toàn bộ mảng để cập nhật vị trí mới nhất. Do đó câu lệnh return vi_tri phải đặt NẰM NGOÀI vòng for."
    },
    {
      question: "Cú pháp điều kiện Python nào kiểm tra giá trị val nằm trong khoảng [100, 500] bao gồm cả 2 đầu biên?",
      options: [
        "A. 100 < val < 500",
        "B. val >= 100 or val <= 500",
        "C. 100 <= val <= 500",
        "D. val == 100 and val == 500"
      ],
      answer: "C",
      explanation: "Trong Python, cú pháp toán học 100 <= val <= 500 được hỗ trợ trực tiếp và tương đương với val >= 100 and val <= 500."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Viết code tìm vị trí xuất hiện cuối cùng của 1 giá trị trong mảng.",
      answer: "Phương pháp giải: Khai báo vi_tri = -1. Chạy vòng for i in range(len(a)):, if a[i] == x: vi_tri = i. Hết vòng for mới return vi_tri."
    },
    {
      question: "Dạng 2: Viết code tìm kiếm theo khoảng giá trị hoặc nhiều điều kiện kết hợp.",
      answer: "Phương pháp giải: Dùng mảng kết quả res = []. Duyệt mảng gốc, dùng điều kiện if ... and ... để kiểm tra. Thỏa mãn thì res.append(i)."
    },
    {
      question: "Dạng 3: So sánh khác biệt code giữa tìm First Occurrence và Last Occurrence.",
      answer: "Phương pháp giải: Chỉ ra vị trí đặt return. First: return i nằm bên trong if. Last: gán vi_tri = i trong if, return vi_tri nằm ngoài vòng for."
    }
  ],
  homework: [
    {
      question: "Bài 1: Viết code tìm TẤT CẢ các vị trí xuất hiện của 1 giá trị trong mảng (trả về danh sách chỉ số).",
      answer: "Đáp án mẫu:\ndef tim_tat_ca(a, x):\n    res = []\n    for i in range(len(a)):\n        if a[i] == x:\n            res.append(i)\n    return res\n\nprint(tim_tat_ca([3, 7, 2, 7, 9, 7], 7))  # Output: [1, 3, 5]"
    },
    {
      question: "Bài 2: Với danh sách học sinh gồm tên và điểm trung bình, viết code tìm những học sinh có điểm TB trong khoảng [6.5, 8.0].",
      answer: "Đáp án mẫu:\ndanh_sach = [\n    {'ten': 'An', 'tb': 8.5},\n    {'ten': 'Bình', 'tb': 7.2},\n    {'ten': 'Chi', 'tb': 6.8},\n    {'ten': 'Dũng', 'tb': 5.5}\n]\n\nket_qua = [hs['ten'] for hs in danh_sach if 6.5 <= hs['tb'] <= 8.0]\nprint('Học sinh có điểm TB trong [6.5, 8.0]:', ket_qua)  # Output: ['Bình', 'Chi']"
    },
    {
      question: "Bài 3: Viết code tìm kiếm đa điều kiện: Học sinh Nam VÀ điểm Văn >= 7 VÀ điểm Toán >= 7 — trả về danh sách tên.",
      answer: "Đáp án mẫu:\nhoc_sinh = [\n    {'ten': 'Nam', 'gioi_tinh': 'Nam', 'van': 7.5, 'toan': 8.0},\n    {'ten': 'An',  'gioi_tinh': 'Nữ',  'van': 8.0, 'toan': 9.0},\n    {'ten': 'Bình', 'gioi_tinh': 'Nam', 'van': 6.5, 'toan': 7.5}\n]\n\nket_qua = []\nfor hs in hoc_sinh:\n    if hs['gioi_tinh'] == 'Nam' and hs['van'] >= 7.0 and hs['toan'] >= 7.0:\n        ket_qua.append(hs['ten'])\nprint(ket_qua)  # Output: ['Nam']"
    }
  ],
  practiceExercises: [
    {
      id: "ex-b20-1",
      badge: "Luyện Tập Thực Hành",
      duration: "20 phút",
      title: "Thực Hành Các Biến Thể Tìm Kiếm",
      description: "Cài đặt các hàm tìm kiếm vị trí cuối cùng, lọc sản phẩm theo khoảng giá và lọc học sinh theo tiêu chí phức tạp.",
      type: "sheet",
      content: {
        objective: "Thành thạo kỹ thuật đặt vị trí return và lọc dữ liệu đa điều kiện.",
        requirements: [
          "Viết hàm tim_vi_tri_cuoi(a, x).",
          "Viết hàm tim_san_pham_trong_khoang(ds, gia_min, gia_max).",
          "Chạy thử kiểm thử với dữ liệu thực tế."
        ],
        submissionHint: "Kiểm tra output console cho đúng kết quả mong đợi."
      }
    }
  ]
}
