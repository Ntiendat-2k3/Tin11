# BÀI 14 – SQL: NGÔN NGỮ TRUY VẤN CÓ CẤU TRÚC

**Giáo trình gia sư Tin học 11 – Kết nối tri thức**  
**Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu**  
**Thời lượng cốt lõi: khoảng 100 phút**  
**Có thêm phần luyện tập mở rộng để dùng nếu dạy 2 buổi hoặc cho học sinh tự luyện**

> **Tinh thần của bài học:** đây là bài đầu tiên học sinh thực sự “ra lệnh” cho CSDL.
>
> Không nên bắt học sinh học thuộc hàng loạt cú pháp ngay từ đầu. Mỗi câu SQL nên được dạy theo mạch:
>
> **Câu hỏi bằng tiếng Việt → xác định mình muốn làm gì → chọn câu lệnh → đọc câu SQL bằng lời → chạy thử trên dữ liệu nhỏ → nhìn kết quả.**
>
> Mục tiêu không phải biến học sinh lớp 11 thành lập trình viên CSDL, mà giúp học sinh hiểu ở mức nguyên lí:
>
> - SQL dùng để làm gì;
> - DDL, DML, DCL khác nhau thế nào;
> - cách tạo CSDL/bảng;
> - khai báo khóa chính, khóa ngoài;
> - thêm, sửa, xóa, lấy dữ liệu;
> - lọc, sắp xếp, liên kết;
> - cấp và thu hồi quyền.
>
> **Lưu ý:** cú pháp chi tiết có thể khác nhẹ giữa MySQL, PostgreSQL, SQL Server, Oracle… Tài liệu dùng cú pháp SQL phổ thông, ưu tiên đúng tinh thần SGK.

---

# 1. Mạch nối từ Bài 13

Bài 13 đã có mô hình:

```text
NHACSI
CASI
BANNHAC
BANTHUAM
```

Đã biết:

```text
Bảng
Bản ghi
Trường
Kiểu dữ liệu
Khóa chính
Khóa ngoài
Liên kết dữ liệu
```

Bài 14 hỏi:

> “Làm thế nào để thực sự nói với Hệ QTCSDL:
>
> - hãy tạo bảng này;
> - hãy thêm dữ liệu;
> - hãy tìm dữ liệu;
> - hãy sửa dữ liệu;
> - hãy xóa dữ liệu;
> - hãy nối hai bảng;
> - hãy cho người dùng này quyền xem dữ liệu?”

Câu trả lời:

```text
SQL
```

---

# 2. SQL là gì?

SQL viết đầy đủ:

```text
Structured Query Language
```

Dịch:

```text
Ngôn ngữ truy vấn có cấu trúc
```

## Cách nói đời thường

> “SQL là ngôn ngữ dùng để nói chuyện với hệ quản trị CSDL quan hệ.”

Ví dụ:

```sql
SELECT TenBN
FROM bannhac
WHERE Aid = 2;
```

Có thể đọc gần như tiếng Việt:

```text
CHỌN TenBN
TỪ bảng bannhac
VỚI điều kiện Aid = 2
```

---

# 3. SQL khác lập trình trực tiếp ở điểm nào?

Giả sử muốn:

> “Lấy tên các bản nhạc có Aid = 2.”

## Cách lập trình thủ tục kiểu cũ

Ta có thể phải nghĩ:

```text
Mở tệp dữ liệu
↓
Đọc từng dòng
↓
Tách các trường
↓
Kiểm tra Aid
↓
Nếu Aid = 2
→ lấy TenBN
↓
Lặp tới cuối tệp
```

Người lập trình phải mô tả:

```text
LÀM NHƯ THẾ NÀO?
```

---

# 4. Cách SQL

Ta viết:

```sql
SELECT TenBN
FROM bannhac
WHERE Aid = 2;
```

Ta chủ yếu nói:

```text
TÔI MUỐN DỮ LIỆU GÌ?
```

Còn Hệ QTCSDL quyết định cách thực thi bên trong.

Đây là lợi ích lớn của ngôn ngữ truy vấn.

---

# 5. Đời thường vs chuyên môn

## Đời thường

> “Mình nói món mình muốn gọi, không phải xuống bếp mô tả từng bước nấu.”

## Chuyên môn

> SQL mang tính **khai báo**: người dùng mô tả yêu cầu, Hệ QTCSDL đảm nhận nhiều chi tiết về cách truy cập và thực hiện.

Không cần đi sâu “declarative programming” ở lớp 11.

---

# 6. Vì sao SQL quan trọng?

SQL được dùng rộng rãi với CSDL quan hệ.

Nhiều hệ QTCSDL hỗ trợ SQL, ví dụ:

```text
MySQL
PostgreSQL
SQL Server
Oracle Database
SQLite
```

Cú pháp giữa các hệ có thể có khác biệt nhỏ, nhưng nhiều ý tưởng cốt lõi giống nhau.

---

# 7. Ba thành phần lớn của SQL trong SGK

```text
DDL
DML
DCL
```

## DDL

```text
Data Definition Language
Ngôn ngữ định nghĩa dữ liệu
```

Dùng để:

```text
tạo CSDL
tạo bảng
sửa định nghĩa bảng
khai báo khóa
```

## DML

```text
Data Manipulation Language
Ngôn ngữ thao tác dữ liệu
```

Dùng để:

```text
thêm
sửa
xóa
truy xuất
```

## DCL

```text
Data Control Language
Ngôn ngữ kiểm soát dữ liệu
```

Dùng để:

```text
cấp quyền
thu hồi quyền
```

---

# 8. Mẹo nhớ DDL – DML – DCL

```text
DDL
→ DEFINE
→ tạo “khung”

DML
→ MANIPULATE
→ thao tác dữ liệu

DCL
→ CONTROL
→ kiểm soát quyền
```

---

# 9. Phân bổ 100 phút

