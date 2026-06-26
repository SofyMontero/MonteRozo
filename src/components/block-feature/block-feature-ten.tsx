function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="" className="lazy-img" />
      </div>
      <div className="text">
        <h4 className="fw-bold mb-20 sm-mb-10">{title}</h4>
        <p className="m0">{subtitle}</p>
      </div>
    </div>
  );
}

const BlockFeatureTen = () => {
  return (
    <div className="block-feature-ten position-relative mt-150 lg-mt-80 pb-100 lg-pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="title-one mb-50 lg-mb-20">
              <h2>¿Qué incluye el acompañamiento terapéutico?</h2>
            </div>
          </div>
        </div>
        <div className="line-wrapper position-relative">
          <div className="row gx-lg-5">
            <div className="col-xl-4 col-md-6 wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_62.svg"
                title="Evaluación personalizada"
                subtitle="Análisis de tu situación actual, historial relevante y objetivos terapéuticos."
              />
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon="/assets/images/icon/icon_63.svg"
                title="Plan de intervención"
                subtitle="Estrategias concretas basadas en evidencia, acordadas contigo desde el inicio."
              />
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <CardItem
                icon="/assets/images/icon/icon_64.svg"
                title="Seguimiento continuo"
                subtitle="Revisiones periódicas del progreso y ajustes al plan según tu evolución."
              />
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_65.svg"
                title="Herramientas prácticas"
                subtitle="Ejercicios y técnicas para aplicar entre sesiones y consolidar los cambios."
              />
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon="/assets/images/icon/icon_66.svg"
                title="Tarifas transparentes"
                subtitle="Sesión individual $120.000 COP. Bonos disponibles. Sin costos ocultos."
              />
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <CardItem
                icon="/assets/images/icon/icon_67.svg"
                title="Confidencialidad garantizada"
                subtitle="Espacio ético y protegido bajo el secreto profesional y normativa de datos."
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/shape/shape_05.svg"
        alt=""
        className="lazy-img shapes shape_01"
      />
    </div>
  );
};

export default BlockFeatureTen;
