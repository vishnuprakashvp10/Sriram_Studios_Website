import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const routes = [
  '/',
  '/home',
  '/construction',
  '/film-camera-units',
  '/multi-camera-setup',
  '/green-matte-studio',
  '/editing-suites',
  '/dubbing-studios',
  '/audio-mixing',
  '/teleprompters',
  '/lights-and-grips',
  '/lens-filters',
  '/camera-lenses',
  '/genset-rentals',
  '/about-us',
  '/contact-us',
  '/privacy-policy',
  '/faq',
];

const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: 'https://sriramstudios.com/' }); 

  routes.forEach((route) => {
    stream.write({ url: route, changefreq: 'weekly', lastmod: new Date().toISOString() });
  });

  stream.end();

  const sitemap = await streamToPromise(stream);
  const filePath = './sitemap.xml'; 
  const writeStream = createWriteStream(filePath);

  writeStream.write(sitemap.toString());
  console.log('Sitemap generated successfully!');
};

generateSitemap();
