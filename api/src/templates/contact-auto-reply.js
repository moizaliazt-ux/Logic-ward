/**
 * Auto-reply email sent to the customer / prospect.
 */
function escapeHtml(value) {
	return String(value || '').replace(/[&<>"']/g, (character) => ({
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;',
	})[character]);
}

export function contactAutoReplyHtml({ firstName }) {
	return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#111318;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#111318;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#1c2430;border-radius:8px;overflow:hidden;">
      <tr>
        <td style="background:#171f2b;padding:36px 32px;text-align:center;border-bottom:1px solid #303947;">
          <h1 style="margin:0;color:#f5f7fa;font-size:24px;font-weight:700;letter-spacing:0.5px;">Logicward</h1>
          <p style="margin:8px 0 0;color:#b8c0cc;font-size:14px;">Software, digital products &amp; business systems</p>
        </td>
      </tr>
      <tr>
        <td style="padding:36px 32px;">
          <h2 style="margin:0 0 16px;font-size:20px;color:#f5f7fa;">Thank you, ${escapeHtml(firstName)}.</h2>
          <p style="margin:0 0 18px;font-size:15px;color:#b8c0cc;line-height:1.7;">
            This is an automatic confirmation that your project inquiry was received by Logicward.
          </p>
          <p style="margin:0;font-size:15px;color:#b8c0cc;">
            Warm regards,<br>
            <strong style="color:#f5f7fa;">The Logicward Team</strong>
          </p>
        </td>
      </tr>
      <tr>
        <td style="background:#171f2b;padding:22px 32px;text-align:center;">
          <p style="margin:0;font-size:11px;color:#8792a2;">
            Automated confirmation from Logicward.<br>
            © ${new Date().getFullYear()} Logicward.
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
