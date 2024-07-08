import SEO from '@/components/SEO/SEO';
import { Metadata } from 'next';

// Image imports
const seoImage = '/mf_doom_7ife_x_sean_donny.jpg';

// SEO
const SEO_NAME = 'Sean Donny';
const SEO_TITLE = 'Gallery';
const SEO_DESCRIPTION =
  'Explore a curated selection of works by contemporary artist Sean Donny, showcasing his creative range.';
const SEO_TYPE = 'website';
const SEO_URL = 'https://seandonny.com/gallery';
const SEO_SUBDIRECTORY = 'gallery';
const SEO_IMAGE = seoImage;
const SEO_IMAGE_WIDTH = 1694;
const SEO_IMAGE_HEIGHT = 1069;
const SEO_IMAGE_ALT =
  'An illustration of two MF Doom characters illustrated by 7ife and Sean Donny';

export const metadata: Metadata = SEO({
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
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
