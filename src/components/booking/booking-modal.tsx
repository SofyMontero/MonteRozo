import { useMemo, useState } from "react";
import { CalendarDays, ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog";
import {
  GOOGLE_CALENDAR_APPOINTMENT_URL,
  HAS_GOOGLE_APPOINTMENTS,
  getUpcomingBookableSlots,
  type BookableSlot,
} from "@/data/calendar-config";
import { BookingFallbackForm } from "./booking-fallback-form";
import { BookingGoogleSuccess } from "./booking-google-success";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const slots = useMemo(() => getUpcomingBookableSlots(), []);
  const [selectedSlot, setSelectedSlot] = useState<BookableSlot | null>(null);
  const [googleBookingConfirmed, setGoogleBookingConfirmed] = useState(false);

  const handleClose = (nextOpen: boolean) => {
    if (!nextOpen) {
      setSelectedSlot(null);
      setGoogleBookingConfirmed(false);
    }
    onOpenChange(nextOpen);
  };

  const handleGoogleBookingConfirm = () => {
    setGoogleBookingConfirmed(true);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="booking-modal">
        {googleBookingConfirmed ? (
          <BookingGoogleSuccess onClose={() => handleClose(false)} />
        ) : (
          <>
            <DialogHeader className="booking-modal__header">
              <DialogTitle className="booking-modal__title">
                Reservar cita
              </DialogTitle>
              <DialogDescription className="booking-modal__desc">
                {HAS_GOOGLE_APPOINTMENTS
                  ? "Elige un horario disponible y completa tus datos."
                  : "Selecciona un horario y completa tus datos."}
              </DialogDescription>
            </DialogHeader>

            {HAS_GOOGLE_APPOINTMENTS ? (
              <>
                <div className="booking-modal__calendar-wrap">
                  <iframe
                    src={GOOGLE_CALENDAR_APPOINTMENT_URL}
                    title="Agenda de citas — MonteRozo Psicología"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <button
                  type="button"
                  className="btn-four w-100 booking-modal__confirm-btn"
                  onClick={handleGoogleBookingConfirm}
                >
                  Ya reservé mi cita
                </button>
              </>
            ) : (
          <div className="booking-modal__fallback">
            {!selectedSlot ? (
              <>
                <div className="booking-modal__fallback-note">
                  <CalendarDays size={18} className="text-lime-500 flex-shrink-0" />
                  <p className="mb-0 small">
                    Horarios orientativos. Para sincronizar con Google Calendar en
                    tiempo real, configura la agenda de citas en el panel de
                    administración.
                  </p>
                </div>
                <div className="booking-modal__slots">
                  {slots.length === 0 ? (
                    <p className="text-muted small mb-0">
                      No hay horarios disponibles en este momento. Escríbenos por
                      WhatsApp para coordinar.
                    </p>
                  ) : (
                    slots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        className="booking-modal__slot-btn"
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot.label}
                      </button>
                    ))
                  )}
                </div>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="booking-modal__back-btn"
                  onClick={() => setSelectedSlot(null)}
                >
                  <ChevronLeft size={16} />
                  Cambiar horario
                </button>
                <p className="booking-modal__selected-slot">
                  Horario seleccionado: <strong>{selectedSlot.label}</strong>
                </p>
                <BookingFallbackForm
                  slot={selectedSlot}
                  onSuccess={handleGoogleBookingConfirm}
                />
              </>
            )}
          </div>
        )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
