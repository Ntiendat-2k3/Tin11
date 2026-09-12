# BÀI 13 – CƠ SỞ DỮ LIỆU QUAN HỆ

**Giáo trình gia sư Tin học 11 – Kết nối tri thức**  
**Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu**  
**Thời lượng đề xuất: khoảng 100 phút**

> **Tinh thần của bài học:** Bài 13 là bài “xây nền” cho SQL ở Bài 14.
>
> Học sinh không chỉ cần thuộc các từ: bảng, hàng, cột, bản ghi, trường, khóa, khóa chính, khóa ngoài. Quan trọng hơn là nhìn một tình huống quản lí thực tế và trả lời được:
>
> **“Nên chia dữ liệu thành những bảng nào, mỗi hàng đại diện cho cái gì, cột nào nhận diện duy nhất một đối tượng và các bảng nối với nhau bằng cách nào?”**
>
> Cách dạy nên đi theo mạch:
>
> **đời thường → chuyên môn → bảng dữ liệu → bài tập áp dụng.**

---

# 1. Bài 13 nối tiếp Bài 11 và 12 như thế nào?

Bài 11:

```text
CSDL = tập hợp dữ liệu có liên quan,
được lưu trữ có tổ chức.
```

Bài 12:

```text
Hệ QTCSDL = phần mềm giúp
tạo lập, cập nhật, truy xuất và bảo vệ CSDL.
```

Bài 13 hỏi:

> **Bên trong CSDL, dữ liệu được tổ chức theo mô hình nào?**

Một mô hình rất phổ biến:

```text
MÔ HÌNH DỮ LIỆU QUAN HỆ
```

Trong mô hình này:

```text
Dữ liệu
→ tổ chức thành các BẢNG
→ các bảng có QUAN HỆ với nhau.
```

---

# 2. Trọng tâm của bài

Học sinh cần nắm:

```text
1. Mô hình dữ liệu quan hệ.
2. CSDL quan hệ.
3. Bảng – hàng – cột.
4. Bản ghi – trường/thuộc tính.
5. Kiểu dữ liệu.
6. Khóa.
7. Khóa chính.
8. Khóa ngoài.
9. Liên kết dữ liệu.
```

---

# 3. Phân bổ 100 phút

| Thời gian | Nội dung |
|---|---|
| 0–10 phút | Khởi động: một bảng khổng lồ có tốt không? |
| 10–23 phút | Mô hình dữ liệu quan hệ và CSDL quan hệ |
| 23–38 phút | Bảng – hàng – cột – bản ghi – trường |
| 38–48 phút | Kiểu dữ liệu |
| 48–66 phút | Khóa và khóa chính |
| 66–82 phút | Khóa ngoài và liên kết dữ liệu |
| 82–94 phút | Tình huống Học sinh – Môn học – Điểm |
| 94–100 phút | Mini Test + chốt bài |

---

# 4. Khởi động – Có nên nhét mọi thứ vào một bảng?

Giả sử trường quản lí:

```text
Học sinh
Lớp
Môn học
Điểm
Giáo viên
```

Một bạn đề xuất:

| Mã HS | Họ tên | Lớp | Mã môn | Tên môn | Giáo viên | Điểm |
|---|---|---|---|---|---|---:|
| HS01 | An | 11A1 | TOAN | Toán | Cô Lan | 8 |
| HS01 | An | 11A1 | TIN | Tin học | Thầy Minh | 9 |
| HS02 | Bình | 11A1 | TOAN | Toán | Cô Lan | 7 |

Hỏi:

> Có dữ liệu nào bị lặp?

Ta thấy:

```text
HS01 – An – 11A1
```

lặp nhiều lần.

Thông tin:

```text
TOAN – Toán – Cô Lan
```

cũng có thể lặp cho hàng trăm học sinh.

---

# 5. Cách tổ chức hợp lí hơn

Ta có thể chia:

```text
HOCSINH
MONHOC
DIEM
```

