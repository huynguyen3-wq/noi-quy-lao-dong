// ============================================================================
//  /api/chat — Serverless function (Vercel) cho Trợ lý ISAAC iSMART
//  Giấu khóa API ở server; xác thực email công ty (theo đuôi); gọi Anthropic Claude.
//  Biến môi trường cần đặt trên Vercel (Settings → Environment Variables):
//    ANTHROPIC_API_KEY     — khóa API Anthropic (bắt buộc)
//    ALLOWED_EMAIL_DOMAIN  — (tùy chọn) mặc định 'ismart.edu.vn'
//    CLAUDE_MODEL          — (tùy chọn) mặc định 'claude-3-haiku-20240307'
// ============================================================================

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // 1) Xác thực email công ty (chỉ kiểm tra đuôi @ismart.edu.vn)
  const emailRaw = (req.headers['x-app-email'] || '').toString().trim().toLowerCase();
  const domain = (process.env.ALLOWED_EMAIL_DOMAIN || 'ismart.edu.vn').toLowerCase();
  const emailOk = /^[^@\s]+@[^@\s]+$/.test(emailRaw) && emailRaw.endsWith('@' + domain);
  if (!emailOk) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // 2) Ping từ màn đăng nhập — chỉ xác thực, không gọi AI
  const body = req.body || {};
  if (body.ping) {
    res.status(200).json({ ok: true });
    return;
  }

  // 3) Gọi Claude
  const prompt = (body.prompt || '').toString();
  if (!prompt) { res.status(400).json({ error: 'Missing prompt' }); return; }
  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(500).json({ error: 'Server misconfigured: ANTHROPIC_API_KEY' });
    return;
  }

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: process.env.CLAUDE_MODEL || 'claude-3-haiku-20240307',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!r.ok) {
      const detail = await r.text();
      res.status(502).json({ error: 'AI upstream error', detail });
      return;
    }

    const data = await r.json();
    const text = (data.content && data.content[0] && data.content[0].text) || '';
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: 'Server error', detail: String(e) });
  }
}
