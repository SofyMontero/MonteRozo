import { NavLink } from "react-router-dom";

const TextFeatureFive = () => {
  return (
    <div className="text-feature-five position-relative mt-150 lg-mt-80 pb-50">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-6 ms-auto d-flex flex-column order-lg-last">
              <div className="text-wrapper pt-50 pb-60 lg-pb-40 ps-3 ps-xxl-5 pe-3 pe-xxl-5">
                <div className="title-one">
                  <h2 className="text-dark">
                    Servicios de psicología clínica a tu medida
                  </h2>
                </div>
                <p className="text-lg text-dark mt-25 mb-35 lg-mb-30">
                  Cada persona llega con una historia distinta. Por eso adapto la
                  intervención a tus necesidades, ya sea que busques aliviar
                  síntomas, mejorar relaciones o crecer personalmente.
                </p>
                <ul className="style-none">
                  <li>Sesiones individuales de 50 minutos</li>
                  <li>Terapia de pareja y relaciones</li>
                  <li>Modalidad presencial u online</li>
                  <li>Consulta inicial gratuita de orientación</li>
                </ul>
                <NavLink
                  to="/contacto"
                  className="btn-eleven d-inline-flex align-items-center mt-40"
                >
                  <span className="text">Reservar consulta</span>
                  <div className="icon tran3s rounded-circle d-flex align-items-center">
                    <img
                      src="/assets/images/icon/icon_27.svg"
                      alt=""
                      className="lazy-img"
                    />
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 d-flex order-lg-first">
              <div
                className="media-wrapper w-100 d-flex align-items-center justify-content-center position-relative"
                style={{
                  backgroundImage: "url(/assets/images/media/img_33.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: 400,
                  borderRadius: 16,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureFive;
