/**
 * Dữ liệu bài giảng Bài 7: Thực hành tìm kiếm thông tin trên Internet
 * Giáo trình gia sư Tin học 11 – Kết nối tri thức (Thời lượng: 90 phút)
 * Định hướng: Kiến thức cốt lõi chung (CS & ICT)
 */
export const b7Content = {
  warmUp: {
    question: "Vì sao cùng một chủ đề cần tìm, có bạn chỉ mất 10 giây đã tìm đúng tài liệu PDF chính thức của Bộ Giáo dục, trong khi bạn khác tìm cả tiếng đồng hồ vẫn ngập trong kết quả quảng cáo và các trang web giải bài tập rác?",
    description: "Câu trả lời là: Kỹ năng tìm kiếm có phương pháp và làm chủ các toán tử tìm kiếm nâng cao! Hầu hết mọi người tìm kiếm theo bản năng tự nhiên (gõ cả câu hỏi dài dòng). Bài học này sẽ trang bị cho em 5 toán tử tìm kiếm quyền năng của Google (ngoặc kép \"\", site:, filetype:, dấu trừ -, OR), phương pháp đánh giá độ tin cậy của nguồn tin và quy tắc trích dẫn chuẩn mực để biến Internet thành một thư viện học tập đắc lực."
  },
  sections: [
    {
      id: "sec-1",
      title: "I & II. Mục Tiêu Buổi Học & Khung Phân Bổ 90 Phút",
      subsections: [
        {
          heading: "1. Mục tiêu buổi học – Chuẩn năng lực gia sư",
          points: [
            "Hiểu nguyên lý vận hành cơ bản của máy tìm kiếm (Search Engine): Thu thập dữ liệu (Crawling) ➜ Đánh chỉ mục (Indexing) ➜ Xếp hạng kết quả (Ranking).",
            "Nắm vững kỹ thuật lựa chọn từ khóa cốt lõi (Keywords): Cô đọng, chính xác, loại bỏ hoàn toàn các hư từ giao tiếp không cần thiết.",
            "Thành thạo 5 toán tử tìm kiếm nâng cao trên Google: Dấu ngoặc kép \"...\", site:, filetype:, dấu trừ (-), và toán tử OR.",
            "Biết cách sử dụng các bộ lọc công cụ (Search Tools): Giới hạn mốc thời gian (24h, 1 tuần, 1 năm), khu vực địa lý, ngôn ngữ và Google Scholar.",
            "Nắm vững 5 tiêu chí đánh giá độ tin cậy của nguồn thông tin trên Internet (Tác giả, Tên miền/Cơ quan xuất bản, Tính thời sự, Bằng chứng đối chiếu, Mục đích).",
            "Hiểu quy tắc trích dẫn nguồn thông tin chuẩn mực và ý thức tôn trọng bản quyền tác giả, tránh đạo văn trong học tập."
          ]
        },
        {
          heading: "2. Khung phân bổ thời gian buổi học 90 phút",
          points: [
            "0–8 phút: Ôn Bài 6 + Tình huống khởi động phân biệt tìm kiếm thường vs tìm kiếm nâng cao.",
            "8–22 phút: Nguyên lý Search Engine & Kỹ thuật chọn từ khóa cô đọng.",
            "22–40 phút: 5 Cú pháp toán tử tìm kiếm nâng cao (\"\", site:, filetype:, -, OR).",
            "40–50 phút: Bộ lọc công cụ & 5 tiêu chí đánh giá độ tin cậy nguồn tin.",
            "50–55 phút: Quy tắc trích dẫn nguồn, tôn trọng bản quyền & Chống đạo văn.",
            "55–82 phút: 10 bài luyện tập thực hành tình huống trực tiếp.",
            "82–87 phút: Mini Test 6 câu trắc nghiệm đánh giá chuẩn đầu ra.",
            "87–90 phút: Tổng kết 8 kiến thức cốt lõi và giao nhiệm vụ về nhà."
          ]
        }
      ],
      calloutBox: {
        type: "quote",
        title: "Tình huống Khởi động Đặt vấn đề",
        text: "Gia sư đặt câu hỏi: 'Em cần tìm file Word hoặc PDF đề thi học kỳ 1 môn Tin học 11 chính thức của các trường THPT có đuôi tên miền .edu.vn (không kèm lời giải chi tiết để tự luyện). Em sẽ gõ vào ô tìm kiếm Google câu gì?' ➜ Mục tiêu: Học sinh nhận thấy sự bất lực của cách tìm kiếm thông thường và hào hứng tiếp cận các toán tử chuyên nghiệp: '\"đề thi học kỳ 1\" \"tin học 11\" site:.edu.vn filetype:pdf -\"đáp án\"'."
      }
    },
    {
      id: "sec-2",
      title: "III.1 & III.2. Nguyên Lý Máy Tìm Kiếm & Kỹ Thuật Chọn Từ Khóa Cô Đọng",
      subsections: [
        {
          heading: "1. Nguyên lý hoạt động của Máy tìm kiếm (Search Engine)",
          text: "Google hay Bing hoạt động dựa trên 3 giai đoạn tự động liên tục:",
          points: [
            "Giai đoạn 1 – Thu thập dữ liệu (Crawling): Các chương trình robot tự động (Spider/Bot) liên tục duyệt qua hàng tỷ trang web trên Internet theo các đường liên kết để quét nội dung.",
            "Giai đoạn 2 – Đánh chỉ mục (Indexing): Hệ thống phân tích văn bản, hình ảnh, từ khóa và tổ chức lưu vào một cơ sở dữ liệu khổng lồ gọi là 'Mục lục Internet' (Index).",
            "Giai đoạn 3 – Xếp hạng kết quả (Ranking): Khi người dùng gõ từ khóa, thuật toán sẽ đối chiếu với cơ sở dữ liệu và tính toán điểm phù hợp, độ uy tín của website để sắp xếp các kết quả tốt nhất lên đầu trang trong 0.2 giây."
          ]
        },
        {
          heading: "2. Kỹ thuật lựa chọn từ khóa cốt lõi (Keywords)",
          text: "Máy tìm kiếm đối chiếu các từ khóa danh từ, không phân tích ngữ pháp câu hỏi tự nhiên:",
          points: [
            "Quy tắc 1: Chọn lọc các DANH TỪ hoặc CỤM DANH TỪ cốt lõi chỉ nội dung chính.",
            "Quy tắc 2: Loại bỏ hoàn toàn các HƯ TỪ giao tiếp (là gì, làm sao, ở đâu, như thế nào, giúp em với, xin chào...).",
            "Quy tắc 3: Ưu tiên sử dụng các THUẬT NGỮ CHUYÊN NGÀNH chuẩn xác thay cho từ ngữ văn nói đời thường.",
            "Ví dụ chuyển đổi:\n  ❌ Câu hỏi tự nhiên: 'Làm thế nào để tính diện tích của hình thang cân vậy mọi người?'\n  ✅ Từ khóa cô đọng: 'công thức diện tích hình thang cân'\n  ❌ Câu hỏi tự nhiên: 'Tại sao máy tính của tôi bị giật lag khi chơi game?'\n  ✅ Từ khóa cô đọng: 'nguyên nhân máy tính giật lag khi chơi game'"
          ]
        }
      ],
      comparisonTable: {
        headers: ["Nhu cầu tìm kiếm", "Cách gõ theo bản năng (Kém hiệu quả)", "Từ khóa cô đọng chuẩn mực (Tối ưu)"],
        rows: [
          ["Tra cứu cấu trúc CPU", "Bên trong CPU máy tính gồm những bộ phận nào thế?", "cấu trúc CPU ALU CU thanh ghi"],
          ["Tìm giáo án Tin học 11", "Ai có giáo án Tin 11 Kết nối tri thức cho mình xin với", "giáo án Tin học 11 Kết nối tri thức"],
          ["Tìm tài liệu mạng máy tính", "Làm sao để biết mạng LAN khác mạng WAN ở chỗ nào", "so sánh mạng LAN và WAN"],
          ["Tra cứu công thức Excel", "Chỉ em cách dùng hàm tính điểm trung bình trong Excel", "cách dùng hàm AVERAGE Excel"]
        ]
      }
    },
    {
      id: "sec-3",
      title: "III.3. Năm Toán Tử Tìm Kiếm Nâng Cao Cốt Lõi Trên Google",
      subsections: [
        {
          heading: "1. Danh mục 5 toán tử quyền năng cần thuộc lòng",
          text: "Sử dụng toán tử giúp thu hẹp phạm vi tìm kiếm từ hàng triệu kết quả rác xuống còn vài chục kết quả chính xác 100%:",
          points: [
            "1. Dấu ngoặc kép \"...\": Khóa cứng cụm từ chính xác. Máy tìm kiếm bắt buộc phải tìm các trang chứa đúng cụm từ đó theo đúng thứ tự các từ, không được tách rời hay đảo từ.",
            "2. Toán tử site:[tên_miền]: Giới hạn phạm vi tìm kiếm chỉ bên trong một website cụ thể (như site:moet.gov.vn) hoặc một nhóm tên miền (như site:.edu.vn, site:.gov.vn).",
            "3. Toán tử filetype:[phần_mở_rộng]: Chỉ tìm kiếm các tệp tin có định dạng cụ thể (như filetype:pdf, filetype:docx, filetype:pptx, filetype:xlsx).",
            "4. Dấu trừ -[từ_khóa]: Loại trừ triệt để các kết quả chứa từ khóa đứng ngay sau dấu trừ (Lưu ý: dấu trừ phải viết liền không dấu cách với từ cần loại trừ).",
            "5. Toán tử OR (phải viết hoa chữ OR): Tìm kiếm các trang chứa ít nhất một trong hai từ khóa (mở rộng kết quả tìm kiếm theo điều kiện HOẶC)."
          ]
        }
      ],
      comparisonTable: {
        headers: ["Toán tử", "Cú pháp mẫu", "Ý nghĩa & Tác dụng", "Ví dụ truy vấn thực tế"],
        rows: [
          ["Ngoặc kép \" \"", "\"cụm từ chính xác\"", "Khóa cụm từ, giữ đúng thứ tự từ, không tách rời", "\"bộ xử lý trung tâm CPU\""],
          ["site:", "site:domain từ_khóa", "Chỉ tìm kiếm bên trong 1 website hoặc tên miền chỉ định", "site:moet.gov.vn \"Tin học 11\""],
          ["filetype:", "filetype:ext từ_khóa", "Chỉ trả về các tệp tin có định dạng chỉ định (pdf, docx, pptx)", "\"kiến trúc máy tính\" filetype:pdf"],
          ["Dấu trừ -", "từ_khóa -từ_loại_trừ", "Loại bỏ hoàn toàn các trang chứa từ khóa không mong muốn", "python -snake (tìm ngôn ngữ Python, loại con rắn)"],
          ["Toán tử OR", "từ_A OR từ_B", "Tìm trang chứa từ A HOẶC từ B (chữ OR phải viết hoa)", "\"Tin học 11\" \"Kết nối tri thức\" OR \"Cánh diều\""]
        ]
      }
    },
    {
      id: "sec-4",
      title: "III.4 & III.5. Đánh Giá Độ Tin Cậy Của Nguồn Tin & Quy Tắc Trích Dẫn Chuẩn",
      subsections: [
        {
          heading: "1. Năm tiêu chí vàng đánh giá độ tin cậy của thông tin (Bộ tiêu chí thẩm định)",
          text: "Trước khi sử dụng bất kỳ thông tin nào trên Internet vào học tập hay đời sống, học sinh phải kiểm tra qua 5 tiêu chí:",
          points: [
            "1. Tác giả (Author): Tác giả bài viết là ai? Có phải chuyên gia trong ngành, giáo viên hay nhà nghiên cứu có uy tín không? Bài viết có ghi rõ danh tính không?",
            "2. Tên miền & Cơ quan xuất bản (Domain / Publisher): Bài viết đăng trên website nào? Ưu tiên tuyệt đối các tên miền chính thống: .gov.vn (Chính phủ), .edu.vn (Giáo dục/Đại học), các viện nghiên cứu và cơ quan báo chí chính thống.",
            "3. Tính thời sự (Currency / Date): Bài viết được đăng hoặc cập nhật vào thời gian nào? Thông tin có bị lỗi thời so với hiện tại không?",
            "4. Tính chính xác & Bằng chứng (Accuracy / Evidence): Số liệu, luận điểm có được trích dẫn nguồn gốc rõ ràng từ các tài liệu khoa học không? Có thể kiểm chứng chéo (Cross-check) trên các trang tin uy tín khác không?",
            "5. Mục đích bài viết (Purpose): Bài viết nhằm mục đích giáo dục, cung cấp kiến thức khách quan hay nhằm mục đích quảng cáo bán hàng, giật tít câu view, lừa đảo?"
          ]
        },
        {
          heading: "2. Phân cấp mức độ tin cậy của các tên miền Internet",
          text: "Bảng xếp hạng mức độ uy tín của các nguồn thông tin mạng:",
          points: [
            "Hạng 1 (Độ tin cậy Tuyệt đối): .gov.vn, .gov (Cơ quan nhà nước, Bộ ngành) | .edu.vn, .edu (Trường đại học, Tổ chức giáo dục) | Các tổ chức quốc tế (.org như un.org, who.int).",
            "Hạng 2 (Độ tin cậy Khá cao): Các cơ quan thông tấn báo chí chính thống có giấy phép hoạt động (VnExpress, Tuổi Trẻ, Thanh Niên, Nhân Dân...).",
            "Hạng 3 (Cần thẩm định kỹ): Các website thương mại (.com, .vn), diễn đàn học tập, trang hỏi đáp cộng đồng (Vietjack, Hoc247, Quora...).",
            "Hạng 4 (Không dùng làm dẫn chứng học thuật): Các bài đăng trên mạng xã hội cá nhân (Facebook, TikTok, blog cá nhân ẩn danh, diễn đàn không kiểm duyệt)."
          ]
        },
        {
          heading: "3. Quy tắc trích dẫn nguồn chuẩn mực & Tôn trọng bản quyền",
          text: "Khi sử dụng tư liệu từ Internet vào bài tập báo cáo hoặc slide thuyết trình:",
          points: [
            "Quy tắc 1 (Diễn đạt lại - Paraphrase): Đọc hiểu thông tin và diễn giải lại bằng lời văn của chính mình, tuyệt đối không copy-paste nguyên văn (hành vi đạo văn).",
            "Quy tắc 2 (Ghi nguồn tham khảo): Cuối bài viết luôn có mục 'Tài liệu tham khảo' ghi rõ: [Tên tác giả] (Năm xuất bản), 'Tên bài viết', Tên website, Đường dẫn URL và [Ngày truy cập].",
            "Ví dụ mẫu trích dẫn: Bộ Giáo dục và Đào tạo (2023), 'Chương trình giáo dục phổ thông môn Tin học', Cổng thông tin điện tử Bộ GD&ĐT, https://moet.gov.vn, truy cập ngày 25/08/2026."
          ]
        }
      ],
      flowList: [
        {
          title: "Quy Trình 4 Bước Tìm Kiếm & Xác Thực Thông Tin Trên Internet Chuẩn Mực",
          subtitle: "Phương pháp nghiên cứu học tập khoa học và an toàn trên không gian số",
          steps: [
            {
              num: 1,
              title: "1. Xác định từ khóa",
              desc: "Chọn danh từ cốt lõi, loại bỏ hư từ, xác định dạng file (PDF/Word) và nguồn cần tìm."
            },
            {
              num: 2,
              title: "2. Xây dựng cú pháp nâng cao",
              desc: "Kết hợp ngoặc kép \"\", toán tử site:, filetype: và dấu trừ - để lọc sạch kết quả rác."
            },
            {
              num: 3,
              title: "3. Thẩm định 5 tiêu chí",
              desc: "Kiểm tra Tác giả, Tên miền (.edu/.gov), Ngày đăng, Dẫn chứng số liệu và Mục đích bài viết."
            },
            {
              num: 4,
              title: "4. Tổng hợp & Trích dẫn",
              desc: "Diễn đạt lại bằng lời văn cá nhân và ghi đầy đủ nguồn tham khảo (Tác giả, Link, Ngày truy cập)."
            }
          ]
        }
      ]
    },
    {
      id: "sec-5",
      title: "VI. Chốt 8 Kiến Thức Cốt Lõi Buổi Học",
      checkpointCards: [
        {
          title: "1. TỪ KHÓA CÔ ĐỌNG (KEYWORDS)",
          detail: "Chọn danh từ cốt lõi, loại bỏ hoàn toàn hư từ giao tiếp (là gì, làm sao, ở đâu), dùng thuật ngữ chuyên môn."
        },
        {
          title: "2. NGOẶC KÉP \" \" = KHÓA CỤM TỪ",
          detail: "Tìm chính xác cụm từ, giữ nguyên thứ tự các từ, không bị tách rời hay đảo lộn từ ngữ."
        },
        {
          title: "3. SITE: = KHOANH VÙNG WEBSITE",
          detail: "Giới hạn phạm vi tìm kiếm trong 1 website hoặc 1 tên miền (ví dụ: site:moet.gov.vn, site:.edu.vn)."
        },
        {
          title: "4. FILETYPE: = LỌC ĐỊNH DẠNG TỆP",
          detail: "Chỉ tìm kiếm các tệp tin có đuôi định dạng cụ thể (filetype:pdf, filetype:docx, filetype:pptx)."
        },
        {
          title: "5. DẤU TRỪ (-) = LOẠI TRỪ TỪ RÁC",
          detail: "Loại bỏ các trang chứa từ khóa không mong muốn (viết liền sau dấu trừ, ví dụ: -quảng cáo, -\"đáp án\")."
        },
        {
          title: "6. TOÁN TỬ OR = ĐIỀU KIỆN HOẶC",
          detail: "Tìm kiếm các trang chứa ít nhất 1 trong 2 từ khóa (chữ OR bắt buộc phải viết hoa)."
        },
        {
          title: "7. 5 TIÊU CHÍ ĐỘ TIN CẬY",
          detail: "Tác giả, Tên miền (.gov/.edu), Tính thời sự, Bằng chứng đối chiếu và Mục đích bài viết."
        },
        {
          title: "8. TRÍCH DẪN & CHỐNG ĐẠO VĂN",
          detail: "Diễn đạt lại bằng lời văn cá nhân và ghi rõ nguồn: Tác giả, Tên bài, Đường link và Ngày truy cập."
        }
      ],
      mindmapText: `+-----------------------------------------------------------------------------------+
|               BÀI 7: THỰC HÀNH TÌM KIẾM THÔNG TIN TRÊN INTERNET                    |
+-----------------------------------------------------------------------------------+
       |
       +---> [1] KỸ THUẬT TỪ KHÓA (KEYWORDS)
       |       * Chọn danh từ/cụm danh từ cốt lõi
       |       * Loại bỏ hoàn toàn hư từ (là gì, làm sao, giúp với)
       |       * Dùng thuật ngữ chuyên môn chuẩn xác
       |
       +---> [2] 5 TOÁN TỬ TÌM KIẾM NÂNG CAO
       |       * "cụm từ"   : Khóa chính xác cụm từ theo đúng thứ tự
       |       * site:      : Giới hạn website / tên miền (site:.edu.vn)
       |       * filetype:  : Lọc định dạng tệp (filetype:pdf, docx, pptx)
       |       * -từ_loại   : Loại bỏ kết quả chứa từ không mong muốn
       |       * OR         : Tìm kiếm từ A HOẶC từ B (viết hoa chữ OR)
       |
       +---> [3] ĐÁNH GIÁ ĐỘ TIN CẬY (5 TIÊU CHÍ)
       |       * Tác giả (Chuyên gia/Tổ chức uy tín)
       |       * Tên miền (.gov.vn / .edu.vn ưu tiên số 1)
       |       * Tính thời sự (Ngày đăng mới nhất)
       |       * Bằng chứng (Số liệu có nguồn kiểm chứng chéo)
       |       * Mục đích (Giáo dục khách quan vs Quảng cáo câu view)
       |
       +---> [4] ĐẠO ĐỨC & TRÍCH DẪN NGUỒN
               * Diễn đạt lại (Paraphrase) - Không copy nguyên văn
               * Ghi nguồn chuẩn: Tác giả + Năm + Tên bài + URL + Ngày truy cập`
    }
  ],
  summaryQuiz: [
    {
      question: "Để tìm kiếm chính xác định dạng tài liệu PDF về bài giảng Hệ điều hành chỉ trong trang web của Bộ Giáo dục và Đào tạo (moet.gov.vn), cú pháp tìm kiếm nào sau đây là chuẩn xác nhất?",
      options: [
        "A. \"bài giảng Hệ điều hành\" filetype:pdf site:moet.gov.vn",
        "B. bài giảng Hệ điều hành type:pdf url:moet.gov.vn",
        "C. moet.gov.vn search \"bài giảng Hệ điều hành\" pdf",
        "D. site:pdf filetype:moet.gov.vn \"bài giảng Hệ điều hành\""
      ],
      answer: "A",
      explanation: "Toán tử ngoặc kép \"...\" khóa chính xác cụm từ, filetype:pdf lọc đúng định dạng tệp PDF, và site:moet.gov.vn giới hạn phạm vi tìm kiếm chỉ bên trong website moet.gov.vn."
    },
    {
      question: "Khi gõ truy vấn tìm kiếm: python -snake trên Google, kết quả trả về sẽ như thế nào?",
      options: [
        "A. Chỉ tìm các trang web nói về loài rắn Python.",
        "B. Tìm các trang web nói về ngôn ngữ lập trình Python và LOẠI BỎ hoàn toàn các trang chứa từ 'snake' (loài rắn).",
        "C. Tìm các trang web chứa đồng thời cả hai từ 'python' và 'snake'.",
        "D. Báo lỗi cú pháp vì không được dùng dấu trừ trong tìm kiếm."
      ],
      answer: "B",
      explanation: "Dấu trừ (-) đặt sát trước một từ khóa có tác dụng loại bỏ tất cả các kết quả tìm kiếm có chứa từ khóa đó. Truy vấn 'python -snake' giúp tìm tài liệu về ngôn ngữ lập trình Python mà không bị lẫn thông tin về loài trăn/rắn."
    },
    {
      question: "Khi tra cứu số liệu thống kê dân số và kinh tế xã hội Việt Nam để làm bài thuyết trình, nguồn thông tin nào sau đây có độ tin cậy cao nhất?",
      options: [
        "A. Một bài viết trên diễn đàn mạng xã hội không rõ tác giả.",
        "B. Website của Tổng cục Thống kê có tên miền gso.gov.vn.",
        "C. Một video ngắn trên TikTok có 1 triệu lượt xem.",
        "D. Trang web cá nhân chứa nhiều biểu ngữ quảng cáo game."
      ],
      answer: "B",
      explanation: "Website của Tổng cục Thống kê (gso.gov.vn) là cơ quan nhà nước chính thức phụ trách số liệu thống kê quốc gia, có tên miền .gov.vn được kiểm duyệt chặt chẽ, luôn có độ tin cậy tuyệt đối."
    },
    {
      question: "Học sinh muốn tìm kiếm tài liệu về sách giáo khoa Tin học 11 thuộc một trong hai bộ sách 'Kết nối tri thức' HOẶC 'Cánh diều', cú pháp nào sau đây là đúng?",
      options: [
        "A. \"Tin học 11\" \"Kết nối tri thức\" OR \"Cánh diều\"",
        "B. \"Tin học 11\" \"Kết nối tri thức\" or \"Cánh diều\"",
        "C. \"Tin học 11\" \"Kết nối tri thức\" HOAC \"Cánh diều\"",
        "D. \"Tin học 11\" \"Kết nối tri thức\" + \"Cánh diều\""
      ],
      answer: "A",
      explanation: "Toán tử OR trong Google bắt buộc phải viết in hoa (OR). Nếu viết thường chữ 'or', Google sẽ coi đó là một từ khóa tìm kiếm bình thường thay vì toán tử logic."
    },
    {
      question: "Hành vi nào sau đây được coi là đúng chuẩn mực đạo đức số và tôn trọng bản quyền khi sử dụng thông tin từ Internet?",
      options: [
        "A. Sao chép nguyên văn toàn bộ bài viết của người khác và dán vào bài tập nộp cho thầy cô.",
        "B. Đọc hiểu, tổng hợp, diễn đạt lại bằng lời văn của mình và ghi rõ nguồn tài liệu tham khảo.",
        "C. Tải hình ảnh của tác giả khác về rồi xóa tên tác giả đi và nhận là ảnh của mình.",
        "D. Copy bài viết từ Wikipedia và khẳng định do chính mình tự nghiên cứu ra."
      ],
      answer: "B",
      explanation: "Tôn trọng bản quyền đòi hỏi người học phải diễn giải thông tin bằng ngôn ngữ của chính mình (tránh đạo văn) và ghi chú trích dẫn đầy đủ nguồn gốc tác giả, bài viết, đường link tham khảo."
    },
    {
      question: "Để tìm kiếm các bài viết được đăng tải trong vòng 24 giờ qua hoặc 1 tuần qua trên Google, học sinh sử dụng công cụ nào?",
      options: [
        "A. Thêm từ khóa 'hôm nay' vào ô tìm kiếm.",
        "B. Bấm vào nút 'Công cụ' (Tools) trên trang kết quả ➜ Chọn mục 'Mọi lúc' (Any time) ➜ Chọn khoảng thời gian mong muốn.",
        "C. Đổi cài đặt ngày giờ của máy tính về quá khứ.",
        "D. Bấm phím F5 liên tục trên bàn phím."
      ],
      answer: "B",
      explanation: "Google cung cấp bộ lọc 'Công cụ' (Tools) ngay dưới thanh tìm kiếm, cho phép lọc kết quả theo thời gian (24 giờ qua, 1 tuần qua, 1 năm qua hoặc khoảng thời gian tùy chỉnh)."
    }
  ],
  examTypes: [
    {
      title: "Dạng 1: Xây Dựng Cú Pháp Tìm Kiếm Nâng Cao Kết Hợp Nhiều Toán Tử",
      tag: "Trọng tâm Đề thi Học kỳ",
      sampleQuestion: "Em hãy viết câu lệnh truy vấn tìm kiếm nâng cao trên Google để giải quyết bài toán sau: Tìm kiếm tài liệu định dạng PDF về chuyên đề 'Thuật toán tìm kiếm nhị phân' chỉ trong các trang web giáo dục của Việt Nam (tên miền .edu.vn), đồng thời loại trừ tất cả các trang web có chứa từ khóa 'quảng cáo' và 'giải bài tập'.",
      method: "⚡ Phương pháp ghép nối toán tử logic:\n• Khóa cụm từ: \"thuật toán tìm kiếm nhị phân\"\n• Lọc định dạng: filetype:pdf\n• Giới hạn tên miền giáo dục: site:.edu.vn\n• Loại trừ từ rác: -\"quảng cáo\" -\"giải bài tập\"",
      solution: "✅ Cú pháp truy vấn chuẩn xác 100%:\n\"thuật toán tìm kiếm nhị phân\" site:.edu.vn filetype:pdf -\"quảng cáo\" -\"giải bài tập\"\n\nGiải thích chi tiết các thành phần:\n1. \"thuật toán tìm kiếm nhị phân\": Dấu ngoặc kép khóa chính xác cụm từ, tránh kết quả tìm kiếm riêng lẻ từ 'thuật toán' hoặc 'nhị phân'.\n2. site:.edu.vn: Giới hạn toàn bộ kết quả chỉ nằm trong các website thuộc hệ thống giáo dục Việt Nam (trường đại học, viện nghiên cứu).\n3. filetype:pdf: Chỉ tải về các tệp tin tài liệu chuẩn định dạng PDF.\n4. -\"quảng cáo\" -\"giải bài tập\": Dấu trừ giúp loại bỏ triệt để các trang web thương mại rác hoặc trang giải bài tập mẫu."
    },
    {
      title: "Dạng 2: Phân Tích & Dự Đoán Kết Quả Trả Về Của Các Truy Vấn Tìm Kiếm",
      tag: "Thông hiểu & Phân tích Cú pháp",
      sampleQuestion: "So sánh kết quả trả về của 3 câu lệnh tìm kiếm sau trên Google:\n(1) an toàn thông tin trên mạng\n(2) \"an toàn thông tin trên mạng\"\n(3) \"an toàn thông tin\" site:chinhphu.vn filetype:pdf",
      method: "⚡ Phân tích độ rộng và độ chính xác của từng truy vấn:\n• (1): Rất rộng, chứa nhiều kết quả rời rạc.\n• (2): Thu hẹp, chứa đúng cụm từ theo thứ tự.\n• (3): Cực kỳ chính xác, chỉ lấy tệp PDF văn bản pháp luật từ Cổng thông tin Chính phủ.",
      solution: "✅ Đáp án & Phân tích so sánh chi tiết:\n• Truy vấn (1): Google sẽ tìm các trang web chứa các từ 'an toàn', 'thông tin', 'trên', 'mạng' ở bất kỳ vị trí nào. Kết quả trả về rất lớn (hàng chục triệu kết quả), nhiều trang có thể chỉ nói về an toàn giao thông hoặc mạng điện thoại.\n• Truy vấn (2): Google chỉ trả về các trang có chứa chính xác cả cụm từ 'an toàn thông tin trên mạng' liền nhau theo đúng thứ tự. Kết quả được thu hẹp đáng kể và đúng trọng tâm chủ đề hơn.\n• Truy vấn (3): Kết quả được chắt lọc ở mức cao nhất, chỉ trả về các tệp tin PDF (như Luật An toàn thông tin mạng, Nghị định, Báo cáo chuyên đề) được đăng tải chính thức trên Cổng thông tin điện tử Chính phủ (chinhphu.vn)."
    },
    {
      title: "Dạng 3: Đánh Giá & Thẩm Định Độ Tin Cậy Của Các Website Tham Khảo",
      tag: "Vận dụng & Kỹ năng Số",
      sampleQuestion: "Khi chuẩn bị bài báo cáo về đề tài 'Tác động của trí tuệ nhân tạo đối với nghề nghiệp tương lai', một học sinh tìm thấy thông tin trên 3 trang web sau:\n- Nguồn A: Bài báo trên website của Bộ Thông tin và Truyền thông (mic.gov.vn), có tên tác giả là Viện trưởng Viện Chiến lược TT&TT, xuất bản tháng 03/2026.\n- Nguồn B: Bài đăng trên một trang blog cá nhân không có tên tác giả, xuất bản năm 2018, trong bài có gắn nhiều link quảng cáo khóa học kiếm tiền online.\n- Nguồn C: Bài viết trên diễn đàn hỏi đáp học sinh, có nhiều bình luận khen hay nhưng không có trích dẫn nguồn số liệu.\nEm hãy xếp thứ tự độ tin cậy từ cao đến thấp của 3 nguồn trên và giải thích vì sao nguồn A là nguồn uy tín nhất.",
      method: "⚡ Áp dụng 5 tiêu chí CRAAP:\n1. Tác giả rõ ràng, chuyên gia ➜ Nguồn A.\n2. Tên miền .gov.vn chính thống ➜ Nguồn A.\n3. Tính thời sự mới (2026 vs 2018) ➜ Nguồn A.\n4. Mục đích giáo dục/chiến lược vs Quảng cáo ➜ Nguồn A > Nguồn B, C.",
      solution: "✅ Thứ tự độ tin cậy: Nguồn A > Nguồn C > Nguồn B.\n\nGiải thích chi tiết vì sao Nguồn A có độ tin cậy cao nhất:\n1. Tiêu chí Tác giả: Tác giả là Viện trưởng Viện Chiến lược – chuyên gia đầu ngành có chuyên môn sâu về lĩnh vực công nghệ thông tin.\n2. Tiêu chí Cơ quan & Tên miền: Được đăng tải trên Cổng thông tin của Bộ TT&TT (tên miền .gov.vn), là cơ quan quản lý nhà nước chính thức, thông tin đã qua quy trình biên tập và kiểm duyệt nghiêm ngặt.\n3. Tiêu chí Tính thời sự: Xuất bản tháng 03/2026, phản ánh xu hướng mới nhất về Trí tuệ nhân tạo (AI), trong khi Nguồn B từ năm 2018 đã quá lỗi thời.\n4. Tiêu chí Mục đích: Nhằm định hướng chiến lược quốc gia khách quan, hoàn toàn không vì mục đích thương mại hay bán hàng như Nguồn B."
    },
    {
      title: "Dạng 4: Quy Trình Kiểm Chứng Chéo Thông Tin & Phòng Chống Tin Giả (Fake News)",
      tag: "Vận dụng Thực tiễn & Fact-Check",
      sampleQuestion: "Trên mạng xã hội xuất hiện một thông tin lan truyền: 'Bộ Giáo dục và Đào tạo vừa ban hành quyết định bỏ môn Tiếng Anh và Tin học trong kỳ thi tốt nghiệp THPT từ năm sau'. Rất nhiều học sinh hoang mang chia sẻ lại thông tin này. Em hãy xây dựng quy trình 4 bước kiểm chứng thông tin (Fact-check) để xác định tính xác thực của thông báo trên trước khi tin tưởng hoặc chia sẻ.",
      method: "⚡ Quy trình Fact-check 4 bước chuẩn:\n1. Kiểm tra nguồn gốc bài đăng đầu tiên.\n2. Tra cứu trực tiếp trên Cổng thông tin chính thống của Bộ GD&ĐT (moet.gov.vn).\n3. Kiểm tra các cơ quan báo chí chính thống (VTV, TTXVN, Nhân Dân, Tuổi Trẻ).\n4. Đánh giá tính pháp lý của văn bản (Số hiệu quyết định, ngày ký, chữ ký/con dấu).",
      solution: "✅ Quy trình 4 Bước Kiểm Chứng Thông Tin (Fact-check) Chuẩn Mực:\n• Bước 1 (Kiểm tra nguồn gốc): Xem bài đăng bắt nguồn từ đâu (fanpage trôi nổi, tài khoản ẩn danh hay cơ quan báo chí). Nếu là bài đăng mạng xã hội không có căn cứ văn bản ➜ Đặt nghi vấn cao độ.\n• Bước 2 (Tra cứu cổng thông tin chính thức): Dùng cú pháp Google: site:moet.gov.vn \"thi tốt nghiệp THPT\" hoặc truy cập trực tiếp trang moet.gov.vn vào mục 'Thông cáo báo chí / Văn bản quy phạm pháp luật' để tìm kiếm quyết định gốc.\n• Bước 3 (Kiểm chứng chéo trên báo chí chính thống): Đọc các tờ báo lớn uy tín (Báo Tiền Phong, Báo Tuổi Trẻ, Báo Dân Trí, Cổng Thông tin Chính phủ) xem có đưa tin chính thức không. Nếu không có bất kỳ cơ quan báo chí chính thống nào đưa tin ➜ 100% là Tin giả (Fake News).\n• Bước 4 (Xử lý thông tin chuẩn mực): Không bình luận, không ấn nút chia sẻ bài viết sai lệch; cảnh báo cho bạn bè trong lớp và báo cáo (Report) bài viết vi phạm lên quản trị viên mạng xã hội."
    },
    {
      title: "Dạng 5: Bài Toán Tình Huống Thu Thập, Tổng Hợp & Trích Dẫn Nguồn Cho Đề Tài Học Tập",
      tag: "Vận dụng Cao & Nghiên cứu",
      sampleQuestion: "Em được giao nhiệm vụ viết bài báo cáo 2 trang về đề tài: 'Mã nguồn mở và tác động đến chuyển đổi số tại Việt Nam'. Em hãy trình bày kế hoạch nghiên cứu gồm: (1) 3 Câu lệnh truy vấn tìm kiếm nâng cao để thu thập số liệu chính thống; (2) Cách xử lý nội dung để tránh đạo văn; (3) Mẫu trích dẫn nguồn tài liệu tham khảo chuẩn mực theo đúng quy định.",
      method: "⚡ Kế hoạch nghiên cứu 3 phần:\n1. 3 Truy vấn: site:mic.gov.vn, site:.edu.vn, filetype:pdf.\n2. Tránh đạo văn: Đọc - Hiểu - Paraphrase (Diễn đạt lại bằng lời văn bản thân).\n3. Mẫu trích dẫn: Tác giả (Năm), Tên bài viết, Nguồn/Tên website, URL, Ngày truy cập.",
      solution: "✅ Kế hoạch Nghiên cứu & Trích dẫn Nguồn Toàn diện:\n1. 3 Câu lệnh truy vấn nâng cao tối ưu:\n   • Truy vấn 1: \"phần mềm nguồn mở\" \"chuyển đổi số\" site:mic.gov.vn\n   • Truy vấn 2: \"nguồn mở\" \"Việt Nam\" filetype:pdf site:.edu.vn\n   • Truy vấn 3: \"ưu điểm phần mềm nguồn mở\" -\"quảng cáo\" site:gov.vn\n\n2. Kỹ thuật xử lý nội dung chống đạo văn (Paraphrasing):\n   • Đọc kỹ tài liệu gốc, nắm vững các ý tưởng cốt lõi (luận điểm, số liệu dẫn chứng).\n   • Gấp tài liệu lại và tự viết lại toàn bộ nội dung bằng ngôn ngữ, cấu trúc câu và góc nhìn phân tích của chính mình.\n   • Sử dụng bảng biểu, sơ đồ tư duy do tự tay thiết kế để minh họa số liệu thay vì chụp ảnh bài của tác giả khác.\n\n3. Mẫu trích dẫn tài liệu tham khảo chuẩn mực ở cuối bài báo cáo:\n   • [1] Bộ Thông tin và Truyền thông (2024), 'Báo cáo tổng kết ứng dụng phần mềm nguồn mở trong cơ quan nhà nước', Cổng thông tin Bộ TT&TT, https://mic.gov.vn, truy cập ngày 26/08/2026.\n   • [2] Nguyễn Văn A (2025), 'Xu hướng phát triển phần mềm nguồn mở tại các trường đại học', Tạp chí Công nghệ Thông tin, Đại học Bách Khoa Hà Nội, https://hust.edu.vn, truy cập ngày 26/08/2026."
    }
  ],
  homework: [
    {
      title: "Bài tập 1: Thực Hành 4 Cú Pháp Truy Vấn Nâng Cao & Chụp Ảnh Đối Chiếu",
      tag: "Thực hành Máy tính Bắt buộc",
      problem: "Mở trình duyệt web, truy cập Google.com và thực hiện tuần tự 4 truy vấn tìm kiếm nâng cao sau:",
      tasks: [
        "Truy vấn 1: Tìm kiếm chính xác cụm từ \"bộ nhớ truy cập ngẫu nhiên RAM\" (sử dụng dấu ngoặc kép).",
        "Truy vấn 2: Tìm kiếm tài liệu bài giảng về 'Hệ điều hành' chỉ trong các trang web giáo dục Việt Nam: \"hệ điều hành\" site:.edu.vn.",
        "Truy vấn 3: Tìm kiếm file slide trình chiếu về 'Mạng máy tính' định dạng PowerPoint: \"mạng máy tính\" filetype:pptx.",
        "Truy vấn 4: Tìm kiếm thông tin về 'lập trình Python' nhưng loại bỏ các kết quả về loài rắn và video: python -snake -video filetype:pdf.",
        "Nhiệm vụ: Chụp ảnh màn hình kết quả của từng truy vấn và ghi nhận xét ngắn gọn (khoảng 2 dòng) về số lượng kết quả và độ chính xác so với khi tìm kiếm thông thường không có toán tử."
      ],
      requirements: "Nộp file ảnh chụp màn hình rõ nét kèm nhận xét chi tiết.",
      hint: "Bám sát các mục III.2 và III.3 trong bài học.",
      solution: `Checklist đánh giá bài tập 1 (10/10 Điểm):
✓ [2.5đ] Truy vấn 1: Chụp ảnh kết quả tìm kiếm đúng cụm từ khóa ngoặc kép, nhận xét kết quả giảm từ hàng triệu xuống hàng ngàn kết quả đúng 100%.
✓ [2.5đ] Truy vấn 2: Chụp ảnh kết quả chỉ xuất hiện các website có đuôi .edu.vn (hust.edu.vn, vnu.edu.vn...).
✓ [2.5đ] Truy vấn 3: Chụp ảnh kết quả có biểu tượng [PPT] / [PPTX] bên cạnh tiêu đề bài viết.
✓ [2.5đ] Truy vấn 4: Chụp ảnh kết quả tài liệu PDF lập trình Python hoàn toàn không chứa thông tin về loài bò sát.`
    },
    {
      title: "Bài tập 2: Thẩm Định Độ Tin Cậy & So Sánh 2 Nguồn Thông Tin Trái Ngược",
      tag: "Thẩm định Nguồn tin",
      scenario: "Khi tìm kiếm thông tin về chủ đề: 'Tác hại của ánh sáng xanh từ màn hình điện thoại đối với mắt học sinh':",
      problem: "Em hãy tìm 2 bài viết trên Internet: 1 bài từ nguồn chính thống y tế/giáo dục (.gov.vn, .edu.vn hoặc bệnh viện mắt uy tín) và 1 bài trên trang blog bán kính chống ánh sáng xanh / mạng xã hội:",
      tasks: [
        "Nhiệm vụ 1: Lập bảng đối chiếu 2 nguồn tin theo 5 tiêu chí: (1) Tên tác giả và học hàm/học vị, (2) Đơn vị xuất bản/Tên miền, (3) Ngày đăng bài, (4) Dẫn chứng nghiên cứu khoa học, (5) Mục đích bài viết.",
        "Nhiệm vụ 2: Rút ra kết luận: Nguồn nào đáng tin cậy hơn và chỉ ra các dấu hiệu nhận biết một bài viết có mục đích quảng cáo bán hàng núp bóng chia sẻ kiến thức."
      ],
      requirements: "Trình bày thành bảng so sánh khoa học và lập luận sắc bén.",
      hint: "Dựa vào bảng tiêu chí thẩm định trong Mục III.4 của bài học.",
      solution: `Bảng Đối Chiếu Thẩm Định Độ Tin Cậy:
1. Nguồn chính thống (Website Bệnh viện Mắt Trung ương - vnio.org.vn):
• Tác giả: Bác sĩ chuyên khoa II (ghi rõ họ tên, chức vụ khoa Mắt).
• Tên miền: Website chính thức của bệnh viện đầu ngành y tế (.org.vn).
• Ngày đăng: Tháng 01/2026 (rất mới).
• Dẫn chứng: Trích dẫn nghiên cứu của Tổ chức Y tế Thế giới (WHO) và Viện Nhãn khoa Hoa Kỳ.
• Mục đích: Tuyên truyền giáo dục sức khỏe cộng đồng phi lợi nhuận ➜ ĐỘ TIN CẬY TUYỆT ĐỐI.

2. Nguồn thương mại (Blog kinhchonganhsangxanh-giare.com):
• Tác giả: Ẩn danh (chỉ ghi 'Admin').
• Tên miền: Trang web thương mại cá nhân (.com).
• Ngày đăng: Không ghi ngày tháng cập nhật.
• Dẫn chứng: Không có số liệu khoa học, chỉ dùng từ cảm tính ('cực kỳ nguy hiểm', 'gây mù lòa ngay').
• Mục đích: Giật tít gây hoang mang để chèn nút 'Mua ngay kính giảm giá 50%' ➜ ĐỘ TIN CẬY KÉM.`
    },
    {
      title: "Bài tập 3: Tổng Hợp Kiến Thức Bằng Kỹ Thuật Paraphrase & Ghi Nguồn Chuẩn APA",
      tag: "Kỹ năng Tổng hợp & Chống đạo văn",
      problem: "Đọc một đoạn văn bản về công nghệ Điện toán đám mây (Cloud Computing) từ một nguồn tin uy tín trên Internet:",
      tasks: [
        "Nhiệm vụ 1: Viết lại đoạn văn đó (độ dài khoảng 5 đến 7 câu) bằng chính lời văn của em (Paraphrase), tuyệt đối không sao chép nguyên văn từng câu chữ.",
        "Nhiệm vụ 2: Trình bày thông tin trích dẫn nguồn tài liệu tham khảo ở cuối bài theo đúng định dạng chuẩn: [Tác giả/Cơ quan] (Năm), 'Tên bài viết', Tên website, Đường link URL, [Ngày em truy cập]."
      ],
      requirements: "Diễn đạt mạch lạc, sáng tạo và trích dẫn chuẩn chỉ.",
      hint: "Bám sát các mục III.4 và III.5 trong bài học.",
      solution: `1. Đoạn văn tổng hợp bằng lời văn cá nhân (Paraphrase):
Điện toán đám mây là một bước đột phá quan trọng trong kỷ nguyên số, cho phép người dùng và doanh nghiệp lưu trữ cũng như xử lý dữ liệu thông qua Internet thay vì phụ thuộc vào phần cứng cục bộ. Nhờ công nghệ này, chúng ta có thể truy cập tài nguyên học tập và làm việc từ bất kỳ thiết bị nào một cách nhanh chóng và linh hoạt. Hơn thế nữa, các dịch vụ đám mây giúp tối ưu hóa chi phí đầu tư thiết bị và nâng cao hiệu quả làm việc nhóm nhờ tính năng cộng tác thời gian thực. Tuy nhiên, để khai thác hiệu quả, người sử dụng cần chú trọng đến vấn đề bảo mật tài khoản và phân quyền dữ liệu an toàn.

2. Trích dẫn nguồn tài liệu chuẩn mực:
Tạp chí Thông tin và Truyền thông (2025), 'Tổng quan về xu hướng phát triển điện toán đám mây tại Việt Nam', Tạp chí điện tử TT&TT, https://ictvietnam.vn/tong-quan-cloud-computing-2025.htm, truy cập ngày 26/08/2026.`
    }
  ],
  practiceExercises: [
    {
      id: "practice-b7-1",
      badge: "Bài 1 – 2 phút",
      title: "Bài 1 – Chuyển Đổi Câu Hỏi Tự Nhiên Thành Từ Khóa Cô Đọng",
      duration: "2 phút",
      type: "exercise",
      description: "Chuyển đổi 3 câu hỏi giao tiếp tự nhiên dài dòng thành cụm từ khóa tìm kiếm tối ưu trên Google.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Rèn luyện tư duy lọc bỏ hư từ và chọn danh từ cốt lõi.",
        requirements: [
          "Hãy chuyển đổi 3 câu hỏi sau thành các từ khóa tìm kiếm cô đọng, hiệu quả nhất:\n1. 'Làm thế nào để phân biệt được giữa bộ nhớ RAM và bộ nhớ ROM vậy ạ?'\n2. 'Mọi người cho mình hỏi địa chỉ tải phần mềm gõ tiếng Việt Unikey chính thức ở đâu?'\n3. 'Tại sao khi cắm chuột USB vào laptop lại không sáng đèn và không di chuyển được?'"
        ],
        qaList: [
          {
            q: "1. Phân biệt RAM và ROM?",
            a: "Đáp án tối ưu: phân biệt RAM và ROM (hoặc: so sánh RAM và ROM)."
          },
          {
            q: "2. Địa chỉ tải Unikey chính thức?",
            a: "Đáp án tối ưu: tải Unikey chính thức unikey.org (hoặc: download Unikey chính thức)."
          },
          {
            q: "3. Chuột USB cắm không sáng đèn?",
            a: "Đáp án tối ưu: sửa lỗi chuột USB không sáng đèn (hoặc: laptop không nhận chuột USB)."
          }
        ]
      }
    },
    {
      id: "practice-b7-2",
      badge: "Bài 2 – 2 phút",
      title: "Bài 2 – Cú Pháp Tìm Chính Xác Cụm Từ Bằng Dấu Ngoặc Kép",
      duration: "2 phút",
      type: "exercise",
      description: "Sử dụng dấu ngoặc kép \" \" để tìm chính xác thuật ngữ không bị xáo trộn từ ngữ.",
      content: {
        objective: "Mức độ: Cơ bản | Thời gian: 2 phút. Nắm vững tác dụng của dấu ngoặc kép.",
        requirements: [
          "Tình huống: Học sinh muốn tìm kiếm tài liệu về khái niệm 'Bản quyền phần mềm' trong môn Tin học 11. Nếu gõ bản quyền phần mềm thì Google trả về nhiều bài viết về bản quyền âm nhạc hoặc phần mềm diệt virus.",
          "Nhiệm vụ: Hãy viết cú pháp tìm kiếm chính xác và giải thích tác dụng của cú pháp đó."
        ],
        qaList: [
          {
            q: "Cú pháp tìm kiếm chính xác?",
            a: "Đáp án: \"bản quyền phần mềm\"\n• Tác dụng: Dấu ngoặc kép buộc Google chỉ hiển thị các trang web có chứa chính xác cả cụm từ 'bản quyền phần mềm' đứng liền nhau theo đúng thứ tự, loại bỏ các kết quả nói về 'bản quyền âm nhạc' hay 'phần mềm kế toán'."
          }
        ]
      }
    },
    {
      id: "practice-b7-3",
      badge: "Bài 3 – 3 phút",
      title: "Bài 3 – Cú Pháp Giới Hạn Tên Miền site: Và Định Dạng filetype:",
      duration: "3 phút",
      type: "exercise",
      description: "Kết hợp toán tử site: và filetype: để tải đúng tệp PDF từ cơ quan nhà nước.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Thành thạo 2 toán tử lọc khoanh vùng mạnh mẽ nhất.",
        requirements: [
          "Yêu cầu: Hãy viết câu lệnh tìm kiếm trên Google để tìm tệp văn bản định dạng PDF của 'Luật An ninh mạng' được đăng tải chính thức trên Cổng thông tin điện tử của Chính phủ (chinhphu.vn)."
        ],
        qaList: [
          {
            q: "Câu lệnh tìm kiếm chuẩn xác?",
            a: "Đáp án: \"Luật An ninh mạng\" site:chinhphu.vn filetype:pdf\n• Giải thích: \"Luật An ninh mạng\" (khóa chính xác tên văn bản luật) + site:chinhphu.vn (chỉ tìm trong website Cổng TTĐT Chính phủ) + filetype:pdf (chỉ lấy tệp PDF văn bản gốc)."
          }
        ]
      }
    },
    {
      id: "practice-b7-4",
      badge: "Bài 4 – 2 phút",
      title: "Bài 4 – Loại Bỏ Kết Quả Gây Nhiễu Bằng Dấu Trừ (-)",
      duration: "2 phút",
      type: "exercise",
      description: "Sử dụng dấu trừ để loại bỏ các trang web chứa từ khóa không mong muốn.",
      content: {
        objective: "Mức độ: Cơ bản → Thông hiểu | Thời gian: 2 phút. Hiểu quy tắc viết dấu trừ liền sát từ khóa.",
        requirements: [
          "Tình huống: Em muốn tìm kiếm đề thi thử môn Tin học 11 để tự làm bài, nhưng các kết quả trên Google toàn hiển thị các trang có kèm sẵn đáp án giải chi tiết.",
          "Nhiệm vụ: Hãy viết câu lệnh tìm kiếm để loại bỏ hoàn toàn các trang có chứa từ 'đáp án' và 'lời giải'."
        ],
        qaList: [
          {
            q: "Câu lệnh loại trừ từ rác?",
            a: "Đáp án: \"đề thi\" \"Tin học 11\" -\"đáp án\" -\"lời giải\"\n• Lưu ý: Dấu trừ phải viết liền sát với dấu ngoặc kép hoặc từ khóa (không có khoảng trắng sau dấu trừ)."
          }
        ]
      }
    },
    {
      id: "practice-b7-5",
      badge: "Bài 5 – 3 phút",
      title: "Bài 5 – Kết Hợp Đa Toán Tử: Tìm Giáo Án PDF Giáo Dục",
      duration: "3 phút",
      type: "exercise",
      description: "Xây dựng truy vấn phức hợp kết hợp cả 4 toán tử: ngoặc kép, site:, filetype:, dấu trừ.",
      content: {
        objective: "Mức độ: Thông hiểu → Vận dụng | Thời gian: 3 phút. Tổng hợp năng lực viết truy vấn nâng cao.",
        requirements: [
          "Bài toán: Tìm kiếm giáo án bài giảng định dạng Word (.docx) của 'Bài 7 Tin học 11 Kết nối tri thức' nằm trong hệ sinh thái các trang web giáo dục Việt Nam (.edu.vn), nhưng loại trừ các trang web thương mại có chứa chữ 'mua giáo án' và 'thu phí'.",
          "Nhiệm vụ: Viết câu lệnh truy vấn hoàn chỉnh."
        ],
        qaList: [
          {
            q: "Câu lệnh truy vấn hoàn chỉnh?",
            a: "Đáp án: \"giáo án\" \"Bài 7\" \"Tin học 11\" \"Kết nối tri thức\" site:.edu.vn filetype:docx -\"mua giáo án\" -\"thu phí\""
          }
        ]
      }
    },
    {
      id: "practice-b7-6",
      badge: "Bài 6 – 3 phút",
      title: "Bài 6 – Đánh Giá Độ Tin Cậy Của 3 Nguồn Thông Tin Khác Nhau",
      duration: "3 phút",
      type: "exercise",
      description: "So sánh và thẩm định mức độ uy tín của 3 website khi tra cứu kiến thức khoa học máy tính.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Áp dụng 5 tiêu chí thẩm định nguồn tin vào thực tế.",
        requirements: [
          "Khi tra cứu kiến thức về 'Lịch sử phát triển của kiến trúc Von Neumann', em tìm thấy 3 nguồn sau:\n1. Trang web thư viện khoa học của Đại học Quốc gia Hà Nội (vnu.edu.vn), có ghi rõ tác giả PGS.TS Khoa CNTT.\n2. Bài đăng trên một fanpage Facebook cá nhân chia sẻ mẹo học tập không ghi nguồn.\n3. Bài viết trên một trang web công nghệ (.com) có nhiều quảng cáo bán linh kiện máy tính.",
          "Nhiệm vụ: Sắp xếp 3 nguồn theo độ tin cậy giảm dần và giải thích lý do."
        ],
        qaList: [
          {
            q: "Thứ tự độ tin cậy và giải thích?",
            a: "Đáp án: Thứ tự tin cậy: Nguồn 1 > Nguồn 3 > Nguồn 2.\n• Nguồn 1 uy tín nhất: Tên miền giáo dục chính thống (.edu.vn), tác giả là chuyên gia có học hàm học vị rõ ràng, thông tin mang tính học thuật chuẩn mực.\n• Nguồn 3 ở mức tham khảo: Có thể có kiến thức hữu ích nhưng cần kiểm chứng vì trang web có mục đích thương mại bán hàng.\n• Nguồn 2 kém tin cậy nhất: Mạng xã hội cá nhân không qua kiểm duyệt, không rõ danh tính tác giả, dễ chứa thông tin sai lệch."
          }
        ]
      }
    },
    {
      id: "practice-b7-7",
      badge: "Bài 7 – 3 phút",
      title: "Bài 7 – Nhận Diện Tin Giả (Fake News) & Kỹ Thuật Kiểm Chứng Chéo",
      duration: "3 phút",
      type: "exercise",
      description: "Phát hiện dấu hiệu của tin tức giả mạo và trình bày các bước kiểm chứng chéo.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Hình thành phản xạ cảnh giác và kỹ năng Fact-check.",
        requirements: [
          "Nêu ít nhất 4 dấu hiệu nhận biết một bài viết trên mạng có khả năng cao là TIN GIẢ (Fake News).",
          "Khi gặp một thông tin giật gân, em cần làm gì để kiểm chứng chéo (Fact-check) tính xác thực?"
        ],
        qaList: [
          {
            q: "4 Dấu hiệu nhận biết Tin giả?",
            a: "Đáp án:\n1. Tiêu đề giật tít, giật gân, dùng từ ngữ kích động, viết hoa toàn bộ hoặc nhiều dấu chấm than (!!!).\n2. Không ghi rõ danh tính tác giả, ngày tháng đăng bài hoặc tên cơ quan chịu trách nhiệm.\n3. Tên miền trang web kỳ lạ, cố tình bắt chước các báo lớn (ví dụ: bbc-news.co, vnexpress.xyz...).\n4. Nội dung bài viết không trích dẫn số liệu, không có văn bản pháp lý hoặc hình ảnh bị cắt ghép chỉnh sửa."
          },
          {
            q: "Cách kiểm chứng chéo (Fact-check)?",
            a: "Đáp án: Copy tiêu đề hoặc từ khóa chính của tin đó, tìm kiếm trên Google kết hợp với tên các cơ quan báo chí chính thống (VTV, Tuổi Trẻ, Thông tấn xã Việt Nam). Nếu không có bất kỳ báo chính thống nào đưa tin ➜ Đó là tin giả."
          }
        ]
      }
    },
    {
      id: "practice-b7-8",
      badge: "Bài 8 – 3 phút",
      title: "Bài 8 – Sử Dụng Bộ Lọc Thời Gian Để Tìm Tin Mới Nhất",
      duration: "3 phút",
      type: "exercise",
      description: "Thao tác sử dụng công cụ lọc thời gian (Search Tools) trên Google để tìm dữ liệu trong 24h hoặc 1 tuần.",
      content: {
        objective: "Mức độ: Thông hiểu | Thời gian: 3 phút. Thành thạo công cụ lọc thời gian của Google.",
        requirements: [
          "Tình huống: Em cần tìm các tin tức mới nhất về 'Kỳ thi Học sinh giỏi Quốc gia môn Tin học' vừa diễn ra trong tuần này, nhưng Google toàn trả về bài viết của các năm 2022, 2023.",
          "Nhiệm vụ: Trình bày các bước thao tác trên giao diện Google để lọc chính xác các bài viết xuất bản trong 1 tuần qua."
        ],
        qaList: [
          {
            q: "Các bước lọc thời gian trên Google?",
            a: "Đáp án:\n• Bước 1: Gõ từ khóa tìm kiếm: \"Học sinh giỏi Quốc gia\" \"Tin học\" trên Google.\n• Bước 2: Bấm vào nút 'Công cụ' (Tools) nằm ở góc phải ngay dưới thanh tìm kiếm.\n• Bước 3: Click vào menu thả xuống 'Mọi lúc' (Any time) ➜ Chọn '1 tuần qua' (Past week).\n• Kết quả: Google sẽ tự động loại bỏ tất cả các bài báo cũ và chỉ hiển thị tin tức vừa đăng trong 7 ngày gần nhất."
          }
        ]
      }
    },
    {
      id: "practice-b7-9",
      badge: "Bài 9 – 3 phút",
      title: "Bài 9 – Kỹ Thuật Trích Dẫn Nguồn Tham Khảo Chuẩn Mực",
      duration: "3 phút",
      type: "exercise",
      description: "Xây dựng định dạng trích dẫn nguồn Internet đầy đủ thông tin cho bài báo cáo học tập.",
      content: {
        objective: "Mức độ: Vận dụng | Thời gian: 3 phút. Nắm vững cấu trúc một trích dẫn nguồn chuẩn.",
        requirements: [
          "Một học sinh tham khảo một bài viết có tiêu đề: 'Tổng quan kiến trúc vi xử lý đa nhân' của tác giả Trần Văn Nam, đăng trên Tạp chí Khoa học & Công nghệ ngày 15/01/2026 tại đường link: https://tapchikhoahoc.vn/cpu-multicore.html.",
          "Nhiệm vụ: Hãy viết lại dòng trích dẫn nguồn tham khảo chuẩn mực theo đúng quy định ở cuối bài báo cáo."
        ],
        qaList: [
          {
            q: "Mẫu trích dẫn nguồn chuẩn mực?",
            a: "Đáp án:\nTrần Văn Nam (2026), 'Tổng quan kiến trúc vi xử lý đa nhân', Tạp chí Khoa học & Công nghệ, https://tapchikhoahoc.vn/cpu-multicore.html, truy cập ngày 26/08/2026."
          }
        ]
      }
    },
    {
      id: "practice-b7-10",
      badge: "Bài 10 – 6 phút",
      title: "Bài 10 – Thử Thách Tổng Hợp: Xây Dựng Chiến Lược Thu Thập Tài Liệu Dự Án",
      duration: "6 phút",
      type: "exercise",
      description: "Thiết kế kế hoạch tìm kiếm, 4 cú pháp nâng cao, bảng thẩm định nguồn và mẫu trích dẫn cho đề tài NCKH.",
      content: {
        objective: "Mức độ: Vận dụng cao | Thời gian: 6 phút. Đánh giá toàn diện năng lực nghiên cứu thông tin số của học sinh.",
        requirements: [
          "Đề tài nghiên cứu: 'Ứng dụng Trí tuệ nhân tạo (AI) trong hỗ trợ tự học môn Tin học 11'.",
          "Nhiệm vụ học sinh:\n1. Viết 3 cú pháp tìm kiếm nâng cao kết hợp nhiều toán tử để thu thập: (a) Tài liệu PDF học thuật từ các trường đại học, (b) Văn bản chính thức của Bộ GD&ĐT, (c) Bài báo quốc tế/Việt Nam không chứa nội dung quảng cáo.\n2. Nêu 4 tiêu chí dùng để thẩm định độ tin cậy của các tài liệu tìm được.\n3. Trình bày quy tắc chống đạo văn khi tổng hợp bài viết."
        ],
        submissionHint: "Hướng dẫn giải chi tiết:\n1. 3 Cú pháp tìm kiếm nâng cao:\n   • (a) Tài liệu PDF đại học: \"trí tuệ nhân tạo\" \"tự học\" site:.edu.vn filetype:pdf\n   • (b) Văn bản Bộ GD&ĐT: \"trí tuệ nhân tạo\" \"giáo dục\" site:moet.gov.vn\n   • (c) Bài báo không quảng cáo: \"ứng dụng AI trong học tập\" site:.vn -\"quảng cáo\" -\"khóa học\"\n\n2. 4 Tiêu chí thẩm định nguồn tin:\n   • Tác giả: Chuyên gia công nghệ, nhà giáo dục có tên tuổi.\n   • Tên miền: Ưu tiên .edu.vn, .gov.vn, tạp chí khoa học có chỉ số ISSN.\n   • Tính thời sự: Ưu tiên các bài viết xuất bản trong vòng 1-2 năm gần nhất (2024-2026).\n   • Dẫn chứng: Có số liệu thực nghiệm, khảo sát học sinh rõ ràng.\n\n3. Quy tắc chống đạo văn: Đọc hiểu và diễn đạt lại (Paraphrase) bằng ngôn từ của chính mình; nếu trích dẫn nguyên văn một câu định nghĩa phải đặt trong dấu ngoặc kép và ghi rõ số trang/tên tác giả; lập danh mục Tài liệu tham khảo đầy đủ ở cuối bài.",
        scoring: [
          { level: "Đạt (7-8đ)", desc: "Viết đúng 3 cú pháp tìm kiếm và nêu được các tiêu chí thẩm định nguồn cơ bản." },
          { level: "Khá (9đ)", desc: "Cú pháp tối ưu, tiêu chí thẩm định sắc bén và trình bày đúng quy tắc trích dẫn nguồn." },
          { level: "Xuất sắc (10đ)", desc: "Kế hoạch nghiên cứu hoàn hảo, kết hợp nhuần nhuyễn kỹ thuật tìm kiếm, tư duy Fact-check và đạo đức trích dẫn học thuật." }
        ]
      }
    },
    {
      id: "practice-b7-minitest",
      badge: "Mini Test – 5 phút",
      title: "Mini Test Đánh Giá Năng Lực Cuối Buổi (6 Câu Trắc Nghiệm)",
      duration: "5 phút",
      type: "quiz",
      description: "6 câu hỏi trắc nghiệm tương tác kiểm tra độ hiểu sâu các kỹ năng tìm kiếm và thẩm định thông tin của Bài 7.",
      content: {
        objective: "Đánh giá mức độ tiếp thu 8 kiến thức cốt lõi sau 90 phút học tập.",
        questions: [
          {
            q: "Câu 1: Để tìm kiếm chính xác một cụm từ trên Google mà không bị tách rời hay đảo lộn các từ, ta đặt cụm từ đó trong ký tự nào?",
            options: [
              "A. Cặp dấu ngoặc đơn ( )",
              "B. Cặp dấu ngoặc kép \" \"",
              "C. Cặp dấu ngoặc vuông [ ]",
              "D. Đặt sau dấu thăng #"
            ],
            answer: "B",
            explanation: "Dấu ngoặc kép \"...\" dùng để khóa cứng cụm từ tìm kiếm chính xác."
          },
          {
            q: "Câu 2: Toán tử nào sau đây dùng để giới hạn phạm vi tìm kiếm chỉ nằm trong một website hoặc một tên miền cụ thể?",
            options: [
              "A. filetype:",
              "B. site:",
              "C. domain:",
              "D. link:"
            ],
            answer: "B",
            explanation: "Toán tử site: dùng để giới hạn phạm vi tìm kiếm trong một trang web hoặc tên miền (ví dụ: site:.edu.vn)."
          },
          {
            q: "Câu 3: Để chỉ tìm kiếm các tệp tin bài giảng có định dạng PowerPoint (.pptx), cú pháp nào sau đây là đúng?",
            options: [
              "A. format:pptx",
              "B. type:pptx",
              "C. filetype:pptx",
              "D. extension:pptx"
            ],
            answer: "C",
            explanation: "Toán tử filetype: dùng để lọc định dạng tệp tin (filetype:pdf, filetype:pptx, filetype:docx...)."
          },
          {
            q: "Câu 4: Để loại trừ các kết quả tìm kiếm có chứa từ 'quảng cáo', ta sử dụng cú pháp nào?",
            options: [
              "A. not:quảng cáo",
              "B. -quảng cáo",
              "C. delete:quảng cáo",
              "D. !quảng cáo"
            ],
            answer: "B",
            explanation: "Dấu trừ (-) viết liền trước từ khóa dùng để loại trừ từ khóa đó khỏi kết quả tìm kiếm."
          },
          {
            q: "Câu 5: Tên miền nào sau đây thường có độ tin cậy và tính chính thống cao nhất khi tìm kiếm tài liệu học tập?",
            options: [
              "A. .com",
              "B. .xyz",
              "C. .edu.vn",
              "D. .net"
            ],
            answer: "C",
            explanation: "Tên miền .edu.vn thuộc các cơ sở giáo dục, đại học Việt Nam, luôn có độ tin cậy và tính học thuật cao nhất."
          },
          {
            q: "Câu 6: Khi sử dụng số liệu từ một bài báo trên Internet vào bài thuyết trình của mình, hành vi nào sau đây là chuẩn mực nhất?",
            options: [
              "A. Copy nguyên văn và không ghi gì thêm",
              "B. Xóa tên tác giả và nhận là nghiên cứu của mình",
              "C. Diễn đạt lại nội dung và ghi rõ nguồn trích dẫn tham khảo",
              "D. Chụp ảnh màn hình bài viết dán vào slide và không ghi link"
            ],
            answer: "C",
            explanation: "Tôn trọng bản quyền và đạo đức học thuật yêu cầu người học phải diễn đạt lại thông tin và trích dẫn đầy đủ nguồn tham khảo."
          }
        ]
      }
    },
    {
      id: "practice-b7-summary",
      badge: "Tổng Kết Buổi Học",
      title: "Chốt 8 Điểm Cốt Lõi, Tiêu Chí Đánh Giá Năng Lực & Nhiệm Vụ Về Nhà",
      duration: "Tổng kết",
      type: "exercise",
      description: "8 kiến thức cốt lõi học sinh tự nói lại, 3 mức tiêu chí đánh giá và bảng phân bổ sư phạm.",
      content: {
        objective: "Khắc sâu toàn bộ kiến thức Bài 7 và đánh giá chuẩn đầu ra của học sinh.",
        knowledgeNotice: "📌 8 Ý KIẾN THỨC ĐINH HỌC SINH PHẢI TỰ NÓI LẠI TRƯỚC KHI KẾT THÚC BUỔI:\n1. Kỹ thuật từ khóa: Chọn danh từ cốt lõi, loại bỏ hư từ (là gì, làm sao, giúp với), dùng thuật ngữ chuẩn.\n2. Ngoặc kép \" \": Khóa chính xác cụm từ, giữ đúng thứ tự từ không bị tách rời.\n3. Toán tử site: Giới hạn tìm kiếm trong 1 website hoặc tên miền (site:moet.gov.vn, site:.edu.vn).\n4. Toán tử filetype: Lọc định dạng tệp (filetype:pdf, filetype:docx, filetype:pptx).\n5. Dấu trừ (-): Loại bỏ triệt để các từ khóa rác không mong muốn (viết liền sau dấu trừ).\n6. Toán tử OR: Tìm kiếm từ khóa A HOẶC từ khóa B (chữ OR phải viết hoa).\n7. 5 Tiêu chí độ tin cậy: Tác giả, Tên miền (.gov/.edu), Tính thời sự, Bằng chứng đối chiếu và Mục đích bài viết.\n8. Đạo đức số: Diễn đạt lại bằng lời văn của mình và ghi rõ nguồn trích dẫn đầy đủ (Tác giả, Tên bài, Link, Ngày truy cập).",
        table: {
          headers: ["Khoảng thời gian", "Nội dung hoạt động sư phạm", "Mục tiêu trọng tâm cần đạt"],
          rows: [
            ["0–8 phút", "Khởi động & Ôn Bài 6", "Tình huống tìm kiếm tài liệu chuẩn ➜ Nhận thức nhu cầu dùng toán tử"],
            ["8–22 phút", "Nguyên lý Search Engine & Từ khóa", "Hiểu cách Google đánh chỉ mục và kỹ thuật lọc từ khóa cô đọng"],
            ["22–40 phút", "5 Toán tử nâng cao cốt lõi", "Luyện thành thạo ngoặc kép, site:, filetype:, dấu trừ - và OR"],
            ["40–50 phút", "Bộ lọc công cụ & 5 Tiêu chí tin cậy", "Biết lọc thời gian và thẩm định mức độ uy tín tên miền"],
            ["50–55 phút", "Đạo đức số & Trích dẫn nguồn", "Nắm vững kỹ thuật Paraphrase và mẫu trích dẫn chuẩn APA"],
            ["55–82 phút", "10 Bài Luyện Tập Thực Hành", "Rèn luyện kỹ năng viết truy vấn phức hợp và xử lý tình huống thực tế"],
            ["82–87 phút", "Mini Test 6 Câu Cuối Buổi", "Đánh giá mức độ tiếp thu 8 kiến thức cốt lõi"],
            ["87–90 phút", "Chốt 8 Ý & Giao Bài Về Nhà", "Học sinh tự nói lại 8 ý cốt lõi và nhận 3 phần bài tập về nhà"]
          ]
        },
        criteria: [
          { level: "Mức Đạt (5-6.5đ)", desc: "Biết chọn từ khóa cô đọng; sử dụng được dấu ngoặc kép \"\" và toán tử filetype:pdf cơ bản; nhận biết được tên miền uy tín .gov.vn / .edu.vn." },
          { level: "Mức Khá (7-8.5đ)", desc: "Kết hợp linh hoạt cả 5 toán tử nâng cao; sử dụng thành thạo bộ lọc công cụ thời gian; thẩm định nguồn tin theo 5 tiêu chí và biết trích dẫn nguồn cơ bản." },
          { level: "Mức Xuất Sắc (9-10đ)", desc: "Xây dựng được các truy vấn tìm kiếm phức hợp đỉnh cao; có tư duy Fact-check kiểm chứng tin giả sắc bén; áp dụng nhuần nhuyễn kỹ thuật Paraphrase và trích dẫn chuẩn học thuật." }
        ]
      }
    }
  ]
}
