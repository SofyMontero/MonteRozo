import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BlockFeatureOne from "../components/block-feature/block-feature-one";
import BlockFeatureThree from "../components/block-feature/block-feature-three";
import BlockFeatureTwo from "../components/block-feature/block-feature-two";
import HomeTwoBlogs from "../components/blogs/home-2-blogs";
import FancyBannerOne from "../components/fancy-banner/fancy-banner-one";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";
import FaqSectionOne from "../components/faq/faq-section-one";
import HeroBannerTwo from "../components/hero-banner/hero-banner-2";
import TextFeatureOne from "../components/text-feature/text-feature-one";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import TextFeatureNine from "@/components/text-feature/text-feature-nine";
import FancyBannerNine from "@/components/fancy-banner/fancy-banner-nine";

export default function Home() {
  return (
    <Wrapper>
      <SEOCom
        title="Dra. Montero Rozo"
        url="https://monterorozo.com/"
      />

      <div className="main-page-wrapper">
        <Header />
        <main>
          <HeroBannerTwo />
          <FancyBannerOne />
          <BlockFeatureOne />
          <TextFeatureOne />
          <BlockFeatureTwo />
          <BlockFeatureThree />
          <FancyBannerNine />
          <TextFeatureNine />
          <FaqSectionOne />
          <HomeTwoBlogs />
          <FancyBannerTwo />
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
}
