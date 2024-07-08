import { Metadata } from 'next';

type SEOProps = {
  SEO_NAME: string;
  SEO_TITLE: string;
  SEO_DESCRIPTION: string;
  SEO_TYPE: 'website' | 'article';
  SEO_URL: string;
  SEO_SUBDIRECTORY: string;
  SEO_IMAGE: string;
  SEO_IMAGE_WIDTH: number;
  SEO_IMAGE_HEIGHT: number;
  SEO_IMAGE_ALT: string;
};

const SEO = ({
  SEO_NAME,
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_TYPE,
  SEO_URL,
  SEO_SUBDIRECTORY,
  SEO_IMAGE,
  SEO_IMAGE_WIDTH,
  SEO_IMAGE_HEIGHT,
  SEO_IMAGE_ALT,
}: SEOProps): Metadata => {
  return {
    metadataBase: new URL('https://seandonny.com'),
    title: {
      default: SEO_TITLE,
      template: `%s | ${SEO_NAME}`,
    },
    description: SEO_DESCRIPTION,
    authors: [{ name: SEO_NAME }],
    alternates: {
      canonical: SEO_SUBDIRECTORY,
    },
    openGraph: {
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      url: SEO_URL,
      siteName: SEO_NAME,
      images: [
        {
          url: `${SEO_URL}${SEO_IMAGE}`, // Must be an absolute URL
          width: SEO_IMAGE_WIDTH,
          height: SEO_IMAGE_HEIGHT,
          alt: SEO_IMAGE_ALT,
        },
      ],
      locale: 'en_GB',
      type: SEO_TYPE,
    },
    twitter: {
      card: 'summary_large_image',
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      creator: '@blvvvckfire',
      images: [`${SEO_URL}${SEO_IMAGE}`], // Must be an absolute URL
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-icon.png',
    },
  };
};

export default SEO;
