import { NavLink } from "react-router-dom";
import service_data from "../../data/service-data";

function UpperCardItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-one d-flex w-100 mb-35">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="" className="lazy-img" />
      </div>
      <div className="text ps-4">
        <h4 className="fw-bold">{title}</h4>
        <p className="pe-xl-4">{subtitle}</p>
      </div>
    </div>
  );
}

const BlockFeatureOne = ({ style_2 = false }: { style_2?: boolean }) => {
  const service_items = service_data.filter((s) => s.page === "home-2");
  return (
    <div
      className={`block-feature-one position-relative ${style_2 ? "light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60" : "pt-75"}`}
    >
      {!style_2 && (
        <div className="upper-wrapper mb-110 lg-mb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 wow fadeInUp">
                <UpperCardItem
                  icon="/assets/images/icon/icon_03.svg"
                  title="Enfoque basado en evidencia"
                  subtitle="Intervenciones con respaldo científico, adaptadas a tu historia y a tu ritmo personal."
                />
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <UpperCardItem
                  icon="/assets/images/icon/icon_04.svg"
                  title="Espacio sin juicios"
                  subtitle="Un lugar seguro donde expresar lo que sientes, con confidencialidad y respeto absoluto."
                />
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                <UpperCardItem
                  icon="/assets/images/icon/icon_05.svg"
                  title="Resultados sostenibles"
                  subtitle="Herramientas concretas para que los cambios perduren más allá de la consulta."
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-md-8">
              <div className="title-one text-center text-md-start mb-30 sm-mb-10">
                <div className="upper-title">Áreas de intervención</div>
                <h2>¿En qué puedo ayudarte?</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {service_items.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 d-flex wow fadeInUp"
                data-wow-delay={`0.${i + 1}s`}
              >
                <div className="card-style-two vstack tran3s w-100 mt-30">
                  <img src={item.icon} alt="" className="lazy-img icon me-auto" />
                  <h4 className="fw-bold mt-30 mb-25">{item.title}</h4>
                  <p className="mb-20">{item.desc}</p>
                  <NavLink
                    to="/contacto"
                    className="arrow-btn tran3s mt-auto stretched-link"
                  >
                    <img
                      src="/assets/images/icon/icon_09.svg"
                      alt="Ver más"
                      className="lazy-img"
                    />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="section-subheading sm-mt-40">
            <p className="text-lg">
              Cada proceso es único. En la primera sesión evaluamos juntos tus
              necesidades y definimos un plan terapéutico claro y realista.
            </p>
            <NavLink to="/contacto" className="btn-three icon-link">
              <span>Agendar evaluación inicial</span>
              <img
                src="/assets/images/icon/icon_09.svg"
                alt=""
                className="lazy-img icon ms-1"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureOne;
