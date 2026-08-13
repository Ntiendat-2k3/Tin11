export const b17Content = {
  warmUp: {
    question: "Nếu cần lưu điểm của 40 học sinh, em sẽ tạo 40 biến riêng lẻ diem1, diem2... hay dùng đúng 1 MẢNG duy nhất?",
    description: "Chào mừng em đến với Chủ đề 6 — Kĩ thuật lập trình (Khoa học máy tính)! Đây là bài đầu tiên em chính thức viết code Python xử lý dữ liệu tập hợp — tạo nền móng vững chắc cho toàn bộ các bài thuật toán tìm kiếm và sắp xếp phía sau."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm mảng một chiều (1D Array / List trong Python)",
      subsections: [
        {
          heading: "Vì sao cần dùng mảng thay vì nhiều biến rời rạc?",
          text: "Mảng 1 chiều là tập hợp nhiều phần tử có cùng kiểu dữ liệu, được lưu trữ liên tiếp trong bộ nhớ máy tính và truy cập thông qua chỉ số (index) duy nhất. Trong ngôn ngữ Python, cấu trúc dữ liệu tương ứng được cài đặt dưới dạng List.",
          points: [
            "Nếu lưu điểm 40 học sinh: Tạo 40 biến diem1, diem2... diem40 thì không thể dùng vòng lặp để duyệt hoặc tính toán hàng loạt.",
            "Giải pháp mảng: Chỉ dùng 1 mảng duy nhất diem = [8, 7, 9, ...], xử lý toán bộ bằng vòng lặp chỉ với vài dòng code.",
            "💡 Mẹo nhớ: Mảng giống như 'một dãy tủ khóa được đánh số thứ tự' — mỗi ô tủ (chỉ số index) chứa đúng một món đồ (giá trị phần tử)."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Cấu trúc chỉ số Indexing (Dương & Âm trong Python)",
      subsections: [
        {
          heading: "Quy tắc đánh chỉ số trong Python (Bắt đầu từ 0)",
          text: "Chỉ số mảng trong Python (và hầu hết ngôn ngữ như C++, Java) luôn bắt đầu từ 0, KHÔNG bắt đầu từ 1. Đây là điểm học sinh mới học rất hay nhầm lẫn.",
          points: [
            "Ví dụ mảng: a = [10, 20, 30, 40] → a[0] = 10 (phần tử đầu tiên), a[3] = 40 (phần tử cuối cùng, vì mảng có 4 phần tử thì chỉ số chạy từ 0 đến 3).",
            "Chỉ số âm (Tính năng đặc trưng của Python, C++ không có): a[-1] là phần tử CUỐI CÙNG, a[-2] là phần tử áp chót... đếm ngược từ cuối lên.",
            "💡 Mẹo nhớ: Chỉ số dương đếm từ đầu tới, chỉ số âm đếm từ cuối lùi lại — a[-1] luôn có giá trị bằng a[len(a)-1]."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Khai báo và các thao tác cơ bản trên mảng 1 chiều",
      subsections: [
        {
          heading: "Các cú pháp lệnh thao tác với List trong Python",
          text: "Python cung cấp nhiều hàm và phương thức tích hợp sẵn giúp làm việc với mảng cực kỳ ngắn gọn."
        }
      ],
      comparisonTable: {
        headers: ["Thao tác", "Cú pháp Python chuẩn", "Ví dụ mã lệnh", "Kết quả / Ý nghĩa"],
        rows: [
          ["Khai báo mảng", "a = [phần_tử_1, phần_tử_2]", "a = [1, 2, 3]", "Tạo mảng 1D gồm 3 phần tử số nguyên"],
          ["Truy cập phần tử", "a[i]", "print(a[0])", "In ra phần tử đầu tiên (giá trị 1)"],
          ["Sửa giá trị", "a[i] = giá_trị_mới", "a[0] = 99", "Thay phần tử index 0 thành 99 ([99, 2, 3])"],
          ["Thêm vào cuối", "a.append(x)", "a.append(4)", "Thêm số 4 vào cuối mảng ([1, 2, 3, 4])"],
          ["Xóa theo giá trị", "a.remove(x)", "a.remove(2)", "Xóa phần tử đầu tiên có giá trị 2 ([1, 3])"],
          ["Độ dài mảng", "len(a)", "print(len(a))", "Trả về số lượng phần tử hiện có trong mảng"],
          ["Cắt mảng (Slicing)", "a[start:end]", "a[1:3]", "Lấy mảng con từ chỉ số 1 đến trước 3"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "4. Khái niệm mảng hai chiều (2D Array / Ma trận)",
      subsections: [
        {
          heading: "Mảng của mảng (Cấu trúc Hàng x Cột)",
          text: "Mảng hai chiều là mảng mà mỗi phần tử bên trong lại LÀ MỘT MẢNG CON — tạo thành cấu trúc dạng bảng (hàng × cột), được truy cập thông qua 2 chỉ số a[hàng][cột].",
          points: [
            "Ví dụ thực tế: Bảng điểm cả lớp (mỗi hàng là 1 học sinh, mỗi cột là 1 môn học), Bàn cờ vua 8x8, Bức ảnh kỹ thuật số (mỗi ô là 1 pixel điểm ảnh).",
            "💡 Mẹo nhớ: Mảng 2 chiều = 'Mảng của mảng' — hình dung như 1 tủ có nhiều ngăn kéo (hàng), mỗi ngăn kéo lại có nhiều ô nhỏ chứa đồ (cột)."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Duyệt mảng 2 chiều bằng vòng lặp lồng nhau (Nested Loop)",
      subsections: [
        {
          heading: "Kỹ thuật 2 vòng for lồng nhau bắt buộc",
          text: "Để xử lý mảng 2D, ta dùng 2 vòng lặp for lồng nhau: Vòng lặp ngoài duyệt qua từng HÀNG, vòng lặp trong duyệt qua từng CỘT trong hàng đó.",
          points: [
            "Đây là kỹ thuật lập trình cốt lõi xuất hiện xuyên suốt trong các bài toán thuật toán nâng cao sau này."
          ]
        }
      ]
    },
    {
      id: "sec-6",
      title: "6. Minh họa thực hành code Python chạy thực tế",
      steps: [
        {
          step: "1. Minh họa chỉ số dương và chỉ số âm (Indexing)",
          detail: "a = [10, 20, 30, 40, 50]\n#    a[0] a[1] a[2] a[3] a[4]   ← chỉ số dương (từ trái qua)\n#   a[-5] a[-4] a[-3] a[-2] a[-1]  ← chỉ số âm (từ phải qua)\n\nprint(a[0])    # 10 (phần tử đầu)\nprint(a[-1])   # 50 (phần tử cuối)\nprint(a[2])    # 30 (phần tử giữa)"
        },
        {
          step: "2. Khai báo & duyệt mảng 1D tính điểm trung bình",
          detail: "diem = [8, 7, 9, 6, 10]\n\ntong = 0\nfor d in diem:        # duyệt lần lượt từng phần tử trong mảng\n    tong += d          # cộng dồn vào biến tong\ntrung_binh = tong / len(diem)\nprint('Điểm trung bình:', trung_binh)   # → 8.0"
        },
        {
          step: "3. Khai báo mảng 2D (Ma trận điểm cả lớp)",
          detail: "# Mỗi hàng là điểm 3 môn (Toán, Văn, Anh) của 1 học sinh\nbang_diem = [\n    [8, 7, 9],   # học sinh 1\n    [6, 8, 7],   # học sinh 2\n    [9, 9, 10],  # học sinh 3\n]\n\nprint(bang_diem[0])      # [8, 7, 9] → cả hàng của học sinh 1\nprint(bang_diem[0][1])   # 7 → điểm môn Văn (cột 1) của học sinh 1 (hàng 0)"
        },
        {
          step: "4. Duyệt mảng 2D bằng vòng lặp lồng nhau + tính TB từng học sinh",
          detail: "for i in range(len(bang_diem)):              # vòng ngoài: duyệt từng học sinh (từng hàng)\n    tong_hs = 0\n    for mon in bang_diem[i]:                  # vòng trong: duyệt từng môn (từng cột trong hàng i)\n        tong_hs += mon\n    tb = tong_hs / len(bang_diem[i])\n    print(f'Học sinh {i+1}: điểm TB = {tb:.2f}')"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Cho mảng Python a = [10, 20, 30, 40, 50]. Giá trị của biểu thức a[-1] và a[1] lần lượt là bao nhiêu?",
      options: [
        "A. a[-1] = 10, a[1] = 20",
        "B. a[-1] = 50, a[1] = 20",
        "C. a[-1] = 50, a[1] = 10",
        "D. a[-1] = 40, a[1] = 30"
      ],
      answer: "B",
      explanation: "a[-1] là phần tử cuối cùng của mảng (50). a[1] là phần tử tại chỉ số 1 (phần tử thứ hai, tức là 20)."
    },
    {
      question: "Cho mảng 2 chiều bang_diem = [[8, 7], [6, 9]]. Cú pháp bang_diem[1][0] truy xuất đến giá trị nào?",
      options: [
        "A. 8 (Hàng 0, Cột 0)",
        "B. 7 (Hàng 0, Cột 1)",
        "C. 6 (Hàng 1, Cột 0)",
        "D. 9 (Hàng 1, Cột 1)"
      ],
      answer: "C",
      explanation: "bang_diem[1] là mảng con thứ hai [6, 9]. [1][0] lấy phần tử đầu tiên của mảng con đó, tức là giá trị 6."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Cho mảng cụ thể → Tính giá trị tại 1 chỉ số dương/âm cho trước (Bẫy nhầm index từ 1 thay vì 0).",
      answer: "Phương pháp giải: Nhớ nguyên tắc index dương đếm từ 0 (0, 1, 2...), index âm đếm ngược từ -1 (-1, -2...)."
    },
    {
      question: "Dạng 2: Cho đoạn code có vòng lặp lồng nhau xử lý mảng 2D → Dự đoán chính xác kết quả in ra (Trace code).",
      answer: "Phương pháp giải: Viết bảng chạy tay (Trace table) từng bước: Với mỗi giá trị i của vòng lặp ngoài, chạy lần lượt toàn bộ vòng lặp j bên trong."
    },
    {
      question: "Dạng 3: Viết code Python thao tác cơ bản với mảng 1D (tính tổng, đếm, tìm max).",
      answer: "Phương pháp giải: Khởi tạo biến lưu kết quả (tong=0, dem=0, max_val=a[0]), dùng vòng for x in a: để duyệt qua các phần tử."
    }
  ],
  homework: [
    {
      question: "Bài 1: Viết code khai báo mảng 1D gồm 10 số nguyên bất kỳ, in ra phần tử đầu, phần tử cuối (dùng cả chỉ số dương lẫn chỉ số âm).",
      answer: "Đáp án mẫu:\na = [12, 45, 23, 67, 89, 34, 90, 11, 56, 78]\nprint('Phần tử đầu (dương):', a[0])\nprint('Phần tử cuối (dương):', a[len(a)-1])\nprint('Phần tử cuối (âm):', a[-1])"
    },
    {
      question: "Bài 2: Viết code duyệt mảng 1D, đếm xem có bao nhiêu phần tử là số chẵn.",
      answer: "Đáp án mẫu:\na = [12, 45, 23, 67, 89, 34, 90, 11, 56, 78]\ndem = 0\nfor x in a:\n    if x % 2 == 0:\n        dem += 1\nprint('Số lượng số chẵn trong mảng:', dem)"
    },
    {
      question: "Bài 3: Viết code tạo ma trận 2D 3x3 tùy ý, in ra tổng tất cả các phần tử trong ma trận (dùng vòng lặp lồng nhau).",
      answer: "Đáp án mẫu:\nmatrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\ntong = 0\nfor row in matrix:\n    for val in row:\n        tong += val\nprint('Tổng ma trận 3x3:', tong)"
    },
    {
      question: "Bài 4: Từ bảng điểm 2D bang_diem ở minh họa, viết thêm code tìm học sinh có điểm trung bình cao nhất.",
      answer: "Đáp án mẫu:\nbang_diem = [[8, 7, 9], [6, 8, 7], [9, 9, 10]]\nmax_tb = 0\nhs_best = 0\nfor i in range(len(bang_diem)):\n    tb = sum(bang_diem[i]) / len(bang_diem[i])\n    if tb > max_tb:\n        max_tb = tb\n        hs_best = i + 1\nprint(f'Học sinh {hs_best} có điểm TB cao nhất là: {max_tb:.2f}')"
    }
  ]
}
