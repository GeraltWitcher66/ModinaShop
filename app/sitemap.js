import { categories, products } from '@/lib/store-data';
import { absoluteUrl } from '@/lib/site';

export const dynamic = 'force-static';

const pages = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/shop/', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/size-guide/', changeFrequency: 'monthly', priority: 0.5 },
  ...categories.map((category) => ({
    path: `/category/${category.slug}/`,
    changeFrequency: 'weekly',
    priority: 0.8,
  })),
  ...products.map((product) => ({
    path: `/product/${product.slug}/`,
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: product.addedAt,
    images: [absoluteUrl(product.image)],
  })),
];

export default function sitemap() {
  return pages.map(({ path, lastModified, ...rest }) => ({
    url: absoluteUrl(path),
    ...(lastModified ? { lastModified } : {}),
    ...rest,
  }));
}
