import ContactForm from "../forms/contact-form";

function AddressBlock({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40 wow fadeInUp">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <img src={icon} alt="" className="lazy-img" />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const ContactArea = () => {
  return (
    <div className="contact-us-section pt-150 lg-pt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="row">
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_90.svg"
                    title="Consultorio"
                    subtitle="Calle 93 # 11-30, Consultorio 402 <br/>Chicó, Bogotá"
                  />
                </div>
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_91.svg"
                    title="Teléfono y WhatsApp"
                    subtitle='+57 300 700 0000 <br/><a href="https://wa.me/573007000000" className="call text-lg fw-500">Escríbeme por WhatsApp</a>'
                  />
                </div>
                <div className="col-md-4">
                  <AddressBlock
                    icon="/assets/images/icon/icon_92.svg"
                    title="Correo electrónico"
                    subtitle='contacto@monterorozo.com <br/><a href="mailto:contacto@monterorozo.com" className="webaddress">contacto@monterorozo.com</a>'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-wrapper light-bg mt-80 lg-mt-40">
            <div className="row">
              <div className="col-lg-5">
                <div className="d-flex flex-column flex-lg-column-reverse">
                  <div className="row">
                    <div className="col-md-8 col-6 me-auto ms-auto">
                      <img
                        src="/assets/images/assets/ils_07.svg"
                        alt=""
                        className="lazy-img me-auto ms-auto"
                      />
                    </div>
                  </div>
                  <div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
                    <h2>¿Quieres reservar tu cita? Escríbeme</h2>
                    <p className="text-lg mt-3">
                      Respondo en menos de 24 horas. Tu información es
                      confidencial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-style-one ps-xl-5">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
