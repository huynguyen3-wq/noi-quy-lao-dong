/* Màn hình đăng nhập nội bộ — chỉ cần EMAIL CÔNG TY đuôi @ismart.edu.vn.
   Kiểm tra đuôi email ngay tại trình duyệt (không cần gọi backend để vào).
   Backend /api/chat vẫn tự kiểm tra đuôi email ở mỗi yêu cầu thật. */
(function () {
  const ALLOWED_DOMAIN = '@ismart.edu.vn';
  const gate = document.getElementById('gate');
  const app = document.getElementById('app');
  const form = document.getElementById('gateForm');
  const email = document.getElementById('gateEmail');
  const err = document.getElementById('gateErr');
  const EMAIL_KEY = 'ismart-robo-email';

  function showApp() {
    gate.style.display = 'none';
    app.hidden = false;
    document.dispatchEvent(new Event('robo:authed'));
  }

  function showErr(msg) {
    err.textContent = msg;
    err.style.display = 'block';
  }

  function valid(v) {
    return /^[^@\s]+@[^@\s]+$/.test(v) && v.endsWith(ALLOWED_DOMAIN);
  }

  // Đã đăng nhập trong phiên này → vào thẳng
  const saved = (sessionStorage.getItem(EMAIL_KEY) || '').toLowerCase();
  if (valid(saved)) { showApp(); } else { sessionStorage.removeItem(EMAIL_KEY); email.focus(); }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    err.style.display = 'none';
    const emailVal = email.value.trim().toLowerCase();
    if (!emailVal) return;
    if (!valid(emailVal)) {
      showErr('Vui lòng dùng email công ty có đuôi ' + ALLOWED_DOMAIN);
      return;
    }
    sessionStorage.setItem(EMAIL_KEY, emailVal);
    showApp();
  });
})();
