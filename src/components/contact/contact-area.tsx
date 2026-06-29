import type { LucideIcon } from "lucide-react";
import { Mail, Phone, Video } from "lucide-react";
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
        <FeatureIcon icon={Icon} size={32} className="address-block-one__icon" />
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
                    icon={Phone}
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
        </div>
      </div>
    </div>
  );
};

export default ContactArea;
