import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendBookingEmail } from '@/lib/sendBookingEmail';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, date, time, duration } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !duration) {
      return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 });
    }

    // Validate phone
    if (!/^\+?[0-9\s\-\(\)]{7,18}$/.test(phone)) {
      return NextResponse.json({ error: 'Ungültige Telefonnummer' }, { status: 400 });
    }

    // Build event start/end
    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + duration * 60 * 1000);

    // Google Calendar API auth via service account
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar.events', 'https://www.googleapis.com/auth/calendar.readonly'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    const event = {
      summary: `Leitkraft: Demo mit ${name}`,
      description: `Telefon: ${phone}\nE-Mail: ${email}\nDauer: ${duration} Minuten`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Europe/Berlin',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Europe/Berlin',
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 15 },
        ],
      },
    };

    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';
    await calendar.events.insert({
      calendarId,
      requestBody: event,
    });

    // Format date in German for the confirmation email
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    const d = startDateTime;
    const formattedDate = `${days[d.getDay()]}, ${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;

    // Send confirmation email (non-blocking, won't throw on failure)
    await sendBookingEmail({
      name,
      email,
      phone,
      date: formattedDate,
      time,
      duration,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({ error: 'Termin konnte nicht erstellt werden' }, { status: 500 });
  }
}
