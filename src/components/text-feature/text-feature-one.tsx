import type { LucideIcon } from "lucide-react";
import { ArrowRight, Baby, Check, UserRound, Users } from "lucide-react";
import { SectionLink } from "@/components/section-link";
import { FeatureIcon } from "@/components/ui/feature-icon";
import { SECTIONS } from "@/data/sections";

const interventionAreas = [
  {
    icon: Baby,
    title: "Infancia y desarrollo emocional",
    description:
      "Acompaño a niños que presentan dificultades emocionales, conductuales o de adaptación, promoviendo habilidades que favorezcan su bienestar y desarrollo integral.",
    topics: [
      "Manejo emocional",
      "Conductas desafiantes",
      "Adaptación escolar",
      "Habilidades sociales",
      "Separación de los padres",
    ],
  },
  {
    icon: UserRound,
    title: "Adolescencia y bienestar emocional",
    description:
      "Un espacio seguro para abordar los desafíos propios de la adolescencia, fortaleciendo la autoestima, la regulación emocional y la construcción de una identidad saludable.",
    topics: [
      "Ansiedad y estrés",
      "Autoestima",
      "Relaciones sociales",
      "Regulación emocional",
      "Proyecto de vida",
    ],
  },
  {
    icon: Users,
    title: "Orientación y acompañamiento familiar",
    description:
      "Trabajo con padres y cuidadores para fortalecer la comunicación, establecer límites saludables y construir relaciones familiares más positivas.",
    topics: [
      "Crianza positiva",
      "Límites y normas",
      "Conflictos familiares",
      "Comunicación familiar",
      "Fortalecimiento de vínculos",
    ],
  },
];

function InterventionCard({
  icon: Icon,
  title,
  description,
  topics,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  topics: string[];
}) {
  return (
    <div className="card-style-two vstack tran3s w-100 mt-30 h-100">
      <FeatureIcon icon={Icon} size={24} className="mb-3" />
      <h4 className="fw-bold mb-20">{title}</h4>
      <p className="mb-25">{description}</p>
      <p className="fw-semibold small mb-2">Temas frecuentes:</p>
      <ul className="style-none ps-0 mb-0 flex-grow-1">
        {topics.map((topic) => (
          <li key={topic} className="d-flex align-items-start gap-2 mb-2 small">
            <Check className="text-lime-500 flex-shrink-0 mt-1" size={14} strokeWidth={2.5} />
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const TextFeatureOne = () => {
  return (
    <section className="text-feature-one mt-150 lg-mt-100 pb-100 lg-pb-60">
      <div className="container">
        <div className="row mb-50 lg-mb-30">
          <div className="col-lg-8">
            <div className="title-one">
              <div className="upper-title">Áreas de intervención</div>
              <h2>¿En qué puedo ayudarte?</h2>
            </div>
            <p className="text-lg mt-30 mb-30">
              Cada niño, adolescente y familia vive desafíos únicos. En la
              primera sesión exploraremos tus necesidades y definiremos juntos un
              plan de trabajo claro, personalizado y basado en evidencia.
            </p>
            <SectionLink
              section={SECTIONS.contacto}
              className="btn-four icon-link d-inline-flex align-items-center gap-2"
            >
              <span>Agenda una primera consulta</span>
              <ArrowRight size={16} />
            </SectionLink>
          </div>
        </div>

        <div className="row justify-content-center">
          {interventionAreas.map((area, i) => (
            <div
              key={area.title}
              className="col-lg-4 col-md-6 d-flex wow fadeInUp"
              data-wow-delay={`0.${i + 1}s`}
            >
              <InterventionCard
                icon={area.icon}
                title={area.title}
                description={area.description}
                topics={area.topics}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextFeatureOne;
