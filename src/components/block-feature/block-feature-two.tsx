import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ClipboardList,
  LineChart,
  Target,
  UserCheck,
  Video,
} from "lucide-react";
import { BookAppointmentButton } from "@/components/booking/book-appointment-button";
import { SectionLink } from "@/components/section-link";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { SECTIONS } from "@/data/sections";

const processSteps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Primera sesión de valoración",
    description:
      "Exploramos las dificultades actuales, los recursos disponibles y los objetivos que deseas alcanzar.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Evaluación personalizada",
    description:
      "Cada niño, adolescente o familia tiene necesidades distintas. El proceso se adapta a tu realidad y a tus objetivos.",
  },
  {
    step: "03",
    icon: Target,
    title: "Plan de trabajo colaborativo",
    description:
      "Definimos estrategias de intervención, frecuencia de sesiones y metas terapéuticas de manera conjunta.",
  },
  {
    step: "04",
    icon: LineChart,
    title: "Seguimiento continuo",
    description:
      "Monitoreamos los avances del proceso para favorecer cambios significativos y sostenibles en el tiempo.",
  },
];

function ProcessTimelineItem({
  step,
  icon: Icon,
  title,
  description,
  isLast = false,
}: {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <li className={`como-funciona__step${isLast ? " is-last" : ""}`}>
      <div className="como-funciona__step-marker" aria-hidden="true">
        <span className="como-funciona__step-number">{step}</span>
        <FeatureIcon icon={Icon} size={18} className="como-funciona__step-icon" />
      </div>
      <div className="como-funciona__step-content">
        <h3 className="como-funciona__step-title">{title}</h3>
        <p className="como-funciona__step-desc mb-0">{description}</p>
      </div>
    </li>
  );
}

const BlockFeatureTwo = () => {
  return (
    <section className="como-funciona-section">
      <div className="container">
        <header className="como-funciona__header">
          <p className="como-funciona__eyebrow">Cómo funciona</p>
          <h2 className="como-funciona__title">
            Tu primera sesión, con claridad y confianza
          </h2>
          <p className="como-funciona__lead mb-0">
            Dar el primer paso puede generar dudas. Por eso, el acompañamiento
            está pensado para comprender tu situación, identificar necesidades y
            construir juntos un plan de trabajo acorde a tu contexto familiar.
          </p>
        </header>

        <div className="row g-4 g-lg-5 align-items-stretch como-funciona__body">
          <div className="col-lg-5">
            <figure className="como-funciona__figure">
              <img
                src="/assets/images/gallery/montero1.jpeg"
                alt="Edwing Andrés Montero Rozo, psicólogo clínico"
                className="como-funciona__photo"
                loading="lazy"
              />
              <div className="como-funciona__figure-overlay">
                <span className="como-funciona__figure-badge">
                  <Video size={14} />
                  Atención 100% virtual
                </span>
                <figcaption className="como-funciona__caption">
                  <strong>Edwing Andrés Montero Rozo</strong>
                  <span>Psicólogo clínico · Infancia, adolescencia y familias</span>
                </figcaption>
              </div>
            </figure>
          </div>

          <div className="col-lg-7">
            <div className="como-funciona__panel h-100">
              <p className="como-funciona__panel-label">El proceso en 4 pasos</p>
              <ol className="como-funciona__timeline list-unstyled m-0">
                {processSteps.map((item, i) => (
                  <ProcessTimelineItem
                    key={item.step}
                    step={item.step}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    isLast={i === processSteps.length - 1}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="como-funciona__actions">
          <BookAppointmentButton className="btn-four">
            Agendar primera consulta
          </BookAppointmentButton>
          <SectionLink
            section={SECTIONS.servicios}
            className="btn-three icon-link d-inline-flex align-items-center gap-2"
          >
            <span>Conocer servicios</span>
            <ArrowRight size={16} />
          </SectionLink>
        </div>
      </div>
    </section>
  );
};

export default BlockFeatureTwo;
