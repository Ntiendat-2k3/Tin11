export const b18Content = {
  warmUp: {
    question: "Làm thế nào để 'thuộc lòng' các mẫu code duyệt mảng thần thánh dùng cho mọi thuật toán sau này?",
    description: "Bài thực hành này trang bị cho em các Mẫu duyệt mảng chuẩn (Iterative Patterns) — như Tìm Max/Min, Đếm theo điều kiện, Lọc mảng. Đây là 'khuôn mẫu tái sử dụng' cho toàn bộ các bài thuật toán Tìm kiếm & Sắp xếp ở Bài 19-22!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Bốn Mẫu duyệt mảng chuẩn (Iterative Patterns)",
      subsections: [
        {
          heading: "Khuôn mẫu tái sử dụng trong lập trình thuật toán",
          text: "Hầu hết các bài toán xử lý mảng đều được xây dựng dựa trên sự kết hợp của 4 mẫu duyệt mảng cơ bản sau."
        }
      ],
      comparisonTable: {
        headers: ["Tên mẫu duyệt (Pattern)", "Ý tưởng thuật toán cốt lõi", "Cảnh báo & Lỗi thường gặp của học sinh"],
        rows: [
          ["1. Duyệt tuyến tính (Linear Traversal)", "for x in a: thực hiện 1 hành động trên từng phần tử", "Tránh làm thay đổi kích thước mảng (append/remove) khi đang trong vòng for"],
          ["2. Tìm Max / Min (Max/Min Pattern)", "Giả định max = a[0], duyệt từ a[1] so sánh và cập nhật max", "⚠️ LỖI HAY GẶP: Khởi tạo max = 0! SAI nếu mảng toàn số âm. Bắt buộc khởi tạo bằng chính phần tử đầu a[0]"],
          ["3. Đếm điều kiện (Counting Pattern)", "Khởi tạo biến đếm dem = 0, gặp phần tử thỏa điều kiện: dem += 1", "Quên khởi tạo dem = 0 trước vòng lặp hoặc đặt dem = 0 bên trong vòng lặp"],
          ["4. Lọc tạo mảng mới (Filtering Pattern)", "Khởi tạo mảng rỗng res = [], duyệt mảng gốc, nếu thỏa: res.append(x)", "Giữ nguyên mảng gốc không làm mất dữ liệu ban đầu"]
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. Kỹ thuật Lọc & List Comprehension trong Python",
      subsections: [
        {
          heading: "Cú pháp rút gọn đặc trưng của Python",
          text: "List Comprehension giúp cô đọng mẫu lọc mảng (Filtering Pattern) từ 4 dòng code thành đúng 1 dòng duy nhất.",
          points: [
            "Cách viết tường minh: hs_gioi = [] → for d in diem: if d >= 8: hs_gioi.append(d)",
            "Cách viết rút gọn List Comprehension: hs_gioi = [d for d in diem if d >= 8]",
            "Luồng hoạt động của 2 cách viết là HOÀN TOÀN GIỐNG NHAU — cách rút gọn chỉ là nén cú pháp lại.",
            "💡 Lời khuyên: Học sinh nên thành thạo và viết vững cách tường minh trước, sau đó mới luyện tập cách rút gọn."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Kết hợp nhiều mẫu duyệt trên mảng 2 chiều",
      subsections: [
        {
          heading: "Bài toán tổng hợp thực tế",
          text: "Các bài toán thực tế thường yêu cầu ghép nối nhiều mẫu duyệt lại với nhau (VD: vừa lọc, vừa đếm, vừa tính trung bình).",
          points: [
            "Đúng tinh thần tư duy 'làm mịn dần' sẽ được học chính thức ở Bài 26-27."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Minh họa code thực hành 4 mẫu duyệt chuẩn",
      steps: [
        {
          step: "1. Mẫu tìm giá trị lớn nhất (Max Pattern chuẩn - Tránh lỗi gán 0)",
          detail: "diem = [8, 7, 9, 6, 10]\n\nmax_diem = diem[0]          # ✅ khởi tạo bằng chính phần tử đầu, KHÔNG dùng 0\nfor d in diem[1:]:          # duyệt từ phần tử thứ 2 trở đi\n    if d > max_diem:\n        max_diem = d         # cập nhật nếu gặp giá trị lớn hơn\nprint('Điểm cao nhất:', max_diem)   # → 10"
        },
        {
          step: "2. Mẫu đếm theo điều kiện (Counting Pattern)",
          detail: "diem = [8, 7, 9, 6, 10, 4]\n\ndem_gioi = 0\nfor d in diem:\n    if d >= 8:              # điều kiện: đạt học sinh Giỏi\n        dem_gioi += 1\nprint('Số học sinh Giỏi:', dem_gioi)   # → 3"
        },
        {
          step: "3. Mẫu lọc tạo mảng mới (Filtering Pattern): Tường minh vs List Comprehension",
          detail: "diem = [8, 7, 9, 6, 10, 4]\n\n# Cách viết 1: Tường minh (dễ hiểu luồng hoạt động)\nhs_gioi = []                    # mảng mới rỗng ban đầu\nfor d in diem:\n    if d >= 8:\n        hs_gioi.append(d)       # chỉ thêm vào nếu thỏa điều kiện\nprint(hs_gioi)                  # → [8, 9, 10]\n\n# Cách viết 2: Rút gọn List Comprehension (Python đặc trưng)\nhs_gioi_v2 = [d for d in diem if d >= 8]\nprint(hs_gioi_v2)               # → [8, 9, 10]"
        },
        {
          step: "4. Bài toán tổng hợp mảng 2D: Lọc học sinh có điểm TB >= 8",
          detail: "bang_diem = [\n    [8, 7, 9],   # học sinh 1 (TB = 8.0)\n    [6, 8, 7],   # học sinh 2 (TB = 7.0)\n    [9, 9, 10],  # học sinh 3 (TB = 9.33)\n]\n\ndanh_sach_gioi = []\nfor i in range(len(bang_diem)):\n    tb = sum(bang_diem[i]) / len(bang_diem[i])   # tính trung bình hàng i\n    if tb >= 8:\n        danh_sach_gioi.append(i + 1)             # lưu SỐ THỨ TỰ học sinh (đánh số từ 1)\n\nprint('Danh sách học sinh Giỏi (STT):', danh_sach_gioi)   # → [1, 3]"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Khi cài đặt thuật toán tìm giá trị nhỏ nhất (Min) trong mảng số nguyên, cách khởi tạo biến min_val nào sau đây là ĐÚNG NGUYÊN TẮC nhất?",
      options: [
        "A. min_val = 0",
        "B. min_val = 999999",
        "C. min_val = a[0] (gán bằng chính phần tử đầu tiên của mảng)",
        "D. min_val = -1"
      ],
      answer: "C",
      explanation: "Khởi tạo min_val = a[0] (hoặc max_val = a[0]) đảm bảo tính đúng đắn cho mọi tập dữ liệu, kể cả khi mảng chứa toàn số âm hay số siêu lớn."
    },
    {
      question: "Đoạn mã Python 'res = [x for x in a if x % 2 != 0]' thực hiện mẫu duyệt nào trên mảng a?",
      options: [
        "A. Mẫu đếm số lượng số lẻ",
        "B. Mẫu Lọc các số lẻ và tạo mảng mới res chứa các số lẻ đó",
        "C. Mẫu tìm số lẻ lớn nhất",
        "D. Mẫu xóa toàn bộ số lẻ khỏi mảng a"
      ],
      answer: "B",
      explanation: "Cú pháp List Comprehension [x for x in a if x % 2 != 0] thực hiện lọc các phần tử thỏa mãn x % 2 != 0 (số lẻ) và đưa vào mảng mới res."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Cho một đoạn code có lỗi khởi tạo sai (VD: max = 0 với mảng có số âm) → Yêu cầu tìm lỗi và sửa lại cho đúng.",
      answer: "Phương pháp giải: Phát hiện dòng khởi tạo max/min cố định bằng con số 0 hoặc 99999 → Sửa lại thành max_val = a[0] và duyệt từ vòng for x in a[1:]:."
    },
    {
      question: "Dạng 2: Viết code áp dụng đúng 1 mẫu duyệt (đếm / lọc / tìm max-min) cho bài toán cụ thể.",
      answer: "Phương pháp giải: Chọn đúng 'khuôn mẫu' tương ứng: Tìm max/min (gán a[0]), Đếm (khởi tạo dem=0), Lọc (khởi tạo mảng rỗng res=[])."
    },
    {
      question: "Dạng 3: Trace code (chạy tay từng bước) đoạn mã có List Comprehension → Dự đoán kết quả output.",
      answer: "Phương pháp giải: Viết ra mảng gốc, thử từng phần tử xem có thỏa điều kiện if hay không. Nếu thỏa thì ghi phần tử đó vào danh sách kết quả."
    }
  ],
  homework: [
    {
      question: "Bài 1: Viết code tìm giá trị NHỎ NHẤT (Min) trong mảng 1D (Áp dụng đúng nguyên tắc khởi tạo min_val = a[0]).",
      answer: "Đáp án mẫu:\na = [15, -4, 23, -8, 42, 7]\nmin_val = a[0]\nfor x in a[1:]:\n    if x < min_val:\n        min_val = x\nprint('Giá trị nhỏ nhất:', min_val)  # → -8"
    },
    {
      question: "Bài 2: Viết code đếm số lượng số nguyên tố trong 1 mảng cho trước (Kết hợp mẫu đếm + hàm kiểm tra SNT).",
      answer: "Đáp án mẫu:\ndef is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0: return False\n    return True\n\na = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]\ndem_snt = 0\nfor x in a:\n    if is_prime(x):\n        dem_snt += 1\nprint('Số lượng số nguyên tố:', dem_snt)  # → 5 (2, 3, 5, 7, 11)"
    },
    {
      question: "Bài 3: Từ mảng 1D điểm số cho trước, viết code lọc ra 2 mảng mới riêng biệt: 'Đạt' (>= 5) và 'Chưa đạt' (< 5).",
      answer: "Đáp án mẫu:\ndiem = [8.5, 4.0, 7.0, 3.5, 9.0, 5.0, 2.5]\ndat = [d for d in diem if d >= 5.0]\nchua_dat = [d for d in diem if d < 5.0]\nprint('Danh sách Đạt:', dat)\nprint('Danh sách Chưa đạt:', chua_dat)"
    },
    {
      question: "Bài 4: Với bảng điểm 2D tự cho (4 học sinh, 3 môn), viết code tổng hợp: tính điểm TB từng học sinh, đếm số HS Giỏi (TB>=8), lọc ra danh sách STT các HS Giỏi đó.",
      answer: "Đáp án mẫu:\nbang_diem = [\n    [8.5, 9.0, 8.0],  # HS 1: TB 8.5 (Giỏi)\n    [6.0, 7.0, 6.5],  # HS 2: TB 6.5\n    [9.0, 9.5, 9.0],  # HS 3: TB 9.17 (Giỏi)\n    [5.0, 6.0, 5.5]   # HS 4: TB 5.5\n]\ndem_gioi = 0\nstt_gioi = []\nfor i in range(len(bang_diem)):\n    tb = sum(bang_diem[i]) / len(bang_diem[i])\n    print(f'Học sinh {i+1}: TB = {tb:.2f}')\n    if tb >= 8.0:\n        dem_gioi += 1\n        stt_gioi.append(i + 1)\nprint('Số học sinh Giỏi:', dem_gioi)\nprint('Danh sách STT học sinh Giỏi:', stt_gioi)"
    }
  ]
}