| Thời gian | Nội dung |
|---|---|
| 0–10 phút | SQL là gì? SQL vs lập trình trực tiếp |
| 10–30 phút | DDL: CREATE DATABASE, CREATE TABLE, kiểu dữ liệu |
| 30–42 phút | PRIMARY KEY, FOREIGN KEY |
| 42–68 phút | DML: SELECT, WHERE, ORDER BY, INSERT, UPDATE, DELETE |
| 68–82 phút | Liên kết bảng bằng JOIN |
| 82–90 phút | Hàm AVG và ý tưởng hàm tổng hợp |
| 90–96 phút | DCL: GRANT, REVOKE |
| 96–100 phút | Mini Test + chốt |

> Nếu dạy một buổi 100 phút, ưu tiên:
>
> ```text
> SELECT
> FROM
> WHERE
> CREATE TABLE
> INSERT
> UPDATE
> DELETE
> PRIMARY KEY / FOREIGN KEY
> JOIN ở mức cơ bản
> ```
>
> Phần quyền có thể dạy gọn.

---

# 10. CSDL mẫu dùng xuyên suốt bài

Ta tiếp tục CSDL âm nhạc.

## NHACSI

```text
Aid
TenNS
```

## CASI

```text
Sid
TenCS
```

## BANNHAC

```text
Mid
Aid
TenBN
```

## BANTHUAM

```text
Mid
Sid
```

Quan hệ:

```text
NHACSI.Aid
    ↑
BANNHAC.Aid

BANNHAC.Mid
    ↑
BANTHUAM.Mid

CASI.Sid
    ↑
BANTHUAM.Sid
```

---

# 11. DDL – CREATE DATABASE

Muốn tạo một CSDL tên:

```text
music
```

dùng:

```sql
CREATE DATABASE music;
```

Đọc:

```text
CREATE DATABASE
→ tạo cơ sở dữ liệu

music
→ tên CSDL
```

---

# 12. Dấu chấm phẩy

Trong các ví dụ SQL:

```text
;
```

dùng để kết thúc một câu lệnh.

Ví dụ:

```sql
CREATE DATABASE music;
```

Nên tạo thói quen viết dấu `;`.

---

# 13. CREATE TABLE

Ví dụ tạo bảng nhạc sĩ:

```sql
CREATE TABLE nhacsi (
    Aid INT,
    TenNS VARCHAR(100)
);
```

Đọc:

```text
Tạo bảng nhacsi

Aid
→ số nguyên

TenNS
→ xâu tối đa 100 kí tự
```

---

# 14. Cấu trúc CREATE TABLE

Mẫu:

```sql
CREATE TABLE TenBang (
    TenTruong1 KieuDuLieu,
    TenTruong2 KieuDuLieu,
    ...
);
```

Mỗi trường cần:

```text
Tên trường
+
Kiểu dữ liệu
```

---

# 15. Một số kiểu dữ liệu SGK giới thiệu

| Kiểu | Ý nghĩa |
|---|---|
| `CHAR(n)` | Xâu độ dài cố định |
| `VARCHAR(n)` | Xâu độ dài thay đổi, tối đa n |
| `BOOLEAN` | Đúng/Sai |
| `INT` / `INTEGER` | Số nguyên |
| `REAL` | Số thực |
| `DATE` | Ngày |
| `TIME` | Thời gian |

---

# 16. CHAR và VARCHAR khác nhau thế nào?

## CHAR(n)

Dành cho dữ liệu có độ dài cố định.

Ví dụ:

```text
Mã có đúng 4 kí tự:
0001
A123
```

Có thể dùng:

```sql
CHAR(4)
```

## VARCHAR(n)

Độ dài thay đổi, không quá `n`.

Ví dụ họ tên:

```text
An
Nguyễn Văn Minh
```

có thể dùng:

```sql
VARCHAR(100)
```

---

# 17. Không cần quá ám ảnh chọn kiểu hoàn hảo

Ở bài 14, mục tiêu:

```text
hiểu kiểu dữ liệu
→ giúp khai báo cấu trúc bảng.
```

Không cần đi sâu:

```text
TINYINT
BIGINT
DECIMAL precision
TEXT storage
collation
charset
```

---

# 18. Tạo bảng BANNHAC

Một phiên bản dễ hiểu:

```sql
CREATE TABLE bannhac (
    Mid CHAR(4),
    Aid INT,
    TenBN VARCHAR(100)
);
```

---

# 19. Tạo bảng CASI

```sql
CREATE TABLE casi (
    Sid VARCHAR(10),
    TenCS VARCHAR(100)
);
```

---

# 20. PRIMARY KEY

Bài 13:

```text
Khóa chính
→ nhận diện duy nhất bản ghi.
```

Trong SQL:

```text
PRIMARY KEY
```

Ví dụ khai báo ngay khi tạo bảng:

```sql
CREATE TABLE nhacsi (
    Aid INT PRIMARY KEY,
    TenNS VARCHAR(100)
);
```

---

# 21. Khai báo PRIMARY KEY riêng

Có thể viết:

```sql
CREATE TABLE bannhac (
    Mid CHAR(4),
    Aid INT,
    TenBN VARCHAR(100),
    PRIMARY KEY (Mid)
);
```

Hai cách đều giúp chỉ ra:

```text
Mid là khóa chính.
```

---

# 22. ALTER TABLE

Nếu bảng đã tạo rồi nhưng muốn thay đổi định nghĩa:

```sql
ALTER TABLE bannhac
ADD PRIMARY KEY (Mid);
```

Ý tưởng:

```text
ALTER TABLE
→ thay đổi cấu trúc/định nghĩa bảng.
```

---

# 23. Không nhầm ALTER với UPDATE

```text
ALTER TABLE
→ thay đổi CẤU TRÚC bảng.

UPDATE
→ thay đổi DỮ LIỆU trong các dòng.
```

Ví dụ:

```text
Thêm khóa chính
→ ALTER

Đổi tên nhạc sĩ
→ UPDATE
```

---

# 24. FOREIGN KEY

Bài 13:

```text
BANNHAC.Aid
→ tham chiếu NHACSI.Aid
```

Trong SQL:

```sql
FOREIGN KEY (Aid)
REFERENCES nhacsi(Aid)
```

---

