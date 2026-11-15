'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartProvider';
import WishlistButton from './WishlistButton';
import { formatNumber } from '@/lib/format';
import { defaultSize, getCategory } from '@/lib/store-data';

const basePath = '/ModinaShop';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const category = getCategory(product.category);

  const handleQuickAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      size: defaultSize(product),
      qty: 1,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="product-card">
      <div className="product-media">
        <Link href={`/product/${product.slug}`} aria-label={product.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}${product.image}`}
            alt={`${product.name} — ${category.name}`}
            width="900"
            height="1125"
            loading="lazy"
          />
        </Link>
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <WishlistButton slug={product.slug} className="product-wish" />
        <button
          type="button"
          className={`quick-add${added ? ' is-added' : ''}`}
          onClick={handleQuickAdd}
        >
          {added ? 'به سبد اضافه شد ✓' : 'افزودن سریع'}
        </button>
      </div>

      <div className="product-info">
        <Link href={`/product/${product.slug}`} className="product-name">
          {product.name}
        </Link>
        <span className="product-category">{category.name}</span>
        <p className="product-price">
          {product.oldPrice ? (
            <span className="price-old">{formatNumber(product.oldPrice)}</span>
          ) : null}
          <span className="price-current">
            {formatNumber(product.price)}
            <span className="currency">تومان</span>
          </span>
        </p>
      </div>
    </article>
  );
}
