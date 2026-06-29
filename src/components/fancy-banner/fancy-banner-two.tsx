const testimonials = [
  {
    quote:
      "Buscábamos apoyo para nuestro hijo adolescente y encontramos un espacio donde se sintió escuchado. Hoy tenemos herramientas para acompañarlo y comunicarnos mejor en casa.",
    author: "Madre de familia",
  },
  {
    quote:
      "Al principio me costaba abrirme, pero la terapia virtual me resultó cómoda. Aprendí a manejar la ansiedad y a expresar lo que siento sin miedo a ser juzgado.",
    author: "Adolescente, 16 años",
  },
  {
    quote:
      "El acompañamiento nos ayudó como padres a entender mejor las necesidades emocionales de nuestra hija. Profesional, cercano y siempre respetuoso con nuestro ritmo.",
    author: "Padres de adolescente",
  },
];

const FancyBannerTwo = () => {
  return (
    <section className="testimonials-section mt-120 lg-mt-80 mb-120 lg-mb-60">
      <div className="container">
        <div className="text-center wow fadeInUp mb-80 lg-mb-50">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-one">
                <h2>Lo que dicen quienes confiaron en mí</h2>
              </div>
              <p className="text-lg mt-40 lg-mt-30 mb-0">
                Experiencias de familias y adolescentes, anonimizadas con
                consentimiento. Tu privacidad siempre es prioridad.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="card-style-two vstack tran3s w-100 h-100 p-4 p-md-5">
                <p className="mb-4 fst-italic">"{item.quote}"</p>
                <p className="fw-semibold mb-0 mt-auto">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FancyBannerTwo;
