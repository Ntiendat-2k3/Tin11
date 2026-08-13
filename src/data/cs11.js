import { b17Content } from "./b17Content.js"
import { b18Content } from "./b18Content.js"
import { b19Content } from "./b19Content.js"
import { b20Content } from "./b20Content.js"
import { b21Content } from "./b21Content.js"
import { b22Content } from "./b22Content.js"
import { b23Content } from "./b23Content.js"
import { b24Content } from "./b24Content.js"

export const cs11 = [
  {
    id: "b17",
    lesson: "Bài 17",
    title: "Dữ liệu mảng một chiều và hai chiều",
    priority: "critical",
    hours: 3,
    mustKnow: [
      "Khái niệm mảng 1 chiều (1D Array / List trong Python) và mảng 2 chiều (2D Array / Ma trận)",
      "Cấu trúc chỉ số Indexing (tính từ 0 trong Python/C++), chỉ số âm trong Python (a[-1])",
      "Kích thước mảng: số phần tử `len(a)`, số hàng `len(matrix)`, số cột `len(matrix[0])`",
      "Kỹ thuật truy xuất phần tử: mảng 1D `a[i]`, mảng 2D `matrix[r][c]`",
      "Các mô hình duyệt dữ liệu: Duyệt từ đầu đến cuối, duyệt ngược, duyệt từng hàng, duyệt từng cột",
      "Các thao tác tính toán cơ bản: Tính tổng, đếm số thỏa điều kiện, tìm giá trị Lớn nhất (Max) / Nhỏ nhất (Min)"
    ],
    codeSkills: [
      "Khai báo và khởi tạo mảng 1D, mảng 2D (Matrix) bằng danh sách trong Python",
      "Viết vòng lặp `for i in range(len(a))` và `for x in a` để duyệt mảng",
      "Duyệt ma trận 2 chiều bằng 2 vòng lặp `for` lồng nhau",
      "Xử lý các bài toán cơ bản trên hàng/cột: Tính tổng hàng $r$, tính tổng cột $c$"
    ],
    examSkills: [
      "Phân tích đoạn mã Python/Pascal/C++ và dự đoán chính xác giá trị các biến",
      "Xác định chính xác chỉ số phần tử trong mảng 1D và ma trận 2D",
      "Phát hiện lỗi tràn chỉ số (IndexError / Out of bounds) trong đoạn mã cho trước",
      "Giải quyết các bài tập mô phỏng đầu ra đoạn mã mảng trong đề thi THPT 2026"
    ],
    practice: [
      "10 bài tập Trace (theo dõi từng bước thực thi) trên mã mảng 1D và 2D",
      "8 bài tập viết code Python ngắn: Tính tổng số dương, đếm số chẵn, tìm max mảng",
      "2 bài tập thực tế: Quản lí bảng điểm thi 2D (Mỗi hàng là 1 học sinh, mỗi cột là 1 môn)",
      "Bài tập phân tích lỗi chỉ số vòng lặp `for i in range(1, len(a)+1)`"
    ],
    sourceIds: ["kgv-cs11", "vietjack-array11", "gov-2026-exam"],
    lectureContent: b17Content
  },
  {
    id: "b18",
    lesson: "Bài 18",
    title: "Thực hành dữ liệu mảng một chiều và hai chiều",
    priority: "critical",
    hours: 3,
    mustKnow: [
      "Các mẫu thiết kế thuật toán duyệt mảng chuẩn (Iterative Patterns)",
      "Kỹ thuật lọc và tạo mảng mới thỏa điều kiện (Filtering)",
      "Kỹ thuật biến đổi mảng (Mapping / Transformation)",
      "Xử lý các đường chéo trong ma trận vuông: Đường chéo chính (r == c), đường chéo phụ (r + c == n - 1)",
      "Tách chương trình thành các hàm nhận mảng làm tham số và trả về kết quả"
    ],
    codeSkills: [
      "Chuyển đổi yêu cầu bài toán thực tế thành mã lệnh xử lý mảng",
      "Xây dựng bộ dữ liệu thử nghiệm (Test inputs) để tự kiểm tra mã nguồn",
      "Viết hàm tìm học sinh có điểm trung bình cao nhất từ ma trận điểm",
      "Xử lý các phép toán chuyển vị ma trận cơ bản"
    ],
    examSkills: [
      "Đọc hiểu đoạn chương trình phức tạp có cấu trúc mảng 2D lồng nhau",
      "Nhận diện điều kiện dừng hoặc điều kiện lọc bị viết sai trong đề bài",
      "Đánh giá và đề xuất cách tối ưu mã nguồn duyệt mảng"
    ],
    practice: [
      "Bộ 12 bài tập thực hành mã nguồn mảng 1D và 2D từ Dễ đến Khó",
      "Mini-project 1: Xây dựng hệ thống Thống kê và Phân loại học sinh từ ma trận điểm thi",
      "Bài tập tìm phần tử Yên ngựa (Saddle point) trong ma trận 2D",
      "Bài tập tính tổng các phần tử nằm trên biên của ma trận"
    ],
    sourceIds: ["kgv-cs11", "vietjack-array11"],
    lectureContent: b18Content
  },
  {
    id: "b19",
    lesson: "Bài 19",
    title: "Bài toán tìm kiếm",
    priority: "critical",
    hours: 2.5,
    mustKnow: [
      "Khái niệm bài toán tìm kiếm và ý nghĩa trong xử lý dữ liệu",
      "Thuật toán Tìm kiếm tuần tự (Sequential / Linear Search): Ý tưởng, các bước thực hiện, số lần so sánh tối đa $N$",
      "Thuật toán Tìm kiếm nhị phân (Binary Search): Ý tưởng chia đôi khoảng tìm kiếm, điều kiện bắt buộc mảng ĐÃ ĐƯỢC SẮP XẾP",
      "So sánh hiệu năng giữa Tìm kiếm tuần tự ($O(N)$) và Tìm kiếm nhị phân ($O(\log_2 N)$)",
      "Xử lý các trường hợp kết quả: Trả về chỉ số vị trí tìm thấy hoặc trả về $-1$ / `None` nếu không tìm thấy"
    ],
    codeSkills: [
      "Minh họa từng bước chạy (Trace step-by-step) thuật toán tìm kiếm trên dãy số nhỏ",
      "Cài đặt hàm tìm kiếm tuần tự bằng Python",
      "Cài đặt hàm tìm kiếm nhị phân với 2 con trỏ `left`, `right` và chỉ số giữa `mid`",
      "Xử lý chính xác điều kiện dừng vòng lặp `while left <= right:`"
    ],
    examSkills: [
      "Đếm chính xác số lần so sánh trong thuật toán tìm kiếm tuần tự / nhị phân",
      "Dự đoán giá trị các biến chỉ số (`left`, `right`, `mid`) sau $k$ bước lặp",
      "Lựa chọn thuật toán tìm kiếm phù hợp nhất dựa trên đặc điểm dữ liệu đầu vào",
      "Giải bài tập Trắc nghiệm & Đúng/Sai về thuật toán tìm kiếm trong đề thi 2026"
    ],
    practice: [
      "10 bài tập Trace thuật toán Tìm kiếm nhị phân trên dãy 8-16 phần tử",
      "6 bài tập viết mã hàm tìm kiếm bằng Python",
      "4 câu bài tập tình huống: Khi nào nên áp dụng Tìm kiếm nhị phân?",
      "Bài tập so sánh số bước tìm kiếm giữa dãy 1.000.000 phần tử (1 triệu bước vs 20 bước)"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "nxbgd-training"],
    lectureContent: b19Content
  },
  {
    id: "b20",
    lesson: "Bài 20",
    title: "Thực hành bài toán tìm kiếm",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Biến thể tìm kiếm: Tìm vị trí xuất hiện đầu tiên, vị trí xuất hiện cuối cùng",
      "Tìm kiếm theo điều kiện phức tạp (Tìm sản phẩm có giá trong khoảng [X, Y], tìm học sinh thỏa tiêu chí)",
      "Tìm kiếm và thu thập danh sách TẤT CẢ các chỉ số thỏa mãn yêu cầu",
      "Thiết kế bộ dữ liệu kiểm thử biên cho thuật toán tìm kiếm (Phần tử ở đầu mảng, cuối mảng, không có trong mảng)"
    ],
    codeSkills: [
      "Viết mã Python giải quyết các bài toán tìm kiếm thực tế",
      "Tách hàm tìm kiếm riêng biệt và tái sử dụng trong chương trình chính",
      "Bắt lỗi và xử lý ngoại lệ khi dữ liệu đầu vào rỗng hoặc không đúng định dạng"
    ],
    examSkills: [
      "Phát hiện lỗi logic trong thuật toán tìm kiếm nhị phân (ví dụ: tính sai `mid`, quên cập nhật `left/right`)",
      "Xác định bộ dữ liệu kiểm thử (Test case) giúp làm bộc lộ lỗi sai trong mã nguồn"
    ],
    practice: [
      "8 bài tập lập trình thực hành tìm kiếm trên tập dữ liệu danh sách đối tượng",
      "1 bảng Error Log chuyên đề: 5 lỗi kinh điển khi viết Tìm kiếm nhị phân",
      "Bài tập ứng dụng tìm kiếm sản phẩm theo mã ISBN trong danh mục thư viện"
    ],
    sourceIds: ["kgv-cs11", "kgv-focus11"],
    lectureContent: b20Content
  },
  {
    id: "b21",
    lesson: "Bài 21",
    title: "Các thuật toán sắp xếp đơn giản",
    priority: "critical",
    hours: 3,
    mustKnow: [
      "Khái niệm bài toán sắp xếp và ý nghĩa của việc sắp xếp dữ liệu",
      "Thuật toán Sắp xếp nổi bọt (Bubble Sort): Ý tưởng so sánh đổi chỗ 2 phần tử kề nhau, đẩy phần tử lớn nhất về cuối",
      "Thuật toán Sắp xếp chọn (Selection Sort): Ý tưởng tìm phần tử nhỏ nhất trong phần chưa sắp và đưa về đầu",
      "Thuật toán Sắp xếp chèn (Insertion Sort): Ý tưởng chèn phần tử hiện tại vào đúng vị trí trong dãy đã sắp trước đó",
      "So sánh 3 thuật toán: Số lượt so sánh, số lần đổi chỗ (Swap), cấu trúc 2 vòng lặp lồng nhau $O(N^2)$"
    ],
    codeSkills: [
      "Trace chi tiết trạng thái mảng sau từng lượt (Pass) của Bubble / Selection / Insertion Sort",
      "Cài đặt thuật toán hoán đổi vị trí 2 phần tử (Swap: `a[i], a[j] = a[j], a[i]`)",
      "Cài đặt mã Python hoàn chỉnh cho 3 thuật toán sắp xếp đơn giản",
      "Thay đổi điều kiện so sánh để sắp xếp tăng dần hoặc giảm dần"
    ],
    examSkills: [
      "Xác định chính xác trạng thái của mảng sau $k$ lượt lặp trong đề thi",
      "So sánh ưu nhược điểm và số lần hoán đổi giữa các thuật toán sắp xếp",
      "Nhận diện lỗi sai trong điều kiện vòng lặp hoặc điều kiện hoán đổi giá trị",
      "Giải quyết dạng câu hỏi Đúng/Sai về thuật toán sắp xếp trong đề thi THPT 2026"
    ],
    practice: [
      "12 bài tập Trace trạng thái mảng qua từng bước sắp xếp (Bubble, Selection, Insertion)",
      "6 bài tập viết code Python sắp xếp mảng số và mảng chuỗi ký tự",
      "4 cụm câu hỏi Đúng/Sai đánh giá về tính ổn định và số phép toán của thuật toán sắp xếp",
      "Bài tập so sánh số lần hoán đổi dữ liệu giữa Bubble Sort và Selection Sort"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "vietjack-array11"],
    lectureContent: b21Content
  },
  {
    id: "b22",
    lesson: "Bài 22",
    title: "Thực hành bài toán sắp xếp",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Cài đặt đúng các thuật toán sắp xếp trên ngôn ngữ Python",
      "Kỹ thuật sắp xếp danh sách đối tượng theo khóa (Key) chỉ định (ví dụ: Sắp xếp học sinh theo Điểm TB, nếu bằng điểm thì theo Tên)",
      "Kiểm tra và xử lý dữ liệu đặc biệt: Mảng đã sắp xếp sẵn, mảng ngược chiều, mảng chứa nhiều giá trị trùng nhau"
    ],
    codeSkills: [
      "Lập trình sắp xếp danh sách gồm các bản ghi (Dictionary / List of Lists)",
      "Sử dụng hàm sắp xếp có sẵn của Python (`sort()`, `sorted()`) và so sánh kết quả với thuật toán tự cài đặt",
      "Đo đạc thời gian thực thi của các thuật toán trên mảng kích thước lớn"
    ],
    examSkills: [
      "Lựa chọn các bộ dữ liệu kiểm thử (Test cases) tối ưu cho thuật toán sắp xếp",
      "Dự đoán lỗi tràn chỉ số hoặc lỗi vòng lặp vô hạn khi viết thuật toán sắp xếp"
    ],
    practice: [
      "8 bài tập lập trình thực hành sắp xếp danh sách học sinh / sản phẩm",
      "1 bài kiểm tra nhỏ 20 phút: Viết và kiểm thử hàm sắp xếp giảm dần theo tiêu chí kép",
      "Bài tập thực tế: Sắp xếp bảng xếp hạng bóng đá theo Điểm -> Hiệu số -> Số bàn thắng"
    ],
    sourceIds: ["kgv-cs11", "kgv-focus11"],
    lectureContent: b22Content
  },
  {
    id: "b23",
    lesson: "Bài 23",
    title: "Kiểm thử và đánh giá chương trình",
    priority: "critical",
    hours: 3,
    mustKnow: [
      "Khái niệm Kiểm thử phần mềm (Software Testing) và mục đích tìm lỗi (Bug)",
      "Phân loại các loại lỗi chương trình: Lỗi cú pháp (Syntax Error), Lỗi ngoại lệ khi chạy (Runtime Error), Lỗi logic (Logic Error)",
      "Khái niệm Bộ kiểm thử (Test cases): Dữ liệu đầu vào (Input) và Kết quả kì vọng (Expected Output)",
      "Các nhóm dữ liệu kiểm thử bắt buộc: Dữ liệu thông thường (Normal), Dữ liệu biên (Boundary), Dữ liệu đặc biệt (Edge/Special cases)",
      "Quy trình gỡ lỗi (Debugging): Khoanh vùng lỗi, sử dụng câu lệnh in `print()`, kiểm tra giá trị biến"
    ],
    codeSkills: [
      "Xây dựng bảng bộ kiểm thử (Test Suite) cho một hàm hoặc bài toán cụ thể",
      "Đọc thông báo lỗi ngoại lệ của Python (Traceback) để xác định dòng mã bị lỗi",
      "Đặt các câu lệnh kiểm tra (Assertions / Debug prints) để theo dõi luồng thực thi"
    ],
    examSkills: [
      "Xác định bộ Test case có khả năng làm phát hiện lỗi sai trong đoạn mã nhất",
      "Phân loại chính xác loại lỗi (Cú pháp, Runtime, Logic) từ thông báo hoặc mô tả tình huống",
      "Giải thích lý do tại sao một bộ kiểm thử lại đạt hoặc không đạt chất lượng",
      "Giải bài tập Trắc nghiệm & Đúng/Sai về Kiểm thử chương trình trong đề thi 2026"
    ],
    practice: [
      "10 bài tập phân tích đoạn mã Python có chứa lỗi và chỉ ra nguyên nhân lỗi",
      "Thiết kế bảng 5 bộ Test cases (gồm Input + Expected Output) cho 6 hàm bài toán khác nhau",
      "Bài tập thực hành Debug mã nguồn tìm giá trị lớn nhất trong mảng bị sót trường hợp số âm",
      "Case study: Phân tích hậu quả của một lỗi Logic Error trong ứng dụng thực tế"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "nxbgd-training"],
    lectureContent: b23Content
  },
  {
    id: "b24",
    lesson: "Bài 24",
    title: "Đánh giá độ phức tạp thời gian thuật toán",
    priority: "critical",
    hours: 3,
    mustKnow: [
      "Khái niệm Kích thước đầu vào $n$ (Input size) của bài toán",
      "Đếm số phép tính cơ bản (Phép gán, phép so sánh, phép tính số học) theo $n$",
      "Khái niệm Bậc tăng trưởng (Rate of Growth) và Ký hiệu O-lớn (Big-O Notation)",
      "Các độ phức tạp thời gian thông dụng: $O(1)$, $O(\log n)$, $O(n)$, $O(n \log n)$, $O(n^2)$, $O(2^n)$",
      "Quy tắc đánh giá độ phức tạp thời gian trực quan: Vòng lặp đơn $O(n)$, 2 vòng lặp lồng nhau $O(n^2)$, Chia đôi $O(\log n)$"
    ],
    codeSkills: [
      "Đếm số phép tính thực hiện của một đoạn mã lệnh Python đơn giản",
      "Nhìn nhanh cấu trúc vòng lặp để đưa ra đánh giá độ phức tạp $O(n)$ hay $O(n^2)$",
      "So sánh hiệu năng của 2 giải pháp lập trình khác nhau cho cùng một bài toán"
    ],
    examSkills: [
      "Lựa chọn thuật toán có độ phức tạp thời gian tối ưu hơn trong các phương án",
      "Suy luận sự thay đổi số phép toán khi kích thước dữ liệu $n$ tăng gấp đôi hay gấp 10 lần",
      "Xác định độ phức tạp Big-O của các thuật toán tìm kiếm và sắp xếp đã học",
      "Trả lời câu hỏi trắc nghiệm độ phức tạp thuật toán trong đề thi tốt nghiệp THPT"
    ],
    practice: [
      "15 bài tập xác định độ phức tạp Big-O cho các đoạn mã Python cho trước",
      "Bảng so sánh thời gian thực hiện giữa $O(n)$ và $O(n^2)$ khi $n = 1.000$ và $n = 1.000.000$",
      "4 câu hỏi lý thuyết so sánh thời gian chạy giữa Tìm kiếm tuần tự vs Tìm kiếm nhị phân",
      "Bài tập phân tích độ phức tạp thời gian của thuật toán Sắp xếp nổi bọt (Bubble Sort)"
    ],
    sourceIds: ["kgv-cs11", "gov-2026-exam", "nxbgd-training"],
    lectureContent: b24Content
  },
  {
    id: "b25",
    lesson: "Bài 25",
    title: "Thực hành xác định độ phức tạp thời gian thuật toán",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Phân tích độ phức tạp thời gian của đoạn mã chứa các vòng lặp độc lập ($O(n + m)$)",
      "Phân tích độ phức tạp thời gian của đoạn mã chứa các vòng lặp lồng nhau không đều",
      "Mối liên hệ giữa độ phức tạp thời gian và dung lượng bộ nhớ dữ liệu đầu vào",
      "Kỹ thuật tối ưu hóa mã nguồn: Tránh tính toán lặp lại trong vòng lặp"
    ],
    codeSkills: [
      "Sử dụng thư viện `time` trong Python (`time.time()`) để đo thời gian chạy thực tế",
      "Vẽ đồ thị đơn giản hoặc lập bảng so sánh thời gian thực thi với các giá trị $n$ tăng dần",
      "Cải tiến đoạn mã từ độ phức tạp $O(n^2)$ xuống $O(n)$ cho bài toán tính tổng"
    ],
    examSkills: [
      "So sánh và đánh giá các phương án lập trình trong câu hỏi bối cảnh đề thi",
      "Loại bỏ các phương án nhiễu dựa trên phân tích bậc tăng trưởng độ phức tạp"
    ],
    practice: [
      "12 bài tập trắc nghiệm phân tích độ phức tạp cho các đoạn mã thực hành",
      "2 bài tập thực hành cải tiến đoạn mã Python: Từ 2 vòng lặp lồng nhau thành 1 vòng lặp",
      "Bài tập đo đạc thời gian chạy thực tế của Tìm kiếm nhị phân với mảng 10 triệu phần tử"
    ],
    sourceIds: ["kgv-cs11", "kgv-focus11"]
  },
  {
    id: "b26",
    lesson: "Bài 26",
    title: "Phương pháp làm mịn dần trong thiết kế chương trình",
    priority: "high",
    hours: 2,
    mustKnow: [
      "Khái niệm Phương pháp làm mịn dần (Stepwise Refinement / Top-down Design)",
      "Ý tưởng: Phân rã bài toán lớn thành các bài toán con / mô-đun nhỏ hơn, dễ quản lí hơn",
      "Xác định Hợp đồng hàm (Function Contract): Tên hàm, Đầu vào (Parameters), Đầu ra (Return Value), Chức năng",
      "Tầm quan trọng của việc thiết kế chương trình trước khi bắt tay vào viết mã nguồn",
      "Tái sử dụng mã nguồn và tính độc lập giữa các mô-đun hàm"
    ],
    codeSkills: [
      "Phân rã bài toán quản lí / thống kê thành sơ đồ cây các hàm con",
      "Khai báo các khung hàm (Stub functions) trong Python với câu lệnh `pass` hoặc `return` mặc định",
      "Viết tài liệu mô tả chức năng (Docstring) cho từng hàm trong chương trình"
    ],
    examSkills: [
      "Sắp xếp đúng thứ tự các bước trong quy trình thiết kế chương trình theo phương pháp làm mịn dần",
      "Lựa chọn cách phân rã bài toán hợp lí nhất cho tình huống mô tả trong đề thi",
      "Đánh giá tính đúng đắn của giao diện hàm (Input/Output parameters)"
    ],
    practice: [
      "Bài tập thiết kế chương trình Quản lí bảng điểm học sinh bằng phương pháp làm mịn dần",
      "Bài tập phân rã bài toán Game Đoán số thành 4 hàm mô-đun độc lập",
      "Sơ đồ cấu trúc mô-đun cho bài toán Thống kê từ vựng trong văn bản"
    ],
    sourceIds: ["kgv-cs11", "nxbgd-training"]
  },
  {
    id: "b27",
    lesson: "Bài 27",
    title: "Thực hành thiết kế chương trình theo phương pháp làm mịn dần",
    priority: "high",
    hours: 3,
    mustKnow: [
      "Quy trình phát triển phần mềm hoàn chỉnh: Yêu cầu -> Phân rã mô-đun -> Thiết kế thuật toán -> Viết mã -> Kiểm thử",
      "Tích hợp các mô-đun hàm (Module Integration) và kiểm thử tích hợp (Integration Testing)",
      "Quản lí và hoàn thiện dự án lập trình nhỏ (Mini-project)",
      "Đánh giá chất lượng mã nguồn: Rõ ràng, dễ đọc, có chú thích, đặt tên biến/hàm gợi nhớ"
    ],
    codeSkills: [
      "Hoàn thiện mã nguồn đầy đủ cho một dự án lập trình 2 buổi học",
      "Thực hiện Code Review (Đánh giá mã nguồn) giữa các học sinh",
      "Viết mã kiểm thử tích hợp chạy thử toàn bộ luồng hoạt động của ứng dụng"
    ],
    examSkills: [
      "Đọc hiểu cấu trúc tổng thể của một chương trình lớn gồm nhiều hàm",
      "Nhận diện hàm con phù hợp để thay thế hoặc sửa lỗi khi yêu cầu nghiệp vụ thay đổi"
    ],
    practice: [
      "Mini-project thực hành 2 buổi: Xây dựng Chương trình Quản lí Thư viện sách mini hoặc Bảng điểm lớp học",
      "Bảng Tiêu chí chấm điểm (Rubric) đánh giá dự án lập trình theo 5 tiêu chí chuẩn",
      "Bài tập thực hành mở rộng dự án: Thêm tính năng Tìm kiếm và Sắp xếp vào chương trình đã có"
    ],
    sourceIds: ["kgv-cs11", "nxbgd-training"]
  }
]
