/** Número de WhatsApp en formato internacional sin + (Colombia) */
export const WHATSAPP_PHONE_E164 = "573227060820";

/** Número formateado para mostrar en la web */
export const WHATSAPP_PHONE_DISPLAY = "+57 322 706 0820";

/** Correo de contacto y recepción de citas */
export const CONTACT_EMAIL = "monterozopsicologia@gmail.com";

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** Mensaje predeterminado al abrir WhatsApp */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría agendar una cita en MonteRozo Psicología.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

export const WHATSAPP_URL_SIMPLE = `https://wa.me/${WHATSAPP_PHONE_E164}`;

/** Endpoint para envío del formulario de contacto */
export const CONTACT_FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