# 25. Tạo BANNHAC đầy đủ hơn

```sql
CREATE TABLE bannhac (
    Mid CHAR(4),
    Aid INT,
    TenBN VARCHAR(100),
    PRIMARY KEY (Mid),
    FOREIGN KEY (Aid) REFERENCES nhacsi(Aid)
);
```

Đọc:

```text
Mid → PK

Aid → FK
      tham chiếu
      nhacsi(Aid)
```

---

# 26. Tạo BANTHUAM

```sql
CREATE TABLE banthuam (
    Mid CHAR(4),
    Sid VARCHAR(10),
    PRIMARY KEY (Mid, Sid),
    FOREIGN KEY (Mid) REFERENCES bannhac(Mid),
    FOREIGN KEY (Sid) REFERENCES casi(Sid)
);
```

Đây là ví dụ rất tốt vì có:

```text
khóa chính ghép
+
2 khóa ngoài.
```

---

# 27. Đọc câu tạo BANTHUAM bằng lời

```text
Tạo bảng banthuam.

Mỗi dòng có:
Mid
Sid.

Cặp Mid + Sid
→ xác định duy nhất một dòng.

Mid
→ phải tham chiếu một bản nhạc tồn tại.

Sid
→ phải tham chiếu một ca sĩ tồn tại.
```

---

# 28. Câu gài về khóa

Sai:

```sql
PRIMARY KEY (Mid);
```

nếu trong `banthuam` một bài có thể được nhiều ca sĩ thể hiện.

Vì:

```text
Mid sẽ lặp.
```

Trong mô hình này:

```sql
PRIMARY KEY (Mid, Sid)
```

hợp lí hơn.

---

# 29. Sang DML – SELECT

Đây là lệnh quan trọng nhất khi học truy xuất.

Mẫu:

```sql
SELECT <dữ liệu cần lấy>
FROM <bảng>;
```

Ví dụ:

```sql
SELECT TenNS
FROM nhacsi;
```

Đọc:

```text
Lấy cột TenNS
từ bảng nhacsi.
```

---

# 30. SELECT nhiều cột

```sql
SELECT Mid, TenBN
FROM bannhac;
```

Kết quả có hai cột:

```text
Mid
TenBN
```

---

# 31. SELECT *

Dấu:

```text
*
```

thường có nghĩa:

```text
tất cả các cột.
```

Ví dụ:

```sql
SELECT *
FROM nhacsi;
```

Đọc:

> Lấy tất cả các cột và tất cả các dòng của bảng nhacsi.

---

# 32. WHERE – lọc dòng

Câu hỏi:

> Chỉ lấy bản nhạc có `Aid = 2`.

SQL:

```sql
SELECT Mid, TenBN
FROM bannhac
WHERE Aid = 2;
```

---

# 33. Đọc WHERE bằng lời

```text
SELECT Mid, TenBN
→ tôi muốn xem Mid và TenBN

FROM bannhac
→ dữ liệu nằm trong bannhac

WHERE Aid = 2
→ chỉ lấy dòng có Aid bằng 2
```

---

# 34. SELECT và WHERE là phần nên dạy thật chậm

Học sinh phải phân biệt:

```text
SELECT
→ lấy CỘT nào?

WHERE
→ lấy DÒNG nào?
```

Mẹo:

```text
SELECT = chiều DỌC
WHERE  = điều kiện lọc HÀNG
```

---

# 35. Ví dụ cực dễ

Bảng:

| MaHS | HoTen | Lop |
|---|---|---|
| HS01 | An | 11A1 |
| HS02 | Bình | 11A2 |
| HS03 | Chi | 11A1 |

SQL:

```sql
SELECT HoTen
FROM hocsinh
WHERE Lop = '11A1';
```

Kết quả:

```text
An
Chi
```

---

# 36. Dữ liệu xâu phải đặt trong dấu nháy

Ví dụ:

```sql
WHERE Lop = '11A1'
```

Không viết:

```sql
WHERE Lop = 11A1
```

vì `11A1` là xâu kí tự.

---

# 37. So sánh số

Ví dụ:

```sql
SELECT HoTen, Diem
FROM diemthi
WHERE Diem >= 8;
```

Các toán tử thường gặp:

```text
=   bằng
>   lớn hơn
<   nhỏ hơn
>=  lớn hơn hoặc bằng
<=  nhỏ hơn hoặc bằng
<>  khác
```

Một số Hệ QTCSDL cũng hỗ trợ `!=` cho “khác”.

---

# 38. AND và OR – phần mở rộng rất hữu ích

Dù SGK tập trung cấu trúc cơ bản, để học sinh viết điều kiện thực tế có thể giới thiệu:

```sql
WHERE Lop = '11A1'
  AND Diem >= 8;
```

`AND`:

```text
cả hai điều kiện cùng đúng.
```

`OR`:

```sql
WHERE Lop = '11A1'
   OR Lop = '11A2';
```

ít nhất một điều kiện đúng.

---

# 39. ORDER BY

Muốn sắp xếp:

```sql
SELECT Mid, TenBN
FROM bannhac
ORDER BY TenBN;
```

Mặc định thường là:

```text
tăng dần.
```

---

# 40. ASC và DESC

```sql
ORDER BY Diem ASC;
```

→ tăng dần.

```sql
ORDER BY Diem DESC;
```

→ giảm dần.

Ví dụ:

```sql
SELECT HoTen, Diem
FROM diemthi
ORDER BY Diem DESC;
```

---

# 41. Kết hợp WHERE + ORDER BY

```sql
SELECT Mid, TenBN
FROM bannhac
WHERE Aid = 2
ORDER BY TenBN;
```

Đọc:

```text
Từ bannhac
→ lấy Mid, TenBN
→ chỉ dòng Aid = 2
→ sắp xếp theo TenBN.
```

---

# 42. INSERT INTO – thêm dữ liệu

Mẫu:

```sql
INSERT INTO TenBang (...)
VALUES (...);
```

Ví dụ:

```sql
INSERT INTO nhacsi (Aid, TenNS)
VALUES (5, 'Phạm Tuyên');
```

