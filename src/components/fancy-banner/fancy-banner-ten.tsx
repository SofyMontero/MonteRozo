const credentials = [
  "Colegio Colombiano de Psicólogos",
  "Terapia cognitivo-conductual",
  "Intervención en crisis emocionales",
  "Videoterapia certificada",
];

const FancyBannerTen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="partner-logo-one pt-60 md-pt-50 pb-60">
            <p className="fw-500 text-dark mb-40 text-center">
              <span className="text-decoration-underline">Formación</span> y
              credenciales profesionales
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {credentials.map((item) => (
                <span
                  key={item}
                  className="badge bg-light text-dark border px-4 py-3 fs-6 fw-normal"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerTen;
