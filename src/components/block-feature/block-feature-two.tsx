import { Check } from "lucide-react";
import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";

const processSteps = [
  {
    title: "Primera sesión de valoración",
    description:
      "Exploraremos las dificultades actuales, los recursos disponibles y los objetivos que deseas alcanzar.",
  },
  {
    title: "Evaluación personalizada",
    description:
      "Cada niño, adolescente o familia tiene necesidades diferentes. El proceso se adapta a tu realidad y a tus objetivos.",
  },
  {
    title: "Plan de trabajo claro y colaborativo",
    description:
      "Definiremos estrategias de intervención, frecuencia de las sesiones y metas terapéuticas de manera conjunta.",
  },
  {
    title: "Seguimiento y acompañamiento continuo",
    description:
      "Monitorearemos los avances del proceso para favorecer cambios significativos y sostenibles en el tiempo.",
  },
];

function ProcessStep({
  title,
  description,
  isLast = false,
}: {
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <li
      className={`d-flex align-items-start gap-3 mb-4 pb-4${isLast ? "" : " border-bottom border-light-subtle"}`}
    >
      <span
        className="d-flex align-items-center justify-content-center rounded-circle bg-lime-50 flex-shrink-0"
        style={{ width: 36, height: 36 }}
      >
        <Check className="text-lime-500" size={18} strokeWidth={2.5} />
      </span>
      <div>
        <h4 className="h6 fw-bold mb-2">{title}</h4>
        <p className="text-muted small mb-0">{description}</p>
      </div>
    </li>
  );
}

const BlockFeatureTwo = () => {
  return (
    <section className="block-feature-two mt-150 lg-mt-100 pb-100 lg-pb-60">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-5 wow fadeInLeft">
            <div className="title-one">
              <div className="upper-title">Cómo funciona</div>
              <h2>Tu primera sesión, con claridad y confianza</h2>
            </div>
            <p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-25">
              Dar el primer paso puede generar dudas. Por eso, la primera sesión
              está diseñada para comprender tu situación, identificar necesidades
              y construir juntos un plan de trabajo acorde a tus objetivos y
              contexto familiar.
            </p>
            <div className="d-inline-flex flex-wrap align-items-center gap-2">
              <SectionLink section={SECTIONS.contacto} className="btn-four mt-15">
                Agendar primera consulta
              </SectionLink>
              <SectionLink
                section={SECTIONS.servicios}
                className="btn-three icon-link mt-15"
              >
                <span>Conocer servicios</span>
                <img
                  src="/assets/images/icon/icon_09.svg"
                  alt=""
                  className="lazy-img icon ms-1"
                />
              </SectionLink>
            </div>
          </div>

          <div className="col-lg-7 wow fadeInRight">
            <div className="row g-4 align-items-stretch">
              <div className="col-md-5 d-none d-md-block">
                <div
                  className="h-100 rounded-4 overflow-hidden"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(62, 79, 87, 0.08), rgba(155, 157, 135, 0.15)), url(/assets/images/media/background.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: 320,
                  }}
                  role="img"
                  aria-label="Espacio terapéutico acogedor"
                />
              </div>
              <div className="col-md-7">
                <div className="bg-white rounded-4 border border-light-subtle p-4 p-lg-5 h-100 shadow-sm">
                  <ul className="style-none m-0">
                    {processSteps.map((step, i) => (
                      <ProcessStep
                        key={step.title}
                        title={step.title}
                        description={step.description}
                        isLast={i === processSteps.length - 1}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockFeatureTwo;
