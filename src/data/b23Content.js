export const b23Content = {
  warmUp: {
    question: "Vì sao một đoạn code Python chạy trơn tru không hề báo lỗi gì vẫn có thể cho ra kết quả sai hoàn toàn?",
    description: "Chuyển từ tư duy 'viết code chạy được là xong' sang tư duy lập trình chuyên nghiệp: viết code đúng và biết cách CHỨNG MINH nó đúng thông qua kiểm thử có hệ thống."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm Kiểm thử phần mềm (Software Testing) & Mục đích",
      subsections: [
        {
          heading: "Kiểm thử để phát hiện lỗi (Bug)",
          text: "Kiểm thử là quá trình chạy thử chương trình với nhiều bộ dữ liệu đầu vào khác nhau (Test cases), đối chiếu kết quả thực tế thu được với kết quả mong đợi nhằm phát hiện các lỗi sai sót (Bug).",
          points: [
            "Chương trình chạy trơn tru, không bị crash văng lỗi KHÔNG đồng nghĩa với chương trình đã viết đúng!",
            "Chương trình có thể cho ra kết quả sai với một số trường hợp đầu vào cụ thể — đó là lý do phải kiểm thử có hệ thống chứ không chỉ chạy thử 1 lần 'cho có'."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Ba loại lỗi chương trình (Phân biệt rõ)",
      subsections: [
        {
          heading: "Phân loại 3 nhóm lỗi phổ biến trong lập trình",
          text: "Học sinh bắt buộc phải phân biệt được 3 loại lỗi sau:"
        }
      ],
      comparisonTable: {
        headers: ["Loại lỗi", "Định nghĩa", "Ví dụ Python", "Khi nào phát hiện"],
        rows: [
          ["Lỗi cú pháp (Syntax Error)", "Viết sai quy tắc ngữ pháp ngôn ngữ lập trình", "if x = 5: (thiếu dấu ==)", "Ngay khi biên dịch/chạy, chương trình không chạy được"],
          ["Lỗi ngoại lệ khi chạy (Runtime Error)", "Cú pháp đúng nhưng gặp tình huống không xử lý được lúc thực thi", "10 / 0 (chia cho 0) hoặc IndexError", "Khi chương trình chạy đến dòng bị lỗi thì dừng đột ngột"],
          ["Lỗi logic (Logic Error)", "Cú pháp đúng, chạy trơn tru, nhưng ra kết quả sai do tư duy thuật toán sai", "Tính TB dùng tong / (n+1) thay vì tong / n", "Khó phát hiện nhất — chương trình im lặng trả kết quả sai, phải kiểm thử mới thấy"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Quy trình kiểm thử có hệ thống & Bộ Test Case",
      subsections: [
        {
          heading: "Thiết kế bộ dữ liệu kiểm thử chuẩn",
          text: "Xây dựng các trường hợp kiểm thử (Test cases) bao gồm:",
          points: [
            "Trường hợp thông thường (Normal cases): Dữ liệu chuẩn hay gặp.",
            "Trường hợp biên (Boundary cases): Giá trị nhỏ nhất, lớn nhất, phần tử ở đầu/cuối.",
            "Trường hợp đặc biệt (Edge/Special cases): Mảng rỗng [], giá trị âm, giá trị trùng lặp...",
            "Định ước: Với mỗi test case, ghi rõ Đầu vào (Input), Kết quả mong đợi (Expected Output) và Kết quả thực tế (Actual Output)."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Kiểm thử hộp đen và kiểm thử hộp trắng",
      subsections: [
        {
          heading: "Hai phương pháp kiểm thử chính",
          text: "Kiểm thử hộp đen (Black-box Testing): Chỉ quan tâm Input - Output, không cần xem mã nguồn bên trong.\nKiểm thử hộp trắng (White-box Testing): Hiểu rõ mã nguồn bên trong, kiểm tra từng nhánh logic (câu lệnh if/else, vòng lặp) xem có được thực thi đúng không."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành (Bảng Test Case & Code tự động kiểm thử)",
      steps: [
        {
          step: "1. Bảng thiết kế bộ Test Case chuẩn cho thuật toán Tìm kiếm tuần tự (Bài 19)",
          detail: "| STT | Input (mảng a, khóa x) | Expected Output | Ghi chú loại trường hợp |\n|---|---|---|---|\n| 1 | ([5, 3, 8, 1], 8) | 2 | Trường hợp thông thường |\n| 2 | ([5, 3, 8, 1], 5) | 0 | x nằm ở vị trí ĐẦU (biên) |\n| 3 | ([5, 3, 8, 1], 1) | 3 | x nằm ở vị trí CUỐI (biên) |\n| 4 | ([5, 3, 8, 1], 100) | -1 | x KHÔNG tồn tại trong mảng |\n| 5 | ([], 5) | -1 | Mảng RỖNG (trường hợp đặc biệt) |"
        },
        {
          step: "2. Ví dụ 3 loại lỗi cụ thể trên cùng chủ đề code Python",
          detail: "# (A) Lỗi cú pháp Syntax Error — Thiếu dấu hai chấm cuối dòng def\ndef bubble_sort(a)             # ❌ SAI: Thiếu dấu ':'\n    pass\n\n# (B) Lỗi ngoại lệ Runtime Error — Chia cho 0 khi mảng rỗng\ndef tinh_trung_binh(a):\n    return sum(a) / len(a)     # ❌ SAI: Nếu a = [] → len(a) = 0 → văng lỗi ZeroDivisionError!\n\n# (C) Lỗi logic Logic Error — Đề yêu cầu giảm dần nhưng code lại sắp tăng dần\ndef bubble_sort_giam_dan(a):\n    n = len(a)\n    for luot in range(n - 1):\n        for i in range(n - 1 - luot):\n            if a[i] > a[i + 1]:             # ❌ SAI LOGIC: Đề bảo giảm dần nhưng lại dùng dấu >\n                a[i], a[i + 1] = a[i + 1], a[i]\n    return a"
        },
        {
          step: "3. Code Python tự động chạy bộ kiểm thử (Automated Test Suite)",
          detail: "def tim_kiem_tuan_tu(a, x):\n    for i in range(len(a)):\n        if a[i] == x:\n            return i\n    return -1\n\ntest_cases = [\n    (([5, 3, 8, 1], 8), 2),\n    (([5, 3, 8, 1], 5), 0),\n    (([5, 3, 8, 1], 1), 3),\n    (([5, 3, 8, 1], 100), -1),\n    (([], 5), -1),\n]\n\nfor (a, x), expected in test_cases:\n    actual = tim_kiem_tuan_tu(a, x)\n    ket_qua = '✅ PASS' if actual == expected else '❌ FAIL'\n    print(f'Input: a={a}, x={x} → Expected={expected}, Actual={actual} → {ket_qua}')"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Trong 3 loại lỗi lập trình (Cú pháp, Runtime, Logic), loại lỗi nào NGUY HIỂM VÀ KHÓ PHÁT HIỆN NHẤT vì chương trình không hề báo lỗi văng ứng dụng?",
      options: [
        "A. Lỗi cú pháp (Syntax Error)",
        "B. Lỗi ngoại lệ khi chạy (Runtime Error)",
        "C. Lỗi logic (Logic Error)",
        "D. Cả 3 loại nguy hiểm như nhau"
      ],
      answer: "C",
      explanation: "Lỗi logic nguy hiểm nhất vì chương trình vẫn thực thi trơn tru không báo lỗi gì, nhưng cho ra kết quả sai lệch mà người dùng khó nhận biết nếu không kiểm thử kỹ."
    },
    {
      question: "Một bộ dữ liệu kiểm thử (Test case) chuẩn bắt buộc phải bao gồm 2 thành phần chính nào?",
      options: [
        "A. Tên hàm và Tên biến",
        "B. Dữ liệu đầu vào (Input) và Kết quả mong đợi (Expected Output)",
        "C. Mã lỗi và Số dòng bị lỗi",
        "D. Thời gian chạy và Dung lượng bộ nhớ"
      ],
      answer: "B",
      explanation: "Mỗi test case cần có Input truyền vào hàm và Expected Output để đối chiếu với kết quả thực tế (Actual Output) của chương trình."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Phân loại lỗi (Syntax, Runtime, Logic) từ thông báo hoặc đoạn code mẫu.",
      answer: "Phương pháp giải: Không chạy được do sai cú pháp → Syntax Error. Đang chạy văng lỗi (chia 0, sai index) → Runtime Error. Chạy bình thường nhưng ra sai đáp án → Logic Error."
    },
    {
      question: "Dạng 2: Thiết kế bộ test case cho một thuật toán cho trước.",
      answer: "Phương pháp giải: Lập bảng gồm STT, Input, Expected Output. Đảm bảo có đủ: TH thông thường, TH biên (đầu/cuối), TH đặc biệt (rỗng/không có)."
    }
  ],
  homework: [
    {
      question: "Bài 1: Thiết kế bộ test case chuẩn (tối thiểu 5 trường hợp) cho thuật toán Bubble Sort đã học ở Bài 21.",
      answer: "Đáp án mẫu:\n- Test 1: [5, 3, 8, 1] → [1, 3, 5, 8] (Thông thường)\n- Test 2: [1, 2, 3, 4] → [1, 2, 3, 4] (Đã sắp xếp sẵn)\n- Test 3: [4, 3, 2, 1] → [1, 2, 3, 4] (Sắp ngược chiều hoàn toàn)\n- Test 4: [5] → [5] (Mảng 1 phần tử)\n- Test 5: [] → [] (Mảng rỗng)"
    },
    {
      question: "Bài 2: Tìm và chỉ ra loại lỗi trong đoạn code: def tinh_tb(a): return sum(a) / len(a) khi gọi tinh_tb([]).",
      answer: "Đáp án mẫu:\nĐây là Lỗi ngoại lệ khi chạy (Runtime Error) — cụ thể là lỗi ZeroDivisionError do mảng a rỗng có len(a) = 0."
    },
    {
      question: "Bài 3: Viết code kiểm thử tự động cho hàm tìm vị trí xuất hiện cuối cùng đã viết ở Bài 20.",
      answer: "Đáp án mẫu:\ndef tim_vi_tri_cuoi(a, x):\n    vi_tri = -1\n    for i in range(len(a)):\n        if a[i] == x:\n            vi_tri = i\n    return vi_tri\n\ntests = [\n    (([3, 7, 2, 7, 9], 7), 3),\n    (([3, 7, 2, 7, 9], 5), -1),\n    (([7, 7, 7], 7), 2)\n]\nfor (a, x), exp in tests:\n    act = tim_vi_tri_cuoi(a, x)\n    print(f'a={a}, x={x} -> {act == exp}')"
    },
    {
      question: "Bài 4: Giải thích bằng ví dụ riêng: Vì sao 1 chương trình 'chạy không báo lỗi' chưa chắc đã là chương trình đúng?",
      answer: "Đáp án mẫu:\nVí dụ: Viết hàm tính diện tích hình chữ nhật def dien_tich(d, r): return d + r. Khi chạy dien_tich(4, 5) chương trình ra 9 và không hề văng lỗi Python nào, nhưng công thức đúng phải là d * r (ra 20). Đây là lỗi logic — chương trình chạy trơn tru nhưng cho ra kết quả sai."
    }
  ],
  practiceExercises: [
    {
      id: "ex-b23-1",
      badge: "Luyện Tập Kiểm Thử",
      duration: "20 phút",
      title: "Thiết Kế Bộ Test Case & Sửa Lỗi Bug",
      description: "Thực hành phát hiện 3 loại lỗi trong các đoạn code cho trước và tự thiết kế bộ test case tự động.",
      type: "sheet",
      content: {
        objective: "Nhận biết chính xác Syntax/Runtime/Logic Error và viết code test tự động.",
        requirements: [
          "Phân loại 3 đoạn code lỗi cho trước.",
          "Viết bảng 5 test case cho hàm kiểm tra số nguyên tố.",
          "Chạy suite kiểm thử tự động trong Python."
        ],
        submissionHint: "Kiểm tra tất cả các test case đều báo PASS."
      }
    }
  ]
}
