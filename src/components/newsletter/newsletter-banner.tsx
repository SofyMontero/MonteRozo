const NewsletterBanner = ({ style_2 = false }: { style_2?: boolean }) => {
  return (
    <div className="newsletter-banner">
      <div className="container">
        <div
          className={`main-wrapper ${
            style_2 ? "" : "top-border"
          } bottom-border`}
        >
          <div className="row">
            <div className="col-lg-6">
              <h2 className={`${style_2 ? "" : "text-dark"} fw-bold`}>
                Suscríbete a nuestro boletín
              </h2>
              <p className="text-lg md-pb-20">
                Recibe las últimas noticias directamente en tu correo.
              </p>
            </div>
            <div className="col-lg-6">
              <form action="#" className="m-auto ms-lg-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <input type="email" placeholder="Ingresa tu correo electrónico" />
                  <button className="rounded-circle tran3s">
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
                <p className="text-center text-lg-end m0 pt-5">
                  ¿Ya estás suscrito?{" "}
                  <a href="#" className="text-dark fw-500">
                    Cancelar suscripción
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
