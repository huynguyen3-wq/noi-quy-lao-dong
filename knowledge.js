/* ============================================================================
   iSMART — Cơ sở tri thức cho Trợ lý ISAAC
   Nguồn: "Nội quy lao động iSMART" (phiên bản 3.0, hiệu lực 16/09/2022)
   + các nội dung lương/làm thêm giờ nằm trong Nội quy.
   Phần "Quy chế lương thưởng" chi tiết (thang bảng lương, KPI, thưởng,
   lương tháng 13...) CHƯA được nạp — xem SALARY_POLICY bên dưới.
   ============================================================================ */

window.ISMART_KB = {

  /* Văn bản tri thức đưa vào hệ thống (system prompt). Viết cô đọng, đúng số liệu. */
  REGULATION_TEXT: `
# NỘI QUY LAO ĐỘNG iSMART (phiên bản 3.0, hiệu lực 16/09/2022) — 11 Chương, 34 Điều
Căn cứ: Bộ luật Lao động 20/11/2019 và Nghị định 145/2020/NĐ-CP. Áp dụng cho TẤT CẢ CBNV
(cán bộ nhân viên) tại Công ty và các chi nhánh/trung tâm — mọi loại hợp đồng, kể cả thử việc, học việc.
Tình huống chưa nêu trong Nội quy được giải quyết theo Bộ luật Lao động và pháp luật hiện hành.

## CHƯƠNG I — THỜI GIỜ LÀM VIỆC & NGHỈ NGƠI (Điều 5–7)
### Giờ làm việc
- Giờ làm việc trong ngày: 8:00 – 17:00.
- Không quá 8 giờ/ngày và không quá 48 giờ/tuần. Nghỉ ít nhất 1 ngày/tuần.
- Nghỉ trưa 1 giờ (khoảng 12:00–13:00).
- Bộ phận văn phòng nghỉ cố định Chủ nhật. Các chi nhánh/trung tâm có thể bố trí ngày nghỉ linh động
  (không nhất thiết T7/CN) nhưng vẫn đảm bảo ≤ 8 giờ/ngày và ≤ 48 giờ/tuần.
### Thời gian thử việc tối đa
- 180 ngày: người quản lý doanh nghiệp.
- 60 ngày: trình độ cao đẳng trở lên.
- 30 ngày: trung cấp, nhân viên nghiệp vụ.
- 6 ngày làm việc: các công việc khác.
- Trong thời gian thử việc KHÔNG được hưởng phép năm; sau thử việc được hưởng số ngày phép tương ứng số tháng đã thử việc.
### Làm thêm giờ (giới hạn)
- Không quá 50% số giờ làm bình thường/ngày; tổng giờ làm + làm thêm ≤ 12 giờ/ngày.
- Không quá 40 giờ/tháng; không quá 200 giờ/năm.
### Tiền lương làm thêm giờ
- Ngày thường: ít nhất 150% lương.
- Ngày nghỉ hằng tuần: ít nhất 200%.
- Ngày lễ, Tết: ít nhất 300% (chưa kể tiền lương ngày lễ được hưởng).
- Làm việc ban đêm: trả thêm ít nhất 30%. Làm thêm giờ vào ban đêm: trả thêm 20% ngoài các mức trên.

## NGHỈ LỄ, TẾT — 11 ngày hưởng nguyên lương
- Tết Dương lịch: 01 ngày (01/01).
- Tết Âm lịch: 05 ngày.
- Giỗ Tổ Hùng Vương: 01 ngày (10/3 Âm lịch).
- Ngày Chiến thắng: 01 ngày (30/4).
- Quốc tế Lao động: 01 ngày (01/5).
- Quốc khánh: 02 ngày (02/9 + 1 ngày liền kề).
- Nếu ngày lễ trùng ngày nghỉ cuối tuần → được nghỉ bù vào ngày kế tiếp.
- Lao động nước ngoài được nghỉ thêm 01 ngày Tết cổ truyền và 01 ngày Quốc khánh của nước họ.

## NGHỈ PHÉP NĂM
- 12 ngày/năm khi làm đủ 12 tháng, hưởng nguyên lương. Dưới 12 tháng tính theo tỷ lệ.
- Cứ làm việc liên tục đủ 5 năm được cộng thêm 1 ngày phép.
- Quy tắc tháng đầu: vào làm trước ngày 15 → tính 1 ngày phép; sau ngày 15 → ½ ngày phép cho tháng đó.
- Chuyển phép: được mang tối đa 3 ngày phép năm cũ sang năm mới, dùng trước 31/3.

## NGHỈ VIỆC RIÊNG HƯỞNG NGUYÊN LƯƠNG
- Kết hôn: 03 ngày.
- Con ruột kết hôn: 01 ngày.
- Tang cha/mẹ (cả bên vợ/chồng), vợ/chồng, con: 03 ngày.
## NGHỈ KHÔNG LƯƠNG 01 NGÀY
- Ông bà, anh/chị/em ruột mất; cha/mẹ hoặc anh/chị/em ruột kết hôn. Có thể thỏa thuận nghỉ thêm nếu lý do chính đáng.

## NGHỈ ỐM & THAI SẢN
- Nghỉ ốm: nộp đơn xin nghỉ; trường hợp đột ngột báo ngay cho Công ty và nộp hồ sơ y tế khi đi làm lại; hưởng trợ cấp ốm đau từ BHXH.
- Thai sản nữ: 06 tháng trước & sau sinh (nghỉ trước ≤ 2 tháng). Sinh đôi trở lên: mỗi con thêm 1 tháng. Báo trước 30 ngày.
- Thai sản nam (vợ sinh): 05 ngày thường; 07 ngày nếu vợ sinh mổ/con dưới 32 tuần; 10 ngày sinh đôi; 14 ngày sinh đôi phải mổ.
- Chế độ riêng cho CBNV nữ: hành kinh nghỉ 30 phút/ngày; nuôi con dưới 12 tháng nghỉ 60 phút/ngày — vẫn hưởng đủ lương theo HĐLĐ.

## BÁO TRƯỚC KHI NGHỈ PHÉP
- Nghỉ 1 ngày: báo trước ít nhất 1 ngày.
- Nghỉ 2–3 ngày: báo trước ít nhất 1 tuần.
- Nghỉ 4–7 ngày: báo trước ít nhất 2 tuần.
- Nghỉ dài (7+ ngày): báo trước ít nhất 1 tháng.

## CHƯƠNG II — TRẬT TỰ NƠI LÀM VIỆC (Điều 8–13)
- Đúng giờ; đến trễ phải báo cáo & giải trình với Cán bộ lãnh đạo (CBLĐ).
- Tuân thủ kỷ luật, an toàn lao động, PCCC, chuẩn mực dịch vụ khách hàng.
- Tiết kiệm điện/nước/văn phòng phẩm; bảo quản trang thiết bị; giữ nơi làm việc gọn gàng.
- Dùng tài sản, thiết bị Công ty đúng mục đích công việc.
- Nghiêm cấm: trộm cắp, tham ô, gian dối gây thiệt hại; uống rượu bia, dùng chất kích thích tại nơi làm việc.
- Trao đổi thông tin: chỉ dùng email & điện thoại Công ty cho công việc, không dùng email cá nhân; giữ liên lạc sau giờ làm; báo trước nếu mất liên lạc từ 1 ngày trở lên.
- Báo cáo công việc định kỳ theo chức danh; báo ngay khi hoàn thành nhiệm vụ hoặc khi có sự cố; báo cáo khẩn cho HĐQT khi hỏa hoạn, trộm cắp, hư hỏng nghiêm trọng.
### Văn hóa ứng xử
- Nên: niềm nở, lịch sự với khách hàng/đối tác; tôn trọng, đoàn kết, hỗ trợ đồng nghiệp.
- Không: tranh cãi/đe dọa/to tiếng với khách hàng; nhận tiền, quà biếu dưới mọi hình thức; dùng danh nghĩa/hình ảnh Công ty cho mục đích cá nhân; gây mất đoàn kết nội bộ.
### Trang phục, diện mạo
- Mặc đồng phục với vị trí có yêu cầu; nơi không bắt buộc thì trang phục lịch sự, phù hợp công sở.
- Không dùng: quần áo quá bó/quá mỏng; quần cộc/soóc; áo hai dây/ba lỗ; váy ngắn trên đầu gối.

## CHƯƠNG III — AN TOÀN, VỆ SINH LAO ĐỘNG (Điều 14–15)
- Công ty bảo đảm không gian, độ thoáng; kiểm tra yếu tố nguy hiểm; quản lý hồ sơ sức khỏe NLĐ.
- Khám sức khỏe định kỳ ít nhất 01 lần/năm và điều trị bệnh nghề nghiệp.
- NLĐ giữ vệ sinh, sắp xếp nơi làm việc gọn gàng; không ăn uống/liên hoan tại chỗ (trừ khi đơn vị tổ chức); không xả rác, khạc nhổ bừa bãi.

## CHƯƠNG IV — PHÒNG, CHỐNG QUẤY RỐI TÌNH DỤC (Điều 16–20)
- Định nghĩa: hành vi có tính chất tình dục đối với người khác tại nơi làm việc mà không được người đó mong muốn/chấp nhận. "Nơi làm việc" gồm cả sự kiện, công tác, bữa ăn, trao đổi điện tử, phương tiện đi lại do Công ty bố trí.
- 3 dạng: thể chất; lời nói; phi lời nói.
- Trách nhiệm Công ty: phổ biến/giáo dục; kịp thời ngăn chặn, xử lý; bảo vệ bí mật, danh dự, an toàn cho nạn nhân.
- Trách nhiệm CBNV: tuân thủ; tham gia xây dựng môi trường không quấy rối; ngăn cản, tố cáo hành vi quấy rối.
- Quy trình giải quyết khiếu nại/tố cáo 8 bước: (1) gửi thông tin qua hòm thư bảo mật → (2) BGĐ tiếp nhận → (3) phân công điều tra → (4) thu thập chứng cứ → (5) đề xuất xử lý → (6) thông báo kết quả → (7) chuyển cơ quan thẩm quyền nếu cần → (8) đóng hồ sơ & bảo mật.
- Cam kết bảo mật danh tính, danh dự; yêu cầu người vi phạm khắc phục, bồi thường tổn thất tinh thần.

## CHƯƠNG V — BẢO VỆ TÀI SẢN & BÍ MẬT CÔNG TY (Điều 21–22)
- Tài sản gồm: sản phẩm, cơ sở vật chất, thiết bị, dữ liệu và quyền sở hữu trí tuệ (ý tưởng, sáng chế, nhãn hiệu, bản quyền...).
- Trách nhiệm: bảo vệ tài sản; chỉ mang tài liệu ra ngoài khi được phép; không dùng tài sản/máy tính cho mục đích cá nhân hay trục lợi.
- Nghiêm cấm: sao chép/tiết lộ tài liệu mật; truy cập trái phép; phá/vô hiệu hóa thiết bị an ninh, tự ý điều chỉnh camera/giờ chấm công; dùng email Công ty sai mục đích; đăng tin sai sự thật/đồi trụy; phát tán virus.
- Mất thiết bị chứa thông tin mật: báo ngay cho cán bộ quản lý thông tin, KHÔNG chậm hơn 02 giờ kể từ khi phát hiện.

## CHƯƠNG VI — TẠM THỜI CHUYỂN CÔNG VIỆC KHÁC (Điều 23)
- Tối đa 60 ngày cộng dồn/năm khi chưa cần đồng ý bằng văn bản; quá 60 ngày phải có đồng ý bằng văn bản của NLĐ.
- Báo trước ít nhất 3 ngày, nêu rõ thời hạn & công việc phù hợp.
- Lương công việc mới ≥ 85% lương cũ, không thấp hơn lương tối thiểu; giữ nguyên lương cũ trong 30 ngày đầu nếu lương mới thấp hơn.
- Áp dụng khi khó khăn đột xuất (thiên tai, hỏa hoạn, dịch bệnh, sự cố điện nước) hoặc do nhu cầu sản xuất kinh doanh.

## CHƯƠNG VII — XUNG ĐỘT LỢI ÍCH (Điều 24)
- Không trục lợi cá nhân, không lạm dụng chức vụ tìm lợi ích cho mình/người khác.
- Không thành lập/tham gia quản lý, điều hành doanh nghiệp khác cùng ngành nghề với Công ty.
- Thông báo trước nếu có người thân làm việc/đầu tư vào đối thủ cạnh tranh.
- Thực hiện bản cam kết hàng năm xác nhận không có xung đột lợi ích.

## CHƯƠNG VIII — KỶ LUẬT LAO ĐỘNG (Điều 25–26)
- 4 hình thức (tăng dần): (1) Khiển trách (lời nói/văn bản); (2) Kéo dài thời hạn nâng lương không quá 06 tháng; (3) Cách chức; (4) Sa thải (cao nhất).
- Phân loại mức độ hậu quả: Chưa gây thiệt hại; Chưa nghiêm trọng (thiệt hại ≤ 5 triệu đồng); Nghiêm trọng (thiệt hại ≥ 5 triệu, hoặc đe dọa thiệt hại ≥ 10 triệu, hoặc ảnh hưởng xấu hình ảnh Công ty, hoặc ảnh hưởng tính mạng/sức khỏe/danh dự người khác).
- Yếu tố giảm nhẹ: nhân thân, mức độ lỗi, tự giác/báo cáo ngay khi phát hiện lỗi.
- Tạm đình chỉ công việc: với vụ việc phức tạp; phải có quyết định bằng văn bản của người có thẩm quyền.

## CHƯƠNG IX–X — TRÌNH TỰ & THẨM QUYỀN XỬ LÝ KỶ LUẬT (Điều 27–31)
- Nguyên tắc: Công ty phải chứng minh lỗi; mỗi hành vi chỉ xử lý 1 hình thức; nhiều hành vi áp dụng mức cao nhất; phải lập biên bản & ra quyết định bằng văn bản.
- Thành phần: đại diện pháp luật Công ty, CBNV (có thể có người bào chữa), tổ chức đại diện NLĐ.
- Không xử lý khi: CBNV đang nghỉ ốm, nghỉ thai sản/nuôi con dưới 12 tháng, đang bị tạm giữ, hoặc mất khả năng nhận thức.
- Thời hiệu xử lý kỷ luật: 6 tháng; 12 tháng nếu liên quan tài chính, tài sản, bí mật.
- Xóa kỷ luật: khiển trách sau 3 tháng; kéo dài nâng lương/cách chức sau 6 tháng (nếu không tái phạm).
- Thẩm quyền: người giao kết HĐLĐ bên Công ty (Giám đốc/Tổng GĐ/GĐ chi nhánh hoặc người được ủy quyền).

## CHƯƠNG XI — TRÁCH NHIỆM VẬT CHẤT (Điều 32–34)
- Sơ suất gây thiệt hại không quá 10 tháng lương tối thiểu vùng → bồi thường nhiều nhất 03 tháng lương, khấu trừ hằng tháng.
- Làm mất dụng cụ/thiết bị hoặc tiêu hao quá định mức → bồi thường một phần hoặc toàn bộ theo thời giá thị trường (hoặc theo hợp đồng trách nhiệm).
- Căn cứ: lỗi, mức độ thiệt hại thực tế, hoàn cảnh gia đình NLĐ. Thiên tai/hỏa hoạn/sự kiện khách quan không lường trước → không phải bồi thường. NLĐ có quyền khiếu nại nếu thấy không thỏa đáng.

## PHỤ LỤC 01 — Một số vi phạm thường gặp (đều ở Cấp độ 1 → Khiển trách)
- Vi phạm giờ giấc: đi làm/đi họp muộn, về sớm, nghỉ trưa quá giờ (không được duyệt).
- Nghỉ làm/nghỉ họp không được cấp trên phê duyệt.
- Không giữ vệ sinh/diện mạo, vi phạm đồng phục/ý thức tiết kiệm (sau khi đã nhắc nhở).
- Không xử lý/báo cáo nguy cơ an ninh, PCCC, ATLĐ.
- Không trung thực khi điều tra/thanh tra.
- Dùng tài sản/nguồn lực Công ty cho mục đích cá nhân khi chưa được phép.
- Tung tin đồn thất thiệt ảnh hưởng hình ảnh Công ty.
- Cố tình làm hỏng/vô hiệu hóa thiết bị an ninh, tự ý điều chỉnh camera/giờ chấm công.
(Danh mục đầy đủ quy định chi tiết tại Phụ lục 01 của Nội quy chính thức.)
`.trim(),

  /* Quy chế lương thưởng (Compensation & Benefit Regulations)
     Mã: ISM PC-RG-002, phiên bản 2.0, hiệu lực 01/07/2025. Nguồn: file chính thức. */
  SALARY_POLICY: `
# QUY CHẾ LƯƠNG THƯỞNG iSMART (ISM PC-RG-002, phiên bản 2.0, hiệu lực 01/07/2025)
Căn cứ: Luật Việc làm 2013, Bộ luật Lao động 2019, Luật Doanh nghiệp 2020, Nghị định 74/2024/NĐ-CP,
Nghị định 145/2020/NĐ-CP, Điều lệ Công ty. Áp dụng cho NLĐ làm việc theo HĐLĐ có thời hạn,
không xác định thời hạn, thử việc tại Công ty Cổ phần Giáo dục iSMART.
Một số viết tắt: CBNV/NLĐ = cán bộ nhân viên/người lao động; KPI = chỉ số đánh giá hiệu suất;
Thuế TNCN = thuế thu nhập cá nhân; BHXH = bảo hiểm xã hội; HĐLĐ = hợp đồng lao động;
Phòng NS&VH (P&C) = Phòng Nhân sự & Văn hóa.

## CHƯƠNG I — QUY ĐỊNH CHUNG
### Điều 5 — Cấu trúc lương
Cấu trúc tiền lương = **Lương cơ bản + Phụ cấp, trợ cấp + Lương KPI (nếu có)**.
- **Lương cơ bản (LCB):** trả theo vị trí cấp bậc, là cơ sở tham gia BHXH, quy định tại Hệ thống thang bảng lương (Phụ lục 01).
- **Phụ cấp, trợ cấp:** theo từng vị trí, chi tiết tại Chương III & Phụ lục 02, theo thỏa thuận giữa NLĐ và Công ty.
- **Lương KPI:** dựa trên điểm đánh giá KPI năm:
  • 91–100% → hưởng 100% lương KPI/năm
  • 81–90% → 90%
  • 71–80% → 80%
  • 61–70% → 70%
  • 51–60% → 60%
  • KPI < 50% → KHÔNG hưởng lương KPI
  • Khác: theo thỏa thuận khác.
- **Lương thử việc:** ít nhất bằng **85% tổng thu nhập** (gồm lương cơ bản + trợ cấp, phụ cấp) cho vị trí đảm nhiệm.
- **Lương khoán:** theo nội dung, khối lượng, chất lượng và thời gian hoàn thành theo hợp đồng giao khoán.
- **Lương theo giờ:** theo đơn giá tiền lương mỗi giờ hoàn thành công việc, trả theo chu kỳ thanh toán lương.

### Điều 5.2 — Thuế thu nhập cá nhân (TNCN)
Thuế TNCN tính trên tổng thu nhập sau khi trừ thu nhập miễn thuế và giảm trừ gia cảnh.
**a) Đối với HĐLĐ — khấu trừ lũy tiến từng phần (thu nhập tính thuế/tháng):**
- Bậc 1: đến 5 triệu → 5%
- Bậc 2: trên 5–10 triệu → 10%
- Bậc 3: trên 10–18 triệu → 15%
- Bậc 4: trên 18–32 triệu → 20%
- Bậc 5: trên 32–52 triệu → 25%
- Bậc 6: trên 52–80 triệu → 30%
- Bậc 7: trên 80 triệu → 35%
**b) Hợp đồng thử việc:** Thuế TNCN = tổng thu nhập trước khi trả × 10%.
**c) Hợp đồng dịch vụ:** thu nhập ≥ 2 triệu/lần → khấu trừ 10%; dưới 2 triệu/lần có thể dùng Mẫu 08/CK-TNCN để không khấu trừ.
**d) Lao động nước ngoài:** ở VN ≥ 183 ngày/năm → áp mức như trên theo loại HĐ; dưới 183 ngày → khấu trừ 20%.
**e) Các khoản thưởng** (thưởng hiệu quả kinh doanh, thưởng khác) phải đưa vào bảng lương tháng và tính thuế lũy tiến.

### Điều 6 — Cam kết bảo mật lương
- Mỗi cá nhân có trách nhiệm bảo mật thu nhập của mình; TUYỆT ĐỐI không tiết lộ, thăm dò, so sánh hoặc thắc mắc về thu nhập của CBNV khác.
- Việc giải đáp thắc mắc về tiền lương thuộc trách nhiệm của Giám đốc/Trưởng bộ phận hoặc CBNV làm lương thuộc Phòng NS&VH, và chỉ giải quyết thắc mắc liên quan đến thu nhập của chính người hỏi.

## CHƯƠNG II — THANG LƯƠNG ĐÓNG BHXH (Phụ lục 01)
Kỳ hạn xét điều chỉnh thang bảng lương đóng BHXH có điều kiện: **36 tháng/lần**. Chi tiết tại Phụ lục 01.

## CHƯƠNG III — PHỤ CẤP VÀ TRỢ CẤP (Phụ lục 02)
Các khoản phụ cấp/trợ cấp (không chịu thuế, mức tối đa theo từng nhóm vị trí):
- Tiền ăn (Com): 0 – 730.000đ
- Đồng phục: 0 – 400.000đ
- Điện thoại: 0 – tối đa tùy cấp (đến 20.000.000đ với Ban Giám đốc Công ty)
- Trợ cấp thôi việc: theo Điều 46 Bộ luật Lao động 2019 (= ½ × thời gian làm việc để tính trợ cấp × tiền lương cơ bản).

## CHƯƠNG IV — TÍNH VÀ TRẢ LƯƠNG
### Điều 8 — Căn cứ tính lương (theo bảng chấm công)
**Tiền lương tháng = (Lương cơ bản + Phụ cấp, trợ cấp) ÷ (Tổng số ngày công chuẩn của tháng) × (Số ngày làm việc thực tế).**
- Ngày công chuẩn xác định theo Nội quy lao động: không quá 48 giờ/tuần (từ thứ Hai đến thứ Bảy).
- **Lương thực nhận = Tiền lương tháng − BHXH − Thuế TNCN** theo quy định hiện hành.
- Ví dụ minh họa trong quy chế: Lương cơ bản 6.000.000 + Tổng phụ cấp 4.000.000 (ăn 730k, điện thoại 500k, di chuyển 500k, xăng xe 500k, nhà ở 1.770k) → tiền lương tháng = (6.000.000 + 4.000.000)/26 × 26.

### Điều 9 — Thời hạn trả lương
- Kỳ lương tính từ ngày 01 đến ngày cuối cùng của tháng Dương lịch.
- Công ty thanh toán vào **ngày 10 của tháng tiếp theo**. Nếu ngày chi trả trùng ngày nghỉ/lễ thì trả vào ngày kế tiếp.

### Điều 10 — Tiền lương làm thêm giờ
Làm thêm giờ phải được Ban Giám đốc Chi nhánh hoặc Hội sở đăng ký & xét duyệt. Giới hạn: ≤ 50% giờ làm bình thường/ngày; tổng ≤ 12 giờ/ngày; ≤ 40 giờ/tháng; ≤ 200 giờ/năm. Đơn giá tính trên lương cơ bản (Điều 5):
- Ngày thường: ít nhất **150%**.
- Ngày nghỉ hằng tuần: ít nhất **200%**.
- Ngày nghỉ lễ, Tết, ngày nghỉ có hưởng lương: ít nhất **300%** (chưa kể tiền lương ngày lễ với NLĐ hưởng lương theo ngày).

## CHƯƠNG V — THƯỞNG HIỆU QUẢ KINH DOANH ĐƠN VỊ & THƯỞNG KINH DOANH
### Điều 11 — Thưởng hiệu quả kinh doanh đơn vị
- Chỉ áp dụng khi đơn vị đạt chỉ tiêu hoạt động năm.
- Đạt 100% chỉ tiêu: toàn đơn vị thưởng X% trên lợi nhuận sau thuế (Ban Điều hành iSMART thống nhất phân bổ).
- Vượt 100%: thưởng X% lợi nhuận sau thuế + X% phần chênh lệch.
- Chi trả vào tháng đầu năm tài chính kế tiếp (nếu có).
- Với CBNV (trừ Phòng Phát triển Kinh doanh): căn cứ kết quả KPI giao đầu năm học. Với Giáo viên & Trợ giảng: theo tiêu chí Sổ tay Giáo viên.
### Điều 12 — Thưởng kinh doanh
- Áp dụng cho CBNV Phòng Phát triển Kinh doanh (trực tiếp tạo doanh thu/lợi nhuận).
- Thưởng theo doanh số hằng tháng là **5%** (không áp dụng cho vị trí Hỗ trợ Kinh doanh, Hành chính) nếu: hợp đồng đã ký trong tháng & doanh thu ghi nhận trên hệ thống.
- Có thể tạm ứng ≤ 50% tổng giá trị thưởng khi đạt điều kiện đến ngày 15 hằng tháng; phần còn lại nhận vào kỳ lương hằng tháng.

## CHƯƠNG VI — THƯỞNG ĐỘT XUẤT (Điều 13–14)
Áp dụng cho tập thể/cá nhân có thành tích đột xuất ngoài chương trình, kế hoạch. Mức thưởng xét theo từng trường hợp và quyết định của Ban Giám đốc Chi nhánh/Hội sở.

## CHƯƠNG VII — XEM XÉT ĐIỀU CHỈNH LƯƠNG (Điều 15–17)
- Thực hiện sau kỳ đánh giá nhân viên định kỳ hằng năm (tháng đầu năm tài chính tiếp theo), áp dụng vào **tháng 1 Dương lịch** hằng năm (nếu có) hoặc theo thỏa thuận khác.
- Cơ sở: công việc được giao năm mới; kết quả đánh giá theo chỉ tiêu năm cũ; hiệu quả kinh doanh năm cũ.
- Mức điều chỉnh phụ thuộc lương theo bậc, mức đóng góp, giá trị vị trí trên thị trường và quỹ nhân sự được duyệt (trừ trường hợp bổ nhiệm mới).

## CHƯƠNG VIII — CHÍNH SÁCH PHÚC LỢI (Phụ lục 03)
Danh mục phúc lợi (mức tối đa, nguồn Công ty, áp dụng cho nhân viên đã ký HĐLĐ):
- Khám sức khỏe định kỳ hằng năm: 01 gói/năm (theo thực tế).
- BH sức khỏe & BH tai nạn: 01 gói/năm.
- Tiền sinh nhật: 100.000 – 300.000đ.
- Tiền kết hôn: 200.000 – 1.000.000đ.
- Tiền sinh con: 200.000 – 1.000.000đ.
- Thăm ốm đau (nằm viện > 3 ngày hoặc có giấy khám bệnh): 200.000 – 1.000.000đ.
- Thăm tai nạn lao động: 500.000 – 1.000.000đ.
- CBNV qua đời: 1.000.000 – 5.000.000đ.
- Người thân CBNV qua đời (vợ/chồng, con, cha/mẹ): 500.000 – 1.000.000đ.
- Quà Tết Dương lịch (1/1): 100.000 – 500.000đ; Tết Nguyên Đán: 100.000 – 700.000đ; Lễ Quốc khánh (2/9): 100.000 – 500.000đ; 30/4 & 1/5: 100.000 – 1.000.000đ.
- Tết thiếu nhi (1/6, con dưới 12 tuổi): 100.000 – 300.000đ; Trung thu: 100.000 – 700.000đ.
- Quốc tế Phụ nữ (8/3) & Phụ nữ Việt Nam (20/10): 100.000 – 300.000đ.
- Teambuilding, Tiệc cuối năm, Ngày Nhà giáo Việt Nam (20/11): theo tình hình tài chính.
- **Thưởng thâm niên** (đã ký HĐLĐ chính thức, tính đến 31/12 hằng năm), mức tham khảo nhóm quản lý cấp cao:
  • 5 năm → 5.000.000đ + kỷ niệm chương
  • 10 năm → 10.000.000đ + kỷ niệm chương
  • 15 năm → 15.000.000đ + kỷ niệm chương
  • 20 năm → 20.000.000đ + kỷ niệm chương
  • (Các nhóm vị trí khác có mức thấp hơn, ví dụ 5 năm → 3.000.000đ. Trên 20 năm xét theo quyết định Công ty.)
- Trang thiết bị hỗ trợ công việc: Laptop + chuột (hoặc hỗ trợ 200.000–400.000đ/tháng nếu dùng thiết bị cá nhân); Áo thun iSMART 150.000đ.
*Lưu ý: các mức thưởng/phúc lợi được điều chỉnh tùy tình hình kinh doanh, tài chính và hiệu quả hoạt động của Công ty.*

## CHƯƠNG IX — CHÍNH SÁCH ĐÀO TẠO (Điều 18–21)
- Công ty tổ chức/cử CBNV tham gia khóa học phù hợp nhu cầu phát triển. Khóa học do Công ty chi trả → phải ký cam kết đào tạo.
- **Hỗ trợ học Thạc sĩ/Tiến sĩ (thời gian làm việc ≥ 2 năm):**
  • CBNV từ cấp trưởng/phó phòng trở lên: hỗ trợ **50% học phí (tối đa 200 triệu)** + cho vay 25% (tối đa 100 triệu); cam kết làm việc **03 năm** sau khi hoàn thành.
  • CBNV cấp độ còn lại: hỗ trợ **25% học phí (tối đa 50 triệu)**; cam kết **02 năm**.
- **Khóa ngắn hạn do Công ty tài trợ — thời hạn cam kết:** < 10 triệu → 01 năm; 10–<50 triệu → 02 năm; 50–<200 triệu → 03 năm.
- Kinh phí được cấp (Điều 20) là tài trợ không hoàn lại. **Bồi thường 150%** chi phí đào tạo nếu không hoàn thành khóa học hoặc đơn phương chấm dứt HĐLĐ khi chưa hết thời hạn cam kết. **Hoàn trả 100%** nếu vi phạm nội quy và bị chấm dứt HĐLĐ khi chưa hết cam kết.

## CHƯƠNG X — HỢP ĐỒNG & CHẤM DỨT HỢP ĐỒNG (Điều 22–26)
- **Thử việc (Điều 22):** 02 tháng cho hầu hết vị trí (lao động phổ thông theo Luật); có thể rút ngắn. Lương thử việc ít nhất 85% tổng thu nhập tháng trước thuế. Trước khi kết thúc thử việc 02 tuần, Phòng NS&VH gửi bảng đánh giá; quản lý trực tiếp gửi đánh giá về NS&VH không muộn hơn 03 ngày còn lại của tuần thứ 2.
- **HĐLĐ (Điều 23):** lần 1 xác định thời hạn 12 tháng → lần 2 xác định thời hạn 12–36 tháng → lần 3 không xác định thời hạn. Việc tái ký/không tái ký được đánh giá & thông báo trước (≥ 30 ngày trước khi hết hạn; kết quả tái ký báo trong 15 ngày làm việc, không trễ hơn 7 ngày trước ngày hết hạn; không tái ký phải báo NS&VH ≥ 15 ngày trước hết hạn).
- **HĐLĐ theo giờ (Điều 24):** dạng part-time; trả theo giờ/tiết trước thuế; báo trước chấm dứt ≥ 07 ngày làm việc.
- **Hợp đồng cộng tác viên/dịch vụ (Điều 25):** khoán việc hoặc trả theo giờ/tiết trước thuế; báo trước chấm dứt ≥ 07 ngày làm việc.
- **Quy trình nghỉ việc (Điều 26):** nộp đơn theo mẫu; đơn hợp lệ khi có phê duyệt của (1) Trưởng phòng quản lý trực tiếp, (2) các trưởng phòng liên quan, và hoàn tất bàn giao. NLĐ phải bàn giao đầy đủ (NS&VH, Kế toán, Hành chính, IT) và quyết toán thu nhập trước ngày làm việc cuối. NS&VH thông báo nghỉ việc, khóa email; chi trả lương theo quy định nếu đã hoàn thành nghĩa vụ bàn giao.

## PHỤ LỤC 01 — HỆ THỐNG THANG BẢNG LƯƠNG 2025 (tham khảo, mức theo Vùng)
Mức lương tối thiểu vùng áp dụng: Vùng 1 = 4.960.000đ; Vùng 2 = 4.410.000đ; Vùng 3 = 3.860.000đ; Vùng 4 = 3.450.000đ. Mức lương cơ sở tính BHXH: 2.340.000đ.
Hệ số (bội số) & mã vị trí: Tổng GĐ/Phó TGĐ (A01, hệ số 9.00–11.40); GĐ Chi nhánh/Phó GĐ/Trưởng phòng Hội sở (A02, 6.50–8.60); Trưởng phòng (B01, 4.20–6.00); Phó phòng (B02, 2.15–3.65); Trưởng nhóm/Giám sát (B05, 1.80–2.10); Chuyên viên (B06, 1.40–1.70); Nhân viên (B07, 1.00–1.30). Mức lương cụ thể theo từng bậc (I–VII) và theo Vùng — xem bảng chính thức tại Phụ lục 01. (Mức lương thực tế của từng cá nhân là thông tin bảo mật theo Điều 6.)
`.trim(),

  /* Thông tin liên hệ HR/Công ty */
  CONTACT: {
    email: 'hr@ismart.edu.vn',
    hr_note: 'Phòng Nhân sự & Văn hóa'
  },

  /* Nhóm chủ đề + câu hỏi gợi ý hiển thị trên sidebar và màn hình chào.
     6 nhóm: 3 thiên về Nội quy lao động, 3 thiên về Quy chế lương thưởng. */
  TOPICS: [
    {
      id: 'gio-lam',
      label: 'Giờ làm & nghỉ ngơi',
      icon: 'clock',
      color: 'orange',
      questions: [
        'Giờ làm việc trong ngày là mấy giờ?',
        'Một tuần làm tối đa bao nhiêu giờ?',
        'Thời gian thử việc tối đa là bao lâu?',
        'Nghỉ trưa được bao lâu?'
      ]
    },
    {
      id: 'nghi-phep',
      label: 'Nghỉ phép, lễ Tết & thai sản',
      icon: 'palmtree',
      color: 'green',
      questions: [
        'Tôi được bao nhiêu ngày phép năm?',
        'Một năm được nghỉ lễ, Tết mấy ngày?',
        'Kết hôn thì được nghỉ mấy ngày hưởng lương?',
        'Lao động nữ nghỉ thai sản bao lâu?',
        'Nghỉ phép 3 ngày phải báo trước bao lâu?'
      ]
    },
    {
      id: 'luong',
      label: 'Lương & cách tính lương',
      icon: 'wallet',
      color: 'blue',
      questions: [
        'Cấu trúc tiền lương gồm những phần nào?',
        'Tiền lương tháng được tính theo công thức nào?',
        'Khi nào công ty trả lương hằng tháng?',
        'Lương thử việc bằng bao nhiêu phần trăm?',
        'Lương KPI được tính theo điểm như thế nào?'
      ]
    },
    {
      id: 'thuong-phu-cap',
      label: 'Thưởng, phụ cấp & phúc lợi',
      icon: 'gift',
      color: 'yellow',
      questions: [
        'Làm thêm giờ ngày thường, lễ Tết tính bao nhiêu %?',
        'Công ty có những khoản phụ cấp nào?',
        'Kết hôn, sinh con được công ty hỗ trợ bao nhiêu?',
        'Thưởng thâm niên 5 năm, 10 năm là bao nhiêu?',
        'Thuế thu nhập cá nhân được tính thế nào?'
      ]
    },
    {
      id: 'hop-dong-dao-tao',
      label: 'Hợp đồng, đào tạo & nghỉ việc',
      icon: 'file-signature',
      color: 'sky',
      questions: [
        'HĐLĐ được ký theo trình tự mấy lần?',
        'Công ty hỗ trợ học Thạc sĩ, Tiến sĩ thế nào?',
        'Quy trình nghỉ việc gồm các bước nào?',
        'Khi nào được xem xét điều chỉnh lương?'
      ]
    },
    {
      id: 'ky-luat-ung-xu',
      label: 'Kỷ luật, ứng xử & an toàn',
      icon: 'gavel',
      color: 'red',
      questions: [
        'Có mấy hình thức xử lý kỷ luật?',
        'Đi làm muộn bị xử lý thế nào?',
        'Quy định về trang phục đi làm thế nào?',
        'Làm mất laptop chứa dữ liệu mật phải báo trong bao lâu?'
      ]
    }
  ]
};
