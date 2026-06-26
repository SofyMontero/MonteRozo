import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Shield, Video } from "lucide-react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { BRAND } from "@/data/brand-assets";

const slider_bg = ["/assets/images/gallery/img_03.jpg"];

const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 7000,
};

const HeroBannerTwo = () => {
  return (
    <div className="hero-banner-one pt-160 xl-pt-200 lg-pt-100 pb-100 lg-pb-100 position-relative">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{
                backgroundImage: `linear-gradient(rgba(26, 46, 40, 0.82), rgba(26, 46, 40, 0.72)), url(${bg})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
      <section className="pt-5 pb-5 overflow-hidden">
        <div className="container">
          <div className="row gy-5">
            <motion.div
              className="col-lg-5 z-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <div className="badge bg-lime-500 bg-opacity-10 fw-medium mb-3 text-white border border-white border-opacity-25">
                  Psicología clínica · Bogotá
                </div>
                <h1 className="display-5 fw-bold mb-3 text-white">
                  <div>Recupera tu bienestar</div>
                  <div>
                    con un espacio{" "}
                    <span className="text-lime-500">seguro</span>
                  </div>
                  <div>y profesional</div>
                </h1>
                <p className="fs-5 text-white text-opacity-75 mb-4">
                  Soy <span className="fw-semibold text-white">MonteRozo</span>,
                  psicólogo clínico. Te acompaño en ansiedad, estrés, autoestima y
                  relaciones con un enfoque empático, basado en evidencia y adaptado a ti.
                </p>
              </motion.div>

              <motion.div
                className="d-flex flex-column flex-sm-row gap-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <NavLink
                  to="/contacto"
                  className="btn btn-success bg-lime-500 d-flex align-items-center justify-content-center gap-2 px-4 py-2"
                  aria-label="Reservar primera cita con la Dra. Montero Rozo"
                >
                  Reservar cita
                  <ArrowRight size={16} />
                </NavLink>
                <NavLink
                  to="/contacto"
                  className="btn btn-outline-light d-flex align-items-center justify-content-center gap-2 px-4 py-2"
                >
                  Consulta inicial gratuita
                </NavLink>
              </motion.div>

              <motion.div
                className="d-flex flex-wrap align-items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <p className="text-white text-opacity-75 small mb-0">
                  <span className="text-lime-500 fw-semibold">Colegiada</span>{" "}
                  · Sesiones presenciales y online
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-lg-7 position-relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              id="reserva-section"
            >
              <div className="position-relative bg-white rounded-4 shadow p-4 p-md-5">
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{
                    height: "0.8rem",
                    background: "linear-gradient(to right, #7BAE9E, #1F5E59)",
                    borderRadius: "15px 15px 0px 0px",
                  }}
                ></div>
                <div className="pt-4">
                  <div className="d-flex align-items-start gap-3 mb-4">
                    <img
                      src={BRAND.isotipo}
                      alt={BRAND.logoAlt}
                      className="rounded-circle object-fit-contain bg-light p-2"
                      style={{ width: 88, height: 88 }}
                    />
                    <div>
                      <h3 className="h4 fw-bold mb-1">MonteRozo</h3>
                      <p className="text-muted small mb-0">
                        Psicólogo clínico · Terapia cognitivo-conductual
                      </p>
                      <p className="text-muted small mb-0">
                        N.º colegiado: COL-000000
                      </p>
                    </div>
                  </div>

                  <h4 className="fw-bold mb-3">Tu primera cita, paso a paso</h4>

                  <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-start gap-2 p-3 rounded-3 bg-light">
                        <Calendar className="text-lime-500 flex-shrink-0 mt-1" size={18} />
                        <div>
                          <p className="fw-semibold mb-0 small">Agenda en minutos</p>
                          <p className="text-muted small mb-0">Elige horario presencial u online</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-start gap-2 p-3 rounded-3 bg-light">
                        <Clock className="text-lime-500 flex-shrink-0 mt-1" size={18} />
                        <div>
                          <p className="fw-semibold mb-0 small">Sesiones de 50 min</p>
                          <p className="text-muted small mb-0">Desde $120.000 COP</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-start gap-2 p-3 rounded-3 bg-light">
                        <Video className="text-lime-500 flex-shrink-0 mt-1" size={18} />
                        <div>
                          <p className="fw-semibold mb-0 small">Modalidad flexible</p>
                          <p className="text-muted small mb-0">Consultorio o videollamada segura</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-start gap-2 p-3 rounded-3 bg-light">
                        <Shield className="text-lime-500 flex-shrink-0 mt-1" size={18} />
                        <div>
                          <p className="fw-semibold mb-0 small">Confidencialidad total</p>
                          <p className="text-muted small mb-0">Espacio ético y sin juicios</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <NavLink
                    to="/contacto"
                    className="btn btn-success bg-lime-500 w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                  >
                    Quiero reservar mi cita
                    <ArrowRight size={16} />
                  </NavLink>
                  <p className="text-center text-muted small mt-3 mb-0">
                    Respuesta en menos de 24 horas · Sin compromiso en la consulta inicial
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBannerTwo;
