import { BRAND } from "@/data/brand-assets";
import { BookAppointmentButton } from "@/components/booking/book-appointment-button";
import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";
import { WHATSAPP_URL } from "@/data/contact-config";
import menu_data from "../../data/menu-data";

const Navbar = () => {
  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <SectionLink section={SECTIONS.inicio} className="d-block text-decoration-none">
            <img
              src={BRAND.logo}
              alt={BRAND.logoAlt}
              height={48}
              style={{ width: "auto", borderRadius: 8 }}
            />
          </SectionLink>
        </div>
      </li>
      {menu_data.map((menu) => (
        <li key={menu.id} className="nav-item">
          <SectionLink section={menu.section} className="nav-link">
            {menu.title}
          </SectionLink>
        </li>
      ))}
      <li className="d-lg-none px-3 mt-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center gap-2 w-100 py-3 rounded-3 text-white text-decoration-none fw-500"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          <span className="bi bi-whatsapp"></span>
          Escribir por WhatsApp
        </a>
      </li>
      <li className="d-lg-none px-3 pb-2">
        <BookAppointmentButton className="signup-btn-one icon-link w-100 mt-2">
          <span
            className="flex-fill text-white text-center"
            style={{ background: "#A7B29C" }}
          >
            Reservar cita
          </span>
        </BookAppointmentButton>
      </li>
    </ul>
  );
};

export default Navbar;
