export const examSnapshot = {
  title: "Mốc bám đề 2026",
  duration: "50 phút",
  part1: {
    label: "Phần I",
    points: 6,
    structure: "24 câu trắc nghiệm nhiều lựa chọn",
    gradeDistribution: [
      { grade: "Lớp 10", count: 7 },
      { grade: "Lớp 11", count: 4 },
      { grade: "Lớp 12", count: 13 }
    ]
  },
  part2: {
    label: "Phần II",
    points: 4,
    structure: "6 câu Đúng/Sai, mỗi câu 4 ý; thí sinh làm 2 câu phần chung + 2 câu phần riêng theo định hướng",
    note: "Với học sinh theo Khoa học máy tính, phải luyện riêng phần định hướng KHMT từ lớp 11, nhưng không được bỏ phần kiến thức chung."
  },
  observedContexts: [
    "quản lý vận tải hành khách",
    "AI sàng lọc bệnh tim",
    "website bệnh viện",
    "quản lý và khai thác cơ sở dữ liệu",
    "mạng máy tính trong hệ thống thực tế"
  ]
}

export const examPrinciples = [
  {
    title: "Bám yêu cầu cần đạt, không học mẹo đáp án",
    detail: "Đề hiện hành chuyển mạnh sang bối cảnh và vận dụng. Mỗi chủ đề phải có câu nhận biết, câu giải thích, câu tình huống và câu giới hạn thời gian."
  },
  {
    title: "Lớp 11 học sâu nhưng ôn thi có chọn lọc",
    detail: "Không vì lớp 11 chỉ chiếm một phần trực tiếp ở Phần I 2026 mà dạy lướt. CSDL và Kĩ thuật lập trình là nền để xử lý phần riêng KHMT và các câu tích hợp sau này."
  },
  {
    title: "Đúng/Sai phải luyện theo cụm tình huống",
    detail: "Mỗi case nên có 4 phát biểu: 1 nhận biết, 1 thông hiểu, 1 suy luận, 1 vận dụng. Chữa từng ý bằng lập luận thay vì chỉ công bố Đ/S."
  },
  {
    title: "Tốc độ là một năng lực riêng",
    detail: "Từ tuần 8 bắt đầu micro-test 10-15 phút; từ tuần 24 làm block 25 phút; cuối lớp 11 mới mô phỏng đủ 50 phút."
  }
]

export const exerciseMix = [
  { label: "Hiểu bản chất", value: 30, note: "khái niệm, phân biệt, giải thích" },
  { label: "Đọc/trace code", value: 25, note: "đầu ra, lỗi, test case, biến đổi dữ liệu" },
  { label: "Tình huống thực tế", value: 25, note: "CSDL, mạng, an toàn, quy trình" },
  { label: "Format thi bấm giờ", value: 15, note: "ABCD + cụm Đúng/Sai" },
  { label: "Nâng cao thuật toán", value: 5, note: "đệ quy/chia để trị/quay lui, chỉ sau khi vững cốt lõi" }
]

export const errorCodes = [
  { code: "K", name: "Thiếu kiến thức", fix: "Ôn lại khái niệm + 3 câu recall sau 24h/7 ngày." },
  { code: "H", name: "Hiểu sai bản chất", fix: "Bắt học sinh tự giải thích lại bằng ví dụ phản chứng." },
  { code: "T", name: "Suy luận yếu", fix: "Tách dữ kiện → quy tắc → kết luận; làm thêm 2 biến thể." },
  { code: "C", name: "Cẩu thả/đọc sai", fix: "Gạch từ khóa, kiểm tra đơn vị/chỉ số/điều kiện biên trước khi chốt." },
  { code: "TG", name: "Quá thời gian", fix: "Gắn time-box và quy tắc bỏ qua/quay lại." }
]
