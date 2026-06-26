import { BRAND } from "@/data/brand-assets";
import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";
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
      <li className="d-md-none ps-2 pe-2">
        <SectionLink
          section={SECTIONS.contacto}
          className="signup-btn-one icon-link w-100 mt-20"
        >
          <span
            className="flex-fill text-white text-center"
            style={{ background: "#9B9D87" }}
          >
            Reservar cita
          </span>
        </SectionLink>
      </li>
    </ul>
  );
};

export default Navbar;