## HOCSINH

| MaHS | HoTen | Lop |
|---|---|---|
| HS01 | An | 11A1 |
| HS02 | Bình | 11A1 |

## MONHOC

| MaMon | TenMon |
|---|---|
| TOAN | Toán |
| TIN | Tin học |

## DIEM

| MaHS | MaMon | Diem |
|---|---|---:|
| HS01 | TOAN | 8 |
| HS01 | TIN | 9 |
| HS02 | TOAN | 7 |

Ta không phải chép tên An, lớp 11A1, tên môn Toán… ở mọi dòng.

---

# 6. Vì sao gọi là “quan hệ”?

Trong CSDL quan hệ:

> Dữ liệu được chia thành các bảng, các bảng có thể liên hệ nhau nhờ những trường chung hoặc trường tham chiếu.

Ví dụ:

```text
HOCSINH.MaHS
      │
      └────── DIEM.MaHS

MONHOC.MaMon
      │
      └────── DIEM.MaMon
```

---

# 7. Mô hình dữ liệu quan hệ

## Đời thường

> “Chia dữ liệu thành nhiều bảng có ý nghĩa rõ ràng rồi dùng mã để nối chúng lại.”

## Chuyên môn

> **Mô hình dữ liệu quan hệ** tổ chức dữ liệu thành các bảng dữ liệu của các đối tượng có các thuộc tính giống nhau; các bảng có thể có quan hệ với nhau.

---

# 8. CSDL quan hệ là gì?

> **CSDL quan hệ là CSDL lưu trữ dữ liệu dưới dạng các bảng có quan hệ với nhau.**

Mẹo:

```text
CSDL quan hệ
=
BẢNG
+
QUAN HỆ GIỮA CÁC BẢNG
```

---

# 9. Ví dụ SGK – CSDL âm nhạc

Bốn bảng:

```text
NHACSI
CASI
BANNHAC
BANTHUAM
```

## NHACSI

| Aid | TenNS |
|---:|---|
| 1 | Đỗ Nhuận |
| 2 | Văn Cao |
| 3 | Hoàng Việt |
| 4 | Nguyễn Tài Tuệ |

## CASI

| Sid | TenCS |
|---|---|
| TK | Trần Khánh |
| LD | Lê Dung |
| TN | Tân Nhân |
| QH | Quốc Hương |

## BANNHAC

| Mid | Aid | TenBN |
|---|---:|---|
| 0001 | 1 | Du kích sông Thao |
| 0002 | 2 | Trường ca Sông Lô |
| 0003 | 3 | Tình ca |
| 0004 | 4 | Xa khơi |

## BANTHUAM

| Mid | Sid |
|---|---|
| 0001 | TK |
| 0001 | LD |
| 0002 | TK |
| 0003 | TN |
| 0004 | QH |

---

# 10. Đọc dữ liệu bằng nhiều bảng

Câu hỏi:

> Ai sáng tác “Trường ca Sông Lô”?

Từ `BANNHAC`:

```text
Trường ca Sông Lô
→ Aid = 2
```

Sang `NHACSI`:

```text
Aid = 2
→ Văn Cao
```

Kết quả:

```text
Trường ca Sông Lô
→ Văn Cao
```

---

# 11. Tại sao BANTHUAM chỉ cần mã?

Ví dụ:

```text
0004 | QH
```

Ta suy ra:

```text
0004 → Xa khơi
QH   → Quốc Hương
```

Không cần lưu lại cả:

```text
0004 | Xa khơi | QH | Quốc Hương
```

ở mọi nơi.

---

# 12. Bảng – hàng – cột

Một bảng gồm:

```text
HÀNG
CỘT
```

Trong CSDL:

```text
Hàng → Bản ghi
Cột → Trường
```

---

# 13. Bản ghi là gì?

## Đời thường

> “Một hàng là hồ sơ của một đối tượng cụ thể.”

## Chuyên môn

