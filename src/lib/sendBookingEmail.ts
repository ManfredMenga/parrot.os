import nodemailer from 'nodemailer';

interface BookingEmailParams {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  duration: number;
}

export async function sendBookingEmail({ name, email, phone, date, time, duration }: BookingEmailParams) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const html = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Leitkraft — Deine Demo-Anfrage</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px;">
          <tr>
            <td align="center" style="padding-bottom: 40px;">
              <span style="font-size: 20px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff;">Leitkraft</span>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 36px;">
              <div style="height: 1px; background-color: #1a1a1a;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 24px;">
              <p style="margin: 0; font-size: 18px; color: #FFFFFF; font-weight: 500;">Hallo ${name},</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 32px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #888888;">
                Vielen Dank f&uuml;r deine Demo-Anfrage! Hier sind die Details:
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; border: 1px solid #1a1a1a; border-radius: 12px;">
                <tr>
                  <td style="padding: 28px 32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #555555; font-weight: 600;">Datum</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2;">${date}</span>
                        </td>
                      </tr>
                      <tr><td style="padding-bottom: 16px;"><div style="height: 1px; background-color: #1a1a1a;"></div></td></tr>
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #555555; font-weight: 600;">Uhrzeit</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2;">${time} Uhr</span>
                        </td>
                      </tr>
                      <tr><td style="padding-bottom: 16px;"><div style="height: 1px; background-color: #1a1a1a;"></div></td></tr>
                      <tr>
                        <td>
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #555555; font-weight: 600;">Dauer</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2;">${duration} Minuten</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 40px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #888888;">
                Wir melden uns in K&uuml;rze bei dir zur Best&auml;tigung.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 28px;">
              <div style="height: 1px; background-color: #1a1a1a;"></div>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="margin: 0; font-size: 12px; color: #444444; letter-spacing: 1px;">
                Leitkraft &mdash; KI-Content-Engine
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Leitkraft" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Leitkraft — Deine Demo-Anfrage',
      html,
    });

    const ownerHtml = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#000;">
    <tr>
      <td align="center" style="padding:48px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <span style="font-size:20px;font-weight:700;color:#fff;">Neue Demo-Anfrage</span>
            </td>
          </tr>
          <tr>
            <td style="background:#0a0a0a;border-radius:12px;padding:32px;border:1px solid #1a1a1a;">
              <p style="margin:0 0 20px;font-size:18px;font-weight:600;color:#fff;">${name} möchte eine Demo</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#888;">
                <tr><td style="padding:8px 0;color:#555;font-weight:600;width:100px;">Datum</td><td style="padding:8px 0;color:#fff;">${date}</td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid #1a1a1a;color:#555;font-weight:600;">Uhrzeit</td><td style="padding:8px 0;border-top:1px solid #1a1a1a;color:#fff;">${time} Uhr</td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid #1a1a1a;color:#555;font-weight:600;">Dauer</td><td style="padding:8px 0;border-top:1px solid #1a1a1a;color:#fff;">${duration} Min</td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid #1a1a1a;color:#555;font-weight:600;">E-Mail</td><td style="padding:8px 0;border-top:1px solid #1a1a1a;"><a href="mailto:${email}" style="color:#fff;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid #1a1a1a;color:#555;font-weight:600;">Telefon</td><td style="padding:8px 0;border-top:1px solid #1a1a1a;"><a href="tel:${phone}" style="color:#fff;">${phone}</a></td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Leitkraft" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER!,
      subject: `Neue Demo-Anfrage: ${name} — ${date}, ${time} Uhr`,
      html: ownerHtml,
    });

  } catch (error) {
    console.error('Failed to send booking email:', error);
  }
}
