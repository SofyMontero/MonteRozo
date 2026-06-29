import { useEffect, useState } from "react";
import { BRAND } from "@/data/brand-assets";
import { BookAppointmentButton } from "@/components/booking/book-appointment-button";
import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";
import { WHATSAPP_URL } from "@/data/contact-config";
import { closeMobileNav } from "@/utils/scroll-to-section";
import Navbar from "./navbar";

const HeaderTwo = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const collapse = document.getElementById("navbarNav");
    if (!collapse) return;

    const syncNavState = () => {
      const isOpen = collapse.classList.contains("show");
      setNavOpen(isOpen);
      document.body.classList.toggle("nav-open", isOpen);
    };

    syncNavState();
    const observer = new MutationObserver(syncNavState);
    observer.observe(collapse, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
      document.body.classList.remove("nav-open");
    };
  }, []);

  return (
    <>
      <div
        className={`nav-backdrop${navOpen ? " is-visible" : ""}`}
        onClick={closeMobileNav}
        aria-hidden="true"
      />
      <header className="theme-main-menu menu-overlay menu-style-one white-vr sticky-menu fixed">
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <SectionLink
                  section={SECTIONS.inicio}
                  className="d-flex align-items-center text-decoration-none"
                >
                  <img
                    src={BRAND.logo}
                    alt={BRAND.logoAlt}
                    height={52}
                    style={{ width: "auto", borderRadius: 8 }}
                  />
                </SectionLink>
              </div>

              <div className="right-widget ms-auto ms-lg-0 me-2 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-none d-lg-inline-block">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light fw-500"
                    >
                      <span className="bi bi-whatsapp text-white me-2"></span>
                      WhatsApp
                    </a>
                  </li>
                  <li className="d-none d-lg-inline-block ms-3 ms-xl-4">
                    <BookAppointmentButton className="btn-one tran3s">
                      Reservar cita
                    </BookAppointmentButton>
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
                  aria-expanded={navOpen}
                  aria-label="Abrir menú de navegación"
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
    </>
  );
};

export default HeaderTwo;
