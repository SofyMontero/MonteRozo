const BlockFeatureTwo = () => {
  return (
    <div className="block-feature-two mt-80">
      <div className="container">
        <div className="wrapper">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                <img
                  src="/assets/images/icon/icon_10.svg"
                  alt=""
                  className="lazy-img icon"
                />
                <h4 className="fw-bold mt-40 sm-mt-20 mb-20">Mi enfoque</h4>
                <p>
                  Combino terapia cognitivo-conductual con un acompañamiento
                  humano y cercano. Mi objetivo es que entiendas lo que te
                  ocurre y desarrolles recursos para afrontarlo con autonomía.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="border-line h-100 ps-lg-5 pe-lg-5 ps-md-3 pe-md-3">
                <div className="card-style-three pt-45 md-pt-30 pb-35 sm-pb-30">
                  <img
                    src="/assets/images/icon/icon_11.svg"
                    alt=""
                    className="lazy-img icon"
                  />
                  <h4 className="fw-bold mt-40 sm-mt-20 mb-20">
                    Formación y experiencia
                  </h4>
                  <p>
                    Psicóloga clínica con especialización en salud mental y
                    intervención en crisis emocionales. Más de 8 años
                    acompañando a adultos en procesos de cambio personal y
                    relacional.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="ps-lg-5 sm-pb-30 sm-pt-30">
                <div className="numb fw-500">
                  <span className="counter">500</span>+
                </div>
                <p className="m0">
                  Personas acompañadas
                  <br /> con dedicación y ética.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureTwo;
