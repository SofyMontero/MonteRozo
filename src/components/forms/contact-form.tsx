import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CONTACT_FORM_ENDPOINT } from "@/data/contact-config";
import ErrorMsg from "../common/err-msg";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio").label("Nombre"),
  email: yup
    .string()
    .required("El correo es obligatorio")
    .email("Ingresa un correo válido")
    .label("Email"),
  phone: yup.string().required("El teléfono es obligatorio").label("Teléfono"),
  message: yup
    .string()
    .required("El mensaje es obligatorio")
    .min(10, "Escribe al menos 10 caracteres")
    .label("Mensaje"),
});

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus("sending");

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
          _subject: `Nueva solicitud de cita — ${data.name}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  });

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="name">Nombre*</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre*"
              {...register("name")}
              id="name"
              name="name"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message as string} />
            </div>
          </div>
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="phone">Teléfono*</label>
            <input
              type="text"
              placeholder="Ingresa tu teléfono*"
              {...register("phone")}
              id="phone"
              name="phone"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.phone?.message as string} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="email">Correo electrónico*</label>
            <input
              type="email"
              placeholder="Ingresa tu correo*"
              {...register("email")}
              id="email"
              name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message as string} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <label htmlFor="message">Mensaje*</label>
            <textarea
              placeholder="Cuéntame cómo puedo ayudarte*"
              {...register("message")}
              id="message"
              name="message"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.message?.message as string} />
            </div>
          </div>
        </div>
        <div className="col-12">
          {status === "success" && (
            <p className="text-success small mb-3">
              Mensaje enviado. Te responderé pronto a tu correo.
            </p>
          )}
          {status === "error" && (
            <p className="text-danger small mb-3">
              No se pudo enviar el mensaje. Intenta de nuevo o escríbeme por
              WhatsApp.
            </p>
          )}
          <button
            type="submit"
            className="btn-four tran3s w-100 d-block"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
