import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  CONTACT_EMAIL,
  CONTACT_FORM_ENDPOINT,
} from "@/data/contact-config";
import type { BookableSlot } from "@/data/calendar-config";
import { downloadIcsFile, generateIcsContent } from "@/utils/generate-ics";
import ErrorMsg from "../common/err-msg";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  email: yup.string().required("El correo es obligatorio").email("Correo inválido"),
  phone: yup.string().required("El teléfono es obligatorio"),
  message: yup.string().default(""),
});

type BookingFallbackFormProps = {
  slot: BookableSlot;
  onSuccess: () => void;
};

export function BookingFallbackForm({ slot, onSuccess }: BookingFallbackFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { message: "Solicitud de cita virtual — MonteRozo Psicología" },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus("sending");

    const icsContent = generateIcsContent({
      title: "Cita MonteRozo Psicología",
      description: `Sesión virtual con ${data.name}. Tel: ${data.phone}. ${data.message}`,
      startIso: slot.startIso,
      endIso: slot.endIso,
      organizerEmail: CONTACT_EMAIL,
      attendeeEmail: data.email,
      attendeeName: data.name,
    });

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          horario: slot.label,
          _subject: `Nueva cita solicitada — ${slot.label} — ${data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("send failed");

      downloadIcsFile(icsContent, "cita-monterorozo.ics");
      setStatus("success");
      setTimeout(onSuccess, 1800);
    } catch {
      setStatus("error");
    }
  });

  return (
    <form className="booking-modal__form" onSubmit={onSubmit}>
      <div className="input-group-meta form-group mb-20">
        <label htmlFor="booking-name">Nombre*</label>
        <input id="booking-name" type="text" {...register("name")} />
        <ErrorMsg msg={errors.name?.message ?? ""} />
      </div>
      <div className="input-group-meta form-group mb-20">
        <label htmlFor="booking-email">Correo electrónico*</label>
        <input id="booking-email" type="email" {...register("email")} />
        <ErrorMsg msg={errors.email?.message ?? ""} />
      </div>
      <div className="input-group-meta form-group mb-20">
        <label htmlFor="booking-phone">Teléfono*</label>
        <input id="booking-phone" type="text" {...register("phone")} />
        <ErrorMsg msg={errors.phone?.message ?? ""} />
      </div>
      <div className="input-group-meta form-group mb-20">
        <label htmlFor="booking-message">Notas (opcional)</label>
        <textarea id="booking-message" rows={3} {...register("message")} />
      </div>

      {status === "success" && (
        <p className="text-success small mb-3">
          Solicitud enviada. Revisa tu correo y el archivo de calendario descargado.
        </p>
      )}
      {status === "error" && (
        <p className="text-danger small mb-3">
          No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        className="btn-four w-100"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Confirmando cita..." : "Confirmar cita"}
      </button>
    </form>
  );
}
