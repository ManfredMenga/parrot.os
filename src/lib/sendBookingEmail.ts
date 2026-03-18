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
  <title>LeitSalon — Deine Terminanfrage</title>
</head>
<body style="margin: 0; padding: 0; background-color: #13151A; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #13151A; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px;">

          <!-- Brand -->
          <tr>
            <td align="center" style="padding-bottom: 40px;">
              <span style="font-size: 28px; font-weight: 700; letter-spacing: 4px; color: #C4A77D; text-transform: uppercase;">LeitSalon</span>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom: 36px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent, #C4A77D, transparent);"></div>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding-bottom: 24px;">
              <p style="margin: 0; font-size: 18px; color: #FFFFFF; font-weight: 500;">Hallo ${name},</p>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding-bottom: 32px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #FFFFFFCC;">
                Vielen Dank f&uuml;r deine Terminanfrage! Hier sind die Details:
              </p>
            </td>
          </tr>

          <!-- Details Box -->
          <tr>
            <td style="padding-bottom: 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #1A1D24; border: 1px solid #C4A77D33; border-radius: 8px;">
                <tr>
                  <td style="padding: 28px 32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #C4A77D; font-weight: 600;">Datum</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2;">${date}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <div style="height: 1px; background-color: #FFFFFF11;"></div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #C4A77D; font-weight: 600;">Uhrzeit</span>
                          <br />
                          <span style="font-size: 16px; color: #FFFFFF; font-weight: 500; line-height: 2;">${time} Uhr</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <div style="height: 1px; background-color: #FFFFFF11;"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #C4A77D; font-weight: 600;">Dauer</span>
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

          <!-- Confirmation note -->
          <tr>
            <td style="padding-bottom: 40px;">
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #FFFFFFCC;">
                Wir melden uns in K&uuml;rze bei dir zur Best&auml;tigung.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom: 28px;">
              <div style="height: 1px; background: linear-gradient(90deg, transparent, #C4A77D44, transparent);"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center">
              <p style="margin: 0; font-size: 12px; color: #FFFFFF66; letter-spacing: 1px;">
                LeitSalon &mdash; Strategie f&uuml;r deinen Erfolg
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
      from: `"LeitSalon" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'LeitSalon — Deine Terminanfrage',
      html,
    });

    console.log(`Booking confirmation email sent to ${email}`);

    // Send notification to owner
    const ownerHtml = `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#13151A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#13151A;">
    <tr>
      <td align="center" style="padding:48px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <span style="font-size:24px;font-weight:700;letter-spacing:4px;color:#C4A77D;text-transform:uppercase;">Neue Buchung</span>
            </td>
          </tr>
          <tr>
            <td style="background:#1A1D24;border-radius:12px;padding:32px;border:1px solid rgba(196,167,125,0.15);">
              <p style="margin:0 0 20px;font-size:18px;font-weight:600;color:#fff;">
                ${name} hat einen Termin gebucht
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#ffffffcc;">
                <tr><td style="padding:8px 0;color:#C4A77D;font-weight:600;width:100px;">Datum</td><td style="padding:8px 0;">${date}</td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);color:#C4A77D;font-weight:600;">Uhrzeit</td><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);">${time} Uhr</td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);color:#C4A77D;font-weight:600;">Dauer</td><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);">${duration} Min</td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);color:#C4A77D;font-weight:600;">E-Mail</td><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);"><a href="mailto:${email}" style="color:#C4A77D;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);color:#C4A77D;font-weight:600;">Telefon</td><td style="padding:8px 0;border-top:1px solid rgba(255,255,255,0.06);"><a href="tel:${phone}" style="color:#C4A77D;">${phone}</a></td></tr>
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
      from: `"LeitSalon" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER!,
      subject: `Neue Buchung: ${name} — ${date}, ${time} Uhr`,
      html: ownerHtml,
    });

    console.log('Owner notification email sent');
  } catch (error) {
    console.error('Failed to send booking confirmation email:', error);
  }
}
