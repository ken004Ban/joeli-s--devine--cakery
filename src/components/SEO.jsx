import { Helmet } from 'react-helmet-async';

const SITE_NAME = "JOELi's DEVINE CAKERY";
const DEFAULT_DESC = "Zambia's premier patisserie crafting custom celebration cakes with premium ingredients. Wedding cakes, birthday cakes & custom masterpieces — baked fresh daily.";
const DEFAULT_IMAGE = "https://joelisdevine.com/images/cakes/golden-bloom-tier.png";

const SEO = ({ title, description, path, image, type = "website" }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Baked with Love`;
  const desc = description || DEFAULT_DESC;
  const url = `https://joelisdevine.com${path || '/'}`;
  const ogImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
