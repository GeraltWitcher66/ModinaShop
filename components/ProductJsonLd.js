import { absoluteUrl, productUrl } from '@/lib/site';

export default function ProductJsonLd({ product, category }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: absoluteUrl(product.image),
    sku: product.slug,
    category: category.name,
    brand: { '@type': 'Brand', name: 'مُدینا' },
    offers: {
      '@type': 'Offer',
      url: productUrl(product.slug),
      priceCurrency: 'IRR',
      // قیمت‌ها در فروشگاه به تومان است؛ اسکیمای Offer ریال می‌خواهد.
      price: product.price * 10,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'مُدینا' },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
