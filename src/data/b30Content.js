export const b30Content = {
  warmUp: {
    question: "TẠI SAO ta có thể gọi ngay hàm math.sqrt() hay random.randint() mà không hề phải tự mình viết thuật toán tính căn bậc 2 hay sinh số ngẫu nhiên?",
    description: "Đỉnh cao phát triển của kiến trúc phần mềm: Nâng cấp các mô-đun đã đóng gói tốt thành THƯ VIỆN (Library) — tài sản mã nguồn tái sử dụng được cho vô số chương trình khác nhau trong tương lai."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm Thư viện chương trình (Program Library)",
      subsections: [
        {
          heading: "Từ Mô-đun đơn lẻ đến Thư viện tái sử dụng",
          text: "Thư viện là tập hợp các mô-đun (hàm, hằng số, lớp) đã được viết sẵn, kiểm thử kỹ lưỡng và đóng gói lại để có thể nạp vào (import) và tái sử dụng trong nhiều chương trình khác nhau mà không phải viết lại mã từ đầu.",
          points: [
            "Phân biệt Mô-đun vs Thư viện: Mô-đun là khái niệm ở quy mô nhỏ (1 hàm/file trong 1 dự án cụ thể); Thư viện là mô-đun được nâng cấp lên quy mô lớn hơn, đóng gói độc lập để phục vụ NHIỀU dự án khác nhau.",
            "Ẩn dụ thực tế: Nếu mô-đun là 1 linh kiện chế tạo cho đúng 1 mẫu xe, thì thư viện giống bộ ốc vít chuẩn quốc tế — dùng cho bất kỳ loại máy móc nào cần tới.",
            "Lợi ích lớn nhất: Tiết kiệm công sức lập trình, kế thừa thành quả đã kiểm thử chuẩn xác."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Phân loại 3 loại Thư viện trong Python",
      subsections: [
        {
          heading: "Các nguồn thư viện phổ biến",
          text: "Trong hệ sinh thái Python, thư viện được chia làm 3 nhóm chính:",
          points: [
            "1. Thư viện chuẩn (Standard Library): Đi kèm sẵn khi cài đặt Python, dùng được ngay (`math`, `random`, `datetime`, `os`, `sys`).",
            "2. Thư viện bên thứ ba (Third-party Library): Do cộng đồng hoặc công ty khác viết và phát hành, cần cài thêm qua `pip` (`numpy`, `pandas`, `matplotlib`). Nguồn gốc từ phong trào Phần mềm mã nguồn mở (Bài 3).",
            "3. Thư viện tự tạo (Custom Library): Do chính lập trình viên tự đóng gói từ các mô-đun cá nhân (như file `xu_ly_diem.py`)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Cú pháp nạp (Import)", "Ý nghĩa và Cách gọi", "Ví dụ mã lệnh", "Trường hợp nên dùng"],
        rows: [
          ["import ten_thu_vien", "Nạp toàn bộ thư viện. Khi gọi hàm bắt buộc kèm tên tiền tố", "import math\nprint(math.sqrt(16))", "Khi cần dùng nhiều hàm trong thư viện, tránh xung đột tên hàm"],
          ["from ten_tv import ten_ham", "Chỉ nạp đúng 1 hàm cụ thể. Gọi trực tiếp không cần tiền tố", "from math import sqrt\nprint(sqrt(16))", "Khi chỉ cần dùng 1-2 hàm duy nhất"],
          ["import ten_tv as bi_danh", "Nạp thư viện và đặt tên viết tắt gợi nhớ", "import numpy as np\narr = np.array([1, 2])", "Khi tên thư viện dài hoặc theo quy chuẩn cộng đồng"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Kỹ thuật Tự tạo Thư viện riêng (Custom Library)",
      subsections: [
        {
          heading: "Tự đóng gói tài sản mã nguồn cá nhân",
          text: "Chỉ cần viết các hàm chuẩn có Cohesion cao vào một file `.py` riêng biệt (ví dụ `xu_ly_diem.py`), ta đã tạo ra một Thư viện tự tạo. Bất kỳ file chương trình nào khác nằm cùng thư mục đều có thể `import xu_ly_diem` và sử dụng lại toàn bộ các hàm đó!"
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Minh họa thực hành Mã nguồn Python",
      steps: [
        {
          step: "1. Sử dụng Thư viện chuẩn có sẵn (math, random)",
          detail: "import math\nprint('Căn bậc 2 của 16 =', math.sqrt(16))     # 4.0\nprint('Hằng số Pi =', math.pi)                  # 3.141592653589793\n\nimport random\nprint('Số ngẫu nhiên từ 1-100 =', random.randint(1, 100))\n\nfrom math import sqrt                         # Chỉ nạp riêng hàm sqrt\nprint('Gọi trực tiếp sqrt(25) =', sqrt(25))    # 5.0"
        },
        {
          step: "2. Tự tạo và nạp Thư viện riêng (xu_ly_diem.py)",
          detail: "# ===== File 1: xu_ly_diem.py (THƯ VIỆN TỰ TẠO) =====\ndef tinh_diem_tb(diem_mon):\n    return sum(diem_mon) / len(diem_mon)\n\ndef xep_loai(diem_tb):\n    return 'Giỏi' if diem_tb >= 8.0 else 'Khá'\n\n# ===== File 2: main.py (Chương trình KHÁC tái sử dụng thư viện trên) =====\nimport xu_ly_diem     # Nạp thư viện tự tạo cùng thư mục\n\nhoc_sinh = [{'ten': 'An', 'diem_mon': [8, 7, 9]}]\ntb = xu_ly_diem.tinh_diem_tb(hoc_sinh[0]['diem_mon'])\nprint(f\"Học sinh An đạt {tb:.2f} điểm - Xếp loại: {xu_ly_diem.xep_loai(tb)}\")"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Để sử dụng hàm `randint()` trong thư viện `random` theo cú pháp gọi trực tiếp không cần tiền tố `random.`, ta phải viết lệnh nạp nào?",
      options: [
        "A. import random",
        "B. from random import randint",
        "C. import random as randint",
        "D. include random"
      ],
      answer: "B",
      explanation: "Cú pháp `from thu_vien import ham` cho phép nạp riêng hàm đó vào không gian tên hiện tại và gọi trực tiếp `randint()` không cần tiền tố."
    },
    {
      question: "Sự khác biệt cốt lõi nhất giữa Thư viện chuẩn (Standard Library) và Thư viện bên thứ ba (Third-party) trong Python là gì?",
      options: [
        "A. Thư viện chuẩn đi kèm sẵn khi cài Python; Thư viện bên thứ ba phải cài đặt thêm (như qua pip)",
        "B. Thư viện chuẩn viết bằng C++, thư viện bên thứ ba viết bằng Python",
        "C. Thư viện bên thứ ba không thể import",
        "D. Cả hai hoàn toàn giống nhau"
      ],
      answer: "A",
      explanation: "Thư viện chuẩn (như math, random) có sẵn ngay lập tức. Thư viện bên thứ ba (như numpy, pandas) do cộng đồng phát triển và phải cài thêm qua công cụ quản lý gói pip."
    },
    {
      question: "Làm thế nào để tạo một Thư viện tự tạo (Custom Library) đơn giản trong Python?",
      options: [
        "A. Phải đăng ký với công ty Python",
        "B. Đóng gói các hàm kiểm thử chuẩn vào một file `.py` riêng, sau đó `import` tên file đó ở chương trình khác",
        "C. Phải trả phí dịch vụ",
        "D. Viết tất cả code vào file main.py"
      ],
      answer: "B",
      explanation: "Trong Python, mỗi file `.py` đều có thể đóng vai trò là một mô-đun/thư viện. Chỉ cần lưu các hàm vào file `.py` và dùng lệnh `import` ở file khác cùng thư mục là xong."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Phân biệt và lựa chọn đúng cú pháp import (import, from...import, import...as).",
      answer: "Phương pháp giải: Nếu gọi `math.sqrt()` → chọn `import math`. Nếu gọi trực tiếp `sqrt()` → chọn `from math import sqrt`. Nếu gọi `np.array()` → chọn `import numpy as np`."
    },
    {
      question: "Dạng 2: Phân tích quy trình tạo và tái sử dụng Thư viện tự tạo (Custom Library).",
      answer: "Phương pháp giải: Nêu rõ 2 bước: 1. Tạo file library `.py` chứa các hàm mô-đun độc lập. 2. Tại file main, dùng `import ten_file_library` để gọi hàm."
    },
    {
      question: "Dạng 3: Nhận diện vai trò của Thư viện trong việc hiện thực hóa nguyên lý tái sử dụng mã nguồn (Reusability).",
      answer: "Phương pháp giải: Giải thích vì sao dùng thư viện giúp tiết kiệm thời gian, giảm thiểu lỗi và kế thừa các giải thuật đã được tối ưu."
    }
  ],
  homework: [
    {
      question: "Bài 1: Tạo một file thư viện tự đặt tên `thuat_toan.py` chứa 2 hàm: Tìm kiếm tuần tự (Bài 19) và Bubble Sort (Bài 21). Viết file `app.py` import thư viện này và chạy thử nghiệm.",
      answer: "Đáp án mẫu:\n# thuat_toan.py:\ndef tim_kiem(a, x): return x in a\ndef bubble_sort(a): return sorted(a)\n\n# app.py:\nimport thuat_toan\nprint(thuat_toan.tim_kiem([1,2,3], 2))\nprint(thuat_toan.bubble_sort([3,1,2]))"
    },
    {
      question: "Bài 2: Tìm hiểu và viết 2 dòng code minh họa sử dụng hàm `random.choice()` và `math.pow()` trong thư viện chuẩn Python.",
      answer: "Đáp án mẫu:\nimport random, math\nprint(random.choice(['Táo', 'Cam', 'Xoài']))  # Chọn ngẫu nhiên 1 phần tử\nprint(math.pow(2, 3))                          # 2 lũy thừa 3 = 8.0"
    }
  ],
  practiceExercises: [
    {
      id: "ex-b30-1",
      badge: "Tự Tạo & Sử Dụng Thư Viện",
      duration: "40 phút",
      title: "Đóng Gói Thư Viện Tiện Ích Riêng & Tái Sử Dụng Dự Án",
      description: "Thực hành thiết lập file thư viện tiện ích `utility.py` riêng chứa các hàm xử lý mảng/chuỗi và import tái sử dụng trên 2 ứng dụng khác nhau.",
      type: "sheet",
      content: {
        objective: "Làm chủ kỹ thuật đóng gói Thư viện tự tạo (Custom Library) và thành thạo 3 cú pháp nạp thư viện import trong Python.",
        requirements: [
          "Tạo file `my_math_lib.py` chứa các hàm kiểm tra số nguyên tố, tính trung bình.",
          "Tạo file `main_app.py` nạp thư viện theo 2 cách khác nhau (`import` và `from ... import`).",
          "Chạy thành công và kiểm thử kết quả trên mảng 100 phần tử."
        ],
        submissionHint: "Nộp bộ 2 file Python (`my_math_lib.py` và `main_app.py`) chạy không lỗi."
      }
    }
  ]
}
