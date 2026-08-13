export const b24Content = {
  warmUp: {
    question: "Vì sao khi dữ liệu tăng lên 1 triệu phần tử, một thuật toán $O(n^2)$ sẽ chạy chậm hơn thuật toán $O(n)$ tới 1 TRIỆU LẦN dù chạy trên siêu máy tính mạnh nhất?",
    description: "Bài lý thuyết trừu tượng nhất trong toàn bộ kĩ thuật lập trình — chuyển từ 'code chạy được' sang tư duy so sánh thuật toán nào nhanh hơn về mặt lý thuyết, không phụ thuộc vào tốc độ máy tính cụ thể."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Kích thước đầu vào (Input size – ký hiệu n)",
      subsections: [
        {
          heading: "Độ lớn dữ liệu xử lý",
          text: "n là con số đại diện cho độ lớn của dữ liệu đầu vào — ví dụ số phần tử của mảng cần tìm kiếm/sắp xếp, số dòng dữ liệu cần xử lý.",
          points: [
            "Thời gian chạy của thuật toán phụ thuộc trực tiếp vào n — mảng càng lớn, thuật toán càng mất nhiều thời gian hơn.",
            "Độ phức tạp thời gian chính là công thức mô tả mối quan hệ giữa thời gian chạy và n."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Đếm số phép tính cơ bản",
      subsections: [
        {
          heading: "Đánh giá hiệu năng công bằng không phụ thuộc phần cứng",
          text: "Thay vì đo thời gian chạy bằng giây (phụ thuộc máy mạnh/yếu, ngôn ngữ lập trình), ta ĐẾM SỐ LƯỢNG 'phép tính cơ bản' (phép gán =, phép so sánh ==, >, phép cộng/trừ/nhân/chia) mà thuật toán thực hiện theo n.",
          points: [
            "Ví dụ Tìm kiếm tuần tự (Bài 19) với mảng n phần tử cần tối đa n phép so sánh.",
            "Số phép tính này không đổi dù chạy trên máy tính nào — đây là cách so sánh công bằng nhất."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Từ số phép tính suy ra công thức theo n",
      subsections: [
        {
          heading: "Xây dựng đa thức số phép tính theo n",
          text: "Ví dụ Tìm kiếm tuần tự (Bài 19): Số phép so sánh tối đa là n — đa thức bậc 1 theo n.\nVí dụ Bubble Sort (Bài 21): Tổng số phép so sánh tối đa là n(n-1)/2 = 1/2*n^2 - 1/2*n — đa thức bậc 2 theo n."
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Ký hiệu Big O (Chỉ giữ số hạng tăng nhanh nhất)",
      subsections: [
        {
          heading: "Nguyên tắc rút gọn Big-O Notation",
          text: "Khi n rất lớn (hàng triệu, hàng tỷ), các hằng số và số hạng bậc thấp trở nên không đáng kể so với số hạng có bậc cao nhất → ta chỉ giữ lại số hạng tăng nhanh nhất, bỏ hằng số nhân và bỏ số hạng bậc thấp.",
          points: [
            "Ví dụ: 1/2*n^2 - 1/2*n (Bubble Sort) → rút gọn thành O(n²).",
            "Ví dụ: 3n + 5 (Tìm kiếm tuần tự) → rút gọn thành O(n)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Độ phức tạp", "Tên gọi", "Ví dụ thuật toán", "Khi n = 1.000.000"],
        rows: [
          ["O(1)", "Hằng số", "Truy cập trực tiếp a[i] theo chỉ số", "1 phép tính"],
          ["O(log n)", "Logarit", "Tìm kiếm nhị phân (Binary Search)", "~20 phép tính"],
          ["O(n)", "Tuyến tính", "Tìm kiếm tuần tự (Linear Search - Bài 19)", "1.000.000 phép tính"],
          ["O(n²)", "Bình phương", "Bubble Sort (Sắp xếp nổi bọt - Bài 21)", "1.000.000.000.000 phép tính"]
        ]
      }
    },
    {
      id: "sec-5",
      title: "5. Ý nghĩa thực tế: Thuật toán vs Phần cứng",
      subsections: [
        {
          heading: "Tầm quan trọng của việc tối ưu thuật toán",
          text: "Với n = 1 triệu phần tử, thuật toán O(n²) (Bubble Sort) chạy chậm hơn thuật toán O(n) tới 1 triệu lần. Dù có mua máy chủ mạnh gấp 1.000 lần thì thuật toán O(n²) vẫn chậm hơn hẳn thuật toán O(n) chạy trên máy cùi!",
          points: [
            "Đây là lý do các công ty công nghệ xử lý dữ liệu lớn (Google, Facebook...) đặc biệt coi trọng độ phức tạp thuật toán."
          ]
        }
      ]
    },
    {
      id: "sec-6",
      title: "6. Minh họa thực hành đếm vòng lặp & Bảng chênh lệch",
      steps: [
        {
          step: "1. Đếm phép tính trên code Tìm kiếm tuần tự (1 vòng lặp đơn)",
          detail: "def tim_kiem_tuan_tu(a, x):\n    for i in range(len(a)):        # Vòng lặp đơn chạy tối đa n lần\n        if a[i] == x:                 # ← 1 phép so sánh cơ bản thực hiện tối đa n lần\n            return i\n    return -1\n# → Tổng số phép so sánh tối đa = n  → Độ phức tạp: O(n)"
        },
        {
          step: "2. Đếm phép tính trên Bubble Sort (2 vòng lặp lồng nhau)",
          detail: "def bubble_sort(a):\n    n = len(a)\n    for luot in range(n - 1):              # Vòng lặp ngoài: n-1 lần\n        for i in range(n - 1 - luot):       # Vòng lặp trong: số lần giảm dần\n            if a[i] > a[i + 1]:              # ← Phép so sánh lồng nhau\n                a[i], a[i + 1] = a[i + 1], a[i]\n    return a\n# → 2 vòng lặp lồng nhau → Tổng số phép so sánh = n(n-1)/2 → Độ phức tạp: O(n²)"
        },
        {
          step: "3. Bảng so sánh trực quan số phép tính giữa O(n) và O(n²) khi n tăng",
          detail: "- n = 10:       O(n) = 10 phép tính        | O(n²) = 100 phép tính        (Chênh 10 lần)\n- n = 100:      O(n) = 100 phép tính       | O(n²) = 10.000 phép tính     (Chênh 100 lần)\n- n = 1.000:    O(n) = 1.000 phép tính     | O(n²) = 1.000.000 phép tính  (Chênh 1.000 lần)\n- n = 1.000.000 O(n) = 1.000.000 phép     | O(n²) = 1.000.000.000.000    (Chênh 1.000.000 lần!)\n\n→ Nhận xét: n càng lớn, khoảng cách hiệu năng giữa O(n) và O(n²) càng khủng khiếp!"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Đoạn code Python chứa 1 vòng lặp đơn for i in range(n): thực hiện các phép tính cơ bản có độ phức tạp thời gian Big-O là bao nhiêu?",
      options: [
        "A. O(1)",
        "B. O(log n)",
        "C. O(n)",
        "D. O(n²)"
      ],
      answer: "C",
      explanation: "Vòng lặp đơn chạy n lần, số phép tính tăng tỉ lệ thuận bậc 1 với n nên có độ phức tạp tuyến tính O(n)."
    },
    {
      question: "Khi rút gọn biểu thức số phép tính f(n) = 3n² + 5n + 100 sang ký hiệu Big-O, kết quả chuẩn xác là gì?",
      options: [
        "A. O(3n²)",
        "B. O(n²)",
        "C. O(n)",
        "D. O(100)"
      ],
      answer: "B",
      explanation: "Theo nguyên tắc rút gọn Big-O: Chỉ giữ lại số hạng tăng nhanh nhất (n²) và bỏ qua hằng số nhân (3) cũng như các số hạng bậc thấp (5n, 100)."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Nhìn cấu trúc vòng lặp xác định độ phức tạp Big-O.",
      answer: "Phương pháp giải: 1 vòng lặp đơn chạy n lần → O(n). 2 vòng lặp lồng nhau cùng chạy khoảng n lần → O(n²). Không có vòng lặp → O(1)."
    },
    {
      question: "Dạng 2: Rút gọn biểu thức số phép tính sang ký hiệu Big-O.",
      answer: "Phương pháp giải: Tìm bậc cao nhất của n, bỏ tất cả số hạng bậc thấp hơn và bỏ hệ số nhân đứng trước."
    },
    {
      question: "Dạng 3: So sánh hiệu năng 2 thuật toán dựa trên Big-O.",
      answer: "Phương pháp giải: Xếp thứ tự O(1) < O(log n) < O(n) < O(n log n) < O(n²). Thuật toán có Big-O nhỏ hơn sẽ hiệu quả hơn khi n lớn."
    }
  ],
  homework: [
    {
      question: "Bài 1: Tính số phép so sánh tối đa của thuật toán Tìm kiếm tuần tự áp dụng biến thể 'tìm tất cả vị trí' (Bài 20). Độ phức tạp Big-O có thay đổi so với bản gốc Bài 19 không?",
      answer: "Đáp án mẫu:\nSố phép so sánh tối đa vẫn là đúng n phép so sánh (duyệt từ index 0 đến n-1). Độ phức tạp Big-O vẫn giữ nguyên là O(n) không thay đổi, vì thuật toán vẫn dùng 1 vòng lặp đơn duyệt qua n phần tử."
    },
    {
      question: "Bài 2: Xác định độ phức tạp Big-O cho 3 đoạn code: (A) 1 vòng for n lần; (B) 2 vòng for lồng nhau n lần; (C) 2 vòng for nối tiếp nhau (không lồng).",
      answer: "Đáp án mẫu:\n- (A) O(n) do 1 vòng lặp.\n- (B) O(n²) do 2 vòng lặp lồng nhau (n * n).\n- (C) O(n) do 2 vòng lặp độc lập nối tiếp nhau (n + n = 2n → rút gọn thành O(n))."
    },
    {
      question: "Bài 3: Lập bảng so sánh số phép tính giữa O(n) và O(n²) với n = 10, 100, 1.000, 10.000 — Nêu nhận xét xu hướng.",
      answer: "Đáp án mẫu:\n- n = 10: O(n)=10, O(n²)=100\n- n = 100: O(n)=100, O(n²)=10.000\n- n = 1.000: O(n)=1.000, O(n²)=1.000.000\n- n = 10.000: O(n)=10.000, O(n²)=100.000.000\nNhận xét: Khi n tăng gấp 10 lần, O(n) tăng 10 lần nhưng O(n²) tăng tới 100 lần!"
    },
    {
      question: "Bài 4: Giải thích bằng lời: Vì sao khi dữ liệu tăng từ 1.000 lên 1 triệu người dùng, việc chọn đúng thuật toán có độ phức tạp thấp lại quan trọng hơn 'mua máy chủ mạnh hơn'?",
      answer: "Đáp án mẫu:\nVì khi n tăng 1.000 lần (từ 1.000 lên 1.000.000), thuật toán O(n²) tăng số phép tính tới 1.000.000 LẦN (từ 1 triệu lên 1.000 tỷ phép tính). Không phần cứng hay máy chủ nào có thể nâng cấp sức mạnh gấp 1 triệu lần để bù đắp sự tăng trưởng khủng khiếp này. Chỉ có đổi thuật toán sang O(n) hoặc O(log n) mới xử lý được."
    }
  ],
  practiceExercises: [
    {
      id: "ex-b24-1",
      badge: "Luyện Tập Lý Thuyết & Code",
      duration: "20 phút",
      title: "Đánh Giá Độ Phức Tạp Thuật Toán",
      description: "Phân tích số phép tính của các đoạn mã Python và xác định ký hiệu O-lớn (Big-O Notation).",
      type: "sheet",
      content: {
        objective: "Đọc hiểu và đánh giá chính xác độ phức tạp O(1), O(n), O(n²) từ mã nguồn Python.",
        requirements: [
          "Xác định Big-O cho 5 đoạn code mẫu.",
          "Tính số phép so sánh khi n = 1000.",
          "So sánh thời gian chạy thực tế bằng thư viện time trong Python."
        ],
        submissionHint: "Ghi lại kết quả độ phức tạp cho từng đoạn code."
      }
    }
  ]
}