Ý nghĩa:

```text
thêm một dòng mới.
```

---

# 43. Thêm nhiều dòng

Tùy hệ QTCSDL, cú pháp phổ biến:

```sql
INSERT INTO casi (Sid, TenCS)
VALUES
    ('TK2', 'Nguyễn Trung Kiên'),
    ('QD', 'Quý Dương'),
    ('YM', 'Y Moan');
```

Nếu công cụ đang dùng không hỗ trợ đúng dạng này, có thể tách thành nhiều `INSERT`.

---

# 44. Vì sao nên ghi tên cột khi INSERT?

Có thể gặp dạng:

```sql
INSERT INTO nhacsi
VALUES (5, 'Phạm Tuyên');
```

Nhưng để học sinh dễ hiểu và an toàn hơn, ưu tiên:

```sql
INSERT INTO nhacsi (Aid, TenNS)
VALUES (5, 'Phạm Tuyên');
```

Ta biết rõ:

```text
giá trị nào vào cột nào.
```

---

# 45. DELETE FROM – xóa dòng

Mẫu:

```sql
DELETE FROM TenBang
WHERE DieuKien;
```

Ví dụ:

```sql
DELETE FROM bannhac
WHERE Mid = '0005';
```

Ý nghĩa:

```text
xóa dòng có Mid = 0005.
```

---

# 46. Cảnh báo cực quan trọng về DELETE

Nếu viết:

```sql
DELETE FROM bannhac;
```

thì có thể xóa:

```text
TẤT CẢ CÁC DÒNG
```

trong bảng.

Do đó với học sinh:

> Mỗi khi viết `DELETE`, hãy tự hỏi “WHERE của mình đâu?”

---

# 47. UPDATE – sửa dữ liệu

Mẫu:

```sql
UPDATE TenBang
SET TenTruong = GiaTri
WHERE DieuKien;
```

Ví dụ:

```sql
UPDATE nhacsi
SET TenNS = 'Hoàng Hiệp'
WHERE Aid = 6;
```

Ý nghĩa:

```text
tìm dòng Aid = 6
→ sửa TenNS thành Hoàng Hiệp.
```

---

# 48. Cảnh báo UPDATE không có WHERE

```sql
UPDATE nhacsi
SET TenNS = 'Hoàng Hiệp';
```

có thể khiến:

```text
mọi dòng
→ cùng tên Hoàng Hiệp.
```

Vì vậy:

```text
UPDATE / DELETE
→ đặc biệt cẩn thận với WHERE.
```

---

# 49. Bộ ba cập nhật

```text
INSERT
→ thêm

UPDATE
→ sửa

DELETE
→ xóa
```

Mẹo:

```text
CRUD gần gũi:
Create data → INSERT
Read        → SELECT
Update      → UPDATE
Delete      → DELETE
```

Không cần bắt học sinh học CRUD nếu không cần; chỉ là mẹo liên hệ.

---

# 50. Liên kết bảng – JOIN

Bài 13 đã biết:

```text
BANNHAC.Aid
→ nối với
NHACSI.Aid
```

Bài 14 thực hiện liên kết bằng SQL.

---

# 51. INNER JOIN cơ bản

```sql
SELECT bannhac.TenBN, nhacsi.TenNS
FROM bannhac
INNER JOIN nhacsi
    ON bannhac.Aid = nhacsi.Aid;
```

Đọc:

```text
Lấy tên bản nhạc và tên nhạc sĩ.

Từ bảng bannhac
nối với nhacsi

theo điều kiện:
Aid của bannhac
=
Aid của nhacsi.
```

---

# 52. Vì sao phải viết tên bảng trước tên cột?

Khi hai bảng cùng có trường:

```text
Aid
```

nếu chỉ viết:

```text
Aid
```

có thể mơ hồ.

Ta ghi:

```text
bannhac.Aid
nhacsi.Aid
```

để nói rõ:

```text
Aid của bảng nào.
```

---

# 53. JOIN bằng đời thường

> “Ta đang ghép hai danh sách dựa trên mã giống nhau.”

Ví dụ:

```text
Bản nhạc:
Aid = 2

Nhạc sĩ:
Aid = 2

→ ghép được.
```

---

# 54. Liên kết BANTHUAM + BANNHAC

Yêu cầu SGK:

> Lấy `Mid`, `Sid` của BANTHUAM và `TenBN` của BANNHAC.

SQL rõ ràng:

```sql
SELECT
    banthuam.Mid,
    banthuam.Sid,
    bannhac.TenBN
FROM banthuam
INNER JOIN bannhac
    ON banthuam.Mid = bannhac.Mid;
```

---

# 55. Liên kết ba bảng

Muốn lấy:

```text
Mid
Sid
TenBN
TenCS
```

ta cần:

```text
BANTHUAM
→ nối BANNHAC bằng Mid

BANTHUAM
→ nối CASI bằng Sid
```

SQL:

```sql
SELECT
    banthuam.Mid,
    banthuam.Sid,
    bannhac.TenBN,
    casi.TenCS
FROM banthuam
INNER JOIN bannhac
    ON banthuam.Mid = bannhac.Mid
INNER JOIN casi
    ON banthuam.Sid = casi.Sid;
```

---

# 56. Cách dạy JOIN cho học sinh yếu

Không đưa SQL ngay.

Bước 1:

```text
BANTHUAM:
0004 | QH
```

Bước 2:

```text
BANNHAC:
0004 → Xa khơi
```

Bước 3:

```text
CASI:
QH → Quốc Hương
```

Bước 4:

```text
0004 | QH | Xa khơi | Quốc Hương
```

Sau đó mới cho câu JOIN.

---

# 57. INNER JOIN hiểu đơn giản

Ở mức bài:

> Chỉ ghép những dòng mà điều kiện nối khớp.

Không cần dạy:

```text
LEFT JOIN
RIGHT JOIN
FULL OUTER JOIN
CROSS JOIN
```

nếu muốn bám sát trọng tâm.

---

# 58. Hàm AVG

SGK minh họa:

