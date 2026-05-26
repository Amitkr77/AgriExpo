/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://srigreen.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Optional: exclude private routes
  exclude: ['/admin/*', '/dashboard/private'],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/admin', '/dashboard/private'],
      },
    ],
  },
};