'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from './CartProvider';
import { formatNumber } from '@/lib/format';
import { TrashIcon } from './Icons';

const basePath = '/ModinaShop';
const FREE_SHIPPING_MIN = 2500000;
const SHIPPING_COST = 95000;

export default function CartView() {
  const { items, mounted, subtotal, updateQty, removeItem, clearCart } = useCart();
  const [notice, setNotice] = useState(false);

  if (!mounted) {
    return <div className="cart-loading" aria-hidden="true" />;
  }

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <p className="eyebrow">سبد خرید</p>
        <h1>سبد شما خالی است</h1>
        <p className="empty-copy">
          هنوز قطعه‌ای انتخاب نکرده‌اید. از کلکسیون تازه شروع کنید؛ برای هر سلیقه
          چیزی هست.
        </p>
        <Link href="/shop" className="btn btn--dark">
          دیدن کلکسیون
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= FREE_SHIPPING_MIN ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  return (
    <div className="cart-layout">
      <div>
        <div className="cart-items-head">
          <span>{formatNumber(items.length)} قطعه در سبد</span>
          <button type="button" className="text-button" onClick={clearCart}>
            خالی کردن سبد
          </button>
        </div>

        {items.map((item) => (
          <article className="cart-item" key={`${item.slug}-${item.size}`}>
            <Link href={`/product/${item.slug}`} className="cart-item-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}${item.image}`}
                alt={item.name}
                width="180"
                height="225"
              />
            </Link>
            <div className="cart-item-info">
              <Link href={`/product/${item.slug}`} className="cart-item-name">
                {item.name}
              </Link>
              <span className="cart-item-meta">سایز {item.size}</span>
              <button
                type="button"
                className="remove-button"
                onClick={() => removeItem(item.slug, item.size)}
              >
                <TrashIcon />
                حذف
              </button>
            </div>
            <div className="qty-stepper qty-stepper--small">
              <button
                type="button"
                onClick={() => updateQty(item.slug, item.size, item.qty - 1)}
                aria-label="کاهش تعداد"
              >
                −
              </button>
              <span>{formatNumber(item.qty)}</span>
              <button
                type="button"
                onClick={() => updateQty(item.slug, item.size, item.qty + 1)}
                aria-label="افزایش تعداد"
              >
                +
              </button>
            </div>
            <p className="cart-item-price">
              {formatNumber(item.price * item.qty)}
              <span className="currency">تومان</span>
            </p>
          </article>
        ))}
      </div>

      <aside className="cart-summary">
        <h2>خلاصهٔ سفارش</h2>
        <div className="summary-row">
          <span>جمع کالاها</span>
          <span>{formatNumber(subtotal)} تومان</span>
        </div>
        <div className="summary-row">
          <span>ارسال</span>
          <span>{shipping === 0 ? 'رایگان' : `${formatNumber(shipping)} تومان`}</span>
        </div>
        {shipping > 0 && (
          <p className="summary-hint">
            {formatNumber(FREE_SHIPPING_MIN - subtotal)} تومان تا ارسال رایگان
          </p>
        )}
        <div className="summary-row summary-total">
          <span>مبلغ قابل پرداخت</span>
          <span>{formatNumber(total)} تومان</span>
        </div>
        <button
          type="button"
          className="btn btn--dark summary-cta"
          onClick={() => setNotice(true)}
        >
          تکمیل سفارش
        </button>
        {notice && (
          <p className="demo-notice">
            این نسخه یک قالب نمایشی است و درگاه پرداخت به آن متصل نیست. برای
            اتصال فروشگاه به درگاه، کافی است این دکمه را به سرویس پرداخت خود
            وصل کنید.
          </p>
        )}
        <ul className="summary-notes">
          <li>پرداخت امن و رمزنگاری‌شده</li>
          <li>هفت روز مهلت تعویض یا بازگشت</li>
          <li>بسته‌بندی هدیهٔ رایگان</li>
        </ul>
      </aside>
    </div>
  );
}
