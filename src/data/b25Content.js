export const b25Content = {
  warmUp: {
    question: "Khi chương trình có 2 vòng lặp for chạy nối tiếp nhau (không lồng nhau), độ phức tạp là $O(n + m)$ hay $O(n \\times m)$? Và tại sao vòng lặp lồng không đều vẫn quy về $O(n^2)$?",
    description: "Bài thực hành đào sâu các dạng bài toán độ phức tạp thực tế: vòng lặp độc lập (quy tắc cộng), vòng lặp lồng nhau không đều (cấp số cộng), và kỹ thuật bóc tách đoạn mã phức tạp thành từng khối."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Vòng lặp ĐỘC LẬP — Quy tắc CỘNG $O(n + m)$",
      subsections: [
        {
          heading: "Khái niệm và Dấu hiệu nhận biết",
          text: "Khi một chương trình chứa 2 hoặc nhiều vòng lặp riêng biệt, chạy tuần tự (cái này kết thúc mới đến cái kia) chứ không lồng vào nhau, độ phức tạp là CỘNG lại: $O(n + m)$ với $n, m$ lần lượt là số lần lặp của từng vòng.",
          points: [
            "Dấu hiệu trên mã nguồn: Các vòng lặp `for` nằm ở CÙNG MỘT CẤP THỤT LỀ (indentation).",
            "Mẹo nhớ nhanh: Nối tiếp nhau (xong A rồi mới làm B) → CỘNG độ phức tạp. Lồng vào nhau (mỗi lần làm A thì làm B nhiều lần) → NHÂN độ phức tạp.",
            "Điểm học sinh cực kỳ hay nhầm: Coi mọi đoạn code có 2 vòng `for` đều là $O(n^2)$ mà quên quan sát cấp thụt lề!"
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Vòng lặp LỒNG NHAU KHÔNG ĐỀU",
      subsections: [
        {
          heading: "Tính tổng số lần chạy qua cấp số cộng",
          text: "Không phải lúc nào vòng lặp trong cũng chạy $n$ lần cố định. Trong nhiều thuật toán (như Bubble Sort tối ưu hay tìm cặp phần tử), số lần lặp của vòng trong phụ thuộc vào biến đếm của vòng ngoài (chạy $n, n-1, n-2, ..., 1$ lần).",
          points: [
            "Công thức tổng số lần lặp: $S = n + (n-1) + (n-2) + ... + 1 = \\frac{n(n+1)}{2} = \\frac{1}{2}n^2 + \\frac{1}{2}n$.",
            "Rút gọn theo Big-O: Bỏ hằng số $\\frac{1}{2}$ và bỏ số hạng bậc thấp $\\frac{1}{2}n$ → Kết quả vẫn quy về $O(n^2)$.",
            "Kết luận: Dù vòng trong có giảm dần số lần lặp, bản chất bậc tăng trưởng vẫn là $O(n^2)$."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Quy tắc CỘNG và quy tắc NHÂN tổng quát",
      subsections: [
        {
          heading: "Tổng kết 2 nguyên tắc cốt lõi trong tính độ phức tạp",
          text: "Mọi đoạn mã phức tạp đều có thể tính độ phức tạp dựa trên 2 quy tắc nền tảng:",
          points: [
            "Quy tắc CỘNG: $O(f_1) + O(f_2) = O(\\max(f_1, f_2))$ đối với các đoạn mã chạy tuần tự độc lập.",
            "Quy tắc NHÂN: $O(f_1) \\times O(f_2) = O(f_1 \\times f_2)$ đối với các cấu trúc lồng nhau.",
            "Khi rút gọn phép CỘNG giữa 2 bậc khác nhau (ví dụ $O(n) + O(n^2)$), luôn giữ lại bậc CAO HƠN ($O(n^2)$) vì khi $n$ lớn, bậc thấp trở nên không đáng kể."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Cấu trúc code", "Quy tắc áp dụng", "Công thức tính", "Kết quả Big-O"],
        rows: [
          ["Vòng lặp tuần tự mảng A ($n$) rồi mảng B ($m$)", "Quy tắc CỘNG", "O(n) + O(m)", "O(n + m)"],
          ["Vòng lặp ngoài $n$ lần, vòng trong $m$ lần lồng nhau", "Quy tắc NHÂN", "O(n) × O(m)", "O(n × m)"],
          ["Khối 1 chạy $O(n)$ tuần tự trước Khối 2 lồng $O(n²)$", "CỘNG + Rút gọn", "O(n) + O(n²)", "O(n²)"]
        ]
      }
    },
    {
      id: "sec-4",
      title: "4. Kỹ thuật bóc tách code phức tạp",
      subsections: [
        {
          heading: "Quy trình 3 bước bóc tách chương trình dài",
          text: "Đối với một hàm chứa nhiều đoạn xử lý:",
          points: [
            "Bước 1: Bóc tách chương trình thành các khối lệnh độc lập tuần tự.",
            "Bước 2: Tính độ phức tạp thời gian Big-O của từng khối nhỏ riêng biệt.",
            "Bước 3: Áp dụng quy tắc CỘNG để kết hợp kết quả các khối và rút gọn giữ lại bậc tăng trưởng cao nhất."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành qua Mã nguồn Python",
      steps: [
        {
          step: "1. Vòng lặp ĐỘC LẬP — quy tắc CỘNG O(n + m)",
          detail: "def xu_ly_hai_mang(a, b):\n    tong_a = 0\n    for x in a:               # Khối 1: chạy n lần (n = len(a)) → O(n)\n        tong_a += x\n\n    tong_b = 0\n    for y in b:                # Khối 2: chạy m lần (m = len(b)) → O(m) — ĐỘC LẬP\n        tong_b += y\n\n    return tong_a, tong_b\n# → Hai vòng for cùng cấp thụt lề → Tổng chi phí: O(n) + O(m) = O(n + m)"
        },
        {
          step: "2. Vòng lặp lồng nhau KHÔNG ĐỀU — Cấp số cộng O(n²)",
          detail: "def dem_cap_khong_deu(a):\n    n = len(a)\n    dem = 0\n    for i in range(n):              # Vòng ngoài: i chạy từ 0 đến n-1 (n lần)\n        for j in range(i, n):        # Vòng trong: chạy n-i lần (phụ thuộc vào i)\n            dem += 1\n    return dem\n# Diễn giải:\n# - Khi i=0: vòng trong chạy n lần\n# - Khi i=1: vòng trong chạy n-1 lần\n# ...\n# - Khi i=n-1: vòng trong chạy 1 lần\n# → Tổng số phép tính = n + (n-1) + ... + 1 = n(n+1)/2 → Rút gọn Big-O: O(n²)"
        },
        {
          step: "3. Bài toán tổng hợp — Cả vòng lặp CỘNG lẫn vòng lặp NHÂN",
          detail: "def bai_toan_tong_hop(a):\n    n = len(a)\n\n    # Khối 1: Vòng lặp đơn tuần tự → O(n)\n    tong = 0\n    for x in a:\n        tong += x\n\n    # Khối 2: Hai vòng lặp lồng nhau đều → O(n²)\n    dem_cap = 0\n    for i in range(n):\n        for j in range(n):\n            dem_cap += 1\n\n    return tong, dem_cap\n# Khối 1: O(n), Khối 2: O(n²) — Hai khối chạy TUẦN TỰ (CỘNG lại): O(n) + O(n²)\n# Áp dụng quy tắc rút gọn Big-O: Giữ số hạng bậc cao nhất → Kết quả cuối cùng = O(n²)"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Một đoạn code có 2 vòng lặp for riêng biệt, cùng nằm ở cấp thụt lề ngoài cùng: vòng thứ nhất duyệt mảng A (n phần tử), vòng thứ hai duyệt mảng B (m phần tử). Độ phức tạp thời gian là bao nhiêu?",
      options: [
        "A. O(n × m)",
        "B. O(n + m)",
        "C. O(n²)",
        "D. O(1)"
      ],
      answer: "B",
      explanation: "Hai vòng lặp chạy tuần tự độc lập (cùng cấp thụt lề, không lồng nhau) thì độ phức tạp tổng bằng tổng độ phức tạp từng vòng lặp: O(n + m)."
    },
    {
      question: "Cho đoạn code Python: for i in range(n): for j in range(0, i): pass. Tổng số lần thực hiện lệnh pass theo n là bao nhiêu?",
      options: [
        "A. n² lần",
        "B. n(n-1)/2 lần",
        "C. n(n+1)/2 lần",
        "D. n lần"
      ],
      answer: "B",
      explanation: "Khi i=0: 0 lần; i=1: 1 lần; i=2: 2 lần; ...; i=n-1: n-1 lần. Tổng = 0 + 1 + 2 + ... + (n-1) = n(n-1)/2 lần. Rút gọn Big-O vẫn là O(n²)."
    },
    {
      question: "Nếu một hàm Python có Khối 1 chạy O(n), Khối 2 chạy O(n²), Khối 3 chạy O(1) nằm tuần tự nối tiếp nhau, độ phức tạp Big-O tổng thể là gì?",
      options: [
        "A. O(n³)",
        "B. O(n + n² + 1)",
        "C. O(n²)",
        "D. O(n)"
      ],
      answer: "C",
      explanation: "Áp dụng quy tắc cộng: O(n) + O(n²) + O(1). Khi rút gọn Big-O, ta chỉ giữ lại số hạng có bậc tăng trưởng cao nhất là O(n²)."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Phân biệt vòng lặp ĐỘC LẬP vs vòng lặp LỒNG NHAU trên mã nguồn Python.",
      answer: "Phương pháp giải: Quan sát mức thụt lề (indentation). Nếu các vòng for ngang hàng nhau → áp dụng quy tắc CỘNG O(n + m). Nếu vòng for này nằm bên trong khối lệnh của vòng for khác → áp dụng quy tắc NHÂN O(n × m)."
    },
    {
      question: "Dạng 2: Tính tổng số lần lặp của vòng lặp lồng nhau không đều và rút gọn về Big-O.",
      answer: "Phương pháp giải: Viết dãy số lần lặp của vòng trong theo từng lượt i của vòng ngoài. Dùng công thức tổng cấp số cộng S = n(n+1)/2 hoặc n(n-1)/2, sau đó bỏ hằng số và số hạng bậc thấp để kết luận O(n²)."
    },
    {
      question: "Dạng 3: Bóc tách đoạn code dài thành nhiều khối để tính độ phức tạp tổng hợp.",
      answer: "Phương pháp giải: Chia đoạn code thành các đoạn độc lập theo chiều ngang. Đánh giá Big-O từng đoạn, lấy max các bậc tăng trưởng để ra kết quả cuối cùng."
    }
  ],
  homework: [
    {
      question: "Bài 1: Viết 1 đoạn code Python chứa 2 vòng lặp độc lập xử lý 2 mảng a và b có độ dài khác nhau. Tự phân tích và chứng minh độ phức tạp là O(n + m).",
      answer: "Đáp án mẫu:\ndef tinh_trung_binh_hai_day(a, b):\n    s1 = sum(x for x in a)  # Vòng for 1 duyệt len(a) = n phần tử → O(n)\n    s2 = sum(y for y in b)  # Vòng for 2 duyệt len(b) = m phần tử → O(m)\n    return s1/len(a), s2/len(b)\n# 2 vòng for chạy tuần tự, không lồng nhau → Tổng chi phí = O(n) + O(m) = O(n + m)."
    },
    {
      question: "Bài 2: Cho đoạn code: for i in range(n): for j in range(0, i): dem += 1. Tính tổng số lần tăng biến dem theo n và rút gọn về ký hiệu Big-O.",
      answer: "Đáp án mẫu:\n- Khi i = 0: vòng j chạy 0 lần.\n- Khi i = 1: vòng j chạy 1 lần.\n- Khi i = 2: vòng j chạy 2 lần.\n...\n- Khi i = n-1: vòng j chạy n-1 lần.\nTổng = 0 + 1 + 2 + ... + (n-1) = n(n-1)/2 = 1/2*n² - 1/2*n.\nRút gọn Big-O: Giữ bậc cao nhất n² và bỏ hệ số 1/2 → Độ phức tạp là O(n²)."
    },
    {
      question: "Bài 3: Tự thiết kế một hàm Python gồm 3 khối lệnh tuần tự: Khối 1 có 1 vòng lặp O(n), Khối 2 có 2 vòng lặp lồng nhau O(n²), Khối 3 là 1 phép tính hằng số O(1). Giải thích vì sao kết quả cuối cùng lại là O(n²).",
      answer: "Đáp án mẫu:\ndef demo_khoi(a):\n    n = len(a)\n    # Khối 1: O(n)\n    t1 = sum(a)\n    # Khối 2: O(n²)\n    t2 = 0\n    for i in range(n):\n        for j in range(n):\n            t2 += a[i] * a[j]\n    # Khối 3: O(1)\n    kq = t1 + t2\n    return kq\n# Tổng độ phức tạp = O(n) + O(n²) + O(1).\n# Vì n² tăng nhanh vượt trội so với n và 1 khi n rất lớn, số hạng n² áp đảo hoàn toàn. Theo quy tắc Big-O, ta bỏ qua n và 1, chỉ giữ lại O(n²)."
    }
  ],
  practiceExercises: [
    {
      id: "ex-b25-1",
      badge: "Phân Tích Độ Phức Tạp Nâng Cao",
      duration: "25 phút",
      title: "Phân Tích Vòng Lặp Độc Lập Và Lồng Không Đều",
      description: "Thực hành bóc tách các đoạn mã Python thực tế, tính tổng số phép tính chính xác và quy đổi về ký hiệu Big-O.",
      type: "sheet",
      content: {
        objective: "Hiểu sâu sắc sự khác biệt giữa quy tắc cộng O(n+m) và quy tắc nhân O(n²), xử lý thành thạo các dạng bài thi thực tế.",
        requirements: [
          "Bóc tách 4 đoạn mã Python cho trước thành từng khối.",
          "Xác định cấp thụt lề để áp dụng đúng quy tắc cộng hoặc nhân.",
          "Tính tổng số lần lặp theo đa thức n và rút gọn về Big-O."
        ],
        submissionHint: "Trình bày rõ ràng các bước tính toán và quy tắc áp dụng cho từng đoạn mã."
      }
    }
  ]
}
