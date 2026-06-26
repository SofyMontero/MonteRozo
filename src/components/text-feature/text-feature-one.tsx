import { SectionLink } from "@/components/section-link";
import { SECTIONS } from "@/data/sections";

const interventionAreas = [
  {
    emoji: "👦",
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
    emoji: "🧑",
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
    emoji: "👨‍👩‍👧‍👦",
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
  emoji,
  title,
  description,
  topics,
}: {
  emoji: string;
  title: string;
  description: string;
  topics: string[];
}) {
  return (
    <div className="card-style-two vstack tran3s w-100 mt-30 h-100">
      <span className="fs-2 mb-3" role="img" aria-hidden="true">
        {emoji}
      </span>
      <h4 className="fw-bold mb-20">{title}</h4>
      <p className="mb-25">{description}</p>
      <p className="fw-semibold small mb-2">Temas frecuentes:</p>
      <ul className="style-none ps-0 mb-0 flex-grow-1">
        {topics.map((topic) => (
          <li key={topic} className="d-flex align-items-start gap-2 mb-2 small">
            <span className="text-lime-500 fw-bold">•</span>
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
            <SectionLink section={SECTIONS.contacto} className="btn-four icon-link">
              <span>Agenda una primera consulta</span>
              <img
                src="/assets/images/icon/icon_09.svg"
                alt=""
                className="lazy-img icon ms-1"
              />
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
                emoji={area.emoji}
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
