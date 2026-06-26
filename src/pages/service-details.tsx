import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import BlockFeatureTen from "@/components/block-feature/block-feature-ten";
import FancyBannerSix from "@/components/fancy-banner/fancy-banner-six";
import FaqSectionOne from "@/components/faq/faq-section-one";
import FancyBannerTen from "@/components/fancy-banner/fancy-banner-ten";
import TextFeatureFive from "@/components/text-feature/text-feature-five";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";

export default function ServiceDetailsPage() {
  return (
    <Wrapper>
      <SEOCom
        title="Servicios de psicología clínica"
        description="Terapia individual, de pareja y online. Ansiedad, estrés, autoestima y más. Dra. Montero Rozo, psicóloga clínica en Bogotá."
        url="https://monterorozo.com/servicios-factoring"
      />

      <div className="main-page-wrapper">
        <Header />
        <main>
          <BreadcrumbOne
            title="Servicios terapéuticos"
            subtitle="Intervención personalizada para ansiedad, estrés, autoestima, relaciones y bienestar emocional."
            page="Servicios"
            shape="/assets/images/shape/shape_25.svg"
            bg_img="/assets/images/media/img_33.jpg"
            style_2={true}
            cls="me-xl-4"
          />
          <TextFeatureFive />
          <BlockFeatureTen />
          <FancyBannerSix />
          <FancyBannerTen />
          <FaqSectionOne />
          <FancyBannerThree />
          <NewsletterBanner />
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
}