> **Bản ghi (record)** là tập hợp thông tin về một đối tượng cụ thể được quản lí trong bảng.

Ví dụ:

```text
(2, Văn Cao)
```

là một bản ghi trong bảng NHACSI.

---

# 14. Trường là gì?

## Đời thường

> “Mỗi cột là một loại thông tin mà ta muốn ghi cho mọi đối tượng.”

## Chuyên môn

> **Trường (field)** là một cột của bảng, thể hiện một thuộc tính của đối tượng.

Ví dụ bảng NHACSI có hai trường:

```text
Aid
TenNS
```

---

# 15. Thuật ngữ thường gặp

```text
Row / Record / Tuple
→ hàng / bản ghi

Column / Field / Attribute
→ cột / trường / thuộc tính
```

Ở lớp 11 ưu tiên:

```text
Bản ghi
Trường
Thuộc tính
```

---

# 16. Bài tập nhanh

| MaSP | TenSP | Gia |
|---|---|---:|
| SP01 | Chuột | 250000 |
| SP02 | Bàn phím | 500000 |

Hỏi:

```text
Số bản ghi = 2
Số trường = 3
Các trường = MaSP, TenSP, Gia
```

---

# 17. Kiểu dữ liệu của trường

Ví dụ:

| Trường | Ví dụ |
|---|---|
| SoBaoDanh | 123456 |
| HoTen | Nguyễn Văn An |
| GioiTinh | Nam |
| NgaySinh | 2009-03-12 |
| Diem | 8.50 |
| MaKiThi | K2026 |

Mỗi trường chứa một loại dữ liệu phù hợp.

---

# 18. Đời thường về kiểu dữ liệu

> “Ô ngày sinh không nên cho nhập một câu văn; ô điểm số không nên nhập ‘rất giỏi’ nếu hệ thống yêu cầu số.”

---

# 19. Chuyên môn

> Mỗi trường có một **kiểu dữ liệu**, quy định loại giá trị được lưu trong trường.

Ví dụ:

```text
Số nguyên
Xâu kí tự
Logic
Ngày tháng
Số thực
```

---

# 20. Vì sao cần kiểu dữ liệu?

Hai lí do chính:

```text
1. Hạn chế lãng phí dung lượng lưu trữ.
2. Kiểm soát tính đúng đắn logic của dữ liệu nhập.
```

Ví dụ:

```text
NgaySinh
→ kiểu ngày

"xin chào"
→ không phải dữ liệu ngày hợp lệ.
```

---

# 21. Sang phần quan trọng nhất – Khóa

Bảng:

| HoTen | Lop |
|---|---|
| Nguyễn Văn An | 11A1 |
| Nguyễn Văn An | 11A2 |

Hỏi:

> Dùng Họ tên có xác định chắc chắn đúng một người không?

Không.

Hai người có thể trùng tên.

Ta cần một giá trị:

```text
XÁC ĐỊNH DUY NHẤT
MỖI BẢN GHI.
```

---

# 22. Khóa là gì?

## Đời thường

> “Khóa là dấu hiệu nhận diện để nhìn vào là biết chính xác bản ghi nào.”

## Chuyên môn

> **Khóa** là một trường hoặc một nhóm trường có giá trị đủ để xác định duy nhất một bản ghi trong bảng.

---

# 23. Khóa một trường

| MaHS | HoTen |
|---|---|
| HS001 | An |
| HS002 | Bình |

Nếu `MaHS` không trùng:

```text
MaHS
```

có thể dùng để nhận diện từng học sinh.

---

# 24. Khóa có thể gồm nhiều trường

Bảng điểm:

| MaHS | MaMon | Nam | HocKi | LoaiDiem | Diem |
|---|---|---:|---:|---|---:|
| HS01 | TIN | 2026 | 1 | GK | 8 |
| HS01 | TIN | 2026 | 1 | CK | 9 |

Không trường đơn lẻ nào đủ.

