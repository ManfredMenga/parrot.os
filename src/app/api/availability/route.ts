import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00',
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date'); // YYYY-MM-DD
    const duration = parseInt(searchParams.get('duration') || '15', 10);

    if (!date) {
      return NextResponse.json({ error: 'date parameter required' }, { status: 400 });
    }

    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary';

    // Get all events for the given date
    const timeMin = new Date(`${date}T00:00:00+01:00`); // CET
    const timeMax = new Date(`${date}T23:59:59+01:00`);

    const events = await calendar.events.list({
      calendarId,
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      timeZone: 'Europe/Berlin',
    });

    // Build list of busy intervals [startMinutes, endMinutes]
    const busyIntervals: [number, number][] = [];
    for (const event of events.data.items || []) {
      if (event.status === 'cancelled') continue;

      const start = event.start?.dateTime;
      const end = event.end?.dateTime;
      if (!start || !end) continue; // skip all-day events

      const startDate = new Date(start);
      const endDate = new Date(end);
      const startMin = startDate.getHours() * 60 + startDate.getMinutes();
      const endMin = endDate.getHours() * 60 + endDate.getMinutes();
      busyIntervals.push([startMin, endMin]);
    }

    // Filter available time slots
    const available = TIME_SLOTS.filter((slot) => {
      const [h, m] = slot.split(':').map(Number);
      const slotStart = h * 60 + m;
      const slotEnd = slotStart + duration;

      // Check if this slot overlaps with any busy interval
      return !busyIntervals.some(
        ([busyStart, busyEnd]) => slotStart < busyEnd && slotEnd > busyStart
      );
    });

    return NextResponse.json({ available });
  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json({ error: 'Verfügbarkeit konnte nicht geprüft werden' }, { status: 500 });
  }
}
