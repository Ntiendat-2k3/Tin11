export const b19Content = {
  warmUp: {
    question: "Trước khi lao vào viết code, làm thế nào để hiểu rõ 'Bài toán tìm kiếm là gì' và vì sao nó là nền tảng của mọi phần mềm?",
    description: "Bài học này đặt nền móng tư duy thuật toán: hiểu rõ bản chất bài toán tìm kiếm trước khi lập trình — tránh tình trạng thuộc vẹt code mà không giải thích được vì sao thuật toán chạy đúng."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm bài toán tìm kiếm (Searching Problem)",
      subsections: [
        {
          heading: "Định nghĩa & Vai trò trong xử lý dữ liệu",
          text: "Cho một tập hợp dữ liệu (mảng, danh sách) và 1 giá trị cần tìm (gọi là khóa tìm kiếm — search key), bài toán tìm kiếm yêu cầu xác định: giá trị đó có tồn tại trong tập dữ liệu không, và nếu có thì ở vị trí (chỉ số) nào.",
          points: [
            "Hầu như mọi phần mềm thực tế đều cần tìm kiếm: Tìm 1 học sinh trong danh sách lớp, tìm 1 từ trong từ điển, tìm sản phẩm trên trang thương mại điện tử...",
            "Liên hệ CSDL: Phép tìm kiếm chính là bản chất của câu lệnh SELECT ... WHERE đã học ở Bài 14 trong SQL!",
            "💡 Mẹo nhớ: Bài toán tìm kiếm luôn trả lời 2 câu hỏi cốt lõi: 'Có hay không?' và 'Ở đâu (vị trí chỉ số nào)?'."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Đầu vào – Đầu ra của bài toán tìm kiếm",
      subsections: [
        {
          heading: "Xác định rõ Input / Output trước khi lập trình",
          text: "Để viết được hàm tìm kiếm chuẩn, việc đầu tiên là xác định chính sở đầu vào và đầu ra.",
          points: [
            "Đầu vào (Input): 1 mảng/danh sách a gồm N phần tử, và 1 giá trị khóa x cần tìm.",
            "Đầu ra (Output): Vị trí (chỉ số index i) của x trong mảng nếu tìm thấy, hoặc quy ước trả về -1 nếu không tìm thấy."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Thuật toán Tìm kiếm tuần tự (Sequential / Linear Search) — Ý tưởng",
      subsections: [
        {
          heading: "Ý tưởng rà soát từng phần tử từ đầu đến cuối",
          text: "Duyệt lần lượt từng phần tử của mảng từ đầu tới cuối (chỉ số 0 đến N-1), so sánh từng phần tử với khóa x cần tìm. Nếu trùng thì dừng và trả về vị trí đó ngay. Nếu đã duyệt hết mảng mà không thấy thì kết luận không tồn tại (-1).",
          points: [
            "💡 Mẹo nhớ: Giống như tìm 1 cuốn sách trong giá sách chưa được sắp xếp — buộc phải rà từng cuốn một từ trái sang phải, không có cách nào đoán nhanh hơn."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Các bước thực hiện thuật toán (Pseudo-code)",
      subsections: [
        {
          heading: "Các bước mã giả chuẩn thuật toán",
          text: "Bước 1: i ← 0 (bắt đầu từ phần tử đầu tiên)\nBước 2: Nếu i >= N (đã duyệt hết mảng) → trả về 'Không tìm thấy' (-1), kết thúc\nBước 3: Nếu a[i] == x (khóa cần tìm) → trả về vị trí i, kết thúc\nBước 4: Ngược lại, i ← i + 1, quay lại Bước 2"
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Số lần so sánh tối đa (Best case vs Worst case)",
      subsections: [
        {
          heading: "Đánh giá số phép so sánh chuẩn bị cho Bài 24",
          text: "Số lần so sánh thể hiện hiệu năng của thuật toán tùy thuộc vào vị trí của phần tử cần tìm.",
          points: [
            "Trường hợp xấu nhất (Worst case): x nằm ở vị trí cuối cùng hoặc không tồn tại trong mảng → thuật toán phải so sánh đúng N lần (với N là số phần tử).",
            "Trường hợp tốt nhất (Best case): x nằm ngay ở vị trí đầu tiên (a[0]) → chỉ cần đúng 1 lần so sánh.",
            "💡 Ký hiệu: Số lần so sánh tối đa N là cơ sở để suy ra độ phức tạp thời gian O(N) ở Bài 24."
          ]
        }
      ]
    },
    {
      id: "sec-6",
      title: "6. Minh họa thực hành (Trace tay, Code Python & Liên hệ SQL)",
      steps: [
        {
          step: "1. Trace tay từng bước (Mảng a = [5, 3, 8, 1, 9, 2], Tìm x = 1)",
          detail: "Mảng: a = [5, 3, 8, 1, 9, 2] | Khóa x = 1\n\n- i = 0: a[0] = 5, so sánh 5 == 1? Sai → tăng i = 1\n- i = 1: a[1] = 3, so sánh 3 == 1? Sai → tăng i = 2\n- i = 2: a[2] = 8, so sánh 8 == 1? Sai → tăng i = 3\n- i = 3: a[3] = 1, so sánh 1 == 1? ĐÚNG → Trả về vị trí 3, dừng thuật toán!\n\nKết quả: Tìm thấy x = 1 tại vị trí index 3, trải qua đúng 4 lần so sánh."
        },
        {
          step: "2. Code Python thuật toán Tìm kiếm tuần tự chuẩn",
          detail: "def tim_kiem_tuan_tu(a, x):\n    for i in range(len(a)):        # duyệt qua từng chỉ số i từ 0 đến hết mảng\n        if a[i] == x:                # so sánh phần tử tại vị trí i với x\n            return i                  # tìm thấy → trả về vị trí ngay lập tức (Early return)\n    return -1                        # duyệt hết mà không thấy → trả về -1\n\na = [5, 3, 8, 1, 9, 2]\nprint(tim_kiem_tuan_tu(a, 1))    # Output: 3\nprint(tim_kiem_tuan_tu(a, 100))  # Output: -1 (không tồn tại)"
        },
        {
          step: "3. Code Python đếm số lần so sánh thực tế (Best / Worst case)",
          detail: "def tim_kiem_dem_so_sanh(a, x):\n    dem = 0\n    for i in range(len(a)):\n        dem += 1                     # mỗi lần so sánh tăng biến đếm\n        if a[i] == x:\n            return i, dem\n    return -1, dem\n\na = [5, 3, 8, 1, 9, 2]\nprint(tim_kiem_dem_so_sanh(a, 5))   # → (0, 1)  Best case: 1 lần so sánh\nprint(tim_kiem_dem_so_sanh(a, 2))   # → (5, 6)  Worst case: 6 lần (= N)"
        },
        {
          step: "4. Liên hệ thực tế với câu lệnh SQL không chỉ mục (Index)",
          detail: "-- Trong CSDL SQL (Bài 14-16):\nSELECT * FROM HocSinh WHERE MaHS = 'HS04';\n\n-- Nếu bảng KHÔNG có INDEX trên cột MaHS, DBMS buộc phải quét tuần tự (Full Table Scan)\n-- từng dòng dữ liệu để so sánh — chính là thuật toán Tìm kiếm tuần tự!\n-- Tạo INDEX (Bài 16) giúp tránh tìm kiếm tuần tự trên bảng lớn."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Trong bài toán tìm kiếm trên mảng N phần tử, đầu ra (Output) chuẩn khi KHÔNG tìm thấy giá trị khóa x thường quy ước trả về giá trị nào?",
      options: [
        "A. 0",
        "B. -1",
        "C. N",
        "D. None/Null duy nhất"
      ],
      answer: "B",
      explanation: "Chỉ số mảng bắt đầu từ 0 đến N-1. Do đó giá trị -1 được dùng làm quy ước chuẩn để báo hiệu 'không tìm thấy' vì không trùng với bất kỳ chỉ số hợp lệ nào."
    },
    {
      question: "Với mảng a gồm 10 phần tử, số lần so sánh TỐI ĐA (Worst case) của thuật toán Tìm kiếm tuần tự là bao nhiêu?",
      options: [
        "A. 1 lần",
        "B. 5 lần",
        "C. 10 lần",
        "D. 9 lần"
      ],
      answer: "C",
      explanation: "Trong trường hợp xấu nhất (phần tử ở vị trí cuối cùng hoặc không tồn tại trong mảng), thuật toán phải duyệt qua và so sánh đủ N lần (10 lần)."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Trace tay thuật toán Tìm kiếm tuần tự trên mảng cho trước.",
      answer: "Phương pháp giải: Liệt kê từng chỉ số i từ 0, viết giá trị a[i], ghi phép so sánh a[i] == x (Đúng hay Sai). Đếm số lần so sánh cho đến khi dừng."
    },
    {
      question: "Dạng 2: Viết code Python hàm Tìm kiếm tuần tự cơ bản.",
      answer: "Phương pháp giải: Dùng vòng for i in range(len(a)):. Trong vòng lặp if a[i] == x: return i. Cuối hàm (ngoài vòng for) return -1."
    },
    {
      question: "Dạng 3: Xác định trường hợp tốt nhất / xấu nhất cho 1 mảng và khóa x cụ thể.",
      answer: "Phương pháp giải: Tốt nhất (Best case): x ở a[0] → 1 lần so sánh. Xấu nhất (Worst case): x ở a[-1] hoặc không có trong a → N lần so sánh."
    },
    {
      question: "Dạng 4: Giải thích bằng lời ý tưởng thuật toán cho tình huống thực tế.",
      answer: "Phương pháp giải: Mô tả việc kiểm tra lần lượt từng phần tử từ đầu đến cuối danh sách chưa sắp xếp, gặp trùng thì dừng, hết danh sách không thấy thì báo không có."
    }
  ],
  homework: [
    {
      question: "Bài 1: Viết code Tìm kiếm tuần tự tìm và trả về TẤT CẢ các vị trí xuất hiện của x trong mảng (không dừng ở lần đầu tiên).",
      answer: "Đáp án mẫu:\ndef tim_tat_ca_vi_tri(a, x):\n    vi_tri = []\n    for i in range(len(a)):\n        if a[i] == x:\n            vi_tri.append(i)\n    return vi_tri\n\na = [5, 3, 1, 8, 1, 9, 1]\nprint(tim_tat_ca_vi_tri(a, 1))  # Output: [2, 4, 6]"
    },
    {
      question: "Bài 2: Trace tay bằng bảng cho mảng a = [7, 2, 9, 4, 1], tìm x = 9 — ghi rõ từng bước so sánh.",
      answer: "Đáp án mẫu:\n- i = 0: a[0] = 7 == 9? Sai\n- i = 1: a[1] = 2 == 9? Sai\n- i = 2: a[2] = 9 == 9? ĐÚNG → Trả về i = 2.\nTổng số lần so sánh: 3 lần."
    },
    {
      question: "Bài 3: Với mảng 10 phần tử tự cho, tính số lần so sánh tối đa (Worst case) mà không cần chạy code, chỉ dựa vào lý thuyết.",
      answer: "Đáp án mẫu:\nTheo lý thuyết, với mảng N phần tử, trường hợp xấu nhất (x ở vị trí cuối a[9] hoặc x không có trong mảng) thuật toán Tìm kiếm tuần tự phải thực hiện đúng N phép so sánh. Do đó với N = 10, số lần so sánh tối đa là 10 lần."
    },
    {
      question: "Bài 4: Giải thích: Vì sao Tìm kiếm tuần tự áp dụng được cho MOỊ loại mảng (kể cả chưa sắp xếp)?",
      answer: "Đáp án mẫu:\nTìm kiếm tuần tự không đưa ra bất kỳ giả định nào về thứ tự các phần tử. Thuật toán kiểm tra từng phần tử một cách độc lập từ đầu đến cuối, nên dữ liệu có sắp xếp hay xáo trộn ngẫu nhiên thì thuật toán vẫn hoạt động chính xác."
    }
  ],
  practiceExercises: [
    {
      id: "ex-b19-1",
      badge: "Luyện Tập Code",
      duration: "15 phút",
      title: "Cài Đặt & Trace Tìm Kiếm Tuần Tự",
      description: "Thực hành viết hàm tìm kiếm tuần tự trong Python, trace đếm số lần so sánh với các tập dữ liệu khác nhau.",
      type: "sheet",
      content: {
        objective: "Viết thành thạo hàm Tìm kiếm tuần tự và giải thích luồng thực thi.",
        requirements: [
          "Viết hàm tim_kiem(a, x) trả về vị trí đầu tiên của x.",
          "Chạy thử với x nằm ở đầu mảng, x ở giữa, x ở cuối và x không có trong mảng.",
          "Đếm và in ra số phép so sánh tương ứng cho từng trường hợp."
        ],
        submissionHint: "Chạy file Python và kiểm tra output console."
      }
    }
  ]
}
