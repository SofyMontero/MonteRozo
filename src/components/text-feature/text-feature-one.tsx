import { NavLink } from "react-router-dom";

const TextFeatureOne = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <div className="text-feature-one mt-150 lg-mt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 wow fadeInLeft">
            <div className="title-one">
              <div className="upper-title">Cómo funciona</div>
              <h2>Tu primera sesión, sin incertidumbre</h2>
            </div>
            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
              Sé que dar el primer paso puede generar dudas. Por eso diseñé un
              proceso claro: una consulta inicial para conocernos, una evaluación
              de tus necesidades y un plan terapéutico acordado contigo.
            </p>
            <div className="d-inline-flex flex-wrap align-items-center">
              <NavLink to="/contacto" className="btn-four mt-15 me-4">
                Reservar consulta inicial
              </NavLink>
              <NavLink to="/servicios-factoring" className="btn-three icon-link mt-15">
                <span>Ver servicios</span>
                <img
                  src="/assets/images/icon/icon_09.svg"
                  alt=""
                  className="lazy-img icon ms-1"
                />
              </NavLink>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 wow fadeInRight">
            <div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
              <ul className="style-none">
                <li>Consulta inicial gratuita de orientación (15 min)</li>
                <li>Evaluación personalizada de tu situación</li>
                <li>Plan de intervención acordado y transparente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureOne;