```sql
SELECT AVG(tb)
FROM diemtoan_11A;
```

Ý nghĩa:

```text
tính trung bình các giá trị ở cột tb.
```

---

# 59. Hàm tổng hợp – chỉ cần hiểu ý tưởng

Ngoài `AVG`, SQL thực tế thường có:

```text
COUNT
SUM
MIN
MAX
```

Nhưng nếu bám sát bài:

```text
AVG
```

là đủ để minh họa rằng `SELECT` không chỉ lấy cột, mà có thể lấy kết quả của hàm.

---

# 60. Ví dụ COUNT – mở rộng nhẹ

```sql
SELECT COUNT(*)
FROM hocsinh;
```

Đọc:

```text
đếm số dòng.
```

Có thể để trong mục:

```text
Mở rộng
```

không bắt buộc.

---

# 61. DCL – kiểm soát quyền

Bài 12 đã học:

```text
Không phải ai cũng được xem/sửa dữ liệu.
```

SQL có nhóm:

```text
DCL
```

để hỗ trợ kiểm soát quyền.

Hai câu lệnh trọng tâm:

```text
GRANT
REVOKE
```

---

# 62. GRANT

`GRANT`:

```text
cấp quyền.
```

Ví dụ theo dạng SGK:

```sql
GRANT SELECT
ON music.*
TO guest;
```

Ý nghĩa:

```text
Cho guest quyền SELECT
trên tất cả bảng trong CSDL music.
```

> Cú pháp tên người dùng có thể khác tùy Hệ QTCSDL.

---

# 63. REVOKE

`REVOKE`:

```text
thu hồi quyền.
```

Ví dụ:

```sql
REVOKE DELETE
ON music.nhacsi
FROM mod;
```

Ý nghĩa:

```text
Thu hồi quyền DELETE
trên bảng nhacsi
của người dùng mod.
```

---

# 64. Quyền thường gặp

Có thể gặp:

```text
SELECT
INSERT
UPDATE
DELETE
CREATE
ALTER
```

Ý nghĩa gần gũi:

```text
SELECT → xem/lấy
INSERT → thêm
UPDATE → sửa
DELETE → xóa
CREATE → tạo
ALTER  → đổi cấu trúc
```

---

# 65. Đừng biến DCL thành bài quản trị server

Không cần dạy:

```text
CREATE USER
password policy
role hierarchy
network authentication
SSL
```

Bài chỉ cần hiểu:

```text
SQL có thể cấp/thu hồi quyền.
```

---

# 66. Bảng tổng hợp lệnh trọng tâm

| Nhóm | Lệnh | Công dụng |
|---|---|---|
| DDL | `CREATE DATABASE` | Tạo CSDL |
| DDL | `CREATE TABLE` | Tạo bảng |
| DDL | `ALTER TABLE` | Sửa định nghĩa bảng |
| DDL | `PRIMARY KEY` | Khai báo PK |
| DDL | `FOREIGN KEY ... REFERENCES` | Khai báo FK |
| DML | `SELECT` | Lấy dữ liệu |
| DML | `WHERE` | Lọc dòng |
| DML | `ORDER BY` | Sắp xếp |
| DML | `INNER JOIN` | Liên kết bảng |
| DML | `INSERT INTO` | Thêm dữ liệu |
| DML | `UPDATE ... SET` | Sửa dữ liệu |
| DML | `DELETE FROM` | Xóa dữ liệu |
| DCL | `GRANT` | Cấp quyền |
| DCL | `REVOKE` | Thu hồi quyền |

---

# 67. Cách đọc SQL thay vì học vẹt

Ví dụ:

```sql
SELECT Mid, TenBN
FROM bannhac
WHERE Aid = 2
ORDER BY TenBN;
```

Bắt học sinh đọc:

```text
SELECT Mid, TenBN
→ lấy Mid và TenBN

FROM bannhac
→ từ bảng bannhac

WHERE Aid = 2
→ chỉ dòng Aid = 2

ORDER BY TenBN
→ sắp xếp theo tên bản nhạc
```

Nếu đọc được:

```text
học sinh hiểu câu lệnh.
```

---

# 68. Quy trình 5 bước viết SELECT

Khi đề bài bằng tiếng Việt:

> “Lấy tên học sinh lớp 11A1 có điểm từ 8 trở lên, sắp xếp điểm giảm dần.”

Làm:

```text
1. Lấy gì?
→ HoTen, Diem

2. Từ đâu?
→ bảng diemlop

3. Điều kiện?
→ Lop = '11A1'
→ Diem >= 8

4. Sắp xếp?
→ Diem giảm dần

5. Viết SQL.
```

Ví dụ:

```sql
SELECT HoTen, Diem
FROM diemlop
WHERE Lop = '11A1'
  AND Diem >= 8
ORDER BY Diem DESC;
```

---

# 69. Dữ liệu mẫu luyện tập – HOCSINH

| MaHS | HoTen | Lop | DiemTin |
|---|---|---|---:|
| HS01 | An | 11A1 | 8.5 |
| HS02 | Bình | 11A1 | 6.5 |
| HS03 | Chi | 11A2 | 9.0 |
| HS04 | Dũng | 11A1 | 7.5 |

---

# 70. Bài tập SELECT 1

Yêu cầu:

> Lấy tất cả học sinh.

```sql
SELECT *
FROM hocsinh;
```

---

# 71. Bài tập SELECT 2

> Chỉ lấy họ tên.

```sql
SELECT HoTen
FROM hocsinh;
```

---

# 72. Bài tập SELECT 3

> Lấy họ tên học sinh lớp 11A1.

```sql
SELECT HoTen
FROM hocsinh
WHERE Lop = '11A1';
```

---

# 73. Bài tập SELECT 4

> Lấy học sinh có điểm Tin từ 8 trở lên.

```sql
SELECT MaHS, HoTen, DiemTin
FROM hocsinh
WHERE DiemTin >= 8;
```

---

# 74. Bài tập SELECT 5

> Sắp xếp điểm Tin từ cao xuống thấp.

