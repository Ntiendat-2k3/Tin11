export const b27Content = {
  warmUp: {
    question: "Từng hàm đơn lẻ chạy rất tốt khi kiểm thử riêng, nhưng tại sao khi ghép lại thành chương trình hoàn chỉnh lại sinh lỗi KeyError hoặc kết quả sai bét?",
    description: "Bài thực hành tổng hợp cuối cùng của Chủ đề 6: Tự tay hoàn thiện chương trình 'Quản lý điểm học sinh' có nhiều hàm phối hợp, tích hợp toàn bộ kiến thức Mảng (Bài 17-18), Tìm kiếm (Bài 19-20), Sắp xếp (Bài 21-22), Kiểm thử (Bài 23), Độ phức tạp (Bài 24-25) và Làm mịn dần (Bài 26)."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Quy trình phát triển phần mềm hoàn chỉnh (4 bước chuẩn)",
      subsections: [
        {
          heading: "Mẹo nhớ thần thánh: 'Yêu - Phân - Thiết - Viết'",
          text: "Một quy trình phát triển phần mềm chuyên nghiệp luôn tuân thủ nghiêm ngặt 4 bước theo đúng thứ tự:",
          points: [
            "1. Yêu cầu (Requirements): Xác định rõ bài toán cần giải quyết là gì, đầu vào (Input) và đầu ra (Output) mong muốn.",
            "2. Phân rã mô-đun (Modular Decomposition): Áp dụng phương pháp làm mịn dần (Bài 26) chia bài toán thành các hàm nhỏ.",
            "3. Thiết kế thuật toán (Algorithm Design): Chọn thuật toán tối ưu (Bài 19, 21) cho từng hàm.",
            "4. Viết mã và Kiểm thử (Coding & Testing): Cài đặt Python, kiểm thử đơn vị (Bài 23) và kiểm thử tích hợp toàn bộ chương trình."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Bước quy trình", "Nhiệm vụ chính", "Liên hệ bài học"],
        rows: [
          ["1. Yêu cầu", "Đọc đề, xác định Input/Output", "Bài toán thực tế"],
          ["2. Phân rã mô-đun", "Vẽ sơ đồ Hierarchy Chart, viết Stub", "Bài 26 (Làm mịn dần)"],
          ["3. Thiết kế thuật toán", "Lựa chọn thuật toán Tìm kiếm / Sắp xếp", "Bài 19, 21, 24, 25"],
          ["4. Viết mã & Kiểm thử", "Cài đặt Python + Lập bộ Test case", "Bài 17-18, 22, 23"]
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. Tích hợp các mô-đun hàm (Module Integration)",
      subsections: [
        {
          heading: "Khớp nối dữ liệu giữa các hàm",
          text: "Sau khi các hàm nhỏ đã được viết và kiểm thử độc lập (Unit Testing), bước tiếp theo là tích hợp (ghép nối) các hàm lại với nhau trong hàm `main()`. Đảm bảo kiểu dữ liệu đầu ra của hàm này khớp hoàn toàn với kiểu dữ liệu đầu vào của hàm tiếp theo.",
          points: [
            "Hợp đồng hàm (Function Contract): Ví dụ hàm `tinh_diem_trung_binh()` trả về số thực (float) → hàm `xep_loai()` phải nhận đúng tham số kiểu float đó.",
            "Nếu định dạng dữ liệu không khớp, chương trình sẽ crash ngay ở bước tích hợp dù các hàm đơn lẻ chạy hoàn hảo!"
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Kiểm thử tích hợp (Integration Testing) vs Kiểm thử đơn vị",
      subsections: [
        {
          heading: "Kiểm thử luồng toàn vẹn từ đầu đến cuối (End-to-end)",
          text: "Kiểm thử tích hợp tập trung kiểm tra sự phối hợp giữa các hàm: Kiểm tra các hàm có được gọi đúng thứ tự không, dữ liệu truyền qua lại giữa các hàm có chính xác không.",
          points: [
            "Lỗi tích hợp kinh điển: Gọi sai thứ tự các hàm trong `main()`. Ví dụ gọi `sap_xep_theo_diem()` TRƯỚC KHI gọi `tinh_diem_trung_binh()` làm sinh lỗi KeyError vì biến `diem_tb` chưa tồn tại!",
            "Phân biệt: Unit Testing kiểm tra 1 hàm chạy đúng không. Integration Testing kiểm tra cả hệ thống các hàm phối hợp có đúng không."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Tổng kết liên kết toàn bộ Chủ đề 6 (Bài 17 → Bài 27)",
      subsections: [
        {
          heading: "Bức tranh toàn cảnh Kĩ thuật lập trình Tin học 11",
          text: "Mọi bài học trong Chủ đề 6 hội tụ trọn vẹn trong một sản phẩm phần mềm hoàn chỉnh:",
          points: [
            "Bài 17-18 (Mảng 1D/2D): Cấu trúc LƯU TRỮ dữ liệu danh sách học sinh / bảng điểm.",
            "Bài 19-22 (Tìm kiếm & Sắp xếp): Các THUẬT TOÁN xử lý cốt lõi trên mảng.",
            "Bài 23 (Kiểm thử): Đảm bảo chương trình ĐÚNG (không có bug).",
            "Bài 24-25 (Độ phức tạp): Đảm bảo thuật toán NHANH (tối ưu hiệu năng).",
            "Bài 26-27 (Làm mịn dần): TỔ CHỨC toàn bộ code thành một CHƯƠNG TRÌNH HOÀN CHỈNH có cấu trúc khoa học."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành qua Mã nguồn Python & Lỗi Tích Hợp",
      steps: [
        {
          step: "1. Mã nguồn Python hoàn chỉnh 'Quản lý điểm học sinh'",
          detail: "def nhap_du_lieu():\n    # Nhập hoặc giả lập dữ liệu danh sách học sinh\n    return [\n        {'ten': 'An',   'diem_mon': [8, 7, 9]},\n        {'ten': 'Binh', 'diem_mon': [6, 8, 7]},\n        {'ten': 'Chi',  'diem_mon': [9, 9, 10]}\n    ]\n\ndef tinh_diem_trung_binh(diem_mon):\n    return sum(diem_mon) / len(diem_mon)\n\ndef xep_loai(diem_tb):\n    if diem_tb >= 8.0:\n        return 'Giỏi'\n    elif diem_tb >= 6.5:\n        return 'Khá'\n    else:\n        return 'Trung bình'\n\ndef sap_xep_theo_diem(danh_sach):\n    # Sử dụng Bubble Sort đã học ở Bài 21\n    n = len(danh_sach)\n    for luot in range(n - 1):\n        for i in range(n - 1 - luot):\n            if danh_sach[i]['diem_tb'] < danh_sach[i + 1]['diem_tb']:\n                danh_sach[i], danh_sach[i + 1] = danh_sach[i + 1], danh_sach[i]\n    return danh_sach\n\ndef xuat_bao_cao(danh_sach):\n    print('--- BẢNG XẾP HẠNG HỌC SINH ---')\n    dem_gioi = 0\n    for hs in danh_sach:\n        print(f\"{hs['ten']}: {hs['diem_tb']:.2f} điểm - Xếp loại {hs['xep_loai']}\")\n        if hs['xep_loai'] == 'Giỏi':\n            dem_gioi += 1\n    print(f'Tổng số học sinh Giỏi: {dem_gioi}')\n\ndef main():\n    # Hàm điều phối chính — Thứ tự gọi hàm cực kỳ quan trọng!\n    hoc_sinh = nhap_du_lieu()\n    for hs in hoc_sinh:\n        hs['diem_tb'] = tinh_diem_trung_binh(hs['diem_mon'])\n        hs['xep_loai'] = xep_loai(hs['diem_tb'])\n    hoc_sinh = sap_xep_theo_diem(hoc_sinh)\n    xuat_bao_cao(hoc_sinh)\n\nmain()"
        },
        {
          step: "2. Phân tích lỗi tích hợp điển hình (Gọi sai thứ tự hàm trong main)",
          detail: "def main_SAI():\n    hoc_sinh = nhap_du_lieu()\n    hoc_sinh = sap_xep_theo_diem(hoc_sinh)  # ❌ LỖI TÍCH HỢP: Sắp xếp TRƯỚC khi tính diem_tb!\n    for hs in hoc_sinh:\n        hs['diem_tb'] = tinh_diem_trung_binh(hs['diem_mon'])\n        hs['xep_loai'] = xep_loai(hs['diem_tb'])\n    xuat_bao_cao(hoc_sinh)\n\n# Kết quả: Báo lỗi KeyError: 'diem_tb' trong sap_xep_theo_diem() vì biến diem_tb chưa được khởi tạo!"
        },
        {
          step: "3. Bảng thiết kế bộ kiểm thử tích hợp (End-to-end Test Suite)",
          detail: "| Test case | Dữ liệu kiểm thử | Kết quả mong đợi |\n|---|---|---|\n| TC1: 3 HS bình thường | An (8,7,9), Binh (6,8,7), Chi (9,9,10) | Chi (9.33) > An (8.00) > Binh (7.00), Đếm Giỏi = 2 |\n| TC2: Danh sách rỗng | nhap_du_lieu() trả về [] | Không lỗi crash, in 'Tổng số học sinh Giỏi: 0' |\n| TC3: Điểm bằng nhau | An (8,8,8), Binh (8,8,8) | Giữ nguyên thứ tự tương đối, xếp loại Giỏi cả 2 |"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Quy trình phát triển phần mềm chuẩn gồm 4 bước theo thứ tự nào sau đây?",
      options: [
        "A. Viết mã → Kiểm thử → Yêu cầu → Phân rã mô-đun",
        "B. Yêu cầu → Phân rã mô-đun → Thiết kế thuật toán → Viết mã và Kiểm thử",
        "C. Phân rã mô-đun → Yêu cầu → Viết mã → Thiết kế thuật toán",
        "D. Thiết kế thuật toán → Viết mã → Yêu cầu → Phân rã mô-đun"
      ],
      answer: "B",
      explanation: "Quy trình phát triển phần mềm chuẩn tuân thủ đúng thứ tự 4 bước: Yêu cầu → Phân rã mô-đun → Thiết kế thuật toán → Viết mã và Kiểm thử ('Yêu - Phân - Thiết - Viết')."
    },
    {
      question: "Kiểm thử tích hợp (Integration Testing) khác với Kiểm thử đơn vị (Unit Testing) ở điểm nào?",
      options: [
        "A. Unit testing kiểm tra từng hàm riêng lẻ; Integration testing kiểm tra sự phối hợp và luồng dữ liệu giữa các hàm",
        "B. Unit testing không cần dữ liệu đầu vào",
        "C. Integration testing chỉ kiểm tra lỗi cú pháp",
        "D. Cả hai là một, không có điểm khác biệt"
      ],
      answer: "A",
      explanation: "Unit testing đảm bảo từng hàm riêng chạy đúng. Integration testing đảm bảo các hàm khi ghép nối lại phối hợp đúng thứ tự và truyền đúng dữ liệu cho nhau."
    },
    {
      question: "Trong chương trình Quản lý điểm học sinh, nếu gọi hàm sap_xep_theo_diem() trước khi chạy hàm tinh_diem_trung_binh() cho từng học sinh thì sẽ phát sinh lỗi gì?",
      options: [
        "A. Lỗi cú pháp (SyntaxError)",
        "B. Lỗi ngoại lệ khi chạy (Runtime Error / KeyError: 'diem_tb')",
        "C. Chương trình vẫn chạy đúng bình thường",
        "D. Lỗi tràn bộ nhớ"
      ],
      answer: "B",
      explanation: "Vì hàm sap_xep_theo_diem() sử dụng khóa 'diem_tb' để so sánh. Nếu chưa tính điểm TB thì khóa 'diem_tb' chưa tồn tại trong dict học sinh, dẫn đến lỗi KeyError khi truy cập."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Nhận diện và sửa Lỗi Tích Hợp trong hàm main() của một chương trình lớn.",
      answer: "Phương pháp giải: Kiểm tra thứ tự phụ thuộc dữ liệu giữa các hàm. Hàm tạo/tính toán dữ liệu (như tính điểm TB) phải được gọi TRƯỚC hàm tiêu thụ dữ liệu đó (như sắp xếp, xếp loại, báo cáo)."
    },
    {
      question: "Dạng 2: Viết bổ sung 1 tính năng/mô-đun mới và tích hợp vào chương trình hoàn chỉnh.",
      answer: "Phương pháp giải: Định nghĩa hàm mới với tham số phù hợp (ví dụ tim_hoc_sinh(danh_sach, ten)), cài đặt logic tìm kiếm (Bài 19), sau đó chèn lời gọi hàm vào vị trí thích hợp trong main()."
    },
    {
      question: "Dạng 3: Thiết kế bảng Test cases kiểm thử tích hợp End-to-end cho ứng dụng.",
      answer: "Phương pháp giải: Tạo bộ dữ liệu đầu vào đại diện (Thông thường, Rỗng, Biên), dự đoán chính xác kết quả đầu ra tổng thể của cả hệ thống."
    }
  ],
  homework: [
    {
      question: "Bài 1: Từ chương trình 'Quản lý điểm học sinh' ở ví dụ minh họa, hãy viết thêm 1 hàm tim_hoc_sinh_theo_ten(danh_sach, ten_can_tim) sử dụng thuật toán Tìm kiếm tuần tự (Bài 19) và tích hợp vào hàm main().",
      answer: "Đáp án mẫu:\ndef tim_hoc_sinh_theo_ten(danh_sach, ten_can_tim):\n    for hs in danh_sach:\n        if hs['ten'].lower() == ten_can_tim.lower():\n            return hs\n    return None\n\n# Trong main(): tích hợp gọi hàm\n# hs_tim = tim_hoc_sinh_theo_ten(hoc_sinh, 'An')\n# if hs_tim:\n#     print(f\"Tìm thấy An: Điểm TB = {hs_tim['diem_tb']:.2f}\")"
    },
    {
      question: "Bài 2: Tự hoàn thiện mã nguồn Python cho bài tập phân rã 'Quản lý giỏ hàng online' đã làm ở Bài 26, đảm bảo chương trình chạy hoàn chỉnh không có lỗi tích hợp.",
      answer: "Đáp án mẫu:\ndef them_sp(gio, ten, gia): gio.append({'ten': ten, 'gia': gia})\ndef tinh_tong(gio): return sum(sp['gia'] for sp in gio)\ndef ap_voucher(tong, ma): return tong * 0.9 if ma == 'GIAM10' else tong\ndef main():\n    gio = []\n    them_sp(gio, 'Sách Tin 11', 100)\n    them_sp(gio, 'Vở', 20)\n    tong = tinh_tong(gio)\n    tong_cuoi = ap_voucher(tong, 'GIAM10')\n    print(f'Tổng thanh toán: {tong_cuoi}k')\nmain()"
    },
    {
      question: "Bài 3: Lập bảng bộ kiểm thử tích hợp (End-to-end Test Suite) gồm 3 test cases cho chương trình Quản lý giỏ hàng ở bài 2.",
      answer: "Đáp án mẫu:\n1. TC1 (Thông thường): Giỏ có 2 SP (100k, 20k), mã 'GIAM10' → Mong đợi: 108k.\n2. TC2 (Mã sai): Giỏ có 2 SP (100k, 20k), mã 'SAI' → Mong đợi: 120k (không giảm).\n3. TC3 (Giỏ rỗng): Giỏ 0 SP, mã 'GIAM10' → Mong đợi: 0k, không phát sinh lỗi."
    }
  ],
  practiceExercises: [
    {
      id: "ex-b27-1",
      badge: "Dự Án Lập Trình Thực Hành",
      duration: "45 phút",
      title: "Hoàn Thiện Mini-Project Quản Lý Đội Ngũ Lập Trình",
      description: "Thực hành quy trình 4 bước hoàn chỉnh: từ phân rã mô-đun, cài đặt thuật toán đến kiểm thử tích hợp End-to-end.",
      type: "sheet",
      content: {
        objective: "Tích hợp trọn vẹn kiến thức Chủ đề 6 vào một mini-project hoàn chỉnh, nhận diện và phòng ngừa các lỗi tích hợp dữ liệu.",
        requirements: [
          "Cài đặt hoàn chỉnh 5 hàm mô-đun cho bài toán Quản lý thư viện hoặc Quản lý điểm.",
          "Tích hợp các hàm vào main() theo đúng thứ tự logic.",
          "Chạy kiểm thử tích hợp với 3 bộ test case biên."
        ],
        submissionHint: "Nộp file Python .py hoàn chỉnh chạy không lỗi và bảng ghi nhận kết quả Test Case."
      }
    }
  ]
}
