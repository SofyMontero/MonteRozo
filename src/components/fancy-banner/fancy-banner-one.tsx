const FancyBannerOne = () => {
  return (
    <div className="fancy-banner-one position-relative pt-30 md-pt-20 pb-40 md-pb-20 bg-white">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="ps-xl-3 pe-xxl-3">
              <h3 className="fw-bold mb-1">Presencial</h3>
              <p className="text-md m0">Consultorio en Bogotá, ambiente acogedor y confidencial</p>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="ps-xl-3 pe-xxl-3 border-start border-end border-md">
              <h3 className="fw-bold mb-1">Online</h3>
              <p className="text-md m0">Videoterapia segura desde donde te sientas cómodo/a</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="ps-xl-3 pe-xxl-3">
              <h3 className="fw-bold mb-1">Primera consulta</h3>
              <p className="text-md m0">Orientación gratuita de 15 min para resolver tus dudas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerOne;
