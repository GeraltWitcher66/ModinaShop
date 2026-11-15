import { siteBase, siteHost } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/ModinaShop/cart/', '/ModinaShop/wishlist/'],
      },
    ],
    sitemap: `${siteBase}/sitemap.xml`,
    host: siteHost,
  };
}
