import { BRAND } from "@/data/brand-assets";
import { BookAppointmentButton } from "@/components/booking/book-appointment-button";
import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";
import { CONTACT_EMAIL, CONTACT_MAILTO, WHATSAPP_URL } from "@/data/contact-config";
import FooterSocial from "./footer-social";

const Footer = () => {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-md-3 footer-intro mb-30">
              <div className="logo mb-15">
                <SectionLink section={SECTIONS.inicio} className="d-inline-block text-decoration-none">
                  <img
                    src={BRAND.logo}
                    alt={BRAND.logoAlt}
                    height={64}
                    style={{ width: "auto", borderRadius: 8 }}
                  />
                </SectionLink>
              </div>
              <p className="text-white lh-sm mb-35">
                MonteRozo{" "}
                <span className="opacity-50">
                  psicólogo clínico <br /> atención virtual
                </span>
              </p>
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial />
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Navegación</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <SectionLink section={SECTIONS.inicio}>Inicio</SectionLink>
                </li>
                <li>
                  <SectionLink section={SECTIONS.honorarios}>Honorarios</SectionLink>
                </li>
                <li>
                  <SectionLink section={SECTIONS.servicios}>Servicios</SectionLink>
                </li>
                <li>
                  <SectionLink section={SECTIONS.comoFunciona}>Cómo funciona</SectionLink>
                </li>
                <li>
                  <SectionLink section={SECTIONS.contacto}>Contacto</SectionLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Servicios</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <SectionLink section={SECTIONS.servicios}>Infancia</SectionLink>
                </li>
                <li>
                  <SectionLink section={SECTIONS.servicios}>Adolescencia</SectionLink>
                </li>
                <li>
                  <SectionLink section={SECTIONS.servicios}>Familias</SectionLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Contacto</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <BookAppointmentButton className="book-appointment-link">
                    Agendar cita
                  </BookAppointmentButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last mb-15 mb-lg-0">
              <div className="footer-newsletter">
                <h5 className="footer-title">Recibe recursos de bienestar</h5>
                <form action="#">
                  <input type="email" placeholder="Tu correo electrónico" />
                  <button aria-label="Suscribirse">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-7 order-lg-first mb-15">
              <SectionLink section={SECTIONS.inicio} className="d-none d-lg-inline-flex align-items-center gap-3 mb-25 text-decoration-none">
                <img
                  src={BRAND.isotipo}
                  alt={BRAND.logoAlt}
                  height={40}
                  style={{ width: "auto" }}
                />
                <span className="text-white opacity-75">MonteRozo · Psicólogo Clínico</span>
              </SectionLink>
              <div className="d-xl-flex align-items-center">
                <div className="copyright me-xl-4 lg-mt-10 order-lg-first">
                  © {new Date().getFullYear()} MonteRozo · Psicólogo clínico.
                  Todos los derechos reservados.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
