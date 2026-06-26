import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/err-msg";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().label("Phone"),
  company: yup.string().required().label("Company"),
  message: yup.string().required().min(10).label("Message"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    reset();
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
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="company">Empresa*</label>
            <input
              type="text"
              placeholder="Nombre de la empresa*"
              {...register("company")}
              id="company"
              name="company"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.company?.message as string} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="">Email*</label>
            <input
              type="email"
              placeholder="Ingresa tu email*"
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
            <textarea
              placeholder="Mensaje*"
              {...register("message")}
              id="message"
              name="message"
            ></textarea>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.message?.message as string} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn-four tran3s w-100 d-block">
            Enviar mensaje
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
