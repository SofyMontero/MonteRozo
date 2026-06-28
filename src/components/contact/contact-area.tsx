import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Mail, MessageCircle, Video } from "lucide-react";
import ContactForm from "../forms/contact-form";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  WHATSAPP_PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/data/contact-config";
import { FeatureIcon } from "@/components/ui/feature-icon";

function AddressBlock({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="address-block-one text-center mb-40 wow fadeInUp">
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <FeatureIcon icon={Icon} size={28} />
      </div>
      <h5 className="title">{title}</h5>
      <p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
    </div>
  );
}

const ContactArea = () => {
  return (
    <div className="contact-us-section pt-100 lg-pt-80 pb-80 lg-pb-60">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <AddressBlock
                    icon={Video}
                    title="Atención virtual"
                    subtitle="Sesiones por videollamada segura <br/>Desde cualquier lugar de Colombia"
                  />
                </div>
                <div className="col-sm-6 col-lg-4">
                  <AddressBlock
                    icon={MessageCircle}
                    title="Teléfono y WhatsApp"
                    subtitle={`${WHATSAPP_PHONE_DISPLAY} <br/><a href="${WHATSAPP_URL}" className="call text-lg fw-500" target="_blank" rel="noopener noreferrer">Escríbeme por WhatsApp</a>`}
                  />
                </div>
                <div className="col-sm-6 col-lg-4">
                  <AddressBlock
                    icon={Mail}
                    title="Correo electrónico"
                    subtitle={`${CONTACT_EMAIL} <br/><a href="${CONTACT_MAILTO}" className="webaddress">${CONTACT_EMAIL}</a>`}
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
                    <div className="col-10 col-md-8 mx-auto">
                      <img
                        src="/assets/images/assets/ils_07.svg"
                        alt=""
                        className="lazy-img me-auto ms-auto"
                      />
                    </div>
                  </div>
                  <div className="title-one text-center text-lg-start md-mt-20 mb-50 md-mb-30">
                    <h2>¿Quieres reservar tu cita? Escríbeme</h2>
                    <p className="text-lg mt-3">
                      Respondo en menos de 24 horas. Tu información es
                      confidencial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="form-style-one ps-xl-5 ps-lg-0">
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
