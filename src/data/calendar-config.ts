export type Weekday =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado";

export type TimeSlot = {
  start: string;
  end: string;
};

export type DaySchedule = {
  day: Weekday;
  label: string;
  enabled: boolean;
  slots: TimeSlot[];
};

/**
 * URL de Google Calendar — Agenda de citas (recomendado).
 *
 * Configuración:
 * 1. Google Calendar → Crear → Agenda de citas
 * 2. Vincular al calendario monterozopsicologia@gmail.com
 * 3. Definir horarios de disponibilidad
 * 4. Compartir → Incrustar en sitio web → copiar URL
 *
 * Ejemplo:
 * https://calendar.google.com/calendar/appointments/schedules/AcZssZ0...?gv=true
 */
export const GOOGLE_CALENDAR_APPOINTMENT_URL = normalizeAppointmentEmbedUrl(
  import.meta.env.VITE_GOOGLE_CALENDAR_APPOINTMENT_URL?.trim() || "",
);

function normalizeAppointmentEmbedUrl(url: string): string {
  if (!url) return "";

  if (url.includes("calendar.google.com/calendar/appointments") && !url.includes("gv=true")) {
    return `${url}${url.includes("?") ? "&" : "?"}gv=true`;
  }

  return url;
}

export const CALENDAR_TIMEZONE = "America/Bogota";

export const SESSION_DURATION_MINUTES = 50;

/** Horarios de referencia cuando aún no hay Google Calendar conectado */
export const DEFAULT_WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: "lunes",
    label: "Lunes",
    enabled: true,
    slots: [
      { start: "09:00", end: "12:00" },
      { start: "14:00", end: "18:00" },
    ],
  },
  {
    day: "martes",
    label: "Martes",
    enabled: true,
    slots: [
      { start: "09:00", end: "12:00" },
      { start: "14:00", end: "18:00" },
    ],
  },
  {
    day: "miercoles",
    label: "Miércoles",
    enabled: true,
    slots: [
      { start: "09:00", end: "12:00" },
      { start: "14:00", end: "18:00" },
    ],
  },
  {
    day: "jueves",
    label: "Jueves",
    enabled: true,
    slots: [
      { start: "09:00", end: "12:00" },
      { start: "14:00", end: "18:00" },
    ],
  },
  {
    day: "viernes",
    label: "Viernes",
    enabled: true,
    slots: [{ start: "09:00", end: "13:00" }],
  },
  {
    day: "sabado",
    label: "Sábado",
    enabled: false,
    slots: [],
  },
];

export type BookableSlot = {
  id: string;
  date: string;
  label: string;
  startIso: string;
  endIso: string;
};

const WEEKDAY_INDEX: Record<Weekday, number> = {
  lunes: 1,
  martes: 2,
  miercoles: 3,
  jueves: 4,
  viernes: 5,
  sabado: 6,
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function formatDateLabel(date: Date) {
  return date.toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: CALENDAR_TIMEZONE,
  });
}

function addMinutesToTime(time: string, minutes: number) {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + minutes;
  return `${pad(Math.floor(total / 60))}:${pad(total % 60)}`;
}

/** Genera slots reservables para los próximos días según horario habitual */
export function getUpcomingBookableSlots(
  daysAhead = 21,
  schedule = DEFAULT_WEEKLY_SCHEDULE,
): BookableSlot[] {
  const slots: BookableSlot[] = [];
  const now = new Date();
  const today = new Date(
    now.toLocaleString("en-US", { timeZone: CALENDAR_TIMEZONE }),
  );

  for (let offset = 0; offset < daysAhead; offset++) {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    const jsDay = date.getDay();
    const dayEntry = schedule.find((d) => WEEKDAY_INDEX[d.day] === jsDay);

    if (!dayEntry?.enabled) continue;

    for (const range of dayEntry.slots) {
      let cursor = range.start;
      while (addMinutesToTime(cursor, SESSION_DURATION_MINUTES) <= range.end) {
        const endTime = addMinutesToTime(cursor, SESSION_DURATION_MINUTES);
        const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
        const startIso = `${dateStr}T${cursor}:00`;
        const endIso = `${dateStr}T${endTime}:00`;

        const slotStart = new Date(`${startIso}-05:00`);
        if (slotStart <= now) {
          cursor = addMinutesToTime(cursor, SESSION_DURATION_MINUTES);
          continue;
        }

        slots.push({
          id: `${dateStr}-${cursor}`,
          date: dateStr,
          label: `${formatDateLabel(date)} · ${cursor}`,
          startIso,
          endIso,
        });

        cursor = addMinutesToTime(cursor, SESSION_DURATION_MINUTES);
      }
    }
  }

  return slots.slice(0, 48);
}

export const HAS_GOOGLE_APPOINTMENTS = GOOGLE_CALENDAR_APPOINTMENT_URL.length > 0;