```sql
SELECT HoTen, DiemTin
FROM hocsinh
ORDER BY DiemTin DESC;
```

---

# 75. Bài tập SELECT 6

> Lớp 11A1, điểm Tin >= 7, sắp xếp giảm dần.

```sql
SELECT HoTen, DiemTin
FROM hocsinh
WHERE Lop = '11A1'
  AND DiemTin >= 7
ORDER BY DiemTin DESC;
```

---

# 76. Bài tập INSERT

Thêm:

```text
HS05
Mai
11A2
8.0
```

SQL:

```sql
INSERT INTO hocsinh (MaHS, HoTen, Lop, DiemTin)
VALUES ('HS05', 'Mai', '11A2', 8.0);
```

---

# 77. Bài tập UPDATE

Mai chuyển:

```text
11A2 → 11A1
```

SQL:

```sql
UPDATE hocsinh
SET Lop = '11A1'
WHERE MaHS = 'HS05';
```

---

# 78. Bài tập DELETE

Xóa học sinh có mã:

```text
HS05
```

SQL:

```sql
DELETE FROM hocsinh
WHERE MaHS = 'HS05';
```

---

# 79. Câu gài nguy hiểm

Câu:

```sql
DELETE FROM hocsinh;
```

khác:

```sql
DELETE FROM hocsinh
WHERE MaHS = 'HS05';
```

rất lớn.

Câu đầu:

```text
có thể xóa mọi dòng.
```

---

# 80. Câu gài UPDATE

```sql
UPDATE hocsinh
SET Lop = '11A1';
```

có thể biến:

```text
tất cả học sinh
→ thành lớp 11A1.
```

Do thiếu `WHERE`.

---

# 81. Những lỗi cú pháp học sinh hay gặp

## Lỗi 1 – quên nháy xâu

Sai:

```sql
WHERE Lop = 11A1;
```

Đúng:

```sql
WHERE Lop = '11A1';
```

## Lỗi 2 – nhầm SELECT với WHERE

Sai tư duy:

```text
SELECT dùng để chọn học sinh điểm > 8.
```

Chuẩn hơn:

```text
SELECT → chọn cột
WHERE  → lọc dòng.
```

---

# 82. Lỗi 3 – UPDATE không có SET

Sai:

```sql
UPDATE hocsinh Lop = '11A1'
WHERE MaHS = 'HS01';
```

Đúng:

```sql
UPDATE hocsinh
SET Lop = '11A1'
WHERE MaHS = 'HS01';
```

---

# 83. Lỗi 4 – DELETE TABLE

Muốn xóa dòng:

```sql
DELETE FROM ...
```

Không dùng:

```text
DELETE TABLE
```

ở nghĩa xóa dòng.

---

# 84. Lỗi 5 – JOIN sai cột

Sai:

```sql
ON bannhac.Mid = nhacsi.Aid
```

nếu quan hệ thật là:

```text
bannhac.Aid
=
nhacsi.Aid
```

JOIN phải dựa vào:

```text
trường có quan hệ đúng.
```

---

# 85. Lỗi 6 – nhầm PK/FK khi tạo bảng

`BANNHAC`:

```text
Mid → PK
Aid → FK
```

Không đảo thành:

```text
Aid → PK
```

vì một nhạc sĩ có thể có nhiều bản nhạc.

---

# 86. Bài luyện tập tổng hợp 1 – tạo bảng CASI

```sql
CREATE TABLE casi (
    Sid VARCHAR(10),
    TenCS VARCHAR(100),
    PRIMARY KEY (Sid)
);
```

---

# 87. Bài luyện tập tổng hợp 2 – BANTHUAM

```sql
CREATE TABLE banthuam (
    Mid CHAR(4),
    Sid VARCHAR(10),
    PRIMARY KEY (Mid, Sid),
    FOREIGN KEY (Mid) REFERENCES bannhac(Mid),
    FOREIGN KEY (Sid) REFERENCES casi(Sid)
);
```

---

# 88. Bài luyện tập tổng hợp 3 – lấy toàn bộ NHACSI

```sql
SELECT *
FROM nhacsi;
```

---

# 89. Bài luyện tập tổng hợp 4 – thêm ca sĩ

```sql
INSERT INTO casi (Sid, TenCS)
VALUES ('YM', 'Y Moan');
```

---

# 90. Bài luyện tập tổng hợp 5 – nối BANTHUAM và BANNHAC

```sql
SELECT
    banthuam.Mid,
    banthuam.Sid,
    bannhac.TenBN
FROM banthuam
INNER JOIN bannhac
    ON banthuam.Mid = bannhac.Mid;
```

---

# 91. Bài vận dụng – nối ba bảng

```sql
SELECT
    banthuam.Mid,
    banthuam.Sid,
    bannhac.TenBN,
    casi.TenCS
FROM banthuam
INNER JOIN bannhac
    ON banthuam.Mid = bannhac.Mid
INNER JOIN casi
    ON banthuam.Sid = casi.Sid;
```

Đây là câu rất tốt để kết thúc mạch:

```text
Bài 13:
biết các bảng liên kết.

Bài 14:
dùng SQL để ghép chúng thật.
```

---

# 92. Bài quyền 1

> Cấp quyền UPDATE cho tất cả các bảng trong `music` cho `mod`.

Dạng theo tinh thần SGK:

```sql
GRANT UPDATE
ON music.*
TO mod;
```

---

# 93. Bài quyền 2

> Thu hồi quyền DELETE trên bảng `nhacsi` của `mod`.

```sql
REVOKE DELETE
ON music.nhacsi
FROM mod;
```

> Cú pháp quản lí người dùng cụ thể có thể khác tùy Hệ QTCSDL; đây là dạng minh họa theo bài học.

---

# 94. Mini Test – phần khái niệm

1. SQL viết tắt của gì?  
   **Structured Query Language.**

2. DDL dùng làm gì?  
   **Định nghĩa cấu trúc dữ liệu.**

3. DML dùng làm gì?  
   **Thao tác dữ liệu.**

4. DCL dùng làm gì?  
   **Kiểm soát quyền.**

