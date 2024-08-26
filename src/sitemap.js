import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const routes = [
  '/',
  '/home',
  '/construction',
  '/commercial-interior-designs',
  '/overview-home-interiors',
  '/modular-kitchen',
  '/living-room-hall',
  '/false-ceiling',
  '/cupboard-wardrobes',
  '/dining-room',
  '/toilet-bathroom',
  '/tv-show-case',
  '/study-room',
  '/pooja-room',
  '/bedroom',
  '/multi-turf-construction',
  '/painting-services',
  '/renovation-services',
  '/about-us',
  '/contact-us',
  '/privacy-policy',
  '/faq',
  '/blog-post',
  '/blog-post/top-10-construction-companies-in-chennai',
  '/blog-post/top-10-interior-designing-companies-in-chennai',
  '/blog-post/top-10-turf-construction-companies-in-chennai',
  '/blog-post/top-10-home-renovation-companies-in-chennai',
  '/blog-post/top-10-painting-services-companies-in-chennai',
];

const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: 'https://infratechbuilders.in/' }); 

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
