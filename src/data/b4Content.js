export const b4Content = {
  warmUp: {
    question: "Điều gì thực sự xảy ra bên trong CPU khi em nhấn Enter?",
    description: "Em gõ một phép tính 2+3 vào máy tính và nhấn Enter. Trong vòng chưa đến 1 giây, kết quả 5 xuất hiện. Nhưng bên trong chiếc hộp kim loại đó, hàng tỷ phép toán đã diễn ra theo một trật tự nghiêm ngặt được thiết kế từ năm 1945. Hành trình đó bắt đầu từ Von Neumann."
  },
  sections: [
    {
      id: "sec-1",
      title: "1. Kiến trúc Von Neumann — Nền tảng của mọi máy tính hiện đại",
      subsections: [
        {
          heading: "Câu chuyện lịch sử: Trước Von Neumann, máy tính hoạt động như thế nào?",
          text: "Trước năm 1945, máy tính như ENIAC phải được đấu lại dây điện thủ công mỗi khi đổi chương trình — một công việc mất hàng giờ, thậm chí hàng ngày. John von Neumann đề xuất ý tưởng đột phá: Lưu chương trình (code) và dữ liệu vào cùng một bộ nhớ dưới dạng số nhị phân.",
          points: [
            "Nguyên lý cốt lõi: 'Chương trình cũng là dữ liệu' — code em viết ra, trước khi CPU chạy, cũng chỉ là các bit 0/1 nằm trong RAM y hệt như file ảnh hay file văn bản.",
            "Tầm quan trọng: Nhờ nguyên lý này, đổi chương trình chỉ cần nạp dữ liệu mới vào bộ nhớ — không cần đấu lại dây. Đây là lý do máy tính ngày nay linh hoạt chạy được mọi phần mềm.",
            "5 thành phần chính theo mô hình: Bộ xử lý trung tâm (CPU = ALU + CU), Bộ nhớ chính (Memory), Thiết bị Vào (Input), Thiết bị Ra (Output), và Bus kết nối các thành phần."
          ]
        },
        {
          heading: "Mẹo nhớ 5 thành phần",
          text: "Sơ đồ Von Neumann có thể nhớ theo câu: 'Vào — Nhớ — Xử lý — Ra — Nối'. Hoặc nhớ theo phép tính đơn giản: Input → CPU (ALU xử lý, CU điều khiển) → Memory (lưu trữ tạm) → Output.",
          points: [
            "CPU (Central Processing Unit): 'Bộ não' — tính toán và điều phối toàn bộ.",
            "Memory (RAM): 'Bàn làm việc' — lưu trữ tạm dữ liệu và chương trình đang chạy.",
            "Input: Bàn phím, chuột, microphone — đưa dữ liệu vào.",
            "Output: Màn hình, loa, máy in — xuất kết quả ra.",
            "Bus: 'Đường cao tốc' nối tất cả các thành phần lại với nhau."
          ]
        }
      ],
      osArchitecture: {
        title: "Mô hình kiến trúc Von Neumann",
        layers: [
          { name: "Thiết bị Vào (Input): Bàn phím, Chuột, Micro", color: "bg-sky-100 border-sky-300 text-sky-800", icon: "user" },
          { name: "CPU: ALU (Tính toán) + CU (Điều khiển) + Thanh ghi", color: "bg-emerald-100 border-emerald-400 text-emerald-900 font-bold", icon: "os" },
          { name: "Bộ nhớ chính (RAM + ROM): Lưu trữ tạm thời", color: "bg-amber-100 border-amber-300 text-amber-800", icon: "app" },
          { name: "Thiết bị Ra (Output): Màn hình, Loa, Máy in", color: "bg-slate-200 border-slate-400 text-slate-800", icon: "hardware" }
        ]
      }
    },
    {
      id: "sec-2",
      title: "2. CPU — Bộ xử lý trung tâm",
      subsections: [
        {
          heading: "ALU — Khối Số học và Logic",
          text: "ALU (Arithmetic Logic Unit) là 'bắp tay' của CPU — nơi thực sự thực hiện mọi phép tính. Bao gồm hai nhóm phép toán:",
          points: [
            "Phép toán số học: Cộng (+), Trừ (-), Nhân (*), Chia (/). Ví dụ: tính 2+3=5, tính thuế VAT của hóa đơn.",
            "Phép toán logic: So sánh (>, <, ==, !=), AND, OR, NOT. Ví dụ: kiểm tra 'nếu điểm >= 5 thì đậu' — đây là phép so sánh logic.",
            "Mọi thao tác phức tạp (vẽ đồ họa, phát nhạc, chạy AI) đều quy về hàng tỷ phép tính ALU cơ bản này."
          ]
        },
        {
          heading: "CU — Khối Điều khiển",
          text: "CU (Control Unit) là 'nhạc trưởng' điều phối toàn bộ CPU. CU không tính toán mà ra lệnh: Lấy lệnh tiếp theo từ đâu? Dữ liệu cần lấy từ bộ nhớ nào? Kết quả ghi vào đâu?",
          points: [
            "CU điều phối chu trình Fetch-Decode-Execute liên tục hàng tỷ lần mỗi giây.",
            "Fetch: Lấy lệnh từ ô nhớ trỏ bởi Program Counter (PC).",
            "Decode: Giải mã lệnh vừa lấy được (là lệnh cộng? lệnh nhảy? lệnh ghi bộ nhớ?).",
            "Execute: Ra lệnh cho ALU thực thi, ghi kết quả vào thanh ghi hoặc bộ nhớ."
          ]
        }
      ]
    },
    {
      id: "sec-3",
      title: "3. Thanh ghi & Tốc độ xung nhịp",
      subsections: [
        {
          heading: "Thanh ghi (Register) — Bộ nhớ siêu tốc bên trong CPU",
          text: "Thanh ghi là vùng nhớ nhỏ xíu (chỉ vài byte) nhưng nhanh nhất trong toàn hệ thống — vì nằm ngay trong lõi CPU, không cần đi qua bus.",
          points: [
            "Ví dụ trực quan: Khi CPU tính 5+3, hai số 5 và 3 được nạp vào 2 thanh ghi. ALU tính ra 8 và ghi vào 1 thanh ghi kết quả. Toàn bộ trong vài phần tỷ giây.",
            "Program Counter (PC): Thanh ghi đặc biệt lưu địa chỉ lệnh tiếp theo cần thực hiện.",
            "Thứ tự tốc độ bộ nhớ (từ nhanh nhất → chậm nhất): Thanh ghi > Cache > RAM > SSD > HDD.",
            "Mẹo nhớ: Càng gần CPU càng nhanh nhưng càng đắt và nhỏ dung lượng. Thanh ghi nhanh gấp 100 lần RAM nhưng chỉ có vài chục byte, còn RAM có hàng GB."
          ]
        },
        {
          heading: "Tốc độ xung nhịp (Clock Speed) — Đơn vị GHz",
          text: "Xung nhịp là số chu kỳ xử lý CPU thực hiện trong 1 giây. 1 GHz = 1 tỷ chu kỳ/giây. CPU 3.5 GHz nghĩa là thực hiện 3.5 tỷ chu kỳ mỗi giây.",
          points: [
            "Xung nhịp cao hơn = nhanh hơn? KHÔNG HẲN. Chỉ đúng khi so sánh cùng kiến trúc chip.",
            "Các yếu tố khác cũng quyết định tốc độ: Số nhân (core), dung lượng Cache, kiến trúc thế hệ mới.",
            "Ví dụ: Intel Core i5 3.0 GHz (thế hệ 12) có thể nhanh hơn Core i7 4.0 GHz (thế hệ 8) nhờ kiến trúc mới hiệu quả hơn.",
            "Đa nhân (Multi-core): CPU 8 nhân như có 8 CPU nhỏ làm việc song song — rất quan trọng cho đa nhiệm (mở nhiều app cùng lúc)."
          ]
        }
      ]
    },
    {
      id: "sec-4",
      title: "4. Bus hệ thống và Bộ nhớ",
      functions: [
        {
          name: "Bus Dữ liệu (Data Bus)",
          desc: "Vận chuyển dữ liệu thực tế giữa CPU, bộ nhớ và thiết bị ngoại vi. Độ rộng bus (16-bit, 32-bit, 64-bit) quyết định bao nhiêu bit được truyền cùng lúc. Bus 64-bit truyền dữ liệu gấp đôi bus 32-bit mỗi chu kỳ."
        },
        {
          name: "Bus Địa chỉ (Address Bus)",
          desc: "Xác định 'địa chỉ' ô nhớ cần đọc/ghi. Như 'biển số nhà' trong thành phố — không mang hàng hóa, chỉ chỉ đường. Độ rộng bus địa chỉ quyết định dung lượng RAM tối đa có thể truy cập."
        },
        {
          name: "Bus Điều khiển (Control Bus)",
          desc: "Truyền tín hiệu điều khiển: đọc hay ghi? ngắt (interrupt) từ thiết bị nào? Giống 'đèn giao thông' điều phối lưu thông — ai được đi trước, hướng nào."
        },
        {
          name: "RAM (Random Access Memory)",
          desc: "Bộ nhớ tạm thời, tốc độ cao. Khi tắt máy dữ liệu trong RAM biến mất. Dùng lưu chương trình và dữ liệu đang chạy. RAM càng lớn, mở nhiều app cùng lúc càng mượt."
        },
        {
          name: "ROM (Read Only Memory)",
          desc: "Bộ nhớ chỉ đọc, dữ liệu tồn tại kể cả khi tắt điện. Chứa firmware khởi động (BIOS/UEFI). Khi bật máy, CPU đọc ROM đầu tiên để biết cách khởi động hệ thống."
        },
        {
          name: "Bộ nhớ đệm (Cache)",
          desc: "Bộ nhớ siêu nhanh nằm giữa CPU và RAM. Lưu tạm các dữ liệu hay dùng nhất để CPU không phải chờ đợi RAM mỗi lần. CPU hiện đại có L1, L2, L3 cache với tốc độ giảm dần nhưng dung lượng tăng dần."
        }
      ]
    },
    {
      id: "sec-5",
      title: "5. Thực hành: Khám phá thông số CPU của máy mình",
      steps: [
        {
          step: "Xem thông tin CPU bằng PowerShell",
          detail: "Nhấn Win + X → chọn Windows PowerShell → Gõ lệnh: Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, MaxClockSpeed → Nhấn Enter. Màn hình sẽ hiển thị tên CPU, số nhân và tốc độ xung nhịp tối đa."
        },
        {
          step: "Xem chi tiết CPU trực quan trong Task Manager",
          detail: "Nhấn Ctrl + Shift + Esc → Vào tab Performance → Chọn CPU. Quan sát: đồ thị tải CPU theo thời gian thực, xung nhịp hiện tại (GHz), số nhân và luồng (Cores & Logical processors), dung lượng L1/L2/L3 Cache."
        },
        {
          step: "Kiểm tra RAM đang dùng và còn trống",
          detail: "Tại tab Performance → Chọn Memory. Quan sát dung lượng RAM đang dùng (In use) so với tổng RAM. Mở thêm nhiều app, theo dõi RAM tăng lên ra sao — đây chính là 'quản lý bộ nhớ' của HĐH hoạt động trực quan."
        }
      ]
    }
  ],
  summaryQuiz: [
    {
      question: "Trong mô hình Von Neumann, thành phần nào có nhiệm vụ thực hiện các phép tính số học và logic?",
      options: [
        "A. CU (Control Unit — Khối điều khiển).",
        "B. RAM (Random Access Memory — Bộ nhớ truy cập ngẫu nhiên).",
        "C. ALU (Arithmetic Logic Unit — Khối số học và logic).",
        "D. Bus địa chỉ (Address Bus)."
      ],
      answer: "C",
      explanation: "ALU (Arithmetic Logic Unit) là thành phần thực sự thực hiện mọi phép tính trong CPU: phép toán số học (cộng, trừ, nhân, chia) và phép toán logic (so sánh, AND, OR, NOT). CU chỉ điều phối và ra lệnh, không tính toán."
    },
    {
      question: "Xếp theo thứ tự tốc độ từ NHANH nhất đến CHẬM nhất, thứ tự nào sau đây là đúng?",
      options: [
        "A. RAM → Cache → Thanh ghi → SSD → HDD.",
        "B. Thanh ghi → Cache → RAM → SSD → HDD.",
        "C. Cache → Thanh ghi → RAM → HDD → SSD.",
        "D. SSD → RAM → Cache → Thanh ghi → HDD."
      ],
      answer: "B",
      explanation: "Thanh ghi (Register) nằm trong CPU nên nhanh nhất. Cache nằm gần CPU. RAM là bộ nhớ chính. SSD nhanh hơn HDD nhưng vẫn chậm hơn RAM nhiều lần. Quy tắc: càng gần CPU về mặt vật lý, tốc độ càng cao nhưng dung lượng càng nhỏ và chi phí càng đắt."
    },
    {
      question: "CPU A có xung nhịp 2.5 GHz và 8 nhân. CPU B có xung nhịp 4.0 GHz và 2 nhân. Với tác vụ nào CPU A có thể cho hiệu năng TỐT HƠN CPU B?",
      options: [
        "A. Chạy một phép tính toán học đơn lẻ, không thể tách thành nhiều luồng.",
        "B. Render video độ phân giải cao, vốn có thể phân chia thành nhiều luồng xử lý song song.",
        "C. Chơi game cũ chỉ tối ưu cho CPU đơn nhân (single-core).",
        "D. CPU B luôn nhanh hơn vì xung nhịp cao hơn."
      ],
      answer: "B",
      explanation: "Với tác vụ có thể song song hóa như render video, encode âm thanh, hay chạy nhiều máy ảo — CPU có nhiều nhân (core) sẽ chiếm ưu thế lớn. CPU A với 8 nhân có thể chia công việc render cho 8 nhân cùng xử lý. Ngược lại, game cũ hoặc tính toán đơn luồng sẽ ưu tiên xung nhịp cao hơn, nên CPU B thắng."
    }
  ],
  examTypes: [
    "Vẽ/điền sơ đồ khối kiến trúc Von Neumann, chú thích 5 thành phần (CPU gồm ALU+CU, Bộ nhớ chính, Thiết bị vào, Thiết bị ra, Bus liên kết).",
    "Phân biệt vai trò ALU vs CU bằng ví dụ cụ thể (ALU tính toán số học & logic, CU giải mã lệnh và điều phối).",
    "So sánh 2 CPU (thông số cho sẵn: xung nhịp, số nhân) → CPU nào phù hợp cho tác vụ đồ họa/đa nhiệm nặng, giải thích."
  ],
  homework: [
    "Tra cứu thông số CPU của máy tính/điện thoại đang dùng (tên CPU, số nhân, xung nhịp) và giải thích ý nghĩa từng thông số.",
    "Vẽ sơ đồ chu trình Fetch – Decode – Execute bằng tay, chú thích rõ vai trò của Program Counter (PC), thanh ghi (Registers) và ALU.",
    "Giải thích tại sao máy tính có xung nhịp cao (GHz lớn) nhưng vẫn có thể chạy chậm hơn máy có xung nhịp thấp hơn (gợi ý: số nhân, bộ nhớ đệm Cache, kiến trúc chip, tản nhiệt)."
  ]
}
