import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '3nvrbva8',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-11-24',
});

const builder = imageUrlBuilder(client);
export const urlFor = source => builder.image(source);

export default client;
