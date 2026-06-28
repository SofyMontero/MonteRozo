const testimonials = [
  {
    quote:
      "Llegué con mucha ansiedad y sin saber por dónde empezar. Me sentí escuchada desde la primera sesión y hoy manejo mis emociones con mucha más calma.",
    author: "Paciente, 32 años",
  },
  {
    quote:
      "La terapia online fue perfecta para mi rutina. Profesional, cercana y siempre con un espacio seguro para hablar sin miedo.",
    author: "Paciente, 28 años",
  },
  {
    quote:
      "Trabajamos mi autoestima y mis relaciones. Noté cambios reales en pocas semanas y con herramientas que sigo usando.",
    author: "Paciente, 41 años",
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
                Testimonios anonimizados con consentimiento. Tu privacidad siempre
                es prioridad.
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
