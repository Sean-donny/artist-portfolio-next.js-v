import SEO from '@/components/SEO/SEO';
import { Metadata } from 'next';

// Image imports
const seoImage = '/sean_donny_animated_character_turnaround_sheet.jpg';

// SEO
const SEO_NAME = 'Sean Donny';
const SEO_TITLE = 'Personal Projects';
const SEO_DESCRIPTION =
  'Explore a curated selection of personal projects by contemporary artist Sean Donny, showcasing his creative range.';
const SEO_TYPE = 'website';
const SEO_URL = 'https://seandonny.com/personal-projects';
const SEO_SUBDIRECTORY = 'personal-projects';
const SEO_IMAGE = seoImage;
const SEO_IMAGE_WIDTH = 1920;
const SEO_IMAGE_HEIGHT = 1080;
const SEO_IMAGE_ALT = 'A character design sheet of Sean Donny';

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
