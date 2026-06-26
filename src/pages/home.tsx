import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BlockFeatureOne from "../components/block-feature/block-feature-one";
import BlockFeatureTwo from "../components/block-feature/block-feature-two";
import ContactArea from "../components/contact/contact-area";
import FancyBannerOne from "../components/fancy-banner/fancy-banner-one";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";
import FaqSectionOne from "../components/faq/faq-section-one";
import HeroBannerTwo from "../components/hero-banner/hero-banner-2";
import TextFeatureOne from "../components/text-feature/text-feature-one";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import { SECTIONS } from "@/data/sections";

export default function Home() {
  return (
    <Wrapper>
      <SEOCom title="MonteRozo Psicología" url="https://monterorozo.com/" />

      <div className="main-page-wrapper">
        <Header />

        <main>
          <section id={SECTIONS.inicio}>
            <HeroBannerTwo />
          </section>

          <section id={SECTIONS.honorarios}>
            <FancyBannerOne />
          </section>

          <section id={SECTIONS.enfoque}>
            <BlockFeatureOne />
          </section>

          <section id={SECTIONS.servicios}>
            <TextFeatureOne />
          </section>

          <section id={SECTIONS.comoFunciona}>
            <BlockFeatureTwo />
          </section>

          <FancyBannerTwo />

          <section id={SECTIONS.preguntas}>
            <FaqSectionOne />
          </section>

          <section id={SECTIONS.contacto}>
            <ContactArea />
          </section>
        </main>

        <Footer />
      </div>
    </Wrapper>
  );
}