5. `CREATE TABLE` thuộc nhóm nào?  
   **DDL.**

6. `SELECT` thuộc nhóm nào?  
   **DML.**

7. `GRANT` thuộc nhóm nào?  
   **DCL.**

---

# 95. Mini Test – cú pháp

## Câu 1

Lấy toàn bộ bảng:

```sql
SELECT *
FROM hocsinh;
```

## Câu 2

Lọc lớp 11A1:

```sql
SELECT *
FROM hocsinh
WHERE Lop = '11A1';
```

## Câu 3

Sửa tên:

```sql
UPDATE hocsinh
SET HoTen = 'Nguyễn Văn An'
WHERE MaHS = 'HS01';
```

## Câu 4

Xóa đúng một mã:

```sql
DELETE FROM hocsinh
WHERE MaHS = 'HS01';
```

---

# 96. Phân biệt các từ dễ nhầm

```text
CREATE
→ tạo cấu trúc

INSERT
→ thêm dòng dữ liệu

SELECT
→ lấy dữ liệu

UPDATE
→ sửa dữ liệu

DELETE
→ xóa dòng

ALTER
→ sửa cấu trúc bảng

GRANT
→ cấp quyền

REVOKE
→ thu hồi quyền
```

---

# 97. ALTER vs UPDATE

Đây là câu thi rất dễ gài.

```text
ALTER TABLE
→ sửa “cái khuôn”.

UPDATE
→ sửa “dữ liệu nằm trong khuôn”.
```

Ví dụ:

```text
Thêm cột Email
→ ALTER

Đổi email HS01
→ UPDATE
```

---

# 98. CREATE vs INSERT

```text
CREATE TABLE
→ tạo cái bảng.

INSERT INTO
→ thêm dữ liệu vào bảng đã có.
```

Ví dụ đời thường:

```text
CREATE
→ đóng cái tủ.

INSERT
→ bỏ hồ sơ vào tủ.
```

---

# 99. DELETE vs DROP – chỉ mở rộng ngắn

Nếu học sinh hỏi:

```text
DELETE
→ xóa dữ liệu dòng.

DROP
→ thường dùng để xóa hẳn đối tượng CSDL như bảng.
```

`DROP` không phải trọng tâm của SGK Bài 14, nên không cần luyện sâu.

---

# 100. Sơ đồ chốt SQL

```text
                     SQL
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
       DDL           DML           DCL
        │             │             │
   CREATE DB       SELECT        GRANT
   CREATE TABLE    INSERT        REVOKE
   ALTER TABLE     UPDATE
   PRIMARY KEY     DELETE
   FOREIGN KEY     JOIN
```

---

# 101. Sơ đồ SELECT

```text
SELECT
“Lấy cột nào?”
      ↓
FROM
“Từ bảng nào?”
      ↓
WHERE
“Dòng nào được lấy?”
      ↓
ORDER BY
“Sắp xếp thế nào?”
```

---

# 102. Sơ đồ cập nhật

```text
THÊM
→ INSERT

SỬA
→ UPDATE + SET + WHERE

XÓA
→ DELETE FROM + WHERE
```

---

# 103. Sơ đồ quan hệ từ Bài 13 sang JOIN

```text
BÀI 13

BANNHAC.Aid
     │
     ▼
NHACSI.Aid

        ↓

BÀI 14

INNER JOIN nhacsi
ON bannhac.Aid = nhacsi.Aid
```

---

# 104. Mười câu học sinh phải trả lời được

```text
1. SQL là gì?
2. DDL, DML, DCL dùng làm gì?
3. CREATE TABLE dùng làm gì?
4. PRIMARY KEY và FOREIGN KEY khai báo gì?
5. SELECT – FROM – WHERE đọc thế nào?
6. ORDER BY làm gì?
7. INSERT, UPDATE, DELETE khác nhau thế nào?
8. Vì sao UPDATE/DELETE phải cẩn thận với WHERE?
9. JOIN dùng làm gì?
10. GRANT và REVOKE khác nhau thế nào?
```

---

# 105. Tóm tắt cuối vở

```text
SQL
= Structured Query Language.

DDL
= định nghĩa dữ liệu:
CREATE DATABASE
CREATE TABLE
ALTER TABLE
PRIMARY KEY
FOREIGN KEY

DML
= thao tác dữ liệu:
SELECT
INSERT
UPDATE
DELETE
INNER JOIN

DCL
= kiểm soát quyền:
GRANT
REVOKE

SELECT cột
FROM bảng
WHERE điều kiện
ORDER BY cột

INSERT
→ thêm

UPDATE
→ sửa

DELETE
→ xóa

PRIMARY KEY
→ khóa chính

FOREIGN KEY ... REFERENCES
→ khóa ngoài

INNER JOIN ... ON
→ liên kết các bảng.
```

---

# 106. Cách gia sư nên dạy Bài 14

Không nên:

```text
Đưa 20 cú pháp
→ bắt chép
→ bắt thuộc.
```

Nên:

```text
Câu hỏi đời thường
↓
Tách “lấy gì – từ đâu – điều kiện gì”
↓
Viết SQL
↓
Đọc lại bằng tiếng Việt
↓
Dự đoán kết quả
```

---

# 107. Ví dụ quy trình dạy SELECT

Giáo viên hỏi:

> “Trong bảng học sinh, cô chỉ muốn tên học sinh lớp 11A1. Em cần lấy cột gì?”

Học sinh:

```text
HoTen
```

> “Từ bảng nào?”

```text
hocsinh
```

> “Điều kiện gì?”

```text
Lop = '11A1'
```

Sau đó ghép:

```sql
SELECT HoTen
FROM hocsinh
WHERE Lop = '11A1';
```

Học sinh tự tạo được câu SQL thay vì học vẹt.

---

# 108. Dạy JOIN bằng màu

Trên web, highlight:

```text
bannhac.Aid
```

và:

```text
nhacsi.Aid
```

cùng một màu.

Sau đó animation kéo đường nối:

```text
ON bannhac.Aid = nhacsi.Aid
```

JOIN sẽ dễ hiểu hơn nhiều.