Có thể dùng:

```text
MaHS + MaMon + Nam + HocKi + LoaiDiem
```

để phân biệt dòng điểm.

Đây là:

```text
khóa ghép / khóa gồm nhiều trường.
```

---

# 25. Khóa chính là gì?

Một bảng có thể có nhiều cách nhận diện duy nhất.

Ví dụ:

```text
Số thẻ học sinh
CCCD
```

nếu cả hai đều duy nhất.

Ta chọn một khóa làm:

```text
KHÓA CHÍNH
(PRIMARY KEY)
```

> Khóa chính là khóa được chọn để nhận diện chính thức từng bản ghi trong bảng.

---

# 26. Vì sao thường chọn khóa ít trường?

```text
Ít trường
→ gọn hơn
→ dễ so sánh
→ dễ tìm kiếm
→ dễ tham chiếu
```

Ví dụ:

```text
MaHS
```

tốt hơn một tổ hợp rất dài nếu `MaHS` đã đảm bảo duy nhất.

---

# 27. Khóa chính phải duy nhất

Nếu:

```text
HS001
```

được cấp cho hai học sinh thì không thể xác định một bản ghi duy nhất.

Vì vậy:

```text
Giá trị khóa chính không được trùng.
```

Trong hệ QTCSDL thực tế, khóa chính cũng thường không cho giá trị rỗng/NULL.

---

# 28. Khóa chính trong CSDL âm nhạc

```text
NHACSI.Aid  → PK
CASI.Sid    → PK
BANNHAC.Mid → PK
```

Với `BANTHUAM`, cặp:

```text
(Mid, Sid)
```

là một khóa tự nhiên phù hợp để phân biệt cặp bản nhạc – ca sĩ trong mô hình minh họa.

---

# 29. Tại sao BANTHUAM cần khóa ghép?

`Mid` lặp:

```text
0001 | TK
0001 | LD
```

vì một bản nhạc có thể nhiều ca sĩ hát.

`Sid` cũng có thể lặp:

```text
một ca sĩ
→ hát nhiều bài.
```

Cặp:

```text
(Mid, Sid)
```

mới phân biệt từng quan hệ.

---

# 30. Câu hỏi gài

### Họ tên có luôn làm khóa chính được không?

```text
Không.
```

Vì có thể trùng.

### Lớp có thể làm khóa chính HOCSINH không?

```text
Không.
```

Vì nhiều học sinh cùng lớp.

---

# 31. Khóa ngoài

Trong `BANNHAC`:

```text
Aid
```

cho biết nhạc sĩ sáng tác.

Tên nhạc sĩ nằm ở `NHACSI`.

```text
NHACSI.Aid = 2
→ Văn Cao

BANNHAC.Aid = 2
→ bản nhạc thuộc Văn Cao
```

---

# 32. Khóa ngoài là gì?

## Đời thường

> “Khóa ngoài là cái mã mang từ bảng khác sang để biết bản ghi này liên quan tới ai/cái gì.”

## Chuyên môn

> **Khóa ngoài (foreign key)** là một trường hoặc nhóm trường tham chiếu tới khóa chính của bảng khác, giúp tạo liên kết giữa các bảng.

---

# 33. Ví dụ

```text
NHACSI.Aid
→ PK

BANNHAC.Aid
→ FK
→ tham chiếu NHACSI.Aid
```

---

# 34. Khóa ngoài của BANTHUAM

```text
Mid
→ FK tới BANNHAC.Mid

Sid
→ FK tới CASI.Sid
```

Một bảng có thể có:

```text
nhiều khóa ngoài.
```

---

# 35. Khóa ngoài có thể lặp

Ví dụ:

| Mid | Aid |
|---|---:|
| 0001 | 2 |
| 0002 | 2 |

`Aid = 2` lặp vì:

```text
một nhạc sĩ có thể sáng tác nhiều bản nhạc.
```

