import { NavLink } from "react-router-dom";

const FancyBannerThree = () => {
  return (
    <div className="fancy-banner-three position-relative wow fadeInUp">
      <div className="container">
        <div className="row align-content-center">
          <div className="col-lg-8 col-md-9">
            <div className="title-one mb-20 lg-mb-10">
              <h2 className="text-white">
                ¿Tienes dudas? Escríbeme sin compromiso
              </h2>
            </div>
            <p className="text-lg m0 text-white opacity-75">
              Respondo en menos de 24 horas. Tu consulta es confidencial.
            </p>
          </div>
          <div className="col-lg-4 col-md-3">
            <NavLink
              to="/contacto"
              className="quote-btn tran5s rounded-circle d-flex align-items-center justify-content-center ms-auto"
            >
              <img
                src="/assets/images/icon/icon_30.svg"
                alt="Contactar"
                className="lazy-img"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerThree;
