import React from 'react';
import SEO from '../../../components/SEO/SEO';
import { Metadata } from 'next';

// Image imports
const seoImage = '/cruel_santino_subaru_boy_wide.jpg';

// SEO
const SEO_NAME = 'Sean Donny';
const SEO_TITLE = 'Subaru Boy | Personal Projects';
const SEO_DESCRIPTION =
  'Explore a collection of Cruel Santino inspired works by contemporary artist Sean Donny, showcasing his character design skills.';
const SEO_TYPE = 'article';
const SEO_URL = 'https://seandonny.com/personal-projects/subaru-boy';
const SEO_SUBDIRECTORY = 'personal-projects/subaru-boy';
const SEO_IMAGE = seoImage;
const SEO_IMAGE_WIDTH = 1920;
const SEO_IMAGE_HEIGHT = 1080;
const SEO_IMAGE_ALT =
  'An illustation of Cruel Santino against an orange background with writing';

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
