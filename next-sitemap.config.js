/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aeolinavillas.com', // your domain
  generateRobotsTxt: true,              // also generates robots.txt
  outDir: './public',                   // place generated files into /public
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
};
