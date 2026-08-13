export const b21Content = {
  warmUp: {
    question: "Vì sao hình ảnh 'bong bóng nổi dần trên mặt nước' lại diễn tả chính xác thuật toán Sắp xếp nổi bọt (Bubble Sort)?",
    description: "Giới thiệu bài toán Sắp xếp — nền tảng cho vô số ứng dụng thực tế, và thuật toán Sắp xếp nổi bọt dễ hiểu nhất để làm quen với tư duy thuật toán sắp xếp."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Khái niệm bài toán sắp xếp (Sorting Problem)",
      subsections: [
        {
          heading: "Định nghĩa & Ý nghĩa thực tế",
          text: "Cho mảng N phần tử, sắp xếp lại thứ tự các phần tử theo 1 tiêu chí nhất định (tăng dần hoặc giảm dần) mà không làm mất hoặc thêm phần tử nào.",
          points: [
            "Dữ liệu đã sắp xếp giúp tìm kiếm nhanh hơn nhiều (nền tảng cho Tìm kiếm nhị phân), dễ trực quan hóa, lập bảng xếp hạng...",
            "Liên hệ CSDL: Mệnh đề ORDER BY trong SQL (Bài 14) chính là yêu cầu DBMS thực hiện thuật toán sắp xếp!"
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Thuật toán Sắp xếp nổi bọt (Bubble Sort) — Ý tưởng cốt lõi",
      subsections: [
        {
          heading: "So sánh cặp phần tử kề nhau & Đổi chỗ (Swap)",
          text: "Duyệt qua mảng nhiều lượt. Ở mỗi lượt, so sánh 2 phần tử liền kề nhau (a[i] và a[i+1]). Nếu chúng sai thứ tự (a[i] > a[i+1] khi sắp tăng dần) thì đổi chỗ (swap) cho nhau. Lặp lại quá trình này nhiều lượt cho tới khi mảng đúng thứ tự.",
          points: [
            "Vì sao gọi là 'nổi bọt': Sau mỗi lượt duyệt, phần tử lớn nhất trong đoạn đang xét sẽ bị 'đẩy' về đúng vị trí cuối mảng — giống như bọt khí nổi dần lên mặt nước.",
            "💡 Mẹo nhớ: Hình dung hàng học sinh đứng xếp hàng theo chiều cao — 2 bạn đứng cạnh nhau cứ so chiều cao, ai cao hơn thì đứng sau, làm đi làm lại nhiều lượt hàng sẽ xếp từ thấp đến cao."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Các bước thực hiện Bubble Sort (Pseudo-code)",
      subsections: [
        {
          heading: "Thuật toán dạng các bước chuẩn",
          text: "Bước 1: Lặp qua từng lượt (pass) từ 1 đến N-1\nBước 2: Trong mỗi lượt, duyệt so sánh từng cặp phần tử liền kề a[i] và a[i+1]\nBước 3: Nếu a[i] > a[i+1] (sai thứ tự tăng dần) → đổi chỗ (swap) 2 phần tử\nBước 4: Sau mỗi lượt, phần tử lớn nhất còn lại đã 'chìm' đúng vị trí cuối đoạn đang xét\nBước 5: Lặp lại cho đến khi không còn cặp nào cần đổi chỗ"
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Số lượt so sánh và đổi chỗ tối đa",
      subsections: [
        {
          heading: "Công thức đếm phép tính chuẩn bị cho Bài 24",
          text: "Với mảng N phần tử, Bubble Sort cần tối đa N-1 lượt duyệt. Lượt 1 cần N-1 phép so sánh, lượt 2 cần N-2 phép so sánh... Lượt cuối cần 1 phép so sánh.",
          points: [
            "Tổng số phép so sánh tối đa là: (N-1) + (N-2) + ... + 1 = N(N-1)/2 = 1/2 * N^2 - 1/2 * N",
            "💡 Con số N(N-1)/2 này sẽ dùng trực tiếp để chứng minh độ phức tạp thời gian O(N^2) ở Bài 24."
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Tối ưu Early Stop (Dừng sớm khi mảng đã xong)",
      subsections: [
        {
          heading: "Bật cờ đánh dấu đổi chỗ",
          text: "Nếu trong 1 lượt duyệt không có bất kỳ phép đổi chỗ nào xảy ra, nghĩa là mảng đã hoàn toàn đúng thứ tự → có thể dừng thuật toán ngay (break) mà không cần chạy hết N-1 lượt."
        }
      ]
    },
    {
      id: "sec-6",
      title: "6. Minh họa thực hành (Trace tay & Code Python)",
      steps: [
        {
          step: "1. Trace tay từng lượt (Mảng ban đầu: [5, 3, 8, 1], sắp tăng dần)",
          detail: "Mảng ban đầu: [5, 3, 8, 1]\n\nLượt 1:\n- So 5, 3 → 5 > 3 → Đổi chỗ → [3, 5, 8, 1]\n- So 5, 8 → 5 < 8 → Giữ nguyên → [3, 5, 8, 1]\n- So 8, 1 → 8 > 1 → Đổi chỗ → [3, 5, 1, 8]  ← Số 8 (lớn nhất) đã chìm đúng vị trí cuối!\n\nLượt 2:\n- So 3, 5 → 3 < 5 → Giữ nguyên → [3, 5, 1, 8]\n- So 5, 1 → 5 > 1 → Đổi chỗ → [3, 1, 5, 8]  ← Số 5 đã chìm đúng vị trí áp chót!\n\nLượt 3:\n- So 3, 1 → 3 > 1 → Đổi chỗ → [1, 3, 5, 8]  ← Hoàn thành! Mảng đã tăng dần."
        },
        {
          step: "2. Code Python thuật toán Bubble Sort (Bản cơ bản)",
          detail: "def bubble_sort(a):\n    n = len(a)\n    for luot in range(n - 1):              # Lặp N-1 lượt\n        for i in range(n - 1 - luot):       # Thu hẹp phạm vi duyệt mỗi lượt\n            if a[i] > a[i + 1]:              # Kiểm tra sai thứ tự\n                a[i], a[i + 1] = a[i + 1], a[i]   # Đổi chỗ kiểu Python (Swap 1 dòng)\n    return a\n\nprint(bubble_sort([5, 3, 8, 1]))   # Output: [1, 3, 5, 8]"
        },
        {
          step: "3. Code Python tối ưu Early Stop",
          detail: "def bubble_sort_toi_uu(a):\n    n = len(a)\n    for luot in range(n - 1):\n        da_doi_cho = False                  # Cờ đánh dấu\n        for i in range(n - 1 - luot):\n            if a[i] > a[i + 1]:\n                a[i], a[i + 1] = a[i + 1], a[i]\n                da_doi_cho = True             # Đã có đổi chỗ\n        if not da_doi_cho:                   # Không có đổi chỗ nào trong lượt → xong!\n            break                              # Dừng sớm ngay\n    return a\n\nprint(bubble_sort_toi_uu([1, 2, 3, 5, 4]))   # Output: [1, 2, 3, 4, 5]"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Sau lượt duyệt (pass) thứ nhất của thuật toán Bubble Sort (sắp xếp tăng dần), phần tử nào chắc chắn được đưa về đúng vị trí cuối cùng?",
      options: [
        "A. Phần tử nhỏ nhất mảng",
        "B. Phần tử lớn nhất mảng",
        "C. Phần tử nằm ở trung vị mảng",
        "D. Phần tử đầu tiên"
      ],
      answer: "B",
      explanation: "Bubble sort so sánh đổi chỗ liên tục các cặp kề nhau, do đó phần tử lớn nhất sẽ được 'đẩy/nổi' về vị trí cuối mảng sau lượt 1."
    },
    {
      question: "Với mảng gồm N = 5 phần tử, tổng số phép so sánh TỐI ĐA của thuật toán Bubble Sort là bao nhiêu?",
      options: [
        "A. 5 phép so sánh",
        "B. 10 phép so sánh",
        "C. 20 phép so sánh",
        "D. 25 phép so sánh"
      ],
      answer: "B",
      explanation: "Công thức tổng số phép so sánh tối đa là N(N-1)/2. Với N=5: 5*4/2 = 10 phép so sánh."
    }
  ],
  examTypes: [
    {
      question: "Dạng 1: Trace tay từng lượt Bubble Sort cho mảng nhỏ (4-6 phần tử).",
      answer: "Phương pháp giải: Viết lại trạng thái mảng sau từng phép so sánh. Đánh dấu phần tử đã về đúng vị trí ở cuối mảng sau mỗi lượt."
    },
    {
      question: "Dạng 2: Viết code hoàn chỉnh Bubble Sort bằng Python.",
      answer: "Phương pháp giải: Vòng lặp ngoài for luot in range(n-1):, vòng lặp trong for i in range(n-1-luot):. If a[i] > a[i+1]: a[i], a[i+1] = a[i+1], a[i]."
    },
    {
      question: "Dạng 3: Áp dụng công thức tính số lượt so sánh tối đa N(N-1)/2.",
      answer: "Phương pháp giải: Thay giá trị N của mảng đề bài cho vào công thức N(N-1)/2 để tính số lần so sánh tối đa."
    }
  ],
  homework: [
    {
      question: "Bài 1: Trace tay bằng bảng cho mảng a = [9, 4, 6, 1, 3] (sắp xếp tăng dần) — ghi đầy đủ từng lượt.",
      answer: "Đáp án mẫu:\nBan đầu: [9, 4, 6, 1, 3]\n- Lượt 1: [4, 9, 6, 1, 3] → [4, 6, 9, 1, 3] → [4, 6, 1, 9, 3] → [4, 6, 1, 3, 9] (9 cố định cuối)\n- Lượt 2: [4, 6, 1, 3, 9] → [4, 1, 6, 3, 9] → [4, 1, 3, 6, 9] (6 cố định)\n- Lượt 3: [1, 4, 3, 6, 9] → [1, 3, 4, 6, 9] (4 cố định)\n- Lượt 4: [1, 3, 4, 6, 9] (Hoàn tất)"
    },
    {
      question: "Bài 2: Viết code Bubble Sort sắp xếp GIẢM DẦN bằng Python.",
      answer: "Đáp án mẫu:\ndef bubble_sort_giam_dan(a):\n    n = len(a)\n    for luot in range(n - 1):\n        for i in range(n - 1 - luot):\n            if a[i] < a[i + 1]:             # Đảo dấu > thành < để sắp giảm dần\n                a[i], a[i + 1] = a[i + 1], a[i]\n    return a\n\nprint(bubble_sort_giam_dan([5, 3, 8, 1]))  # Output: [8, 5, 3, 1]"
    },
    {
      question: "Bài 3: Viết code Bubble Sort có đếm và in ra tổng số lần đổi chỗ (swap) đã thực hiện.",
      answer: "Đáp án mẫu:\ndef bubble_sort_dem_swap(a):\n    n = len(a)\n    dem_swap = 0\n    for luot in range(n - 1):\n        for i in range(n - 1 - luot):\n            if a[i] > a[i + 1]:\n                a[i], a[i + 1] = a[i + 1], a[i]\n                dem_swap += 1\n    return a, dem_swap\n\nprint(bubble_sort_dem_swap([5, 3, 8, 1]))  # Output: ([1, 3, 5, 8], 3)"
    },
    {
      question: "Bài 4: Với mảng [1, 2, 3, 4, 5] (đã sắp xếp sẵn), phiên bản Bubble Sort có Early Stop sẽ dừng sau bao nhiêu lượt?",
      answer: "Đáp án mẫu:\nChỉ dừng sau đúng 1 lượt duy nhất! Trong lượt 1, thuật toán so sánh các cặp 1-2, 2-3, 3-4, 4-5 nhưng không có phép đổi chỗ nào xảy ra (da_doi_cho = False). Do đó điều kiện if not da_doi_cho sẽ kích hoạt lệnh break thoát khỏi vòng lặp ngay lập tức."
    }
  ],
  practiceExercises: [
    {
      id: "ex-b21-1",
      badge: "Luyện Tập Trace & Code",
      duration: "20 phút",
      title: "Trace Tay & Cài Đặt Bubble Sort",
      description: "Thực hành trace từng bước hoán đổi mảng và cài đặt hàm Bubble Sort có cờ tối ưu dừng sớm.",
      type: "sheet",
      content: {
        objective: "Hiểu bản chất cơ chế đẩy phần tử lớn về cuối và cài đặt mã Python chính xác.",
        requirements: [
          "Trace tay mảng 5 phần tử.",
          "Cài đặt hàm Bubble Sort tăng dần và giảm dần.",
          "Thêm biến đếm số lần so sánh và số lần swap."
        ],
        submissionHint: "So sánh kết quả trace tay với output của hàm đếm."
      }
    }
  ]
}
