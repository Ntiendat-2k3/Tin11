export const b22Content = {
  warmUp: {
    question: "Làm thế nào để sắp xếp danh sách học sinh theo Điểm trung bình giảm dần, và nếu bằng điểm thì sắp xếp tiếp theo Tên từ A đến Z?",
    description: "Bài thực hành này vận dụng Bubble Sort vào các tình huống thực tế đa dạng hơn: sắp xếp danh sách đối tượng phức tạp (Dictionary) theo khóa (Key) chỉ định và xử lý trường hợp tie-breaking khi bằng điểm."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Cài đặt đúng các thuật toán sắp xếp trên Python & Lỗi thường gặp",
      subsections: [
        {
          heading: "Các lỗi lập trình học sinh dễ mắc phải",
          text: "Khi cài đặt thuật toán sắp xếp, cần tránh 2 lỗi vô cùng phổ biến sau:",
          points: [
            "Lỗi 1: Quên thu hẹp phạm vi vòng lặp trong range(n-1-luot) → Dùng cố định range(n-1) cho mọi lượt vẫn ra kết quả đúng nhưng dư thừa nhiều phép so sánh không cần thiết.",
            "Lỗi 2: Nhầm lẫn dấu so sánh > (tăng dần) và < (giảm dần)."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Kỹ thuật sắp xếp danh sách đối tượng theo khóa (Key) chỉ định",
      subsections: [
        {
          heading: "Sắp xếp danh sách Dictionary / Record",
          text: "Dữ liệu thực tế thường là danh sách các đối tượng gồm nhiều thuộc tính (tên, điểm, lớp, tuổi...). Bài toán yêu cầu sắp xếp theo 1 thuộc tính cụ thể (Sort Key).",
          points: [
            "Khi hoán đổi (swap), phải hoán đổi CẢ ĐỐI TƯỢNG hoc_sinh[i], hoc_sinh[i+1] = hoc_sinh[i+1], hoc_sinh[i].",
            "Khi so sánh điều kiện if, chỉ so sánh thuộc tính khóa: hoc_sinh[i]['diem_tb'] < hoc_sinh[i+1]['diem_tb']."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Xử lý trường hợp bằng nhau (Tie-breaking)",
      subsections: [
        {
          heading: "Quy tắc tiêu chuẩn phụ khi tiêu chí chính bằng nhau",
          text: "Khi 2 phần tử có giá trị khóa chính bằng nhau (VD: 2 học sinh cùng điểm trung bình), ta quy định tiêu chí phụ (VD: ưu tiên Tên từ A đến Z).",
          points: [
            "Tách hàm can_doi_cho(obj1, obj2) để viết điều kiện so sánh phân tầng sạch sẻ và dễ bảo trì."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Minh họa thực hành code Python",
      steps: [
        {
          step: "1. Sắp xếp danh sách Dictionary học sinh theo Điểm TB giảm dần",
          detail: "hoc_sinh = [\n    {'ten': 'An',   'diem_tb': 7.5},\n    {'ten': 'Bình', 'diem_tb': 9.0},\n    {'ten': 'Chi',  'diem_tb': 8.2},\n]\n\nn = len(hoc_sinh)\nfor luot in range(n - 1):\n    for i in range(n - 1 - luot):\n        # So sánh thuộc tính diem_tb, dấu < để sắp GIẢM DẦN\n        if hoc_sinh[i]['diem_tb'] < hoc_sinh[i + 1]['diem_tb']:\n            hoc_sinh[i], hoc_sinh[i + 1] = hoc_sinh[i + 1], hoc_sinh[i]\n\nfor hs in hoc_sinh:\n    print(hs['ten'], '-', hs['diem_tb'])\n# Output: Bình - 9.0 / Chi - 8.2 / An - 7.5"
        },
        {
          step: "2. Xử lý Tie-breaking (Bằng điểm thì sắp theo Tên A→Z)",
          detail: "def can_doi_cho(hs1, hs2):\n    if hs1['diem_tb'] != hs2['diem_tb']:\n        return hs1['diem_tb'] < hs2['diem_tb']     # Ưu tiên điểm cao đứng trước\n    return hs1['ten'] > hs2['ten']                  # Bằng điểm thì Tên A-Z đứng trước\n\nhoc_sinh = [\n    {'ten': 'Bình', 'diem_tb': 8.0},\n    {'ten': 'An',   'diem_tb': 8.0},\n    {'ten': 'Chi',  'diem_tb': 9.0},\n]\n\nn = len(hoc_sinh)\nfor luot in range(n - 1):\n    for i in range(n - 1 - luot):\n        if can_doi_cho(hoc_sinh[i], hoc_sinh[i + 1]):\n            hoc_sinh[i], hoc_sinh[i + 1] = hoc_sinh[i + 1], hoc_sinh[i]\n\nfor hs in hoc_sinh:\n    print(hs['ten'], '-', hs['diem_tb'])\n# Output: Chi(9.0), An(8.0), Bình(8.0)  ← An đứng trước Bình khi bằng điểm!"
        },
        {
          step: "3. Dùng hàm sorted() chuẩn của Python với Key Lambda",
          detail: "hoc_sinh = [\n    {'ten': 'An',   'diem_tb': 7.5},\n    {'ten': 'Bình', 'diem_tb': 9.0},\n    {'ten': 'Chi',  'diem_tb': 8.2},\n]\n\n# Cách viết ngắn gọn chuyên nghiệp bằng sorted()\nket_qua = sorted(hoc_sinh, key=lambda hs: hs['diem_tb'], reverse=True)\nprint(ket_qua)"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Khi cài đặt Bubble Sort sắp xếp danh sách đối tượng học sinh theo điểm giảm dần, câu lệnh nào thực hiện hoán đổi đúng?",
      options: [
        "A. hoc_sinh[i]['diem_tb'], hoc_sinh[i+1]['diem_tb'] = hoc_sinh[i+1]['diem_tb'], hoc_sinh[i]['diem_tb']",
        "B. hoc_sinh[i], hoc_sinh[i+1] = hoc_sinh[i+1], hoc_sinh[i]",
        "C. hoc_sinh[i]['ten'], hoc_sinh[i+1]['ten'] = hoc_sinh[i+1]['ten'], hoc_sinh[i]['ten']",
        "D. hoc_sinh.sort()"
      ],
      answer: "B",
      explanation: "Khi hoán đổi trong sắp xếp danh sách đối tượng, ta phải hoán đổi TOÀN BỘ 2 phần tử đối tượng (hoc_sinh[i] và hoc_sinh[i+1]), không chỉ hoán đổi riêng từng thuộc tính."
    },
    {
      question: "Cú pháp sorted(hoc_sinh, key=lambda x: x['tuoi']) sắp xếp danh sách theo tiêu chí nào?",
      options: [
        "A. Sắp xếp theo Tên giảm dần",
        "B. Sắp xếp theo Tuổi tăng dần",
        "C. Sắp xếp theo Tuổi giảm dần",
        "D. Sắp xếp theo Điểm TB"
      ],
      answer: "B",
      explanation: "Mặc định hàm sorted() sắp xếp theo giá trị khóa (tuổi) TĂNG DẦN (do không có reverse=True)."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Cho danh sách Dictionary đối tượng → Viết code Bubble Sort sắp xếp theo 1 thuộc tính.",
      answer: "Phương pháp giải: Dùng 2 vòng for lồng nhau. So sánh thuộc tính dạng a[i][key] < a[i+1][key] (nếu giảm) hoặc > (nếu tăng). Swap cả 2 phần tử đối tượng."
    },
    {
      question: "Dạng 2: Sắp xếp theo tiêu chí kép (Tie-breaking).",
      answer: "Phương pháp giải: Xây dựng hàm so sánh can_doi_cho(x, y). Kiểm tra tiêu chí 1 trước, nếu khác nhau thì trả về kết quả tiêu chí 1. Nếu bằng nhau thì trả về kết quả tiêu chí 2."
    }
  ],
  homework: [
    {
      question: "Bài 1: Cho danh sách gồm tên và tuổi của 5 người, viết code Bubble Sort sắp xếp theo Tuổi tăng dần.",
      answer: "Đáp án mẫu:\nnguoi = [\n    {'ten': 'An', 'tuoi': 17},\n    {'ten': 'Bình', 'tuoi': 15},\n    {'ten': 'Chi', 'tuoi': 18},\n    {'ten': 'Dũng', 'tuoi': 16},\n    {'ten': 'En', 'tuoi': 15}\n]\n\nn = len(nguoi)\nfor luot in range(n - 1):\n    for i in range(n - 1 - luot):\n        if nguoi[i]['tuoi'] > nguoi[i + 1]['tuoi']:\n            nguoi[i], nguoi[i + 1] = nguoi[i + 1], nguoi[i]\n\nprint(nguoi)"
    },
    {
      question: "Bài 2: Mở rộng bài 1: Nếu 2 người bằng tuổi, sắp xếp thêm theo Tên tăng dần (A→Z) — áp dụng kỹ thuật Tie-breaking.",
      answer: "Đáp án mẫu:\ndef can_swap(p1, p2):\n    if p1['tuoi'] != p2['tuoi']:\n        return p1['tuoi'] > p2['tuoi']\n    return p1['ten'] > p2['ten']\n\nnguoi = [\n    {'ten': 'Bình', 'tuoi': 15},\n    {'ten': 'An',   'tuoi': 15},\n    {'ten': 'Chi',  'tuoi': 18}\n]\n\nn = len(nguoi)\nfor luot in range(n - 1):\n    for i in range(n - 1 - luot):\n        if can_swap(nguoi[i], nguoi[i + 1]):\n            nguoi[i], nguoi[i + 1] = nguoi[i + 1], nguoi[i]\n\nprint(nguoi)  # An(15) đứng trước Bình(15)"
    }
  ],
  practiceExercises: [
    {
      id: "ex-b22-1",
      badge: "Thực HànhNâng Cao",
      duration: "25 phút",
      title: "Sắp Xếp Bảng Xếp Hạng Đa Tiêu Chí",
      description: "Thực hành lập trình sắp xếp danh sách học sinh / sản phẩm / đội bóng theo 2 tiêu chí khóa chính và khóa phụ.",
      type: "sheet",
      content: {
        objective: "Cài đặt thành thạo thuật toán sắp xếp đối tượng có xử lý tiêu chí phụ (Tie-breaking).",
        requirements: [
          "Tạo mảng dữ liệu 5 học sinh gồm tên, điểm Toán, điểm Văn.",
          "Sắp xếp theo Tổng điểm giảm dần.",
          "Nếu tổng điểm bằng nhau, ưu tiên điểm Toán cao hơn."
        ],
        submissionHint: "In bảng xếp hạng ra console và kiểm tra thứ tự."
      }
    }
  ]
}
