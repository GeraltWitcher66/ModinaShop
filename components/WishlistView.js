'use client';

import Link from 'next/link';
import ProductCard from './ProductCard';
import { useWishlist } from './WishlistProvider';
import { getProduct } from '@/lib/store-data';
import { formatNumber } from '@/lib/format';

export default function WishlistView() {
  const { items, mounted, clear } = useWishlist();

  if (!mounted) {
    return <div className="cart-loading" aria-hidden="true" />;
  }

  const saved = items.map(getProduct).filter(Boolean);

  if (saved.length === 0) {
    return (
      <div className="empty-cart">
        <p className="eyebrow">علاقه‌مندی‌ها</p>
        <h1>هنوز چیزی ذخیره نکرده‌اید</h1>
        <p className="empty-copy">
          با زدن قلب روی هر قطعه، آن را برای بعد نگه دارید. فهرست شما فقط در همین
          مرورگر ذخیره می‌شود و به حساب کاربری نیاز ندارد.
        </p>
        <Link href="/shop" className="btn btn--dark">
          دیدن کلکسیون
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="cart-items-head wishlist-head">
        <span>{formatNumber(saved.length)} قطعه ذخیره‌شده</span>
        <button type="button" className="text-button" onClick={clear}>
          پاک کردن فهرست
        </button>
      </div>

      <div className="product-grid">
        {saved.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