Khóa ngoài không có yêu cầu duy nhất như khóa chính.

---

# 36. Phân biệt PK và FK

| Khóa chính | Khóa ngoài |
|---|---|
| Nhận diện bản ghi trong chính bảng | Tạo liên hệ tới bảng khác |
| Không trùng | Có thể lặp |
| Bảng chọn một khóa chính | Bảng có thể có nhiều khóa ngoài |
| `BANNHAC.Mid` | `BANNHAC.Aid` |

Mẹo:

```text
PRIMARY KEY
→ “TÔI LÀ AI?”

FOREIGN KEY
→ “TÔI LIÊN QUAN ĐẾN AI?”
```

---

# 37. Liên kết dữ liệu

Nhờ:

```text
BANNHAC.Aid = NHACSI.Aid
```

ta có thể ghép:

```text
Tên bản nhạc
+
Tên nhạc sĩ.
```

> Việc dùng khóa ngoài để ghép dữ liệu từ các bảng có quan hệ được gọi là **liên kết dữ liệu theo khóa**.

---

# 38. Tại sao không lưu luôn TenNS trong BANNHAC?

Nếu:

| Mid | TenBN | Aid | TenNS |
|---|---|---:|---|
| 0001 | Bài A | 2 | Văn Cao |
| 0002 | Bài B | 2 | Văn Cao |
| 0003 | Bài C | 2 | Văn Cao |

thì tên `Văn Cao` lặp nhiều lần.

Dùng:

```text
Aid = 2
```

rồi liên kết tới `NHACSI` giúp dữ liệu gọn hơn và giảm lặp.

---

# 39. Sơ đồ quan hệ âm nhạc

```text
NHACSI
PK Aid
  │
  │ Aid
  ▼
BANNHAC
PK Mid
FK Aid
  │
  │ Mid
  ▼
BANTHUAM
FK Mid
FK Sid
  │
  │ Sid
  ▼
CASI
PK Sid
```

---

# 40. Ví dụ LOP – HOCSINH

## LOP

| MaLop | TenLop |
|---|---|
| L01 | 11A1 |
| L02 | 11A2 |

## HOCSINH

| MaHS | HoTen | MaLop |
|---|---|---|
| HS01 | An | L01 |
| HS02 | Bình | L01 |

Khóa:

```text
LOP.MaLop       → PK
HOCSINH.MaHS    → PK
HOCSINH.MaLop   → FK tới LOP.MaLop
```

---

# 41. Nếu khóa ngoài trỏ tới giá trị không tồn tại?

Ví dụ:

```text
HOCSINH.MaLop = L99
```

nhưng `LOP` không có `L99`.

Dữ liệu liên kết bị sai.

Trong Hệ QTCSDL, ràng buộc khóa ngoài có thể giúp ngăn điều này.

Đây là cầu nối sang Bài 14.

---

# 42. Bài luyện tập SGK – CSDL học tập

Các bảng:

```text
HOCSINH
(họ tên, CCCD, số thẻ học sinh, ngày sinh, địa chỉ)

MONHOC
(tên môn, mã môn)

DIEM
(số thẻ học sinh, mã môn, năm, học kì, loại điểm, điểm)
```

---

# 43. Khóa HOCSINH

Có thể cân nhắc:

```text
SoTheHS
```

làm khóa chính vì thuận tiện trong hệ thống trường.

`CCCD` cũng có tính duy nhất nếu dữ liệu đầy đủ và hợp lệ, nhưng mã nội bộ học sinh thường thuận tiện cho nghiệp vụ.

Điểm quan trọng:

```text
PK phải duy nhất và phù hợp bài toán.
```

---

# 44. Khóa MONHOC

```text
MaMon
→ PK
```

Tên môn:

```text
không nên dùng làm mã nhận diện
nếu đã có MaMon.
```

---

# 45. Khóa DIEM

Một phương án khóa ghép:

```text
SoTheHS
+ MaMon
+ Nam
+ HocKi
+ LoaiDiem
```

