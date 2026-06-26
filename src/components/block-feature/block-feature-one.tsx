import { Video, MessageCircle } from "lucide-react";

function UpperCardItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-one d-flex w-100 mb-35">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        {icon}
      </div>
      <div className="text ps-4">
        <h4 className="fw-bold">{title}</h4>
        <p className="pe-xl-4">{subtitle}</p>
      </div>
    </div>
  );
}

function DifferentialCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-style-two vstack tran3s w-100 mt-30 h-100 p-4">
      <span className="fs-2 mb-3" role="img" aria-hidden="true">
        {emoji}
      </span>
      <h4 className="fw-bold mb-25">{title}</h4>
      <p className="mb-0">{description}</p>
    </div>
  );
}

const differentials = [
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Especialista en infancia, adolescencia y familias",
    description:
      "Acompañamiento adaptado a las necesidades de cada etapa del desarrollo y al contexto familiar de cada consultante.",
  },
  {
    emoji: "🔬",
    title: "Enfoque basado en evidencia",
    description:
      "Intervenciones respaldadas científicamente y adaptadas a las características, objetivos y ritmo de cada proceso terapéutico.",
  },
  {
    emoji: "🤝",
    title: "Espacio seguro y confidencial",
    description:
      "Un entorno de escucha, respeto y confianza donde podrás expresar tus experiencias sin juicios y con total confidencialidad.",
  },
  {
    emoji: "🌱",
    title: "Herramientas para cambios duraderos",
    description:
      "Más allá de la consulta, trabajaremos estrategias prácticas que favorezcan el bienestar emocional y el fortalecimiento de los vínculos familiares.",
  },
];

const BlockFeatureOne = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <div
      className={`block-feature-one position-relative ${style_2 ? "light-bg-deep mt-150 lg-mt-80 pt-120 lg-pt-60 pb-130 lg-pb-60" : "pt-75 pb-100 lg-pb-60"}`}
    >
      {!style_2 && (
        <div className="upper-wrapper mb-110 lg-mb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 wow fadeInUp">
                <UpperCardItem
                  icon={<Video className="text-lime-500" size={28} />}
                  title="Atención Virtual"
                  subtitle="Sesiones de psicología clínica para niños, adolescentes y familias, desde cualquier lugar, con la misma confidencialidad y calidad de la atención presencial."
                />
              </div>
              <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                <UpperCardItem
                  icon={<MessageCircle className="text-lime-500" size={28} />}
                  title="Primera consulta"
                  subtitle="Un primer encuentro para comprender tu situación, resolver inquietudes y definir el mejor camino de acompañamiento según tus necesidades."
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
                <div className="upper-title">Diferenciales profesionales</div>
                <h2>¿Por qué elegir este acompañamiento?</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {differentials.map((item, i) => (
              <div
                key={item.title}
                className="col-lg-6 col-md-6 d-flex wow fadeInUp"
                data-wow-delay={`0.${i + 1}s`}
              >
                <DifferentialCard
                  emoji={item.emoji}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureOne;
