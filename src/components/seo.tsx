import { Helmet } from "react-helmet-async";

type IProps = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
};

const SEOCom = ({
  title,
  description = "Psicóloga clínica en Bogotá. Terapia para ansiedad, estrés, autoestima y relaciones. Sesiones presenciales y online con la Dra. Montero Rozo.",
  keywords = "psicóloga, terapia, ansiedad, salud mental, psicología clínica, terapia online, Bogotá, Montero Rozo",
  image = "/assets/images/logo/logomr.jpeg",
  url = "https://monterorozo.com",
}: IProps) => {
  const fullTitle = `${title} | Psicóloga Clínica — Terapia presencial y online`;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOCom;
