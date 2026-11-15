import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductPurchase from '@/components/ProductPurchase';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductJsonLd from '@/components/ProductJsonLd';
import {
  getCategory,
  getProduct,
  products,
  relatedProducts,
} from '@/lib/store-data';
import { productUrl } from '@/lib/site';

const basePath = '/ModinaShop';

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: productUrl(product.slug) },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <>
      <ProductJsonLd product={product} category={category} />

      <div className="container">
        <div className="pdp-breadcrumb">
          <Breadcrumbs
            items={[
              { label: 'خانه', href: '/' },
              { label: category.name, href: `/category/${category.slug}` },
              { label: product.name },
            ]}
          />
        </div>

        <div className="pdp">
          <div className="pdp-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}${product.image}`}
              alt={`${product.name} — ${category.name}`}
              width="900"
              height="1125"
              fetchPriority="high"
            />
          </div>

          <div className="pdp-details">
            <span className="pdp-cat">
              {category.name} / {category.latin}
            </span>
            <h1>{product.name}</h1>
            <p className="pdp-desc">{product.description}</p>
            <ProductPurchase product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section section--related">
          <div className="container">
            <div className="section-head">
              <div className="section-head-main">
                <p className="section-index">شاید بپسندید</p>
                <h2 className="section-title">هم‌خانواده‌های این قطعه</h2>
              </div>
              <Link href={`/category/${category.slug}`} className="link-more">
                همهٔ {category.name} ←
              </Link>
            </div>
            <div className="product-grid">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
