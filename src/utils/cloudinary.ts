import { Cloudinary } from '@cloudinary/url-gen';

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME;

if (!cloudName) {
  throw new Error('Cloudinary cloud name not found in environment variables.');
}

const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName,
  },
});

export default cld;
