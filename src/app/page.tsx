import Hero from './(Home)/Hero';
import Marquee from '@/components/Marquee';
import Works from './(Home)/Works';
import { Metadata } from 'next';

// Image imports
const defaultSocialCardImage = '/default_social_card.jpg';

// SEO
const SEO_NAME = 'Sean Donny';
const SEO_TITLE = 'Home';
const SEO_DESCRIPTION =
  'Discover the captivating art of Sean Donny, a contemporary artist in England, UK. Explore his portfolio of personal & client projects, and gallery.';
const SEO_TYPE = 'website';
const SEO_URL = 'https://seandonny.com';
const SEO_IMAGE = defaultSocialCardImage;
const SEO_IMAGE_ALT =
  'An illustration of Cruel Santino against an orange background';

export const metadata: Metadata = {
  metadataBase: new URL('https://seandonny.com'),
  title: {
    default: SEO_NAME,
    template: `%s | ${SEO_NAME}`,
  },
  description: SEO_DESCRIPTION,
  authors: [{ name: SEO_NAME }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SEO_URL,
    siteName: SEO_NAME,
    images: [
      {
        url: `https://seandonny.com/optimised${SEO_IMAGE}`, // Must be an absolute URL TODO = remove optised when fully migrated to resolve image served on new public location
        width: 1200,
        height: 628,
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
    images: [`https://seandonny.com/optimised${SEO_IMAGE}`], // Must be an absolute URL
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

const Home = () => {
  return (
    <main>
      <article>
        <Hero />
      </article>
      <section>
        <Marquee />
      </section>
      <article>
        <Works />
      </article>
    </main>
  );
};

export default Home;