vì một học sinh có:

```text
nhiều môn
nhiều năm
nhiều học kì
nhiều loại điểm.
```

---

# 46. Khóa ngoài DIEM

```text
SoTheHS
→ FK tới HOCSINH

MaMon
→ FK tới MONHOC
```

---

# 47. Ví dụ cửa hàng

## KHACHHANG

```text
MaKH – PK
HoTen
SDT
```

## DONHANG

```text
MaDH – PK
MaKH – FK
NgayDat
```

`DONHANG.MaKH` trả lời:

```text
Đơn hàng này của khách nào?
```

---

# 48. Ví dụ mạng xã hội

## NGUOIDUNG

```text
UserID – PK
HoTen
```

## BAIVIET

```text
PostID – PK
UserID – FK
NoiDung
```

`BAIVIET.UserID`:

```text
Bài này do ai đăng?
```

---

# 49. Ví dụ game

## NGUOICHOI

```text
PlayerID – PK
TenNhanVat
```

## GIAODICH

```text
TransactionID – PK
PlayerID – FK
SoXu
```

`PlayerID` có thể lặp nhiều lần trong `GIAODICH`.

Đó là bình thường vì:

```text
một người
→ nhiều giao dịch.
```

---

# 50. Những hiểu nhầm cần sửa

```text
1. “Tên cột có chữ Mã thì tự động là khóa.”
→ Sai.

2. “Khóa chính luôn một cột.”
→ Sai, có thể là nhóm trường.

3. “Khóa ngoài không được lặp.”
→ Sai.

4. “Một bảng chỉ có một khóa ngoài.”
→ Sai.

5. “Họ tên luôn là khóa tốt.”
→ Sai.

6. “Một bảng có nhiều khóa chính.”
→ Một bảng chọn một khóa chính,
   nhưng khóa chính có thể gồm nhiều trường.
```

---

# 51. Vận dụng – kì thi tốt nghiệp

Có thể đề xuất:

## THISINH

```text
SBD – PK
HoTen
NgaySinh
MaPhong – FK
```

## MONTHI

```text
MaMon – PK
TenMon
```

## PHONGTHI

```text
MaPhong – PK
DiaDiem
```

## KETQUA

```text
SBD – FK
MaMon – FK
Diem
```

Khóa chính `KETQUA` có thể là:

```text
(SBD, MaMon)
```

nếu mỗi thí sinh có một kết quả cho mỗi môn.

---

# 52. Không có một phương án thiết kế duy nhất

Khi học sinh tự đề xuất bảng, kiểm tra:

```text
Bảng có ý nghĩa rõ không?
Mỗi bản ghi đại diện cái gì?
PK có duy nhất không?
FK có tham chiếu đúng không?
Có lặp dữ liệu không cần thiết không?
```

Không cần ép mọi bài vận dụng phải giống hệt một đáp án.

---

# 53. Mini Test

1. CSDL quan hệ lưu dữ liệu dưới dạng gì?  
   **Các bảng có quan hệ với nhau.**

2. Hàng gọi là gì?  
   **Bản ghi.**

3. Cột gọi là gì?  
   **Trường/thuộc tính.**

4. Vai trò khóa?  
   **Xác định duy nhất bản ghi.**

5. Khóa chính có thể gồm nhiều trường?  
   **Có.**

6. Khóa ngoài dùng làm gì?  
   **Liên kết tới bảng khác.**

7. Khóa ngoài có thể lặp?  
   **Có.**

8. `BANNHAC.Mid` là gì nếu nhận diện mỗi bài?  
   **Khóa chính.**

9. `BANNHAC.Aid` là gì nếu tham chiếu `NHACSI.Aid`?  
   **Khóa ngoài.**

10. Vì sao cần kiểu dữ liệu?  
    **Lưu đúng loại và kiểm soát dữ liệu hợp lí.**

---