---

# 109. Gợi ý AI code web

Trang nên chia:

```text
Hero
↓
SQL vs lập trình thủ tục
↓
DDL / DML / DCL cards
↓
SQL Playground giả lập
↓
CREATE DATABASE
↓
CREATE TABLE + Data types
↓
PK/FK
↓
SELECT builder
↓
WHERE
↓
ORDER BY
↓
INSERT / UPDATE / DELETE
↓
JOIN visualizer
↓
AVG
↓
GRANT / REVOKE
↓
Bài tập SGK
↓
Mini Test
```

---

# 110. Component “SQL Builder”

Cho các khối:

```text
SELECT
FROM
WHERE
ORDER BY
```

Học sinh kéo thả:

```text
SELECT HoTen
FROM hocsinh
WHERE Lop = '11A1'
ORDER BY HoTen;
```

Sau đó web hiển thị dữ liệu kết quả.

---

# 111. Component “Dự đoán kết quả”

Cho bảng 4 dòng và câu:

```sql
SELECT HoTen
FROM hocsinh
WHERE DiemTin >= 8;
```

Học sinh chọn:

```text
những dòng nào xuất hiện?
```

Mục tiêu:

```text
hiểu SQL,
không chỉ sửa dấu chấm phẩy.
```

---

# 112. Component “Cảnh báo WHERE”

Cho:

```sql
DELETE FROM hocsinh;
```

Web hiện cảnh báo:

```text
⚠ Không có WHERE.
Lệnh này có thể tác động tới toàn bộ bảng.
```

Đây là bài học thực tế rất giá trị.

---

# 113. Component PK/FK

Cho bảng trực quan:

```text
NHACSI
Aid [PK]

BANNHAC
Mid [PK]
Aid [FK]
```

Yêu cầu học sinh chọn:

```text
FOREIGN KEY (?)
REFERENCES ?(?)
```

Đáp án:

```sql
FOREIGN KEY (Aid)
REFERENCES nhacsi(Aid)
```

---

# 114. Component JOIN

Bước 1:

```text
BANTHUAM
Mid | Sid
```

Bước 2:

```text
BANNHAC
Mid | TenBN
```

Bước 3:

Web nối `Mid`.

Bước 4:

Kết quả:

```text
Mid | Sid | TenBN
```

Sau đó hiện câu SQL.

---

# 115. Không nên làm web SQL quá chuyên nghiệp ngoài phạm vi

Không cần:

```text
subquery phức tạp
window function
CTE
index
transaction ACID
stored procedure
trigger
view nâng cao
normalization
query plan
NoSQL
ORM
```

Mục tiêu vẫn là:

```text
SQL cơ bản đúng SGK lớp 11.
```

---

# 116. Bài tập tự luyện mở rộng

## Bảng SANPHAM

| MaSP | TenSP | Gia | TonKho |
|---|---|---:|---:|
| SP01 | Chuột | 250000 | 12 |
| SP02 | Bàn phím | 700000 | 4 |
| SP03 | Màn hình | 3000000 | 0 |

### Bài A

Lấy toàn bộ sản phẩm:

```sql
SELECT *
FROM sanpham;
```

### Bài B

Sản phẩm còn hàng:

```sql
SELECT MaSP, TenSP
FROM sanpham
WHERE TonKho > 0;
```

### Bài C

Sắp xếp giá cao xuống thấp:

```sql
SELECT TenSP, Gia
FROM sanpham
ORDER BY Gia DESC;
```

---

# 117. Bài D – thêm sản phẩm

```sql
INSERT INTO sanpham (MaSP, TenSP, Gia, TonKho)
VALUES ('SP04', 'Webcam', 600000, 8);
```

---

# 118. Bài E – sửa tồn kho

```sql
UPDATE sanpham
SET TonKho = 10
WHERE MaSP = 'SP02';
```

---

# 119. Bài F – xóa một sản phẩm

```sql
DELETE FROM sanpham
WHERE MaSP = 'SP04';
```

---

# 120. Bài tự luận ngắn

## Câu 1

Tại sao SQL tiện hơn việc tự viết chương trình đọc từng dòng tệp?

Gợi ý:

> Người dùng chủ yếu mô tả dữ liệu mình cần hoặc thao tác muốn thực hiện; Hệ QTCSDL xử lí nhiều chi tiết truy cập phía dưới.

## Câu 2

Phân biệt DDL, DML, DCL.

```text
DDL → cấu trúc
DML → dữ liệu
DCL → quyền
```

## Câu 3

Phân biệt ALTER và UPDATE.

```text
ALTER → sửa cấu trúc
UPDATE → sửa dữ liệu
```

## Câu 4

Vì sao `WHERE` đặc biệt quan trọng với `DELETE` và `UPDATE`?

> Vì thiếu điều kiện có thể làm thay đổi/xóa nhiều hoặc toàn bộ dòng.

---

# 121. Nguồn đối chiếu

Nội dung bám theo **Tin học 11 – Kết nối tri thức – Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc**, gồm:

- lợi ích của ngôn ngữ truy vấn;
- SQL và ba thành phần DDL/DML/DCL;
- `CREATE DATABASE`;
- `CREATE TABLE`;
- `ALTER TABLE`;
- kiểu dữ liệu;
- `PRIMARY KEY`;
- `FOREIGN KEY ... REFERENCES`;
- `SELECT ... FROM ... WHERE ...`;
- `ORDER BY`;
- `INNER JOIN`;
- `INSERT INTO`;
- `DELETE FROM`;
- `UPDATE ... SET`;
- hàm `AVG`;
- `GRANT`;
- `REVOKE`;
- luyện tập tạo `banthuam`;
- khai báo khóa ngoài;
- liên kết `banthuam`, `bannhac`, `casi`.

Tài liệu sử dụng cú pháp SQL chuẩn/phổ biến để tránh lặp lại một số lời giải trực tuyến có cú pháp sai hoặc thiếu. Cú pháp quản lí quyền và một số chi tiết kiểu dữ liệu có thể khác nhẹ tùy Hệ QTCSDL.
