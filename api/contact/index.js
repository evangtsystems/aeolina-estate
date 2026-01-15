function json(status, body) {
  return {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

module.exports = async function (context, req) {
  if (req.method === "OPTIONS") return json(204, {});
  if (req.method !== "POST") return json(405, { ok: false, error: "Method not allowed" });

  try {
    const { name, email, message, company } = req.body || {};

    // Honeypot (bots fill it)
    if (company) return json(200, { ok: true });

    if (!name || !email || !message) return json(400, { ok: false, error: "Missing fields" });

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return json(400, { ok: false, error: "Invalid email" });
    if (String(message).length > 5000) return json(400, { ok: false, error: "Message too long" });

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
    const FROM_NAME = process.env.CONTACT_FROM_NAME || "Website";
    const SITE_NAME = process.env.SITE_NAME || "Website";

    if (!BREVO_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
      return json(500, { ok: false, error: "Server not configured" });
    }

    const subject = `New message — ${SITE_NAME}`;
    const text =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}\n`;

    const html = `
      <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5">
        <h2 style="margin:0 0 10px">New Contact Message — ${escapeHtml(SITE_NAME)}</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    const payload = {
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: TO_EMAIL, name: "Villa AEOLINA" }],
      replyTo: { email, name },
      subject,
      textContent: text,
      htmlContent: html,
    };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await safeText(res);
      context.log("Brevo error:", res.status, errText);
      return json(500, { ok: false, error: "Email failed" });
    }

    return json(200, { ok: true });
  } catch (e) {
    context.log("Contact function error:", e);
    return json(500, { ok: false, error: "Server error" });
  }
};

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function safeText(res) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}