# 54. Bảng thuật ngữ chuyên môn ↔ đời thường

| Chuyên môn | Cách nói gần gũi |
|---|---|
| Table / Relation | Bảng dữ liệu |
| Record / Row | Một hàng – hồ sơ của một đối tượng |
| Field / Attribute | Một cột – một loại thông tin |
| Data type | Loại dữ liệu được phép lưu |
| Key | Dấu hiệu nhận diện duy nhất |
| Primary key | Mã nhận diện chính |
| Foreign key | Mã nối sang bảng khác |
| Data linkage | Ghép thông tin giữa các bảng |

---

# 55. Sơ đồ chốt

```text
CSDL QUAN HỆ
     │
     ▼
   BẢNG
  /    \
HÀNG   CỘT
 │      │
 ▼      ▼
Bản    Trường
ghi      │
         ▼
    Kiểu dữ liệu

     │
     ▼
    KHÓA
  /       \
PK         FK
│          │
Nhận       Nối
diện       bảng
duy nhất   khác
```

---

# 56. Sáu câu bắt buộc trả lời được

```text
1. CSDL quan hệ là gì?
2. Bản ghi là gì?
3. Trường là gì?
4. Khóa chính là gì?
5. Khóa ngoài là gì?
6. Vì sao cần kiểu dữ liệu?
```

Nếu học sinh tự giải thích được bằng ví dụ thì bài đã hiểu.

---

# 57. Tóm tắt cuối vở

```text
BÀI 13 – CSDL QUAN HỆ

CSDL quan hệ:
dữ liệu lưu trong các bảng có quan hệ.

Hàng = bản ghi.
Cột = trường/thuộc tính.

Mỗi trường có kiểu dữ liệu.

Khóa:
trường/nhóm trường xác định duy nhất bản ghi.

Khóa chính:
khóa được chọn làm nhận diện chính.

Khóa ngoài:
trường/nhóm trường tham chiếu PK bảng khác.

PK:
“Tôi là ai?”

FK:
“Tôi liên quan tới ai?”

FK giúp liên kết dữ liệu giữa các bảng.
```

---

# 58. Gợi ý AI code web

Trang nên có:

```text
Hero
↓
Một bảng lớn vs nhiều bảng liên kết
↓
CSDL âm nhạc 4 bảng
↓
Interactive đi tìm Văn Cao
↓
Click hàng → Bản ghi
↓
Click cột → Trường
↓
Kiểu dữ liệu
↓
Chọn khóa chính
↓
Demo khóa ghép
↓
PK/FK animation
↓
Học sinh – Môn học – Điểm
↓
Vận dụng kì thi
↓
Mini Test
```

Nên dùng các component:

- highlight hàng/cột;
- kéo thả PK/FK;
- nối mũi tên giữa hai bảng;
- câu gài “khóa ngoài có lặp được không?”;
- accordion đáp án.

---

# 59. Không đi trước sang Bài 14

Không biến trọng tâm Bài 13 thành:

```sql
CREATE TABLE
PRIMARY KEY
FOREIGN KEY
SELECT
JOIN
```

Chỉ kết bài bằng:

> “Bài 14 sẽ dùng SQL để thực sự tạo các bảng, khai báo khóa và thao tác dữ liệu.”

---

# 60. Nguồn đối chiếu

Nội dung bám theo **Tin học 11 – Kết nối tri thức – Bài 13: Cơ sở dữ liệu quan hệ**, gồm:

- mô hình dữ liệu quan hệ;
- CSDL quan hệ;
- bản ghi;
- trường/thuộc tính;
- kiểu dữ liệu;
- khóa;
- khóa chính;
- khóa ngoài;
- liên kết dữ liệu;
- luyện tập CSDL học tập;
- vận dụng kì thi tốt nghiệp.

Các ví dụ trường học, cửa hàng, mạng xã hội và game được thêm để học sinh dễ hình dung, không thay đổi phạm vi kiến thức.
