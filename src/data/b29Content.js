export const b29Content = {
  warmUp: {
    question: "Làm thế nào để kiểm thử một mô-đun vừa viết xong một cách ĐỘC LẬP tuyệt đối mà không cần phải chờ ghép toàn bộ chương trình lớn?",
    description: "Vận dụng lý thuyết Cohesion/Coupling (Bài 28) vào quy trình thực hành 6 bước chuẩn mực: Từ xây dựng bảng hợp đồng Interface (Input/Output) → Viết mô-đun → Kiểm thử đơn vị độc lập bằng `assert` → Kết nối tích hợp hoàn chỉnh."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Quy trình 6 bước thực hành thiết kế mô-đun",
      subsections: [
        {
          heading: "Các bước chuẩn bị và triển khai dự án mô-đun",
          text: "Một quy trình thực hành chuẩn hóa gồm 6 bước liên hoàn:",
          points: [
            "Bước 1: Xác định các mô-đun cần thiết dựa trên sơ đồ phân rã làm mịn dần (Bài 26).",
            "Bước 2: Xác định rõ ĐẦU VÀO (Parameters) - ĐẦU RA (Return Value) cho từng mô-đun (Lập bảng Hợp đồng Interface).",
            "Bước 3: Viết mã nguồn chi tiết cho từng mô-đun một cách độc lập.",
            "Bước 4: Kiểm thử RIÊNG từng mô-đun (Unit Testing với câu lệnh `assert` trong Python).",
            "Bước 5: Kết nối (tích hợp) các mô-đun đã kiểm thử đúng thành chương trình hoàn chỉnh.",
            "Bước 6: Kiểm thử tích hợp toàn bộ luồng hoạt động (Integration Testing - Bài 27)."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Kỹ thuật lập Bảng 'Hợp đồng Interface' trước khi viết code",
      subsections: [
        {
          heading: "Chìa khóa cho làm việc nhóm song song",
          text: "Việc xác định rõ Đầu vào - Đầu ra của từng mô-đun TRƯỚC khi gõ code giúp các thành viên trong nhóm có thể phát triển các mô-đun độc lập cùng lúc mà không bị nghẽn.",
          points: [
            "Hợp đồng giao diện (Interface Contract): Quy định chính xác tên hàm, kiểu dữ liệu tham số vào và kiểu dữ liệu trả về.",
            "Hai người làm việc song song chỉ cần tuân thủ đúng bảng hợp đồng này là chắc chắn ghép nối thành công ở Bước 5."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Tên mô-đun", "Đầu vào (Input & Type)", "Đầu ra (Output & Type)", "Nhiệm vụ chính"],
        rows: [
          ["is_nguyen_to", "so: int", "bool (True/False)", "Kiểm tra 1 số có phải số nguyên tố"],
          ["loc_nguyen_to", "mang: list[int]", "list[int]", "Lọc và trả về danh sách các số nguyên tố trong mảng"],
          ["tinh_diem_tb", "diem_mon: list[float]", "float", "Tính điểm trung bình cộng của danh sách điểm"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "3. Kỹ thuật Kiểm thử độc lập bằng lệnh `assert` trong Python",
      subsections: [
        {
          heading: "Nguyên tắc 'Test Early, Test Often' (Kiểm thử sớm và thường xuyên)",
          text: "Câu lệnh `assert dieukien, thongbao_loi` trong Python cho phép kiểm tra tính đúng đắn của mô-đun ngay sau khi viết xong.",
          points: [
            "Nếu `dieukien` trả về `True` → Lệnh trôi qua êm đẹp, mô-đun đạt chuẩn.",
            "Nếu `dieukien` trả về `False` → Chương trình dừng ngay lập tức và in thông báo lỗi chính xác.",
            "Ưu điểm: Phát hiện lỗi ngay tại chính mô-đun vừa viết, khoanh vùng bug cực kỳ dễ dàng."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Minh họa thực hành Mã nguồn Python hoàn chỉnh",
      steps: [
        {
          step: "1. Viết code & Kiểm thử ĐỘC LẬP từng mô-đun bằng lệnh assert",
          detail: "# Mô-đun 1: Kiểm tra số nguyên tố\ndef is_nguyen_to(so):\n    if so < 2: return False\n    for i in range(2, int(so ** 0.5) + 1):\n        if so % i == 0: return False\n    return True\n\n# ----- KIỂM THỬ ĐỘC LẬP Mô-đun 1 (Unit Test) -----\nassert is_nguyen_to(7) == True, 'Lỗi: 7 phải là số nguyên tố'\nassert is_nguyen_to(8) == False, 'Lỗi: 8 không phải số nguyên tố'\nassert is_nguyen_to(1) == False, 'Lỗi: 1 không phải số nguyên tố (Trường hợp biên)'\nprint('Mô-đun is_nguyen_to: Kiểm thử ĐỘC LẬP PASSED!')"
        },
        {
          step: "2. Viết mô-đun 2 tái sử dụng mô-đun 1 & Kiểm thử tích hợp",
          detail: "# Mô-đun 2: Lọc các số nguyên tố trong mảng (Tái sử dụng is_nguyen_to)\ndef loc_nguyen_to(mang):\n    return [x for x in mang if is_nguyen_to(x)]\n\n# ----- KIỂM THỬ TÍCH HỢP Mô-đun 2 -----\nket_qua = loc_nguyen_to([4, 7, 8, 11, 15, 2])\nassert ket_qua == [7, 11, 2], f'Lỗi tích hợp: Kết quả thực tế = {ket_qua}'\nprint('Kiểm thử TÍCH HỢP PASSED! Danh sách nguyên tố:', ket_qua)"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Bước nào trong quy trình 6 bước thực hành thiết kế mô-đun đóng vai trò lập 'Hợp đồng giao diện' giữa các lập trình viên?",
      options: [
        "A. Bước 1: Phân rã mô-đun",
        "B. Bước 2: Xác định rõ ĐẦU VÀO và ĐẦU RA của từng mô-đun",
        "C. Bước 4: Kiểm thử Unit Test",
        "D. Bước 6: Kiểm thử tích hợp"
      ],
      answer: "B",
      explanation: "Bước 2 giúp thống nhất chính xác tên mô-đun, các tham số đầu vào và kiểu dữ liệu trả về (Hợp đồng Interface), cho phép các thành viên viết code độc lập song song."
    },
    {
      question: "Lệnh `assert is_nguyen_to(7) == True, 'Lỗi'` trong Python có tác dụng gì?",
      options: [
        "A. Bắt buộc hàm is_nguyen_to luôn trả về True",
        "B. Khẳng định giá trị trả về của is_nguyen_to(7) phải bằng True. Nếu sai, chương trình lập tức báo lỗi",
        "C. Dùng để nhập dữ liệu từ bàn phím",
        "D. Dùng để in kết quả ra màn hình"
      ],
      answer: "B",
      explanation: "Lệnh `assert` là công cụ kiểm thử đơn vị (Unit Test) nhanh trong Python. Nếu điều kiện sau `assert` bị sai (False), chương trình sẽ dừng và thông báo lỗi."
    },
    {
      question: "Vì sao nên kiểm thử RIÊNG từng mô-đun (Unit Test) trước khi ghép nối thành chương trình lớn?",
      options: [
        "A. Để tránh việc phát hiện lỗi quá muộn khi đã ghép nối nhiều mô-đun, giúp khoanh vùng bug dễ dàng",
        "B. Để tăng dung lượng bộ nhớ",
        "C. Vì Python không cho phép ghép nhiều mô-đun",
        "D. Để không cần viết hàm main"
      ],
      answer: "A",
      explanation: "Kiểm thử đơn vị sớm giúp đảm bảo từng 'viên gạch' mô-đun đều vững chắc. Khi có lỗi phát sinh ở bước kiểm thử riêng, ta biết chắc bug nằm ngay tại mô-đun vừa viết."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Lập Bảng Hợp đồng Interface (Input/Output) cho các mô-đun của 1 bài toán cho trước.",
      answer: "Phương pháp giải: Liệt kê danh sách hàm, xác định đúng tên tham số + kiểu dữ liệu (ví dụ list, int, float, bool) và kiểu trả về."
    },
    {
      question: "Dạng 2: Viết các câu lệnh `assert` kiểm thử đơn vị (Unit Test) cho một hàm Python (gồm case chuẩn và case biên).",
      answer: "Phương pháp giải: Viết ít nhất 3 lệnh assert: 1 case thông thường thỏa điều kiện, 1 case không thỏa điều kiện, và 1 case giá trị biên (như 0, 1, mảng rỗng)."
    },
    {
      question: "Dạng 3: Phát hiện lỗi không khớp Hợp đồng Interface giữa 2 mô-đun khi ghép nối.",
      answer: "Phương pháp giải: Đối chiếu kiểu dữ liệu trả về của mô-đun A với kiểu dữ liệu tham số đầu vào mà mô-đun B mong đợi."
    }
  ],
  homework: [
    {
      question: "Bài 1: Lập bảng Hợp đồng Interface và viết mã nguồn Python hoàn chỉnh kèm 3 câu lệnh kiểm thử `assert` cho bài toán: 'Đếm số lượng số chẵn lớn hơn giá trị trung bình cộng trong mảng'.",
      answer: "Đáp án mẫu:\ndef tinh_tb(a): return sum(a)/len(a) if a else 0\ndef dem_chan_lon_hon_tb(a):\n    tb = tinh_tb(a)\n    return sum(1 for x in a if x % 2 == 0 and x > tb)\n\n# Kiểm thử assert:\nassert tinh_tb([2, 4, 6]) == 4.0\nassert dem_chan_lon_hon_tb([2, 4, 6]) == 1  # Số chẵn 6 > 4.0\nprint('PASSED!')"
    },
    {
      question: "Bài 2: Từ chương trình Quản lý điểm ở Bài 27, hãy bổ sung thêm 4 câu lệnh `assert` kiểm thử đơn vị độc lập cho các hàm `tinh_diem_trung_binh`, `xep_loai`, và `sap_xep_theo_diem`.",
      answer: "Đáp án mẫu:\nassert tinh_diem_trung_binh([8, 8, 8]) == 8.0\nassert xep_loai(8.5) == 'Giỏi'\nassert xep_loai(6.0) == 'Trung bình'\nprint('Unit tests Quản lý điểm PASSED!')"
    }
  ],
  practiceExercises: [
    {
      id: "ex-b29-1",
      badge: "Thực Hành Mô-đun & Kiểm Thử",
      duration: "35 phút",
      title: "Thực Hành Thiết Kế Mô-đun & Viết Unit Test Với Assert",
      description: "Thực hiện trọn vẹn quy trình 6 bước: Lập bảng Interface -> Viết mô-đun -> Kiểm thử Unit Test với assert -> Tích hợp hệ thống.",
      type: "sheet",
      content: {
        objective: "Thành thạo kỹ thuật lập bảng Hợp đồng giao diện và viết câu lệnh kiểm thử tự động assert cho các mô-đun Python.",
        requirements: [
          "Lập bảng Hợp đồng Interface cho bài toán Quản lý Thư viện.",
          "Cài đặt 3 mô-đun hàm độc lập.",
          "Viết tối thiểu 6 lệnh assert kiểm thử các trường hợp chuẩn và biên."
        ],
        submissionHint: "Nộp file Python chứa đầy đủ mã nguồn mô-đun và các dòng lệnh assert kiểm thử chạy PASSED."
      }
    }
  ]
}
