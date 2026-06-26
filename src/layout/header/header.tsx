import { BRAND } from "@/data/brand-assets";
import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";
import Navbar from "./navbar";

const HeaderTwo = () => {
  return (
    <header className="theme-main-menu menu-overlay menu-style-one white-vr sticky-menu fixed">
      <div className="inner-content position-relative">
        <div className="top-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <SectionLink section={SECTIONS.inicio} className="d-flex align-items-center text-decoration-none">
                <img
                  src={BRAND.logo}
                  alt={BRAND.logoAlt}
                  height={52}
                  style={{ width: "auto", borderRadius: 8 }}
                />
              </SectionLink>
            </div>

            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li className="d-none d-md-inline-block">
                  <a
                    href="https://wa.me/573007000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light fw-500"
                  >
                    <span className="bi bi-whatsapp text-white me-2"></span>
                    WhatsApp
                  </a>
                </li>
                <li className="d-none d-md-inline-block ms-3 ms-xl-4">
                  <SectionLink section={SECTIONS.contacto} className="btn-one tran3s">
                    Reservar cita
                  </SectionLink>
                </li>
              </ul>
            </div>
            <nav className="navbar navbar-expand-lg p0 order-lg-2">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <Navbar />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
