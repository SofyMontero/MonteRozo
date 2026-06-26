import { NavLink } from "react-router-dom";

const BlockFeatureThree = () => {
  return (
    <div className="block-feature-three position-relative mt-150 lg-mt-80 pb-150 lg-pb-80 sm-pb-60">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-md-6 wow fadeInLeft">
              <div className="title-one mb-90 lg-mb-50">
                <h2>Reservar tu cita es sencillo</h2>
              </div>
            </div>
          </div>

          <div className="row gx-xxl-5">
            <div className="col-lg-8">
              <div className="block-one pt-45 lg-pt-30 pb-20 ps-3 ps-xl-5 pe-xl-5 pe-3 position-relative border-30 wow fadeInUp">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="tag d-inline-block border-30 fw-500 text-uppercase mb-15">
                      Paso 1
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h3 className="block-title d-inline-block position-relative">
                      <NavLink to="/contacto">
                        Escríbeme o completa el formulario de contacto
                      </NavLink>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="block-two border-30 d-flex mt-45 lg-mt-30 wow fadeInUp">
                <div className="img-wrapper"></div>
                <div className="text-wrapper bg-white">
                  <h3 className="block-title d-inline-block position-relative mt-5 mb-40 lg-mb-30">
                    <NavLink to="/contacto">
                      Agenda tu consulta inicial gratuita de 15 minutos para
                      conocernos y resolver tus dudas.
                    </NavLink>
                  </h3>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="tag text-uppercase fw-500">Paso 2</div>
                    <NavLink
                      to="/contacto"
                      className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                    >
                      <i className="bi bi-arrow-up-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="block-three border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-40 lg-pt-30 pb-30 md-mt-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="date">Paso 3</div>
                <h3 className="block-title d-inline-block position-relative mt-20 mb-80 lg-mb-50">
                  <NavLink to="/contacto">
                    Comenzamos tu proceso terapéutico con sesiones de 50
                    minutos, presenciales u online.
                  </NavLink>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tag text-uppercase fw-500">Primera sesión</div>
                  <NavLink
                    to="/contacto"
                    className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </NavLink>
                </div>
              </div>
              <div
                className="block-four border-30 ps-lg-4 ps-3 pe-lg-4 pe-3 pt-15 pb-30 mt-45 lg-mt-30 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h3 className="block-title d-inline-block position-relative mt-20 mb-250 lg-mb-150 sm-mb-100">
                  <a
                    href="https://wa.me/573007000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ¿Prefieres escribirme? Contáctame por WhatsApp.
                  </a>
                </h3>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="tag text-uppercase fw-500">WhatsApp</div>
                  <a
                    href="https://wa.me/573007000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="section-btn sm-mt-40">
            <NavLink to="/contacto" className="btn-five icon-link">
              <span className="text">Reservar mi cita</span>
              <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-right"></i>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureThree;
