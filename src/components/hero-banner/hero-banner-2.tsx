import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  Shield,
  Video,
} from "lucide-react";
import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";
import Slider from "react-slick";
import { BRAND } from "@/data/brand-assets";

const slider_bg = ["/assets/images/gallery/bannermr.png"];

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

const bookingSteps = [
  {
    icon: Calendar,
    title: "Agenda en minutos",
    text: "100% virtual",
  },
  {
    icon: Clock,
    title: "Sesiones de 50 min",
    text: "Tarifas 2026 – 2027",
  },
  {
    icon: Video,
    title: "Modalidad flexible",
    text: "Videollamada segura",
  },
  {
    icon: Shield,
    title: "Confidencialidad",
    text: "Espacio ético y seguro",
  },
];

const trustBadges = ["Colegiado", "Atención 100% virtual"];

const HeroBannerTwo = () => {
  return (
    <div className="hero-banner-one hero-banner-mr position-relative">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{
                backgroundImage: `linear-gradient(rgba(57, 74, 82, 0.84), rgba(57, 74, 82, 0.74)), url(${bg})`,
                backgroundPosition: "center 20%",
              }}
            />
          </div>
        ))}
      </Slider>

      <div className="hero-banner-mr__content">
        <div className="container">
          <div className="row align-items-center gy-4 gy-lg-5">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="hero-banner-mr__intro text-center text-lg-start">
                <span className="hero-banner-mr__badge">
                  Tarifas 2026 – 2027
                </span>

                <h1 className="hero-banner-mr__title">
                  Recupera tu bienestar con un espacio{" "}
                  <span className="text-lime-500">seguro</span> y profesional
                </h1>

                <p className="hero-banner-mr__lead">
                  <span className="fw-semibold text-white">
                    Edwing Andrés Montero Rozo
                  </span>
                  , psicólogo clínico especializado en infancia, adolescencia y
                  familias. Acompañamiento basado en evidencia para fortalecer el
                  bienestar emocional de tu familia.
                </p>

                <div className="hero-banner-mr__actions">
                  <SectionLink
                    section={SECTIONS.contacto}
                    className="btn btn-success bg-lime-500 hero-banner-mr__btn-primary"
                    aria-label="Reservar primera cita"
                  >
                    Reservar cita
                    <ArrowRight size={16} />
                  </SectionLink>
                  <SectionLink
                    section={SECTIONS.honorarios}
                    className="btn btn-outline-light hero-banner-mr__btn-secondary"
                  >
                    Ver honorarios
                  </SectionLink>
                </div>

                <ul className="hero-banner-mr__trust list-unstyled m-0">
                  {trustBadges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.65 }}
              id="reserva-section"
            >
              <div className="hero-banner-mr__card">
                <div className="hero-banner-mr__card-accent" aria-hidden="true" />

                <div className="hero-banner-mr__profile">
                  <img
                    src={BRAND.isotipo}
                    alt={BRAND.logoAlt}
                    className="hero-banner-mr__avatar"
                  />
                  <div className="min-w-0">
                    <h2 className="hero-banner-mr__profile-name">
                      Edwing Andrés Montero Rozo
                    </h2>
                    <p className="hero-banner-mr__profile-meta mb-0">
                      Psicólogo clínico · Infancia, adolescencia y familias
                    </p>
                  </div>
                </div>

                <h3 className="hero-banner-mr__card-title">
                  Tu primera cita, paso a paso
                </h3>

                <div className="row g-2 g-sm-3 mb-4">
                  {bookingSteps.map((step) => (
                    <div key={step.title} className="col-6">
                      <div className="hero-banner-mr__step">
                        <step.icon
                          className="text-lime-500 flex-shrink-0"
                          size={17}
                        />
                        <div className="min-w-0">
                          <p className="hero-banner-mr__step-title mb-0">
                            {step.title}
                          </p>
                          <p className="hero-banner-mr__step-text mb-0">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <SectionLink
                  section={SECTIONS.contacto}
                  className="btn btn-success bg-lime-500 w-100 hero-banner-mr__btn-primary"
                >
                  Quiero reservar mi cita
                  <ArrowRight size={16} />
                </SectionLink>

                <p className="hero-banner-mr__card-note mb-0">
                  Respuesta en menos de 24 h · Sin compromiso en la consulta
                  inicial
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerTwo;
