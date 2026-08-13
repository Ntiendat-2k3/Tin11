export const assessmentSystem = [
  {
    cadence: "Mỗi buổi",
    duration: "8-12 phút",
    format: "5-8 câu retrieval + 1 trace/code siêu ngắn",
    goal: "Chống quên và phát hiện lỗ hổng trước khi vào bài mới."
  },
  {
    cadence: "Mỗi 2 tuần",
    duration: "15-20 phút",
    format: "8-12 lệnh hỏi; có ít nhất 1 case Đúng/Sai",
    goal: "Đo độ chắc chủ đề và tốc độ."
  },
  {
    cadence: "Kết thúc cụm CSDL / Kĩ thuật lập trình",
    duration: "35-45 phút",
    format: "Trắc nghiệm + Đúng/Sai + đọc code/SQL",
    goal: "Đánh giá hiểu, vận dụng và Error Log."
  },
  {
    cadence: "Tuần 24 trở đi",
    duration: "25 phút",
    format: "Half-mock theo cấu trúc thi",
    goal: "Tăng nhịp xử lý mà chưa gây áp lực đề đủ 50 phút quá sớm."
  },
  {
    cadence: "Tuần 29-32",
    duration: "50 phút",
    format: "Mock 24 câu MCQ + cụm Đúng/Sai đã học; chỉ dùng kiến thức 10-11 + preview 12 được dạy",
    goal: "Huấn luyện chiến thuật thời gian và phát hiện vùng yếu trước lớp 12."
  }
]

export const sessionTemplate = [
  { minutes: 10, activity: "Retrieval quiz", purpose: "Gọi lại kiến thức cũ, không nhìn tài liệu." },
  { minutes: 20, activity: "Khái niệm / mô hình", purpose: "Học đúng bản chất, dùng sơ đồ hoặc ví dụ phản chứng." },
  { minutes: 30, activity: "Worked examples", purpose: "Gia sư model hóa cách suy luận/trace." },
  { minutes: 30, activity: "Independent practice", purpose: "Học sinh tự code/tự giải; gia sư chỉ gợi ý theo tầng." },
  { minutes: 20, activity: "Exam block", purpose: "ABCD hoặc Đúng/Sai bấm giờ, ưu tiên tình huống." },
  { minutes: 10, activity: "Error Log + giao bài", purpose: "Ghi mã lỗi, quy tắc tránh sai, bài spaced review." }
]
