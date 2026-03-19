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
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <style>
    :root { color-scheme: dark only; }
    @media (prefers-color-scheme: light) { .dark-bg { background-color: #000000 !important; } }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #000000; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color-scheme: dark;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000;">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px;">
          <tr>
            <td align="center" style="padding-bottom: 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                <td style="vertical-align: middle; padding-right: 4px;"><img src="https://raw.githubusercontent.com/ManfredMenga/parrot.os/main/public/images/logo-white.png" alt="K" width="34" height="34" style="display: block;" /></td>
                <td style="vertical-align: middle;"><span style="font-size: 20px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff;">Leitkraft</span></td>
              </tr></table>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 32px;">
              <div style="height: 1px; background-color: #1a1a1a;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 20px;">
              <p style="margin: 0; font-size: 20px; color: #FFFFFF; font-weight: 600;">Hallo ${name},</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 32px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #999999;">
                Vielen Dank f&uuml;r deine Demo-Anfrage! Hier sind die Details:
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #111111; border: 1px solid #222222; border-radius: 16px;">
                <tr>
                  <td style="padding: 32px; background-color: #111111;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 16px; background-color: #111111;">
                          <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #888888; font-weight: 700;">Datum</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2.2;">${date}</span>
                        </td>
                      </tr>
                      <tr><td style="padding-bottom: 16px; background-color: #111111;"><div style="height: 1px; background-color: #222222;"></div></td></tr>
                      <tr>
                        <td style="padding-bottom: 16px; background-color: #111111;">
                          <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #888888; font-weight: 700;">Uhrzeit</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2.2;">${time} Uhr</span>
                        </td>
                      </tr>
                      <tr><td style="padding-bottom: 16px; background-color: #111111;"><div style="height: 1px; background-color: #222222;"></div></td></tr>
                      <tr>
                        <td style="background-color: #111111;">
                          <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #888888; font-weight: 700;">Dauer</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2.2;">${duration} Minuten</span>
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
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #999999;">
                Wir melden uns in K&uuml;rze bei dir zur Best&auml;tigung.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 24px;">
              <div style="height: 1px; background-color: #1a1a1a;"></div>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="margin: 0; font-size: 11px; color: #444444; letter-spacing: 1.5px; text-transform: uppercase;">
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
              <span style="font-size:20px;font-weight:700;letter-spacing:-0.5px;color:#fff;">Neue Demo-Anfrage</span>
            </td>
          </tr>
          <tr>
            <td style="background:#0a0a0a;border-radius:16px;padding:32px;border:1px solid #1a1a1a;">
              <p style="margin:0 0 24px;font-size:18px;font-weight:600;color:#fff;">${name} möchte eine Demo</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#999;">
                <tr><td style="padding:10px 0;color:#666;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:2px;width:100px;">Datum</td><td style="padding:10px 0;color:#fff;">${date}</td></tr>
                <tr><td style="padding:10px 0;border-top:1px solid #1a1a1a;color:#666;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:2px;">Uhrzeit</td><td style="padding:10px 0;border-top:1px solid #1a1a1a;color:#fff;">${time} Uhr</td></tr>
                <tr><td style="padding:10px 0;border-top:1px solid #1a1a1a;color:#666;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:2px;">Dauer</td><td style="padding:10px 0;border-top:1px solid #1a1a1a;color:#fff;">${duration} Min</td></tr>
                <tr><td style="padding:10px 0;border-top:1px solid #1a1a1a;color:#666;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:2px;">E-Mail</td><td style="padding:10px 0;border-top:1px solid #1a1a1a;"><a href="mailto:${email}" style="color:#fff;text-decoration:none;">${email}</a></td></tr>
                <tr><td style="padding:10px 0;border-top:1px solid #1a1a1a;color:#666;font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:2px;">Telefon</td><td style="padding:10px 0;border-top:1px solid #1a1a1a;"><a href="tel:${phone}" style="color:#fff;text-decoration:none;">${phone}</a></td></tr>
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
