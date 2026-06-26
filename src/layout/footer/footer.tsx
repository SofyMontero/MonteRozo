import { NavLink } from "react-router-dom";
import { BRAND } from "@/data/brand-assets";
import FooterSocial from "./footer-social";

const Footer = () => {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="inner-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-md-3 footer-intro mb-30">
              <div className="logo mb-15">
                <NavLink to="/" className="d-inline-block text-decoration-none">
                  <img
                    src={BRAND.logo}
                    alt={BRAND.logoAlt}
                    height={64}
                    style={{ width: "auto", borderRadius: 8 }}
                  />
                </NavLink>
              </div>
              <p className="text-white lh-sm mb-35">
                MonteRozo{" "}
                <span className="opacity-50">
                  psicólogo clínico <br /> terapia presencial y online
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
                  <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios-factoring">Servicios</NavLink>
                </li>
                <li>
                  <NavLink to="/contacto">Contacto</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Servicios</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <NavLink to="/servicios-factoring">Ansiedad y estrés</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios-factoring">Terapia de pareja</NavLink>
                </li>
                <li>
                  <NavLink to="/servicios-factoring">Autoestima</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-4 mb-20">
              <h5 className="footer-title">Contacto</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <a href="mailto:contacto@monterorozo.com">contacto@monterorozo.com</a>
                </li>
                <li>
                  <a href="https://wa.me/573007000000" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <NavLink to="/contacto">Agendar cita</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last mb-15">
              <div className="footer-newsletter float-xl-end">
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
              <NavLink to="/" className="d-none d-lg-inline-flex align-items-center gap-3 mb-25 text-decoration-none">
                <img
                  src={BRAND.isotipo}
                  alt={BRAND.logoAlt}
                  height={40}
                  style={{ width: "auto" }}
                />
                <span className="text-white opacity-75">MonteRozo · Psicólogo Clínico</span>
              </NavLink>
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
