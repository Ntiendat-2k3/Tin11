export const b11Content = {
  warmUp: {
    question: "Một file Word ghi danh sách học sinh có được gọi là Cơ sở dữ liệu không?",
    description: "Câu trả lời là KHÔNG. Một danh sách gõ tay trong Word chỉ là dữ liệu thô. Để trở thành một 'Cơ sở dữ liệu' (Database) đúng nghĩa, nó phải đáp ứng 5 tiêu chuẩn khắt khe về cấu trúc, tính nhất quán và bảo mật. Bài học này sẽ giúp em nắm trọn 5 tính chất vàng của CSDL!"
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Định nghĩa Cơ sở dữ liệu (Database - CSDL)",
      subsections: [
        {
          heading: "Định nghĩa chuẩn SGK",
          text: "Cơ sở dữ liệu (CSDL) là tập hợp dữ liệu có liên quan với nhau, được tổ chức có cấu trúc, lưu trữ trên các thiết bị nhớ của máy tính, nhằm đáp ứng nhu cầu khai thác thông tin đồng thời của nhiều người dùng và nhiều ứng dụng khác nhau.",
          points: [
            "Phân biệt với dữ liệu rời rạc: Một file Word hay tệp text ghi danh sách học sinh không phải là CSDL vì thiếu cấu trúc chuẩn hóa, không hỗ trợ nhiều người cùng truy vấn đồng thời.",
            "💡 Mẹo nhớ: CSDL = 'Có – Tổ chức – Chia sẻ' (Dữ liệu CÓ liên quan nhau → được TỔ CHỨC có cấu trúc → phục vụ CHIA SẺ cho nhiều người/ứng dụng)."
          ]
        }
      ]
    },
    {
      id: "sec-2",
      title: "2. Tính có cấu trúc & Tính giảm thiểu dư thừa",
      subsections: [
        {
          heading: "Tính có cấu trúc (Structured)",
          text: "Dữ liệu được tổ chức theo khuôn mẫu xác định trước (các bảng gồm hàng và cột cố định). Mọi bản ghi trong cùng một bảng đều tuân theo đúng các trường thông tin đã định nghĩa, không thêm bớt tùy tiện.",
          points: [
            "Ví dụ: Bảng 'HocSinh' có các cột MaHS, HoTen, NgaySinh, Lop. Tất cả học sinh đều có đúng 4 thông tin này."
          ]
        },
        {
          heading: "Tính giảm thiểu dư thừa (Minimal Redundancy)",
          text: "Hạn chế tối đa việc lưu trữ trùng lặp cùng một thông tin ở nhiều nơi. Mỗi thông tin chỉ có một 'nguồn sự thật duy nhất' (Single Source of Truth) để tiết kiệm dung lượng và tránh sai sót khi cập nhật.",
          points: [
            "Ví dụ: Họ tên và Lớp của học sinh chỉ lưu 1 lần duy nhất trong bảng HocSinh; bảng Điểm chỉ cần lưu MaHS để liên kết."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Tính nhất quán & Tính độc lập dữ liệu",
      subsections: [
        {
          heading: "Tính nhất quán (Consistency)",
          text: "Dữ liệu tại mọi vị trí trong hệ thống phải luôn ăn khớp và chính xác tại mọi thời điểm. Khi sửa thông tin tại một nơi (ví dụ đổi số điện thoại học sinh), toàn bộ hệ thống phải cập nhật đồng bộ, không để xảy ra mâu thuẫn dữ liệu."
        },
        {
          heading: "Tính độc lập dữ liệu (Data Independence)",
          text: "Dữ liệu được lưu trữ tách biệt với các chương trình phần mềm khai thác nó. Khi ta nâng cấp giao diện phần mềm hoặc thay đổi cách hiển thị, cấu trúc dữ liệu lưu trong đĩa không bị ảnh hưởng, và ngược lại."
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Tính An toàn và Bảo mật (Security)",
      functions: [
        {
          name: "Kiểm soát quyền truy cập chi tiết",
          desc: "Hệ thống CSDL kiểm soát chặt chẽ ai được xem (Read), ai được thêm/sửa (Write), ai được xóa (Delete) dữ liệu trên từng bảng, từng cột cụ thể."
        },
        {
          name: "Khôi phục khi gặp sự cố (Backup & Recovery)",
          desc: "Đảm bảo dữ liệu không bị mất mát khi máy tính bị sập nguồn đột ngột, lỗi phần cứng hoặc bị virus tấn công thông qua cơ chế ghi nhật ký (Log) và bản sao dự phòng."
        },
        {
          name: "Ví dụ thực tế",
          desc: "Giáo viên chỉ được xem và nhập điểm của lớp mình phụ trách; học sinh chỉ xem được điểm của bản thân; chỉ có Ban giám hiệu mới có quyền phê duyệt bảng điểm toàn trường."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Minh họa thực hành Cấu trúc & Giảm dư thừa",
      steps: [
        {
          step: "Cấu trúc bảng CSDL chuẩn (Mỗi cột 1 thuộc tính, mỗi hàng 1 bản ghi)",
          detail: "Bảng HocSinh:\n| MaHS | HoTen          | NgaySinh   | Lop  |\n| HS01 | Nguyễn Văn A   | 12/05/2009 | 11A1 |\n| HS02 | Trần Thị B     | 20/09/2009 | 11A1 |\n→ Dữ liệu được định dạng rõ ràng, chuẩn hóa."
        },
        {
          step: "Minh họa Giảm thiểu dư thừa: SAI vs ĐÚNG",
          detail: "❌ THIẾT KẾ SAI (Dư thừa dữ liệu):\nBảng Diem: [MaHS, HoTen, Lop, Mon, Diem]\n→ Tên 'Nguyễn Văn A' và lớp '11A1' bị lặp lại ở cả 8 môn học!\n\n✅ THIẾT KẾ ĐÚNG (Chuẩn hóa, giảm dư thừa):\nTách làm 2 bảng liên kết qua MaHS:\n- Bảng HocSinh: [MaHS, HoTen, Lop] (Lưu tên 1 lần duy nhất)\n- Bảng Diem: [MaHS, Mon, Diem] (Chỉ cần tham chiếu MaHS)"
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Tính chất nào của Cơ sở dữ liệu đảm bảo rằng thông tin về địa chỉ nhà của một học sinh chỉ cần lưu ở một nơi duy nhất, tránh việc phải cập nhật nhiều lần ở nhiều bảng khác nhau?",
      options: [
        "A. Tính giảm thiểu dư thừa dữ liệu (Minimal Redundancy)",
        "B. Tính độc lập dữ liệu (Data Independence)",
        "C. Tính an toàn và bảo mật (Security)",
        "D. Tính có cấu trúc (Structured)"
      ],
      answer: "A",
      explanation: "Tính giảm thiểu dư thừa dữ liệu đảm bảo mỗi thông tin chỉ được lưu trữ một lần duy nhất tại nơi quản lý chính, tránh việc lặp lại thông tin ở nhiều bảng."
    },
    {
      question: "Khi nâng cấp giao diện phần mềm Quản lý điểm từ bản cũ lên bản mới mà cấu trúc bảng điểm lưu trong ổ cứng không cần phải sửa đổi, điều này thể hiện tính chất nào của CSDL?",
      options: [
        "A. Tính nhất quán",
        "B. Tính độc lập dữ liệu",
        "C. Tính an toàn bảo mật",
        "D. Tính giảm dư thừa"
      ],
      answer: "B",
      explanation: "Tính độc lập dữ liệu (Data Independence) cho phép chương trình ứng dụng thay đổi mà không làm thay đổi cấu trúc lưu trữ dữ liệu vật lý bên dưới."
    }
  ],
  examTypes: [
    "Cho một tình huống lưu trữ dữ liệu thực tế → yêu cầu giải thích xem đây có phải là CSDL đúng nghĩa theo định nghĩa SGK hay không.",
    "Cho một bảng dữ liệu bị lặp lại thông tin nhiều lần → chỉ ra bảng đó vi phạm tính chất nào của CSDL và đề xuất phương án sửa chữa.",
    "Trắc nghiệm ghép nối: Ghép 5 tính chất đặc trưng của CSDL với 5 ví dụ minh họa tương ứng."
  ],
  homework: [
    "Lấy ví dụ về một bảng tính Excel bất kỳ em từng thấy (thời khóa biểu, danh sách đóng quỹ lớp...) → phân tích xem nó đã đạt đủ 5 tính chất của CSDL chưa, còn thiếu những tính chất nào?",
    "Thiết kế lại (trên giấy) bảng Quản lý Mượn Sách Thư viện sao cho đạt tính giảm thiểu dư thừa (gợi ý: tách thành bảng BanDoc, bảng Sach và bảng PhieuMuon liên kết với nhau).",
    "Giải thích bằng ví dụ thực tế của riêng em về tính 'An toàn và Bảo mật' trong một ứng dụng mà em sử dụng hàng ngày (như app ngân hàng, VssID, VnEdu...)."
  ]
}
