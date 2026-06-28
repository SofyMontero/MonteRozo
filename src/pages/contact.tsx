import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import ContactArea from "../components/contact/contact-area";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";

export default function ContactPage() {
  return (
    <Wrapper>
      <SEOCom
        title="Contacto"
        description="Agenda tu cita con el Dr. Montero Rozo. Terapia psicológica 100% virtual. Consulta inicial sin compromiso."
        url="https://monterorozo.com/contacto"
      />

      <div className="main-page-wrapper">
        <Header />
        <main>
          <BreadcrumbOne
            title="Reserva tu cita"
            subtitle="Completa el formulario o escríbeme directamente. Respondo en menos de 24 horas."
            page="Contacto"
            shape="/assets/images/shape/shape_26.svg"
          />
          <ContactArea />
          <NewsletterBanner />
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
}
