import { NavLink } from "react-router-dom";

const FancyBannerNine = () => {
  return (
    <div className="fancy-banner-two mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-one">
                <h2>¿Listo/a para dar el primer paso?</h2>
              </div>
              <p className="text-lg mt-40 lg-mt-30 mb-30">
                Pedir ayuda es un acto de valentía. Estoy aquí para acompañarte
                con profesionalismo, calidez y confidencialidad.
              </p>
              <div className="d-inline-flex flex-wrap justify-content-center">
                <NavLink to="/contacto" className="btn-four mt-10 me-2">
                  Reservar cita
                </NavLink>
                <a
                  href="https://wa.me/573007000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-six mt-10 ms-2"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerNine;
