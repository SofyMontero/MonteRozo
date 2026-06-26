import { NavLink } from "react-router-dom";


const FooterSocial = () => {
  return (
    <>
      <li>
        <NavLink to="https://www.facebook.com/cesionbnk/" target="_blank">
          <i className="bi bi-facebook"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://www.instagram.com/cesionbnk/" target="_blank">
          <i className="bi bi-instagram"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://www.linkedin.com/company/cesionbnk/" target="_blank">
          <i className="bi bi-linkedin"></i>
        </NavLink>
      </li>
    </>
  );
};

export default FooterSocial;
