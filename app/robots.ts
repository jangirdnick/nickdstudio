import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://nickdstudio.online';
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  };
}
