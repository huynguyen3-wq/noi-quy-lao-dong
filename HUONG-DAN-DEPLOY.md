# 🤖 Trợ lý ISAAC iSMART — Hướng dẫn xuất bản website nội bộ

Bộ thư mục này là **website hoàn chỉnh** để ISAAC trả lời thật bằng AI, chỉ cần
**đăng nhập bằng email công ty đuôi @ismart.edu.vn** (không cần mật khẩu).
Khóa API được giấu an toàn ở backend (không lộ ra trình duyệt).

Cấu hình: **Vercel** (host miễn phí) + **Anthropic Claude** (AI).

---

## 📦 Có gì trong thư mục này
```
chatbot-deploy/
├── index.html          ← Giao diện chat + màn đăng nhập
├── login.js            ← Xử lý đăng nhập bằng email công ty
├── chat.js             ← Logic chat (gọi backend /api/chat)
├── chat.css            ← Giao diện
├── colors_and_type.css ← Bộ màu & font iSMART
├── knowledge.js        ← TOÀN BỘ Nội quy LĐ + Quy chế lương thưởng
├── assets/             ← (đã gỡ) Logo + mascot được nhúng thẳng vào index.html/chat.js
├── api/
│   └── chat.js         ← Backend (giấu khóa API, xác thực, gọi Claude)
├── package.json
└── .env.example        ← Mẫu biến môi trường
```

---

## 🚀 Cách xuất bản (≈ 10 phút)

### Bước 1 — Lấy khóa API Anthropic
1. Vào https://console.anthropic.com → đăng ký / đăng nhập.
2. Vào **API Keys** → **Create Key** → sao chép khóa (dạng `sk-ant-…`).
3. Nạp một ít credit ở mục **Billing** (trả theo lượt dùng, rất rẻ cho nội bộ).

### Bước 2 — Đưa code lên Vercel
**Cách A (dễ nhất, kéo-thả):**
1. Tải thư mục `chatbot-deploy/` về máy.
2. Vào https://vercel.com → đăng nhập (dùng tài khoản Google/GitHub).
3. Cài công cụ dòng lệnh: mở Terminal, gõ `npm i -g vercel`.
4. Vào trong thư mục: `cd chatbot-deploy` rồi gõ `vercel`. Làm theo hướng dẫn.

**Cách B (qua GitHub — khuyến nghị để cập nhật về sau):**
1. Tạo một repo GitHub mới, đẩy nội dung thư mục `chatbot-deploy/` lên.
2. Vào Vercel → **Add New… → Project** → chọn repo vừa tạo → **Deploy**.

### Bước 3 — Đặt biến môi trường (QUAN TRỌNG)
Trên Vercel: **Project → Settings → Environment Variables**, thêm các biến:

| Tên                   | Giá trị                                   |
|-----------------------|-------------------------------------------|
| `ANTHROPIC_API_KEY`   | khóa `sk-ant-…` ở Bước 1                  |
| `ALLOWED_EMAIL_DOMAIN`| `ismart.edu.vn`                           |
| `CLAUDE_MODEL`        | *(tùy chọn)* `claude-3-5-sonnet-latest`   |

Sau khi thêm, bấm **Redeploy** để áp dụng.

### Bước 4 — Xong!
Vercel cho bạn một đường link dạng `https://robo-ismart.vercel.app`.
- Gửi link cho nhân viên.
- Nhân viên mở link → nhập **email công ty (@ismart.edu.vn)** → hỏi ISAAC thoải mái.

---

## 🔒 Về bảo mật nội bộ
- Khóa API **không bao giờ** xuất hiện trong trình duyệt — chỉ nằm ở backend.
- Đăng nhập yêu cầu **email đuôi @ismart.edu.vn** (kiểm tra cả ở backend).
- **Lưu ý quan trọng:** hiện chỉ kiểm tra *đuôi email*, nên về lý thuyết ai biết địa chỉ dạng @ismart.edu.vn đều vào được, và chưa xác minh người đó thực sự sở hữu hộp thư. Khi cần chặt chẽ hơn (đăng nhập Google công ty, chỉ tài khoản @ismart.edu.vn thật mới vào được), bật **Vercel Authentication** (Settings → Deployment Protection, cần gói Pro) hoặc dùng SSO công ty — báo lại mình hỗ trợ cấu hình.

## 💡 Bảo trì
- **Cập nhật nội quy / quy chế:** sửa file `knowledge.js` → đẩy lại lên (Cách B tự động deploy).
- **Thêm yêu cầu mật khẩu trở lại** hoặc đổi sang OpenAI / host Netlify: báo lại để được chỉnh `api/chat.js` cho phù hợp.

---
*Mọi thắc mắc kỹ thuật — quay lại đây, mình hỗ trợ tiếp.* 🧡
