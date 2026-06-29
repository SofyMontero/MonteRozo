/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CALENDAR_APPOINTMENT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
