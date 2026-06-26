import { Check, Video } from "lucide-react";

const plans = [
  {
    title: "Sesión individual",
    price: "$85.000",
    savings: null,
  },
  {
    title: "Plan mensual",
    subtitle: "4 sesiones",
    price: "$320.000",
    savings: "Ahorra $20.000",
  },
  {
    title: "Plan de seguimiento",
    subtitle: "8 sesiones",
    price: "$620.000",
    savings: "Ahorra $60.000",
  },
  {
    title: "Plan integral",
    subtitle: "12 sesiones",
    price: "$900.000",
    savings: "Ahorra $120.000",
  },
];

const importantInfo = [
  "Sesiones de 50 a 60 minutos.",
  "Atención virtual mediante plataforma segura.",
  "Horarios sujetos a disponibilidad.",
  "Los planes deben utilizarse dentro del período acordado.",
];

const FancyBannerOne = () => {
  return (
    <section className="honorarios-section position-relative pt-100 pb-100 lg-pt-60 lg-pb-60 bg-white">
      <div className="container">
        <div className="row justify-content-center mb-50 lg-mb-30">
          <div className="col-lg-8 text-center">
            <div className="title-one">
              <h2>Honorarios</h2>
            </div>
            <p className="text-lg mt-30 mb-15">
              Atención psicológica virtual para niños, adolescentes y familias.
            </p>
            <p className="text-lg mb-0">
              Un espacio profesional, seguro y confidencial para acompañar tu
              proceso de bienestar emocional.
            </p>
            <div className="d-inline-flex align-items-center gap-2 mt-30 px-3 py-2 rounded-pill bg-lime-50 border border-lime-100">
              <Video className="text-lime-500 flex-shrink-0" size={18} />
              <span className="fw-semibold small">Modalidad Virtual</span>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-50 lg-mb-30">
          {plans.map((plan) => (
            <div key={plan.title} className="col-lg-3 col-md-6">
              <div className="h-100 p-4 rounded-4 bg-light border border-light-subtle">
                <h3 className="h5 fw-bold mb-1">{plan.title}</h3>
                {plan.subtitle && (
                  <p className="text-muted small mb-3">{plan.subtitle}</p>
                )}
                {!plan.subtitle && <div className="mb-3" />}
                <p className="display-6 fw-bold text-lime-500 mb-2">
                  {plan.price}
                </p>
                {plan.savings && (
                  <span className="badge bg-lime-500 bg-opacity-10 text-lime-500 fw-medium">
                    {plan.savings}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-4 p-md-5 rounded-4 border border-light-subtle bg-light">
              <h3 className="h5 fw-bold mb-4">Información importante</h3>
              <ul className="list-unstyled m-0 d-flex flex-column gap-3">
                {importantInfo.map((item) => (
                  <li key={item} className="d-flex align-items-start gap-2">
                    <Check
                      className="text-lime-500 flex-shrink-0 mt-1"
                      size={18}
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FancyBannerOne;
