import { NavLink, useLocation } from "react-router-dom";
import { BRAND } from "@/data/brand-assets";
import menu_data from "../../data/menu-data";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <NavLink to="/" className="d-block text-decoration-none">
            <img
              src={BRAND.logo}
              alt={BRAND.logoAlt}
              height={48}
              style={{ width: "auto", borderRadius: 8 }}
            />
          </NavLink>
        </div>
      </li>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
            menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
          }`}
        >
          {menu.dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_menus?.map((dm, i) => (
                  <li key={i}>
                    <NavLink
                      to={dm.link}
                      className={`dropdown-item ${pathname === dm.link ? "active" : ""}`}
                    >
                      <span>{dm.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )}
          {menu.mega_menu && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                <li className="row gx-1">
                  {menu.mega_menus?.map((mm) => (
                    <div key={mm.id} className="col-lg-4">
                      <div className="menu-column">
                        <ul className="style-none mega-dropdown-list">
                          {mm.menus.map((sm, i) => (
                            <li key={i}>
                              <NavLink
                                to={sm.link}
                                className={`dropdown-item ${pathname === sm.link ? "active" : ""}`}
                              >
                                <span>{sm.title}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </>
          )}
          {!menu.dropdown && !menu.mega_menu && (
            <NavLink className="nav-link" to={menu.link} role="button">
              {menu.title}
            </NavLink>
          )}
        </li>
      ))}
      <li className="d-md-none ps-2 pe-2">
        <NavLink to="/contacto" className="signup-btn-one icon-link w-100 mt-20">
          <span
            className="flex-fill text-white text-center"
            style={{ background: "#9B9D87" }}
          >
            Reservar cita
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
