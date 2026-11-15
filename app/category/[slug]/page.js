import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  categories,
  getCategory,
  productsByCategory,
} from '@/lib/store-data';
import { formatNumber } from '@/lib/format';
import { absoluteUrl } from '@/lib/site';

const basePath = '/ModinaShop';

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `پوشاک ${category.name}`,
    description: category.description,
    alternates: { canonical: absoluteUrl(`/category/${category.slug}/`) },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = productsByCategory(slug);

  return (
    <>
      <section className="category-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}${category.image}`}
          alt={`کمپین ${category.name} مُدینا`}
          width="900"
          height="1200"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container cat-hero-inner">
          <Breadcrumbs
            light
            items={[
              { label: 'خانه', href: '/' },
              { label: 'فروشگاه', href: '/shop' },
              { label: category.name },
            ]}
          />
          <h1>{`کلکسیون ${category.name}`}</h1>
          <p className="cat-hero-desc">{category.description}</p>
          <p className="cat-hero-count">
            {formatNumber(items.length)} قطعه — {category.tagline}
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="product-grid">
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="category-footer">
            <Link href="/shop" className="link-more">
              دیدن همهٔ کلکسیون ←
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
