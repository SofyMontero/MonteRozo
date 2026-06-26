import { Heart, Users, Video } from "lucide-react";

const focusAreas = [
  "Infancia",
  "Adolescencia",
  "Familias",
  "Vínculos",
  "Bienestar",
];

const highlights = [
  {
    icon: Users,
    title: "Infancia, adolescencia y familias",
    description:
      "Acompañamiento especializado en las distintas etapas del desarrollo y en el fortalecimiento de los vínculos familiares.",
  },
  {
    icon: Heart,
    title: "Bienestar emocional integral",
    description:
      "Trabajo desde una perspectiva que integra emociones, pensamientos y contexto de vida para promover cambios significativos y sostenibles.",
  },
];

const TextFeatureNine = () => {
  return (
    <section className="text-feature-nine position-relative mt-180 lg-mt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft">
              <div className="pt-110 lg-pt-80 pb-300 xl-pb-200 md-pb-50 pe-xxl-5">
                <div className="title-two mb-30">
                  <h2 className="text-white">
                    Un acompañamiento{" "}
                    <span className="text-feature-nine-accent">
                      integral para tu bienestar.
                    </span>
                  </h2>
                </div>
                <p className="text-lg text-white opacity-75 mb-50 lg-mb-30">
                  Intervención basada en evidencia, adaptada a niños,
                  adolescentes y familias. Más allá de aliviar síntomas,
                  construimos herramientas para el día a día.
                </p>
                <div className="row">
                  {highlights.map((item) => (
                    <div key={item.title} className="col-sm-6">
                      <div className="block mt-30">
                        <span className="text-feature-nine-icon d-inline-flex align-items-center justify-content-center rounded-circle mb-3">
                          <item.icon size={24} strokeWidth={1.75} />
                        </span>
                        <h4 className="fw-500 text-white mt-20 lg-mt-10 mb-25">
                          {item.title}
                        </h4>
                        <p className="text-white opacity-75 mb-0">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vertical-text-wrapper">
        {focusAreas.map((area) => (
          <div key={area} className="text-list">
            <span>{area}</span>
          </div>
        ))}
      </div>

      <div
        className="text-feature-nine-visual shapes shape_04"
        role="img"
        aria-label="Atención psicológica virtual"
      >
        <div className="text-feature-nine-visual-inner">
          <Video size={28} strokeWidth={1.75} />
          <span>Atención virtual</span>
        </div>
      </div>
    </section>
  );
};

export default TextFeatureNine;
