type IcsEventInput = {
  title: string;
  description: string;
  startIso: string;
  endIso: string;
  organizerEmail: string;
  attendeeEmail: string;
  attendeeName: string;
};

function toIcsUtc(dateIso: string) {
  const date = new Date(`${dateIso}-05:00`);
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

export function generateIcsContent({
  title,
  description,
  startIso,
  endIso,
  organizerEmail,
  attendeeEmail,
  attendeeName,
}: IcsEventInput) {
  const uid = `${Date.now()}@monterorozo.com`;
  const now = toIcsUtc(new Date().toISOString().slice(0, 19));

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//MonteRozo Psicologia//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${toIcsUtc(startIso)}`,
    `DTEND:${toIcsUtc(endIso)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, "\\n")}`,
    `ORGANIZER;CN=MonteRozo Psicologia:mailto:${organizerEmail}`,
    `ATTENDEE;CN=${attendeeName};RSVP=TRUE:mailto:${attendeeEmail}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcsFile(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
