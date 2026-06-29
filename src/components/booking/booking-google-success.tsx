import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import {
  WHATSAPP_PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/data/contact-config";

type BookingGoogleSuccessProps = {
  onClose: () => void;
};

export function BookingGoogleSuccess({ onClose }: BookingGoogleSuccessProps) {
  return (
    <div className="booking-modal__success">
      <div className="booking-modal__success-icon">
        <CheckCircle2 size={40} />
      </div>
      <h3 className="booking-modal__success-title">¡Tu cita quedó agendada!</h3>
      <ul className="booking-modal__success-list">
        <li>
          <Mail size={18} className="booking-modal__success-list-icon" />
          <span>
            Revisa tu <strong>correo electrónico</strong>: recibirás la
            confirmación de la agendación para tu aprobación.
          </span>
        </li>
        <li>
          <MessageCircle size={18} className="booking-modal__success-list-icon" />
          <span>
            Al <strong>número de teléfono</strong> que registraste te
            contactaremos por <strong>WhatsApp</strong>, donde podrás escribirnos
            tus dudas e inquietudes antes de la sesión.
          </span>
        </li>
      </ul>
      <p className="booking-modal__success-note mb-0">
        Si no recibes el correo en unos minutos, revisa la carpeta de spam o
        escríbenos al{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          {WHATSAPP_PHONE_DISPLAY}
        </a>
        .
      </p>
      <button type="button" className="btn-four w-100 mt-4" onClick={onClose}>
        Entendido
      </button>
    </div>
  );
}
